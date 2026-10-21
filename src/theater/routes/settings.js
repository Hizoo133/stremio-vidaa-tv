"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([[6472], { 4303: (e, t, o) => {
  o.d(t, { Mj: () => E });
  var n = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, r = function(e2) {
    return "string" == typeof e2 ? e2.length > 0 : "number" == typeof e2;
  }, a = function(e2, t2, o2) {
    return void 0 === t2 && (t2 = 0), void 0 === o2 && (o2 = Math.pow(10, t2)), Math.round(o2 * e2) / o2 + 0;
  }, i = function(e2, t2, o2) {
    return void 0 === t2 && (t2 = 0), void 0 === o2 && (o2 = 1), e2 > o2 ? o2 : e2 > t2 ? e2 : t2;
  }, s = function(e2) {
    return (e2 = isFinite(e2) ? e2 % 360 : 0) > 0 ? e2 : e2 + 360;
  }, l = function(e2) {
    return { r: i(e2.r, 0, 255), g: i(e2.g, 0, 255), b: i(e2.b, 0, 255), a: i(e2.a) };
  }, c = function(e2) {
    return { r: a(e2.r), g: a(e2.g), b: a(e2.b), a: a(e2.a, 3) };
  }, h = /^#([0-9a-f]{3,8})$/i, d = function(e2) {
    var t2 = e2.toString(16);
    return t2.length < 2 ? "0" + t2 : t2;
  }, u = function(e2) {
    var t2 = e2.r, o2 = e2.g, n2 = e2.b, r2 = e2.a, a2 = Math.max(t2, o2, n2), i2 = a2 - Math.min(t2, o2, n2), s2 = i2 ? a2 === t2 ? (o2 - n2) / i2 : a2 === o2 ? 2 + (n2 - t2) / i2 : 4 + (t2 - o2) / i2 : 0;
    return { h: 60 * (s2 < 0 ? s2 + 6 : s2), s: a2 ? i2 / a2 * 100 : 0, v: a2 / 255 * 100, a: r2 };
  }, p = function(e2) {
    var t2 = e2.h, o2 = e2.s, n2 = e2.v, r2 = e2.a;
    t2 = t2 / 360 * 6, o2 /= 100, n2 /= 100;
    var a2 = Math.floor(t2), i2 = n2 * (1 - o2), s2 = n2 * (1 - (t2 - a2) * o2), l2 = n2 * (1 - (1 - t2 + a2) * o2), c2 = a2 % 6;
    return { r: 255 * [n2, s2, i2, i2, l2, n2][c2], g: 255 * [l2, n2, n2, s2, i2, i2][c2], b: 255 * [i2, i2, l2, n2, n2, s2][c2], a: r2 };
  }, m = function(e2) {
    return { h: s(e2.h), s: i(e2.s, 0, 100), l: i(e2.l, 0, 100), a: i(e2.a) };
  }, f = function(e2) {
    return { h: a(e2.h), s: a(e2.s), l: a(e2.l), a: a(e2.a, 3) };
  }, g = function(e2) {
    return p((o2 = (t2 = e2).s, { h: t2.h, s: (o2 *= ((n2 = t2.l) < 50 ? n2 : 100 - n2) / 100) > 0 ? 2 * o2 / (n2 + o2) * 100 : 0, v: n2 + o2, a: t2.a }));
    var t2, o2, n2;
  }, y = function(e2) {
    return { h: (t2 = u(e2)).h, s: (r2 = (200 - (o2 = t2.s)) * (n2 = t2.v) / 100) > 0 && r2 < 200 ? o2 * n2 / 100 / (r2 <= 100 ? r2 : 200 - r2) * 100 : 0, l: r2 / 2, a: t2.a };
    var t2, o2, n2, r2;
  }, b = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, v = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, w = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, S = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, C = { string: [[function(e2) {
    var t2 = h.exec(e2);
    return t2 ? (e2 = t2[1]).length <= 4 ? { r: parseInt(e2[0] + e2[0], 16), g: parseInt(e2[1] + e2[1], 16), b: parseInt(e2[2] + e2[2], 16), a: 4 === e2.length ? a(parseInt(e2[3] + e2[3], 16) / 255, 2) : 1 } : 6 === e2.length || 8 === e2.length ? { r: parseInt(e2.substr(0, 2), 16), g: parseInt(e2.substr(2, 2), 16), b: parseInt(e2.substr(4, 2), 16), a: 8 === e2.length ? a(parseInt(e2.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
  }, "hex"], [function(e2) {
    var t2 = w.exec(e2) || S.exec(e2);
    return t2 ? t2[2] !== t2[4] || t2[4] !== t2[6] ? null : l({ r: Number(t2[1]) / (t2[2] ? 100 / 255 : 1), g: Number(t2[3]) / (t2[4] ? 100 / 255 : 1), b: Number(t2[5]) / (t2[6] ? 100 / 255 : 1), a: void 0 === t2[7] ? 1 : Number(t2[7]) / (t2[8] ? 100 : 1) }) : null;
  }, "rgb"], [function(e2) {
    var t2 = b.exec(e2) || v.exec(e2);
    if (!t2) return null;
    var o2, r2, a2 = m({ h: (o2 = t2[1], r2 = t2[2], void 0 === r2 && (r2 = "deg"), Number(o2) * (n[r2] || 1)), s: Number(t2[3]), l: Number(t2[4]), a: void 0 === t2[5] ? 1 : Number(t2[5]) / (t2[6] ? 100 : 1) });
    return g(a2);
  }, "hsl"]], object: [[function(e2) {
    var t2 = e2.r, o2 = e2.g, n2 = e2.b, a2 = e2.a, i2 = void 0 === a2 ? 1 : a2;
    return r(t2) && r(o2) && r(n2) ? l({ r: Number(t2), g: Number(o2), b: Number(n2), a: Number(i2) }) : null;
  }, "rgb"], [function(e2) {
    var t2 = e2.h, o2 = e2.s, n2 = e2.l, a2 = e2.a, i2 = void 0 === a2 ? 1 : a2;
    if (!r(t2) || !r(o2) || !r(n2)) return null;
    var s2 = m({ h: Number(t2), s: Number(o2), l: Number(n2), a: Number(i2) });
    return g(s2);
  }, "hsl"], [function(e2) {
    var t2 = e2.h, o2 = e2.s, n2 = e2.v, a2 = e2.a, l2 = void 0 === a2 ? 1 : a2;
    if (!r(t2) || !r(o2) || !r(n2)) return null;
    var c2 = (function(e3) {
      return { h: s(e3.h), s: i(e3.s, 0, 100), v: i(e3.v, 0, 100), a: i(e3.a) };
    })({ h: Number(t2), s: Number(o2), v: Number(n2), a: Number(l2) });
    return p(c2);
  }, "hsv"]] }, T = function(e2, t2) {
    for (var o2 = 0; o2 < t2.length; o2++) {
      var n2 = t2[o2][0](e2);
      if (n2) return [n2, t2[o2][1]];
    }
    return [null, void 0];
  }, P = function(e2) {
    return "string" == typeof e2 ? T(e2.trim(), C.string) : "object" == typeof e2 && null !== e2 ? T(e2, C.object) : [null, void 0];
  }, U = function(e2, t2) {
    var o2 = y(e2);
    return { h: o2.h, s: i(o2.s + 100 * t2, 0, 100), l: o2.l, a: o2.a };
  }, A = function(e2) {
    return (299 * e2.r + 587 * e2.g + 114 * e2.b) / 1e3 / 255;
  }, I = function(e2, t2) {
    var o2 = y(e2);
    return { h: o2.h, s: o2.s, l: i(o2.l + 100 * t2, 0, 100), a: o2.a };
  }, k = (function() {
    function e2(e3) {
      this.parsed = P(e3)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
    }
    return e2.prototype.isValid = function() {
      return null !== this.parsed;
    }, e2.prototype.brightness = function() {
      return a(A(this.rgba), 2);
    }, e2.prototype.isDark = function() {
      return A(this.rgba) < 0.5;
    }, e2.prototype.isLight = function() {
      return A(this.rgba) >= 0.5;
    }, e2.prototype.toHex = function() {
      return t2 = (e3 = c(this.rgba)).r, o2 = e3.g, n2 = e3.b, i2 = (r2 = e3.a) < 1 ? d(a(255 * r2)) : "", "#" + d(t2) + d(o2) + d(n2) + i2;
      var e3, t2, o2, n2, r2, i2;
    }, e2.prototype.toRgb = function() {
      return c(this.rgba);
    }, e2.prototype.toRgbString = function() {
      return t2 = (e3 = c(this.rgba)).r, o2 = e3.g, n2 = e3.b, (r2 = e3.a) < 1 ? "rgba(" + t2 + ", " + o2 + ", " + n2 + ", " + r2 + ")" : "rgb(" + t2 + ", " + o2 + ", " + n2 + ")";
      var e3, t2, o2, n2, r2;
    }, e2.prototype.toHsl = function() {
      return f(y(this.rgba));
    }, e2.prototype.toHslString = function() {
      return t2 = (e3 = f(y(this.rgba))).h, o2 = e3.s, n2 = e3.l, (r2 = e3.a) < 1 ? "hsla(" + t2 + ", " + o2 + "%, " + n2 + "%, " + r2 + ")" : "hsl(" + t2 + ", " + o2 + "%, " + n2 + "%)";
      var e3, t2, o2, n2, r2;
    }, e2.prototype.toHsv = function() {
      return e3 = u(this.rgba), { h: a(e3.h), s: a(e3.s), v: a(e3.v), a: a(e3.a, 3) };
      var e3;
    }, e2.prototype.invert = function() {
      return E({ r: 255 - (e3 = this.rgba).r, g: 255 - e3.g, b: 255 - e3.b, a: e3.a });
      var e3;
    }, e2.prototype.saturate = function(e3) {
      return void 0 === e3 && (e3 = 0.1), E(U(this.rgba, e3));
    }, e2.prototype.desaturate = function(e3) {
      return void 0 === e3 && (e3 = 0.1), E(U(this.rgba, -e3));
    }, e2.prototype.grayscale = function() {
      return E(U(this.rgba, -1));
    }, e2.prototype.lighten = function(e3) {
      return void 0 === e3 && (e3 = 0.1), E(I(this.rgba, e3));
    }, e2.prototype.darken = function(e3) {
      return void 0 === e3 && (e3 = 0.1), E(I(this.rgba, -e3));
    }, e2.prototype.rotate = function(e3) {
      return void 0 === e3 && (e3 = 15), this.hue(this.hue() + e3);
    }, e2.prototype.alpha = function(e3) {
      return "number" == typeof e3 ? E({ r: (t2 = this.rgba).r, g: t2.g, b: t2.b, a: e3 }) : a(this.rgba.a, 3);
      var t2;
    }, e2.prototype.hue = function(e3) {
      var t2 = y(this.rgba);
      return "number" == typeof e3 ? E({ h: e3, s: t2.s, l: t2.l, a: t2.a }) : a(t2.h);
    }, e2.prototype.isEqual = function(e3) {
      return this.toHex() === E(e3).toHex();
    }, e2;
  })(), E = function(e2) {
    return e2 instanceof k ? e2 : new k(e2);
  };
}, 5819: (e, t, o) => {
  o.r(t), o.d(t, { default: () => E });
  var n = o(2555), r = (o(4999), o(7100), o(3497)), a = o(330), i = o(1200), s = o(6066), l = o(8688), c = (o(2517), o(6471), o(6399), o(1273), o(7621), o(4303)), h = o(2497);
  const d = (e2) => (0, c.Mj)(e2).toRgbString(), u = l.eo.all.sort(((e2, t2) => e2.label < t2.label ? -1 : e2.label > t2.label ? 1 : 0)), p = (e2, t2, o2) => {
    var n2, a2, i2;
    const { t: c2 } = (0, r.B)(), p2 = (0, h.Vj)(), { ctx: m2, streamingServer: f2 } = (0, s.gK)(), { theme: g2 } = (0, s.Pj)(), { user: y2, settings: b2, updateSettings: v2 } = m2;
    return [{ label: null !== (n2 = null === (a2 = y2()) || void 0 === a2 ? void 0 : a2.email) && void 0 !== n2 ? n2 : c2("ACCOUNT"), icon: "person", options: [{ label: "LOGOUT", onClick: () => m2.logout() }] }, { label: "INTERFACE", icon: "grid", options: [{ label: "LANGUAGE", icon: "language", options: l.aH.C_.map((({ locale: e3, ietf: t3, alpha3: o3 }) => ({ label: e3, selected: () => b2().interfaceLanguage === t3 || o3.includes(b2().interfaceLanguage), onClick: () => v2({ interfaceLanguage: t3 }) }))) }, { label: "ANIMATIONS", options: [{ checked: () => g2.animations(), onClick: () => g2.setAnimations(!g2.animations()) }] }, { label: "BACKGROUND_BLUR", options: [{ checked: () => g2.backgroundBlur(), onClick: () => g2.setBackgroundBlur(!g2.backgroundBlur()) }] }, { label: "SETTINGS_BLUR_UNWATCHED_IMAGE", options: [{ checked: () => b2().hideSpoilers, onClick: () => v2({ hideSpoilers: !b2().hideSpoilers }) }] }] }, { label: "PLAYBACK", icon: "play", options: [{ label: "SUBTITLES", icon: "subtitles", options: [{ label: "DEFAULT_LANGUAGE", options: [{ label: "NONE", selected: () => null === b2().subtitlesLanguage, onClick: () => v2({ subtitlesLanguage: null }) }, ...u.map((({ label: e3, code: t3 }) => ({ label: e3, selected: () => b2().subtitlesLanguage === t3, onClick: () => v2({ subtitlesLanguage: t3 }) })))] }, { label: "DEFAULT_SECONDARY_LANGUAGE", options: [{ label: "NONE", selected: () => null === b2().secondarySubtitlesLanguage, onClick: () => v2({ secondarySubtitlesLanguage: null }) }, ...u.map((({ label: e3, code: t3 }) => ({ label: e3, selected: () => b2().secondarySubtitlesLanguage === t3, onClick: () => v2({ secondarySubtitlesLanguage: t3 }) })))] }, { label: "SIZE", options: l.aH.BT.map(((e3) => ({ label: `${e3} %`, selected: () => b2().subtitlesSize === e3, onClick: () => v2({ subtitlesSize: e3 }) }))) }, { label: "SUBSPICKER_VERTICAL_OFFSET", options: l.aH.a4.map(((e3) => ({ label: `${e3} %`, selected: () => b2().subtitlesOffset === e3, onClick: () => v2({ subtitlesOffset: e3 }) }))) }, { label: "OPACITY", options: l.aH.iq.map(((e3) => ({ label: `${e3} %`, selected: () => b2().subtitlesOpacity === e3, onClick: () => v2({ subtitlesOpacity: e3 }) }))) }, { label: "TEXT_COLOR", options: l.aH.R1.filter(((e3) => "rgba(0, 0, 0, 0)" !== e3)).map(((e3) => ({ color: e3, selected: () => d(b2().subtitlesTextColor) === e3, onClick: () => v2({ subtitlesTextColor: e3 }) }))) }, { label: "OUTLINE_COLOR", options: l.aH.R1.map(((e3) => ({ color: e3, selected: () => d(b2().subtitlesOutlineColor) === e3, onClick: () => v2({ subtitlesOutlineColor: e3 }) }))) }, { label: "BACKGROUND_COLOR", options: l.aH.R1.map(((e3) => ({ color: e3, selected: () => d(b2().subtitlesBackgroundColor) === e3, onClick: () => v2({ subtitlesBackgroundColor: e3 }) }))) }] }, { label: "AUDIO", icon: "audio", options: [{ label: "DEFAULT_LANGUAGE", options: [{ label: "NONE", selected: () => null === b2().audioLanguage, onClick: () => v2({ audioLanguage: null }) }, ...u.map((({ label: e3, code: t3 }) => ({ label: e3, selected: () => b2().audioLanguage === t3, onClick: () => v2({ audioLanguage: t3 }) })))] }, { label: "DEFAULT_SECONDARY_LANGUAGE", options: [{ label: "NONE", selected: () => null === b2().secondaryAudioLanguage, onClick: () => v2({ secondaryAudioLanguage: null }) }, ...u.map((({ label: e3, code: t3 }) => ({ label: e3, selected: () => b2().secondaryAudioLanguage === t3, onClick: () => v2({ secondaryAudioLanguage: t3 }) })))] }] }, { label: "SEEK_TIME_DURATION", icon: "skip-forward", options: l.aH.lg.map(((e3) => ({ label: `${e3 / 1e3} ${c2("SECONDS")}`, selected: () => b2().seekTimeDuration === e3, onClick: () => v2({ seekTimeDuration: e3 }) }))) }, { label: "AUTO_PLAY", icon: "episodes", options: [{ label: "AUTO_PLAY_NEXT_EPISODE", checked: () => b2().bingeWatching, onClick: () => v2({ bingeWatching: !b2().bingeWatching }) }] }, { label: "SETTINGS_NEXT_VIDEO_POPUP_DURATION", icon: "episodes", disabled: () => !b2().bingeWatching, options: l.aH.fy.map(((e3) => ({ label: e3 > 0 ? `${e3 / 1e3} ${c2("SECONDS")}` : c2("SETTINGS_DISABLED"), selected: () => b2().nextVideoNotificationDuration === e3, onClick: () => v2({ nextVideoNotificationDuration: e3 }) }))) }] }, { label: "SERVER", icon: "network", options: [{ label: () => f2.online() || window.__SERVER_HEALTH__ && "online" === window.__SERVER_HEALTH__.status ? c2("MOBILE_SERVER_ONLINE") : c2("MOBILE_SERVER_OFFLINE"), options: [{ label: "RELOAD", onClick: () => f2.reload() }] }, { label: () => m2.settings().streamingServerUrl, options: [{ label: "EDIT_URL", onClick: o2 }] }, { label: () => `v${f2.version()}`, disabled: () => !f2.version() }] }, { label: "SETTINGS_ABOUT", icon: "about", options: [{ label: "SETTINGS_VERSION", options: [{ label: "Theater v1.10.0 " }] }, { label: "SETTINGS_PLATFORM", options: [{ label: `${p2.name} ${null !== (i2 = p2.version) && void 0 !== i2 ? i2 : ""}` }] }, { disabled: () => true, label: "CLEAR_DATA", onClick: async () => {
      await localStorage.clear(), location.reload();
    } }, { label: "TOS", onClick: e2 }, { label: "PRIVACY_POLICY", onClick: t2 }, { disabled: () => "Web" === p2.name, label: "QUIT", onClick: () => window.dispatchEvent(new Event("quit")) }] }, { label: "Vidaa TV", icon: "about", options: typeof window.__vidaaSettingsRows === "function" ? window.__vidaaSettingsRows(g2, p2) : [] }];
  };
  var m = o(2434), f = o.n(m), g = o(5235), y = o.n(g), b = o(6049), v = o.n(b), w = o(8938), S = o.n(w), C = o(502), T = o.n(C), P = o(3611), U = o.n(P), A = o(6120), I = {};
  I.styleTagTransform = U(), I.setAttributes = S(), I.insert = v().bind(null, "head"), I.domAPI = y(), I.insertStyleElement = T();
  f()(A.A, I);
  const k = A.A && A.A.locals ? A.A.locals : void 0, E = () => {
    const { t: e2 } = (0, r.B)(), { ctx: t2 } = (0, s.gK)(), o2 = (0, i.W6)(), [c2, h2, d2] = (0, l.zD)(), [u2, m2, f2] = (0, l.zD)(), [g2, y2, b2] = (0, l.zD)(), v2 = p(h2, m2, y2), w2 = (e3) => {
      t2.updateSettings({ streamingServerUrl: e3 });
    };
    return (0, n.EH)((() => {
      t2.isAuthenticated() || o2.navigate("/login", true);
    })), (0, n.a0)(a.YW, { get class() {
      return k.settings;
    }, get children() {
      return [(0, n.a0)(a.W1, { get title() {
        return e2("SETTINGS");
      }, options: v2 }), (0, n.a0)(n.wv, { get when() {
        return c2();
      }, get children() {
        return (0, n.a0)(a.aF, { get title() {
          return e2("TOS");
        }, expand: true, onClose: d2, get children() {
          return (0, n.a0)(a.fs, { value: `The present General Terms and Conditions are effective from 30 August 2020.

    These General Terms and Conditions cover the Stremio owned and operated websites located at www.strem.io and www.stremio.com and our platform provided by Stremio (the \u201CPlatform\u201D), including our mobile applications (\u201CApps\u201D or \u201CApp\u201D), and any services offered by Stremio (collectively, the \u201CServices\u201D).
    1. Basic concepts

    For the purposes of these General Terms and Conditions (\u201CGTC\u201D) the terms below shall have the following meaning:

    1.1. "Provider" - is the operator of the Services, the Stremio organization.

    1.2. "Stremio" is the Provider's software product, which Users may access through the websites www.strem.io and www.stremio.com or might be downloaded directly including but not limited to from the app-stores for iOS and Android and the use of which requires installation. Stremio is a metadata catalogue and platform for streaming of official audio and video content, available to the public.

    1.3. "Addon" is a software product, which allows content to be uploaded, stored on and/or accessed through Stremio. The Addons add to Stremio metadata and grant access to Streamable Content, subtitles and other data. The \u201COfficial Addons\u201D are developed by the Provider and are automatically accessible for the Users of Stremio, whereas \u201CCommunity Addons\u201D are developed by independent third-party developers through the use of an open-source SDK / protocol (https://github.com/Stremio/stremio-addon-sdk) and Users must manually install them. The Community Addons are accessible for manual installation once the independent developer publishes the Community Addon.

    1.4. "Library" is a functionality of Stremio, allowing Users to store and keep Content Information selected by them. For the avoidance of any doubt, the Library maintained by Registered Users in their profile represents their User Content and is a personal catalogue of Content Information of their choice.

    1.5. "User Content" is the Content Information which is selected, arranged and/or organized in the Library by each Registered User. The User Content does not include Streamable Content but only Content Information, arranged according to the preferences of the Registered User.

    1.6. "Streamable Content" is audio and visual content, available for streaming by using Stremio.

    1.7. "Information about the streamable content" or "Content Information" is information relating to certain audio-visual content, representing film, TV series, TV shows and other content, in the form of metadata relating to such audio-visual content, available through Stremio. For the avoidance of any doubt, the Content Information relating to the Streamable Content does not represent the content itself.

    1.8. "Database" is the compilation and arrangement of metadata relating to the Content Information, which is compiled by the Provider and it is the sole owner of all intellectual property rights that subsist in the Database.

    1.9. "User" means any natural person who acts in full legal capacity, who accesses the Services. Users can access in Guest mode or as Registered User.

    1.10. "Registered User" or \u201CYou\u201D means any User who has successfully completed the registration procedure for the use of Stremio, thereby having created a profile with a unique username and password.
    2. General Provisions

    2.1. These GTC are binding for each User who accesses, uses or downloads Stremio in whatever means possible regardless of whether he/she becomes a Registered User or not. Any use of the Services by a User is carried out in strict compliance with and under the implementation of the GTC and the applicable law. If the User disagrees with any of the conditions mentioned here, he/she shall not use Stremio nor any of the Services offered.

    2.2. The Provider reserves its right to amend these GTC at any time. The new version of the GTC becomes effective from the day it is announced publicly on our Services unless stated otherwise. If Users do not agree to the changes in the GTC, they can contact the Provider at the following address legal@stremio.com for further assistance. Each time you use our Services, the current version of these GTC will apply. These GTC are accessible within our Sites and App at https://www.stremio.com/tos. Accordingly, when you use any of our Services, you should check the date of these GTC (which appears at the top) and review any changes since you last reviewed the GTC.
    3. Registration

    3.1. The scope of Services available to Registered Users and Users in Guest mode varies and is dependent only upon the Provider's sole discretion. Through your profile You can, among other things, use various Services that are not available to Users in Guest mode, for example storing, arranging, selecting, deselecting and removing User Content from Your Library, updating and modifying personal data in your Profile or choosing to cancel your registration for Stremio.

    3.2. In order to complete a registration and create a profile, the User has to access the Websites and/or to download and install Stremio on his/her device and then fill in the electronic registration form thereof.

    3.2.1. In the electronic form the User has to fill in the appropriate fields relating to username, password and press the button "I understand and agree with the terms and conditions of Stremio".

    3.3. You assure that the data provided in the registration process is true, complete, accurate and not misleading and any content imported and/or shared from your Device is not infringing any intellectual property rights.

    3.4. You agree neither to disclose your username and password to any third parties, nor to use the username or password of another Registered User. You are solely responsible to protect the confidentiality of your password and username. The Provider and its employees assume no responsibility if your username or password is used by another User/s.

    3.5. You may use the \u201CLocal files\u201D addon, by means of which, You can watch Your own local Streamable Content within Stremio. Your files, accessed by this function, will not be available to any other Users and will be stored solely on Your own Device
    4. Rights and Obligations of the Community Addon Developers (\u201CCAD\u201D)

    The Provider is not liable for hosting, storing, developing, maintaining or monitoring the content available for the Users through the Community Addons.

    4.1. Without the respective right holder's prior explicit written consent, Community Addon Developers (\u201CCAD\u201D) (also falling within the definition of Users) may not stream, copy, reproduce, distribute, transmit, broadcast, display, sell, license or otherwise commercially use Streamable Content, however excluding the content the rights pertaining to which they own. For the avoidance of any doubt, CAD are also Users within the meaning of the present Terms and Conditions are subject to the Users' obligations, prescribed herein.

    4.2. CAD may make Streamable Content and Content Information that is stored on their Devices, online or cloud hosting servers, etc. available through Stremio for other Users by development and provision of Community Addons. CAD are solely responsible for such content, for its legality and the consequences of its publication and its use on and through Stremio. CAD shall further comply with Section 7 of the present GTC - \u201CIntellectual Property\u201D.
    5. Rights and Obligations of Users

    Users on Stremio can be registered (including CAD) or not. Please bear in mind that the Provider cannot technically suspend access to guest mode accounts due to the fact they are not registered. However, all Users are requested to execute the below-mentioned rights and obligations in good faith.

    5.1. Users may access the Streamable Content and the Content Information available through Stremio provided they comply with the rights and obligations that arise for them in Section 7 of the present GTC - \u201CIntellectual Property\u201D.

    5.2. Users agree that the Provider reserves its right to update and/or delete the Content Information in its sole discretion according to the provisions of the present GTC.

    5.3. Users may access all Streamable Content and Content Information through Stremio, which access is allowed only for the purpose of using the Services on Stremio.

    5.4. Users undertake not to use Stremio for:

    5.4.1. monitoring, copying or extracting any information from Stremio, including its contents, graphic user interface or Database whether done mechanically or by automated means which is considered intellectual property of the Provider according to section 7 of the present GTC - \u201CIntellectual Property\u201D.

    5.4.2. any other purpose or in ways that are non-compliant with the relevant local legislation.

    5.5. Users may, at any time and in their sole discretion, terminate the use of the Services by canceling the use of Stremio, including by canceling their registration. Their contract with the Provider is deemed terminated as of the date of the registration cancellation and the Provider will terminate the access to the User's profile. Further, Users agree that the Provider has the right, but not the obligation to terminate their access to any and all Content Information and/or Streamable Content.
    6. Rights and obligations of the Provider

    6.1. The Provider shall take due care to enable normal use of the Services.

    6.2. The Provider does not guarantee that:

    6.2.1. the access to the Services will always be uninterrupted, unlimited and/or seamless.

    6.2.2. any data or content, including Content Information and User Content, is complete, accurate, true and without error. In this regard, the Provider shall not be liable in the event that the information contained in Stremio is not correct or accurate at any given time, and where as a result of such incorrect or inaccurate information third parties have suffered damages and/or lost profits.

    6.3. Users agree to take care of any technical equipment and Internet connectivity that may be necessary for access to the Services. The Provider shall not be responsible for any technical problems and malfunction, depriving the Users from the use of the granted Services, caused by the operation of their equipment (hardware or software problem, a problem with the Internet connection, etc.).

    6.4. The Provider may in its sole discretion and without sending a warning or notice, to suspend the Users access to the Services, to certain functionalities or to the User Content, where the latter is or might be in conflict with these GTC and/or any applicable law, and/or any rules of morality and decency or any other peremptory standards.

    6.5. The Provider is under no obligation to keep or restore User Content, Content Information or other information relating to Streamable Content, which either the User, another User or any third party (including the Provider), no matter why, have deleted.

    6.6. The Provider has the right to make certain non-personalized publications on Stremio and the Website, including in the Registered Users' profiles, such as hyperlinks, banners and other forms of advertising for products and services offered either by the Provider or by third parties, as well as hyperlinks and banner ads linking to websites outside the Provider's control. Users agree and acknowledge that the Provider is not responsible for the content, accuracy and legality of such websites, services or resources that are made available to Users in this way, and the content, accuracy and legality of the information contained in any Commercial Communications sent to and received by the Users.

    6.7. The Provider is not responsible for the Content Information which Registered Users have added to the Library. The content in the Library represents their personal choice.
    7. Intellectual Property
    Intellectual Property Rights and Obligations of CAD

    7.1. For the avoidance of any doubt, CAD represent and warrant to the Provider that they own all intellectual property rights or the rights to use the Streamable Content and to add Content Information to Stremio, and that they have obtained all necessary licenses, consents, permits and approvals for their reproduction and use in Stremio for the purpose of these GTC, including to make it available to any third parties on Stremio in a manner allowing them access to the content from a place and at a time individually chosen by them. In addition, they guarantee that they have obtained the consent of the copyright holders, if any, of Content Information and Streamable Content made available by them with respect to its use, distribution and reproduction through Stremio. CAD undertake neither to add to, nor to make available to Users Content Information or Streamable Content on Stremio in a way that is contrary to any applicable laws and legislations, these GTC, the Internet ethics and to any rules of morality.

    7.2. By adding Content Information and making accessible Streamable Audio-visual Content on Stremio, CAD agree and grant to all other Users, a non-exclusive right to use and access the content for non-commercial use by using the Services of Stremio, free of charge within the scope of their own license. CAD could impose territorial restrictions in the license at their own discretion. The right granted in the preceding paragraph shall last for the time period during which the said Content Information and/or Streamable Content remains available through Stremio for a reasonable time after its removal or deletion. In case CAD are no longer entitled to use the content as specified in this section 7.1, they undertake to cease the access of the Users to the Content Information and to the Streamable Content immediately after receiving a notice that they have been deprived from the rights in question.

    7.3. CAD retain their rights (intellectual property rights or rights to use) to their content upon making it available in Stremio.

    7.4. CAD agree that once they delete the Content Information or the Streamable Content previously made available on Stremio, Registered Users who have acquired access to it before the deletion may still have such access.
    Intellectual Property Rights and Obligations of the Users

    7.5. By using the Services hereunder Users have access to information about various contents which are subject to the copyright of third parties. Users acknowledge that their access to this information serves the sole purpose to use the granted Services in accordance with these GTC for personal, non-commercial use only and are granted no right to copy, store, reproduce, modify, adapt, and to attempt any of those acts to the content accessed and used, except when they share their activities on Stremio relating to a particular content or on social networks (such as Facebook, Google+, Twitter, e-mail, etc.).

    7.6. Users may, by means of the sharing function relating to the Internet or to social media networks (such as Facebook, Google+, Pinterest, Twitter, e-mail, etc.), share Content Information of their choice. When using this function, Users may not distribute Content Information or any content otherwise explored through the Services for any commercial purposes.

    7.7. Users agree that the Provider has no objective means and hence, no obligation to control the way in which they use the Content Information and/or the Streamable Content and bears no responsibility whatsoever for such use.
    Intellectual Property Rights and Obligations of the Provider

    7.8. The Provider is not responsible for the Content Information, nor for the Streamable Content, and their compliance with the applicable law and whether their availability and distribution in Stremio affects or may affect the rights of any third parties (including intellectual property rights, personal rights, other property rights, etc.). The Provider assumes no obligation to review, monitor, control or examine the Content Information, and/or the Streamable Content, for compliance with the applicable law and these GTC. The Provider is not responsible for any content or information that is stored, streamed, conveyed or published through Stremio. The Provider has no obligation to actively seek facts or circumstances, indicating illegal activity carried out by any of the Users or CAD through the use of the Services and resulting in any violations of the applicable laws or these GTC.

    7.9. However, if the Provider obtains knowledge of the unlawful nature of those data or of that User's activities, the Provider shall act expeditiously to remove or to disable access to the data concerned and/or to disable the access to a profile, terminate the User's registration and to delete their Library and User Content without prior notice. The Provider has the right to remove or restrict access to any Addons in its own discretion in case it has reason to believe that the said Addon infringes any intellectual property right without examining the circumstances in question. The Provider is not liable for any damages and/or lost profits resulting from the removal or the restriction of the access to any content or profile available through Stremio. Should the Provider consider that any data is contrary to the applicable legislation, these GTC or the rights and legitimate interests of third parties, the Provider will suspend, restrict or amend the Services provided to Users, and will notify the right holders and the competent authorities in case the User's behavior and/or use of the Services is likely to constitute a criminal or administrative offence, if the Provider reasonably believes that the behavior of the User violates any provisions of the applicable legislation, these GTC or the rights and legitimate interests of third parties.

    7.10. The websites and applications belong to and are operated by the Provider. Each component of the websites and applications and the layout itself, including but not limited to Database, logos, trademarks, domain names, etc. which appear in any way on the websites or applications, are protected by the current laws with subject intellectual property. Therefore, they belong strictly and solely to the Provider and the use of any component is subject to prior authorisation. None of the above-mentioned components included on the Website and Platform can be reproduced, copied, edited, transmitted, downloaded or distributed in any way without the prior written consent of the Provider.

    7.11. Section 7.10. above does not in any way exclude or interfere with the rights granted according to the present section. Stremio is released under the open-source free software GPL. Under this license other developers have the right to use, copy, modify and distribute the source code of Stremio for any purpose under the GNU General Public License as published by the Free Software Foundation. The license requires preservation of the copyright and license notice of the software. The Provider is not liable in any way for the diffusion and public access to the amended/modified by other developers source code files.
    8. Limitation of Provider's Liability

    8.1. The Provider is not responsible for the Content Information, the Streamable Audio-visual Content, as well as for the activities of the Users and/or the CAD in connection with the Services. Furthermore, the Provider is not responsible for any damages and/or lost profits caused to the Users, including but not limited to CAD upon access to or use of such content available through Stremio.

    8.2. The Provider is not liable for its failure to provide the Services due to circumstances beyond the Provider's control, including but not limited to cases of force majeure, fortuitous events, problems in the network, or circumstances arising out of problems with the Users' equipment and in case of unauthorized third party access or intervention to the functioning of Stremio.

    8.3. The Provider is not liable to Users, including but not limited to CAD or to any third party for damages and/or lost profits incurred due to the use, availability, termination, suspension, modification or limitation of the Services, deletion, modification, loss, inaccuracies or incompleteness of the information used or made available through Stremio.
    9. Indemnification

    9.1. The Provider shall not be liable for any direct or indirect damages and/or lost profits sustained by Users or any third parties as a consequence of the suspension, modification or limitation of the Services, the termination of the contract or the provision of information to or the execution of orders of the competent authorities when such are result of the compliance with the provisions of the applicable laws and/or the present GTC.

    9.2. Users, including but not limited to CAD, agree to fully indemnify the Provider and any third parties for any direct or indirect damage and/or lost profit sustained as a result of claims by and/or compensations paid to third parties in connection with content that Users, including but not limited to CAD have made available to third parties or made available through use of the Services in violation of the applicable laws, these GTC or rules of morality and decency, as well as in connection with any other violations of their obligations hereunder.

    9.3.The obligations of all parties under this section 9 will survive the validity of any registration and will continue to have effect after termination of each and every contract (i.e. the use of the Services) with the Provider and after potential future termination of the Services for the maximum time allowed under the applicable legislation.
    10. Other conditions

    10.1. If any provision of the GTC is declared void, invalid or unenforceable, the other provisions of the GTC and the rights and obligations of Users, Registered Users, CAD and the Provider arising therefrom, shall remain in full force and effect. Any provisions, declared void, contestable or unenforceable will be deemed not to have been part of these GTC and will be replaced by mandatory rules of law, practice and customs.

    10.2. Any disputes not addressed in these GTC, shall be resolved under the provisions of the applicable legislation.

    10.3. In case of disputes arising under the GTC, including disputes regarding their existence or non-existence, implementation, validity or termination, the parties will make all reasonable efforts to resolve them amicably through negotiations and mutual concessions. In case the parties fail to reach an agreement within one month of the occurrence of a dispute, the dispute should be referred for resolution to the competent courts.

    10.4. The YouTube official addon is subject to external Terms and Conditions, see YouTube Terms of Services for more information.
`, autoFocus: true });
        } });
      } }), (0, n.a0)(n.wv, { get when() {
        return u2();
      }, get children() {
        return (0, n.a0)(a.aF, { get title() {
          return e2("PRIVACY_POLICY");
        }, expand: true, onClose: f2, get children() {
          return (0, n.a0)(a.fs, { value: `The present Privacy Policy is effective as of 30 August 2020
1. Introduction

At Stremio (\u201CStremio\u201D, \u201Cwe\u201D, \u201Cus\u201D or \u201Cour\u201D) we take your privacy and the security of your information very seriously.

This Privacy Policy (\u201CPolicy\u201D) covers the Stremio owned and operated sites located at www.strem.io and www.stremio.com (the \u201CSites\u201D) and our platform provided by Stremio (the \u201CPlatform\u201D), including our mobile applications (\u201CApps\u201D or \u201CApp\u201D), and any services offered by Stremio (collectively, the \u201CServices\u201D). This Privacy Policy is available at www.stremio.com and governs your access to the Services. Unless otherwise defined herein, capitalized terms shall have the meaning assigned to such terms in the General Terms and Conditions.

If you have any questions regarding this Policy please contact us at office@stremio.com. You can also contact our Data Protection Officer at dpo@stremio.com.

The Policy describes the types of information we gather from Service Users, including people using our Services and from individual users (\u201Cyou\u201D or \u201Cusers\u201D) interacting with the Services, and how we use, transfer, and secure such information. By using any of the Services, you agree to be bound by this Policy. This Policy does not govern information we receive from third parties who are not Service Users. If you do not agree to the terms of this Policy, please do not use any of our Services. The new version of the Privacy Policy becomes effective from the day it is announced publicly on our Services unless stated otherwise. Each time you use our Services, the current version of this Policy will apply. This Policy is accessible within our Sites and App at Privacy Policy and available at www.stremio.com/privacy. Accordingly, when you use any of our Services, you should check the date of this Policy (which appears at the top) and review any changes since you last reviewed the Policy.
2. Terms

For the purposes of this Privacy Policy, the terms related to personal data used within the present document have the meanings arranged in the General Data Protection Regulation (EC) 2016/679. Any other relevant definition is coordinated with the Terms of Use, applicable for our Services.
3. Types of Data We Collect, methods of collection

IMPORTANT: We do not collect any history or logs of what addons/sources you use for streaming! Furthermore, if you login as a Guest User, no personal data is collected whatsoever.

Users directly provide Us with most of the data that We collect and process.

Data provided by you:

Stremio collects data in order to create an account and provide access to our Services, including our Site, Platform and App. You provide us with your email address and password to create an account. These are all stored in order to create your account and provide you with the necessary access. Your email is used for account recovery purposes as well as for contacting support. Your username is your email address. Your password is stored in a secure, cryptographically hashed state.

Log information:

When you use our Services, some data is automatically collected. Such data could include your computer's Internet Protocol (\u201CIP\u201D) address, operating system, type and language, device identifier numbers, and the time and date of your use. The log information is collected to provide a stable, secure and pleasant experience for users on the Services and to ensure the performance, correctness, security and reliability of our Services.

Customer support Data:

Users may contact us with the purpose of providing technical support. Users may provide name, email address, further contact details and any other additional information which the user decides to disclose to us for customer support.

Analytics data:

Analytical data is collected in an anonymized manner and aggregated in order to improve the performance, marketing efforts and quality of our services.

We may obtain information from other sources:

Data collected by Third Parties:

We may obtain information from other sources. For example, when you use your account through a social network such as Facebook and their Facebook Login feature, we will obtain access to certain information including your name, profile picture and email in accordance with the authorization procedures determined by said source.

Other similar sources may include Google and iTunes Store in accordance with their authorization procedures. From Google and iTunes Store we collect indirect identificators such as type and version of the operational system used, time of installation of the Services, country, etc. A single indirect identificator cannot be used to identify a User but combined with other indirect identificators it may be possible to identify a User.

All of the third party solutions we use adhere to the latest data protection laws and best practices.

We use the personal data only for the purposes mentioned above. In case We intend to use Your personal data for a purpose other than the initial one, We shall provide the data subjects with information prior to the actions regarding the new purpose, the legal basis and the retention period.
4. Storage and deletion of personal data

We collect and store your personal data on the territory of the European Economic Area (EEA). We enforce any and all necessary measures to protect and guarantee the safety of the personal data if the latter is transferred in a country outside the EEA.

Once the retention period lapses, We delete all personal data, together with any existing copies, unless the Union or Member State laws require storage of the personal data. We may hold your data for extended periods of time for the purpose of complying with legal requirements, legal requests, conducted investigations, or investigations of possible violations of our terms and policies or otherwise to prevent harm.

We take all necessary technical and organizational measures for the proper deletion of your personal data. The personal data is deleted according to our retention schedule and technical mechanisms available from all production information systems and all backup systems.
5. Cookies

Cookies are small pieces of data under the form of text files, which are stored on your device. They allow recognition of the browser and storage of certain information.

The only cookies we use are Google Analytics and Facebook Pixel which collect statistical information such as country of access and time spent on the Services. They are collected for statistical purposes, to improve the performance, marketing efforts and quality of our services.
6. Your rights and how you can exercise them

You have the right to:

    Request from us access to the personal data that we hold about you in a portable format.
    Withdraw your consent when it is the legal basis for collection of data.
    Request from us correction of any collected personal data. The information may include only the subject of your personal data collection.
    Receive a copy of your personal data in electronic format.
    \u201CThe right to be forgotten\u201D- you have the right to request the deletion of your personal data at any time (the right is not absolute).
    Receive information from Us about Our activities in connection to your personal data, including the purposes of collection and storage, the period of time for storage, the methods of collecting, the presence of automated processing, etc.
    Delete your account at any time.
    Receive your data and transfer them to another controller.
    You have the right to lodge a complaint with a supervisory authority, in particular in the Member State of your habitual residence, place of work or place of the alleged infringement if you consider that there is personal data breach.

To exercise your rights you can always contact us by sending mail at dpo@stremio.com to our Data Protection Officer (DPO), or contact us at office@stremio.com.

For managing your account information, you can use the profile settings feature in our services. You may delete your account from the User Panel hosted at www.stremio.com.
7. Sharing of Personal Information with Third Parties

IMPORTANT: We do not collect any history or logs of what addons/sources you use for streaming! Furthermore, if you login as a Guest User, no personal data will be collected whatsoever.

We do not sell, trade or otherwise share Personal Information with third parties for the marketing purposes of the third party.

    We may transfer Personal Information to third party service providers (see list below) for providing the Services. These third party service providers are not authorized to retain, share, store or use the Personal Information for any purposes other than to provide the services they have been hired to provide.
    Analytical personal data is shared with partnering third-party service providers for the purposes of improving the performance, marketing efforts and quality of our services, conducting error-monitoring to help discover and prioritize errors in real-time:
    Google Analytics
    BigQuery
    Sentry
    YouTube
    Due to the use of these third-party services, users should also be aware of the Google Privacy Policy and Sentry Privacy Policy.
    We may elect to transfer your Personal Information to third parties under special circumstances to: (i) to comply with a legal requirement, judicial proceeding, court order, or legal process served on Stremio or its affiliates solely when required under the applicable law, (ii) to investigate a possible crime, such as fraud or identity theft; (iii) in connection with the sale, purchase, merger, reorganization, liquidation or dissolution of Stremio; (iv) when we believe it is necessary to protect the rights, property, or safety of Stremio or other persons, or (v) as otherwise required or permitted by law, including any contractual obligations of Stremio.

8. Children and Privacy

Our services are not directed towards children and you may not use them if you have not reached full legal capacity in accordance with the legislation applicable for the corresponding country.

We do not knowingly collect, target or allow the use of our services to persons under the age of full legal capacity.

If you are under the age of full legal capacity, please do not use our services and do not send us any personal data. If you believe that we might have any data from or about a person under the age of full legal capacity, please contact us.

We will delete all personal data of the above-mentioned persons for which we become aware that they do not have the necessary legal capacity.

We shall not be held liable in case a person provides incorrect and false data for the completed years.
9. Security and breach measures

We undertake all necessary technological, organizational and technical measures to protect your personal data.

We implement measures such as pseudonymisation and encryption of personal data in order to ensure a level of security which is appropriate to the risk. Some information is stored in such a form that could not be used to identify you directly. Your password is stored in a secure, cryptographically hashed state. Your personal data is stored on protected servers. Our Services have SSL certificates which represent Internet security protocols - they provide additional guarantee for the safe use of our Services.The servers and the access to your personal data is strictly controlled and limited solely to a limited number of people.

In case of personal data breach, We will undertake every possible action in an appropriate and timely manner, to avoid any material or non-material damage to the data subjects. Breaches in the security may include identity theft, identity fraud, limitation of rights, unauthorised access to your account, loss of confidentiality of personal data, etc. We have undertaken measures to ensure the ability to restore the availability and access to personal data in a timely manner in the event of physical or technical incident. As soon as the controller becomes aware of the breach, Users and the competent authorities will be notified immediately. You may be asked to follow certain instructions for prevention of breaches including but not limited to password or username change.

Stremio uses Google services (Google Analytics, BigQuery, YouTube), as such, the Google Security Settings should also be taken into consideration.
10. Account Deletion

In order to delete your Stremio account you must:

    Log in to the User Dashboard
    Scroll down to the "Delete Account" section
    Press the "DELETE ACCOUNT" button (this action cannot be undone)

11. Supervisory authority

If you have any questions regarding the present Policy, please connect to us through the following email addresses: office@stremio.com or dpo@stremio.com
`, autoFocus: true });
        } });
      } }), (0, n.a0)(n.wv, { get when() {
        return g2();
      }, get children() {
        return (0, n.a0)(a.aF, { get title() {
          return e2("SETTINGS_SERVER_CONFIGURE_INPUT");
        }, onClose: b2, get children() {
          var _urlVal = t2.settings().streamingServerUrl;
          return [(0, n.a0)(a.ks, { value: _urlVal, autoFocus: true, onChange: (nv) => {
            _urlVal = nv;
          } }), (0, n.a0)(a.$n, { label: "Auto-Detect", onPress: () => {
            if (window.__serverDialogAutoDetect) window.__serverDialogAutoDetect();
          } }), (0, n.a0)(a.$n, { get label() {
            return e2("BUTTON_CONFIRM");
          }, onPress: () => {
            var _finalUrl = (_urlVal || "").trim();
            while (_finalUrl.charAt(_finalUrl.length - 1) === "/") _finalUrl = _finalUrl.slice(0, -1);
            if (_finalUrl && _finalUrl.indexOf("://") === -1) _finalUrl = "http://" + _finalUrl;
            _urlVal = _finalUrl;
            if (_finalUrl) {
              w2(_finalUrl);
              if (window.__serverDialogTest) window.__serverDialogTest(_finalUrl);
            }
            b2();
          } })];
        } });
      } })];
    } });
  };
}, 6120: (e, t, o) => {
  o.d(t, { A: () => s });
  var n = o(4474), r = o.n(n), a = o(2670), i = o.n(a)()(r());
  i.push([e.id, ".settings-jvCLz {\n  position: relative;\n}\n", ""]), i.locals = { settings: "settings-jvCLz" };
  const s = i;
} }]);
