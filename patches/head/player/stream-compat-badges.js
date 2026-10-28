// ═══════════════════════════════════════════════════════════════════════
// Stream Compatibility & Language Badges (VF / MULTI / VO)
// ═══════════════════════════════════════════════════════════════════════
(function() {
    'use strict';

    var RT = window.__vidaaRuntime;
    var S = window.__vidaaStreams;
    var LS_KEY = 'stremio_stream_compat_badges';
    var log = RT.logger('compat-badges');

    function isCompatEnabled() {
        return RT.store.getBool(LS_KEY, false);
    }

    function isServerOnline() {
        return !!(window.__SERVER_HEALTH__ && window.__SERVER_HEALTH__.status === 'online');
    }

    function detectLanguage(rawText) {
        var lower = String(rawText || '').toLowerCase();
        if (!lower) return null;

        // Uncached Debrid download links (put to bottom, distinct warning badge)
        if (/(\[(ad|rd|pm)\s*download\]|download\s*to\s*debrid|\buncached\b)/.test(lower)) {
            return { code: 'lang-uncached', label: '⏳ TÉLÉCHARGEMENT ALLDEBRID', color: '#f87171', bg: 'rgba(15, 23, 42, 0.85)', border: 'rgba(239, 68, 68, 0.45)' };
        }

        // MULTI (French + English / other languages)
        if (/\bmulti\b|\bmultis\b|multi-audio|\bfr-en\b|\ben-fr\b|multi\s*\(/.test(lower)) {
            return { code: 'lang-multi', label: '🇫🇷 MULTI', color: '#34d399', bg: 'rgba(15, 23, 42, 0.85)', border: 'rgba(52, 211, 153, 0.45)' };
        }

        // French exclusive (VFF, TRUEFRENCH, VFQ, VF, FRENCH)
        if (/\b(truefrench|vff|vfq|french|vf)\b|\bfrançais\b|\bfrancais\b/.test(lower)) {
            return { code: 'lang-vf', label: '🇫🇷 VF', color: '#60a5fa', bg: 'rgba(15, 23, 42, 0.85)', border: 'rgba(96, 165, 250, 0.45)' };
        }

        // VOSTFR / French subtitles
        if (/\b(vostfr|subfrench)\b/.test(lower)) {
            return { code: 'lang-vostfr', label: '💬 VOSTFR', color: '#fbbf24', bg: 'rgba(15, 23, 42, 0.85)', border: 'rgba(251, 191, 36, 0.45)' };
        }

        // Default: Original Version (mostly English)
        return { code: 'lang-vo', label: '🇬🇧 VO', color: '#94a3b8', bg: 'rgba(15, 23, 42, 0.85)', border: 'rgba(148, 163, 184, 0.35)' };
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
        var hasDvP5 = /\b(dv\s*p5|p5\b|dovi\s*05|profile\s*5)\b/.test(lower);
        var hasHdr = /\bhdr10\+?\b|\bhdr\b/.test(lower);

        if (hasDvP5 || (isMp4 && hasDv)) {
            return { code: 'mp4-dv-warn', label: '\u26a0 DV P5 / MP4-DV (Écran vert TV)', color: '#fbbf24' };
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

    function annotateStreamCards() {
        var hash = window.location.hash || '';
        if (hash.indexOf('#/detail') !== 0 && hash.indexOf('#/metadetails') !== 0) return;

        var cards = document.querySelectorAll('[class*="stream-"]');
        if (!cards || cards.length === 0) return;

        var showCompat = isCompatEnabled();
        var serverUp = isServerOnline();

        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            var details = card.querySelector('[class*="details-"]');
            if (!details) continue;
            var nameEl = details.querySelector('[class*="name-"]');
            var descEl = details.querySelector('[class*="description-"]');
            if (!descEl) continue;

            var combined = ((nameEl ? nameEl.textContent : '') + ' ' + (descEl.textContent || '')).replace(/^\s+|\s+$/g, '');

            // 1. Language Badge (Always active)
            var lang = detectLanguage(combined);
            if (lang) {
                var langBadge = details.querySelector('.vidaa-lang-badge');
                if (!langBadge) {
                    langBadge = document.createElement('span');
                    langBadge.className = 'vidaa-lang-badge';
                    langBadge.style.cssText = 'display:inline-block;font-size:0.95rem;font-weight:700;line-height:1.2;padding:2px 8px;border-radius:4px;margin-bottom:4px;white-space:nowrap;letter-spacing:0.02em;';
                    details.insertBefore(langBadge, details.firstChild);
                }
                if (langBadge.getAttribute('data-code') !== lang.code) {
                    langBadge.setAttribute('data-code', lang.code);
                    langBadge.textContent = lang.label;
                    langBadge.style.color = lang.color;
                    langBadge.style.backgroundColor = lang.bg;
                    langBadge.style.border = '1px solid ' + lang.border;
                }
            }

            // 2. Codec / Compat Badge (Opt-in via settings)
            if (showCompat) {
                var verdict = classifyStreamCompatibility(combined, serverUp);
                var compatBadge = details.querySelector('.vidaa-compat-badge');
                if (!verdict) {
                    if (compatBadge && compatBadge.parentNode) compatBadge.parentNode.removeChild(compatBadge);
                } else {
                    if (!compatBadge) {
                        compatBadge = document.createElement('div');
                        compatBadge.className = 'vidaa-compat-badge';
                        compatBadge.style.cssText = 'font-size:1.05rem;font-weight:600;line-height:1.2;margin-top:0.15rem;white-space:nowrap;';
                        details.appendChild(compatBadge);
                    }
                    if (compatBadge.getAttribute('data-code') !== verdict.code) {
                        compatBadge.setAttribute('data-code', verdict.code);
                        compatBadge.textContent = verdict.label;
                        compatBadge.style.color = verdict.color;
                    }
                }
            }
        }
    }

    RT.poll(function() {
        annotateStreamCards();
    }, 600, { route: 'nonplayer', quiet: true });

    // Strict Player Route Purge: Ensure badges never bleed or stay visible in player
    function purgeBadgesOnPlayer() {
        if (RT.inPlayer()) {
            var badges = document.querySelectorAll('.vidaa-lang-badge, .vidaa-compat-badge');
            for (var i = 0; i < badges.length; i++) {
                badges[i].style.display = 'none';
            }
        }
    }
    window.addEventListener('hashchange', purgeBadgesOnPlayer);
    RT.poll(purgeBadgesOnPlayer, 1000, { route: 'player', quiet: true });

    try {
        var style = document.createElement('style');
        style.textContent = '#player .vidaa-lang-badge, #player .vidaa-compat-badge, [class*="player-"] .vidaa-lang-badge, [class*="player-"] .vidaa-compat-badge { display: none !important; }';
        document.head.appendChild(style);
    } catch(e) {}

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
                else {
                    var existing = document.querySelectorAll('.vidaa-compat-badge');
                    for (var i = 0; i < existing.length; i++) {
                        if (existing[i].parentNode) existing[i].parentNode.removeChild(existing[i]);
                    }
                }
            }
        });
    }
})();
