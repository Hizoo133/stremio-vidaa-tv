"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([[1088], { 1546: (e, n, t) => {
  var r = t(2439), o = t(2086), i = t(2619), l = t(1395), a = t(3228), s = t(9464), u = t(1782), d = t(3756)("some", TypeError);
  r({ target: "Iterator", proto: true, real: true, forced: d }, { some: function(e2) {
    a(this);
    try {
      l(e2);
    } catch (e3) {
      u(this, "throw", e3);
    }
    if (d) return o(d, this, e2);
    var n2 = s(this), t2 = 0;
    return i(n2, (function(n3, r2) {
      if (e2(n3, t2++)) return r2();
    }), { IS_RECORD: true, INTERRUPTED: true }).stopped;
  } });
}, 2286: (e, n, t) => {
  t.d(n, { A: () => a });
  var r = t(4474), o = t.n(r), i = t(2670), l = t.n(i)()(o());
  l.push([e.id, ".control-HLtoF {\n  position: relative;\n  height: 4.5rem;\n  width: 4.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  border-radius: 1rem;\n  transition: background-color 0.1s ease-in;\n}\n.control-HLtoF .icon-CHgvN {\n  height: 3rem;\n  color: hsla(0, 0%, 100%, 0.9);\n  transition: color 0.1s ease-in;\n}\n.control-HLtoF.disabled-FnEVm {\n  opacity: 0.5;\n}\n.control-HLtoF:hover,\n.control-HLtoF[focused] {\n  background-color: hsla(0, 0%, 100%, 0.9);\n}\n.control-HLtoF:hover .icon-CHgvN,\n.control-HLtoF[focused] .icon-CHgvN {\n  color: #0c0c10;\n}\n", ""]), l.locals = { control: "control-HLtoF", icon: "icon-CHgvN", disabled: "disabled-FnEVm" };
  const a = l;
}, 2491: (e, n, t) => {
  t(1546);
}, 2886: (e, n, t) => {
  var r = t(2439), o = t(2086), i = t(1395), l = t(5994), a = t(2536), s = t(2619);
  r({ target: "Promise", stat: true, forced: t(574) }, { allSettled: function(e2) {
    var n2 = this, t2 = l.f(n2), r2 = t2.resolve, u = t2.reject, d = a((function() {
      var t3 = i(n2.resolve), l2 = [], a2 = 0, u2 = 1;
      s(e2, (function(e3) {
        var i2 = a2++, s2 = false;
        u2++, o(t3, n2, e3).then((function(e4) {
          s2 || (s2 = true, l2[i2] = { status: "fulfilled", value: e4 }, --u2 || r2(l2));
        }), (function(e4) {
          s2 || (s2 = true, l2[i2] = { status: "rejected", reason: e4 }, --u2 || r2(l2));
        }));
      })), --u2 || r2(l2);
    }));
    return d.error && u(d.value), t2.promise;
  } });
}, 4303: (e, n, t) => {
  t.d(n, { Mj: () => E });
  var r = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, o = function(e2) {
    return "string" == typeof e2 ? e2.length > 0 : "number" == typeof e2;
  }, i = function(e2, n2, t2) {
    return void 0 === n2 && (n2 = 0), void 0 === t2 && (t2 = Math.pow(10, n2)), Math.round(t2 * e2) / t2 + 0;
  }, l = function(e2, n2, t2) {
    return void 0 === n2 && (n2 = 0), void 0 === t2 && (t2 = 1), e2 > t2 ? t2 : e2 > n2 ? e2 : n2;
  }, a = function(e2) {
    return (e2 = isFinite(e2) ? e2 % 360 : 0) > 0 ? e2 : e2 + 360;
  }, s = function(e2) {
    return { r: l(e2.r, 0, 255), g: l(e2.g, 0, 255), b: l(e2.b, 0, 255), a: l(e2.a) };
  }, u = function(e2) {
    return { r: i(e2.r), g: i(e2.g), b: i(e2.b), a: i(e2.a, 3) };
  }, d = /^#([0-9a-f]{3,8})$/i, c = function(e2) {
    var n2 = e2.toString(16);
    return n2.length < 2 ? "0" + n2 : n2;
  }, g = function(e2) {
    var n2 = e2.r, t2 = e2.g, r2 = e2.b, o2 = e2.a, i2 = Math.max(n2, t2, r2), l2 = i2 - Math.min(n2, t2, r2), a2 = l2 ? i2 === n2 ? (t2 - r2) / l2 : i2 === t2 ? 2 + (r2 - n2) / l2 : 4 + (n2 - t2) / l2 : 0;
    return { h: 60 * (a2 < 0 ? a2 + 6 : a2), s: i2 ? l2 / i2 * 100 : 0, v: i2 / 255 * 100, a: o2 };
  }, p = function(e2) {
    var n2 = e2.h, t2 = e2.s, r2 = e2.v, o2 = e2.a;
    n2 = n2 / 360 * 6, t2 /= 100, r2 /= 100;
    var i2 = Math.floor(n2), l2 = r2 * (1 - t2), a2 = r2 * (1 - (n2 - i2) * t2), s2 = r2 * (1 - (1 - n2 + i2) * t2), u2 = i2 % 6;
    return { r: 255 * [r2, a2, l2, l2, s2, r2][u2], g: 255 * [s2, r2, r2, a2, l2, l2][u2], b: 255 * [l2, l2, s2, r2, r2, a2][u2], a: o2 };
  }, b = function(e2) {
    return { h: a(e2.h), s: l(e2.s, 0, 100), l: l(e2.l, 0, 100), a: l(e2.a) };
  }, m = function(e2) {
    return { h: i(e2.h), s: i(e2.s), l: i(e2.l), a: i(e2.a, 3) };
  }, v = function(e2) {
    return p((t2 = (n2 = e2).s, { h: n2.h, s: (t2 *= ((r2 = n2.l) < 50 ? r2 : 100 - r2) / 100) > 0 ? 2 * t2 / (r2 + t2) * 100 : 0, v: r2 + t2, a: n2.a }));
    var n2, t2, r2;
  }, h = function(e2) {
    return { h: (n2 = g(e2)).h, s: (o2 = (200 - (t2 = n2.s)) * (r2 = n2.v) / 100) > 0 && o2 < 200 ? t2 * r2 / 100 / (o2 <= 100 ? o2 : 200 - o2) * 100 : 0, l: o2 / 2, a: n2.a };
    var n2, t2, r2, o2;
  }, f = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, k = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, y = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, S = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, x = { string: [[function(e2) {
    var n2 = d.exec(e2);
    return n2 ? (e2 = n2[1]).length <= 4 ? { r: parseInt(e2[0] + e2[0], 16), g: parseInt(e2[1] + e2[1], 16), b: parseInt(e2[2] + e2[2], 16), a: 4 === e2.length ? i(parseInt(e2[3] + e2[3], 16) / 255, 2) : 1 } : 6 === e2.length || 8 === e2.length ? { r: parseInt(e2.substr(0, 2), 16), g: parseInt(e2.substr(2, 2), 16), b: parseInt(e2.substr(4, 2), 16), a: 8 === e2.length ? i(parseInt(e2.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
  }, "hex"], [function(e2) {
    var n2 = y.exec(e2) || S.exec(e2);
    return n2 ? n2[2] !== n2[4] || n2[4] !== n2[6] ? null : s({ r: Number(n2[1]) / (n2[2] ? 100 / 255 : 1), g: Number(n2[3]) / (n2[4] ? 100 / 255 : 1), b: Number(n2[5]) / (n2[6] ? 100 / 255 : 1), a: void 0 === n2[7] ? 1 : Number(n2[7]) / (n2[8] ? 100 : 1) }) : null;
  }, "rgb"], [function(e2) {
    var n2 = f.exec(e2) || k.exec(e2);
    if (!n2) return null;
    var t2, o2, i2 = b({ h: (t2 = n2[1], o2 = n2[2], void 0 === o2 && (o2 = "deg"), Number(t2) * (r[o2] || 1)), s: Number(n2[3]), l: Number(n2[4]), a: void 0 === n2[5] ? 1 : Number(n2[5]) / (n2[6] ? 100 : 1) });
    return v(i2);
  }, "hsl"]], object: [[function(e2) {
    var n2 = e2.r, t2 = e2.g, r2 = e2.b, i2 = e2.a, l2 = void 0 === i2 ? 1 : i2;
    return o(n2) && o(t2) && o(r2) ? s({ r: Number(n2), g: Number(t2), b: Number(r2), a: Number(l2) }) : null;
  }, "rgb"], [function(e2) {
    var n2 = e2.h, t2 = e2.s, r2 = e2.l, i2 = e2.a, l2 = void 0 === i2 ? 1 : i2;
    if (!o(n2) || !o(t2) || !o(r2)) return null;
    var a2 = b({ h: Number(n2), s: Number(t2), l: Number(r2), a: Number(l2) });
    return v(a2);
  }, "hsl"], [function(e2) {
    var n2 = e2.h, t2 = e2.s, r2 = e2.v, i2 = e2.a, s2 = void 0 === i2 ? 1 : i2;
    if (!o(n2) || !o(t2) || !o(r2)) return null;
    var u2 = (function(e3) {
      return { h: a(e3.h), s: l(e3.s, 0, 100), v: l(e3.v, 0, 100), a: l(e3.a) };
    })({ h: Number(n2), s: Number(t2), v: Number(r2), a: Number(s2) });
    return p(u2);
  }, "hsv"]] }, w = function(e2, n2) {
    for (var t2 = 0; t2 < n2.length; t2++) {
      var r2 = n2[t2][0](e2);
      if (r2) return [r2, n2[t2][1]];
    }
    return [null, void 0];
  }, T = function(e2) {
    return "string" == typeof e2 ? w(e2.trim(), x.string) : "object" == typeof e2 && null !== e2 ? w(e2, x.object) : [null, void 0];
  }, A = function(e2, n2) {
    var t2 = h(e2);
    return { h: t2.h, s: l(t2.s + 100 * n2, 0, 100), l: t2.l, a: t2.a };
  }, C = function(e2) {
    return (299 * e2.r + 587 * e2.g + 114 * e2.b) / 1e3 / 255;
  }, P = function(e2, n2) {
    var t2 = h(e2);
    return { h: t2.h, s: t2.s, l: l(t2.l + 100 * n2, 0, 100), a: t2.a };
  }, I = (function() {
    function e2(e3) {
      this.parsed = T(e3)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
    }
    return e2.prototype.isValid = function() {
      return null !== this.parsed;
    }, e2.prototype.brightness = function() {
      return i(C(this.rgba), 2);
    }, e2.prototype.isDark = function() {
      return C(this.rgba) < 0.5;
    }, e2.prototype.isLight = function() {
      return C(this.rgba) >= 0.5;
    }, e2.prototype.toHex = function() {
      return n2 = (e3 = u(this.rgba)).r, t2 = e3.g, r2 = e3.b, l2 = (o2 = e3.a) < 1 ? c(i(255 * o2)) : "", "#" + c(n2) + c(t2) + c(r2) + l2;
      var e3, n2, t2, r2, o2, l2;
    }, e2.prototype.toRgb = function() {
      return u(this.rgba);
    }, e2.prototype.toRgbString = function() {
      return n2 = (e3 = u(this.rgba)).r, t2 = e3.g, r2 = e3.b, (o2 = e3.a) < 1 ? "rgba(" + n2 + ", " + t2 + ", " + r2 + ", " + o2 + ")" : "rgb(" + n2 + ", " + t2 + ", " + r2 + ")";
      var e3, n2, t2, r2, o2;
    }, e2.prototype.toHsl = function() {
      return m(h(this.rgba));
    }, e2.prototype.toHslString = function() {
      return n2 = (e3 = m(h(this.rgba))).h, t2 = e3.s, r2 = e3.l, (o2 = e3.a) < 1 ? "hsla(" + n2 + ", " + t2 + "%, " + r2 + "%, " + o2 + ")" : "hsl(" + n2 + ", " + t2 + "%, " + r2 + "%)";
      var e3, n2, t2, r2, o2;
    }, e2.prototype.toHsv = function() {
      return e3 = g(this.rgba), { h: i(e3.h), s: i(e3.s), v: i(e3.v), a: i(e3.a, 3) };
      var e3;
    }, e2.prototype.invert = function() {
      return E({ r: 255 - (e3 = this.rgba).r, g: 255 - e3.g, b: 255 - e3.b, a: e3.a });
      var e3;
    }, e2.prototype.saturate = function(e3) {
      return void 0 === e3 && (e3 = 0.1), E(A(this.rgba, e3));
    }, e2.prototype.desaturate = function(e3) {
      return void 0 === e3 && (e3 = 0.1), E(A(this.rgba, -e3));
    }, e2.prototype.grayscale = function() {
      return E(A(this.rgba, -1));
    }, e2.prototype.lighten = function(e3) {
      return void 0 === e3 && (e3 = 0.1), E(P(this.rgba, e3));
    }, e2.prototype.darken = function(e3) {
      return void 0 === e3 && (e3 = 0.1), E(P(this.rgba, -e3));
    }, e2.prototype.rotate = function(e3) {
      return void 0 === e3 && (e3 = 15), this.hue(this.hue() + e3);
    }, e2.prototype.alpha = function(e3) {
      return "number" == typeof e3 ? E({ r: (n2 = this.rgba).r, g: n2.g, b: n2.b, a: e3 }) : i(this.rgba.a, 3);
      var n2;
    }, e2.prototype.hue = function(e3) {
      var n2 = h(this.rgba);
      return "number" == typeof e3 ? E({ h: e3, s: n2.s, l: n2.l, a: n2.a }) : i(n2.h);
    }, e2.prototype.isEqual = function(e3) {
      return this.toHex() === E(e3).toHex();
    }, e2;
  })(), E = function(e2) {
    return e2 instanceof I ? e2 : new I(e2);
  };
}, 4508: (e, n, t) => {
  t.d(n, { A: () => a });
  var r = t(4474), o = t.n(r), i = t(2670), l = t.n(i)()(o());
  l.push([e.id, ".player-SmYw4 .video-QdC89 {\n  z-index: 0;\n  width: 100%;\n  height: 100%;\n}\n.player-SmYw4 .video-QdC89 * {\n  font-size: inherit;\n}\n.player-SmYw4 .loading-l3QUM,\n.player-SmYw4 .error-QTZdj {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.player-SmYw4 .loading-l3QUM,\n.player-SmYw4 .error-QTZdj {\n  background: transparent;\n}\n.player-SmYw4 .background-image-jHLNn {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n  opacity: 0;\n  will-change: opacity;\n}\n.player-SmYw4 .background-image-jHLNn.active-mN_KO {\n  opacity: 0.6;\n}\n.player-SmYw4 .background-image-jHLNn.background-image-720p-bH4Gd {\n  width: 153.8vw;\n  height: 153.8vh;\n}\n.player-SmYw4 .loading-l3QUM .image-xXXbk {\n  height: 6rem;\n  animation: fadeInOut-U1eV3 2s ease-in-out infinite;\n}\n.player-SmYw4 .error-QTZdj {\n  flex-direction: column;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.player-SmYw4 .error-QTZdj .icon-SQtWN {\n  height: 2rem;\n  margin-bottom: 0.5rem;\n}\n.player-SmYw4 .overlay-A6U6H {\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem 2rem;\n  background: linear-gradient(0deg, #0c0c10 0%, transparent 100%);\n}\n.player-SmYw4 .overlay-A6U6H > * {\n  margin: 0.5rem 0 0.5rem 0;\n}\n.player-SmYw4 .overlay-A6U6H > :first-child {\n  margin-top: 0;\n}\n.player-SmYw4 .overlay-A6U6H > :last-child {\n  margin-bottom: 0;\n}\n.player-SmYw4 .overlay-A6U6H .info-zWSOJ {\n  font-size: 2rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.player-SmYw4 .overlay-A6U6H .controls-Vovp4 {\n  display: flex;\n  flex-direction: row;\n}\n.player-SmYw4 .overlay-A6U6H .controls-Vovp4 > * {\n  margin: 0 0.5rem 0 0.5rem;\n}\n.player-SmYw4 .overlay-A6U6H .controls-Vovp4 > :first-child {\n  margin-left: 0;\n}\n.player-SmYw4 .overlay-A6U6H .controls-Vovp4 > :last-child {\n  margin-right: 0;\n}\n.player-SmYw4 .overlay-A6U6H .footer-dgflJ {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.player-SmYw4 .overlay-A6U6H .footer-dgflJ .time-G7GFb {\n  font-size: 1.3rem;\n  font-weight: 500;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.player-SmYw4 .menu-back-button-THFSD {\n  z-index: 100;\n}\n.player-SmYw4 .menu-KhHHT {\n  z-index: 2;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  color: #0c0c10 !important;\n  background-color: #0c0c10;\n}\n@keyframes fadeInOut-U1eV3 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n", ""]), l.locals = { player: "player-SmYw4", video: "video-QdC89", loading: "loading-l3QUM", error: "error-QTZdj", "background-image": "background-image-jHLNn", active: "active-mN_KO", "background-image-720p": "background-image-720p-bH4Gd", image: "image-xXXbk", fadeInOut: "fadeInOut-U1eV3", icon: "icon-SQtWN", overlay: "overlay-A6U6H", info: "info-zWSOJ", controls: "controls-Vovp4", footer: "footer-dgflJ", time: "time-G7GFb", "menu-back-button": "menu-back-button-THFSD", menu: "menu-KhHHT" };
  const a = l;
}, 5438: (e, n, t) => {
  t.d(n, { A: () => a });
  var r = t(4474), o = t.n(r), i = t(2670), l = t.n(i)()(o());
  l.push([e.id, ".intro-outro-popup-U6iEs {\n  position: absolute;\n  z-index: 3;\n  bottom: 8rem;\n  right: 0;\n  margin: 2rem;\n  display: flex;\n  flex-direction: row;\n}\n.intro-outro-popup-U6iEs > * {\n  margin: 0 1rem 0 1rem;\n}\n.intro-outro-popup-U6iEs > :first-child {\n  margin-left: 0;\n}\n.intro-outro-popup-U6iEs > :last-child {\n  margin-right: 0;\n}\n.intro-outro-popup-U6iEs .button-FRNRT {\n  background-color: #0c0c10;\n  border: 0.2rem solid transparent;\n}\n.intro-outro-popup-U6iEs .button-FRNRT[focused],\n.intro-outro-popup-U6iEs .button-FRNRT:hover {\n  background-color: #2a2a2d;\n  border: 0.2rem solid rgba(255, 255, 255, 0.5);\n}\n.intro-outro-popup-U6iEs .button-FRNRT.confirm-laDC1[focused],\n.intro-outro-popup-U6iEs .button-FRNRT.confirm-laDC1:hover {\n  background-color: #2a2a2d;\n  border: 0.2rem solid rgba(255, 255, 255, 0.5);\n}\n", ""]), l.locals = { "intro-outro-popup": "intro-outro-popup-U6iEs", button: "button-FRNRT", confirm: "confirm-laDC1" };
  const a = l;
}, 6298: (e, n, t) => {
  t.d(n, { A: () => a });
  var r = t(4474), o = t.n(r), i = t(2670), l = t.n(i)()(o());
  l.push([e.id, ".seekbar-oerpP {\n  position: relative;\n  height: 2rem;\n  width: 100%;\n}\n.seekbar-oerpP .track-Xfs0A {\n  position: relative;\n  top: calc((2rem / 2) - (0.6rem / 2));\n  height: 0.6rem;\n  border-radius: 1em;\n  background-color: hsla(0, 0%, 100%, 0.1);\n  overflow: hidden;\n}\n.seekbar-oerpP .track-Xfs0A .inner-vZhnL {\n  position: absolute;\n  height: 100%;\n  width: 0;\n}\n.seekbar-oerpP .track-Xfs0A .inner-vZhnL.before-LMEzS {\n  z-index: 0;\n  background-color: hsla(0, 0%, 100%, 0.1);\n}\n.seekbar-oerpP .track-Xfs0A .inner-vZhnL.after-gTKS0 {\n  z-index: 1;\n  background-color: #7b5bf5;\n}\n.seekbar-oerpP .thumb-PyYAw {\n  z-index: 4;\n  position: absolute;\n  top: calc((2rem / 2) - (1.5rem / 2));\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 100%;\n  transform: translateX(-50%);\n  transition: background-color 0.1s ease-in-out;\n}\n.seekbar-oerpP .thumb-PyYAw:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  border-radius: 100%;\n  box-shadow: 0 0 0 0.25rem #7b5bf5 inset;\n  filter: brightness(130%);\n  opacity: 0;\n  transition: opacity 0.1s ease-in-out;\n}\n.seekbar-oerpP .intro-v8yfi,\n.seekbar-oerpP .outro-H7T8A {\n  position: absolute;\n  z-index: 3;\n  top: calc((2rem / 2) - (0.6rem / 2));\n  height: 0.6rem;\n  background-color: #f6c700;\n  opacity: 0.3;\n  overflow: visible;\n  width: 100%;\n}\n.seekbar-oerpP .intro-v8yfi.rounded-eaQ4s {\n  border-radius: 0.5rem 0 0 0.5rem;\n}\n.seekbar-oerpP .outro-H7T8A {\n  border-radius: 0 0.5rem 0.5rem 0;\n}\n.seekbar-oerpP .marker-cWsF7 {\n  position: absolute;\n  z-index: 3;\n  width: 0.5rem;\n  height: 0.5rem;\n  top: 35%;\n  transform: translate(-50%, -50%) rotate(45deg);\n  background-color: #f6c700;\n  pointer-events: none;\n}\n.seekbar-oerpP[focused] .thumb-PyYAw,\n.seekbar-oerpP:hover .thumb-PyYAw {\n  background-color: #7b5bf5;\n}\n.seekbar-oerpP[focused] .thumb-PyYAw:after,\n.seekbar-oerpP:hover .thumb-PyYAw:after {\n  opacity: 1;\n}\n", ""]), l.locals = { seekbar: "seekbar-oerpP", track: "track-Xfs0A", inner: "inner-vZhnL", before: "before-LMEzS", after: "after-gTKS0", thumb: "thumb-PyYAw", intro: "intro-v8yfi", outro: "outro-H7T8A", rounded: "rounded-eaQ4s", marker: "marker-cWsF7" };
  const a = l;
}, 6716: (e, n, t) => {
  t.d(n, { A: () => a });
  var r = t(4474), o = t.n(r), i = t(2670), l = t.n(i)()(o());
  l.push([e.id, ".overlay-setting-nlIkp {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 8.5rem;\n}\n.overlay-setting-nlIkp .container-kOFqc {\n  flex: 0 0 auto;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 0 2rem;\n  border-radius: 0 0 1rem 1rem;\n  background-color: #0c0c10;\n  box-shadow: 0 0 45px rgba(0, 0, 0, 0.4);\n}\n.overlay-setting-nlIkp .container-kOFqc > * {\n  margin: 0 1rem 0 1rem;\n}\n.overlay-setting-nlIkp .container-kOFqc > :first-child {\n  margin-left: 0;\n}\n.overlay-setting-nlIkp .container-kOFqc > :last-child {\n  margin-right: 0;\n}\n.overlay-setting-nlIkp .container-kOFqc .value-ST3NR {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  min-width: 5.5rem;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n", ""]), l.locals = { "overlay-setting": "overlay-setting-nlIkp", container: "container-kOFqc", value: "value-ST3NR" };
  const a = l;
}, 6740: (e, n, t) => {
  t.d(n, { A: () => a });
  var r = t(4474), o = t.n(r), i = t(2670), l = t.n(i)()(o());
  l.push([e.id, ".next-video-popup-grGJH {\n  position: absolute;\n  z-index: 3;\n  bottom: 0;\n  right: 0;\n  margin: 2rem;\n  width: 50rem;\n  height: 18.5rem;\n  display: flex;\n  flex-direction: row;\n}\n.next-video-popup-grGJH .poster-container-uuOe3 {\n  flex: 1 1 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #141418;\n  border-radius: 0.75rem 0 0 0.75rem;\n}\n.next-video-popup-grGJH .poster-container-uuOe3 .thumbnail-u5ygm {\n  flex: none;\n  width: 100%;\n  height: 100%;\n  object-position: center;\n  object-fit: cover;\n  border-radius: 0.75rem 0 0 0.75rem;\n}\n.next-video-popup-grGJH .poster-container-uuOe3 .thumbnail-u5ygm.blurred-O1BYX {\n  filter: blur(1rem);\n  -webkit-filter: blur(1rem);\n}\n.next-video-popup-grGJH .poster-container-uuOe3 .placeholder-icon-SAq3k {\n  flex: none;\n  width: 80%;\n  height: 50%;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.next-video-popup-grGJH .info-container-AImXM {\n  flex: 1 1 55%;\n  display: flex;\n  flex-direction: column;\n  max-width: 60%;\n  background: #0c0c10;\n  border-radius: 0 0.75rem 0.75rem 0;\n}\n.next-video-popup-grGJH .info-container-AImXM .content-container-E0qCr {\n  flex: auto;\n  padding: 2rem;\n}\n.next-video-popup-grGJH .info-container-AImXM .content-container-E0qCr .name-wXABQ {\n  flex: none;\n  margin-bottom: 1rem;\n  font-size: 2rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.next-video-popup-grGJH .info-container-AImXM .content-container-E0qCr .name-wXABQ .label-xfZYs {\n  color: hsla(0, 0%, 100%, 0.5);\n}\n.next-video-popup-grGJH .info-container-AImXM .content-container-E0qCr .title-HHbHx {\n  flex: none;\n  margin-bottom: 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n}\n.next-video-popup-grGJH .info-container-AImXM .buttons-container-gbiwj {\n  display: flex;\n  flex-direction: row;\n  padding: 0 2rem 2rem;\n}\n.next-video-popup-grGJH .info-container-AImXM .buttons-container-gbiwj > * {\n  margin: 0 0.5rem 0 0.5rem;\n}\n.next-video-popup-grGJH .info-container-AImXM .buttons-container-gbiwj > :first-child {\n  margin-left: 0;\n}\n.next-video-popup-grGJH .info-container-AImXM .buttons-container-gbiwj > :last-child {\n  margin-right: 0;\n}\n", ""]), l.locals = { "next-video-popup": "next-video-popup-grGJH", "poster-container": "poster-container-uuOe3", thumbnail: "thumbnail-u5ygm", blurred: "blurred-O1BYX", "placeholder-icon": "placeholder-icon-SAq3k", "info-container": "info-container-AImXM", "content-container": "content-container-E0qCr", name: "name-wXABQ", label: "label-xfZYs", title: "title-HHbHx", "buttons-container": "buttons-container-gbiwj" };
  const a = l;
}, 7488: (e, n, t) => {
  t.r(n), t.d(n, { default: () => ve });
  var r = t(7781), o = t(2555), i = (t(4999), t(6471), t(6399), t(1012), t(7621), t(7100), t(2408)), l = t(9170), a = t(365), s = t(1200), u = t(3497), d = t(1517), c = t(2497), g = t(6066), p = t(9238), b = t(8688), m = t(330);
  t(7716), t(2886);
  const v = () => {
    let e2;
    const [n2, r2] = (0, o.n5)(null), [i2, l2] = (0, o.n5)(false), [a2, s2] = (0, o.n5)(false), [u2, d2] = (0, o.n5)(null), [c2, g2] = (0, o.n5)(false), [p2, b2] = (0, o.n5)({ manifest: null, stream: null, videoParams: null, loaded: null, paused: null, time: null, duration: null, buffering: null, buffered: null, playbackSpeed: null, selectedSubtitlesTrackId: null, subtitlesTracks: [], subtitlesSize: null, subtitlesTextColor: null, subtitlesOutlineColor: null, subtitlesBackgroundColor: null, subtitlesOffset: null, subtitlesOpacity: null, selectedExtraSubtitlesTrackId: null, extraSubtitlesTracks: [], extraSubtitlesDelay: null, extraSubtitlesSize: null, extraSubtitlesTextColor: null, extraSubtitlesOutlineColor: null, extraSubtitlesBackgroundColor: null, extraSubtitlesOffset: null, extraSubtitlesOpacity: null, selectedAudioTrackId: null, audioTracks: [] }), m2 = (t2, r3) => {
      if (e2) try {
        var o2;
        null === (o2 = n2()) || void 0 === o2 || o2.dispatch(t2, { containerElement: e2, ...r3 });
      } catch (e3) {
        console.error("Video:", e3);
      }
    }, v2 = () => {
      m2({ type: "command", commandName: "unload" }), s2(false);
    }, h2 = (e3, n3) => {
      m2({ type: "setProp", propName: e3, propValue: n3 });
    }, f2 = (e3) => {
      console.error("Video:", e3), d2(e3);
    }, k2 = () => {
      g2(true);
    }, y2 = (e3, n3) => {
      b2(((t2) => ({ ...t2, [e3]: n3 })));
    }, S2 = (e3) => {
      e3.props.forEach(((e4) => m2({ type: "observeProp", propName: e4 }))), b2(((n3) => ({ ...n3, manifest: e3 })));
    };
    return (0, o.Rc)((() => {
      t.e(6180).then(t.t.bind(t, 9794, 23)).then((({ default: e3 }) => {
        const n3 = new e3();
        r2(n3), n3.on("error", f2), n3.on("ended", k2), n3.on("propChanged", y2), n3.on("propValue", y2), n3.on("implementationChanged", S2);
      }));
    })), (0, o.Ki)((() => {
      var e3;
      v2(), null === (e3 = n2()) || void 0 === e3 || e3.destroy(), r2(null);
    })), { ref: (n3) => {
      e2 = n3, l2(true);
    }, state: p2, ready: () => null !== n2() && i2(), loaded: a2, error: u2, ended: c2, dispatch: m2, load: (e3, n3) => {
      m2({ type: "command", commandName: "load", commandArgs: e3 }, n3), s2(true);
    }, unload: v2, addExtraSubtitlesTracks: (e3) => {
      m2({ type: "command", commandName: "addExtraSubtitlesTracks", commandArgs: { tracks: e3 } });
    }, selectSubtitlesTrack: (e3) => {
      h2("selectedSubtitlesTrackId", "string" == typeof e3 ? e3 : e3.id), h2("selectedExtraSubtitlesTrackId", null);
    }, selectExtraSubtitlesTrack: (e3) => {
      h2("selectedExtraSubtitlesTrackId", "string" == typeof e3 ? e3 : e3.id), h2("selectedSubtitlesTrackId", null);
    }, selectAudioTrack: (e3) => {
      h2("selectedAudioTrackId", "string" == typeof e3 ? e3 : e3.id);
    }, disableSubtitlesTracks: () => {
      h2("selectedSubtitlesTrackId", null), h2("selectedExtraSubtitlesTrackId", null);
    }, setProp: h2 };
  };
  t(2517), t(8267), t(4965), t(9024), t(5381), t(774), t(8109), t(6705), t(1273), t(2491);
  var h = t(4303);
  const f = (e2) => (0, h.Mj)(e2).toRgbString(), k = (e2) => e2.map((({ id: e3, lang: n2, label: t2, embedded: r2, origin: o2 }) => {
    var i2, l2;
    const a2 = null !== (i2 = null !== (l2 = b.eo.label(n2)) && void 0 !== l2 ? l2 : n2) && void 0 !== i2 ? i2 : "UNKNOWN";
    return { id: e3, label: r2 && t2 ? b.eo.label(t2) : a2, group: a2, tag: r2 ? "EMBEDDED" : null != o2 ? o2 : null };
  })), y = (e2) => [...new Set(e2.map((({ group: e3 }) => e3)).filter(((e3) => null != e3)))].map(((n2) => {
    const t2 = e2.filter(((e3) => e3.group === n2));
    return { label: n2, selected: () => t2.some((({ selected: e3 }) => e3 && e3())), options: t2 };
  })).sort(((e3, n2) => "UNKNOWN" === e3.label ? 0 : e3.label.toLowerCase().localeCompare(n2.label.toLowerCase()))), S = (e2, n2, t2, r2, o2, l2, a2) => {
    const { t: d2 } = (0, u.B)(), c2 = (0, s.W6)(), { settings: g2, updateSettings: p2 } = e2, m2 = Array.from(Array(8).keys(), ((e3) => 0.25 * e3 + 0.25)).reverse().map(((e3) => ({ label: `x ${e3}`, selected: () => e3 === t2.state().playbackSpeed, onClick: () => t2.setProp("playbackSpeed", e3) }))), { audioTracks: v2, subtitlesTracks: h2, extraSubtitlesTracks: S2, extraSubtitlesDelay: x2, selectedSubtitlesTrackId: w2, selectedExtraSubtitlesTrackId: T2, subtitlesSize: A2, subtitlesTextColor: C2, subtitlesOutlineColor: P2, subtitlesBackgroundColor: I2, subtitlesOpacity: E2, subtitlesOffset: O2, extraSubtitlesSize: H2, extraSubtitlesTextColor: Y2, extraSubtitlesOutlineColor: N2, extraSubtitlesBackgroundColor: R2, extraSubtitlesOpacity: L2, extraSubtitlesOffset: $2 } = (0, i.J)(t2.state);
    return { speed: m2, subtitles: () => {
      var e3;
      return [{ label: "LANGUAGE", options: [{ label: "NONE", selected: () => null === w2() && null === T2(), onClick: () => {
        t2.setProp("selectedSubtitlesTrackId", null), t2.setProp("selectedExtraSubtitlesTrackId", null);
      } }, ...y([...k(h2()).map((({ id: e4, label: r3, group: o3, tag: i2 }) => ({ label: r3, group: o3, tag: i2, selected: () => e4 === w2(), onClick: () => {
        t2.setProp("selectedSubtitlesTrackId", e4), t2.setProp("selectedExtraSubtitlesTrackId", null), n2.updateStream({ subtitleTrack: { id: e4, embedded: true } });
      } }))), ...k(S2()).map((({ id: e4, label: r3, group: o3, tag: i2 }) => ({ label: r3, group: o3, tag: i2, selected: () => e4 === T2(), onClick: () => {
        t2.setProp("selectedExtraSubtitlesTrackId", e4), t2.setProp("selectedSubtitlesTrackId", null), n2.updateStream({ subtitleTrack: { id: e4, embedded: false } });
      } })))])] }, { disabled: () => null === T2(), label: "DELAY", options: [{ icon: "more-vertical", label: (null !== (e3 = x2()) && void 0 !== e3 ? e3 : 0) / 1e3 + "s", onClick: r2 }] }, { disabled: () => null === H2() && null === A2(), label: "SIZE", options: [{ icon: "more-vertical", label: `${g2().subtitlesSize} %`, onClick: o2 }] }, { disabled: () => null === $2() && null === O2(), label: "SUBSPICKER_VERTICAL_OFFSET", options: [{ icon: "more-vertical", label: `${g2().subtitlesOffset} %`, onClick: a2 }] }, { disabled: () => null === L2() && null === E2(), label: d2("OPACITY"), options: [{ icon: "more-vertical", label: `${g2().subtitlesOpacity} %`, onClick: l2 }] }, { disabled: () => null === Y2() && null === C2(), label: "TEXT_COLOR", options: b.aH.R1.filter(((e4) => "rgba(0, 0, 0, 0)" !== e4)).map(((e4) => ({ color: e4, selected: () => f(g2().subtitlesTextColor) === e4, onClick: () => p2({ subtitlesTextColor: e4 }) }))) }, { disabled: () => null === N2() && null === P2(), label: "OUTLINE_COLOR", options: b.aH.R1.map(((e4) => ({ color: e4, selected: () => f(g2().subtitlesOutlineColor) === e4, onClick: () => p2({ subtitlesOutlineColor: e4 }) }))) }, { disabled: () => null === R2() && null === I2(), label: "BACKGROUND_COLOR", options: b.aH.R1.map(((e4) => ({ color: e4, selected: () => f(g2().subtitlesBackgroundColor) === e4, onClick: () => p2({ subtitlesBackgroundColor: e4 }) }))) }];
    }, audio: () => k(v2()).map((({ id: e3, label: r3 }) => ({ label: r3, selected: () => t2.state().selectedAudioTrackId === e3, onClick: () => {
      t2.setProp("selectedAudioTrackId", e3), n2.updateStream({ audioTrack: { id: e3 } });
    } }))), videos: () => {
      var e3, t3;
      return null !== (e3 = null === (t3 = n2.state().metaItem) || void 0 === t3 || null === (t3 = t3.ready) || void 0 === t3 ? void 0 : t3.videos.filter((({ season: e4 }) => {
        var t4, r3;
        return null === (t4 = n2.state().seriesInfo) || void 0 === t4 || !t4.season || e4 === (null === (r3 = n2.state().seriesInfo) || void 0 === r3 ? void 0 : r3.season);
      })).map((({ id: e4, title: t4, episode: r3, deepLinks: o3 }) => ({ label: `${r3 ? `${d2("EPISODE").slice(0, 2)} ${r3} - ` : ""}${t4}`, selected: () => {
        var t5;
        return (null === (t5 = n2.state().selected) || void 0 === t5 ? void 0 : t5.streamRequest.path.id) === e4;
      }, onClick: () => c2.navigate(o3.metaDetailsStreams, true) })))) && void 0 !== e3 ? e3 : [];
    } };
  };
  var x = t(2434), w = t.n(x), T = t(5235), A = t.n(T), C = t(6049), P = t.n(C), I = t(8938), E = t.n(I), O = t(502), H = t.n(O), Y = t(3611), N = t.n(Y), R = t(2286), L = {};
  L.styleTagTransform = N(), L.setAttributes = E(), L.insert = P().bind(null, "head"), L.domAPI = A(), L.insertStyleElement = H();
  w()(R.A, L);
  const $ = R.A && R.A.locals ? R.A.locals : void 0, D = (e2) => {
    const n2 = () => {
      !e2.disabled && e2.onClick();
    };
    return (0, o.a0)(p.zo, { get class() {
      return $.control;
    }, get classList() {
      return { [$.disabled]: e2.disabled };
    }, get autoFocus() {
      return e2.autoFocus;
    }, onPress: n2, onClick: n2, get children() {
      return (0, o.a0)(o.wv, { get when() {
        return e2.icon;
      }, keyed: true, children: (e3) => (0, o.a0)(l.A, { get class() {
        return $.icon;
      }, name: e3 }) });
    } });
  };
  var z = t(7500), F = t.n(z), U = t(6298), V = {};
  V.styleTagTransform = N(), V.setAttributes = E(), V.insert = P().bind(null, "head"), V.domAPI = A(), V.insertStyleElement = H();
  w()(U.A, V);
  const M = U.A && U.A.locals ? U.A.locals : void 0;
  var _ = (0, r.vs)("<div>"), j = (0, r.vs)("<div><div><div></div><div></div></div><div>");
  const G = (e2, n2, t2) => Math.min(Math.max(e2, n2), t2), B = (e2, n2, t2) => null !== e2 && null !== n2 && null !== t2 ? G(parseFloat((e2 / t2 * 100).toFixed(2)), n2, t2) : 0, X = (e2) => {
    let n2;
    const { ref: t2, focus: i2 } = (0, p.Wc)(), l2 = (0, p.cq)(), a2 = (0, b.SR)(500), s2 = (0, b.v3)(100), [u2, d2] = (0, o.n5)(null), [c2, g2] = (0, o.n5)(e2.step), m2 = (0, o.To)((() => {
      var n3;
      const t3 = null !== (n3 = u2()) && void 0 !== n3 ? n3 : e2.value;
      return B(t3, 0, e2.duration);
    })), v2 = (0, o.To)((() => B(e2.buffered, 0, e2.duration))), h2 = (0, o.To)((() => {
      var n3;
      const t3 = null === (n3 = e2.introOutro) || void 0 === n3 ? void 0 : n3.intro;
      return Boolean(t3 && Number.isFinite(t3.from) && Number.isFinite(t3.to));
    })), f2 = (0, o.To)((() => {
      var n3;
      const t3 = null === (n3 = e2.introOutro) || void 0 === n3 ? void 0 : n3.outro;
      return Number.isFinite(t3);
    })), k2 = (0, o.To)((() => h2() && e2.duration ? B(e2.introOutro.intro.from, 0, e2.duration) : null)), y2 = (0, o.To)((() => h2() && e2.duration ? B(e2.introOutro.intro.to, 0, e2.duration) : null)), S2 = (0, o.To)((() => f2() && e2.duration ? B(e2.introOutro.outro, 0, e2.duration) : null)), x2 = (e3) => {
      n2 = e3, t2(e3);
    }, w2 = (n3) => {
      (0, o.vA)((() => {
        e2.onChange(n3), e2.onSeek(null), d2(null), g2(e2.step);
      }));
    }, T2 = ({ clientX: t3, clientY: r2 }) => {
      if (n2 && e2.duration && !e2.disabled && 0 !== t3 && 0 !== r2) {
        const { offsetLeft: r3, offsetWidth: o2 } = n2, i3 = window.screen720p ? 1.538 : 1, l3 = Math.floor((t3 - r3) * i3), a3 = e2.duration / o2 * l3;
        e2.onChange(Math.round(a3));
      }
    }, A2 = () => {
      (0, o.vA)((() => {
        e2.onPress(), a2();
        const n3 = u2();
        null !== n3 && w2(n3);
      }));
    }, C2 = (n3) => {
      const t3 = d2(((t4) => Math.round(null != e2.value && null != e2.duration ? G((null != t4 ? t4 : e2.value) + n3, 0, e2.duration) : 0)));
      e2.onSeek(t3), a2((() => w2(t3)));
    }, P2 = () => {
      s2((() => g2(((e3) => e3 < 5e4 ? 1.1 * e3 : e3))));
    }, I2 = () => {
      P2(), C2(-c2());
    }, E2 = () => {
      P2(), C2(c2());
    }, O2 = () => {
      e2.disabled || (l2.on("left", I2), l2.on("right", E2));
    }, H2 = () => {
      l2.off("left", I2), l2.off("right", E2);
    };
    return (0, b.k9)((() => e2.autoFocus), ((e3) => {
      e3 && i2();
    })), (0, o.Rc)((() => {
      e2.autoFocus && i2(), l2.on("seekPrev", I2), l2.on("seekNext", E2);
    })), (0, o.Ki)((() => {
      l2.off("seekPrev", I2), l2.off("seekNext", E2);
    })), Y2 = j(), N2 = Y2.firstChild, R2 = N2.firstChild, L2 = R2.nextSibling, $2 = N2.nextSibling, Y2.addEventListener("blur", H2), Y2.addEventListener("focus", O2), Y2.addEventListener("press", A2), Y2.$$click = T2, (0, r.Yx)(x2, Y2), (0, r.Yr)(Y2, (0, o.a0)(o.wv, { get when() {
      return (0, r.ph)((() => !(!h2() || null === k2())))() && null !== y2();
    }, get children() {
      return [(n3 = _(), (0, o.gb)(((e4) => {
        var t3 = F()(M.intro, { [M.rounded]: 0 === k2() }), o2 = `${k2()}%`, i3 = y2() - k2() + "%";
        return t3 !== e4.e && (0, r.s7)(n3, e4.e = t3), o2 !== e4.t && (0, r.$h)(n3, "margin-left", e4.t = o2), i3 !== e4.a && (0, r.$h)(n3, "width", e4.a = i3), e4;
      }), { e: void 0, t: void 0, a: void 0 }), n3), (e3 = _(), (0, o.gb)(((n4) => {
        var t3 = M.marker, o2 = `${k2()}%`;
        return t3 !== n4.e && (0, r.s7)(e3, n4.e = t3), o2 !== n4.t && (0, r.$h)(e3, "left", n4.t = o2), n4;
      }), { e: void 0, t: void 0 }), e3)];
      var e3, n3;
    } }), null), (0, r.Yr)(Y2, (0, o.a0)(o.wv, { get when() {
      return (0, r.ph)((() => !!f2()))() && null !== S2();
    }, get children() {
      return [(n3 = _(), (0, o.gb)(((e4) => {
        var t3 = M.outro, o2 = `${S2()}%`, i3 = 100 - S2() + "%";
        return t3 !== e4.e && (0, r.s7)(n3, e4.e = t3), o2 !== e4.t && (0, r.$h)(n3, "margin-left", e4.t = o2), i3 !== e4.a && (0, r.$h)(n3, "width", e4.a = i3), e4;
      }), { e: void 0, t: void 0, a: void 0 }), n3), (e3 = _(), (0, o.gb)(((n4) => {
        var t3 = M.marker, o2 = `${S2()}%`;
        return t3 !== n4.e && (0, r.s7)(e3, n4.e = t3), o2 !== n4.t && (0, r.$h)(e3, "left", n4.t = o2), n4;
      }), { e: void 0, t: void 0 }), e3)];
      var e3, n3;
    } }), null), (0, o.gb)(((n3) => {
      var t3 = F()(e2.class, M.seekbar), o2 = M.track, i3 = F()(M.inner, M.before), l3 = `${v2()}%`, a3 = F()(M.inner, M.after), s3 = `${m2()}%`, u3 = M.thumb, d3 = `${m2()}%`;
      return t3 !== n3.e && (0, r.s7)(Y2, n3.e = t3), o2 !== n3.t && (0, r.s7)(N2, n3.t = o2), i3 !== n3.a && (0, r.s7)(R2, n3.a = i3), l3 !== n3.o && (0, r.$h)(R2, "width", n3.o = l3), a3 !== n3.i && (0, r.s7)(L2, n3.i = a3), s3 !== n3.n && (0, r.$h)(L2, "width", n3.n = s3), u3 !== n3.s && (0, r.s7)($2, n3.s = u3), d3 !== n3.h && (0, r.$h)($2, "left", n3.h = d3), n3;
    }), { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0 }), Y2;
    var Y2, N2, R2, L2, $2;
  };
  (0, r.z_)(["click"]);
  var J = t(6716), K = {};
  K.styleTagTransform = N(), K.setAttributes = E(), K.insert = P().bind(null, "head"), K.domAPI = A(), K.insertStyleElement = H();
  w()(J.A, K);
  const q = J.A && J.A.locals ? J.A.locals : void 0;
  var Q = (0, r.vs)("<div><div>");
  const W = (e2) => {
    const { t: n2 } = (0, u.B)(), { onBack: t2 } = (0, p.cq)(), i2 = (0, s.W6)(), l2 = () => {
      var n3;
      return null !== (n3 = e2.value) && void 0 !== n3 ? n3 : 0;
    }, a2 = (n3) => void 0 !== e2.min && void 0 !== e2.max ? Math.min(Math.max(n3, e2.min), e2.max) : n3, d2 = () => {
      e2.onChange(a2(l2() + e2.step));
    }, c2 = () => {
      e2.onChange(a2(l2() - e2.step));
    };
    return t2((() => {
      e2.onClose && e2.onClose();
    })), (0, o.Rc)((() => {
      i2.setBackDisabled(true);
    })), (0, o.Ki)((() => {
      i2.setBackDisabled(false);
    })), (0, o.a0)(p.Gk, { get class() {
      return q["overlay-setting"];
    }, get children() {
      var t3 = Q(), i3 = t3.firstChild;
      return (0, r.Yr)(t3, (0, o.a0)(m.$n, { get icon() {
        return e2.paused ? "play" : "pause";
      }, autoFocus: true, get onPress() {
        return e2.onPlayPause;
      } }), i3), (0, r.Yr)(t3, (0, o.a0)(m.$n, { icon: "remove", onPress: c2 }), i3), (0, r.Yr)(i3, (() => ((n3) => e2.float ? (n3 / e2.float).toFixed(2) : n3)(l2())), null), (0, r.Yr)(i3, (() => e2.unit), null), (0, r.Yr)(t3, (0, o.a0)(m.$n, { icon: "add", onPress: d2 }), null), (0, r.Yr)(t3, (0, o.a0)(m.$n, { get label() {
        return n2("DONE");
      }, get onPress() {
        return e2.onClose;
      } }), null), (0, o.gb)(((e3) => {
        var n3 = q.container, o2 = q.value;
        return n3 !== e3.e && (0, r.s7)(t3, e3.e = n3), o2 !== e3.t && (0, r.s7)(i3, e3.t = o2), e3;
      }), { e: void 0, t: void 0 }), t3;
    } });
  }, Z = (e2) => ("0" + e2).slice(-1 * Math.max(e2.toString().length, 2)), ee = (e2) => {
    if (null === e2 || isNaN(e2)) return "--:--:--";
    const n2 = Math.floor(e2 / 36e5), t2 = Math.floor(e2 / 6e4 % 60), r2 = Math.floor(e2 / 1e3 % 60);
    return `${Z(n2)}:${Z(t2)}:${Z(r2)}`;
  };
  var ne = t(4508), te = {};
  te.styleTagTransform = N(), te.setAttributes = E(), te.insert = P().bind(null, "head"), te.domAPI = A(), te.insertStyleElement = H();
  w()(ne.A, te);
  const re = ne.A && ne.A.locals ? ne.A.locals : void 0;
  var oe = t(8185), ie = t(6740), le = {};
  le.styleTagTransform = N(), le.setAttributes = E(), le.insert = P().bind(null, "head"), le.domAPI = A(), le.insertStyleElement = H();
  w()(ie.A, le);
  const ae = ie.A && ie.A.locals ? ie.A.locals : void 0;
  var se = (0, r.vs)("<div>"), ue = (0, r.vs)("<div><div><div><span> </span></div><div>: </div></div><div>");
  const de = (e2) => {
    const { t: n2 } = (0, u.B)(), { ctx: t2 } = (0, g.gK)(), i2 = () => {
      var n3, t3, r2;
      const o2 = null !== (n3 = null === (t3 = e2.nextVideo) || void 0 === t3 ? void 0 : t3.title) && void 0 !== n3 ? n3 : null === (r2 = e2.metaItem) || void 0 === r2 || null === (r2 = r2.ready) || void 0 === r2 ? void 0 : r2.name;
      return null !== e2.nextVideo && o2;
    }, a2 = () => null !== e2.nextVideo && "number" == typeof e2.nextVideo.season && "number" == typeof e2.nextVideo.episode ? `S${e2.nextVideo.season}E${e2.nextVideo.episode}` : "";
    return (0, o.a0)(p.Gk, { get class() {
      return ae["next-video-popup"];
    }, get children() {
      return [(h2 = se(), (0, r.Yr)(h2, (0, o.a0)(m._V, { get src() {
        var n3;
        return null === (n3 = e2.nextVideo) || void 0 === n3 ? void 0 : n3.thumbnail;
      }, get class() {
        return F()(ae.thumbnail, { [ae.blurred]: t2.settings().hideSpoilers && (null === (n3 = e2.nextVideo) || void 0 === n3 ? void 0 : n3.season) && (null === (r2 = e2.nextVideo) || void 0 === r2 ? void 0 : r2.episode) && !(null !== (o2 = e2.nextVideo) && void 0 !== o2 && o2.watched) });
        var n3, r2, o2;
      }, get children() {
        return (0, o.a0)(o.wv, { get when() {
          return null === (n3 = e2.metaItem) || void 0 === n3 || null === (n3 = n3.ready) || void 0 === n3 ? void 0 : n3.type;
          var n3;
        }, children: (e3) => (0, o.a0)(l.A, { get class() {
          return ae["placeholder-icon"];
        }, get name() {
          return (0, r.ph)((() => !!oe.lI.includes(e3())))() ? e3() : "movies";
        } }) });
      } })), (0, o.gb)((() => (0, r.s7)(h2, ae["poster-container"]))), h2), (s2 = ue(), u2 = s2.firstChild, d2 = u2.firstChild, c2 = d2.firstChild, g2 = c2.firstChild, p2 = d2.nextSibling, b2 = p2.firstChild, v2 = u2.nextSibling, (0, r.Yr)(c2, (() => n2("PLAYER_NEXT_VIDEO_TITLE_SHORT")), g2), (0, r.Yr)(d2, (() => {
        var n3;
        return null === (n3 = e2.metaItem) || void 0 === n3 || null === (n3 = n3.ready) || void 0 === n3 ? void 0 : n3.name;
      }), null), (0, r.Yr)(p2, a2, b2), (0, r.Yr)(p2, i2, null), (0, r.Yr)(v2, (0, o.a0)(m.$n, { icon: "close", get label() {
        return n2("PLAYER_NEXT_VIDEO_BUTTON_DISMISS");
      }, get onPress() {
        return e2.onDismiss;
      } }), null), (0, r.Yr)(v2, (0, o.a0)(m.$n, { icon: "play", get label() {
        return n2("PLAYER_PLAY");
      }, get onPress() {
        return e2.onEnded;
      }, autoFocus: true }), null), (0, o.gb)(((e3) => {
        var n3 = ae["info-container"], t3 = ae["content-container"], o2 = ae.name, i3 = ae.label, l2 = ae.title, a3 = ae["buttons-container"];
        return n3 !== e3.e && (0, r.s7)(s2, e3.e = n3), t3 !== e3.t && (0, r.s7)(u2, e3.t = t3), o2 !== e3.a && (0, r.s7)(d2, e3.a = o2), i3 !== e3.o && (0, r.s7)(c2, e3.o = i3), l2 !== e3.i && (0, r.s7)(p2, e3.i = l2), a3 !== e3.n && (0, r.s7)(v2, e3.n = a3), e3;
      }), { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), s2)];
      var s2, u2, d2, c2, g2, p2, b2, v2, h2;
    } });
  };
  var ce = t(5438), ge = {};
  ge.styleTagTransform = N(), ge.setAttributes = E(), ge.insert = P().bind(null, "head"), ge.domAPI = A(), ge.insertStyleElement = H();
  w()(ce.A, ge);
  const pe = ce.A && ce.A.locals ? ce.A.locals : void 0, be = (e2) => {
    const { t: n2 } = (0, u.B)();
    return (0, o.a0)(p.Gk, { get class() {
      return pe["intro-outro-popup"];
    }, get children() {
      return [(0, o.a0)(o.wv, { get when() {
        return "outro" === e2.skipIntroOutroType;
      }, get children() {
        return (0, o.a0)(m.$n, { get onPress() {
          return e2.onDismiss;
        }, get class() {
          return pe.button;
        }, get label() {
          return n2("PLAYER_NEXT_VIDEO_BUTTON_DISMISS");
        } });
      } }), (0, o.a0)(m.$n, { get onPress() {
        return e2.onSkip;
      }, get class() {
        return F()(pe.button, pe.confirm);
      }, get label() {
        return n2("intro" === e2.skipIntroOutroType ? "PLAYER_SKIP_INTRO" : "PLAYER_SKIP_OUTRO");
      }, autoFocus: true })];
    } });
  };
  var me = (0, r.vs)("<div>");
  const ve = () => {
    const { t: e2 } = (0, u.B)(), n2 = (0, d.Y)(), t2 = (0, c.Vj)(), h2 = (0, s.g)(), f2 = (0, p.cq)(), k2 = (0, s.W6)(), y2 = (0, b.SR)(3e3), x2 = (0, b.v3)(1e3), { ctx: w2, player: T2, streamingServer: A2 } = (0, g.gK)(), C2 = v(), [P2, I2, E2] = (0, b.zD)(), [O2, H2, Y2] = (0, b.zD)(), [N2, R2, L2] = (0, b.zD)(), [$2, z2, U2] = (0, b.zD)(), [V2, M2, _2] = (0, b.zD)(), [j2, G2, B2] = (0, b.zD)(), [J2, K2, q2] = (0, b.zD)(), [Q2, Z2, ne2] = (0, b.zD)(), [te2, oe2, ie2] = (0, b.zD)(), [le2, ae2, se2] = (0, b.zD)(), [ue2, ce2] = (0, o.n5)(false), [ge2, pe2] = (0, o.n5)(false), [ve2, he] = (0, o.n5)(false), [fe, ke] = (0, o.n5)(false), [ye, Se] = (0, o.n5)(null), [xe, we, Te] = (0, b.zD)(false), [Ae, Ce] = (0, o.n5)(false), [Pe, Ie] = (0, o.n5)(false), [Ee, Oe] = (0, o.n5)("intro"), { stream: He, videoParams: Ye, paused: Ne, time: Re, duration: Le, buffering: $e, buffered: De, loaded: ze, selectedSubtitlesTrackId: Fe, selectedExtraSubtitlesTrackId: Ue, selectedAudioTrackId: Ve, subtitlesTracks: Me, extraSubtitlesTracks: _e, extraSubtitlesDelay: je, audioTracks: Ge } = (0, i.J)(C2.state), { title: Be, nextVideo: Xe, metaItem: Je, streamState: Ke } = (0, i.J)(T2.state), { bingeWatching: qe, seekTimeDuration: Qe, nextVideoNotificationDuration: We } = (0, i.J)(w2.settings), Ze = S(w2, T2, C2, (() => {
      E2(), K2();
    }), (() => {
      E2(), Z2();
    }), (() => {
      E2(), oe2();
    }), (() => {
      E2(), ae2();
    })), en = () => {
      const e3 = C2.error();
      return null != e3 && e3.critical ? e3 : null;
    }, nn = () => en() || Ne() || $e() || !Ae(), tn = () => P2() || O2() || N2() || $2() || J2() || Q2() || te2() || le2(), rn = () => qe() && Xe(), on = () => {
      var e3;
      return `${ee(null !== (e3 = ye()) && void 0 !== e3 ? e3 : Re())} / ${ee(Le())}`;
    }, ln = () => {
      C2.setProp("paused", false);
    }, an = () => {
      C2.setProp("paused", true);
    }, sn = () => {
      C2.setProp("paused", !Ne());
    }, un = (e3) => {
      C2.setProp("time", e3);
    }, dn = (e3) => {
      C2.setProp("extraSubtitlesDelay", e3);
    }, cn = (e3) => {
      w2.updateSettings({ subtitlesSize: e3 });
    }, gn = (e3) => {
      w2.updateSettings({ subtitlesOffset: e3 });
    }, pn = (e3) => {
      w2.updateSettings({ subtitlesOpacity: e3 });
    }, bn = (e3) => {
      Se(e3);
    }, mn = async () => {
      if (T2.ended(), rn()) {
        var e3;
        const n3 = null === (e3 = Xe()) || void 0 === e3 ? void 0 : e3.deepLinks;
        k2.size() > 2 && await k2.back(), k2.navigate(null == n3 ? void 0 : n3.metaDetailsStreams, true), k2.navigate(null == n3 ? void 0 : n3.player);
      } else k2.back();
    }, vn = () => {
      const e3 = T2.state().introOutro;
      if (null !== e3 && null !== Le()) {
        var n3;
        const r2 = null !== (n3 = null == e3 ? void 0 : e3.intro.to) && void 0 !== n3 ? n3 : null;
        var t3;
        if ("intro" === Ee()) un(r2), we();
        else un(null !== (t3 = Le()) && void 0 !== t3 ? t3 : 0);
      }
      "outro" === Ee() && Ie(true), B2();
    }, hn = () => {
      B2(), Ie(true);
    }, fn = () => {
      Ce(false), y2((() => {
        Te(), Ce(true);
      }));
    }, kn = () => {
      !nn() && !tn() && !V2() && !j2() && an();
    }, yn = () => {
      !nn() && !tn() && !V2() && !j2() && we();
    }, Sn = () => {
      E2(), Y2(), L2(), U2(), q2(), ne2(), ie2();
    }, xn = () => {
      Ie(true), _2(), we();
    };
    return (0, o.EH)((() => {
      if (T2.loaded() && C2.ready() && !C2.loaded()) {
        const { selected: e3, libraryItem: n3, seriesInfo: r2 } = T2.state(), { transportUrl: o2 } = A2.state();
        e3 && o2 && C2.load({ platform: t2.name, stream: e3.stream, autoplay: true, time: n3 && e3.streamRequest.path.id === n3.state.video_id ? n3.state.timeOffset : 0, forceTranscoding: false, maxAudioChannels: null, streamingServerURL: o2, seriesInfo: r2 });
      }
    })), (0, o.EH)((() => {
      tn() && an();
    })), (0, o.EH)((() => {
      if (C2.ready() && null !== He()) {
        const { subtitlesOffset: e3, subtitlesSize: n3, subtitlesTextColor: t3, subtitlesOutlineColor: r2, subtitlesBackgroundColor: o2, subtitlesOpacity: i2 } = w2.settings();
        C2.setProp("subtitlesOffset", e3), C2.setProp("subtitlesSize", n3), C2.setProp("subtitlesTextColor", t3), C2.setProp("subtitlesOutlineColor", r2), C2.setProp("subtitlesBackgroundColor", o2), C2.setProp("subtitlesOpacity", i2), C2.setProp("extraSubtitlesOffset", e3), C2.setProp("extraSubtitlesSize", n3), C2.setProp("extraSubtitlesTextColor", t3), C2.setProp("extraSubtitlesOutlineColor", r2), C2.setProp("extraSubtitlesBackgroundColor", o2), C2.setProp("extraSubtitlesOpacity", i2);
      }
    })), (0, o.EH)((() => {
      if (T2.loaded() && C2.ready() && null !== He()) {
        const { subtitles: e3 } = T2.state();
        e3.length > 0 && C2.addExtraSubtitlesTracks(e3.map(((e4) => ({ ...e4, label: `${e4.lang} (${e4.origin})` }))));
      }
    })), (0, o.EH)((() => {
      if (C2.ready() && null !== He()) {
        const { subtitlesLanguage: e3, secondarySubtitlesLanguage: n3, audioLanguage: t3, secondaryAudioLanguage: r2 } = w2.settings(), { streamState: o2 } = T2.state(), i2 = (e4, n4) => e4.find((({ lang: e5 }) => b.eo.matches(e5, n4)));
        if (!ge2() && !ve2()) {
          if (null != o2 && o2.subtitleTrack) {
            const { id: e4, embedded: n4 } = o2.subtitleTrack, t4 = n4 && e4 ? e4 : null, r3 = !n4 && e4 ? e4 : null;
            t4 && Me().length ? (C2.selectSubtitlesTrack(t4), pe2(true)) : r3 && _e().length && (C2.selectExtraSubtitlesTrack(r3), pe2(true));
          } else if (e3) {
            const n4 = i2(Me(), e3), t4 = i2(_e(), e3);
            n4 ? (C2.selectSubtitlesTrack(n4), pe2(true)) : t4 && (C2.selectExtraSubtitlesTrack(t4), pe2(true));
          } else if (n3) {
            const e4 = i2(Me(), n3), t4 = i2(_e(), n3);
            e4 ? (C2.selectSubtitlesTrack(e4), he(true)) : t4 && (C2.selectExtraSubtitlesTrack(t4), he(true));
          }
        }
        if (!fe()) {
          if (null != o2 && o2.audioTrack) {
            const { id: e4 } = o2.audioTrack;
            e4 && (C2.selectAudioTrack(e4), ke(true));
          } else if (null === Ve()) {
            const e4 = t3 && i2(Ge(), t3), n4 = r2 && i2(Ge(), r2);
            e4 ? (C2.selectAudioTrack(e4), ke(true)) : n4 && (C2.selectAudioTrack(n4), ke(true));
          }
        }
        ue2() || null !== e3 || null !== n3 || (C2.disableSubtitlesTracks(), ce2(true));
      }
    })), (0, o.EH)((() => {
      var e3, n3, t3;
      const r2 = Re(), o2 = Le(), i2 = null !== (null === (e3 = T2.state()) || void 0 === e3 ? void 0 : e3.seriesInfo) && T2.state().introOutro, l2 = i2 ? null == i2 || null === (n3 = i2.intro) || void 0 === n3 ? void 0 : n3.from : null, a2 = i2 ? null == i2 || null === (t3 = i2.intro) || void 0 === t3 ? void 0 : t3.to : null, s2 = i2 ? null == i2 ? void 0 : i2.outro : null;
      null === Xe() || Pe() || null === r2 ? _2() : qe() && (null !== s2 && r2 >= s2 || null !== o2 && r2 < o2 && o2 - r2 <= We() ? M2() : _2()), null !== l2 && null !== a2 && null !== r2 && (r2 >= l2 && r2 < a2 && r2 < l2 + b.aH.ks ? (Oe("intro"), G2()) : null !== s2 && r2 > l2 + b.aH.ks && r2 < s2 ? B2() : null !== s2 && r2 >= s2 ? qe() && null !== Xe() || Pe() || (Oe("outro"), G2()) : B2());
    })), (0, o.EH)((() => {
      const t3 = C2.error();
      t3 && !t3.critical && n2.show({ title: e2("ERROR"), message: t3.message });
    })), (0, b.k9)(Ye, ((e3) => {
      e3 && T2.updateVideoParams(e3);
    })), (0, b.k9)(ye, ((e3) => {
      const { duration: n3, manifest: t3 } = C2.state();
      e3 && n3 && t3 && T2.updateSeek(e3, n3, t3.name);
    })), (0, b.k9)(Re, ((e3) => {
      const { duration: n3, manifest: t3 } = C2.state();
      e3 && n3 && t3 && x2((() => {
        T2.updateTime(e3, n3, t3.name);
      }));
    })), (0, b.k9)(Ne, ((e3) => {
      null !== e3 && T2.updatePaused(e3);
    })), (0, b.k9)(C2.ended, (() => {
      mn();
    })), (0, o.EH)((() => {
      C2.unload(), T2.unload(), T2.load(h2());
    })), (0, o.Rc)((() => {
      f2.on("play", ln), f2.on("pause", an), f2.on("playPause", sn), f2.on("stop", mn), f2.on("left", yn), f2.on("right", yn), f2.on("ok", kn), f2.on("any", fn), window.addEventListener("mousemove", fn), fn();
    })), (0, o.Ki)((() => {
      C2.unload(), T2.unload(), f2.off("play", ln), f2.off("pause", an), f2.off("playPause", sn), f2.off("stop", mn), f2.off("left", yn), f2.off("right", yn), f2.off("ok", kn), f2.off("any", fn), window.removeEventListener("mousemove", fn);
    })), (0, o.a0)(m.YW, { get class() {
      return re.player;
    }, nested: true, get children() {
      return [(n3 = me(), t3 = C2.ref, "function" == typeof t3 ? (0, r.Yx)(t3, n3) : C2.ref = n3, (0, o.gb)((() => (0, r.s7)(n3, re.video))), n3), (0, o.a0)(m._V, { get class() {
        return F()(re["background-image"], { [re.active]: !ze() || en() }, { [re["background-image-720p"]]: window.screen720p });
      }, get src() {
        return null === (e3 = Je()) || void 0 === e3 || null === (e3 = e3.ready) || void 0 === e3 ? void 0 : e3.background;
        var e3;
      } }), (0, o.a0)(a.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return (0, r.ph)((() => !(C2.loaded() && !$e() && ze())))() && !en();
        }, get children() {
          var e3 = me();
          return (0, r.Yr)(e3, (0, o.a0)(m._V, { get class() {
            return re.image;
          }, get src() {
            return null === (e4 = Je()) || void 0 === e4 || null === (e4 = e4.ready) || void 0 === e4 ? void 0 : e4.logo;
            var e4;
          }, get fallback() {
            return (0, o.a0)(m.Rh, {});
          } })), (0, o.gb)((() => (0, r.s7)(e3, re.loading))), e3;
        } });
      } }), (0, o.a0)(a.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return en();
        }, children: (e3) => {
          return n4 = me(), (0, r.Yr)(n4, (0, o.a0)(l.A, { get class() {
            return re.icon;
          }, name: "warning" }), null), (0, r.Yr)(n4, (() => window.__STREMIO_ERROR_ENHANCER__ ? window.__STREMIO_ERROR_ENHANCER__(e3()) : e3().message), null), (0, o.gb)((() => (0, r.s7)(n4, re.error))), n4;
          var n4;
        } });
      } }), (0, o.a0)(a.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return (0, r.ph)((() => !(!nn() || tn())))() && !V2();
        }, get children() {
          return (0, o.a0)(p.Gk, { get class() {
            return re.overlay;
          }, get children() {
            return [(e3 = me(), (0, r.Yr)(e3, Be), (0, o.gb)((() => (0, r.s7)(e3, re.info))), e3), (0, o.a0)(p.Gk, { get class() {
              return re.controls;
            }, get children() {
              return [(0, o.a0)(D, { get icon() {
                return Ne() ? "play" : "pause";
              }, get disabled() {
                return null === Ne();
              }, get autoFocus() {
                return (0, r.ph)((() => !xe()))() && !j2();
              }, onClick: sn }), (0, o.a0)(o.wv, { get when() {
                return rn();
              }, get children() {
                return (0, o.a0)(D, { icon: "next", onClick: mn });
              } })];
            } }), (0, o.a0)(p.Gk, { get children() {
              return (0, o.a0)(X, { get value() {
                return Re();
              }, get buffered() {
                return De();
              }, get duration() {
                return Le();
              }, get step() {
                return Qe();
              }, get disabled() {
                return !Le();
              }, get autoFocus() {
                return xe();
              }, get introOutro() {
                return T2.state().introOutro;
              }, onSeek: bn, onChange: un, onPress: ln });
            } }), (0, o.a0)(p.Gk, { get class() {
              return re.footer;
            }, get children() {
              return [(n4 = me(), (0, r.Yr)(n4, (0, o.a0)(D, { icon: "subtitles", onClick: I2 }), null), (0, r.Yr)(n4, (0, o.a0)(o.wv, { get when() {
                return Ze.audio().length;
              }, get children() {
                return (0, o.a0)(D, { icon: "audio", onClick: H2 });
              } }), null), (0, r.Yr)(n4, (0, o.a0)(D, { icon: "speed", onClick: R2 }), null), (0, r.Yr)(n4, (0, o.a0)(o.wv, { get when() {
                return Ze.videos().length;
              }, get children() {
                return (0, o.a0)(D, { icon: "episodes", onClick: z2 });
              } }), null), (0, o.gb)((() => (0, r.s7)(n4, re.controls))), n4), (e4 = me(), (0, r.Yr)(e4, on), (0, o.gb)((() => (0, r.s7)(e4, re.time))), e4)];
              var e4, n4;
            } })];
            var e3;
          } });
        } });
      } }), (0, o.a0)(o.wv, { get when() {
        return (0, r.ph)((() => !!V2()))() && !Pe();
      }, get children() {
        return (0, o.a0)(de, { onEnded: mn, onDismiss: xn, get metaItem() {
          return Je();
        }, get nextVideo() {
          return Xe();
        } });
      } }), (0, o.a0)(o.wv, { get when() {
        return (0, r.ph)((() => !(!j2() || Pe())))() && !V2();
      }, get children() {
        return (0, o.a0)(be, { onSkip: vn, onDismiss: hn, get skipIntroOutroType() {
          return Ee();
        } });
      } }), (0, o.a0)(o.wv, { get when() {
        return tn();
      }, get children() {
        return (0, o.a0)(m.ru, { get class() {
          return re["menu-back-button"];
        }, onClick: Sn });
      } }), (0, o.a0)(a.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return P2();
        }, get children() {
          return (0, o.a0)(m.W1, { get class() {
            return re.menu;
          }, get title() {
            return e2("SUBTITLES");
          }, get options() {
            return Ze.subtitles();
          }, onClose: E2 });
        } });
      } }), (0, o.a0)(a.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return O2();
        }, get children() {
          return (0, o.a0)(m.W1, { get class() {
            return re.menu;
          }, get title() {
            return e2("AUDIO_TRACKS");
          }, get options() {
            return Ze.audio();
          }, onClose: Y2 });
        } });
      } }), (0, o.a0)(a.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return N2();
        }, get children() {
          return (0, o.a0)(m.W1, { get class() {
            return re.menu;
          }, get title() {
            return e2("PLAYBACK_SPEED");
          }, get options() {
            return Ze.speed;
          }, onClose: L2 });
        } });
      } }), (0, o.a0)(a.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return $2();
        }, get children() {
          return (0, o.a0)(m.W1, { get class() {
            return re.menu;
          }, get title() {
            return e2("VIDEOS");
          }, get options() {
            return Ze.videos();
          }, onClose: U2 });
        } });
      } }), (0, o.a0)(a.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return J2();
        }, get children() {
          return (0, o.a0)(W, { get paused() {
            return Ne();
          }, get value() {
            return je();
          }, unit: "s", float: 1e3, step: 250, onPlayPause: sn, onChange: dn, onClose: q2 });
        } });
      } }), (0, o.a0)(a.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return Q2();
        }, get children() {
          return (0, o.a0)(W, { get paused() {
            return Ne();
          }, get value() {
            return w2.settings().subtitlesSize;
          }, unit: "%", get step() {
            return b.aH.O$;
          }, get min() {
            return b.aH.aK;
          }, get max() {
            return b.aH.I2;
          }, onPlayPause: sn, onChange: cn, onClose: ne2 });
        } });
      } }), (0, o.a0)(a.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return le2();
        }, get children() {
          return (0, o.a0)(W, { get paused() {
            return Ne();
          }, get value() {
            return w2.settings().subtitlesOffset;
          }, unit: "%", get step() {
            return b.aH.JZ;
          }, get min() {
            return b.aH.vm;
          }, get max() {
            return b.aH.nP;
          }, onPlayPause: sn, onChange: gn, onClose: se2 });
        } });
      } }), (0, o.a0)(a.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return te2();
        }, get children() {
          return (0, o.a0)(W, { get paused() {
            return Ne();
          }, get value() {
            return w2.settings().subtitlesOpacity;
          }, unit: "%", step: 10, min: 20, max: 100, onPlayPause: sn, onChange: pn, onClose: ie2 });
        } });
      } })];
      var n3, t3;
    } });
  };
} }]);
