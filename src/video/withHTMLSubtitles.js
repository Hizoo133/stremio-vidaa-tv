// Deconstructed Theater 1.10.0 modules (withHTMLSubtitles.js)
module.exports = {
  531: (e, t, r) => {
    var n = r(5852), i = r(5126), a = r(8816), s = r(1522), o = r(5227), l = r(5416);
    function u() {
      var e2 = null, t2 = new n(), r2 = false;
      this.on = function(e3, n2) {
        if (r2) throw new Error("Video is destroyed");
        t2.on(e3, n2);
      }, this.dispatch = function(n2, u2) {
        if (r2) throw new Error("Video is destroyed");
        if (!n2) throw new Error("Invalid action dispatched: " + JSON.stringify(n2));
        if (u2 = u2 || {}, "command" === (n2 = a(i(n2))).type && "load" === n2.commandName && n2.commandArgs) {
          n2.commandArgs.platform && o.set(n2.commandArgs.platform);
          var c = s(n2.commandArgs, u2);
          if (null !== e2 && e2.constructor !== c && (e2.dispatch({ type: "command", commandName: "destroy" }), e2 = null), null === e2) {
            if (null === c) return void t2.emit("error", Object.assign({}, l.UNSUPPORTED_STREAM, { error: new Error("No video implementation was selected"), critical: true, stream: n2.commandArgs.stream }));
            (e2 = new c(u2)).on("ended", (function() {
              t2.emit("ended");
            })), e2.on("error", (function(e3) {
              t2.emit("error", e3);
            })), e2.on("propValue", (function(e3, r3) {
              t2.emit("propValue", e3, r3);
            })), e2.on("propChanged", (function(e3, r3) {
              t2.emit("propChanged", e3, r3);
            })), e2.on("subtitlesTrackLoaded", (function(e3) {
              t2.emit("subtitlesTrackLoaded", e3);
            })), e2.on("audioTrackLoaded", (function(e3) {
              t2.emit("audioTrackLoaded", e3);
            })), e2.on("extraSubtitlesTrackLoaded", (function(e3) {
              t2.emit("extraSubtitlesTrackLoaded", e3);
            })), e2.on("extraSubtitlesTrackAdded", (function(e3) {
              t2.emit("extraSubtitlesTrackAdded", e3);
            })), c.manifest.external ? e2.on("implementationChanged", (function(e3) {
              t2.emit("implementationChanged", e3);
            })) : t2.emit("implementationChanged", c.manifest);
          }
        }
        if (null !== e2) try {
          e2.dispatch(n2);
        } catch (t3) {
          console.error(e2.constructor.manifest.name, t3);
        }
        "command" === n2.type && "destroy" === n2.commandName && (e2 = null);
      }, this.destroy = function() {
        r2 = true, null !== e2 && (e2.dispatch({ type: "command", commandName: "destroy" }), e2 = null), t2.removeAllListeners();
      };
    }
    u.ERROR = l, e.exports = u;
  },
  6209: (e, t, r) => {
    var n = r(5852), i = r(5126), a = r(8816), s = r(5416);
    function o(e2) {
      var t2 = (e2 = e2 || {}).containerElement;
      if (!(t2 instanceof HTMLElement)) throw new Error("Container element required to be instance of HTMLElement");
      var r2 = document.createElement("iframe");
      r2.style.width = "100%", r2.style.height = "100%", r2.style.border = 0, r2.style.backgroundColor = "black", r2.allowFullscreen = false, r2.allow = "autoplay", t2.appendChild(r2);
      var o2 = new n(), l = false, u = { stream: false, loaded: false, paused: false, time: false, duration: false, buffering: false, buffered: false, volume: false, muted: false, playbackSpeed: false };
      function c(e3) {
        if (e3.source === r2.contentWindow) {
          var t3 = e3.data || e3.message;
          if (t3 && "string" == typeof t3.event) {
            var n2 = t3.event, i2 = Array.isArray(t3.args) ? t3.args : [];
            o2.emit.apply(o2, [n2].concat(i2));
          }
        }
      }
      function d(e3) {
        r2.contentWindow.postMessage(e3, "*");
      }
      function h(e3, t3) {
        u[e3] && o2.emit("propChanged", e3, t3);
      }
      function f(e3, n2) {
        switch (e3) {
          case "load":
            return f("unload"), n2 && n2.stream && "string" == typeof n2.stream.playerFrameUrl ? (window.addEventListener("message", c, false), r2.onload = function() {
              d({ type: "command", commandName: e3, commandArgs: n2 });
            }, r2.src = n2.stream.playerFrameUrl) : (i2 = Object.assign({}, s.UNSUPPORTED_STREAM, { critical: true, stream: n2 ? n2.stream : null }), o2.emit("error", i2), i2.critical && f("unload")), true;
          case "unload":
            return window.removeEventListener("message", c), r2.onload = null, r2.removeAttribute("src"), h("stream", null), h("loaded", null), h("paused", null), h("time", null), h("duration", null), h("buffering", null), h("buffered", null), h("volume", null), h("muted", null), h("playbackSpeed", null), true;
          case "destroy":
            return f("unload"), l = true, o2.removeAllListeners(), t2.removeChild(r2), true;
        }
        var i2;
      }
      this.on = function(e3, t3) {
        if (l) throw new Error("Video is destroyed");
        o2.on(e3, t3);
      }, this.dispatch = function(e3) {
        if (l) throw new Error("Video is destroyed");
        if (e3) switch ((e3 = a(i(e3))).type) {
          case "observeProp":
            return t3 = e3.propName, u.hasOwnProperty(t3) && (u[t3] = true), void d(e3);
          case "setProp":
            return void d(e3);
          case "command":
            return void (f(e3.commandName, e3.commandArgs) || d(e3));
        }
        var t3;
        throw new Error("Invalid action dispatched: " + JSON.stringify(e3));
      };
    }
    o.canPlayStream = function(e2) {
      return Promise.resolve(e2 && "string" == typeof e2.playerFrameUrl);
    }, o.manifest = { name: "IFrameVideo", external: true, props: ["stream", "loaded", "paused", "time", "duration", "buffering", "buffered", "audioTracks", "selectedAudioTrackId", "subtitlesTracks", "selectedSubtitlesTrackId", "subtitlesOffset", "subtitlesSize", "subtitlesTextColor", "subtitlesBackgroundColor", "subtitlesOutlineColor", "volume", "muted", "playbackSpeed", "extraSubtitlesTracks", "selectedExtraSubtitlesTrackId", "extraSubtitlesDelay", "extraSubtitlesSize", "extraSubtitlesOffset", "extraSubtitlesTextColor", "extraSubtitlesBackgroundColor", "extraSubtitlesOutlineColor"], commands: ["load", "unload", "destroy", "addExtraSubtitlesTracks"], events: ["propValue", "propChanged", "ended", "error", "subtitlesTrackLoaded", "audioTrackLoaded", "extraSubtitlesTrackLoaded", "implementationChanged"] }, e.exports = o;
  },
  6373: (e, t, r) => {
    var n = r(5852), i = r(5126), a = r(8816), s = r(8742), o = r(5416), l = r(1665), u = r(3133), c = r(499);
    e.exports = function(e2) {
      function t2(t3) {
        var r2 = new e2(t3 = t3 || {});
        r2.on("error", (function(e3) {
          m.emit("error", e3), e3.critical && _("unload");
        })), r2.on("propValue", w.bind(null, "propValue")), r2.on("propChanged", w.bind(null, "propChanged")), e2.manifest.events.filter((function(e3) {
          return !["error", "propValue", "propChanged"].includes(e3);
        })).forEach((function(e3) {
          r2.on(e3, /* @__PURE__ */ (function(e4) {
            return function() {
              m.emit.apply(m, [e4].concat(Array.from(arguments)));
            };
          })(e3));
        }));
        var d = t3.containerElement;
        if (!(d instanceof HTMLElement)) throw new Error("Container element required to be instance of HTMLElement");
        var h = document.createElement("div");
        h.style.position = "absolute", h.style.right = "0", h.style.bottom = "0", h.style.left = "0", h.style.zIndex = "1", h.style.textAlign = "center", d.style.position = "relative", d.style.zIndex = "0", d.appendChild(h);
        var f = { time: null }, g = null, m = new n(), p = false, v = [], y = null, T = null, b = 100, E = 0, S = "rgb(255, 255, 255)", A = "rgba(0, 0, 0, 0)", k = "rgb(34, 34, 34)", L = 1, R = { extraSubtitlesTracks: false, selectedExtraSubtitlesTrackId: false, extraSubtitlesDelay: false, extraSubtitlesSize: false, extraSubtitlesOffset: false, extraSubtitlesTextColor: false, extraSubtitlesBackgroundColor: false, extraSubtitlesOutlineColor: false, extraSubtitlesOpacity: false };
        function I() {
          for (; h.hasChildNodes(); ) h.removeChild(h.lastChild);
          null !== g && null !== f.time && isFinite(f.time) && (h.style.bottom = E + "%", h.style.opacity = L, u.render(g, f.time - T).forEach((function(e3) {
            e3.style.display = "inline-block", e3.style.padding = "0.2em", e3.style.whiteSpace = "pre-wrap";
            var t4 = window.screen720p ? 1.538 : 1;
            e3.style.fontSize = Math.floor(b / 25 * t4) + "vmin", e3.style.color = S, e3.style.backgroundColor = A, e3.style.textShadow = "-0.15rem -0.15rem 0.15rem " + k + ", 0px -0.15rem 0.15rem " + k + ", 0.15rem -0.15rem 0.15rem " + k + ", -0.15rem 0px 0.15rem " + k + ", 0.15rem 0px 0.15rem " + k + ", -0.15rem 0.15rem 0.15rem " + k + ", 0px 0.15rem 0.15rem " + k + ", 0.15rem 0.15rem 0.15rem " + k, h.appendChild(e3), h.appendChild(document.createElement("br"));
          })));
        }
        function w(e3, t4, r3) {
          if ("time" === t4) f.time = r3, I();
          m.emit(e3, t4, C(t4, r3));
        }
        function D(e3) {
          R[e3] && m.emit("propChanged", e3, C(e3, null));
        }
        function C(e3, t4) {
          switch (e3) {
            case "extraSubtitlesTracks":
              return p ? [] : v.slice();
            case "selectedExtraSubtitlesTrackId":
              return p ? null : y;
            case "extraSubtitlesDelay":
              return p ? null : T;
            case "extraSubtitlesSize":
              return p ? null : b;
            case "extraSubtitlesOffset":
              return p ? null : E;
            case "extraSubtitlesTextColor":
              return p ? null : S;
            case "extraSubtitlesBackgroundColor":
              return p ? null : A;
            case "extraSubtitlesOutlineColor":
              return p ? null : k;
            case "extraSubtitlesOpacity":
              return p ? null : L;
            default:
              return t4;
          }
        }
        function x(e3, t4) {
          switch (e3) {
            case "selectedExtraSubtitlesTrackId":
              g = null, y = null, T = null;
              var n2 = v.find((function(e4) {
                return e4.id === t4;
              }));
              if (n2) {
                y = n2.id, T = 0, (function e4(t5, i2) {
                  (function(e5, t6) {
                    var r3 = t6 ? e5.fallbackUrl : e5.url;
                    if ("string" == typeof r3) return fetch(r3).then((function(e6) {
                      if (e6.ok) return e6.text();
                      throw new Error(e6.status + " (" + e6.statusText + ")");
                    }));
                    if (e5.buffer instanceof ArrayBuffer) try {
                      const t7 = new Uint8Array(e5.buffer), r4 = new TextDecoder().decode(t7);
                      return Promise.resolve(r4);
                    } catch (e6) {
                      return Promise.reject(e6);
                    }
                    return Promise.reject("No `url` or `buffer` field available for this track");
                  })(t5, i2).then((function(e5) {
                    return c.convert(e5);
                  })).then((function(e5) {
                    return l.parse(e5);
                  })).then((function(e5) {
                    y === n2.id && (g = e5, I(), m.emit("extraSubtitlesTrackLoaded", n2));
                  })).catch((function(t6) {
                    y === n2.id && (i2 || "string" != typeof n2.fallbackUrl ? (function(e5) {
                      m.emit("error", e5), e5.critical && (_("unload"), r2.dispatch({ type: "command", commandName: "unload" }));
                    })(Object.assign({}, o.WITH_HTML_SUBTITLES.LOAD_FAILED, { error: t6, track: n2, critical: false })) : e4(n2, true));
                  }));
                })(n2);
              }
              return I(), D("selectedExtraSubtitlesTrackId"), D("extraSubtitlesDelay"), true;
            case "extraSubtitlesDelay":
              return null !== y && null !== t4 && isFinite(t4) && (T = parseInt(t4, 10), I(), D("extraSubtitlesDelay")), true;
            case "extraSubtitlesSize":
              return null !== t4 && isFinite(t4) && (b = Math.max(0, parseInt(t4, 10)), I(), D("extraSubtitlesSize")), true;
            case "extraSubtitlesOffset":
              return null !== t4 && isFinite(t4) && (E = Math.max(0, Math.min(100, parseInt(t4, 10))), I(), D("extraSubtitlesOffset")), true;
            case "extraSubtitlesTextColor":
              if ("string" == typeof t4) {
                try {
                  S = s(t4).rgb().string();
                } catch (e4) {
                  console.error("withHTMLSubtitles", e4);
                }
                I(), D("extraSubtitlesTextColor");
              }
              return true;
            case "extraSubtitlesBackgroundColor":
              if ("string" == typeof t4) {
                try {
                  A = s(t4).rgb().string();
                } catch (e4) {
                  console.error("withHTMLSubtitles", e4);
                }
                I(), D("extraSubtitlesBackgroundColor");
              }
              return true;
            case "extraSubtitlesOutlineColor":
              if ("string" == typeof t4) {
                try {
                  k = s(t4).rgb().string();
                } catch (e4) {
                  console.error("withHTMLSubtitles", e4);
                }
                I(), D("extraSubtitlesOutlineColor");
              }
              return true;
            case "extraSubtitlesOpacity":
              if ("number" == typeof t4) {
                try {
                  L = Math.min(Math.max(t4 / 100, 0), 1);
                } catch (e4) {
                  console.error("withHTMLSubtitles", e4);
                }
                I(), D("extraSubtitlesOpacity");
              }
              return true;
            default:
              return false;
          }
        }
        function _(e3, t4) {
          switch (e3) {
            case "addExtraSubtitlesTracks":
              return t4 && Array.isArray(t4.tracks) && (v = v.concat(t4.tracks).filter((function(e4, t5, r3) {
                return e4 && "string" == typeof e4.id && "string" == typeof e4.lang && "string" == typeof e4.label && "string" == typeof e4.origin && !e4.embedded && t5 === r3.findIndex((function(t6) {
                  return t6.id === e4.id;
                }));
              })), D("extraSubtitlesTracks")), true;
            case "addLocalSubtitles":
              if (t4 && "string" == typeof t4.filename && t4.buffer instanceof ArrayBuffer) {
                var n2 = "LOCAL_" + v.filter((function(e4) {
                  return e4.local;
                })).length, i2 = { id: n2, url: null, buffer: t4.buffer, lang: "local", label: t4.filename, origin: "LOCAL", local: true, embedded: false };
                v.push(i2), D("extraSubtitlesTracks"), m.emit("extraSubtitlesTrackAdded", i2);
              }
              return true;
            case "load":
              return _("unload"), t4.stream && Array.isArray(t4.stream.subtitles) && _("addExtraSubtitlesTracks", { tracks: t4.stream.subtitles.map((function(e4) {
                return Object.assign({}, e4, { origin: "EXCLUSIVE", exclusive: true, embedded: false });
              })) }), false;
            case "unload":
              return g = null, v = [], y = null, T = null, I(), D("extraSubtitlesTracks"), D("selectedExtraSubtitlesTrackId"), D("extraSubtitlesDelay"), false;
            case "destroy":
              return _("unload"), p = true, D("extraSubtitlesSize"), D("extraSubtitlesOffset"), D("extraSubtitlesTextColor"), D("extraSubtitlesBackgroundColor"), D("extraSubtitlesOutlineColor"), D("extraSubtitlesOpacity"), r2.dispatch({ type: "command", commandName: "destroy" }), m.removeAllListeners(), d.removeChild(h), true;
            default:
              return false;
          }
        }
        this.on = function(e3, t4) {
          if (p) throw new Error("Video is destroyed");
          m.on(e3, t4);
        }, this.dispatch = function(e3) {
          if (p) throw new Error("Video is destroyed");
          if (e3) switch ((e3 = a(i(e3))).type) {
            case "observeProp":
              if ((function(e4) {
                switch (e4) {
                  case "extraSubtitlesTracks":
                  case "selectedExtraSubtitlesTrackId":
                  case "extraSubtitlesDelay":
                  case "extraSubtitlesSize":
                  case "extraSubtitlesOffset":
                  case "extraSubtitlesTextColor":
                  case "extraSubtitlesBackgroundColor":
                  case "extraSubtitlesOutlineColor":
                  case "extraSubtitlesOpacity":
                    return m.emit("propValue", e4, C(e4, null)), R[e4] = true, true;
                  default:
                    return false;
                }
              })(e3.propName)) return;
              break;
            case "setProp":
              if (x(e3.propName, e3.propValue)) return;
              break;
            case "command":
              if (_(e3.commandName, e3.commandArgs)) return;
          }
          r2.dispatch(e3);
        };
      }
      return t2.canPlayStream = function(t3) {
        return e2.canPlayStream(t3);
      }, t2.manifest = { name: e2.manifest.name + "WithHTMLSubtitles", external: e2.manifest.external, props: e2.manifest.props.concat(["extraSubtitlesTracks", "selectedExtraSubtitlesTrackId", "extraSubtitlesDelay", "extraSubtitlesSize", "extraSubtitlesOffset", "extraSubtitlesTextColor", "extraSubtitlesBackgroundColor", "extraSubtitlesOutlineColor", "extraSubtitlesOpacity"]).filter((function(e3, t3, r2) {
        return r2.indexOf(e3) === t3;
      })), commands: e2.manifest.commands.concat(["load", "unload", "destroy", "addExtraSubtitlesTracks", "addLocalSubtitles"]).filter((function(e3, t3, r2) {
        return r2.indexOf(e3) === t3;
      })), events: e2.manifest.events.concat(["propValue", "propChanged", "error", "extraSubtitlesTrackLoaded", "extraSubtitlesTrackAdded"]).filter((function(e3, t3, r2) {
        return r2.indexOf(e3) === t3;
      })) }, t2;
    };
  },
  7705: (e, t, r) => {
    var n = r(5852), i = r(5416);
    function a(e2) {
      var t2 = (e2 = e2 || {}).containerElement;
      if (!(t2 instanceof HTMLElement)) throw new Error("Container element required to be instance of HTMLElement");
      var r2 = e2.chromecastTransport;
      if (!r2) throw new Error("Chromecast transport required");
      var a2 = r2.getCastDevice();
      if (null === a2) throw new Error("Chromecast session must be started");
      var s = document.createElement("div");
      s.style.display = "flex", s.style.flexDirection = "row", s.style.alignItems = "center", s.style.justifyContent = "center", s.style.width = "100%", s.style.height = "100%", s.style.backgroundColor = "black";
      var o = document.createElement("div");
      o.style.flex = "none", o.style.maxWidth = "80%", o.style.fontSize = "5vmin", o.style.lineHeight = "1.2em", o.style.maxHeight = "3.6em", o.style.textAlign = "center", o.style.color = "#FFFFFF90", o.innerText = "Casting to " + a2.friendlyName, s.appendChild(o), t2.appendChild(s), r2.on("message", f), r2.on("message-error", h);
      var l = new n(), u = false, c = { stream: false, loaded: false, paused: false, time: false, duration: false, buffering: false, buffered: false, audioTracks: false, selectedAudioTrackId: false, subtitlesTracks: false, selectedSubtitlesTrackId: false, subtitlesOffset: false, subtitlesSize: false, subtitlesTextColor: false, subtitlesBackgroundColor: false, subtitlesOutlineColor: false, volume: false, muted: false, playbackSpeed: false, videoParams: false, extraSubtitlesTracks: false, selectedExtraSubtitlesTrackId: false, extraSubtitlesDelay: false, extraSubtitlesSize: false, extraSubtitlesOffset: false, extraSubtitlesTextColor: false, extraSubtitlesBackgroundColor: false, extraSubtitlesOutlineColor: false };
      function d(e3, t3) {
        l.emit("error", Object.assign({}, i.CHROMECAST_SENDER_VIDEO.MESSAGE_SEND_FAILED, { error: e3, action: t3 }));
      }
      function h(e3) {
        l.emit("error", Object.assign({}, i.CHROMECAST_SENDER_VIDEO.INVALID_MESSAGE_RECEIVED, { error: e3 }));
      }
      function f(e3) {
        if (e3 && "string" == typeof e3.event) {
          var t3 = Array.isArray(e3.args) ? e3.args : [];
          l.emit.apply(l, [e3.event].concat(t3));
        } else h(new Error("Invalid message: " + e3));
      }
      function g(e3, t3) {
        c[e3] && l.emit("propChanged", e3, t3);
      }
      this.on = function(e3, t3) {
        if (u) throw new Error("Video is destroyed");
        l.on(e3, t3);
      }, this.dispatch = function(e3) {
        if (u) throw new Error("Video is destroyed");
        if (e3) switch (e3.type) {
          case "observeProp":
            return i2 = e3.propName, c.hasOwnProperty(i2) && (c[i2] = true), void r2.sendMessage(e3).catch((function(t3) {
              d(t3, e3);
            }));
          case "setProp":
            return void r2.sendMessage(e3).catch((function(t3) {
              d(t3, e3);
            }));
          case "command":
            return n2 = e3.commandName, e3.commandArgs, "destroy" === n2 && (u = true, g("stream", null), g("loaded", null), g("paused", null), g("time", null), g("duration", null), g("buffering", null), g("buffered", null), g("audioTracks", []), g("selectedAudioTrackId", []), g("subtitlesTracks", []), g("selectedSubtitlesTrackId", null), g("subtitlesOffset", null), g("subtitlesSize", null), g("subtitlesTextColor", null), g("subtitlesBackgroundColor", null), g("subtitlesOutlineColor", null), g("volume", null), g("muted", null), g("playbackSpeed", null), g("videoParams", null), g("extraSubtitlesTracks", []), g("selectedExtraSubtitlesTrackId", null), g("extraSubtitlesDelay", null), g("extraSubtitlesSize", null), g("extraSubtitlesOffset", null), g("extraSubtitlesTextColor", null), g("extraSubtitlesBackgroundColor", null), g("extraSubtitlesOutlineColor", null), l.removeAllListeners(), r2.off("message", f), t2.removeChild(s)), void r2.sendMessage(e3).catch((function(t3) {
              d(t3, e3);
            }));
        }
        var n2, i2;
        throw new Error("Invalid action dispatched: " + JSON.stringify(e3));
      };
    }
    a.canPlayStream = function() {
      return Promise.resolve(true);
    }, a.manifest = { name: "ChromecastSenderVideo", external: true, props: ["stream", "loaded", "paused", "time", "duration", "buffering", "buffered", "audioTracks", "selectedAudioTrackId", "subtitlesTracks", "selectedSubtitlesTrackId", "subtitlesOffset", "subtitlesSize", "subtitlesTextColor", "subtitlesBackgroundColor", "subtitlesOutlineColor", "volume", "muted", "playbackSpeed", "videoParams", "extraSubtitlesTracks", "selectedExtraSubtitlesTrackId", "extraSubtitlesDelay", "extraSubtitlesSize", "extraSubtitlesOffset", "extraSubtitlesTextColor", "extraSubtitlesBackgroundColor", "extraSubtitlesOutlineColor"], commands: ["load", "unload", "destroy", "addExtraSubtitlesTracks"], events: ["propValue", "propChanged", "ended", "error", "subtitlesTrackLoaded", "audioTrackLoaded", "extraSubtitlesTrackLoaded", "implementationChanged"] }, e.exports = a;
  }
};
