/* System Font fallback toggle (#33) — strictly opt-in (off by default).
 *
 * Does not touch fonts, styles, or DOM on projectors / standard VIDAA sets
 * unless the user explicitly enables "System Font (Fix Text Spacing)" in
 * Settings > Vidaa TV (or passes ?sysfont=1).
 */
(function() {
    'use strict';

    var RT = window.__vidaaRuntime;
    var log = RT.logger('font');
    var LS_KEY = 'stremio_system_font';
    var STYLE_ID = 'vidaa-system-font-style';

    function isEnabled() {
        return RT.store.get(LS_KEY, 'false') === 'true';
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
            document.documentElement.removeAttribute('data-vidaa-system-font');
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

    if (isEnabled()) {
        applySystemFont(true);
    }

    RT.onRegistryReady(function() {
        window.__registerVidaaSettingsItem({
            id: 'system-font-toggle',
            type: 'toggle',
            label: 'System Font (Fix Text Spacing)',
            description: 'Opt-in: uses the system sans-serif font instead of PlusJakartaSans if your TV firmware collapses word spacing.',
            lsKey: LS_KEY,
            defaultValue: false,
            onToggle: function(now) { applySystemFont(now); }
        });
    });
})();
