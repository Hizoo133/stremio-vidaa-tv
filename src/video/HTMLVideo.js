// Deconstructed Theater 1.10.0 modules (HTMLVideo.js)
module.exports = {
  643: (e, t, r) => {
    var n = r(5852), i = r(5126), a = r(8816), s = r(5416);
    function o(e2) {
      var t2 = null !== (e2 = e2 || {}).timeChangedTimeout && isFinite(e2.timeChangedTimeout) ? parseInt(e2.timeChangedTimeout, 10) : 100, r2 = e2.containerElement;
      if (!(r2 instanceof HTMLElement)) throw new Error("Container element required to be instance of HTMLElement");
      var o2 = document.createElement("script");
      o2.type = "text/javascript", o2.src = "https://www.youtube.com/iframe_api", o2.onload = function() {
        if (g) return;
        if (!YT || "function" != typeof YT.ready) return void y();
        YT.ready((function() {
          g || (YT && YT.PlayerState && "function" == typeof YT.Player ? c = new YT.Player(l, { width: "100%", height: "100%", playerVars: { autoplay: 1, cc_load_policy: 3, controls: 0, disablekb: 1, enablejsapi: 1, fs: 0, iv_load_policy: 3, loop: 0, modestbranding: 1, playsinline: 1, rel: 0 }, events: { onError: T, onReady: b, onApiChange: E, onStateChange: S } }) : y());
        }));
      }, o2.onerror = y, r2.appendChild(o2);
      var l = document.createElement("div");
      l.style.width = "100%", l.style.height = "100%", l.style.backgroundColor = "black", r2.appendChild(l);
      var u = window.setInterval((function() {
        L("time"), L("volume"), L("muted"), L("playbackSpeed");
      }), t2), c = null, d = false, h = null, f = new n(), g = false, m = null, p = null, v = { stream: false, loaded: false, paused: false, time: false, duration: false, buffering: false, volume: false, muted: false, playbackSpeed: false, subtitlesTracks: false, selectedSubtitlesTrackId: false };
      function y() {
        g || k(Object.assign({}, s.YOUTUBE_VIDEO.API_LOAD_FAILED, { critical: true }));
      }
      function T(e3) {
        if (!g) {
          var t3;
          switch (e3.data) {
            case 2:
              t3 = s.YOUTUBE_VIDEO.INVALID_PARAMETER;
              break;
            case 5:
              t3 = s.YOUTUBE_VIDEO.HTML5_VIDEO;
              break;
            case 100:
              t3 = s.YOUTUBE_VIDEO.VIDEO_NOT_FOUND;
              break;
            case 101:
            case 150:
              t3 = s.YOUTUBE_VIDEO.VIDEO_NOT_EMBEDDABLE;
              break;
            default:
              t3 = s.UNKNOWN_ERROR;
          }
          k(Object.assign({}, t3, { critical: true, error: e3 }));
        }
      }
      function b() {
        g || (d = true, null !== h && (R("load", h), h = null));
      }
      function E() {
        g || ("function" == typeof c.loadModule && c.loadModule("captions"), "function" == typeof c.setOption && c.setOption("captions", "track", {}), L("paused"), L("time"), L("duration"), L("buffering"), L("volume"), L("muted"), L("playbackSpeed"), L("subtitlesTracks"), L("selectedSubtitlesTrackId"));
      }
      function S(e3) {
        switch (L("buffering"), e3.data) {
          case YT.PlayerState.ENDED:
            f.emit("ended");
            break;
          case YT.PlayerState.CUED:
          case YT.PlayerState.UNSTARTED:
          case YT.PlayerState.PAUSED:
          case YT.PlayerState.PLAYING:
            L("paused"), L("time"), L("duration");
        }
      }
      function A(e3) {
        switch (e3) {
          case "stream":
            return m;
          case "loaded":
            return null !== m || null;
          case "paused":
            return null === m || "function" != typeof c.getPlayerState ? null : c.getPlayerState() !== YT.PlayerState.PLAYING;
          case "time":
            return null !== m && "function" == typeof c.getCurrentTime && null !== c.getCurrentTime() && isFinite(c.getCurrentTime()) ? Math.floor(1e3 * c.getCurrentTime()) : null;
          case "duration":
            return null !== m && "function" == typeof c.getDuration && null !== c.getDuration() && isFinite(c.getDuration()) ? Math.floor(1e3 * c.getDuration()) : null;
          case "buffering":
            return null === m || "function" != typeof c.getPlayerState ? null : c.getPlayerState() === YT.PlayerState.BUFFERING;
          case "volume":
            return null !== m && "function" == typeof c.getVolume && null !== c.getVolume() && isFinite(c.getVolume()) ? c.getVolume() : null;
          case "muted":
            return null === m || "function" != typeof c.isMuted ? null : c.isMuted();
          case "playbackSpeed":
            return null !== m && "function" == typeof c.getPlaybackRate && null !== c.getPlaybackRate() && isFinite(c.getPlaybackRate()) ? c.getPlaybackRate() : null;
          case "subtitlesTracks":
            return null === m || "function" != typeof c.getOption ? [] : (c.getOption("captions", "tracklist") || []).filter((function(e4) {
              return e4 && "string" == typeof e4.languageCode;
            })).map((function(e4, t3) {
              return Object.freeze({ id: "EMBEDDED_" + String(t3), lang: e4.languageCode, label: "string" == typeof e4.displayName ? e4.displayName : e4.languageCode, origin: "EMBEDDED", embedded: true });
            }));
          case "selectedSubtitlesTrackId":
            return null === m ? null : p;
          default:
            return null;
        }
      }
      function k(e3) {
        f.emit("error", e3), e3.critical && R("unload");
      }
      function L(e3) {
        v[e3] && f.emit("propChanged", e3, A(e3));
      }
      function R(e3, t3) {
        switch (e3) {
          case "load":
            if (R("unload"), t3 && t3.stream && "string" == typeof t3.stream.ytId) if (d) {
              m = t3.stream, L("stream"), L("loaded");
              var n2 = "boolean" != typeof t3.autoplay || t3.autoplay, i2 = null !== t3.time && isFinite(t3.time) ? parseInt(t3.time, 10) / 1e3 : 0;
              n2 && "function" == typeof c.loadVideoById ? c.loadVideoById({ videoId: t3.stream.ytId, startSeconds: i2 }) : "function" == typeof c.cueVideoById && c.cueVideoById({ videoId: t3.stream.ytId, startSeconds: i2 }), L("paused"), L("time"), L("duration"), L("buffering"), L("volume"), L("muted"), L("playbackSpeed"), L("subtitlesTracks"), L("selectedSubtitlesTrackId");
            } else h = t3;
            else k(Object.assign({}, s.UNSUPPORTED_STREAM, { critical: true, stream: t3 ? t3.stream : null }));
            break;
          case "unload":
            h = null, m = null, L("stream"), L("loaded"), p = null, d && "function" == typeof c.stopVideo && c.stopVideo(), L("paused"), L("time"), L("duration"), L("buffering"), L("volume"), L("muted"), L("playbackSpeed"), L("subtitlesTracks"), L("selectedSubtitlesTrackId");
            break;
          case "destroy":
            R("unload"), g = true, f.removeAllListeners(), clearInterval(u), d && "function" == typeof c.destroy && c.destroy(), r2.removeChild(o2), r2.removeChild(l);
        }
      }
      this.on = function(e3, t3) {
        if (g) throw new Error("Video is destroyed");
        f.on(e3, t3);
      }, this.dispatch = function(e3) {
        if (g) throw new Error("Video is destroyed");
        if (e3) switch ((e3 = a(i(e3))).type) {
          case "observeProp":
            return t3 = e3.propName, void (v.hasOwnProperty(t3) && (f.emit("propValue", t3, A(t3)), v[t3] = true));
          case "setProp":
            return void (function(e4, t4) {
              switch (e4) {
                case "paused":
                  null !== m && (t4 ? "function" == typeof c.pauseVideo && c.pauseVideo() : "function" == typeof c.playVideo && c.playVideo());
                  break;
                case "time":
                  null !== m && "function" == typeof c.seekTo && null !== t4 && isFinite(t4) && c.seekTo(parseInt(t4, 10) / 1e3);
                  break;
                case "volume":
                  null !== m && null !== t4 && isFinite(t4) && ("function" == typeof c.unMute && c.unMute(), "function" == typeof c.setVolume && c.setVolume(Math.max(0, Math.min(100, parseInt(t4, 10)))), L("muted"), L("volume"));
                  break;
                case "muted":
                  null !== m && (t4 ? "function" == typeof c.mute && c.mute() : "function" == typeof c.unMute && c.unMute(), L("muted"));
                  break;
                case "playbackSpeed":
                  null !== m && "function" == typeof c.setPlaybackRate && isFinite(t4) && (c.setPlaybackRate(t4), L("playbackSpeed"));
                  break;
                case "selectedSubtitlesTrackId":
                  if (null !== m) {
                    p = null;
                    var r3 = A("subtitlesTracks").find((function(e5) {
                      return e5.id === t4;
                    }));
                    "function" == typeof c.setOption && (r3 ? (p = r3.id, c.setOption("captions", "track", { languageCode: r3.lang }), f.emit("subtitlesTrackLoaded", r3)) : c.setOption("captions", "track", {})), L("selectedSubtitlesTrackId");
                  }
              }
            })(e3.propName, e3.propValue);
          case "command":
            return void R(e3.commandName, e3.commandArgs);
        }
        var t3;
        throw new Error("Invalid action dispatched: " + JSON.stringify(e3));
      };
    }
    o.canPlayStream = function(e2) {
      return Promise.resolve(e2 && "string" == typeof e2.ytId);
    }, o.manifest = { name: "YouTubeVideo", external: false, props: ["stream", "loaded", "paused", "time", "duration", "buffering", "volume", "muted", "playbackSpeed", "subtitlesTracks", "selectedSubtitlesTrackId"], commands: ["load", "unload", "destroy"], events: ["propValue", "propChanged", "ended", "error", "subtitlesTrackLoaded"] }, e.exports = o;
  },
  3301: (e, t, r) => {
    var n = r(5852), i = r(5126), a = r(8816);
    e.exports = function(e2) {
      function t2(t3) {
        var r2 = new e2(t3 = t3 || {});
        r2.on("propValue", c.bind(null, "propValue")), r2.on("propChanged", c.bind(null, "propChanged")), e2.manifest.events.filter((function(e3) {
          return !["propValue", "propChanged"].includes(e3);
        })).forEach((function(e3) {
          r2.on(e3, /* @__PURE__ */ (function(e4) {
            return function() {
              o.emit.apply(o, [e4].concat(Array.from(arguments)));
            };
          })(e3));
        }));
        var s = null, o = new n(), l = false, u = { videoParams: false };
        function c(e3, t4, r3) {
          "videoParams" !== t4 && o.emit(e3, t4, d(t4, r3)), "stream" === t4 && (s = r3, (function(e4) {
            u[e4] && o.emit("propChanged", e4, d(e4, null));
          })("videoParams"));
        }
        function d(e3, t4) {
          return "videoParams" === e3 ? null === s ? null : { hash: s.behaviorHints && "string" == typeof s.behaviorHints.videoHash ? s.behaviorHints.videoHash : null, size: s.behaviorHints && null !== s.behaviorHints.videoSize && isFinite(s.behaviorHints.videoSize) ? s.behaviorHints.videoSize : null, filename: s.behaviorHints && "string" == typeof s.behaviorHints.filename ? s.behaviorHints.filename : null } : t4;
        }
        this.on = function(e3, t4) {
          if (l) throw new Error("Video is destroyed");
          o.on(e3, t4);
        }, this.dispatch = function(e3) {
          if (l) throw new Error("Video is destroyed");
          if (e3) switch ((e3 = a(i(e3))).type) {
            case "observeProp":
              if ("videoParams" === (n2 = e3.propName) && (o.emit("propValue", n2, d(n2, null)), u[n2] = true, 1)) return;
              break;
            case "command":
              if (t4 = e3.commandName, e3.commandArgs, "destroy" === t4 && (l = true, r2.dispatch({ type: "command", commandName: "destroy" }), o.removeAllListeners(), 1)) return;
          }
          var t4, n2;
          r2.dispatch(e3);
        };
      }
      return t2.canPlayStream = function(t3, r2) {
        return e2.canPlayStream(t3, r2);
      }, t2.manifest = { name: e2.manifest.name + "WithVideoParams", external: e2.manifest.external, props: e2.manifest.props.concat(["videoParams"]).filter((function(e3, t3, r2) {
        return r2.indexOf(e3) === t3;
      })), commands: e2.manifest.commands.concat(["destroy"]).filter((function(e3, t3, r2) {
        return r2.indexOf(e3) === t3;
      })), events: e2.manifest.events.concat(["propValue", "propChanged"]).filter((function(e3, t3, r2) {
        return r2.indexOf(e3) === t3;
      })) }, t2;
    };
  },
  4625: (e, t, r) => {
    var n = r(5852), i = r(2258), a = r(5126), s = r(8816), o = r(8742), l = r(5416), u = r(6224), c = r(3722);
    function d(e2) {
      var t2 = (e2 = e2 || {}).containerElement;
      if (!(t2 instanceof HTMLElement)) throw new Error("Container element required to be instance of HTMLElement");
      var r2 = document.createElement("style");
      t2.appendChild(r2), r2.sheet.insertRule("video::cue { font-size: 4vmin; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); text-shadow: -0.15rem -0.15rem 0.15rem rgb(34, 34, 34), 0px -0.15rem 0.15rem rgb(34, 34, 34), 0.15rem -0.15rem 0.15rem rgb(34, 34, 34), -0.15rem 0px 0.15rem rgb(34, 34, 34), 0.15rem 0px 0.15rem rgb(34, 34, 34), -0.15rem 0.15rem 0.15rem rgb(34, 34, 34), 0px 0.15rem 0.15rem rgb(34, 34, 34), 0.15rem 0.15rem 0.15rem rgb(34, 34, 34); }");
      var d2 = document.createElement("video");
      d2.style.width = "100%", d2.style.height = "100%", d2.style.backgroundColor = "black", d2.controls = false, d2.playsInline = true, d2.onerror = function() {
        !(function() {
          if (g) return;
          var e3;
          switch (d2.error.code) {
            case 1:
              e3 = l.HTML_VIDEO.MEDIA_ERR_ABORTED;
              break;
            case 2:
              e3 = l.HTML_VIDEO.MEDIA_ERR_NETWORK;
              break;
            case 3:
              e3 = l.HTML_VIDEO.MEDIA_ERR_DECODE;
              break;
            case 4:
              e3 = l.HTML_VIDEO.MEDIA_ERR_SRC_NOT_SUPPORTED;
              break;
            default:
              e3 = l.UNKNOWN_ERROR;
          }
          E(Object.assign({}, e3, { critical: true, error: d2.error }));
        })();
      }, d2.onended = function() {
        f.emit("ended");
      }, d2.onpause = function() {
        S("paused");
      }, d2.onplay = function() {
        S("paused");
      }, d2.ontimeupdate = function() {
        S("time"), S("buffered");
      }, d2.ondurationchange = function() {
        S("duration");
      }, d2.onwaiting = function() {
        S("buffering"), S("buffered");
      }, d2.onseeking = function() {
        S("time"), S("buffering"), S("buffered");
      }, d2.onseeked = function() {
        S("time"), S("buffering"), S("buffered");
      }, d2.onstalled = function() {
        S("buffering"), S("buffered");
      }, d2.onplaying = function() {
        S("time"), S("buffering"), S("buffered");
      }, d2.oncanplay = function() {
        S("buffering"), S("buffered");
      }, d2.canplaythrough = function() {
        S("buffering"), S("buffered");
      }, d2.onloadedmetadata = function() {
        S("loaded");
      }, d2.onloadeddata = function() {
        S("buffering"), S("buffered");
      }, d2.onvolumechange = function() {
        S("volume"), S("muted");
      }, d2.onratechange = function() {
        S("playbackSpeed");
      }, d2.textTracks.onchange = function() {
        S("subtitlesTracks"), S("selectedSubtitlesTrackId"), b(), Array.from(d2.textTracks).forEach((function(e3) {
          e3.oncuechange = b;
        }));
      }, t2.appendChild(d2);
      var h = null, f = new n(), g = false, m = null, p = 0, v = 1, y = { stream: false, loaded: false, paused: false, time: false, duration: false, buffering: false, buffered: false, subtitlesTracks: false, selectedSubtitlesTrackId: false, subtitlesOffset: false, subtitlesSize: false, subtitlesTextColor: false, subtitlesBackgroundColor: false, subtitlesOutlineColor: false, audioTracks: false, selectedAudioTrackId: false, volume: false, muted: false, playbackSpeed: false };
      function T(e3) {
        switch (e3) {
          case "stream":
            return m;
          case "loaded":
            return null === m ? null : d2.readyState >= d2.HAVE_METADATA;
          case "paused":
            return null === m ? null : !!d2.paused;
          case "time":
            return null !== m && null !== d2.currentTime && isFinite(d2.currentTime) ? Math.floor(1e3 * d2.currentTime) : null;
          case "duration":
            return null !== m && null !== d2.duration && isFinite(d2.duration) ? Math.floor(1e3 * d2.duration) : null;
          case "buffering":
            return null === m ? null : d2.readyState < d2.HAVE_FUTURE_DATA;
          case "buffered":
            if (null === m) return null;
            for (var t3 = null !== d2.currentTime && isFinite(d2.currentTime) ? d2.currentTime : 0, n2 = 0; n2 < d2.buffered.length; n2++) if (d2.buffered.start(n2) <= t3 && t3 <= d2.buffered.end(n2)) return Math.floor(1e3 * d2.buffered.end(n2));
            return Math.floor(1e3 * t3);
          case "subtitlesTracks":
            return null === m ? [] : Array.from(d2.textTracks).map((function(e4, t4) {
              return Object.freeze({ id: "EMBEDDED_" + String(t4), lang: e4.language, label: e4.label || null, origin: "EMBEDDED", embedded: true });
            }));
          case "selectedSubtitlesTrackId":
            return null === m ? null : Array.from(d2.textTracks).reduce((function(e4, t4, r3) {
              return null === e4 && "showing" === t4.mode ? "EMBEDDED_" + String(r3) : e4;
            }), null);
          case "subtitlesOffset":
            return g ? null : p;
          case "subtitlesSize":
            return g ? null : 25 * parseInt(r2.sheet.cssRules[0].style.fontSize, 10);
          case "subtitlesTextColor":
            return g ? null : r2.sheet.cssRules[0].style.color;
          case "subtitlesBackgroundColor":
            return g ? null : r2.sheet.cssRules[0].style.backgroundColor;
          case "subtitlesOutlineColor":
            return g ? null : r2.sheet.cssRules[0].style.textShadow.slice(0, r2.sheet.cssRules[0].style.textShadow.indexOf(")") + 1);
          case "subtitlesOpacity":
            return g ? null : Math.round(100 * v);
          case "audioTracks":
            return null !== h && Array.isArray(h.audioTracks) ? h.audioTracks.map((function(e4) {
              return Object.freeze({ id: "EMBEDDED_" + String(e4.id), lang: "string" == typeof e4.lang && e4.lang.length > 0 ? e4.lang : "string" == typeof e4.name && e4.name.length > 0 ? e4.name : String(e4.id), label: "string" == typeof e4.name && e4.name.length > 0 ? e4.name : "string" == typeof e4.lang && e4.lang.length > 0 ? e4.lang : String(e4.id), origin: "EMBEDDED", embedded: true });
            })) : [];
          case "selectedAudioTrackId":
            return null !== h && null !== h.audioTrack && isFinite(h.audioTrack) && -1 !== h.audioTrack ? "EMBEDDED_" + String(h.audioTrack) : null;
          case "volume":
            return g || null === d2.volume || !isFinite(d2.volume) ? null : Math.floor(100 * d2.volume);
          case "muted":
            return g ? null : !!d2.muted;
          case "playbackSpeed":
            return g || null === d2.playbackRate || !isFinite(d2.playbackRate) ? null : d2.playbackRate;
          default:
            return null;
        }
      }
      function b() {
        Array.from(d2.textTracks).forEach((function(e3) {
          Array.from(e3.cues || []).forEach((function(e4) {
            e4.snapToLines = false, e4.line = 100 - p;
          }));
        }));
      }
      function E(e3) {
        f.emit("error", e3), e3.critical && A("unload");
      }
      function S(e3) {
        y[e3] && f.emit("propChanged", e3, T(e3));
      }
      function A(e3, n2) {
        switch (e3) {
          case "load":
            A("unload"), n2 && n2.stream && "string" == typeof n2.stream.url ? (m = n2.stream, S("stream"), S("loaded"), d2.autoplay = "boolean" != typeof n2.autoplay || n2.autoplay, d2.currentTime = null !== n2.time && isFinite(n2.time) ? parseInt(n2.time, 10) / 1e3 : 0, S("paused"), S("time"), S("duration"), S("buffering"), S("buffered"), S("subtitlesTracks"), S("selectedSubtitlesTrackId"), S("audioTracks"), S("selectedAudioTrackId"), u(m).then((function(e4) {
              m === n2.stream && ("application/vnd.apple.mpegurl" === e4 && i.isSupported() ? ((h = new i(c)).on(i.Events.AUDIO_TRACKS_UPDATED, (function() {
                S("audioTracks"), S("selectedAudioTrackId");
              })), h.on(i.Events.AUDIO_TRACK_SWITCHED, (function() {
                S("audioTracks"), S("selectedAudioTrackId");
              })), h.loadSource(m.url), h.attachMedia(d2)) : d2.src = m.url);
            })).catch((function() {
              m === n2.stream && (d2.src = m.url);
            }))) : E(Object.assign({}, l.UNSUPPORTED_STREAM, { critical: true, stream: n2 ? n2.stream : null }));
            break;
          case "unload":
            m = null, Array.from(d2.textTracks).forEach((function(e4) {
              e4.oncuechange = null;
            })), null !== h && (h.removeAllListeners(), h.detachMedia(d2), h.destroy(), h = null), d2.removeAttribute("src"), d2.load(), d2.currentTime = 0, S("stream"), S("loaded"), S("paused"), S("time"), S("duration"), S("buffering"), S("buffered"), S("subtitlesTracks"), S("selectedSubtitlesTrackId"), S("audioTracks"), S("selectedAudioTrackId");
            break;
          case "destroy":
            A("unload"), g = true, S("subtitlesOffset"), S("subtitlesSize"), S("subtitlesTextColor"), S("subtitlesBackgroundColor"), S("subtitlesOutlineColor"), S("subtitlesOpacity"), S("volume"), S("muted"), S("playbackSpeed"), f.removeAllListeners(), d2.onerror = null, d2.onended = null, d2.onpause = null, d2.onplay = null, d2.ontimeupdate = null, d2.ondurationchange = null, d2.onwaiting = null, d2.onseeking = null, d2.onseeked = null, d2.onstalled = null, d2.onplaying = null, d2.oncanplay = null, d2.canplaythrough = null, d2.onloadeddata = null, d2.onvolumechange = null, d2.onratechange = null, d2.textTracks.onchange = null, t2.removeChild(d2), t2.removeChild(r2);
        }
      }
      this.on = function(e3, t3) {
        if (g) throw new Error("Video is destroyed");
        f.on(e3, t3);
      }, this.dispatch = function(e3) {
        if (g) throw new Error("Video is destroyed");
        if (e3) switch ((e3 = s(a(e3))).type) {
          case "observeProp":
            return t3 = e3.propName, void (y.hasOwnProperty(t3) && (f.emit("propValue", t3, T(t3)), y[t3] = true));
          case "setProp":
            return void (function(e4, t4) {
              switch (e4) {
                case "paused":
                  null !== m && (t4 ? d2.pause() : d2.play(), S("paused"));
                  break;
                case "time":
                  null !== m && null !== t4 && isFinite(t4) && (d2.currentTime = parseInt(t4, 10) / 1e3, S("time"));
                  break;
                case "selectedSubtitlesTrackId":
                  if (null !== m) {
                    Array.from(d2.textTracks).forEach((function(e5, r3) {
                      e5.mode = "EMBEDDED_" + String(r3) === t4 ? "showing" : "disabled";
                    }));
                    var n2 = T("subtitlesTracks").find((function(e5) {
                      return e5.id === t4;
                    }));
                    n2 && (S("selectedSubtitlesTrackId"), f.emit("subtitlesTrackLoaded", n2));
                  }
                  break;
                case "subtitlesOffset":
                  null !== t4 && isFinite(t4) && (p = Math.max(0, Math.min(100, parseInt(t4, 10))), b(), S("subtitlesOffset"));
                  break;
                case "subtitlesSize":
                  null !== t4 && isFinite(t4) && (r2.sheet.cssRules[0].style.fontSize = Math.floor(Math.max(0, parseInt(t4, 10)) / 25) + "vmin", S("subtitlesSize"));
                  break;
                case "subtitlesTextColor":
                  if ("string" == typeof t4) {
                    try {
                      r2.sheet.cssRules[0].style.color = o(t4).rgb().string();
                    } catch (e5) {
                      console.error("HTMLVideo", e5);
                    }
                    S("subtitlesTextColor");
                  }
                  break;
                case "subtitlesBackgroundColor":
                  if ("string" == typeof t4) {
                    try {
                      r2.sheet.cssRules[0].style.backgroundColor = o(t4).rgb().string();
                    } catch (e5) {
                      console.error("HTMLVideo", e5);
                    }
                    S("subtitlesBackgroundColor");
                  }
                  break;
                case "subtitlesOutlineColor":
                  if ("string" == typeof t4) {
                    try {
                      var i2 = o(t4).rgb().string();
                      r2.sheet.cssRules[0].style.textShadow = "-0.15rem -0.15rem 0.15rem " + i2 + ", 0px -0.15rem 0.15rem " + i2 + ", 0.15rem -0.15rem 0.15rem " + i2 + ", -0.15rem 0px 0.15rem " + i2 + ", 0.15rem 0px 0.15rem " + i2 + ", -0.15rem 0.15rem 0.15rem " + i2 + ", 0px 0.15rem 0.15rem " + i2 + ", 0.15rem 0.15rem 0.15rem " + i2;
                    } catch (e5) {
                      console.error("HTMLVideo", e5);
                    }
                    S("subtitlesOutlineColor");
                  }
                  break;
                case "subtitlesOpacity":
                  if ("number" == typeof t4) {
                    try {
                      v = Math.min(Math.max(t4 / 100, 0), 1), r2.sheet.cssRules[0].style.opacity = v + "";
                    } catch (e5) {
                      console.error("VVideo with HTML Subtitles", e5);
                    }
                    S("subtitlesOpacity");
                  }
                  break;
                case "selectedAudioTrackId":
                  if (null !== h) {
                    var a2 = T("audioTracks").find((function(e5) {
                      return e5.id === t4;
                    }));
                    h.audioTrack = a2 ? parseInt(a2.id.split("_").pop(), 10) : -1, a2 && (S("selectedAudioTrackId"), f.emit("audioTrackLoaded", a2));
                  }
                  break;
                case "volume":
                  null !== t4 && isFinite(t4) && (d2.muted = false, d2.volume = Math.max(0, Math.min(100, parseInt(t4, 10))) / 100, S("muted"), S("volume"));
                  break;
                case "muted":
                  d2.muted = !!t4, S("muted");
                  break;
                case "playbackSpeed":
                  null !== t4 && isFinite(t4) && (d2.playbackRate = parseFloat(t4), S("playbackSpeed"));
              }
            })(e3.propName, e3.propValue);
          case "command":
            return void A(e3.commandName, e3.commandArgs);
        }
        var t3;
        throw new Error("Invalid action dispatched: " + JSON.stringify(e3));
      };
    }
    d.canPlayStream = function(e2) {
      return !e2 ? Promise.resolve(false) : u(e2).then((function(e3) {
        return !!document.createElement("video").canPlayType(e3) || "application/vnd.apple.mpegurl" === e3 && i.isSupported();
      })).catch((function() {
        return false;
      }));
    }, d.manifest = { name: "HTMLVideo", external: false, props: ["stream", "loaded", "paused", "time", "duration", "buffering", "buffered", "audioTracks", "selectedAudioTrackId", "subtitlesTracks", "selectedSubtitlesTrackId", "subtitlesOffset", "subtitlesSize", "subtitlesTextColor", "subtitlesBackgroundColor", "subtitlesOutlineColor", "subtitlesOpacity", "volume", "muted", "playbackSpeed"], commands: ["load", "unload", "destroy"], events: ["propValue", "propChanged", "ended", "error", "subtitlesTrackLoaded", "audioTrackLoaded"] }, e.exports = d;
  },
  6253: (e, t, r) => {
    var n = r(5852), i = r(5126), a = r(8816), s = r(5416), o = r(2152);
    function l(e2, t2, r2, n2) {
      t2 && (e2.onSuccess = t2 || function() {
      }), e2.onFailure = function(t3) {
        console.log("WebOS", (e2.method || n2) + " [fail][" + t3.errorCode + "] " + t3.errorText), console.log("fail result", JSON.stringify(t3)), r2 && r2();
      }, window.webOS.service.request(n2 || "luna://com.webos.media", e2);
    }
    var u = ["none", "black", "white", "yellow", "red", "green", "blue"], c = { "rgba(0, 0, 0, 0)": "none", "rgba(0, 0, 0, 255)": "black", "rgba(255, 255, 255, 255)": "white", "rgba(255, 255, 0, 255)": "yellow", "rgba(255, 0, 0, 255)": "red", "rgba(0, 255, 0, 255)": "green", "rgba(0, 0, 255, 255)": "blue", "rgba(0, 0, 0, 1)": "black", "rgba(255, 255, 255, 1)": "white", "rgba(255, 255, 0, 1)": "yellow", "rgba(255, 0, 0, 1)": "red", "rgba(0, 255, 0, 1)": "green", "rgba(0, 0, 255, 1)": "blue", "rgb(0, 0, 0)": "black", "rgb(255, 255, 255)": "white", "rgb(255, 255, 0)": "yellow", "rgb(255, 0, 0)": "red", "rgb(0, 255, 0)": "green", "rgb(0, 0, 255)": "blue", "#000000FF": "black", "#FFFFFFFF": "white", "#FFFF00FF": "yellow", "#FF0000FF": "red", "#00FF00FF": "green", "#0000FFFF": "blue", "#000000": "black", "#FFFFFF": "white", "#FFFF00": "yellow", "#FF0000": "red", "#00FF00": "green", "#0000FF": "blue" };
    var d = { unsupportedAudio: ["DTS", "TRUEHD"], unsupportedSubs: ["HDMV/PGS", "VOBSUB"] }, h = false;
    function f() {
      h || window.webOS.service.request("luna://com.webos.service.config", { method: "getConfigs", parameters: { configNames: ["tv.model.edidType"] }, onSuccess: function(e2) {
        if (((e2 || {}).configs || {})["tv.model.edidType"]) {
          h = true;
          var t2 = e2.configs["tv.model.edidType"].toLowerCase();
          t2.includes("dts") && (d.unsupportedAudio = d.unsupportedAudio.filter((function(e3) {
            return "DTS" !== e3;
          }))), t2.includes("truehd") && (d.unsupportedAudio = d.unsupportedAudio.filter((function(e3) {
            return "TRUEHD" !== e3;
          })));
        }
      }, onFailure: function(e2) {
        console.log("could not get deviceInfo", e2);
      } });
    }
    function g(e2) {
      var t2 = (e2 = e2 || {}).containerElement;
      if (!(t2 instanceof HTMLElement)) throw new Error("Container element required to be instance of HTMLElement");
      var r2 = null, h2 = 75, g2 = true, m = false, p = false, v = [], y = [], T = { color: "white", font_size: 1, bg_color: "none", position: -1, bg_opacity: 0, char_opacity: 255 }, b = function(e3) {
        S.mediaId && (g2 = !e3, l({ method: "setSubtitleEnable", parameters: { mediaId: S.mediaId, enable: e3 } }));
      }, E = document.createElement("style");
      t2.appendChild(E), E.sheet.insertRule("video::cue { font-size: 4vmin; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); text-shadow: rgb(34, 34, 34) 1px 1px 0.1em; }");
      var S = document.createElement("video");
      S.style.width = "100%", S.style.height = "100%", S.style.backgroundColor = "black", S.controls = false, S.onerror = function() {
        !(function() {
          if (I) return;
          var e3;
          switch ((S.error || {}).code) {
            case 1:
              e3 = s.HTML_VIDEO.MEDIA_ERR_ABORTED;
              break;
            case 2:
              e3 = s.HTML_VIDEO.MEDIA_ERR_NETWORK;
              break;
            case 3:
              e3 = s.HTML_VIDEO.MEDIA_ERR_DECODE;
              break;
            case 4:
              e3 = s.HTML_VIDEO.MEDIA_ERR_SRC_NOT_SUPPORTED;
              break;
            default:
              e3 = s.UNKNOWN_ERROR;
          }
          U(Object.assign({}, e3, { critical: true, error: S.error }));
        })();
      }, S.onended = function() {
        R.emit("ended");
      }, S.onpause = function() {
        B("paused");
      }, S.onplay = function() {
        B("paused");
      }, S.ontimeupdate = function() {
        B("time"), B("buffered");
      }, S.ondurationchange = function() {
        B("duration");
      }, S.onwaiting = function() {
        B("buffering"), B("buffered");
      }, S.onseeking = function() {
        B("buffering"), B("buffered");
      }, S.onseeked = function() {
        B("buffering"), B("buffered");
      }, S.onstalled = function() {
        B("buffering"), B("buffered");
      }, S.onplaying = function() {
        B("buffering"), B("buffered"), r2 || (r2 = true, B("loaded"));
      }, S.oncanplay = function() {
        B("buffering"), B("buffered");
      }, S.canplaythrough = function() {
        B("buffering"), B("buffered");
      }, S.onloadeddata = function() {
        B("buffering"), B("buffered");
      }, S.onloadedmetadata = function() {
        B("buffering"), B("buffered"), G("time", D);
      }, S.onvolumechange = function() {
        B("volume"), B("muted");
      }, S.onratechange = function() {
        B("playbackSpeed");
      }, S.textTracks.onchange = function() {
        B("subtitlesTracks"), B("selectedSubtitlesTrackId"), N(), Array.from(S.textTracks).forEach((function(e3) {
          e3.oncuechange = N;
        }));
      }, t2.appendChild(S);
      var A = null, k = null, L = 1, R = new n(), I = false, w = null, D = null, C = 0, x = 100, _ = { stream: false, loaded: false, paused: false, time: false, duration: false, buffering: false, buffered: false, subtitlesTracks: false, selectedSubtitlesTrackId: false, subtitlesOffset: false, subtitlesSize: false, subtitlesTextColor: false, subtitlesBackgroundColor: false, subtitlesOpacity: false, audioTracks: false, selectedAudioTrackId: false, volume: false, muted: false, playbackSpeed: false }, O = false, P = { audio: [], subs: [] };
      function M() {
        O || null === w || (O = true, o(w.url, (function(e3) {
          var t3 = 0, r3 = 0;
          v = [], y = [], e3 && (P = e3), ((P || {}).subs || []).length && (P.subs.forEach((function(e4) {
            if (!d.unsupportedSubs.includes(e4.codec || "")) {
              var r4 = t3;
              t3++, m || v.length || (m = r4), v.push({ id: "EMBEDDED_" + r4, lang: e4.lang || "eng", label: e4.label || null, origin: "EMBEDDED", embedded: true, mode: r4 === m ? "showing" : "disabled" });
            }
          })), B("subtitlesTracks"), B("selectedSubtitlesTrackId")), ((P || {}).audio || []).length && (P.audio.forEach((function(e4) {
            if (!d.unsupportedAudio.includes(e4.codec || "")) {
              var t4 = r3;
              r3++, p || y.length || (p = t4), y.push({ id: "EMBEDDED_" + t4, lang: e4.lang || "eng", label: e4.label || null, origin: "EMBEDDED", embedded: true, mode: t4 === p ? "showing" : "disabled" });
            }
          })), p = "EMBEDDED_0", B("audioTracks"), B("selectedAudioTrackId"));
        })));
      }
      function F(e3) {
        switch (e3) {
          case "stream":
            return w;
          case "loaded":
            return r2;
          case "paused":
            return null === w ? null : !!S.paused;
          case "time":
            return null !== w && null !== S.currentTime && isFinite(S.currentTime) ? Math.floor(1e3 * S.currentTime) : null;
          case "duration":
            return null !== w && null !== S.duration && isFinite(S.duration) ? Math.floor(1e3 * S.duration) : null;
          case "buffering":
            return null === w ? null : S.readyState < S.HAVE_FUTURE_DATA;
          case "buffered":
            if (null === w) return null;
            for (var t3 = null !== S.currentTime && isFinite(S.currentTime) ? S.currentTime : 0, n2 = 0; n2 < S.buffered.length; n2++) if (S.buffered.start(n2) <= t3 && t3 <= S.buffered.end(n2)) return Math.floor(1e3 * S.buffered.end(n2));
            return Math.floor(1e3 * t3);
          case "subtitlesTracks":
            return null === w ? [] : v;
          case "selectedSubtitlesTrackId":
            return null === w || g2 ? null : m;
          case "subtitlesOffset":
            return I ? null : C;
          case "subtitlesSize":
            return I ? null : h2;
          case "subtitlesTextColor":
            return I ? null : A || "rgb(255, 255, 255)";
          case "subtitlesBackgroundColor":
            return I ? null : k || "rgba(0, 0, 0, 0)";
          case "subtitlesOpacity":
            return I ? null : x || 100;
          case "audioTracks":
            return y;
          case "selectedAudioTrackId":
            return p;
          case "volume":
            return I || null === S.volume || !isFinite(S.volume) ? null : Math.floor(100 * S.volume);
          case "muted":
            return I ? null : !!S.muted;
          case "playbackSpeed":
            return I || null === L || !isFinite(L) ? null : L;
          default:
            return null;
        }
      }
      function N() {
        Array.from(S.textTracks).forEach((function(e3) {
          Array.from(e3.cues || []).forEach((function(e4) {
            e4.snapToLines = false, e4.line = 100 - C;
          }));
        }));
      }
      function U(e3) {
        R.emit("error", e3), e3.critical && V("unload");
      }
      function B(e3) {
        _[e3] && R.emit("propChanged", e3, F(e3));
      }
      function G(e3, t3) {
        switch (e3) {
          case "paused":
            null !== w && (t3 ? S.pause() : S.play());
            break;
          case "time":
            if (null !== w && S.readyState >= S.HAVE_METADATA && null !== t3 && isFinite(t3)) try {
              S.currentTime = parseInt(t3, 10) / 1e3, B("time");
            } catch (e4) {
            }
            break;
          case "selectedSubtitlesTrackId":
            if (S.mediaId && null !== w && 0 === (t3 || "").indexOf("EMBEDDED_")) {
              b(true), T.bg_opacity = "none" === T.bg_color ? 0 : 255, ["setSubtitleCharacterColor", "setSubtitleBackgroundColor", "setSubtitlePosition", "setSubtitleFontSize", "setSubtitleBackgroundOpacity", "setSubtitleCharacterOpacity"].forEach((function(e4) {
                l({ method: e4, parameters: { mediaId: S.mediaId, charColor: T.color, bgColor: "none" === T.bg_color ? "black" : T.bg_color, position: T.position, fontSize: T.font_size, bgOpacity: T.bg_opacity, charOpacity: T.char_opacity } });
              })), console.log("WebOS", "change subtitles for id: ", S.mediaId, " index:", t3), m = t3;
              var r3 = parseInt(t3.replace("EMBEDDED_", ""));
              console.log("set subs to track idx: " + r3), setTimeout((function() {
                var e4 = function() {
                  var e5 = F("subtitlesTracks").find((function(e6) {
                    return e6.id === t3;
                  }));
                  v = v.map((function(e6) {
                    return e6.mode = e6.id === m ? "showing" : "disabled", e6;
                  })), e5 && (R.emit("subtitlesTrackLoaded", e5), B("selectedSubtitlesTrackId"));
                };
                l({ method: "selectTrack", parameters: { type: "text", mediaId: S.mediaId, index: r3 } }, e4, e4);
              }), 500);
            }
            -1 === (t3 || "").indexOf("EMBEDDED_") && (m = null, B("selectedSubtitlesTrackId"), b(false));
            break;
          case "subtitlesOffset":
            if (null !== t3 && isFinite(t3)) {
              C = t3;
              var n2 = (f2 = Math.max(0, Math.min(100, parseInt(C, 10)))) <= 0 ? -3 : f2 <= 5 ? -2 : f2 <= 10 ? 0 : f2 <= 15 ? 2 : f2 <= 20 && 4;
              false === n2 && (n2 = -2), T.position = n2, S.mediaId && l({ method: "setSubtitlePosition", parameters: { mediaId: S.mediaId, position: n2 } }), B("subtitlesOffset");
            }
            break;
          case "subtitlesSize":
            if (null !== t3 && isFinite(t3)) {
              h2 = t3;
              var i2 = (d2 = Math.max(0, parseInt(h2, 10))) <= 100 ? 1 : d2 <= 125 ? 2 : d2 <= 150 ? 3 : d2 <= 200 && 4;
              false === i2 && (i2 = 1), T.font_size = i2, S.mediaId && l({ method: "setSubtitleFontSize", parameters: { mediaId: S.mediaId, fontSize: i2 } }), B("subtitlesSize");
            }
            break;
          case "subtitlesTextColor":
            if ("string" == typeof t3) {
              var a2 = "white";
              c[t3] && u.indexOf(c[t3]) > -1 && (a2 = c[t3]), T.color = a2, S.mediaId && l({ method: "setSubtitleCharacterColor", parameters: { mediaId: S.mediaId, charColor: a2 } }), A = t3, B("subtitlesTextColor");
            }
            break;
          case "subtitlesBackgroundColor":
            "string" == typeof t3 && (c[t3] && u.indexOf(c[t3]) > -1 && (T.bg_color = c[t3], S.mediaId && (l({ method: "setSubtitleBackgroundColor", parameters: { mediaId: S.mediaId, bgColor: "none" === c[t3] ? "black" : c[t3] } }), l("none" === c[t3] ? { method: "setSubtitleBackgroundOpacity", parameters: { mediaId: S.mediaId, bgOpacity: 0 } } : { method: "setSubtitleBackgroundOpacity", parameters: { mediaId: S.mediaId, bgOpacity: 255 } }))), k = t3, B("subtitlesBackgroundColor"));
            break;
          case "subtitlesOpacity":
            if ("number" == typeof t3) {
              var s2 = Math.floor(t3 / 100 * 255);
              T.char_opacity = s2, S.mediaId && l({ method: "setSubtitleCharacterOpacity", parameters: { mediaId: S.mediaId, charOpacity: s2 } }), x = t3, B("subtitlesOpacity");
            }
            break;
          case "selectedAudioTrackId":
            if (0 === (t3 || "").indexOf("EMBEDDED_")) {
              p = t3;
              r3 = parseInt(t3.replace("EMBEDDED_", ""));
              if (S.mediaId && l({ method: "selectTrack", parameters: { type: "audio", mediaId: S.mediaId, index: r3 } }, (function() {
                var e4 = F("audioTracks").find((function(e5) {
                  return e5.id === t3;
                }));
                y = y.map((function(e5) {
                  return e5.mode = e5.id === p ? "showing" : "disabled", e5;
                })), e4 && (R.emit("audioTrackLoaded", e4), B("selectedAudioTrackId"));
              })), S && S.audioTracks) {
                for (var o2 = 0; o2 < S.audioTracks.length; o2++) S.audioTracks[o2].enabled = false;
                S.audioTracks[r3] && (S.audioTracks[r3].enabled = true);
              }
            }
            break;
          case "volume":
            null !== t3 && isFinite(t3) && (S.muted = false, S.volume = Math.max(0, Math.min(100, parseInt(t3, 10))) / 100);
            break;
          case "muted":
            S.muted = !!t3;
            break;
          case "playbackSpeed":
            null !== t3 && isFinite(t3) && (L = parseFloat(t3), S.mediaId && l({ method: "setPlayRate", parameters: { mediaId: S.mediaId, playRate: L, audioOutput: true } }), B("playbackSpeed"));
        }
        var d2, f2;
      }
      function V(e3, r3) {
        switch (e3) {
          case "load":
            if (r3 && r3.stream && "string" == typeof r3.stream.url) {
              w = r3.stream, D = r3.time, B("stream"), S.autoplay = "boolean" != typeof r3.autoplay || r3.autoplay, B("loaded"), B("paused"), B("time"), B("duration"), B("buffering"), B("buffered"), B("subtitlesTracks"), B("selectedSubtitlesTrackId"), B("audioTracks"), B("selectedAudioTrackId");
              var n2 = 0;
              S.src = w.url, i2 = function() {
                try {
                  S.load();
                } catch (e4) {
                }
                try {
                  S.play();
                } catch (e4) {
                }
              }, a2 = setInterval((function() {
                if (S.mediaId) return clearInterval(a2), M(), f(), void i2();
                ++n2 > 4 && (clearInterval(a2), M(), f(), i2());
              }), 300);
            } else U(Object.assign({}, s.UNSUPPORTED_STREAM, { critical: true, stream: r3 ? r3.stream : null }));
            break;
          case "unload":
            w = null, D = null, Array.from(S.textTracks).forEach((function(e4) {
              e4.oncuechange = null;
            })), S.removeAttribute("src"), S.load(), B("stream"), B("paused"), B("time"), B("duration"), B("buffering"), B("buffered"), B("subtitlesTracks"), B("selectedSubtitlesTrackId"), B("audioTracks"), B("selectedAudioTrackId");
            break;
          case "destroy":
            V("unload"), I = true, B("subtitlesOffset"), B("subtitlesSize"), B("subtitlesTextColor"), B("subtitlesBackgroundColor"), B("subtitlesOpacity"), B("volume"), B("muted"), B("playbackSpeed"), R.removeAllListeners(), S.onerror = null, S.onended = null, S.onpause = null, S.onplay = null, S.ontimeupdate = null, S.ondurationchange = null, S.onwaiting = null, S.onseeking = null, S.onseeked = null, S.onstalled = null, S.onplaying = null, S.oncanplay = null, S.canplaythrough = null, S.onloadeddata = null, S.onloadedmetadata = null, S.onvolumechange = null, S.onratechange = null, S.textTracks.onchange = null, t2.removeChild(S), t2.removeChild(E);
        }
        var i2, a2;
      }
      this.on = function(e3, t3) {
        if (I) throw new Error("Video is destroyed");
        R.on(e3, t3);
      }, this.dispatch = function(e3) {
        if (I) throw new Error("Video is destroyed");
        if (e3) switch ((e3 = a(i(e3))).type) {
          case "observeProp":
            return t3 = e3.propName, void (_.hasOwnProperty(t3) && (R.emit("propValue", t3, F(t3)), _[t3] = true));
          case "setProp":
            return void G(e3.propName, e3.propValue);
          case "command":
            return void V(e3.commandName, e3.commandArgs);
        }
        var t3;
        throw new Error("Invalid action dispatched: " + JSON.stringify(e3));
      };
    }
    g.canPlayStream = function() {
      return Promise.resolve(true);
    }, g.manifest = { name: "WebOsVideo", external: false, props: ["stream", "loaded", "paused", "time", "duration", "buffering", "buffered", "audioTracks", "selectedAudioTrackId", "subtitlesTracks", "selectedSubtitlesTrackId", "subtitlesOffset", "subtitlesSize", "subtitlesTextColor", "subtitlesBackgroundColor", "subtitlesOpacity", "volume", "muted", "playbackSpeed"], commands: ["load", "unload", "destroy"], events: ["propValue", "propChanged", "ended", "error", "subtitlesTrackLoaded", "audioTrackLoaded"] }, e.exports = g;
  },
  7241: (e, t, r) => {
    var n = r(5852), i = r(5126), a = r(8816), s = r(5416), o = 66e-4, l = { loaded: "loaded", stream: null, paused: "pause", time: "time-pos", duration: "duration", buffering: "buffering", volume: "volume", muted: "mute", playbackSpeed: "speed", audioTracks: "audioTracks", selectedAudioTrackId: "aid", subtitlesTracks: "subtitlesTracks", selectedSubtitlesTrackId: "sid", subtitlesSize: "sub-scale", subtitlesOffset: "sub-pos", subtitlesDelay: "sub-delay", subtitlesTextColor: "sub-color", subtitlesBackgroundColor: "sub-back-color", subtitlesOutlineColor: "sub-border-color" };
    function u(e2) {
      return e2.split(".").slice(0, 2).map((function(e3) {
        return parseInt(e3);
      }));
    }
    function c(e2) {
      var t2, r2 = (e2 = e2 || {}).shellTransport, c2 = {}, d = {}, h = {};
      Object.keys(l).forEach((function(e3) {
        l[e3] && (h[l[e3]] = e3);
      }));
      var f = new Promise((function(e3) {
        t2 = e3;
      }));
      k("unload"), r2.send("mpv-command", ["stop"]), r2.send("mpv-observe-prop", "path"), r2.send("mpv-observe-prop", "time-pos"), r2.send("mpv-observe-prop", "volume"), r2.send("mpv-observe-prop", "pause"), r2.send("mpv-observe-prop", "seeking"), r2.send("mpv-observe-prop", "eof-reached"), r2.send("mpv-observe-prop", "duration"), r2.send("mpv-observe-prop", "metadata"), r2.send("mpv-observe-prop", "video-params"), r2.send("mpv-observe-prop", "track-list"), r2.send("mpv-observe-prop", "paused-for-cache"), r2.send("mpv-observe-prop", "cache-buffering-state"), r2.send("mpv-observe-prop", "aid"), r2.send("mpv-observe-prop", "vid"), r2.send("mpv-observe-prop", "sid"), r2.send("mpv-observe-prop", "sub-scale"), r2.send("mpv-observe-prop", "sub-pos"), r2.send("mpv-observe-prop", "sub-delay"), r2.send("mpv-observe-prop", "speed"), r2.send("mpv-observe-prop", "mpv-version"), r2.send("mpv-observe-prop", "ffmpeg-version");
      var g = new n(), m = false, p = null, v = 0;
      function y(t3) {
        for (var r3 = t3 ? "" : "transparent", n2 = e2.containerElement; n2; n2 = n2.parentElement) n2.style.background = r3;
        if (((window || {}).document || {}).getElementsByTagName) {
          var i2 = window.document.getElementsByTagName("body");
          (i2 || [])[0] && (i2[0].style.background = r3);
        }
      }
      function T(e3) {
        console.log(e3.name + ": " + e3.data);
      }
      var b = 0;
      function E(e3) {
        return l[e3] ? d[l[e3]] : (console.log("Unsupported prop requested", e3), null);
      }
      function S(e3) {
        g.emit("error", e3), e3.critical && k("unload");
      }
      function A(e3) {
        c2[e3] && g.emit("propChanged", e3, E(e3));
      }
      function k(t3, n2) {
        switch (t3) {
          case "load":
            k("unload"), n2 && n2.stream && "string" == typeof n2.stream.url ? f.then((function(t4) {
              p = n2.stream, A("stream");
              var i2 = n2.assSubtitlesStyling ? "strip" : "no";
              r2.send("mpv-set-prop", ["sub-ass-override", i2]);
              var a2 = n2.hardwareDecoding ? "auto-copy" : "no";
              r2.send("mpv-set-prop", ["hwdec", a2]);
              var s2 = "windows" === n2.platform ? null === n2.videoMode ? "gpu-next" : "gpu" : "libmpv";
              r2.send("mpv-set-prop", ["vo", s2]);
              var o2 = e2.mpvSeparateWindow ? "yes" : "no";
              r2.send("mpv-set-prop", ["osc", o2]), r2.send("mpv-set-prop", ["input-default-bindings", o2]), r2.send("mpv-set-prop", ["input-vo-keyboard", o2]);
              var l2, c3, h2, f2 = Math.floor(parseInt(n2.time, 10) / 1e3) || 0;
              0 !== f2 ? (l2 = "0.39", c3 = u(t4), h2 = u(l2), c3[0] > h2[0] || !(c3[0] < h2[0]) && c3[1] >= h2[1] ? r2.send("mpv-command", ["loadfile", p.url, "replace", "-1", "start=+" + f2]) : r2.send("mpv-command", ["loadfile", p.url, "replace", "start=+" + f2])) : r2.send("mpv-command", ["loadfile", p.url]), r2.send("mpv-set-prop", ["pause", false]), r2.send("mpv-set-prop", ["speed", d.speed]), d.aid && ("string" == typeof d.aid && d.aid.startsWith("EMBEDDED_") ? r2.send("mpv-set-prop", ["aid", d.aid.slice(9)]) : r2.send("mpv-set-prop", ["aid", d.aid])), r2.send("mpv-set-prop", ["mute", "no"]), A("paused"), A("time"), A("duration"), A("buffering"), A("muted"), A("subtitlesTracks"), A("selectedSubtitlesTrackId");
            })) : S(Object.assign({}, s.UNSUPPORTED_STREAM, { critical: true, stream: n2 ? n2.stream : null }));
            break;
          case "unload":
            d = { loaded: false, pause: false, mute: false, speed: 1, subtitlesTracks: [], audioTracks: [], buffering: false, aid: null, sid: null }, v = 0, r2.send("mpv-command", ["stop"]), A("loaded"), A("stream"), A("paused"), A("time"), A("duration"), A("buffering"), A("muted"), A("subtitlesTracks"), A("selectedSubtitlesTrackId"), y(true);
            break;
          case "destroy":
            k("unload"), m = true, g.removeAllListeners();
        }
      }
      r2.on("mpv-prop-change", (function(e3) {
        switch (e3.name) {
          case "mpv-version":
            t2(e3.data), d[e3.name] = T(e3);
            break;
          case "ffmpeg-version":
            d[e3.name] = T(e3);
            break;
          case "duration":
            var r3 = 0 | e3.data;
            d[e3.name] = e3.data >= 30 && (!v || r3 === v) ? Math.round(1e3 * e3.data) : null, v = v ? v + r3 >> 1 : r3, d.loaded = r3 > 0, d.loaded && (y(false), A("loaded"));
            break;
          case "time-pos":
          case "sub-delay":
            d[e3.name] = Math.round(1e3 * e3.data);
            break;
          case "sub-scale":
            d[e3.name] = Math.round(e3.data / o);
            break;
          case "sub-pos":
            d[e3.name] = 100 - e3.data;
            break;
          case "volume":
            "number" == typeof e3.data && isFinite(e3.data) && (d[e3.name] = e3.data, A("volume"));
            break;
          case "paused-for-cache":
          case "seeking":
            d.buffering !== e3.data && (d.buffering = e3.data, A("buffering"));
            break;
          case "aid":
          case "sid":
          case "vid":
            d[e3.name] = (function(e4) {
              return e4.data && "no" !== e4.data ? "EMBEDDED_" + e4.data.toString() : null;
            })(e3);
            break;
          case "track-list":
            d.audioTracks = e3.data.filter((function(e4) {
              return "audio" === e4.type;
            })).map((function(e4, t3) {
              return { id: "EMBEDDED_" + e4.id, lang: void 0 === e4.lang ? "Track" + (t3 + 1) : e4.lang, label: void 0 === e4.title || void 0 === e4.lang ? "" : e4.title || e4.lang, origin: "EMBEDDED", embedded: true, mode: e4.id === d.aid ? "showing" : "disabled" };
            })), A("audioTracks"), d.subtitlesTracks = e3.data.filter((function(e4) {
              return "sub" === e4.type;
            })).map((function(e4, t3) {
              return { id: "EMBEDDED_" + e4.id, lang: void 0 === e4.lang ? "Track " + (t3 + 1) : e4.lang, label: void 0 === e4.title || void 0 === e4.lang ? "" : e4.title || e4.lang, origin: "EMBEDDED", embedded: true, mode: e4.id === d.sid ? "showing" : "disabled" };
            })), A("subtitlesTracks");
            break;
          default:
            d[e3.name] = e3.data;
        }
        var n2 = "time-pos" === e3.name ? Math.floor(d["time-pos"] / 1e3) : null;
        n2 && b === n2 || !h[e3.name] || (n2 && (b = n2), A(h[e3.name]));
      })), r2.on("mpv-event-ended", (function(e3) {
        e3.error ? S(e3.error) : g.emit("ended");
      })), this.on = function(e3, t3) {
        if (m) throw new Error("Video is destroyed");
        g.on(e3, t3);
      }, this.dispatch = function(e3) {
        if (m) throw new Error("Video is destroyed");
        if (e3) switch ((e3 = a(i(e3))).type) {
          case "observeProp":
            t3 = e3.propName, g.emit("propValue", t3, E(t3)), c2[t3] = true;
            break;
          case "setProp":
            return void (function(e4, t4) {
              switch (e4) {
                case "paused":
                  null !== p && r2.send("mpv-set-prop", ["pause", t4]);
                  break;
                case "time":
                  null !== p && null !== t4 && isFinite(t4) && r2.send("mpv-set-prop", ["time-pos", t4 / 1e3]);
                  break;
                case "playbackSpeed":
                  null !== p && null !== t4 && isFinite(t4) && r2.send("mpv-set-prop", ["speed", t4]);
                  break;
                case "volume":
                  null !== p && null !== t4 && isFinite(t4) && (d.mute = false, r2.send("mpv-set-prop", ["mute", "no"]), r2.send("mpv-set-prop", ["volume", t4]), A("muted"), A("volume"));
                  break;
                case "muted":
                  null !== p && (r2.send("mpv-set-prop", ["mute", t4 ? "yes" : "no"]), d.mute = t4, A("muted"));
                  break;
                case "selectedAudioTrackId":
                  if (null !== p) {
                    var n2 = t4.slice(9);
                    r2.send("mpv-set-prop", ["aid", n2]);
                  }
                  break;
                case "selectedSubtitlesTrackId":
                  null !== p && (t4 ? (n2 = t4.slice(9), r2.send("mpv-set-prop", ["sid", n2]), g.emit("subtitlesTrackLoaded", t4)) : (r2.send("mpv-set-prop", ["sid", "no"]), d.sid = null)), A("selectedSubtitlesTrackId");
                  break;
                case "subtitlesSize":
                  r2.send("mpv-set-prop", [l[e4], t4 * o]);
                  break;
                case "subtitlesDelay":
                  r2.send("mpv-set-prop", [l[e4], t4]);
                  break;
                case "subtitlesOffset":
                  r2.send("mpv-set-prop", [l[e4], 100 - t4]);
                  break;
                case "subtitlesTextColor":
                case "subtitlesBackgroundColor":
                case "subtitlesOutlineColor":
                  var i2 = t4.replace(/^#(\w{6})(\w{2})$/, "#$2$1");
                  r2.send("mpv-set-prop", [l[e4], i2]);
                  break;
                default:
                  console.log("Unhandled setProp for", e4);
              }
            })(e3.propName, e3.propValue);
          case "command":
            return void k(e3.commandName, e3.commandArgs);
        }
        var t3;
      };
    }
    c.canPlayStream = function() {
      return Promise.resolve(true);
    }, c.manifest = { name: "ShellVideo", external: false, props: Object.keys(l), commands: ["load", "unload", "destroy"], events: ["propValue", "propChanged", "ended", "error", "subtitlesTrackLoaded"] }, e.exports = c;
  }
};
