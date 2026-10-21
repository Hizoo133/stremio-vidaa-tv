/* System Font fallback & Variable-Font Synthesis Fix (#33) + Pointer Hover Tracker (#36).
 *
 * PlusJakartaSans.ttf is a variable TrueType font (weight axis 100..1000).
 * Certain Hisense VIDAA firmware builds (notably P0218 / MENA revisions) have
 * a broken FreeType/HarfBuzz variable-font renderer that collapses word
 * spacing (U+0020 advance width -> 0) and renders doubled synthetic-bold
 * glyphs (`font-synthesis: weight` applied on top of variable weight 600/700).
 *
 * 1. Always injects `font-synthesis: none` so embedded Chromium never
 *    double-strokes bold titles on PlusJakartaSans.
 * 2. Auto-detects affected firmware via `Hisense_GetFirmWareVersion` (P0218)
 *    AND via an offscreen glyph-spacing measurement after fonts load (so even
 *    Method 1 Browser bookmarks on github.io, where Hisense_* APIs are not
 *    injected, auto-enable the system font fallback if spaces collapse).
 * 3. Tracks active pointer movement (`window.__vidaaPointerActive`) for 250ms
 *    after real mousemove coordinates change so FocusNode (`#36`) can focus
 *    and scroll on cursor hover in VIDAA Browser pointer mode without stealing
 *    focus during D-pad scrolling.
 */
(function() {
    'use strict';

    var RT = window.__vidaaRuntime;
    var log = RT.logger('font');
    var LS_KEY = 'stremio_system_font';
    var STYLE_ID = 'vidaa-system-font-style';
    var BASE_STYLE_ID = 'vidaa-font-synthesis-fix';

    // 1. Always disable synthetic faux-bolding on variable fonts (#33).
    function ensureBaseFontFix() {
        if (document.getElementById(BASE_STYLE_ID)) return;
        var s = document.createElement('style');
        s.id = BASE_STYLE_ID;
        s.textContent = 'html, body, body *, #root, #root * { font-synthesis: none !important; -webkit-font-smoothing: antialiased; }';
        (document.head || document.documentElement).appendChild(s);
    }
    ensureBaseFontFix();

    // 2. Track active pointer movement for VIDAA Browser cursor mode (#36).
    var lastX = -1, lastY = -1, pointerTimer = null;
    window.__vidaaPointerActive = false;
    window.addEventListener('mousemove', function(e) {
        if (typeof e.clientX !== 'number' || typeof e.clientY !== 'number') return;
        if (Math.abs(e.clientX - lastX) + Math.abs(e.clientY - lastY) < 3) return;
        lastX = e.clientX;
        lastY = e.clientY;
        window.__vidaaPointerActive = true;
        if (pointerTimer) clearTimeout(pointerTimer);
        pointerTimer = setTimeout(function() {
            window.__vidaaPointerActive = false;
        }, 250);
    }, { passive: true });

    function detectAffectedFirmware() {
        try {
            if (typeof Hisense_GetFirmWareVersion === 'function') {
                var fw = String(Hisense_GetFirmWareVersion() || '');
                if (/P0218/i.test(fw)) return true;
            }
        } catch (e) {}
        return false;
    }

    function isEnabled() {
        var raw = RT.store.get(LS_KEY, null);
        if (raw === 'true') return true;
        if (raw === 'false') return false;
        return detectAffectedFirmware();
    }

    function applySystemFont(forceVal) {
        var active = typeof forceVal === 'boolean' ? forceVal : isEnabled();
        var existing = document.getElementById(STYLE_ID);
        if (active) {
            if (!existing) {
                var style = document.createElement('style');
                style.id = STYLE_ID;
                style.textContent = 'html, body, body *, #root, #root * { font-family: Arial, "Segoe UI", Roboto, sans-serif !important; word-spacing: normal !important; letter-spacing: normal !important; font-synthesis: none !important; }';
                (document.head || document.documentElement).appendChild(style);
            }
            document.documentElement.setAttribute('data-vidaa-system-font', 'true');
            log('System font fallback enabled');
        } else {
            if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
            document.documentElement.setAttribute('data-vidaa-system-font', 'false');
        }
        return active;
    }

    // 3. Probe rendered space advance width of PlusJakartaSans when user hasn't
    // explicitly set a preference (catches P0218 in Method 1 Browser where
    // Hisense_GetFirmWareVersion is not exposed).
    function probeFontSpaceMetrics() {
        if (RT.store.get(LS_KEY, null) !== null || isEnabled()) return false;
        if (!document.body) return false;
        try {
            var wrap = document.createElement('div');
            wrap.style.cssText = 'position:fixed;left:-9999px;top:-9999px;visibility:hidden;pointer-events:none;white-space:pre;font-family:"PlusJakartaSans",monospace;font-size:32px;font-weight:600;';
            var s1 = document.createElement('span');
            var s2 = document.createElement('span');
            s1.textContent = 'TheQuickBrownFox';
            s2.textContent = 'The Quick Brown Fox';
            wrap.appendChild(s1);
            wrap.appendChild(s2);
            document.body.appendChild(wrap);
            var w1 = s1.getBoundingClientRect().width;
            var w2 = s2.getBoundingClientRect().width;
            document.body.removeChild(wrap);
            if (w1 > 20 && (w2 - w1) < 6) {
                log('Detected collapsed space advance width in PlusJakartaSans (delta=' + (w2 - w1) + 'px); enabling system font');
                applySystemFont(true);
                return true;
            }
        } catch (e) {}
        return false;
    }

    try {
        var params = new URLSearchParams(window.location.search);
        if (params.get('sysfont') === '1') {
            RT.store.set(LS_KEY, true);
        } else if (params.get('sysfont') === '0') {
            RT.store.set(LS_KEY, false);
        }
    } catch (e) {}

    window.__isSystemFontEnabled = isEnabled;
    window.__probeFontSpaceMetrics = probeFontSpaceMetrics;
    window.__setSystemFont = function(enabled) {
        RT.store.set(LS_KEY, !!enabled);
        return applySystemFont(!!enabled);
    };

    applySystemFont();

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function() { setTimeout(probeFontSpaceMetrics, 100); });
    } else {
        window.addEventListener('load', function() { setTimeout(probeFontSpaceMetrics, 500); });
    }

    RT.onRegistryReady(function() {
        window.__registerVidaaSettingsItem({
            id: 'system-font-toggle',
            type: 'toggle',
            label: 'System Font (Fix Text Spacing)',
            description: 'Uses the TV system sans-serif font instead of PlusJakartaSans to fix missing word spacing and doubled bold text on affected VIDAA firmware (such as P0218).',
            lsKey: LS_KEY,
            defaultValue: false,
            onToggle: function(now) { applySystemFont(now); }
        });
    });
})();
