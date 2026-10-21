(() => {
  "use strict";
  var t, r, e, n, a, o = {}, s = {};
  function i(t2) {
    var r2 = s[t2];
    if (void 0 !== r2) return r2.exports;
    var e2 = s[t2] = { id: t2, loaded: false, exports: {} };
    return o[t2].call(e2.exports, e2, e2.exports, i), e2.loaded = true, e2.exports;
  }
  i.m = o, t = [], i.O = (r2, e2, n2, a2) => {
    if (!e2) {
      var o2 = 1 / 0;
      for (u = 0; u < t.length; u++) {
        for (var [e2, n2, a2] = t[u], s2 = true, l = 0; l < e2.length; l++) (false & a2 || o2 >= a2) && Object.keys(i.O).every(((t2) => i.O[t2](e2[l]))) ? e2.splice(l--, 1) : (s2 = false, a2 < o2 && (o2 = a2));
        if (s2) {
          t.splice(u--, 1);
          var c = n2();
          void 0 !== c && (r2 = c);
        }
      }
      return r2;
    }
    a2 = a2 || 0;
    for (var u = t.length; u > 0 && t[u - 1][2] > a2; u--) t[u] = t[u - 1];
    t[u] = [e2, n2, a2];
  }, i.n = (t2) => {
    var r2 = t2 && t2.__esModule ? () => t2.default : () => t2;
    return i.d(r2, { a: r2 }), r2;
  }, e = Object.getPrototypeOf ? (t2) => Object.getPrototypeOf(t2) : (t2) => t2.__proto__, i.t = function(t2, n2) {
    if (1 & n2 && (t2 = this(t2)), 8 & n2) return t2;
    if ("object" == typeof t2 && t2) {
      if (4 & n2 && t2.__esModule) return t2;
      if (16 & n2 && "function" == typeof t2.then) return t2;
    }
    var a2 = /* @__PURE__ */ Object.create(null);
    i.r(a2);
    var o2 = {};
    r = r || [null, e({}), e([]), e(e)];
    for (var s2 = 2 & n2 && t2; ("object" == typeof s2 || "function" == typeof s2) && !~r.indexOf(s2); s2 = e(s2)) Object.getOwnPropertyNames(s2).forEach(((r2) => o2[r2] = () => t2[r2]));
    return o2.default = () => t2, i.d(a2, o2), a2;
  }, i.d = (t2, r2) => {
    for (var e2 in r2) i.o(r2, e2) && !i.o(t2, e2) && Object.defineProperty(t2, e2, { enumerable: true, get: r2[e2] });
  }, i.f = {}, i.e = (t2) => Promise.all(Object.keys(i.f).reduce(((r2, e2) => (i.f[e2](t2, r2), r2)), [])), i.u = (t2) => ({ 187: "search", 239: "translations13", 344: "translations32", 467: "translations6", 478: "translations3", 620: "translations47", 631: "translations44", 940: "translations36", 1088: "player", 1397: "translations20", 1466: "translations7", 1608: "translations43", 2060: "translations18", 2385: "translations24", 3276: "translations1", 3287: "translations2", 3373: "translations28", 3429: "translations46", 3749: "translations37", 4036: "translations10", 4206: "translations23", 4264: "translations5", 4417: "translations42", 4737: "translations33", 4864: "translations14", 4869: "translations19", 5194: "translations27", 5252: "translations9", 5394: "translations49", 5710: "addons", 5714: "translations38", 5779: "translations26", 6180: "video", 6415: "details", 6472: "settings", 6547: "translations31", 6558: "translations34", 6834: "translations16", 6845: "translations11", 6966: "login", 7073: "translations4", 7226: "translations41", 7546: "translations30", 7669: "translations0", 7673: "translations15", 7811: "translations40", 7822: "translations45", 7920: "library", 7962: "home", 8061: "translations8", 8203: "translations48", 8523: "translations39", 8588: "translations21", 8599: "translations22", 8842: "discover", 8980: "translations29", 9114: "core", 9367: "translations35", 9494: "translations12", 9576: "translations25", 9643: "translations17" })[t2] + ".chunk.js", i.g = (function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t2) {
      if ("object" == typeof window) return window;
    }
  })(), i.o = (t2, r2) => Object.prototype.hasOwnProperty.call(t2, r2), n = {}, a = "stremio-theater:", i.l = (t2, r2, e2, o2) => {
    if (n[t2]) n[t2].push(r2);
    else {
      var s2, l;
      if (void 0 !== e2) for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
        var d = c[u];
        if (d.getAttribute("src") == t2 || d.getAttribute("data-webpack") == a + e2) {
          s2 = d;
          break;
        }
      }
      s2 || (l = true, (s2 = document.createElement("script")).charset = "utf-8", i.nc && s2.setAttribute("nonce", i.nc), s2.setAttribute("data-webpack", a + e2), s2.src = t2), n[t2] = [r2];
      var f = (r3, e3) => {
        s2.onerror = s2.onload = null, clearTimeout(p);
        var a2 = n[t2];
        if (delete n[t2], s2.parentNode && s2.parentNode.removeChild(s2), a2 && a2.forEach(((t3) => t3(e3))), r3) return r3(e3);
      }, p = setTimeout(f.bind(null, void 0, { type: "timeout", target: s2 }), 12e4);
      s2.onerror = f.bind(null, s2.onerror), s2.onload = f.bind(null, s2.onload), l && document.head.appendChild(s2);
    }
  }, i.r = (t2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  }, i.nmd = (t2) => (t2.paths = [], t2.children || (t2.children = []), t2), (() => {
    var t2;
    i.g.importScripts && (t2 = i.g.location + "");
    var r2 = i.g.document;
    if (!t2 && r2 && (r2.currentScript && "SCRIPT" === r2.currentScript.tagName.toUpperCase() && (t2 = r2.currentScript.src), !t2)) {
      var e2 = r2.getElementsByTagName("script");
      if (e2.length) for (var n2 = e2.length - 1; n2 > -1 && (!t2 || !/^http(s?):/.test(t2)); ) t2 = e2[n2--].src;
    }
    if (!t2) throw new Error("Automatic publicPath is not supported in this browser");
    t2 = t2.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = t2;
  })(), (() => {
    i.b = "undefined" != typeof document && document.baseURI || self.location.href;
    var t2 = { 9121: 0 };
    i.f.j = (r3, e3) => {
      var n2 = i.o(t2, r3) ? t2[r3] : void 0;
      if (0 !== n2) if (n2) e3.push(n2[2]);
      else if (9121 != r3) {
        var a2 = new Promise(((e4, a3) => n2 = t2[r3] = [e4, a3]));
        e3.push(n2[2] = a2);
        var o2 = i.p + i.u(r3), s2 = new Error();
        i.l(o2, ((e4) => {
          if (i.o(t2, r3) && (0 !== (n2 = t2[r3]) && (t2[r3] = void 0), n2)) {
            var a3 = e4 && ("load" === e4.type ? "missing" : e4.type), o3 = e4 && e4.target && e4.target.src;
            s2.message = "Loading chunk " + r3 + " failed.\n(" + a3 + ": " + o3 + ")", s2.name = "ChunkLoadError", s2.type = a3, s2.request = o3, n2[1](s2);
          }
        }), "chunk-" + r3, r3);
      } else t2[r3] = 0;
    }, i.O.j = (r3) => 0 === t2[r3];
    var r2 = (r3, e3) => {
      var n2, a2, [o2, s2, l] = e3, c = 0;
      if (o2.some(((r4) => 0 !== t2[r4]))) {
        for (n2 in s2) i.o(s2, n2) && (i.m[n2] = s2[n2]);
        if (l) var u = l(i);
      }
      for (r3 && r3(e3); c < o2.length; c++) a2 = o2[c], i.o(t2, a2) && t2[a2] && t2[a2][0](), t2[a2] = 0;
      return i.O(u);
    }, e2 = self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || [];
    e2.forEach(r2.bind(null, 0)), e2.push = r2.bind(null, e2.push.bind(e2));
  })(), i.nc = void 0;
})();
