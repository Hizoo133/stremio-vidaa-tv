// Deconstructed Theater 1.10.0 modules (withStreamingServer.js)
module.exports = {
  3657: (e, t, r) => {
    var n = r(5852), i = r(8868), a = r(7444), s = r(5126), o = r(8816), l = r(5399), u = r(7037), c = r(6089), d = r(1464), h = r(7462), f = r(5416);
    e.exports = function(e2) {
      function t2(r2) {
        var h2 = new e2(r2 = r2 || {});
        h2.on("error", (function(e3) {
          T.emit("error", e3), e3.critical && R("unload");
        })), h2.on("propValue", S.bind(null, "propValue")), h2.on("propChanged", S.bind(null, "propChanged")), e2.manifest.events.filter((function(e3) {
          return !["error", "propValue", "propChanged"].includes(e3);
        })).forEach((function(e3) {
          h2.on(e3, /* @__PURE__ */ (function(e4) {
            return function() {
              T.emit.apply(T, [e4].concat(Array.from(arguments)));
            };
          })(e3));
        }));
        var g = this, m = null, p = false, v = [], y = null, T = new n(), b = false, E = { stream: false, videoParams: false };
        function S(e3, t3, r3) {
          T.emit(e3, t3, L(t3, r3));
        }
        function A(e3) {
          E[e3] && T.emit("propChanged", e3, L(e3, null));
        }
        function k(e3) {
          T.emit("error", e3), e3.critical && (R("unload"), h2.dispatch({ type: "command", commandName: "unload" }));
        }
        function L(e3, t3) {
          switch (e3) {
            case "stream":
              return null !== m ? m.stream : null;
            case "videoParams":
              return y;
            default:
              return t3;
          }
        }
        function R(r3, n2) {
          switch (r3) {
            case "load":
              return n2 && n2.stream && "string" == typeof n2.streamingServerURL ? (R("unload"), h2.dispatch({ type: "command", commandName: "unload" }), m = n2, A("stream"), u(n2.streamingServerURL, n2.stream, n2.seriesInfo, n2.streamingServerSettings).then((function(e3) {
                var r4 = e3.url, s2 = e3.infoHash, o2 = e3.fileIdx, u2 = Array.isArray(n2.formats) ? n2.formats : l.formats, c2 = Array.isArray(n2.videoCodecs) ? n2.videoCodecs : l.videoCodecs, d2 = Array.isArray(n2.audioCodecs) ? n2.audioCodecs : l.audioCodecs, h3 = null !== n2.maxAudioChannels && isFinite(n2.maxAudioChannels) ? n2.maxAudioChannels : l.maxAudioChannels, f2 = Object.assign({}, n2, { formats: u2, videoCodecs: c2, audioCodecs: d2, maxAudioChannels: h3 });
                var _vft = !!(n2.forceTranscoding || window.__FORCE_TRANSCODE__);
                return (_vft ? (window.__FORCE_TRANSCODE__ = false, Promise.resolve(false)) : "string" == typeof r4 && /\.m3u8(?:$|[?#])/i.test(r4) ? Promise.resolve(true) : t2.canPlayStream({ url: r4 }, f2)).catch((function(e4) {
                  return console.warn("Media probe error", e4), false;
                })).then((function(e4) {
                  if (e4) return { mediaURL: r4, infoHash: s2, fileIdx: o2, stream: { url: r4 } };
                  var t3 = a(), l2 = new URLSearchParams([["mediaURL", r4]]);
                  return _vft && l2.set("forceTranscoding", "1"), c2.forEach((function(e5) {
                    l2.append("videoCodecs", e5);
                  })), d2.forEach((function(e5) {
                    l2.append("audioCodecs", e5);
                  })), l2.set("maxAudioChannels", h3), { mediaURL: r4, infoHash: s2, fileIdx: o2, stream: { url: i.resolve(n2.streamingServerURL, "/hlsv2/" + t3 + "/master.m3u8?" + l2.toString()), subtitles: Array.isArray(n2.stream.subtitles) ? n2.stream.subtitles.map((function(e5) {
                    return Object.assign({}, e5, { url: "string" == typeof e5.url ? i.resolve(n2.streamingServerURL, "/subtitles.vtt?" + new URLSearchParams([["from", e5.url]]).toString()) : e5.url });
                  })) : [], behaviorHints: { headers: { "content-type": "application/vnd.apple.mpegurl" } } } };
                }));
              })).then((function(t3) {
                n2 === m && (h2.dispatch({ type: "command", commandName: "load", commandArgs: Object.assign({}, n2, { stream: t3.stream }) }), p = true, (function() {
                  for (; v.length > 0; ) {
                    var e3 = v.shift();
                    g.dispatch.call(g, e3);
                  }
                })(), d(h2, e2.manifest.props).then((function() {
                  return c(n2.streamingServerURL, t3.mediaURL, t3.infoHash, t3.fileIdx, n2.stream.behaviorHints);
                })).then((function(e3) {
                  n2 === m && (y = e3, A("videoParams"));
                })).catch((function(e3) {
                  n2 === m && (console.error(e3), y = { hash: null, size: null, filename: null }, A("videoParams"));
                })));
              })).catch((function(e3) {
                n2 === m && k(Object.assign({}, f.WITH_STREAMING_SERVER.CONVERT_FAILED, { error: e3, critical: true, stream: n2.stream, streamingServerURL: n2.streamingServerURL }));
              }))) : k(Object.assign({}, f.UNSUPPORTED_STREAM, { critical: true, stream: n2 ? n2.stream : null, streamingServerURL: n2 && "string" == typeof n2.streamingServerURL ? n2.streamingServerURL : null })), true;
            case "addExtraSubtitlesTracks":
              return m && n2 && Array.isArray(n2.tracks) && (p ? h2.dispatch({ type: "command", commandName: "addExtraSubtitlesTracks", commandArgs: Object.assign({}, n2, { tracks: n2.tracks.map((function(e3) {
                return Object.assign({}, e3, { fallbackUrl: e3.url, url: "string" == typeof e3.url ? i.resolve(m.streamingServerURL, "/subtitles.vtt?" + new URLSearchParams([["from", e3.url]]).toString()) : e3.url });
              })) }) }) : v.push({ type: "command", commandName: "addExtraSubtitlesTracks", commandArgs: n2 })), true;
            case "unload":
              return m = null, p = false, v = [], y = null, A("stream"), A("videoParams"), false;
            case "destroy":
              return R("unload"), b = true, h2.dispatch({ type: "command", commandName: "destroy" }), T.removeAllListeners(), true;
            default:
              return !p && (v.push({ type: "command", commandName: r3, commandArgs: n2 }), true);
          }
        }
        this.on = function(e3, t3) {
          if (b) throw new Error("Video is destroyed");
          T.on(e3, t3);
        }, this.dispatch = function(e3) {
          if (b) throw new Error("Video is destroyed");
          if (e3) switch ((e3 = o(s(e3))).type) {
            case "observeProp":
              if ((function(e4) {
                switch (e4) {
                  case "stream":
                  case "videoParams":
                    return T.emit("propValue", e4, L(e4, null)), E[e4] = true, true;
                  default:
                    return false;
                }
              })(e3.propName)) return;
              break;
            case "command":
              if (R(e3.commandName, e3.commandArgs)) return;
          }
          h2.dispatch(e3);
        };
      }
      return t2.canPlayStream = function(t3, r2) {
        return h().then((function(n2) {
          if (!n2) return e2.canPlayStream(t3);
          var a2 = new URLSearchParams([["mediaURL", t3.url]]);
          return fetch(i.resolve(r2.streamingServerURL, "/hlsv2/probe?" + a2.toString())).then((function(e3) {
            return e3.json();
          })).then((function(e3) {
            var t4 = r2.formats.some((function(t5) {
              return -1 !== e3.format.name.indexOf(t5);
            })), n3 = e3.streams.every((function(e4) {
              return "audio" === e4.track ? e4.channels <= r2.maxAudioChannels && -1 !== r2.audioCodecs.indexOf(e4.codec) : "video" !== e4.track || -1 !== r2.videoCodecs.indexOf(e4.codec);
            }));
            return t4 && n3;
          })).catch((function() {
            return e2.canPlayStream(t3);
          }));
        }));
      }, t2.manifest = { name: e2.manifest.name + "WithStreamingServer", external: e2.manifest.external, props: e2.manifest.props.concat(["stream", "videoParams"]).filter((function(e3, t3, r2) {
        return r2.indexOf(e3) === t3;
      })), commands: e2.manifest.commands.concat(["load", "unload", "destroy", "addExtraSubtitlesTracks"]).filter((function(e3, t3, r2) {
        return r2.indexOf(e3) === t3;
      })), events: e2.manifest.events.concat(["propValue", "propChanged", "error"]).filter((function(e3, t3, r2) {
        return r2.indexOf(e3) === t3;
      })) }, t2;
    };
  }
};
