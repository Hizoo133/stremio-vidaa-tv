#!/usr/bin/env node
/**
 * Deconstructs the built Theater 1.10.0 webpack bundles (app/main.js, app/video.chunk.js,
 * app/runtime.js, and app/*.chunk.js) into the human-navigable, multi-line formatted
 * `src/` module tree using esbuild AST pretty-printing.
 *
 * Usage:
 *   npm run deconstruct
 *   npm run build:src   (recompiles src/ into app/ and root)
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const appDir = join(root, 'app');
const srcDir = join(root, 'src');

function formatJs(code) {
  try {
    return esbuild.transformSync(code, { minify: false, target: 'es2020' }).code.trimEnd();
  } catch {
    return code;
  }
}

function sliceWebpackChunk(code) {
  const pushMatch = code.match(/\.push\(\s*\[\s*\[\d+\]\s*,\s*\{/);
  if (!pushMatch) throw new Error('Could not find webpackChunk push header');
  const mapOpenIdx = pushMatch.index + pushMatch[0].length - 1;

  let i = mapOpenIdx + 1;
  const len = code.length;
  const modules = [];

  function skipTriviaAndString(idx) {
    let depthBrace = 0;
    let depthParen = 0;
    let depthBracket = 0;
    let inSingle = false;
    let inDouble = false;
    let inTemplate = false;
    let inLineComment = false;
    let inBlockComment = false;
    let inRegex = false;
    let regexCharClass = false;
    let prevTokenEnd = '';

    for (let p = idx; p < len; p++) {
      const ch = code[p];
      const next = code[p + 1];

      if (inLineComment) {
        if (ch === '\n') inLineComment = false;
        continue;
      }
      if (inBlockComment) {
        if (ch === '*' && next === '/') { inBlockComment = false; p++; }
        continue;
      }
      if (inSingle) {
        if (ch === '\\') { p++; continue; }
        if (ch === "'") inSingle = false;
        continue;
      }
      if (inDouble) {
        if (ch === '\\') { p++; continue; }
        if (ch === '"') inDouble = false;
        continue;
      }
      if (inTemplate) {
        if (ch === '\\') { p++; continue; }
        if (ch === '`') inTemplate = false;
        continue;
      }
      if (inRegex) {
        if (ch === '\\') { p++; continue; }
        if (ch === '[') regexCharClass = true;
        else if (ch === ']') regexCharClass = false;
        else if (ch === '/' && !regexCharClass) inRegex = false;
        continue;
      }

      if (ch === '/' && next === '/') { inLineComment = true; p++; continue; }
      if (ch === '/' && next === '*') { inBlockComment = true; p++; continue; }
      if (ch === "'") { inSingle = true; continue; }
      if (ch === '"') { inDouble = true; continue; }
      if (ch === '`') { inTemplate = true; continue; }

      if (ch === '/' && '(,=:[!&|?+-*~^%<>};'.includes(prevTokenEnd)) {
        inRegex = true;
        regexCharClass = false;
        continue;
      }

      if (ch === '{') depthBrace++;
      else if (ch === '}') {
        if (depthBrace === 0 && depthParen === 0 && depthBracket === 0) return p;
        depthBrace--;
      } else if (ch === '(') depthParen++;
      else if (ch === ')') depthParen--;
      else if (ch === '[') depthBracket++;
      else if (ch === ']') depthBracket--;

      if (ch === ',' && depthBrace === 0 && depthParen === 0 && depthBracket === 0) {
        return p;
      }
      if (!/\s/.test(ch)) prevTokenEnd = ch;
    }
    return len;
  }

  while (i < len) {
    while (i < len && /[\s,]/.test(code[i])) i++;
    if (code[i] === '}') {
      const header = code.slice(0, mapOpenIdx + 1);
      const footer = code.slice(i);
      return { header, footer, modules };
    }
    const idMatch = code.slice(i).match(/^(\d+(?:e\d+)?)\s*:/i);
    if (!idMatch) throw new Error(`Expected module id at offset ${i}: ${code.slice(i, i + 40)}`);
    const id = Number(idMatch[1]);
    const valStart = i + idMatch[0].length;
    const valEnd = skipTriviaAndString(valStart);
    const body = code.slice(valStart, valEnd);
    modules.push({ id, code: `        ${id}: ${body}` });
    i = valEnd;
    if (code[i] === ',') i++;
  }
  throw new Error('Unterminated module map');
}

function classifyMainModule(id, code) {
  if (code.includes('createComponent') && code.includes('createSignal')) return 'solid-runtime.js';
  if (code.includes('insert') && code.includes('template') && code.includes('delegateEvents')) return 'solid-web.js';
  if (code.includes('STREMIO_TV_NAV_CHANNELS') || code.includes('interfaceLanguage')) return 'app.js';
  if (code.includes('model:"ctx"') || code.includes('model:"streaming_server"') || code.includes('model:"meta_details"')) return 'models.js';
  if (code.includes('nav-area') || code.includes('spatial') || (code.includes('navigate(') && code.includes('focus'))) return 'spatial-nav.js';
  if (code.includes('./ar-AR.json') || code.includes('setLocale')) return 'i18n.js';
  if (code.includes('Hisense_GetOSVersion') || code.includes('isVidaa') || code.includes('isTitan')) return 'platform.js';
  if (code.includes('getState') && code.includes('onNewState')) return 'core-transport.js';
  if (code.includes('<svg') || code.includes('viewBox')) return 'icons.js';
  if (code.includes('styleTagTransform') || code.includes('locals')) return 'styles.js';
  if (code.includes('<input type=text') || code.includes('Button') || code.includes('Dialog')) return 'ui-components.js';
  if (code.includes('defaultRoute') || code.includes('hashchange')) return 'router.js';
  if (code.includes('alpha3') && code.includes('ietf')) return 'constants.js';
  if (code.includes(' Proxy(') && code.includes('Object.entries')) return 'hooks.js';
  return 'vendor.js';
}

function classifyVideoModule(id, code) {
  if (code.includes('withStreamingServer') || code.includes('forceTranscoding')) return 'withStreamingServer.js';
  if (code.includes('withHTMLSubtitles') || code.includes('extraSubtitles')) return 'withHTMLSubtitles.js';
  if (code.includes('Vidaa') || code.includes('Hisense_')) return 'VidaaVideo.js';
  if (code.includes('Tizen') || code.includes('avplay')) return 'TizenVideo.js';
  if (code.includes('canPlayStream') && code.includes('video')) return 'HTMLVideo.js';
  if (code.includes('mediaCapabilities') || code.includes('MediaSource')) return 'mediaCapabilities.js';
  if (code.includes('ERROR') || code.includes('CRITICAL')) return 'errors.js';
  if (code.includes('/tracks/')) return 'index.js';
  return 'vendor.js';
}

function writeModuleGroup(targetDir, chunkPath, classifier, fileList) {
  rmSync(targetDir, { recursive: true, force: true });
  mkdirSync(targetDir, { recursive: true });

  const raw = readFileSync(chunkPath, 'utf8');
  const { header, footer, modules } = sliceWebpackChunk(raw);
  const buckets = new Map(fileList.map(f => [f, []]));

  for (const mod of modules) {
    const file = classifier(mod.id, mod.code);
    const bucket = buckets.get(file) || buckets.get('vendor.js');
    bucket.push(mod.code);
  }

  const activeFiles = [];
  for (const [file, items] of buckets.entries()) {
    if (items.length === 0) continue;
    activeFiles.push(file);
    const unformatted = `// Deconstructed Theater 1.10.0 modules (${file})\nmodule.exports = {\n${items.join(',\n')}\n};\n`;
    const formatted = `// Deconstructed Theater 1.10.0 modules (${file})\n${formatJs(unformatted)}\n`;
    writeFileSync(join(targetDir, file), formatted, 'utf8');
  }

  const manifest = {
    header,
    footer,
    moduleOrder: modules.map(m => m.id),
    files: activeFiles,
  };
  writeFileSync(join(targetDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  return modules.length;
}

// 1. Clean obsolete 1.9.2 src subdirectories that are now in patches/ and upstream/
for (const obsolete of ['patches', 'styles', 'service', 'index.template.html']) {
  rmSync(join(srcDir, obsolete), { recursive: true, force: true });
}

// 2. Deconstruct app/main.js -> src/theater/main/
const mainCount = writeModuleGroup(
  join(srcDir, 'theater', 'main'),
  join(appDir, 'main.js'),
  classifyMainModule,
  [
    'solid-runtime.js',
    'solid-web.js',
    'constants.js',
    'icons.js',
    'core-transport.js',
    'models.js',
    'spatial-nav.js',
    'ui-components.js',
    'hooks.js',
    'platform.js',
    'router.js',
    'i18n.js',
    'app.js',
    'styles.js',
    'vendor.js',
  ]
);

// 3. Deconstruct app/video.chunk.js -> src/video/
const videoCount = writeModuleGroup(
  join(srcDir, 'video'),
  join(appDir, 'video.chunk.js'),
  classifyVideoModule,
  [
    'index.js',
    'withStreamingServer.js',
    'withHTMLSubtitles.js',
    'HTMLVideo.js',
    'VidaaVideo.js',
    'TizenVideo.js',
    'mediaCapabilities.js',
    'errors.js',
    'vendor.js',
  ]
);

// 4. Format runtime.js and route chunks into src/theater/
writeFileSync(join(srcDir, 'theater', 'runtime.js'), formatJs(readFileSync(join(appDir, 'runtime.js'), 'utf8')) + '\n');
const routesDir = join(srcDir, 'theater', 'routes');
rmSync(routesDir, { recursive: true, force: true });
mkdirSync(routesDir, { recursive: true });
for (const f of readdirSync(appDir)) {
  if (f.endsWith('.chunk.js') && f !== 'video.chunk.js') {
    const outName = f.replace(/\.chunk\.js$/, '.js');
    const raw = readFileSync(join(appDir, f), 'utf8');
    // Pretty-print route chunks; keep translation chunks compact
    const out = /^translations\d+\.chunk\.js$/.test(f) ? raw : formatJs(raw) + '\n';
    writeFileSync(join(routesDir, outName), out, 'utf8');
  }
}

console.log(`deconstruct-theater: formatted ${mainCount} main.js modules, ${videoCount} video.chunk.js modules, and all route chunks into src/`);
