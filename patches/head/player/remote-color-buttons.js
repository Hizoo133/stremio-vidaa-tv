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

    // ═══════════════════════════════════════════════════════════════════════
    // Blue (406) — Skip Intro / Opening (+85 secondes)
    // ═══════════════════════════════════════════════════════════════════════
    window.__vidaaKeys.on('blue', function() {
        var vid = document.querySelector('video');
        if (!vid) return;
        var newTime = Math.min(vid.currentTime + 85, vid.duration || Infinity);
        vid.currentTime = newTime;
        RT.toast('⏩ Skip Intro (+85s)', {
            at: 'center',
            bg: 'rgba(37, 99, 235, 0.94)',
            ms: 1800,
            id: 'skip-intro-toast',
            extra: 'border:1px solid rgba(255,255,255,0.2);box-shadow:0 10px 25px rgba(0,0,0,0.6);backdrop-filter:blur(8px);padding:14px 28px;border-radius:12px;font-size:1.25rem;font-weight:700;'
        });
        log('Skip intro: sought forward 85s to', newTime);
    }, { route: 'player', priority: 600, suppress: true });

    // ═══════════════════════════════════════════════════════════════════════
    // Orange / Yellow (405) — Instant Language Preset Toggle
    // Mode 1: 🇫🇷 VF (Audio Français + Sous-titres désactivés)
    // Mode 2: 💬 VOSTFR (Audio VO/Original + Sous-titres Français)
    // ═══════════════════════════════════════════════════════════════════════
    var currentPresetMode = null; // 'VF' or 'VOSTFR'
    var lastVoAudioId = null;
    var lastSeenStreamUrl = null;

    function isFrenchAudioTrack(t) {
        if (!t) return false;
        var lang = (t.lang || t.language || '').toLowerCase().trim();
        var label = (t.label || t.name || t.title || '').toLowerCase().trim();
        if (lang === 'fr' || lang === 'fre' || lang === 'fra') return true;
        if (/\b(fr|fre|fra|french|francais|français|vf|vff|vfi|truefrench)\b/i.test(label)) return true;
        if (label.indexOf('french') !== -1 || label.indexOf('français') !== -1 || label.indexOf('francais') !== -1) return true;
        return false;
    }

    function isFrenchSubTrack(t) {
        if (!t) return false;
        var lang = (t.lang || t.language || '').toLowerCase().trim();
        var label = (t.label || t.name || t.title || t.group || '').toLowerCase().trim();
        if (lang === 'fr' || lang === 'fre' || lang === 'fra') return true;
        if (/\b(fr|fre|fra|french|francais|français|vostfr)\b/i.test(label)) return true;
        if (label.indexOf('french') !== -1 || label.indexOf('français') !== -1 || label.indexOf('francais') !== -1) return true;
        return false;
    }

    function isForcedSub(t) {
        if (!t) return false;
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
        var model = window.__STREMIO_PLAYER_MODEL__;
        if (!ctrl || typeof ctrl.state !== 'function') return;

        var state = ctrl.state() || {};
        var audioTracks = state.audioTracks || [];
        var subTracks = state.subtitlesTracks || [];
        var extraSubTracks = state.extraSubtitlesTracks || [];
        var curAudioId = state.selectedAudioTrackId;

        // Reset tracking on a new video
        var streamUrl = (state.stream && state.stream.url) || window.location.hash || '';
        if (streamUrl !== lastSeenStreamUrl) {
            lastSeenStreamUrl = streamUrl;
            currentPresetMode = null;
            lastVoAudioId = null;
        }

        // Identify currently active audio track
        var curAudio = null;
        for (var i = 0; i < audioTracks.length; i++) {
            if (audioTracks[i].id === curAudioId) { curAudio = audioTracks[i]; break; }
        }
        if (!curAudio && audioTracks.length > 0) {
            curAudio = audioTracks[0];
        }

        var curIsFrench = curAudio ? isFrenchAudioTrack(curAudio) : false;

        // Remember VO track when currently playing VO
        if (curAudio && !curIsFrench) {
            lastVoAudioId = curAudio.id;
        }

        // Determine target mode (toggle back and forth)
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
                ctrl.selectAudioTrack(frAudio.id);
                if (model && typeof model.updateStream === 'function') {
                    try { model.updateStream({ audioTrack: { id: frAudio.id } }); } catch(_) {}
                }

                // Turn off all subtitles
                ctrl.disableSubtitlesTracks();
                if (model && typeof model.updateStream === 'function') {
                    try { model.updateStream({ subtitleTrack: null }); } catch(_) {}
                }

                currentPresetMode = 'VF';
                showPresetToast('🇫🇷 VF (Français)', 'Audio : Français • Sous-titres : Désactivés', 'rgba(16, 185, 129, 0.94)');
                log('Switched to VF:', frAudio.id, frAudio.label);
            } else {
                showPresetToast('⚠️ VF Indisponible', 'Aucune piste audio française sur ce fichier', 'rgba(239, 68, 68, 0.94)');
            }
        } else {
            // ── Preset 2: VOSTFR (VO Audio + French Subtitles) ─────────────
            var voAudio = null;

            // A) Use the VO audio track we saved when previously in VO mode
            if (lastVoAudioId) {
                for (var k = 0; k < audioTracks.length; k++) {
                    if (audioTracks[k].id === lastVoAudioId && !isFrenchAudioTrack(audioTracks[k])) {
                        voAudio = audioTracks[k];
                        break;
                    }
                }
            }

            // B) Look for Japanese (for animes)
            if (!voAudio) {
                for (var j = 0; j < audioTracks.length; j++) {
                    var lJ = (audioTracks[j].lang || '').toLowerCase();
                    var nJ = (audioTracks[j].label || '').toLowerCase();
                    if (lJ === 'ja' || lJ === 'jpn' || nJ.indexOf('japan') !== -1 || nJ.indexOf('japonais') !== -1) {
                        voAudio = audioTracks[j];
                        break;
                    }
                }
            }

            // C) Look for English (for western movies/series)
            if (!voAudio) {
                for (var e = 0; e < audioTracks.length; e++) {
                    var lE = (audioTracks[e].lang || '').toLowerCase();
                    var nE = (audioTracks[e].label || '').toLowerCase();
                    if (lE === 'en' || lE === 'eng' || nE.indexOf('english') !== -1 || nE.indexOf('anglais') !== -1) {
                        voAudio = audioTracks[e];
                        break;
                    }
                }
            }

            // D) Fallback to any non-French track
            if (!voAudio) {
                for (var v = 0; v < audioTracks.length; v++) {
                    if (!isFrenchAudioTrack(audioTracks[v])) {
                        voAudio = audioTracks[v];
                        break;
                    }
                }
            }

            // E) Fallback to track 0 if nothing else matches
            if (!voAudio && audioTracks.length > 0) {
                voAudio = audioTracks[0];
            }

            var audioLabel = 'VO';
            if (voAudio) {
                ctrl.selectAudioTrack(voAudio.id);
                if (model && typeof model.updateStream === 'function') {
                    try { model.updateStream({ audioTrack: { id: voAudio.id } }); } catch(_) {}
                }
                audioLabel = voAudio.label || voAudio.lang || 'VO';
            }

            // Find French Subtitles (embedded or extra/addons)
            var frSubs = [];
            for (var s = 0; s < subTracks.length; s++) {
                if (isFrenchSubTrack(subTracks[s])) {
                    frSubs.push({ track: subTracks[s], extra: false });
                }
            }
            for (var x = 0; x < extraSubTracks.length; x++) {
                if (isFrenchSubTrack(extraSubTracks[x])) {
                    frSubs.push({ track: extraSubTracks[x], extra: true });
                }
            }

            // Prioritize non-forced French subtitles
            var selectedSub = null;
            for (var fs = 0; fs < frSubs.length; fs++) {
                if (!isForcedSub(frSubs[fs].track)) {
                    selectedSub = frSubs[fs];
                    break;
                }
            }
            if (!selectedSub && frSubs.length > 0) {
                selectedSub = frSubs[0];
            }

            if (selectedSub) {
                if (selectedSub.extra) {
                    ctrl.selectExtraSubtitlesTrack(selectedSub.track.id);
                    if (model && typeof model.updateStream === 'function') {
                        try { model.updateStream({ subtitleTrack: { id: selectedSub.track.id, embedded: false } }); } catch(_) {}
                    }
                } else {
                    ctrl.selectSubtitlesTrack(selectedSub.track.id);
                    if (model && typeof model.updateStream === 'function') {
                        try { model.updateStream({ subtitleTrack: { id: selectedSub.track.id, embedded: true } }); } catch(_) {}
                    }
                }

                currentPresetMode = 'VOSTFR';
                showPresetToast('💬 VOSTFR', 'Audio : ' + audioLabel + ' • Sous-titres : Français', 'rgba(59, 130, 246, 0.94)');
                log('Switched to VOSTFR with subs:', selectedSub.track.id);
            } else {
                currentPresetMode = 'VOSTFR';
                showPresetToast('💬 Audio VO activé', 'Audio : ' + audioLabel + ' • ⚠️ Aucun sous-titre FR trouvé', 'rgba(245, 158, 11, 0.94)');
                log('Switched to VO, no French subs found');
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
