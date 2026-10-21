/* System Font fallback toggle (#33).
 *
 * PlusJakartaSans.ttf is a variable TrueType font (weight axis 100..1000).
 * Certain Hisense VIDAA firmware builds (notably P0218 / MENA revisions) have
 * a broken FreeType/HarfBuzz variable-font renderer that collapses word
 * spacing and renders doubled synthetic-bold glyphs.
 *
 * When enabled (manually via Settings > Vidaa TV, via ?sysfont=1, or
 * auto-enabled on P0218 firmware when no explicit preference is stored),
 * overrides the UI font stack with the TV's built-in sans-serif font.
 */
(function() {
    'use strict';

    var RT = window.__vidaaRuntime;
    var log = RT.logger('font');
    var LS_KEY = 'stremio_system_font';
    var STYLE_ID = 'vidaa-system-font-style';

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
                style.textContent = 'html, body, body *, #root, #root * { font-family: Arial, "Segoe UI", sans-serif !important; word-spacing: normal !important; letter-spacing: normal !important; }';
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

    try {
        var params = new URLSearchParams(window.location.search);
        if (params.get('sysfont') === '1') {
            RT.store.set(LS_KEY, true);
        } else if (params.get('sysfont') === '0') {
            RT.store.set(LS_KEY, false);
        }
    } catch (e) {}

    window.__isSystemFontEnabled = isEnabled;
    window.__setSystemFont = function(enabled) {
        RT.store.set(LS_KEY, !!enabled);
        return applySystemFont(!!enabled);
    };

    applySystemFont();

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
