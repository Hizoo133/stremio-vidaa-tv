// Deconstructed Theater 1.10.0 modules (VidaaVideo.js)
module.exports = {
  1522: (e, t, r) => {
    var n = r(1410), i = r(2366), a = r(4333), s = r(8968), o = r(5166), l = r(7575), u = r(6191), c = r(7838), d = r(1031), h = r(902), f = r(7495), g = r(4812);
    e.exports = function(e2, t2) {
      return e2.stream && "string" != typeof e2.stream.externalUrl ? t2.chromecastTransport && t2.chromecastTransport.getCastState() === cast.framework.CastState.CONNECTED ? n : "string" == typeof e2.stream.ytId ? g(f(d)) : "string" == typeof e2.stream.playerFrameUrl ? g(c) : t2.shellTransport ? h(f(i)) : "string" == typeof e2.streamingServerURL ? "Tizen" === e2.platform ? h(f(s)) : "webOS" === e2.platform ? h(f(u)) : "Titan" === e2.platform || "NetTV" === e2.platform ? h(f(o)) : "Vidaa" === e2.platform ? h(f(l)) : h(f(a)) : "string" == typeof e2.stream.url ? "Tizen" === e2.platform ? g(f(s)) : "webOS" === e2.platform ? g(f(u)) : "Titan" === e2.platform || "NetTV" === e2.platform ? g(f(o)) : "Vidaa" === e2.platform ? g(f(l)) : g(f(a)) : null : null;
    };
  },
  2563: (e, t, r) => {
    var n = r(5852), i = r(5126), a = r(8816), s = r(5416);
    function o(e2) {
      var t2 = (e2 = e2 || {}).containerElement;
      if (!(t2 instanceof HTMLElement)) throw new Error("Container element required to be instance of HTMLElement");
      var r2 = document.createElement("video");
      r2.style.width = "100%", r2.style.height = "100%", r2.style.backgroundColor = "black", r2.controls = false, r2.playsInline = true, r2.onerror = function() {
        !(function() {
          if (u) return;
          var e3;
          switch (r2.error.code) {
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
          g(Object.assign({}, e3, { critical: true, error: r2.error }));
        })();
      }, r2.onended = function() {
        l.emit("ended");
      }, r2.onpause = function() {
        m("paused");
      }, r2.onplay = function() {
        m("paused");
      }, r2.ontimeupdate = function() {
        m("time");
      }, r2.ondurationchange = function() {
        m("duration");
      }, r2.onwaiting = function() {
        m("buffering");
      }, r2.onseeking = function() {
        m("time"), m("buffering");
      }, r2.onseeked = function() {
        m("time"), m("buffering");
      }, r2.onstalled = function() {
        m("buffering");
      }, r2.onplaying = function() {
        m("time"), m("buffering");
      }, r2.oncanplay = function() {
        m("buffering");
      }, r2.canplaythrough = function() {
        m("buffering");
      }, r2.onloadedmetadata = function() {
        m("loaded");
      }, r2.onloadeddata = function() {
        m("buffering");
      }, r2.onvolumechange = function() {
        m("volume"), m("muted");
      }, r2.onratechange = function() {
        m("playbackSpeed");
      }, r2.textTracks.onchange = function() {
        m("subtitlesTracks"), m("selectedSubtitlesTrackId"), f(), Array.from(r2.textTracks).forEach((function(e3) {
          e3.oncuechange = f;
        }));
      }, t2.appendChild(r2);
      var o2 = document.createElement("div");
      o2.style.position = "absolute", o2.style.right = "0", o2.style.bottom = "0", o2.style.left = "0", o2.style.zIndex = "1", o2.style.textAlign = "center", t2.style.position = "relative", t2.style.zIndex = "0", t2.appendChild(o2);
      var l = new n(), u = false, c = null, d = { stream: false, loaded: false, paused: false, time: false, duration: false, buffering: false, subtitlesTracks: false, selectedSubtitlesTrackId: false, audioTracks: false, selectedAudioTrackId: false, volume: false, muted: false, playbackSpeed: false };
      function h(e3) {
        switch (e3) {
          case "stream":
            return c;
          case "loaded":
            return null === c ? null : r2.readyState >= r2.HAVE_METADATA;
          case "paused":
            return null === c ? null : !!r2.paused;
          case "time":
            return null !== c && null !== r2.currentTime && isFinite(r2.currentTime) ? Math.floor(1e3 * r2.currentTime) : null;
          case "duration":
            return null !== c && null !== r2.duration && isFinite(r2.duration) ? Math.floor(1e3 * r2.duration) : null;
          case "buffering":
            return null === c ? null : r2.readyState < r2.HAVE_FUTURE_DATA;
          case "subtitlesTracks":
            return null === c ? [] : Array.from(r2.textTracks).map((function(e4, t3) {
              return Object.freeze({ id: "EMBEDDED_" + String(t3), lang: e4.language, label: e4.label || null, origin: "EMBEDDED", embedded: true });
            }));
          case "selectedSubtitlesTrackId":
            return null === c ? null : Array.from(r2.textTracks).reduce((function(e4, t3, r3) {
              return null === e4 && "showing" === t3.mode ? "EMBEDDED_" + String(r3) : e4;
            }), null);
          case "audioTracks":
            return null === c ? [] : r2.audioTracks && Array.from(r2.audioTracks).length ? Array.from(r2.audioTracks).map((function(e4, t3) {
              return Object.freeze({ id: "EMBEDDED_" + String(t3), lang: e4.language, label: e4.label || null, origin: "EMBEDDED", embedded: true });
            })) : [];
          case "selectedAudioTrackId":
            return null === c ? null : r2.audioTracks && Array.from(r2.audioTracks).length ? Array.from(r2.audioTracks).reduce((function(e4, t3, r3) {
              return null === e4 && t3.enabled ? "EMBEDDED_" + String(r3) : e4;
            }), null) : null;
          case "volume":
            return u || null === r2.volume || !isFinite(r2.volume) ? null : Math.floor(100 * r2.volume);
          case "muted":
            return u ? null : !!r2.muted;
          case "playbackSpeed":
            return u || null === r2.playbackRate || !isFinite(r2.playbackRate) ? null : r2.playbackRate;
          default:
            return null;
        }
      }
      function f() {
        Array.from(r2.textTracks).forEach((function(e3) {
          Array.from(e3.cues || []).forEach((function(e4) {
            e4.snapToLines = false, e4.line = 100;
          }));
        }));
      }
      function g(e3) {
        l.emit("error", e3), e3.critical && p("unload");
      }
      function m(e3) {
        d[e3] && l.emit("propChanged", e3, h(e3));
      }
      function p(e3, n2) {
        switch (e3) {
          case "load":
            p("unload"), n2 && n2.stream && "string" == typeof n2.stream.url ? (c = n2.stream, m("stream"), m("loaded"), r2.autoplay = "boolean" != typeof n2.autoplay || n2.autoplay, r2.currentTime = null !== n2.time && isFinite(n2.time) ? parseInt(n2.time, 10) / 1e3 : 0, m("paused"), m("time"), m("duration"), m("buffering"), r2.textTracks && (r2.textTracks.onaddtrack = function() {
              setTimeout((function() {
                Array.from(r2.textTracks).forEach((function(e4, t3) {
                  t3 || (e4.mode = "showing");
                })), setTimeout((function() {
                  Array.from(r2.textTracks).forEach((function(e4) {
                    e4.mode = "disabled";
                  })), setTimeout((function() {
                    m("subtitlesTracks"), m("selectedSubtitlesTrackId");
                  }));
                }));
              }));
            }), r2.audioTracks && (r2.audioTracks.onaddtrack = function() {
              setTimeout((function() {
                m("audioTracks"), m("selectedAudioTrackId");
              }));
            }), r2.src = c.url) : g(Object.assign({}, s.UNSUPPORTED_STREAM, { critical: true, stream: n2 ? n2.stream : null }));
            break;
          case "unload":
            r2.textTracks.onaddtrack = null, r2.audioTracks.onaddtrack = null, c = null, Array.from(r2.textTracks).forEach((function(e4) {
              e4.oncuechange = null;
            })), r2.removeAttribute("src"), r2.load(), r2.currentTime = 0, m("stream"), m("loaded"), m("paused"), m("time"), m("duration"), m("buffering"), m("subtitlesTracks"), m("selectedSubtitlesTrackId"), m("audioTracks"), m("selectedAudioTrackId");
            break;
          case "destroy":
            p("unload"), u = true, m("volume"), m("muted"), m("playbackSpeed"), l.removeAllListeners(), r2.onerror = null, r2.onended = null, r2.onpause = null, r2.onplay = null, r2.ontimeupdate = null, r2.ondurationchange = null, r2.onwaiting = null, r2.onseeking = null, r2.onseeked = null, r2.onstalled = null, r2.onplaying = null, r2.oncanplay = null, r2.canplaythrough = null, r2.onloadeddata = null, r2.onvolumechange = null, r2.onratechange = null, r2.textTracks.onchange = null, t2.removeChild(r2);
        }
      }
      this.on = function(e3, t3) {
        if (u) throw new Error("Video is destroyed");
        l.on(e3, t3);
      }, this.dispatch = function(e3) {
        if (u) throw new Error("Video is destroyed");
        if (e3) switch ((e3 = a(i(e3))).type) {
          case "observeProp":
            return t3 = e3.propName, void (d.hasOwnProperty(t3) && (l.emit("propValue", t3, h(t3)), d[t3] = true));
          case "setProp":
            return void (function(e4, t4) {
              switch (e4) {
                case "paused":
                  null !== c && (t4 ? r2.pause() : r2.play(), m("paused"));
                  break;
                case "time":
                  null !== c && null !== t4 && isFinite(t4) && (r2.currentTime = parseInt(t4, 10) / 1e3, m("time"));
                  break;
                case "selectedSubtitlesTrackId":
                  if (null !== c) {
                    Array.from(r2.textTracks).forEach((function(e5) {
                      e5.mode = "disabled";
                    })), Array.from(r2.textTracks).forEach((function(e5, r3) {
                      "EMBEDDED_" + String(r3) === t4 && (e5.mode = "showing");
                    }));
                    var n2 = h("subtitlesTracks").find((function(e5) {
                      return e5.id === t4;
                    }));
                    n2 && (m("selectedSubtitlesTrackId"), l.emit("subtitlesTrackLoaded", n2));
                  }
                  break;
                case "selectedAudioTrackId":
                  if (null !== c) for (var i2 = 0; i2 < r2.audioTracks.length; i2++) r2.audioTracks[i2].enabled = !("EMBEDDED_" + String(i2) !== t4);
                  var a2 = h("audioTracks").find((function(e5) {
                    return e5.id === t4;
                  }));
                  a2 && (m("selectedAudioTrackId"), l.emit("audioTrackLoaded", a2));
                  break;
                case "volume":
                  null !== t4 && isFinite(t4) && (r2.muted = false, r2.volume = Math.max(0, Math.min(100, parseInt(t4, 10))) / 100, m("muted"), m("volume"));
                  break;
                case "muted":
                  r2.muted = !!t4, m("muted");
                  break;
                case "playbackSpeed":
                  null !== t4 && isFinite(t4) && (r2.playbackRate = parseFloat(t4), m("playbackSpeed"));
              }
            })(e3.propName, e3.propValue);
          case "command":
            return void p(e3.commandName, e3.commandArgs);
        }
        var t3;
        throw new Error("Invalid action dispatched: " + JSON.stringify(e3));
      };
    }
    o.canPlayStream = function(e2) {
      return e2 ? Promise.resolve(true) : Promise.resolve(false);
    }, o.manifest = { name: "VidaaVideo", external: false, props: ["stream", "loaded", "paused", "time", "duration", "buffering", "audioTracks", "selectedAudioTrackId", "subtitlesTracks", "selectedSubtitlesTrackId", "volume", "muted", "playbackSpeed"], commands: ["load", "unload", "destroy"], events: ["propValue", "propChanged", "ended", "error", "subtitlesTrackLoaded", "audioTrackLoaded"] }, e.exports = o;
  }
};
