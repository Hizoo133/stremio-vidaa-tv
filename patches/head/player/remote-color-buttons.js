// VIDAA remote color button mappings
(function() {
    var RT = window.__vidaaRuntime;
    var log = RT.logger('remote');
    var healthOverlay = null;

    function showToast(msg, bg, ms) {
        window.__vidaaUI.toastCenter(msg, { bg: bg, ms: ms || 2500 });
    }

    // Red (403) outside the player — toggle the quality indicator, just to
    // confirm the button is wired. Inside the player Red belongs to the
    // stream-stats overlay / torrent overlay / diagnostics combo instead.
    window.__vidaaKeys.on('red', function() {
        var qi = document.getElementById('quality-indicator');
        if (qi) qi.style.display = qi.style.display === 'none' ? 'block' : 'none';
    }, { route: 'nonplayer' });

    // Green (404) — toggle server health overlay (any screen).
    window.__vidaaKeys.on('green', function() {
        if (healthOverlay) { healthOverlay.remove(); healthOverlay = null; return; }
        var h = window.__SERVER_HEALTH__ || {};
        var url = window.__STREMIO_SERVER_URL__ || 'default';
        var isDefault = !url || url === 'default' || url === 'http://127.0.0.1:11470';
        var statusColor, statusText;
        if (h.status === 'online') { statusColor = '#4ade80'; statusText = 'online'; }
        else if (isDefault) { statusColor = '#94a3b8'; statusText = 'not configured'; }
        else { statusColor = '#f87171'; statusText = h.status || 'offline'; }
        healthOverlay = document.createElement('div');
        healthOverlay.style.cssText = 'position:fixed;bottom:60px;right:14px;background:rgba(0,0,0,0.9);color:white;padding:16px 20px;border-radius:10px;font-size:13px;z-index:99999;font-family:monospace;min-width:260px;backdrop-filter:blur(4px);';
        var note = isDefault && h.status !== 'online'
            ? '<div style="margin-top:8px;color:rgba(255,255,255,0.6);font-size:11px;line-height:1.4;">Streaming server is optional. Real-Debrid users do not need one.</div>'
            : '';
        healthOverlay.innerHTML = '<div style="font-weight:700;margin-bottom:8px;font-size:14px;">Server Health</div>'
            + '<div>Status: <span style="color:' + statusColor + ';">' + esc(statusText) + '</span></div>'
            + '<div>Latency: ' + (h.latency ? h.latency + 'ms' : 'N/A') + '</div>'
            + '<div>Version: ' + esc(h.version || 'N/A') + '</div>'
            + '<div>URL: ' + esc(url) + '</div>'
            + note;
        document.body.appendChild(healthOverlay);
        setTimeout(function() { if (healthOverlay) { healthOverlay.remove(); healthOverlay = null; } }, 10000);
    });

    // Blue (406) — force transcode current stream (reloads player).
    // Only useful if a streaming server is configured. Do not require the
    // cached health flag here; health checks are intentionally quiet in the
    // player and can be stale even when the server is reachable.
    window.__vidaaKeys.on('blue', function() {
        var ph = window.location.hash || '';
        var serverReady = RT.serverConfigured();
        if (!serverReady) {
            showToast('Force transcode needs a streaming server.\nCheck Settings > Server.', 'rgba(180,60,60,0.92)', 3500);
            return;
        }
        window.__FORCE_TRANSCODE__ = true;
        log('Force transcode enabled, reloading stream');
        showToast('Forcing transcode...', null, 1500);
        try {
            window.location.hash = '#/home';
            setTimeout(function() { window.location.hash = ph; }, 200);
        } catch(err) {
            log.error('Force transcode reload failed:', err.message);
            showToast('Could not reload stream', 'rgba(180,60,60,0.92)', 2500);
        }
    }, { route: 'player' });

    // ═══════════════════════════════════════════════════════════════════════
    // Orange / Yellow (405) — Instant Language Preset Toggle
    // Mode 1: 🇫🇷 VF (Audio Français + Sous-titres désactivés)
    // Mode 2: 💬 VOSTFR (Audio VO/Original + Sous-titres Français)
    // ═══════════════════════════════════════════════════════════════════════
    var currentPresetMode = null; // 'VF' or 'VOSTFR'

    function isFrenchAudioTrack(t) {
        if (!t) return false;
        var lang = (t.lang || t.language || '').toLowerCase().trim();
        var label = (t.label || t.name || t.title || '').toLowerCase().trim();
        if (lang === 'fr' || lang === 'fre' || lang === 'fra') return true;
        if (/\b(fr|fre|fra|french|francais|français|vf|vff|vfi|truefrench)\b/i.test(label)) return true;
        if (label.indexOf('french') !== -1 || label.indexOf('français') !== -1 || label.indexOf('francais') !== -1) return true;
        return false;
    }

    function isVOAudioTrack(t) {
        if (!t) return false;
        return !isFrenchAudioTrack(t);
    }

    function isFrenchSubTrack(t) {
        if (!t) return false;
        var lang = (t.lang || t.language || '').toLowerCase().trim();
        var label = (t.label || t.name || t.title || '').toLowerCase().trim();
        if (lang === 'fr' || lang === 'fre' || lang === 'fra') return true;
        if (/\b(fr|fre|fra|french|francais|français|vostfr)\b/i.test(label)) return true;
        if (label.indexOf('french') !== -1 || label.indexOf('français') !== -1 || label.indexOf('francais') !== -1) return true;
        return false;
    }

    function isForcedSub(t) {
        var label = (t.label || t.name || t.title || '').toLowerCase();
        return label.indexOf('force') !== -1 || label.indexOf('forcé') !== -1;
    }

    function showPresetToast(title, subtitle, bg) {
        var html = '<div style="font-weight:700;font-size:1.35rem;margin-bottom:6px;letter-spacing:0.5px;">' + title + '</div>'
            + '<div style="font-size:0.95rem;color:rgba(255,255,255,0.9);">' + subtitle + '</div>';
        RT.toast(html, {
            at: 'center',
            bg: bg || 'rgba(15, 23, 42, 0.94)',
            ms: 2500,
            id: 'lang-preset-toast',
            extra: 'border:1px solid rgba(255,255,255,0.18);box-shadow:0 12px 30px rgba(0,0,0,0.7);backdrop-filter:blur(8px);padding:18px 32px;border-radius:14px;'
        });
    }

    function toggleLanguagePreset() {
        var ctrl = window.__STREMIO_PLAYER_CONTROLLER__;
        var video = document.querySelector('video');
        if (!video) return;

        var state = (ctrl && typeof ctrl.state === 'function') ? ctrl.state() : {};
        var audioTracks = state.audioTracks || [];
        var subTracks = state.subtitlesTracks || [];
        var extraSubTracks = state.extraSubtitlesTracks || [];

        // Check currently active audio to decide next preset if currentPresetMode is unset
        var curAudioId = state.selectedAudioTrackId;
        var curTrack = null;
        for (var i = 0; i < audioTracks.length; i++) {
            if (audioTracks[i].id === curAudioId) { curTrack = audioTracks[i]; break; }
        }

        var curIsFrench = curTrack ? isFrenchAudioTrack(curTrack) : false;
        var targetMode;

        if (currentPresetMode === 'VF') {
            targetMode = 'VOSTFR';
        } else if (currentPresetMode === 'VOSTFR') {
            targetMode = 'VF';
        } else {
            // First time pressing: if already in French, toggle to VOSTFR; otherwise toggle to VF
            targetMode = curIsFrench ? 'VOSTFR' : 'VF';
        }

        if (targetMode === 'VF') {
            // ── Preset 1: VF (French Audio + No Subtitles) ──────────────────
            var frAudio = null;
            for (var a = 0; a < audioTracks.length; a++) {
                if (isFrenchAudioTrack(audioTracks[a])) { frAudio = audioTracks[a]; break; }
            }

            if (frAudio) {
                if (ctrl && typeof ctrl.selectAudioTrack === 'function') {
                    ctrl.selectAudioTrack(frAudio.id);
                }
                if (ctrl && typeof ctrl.disableSubtitlesTracks === 'function') {
                    ctrl.disableSubtitlesTracks();
                }
                // Direct DOM sync
                try {
                    if (video.audioTracks && video.audioTracks.length) {
                        for (var da = 0; da < video.audioTracks.length; da++) {
                            var dat = video.audioTracks[da];
                            dat.enabled = isFrenchAudioTrack(dat);
                        }
                    }
                    if (video.textTracks && video.textTracks.length) {
                        for (var ds = 0; ds < video.textTracks.length; ds++) {
                            video.textTracks[ds].mode = 'disabled';
                        }
                    }
                } catch(e) {}

                currentPresetMode = 'VF';
                showPresetToast('🇫🇷 VF (Français)', 'Audio : Français • Sous-titres : Désactivés', 'rgba(16, 185, 129, 0.94)');
                log('Preset switched to VF');
            } else {
                showPresetToast('⚠️ VF Indisponible', 'Aucune piste audio française trouvée sur ce fichier', 'rgba(239, 68, 68, 0.94)');
            }
        } else {
            // ── Preset 2: VOSTFR (VO Audio + French Subtitles) ─────────────
            // Pick best VO track: Japanese for anime, English for others, or any non-French
            var voAudio = null;
            for (var j = 0; j < audioTracks.length; j++) {
                var at = audioTracks[j];
                var l = (at.lang || '').toLowerCase();
                if (l === 'ja' || l === 'jpn') { voAudio = at; break; }
            }
            if (!voAudio) {
                for (var e = 0; e < audioTracks.length; e++) {
                    var at2 = audioTracks[e];
                    var l2 = (at2.lang || '').toLowerCase();
                    if (l2 === 'en' || l2 === 'eng') { voAudio = at2; break; }
                }
            }
            if (!voAudio) {
                for (var v = 0; v < audioTracks.length; v++) {
                    if (isVOAudioTrack(audioTracks[v])) { voAudio = audioTracks[v]; break; }
                }
            }

            var audioLabel = 'VO';
            if (voAudio) {
                if (ctrl && typeof ctrl.selectAudioTrack === 'function') {
                    ctrl.selectAudioTrack(voAudio.id);
                }
                try {
                    if (video.audioTracks && video.audioTracks.length) {
                        for (var dva = 0; dva < video.audioTracks.length; dva++) {
                            var dvat = video.audioTracks[dva];
                            dvat.enabled = (dvat.id === voAudio.id || dvat === voAudio);
                        }
                    }
                } catch(err) {}
                audioLabel = voAudio.label || voAudio.lang || 'VO';
            }

            // Find French subtitle (prefer embedded complete over forced, fallback to extra/addon)
            var frSubs = [];
            for (var s = 0; s < subTracks.length; s++) {
                if (isFrenchSubTrack(subTracks[s])) frSubs.push({ track: subTracks[s], extra: false });
            }
            for (var x = 0; x < extraSubTracks.length; x++) {
                if (isFrenchSubTrack(extraSubTracks[x])) frSubs.push({ track: extraSubTracks[x], extra: true });
            }

            // Prefer non-forced
            var selectedSub = null;
            for (var fs = 0; fs < frSubs.length; fs++) {
                if (!isForcedSub(frSubs[fs].track)) { selectedSub = frSubs[fs]; break; }
            }
            if (!selectedSub && frSubs.length) {
                selectedSub = frSubs[0];
            }

            if (selectedSub) {
                if (ctrl) {
                    if (selectedSub.extra && typeof ctrl.selectExtraSubtitlesTrack === 'function') {
                        ctrl.selectExtraSubtitlesTrack(selectedSub.track.id);
                    } else if (typeof ctrl.selectSubtitlesTrack === 'function') {
                        ctrl.selectSubtitlesTrack(selectedSub.track.id);
                    }
                }
                try {
                    if (video.textTracks && video.textTracks.length) {
                        for (var dts = 0; dts < video.textTracks.length; dts++) {
                            var dtst = video.textTracks[dts];
                            dtst.mode = isFrenchSubTrack(dtst) ? 'showing' : 'disabled';
                        }
                    }
                } catch(err) {}

                currentPresetMode = 'VOSTFR';
                showPresetToast('💬 VOSTFR', 'Audio : ' + audioLabel + ' • Sous-titres : Français', 'rgba(59, 130, 246, 0.94)');
                log('Preset switched to VOSTFR with subs');
            } else {
                currentPresetMode = 'VOSTFR';
                showPresetToast('💬 Audio VO activé', 'Audio : ' + audioLabel + ' • ⚠️ Aucun sous-titre FR trouvé', 'rgba(245, 158, 11, 0.94)');
                log('Preset switched to VO, but no French subtitles found');
            }
        }
    }

    // Bind Orange / Yellow button (405) in player route with high priority
    window.__vidaaKeys.on(['yellow', 'orange'], toggleLanguagePreset, {
        route: 'player',
        priority: 800,
        suppress: true
    });

    // Info (457) — one-shot stream info panel. Only fires when Stream Stats
    // is explicitly disabled — otherwise Info is owned by the stats overlay
    // and we'd be double-triggering. Some remotes (55Q6QV projector, many
    // Hisense projectors) have no Info button at all, so Red is accepted as
    // an alias when the stats overlay is off.
    window.__vidaaKeys.on(['info', 'red'], function() {
        var video = document.querySelector('video');
        if (!video) return;
        var info = document.getElementById('stream-info');
        if (info) { info.remove(); return; }
        info = document.createElement('div');
        info.id = 'stream-info';
        info.style.cssText = 'position:fixed;top:60px;left:14px;background:rgba(0,0,0,0.85);color:white;padding:16px 20px;border-radius:10px;font-size:13px;z-index:99999;font-family:monospace;min-width:260px;backdrop-filter:blur(4px);';
        var bufferedStr = 'N/A';
        try { if (video.buffered.length) bufferedStr = Math.round(video.buffered.end(video.buffered.length - 1)) + 's'; } catch(e) {}
        info.innerHTML = '<div style="font-weight:700;margin-bottom:8px;font-size:14px;">Stream Info</div>'
            + '<div>Resolution: ' + esc((video.videoWidth || '?') + 'x' + (video.videoHeight || '?')) + '</div>'
            + '<div>Duration: ' + Math.round(video.duration || 0) + 's</div>'
            + '<div>Buffered: ' + esc(bufferedStr) + '</div>'
            + '<div>Current: ' + Math.round(video.currentTime || 0) + 's</div>'
            + '<div>Paused: ' + video.paused + '</div>'
            + '<div>DV P7: ' + esc(window.__DV_PROFILE7_DETECTED__ || 'No') + '</div>';
        if (window.__VIDAA_CAPS__) {
            info.innerHTML += '<div style="margin-top:8px;border-top:1px solid rgba(255,255,255,0.15);padding-top:8px;">'
                + '<div style="font-weight:700;margin-bottom:4px;">VIDAA Device</div>'
                + '<div>Model: ' + esc(window.__VIDAA_CAPS__.model || '?') + '</div>'
                + '<div>Chipset: ' + esc(window.__VIDAA_CAPS__.chipset || '?') + '</div>'
                + '<div>HDR: ' + esc(JSON.stringify(window.__VIDAA_CAPS__.hdrInfo || {})) + '</div>'
                + '<div>Atmos: ' + esc(window.__VIDAA_CAPS__.dolbyAtmos || '?') + '</div>'
                + '</div>';
        }
        if (window.__VIDAA_STATE__ && Object.keys(window.__VIDAA_STATE__).length > 0) {
            info.innerHTML += '<div style="margin-top:4px;">'
                + '<div>DV: ' + esc(window.__VIDAA_STATE__.dolbyVision || 'N/A') + '</div>'
                + '<div>HDR: ' + esc(window.__VIDAA_STATE__.hdr || 'N/A') + '</div>'
                + '<div>Codec: ' + esc(window.__VIDAA_STATE__.videoCodec || 'N/A') + '</div>'
                + '</div>';
        }
        document.body.appendChild(info);
        setTimeout(function() { if (info) info.remove(); }, 10000);
    }, {
        route: 'player',
        when: function() { return RT.store.get('stremio_stream_stats', null) === 'false'; }
    });
})();
