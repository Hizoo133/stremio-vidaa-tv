// Deconstructed Theater 1.10.0 modules (TizenVideo.js)
module.exports = {
  1621: (e, t, r) => {
    var n = r(5852), i = r(5126), a = r(8816), s = r(8742), o = r(5416), l = r(2152), u = /^\{(\\an[1-8])+\}/i;
    function c(e2) {
      var t2 = true, r2 = 1, c2 = null, d = null, h = (e2 = e2 || {}).containerElement;
      if (!(h instanceof HTMLElement)) throw new Error("Container element required to be instance of HTMLElement");
      var f, g = window.webapis.avplay, m = false, p = 100, v = 0, y = "rgb(255, 255, 255)", T = "rgba(0, 0, 0, 0)", b = "rgb(34, 34, 34)", E = 1, S = document.createElement("object");
      S.type = "application/avplayer", S.style.width = "100%", S.style.height = "100%", S.style.backgroundColor = "black";
      var A = true;
      function k() {
        if (f) {
          var e3 = F("time"), t3 = f.duration - (e3 - f.now);
          t3 > 0 && L(t3, f.text);
        }
      }
      function L(e3, t3) {
        if (!A) {
          var n2 = F("time"), i2 = t3.replace(u, "");
          for (f = { duration: e3, text: i2, now: n2 }, R && (clearTimeout(R), R = false); I.hasChildNodes(); ) I.removeChild(I.lastChild);
          I.style.bottom = v + "%", I.style.opacity = E;
          var a2 = document.createElement("span");
          a2.innerHTML = i2, a2.style.display = "inline-block", a2.style.padding = "0.2em", a2.style.fontSize = Math.floor(p / 25) + "vmin", a2.style.color = y, a2.style.backgroundColor = T, a2.style.textShadow = "1px 1px 0.1em " + b, I.appendChild(a2), I.appendChild(document.createElement("br")), e3 && (R = setTimeout((function() {
            for (; I.hasChildNodes(); ) I.removeChild(I.lastChild);
          }), parseInt(e3 * r2)));
        }
      }
      var R = false;
      g.setListener({ onbufferingstart: function() {
        t2 = true, U("buffering");
      }, onbufferingprogress: function() {
        t2 = true, U("buffering");
      }, onbufferingcomplete: function() {
        t2 = false, U("buffering");
      }, oncurrentplaytime: function() {
        U("time");
      }, onsubtitlechange: function(e3, t3) {
        L(e3, t3);
      }, onstreamcompleted: function() {
        w.emit("ended");
      } }), h.appendChild(S);
      var I = document.createElement("div");
      I.style.position = "absolute", I.style.right = "0", I.style.bottom = "0", I.style.left = "0", I.style.zIndex = "1", I.style.textAlign = "center", h.style.position = "relative", h.style.zIndex = "0", h.appendChild(I);
      var w = new n(), D = false, C = null, x = 0, _ = null, O = { stream: false, loaded: false, paused: false, time: false, duration: false, buffering: false, subtitlesTracks: false, selectedSubtitlesTrackId: false, subtitlesOffset: false, subtitlesSize: false, subtitlesTextColor: false, subtitlesBackgroundColor: false, subtitlesOutlineColor: false, subtitlesOpacity: false, audioTracks: false, selectedAudioTrackId: false, playbackSpeed: false }, P = false, M = { audio: [], subs: [] };
      function F(e3) {
        switch (e3) {
          case "stream":
            return C;
          case "loaded":
            return _;
          case "paused":
            if (null === C) return null;
            var n2 = !("PAUSED" !== g.getState());
            return !n2 && m && (g.setSelectTrack("AUDIO", parseInt(m.replace("EMBEDDED_", ""))), m = false), n2;
          case "time":
            var i2 = g.getCurrentTime();
            return null !== C && null !== i2 && isFinite(i2) ? Math.floor(i2) : null;
          case "duration":
            var a2 = g.getDuration();
            return null !== C && null !== a2 && isFinite(a2) ? Math.floor(a2) : null;
          case "buffering":
            return null === C ? null : t2;
          case "subtitlesTracks":
            if (null === C) return [];
            for (var s2 = g.getTotalTrackInfo(), o2 = [], l2 = 0; l2 < s2.length; l2++) if ("TEXT" === s2[l2].type) {
              var u2 = s2[l2], h2 = "EMBEDDED_" + String(u2.index), f2 = {};
              try {
                f2 = JSON.parse(u2.extra_info);
              } catch (e4) {
              }
              var S2 = "string" == typeof f2.track_lang && f2.track_lang.length > 0 ? f2.track_lang.trim() : null, k2 = null;
              if (((M || {}).subs || []).length) (x2 = M.subs.find((function(e4) {
                return (e4 || {}).id - 1 === u2.index;
              }))) && (S2 = x2.lang || "eng", k2 = x2.label || null);
              o2.push({ id: h2, lang: S2, label: k2, origin: "EMBEDDED", embedded: true, mode: A || h2 !== c2 ? "disabled" : "showing" });
            }
            return o2;
          case "selectedSubtitlesTrackId":
            if (null === C || A) return null;
            var L2 = g.getCurrentStreamInfo();
            for (l2 = 0; l2 < L2.length; l2++) if ("TEXT" === L2[l2].type) {
              F2 = L2[l2].index;
              break;
            }
            return F2 ? "EMBEDDED_" + String(F2) : null;
          case "subtitlesOffset":
            return D ? null : v;
          case "subtitlesSize":
            return D ? null : p;
          case "subtitlesTextColor":
            return D ? null : y;
          case "subtitlesBackgroundColor":
            return D ? null : T;
          case "subtitlesOutlineColor":
            return D ? null : b;
          case "subtitlesOpacity":
            return D ? null : E;
          case "audioTracks":
            if (null === C) return [];
            s2 = g.getTotalTrackInfo();
            var R2 = [];
            for (l2 = 0; l2 < s2.length; l2++) if ("AUDIO" === s2[l2].type) {
              var I2 = s2[l2], w2 = "EMBEDDED_" + String(I2.index);
              d || R2.length || (d = w2);
              f2 = {};
              try {
                f2 = JSON.parse(I2.extra_info);
              } catch (e4) {
              }
              var x2, O2 = "string" == typeof f2.language && f2.language.length > 0 ? f2.language : null, P2 = null;
              if (((M || {}).audio || []).length) (x2 = M.audio.find((function(e4) {
                return (e4 || {}).id - 1 === I2.index;
              }))) && (O2 = x2.lang || "eng", P2 = x2.label || null);
              R2.push({ id: w2, lang: O2, label: P2, origin: "EMBEDDED", embedded: true, mode: w2 === d ? "showing" : "disabled" });
            }
            return R2;
          case "selectedAudioTrackId":
            if (null === C) return null;
            if (m) return m;
            L2 = g.getCurrentStreamInfo();
            var F2 = false;
            for (l2 = 0; l2 < L2.length; l2++) if ("AUDIO" === L2[l2].type) {
              F2 = L2[l2].index;
              break;
            }
            return false !== F2 ? "EMBEDDED_" + String(F2) : null;
          case "playbackSpeed":
            return D || null === r2 || !isFinite(r2) ? null : r2;
          default:
            return null;
        }
      }
      function N(e3) {
        w.emit("error", e3), e3.critical && B("unload");
      }
      function U(e3) {
        if (O[e3]) {
          var t3 = F(e3);
          w.emit("propChanged", e3, t3);
        }
      }
      function B(e3, t3) {
        switch (e3) {
          case "load":
            if (t3 && t3.stream && "string" == typeof t3.stream.url) {
              var _prevStream = C;
              C = t3.stream;
              if (_prevStream && _prevStream.url === C.url) return;
              U("buffering");
              var r3 = false, n2 = navigator.userAgent.match(/Tizen (\d+\.\d+)/i);
              n2 && n2[1] && (r3 = parseFloat(n2[1])), (!r3 || r3 >= 6) && (P || null === C || (P = true, l(C.url, (function(e4) {
                e4 && (M = e4), ((M || {}).subs || []).length && U("subtitlesTracks"), ((M || {}).audio || []).length && U("audioTracks");
              })))), g.open(C.url), g.setDisplayRect(0, 0, window.innerWidth, window.innerHeight), g.setDisplayMethod("PLAYER_DISPLAY_MODE_LETTER_BOX"), g.seekTo(null !== t3.time && isFinite(t3.time) ? parseInt(t3.time, 10) : 0), g.prepareAsync((function() {
                U("duration"), g.play(), _ = true, U("loaded"), U("stream"), U("paused"), U("time"), U("duration"), U("subtitlesTracks"), U("selectedSubtitlesTrackId"), U("audioTracks"), U("selectedAudioTrackId");
              }), (function(e4) {
                if (x < 5) {
                  x++;
                  try {
                    g.stop();
                  } catch (e5) {
                  }
                  B("load", t3);
                } else N(Object.assign({}, o.STREAM_FAILED_TO_LOAD, { critical: true, stream: t3 ? t3.stream : null, error: e4 }));
              }));
            } else N(Object.assign({}, o.UNSUPPORTED_STREAM, { critical: true, stream: t3 ? t3.stream : null }));
            break;
          case "unload":
            C = null, g.stop(), _ = false, U("loaded"), U("stream"), U("paused"), U("time"), U("duration"), U("buffering"), U("subtitlesTracks"), U("selectedSubtitlesTrackId"), U("audioTracks"), U("selectedAudioTrackId");
            break;
          case "destroy":
            B("unload"), D = true, g.stop(), U("subtitlesOffset"), U("subtitlesSize"), U("subtitlesTextColor"), U("subtitlesBackgroundColor"), U("subtitlesOutlineColor"), U("subtitlesOpacity"), U("playbackSpeed"), w.removeAllListeners(), h.removeChild(S);
        }
      }
      this.on = function(e3, t3) {
        if (D) throw new Error("Video is destroyed");
        w.on(e3, t3);
      }, this.dispatch = function(e3) {
        if (D) throw new Error("Video is destroyed");
        if (e3) switch ((e3 = a(i(e3))).type) {
          case "observeProp":
            return void (function(e4) {
              if (O.hasOwnProperty(e4)) {
                var t3 = F(e4);
                w.emit("propValue", e4, t3), O[e4] = true;
              }
            })(e3.propName);
          case "setProp":
            return void (function(e4, t3) {
              switch (e4) {
                case "paused":
                  if (null !== C) {
                    var n2 = !!t3;
                    n2 ? g.pause() : g.play(), n2 ? R && clearTimeout(R) : k();
                  }
                  U("paused");
                  var i2 = F("paused");
                  setTimeout((function() {
                    F("paused") !== i2 && U("paused");
                  }), 1e3);
                  break;
                case "time":
                  null !== C && null !== t3 && isFinite(t3) && (g.seekTo(parseInt(t3, 10)), L(1, ""), U("time"));
                  break;
                case "selectedSubtitlesTrackId":
                  if (null !== C) {
                    if (-1 === (t3 || "").indexOf("EMBEDDED_") || !t3) return L(1, ""), A = true, void U("selectedSubtitlesTrackId");
                    var a2 = F("subtitlesTracks").find((function(e5) {
                      return e5.id === t3;
                    }));
                    a2 && (A = false, c2 = t3, g.setSelectTrack("TEXT", parseInt(a2.id.replace("EMBEDDED_", ""))), w.emit("subtitlesTrackLoaded", a2), U("selectedSubtitlesTrackId"));
                  }
                  break;
                case "subtitlesOffset":
                  null !== t3 && isFinite(t3) && (v = Math.max(0, Math.min(100, parseInt(t3, 10))), k(), U("subtitlesOffset"));
                  break;
                case "subtitlesSize":
                  null !== t3 && isFinite(t3) && (p = Math.max(0, parseInt(t3, 10)), k(), U("subtitlesSize"));
                  break;
                case "subtitlesTextColor":
                  if ("string" == typeof t3) {
                    try {
                      y = s(t3).rgb().string();
                    } catch (e5) {
                      console.error("Tizen player with HTML Subtitles", e5);
                    }
                    k(), U("subtitlesTextColor");
                  }
                  break;
                case "subtitlesBackgroundColor":
                  if ("string" == typeof t3) {
                    try {
                      T = s(t3).rgb().string();
                    } catch (e5) {
                      console.error("Tizen player with HTML Subtitles", e5);
                    }
                    k(), U("subtitlesBackgroundColor");
                  }
                  break;
                case "subtitlesOutlineColor":
                  if ("string" == typeof t3) {
                    try {
                      b = s(t3).rgb().string();
                    } catch (e5) {
                      console.error("Tizen player with HTML Subtitles", e5);
                    }
                    k(), U("subtitlesOutlineColor");
                  }
                  break;
                case "subtitlesOpacity":
                  if ("number" == typeof t3) {
                    try {
                      E = Math.min(Math.max(t3 / 100, 0), 1);
                    } catch (e5) {
                      console.error("Tizen player with HTML Subtitles", e5);
                    }
                    k(), U("subtitlesOpacity");
                  }
                  break;
                case "selectedAudioTrackId":
                  if (null !== C) {
                    d = t3;
                    var o2 = F("audioTracks").find((function(e5) {
                      return e5.id === t3;
                    }));
                    F("paused") ? (m = t3, U("selectedAudioTrackId")) : g.setSelectTrack("AUDIO", parseInt(d.replace("EMBEDDED_", ""))), o2 && (w.emit("audioTrackLoaded", o2), U("selectedAudioTrackId"));
                  }
                  break;
                case "playbackSpeed":
                  if (null !== t3 && isFinite(t3)) {
                    r2 = parseFloat(t3);
                    try {
                      g.setSpeed(r2);
                    } catch (e5) {
                    }
                    U("playbackSpeed");
                  }
              }
            })(e3.propName, e3.propValue);
          case "command":
            return void B(e3.commandName, e3.commandArgs);
        }
        throw new Error("Invalid action dispatched: " + JSON.stringify(e3));
      };
    }
    c.canPlayStream = function() {
      return Promise.resolve(true);
    }, c.manifest = { name: "TizenVideo", external: false, props: ["stream", "loaded", "paused", "time", "duration", "buffering", "audioTracks", "selectedAudioTrackId", "subtitlesTracks", "selectedSubtitlesTrackId", "subtitlesOffset", "subtitlesSize", "subtitlesTextColor", "subtitlesBackgroundColor", "subtitlesOutlineColor", "subtitlesOpacity", "playbackSpeed"], commands: ["load", "unload", "destroy"], events: ["propValue", "propChanged", "ended", "error", "subtitlesTrackLoaded", "audioTrackLoaded"] }, e.exports = c;
  },
  5369: (e, t, r) => {
    var n = r(5852), i = r(5126), a = r(8816), s = r(8742), o = r(5416), l = /^\{(\\an[1-8])+\}/i;
    function u(e2) {
      var t2 = 100, r2 = 0, u2 = "rgb(255, 255, 255)", c = "rgba(0, 0, 0, 0)", d = "rgb(34, 34, 34)", h = 1, f = (e2 = e2 || {}).containerElement;
      if (!(f instanceof HTMLElement)) throw new Error("Container element required to be instance of HTMLElement");
      var g = document.createElement("video");
      g.style.width = "100%", g.style.height = "100%", g.style.backgroundColor = "black", g.controls = false, g.playsInline = true, g.onerror = function() {
        !(function() {
          if (y) return;
          var e3;
          switch (g.error.code) {
            case 1:
              e3 = o.HTML_VIDEO.MEDIA_ERR_ABORTED;
              break;
            case 2:
              e3 = o.HTML_VIDEO.MEDIA_ERR_NETWORK;
              break;
            case 3:
              e3 = o.HTML_VIDEO.MEDIA_ERR_DECODE;
              break;
            case 4:
              e3 = o.HTML_VIDEO.MEDIA_ERR_SRC_NOT_SUPPORTED;
              break;
            default:
              e3 = o.UNKNOWN_ERROR;
          }
          L(Object.assign({}, e3, { critical: true, error: g.error }));
        })();
      }, g.onended = function() {
        v.emit("ended");
      }, g.onpause = function() {
        R("paused");
      }, g.onplay = function() {
        R("paused");
      }, g.ontimeupdate = function() {
        R("time");
      }, g.ondurationchange = function() {
        R("duration");
      }, g.onwaiting = function() {
        R("buffering");
      }, g.onseeking = function() {
        R("time"), R("buffering");
      }, g.onseeked = function() {
        R("time"), R("buffering");
      }, g.onstalled = function() {
        R("buffering");
      }, g.onplaying = function() {
        R("time"), R("buffering");
      }, g.oncanplay = function() {
        R("buffering");
      }, g.canplaythrough = function() {
        R("buffering");
      }, g.onloadedmetadata = function() {
        R("loaded");
      }, g.onloadeddata = function() {
        R("buffering");
      }, g.onvolumechange = function() {
        R("volume"), R("muted");
      }, g.onratechange = function() {
        R("playbackSpeed");
      }, g.textTracks.onchange = function() {
        R("subtitlesTracks"), R("selectedSubtitlesTrackId");
      }, f.appendChild(g);
      var m = document.createElement("div");
      m.style.position = "absolute", m.style.right = "0", m.style.bottom = "0", m.style.left = "0", m.style.zIndex = "1", m.style.textAlign = "center", f.style.position = "relative", f.style.zIndex = "0", f.appendChild(m);
      var p, v = new n(), y = false, T = null, b = { stream: false, loaded: false, paused: false, time: false, duration: false, buffering: false, subtitlesTracks: false, selectedSubtitlesTrackId: false, subtitlesOffset: false, subtitlesSize: false, subtitlesTextColor: false, subtitlesBackgroundColor: false, subtitlesOutlineColor: false, audioTracks: false, selectedAudioTrackId: false, volume: false, muted: false, playbackSpeed: false };
      async function E() {
        p && S(p.text, "show");
      }
      async function S(e3, n2) {
        if ("hide" !== n2) {
          for (p = { text: e3 }; m.hasChildNodes(); ) m.removeChild(m.lastChild);
          m.style.bottom = r2 + "%", m.style.opacity = h;
          var i2 = document.createElement("span");
          i2.innerHTML = e3, i2.style.display = "inline-block", i2.style.padding = "0.2em", i2.style.fontSize = Math.floor(t2 / 25) + "vmin", i2.style.color = u2, i2.style.backgroundColor = c, i2.style.textShadow = "1px 1px 0.1em " + d, i2.style.whiteSpace = "pre-wrap", m.appendChild(i2), m.appendChild(document.createElement("br"));
        } else {
          for (; m.hasChildNodes(); ) m.removeChild(m.lastChild);
          p = null;
        }
      }
      function A(e3) {
        var t3 = (e3.target || {}).activeCues;
        if (t3.length) {
          if (t3.length > 3) return e3.target.removeEventListener("cuechange", A), void S("", "hide");
          var r3 = "";
          for (var n2 in t3) {
            var i2 = t3[n2];
            if (i2.text) r3 += (r3 ? "\n" : "") + i2.text.replace(l, "");
          }
          S(r3, "show");
        } else S("", "hide");
      }
      function k(e3) {
        switch (e3) {
          case "stream":
            return T;
          case "loaded":
            return null === T ? null : g.readyState >= g.HAVE_METADATA;
          case "paused":
            return null === T ? null : !!g.paused;
          case "time":
            return null !== T && null !== g.currentTime && isFinite(g.currentTime) ? Math.floor(1e3 * g.currentTime) : null;
          case "duration":
            return null !== T && null !== g.duration && isFinite(g.duration) ? Math.floor(1e3 * g.duration) : null;
          case "buffering":
            return null === T ? null : g.readyState < g.HAVE_FUTURE_DATA;
          case "subtitlesTracks":
            return null === T ? [] : g.textTracks && Array.from(g.textTracks).length ? Array.from(g.textTracks).filter((function(e4) {
              return "subtitles" === e4.kind;
            })).map((function(e4, t3) {
              return Object.freeze({ id: "EMBEDDED_" + String(t3), lang: e4.language, label: e4.label || null, origin: "EMBEDDED", embedded: true });
            })) : [];
          case "selectedSubtitlesTrackId":
            return null === T ? null : g.textTracks && Array.from(g.textTracks).length ? Array.from(g.textTracks).reduce((function(e4, t3, r3) {
              return null === e4 && "hidden" === t3.mode ? "EMBEDDED_" + String(r3) : e4;
            }), null) : null;
          case "subtitlesOffset":
            return y ? null : r2;
          case "subtitlesSize":
            return y ? null : t2;
          case "subtitlesTextColor":
            return y ? null : u2;
          case "subtitlesBackgroundColor":
            return y ? null : c;
          case "subtitlesOutlineColor":
            return y ? null : d;
          case "subtitlesOpacity":
            return y ? null : h;
          case "audioTracks":
            return null === T ? [] : g.audioTracks && Array.from(g.audioTracks).length ? Array.from(g.audioTracks).map((function(e4, t3) {
              return Object.freeze({ id: "EMBEDDED_" + String(t3), lang: e4.language, label: e4.label || null, origin: "EMBEDDED", embedded: true });
            })) : [];
          case "selectedAudioTrackId":
            return null === T ? null : g.audioTracks && Array.from(g.audioTracks).length ? Array.from(g.audioTracks).reduce((function(e4, t3, r3) {
              return null === e4 && t3.enabled ? "EMBEDDED_" + String(r3) : e4;
            }), null) : null;
          case "volume":
            return y || null === g.volume || !isFinite(g.volume) ? null : Math.floor(100 * g.volume);
          case "muted":
            return y ? null : !!g.muted;
          case "playbackSpeed":
            return y || null === g.playbackRate || !isFinite(g.playbackRate) ? null : g.playbackRate;
          default:
            return null;
        }
      }
      function L(e3) {
        v.emit("error", e3), e3.critical && I("unload");
      }
      function R(e3) {
        b[e3] && v.emit("propChanged", e3, k(e3));
      }
      function I(e3, t3) {
        switch (e3) {
          case "load":
            I("unload"), t3 && t3.stream && "string" == typeof t3.stream.url ? (T = t3.stream, R("stream"), R("loaded"), g.autoplay = "boolean" != typeof t3.autoplay || t3.autoplay, g.currentTime = null !== t3.time && isFinite(t3.time) ? parseInt(t3.time, 10) / 1e3 : 0, R("paused"), R("time"), R("duration"), R("buffering"), g.textTracks && (g.textTracks.onaddtrack = function() {
              g.textTracks.onaddtrack = null, setTimeout((function() {
                R("subtitlesTracks"), R("selectedSubtitlesTrackId");
              }));
            }), g.audioTracks && (g.audioTracks.onaddtrack = function() {
              g.audioTracks.onaddtrack = null, setTimeout((function() {
                R("audioTracks"), R("selectedAudioTrackId");
              }));
            }), g.src = T.url) : L(Object.assign({}, o.UNSUPPORTED_STREAM, { critical: true, stream: t3 ? t3.stream : null }));
            break;
          case "unload":
            T = null, Array.from(g.textTracks).forEach((function(e4) {
              e4.oncuechange = null;
            })), g.removeAttribute("src"), g.load(), g.currentTime = 0, R("stream"), R("loaded"), R("paused"), R("time"), R("duration"), R("buffering"), R("subtitlesTracks"), R("selectedSubtitlesTrackId"), R("audioTracks"), R("selectedAudioTrackId");
            break;
          case "destroy":
            I("unload"), y = true, R("subtitlesOffset"), R("subtitlesSize"), R("subtitlesTextColor"), R("subtitlesBackgroundColor"), R("subtitlesOutlineColor"), R("volume"), R("muted"), R("playbackSpeed"), v.removeAllListeners(), g.onerror = null, g.onended = null, g.onpause = null, g.onplay = null, g.ontimeupdate = null, g.ondurationchange = null, g.onwaiting = null, g.onseeking = null, g.onseeked = null, g.onstalled = null, g.onplaying = null, g.oncanplay = null, g.canplaythrough = null, g.onloadeddata = null, g.onvolumechange = null, g.onratechange = null, g.textTracks.onchange = null, f.removeChild(g);
        }
      }
      this.on = function(e3, t3) {
        if (y) throw new Error("Video is destroyed");
        v.on(e3, t3);
      }, this.dispatch = function(e3) {
        if (y) throw new Error("Video is destroyed");
        if (e3) switch ((e3 = a(i(e3))).type) {
          case "observeProp":
            return n2 = e3.propName, void (b.hasOwnProperty(n2) && (v.emit("propValue", n2, k(n2)), b[n2] = true));
          case "setProp":
            return void (function(e4, n3) {
              switch (e4) {
                case "paused":
                  null !== T && (n3 ? g.pause() : g.play(), R("paused"));
                  break;
                case "time":
                  null !== T && null !== n3 && isFinite(n3) && (S("", "hide"), g.currentTime = parseInt(n3, 10) / 1e3, R("time"));
                  break;
                case "selectedSubtitlesTrackId":
                  if (null !== T) {
                    Array.from(g.textTracks).forEach((function(e5, t3) {
                      "hidden" === e5.mode && e5.removeEventListener("cuechange", A), e5.mode = "EMBEDDED_" + String(t3) === n3 ? "hidden" : "disabled", "hidden" === e5.mode && e5.addEventListener("cuechange", A);
                    }));
                    var i2 = k("subtitlesTracks").find((function(e5) {
                      return e5.id === n3;
                    }));
                    S("", "hide"), i2 && (R("selectedSubtitlesTrackId"), v.emit("subtitlesTrackLoaded", i2));
                  }
                  break;
                case "subtitlesOffset":
                  null !== n3 && isFinite(n3) && (r2 = Math.max(0, Math.min(100, parseInt(n3, 10))), E(), R("subtitlesOffset"));
                  break;
                case "subtitlesSize":
                  null !== n3 && isFinite(n3) && (t2 = Math.max(0, parseInt(n3, 10)), E(), R("subtitlesSize"));
                  break;
                case "subtitlesTextColor":
                  if ("string" == typeof n3) {
                    try {
                      u2 = s(n3).rgb().string();
                    } catch (e5) {
                      console.error("Tizen player with HTML Subtitles", e5);
                    }
                    E(), R("subtitlesTextColor");
                  }
                  break;
                case "subtitlesBackgroundColor":
                  if ("string" == typeof n3) {
                    try {
                      c = s(n3).rgb().string();
                    } catch (e5) {
                      console.error("Tizen player with HTML Subtitles", e5);
                    }
                    E(), R("subtitlesBackgroundColor");
                  }
                  break;
                case "subtitlesOutlineColor":
                  if ("string" == typeof n3) {
                    try {
                      d = s(n3).rgb().string();
                    } catch (e5) {
                      console.error("Tizen player with HTML Subtitles", e5);
                    }
                    E(), R("subtitlesOutlineColor");
                  }
                  break;
                case "subtitlesOpacity":
                  if ("number" == typeof n3) {
                    try {
                      h = Math.min(Math.max(n3 / 100, 0), 1);
                    } catch (e5) {
                      console.error("Tizen player with HTML Subtitles", e5);
                    }
                    E(), R("subtitlesOpacity");
                  }
                  break;
                case "selectedAudioTrackId":
                  if (null !== T) for (var a2 = 0; a2 < g.audioTracks.length; a2++) g.audioTracks[a2].enabled = !("EMBEDDED_" + String(a2) !== n3);
                  var o2 = k("audioTracks").find((function(e5) {
                    return e5.id === n3;
                  }));
                  o2 && (R("selectedAudioTrackId"), v.emit("audioTrackLoaded", o2));
                  break;
                case "volume":
                  null !== n3 && isFinite(n3) && (g.muted = false, g.volume = Math.max(0, Math.min(100, parseInt(n3, 10))) / 100, R("muted"), R("volume"));
                  break;
                case "muted":
                  g.muted = !!n3, R("muted");
                  break;
                case "playbackSpeed":
                  null !== n3 && isFinite(n3) && (g.playbackRate = parseFloat(n3), R("playbackSpeed"));
              }
            })(e3.propName, e3.propValue);
          case "command":
            return void I(e3.commandName, e3.commandArgs);
        }
        var n2;
        throw new Error("Invalid action dispatched: " + JSON.stringify(e3));
      };
    }
    u.canPlayStream = function(e2) {
      return e2 ? Promise.resolve(true) : Promise.resolve(false);
    }, u.manifest = { name: "TitanVideo", external: false, props: ["stream", "loaded", "paused", "time", "duration", "buffering", "audioTracks", "selectedAudioTrackId", "subtitlesTracks", "selectedSubtitlesTrackId", "subtitlesOffset", "subtitlesSize", "subtitlesTextColor", "subtitlesBackgroundColor", "subtitlesOutlineColor", "subtitlesOpacity", "volume", "muted", "playbackSpeed"], commands: ["load", "unload", "destroy"], events: ["propValue", "propChanged", "ended", "error", "subtitlesTrackLoaded", "audioTrackLoaded"] }, e.exports = u;
  },
  7462: (e, t, r) => {
    var n = r(5227);
    e.exports = function() {
      return ["Tizen", "webOS", "Titan", "NetTV"].includes(n.get()) || void 0 !== window.qt ? Promise.resolve(false) : Promise.resolve(true);
    };
  }
};
