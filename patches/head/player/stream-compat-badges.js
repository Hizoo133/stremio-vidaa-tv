// ═══════════════════════════════════════════════════════════════════════
// Opt-In Stream Compatibility Badges (Settings > Vidaa TV)
// ═══════════════════════════════════════════════════════════════════════
// Strictly opt-in (defaultValue: false) so default UI and behavior on
// David's Hisense projector remain 100% untouched unless enabled in
// Settings > Vidaa TV > Stream Compatibility Badges.
//
// Classifies stream descriptions for Hisense VIDAA hardware quirks:
//   • AV1 streams (unsupported on most MT9602/MT9618 VIDAA hardware without
//     a streaming server transcode)
//   • MP4 Dolby Vision streams (Profile 5/8 in MP4 often triggers black
//     screen or green/purple tint on VIDAA browsers; MKV is preferred)
//   • Heavy 4K remuxes (> 25 GB) without a local streaming server
//   • MKV HDR / Dolby Vision and Direct Play H.264/HEVC streams
// ═══════════════════════════════════════════════════════════════════════
(function() {
    'use strict';

    var RT = window.__vidaaRuntime;
    var S = window.__vidaaStreams;
    var LS_KEY = 'stremio_stream_compat_badges';
    var log = RT.logger('compat-badges');

    function isEnabled() {
        return RT.store.getBool(LS_KEY, false);
    }

    function isServerOnline() {
        return !!(window.__SERVER_HEALTH__ && window.__SERVER_HEALTH__.status === 'online');
    }

    function classifyStreamCompatibility(rawText, hasServer) {
        var lower = String(rawText || '').toLowerCase();
        if (!lower) return null;
        var serverUp = (hasServer !== undefined) ? !!hasServer : isServerOnline();

        if (/\bav1\b/.test(lower)) {
            return serverUp
                ? { code: 'av1-server', label: '\u2713 AV1 (Server Transcode)', color: '#38bdf8' }
                : { code: 'av1-warn', label: '\u26a0 AV1 (Needs Server)', color: '#f87171' };
        }

        var isMp4 = S && S.isMp4 ? S.isMp4(lower) : /\.mp4\b|\bmp4\b/.test(lower);
        var isMkv = S && S.isMkv ? S.isMkv(lower) : /\.mkv\b|matroska/.test(lower);
        var hasDv = /\bdv\b|dolby\s*vision|dovi/.test(lower);
        var hasHdr = /\bhdr10\+?\b|\bhdr\b/.test(lower);

        if (isMp4 && hasDv) {
            return { code: 'mp4-dv-warn', label: '\u26a0 MP4-DV (Prefer MKV)', color: '#fbbf24' };
        }

        var sizeGB = S && S.parseSizeGB ? S.parseSizeGB(lower) : null;
        if (!serverUp && sizeGB !== null && sizeGB > 25) {
            return { code: 'heavy-remux-warn', label: '\u26a0 Heavy Remux (>25GB)', color: '#fbbf24' };
        }

        if (isMkv && (hasDv || hasHdr)) {
            return { code: 'mkv-hdr-ok', label: '\u2713 MKV HDR/DV', color: '#4ade80' };
        }

        var isHevc = S && S.isHevc ? S.isHevc(lower) : /hevc|x265|h\.?265/.test(lower);
        var isH264 = S && S.isH264 ? S.isH264(lower) : /x264|h\.?264|avc/.test(lower);
        if ((isHevc || isH264) && (isMkv || isMp4)) {
            return { code: 'direct-ok', label: '\u2713 Direct Play', color: '#4ade80' };
        }

        return null;
    }

    window.__classifyStreamCompatibility = classifyStreamCompatibility;

    function clearBadges() {
        var existing = document.querySelectorAll('.vidaa-compat-badge');
        for (var i = 0; i < existing.length; i++) {
            if (existing[i].parentNode) existing[i].parentNode.removeChild(existing[i]);
        }
    }

    function annotateStreamCards() {
        if (!isEnabled()) return;
        var hash = window.location.hash || '';
        if (hash.indexOf('#/detail/') !== 0) return;

        var cards = document.querySelectorAll('[class*="stream-"]');
        var serverUp = isServerOnline();
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            var details = card.querySelector('[class*="details-"]');
            if (!details) continue;
            var nameEl = details.querySelector('[class*="name-"]');
            var descEl = details.querySelector('[class*="description-"]');
            if (!descEl) continue;

            var combined = ((nameEl ? nameEl.textContent : '') + ' ' + (descEl.textContent || '')).replace(/^\s+|\s+$/g, '');
            var verdict = classifyStreamCompatibility(combined, serverUp);
            var badge = details.querySelector('.vidaa-compat-badge');
            if (!verdict) {
                if (badge && badge.parentNode) badge.parentNode.removeChild(badge);
                continue;
            }
            if (!badge) {
                badge = document.createElement('div');
                badge.className = 'vidaa-compat-badge';
                badge.style.cssText = 'font-size:1.05rem;font-weight:600;line-height:1.2;margin-top:0.15rem;white-space:nowrap;';
                details.appendChild(badge);
            }
            if (badge.getAttribute('data-code') !== verdict.code) {
                badge.setAttribute('data-code', verdict.code);
                badge.textContent = verdict.label;
                badge.style.color = verdict.color;
            }
        }
    }

    RT.poll(function() {
        if (!isEnabled()) return;
        annotateStreamCards();
    }, 1000, { route: 'nonplayer', quiet: true });

    if (window.__registerCommunityToggle) {
        window.__registerCommunityToggle({
            id: 'stream-compat-badges-toggle',
            lsKey: LS_KEY,
            defaultValue: false,
            title: 'Stream Compatibility Badges',
            description: 'Show codec and container compatibility hints on stream cards (MP4-DV, AV1, MKV HDR, heavy remuxes)',
            onToggle: function(nowEnabled) {
                log('Stream compatibility badges toggled:', nowEnabled ? 'ON' : 'OFF');
                if (nowEnabled) annotateStreamCards();
                else clearBadges();
            }
        });
    }
})();
