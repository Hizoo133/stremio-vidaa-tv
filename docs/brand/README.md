# Brand assets

## The mark

`emblem.png` is a play-button triangle cut from black obsidian glass, facets catching violet and cyan with a hot amber core, the same light as a laser projector throwing onto a dark wall. Rendered, not drawn, so it reads as a physical object at every size.

Rendered locally with **Z-Image-Turbo** (Apache 2.0) in ComfyUI 0.41 on an RTX 5090: 8 steps, `res_multistep`, cfg 1, 1024×1024, seed `7003`. Prompt:

> A premium brand emblem: a glossy play-button triangle carved from black obsidian glass with razor-sharp bevelled facets, edges glowing electric violet and cyan, a hot amber core light leaking through the facets, a thin beam of light projecting from it like a laser projector, floating on a pure black background, volumetric light haze, cinematic studio lighting, octane render, ultra detailed, centered, no text

Nine candidates were rendered and compared on a contact sheet (six of this motif, three of a projector body throwing light onto a screen). The projector renders looked like product photography and carried stray text; among the triangles, seed 7003 is the one that reads as a play button at a glance, with the cleanest facets and a beam that points into the wordmark.

## Derived files

Built by `python scripts/brand/make_hero.py` from the emblem, so they can be regenerated pixel for pixel:

| File | Size | Use |
|---|---|---|
| `hero.png` | 1600×600, rounded corners, transparent outside | README header, shown at 800 px wide |
| `social-preview.png` | 1280×640 | GitHub repository social preview (Settings → Social preview) |

## Type and colour

- Wordmark: **Unbounded** ExtraBold (SIL Open Font License), white → cyan `#00b4d8` → violet `#7b5bf5` → amber `#f59e0b`, soft violet glow.
- Tagline and labels: **JetBrains Mono** (SIL OFL).
- Background `#06070b`; text `#f8fafc`, muted `#cbd5e1`.
- Both fonts are vendored in `fonts/` as static instances, with their licence files.

Stremio is made by Smart Code OOD (Sofia); this build is an independent community port, and the mark deliberately shares nothing with Stremio's own logo.
