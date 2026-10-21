# Deconstructed `src/` Module Tree (Theater 1.10.0 + Core Web 0.65.1)

This directory contains the deconstructed, multi-line formatted JavaScript modules of **Stremio Theater `1.10.0`**, **Stremio Video (`video.chunk.js`)**, and **`@stremio/stremio-core-web@0.65.1`**:

```
src/
├── core/                         @stremio/stremio-core-web@0.65.1 (bridge.js, worker.js,
│                                 stremio_core_web.js, stremio_core_web_bg.wasm, v5-worker.js)
├── theater/
│   ├── runtime.js                Webpack runtime (chunk loader, module registry)
│   ├── main/                     307 modules from main.js grouped by domain:
│   │   ├── app.js                App root, Route layout, Catalog rows, Button, TextInput, Select
│   │   ├── constants.js          Language/locale tables & app constants
│   │   ├── core-transport.js     Core worker transport & RPC bridge
│   │   ├── hooks.js              SolidJS reactive helpers & proxies
│   │   ├── i18n.js               Translation loader & locale provider
│   │   ├── icons.js              SVG icon definitions
│   │   ├── models.js             Stremio Core state models (ctx, board, meta_details, player, etc.)
│   │   ├── platform.js           VIDAA / Titan / Tizen / webOS platform detection & APIs
│   │   ├── router.js             Hash router & navigation history stack
│   │   ├── solid-runtime.js      SolidJS reactive runtime (signals, memos, effects)
│   │   ├── solid-web.js          SolidJS DOM renderer & event delegation
│   │   ├── spatial-nav.js        TV D-pad spatial navigation engine (FocusNode, FocusArea, Scrollable)
│   │   ├── styles.js             style-loader runtime helpers
│   │   ├── ui-components.js      Shared UI primitives
│   │   ├── vendor.js             Remaining webpack utility/style modules
│   │   └── manifest.json         Module order & chunk wrapper metadata
│   └── routes/                   Formatted route chunks (addons.js, details.js, discover.js,
│                                 home.js, library.js, login.js, player.js, search.js, settings.js,
│                                 plus translations0..49.js)
└── video/                        72 modules from video.chunk.js grouped by domain:
    ├── index.js                  StremioVideo entry & implementation selector
    ├── withStreamingServer.js    Streaming server HLS/transcode wrapper & canPlayStream probe
    ├── withHTMLSubtitles.js      VTT/SRT/ASS subtitle renderer
    ├── HTMLVideo.js              Standard HTML5 <video> + hls.js / dash.js implementation
    ├── VidaaVideo.js             Hisense VIDAA video implementation
    ├── TizenVideo.js             Samsung Tizen AVPlay implementation
    ├── mediaCapabilities.js      Codec & container capability detection
    ├── errors.js                 Video error definitions
    ├── vendor.js                 Remaining bundled dependencies (hls.js, etc.)
    └── manifest.json             Module order & chunk wrapper metadata
```

## Two-Way Build Commands

- **Refresh `src/` from built `app/` (`upstream/` + `patches/`)**:
  ```bash
  npm run build
  npm run deconstruct
  ```
- **Compile directly from `src/` edits into `app/` and the repo root**:
  ```bash
  npm run build:src
  ```
