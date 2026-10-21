// Deconstructed Theater 1.10.0 modules (vendor.js)
module.exports = {
  301: (e, t, r) => {
    "use strict";
    var n = r(8336), i = Array.prototype.concat, a = Array.prototype.slice, s = e.exports = function(e2) {
      for (var t2 = [], r2 = 0, s2 = e2.length; r2 < s2; r2++) {
        var o = e2[r2];
        n(o) ? t2 = i.call(t2, a.call(o)) : t2.push(o);
      }
      return t2;
    };
    s.wrap = function(e2) {
      return function() {
        return e2(s(arguments));
      };
    };
  },
  344: function(e, t, r) {
    var n;
    e.exports && (this.VTTCue = this.VTTCue || r(8684).VTTCue), (n = this).VTTCue.prototype.toJSON = function() {
      var e2 = {}, t2 = this;
      return Object.keys(this).forEach((function(r2) {
        "getCueAsHTML" !== r2 && "hasBeenReset" !== r2 && "displayState" !== r2 && (e2[r2] = t2[r2]);
      })), e2;
    }, n.VTTCue.create = function(e2) {
      if (!e2.hasOwnProperty("startTime") || !e2.hasOwnProperty("endTime") || !e2.hasOwnProperty("text")) throw new Error("You must at least have start time, end time, and text.");
      var t2 = new n.VTTCue(e2.startTime, e2.endTime, e2.text);
      for (var r2 in e2) t2.hasOwnProperty(r2) && (t2[r2] = e2[r2]);
      return t2;
    }, n.VTTCue.fromJSON = function(e2) {
      return this.create(JSON.parse(e2));
    };
  },
  499: (e) => {
    function t(e2) {
      for (var t2 = "", r = (e2 = e2.replace(/<[a-zA-Z/][^>]*>/g, "")).split(/\n/); r.length > 3; ) {
        for (var n = 3; n < r.length; n++) r[2] += "\n" + r[n];
        r.splice(3, r.length - 3);
      }
      var i = 0;
      if (!r[0].match(/\d+:\d+:\d+/) && r[1].match(/\d+:\d+:\d+/) && (t2 += r[0].match(/\w+/) + "\n", i += 1), !r[i].match(/\d+:\d+:\d+/)) return "";
      var a = r[1].match(/(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/);
      return a ? (t2 += a[1] + ":" + a[2] + ":" + a[3] + "." + a[4] + " --> " + a[5] + ":" + a[6] + ":" + a[7] + "." + a[8] + "\n", r[i += 1] && (t2 += r[i] + "\n\n"), t2) : "";
    }
    e.exports = { convert: function(e2) {
      if (e2.includes("WEBVTT")) return e2;
      try {
        return (function(e3) {
          var r = e3.replace(/\r+/g, ""), n = (r = r.replace(/^\s+|\s+$/g, "")).split("\n\n"), i = "";
          if (n.length > 0) {
            i += "WEBVTT\n\n";
            for (var a = 0; a < n.length; a += 1) i += t(n[a]);
          }
          return i;
        })(e2);
      } catch (e3) {
        throw new Error("Failed to convert srt to webvtt: " + e3.message);
      }
    } };
  },
  875: (e) => {
    "use strict";
    function t(e2, t2) {
      return Object.prototype.hasOwnProperty.call(e2, t2);
    }
    e.exports = function(e2, r, n, i) {
      r = r || "&", n = n || "=";
      var a = {};
      if ("string" != typeof e2 || 0 === e2.length) return a;
      var s = /\+/g;
      e2 = e2.split(r);
      var o = 1e3;
      i && "number" == typeof i.maxKeys && (o = i.maxKeys);
      var l = e2.length;
      o > 0 && l > o && (l = o);
      for (var u = 0; u < l; ++u) {
        var c, d, h, f, g = e2[u].replace(s, "%20"), m = g.indexOf(n);
        m >= 0 ? (c = g.substr(0, m), d = g.substr(m + 1)) : (c = g, d = ""), h = decodeURIComponent(c), f = decodeURIComponent(d), t(a, h) ? Array.isArray(a[h]) ? a[h].push(f) : a[h] = [a[h], f] : a[h] = f;
      }
      return a;
    };
  },
  902: (e, t, r) => {
    var n = r(3657);
    e.exports = n;
  },
  942: (e, t, r) => {
    var n = r(1103);
    t.encode = n.encode, t.decode = n.decode;
  },
  985: (e, t, r) => {
    const n = r(4546);
    function i(e2) {
      const t2 = (function() {
        const e3 = {}, t3 = Object.keys(n);
        for (let r3 = t3.length, n2 = 0; n2 < r3; n2++) e3[t3[n2]] = { distance: -1, parent: null };
        return e3;
      })(), r2 = [e2];
      for (t2[e2].distance = 0; r2.length; ) {
        const e3 = r2.pop(), i2 = Object.keys(n[e3]);
        for (let n2 = i2.length, a2 = 0; a2 < n2; a2++) {
          const n3 = i2[a2], s2 = t2[n3];
          -1 === s2.distance && (s2.distance = t2[e3].distance + 1, s2.parent = e3, r2.unshift(n3));
        }
      }
      return t2;
    }
    function a(e2, t2) {
      return function(r2) {
        return t2(e2(r2));
      };
    }
    function s(e2, t2) {
      const r2 = [t2[e2].parent, e2];
      let i2 = n[t2[e2].parent][e2], s2 = t2[e2].parent;
      for (; t2[s2].parent; ) r2.unshift(t2[s2].parent), i2 = a(n[t2[s2].parent][s2], i2), s2 = t2[s2].parent;
      return i2.conversion = r2, i2;
    }
    e.exports = function(e2) {
      const t2 = i(e2), r2 = {}, n2 = Object.keys(t2);
      for (let e3 = n2.length, i2 = 0; i2 < e3; i2++) {
        const e4 = n2[i2];
        null !== t2[e4].parent && (r2[e4] = s(e4, t2));
      }
      return r2;
    };
  },
  1031: (e, t, r) => {
    var n = r(643);
    e.exports = n;
  },
  1042: (e) => {
    function t(e2) {
      return e2.reduce(((e3, t2, r, n) => {
        const i = t2.split("-").map(((e4) => parseInt(e4)));
        return e3.concat(((e4, t3 = e4) => Array.from({ length: t3 - e4 + 1 }, ((t4, r2) => r2 + e4)))(...i));
      }), []);
    }
    e.exports = t, e.exports.parse = t, e.exports.compose = function(e2) {
      return e2.reduce(((e3, t2, r, n) => (0 !== r && t2 === n[r - 1] + 1 || e3.push([]), e3[e3.length - 1].push(t2), e3)), []).map(((e3) => e3.length > 1 ? `${e3[0]}-${e3[e3.length - 1]}` : `${e3[0]}`));
    };
  },
  1103: (e, t) => {
    "use strict";
    var r = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
    t.encode = function(e2) {
      Buffer.isBuffer(e2) || (e2 = new Buffer(e2));
      for (var t2, r2, n = 0, i = 0, a = 0, s = 0, o = new Buffer(8 * (t2 = e2, r2 = Math.floor(t2.length / 5), t2.length % 5 == 0 ? r2 : r2 + 1)); n < e2.length; ) {
        var l = e2[n];
        a > 3 ? (s = (s = l & 255 >> a) << (a = (a + 5) % 8) | (n + 1 < e2.length ? e2[n + 1] : 0) >> 8 - a, n++) : (s = l >> 8 - (a + 5) & 31, 0 === (a = (a + 5) % 8) && n++), o[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(s), i++;
      }
      for (n = i; n < o.length; n++) o[n] = 61;
      return o;
    }, t.decode = function(e2) {
      var t2, n = 0, i = 0, a = 0;
      Buffer.isBuffer(e2) || (e2 = new Buffer(e2));
      for (var s = new Buffer(Math.ceil(5 * e2.length / 8)), o = 0; o < e2.length && 61 !== e2[o]; o++) {
        var l = e2[o] - 48;
        if (!(l < r.length)) throw new Error("Invalid input - it is not base32 encoded string");
        i = r[l], n <= 3 ? 0 === (n = (n + 5) % 8) ? (t2 |= i, s[a] = t2, a++, t2 = 0) : t2 |= 255 & i << 8 - n : (t2 |= 255 & i >>> (n = (n + 5) % 8), s[a] = t2, a++, t2 = 255 & i << 8 - n);
      }
      return s.slice(0, a);
    };
  },
  1410: (e, t, r) => {
    var n = r(7705);
    e.exports = n;
  },
  1417: (e, t, r) => {
    e.exports = { WebVTT: r(8099).WebVTT, VTTCue: r(344).VTTCue, VTTRegion: r(7385).VTTRegion };
  },
  1464: (e) => {
    e.exports = function(e2, t) {
      return t.includes("loaded") ? new Promise((function(t2, r) {
        var n = null;
        e2.on("propChanged", (function(e3, i) {
          "loaded" === e3 && null !== i && null === n && (n = i, true === i ? t2(true) : false === i && r(Error("Player failed to load, will not retrieve video params")));
        })), e2.dispatch({ type: "observeProp", propName: "loaded" });
      })) : Promise.resolve(true);
    };
  },
  1615: function() {
    !(function(e) {
      var t = { "": true, up: true };
      function r(e2) {
        return "number" == typeof e2 && e2 >= 0 && e2 <= 100;
      }
      e.VTTRegion = e.VTTRegion || function() {
        var e2 = 100, n = 3, i = 0, a = 100, s = 0, o = 100, l = "";
        Object.defineProperties(this, { width: { enumerable: true, get: function() {
          return e2;
        }, set: function(t2) {
          if (!r(t2)) throw new Error("Width must be between 0 and 100.");
          e2 = t2;
        } }, lines: { enumerable: true, get: function() {
          return n;
        }, set: function(e3) {
          if ("number" != typeof e3) throw new TypeError("Lines must be set to a number.");
          n = e3;
        } }, regionAnchorY: { enumerable: true, get: function() {
          return a;
        }, set: function(e3) {
          if (!r(e3)) throw new Error("RegionAnchorX must be between 0 and 100.");
          a = e3;
        } }, regionAnchorX: { enumerable: true, get: function() {
          return i;
        }, set: function(e3) {
          if (!r(e3)) throw new Error("RegionAnchorY must be between 0 and 100.");
          i = e3;
        } }, viewportAnchorY: { enumerable: true, get: function() {
          return o;
        }, set: function(e3) {
          if (!r(e3)) throw new Error("ViewportAnchorY must be between 0 and 100.");
          o = e3;
        } }, viewportAnchorX: { enumerable: true, get: function() {
          return s;
        }, set: function(e3) {
          if (!r(e3)) throw new Error("ViewportAnchorX must be between 0 and 100.");
          s = e3;
        } }, scroll: { enumerable: true, get: function() {
          return l;
        }, set: function(e3) {
          var r2 = (function(e4) {
            return "string" == typeof e4 && !!t[e4.toLowerCase()] && e4.toLowerCase();
          })(e3);
          if (false === r2) throw new SyntaxError("An invalid or illegal string was specified.");
          l = r2;
        } } });
      };
    })(this);
  },
  1665: (e, t, r) => {
    var n = r(1417), i = r(2006);
    e.exports = { parse: function(e2) {
      return new Promise((function(t2, r2) {
        var a = new n.WebVTT.Parser(window, n.WebVTT.StringDecoder()), s = [], o = [], l = {};
        a.oncue = function(e3) {
          var t3 = { startTime: 1e3 * e3.startTime | 0, endTime: 1e3 * e3.endTime | 0, text: e3.text };
          o.push(t3), l[t3.startTime] = l[t3.startTime] || [], l[t3.endTime] = l[t3.endTime] || [];
        }, a.onparsingerror = function(e3) {
          0 === e3.code ? (a.oncue = null, a.onparsingerror = null, a.onflush = null, r2(e3)) : (console.warn("Subtitles parsing error", e3), s.push(e3));
        }, a.onflush = function() {
          l.times = Object.keys(l).map((function(e4) {
            return parseInt(e4, 10);
          })).sort((function(e4, t3) {
            return e4 - t3;
          }));
          for (var e3 = 0; e3 < o.length; e3++) {
            l[o[e3].startTime].push(o[e3]);
            for (var n2 = i(l.times, o[e3].startTime) + 1; n2 < l.times.length && !(o[e3].endTime <= l.times[n2]); n2++) l[l.times[n2]].push(o[e3]);
          }
          for (var u = 0; u < l.times.length; u++) l[l.times[u]].sort((function(e4, t3) {
            return e4.startTime - t3.startTime || e4.endTime - t3.endTime;
          }));
          a.oncue = null, a.onparsingerror = null, a.onflush = null, 0 === o.length && s.length ? r2(s[0]) : 0 === l.times.length ? r2(new Error("Missing subtitle track cues")) : t2(l);
        }, a.parse(e2);
      }));
    } };
  },
  1880: (e, t, r) => {
    const n = r(4546), i = r(985), a = {};
    Object.keys(n).forEach(((e2) => {
      a[e2] = {}, Object.defineProperty(a[e2], "channels", { value: n[e2].channels }), Object.defineProperty(a[e2], "labels", { value: n[e2].labels });
      const t2 = i(e2);
      Object.keys(t2).forEach(((r2) => {
        const n2 = t2[r2];
        a[e2][r2] = (function(e3) {
          const t3 = function(...t4) {
            const r3 = t4[0];
            if (null == r3) return r3;
            r3.length > 1 && (t4 = r3);
            const n3 = e3(t4);
            if ("object" == typeof n3) for (let e4 = n3.length, t5 = 0; t5 < e4; t5++) n3[t5] = Math.round(n3[t5]);
            return n3;
          };
          return "conversion" in e3 && (t3.conversion = e3.conversion), t3;
        })(n2), a[e2][r2].raw = (function(e3) {
          const t3 = function(...t4) {
            const r3 = t4[0];
            return null == r3 ? r3 : (r3.length > 1 && (t4 = r3), e3(t4));
          };
          return "conversion" in e3 && (t3.conversion = e3.conversion), t3;
        })(n2);
      }));
    })), e.exports = a;
  },
  2006: (e) => {
    e.exports = function(e2, t) {
      if (t < e2[0] || e2[e2.length - 1] < t) return -1;
      for (var r = 0, n = e2.length - 1, i = -1; r <= n; ) {
        var a = Math.floor((r + n) / 2);
        e2[a] > t ? n = a - 1 : (e2[a] < t || (i = a), r = a + 1);
      }
      return -1 !== i ? i : n;
    };
  },
  2366: (e, t, r) => {
    var n = r(7241);
    e.exports = n;
  },
  2715: (e, t, r) => {
    var n = r(531);
    e.exports = n;
  },
  3133: (e, t, r) => {
    var n = r(1417), i = r(2006);
    e.exports = { render: function(e2, t2) {
      var r2 = [], a = i(e2.times, t2);
      if (-1 !== a) for (var s = e2[e2.times[a]], o = 0; o < s.length; o++) {
        var l = n.WebVTT.convertCueToDOMTree(window, s[o].text);
        r2.push(l);
      }
      return r2;
    } };
  },
  3722: (e) => {
    e.exports = { debug: false, enableWorker: true, lowLatencyMode: false, backBufferLength: 30, maxBufferLength: 50, maxMaxBufferLength: 80, maxFragLookUpTolerance: 0, maxBufferHole: 0, appendErrorMaxRetry: 20, nudgeMaxRetry: 20, manifestLoadingTimeOut: 3e4, manifestLoadingMaxRetry: 10, fragLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 12e4, timeoutRetry: { maxNumRetry: 20, retryDelayMs: 0, maxRetryDelayMs: 15 }, errorRetry: { maxNumRetry: 6, retryDelayMs: 1e3, maxRetryDelayMs: 15 } } } };
  },
  3845: (e) => {
    "use strict";
    e.exports = { isString: function(e2) {
      return "string" == typeof e2;
    }, isObject: function(e2) {
      return "object" == typeof e2 && null !== e2;
    }, isNull: function(e2) {
      return null === e2;
    }, isNullOrUndefined: function(e2) {
      return null == e2;
    } };
  },
  3909: (e, t, r) => {
    e.exports = a, e.exports.decode = a, e.exports.encode = function(e2) {
      e2 = Object.assign({}, e2);
      let t2 = /* @__PURE__ */ new Set();
      e2.xt && "string" == typeof e2.xt && t2.add(e2.xt);
      e2.xt && Array.isArray(e2.xt) && (t2 = new Set(e2.xt));
      e2.infoHashBuffer && t2.add(`urn:btih:${e2.infoHashBuffer.toString("hex")}`);
      e2.infoHash && t2.add(`urn:btih:${e2.infoHash}`);
      e2.infoHashV2Buffer && t2.add(e2.xt = `urn:btmh:1220${e2.infoHashV2Buffer.toString("hex")}`);
      e2.infoHashV2 && t2.add(`urn:btmh:1220${e2.infoHashV2}`);
      const r2 = Array.from(t2);
      1 === r2.length && (e2.xt = r2[0]);
      r2.length > 1 && (e2.xt = r2);
      e2.publicKeyBuffer && (e2.xs = `urn:btpk:${e2.publicKeyBuffer.toString("hex")}`);
      e2.publicKey && (e2.xs = `urn:btpk:${e2.publicKey}`);
      e2.name && (e2.dn = e2.name);
      e2.keywords && (e2.kt = e2.keywords);
      e2.announce && (e2.tr = e2.announce);
      e2.urlList && (e2.ws = e2.urlList, delete e2.as);
      e2.peerAddresses && (e2["x.pe"] = e2.peerAddresses);
      let n2 = "magnet:?";
      return Object.keys(e2).filter(((e3) => 2 === e3.length || "x.pe" === e3)).forEach(((t3, r3) => {
        const a2 = Array.isArray(e2[t3]) ? e2[t3] : [e2[t3]];
        a2.forEach(((e3, i2) => {
          (r3 > 0 || i2 > 0) && ("kt" !== t3 && "so" !== t3 || 0 === i2) && (n2 += "&"), "dn" === t3 && (e3 = encodeURIComponent(e3).replace(/%20/g, "+")), "tr" !== t3 && "as" !== t3 && "ws" !== t3 || (e3 = encodeURIComponent(e3)), "xs" !== t3 || e3.startsWith("urn:btpk:") || (e3 = encodeURIComponent(e3)), "kt" === t3 && (e3 = encodeURIComponent(e3)), "so" !== t3 && (n2 += "kt" === t3 && i2 > 0 ? `+${e3}` : `${t3}=${e3}`);
        })), "so" === t3 && (n2 += `${t3}=${i.compose(a2)}`);
      })), n2;
    };
    const n = r(942), i = r(1042);
    function a(e2) {
      const t2 = {}, r2 = e2.split("magnet:?")[1];
      let a2;
      if ((r2 && r2.length >= 0 ? r2.split("&") : []).forEach(((e3) => {
        const r3 = e3.split("=");
        if (2 !== r3.length) return;
        const n2 = r3[0];
        let a3 = r3[1];
        "dn" === n2 && (a3 = decodeURIComponent(a3).replace(/\+/g, " ")), "tr" !== n2 && "xs" !== n2 && "as" !== n2 && "ws" !== n2 || (a3 = decodeURIComponent(a3)), "kt" === n2 && (a3 = decodeURIComponent(a3).split("+")), "ix" === n2 && (a3 = Number(a3)), "so" === n2 && (a3 = i.parse(decodeURIComponent(a3).split(","))), t2[n2] ? (Array.isArray(t2[n2]) || (t2[n2] = [t2[n2]]), t2[n2].push(a3)) : t2[n2] = a3;
      })), t2.xt) {
        (Array.isArray(t2.xt) ? t2.xt : [t2.xt]).forEach(((e3) => {
          if (a2 = e3.match(/^urn:btih:(.{40})/)) t2.infoHash = a2[1].toLowerCase();
          else if (a2 = e3.match(/^urn:btih:(.{32})/)) {
            const e4 = n.decode(a2[1]);
            t2.infoHash = Buffer.from(e4, "binary").toString("hex");
          } else (a2 = e3.match(/^urn:btmh:1220(.{64})/)) && (t2.infoHashV2 = a2[1].toLowerCase());
        }));
      }
      if (t2.xs) {
        (Array.isArray(t2.xs) ? t2.xs : [t2.xs]).forEach(((e3) => {
          (a2 = e3.match(/^urn:btpk:(.{64})/)) && (t2.publicKey = a2[1].toLowerCase());
        }));
      }
      return t2.infoHash && (t2.infoHashBuffer = Buffer.from(t2.infoHash, "hex")), t2.infoHashV2 && (t2.infoHashV2Buffer = Buffer.from(t2.infoHashV2, "hex")), t2.publicKey && (t2.publicKeyBuffer = Buffer.from(t2.publicKey, "hex")), t2.dn && (t2.name = t2.dn), t2.kt && (t2.keywords = t2.kt), t2.announce = [], ("string" == typeof t2.tr || Array.isArray(t2.tr)) && (t2.announce = t2.announce.concat(t2.tr)), t2.urlList = [], ("string" == typeof t2.as || Array.isArray(t2.as)) && (t2.urlList = t2.urlList.concat(t2.as)), ("string" == typeof t2.ws || Array.isArray(t2.ws)) && (t2.urlList = t2.urlList.concat(t2.ws)), t2.peerAddresses = [], ("string" == typeof t2["x.pe"] || Array.isArray(t2["x.pe"])) && (t2.peerAddresses = t2.peerAddresses.concat(t2["x.pe"])), t2.announce = Array.from(new Set(t2.announce)), t2.urlList = Array.from(new Set(t2.urlList)), t2.peerAddresses = Array.from(new Set(t2.peerAddresses)), t2;
    }
  },
  4329: (e, t, r) => {
    "use strict";
    t.decode = t.parse = r(875), t.encode = t.stringify = r(5223);
  },
  4333: (e, t, r) => {
    var n = r(4625);
    e.exports = n;
  },
  4546: (e, t, r) => {
    const n = r(4877), i = {};
    for (const e2 of Object.keys(n)) i[n[e2]] = e2;
    const a = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
    e.exports = a;
    for (const e2 of Object.keys(a)) {
      if (!("channels" in a[e2])) throw new Error("missing channels property: " + e2);
      if (!("labels" in a[e2])) throw new Error("missing channel labels property: " + e2);
      if (a[e2].labels.length !== a[e2].channels) throw new Error("channel and label counts mismatch: " + e2);
      const { channels: t2, labels: r2 } = a[e2];
      delete a[e2].channels, delete a[e2].labels, Object.defineProperty(a[e2], "channels", { value: t2 }), Object.defineProperty(a[e2], "labels", { value: r2 });
    }
    a.rgb.hsl = function(e2) {
      const t2 = e2[0] / 255, r2 = e2[1] / 255, n2 = e2[2] / 255, i2 = Math.min(t2, r2, n2), a2 = Math.max(t2, r2, n2), s = a2 - i2;
      let o, l;
      a2 === i2 ? o = 0 : t2 === a2 ? o = (r2 - n2) / s : r2 === a2 ? o = 2 + (n2 - t2) / s : n2 === a2 && (o = 4 + (t2 - r2) / s), o = Math.min(60 * o, 360), o < 0 && (o += 360);
      const u = (i2 + a2) / 2;
      return l = a2 === i2 ? 0 : u <= 0.5 ? s / (a2 + i2) : s / (2 - a2 - i2), [o, 100 * l, 100 * u];
    }, a.rgb.hsv = function(e2) {
      let t2, r2, n2, i2, a2;
      const s = e2[0] / 255, o = e2[1] / 255, l = e2[2] / 255, u = Math.max(s, o, l), c = u - Math.min(s, o, l), d = function(e3) {
        return (u - e3) / 6 / c + 0.5;
      };
      return 0 === c ? (i2 = 0, a2 = 0) : (a2 = c / u, t2 = d(s), r2 = d(o), n2 = d(l), s === u ? i2 = n2 - r2 : o === u ? i2 = 1 / 3 + t2 - n2 : l === u && (i2 = 2 / 3 + r2 - t2), i2 < 0 ? i2 += 1 : i2 > 1 && (i2 -= 1)), [360 * i2, 100 * a2, 100 * u];
    }, a.rgb.hwb = function(e2) {
      const t2 = e2[0], r2 = e2[1];
      let n2 = e2[2];
      const i2 = a.rgb.hsl(e2)[0], s = 1 / 255 * Math.min(t2, Math.min(r2, n2));
      return n2 = 1 - 1 / 255 * Math.max(t2, Math.max(r2, n2)), [i2, 100 * s, 100 * n2];
    }, a.rgb.cmyk = function(e2) {
      const t2 = e2[0] / 255, r2 = e2[1] / 255, n2 = e2[2] / 255, i2 = Math.min(1 - t2, 1 - r2, 1 - n2);
      return [100 * ((1 - t2 - i2) / (1 - i2) || 0), 100 * ((1 - r2 - i2) / (1 - i2) || 0), 100 * ((1 - n2 - i2) / (1 - i2) || 0), 100 * i2];
    }, a.rgb.keyword = function(e2) {
      const t2 = i[e2];
      if (t2) return t2;
      let r2, a2 = 1 / 0;
      for (const t3 of Object.keys(n)) {
        const i2 = n[t3], l = (o = i2, ((s = e2)[0] - o[0]) ** 2 + (s[1] - o[1]) ** 2 + (s[2] - o[2]) ** 2);
        l < a2 && (a2 = l, r2 = t3);
      }
      var s, o;
      return r2;
    }, a.keyword.rgb = function(e2) {
      return n[e2];
    }, a.rgb.xyz = function(e2) {
      let t2 = e2[0] / 255, r2 = e2[1] / 255, n2 = e2[2] / 255;
      t2 = t2 > 0.04045 ? ((t2 + 0.055) / 1.055) ** 2.4 : t2 / 12.92, r2 = r2 > 0.04045 ? ((r2 + 0.055) / 1.055) ** 2.4 : r2 / 12.92, n2 = n2 > 0.04045 ? ((n2 + 0.055) / 1.055) ** 2.4 : n2 / 12.92;
      return [100 * (0.4124 * t2 + 0.3576 * r2 + 0.1805 * n2), 100 * (0.2126 * t2 + 0.7152 * r2 + 0.0722 * n2), 100 * (0.0193 * t2 + 0.1192 * r2 + 0.9505 * n2)];
    }, a.rgb.lab = function(e2) {
      const t2 = a.rgb.xyz(e2);
      let r2 = t2[0], n2 = t2[1], i2 = t2[2];
      r2 /= 95.047, n2 /= 100, i2 /= 108.883, r2 = r2 > 8856e-6 ? r2 ** (1 / 3) : 7.787 * r2 + 16 / 116, n2 = n2 > 8856e-6 ? n2 ** (1 / 3) : 7.787 * n2 + 16 / 116, i2 = i2 > 8856e-6 ? i2 ** (1 / 3) : 7.787 * i2 + 16 / 116;
      return [116 * n2 - 16, 500 * (r2 - n2), 200 * (n2 - i2)];
    }, a.hsl.rgb = function(e2) {
      const t2 = e2[0] / 360, r2 = e2[1] / 100, n2 = e2[2] / 100;
      let i2, a2, s;
      if (0 === r2) return s = 255 * n2, [s, s, s];
      i2 = n2 < 0.5 ? n2 * (1 + r2) : n2 + r2 - n2 * r2;
      const o = 2 * n2 - i2, l = [0, 0, 0];
      for (let e3 = 0; e3 < 3; e3++) a2 = t2 + 1 / 3 * -(e3 - 1), a2 < 0 && a2++, a2 > 1 && a2--, s = 6 * a2 < 1 ? o + 6 * (i2 - o) * a2 : 2 * a2 < 1 ? i2 : 3 * a2 < 2 ? o + (i2 - o) * (2 / 3 - a2) * 6 : o, l[e3] = 255 * s;
      return l;
    }, a.hsl.hsv = function(e2) {
      const t2 = e2[0];
      let r2 = e2[1] / 100, n2 = e2[2] / 100, i2 = r2;
      const a2 = Math.max(n2, 0.01);
      n2 *= 2, r2 *= n2 <= 1 ? n2 : 2 - n2, i2 *= a2 <= 1 ? a2 : 2 - a2;
      return [t2, 100 * (0 === n2 ? 2 * i2 / (a2 + i2) : 2 * r2 / (n2 + r2)), 100 * ((n2 + r2) / 2)];
    }, a.hsv.rgb = function(e2) {
      const t2 = e2[0] / 60, r2 = e2[1] / 100;
      let n2 = e2[2] / 100;
      const i2 = Math.floor(t2) % 6, a2 = t2 - Math.floor(t2), s = 255 * n2 * (1 - r2), o = 255 * n2 * (1 - r2 * a2), l = 255 * n2 * (1 - r2 * (1 - a2));
      switch (n2 *= 255, i2) {
        case 0:
          return [n2, l, s];
        case 1:
          return [o, n2, s];
        case 2:
          return [s, n2, l];
        case 3:
          return [s, o, n2];
        case 4:
          return [l, s, n2];
        case 5:
          return [n2, s, o];
      }
    }, a.hsv.hsl = function(e2) {
      const t2 = e2[0], r2 = e2[1] / 100, n2 = e2[2] / 100, i2 = Math.max(n2, 0.01);
      let a2, s;
      s = (2 - r2) * n2;
      const o = (2 - r2) * i2;
      return a2 = r2 * i2, a2 /= o <= 1 ? o : 2 - o, a2 = a2 || 0, s /= 2, [t2, 100 * a2, 100 * s];
    }, a.hwb.rgb = function(e2) {
      const t2 = e2[0] / 360;
      let r2 = e2[1] / 100, n2 = e2[2] / 100;
      const i2 = r2 + n2;
      let a2;
      i2 > 1 && (r2 /= i2, n2 /= i2);
      const s = Math.floor(6 * t2), o = 1 - n2;
      a2 = 6 * t2 - s, 1 & s && (a2 = 1 - a2);
      const l = r2 + a2 * (o - r2);
      let u, c, d;
      switch (s) {
        default:
        case 6:
        case 0:
          u = o, c = l, d = r2;
          break;
        case 1:
          u = l, c = o, d = r2;
          break;
        case 2:
          u = r2, c = o, d = l;
          break;
        case 3:
          u = r2, c = l, d = o;
          break;
        case 4:
          u = l, c = r2, d = o;
          break;
        case 5:
          u = o, c = r2, d = l;
      }
      return [255 * u, 255 * c, 255 * d];
    }, a.cmyk.rgb = function(e2) {
      const t2 = e2[0] / 100, r2 = e2[1] / 100, n2 = e2[2] / 100, i2 = e2[3] / 100;
      return [255 * (1 - Math.min(1, t2 * (1 - i2) + i2)), 255 * (1 - Math.min(1, r2 * (1 - i2) + i2)), 255 * (1 - Math.min(1, n2 * (1 - i2) + i2))];
    }, a.xyz.rgb = function(e2) {
      const t2 = e2[0] / 100, r2 = e2[1] / 100, n2 = e2[2] / 100;
      let i2, a2, s;
      return i2 = 3.2406 * t2 + -1.5372 * r2 + -0.4986 * n2, a2 = -0.9689 * t2 + 1.8758 * r2 + 0.0415 * n2, s = 0.0557 * t2 + -0.204 * r2 + 1.057 * n2, i2 = i2 > 31308e-7 ? 1.055 * i2 ** (1 / 2.4) - 0.055 : 12.92 * i2, a2 = a2 > 31308e-7 ? 1.055 * a2 ** (1 / 2.4) - 0.055 : 12.92 * a2, s = s > 31308e-7 ? 1.055 * s ** (1 / 2.4) - 0.055 : 12.92 * s, i2 = Math.min(Math.max(0, i2), 1), a2 = Math.min(Math.max(0, a2), 1), s = Math.min(Math.max(0, s), 1), [255 * i2, 255 * a2, 255 * s];
    }, a.xyz.lab = function(e2) {
      let t2 = e2[0], r2 = e2[1], n2 = e2[2];
      t2 /= 95.047, r2 /= 100, n2 /= 108.883, t2 = t2 > 8856e-6 ? t2 ** (1 / 3) : 7.787 * t2 + 16 / 116, r2 = r2 > 8856e-6 ? r2 ** (1 / 3) : 7.787 * r2 + 16 / 116, n2 = n2 > 8856e-6 ? n2 ** (1 / 3) : 7.787 * n2 + 16 / 116;
      return [116 * r2 - 16, 500 * (t2 - r2), 200 * (r2 - n2)];
    }, a.lab.xyz = function(e2) {
      let t2, r2, n2;
      r2 = (e2[0] + 16) / 116, t2 = e2[1] / 500 + r2, n2 = r2 - e2[2] / 200;
      const i2 = r2 ** 3, a2 = t2 ** 3, s = n2 ** 3;
      return r2 = i2 > 8856e-6 ? i2 : (r2 - 16 / 116) / 7.787, t2 = a2 > 8856e-6 ? a2 : (t2 - 16 / 116) / 7.787, n2 = s > 8856e-6 ? s : (n2 - 16 / 116) / 7.787, t2 *= 95.047, r2 *= 100, n2 *= 108.883, [t2, r2, n2];
    }, a.lab.lch = function(e2) {
      const t2 = e2[0], r2 = e2[1], n2 = e2[2];
      let i2;
      i2 = 360 * Math.atan2(n2, r2) / 2 / Math.PI, i2 < 0 && (i2 += 360);
      return [t2, Math.sqrt(r2 * r2 + n2 * n2), i2];
    }, a.lch.lab = function(e2) {
      const t2 = e2[0], r2 = e2[1], n2 = e2[2] / 360 * 2 * Math.PI;
      return [t2, r2 * Math.cos(n2), r2 * Math.sin(n2)];
    }, a.rgb.ansi16 = function(e2, t2 = null) {
      const [r2, n2, i2] = e2;
      let s = null === t2 ? a.rgb.hsv(e2)[2] : t2;
      if (s = Math.round(s / 50), 0 === s) return 30;
      let o = 30 + (Math.round(i2 / 255) << 2 | Math.round(n2 / 255) << 1 | Math.round(r2 / 255));
      return 2 === s && (o += 60), o;
    }, a.hsv.ansi16 = function(e2) {
      return a.rgb.ansi16(a.hsv.rgb(e2), e2[2]);
    }, a.rgb.ansi256 = function(e2) {
      const t2 = e2[0], r2 = e2[1], n2 = e2[2];
      if (t2 === r2 && r2 === n2) return t2 < 8 ? 16 : t2 > 248 ? 231 : Math.round((t2 - 8) / 247 * 24) + 232;
      return 16 + 36 * Math.round(t2 / 255 * 5) + 6 * Math.round(r2 / 255 * 5) + Math.round(n2 / 255 * 5);
    }, a.ansi16.rgb = function(e2) {
      let t2 = e2 % 10;
      if (0 === t2 || 7 === t2) return e2 > 50 && (t2 += 3.5), t2 = t2 / 10.5 * 255, [t2, t2, t2];
      const r2 = 0.5 * (1 + ~~(e2 > 50));
      return [(1 & t2) * r2 * 255, (t2 >> 1 & 1) * r2 * 255, (t2 >> 2 & 1) * r2 * 255];
    }, a.ansi256.rgb = function(e2) {
      if (e2 >= 232) {
        const t3 = 10 * (e2 - 232) + 8;
        return [t3, t3, t3];
      }
      let t2;
      e2 -= 16;
      return [Math.floor(e2 / 36) / 5 * 255, Math.floor((t2 = e2 % 36) / 6) / 5 * 255, t2 % 6 / 5 * 255];
    }, a.rgb.hex = function(e2) {
      const t2 = (((255 & Math.round(e2[0])) << 16) + ((255 & Math.round(e2[1])) << 8) + (255 & Math.round(e2[2]))).toString(16).toUpperCase();
      return "000000".substring(t2.length) + t2;
    }, a.hex.rgb = function(e2) {
      const t2 = e2.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t2) return [0, 0, 0];
      let r2 = t2[0];
      3 === t2[0].length && (r2 = r2.split("").map(((e3) => e3 + e3)).join(""));
      const n2 = parseInt(r2, 16);
      return [n2 >> 16 & 255, n2 >> 8 & 255, 255 & n2];
    }, a.rgb.hcg = function(e2) {
      const t2 = e2[0] / 255, r2 = e2[1] / 255, n2 = e2[2] / 255, i2 = Math.max(Math.max(t2, r2), n2), a2 = Math.min(Math.min(t2, r2), n2), s = i2 - a2;
      let o, l;
      return o = s < 1 ? a2 / (1 - s) : 0, l = s <= 0 ? 0 : i2 === t2 ? (r2 - n2) / s % 6 : i2 === r2 ? 2 + (n2 - t2) / s : 4 + (t2 - r2) / s, l /= 6, l %= 1, [360 * l, 100 * s, 100 * o];
    }, a.hsl.hcg = function(e2) {
      const t2 = e2[1] / 100, r2 = e2[2] / 100, n2 = r2 < 0.5 ? 2 * t2 * r2 : 2 * t2 * (1 - r2);
      let i2 = 0;
      return n2 < 1 && (i2 = (r2 - 0.5 * n2) / (1 - n2)), [e2[0], 100 * n2, 100 * i2];
    }, a.hsv.hcg = function(e2) {
      const t2 = e2[1] / 100, r2 = e2[2] / 100, n2 = t2 * r2;
      let i2 = 0;
      return n2 < 1 && (i2 = (r2 - n2) / (1 - n2)), [e2[0], 100 * n2, 100 * i2];
    }, a.hcg.rgb = function(e2) {
      const t2 = e2[0] / 360, r2 = e2[1] / 100, n2 = e2[2] / 100;
      if (0 === r2) return [255 * n2, 255 * n2, 255 * n2];
      const i2 = [0, 0, 0], a2 = t2 % 1 * 6, s = a2 % 1, o = 1 - s;
      let l = 0;
      switch (Math.floor(a2)) {
        case 0:
          i2[0] = 1, i2[1] = s, i2[2] = 0;
          break;
        case 1:
          i2[0] = o, i2[1] = 1, i2[2] = 0;
          break;
        case 2:
          i2[0] = 0, i2[1] = 1, i2[2] = s;
          break;
        case 3:
          i2[0] = 0, i2[1] = o, i2[2] = 1;
          break;
        case 4:
          i2[0] = s, i2[1] = 0, i2[2] = 1;
          break;
        default:
          i2[0] = 1, i2[1] = 0, i2[2] = o;
      }
      return l = (1 - r2) * n2, [255 * (r2 * i2[0] + l), 255 * (r2 * i2[1] + l), 255 * (r2 * i2[2] + l)];
    }, a.hcg.hsv = function(e2) {
      const t2 = e2[1] / 100, r2 = t2 + e2[2] / 100 * (1 - t2);
      let n2 = 0;
      return r2 > 0 && (n2 = t2 / r2), [e2[0], 100 * n2, 100 * r2];
    }, a.hcg.hsl = function(e2) {
      const t2 = e2[1] / 100, r2 = e2[2] / 100 * (1 - t2) + 0.5 * t2;
      let n2 = 0;
      return r2 > 0 && r2 < 0.5 ? n2 = t2 / (2 * r2) : r2 >= 0.5 && r2 < 1 && (n2 = t2 / (2 * (1 - r2))), [e2[0], 100 * n2, 100 * r2];
    }, a.hcg.hwb = function(e2) {
      const t2 = e2[1] / 100, r2 = t2 + e2[2] / 100 * (1 - t2);
      return [e2[0], 100 * (r2 - t2), 100 * (1 - r2)];
    }, a.hwb.hcg = function(e2) {
      const t2 = e2[1] / 100, r2 = 1 - e2[2] / 100, n2 = r2 - t2;
      let i2 = 0;
      return n2 < 1 && (i2 = (r2 - n2) / (1 - n2)), [e2[0], 100 * n2, 100 * i2];
    }, a.apple.rgb = function(e2) {
      return [e2[0] / 65535 * 255, e2[1] / 65535 * 255, e2[2] / 65535 * 255];
    }, a.rgb.apple = function(e2) {
      return [e2[0] / 255 * 65535, e2[1] / 255 * 65535, e2[2] / 255 * 65535];
    }, a.gray.rgb = function(e2) {
      return [e2[0] / 100 * 255, e2[0] / 100 * 255, e2[0] / 100 * 255];
    }, a.gray.hsl = function(e2) {
      return [0, 0, e2[0]];
    }, a.gray.hsv = a.gray.hsl, a.gray.hwb = function(e2) {
      return [0, 100, e2[0]];
    }, a.gray.cmyk = function(e2) {
      return [0, 0, 0, e2[0]];
    }, a.gray.lab = function(e2) {
      return [e2[0], 0, 0];
    }, a.gray.hex = function(e2) {
      const t2 = 255 & Math.round(e2[0] / 100 * 255), r2 = ((t2 << 16) + (t2 << 8) + t2).toString(16).toUpperCase();
      return "000000".substring(r2.length) + r2;
    }, a.rgb.gray = function(e2) {
      return [(e2[0] + e2[1] + e2[2]) / 3 / 255 * 100];
    };
  },
  4812: (e, t, r) => {
    var n = r(3301);
    e.exports = n;
  },
  4877: (e) => {
    "use strict";
    e.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
  },
  5126: (e, t, r) => {
    e = r.nmd(e);
    var n = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", s = "[object Boolean]", o = "[object Date]", l = "[object Function]", u = "[object GeneratorFunction]", c = "[object Map]", d = "[object Number]", h = "[object Object]", f = "[object Promise]", g = "[object RegExp]", m = "[object Set]", p = "[object String]", v = "[object Symbol]", y = "[object WeakMap]", T = "[object ArrayBuffer]", b = "[object DataView]", E = "[object Float32Array]", S = "[object Float64Array]", A = "[object Int8Array]", k = "[object Int16Array]", L = "[object Int32Array]", R = "[object Uint8Array]", I = "[object Uint8ClampedArray]", w = "[object Uint16Array]", D = "[object Uint32Array]", C = /\w*$/, x = /^\[object .+?Constructor\]$/, _ = /^(?:0|[1-9]\d*)$/, O = {};
    O[a] = O["[object Array]"] = O[T] = O[b] = O[s] = O[o] = O[E] = O[S] = O[A] = O[k] = O[L] = O[c] = O[d] = O[h] = O[g] = O[m] = O[p] = O[v] = O[R] = O[I] = O[w] = O[D] = true, O["[object Error]"] = O[l] = O[y] = false;
    var P = "object" == typeof r.g && r.g && r.g.Object === Object && r.g, M = "object" == typeof self && self && self.Object === Object && self, F = P || M || Function("return this")(), N = t && !t.nodeType && t, U = N && e && !e.nodeType && e, B = U && U.exports === N;
    function G(e2, t2) {
      return e2.set(t2[0], t2[1]), e2;
    }
    function V(e2, t2) {
      return e2.add(t2), e2;
    }
    function H(e2, t2, r2, n2) {
      var i2 = -1, a2 = e2 ? e2.length : 0;
      for (n2 && a2 && (r2 = e2[++i2]); ++i2 < a2; ) r2 = t2(r2, e2[i2], i2, e2);
      return r2;
    }
    function K(e2) {
      var t2 = false;
      if (null != e2 && "function" != typeof e2.toString) try {
        t2 = !!(e2 + "");
      } catch (e3) {
      }
      return t2;
    }
    function j(e2) {
      var t2 = -1, r2 = Array(e2.size);
      return e2.forEach((function(e3, n2) {
        r2[++t2] = [n2, e3];
      })), r2;
    }
    function Y(e2, t2) {
      return function(r2) {
        return e2(t2(r2));
      };
    }
    function W(e2) {
      var t2 = -1, r2 = Array(e2.size);
      return e2.forEach((function(e3) {
        r2[++t2] = e3;
      })), r2;
    }
    var z, q = Array.prototype, X = Function.prototype, $ = Object.prototype, J = F["__core-js_shared__"], Q = (z = /[^.]+$/.exec(J && J.keys && J.keys.IE_PROTO || "")) ? "Symbol(src)_1." + z : "", Z = X.toString, ee = $.hasOwnProperty, te = $.toString, re = RegExp("^" + Z.call(ee).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ne = B ? F.Buffer : void 0, ie = F.Symbol, ae = F.Uint8Array, se = Y(Object.getPrototypeOf, Object), oe = Object.create, le = $.propertyIsEnumerable, ue = q.splice, ce = Object.getOwnPropertySymbols, de = ne ? ne.isBuffer : void 0, he = Y(Object.keys, Object), fe = Ue(F, "DataView"), ge = Ue(F, "Map"), me = Ue(F, "Promise"), pe = Ue(F, "Set"), ve = Ue(F, "WeakMap"), ye = Ue(Object, "create"), Te = Ke(fe), be = Ke(ge), Ee = Ke(me), Se = Ke(pe), Ae = Ke(ve), ke = ie ? ie.prototype : void 0, Le = ke ? ke.valueOf : void 0;
    function Re(e2) {
      var t2 = -1, r2 = e2 ? e2.length : 0;
      for (this.clear(); ++t2 < r2; ) {
        var n2 = e2[t2];
        this.set(n2[0], n2[1]);
      }
    }
    function Ie(e2) {
      var t2 = -1, r2 = e2 ? e2.length : 0;
      for (this.clear(); ++t2 < r2; ) {
        var n2 = e2[t2];
        this.set(n2[0], n2[1]);
      }
    }
    function we(e2) {
      var t2 = -1, r2 = e2 ? e2.length : 0;
      for (this.clear(); ++t2 < r2; ) {
        var n2 = e2[t2];
        this.set(n2[0], n2[1]);
      }
    }
    function De(e2) {
      this.__data__ = new Ie(e2);
    }
    function Ce(e2, t2) {
      var r2 = Ye(e2) || (function(e3) {
        return (function(e4) {
          return /* @__PURE__ */ (function(e5) {
            return !!e5 && "object" == typeof e5;
          })(e4) && We(e4);
        })(e3) && ee.call(e3, "callee") && (!le.call(e3, "callee") || te.call(e3) == a);
      })(e2) ? (function(e3, t3) {
        for (var r3 = -1, n3 = Array(e3); ++r3 < e3; ) n3[r3] = t3(r3);
        return n3;
      })(e2.length, String) : [], n2 = r2.length, i2 = !!n2;
      for (var s2 in e2) !t2 && !ee.call(e2, s2) || i2 && ("length" == s2 || Ve(s2, n2)) || r2.push(s2);
      return r2;
    }
    function xe(e2, t2, r2) {
      var n2 = e2[t2];
      ee.call(e2, t2) && je(n2, r2) && (void 0 !== r2 || t2 in e2) || (e2[t2] = r2);
    }
    function _e(e2, t2) {
      for (var r2 = e2.length; r2--; ) if (je(e2[r2][0], t2)) return r2;
      return -1;
    }
    function Oe(e2, t2, r2, n2, i2, f2, y2) {
      var x2;
      if (n2 && (x2 = f2 ? n2(e2, i2, f2, y2) : n2(e2)), void 0 !== x2) return x2;
      if (!Xe(e2)) return e2;
      var _2 = Ye(e2);
      if (_2) {
        if (x2 = (function(e3) {
          var t3 = e3.length, r3 = e3.constructor(t3);
          t3 && "string" == typeof e3[0] && ee.call(e3, "index") && (r3.index = e3.index, r3.input = e3.input);
          return r3;
        })(e2), !t2) return (function(e3, t3) {
          var r3 = -1, n3 = e3.length;
          t3 || (t3 = Array(n3));
          for (; ++r3 < n3; ) t3[r3] = e3[r3];
          return t3;
        })(e2, x2);
      } else {
        var P2 = Ge(e2), M2 = P2 == l || P2 == u;
        if (ze(e2)) return (function(e3, t3) {
          if (t3) return e3.slice();
          var r3 = new e3.constructor(e3.length);
          return e3.copy(r3), r3;
        })(e2, t2);
        if (P2 == h || P2 == a || M2 && !f2) {
          if (K(e2)) return f2 ? e2 : {};
          if (x2 = (function(e3) {
            return "function" != typeof e3.constructor || He(e3) ? {} : (t3 = se(e3), Xe(t3) ? oe(t3) : {});
            var t3;
          })(M2 ? {} : e2), !t2) return (function(e3, t3) {
            return Fe(e3, Be(e3), t3);
          })(e2, (function(e3, t3) {
            return e3 && Fe(t3, $e(t3), e3);
          })(x2, e2));
        } else {
          if (!O[P2]) return f2 ? e2 : {};
          x2 = (function(e3, t3, r3, n3) {
            var i3 = e3.constructor;
            switch (t3) {
              case T:
                return Me(e3);
              case s:
              case o:
                return new i3(+e3);
              case b:
                return (function(e4, t4) {
                  var r4 = t4 ? Me(e4.buffer) : e4.buffer;
                  return new e4.constructor(r4, e4.byteOffset, e4.byteLength);
                })(e3, n3);
              case E:
              case S:
              case A:
              case k:
              case L:
              case R:
              case I:
              case w:
              case D:
                return (function(e4, t4) {
                  var r4 = t4 ? Me(e4.buffer) : e4.buffer;
                  return new e4.constructor(r4, e4.byteOffset, e4.length);
                })(e3, n3);
              case c:
                return (function(e4, t4, r4) {
                  var n4 = t4 ? r4(j(e4), true) : j(e4);
                  return H(n4, G, new e4.constructor());
                })(e3, n3, r3);
              case d:
              case p:
                return new i3(e3);
              case g:
                return (function(e4) {
                  var t4 = new e4.constructor(e4.source, C.exec(e4));
                  return t4.lastIndex = e4.lastIndex, t4;
                })(e3);
              case m:
                return (function(e4, t4, r4) {
                  var n4 = t4 ? r4(W(e4), true) : W(e4);
                  return H(n4, V, new e4.constructor());
                })(e3, n3, r3);
              case v:
                return a2 = e3, Le ? Object(Le.call(a2)) : {};
            }
            var a2;
          })(e2, P2, Oe, t2);
        }
      }
      y2 || (y2 = new De());
      var F2 = y2.get(e2);
      if (F2) return F2;
      if (y2.set(e2, x2), !_2) var N2 = r2 ? (function(e3) {
        return (function(e4, t3, r3) {
          var n3 = t3(e4);
          return Ye(e4) ? n3 : (function(e5, t4) {
            for (var r4 = -1, n4 = t4.length, i3 = e5.length; ++r4 < n4; ) e5[i3 + r4] = t4[r4];
            return e5;
          })(n3, r3(e4));
        })(e3, $e, Be);
      })(e2) : $e(e2);
      return (function(e3, t3) {
        for (var r3 = -1, n3 = e3 ? e3.length : 0; ++r3 < n3 && false !== t3(e3[r3], r3, e3); ) ;
      })(N2 || e2, (function(i3, a2) {
        N2 && (i3 = e2[a2 = i3]), xe(x2, a2, Oe(i3, t2, r2, n2, a2, e2, y2));
      })), x2;
    }
    function Pe(e2) {
      return !(!Xe(e2) || (t2 = e2, Q && Q in t2)) && (qe(e2) || K(e2) ? re : x).test(Ke(e2));
      var t2;
    }
    function Me(e2) {
      var t2 = new e2.constructor(e2.byteLength);
      return new ae(t2).set(new ae(e2)), t2;
    }
    function Fe(e2, t2, r2, n2) {
      r2 || (r2 = {});
      for (var i2 = -1, a2 = t2.length; ++i2 < a2; ) {
        var s2 = t2[i2], o2 = n2 ? n2(r2[s2], e2[s2], s2, r2, e2) : void 0;
        xe(r2, s2, void 0 === o2 ? e2[s2] : o2);
      }
      return r2;
    }
    function Ne(e2, t2) {
      var r2, n2, i2 = e2.__data__;
      return ("string" == (n2 = typeof (r2 = t2)) || "number" == n2 || "symbol" == n2 || "boolean" == n2 ? "__proto__" !== r2 : null === r2) ? i2["string" == typeof t2 ? "string" : "hash"] : i2.map;
    }
    function Ue(e2, t2) {
      var r2 = (function(e3, t3) {
        return null == e3 ? void 0 : e3[t3];
      })(e2, t2);
      return Pe(r2) ? r2 : void 0;
    }
    Re.prototype.clear = function() {
      this.__data__ = ye ? ye(null) : {};
    }, Re.prototype.delete = function(e2) {
      return this.has(e2) && delete this.__data__[e2];
    }, Re.prototype.get = function(e2) {
      var t2 = this.__data__;
      if (ye) {
        var r2 = t2[e2];
        return r2 === n ? void 0 : r2;
      }
      return ee.call(t2, e2) ? t2[e2] : void 0;
    }, Re.prototype.has = function(e2) {
      var t2 = this.__data__;
      return ye ? void 0 !== t2[e2] : ee.call(t2, e2);
    }, Re.prototype.set = function(e2, t2) {
      return this.__data__[e2] = ye && void 0 === t2 ? n : t2, this;
    }, Ie.prototype.clear = function() {
      this.__data__ = [];
    }, Ie.prototype.delete = function(e2) {
      var t2 = this.__data__, r2 = _e(t2, e2);
      return !(r2 < 0) && (r2 == t2.length - 1 ? t2.pop() : ue.call(t2, r2, 1), true);
    }, Ie.prototype.get = function(e2) {
      var t2 = this.__data__, r2 = _e(t2, e2);
      return r2 < 0 ? void 0 : t2[r2][1];
    }, Ie.prototype.has = function(e2) {
      return _e(this.__data__, e2) > -1;
    }, Ie.prototype.set = function(e2, t2) {
      var r2 = this.__data__, n2 = _e(r2, e2);
      return n2 < 0 ? r2.push([e2, t2]) : r2[n2][1] = t2, this;
    }, we.prototype.clear = function() {
      this.__data__ = { hash: new Re(), map: new (ge || Ie)(), string: new Re() };
    }, we.prototype.delete = function(e2) {
      return Ne(this, e2).delete(e2);
    }, we.prototype.get = function(e2) {
      return Ne(this, e2).get(e2);
    }, we.prototype.has = function(e2) {
      return Ne(this, e2).has(e2);
    }, we.prototype.set = function(e2, t2) {
      return Ne(this, e2).set(e2, t2), this;
    }, De.prototype.clear = function() {
      this.__data__ = new Ie();
    }, De.prototype.delete = function(e2) {
      return this.__data__.delete(e2);
    }, De.prototype.get = function(e2) {
      return this.__data__.get(e2);
    }, De.prototype.has = function(e2) {
      return this.__data__.has(e2);
    }, De.prototype.set = function(e2, t2) {
      var r2 = this.__data__;
      if (r2 instanceof Ie) {
        var n2 = r2.__data__;
        if (!ge || n2.length < 199) return n2.push([e2, t2]), this;
        r2 = this.__data__ = new we(n2);
      }
      return r2.set(e2, t2), this;
    };
    var Be = ce ? Y(ce, Object) : function() {
      return [];
    }, Ge = function(e2) {
      return te.call(e2);
    };
    function Ve(e2, t2) {
      return !!(t2 = null == t2 ? i : t2) && ("number" == typeof e2 || _.test(e2)) && e2 > -1 && e2 % 1 == 0 && e2 < t2;
    }
    function He(e2) {
      var t2 = e2 && e2.constructor;
      return e2 === ("function" == typeof t2 && t2.prototype || $);
    }
    function Ke(e2) {
      if (null != e2) {
        try {
          return Z.call(e2);
        } catch (e3) {
        }
        try {
          return e2 + "";
        } catch (e3) {
        }
      }
      return "";
    }
    function je(e2, t2) {
      return e2 === t2 || e2 != e2 && t2 != t2;
    }
    (fe && Ge(new fe(new ArrayBuffer(1))) != b || ge && Ge(new ge()) != c || me && Ge(me.resolve()) != f || pe && Ge(new pe()) != m || ve && Ge(new ve()) != y) && (Ge = function(e2) {
      var t2 = te.call(e2), r2 = t2 == h ? e2.constructor : void 0, n2 = r2 ? Ke(r2) : void 0;
      if (n2) switch (n2) {
        case Te:
          return b;
        case be:
          return c;
        case Ee:
          return f;
        case Se:
          return m;
        case Ae:
          return y;
      }
      return t2;
    });
    var Ye = Array.isArray;
    function We(e2) {
      return null != e2 && (function(e3) {
        return "number" == typeof e3 && e3 > -1 && e3 % 1 == 0 && e3 <= i;
      })(e2.length) && !qe(e2);
    }
    var ze = de || function() {
      return false;
    };
    function qe(e2) {
      var t2 = Xe(e2) ? te.call(e2) : "";
      return t2 == l || t2 == u;
    }
    function Xe(e2) {
      var t2 = typeof e2;
      return !!e2 && ("object" == t2 || "function" == t2);
    }
    function $e(e2) {
      return We(e2) ? Ce(e2) : (function(e3) {
        if (!He(e3)) return he(e3);
        var t2 = [];
        for (var r2 in Object(e3)) ee.call(e3, r2) && "constructor" != r2 && t2.push(r2);
        return t2;
      })(e2);
    }
    e.exports = function(e2) {
      return Oe(e2, true, true);
    };
  },
  5166: (e, t, r) => {
    var n = r(5369);
    e.exports = n;
  },
  5223: (e) => {
    "use strict";
    var t = function(e2) {
      switch (typeof e2) {
        case "string":
          return e2;
        case "boolean":
          return e2 ? "true" : "false";
        case "number":
          return isFinite(e2) ? e2 : "";
        default:
          return "";
      }
    };
    e.exports = function(e2, r, n, i) {
      return r = r || "&", n = n || "=", null === e2 && (e2 = void 0), "object" == typeof e2 ? Object.keys(e2).map((function(i2) {
        var a = encodeURIComponent(t(i2)) + n;
        return Array.isArray(e2[i2]) ? e2[i2].map((function(e3) {
          return a + encodeURIComponent(t(e3));
        })).join(r) : a + encodeURIComponent(t(e2[i2]));
      })).join(r) : i ? encodeURIComponent(t(i)) + n + encodeURIComponent(t(e2)) : "";
    };
  },
  5227: (e) => {
    var t = null;
    e.exports = { set: function(e2) {
      t = e2;
    }, get: function() {
      return t;
    } };
  },
  5399: (e) => {
    var t, r, n = [{ codec: "h264", force: window.chrome || window.cast, mime: 'video/mp4; codecs="avc1.42E01E"' }, { codec: "h265", mime: 'video/mp4; codecs="hev1.1.6.L150.B0"', aliases: ["hevc"] }, { codec: "vp8", mime: 'video/mp4; codecs="vp8"' }, { codec: "vp9", mime: 'video/mp4; codecs="vp9"' }], i = [{ codec: "aac", mime: 'audio/mp4; codecs="mp4a.40.2"' }, { codec: "mp3", mime: 'audio/mp4; codecs="mp3"' }, { codec: "ac3", mime: 'audio/mp4; codecs="ac-3"' }, { codec: "eac3", mime: 'audio/mp4; codecs="ec-3"' }, { codec: "vorbis", mime: 'audio/mp4; codecs="vorbis"' }, { codec: "opus", mime: 'audio/mp4; codecs="opus"' }];
    function a(e2, t2) {
      return e2.force || "function" == typeof t2.mediaElement.canPlayType && t2.mediaElement.canPlayType(e2.mime) ? [e2.codec].concat(e2.aliases || []) : [];
    }
    e.exports = (t = document.createElement("video"), r = ["mp4"], (window.chrome || window.cast) && r.push("matroska,webm"), { formats: r, videoCodecs: n.map((function(e2) {
      return a(e2, { mediaElement: t });
    })).reduce((function(e2, t2) {
      return e2.concat(t2);
    }), []), audioCodecs: i.map((function(e2) {
      return a(e2, { mediaElement: t });
    })).reduce((function(e2, t2) {
      return e2.concat(t2);
    }), []), maxAudioChannels: (function() {
      if (/firefox/i.test(window.navigator.userAgent)) return 6;
      if (!window.AudioContext || window.chrome || window.cast) return 2;
      var e2 = new AudioContext().destination.maxChannelCount;
      return e2 > 0 ? e2 : 2;
    })() });
  },
  5852: (e) => {
    "use strict";
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    function i(e2, t2, r2) {
      this.fn = e2, this.context = t2, this.once = r2 || false;
    }
    function a(e2, t2, n2, a2, s2) {
      if ("function" != typeof n2) throw new TypeError("The listener must be a function");
      var o2 = new i(n2, a2 || e2, s2), l = r ? r + t2 : t2;
      return e2._events[l] ? e2._events[l].fn ? e2._events[l] = [e2._events[l], o2] : e2._events[l].push(o2) : (e2._events[l] = o2, e2._eventsCount++), e2;
    }
    function s(e2, t2) {
      0 == --e2._eventsCount ? e2._events = new n() : delete e2._events[t2];
    }
    function o() {
      this._events = new n(), this._eventsCount = 0;
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = false)), o.prototype.eventNames = function() {
      var e2, n2, i2 = [];
      if (0 === this._eventsCount) return i2;
      for (n2 in e2 = this._events) t.call(e2, n2) && i2.push(r ? n2.slice(1) : n2);
      return Object.getOwnPropertySymbols ? i2.concat(Object.getOwnPropertySymbols(e2)) : i2;
    }, o.prototype.listeners = function(e2) {
      var t2 = r ? r + e2 : e2, n2 = this._events[t2];
      if (!n2) return [];
      if (n2.fn) return [n2.fn];
      for (var i2 = 0, a2 = n2.length, s2 = new Array(a2); i2 < a2; i2++) s2[i2] = n2[i2].fn;
      return s2;
    }, o.prototype.listenerCount = function(e2) {
      var t2 = r ? r + e2 : e2, n2 = this._events[t2];
      return n2 ? n2.fn ? 1 : n2.length : 0;
    }, o.prototype.emit = function(e2, t2, n2, i2, a2, s2) {
      var o2 = r ? r + e2 : e2;
      if (!this._events[o2]) return false;
      var l, u, c = this._events[o2], d = arguments.length;
      if (c.fn) {
        switch (c.once && this.removeListener(e2, c.fn, void 0, true), d) {
          case 1:
            return c.fn.call(c.context), true;
          case 2:
            return c.fn.call(c.context, t2), true;
          case 3:
            return c.fn.call(c.context, t2, n2), true;
          case 4:
            return c.fn.call(c.context, t2, n2, i2), true;
          case 5:
            return c.fn.call(c.context, t2, n2, i2, a2), true;
          case 6:
            return c.fn.call(c.context, t2, n2, i2, a2, s2), true;
        }
        for (u = 1, l = new Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
        c.fn.apply(c.context, l);
      } else {
        var h, f = c.length;
        for (u = 0; u < f; u++) switch (c[u].once && this.removeListener(e2, c[u].fn, void 0, true), d) {
          case 1:
            c[u].fn.call(c[u].context);
            break;
          case 2:
            c[u].fn.call(c[u].context, t2);
            break;
          case 3:
            c[u].fn.call(c[u].context, t2, n2);
            break;
          case 4:
            c[u].fn.call(c[u].context, t2, n2, i2);
            break;
          default:
            if (!l) for (h = 1, l = new Array(d - 1); h < d; h++) l[h - 1] = arguments[h];
            c[u].fn.apply(c[u].context, l);
        }
      }
      return true;
    }, o.prototype.on = function(e2, t2, r2) {
      return a(this, e2, t2, r2, false);
    }, o.prototype.once = function(e2, t2, r2) {
      return a(this, e2, t2, r2, true);
    }, o.prototype.removeListener = function(e2, t2, n2, i2) {
      var a2 = r ? r + e2 : e2;
      if (!this._events[a2]) return this;
      if (!t2) return s(this, a2), this;
      var o2 = this._events[a2];
      if (o2.fn) o2.fn !== t2 || i2 && !o2.once || n2 && o2.context !== n2 || s(this, a2);
      else {
        for (var l = 0, u = [], c = o2.length; l < c; l++) (o2[l].fn !== t2 || i2 && !o2[l].once || n2 && o2[l].context !== n2) && u.push(o2[l]);
        u.length ? this._events[a2] = 1 === u.length ? u[0] : u : s(this, a2);
      }
      return this;
    }, o.prototype.removeAllListeners = function(e2) {
      var t2;
      return e2 ? (t2 = r ? r + e2 : e2, this._events[t2] && s(this, t2)) : (this._events = new n(), this._eventsCount = 0), this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = r, o.EventEmitter = o, e.exports = o;
  },
  5872: (e, t, r) => {
    var n = r(8868);
    function i(e2, t2, r2, i2) {
      var a = Array.isArray(i2) && i2.length > 0 ? "?" + new URLSearchParams(i2.map((function(e3) {
        return ["tr", e3];
      }))) : "";
      return { url: n.resolve(e2, "/" + encodeURIComponent(t2) + "/" + encodeURIComponent(r2)) + a, infoHash: t2, fileIdx: r2, sources: i2 };
    }
    e.exports = function(e2, t2, r2, a, s) {
      if ((!Array.isArray(a) || 0 === a.length) && null !== r2 && isFinite(r2)) return Promise.resolve(i(e2, t2, r2, a));
      var o = { torrent: { infoHash: t2 } };
      return Array.isArray(a) && a.length > 0 && (o.peerSearch = { sources: ["dht:" + t2].concat(a).filter((function(e3, t3, r3) {
        return r3.indexOf(e3) === t3;
      })), min: 40, max: 200 }), null !== r2 && isFinite(r2) ? o.guessFileIdx = false : (o.guessFileIdx = {}, s && (null !== s.season && isFinite(s.season) && (o.guessFileIdx.season = s.season), null !== s.episode && isFinite(s.episode) && (o.guessFileIdx.episode = s.episode))), fetch(n.resolve(e2, "/" + encodeURIComponent(t2) + "/create"), { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(o) }).then((function(e3) {
        if (e3.ok) return e3.json();
        throw new Error(e3.status + " (" + e3.statusText + ")");
      })).then((function(n2) {
        return i(e2, t2, o.guessFileIdx ? n2.guessedFileIdx : r2, o.peerSearch ? o.peerSearch.sources : []);
      }));
    };
  },
  6089: (e, t, r) => {
    var n = r(8868);
    function i(e2, t2, r2) {
      var i2 = r2 && "string" == typeof r2.videoHash ? r2.videoHash : null, a2 = r2 && isFinite(r2.videoSize) ? r2.videoSize : null;
      if ("string" == typeof i2 && null !== a2 && isFinite(a2)) return Promise.resolve({ hash: i2, size: a2 });
      var s = new URLSearchParams([["videoUrl", t2]]);
      return fetch(n.resolve(e2, "/opensubHash?" + s.toString())).then((function(e3) {
        if (e3.ok) return e3.json();
        throw new Error(e3.status + " (" + e3.statusText + ")");
      })).then((function(e3) {
        if (e3.error) throw new Error(e3.error);
        return { hash: "string" == typeof i2 ? i2 : e3.result && "string" == typeof e3.result.hash ? e3.result.hash : null, size: null !== a2 && isFinite(a2) ? a2 : e3.result && (e3.result.size, 1) ? e3.result.size : null };
      }));
    }
    function a(e2, t2, r2, i2, a2) {
      return a2 && "string" == typeof a2.filename ? Promise.resolve(a2.filename) : r2 ? fetch(n.resolve(e2, "/" + encodeURIComponent(r2) + "/" + encodeURIComponent(i2) + "/stats.json")).then((function(e3) {
        if (e3.ok) return e3.json();
        throw new Error(e3.status + " (" + e3.statusText + ")");
      })).then((function(e3) {
        if (!e3 || "string" != typeof e3.streamName) throw new Error("Could not retrieve filename from torrent");
        return e3.streamName;
      })) : Promise.resolve(decodeURIComponent(t2.split("/").pop()));
    }
    e.exports = function(e2, t2, r2, n2, s) {
      return Promise.allSettled([i(e2, t2, s), a(e2, t2, r2, n2, s)]).then((function(e3) {
        var t3 = { hash: null, size: null, filename: null };
        return "fulfilled" === e3[0].status ? (t3.hash = e3[0].value.hash, t3.size = e3[0].value.size) : e3[0].reason && console.error(e3[0].reason), "fulfilled" === e3[1].status ? t3.filename = e3[1].value : e3[1].reason && console.error(e3[1].reason), t3;
      }));
    };
  },
  6138: (e, t, r) => {
    var n = r(4877), i = r(301), a = Object.hasOwnProperty, s = /* @__PURE__ */ Object.create(null);
    for (var o in n) a.call(n, o) && (s[n[o]] = o);
    var l = e.exports = { to: {}, get: {} };
    function u(e2, t2, r2) {
      return Math.min(Math.max(t2, e2), r2);
    }
    function c(e2) {
      var t2 = Math.round(e2).toString(16).toUpperCase();
      return t2.length < 2 ? "0" + t2 : t2;
    }
    l.get = function(e2) {
      var t2, r2;
      switch (e2.substring(0, 3).toLowerCase()) {
        case "hsl":
          t2 = l.get.hsl(e2), r2 = "hsl";
          break;
        case "hwb":
          t2 = l.get.hwb(e2), r2 = "hwb";
          break;
        default:
          t2 = l.get.rgb(e2), r2 = "rgb";
      }
      return t2 ? { model: r2, value: t2 } : null;
    }, l.get.rgb = function(e2) {
      if (!e2) return null;
      var t2, r2, i2, s2 = [0, 0, 0, 1];
      if (t2 = e2.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
        for (i2 = t2[2], t2 = t2[1], r2 = 0; r2 < 3; r2++) {
          var o2 = 2 * r2;
          s2[r2] = parseInt(t2.slice(o2, o2 + 2), 16);
        }
        i2 && (s2[3] = parseInt(i2, 16) / 255);
      } else if (t2 = e2.match(/^#([a-f0-9]{3,4})$/i)) {
        for (i2 = (t2 = t2[1])[3], r2 = 0; r2 < 3; r2++) s2[r2] = parseInt(t2[r2] + t2[r2], 16);
        i2 && (s2[3] = parseInt(i2 + i2, 16) / 255);
      } else if (t2 = e2.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
        for (r2 = 0; r2 < 3; r2++) s2[r2] = parseInt(t2[r2 + 1], 0);
        t2[4] && (t2[5] ? s2[3] = 0.01 * parseFloat(t2[4]) : s2[3] = parseFloat(t2[4]));
      } else {
        if (!(t2 = e2.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) return (t2 = e2.match(/^(\w+)$/)) ? "transparent" === t2[1] ? [0, 0, 0, 0] : a.call(n, t2[1]) ? ((s2 = n[t2[1]])[3] = 1, s2) : null : null;
        for (r2 = 0; r2 < 3; r2++) s2[r2] = Math.round(2.55 * parseFloat(t2[r2 + 1]));
        t2[4] && (t2[5] ? s2[3] = 0.01 * parseFloat(t2[4]) : s2[3] = parseFloat(t2[4]));
      }
      for (r2 = 0; r2 < 3; r2++) s2[r2] = u(s2[r2], 0, 255);
      return s2[3] = u(s2[3], 0, 1), s2;
    }, l.get.hsl = function(e2) {
      if (!e2) return null;
      var t2 = e2.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
      if (t2) {
        var r2 = parseFloat(t2[4]);
        return [(parseFloat(t2[1]) % 360 + 360) % 360, u(parseFloat(t2[2]), 0, 100), u(parseFloat(t2[3]), 0, 100), u(isNaN(r2) ? 1 : r2, 0, 1)];
      }
      return null;
    }, l.get.hwb = function(e2) {
      if (!e2) return null;
      var t2 = e2.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
      if (t2) {
        var r2 = parseFloat(t2[4]);
        return [(parseFloat(t2[1]) % 360 + 360) % 360, u(parseFloat(t2[2]), 0, 100), u(parseFloat(t2[3]), 0, 100), u(isNaN(r2) ? 1 : r2, 0, 1)];
      }
      return null;
    }, l.to.hex = function() {
      var e2 = i(arguments);
      return "#" + c(e2[0]) + c(e2[1]) + c(e2[2]) + (e2[3] < 1 ? c(Math.round(255 * e2[3])) : "");
    }, l.to.rgb = function() {
      var e2 = i(arguments);
      return e2.length < 4 || 1 === e2[3] ? "rgb(" + Math.round(e2[0]) + ", " + Math.round(e2[1]) + ", " + Math.round(e2[2]) + ")" : "rgba(" + Math.round(e2[0]) + ", " + Math.round(e2[1]) + ", " + Math.round(e2[2]) + ", " + e2[3] + ")";
    }, l.to.rgb.percent = function() {
      var e2 = i(arguments), t2 = Math.round(e2[0] / 255 * 100), r2 = Math.round(e2[1] / 255 * 100), n2 = Math.round(e2[2] / 255 * 100);
      return e2.length < 4 || 1 === e2[3] ? "rgb(" + t2 + "%, " + r2 + "%, " + n2 + "%)" : "rgba(" + t2 + "%, " + r2 + "%, " + n2 + "%, " + e2[3] + ")";
    }, l.to.hsl = function() {
      var e2 = i(arguments);
      return e2.length < 4 || 1 === e2[3] ? "hsl(" + e2[0] + ", " + e2[1] + "%, " + e2[2] + "%)" : "hsla(" + e2[0] + ", " + e2[1] + "%, " + e2[2] + "%, " + e2[3] + ")";
    }, l.to.hwb = function() {
      var e2 = i(arguments), t2 = "";
      return e2.length >= 4 && 1 !== e2[3] && (t2 = ", " + e2[3]), "hwb(" + e2[0] + ", " + e2[1] + "%, " + e2[2] + "%" + t2 + ")";
    }, l.to.keyword = function(e2) {
      return s[e2.slice(0, 3)];
    };
  },
  6191: (e, t, r) => {
    var n = r(6253);
    e.exports = n;
  },
  6224: (e) => {
    e.exports = function(e2) {
      return e2 && "string" == typeof e2.url ? e2.behaviorHints && e2.behaviorHints.proxyHeaders && e2.behaviorHints.proxyHeaders.response && "string" == typeof e2.behaviorHints.proxyHeaders.response["content-type"] ? Promise.resolve(e2.behaviorHints.proxyHeaders.response["content-type"]) : fetch(e2.url, { method: "HEAD" }).then((function(e3) {
        if (e3.ok) return e3.headers.get("content-type");
        throw new Error(e3.status + " (" + e3.statusText + ")");
      })) : Promise.reject(new Error("Invalid stream parameter!"));
    };
  },
  6694: function(e, t, r) {
    var n;
    e = r.nmd(e), (function() {
      t && t.nodeType, e && e.nodeType;
      var i = "object" == typeof r.g && r.g;
      i.global !== i && i.window !== i && i.self;
      var a, s = 2147483647, o = 36, l = /^xn--/, u = /[^\x20-\x7E]/, c = /[\x2E\u3002\uFF0E\uFF61]/g, d = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, h = Math.floor, f = String.fromCharCode;
      function g(e2) {
        throw RangeError(d[e2]);
      }
      function m(e2, t2) {
        for (var r2 = e2.length, n2 = []; r2--; ) n2[r2] = t2(e2[r2]);
        return n2;
      }
      function p(e2, t2) {
        var r2 = e2.split("@"), n2 = "";
        return r2.length > 1 && (n2 = r2[0] + "@", e2 = r2[1]), n2 + m((e2 = e2.replace(c, ".")).split("."), t2).join(".");
      }
      function v(e2) {
        for (var t2, r2, n2 = [], i2 = 0, a2 = e2.length; i2 < a2; ) (t2 = e2.charCodeAt(i2++)) >= 55296 && t2 <= 56319 && i2 < a2 ? 56320 == (64512 & (r2 = e2.charCodeAt(i2++))) ? n2.push(((1023 & t2) << 10) + (1023 & r2) + 65536) : (n2.push(t2), i2--) : n2.push(t2);
        return n2;
      }
      function y(e2) {
        return m(e2, (function(e3) {
          var t2 = "";
          return e3 > 65535 && (t2 += f((e3 -= 65536) >>> 10 & 1023 | 55296), e3 = 56320 | 1023 & e3), t2 += f(e3);
        })).join("");
      }
      function T(e2, t2) {
        return e2 + 22 + 75 * (e2 < 26) - ((0 != t2) << 5);
      }
      function b(e2, t2, r2) {
        var n2 = 0;
        for (e2 = r2 ? h(e2 / 700) : e2 >> 1, e2 += h(e2 / t2); e2 > 455; n2 += o) e2 = h(e2 / 35);
        return h(n2 + 36 * e2 / (e2 + 38));
      }
      function E(e2) {
        var t2, r2, n2, i2, a2, l2, u2, c2, d2, f2, m2, p2 = [], v2 = e2.length, T2 = 0, E2 = 128, S2 = 72;
        for ((r2 = e2.lastIndexOf("-")) < 0 && (r2 = 0), n2 = 0; n2 < r2; ++n2) e2.charCodeAt(n2) >= 128 && g("not-basic"), p2.push(e2.charCodeAt(n2));
        for (i2 = r2 > 0 ? r2 + 1 : 0; i2 < v2; ) {
          for (a2 = T2, l2 = 1, u2 = o; i2 >= v2 && g("invalid-input"), ((c2 = (m2 = e2.charCodeAt(i2++)) - 48 < 10 ? m2 - 22 : m2 - 65 < 26 ? m2 - 65 : m2 - 97 < 26 ? m2 - 97 : o) >= o || c2 > h((s - T2) / l2)) && g("overflow"), T2 += c2 * l2, !(c2 < (d2 = u2 <= S2 ? 1 : u2 >= S2 + 26 ? 26 : u2 - S2)); u2 += o) l2 > h(s / (f2 = o - d2)) && g("overflow"), l2 *= f2;
          S2 = b(T2 - a2, t2 = p2.length + 1, 0 == a2), h(T2 / t2) > s - E2 && g("overflow"), E2 += h(T2 / t2), T2 %= t2, p2.splice(T2++, 0, E2);
        }
        return y(p2);
      }
      function S(e2) {
        var t2, r2, n2, i2, a2, l2, u2, c2, d2, m2, p2, y2, E2, S2, A, k = [];
        for (y2 = (e2 = v(e2)).length, t2 = 128, r2 = 0, a2 = 72, l2 = 0; l2 < y2; ++l2) (p2 = e2[l2]) < 128 && k.push(f(p2));
        for (n2 = i2 = k.length, i2 && k.push("-"); n2 < y2; ) {
          for (u2 = s, l2 = 0; l2 < y2; ++l2) (p2 = e2[l2]) >= t2 && p2 < u2 && (u2 = p2);
          for (u2 - t2 > h((s - r2) / (E2 = n2 + 1)) && g("overflow"), r2 += (u2 - t2) * E2, t2 = u2, l2 = 0; l2 < y2; ++l2) if ((p2 = e2[l2]) < t2 && ++r2 > s && g("overflow"), p2 == t2) {
            for (c2 = r2, d2 = o; !(c2 < (m2 = d2 <= a2 ? 1 : d2 >= a2 + 26 ? 26 : d2 - a2)); d2 += o) A = c2 - m2, S2 = o - m2, k.push(f(T(m2 + A % S2, 0))), c2 = h(A / S2);
            k.push(f(T(c2, 0))), a2 = b(r2, E2, n2 == i2), r2 = 0, ++n2;
          }
          ++r2, ++t2;
        }
        return k.join("");
      }
      a = { version: "1.3.2", ucs2: { decode: v, encode: y }, decode: E, encode: S, toASCII: function(e2) {
        return p(e2, (function(e3) {
          return u.test(e3) ? "xn--" + S(e3) : e3;
        }));
      }, toUnicode: function(e2) {
        return p(e2, (function(e3) {
          return l.test(e3) ? E(e3.slice(4).toLowerCase()) : e3;
        }));
      } }, void 0 === (n = function() {
        return a;
      }.call(t, r, t, e)) || (e.exports = n);
    })();
  },
  7037: (e, t, r) => {
    var n = r(8868), i = r(3909), a = r(5872);
    function s(e2, t2, r2, i2) {
      var a2 = new URL(t2), s2 = new URLSearchParams();
      return s2.set("d", a2.origin), Object.entries(r2).forEach((function(e3) {
        s2.append("h", e3[0] + ":" + e3[1]);
      })), Object.entries(i2).forEach((function(e3) {
        s2.append("r", e3[0] + ":" + e3[1]);
      })), n.resolve(e2, "/proxy/" + s2.toString() + a2.pathname) + a2.search;
    }
    e.exports = function(e2, t2, r2, n2) {
      return new Promise((function(o, l) {
        if ("string" != typeof t2.url) "string" != typeof t2.infoHash ? l(new Error("Stream cannot be converted")) : a(e2, t2.infoHash, t2.fileIdx, t2.announce, r2).then((function(e3) {
          o({ url: e3.url, infoHash: e3.infoHash, fileIdx: e3.fileIdx });
        })).catch((function(e3) {
          l(e3);
        }));
        else if (0 === t2.url.indexOf("magnet:")) {
          var u;
          try {
            if (!(u = i.decode(t2.url)) || "string" != typeof u.infoHash) throw new Error("Failed to decode magnet url");
          } catch (e3) {
            return void l(e3);
          }
          var c = Array.isArray(u.announce) ? u.announce.map((function(e3) {
            return "tracker:" + e3;
          })) : [];
          a(e2, u.infoHash, null, c, r2).then((function(e3) {
            o({ url: e3.url, infoHash: e3.infoHash, fileIdx: e3.fileIdx });
          })).catch((function(e3) {
            l(e3);
          }));
        } else {
          var d = n2 && n2.proxyStreamsEnabled, h = t2.behaviorHints && t2.behaviorHints.proxyHeaders;
          if (d || h) {
            var f = h && h.request ? h.request : {}, g = h && h.response ? h.response : {};
            o({ url: s(e2, t2.url, f, g) });
          } else o({ url: t2.url });
        }
      }));
    };
  },
  7385: function(e, t, r) {
    var n;
    e.exports && (this.VTTRegion = r(1615).VTTRegion), (n = this).VTTRegion.create = function(e2) {
      var t2 = new n.VTTRegion();
      for (var r2 in e2) t2.hasOwnProperty(r2) && (t2[r2] = e2[r2]);
      return t2;
    }, n.VTTRegion.fromJSON = function(e2) {
      return this.create(JSON.parse(e2));
    };
  },
  7444: (e) => {
    var t = e.exports = function(e2, r) {
      if (r || (r = 16), void 0 === e2 && (e2 = 128), e2 <= 0) return "0";
      for (var n = Math.log(Math.pow(2, e2)) / Math.log(r), i = 2; n === 1 / 0; i *= 2) n = Math.log(Math.pow(2, e2 / i)) / Math.log(r) * i;
      var a = n - Math.floor(n), s = "";
      for (i = 0; i < Math.floor(n); i++) {
        s = Math.floor(Math.random() * r).toString(r) + s;
      }
      if (a) {
        var o = Math.pow(r, a);
        s = Math.floor(Math.random() * o).toString(r) + s;
      }
      var l = parseInt(s, r);
      return l !== 1 / 0 && l >= Math.pow(2, e2) ? t(e2, r) : s;
    };
    t.rack = function(e2, r, n) {
      var i = function(i2) {
        var s = 0;
        do {
          if (s++ > 10) {
            if (!n) throw new Error("too many ID collisions, use more bits");
            e2 += n;
          }
          var o = t(e2, r);
        } while (Object.hasOwnProperty.call(a, o));
        return a[o] = i2, o;
      }, a = i.hats = {};
      return i.get = function(e3) {
        return i.hats[e3];
      }, i.set = function(e3, t2) {
        return i.hats[e3] = t2, i;
      }, i.bits = e2 || 128, i.base = r || 16, i;
    };
  },
  7495: (e, t, r) => {
    var n = r(6373);
    e.exports = n;
  },
  7575: (e, t, r) => {
    var n = r(2563);
    e.exports = n;
  },
  7838: (e, t, r) => {
    var n = r(6209);
    e.exports = n;
  },
  8099: function() {
    !(function(e) {
      function t(e2, t2) {
        return void 0 === t2 && (t2 = 1), "rgba(" + [parseInt(e2.substring(0, 2), 16), parseInt(e2.substring(2, 4), 16), parseInt(e2.substring(4, 6), 16), t2].join(",") + ")";
      }
      var r = 1;
      function n(e2, n2, a2) {
        switch (a2) {
          case "webvtt.font.color":
          case "webvtt.font.opacity":
            var s2 = Services.prefs.getCharPref("webvtt.font.color"), o2 = Services.prefs.getIntPref("webvtt.font.opacity") / 100;
            i.fontSet = t(s2, o2);
            break;
          case "webvtt.font.scale":
            r = Services.prefs.getIntPref("webvtt.font.scale") / 100;
            break;
          case "webvtt.bg.color":
          case "webvtt.bg.opacity":
            var l2 = Services.prefs.getCharPref("webvtt.bg.color"), u2 = Services.prefs.getIntPref("webvtt.bg.opacity") / 100;
            i.backgroundSet = t(l2, u2);
            break;
          case "webvtt.edge.color":
          case "webvtt.edge.type":
            var c2 = Services.prefs.getIntPref("webvtt.edge.type"), d2 = Services.prefs.getCharPref("webvtt.edge.color");
            i.edgeSet = ["", "0px 0px ", "4px 4px 4px ", "-2px -2px ", "2px 2px "][c2] + t(d2);
        }
      }
      if ("undefined" != typeof Services) {
        var i = {};
        ["webvtt.font.color", "webvtt.font.opacity", "webvtt.font.scale", "webvtt.bg.color", "webvtt.bg.opacity", "webvtt.edge.color", "webvtt.edge.type"].forEach((function(e2) {
          n(0, 0, e2), Services.prefs.addObserver(e2, n, false);
        }));
      }
      var a = Object.create || /* @__PURE__ */ (function() {
        function e2() {
        }
        return function(t2) {
          if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
          return e2.prototype = t2, new e2();
        };
      })();
      function s(e2, t2) {
        this.name = "ParsingError", this.code = e2.code, this.message = t2 || e2.message;
      }
      function o(e2) {
        function t2(e3, t3, r3, n2) {
          return 3600 * (0 | e3) + 60 * (0 | t3) + (0 | r3) + (0 | n2) / 1e3;
        }
        var r2 = e2.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return r2 ? r2[3] ? t2(r2[1], r2[2], r2[3].replace(":", ""), r2[4]) : r2[1] > 59 ? t2(r2[1], r2[2], 0, r2[4]) : t2(0, r2[1], r2[2], r2[4]) : null;
      }
      function l() {
        this.values = a(null);
      }
      function u(e2, t2, r2, n2) {
        var i2 = n2 ? e2.split(n2) : [e2];
        for (var a2 in i2) if ("string" == typeof i2[a2]) {
          var s2 = i2[a2].split(r2);
          if (2 === s2.length) t2(s2[0], s2[1]);
        }
      }
      s.prototype = a(Error.prototype), s.prototype.constructor = s, s.Errors = { BadSignature: { code: 0, message: "Malformed WebVTT signature." }, BadTimeStamp: { code: 1, message: "Malformed time stamp." } }, l.prototype = { set: function(e2, t2) {
        this.get(e2) || "" === t2 || (this.values[e2] = t2);
      }, get: function(e2, t2, r2) {
        return r2 ? this.has(e2) ? this.values[e2] : t2[r2] : this.has(e2) ? this.values[e2] : t2;
      }, has: function(e2) {
        return e2 in this.values;
      }, alt: function(e2, t2, r2) {
        for (var n2 = 0; n2 < r2.length; ++n2) if (t2 === r2[n2]) {
          this.set(e2, t2);
          break;
        }
      }, integer: function(e2, t2) {
        /^-?\d+$/.test(t2) && this.set(e2, parseInt(t2, 10));
      }, percent: function(e2, t2) {
        return !!(t2.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t2 = parseFloat(t2)) >= 0 && t2 <= 100) && (this.set(e2, t2), true);
      } };
      var c = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&lrm;": "\u200E", "&rlm;": "\u200F", "&nbsp;": "\xA0" }, d = { c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span" }, h = { v: "title", lang: "lang" }, f = { rt: "ruby" };
      function g(e2, t2) {
        function r2() {
          if (!t2) return null;
          var e3, r3 = t2.match(/^([^<]*)(<[^>]+>?)?/);
          return e3 = r3[1] ? r3[1] : r3[2], t2 = t2.substr(e3.length), e3;
        }
        function n2(e3) {
          return c[e3];
        }
        function i2(e3) {
          for (; y2 = e3.match(/&(amp|lt|gt|lrm|rlm|nbsp);/); ) e3 = e3.replace(y2[0], n2);
          return e3;
        }
        function a2(e3, t3) {
          return !f[t3.localName] || f[t3.localName] === e3.localName;
        }
        function s2(t3, r3) {
          var n3 = d[t3];
          if (!n3) return null;
          var i3 = e2.document.createElement(n3);
          i3.localName = n3;
          var a3 = h[t3];
          return a3 && r3 && (i3[a3] = r3.trim()), i3;
        }
        for (var l2, u2 = e2.document.createElement("div"), g2 = u2, m2 = []; null !== (l2 = r2()); ) if ("<" !== l2[0]) g2.appendChild(e2.document.createTextNode(i2(l2)));
        else {
          if ("/" === l2[1]) {
            m2.length && m2[m2.length - 1] === l2.substr(2).replace(">", "") && (m2.pop(), g2 = g2.parentNode);
            continue;
          }
          var p2, v2 = o(l2.substr(1, l2.length - 2));
          if (v2) {
            p2 = e2.document.createProcessingInstruction("timestamp", v2), g2.appendChild(p2);
            continue;
          }
          var y2 = l2.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
          if (!y2) continue;
          if (!(p2 = s2(y2[1], y2[3]))) continue;
          if (!a2(g2, p2)) continue;
          y2[2] && (p2.className = y2[2].substr(1).replace(".", " ")), m2.push(y2[1]), g2.appendChild(p2), g2 = p2;
        }
        return u2;
      }
      var m = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
      function p(e2) {
        for (var t2 = 0; t2 < m.length; t2++) {
          var r2 = m[t2];
          if (e2 >= r2[0] && e2 <= r2[1]) return true;
        }
        return false;
      }
      function v() {
      }
      function y(e2, t2, r2) {
        var n2 = "undefined" != typeof navigator && /MSIE\s8\.0/.test(navigator.userAgent), a2 = "rgba(255, 255, 255, 1)", s2 = "rgba(0, 0, 0, 0.8)", o2 = "";
        void 0 !== i && (a2 = i.fontSet, s2 = i.backgroundSet, o2 = i.edgeSet), n2 && (a2 = "rgb(255, 255, 255)", s2 = "rgb(0, 0, 0)"), v.call(this), this.cue = t2, this.cueDiv = g(e2, t2.text);
        var l2 = { color: a2, backgroundColor: s2, textShadow: o2, position: "relative", left: 0, right: 0, top: 0, bottom: 0, display: "inline" };
        n2 || (l2.writingMode = "" === t2.vertical ? "horizontal-tb" : "lr" === t2.vertical ? "vertical-lr" : "vertical-rl", l2.unicodeBidi = "plaintext"), this.applyStyles(l2, this.cueDiv), this.div = e2.document.createElement("div"), l2 = { textAlign: "middle" === t2.align ? "center" : t2.align, font: r2.font, whiteSpace: "pre-line", position: "absolute" }, n2 || (l2.direction = (function(e3) {
          var t3 = [], r3 = "";
          if (!e3 || !e3.childNodes) return "ltr";
          function n3(e4, t4) {
            for (var r4 = t4.childNodes.length - 1; r4 >= 0; r4--) e4.push(t4.childNodes[r4]);
          }
          function i2(e4) {
            if (!e4 || !e4.length) return null;
            var t4 = e4.pop(), r4 = t4.textContent || t4.innerText;
            if (r4) {
              var a4 = r4.match(/^.*(\n|\r)/);
              return a4 ? (e4.length = 0, a4[0]) : r4;
            }
            return "ruby" === t4.tagName ? i2(e4) : t4.childNodes ? (n3(e4, t4), i2(e4)) : void 0;
          }
          for (n3(t3, e3); r3 = i2(t3); ) for (var a3 = 0; a3 < r3.length; a3++) if (p(r3.charCodeAt(a3))) return "rtl";
          return "ltr";
        })(this.cueDiv), l2.writingMode = "" === t2.vertical ? "horizontal-tb" : "lr" === t2.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(l2), this.div.appendChild(this.cueDiv);
        var u2 = 0;
        switch (t2.positionAlign) {
          case "start":
            u2 = t2.position;
            break;
          case "middle":
            u2 = t2.position - t2.size / 2;
            break;
          case "end":
            u2 = t2.position - t2.size;
        }
        "" === t2.vertical ? this.applyStyles({ left: this.formatStyle(u2, "%"), width: this.formatStyle(t2.size, "%") }) : this.applyStyles({ top: this.formatStyle(u2, "%"), height: this.formatStyle(t2.size, "%") }), this.move = function(e3) {
          this.applyStyles({ top: this.formatStyle(e3.top, "px"), bottom: this.formatStyle(e3.bottom, "px"), left: this.formatStyle(e3.left, "px"), right: this.formatStyle(e3.right, "px"), height: this.formatStyle(e3.height, "px"), width: this.formatStyle(e3.width, "px") });
        };
      }
      function T(e2) {
        var t2, r2, n2, i2, a2 = "undefined" != typeof navigator && /MSIE\s8\.0/.test(navigator.userAgent);
        if (e2.div) {
          r2 = e2.div.offsetHeight, n2 = e2.div.offsetWidth, i2 = e2.div.offsetTop;
          var s2 = (s2 = e2.div.childNodes) && (s2 = s2[0]) && s2.getClientRects && s2.getClientRects();
          e2 = e2.div.getBoundingClientRect(), t2 = s2 ? Math.max(s2[0] && s2[0].height || 0, e2.height / s2.length) : 0;
        }
        this.left = e2.left, this.right = e2.right, this.top = e2.top || i2, this.height = e2.height || r2, this.bottom = e2.bottom || i2 + (e2.height || r2), this.width = e2.width || n2, this.lineHeight = void 0 !== t2 ? t2 : e2.lineHeight, a2 && !this.lineHeight && (this.lineHeight = 13);
      }
      function b(e2, t2, r2, n2) {
        var i2 = new T(t2), a2 = t2.cue, s2 = (function(e3) {
          if ("number" == typeof e3.line && (e3.snapToLines || e3.line >= 0 && e3.line <= 100)) return e3.line;
          if (!e3.track || !e3.track.textTrackList || !e3.track.textTrackList.mediaElement) return -1;
          for (var t3 = e3.track, r3 = t3.textTrackList, n3 = 0, i3 = 0; i3 < r3.length && r3[i3] !== t3; i3++) "showing" === r3[i3].mode && n3++;
          return -1 * ++n3;
        })(a2), o2 = [];
        if (a2.snapToLines) {
          var l2;
          switch (a2.vertical) {
            case "":
              o2 = ["+y", "-y"], l2 = "height";
              break;
            case "rl":
              o2 = ["+x", "-x"], l2 = "width";
              break;
            case "lr":
              o2 = ["-x", "+x"], l2 = "width";
          }
          var u2 = i2.lineHeight, c2 = u2 * Math.round(s2), d2 = r2[l2] + u2, h2 = o2[0];
          Math.abs(c2) > d2 && (c2 = c2 < 0 ? -1 : 1, c2 *= Math.ceil(d2 / u2) * u2), s2 < 0 && (c2 += "" === a2.vertical ? r2.height : r2.width, o2 = o2.reverse()), i2.move(h2, c2);
        } else {
          var f2 = i2.lineHeight / r2.height * 100;
          switch (a2.lineAlign) {
            case "middle":
              s2 -= f2 / 2;
              break;
            case "end":
              s2 -= f2;
          }
          switch (a2.vertical) {
            case "":
              t2.applyStyles({ top: t2.formatStyle(s2, "%") });
              break;
            case "rl":
              t2.applyStyles({ left: t2.formatStyle(s2, "%") });
              break;
            case "lr":
              t2.applyStyles({ right: t2.formatStyle(s2, "%") });
          }
          o2 = ["+y", "-x", "+x", "-y"], i2 = new T(t2);
        }
        var g2 = (function(e3, t3) {
          for (var i3, a3 = new T(e3), s3 = 1, o3 = 0; o3 < t3.length; o3++) {
            for (; e3.overlapsOppositeAxis(r2, t3[o3]) || e3.within(r2) && e3.overlapsAny(n2); ) e3.move(t3[o3]);
            if (e3.within(r2)) return e3;
            var l3 = e3.intersectPercentage(r2);
            s3 > l3 && (i3 = new T(e3), s3 = l3), e3 = new T(a3);
          }
          return i3 || a3;
        })(i2, o2);
        t2.move(g2.toCSSCompatValues(r2));
      }
      function E() {
      }
      v.prototype.applyStyles = function(e2, t2) {
        for (var r2 in t2 = t2 || this.div, e2) e2.hasOwnProperty(r2) && (t2.style[r2] = e2[r2]);
      }, v.prototype.formatStyle = function(e2, t2) {
        return 0 === e2 ? 0 : e2 + t2;
      }, y.prototype = a(v.prototype), y.prototype.constructor = y, T.prototype.move = function(e2, t2) {
        switch (t2 = void 0 !== t2 ? t2 : this.lineHeight, e2) {
          case "+x":
            this.left += t2, this.right += t2;
            break;
          case "-x":
            this.left -= t2, this.right -= t2;
            break;
          case "+y":
            this.top += t2, this.bottom += t2;
            break;
          case "-y":
            this.top -= t2, this.bottom -= t2;
        }
      }, T.prototype.overlaps = function(e2) {
        return this.left < e2.right && this.right > e2.left && this.top < e2.bottom && this.bottom > e2.top;
      }, T.prototype.overlapsAny = function(e2) {
        for (var t2 = 0; t2 < e2.length; t2++) if (this.overlaps(e2[t2])) return true;
        return false;
      }, T.prototype.within = function(e2) {
        return this.top >= e2.top && this.bottom <= e2.bottom && this.left >= e2.left && this.right <= e2.right;
      }, T.prototype.overlapsOppositeAxis = function(e2, t2) {
        switch (t2) {
          case "+x":
            return this.left < e2.left;
          case "-x":
            return this.right > e2.right;
          case "+y":
            return this.top < e2.top;
          case "-y":
            return this.bottom > e2.bottom;
        }
      }, T.prototype.intersectPercentage = function(e2) {
        return Math.max(0, Math.min(this.right, e2.right) - Math.max(this.left, e2.left)) * Math.max(0, Math.min(this.bottom, e2.bottom) - Math.max(this.top, e2.top)) / (this.height * this.width);
      }, T.prototype.toCSSCompatValues = function(e2) {
        return { top: this.top - e2.top, bottom: e2.bottom - this.bottom, left: this.left - e2.left, right: e2.right - this.right, height: this.height, width: this.width };
      }, T.getSimpleBoxPosition = function(e2) {
        var t2 = e2.div ? e2.div.offsetHeight : e2.tagName ? e2.offsetHeight : 0, r2 = e2.div ? e2.div.offsetWidth : e2.tagName ? e2.offsetWidth : 0, n2 = e2.div ? e2.div.offsetTop : e2.tagName ? e2.offsetTop : 0;
        return { left: (e2 = e2.div ? e2.div.getBoundingClientRect() : e2.tagName ? e2.getBoundingClientRect() : e2).left, right: e2.right, top: e2.top || n2, height: e2.height || t2, bottom: e2.bottom || n2 + (e2.height || t2), width: e2.width || r2 };
      }, E.StringDecoder = function() {
        return { decode: function(e2) {
          if (!e2) return "";
          if ("string" != typeof e2) throw new Error("Error - expected string data.");
          return decodeURIComponent(encodeURIComponent(e2));
        } };
      }, E.convertCueToDOMTree = function(e2, t2) {
        return e2 && t2 ? g(e2, t2) : null;
      };
      E.processCues = function(e2, t2, n2) {
        if (!e2 || !t2 || !n2) return null;
        for (; n2.firstChild; ) n2.removeChild(n2.firstChild);
        var i2 = e2.document.createElement("div");
        if (i2.style.position = "absolute", i2.style.left = "0", i2.style.right = "0", i2.style.top = "0", i2.style.bottom = "0", i2.style.margin = "1.5%", n2.appendChild(i2), (function(e3) {
          for (var t3 = 0; t3 < e3.length; t3++) if (e3[t3].hasBeenReset || !e3[t3].displayState) return true;
          return false;
        })(t2)) {
          var a2 = [], s2 = T.getSimpleBoxPosition(i2), o2 = { font: Math.round(0.05 * s2.height * 100) / 100 * r + "px sans-serif" };
          !(function() {
            for (var r2, n3, l3 = 0; l3 < t2.length; l3++) n3 = t2[l3], r2 = new y(e2, n3, o2), i2.appendChild(r2.div), b(0, r2, s2, a2), n3.displayState = r2.div, a2.push(T.getSimpleBoxPosition(r2));
          })();
        } else for (var l2 = 0; l2 < t2.length; l2++) i2.appendChild(t2[l2].displayState);
      }, E.Parser = function(e2, t2, r2) {
        this.window = e2, this.state = "INITIAL", this.buffer = "", this.decoder = t2 || new TextDecoder("utf8"), this.regionList = [], this.VTTCue = r2;
      }, E.Parser.prototype = { reportOrThrowError: function(e2) {
        if (!(e2 instanceof s)) throw e2;
        this.onparsingerror && this.onparsingerror(e2);
      }, parse: function(e2) {
        var t2, r2, n2 = this;
        function i2() {
          for (var e3 = n2.buffer, t3 = 0; t3 < e3.length && "\r" !== e3[t3] && "\n" !== e3[t3]; ) ++t3;
          var r3 = e3.substr(0, t3);
          return "\r" === e3[t3] && ++t3, "\n" === e3[t3] && ++t3, n2.buffer = e3.substr(t3), r3;
        }
        function a2(e3) {
          e3.match(/X-TIMESTAMP-MAP/) ? u(e3, (function(e4, t3) {
            if ("X-TIMESTAMP-MAP" === e4) !(function(e5) {
              var t4 = new l();
              u(e5, (function(e6, r3) {
                switch (e6) {
                  case "MPEGT":
                    t4.integer(e6 + "S", r3);
                    break;
                  case "LOCA":
                    t4.set(e6 + "L", o(r3));
                }
              }), /[^\d]:/, /,/), n2.ontimestampmap && n2.ontimestampmap({ MPEGTS: t4.get("MPEGTS"), LOCAL: t4.get("LOCAL") });
            })(t3);
          }), /=/) : u(e3, (function(e4, t3) {
            if ("Region" === e4) !(function(e5) {
              var t4 = new l();
              if (u(e5, (function(e6, r4) {
                switch (e6) {
                  case "id":
                    t4.set(e6, r4);
                    break;
                  case "width":
                    t4.percent(e6, r4);
                    break;
                  case "lines":
                    t4.integer(e6, r4);
                    break;
                  case "regionanchor":
                  case "viewportanchor":
                    var n3 = r4.split(",");
                    if (2 !== n3.length) break;
                    var i3 = new l();
                    if (i3.percent("x", n3[0]), i3.percent("y", n3[1]), !i3.has("x") || !i3.has("y")) break;
                    t4.set(e6 + "X", i3.get("x")), t4.set(e6 + "Y", i3.get("y"));
                    break;
                  case "scroll":
                    t4.alt(e6, r4, ["up"]);
                }
              }), /=/, /\s/), t4.has("id")) {
                var r3 = new n2.window.VTTRegion();
                r3.width = t4.get("width", 100), r3.lines = t4.get("lines", 3), r3.regionAnchorX = t4.get("regionanchorX", 0), r3.regionAnchorY = t4.get("regionanchorY", 100), r3.viewportAnchorX = t4.get("viewportanchorX", 0), r3.viewportAnchorY = t4.get("viewportanchorY", 100), r3.scroll = t4.get("scroll", ""), n2.onregion && n2.onregion(r3), n2.regionList.push({ id: t4.get("id"), region: r3 });
              }
            })(t3);
          }), /:/);
        }
        if (e2 && (n2.buffer += n2.decoder.decode(e2, { stream: true })), "INITIAL" === n2.state) {
          if (!/\r\n|\n/.test(n2.buffer)) return this;
          var c2 = (t2 = i2()).match(/^WEBVTT([ \t].*)?$/);
          if (!c2 || !c2[0]) return r2 = new s(s.Errors.BadSignature), n2.reportOrThrowError(r2), "CUETEXT" === n2.state && n2.cue && n2.oncue && n2.oncue(n2.cue), n2.cue = null, void (n2.state = "INITIAL" === n2.state ? "BADWEBVTT" : "BADCUE");
          n2.state = "HEADER";
        }
        var d2 = false, h2 = 0;
        var f2, g2 = (f2 = function() {
          if (n2.buffer && /\r\n|\n/.test(n2.buffer)) switch (d2 ? d2 = false : t2 = i2(), n2.state) {
            case "HEADER":
              /:/.test(t2) ? a2(t2) : t2 || (n2.state = "ID"), g2();
              break;
            case "NOTE":
              t2 || (n2.state = "ID"), g2();
              break;
            case "ID":
              if (/^NOTE($|[ \t])/.test(t2)) {
                n2.state = "NOTE", g2();
                break;
              }
              if (!t2) {
                g2();
                break;
              }
              if (n2.cue = new (n2.VTTCue || n2.window.VTTCue)(0, 0, ""), n2.state = "CUE", -1 === t2.indexOf("-->")) {
                n2.cue.id = t2, g2();
                break;
              }
            case "CUE":
              !(function(e4, t3, r3, n3, i3) {
                var a3, c3 = e4;
                function d3() {
                  var t4 = o(e4);
                  if (null !== t4 || !i3) return e4 = e4.replace(/^[^\sa-zA-Z-]+/, ""), t4;
                  i3(new s(s.Errors.BadTimeStamp, "Malformed timestamp: " + c3));
                }
                function h3() {
                  e4 = e4.replace(/^\s+/, "");
                }
                h3(), void 0 !== (a3 = d3()) && (t3.startTime = a3, h3(), "-->" === e4.substr(0, 3) ? (e4 = e4.substr(3), h3(), void 0 !== (a3 = d3()) && (t3.endTime = a3, h3(), (function(e5, t4) {
                  var i4 = new l();
                  u(e5, (function(e6, t5) {
                    switch (e6) {
                      case "region":
                        for (var n4 = r3.length - 1; n4 >= 0; n4--) if (r3[n4].id === t5) {
                          i4.set(e6, r3[n4].region);
                          break;
                        }
                        break;
                      case "vertical":
                        i4.alt(e6, t5, ["rl", "lr"]);
                        break;
                      case "line":
                        var a4 = t5.split(","), s2 = a4[0];
                        i4.integer(e6, s2), i4.percent(e6, s2) && i4.set("snapToLines", false), i4.alt(e6, s2, ["auto"]), 2 === a4.length && i4.alt("lineAlign", a4[1], ["start", "middle", "end"]);
                        break;
                      case "position":
                        a4 = t5.split(","), i4.percent(e6, a4[0]), 2 === a4.length && i4.alt("positionAlign", a4[1], ["start", "middle", "end"]);
                        break;
                      case "size":
                        i4.percent(e6, t5);
                        break;
                      case "align":
                        i4.alt(e6, t5, ["start", "middle", "end", "left", "right"]);
                    }
                  }), /:/, /\s/), t4.region = i4.get("region", null), t4.vertical = i4.get("vertical", ""), t4.line = i4.get("line", "auto"), t4.lineAlign = i4.get("lineAlign", "start"), t4.snapToLines = i4.get("snapToLines", true), t4.size = i4.get("size", 100), t4.align = i4.get("align", "center"), t4.position = i4.get("position", "auto"), t4.positionAlign = i4.get("positionAlign", { start: "start", left: "start", middle: "middle", end: "end", right: "end", center: "center" }, t4.align), n3();
                })(e4, t3))) : i3(new s(s.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + c3)));
              })(t2, n2.cue, n2.regionList, (function() {
                n2.state = "CUETEXT", g2();
              }), (function(e4) {
                n2.reportOrThrowError(e4), n2.cue = null, n2.state = "BADCUE", g2();
              }));
              break;
            case "CUETEXT":
              var e3 = -1 !== t2.indexOf("-->");
              if (!t2 || e3 && (d2 = true)) {
                n2.oncue && n2.oncue(n2.cue), n2.cue = null, n2.state = "ID", g2();
                break;
              }
              n2.cue.text && (n2.cue.text += "\n"), n2.cue.text += t2, g2();
              break;
            case "BADCUE":
              t2 || (n2.state = "ID"), g2();
          }
          else n2.flush();
        }, function() {
          if (++h2 < 1e3) return f2();
          setTimeout((function() {
            h2 = 0, f2();
          }));
        });
        return g2(), this;
      }, flush: function() {
        var e2 = this;
        try {
          if (e2.buffer += e2.decoder.decode(), (e2.cue || "HEADER" === e2.state) && (e2.buffer += "\n\n", e2.parse()), "INITIAL" === e2.state) throw new s(s.Errors.BadSignature);
        } catch (t2) {
          e2.reportOrThrowError(t2);
        }
        return e2.onflush && e2.onflush(), this;
      } }, e.WebVTT = E;
    })(this);
  },
  8336: (e) => {
    e.exports = function(e2) {
      return !(!e2 || "string" == typeof e2) && (e2 instanceof Array || Array.isArray(e2) || e2.length >= 0 && (e2.splice instanceof Function || Object.getOwnPropertyDescriptor(e2, e2.length - 1) && "String" !== e2.constructor.name));
    };
  },
  8684: function() {
    !(function(e) {
      var t = { "": true, lr: true, rl: true }, r = { start: true, middle: true, end: true, left: true, right: true };
      function n(e2) {
        return "string" == typeof e2 && (!!r[e2.toLowerCase()] && e2.toLowerCase());
      }
      function i(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var r2 = arguments[t2];
          for (var n2 in r2) e2[n2] = r2[n2];
        }
        return e2;
      }
      function a(e2, r2, a2) {
        var s = this, o = /MSIE\s8\.0/.test(navigator.userAgent), l = {};
        o ? s = document.createElement("custom") : l.enumerable = true, s.hasBeenReset = false;
        var u = "", c = false, d = e2, h = r2, f = a2, g = null, m = "", p = true, v = "auto", y = "start", T = 50, b = "middle", E = 50, S = "middle";
        if (Object.defineProperty(s, "id", i({}, l, { get: function() {
          return u;
        }, set: function(e3) {
          u = "" + e3;
        } })), Object.defineProperty(s, "pauseOnExit", i({}, l, { get: function() {
          return c;
        }, set: function(e3) {
          c = !!e3;
        } })), Object.defineProperty(s, "startTime", i({}, l, { get: function() {
          return d;
        }, set: function(e3) {
          if ("number" != typeof e3) throw new TypeError("Start time must be set to a number.");
          d = e3, this.hasBeenReset = true;
        } })), Object.defineProperty(s, "endTime", i({}, l, { get: function() {
          return h;
        }, set: function(e3) {
          if ("number" != typeof e3) throw new TypeError("End time must be set to a number.");
          h = e3, this.hasBeenReset = true;
        } })), Object.defineProperty(s, "text", i({}, l, { get: function() {
          return f;
        }, set: function(e3) {
          f = "" + e3, this.hasBeenReset = true;
        } })), Object.defineProperty(s, "region", i({}, l, { get: function() {
          return g;
        }, set: function(e3) {
          g = e3, this.hasBeenReset = true;
        } })), Object.defineProperty(s, "vertical", i({}, l, { get: function() {
          return m;
        }, set: function(e3) {
          var r3 = (function(e4) {
            return "string" == typeof e4 && !!t[e4.toLowerCase()] && e4.toLowerCase();
          })(e3);
          if (false === r3) throw new SyntaxError("An invalid or illegal string was specified.");
          m = r3, this.hasBeenReset = true;
        } })), Object.defineProperty(s, "snapToLines", i({}, l, { get: function() {
          return p;
        }, set: function(e3) {
          p = !!e3, this.hasBeenReset = true;
        } })), Object.defineProperty(s, "line", i({}, l, { get: function() {
          return v;
        }, set: function(e3) {
          if ("number" != typeof e3 && "auto" !== e3) throw new SyntaxError("An invalid number or illegal string was specified.");
          v = e3, this.hasBeenReset = true;
        } })), Object.defineProperty(s, "lineAlign", i({}, l, { get: function() {
          return y;
        }, set: function(e3) {
          var t2 = n(e3);
          if (!t2) throw new SyntaxError("An invalid or illegal string was specified.");
          y = t2, this.hasBeenReset = true;
        } })), Object.defineProperty(s, "position", i({}, l, { get: function() {
          return T;
        }, set: function(e3) {
          if (e3 < 0 || e3 > 100) throw new Error("Position must be between 0 and 100.");
          T = e3, this.hasBeenReset = true;
        } })), Object.defineProperty(s, "positionAlign", i({}, l, { get: function() {
          return b;
        }, set: function(e3) {
          var t2 = n(e3);
          if (!t2) throw new SyntaxError("An invalid or illegal string was specified.");
          b = t2, this.hasBeenReset = true;
        } })), Object.defineProperty(s, "size", i({}, l, { get: function() {
          return E;
        }, set: function(e3) {
          if (e3 < 0 || e3 > 100) throw new Error("Size must be between 0 and 100.");
          E = e3, this.hasBeenReset = true;
        } })), Object.defineProperty(s, "align", i({}, l, { get: function() {
          return S;
        }, set: function(e3) {
          var t2 = n(e3);
          if (!t2) throw new SyntaxError("An invalid or illegal string was specified.");
          S = t2, this.hasBeenReset = true;
        } })), s.displayState = void 0, o) return s;
      }
      a.prototype.getCueAsHTML = function() {
        return WebVTT.convertCueToDOMTree(window, this.text);
      }, e.VTTCue = e.VTTCue || a;
    })(this);
  },
  8742: (e, t, r) => {
    const n = r(6138), i = r(1880), a = ["keyword", "gray", "hex"], s = {};
    for (const e2 of Object.keys(i)) s[[...i[e2].labels].sort().join("")] = e2;
    const o = {};
    function l(e2, t2) {
      if (!(this instanceof l)) return new l(e2, t2);
      if (t2 && t2 in a && (t2 = null), t2 && !(t2 in i)) throw new Error("Unknown model: " + t2);
      let r2, u2;
      if (null == e2) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
      else if (e2 instanceof l) this.model = e2.model, this.color = [...e2.color], this.valpha = e2.valpha;
      else if ("string" == typeof e2) {
        const t3 = n.get(e2);
        if (null === t3) throw new Error("Unable to parse color from string: " + e2);
        this.model = t3.model, u2 = i[this.model].channels, this.color = t3.value.slice(0, u2), this.valpha = "number" == typeof t3.value[u2] ? t3.value[u2] : 1;
      } else if (e2.length > 0) {
        this.model = t2 || "rgb", u2 = i[this.model].channels;
        const r3 = Array.prototype.slice.call(e2, 0, u2);
        this.color = h(r3, u2), this.valpha = "number" == typeof e2[u2] ? e2[u2] : 1;
      } else if ("number" == typeof e2) this.model = "rgb", this.color = [e2 >> 16 & 255, e2 >> 8 & 255, 255 & e2], this.valpha = 1;
      else {
        this.valpha = 1;
        const t3 = Object.keys(e2);
        "alpha" in e2 && (t3.splice(t3.indexOf("alpha"), 1), this.valpha = "number" == typeof e2.alpha ? e2.alpha : 0);
        const n2 = t3.sort().join("");
        if (!(n2 in s)) throw new Error("Unable to parse color from object: " + JSON.stringify(e2));
        this.model = s[n2];
        const { labels: a2 } = i[this.model], o2 = [];
        for (r2 = 0; r2 < a2.length; r2++) o2.push(e2[a2[r2]]);
        this.color = h(o2);
      }
      if (o[this.model]) for (u2 = i[this.model].channels, r2 = 0; r2 < u2; r2++) {
        const e3 = o[this.model][r2];
        e3 && (this.color[r2] = e3(this.color[r2]));
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
    }
    l.prototype = { toString() {
      return this.string();
    }, toJSON() {
      return this[this.model]();
    }, string(e2) {
      let t2 = this.model in n.to ? this : this.rgb();
      t2 = t2.round("number" == typeof e2 ? e2 : 1);
      const r2 = 1 === t2.valpha ? t2.color : [...t2.color, this.valpha];
      return n.to[t2.model](r2);
    }, percentString(e2) {
      const t2 = this.rgb().round("number" == typeof e2 ? e2 : 1), r2 = 1 === t2.valpha ? t2.color : [...t2.color, this.valpha];
      return n.to.rgb.percent(r2);
    }, array() {
      return 1 === this.valpha ? [...this.color] : [...this.color, this.valpha];
    }, object() {
      const e2 = {}, { channels: t2 } = i[this.model], { labels: r2 } = i[this.model];
      for (let n2 = 0; n2 < t2; n2++) e2[r2[n2]] = this.color[n2];
      return 1 !== this.valpha && (e2.alpha = this.valpha), e2;
    }, unitArray() {
      const e2 = this.rgb().color;
      return e2[0] /= 255, e2[1] /= 255, e2[2] /= 255, 1 !== this.valpha && e2.push(this.valpha), e2;
    }, unitObject() {
      const e2 = this.rgb().object();
      return e2.r /= 255, e2.g /= 255, e2.b /= 255, 1 !== this.valpha && (e2.alpha = this.valpha), e2;
    }, round(e2) {
      return e2 = Math.max(e2 || 0, 0), new l([...this.color.map(u(e2)), this.valpha], this.model);
    }, alpha(e2) {
      return void 0 !== e2 ? new l([...this.color, Math.max(0, Math.min(1, e2))], this.model) : this.valpha;
    }, red: c("rgb", 0, d(255)), green: c("rgb", 1, d(255)), blue: c("rgb", 2, d(255)), hue: c(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, ((e2) => (e2 % 360 + 360) % 360)), saturationl: c("hsl", 1, d(100)), lightness: c("hsl", 2, d(100)), saturationv: c("hsv", 1, d(100)), value: c("hsv", 2, d(100)), chroma: c("hcg", 1, d(100)), gray: c("hcg", 2, d(100)), white: c("hwb", 1, d(100)), wblack: c("hwb", 2, d(100)), cyan: c("cmyk", 0, d(100)), magenta: c("cmyk", 1, d(100)), yellow: c("cmyk", 2, d(100)), black: c("cmyk", 3, d(100)), x: c("xyz", 0, d(95.047)), y: c("xyz", 1, d(100)), z: c("xyz", 2, d(108.833)), l: c("lab", 0, d(100)), a: c("lab", 1), b: c("lab", 2), keyword(e2) {
      return void 0 !== e2 ? new l(e2) : i[this.model].keyword(this.color);
    }, hex(e2) {
      return void 0 !== e2 ? new l(e2) : n.to.hex(this.rgb().round().color);
    }, hexa(e2) {
      if (void 0 !== e2) return new l(e2);
      const t2 = this.rgb().round().color;
      let r2 = Math.round(255 * this.valpha).toString(16).toUpperCase();
      return 1 === r2.length && (r2 = "0" + r2), n.to.hex(t2) + r2;
    }, rgbNumber() {
      const e2 = this.rgb().color;
      return (255 & e2[0]) << 16 | (255 & e2[1]) << 8 | 255 & e2[2];
    }, luminosity() {
      const e2 = this.rgb().color, t2 = [];
      for (const [r2, n2] of e2.entries()) {
        const e3 = n2 / 255;
        t2[r2] = e3 <= 0.04045 ? e3 / 12.92 : ((e3 + 0.055) / 1.055) ** 2.4;
      }
      return 0.2126 * t2[0] + 0.7152 * t2[1] + 0.0722 * t2[2];
    }, contrast(e2) {
      const t2 = this.luminosity(), r2 = e2.luminosity();
      return t2 > r2 ? (t2 + 0.05) / (r2 + 0.05) : (r2 + 0.05) / (t2 + 0.05);
    }, level(e2) {
      const t2 = this.contrast(e2);
      return t2 >= 7 ? "AAA" : t2 >= 4.5 ? "AA" : "";
    }, isDark() {
      const e2 = this.rgb().color;
      return (2126 * e2[0] + 7152 * e2[1] + 722 * e2[2]) / 1e4 < 128;
    }, isLight() {
      return !this.isDark();
    }, negate() {
      const e2 = this.rgb();
      for (let t2 = 0; t2 < 3; t2++) e2.color[t2] = 255 - e2.color[t2];
      return e2;
    }, lighten(e2) {
      const t2 = this.hsl();
      return t2.color[2] += t2.color[2] * e2, t2;
    }, darken(e2) {
      const t2 = this.hsl();
      return t2.color[2] -= t2.color[2] * e2, t2;
    }, saturate(e2) {
      const t2 = this.hsl();
      return t2.color[1] += t2.color[1] * e2, t2;
    }, desaturate(e2) {
      const t2 = this.hsl();
      return t2.color[1] -= t2.color[1] * e2, t2;
    }, whiten(e2) {
      const t2 = this.hwb();
      return t2.color[1] += t2.color[1] * e2, t2;
    }, blacken(e2) {
      const t2 = this.hwb();
      return t2.color[2] += t2.color[2] * e2, t2;
    }, grayscale() {
      const e2 = this.rgb().color, t2 = 0.3 * e2[0] + 0.59 * e2[1] + 0.11 * e2[2];
      return l.rgb(t2, t2, t2);
    }, fade(e2) {
      return this.alpha(this.valpha - this.valpha * e2);
    }, opaquer(e2) {
      return this.alpha(this.valpha + this.valpha * e2);
    }, rotate(e2) {
      const t2 = this.hsl();
      let r2 = t2.color[0];
      return r2 = (r2 + e2) % 360, r2 = r2 < 0 ? 360 + r2 : r2, t2.color[0] = r2, t2;
    }, mix(e2, t2) {
      if (!e2 || !e2.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof e2);
      const r2 = e2.rgb(), n2 = this.rgb(), i2 = void 0 === t2 ? 0.5 : t2, a2 = 2 * i2 - 1, s2 = r2.alpha() - n2.alpha(), o2 = ((a2 * s2 == -1 ? a2 : (a2 + s2) / (1 + a2 * s2)) + 1) / 2, u2 = 1 - o2;
      return l.rgb(o2 * r2.red() + u2 * n2.red(), o2 * r2.green() + u2 * n2.green(), o2 * r2.blue() + u2 * n2.blue(), r2.alpha() * i2 + n2.alpha() * (1 - i2));
    } };
    for (const e2 of Object.keys(i)) {
      if (a.includes(e2)) continue;
      const { channels: t2 } = i[e2];
      l.prototype[e2] = function(...t3) {
        return this.model === e2 ? new l(this) : t3.length > 0 ? new l(t3, e2) : new l([...(r2 = i[this.model][e2].raw(this.color), Array.isArray(r2) ? r2 : [r2]), this.valpha], e2);
        var r2;
      }, l[e2] = function(...r2) {
        let n2 = r2[0];
        return "number" == typeof n2 && (n2 = h(r2, t2)), new l(n2, e2);
      };
    }
    function u(e2) {
      return function(t2) {
        return (function(e3, t3) {
          return Number(e3.toFixed(t3));
        })(t2, e2);
      };
    }
    function c(e2, t2, r2) {
      e2 = Array.isArray(e2) ? e2 : [e2];
      for (const n2 of e2) (o[n2] || (o[n2] = []))[t2] = r2;
      return e2 = e2[0], function(n2) {
        let i2;
        return void 0 !== n2 ? (r2 && (n2 = r2(n2)), i2 = this[e2](), i2.color[t2] = n2, i2) : (i2 = this[e2]().color[t2], r2 && (i2 = r2(i2)), i2);
      };
    }
    function d(e2) {
      return function(t2) {
        return Math.max(0, Math.min(e2, t2));
      };
    }
    function h(e2, t2) {
      for (let r2 = 0; r2 < t2; r2++) "number" != typeof e2[r2] && (e2[r2] = 0);
      return e2;
    }
    e.exports = l;
  },
  8816: (e) => {
    e.exports = function e2(t) {
      return Object.freeze(t), Object.getOwnPropertyNames(t).forEach((function(r) {
        !t.hasOwnProperty(r) || null === t[r] || "object" != typeof t[r] && "function" != typeof t[r] || Object.isFrozen(t[r]) || e2(t[r]);
      })), t;
    };
  },
  8868: (e, t, r) => {
    "use strict";
    var n = r(6694), i = r(3845);
    function a() {
      this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
    }
    t.parse = T, t.resolve = function(e2, t2) {
      return T(e2, false, true).resolve(t2);
    }, t.resolveObject = function(e2, t2) {
      return e2 ? T(e2, false, true).resolveObject(t2) : t2;
    }, t.format = function(e2) {
      i.isString(e2) && (e2 = T(e2));
      return e2 instanceof a ? e2.format() : a.prototype.format.call(e2);
    }, t.Url = a;
    var s = /^([a-z0-9.+-]+:)/i, o = /:[0-9]*$/, l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"]), c = ["'"].concat(u), d = ["%", "/", "?", ";", "#"].concat(c), h = ["/", "?", "#"], f = /^[+a-z0-9A-Z_-]{0,63}$/, g = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, m = { javascript: true, "javascript:": true }, p = { javascript: true, "javascript:": true }, v = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true }, y = r(4329);
    function T(e2, t2, r2) {
      if (e2 && i.isObject(e2) && e2 instanceof a) return e2;
      var n2 = new a();
      return n2.parse(e2, t2, r2), n2;
    }
    a.prototype.parse = function(e2, t2, r2) {
      if (!i.isString(e2)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e2);
      var a2 = e2.indexOf("?"), o2 = -1 !== a2 && a2 < e2.indexOf("#") ? "?" : "#", u2 = e2.split(o2);
      u2[0] = u2[0].replace(/\\/g, "/");
      var T2 = e2 = u2.join(o2);
      if (T2 = T2.trim(), !r2 && 1 === e2.split("#").length) {
        var b = l.exec(T2);
        if (b) return this.path = T2, this.href = T2, this.pathname = b[1], b[2] ? (this.search = b[2], this.query = t2 ? y.parse(this.search.substr(1)) : this.search.substr(1)) : t2 && (this.search = "", this.query = {}), this;
      }
      var E = s.exec(T2);
      if (E) {
        var S = (E = E[0]).toLowerCase();
        this.protocol = S, T2 = T2.substr(E.length);
      }
      if (r2 || E || T2.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var A = "//" === T2.substr(0, 2);
        !A || E && p[E] || (T2 = T2.substr(2), this.slashes = true);
      }
      if (!p[E] && (A || E && !v[E])) {
        for (var k, L, R = -1, I = 0; I < h.length; I++) {
          -1 !== (w = T2.indexOf(h[I])) && (-1 === R || w < R) && (R = w);
        }
        -1 !== (L = -1 === R ? T2.lastIndexOf("@") : T2.lastIndexOf("@", R)) && (k = T2.slice(0, L), T2 = T2.slice(L + 1), this.auth = decodeURIComponent(k)), R = -1;
        for (I = 0; I < d.length; I++) {
          var w;
          -1 !== (w = T2.indexOf(d[I])) && (-1 === R || w < R) && (R = w);
        }
        -1 === R && (R = T2.length), this.host = T2.slice(0, R), T2 = T2.slice(R), this.parseHost(), this.hostname = this.hostname || "";
        var D = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!D) for (var C = this.hostname.split(/\./), x = (I = 0, C.length); I < x; I++) {
          var _ = C[I];
          if (_ && !_.match(f)) {
            for (var O = "", P = 0, M = _.length; P < M; P++) _.charCodeAt(P) > 127 ? O += "x" : O += _[P];
            if (!O.match(f)) {
              var F = C.slice(0, I), N = C.slice(I + 1), U = _.match(g);
              U && (F.push(U[1]), N.unshift(U[2])), N.length && (T2 = "/" + N.join(".") + T2), this.hostname = F.join(".");
              break;
            }
          }
        }
        this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), D || (this.hostname = n.toASCII(this.hostname));
        var B = this.port ? ":" + this.port : "", G = this.hostname || "";
        this.host = G + B, this.href += this.host, D && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== T2[0] && (T2 = "/" + T2));
      }
      if (!m[S]) for (I = 0, x = c.length; I < x; I++) {
        var V = c[I];
        if (-1 !== T2.indexOf(V)) {
          var H = encodeURIComponent(V);
          H === V && (H = escape(V)), T2 = T2.split(V).join(H);
        }
      }
      var K = T2.indexOf("#");
      -1 !== K && (this.hash = T2.substr(K), T2 = T2.slice(0, K));
      var j = T2.indexOf("?");
      if (-1 !== j ? (this.search = T2.substr(j), this.query = T2.substr(j + 1), t2 && (this.query = y.parse(this.query)), T2 = T2.slice(0, j)) : t2 && (this.search = "", this.query = {}), T2 && (this.pathname = T2), v[S] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        B = this.pathname || "";
        var Y = this.search || "";
        this.path = B + Y;
      }
      return this.href = this.format(), this;
    }, a.prototype.format = function() {
      var e2 = this.auth || "";
      e2 && (e2 = (e2 = encodeURIComponent(e2)).replace(/%3A/i, ":"), e2 += "@");
      var t2 = this.protocol || "", r2 = this.pathname || "", n2 = this.hash || "", a2 = false, s2 = "";
      this.host ? a2 = e2 + this.host : this.hostname && (a2 = e2 + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (a2 += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (s2 = y.stringify(this.query));
      var o2 = this.search || s2 && "?" + s2 || "";
      return t2 && ":" !== t2.substr(-1) && (t2 += ":"), this.slashes || (!t2 || v[t2]) && false !== a2 ? (a2 = "//" + (a2 || ""), r2 && "/" !== r2.charAt(0) && (r2 = "/" + r2)) : a2 || (a2 = ""), n2 && "#" !== n2.charAt(0) && (n2 = "#" + n2), o2 && "?" !== o2.charAt(0) && (o2 = "?" + o2), t2 + a2 + (r2 = r2.replace(/[?#]/g, (function(e3) {
        return encodeURIComponent(e3);
      }))) + (o2 = o2.replace("#", "%23")) + n2;
    }, a.prototype.resolve = function(e2) {
      return this.resolveObject(T(e2, false, true)).format();
    }, a.prototype.resolveObject = function(e2) {
      if (i.isString(e2)) {
        var t2 = new a();
        t2.parse(e2, false, true), e2 = t2;
      }
      for (var r2 = new a(), n2 = Object.keys(this), s2 = 0; s2 < n2.length; s2++) {
        var o2 = n2[s2];
        r2[o2] = this[o2];
      }
      if (r2.hash = e2.hash, "" === e2.href) return r2.href = r2.format(), r2;
      if (e2.slashes && !e2.protocol) {
        for (var l2 = Object.keys(e2), u2 = 0; u2 < l2.length; u2++) {
          var c2 = l2[u2];
          "protocol" !== c2 && (r2[c2] = e2[c2]);
        }
        return v[r2.protocol] && r2.hostname && !r2.pathname && (r2.path = r2.pathname = "/"), r2.href = r2.format(), r2;
      }
      if (e2.protocol && e2.protocol !== r2.protocol) {
        if (!v[e2.protocol]) {
          for (var d2 = Object.keys(e2), h2 = 0; h2 < d2.length; h2++) {
            var f2 = d2[h2];
            r2[f2] = e2[f2];
          }
          return r2.href = r2.format(), r2;
        }
        if (r2.protocol = e2.protocol, e2.host || p[e2.protocol]) r2.pathname = e2.pathname;
        else {
          for (var g2 = (e2.pathname || "").split("/"); g2.length && !(e2.host = g2.shift()); ) ;
          e2.host || (e2.host = ""), e2.hostname || (e2.hostname = ""), "" !== g2[0] && g2.unshift(""), g2.length < 2 && g2.unshift(""), r2.pathname = g2.join("/");
        }
        if (r2.search = e2.search, r2.query = e2.query, r2.host = e2.host || "", r2.auth = e2.auth, r2.hostname = e2.hostname || e2.host, r2.port = e2.port, r2.pathname || r2.search) {
          var m2 = r2.pathname || "", y2 = r2.search || "";
          r2.path = m2 + y2;
        }
        return r2.slashes = r2.slashes || e2.slashes, r2.href = r2.format(), r2;
      }
      var T2 = r2.pathname && "/" === r2.pathname.charAt(0), b = e2.host || e2.pathname && "/" === e2.pathname.charAt(0), E = b || T2 || r2.host && e2.pathname, S = E, A = r2.pathname && r2.pathname.split("/") || [], k = (g2 = e2.pathname && e2.pathname.split("/") || [], r2.protocol && !v[r2.protocol]);
      if (k && (r2.hostname = "", r2.port = null, r2.host && ("" === A[0] ? A[0] = r2.host : A.unshift(r2.host)), r2.host = "", e2.protocol && (e2.hostname = null, e2.port = null, e2.host && ("" === g2[0] ? g2[0] = e2.host : g2.unshift(e2.host)), e2.host = null), E = E && ("" === g2[0] || "" === A[0])), b) r2.host = e2.host || "" === e2.host ? e2.host : r2.host, r2.hostname = e2.hostname || "" === e2.hostname ? e2.hostname : r2.hostname, r2.search = e2.search, r2.query = e2.query, A = g2;
      else if (g2.length) A || (A = []), A.pop(), A = A.concat(g2), r2.search = e2.search, r2.query = e2.query;
      else if (!i.isNullOrUndefined(e2.search)) {
        if (k) r2.hostname = r2.host = A.shift(), (D = !!(r2.host && r2.host.indexOf("@") > 0) && r2.host.split("@")) && (r2.auth = D.shift(), r2.host = r2.hostname = D.shift());
        return r2.search = e2.search, r2.query = e2.query, i.isNull(r2.pathname) && i.isNull(r2.search) || (r2.path = (r2.pathname ? r2.pathname : "") + (r2.search ? r2.search : "")), r2.href = r2.format(), r2;
      }
      if (!A.length) return r2.pathname = null, r2.search ? r2.path = "/" + r2.search : r2.path = null, r2.href = r2.format(), r2;
      for (var L = A.slice(-1)[0], R = (r2.host || e2.host || A.length > 1) && ("." === L || ".." === L) || "" === L, I = 0, w = A.length; w >= 0; w--) "." === (L = A[w]) ? A.splice(w, 1) : ".." === L ? (A.splice(w, 1), I++) : I && (A.splice(w, 1), I--);
      if (!E && !S) for (; I--; I) A.unshift("..");
      !E || "" === A[0] || A[0] && "/" === A[0].charAt(0) || A.unshift(""), R && "/" !== A.join("/").substr(-1) && A.push("");
      var D, C = "" === A[0] || A[0] && "/" === A[0].charAt(0);
      k && (r2.hostname = r2.host = C ? "" : A.length ? A.shift() : "", (D = !!(r2.host && r2.host.indexOf("@") > 0) && r2.host.split("@")) && (r2.auth = D.shift(), r2.host = r2.hostname = D.shift()));
      return (E = E || r2.host && A.length) && !C && A.unshift(""), A.length ? r2.pathname = A.join("/") : (r2.pathname = null, r2.path = null), i.isNull(r2.pathname) && i.isNull(r2.search) || (r2.path = (r2.pathname ? r2.pathname : "") + (r2.search ? r2.search : "")), r2.auth = e2.auth || r2.auth, r2.slashes = r2.slashes || e2.slashes, r2.href = r2.format(), r2;
    }, a.prototype.parseHost = function() {
      var e2 = this.host, t2 = o.exec(e2);
      t2 && (":" !== (t2 = t2[0]) && (this.port = t2.substr(1)), e2 = e2.substr(0, e2.length - t2.length)), e2 && (this.hostname = e2);
    };
  },
  8968: (e, t, r) => {
    var n = r(1621);
    e.exports = n;
  },
  9794: (e, t, r) => {
    var n = r(2715);
    e.exports = n;
  }
};
