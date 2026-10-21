"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([[6415], { 297: (e, n, t) => {
  t.d(n, { A: () => s });
  var r = t(4474), i = t.n(r), a = t(2670), o = t.n(a)()(i());
  o.push([e.id, ".streams-ky0iI {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.streams-ky0iI > * {\n  margin: 0.75rem 0 0.75rem 0;\n}\n.streams-ky0iI > :first-child {\n  margin-top: 0;\n}\n.streams-ky0iI > :last-child {\n  margin-bottom: 0;\n}\n.streams-ky0iI .filters-ShFgd {\n  flex: none;\n  display: flex;\n  flex-direction: row;\n  padding: 0 4rem;\n}\n.streams-ky0iI .filters-ShFgd > * {\n  margin: 0 0.75rem 0 0.75rem;\n}\n.streams-ky0iI .filters-ShFgd > :first-child {\n  margin-left: 0;\n}\n.streams-ky0iI .filters-ShFgd > :last-child {\n  margin-right: 0;\n}\n.streams-ky0iI .streams-list-atX0D {\n  flex: none;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  padding-left: 4rem;\n}\n.streams-ky0iI .streams-list-atX0D > * {\n  margin: 0 1em 0 1em;\n}\n.streams-ky0iI .streams-list-atX0D > :first-child {\n  margin-left: 0;\n}\n.streams-ky0iI .streams-list-atX0D > :last-child {\n  margin-right: 0;\n}\n.streams-ky0iI .streams-list-atX0D .error-PL4_L {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 0.5rem;\n  font-size: 1.5rem;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n.streams-ky0iI .stream-details-bgXP4 {\n  flex: 1 0 auto;\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0 4rem;\n}\n.streams-ky0iI .stream-details-bgXP4 .inner-a1cem {\n  flex: 1 0 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  border-radius: 1em;\n  padding: 4rem 4rem;\n  background-color: rgba(255, 255, 255, 0.03);\n}\n.streams-ky0iI .stream-details-bgXP4 .inner-a1cem > * {\n  margin: 0.25rem 0 0.25rem 0;\n}\n.streams-ky0iI .stream-details-bgXP4 .inner-a1cem > :first-child {\n  margin-top: 0;\n}\n.streams-ky0iI .stream-details-bgXP4 .inner-a1cem > :last-child {\n  margin-bottom: 0;\n}\n.streams-ky0iI .stream-details-bgXP4 .inner-a1cem .name-pmYIm {\n  font-size: 2rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.streams-ky0iI .stream-details-bgXP4 .inner-a1cem .description-M3izB {\n  white-space: pre;\n  font-size: 1.6rem;\n  font-weight: 500;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n", ""]), o.locals = { streams: "streams-ky0iI", filters: "filters-ShFgd", "streams-list": "streams-list-atX0D", error: "error-PL4_L", "stream-details": "stream-details-bgXP4", inner: "inner-a1cem", name: "name-pmYIm", description: "description-M3izB" };
  const s = o;
}, 2880: (e, n, t) => {
  t.d(n, { A: () => s });
  var r = t(4474), i = t.n(r), a = t(2670), o = t.n(a)()(i());
  o.push([e.id, ".video-xYWmH {\n  flex: 0 0 auto;\n  position: relative;\n  height: 20rem;\n  border-radius: 1em;\n  opacity: 0.5;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.03);\n  will-change: transform, opacity;\n  transition: transform 0.1s ease-out, opacity 0.1s ease-out;\n  width: calc(20rem * (16 / 9));\n}\n.video-xYWmH .indicator-BeMF_ {\n  z-index: 1;\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5em;\n  background-color: #0c0c10;\n}\n.video-xYWmH .indicator-BeMF_ > * {\n  margin: 0 0.375rem 0 0.375rem;\n}\n.video-xYWmH .indicator-BeMF_ > :first-child {\n  margin-left: 0;\n}\n.video-xYWmH .indicator-BeMF_ > :last-child {\n  margin-right: 0;\n}\n.video-xYWmH .indicator-BeMF_ .episode-OaWDb {\n  flex: none;\n  font-size: 1.2rem;\n  font-weight: 600;\n  line-height: 1.5rem;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.video-xYWmH .indicator-BeMF_ .watched-icon-NszqV {\n  flex: none;\n  height: 1.5rem;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.video-xYWmH .overlay-EO8ce {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.video-xYWmH .overlay-EO8ce .icon-P2LFT {\n  height: 6rem;\n  color: hsla(0, 0%, 100%, 0.9);\n  opacity: 0.5;\n}\n.video-xYWmH .thumbnail-E7g8E {\n  z-index: 0;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n}\n.video-xYWmH .thumbnail-E7g8E.blurred-u0MxK {\n  filter: blur(1rem);\n  -webkit-filter: blur(1rem);\n}\n.video-xYWmH:hover {\n  opacity: 1;\n}\n.video-xYWmH[focused] {\n  opacity: 1;\n  transform: scale(1.06);\n}\n", ""]), o.locals = { video: "video-xYWmH", indicator: "indicator-BeMF_", episode: "episode-OaWDb", "watched-icon": "watched-icon-NszqV", overlay: "overlay-EO8ce", icon: "icon-P2LFT", thumbnail: "thumbnail-E7g8E", blurred: "blurred-u0MxK" };
  const s = o;
}, 3523: (e, n, t) => {
  t.d(n, { A: () => s });
  var r = t(4474), i = t.n(r), a = t(2670), o = t.n(a)()(i());
  o.push([e.id, ".videos-vmDwk {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.videos-vmDwk > * {\n  margin: 1rem 0 1rem 0;\n}\n.videos-vmDwk > :first-child {\n  margin-top: 0;\n}\n.videos-vmDwk > :last-child {\n  margin-bottom: 0;\n}\n.videos-vmDwk .filters-V7aR7 {\n  flex: none;\n  display: flex;\n  flex-direction: row;\n  padding: 0 4rem;\n}\n.videos-vmDwk .filters-V7aR7 > * {\n  margin: 0 0.75rem 0 0.75rem;\n}\n.videos-vmDwk .filters-V7aR7 > :first-child {\n  margin-left: 0;\n}\n.videos-vmDwk .filters-V7aR7 > :last-child {\n  margin-right: 0;\n}\n.videos-vmDwk .videos-list-cruNx {\n  flex: none;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  padding-left: 4rem;\n}\n.videos-vmDwk .videos-list-cruNx > * {\n  margin: 0 1em 0 1em;\n}\n.videos-vmDwk .videos-list-cruNx > :first-child {\n  margin-left: 0;\n}\n.videos-vmDwk .videos-list-cruNx > :last-child {\n  margin-right: 0;\n}\n.videos-vmDwk .actions-Q6BJy {\n  flex: none;\n  display: flex;\n  flex-direction: row;\n  padding: 0 4rem;\n}\n.videos-vmDwk .actions-Q6BJy > * {\n  margin: 0 0.75rem 0 0.75rem;\n}\n.videos-vmDwk .actions-Q6BJy > :first-child {\n  margin-left: 0;\n}\n.videos-vmDwk .actions-Q6BJy > :last-child {\n  margin-right: 0;\n}\n", ""]), o.locals = { videos: "videos-vmDwk", filters: "filters-V7aR7", "videos-list": "videos-list-cruNx", actions: "actions-Q6BJy" };
  const s = o;
}, 5026: (e, n, t) => {
  e.exports = t.p + "shield.png";
}, 5629: (e, n, t) => {
  t.d(n, { A: () => s });
  var r = t(4474), i = t.n(r), a = t(2670), o = t.n(a)()(i());
  o.push([e.id, ".stream-rpXLF {\n  flex: none;\n  position: relative;\n  height: 9rem;\n  width: 30rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 1em;\n  padding: 0 2rem;\n  background-color: rgba(255, 255, 255, 0.03);\n  opacity: 0.6;\n  overflow: hidden;\n  user-select: none;\n}\n.stream-rpXLF .play-icon-Z9iaQ {\n  flex: none;\n  position: relative;\n  height: 4.5rem;\n  width: 4.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 2rem;\n  border-radius: 100%;\n  transition: background-color 0.1s ease-in;\n}\n.stream-rpXLF .play-icon-Z9iaQ .icon-MGVZf {\n  flex: none;\n  height: 3rem;\n  width: 3rem;\n  margin-left: 0.5rem;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.stream-rpXLF .details-d5pag {\n  flex: 0 1 auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  overflow: hidden;\n}\n.stream-rpXLF .details-d5pag > * {\n  margin: 0.25rem 0 0.25rem 0;\n}\n.stream-rpXLF .details-d5pag > :first-child {\n  margin-top: 0;\n}\n.stream-rpXLF .details-d5pag > :last-child {\n  margin-bottom: 0;\n}\n.stream-rpXLF .details-d5pag .name-IfzDf {\n  flex: none;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.stream-rpXLF .details-d5pag .description-yTp1H {\n  flex: none;\n  font-size: 1.3rem;\n  font-weight: 500;\n  color: hsla(0, 0%, 100%, 0.5);\n  white-space: nowrap;\n}\n.stream-rpXLF:hover,\n.stream-rpXLF[focused] {\n  opacity: 1;\n}\n.stream-rpXLF[focused] .play-icon-Z9iaQ {\n  background-color: hsl(147.7, 68%, 51.7%);\n}\n", ""]), o.locals = { stream: "stream-rpXLF", "play-icon": "play-icon-Z9iaQ", icon: "icon-MGVZf", details: "details-d5pag", name: "name-IfzDf", description: "description-yTp1H" };
  const s = o;
}, 7712: (e, n, t) => {
  t.d(n, { A: () => s });
  var r = t(4474), i = t.n(r), a = t(2670), o = t.n(a)()(i());
  o.push([e.id, ".details-omgjE {\n  display: flex;\n  flex-direction: column;\n}\n.details-omgjE .background-G0atu {\n  z-index: 0;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  user-select: none;\n}\n.details-omgjE .background-G0atu .overlay-IpSXf {\n  z-index: 1;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #0c0c10;\n  opacity: 0.95;\n}\n.details-omgjE .background-G0atu .image-fkksf {\n  z-index: 0;\n  height: 100%;\n}\n.details-omgjE .background-G0atu .image-fkksf.blurred-LTDh_ {\n  filter: blur(15px);\n}\n.details-omgjE .info-c3Gsa {\n  z-index: 1;\n  flex: none;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  height: 44vh;\n  padding: 2rem 4rem;\n  user-select: none;\n}\n.details-omgjE .info-c3Gsa > * {\n  margin: 0.5rem 0 0.5rem 0;\n}\n.details-omgjE .info-c3Gsa > :first-child {\n  margin-top: 0;\n}\n.details-omgjE .info-c3Gsa > :last-child {\n  margin-bottom: 0;\n}\n.details-omgjE .info-c3Gsa.info-720p-jPzlb {\n  height: 67vh;\n}\n.details-omgjE .info-c3Gsa .logo-rSs1m {\n  flex: none;\n  height: calc(10rem - 1rem);\n  margin-bottom: 2rem;\n  border-radius: 1em;\n}\n.details-omgjE .info-c3Gsa .title-OL31B {\n  flex: none;\n  margin-bottom: 0.5rem;\n  font-size: 3.7rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.details-omgjE .info-c3Gsa .video-title-dEjBn {\n  flex: none;\n  margin-bottom: 0.5rem;\n  font-size: 2rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.details-omgjE .info-c3Gsa .video-date-U5BHg {\n  flex: none;\n  margin-bottom: 0.5rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n.details-omgjE .info-c3Gsa .description-Vy9xR {\n  flex: none;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n  font-size: 1.7rem;\n  font-weight: 500;\n  color: hsla(0, 0%, 100%, 0.5);\n  overflow: hidden;\n}\n.details-omgjE .content-eCvgF {\n  z-index: 1;\n  flex: 1 0 auto;\n  position: relative;\n}\n", ""]), o.locals = { details: "details-omgjE", background: "background-G0atu", overlay: "overlay-IpSXf", image: "image-fkksf", blurred: "blurred-LTDh_", info: "info-c3Gsa", "info-720p": "info-720p-jPzlb", logo: "logo-rSs1m", title: "title-OL31B", "video-title": "video-title-dEjBn", "video-date": "video-date-U5BHg", description: "description-Vy9xR", content: "content-eCvgF" };
  const s = o;
}, 8826: (e, n, t) => {
  t.r(n), t.d(n, { default: () => me });
  var r = t(7781), i = t(2555), a = (t(928), t(4999), t(6399), t(1012), t(7100), t(2408)), o = t(6066), s = t(1200), l = t(330), d = (t(2113), t(5802), t(5020), t(1273), t(6019), t(7621), t(7500)), c = t.n(d), m = t(3497), u = t(9238), g = t(9170), v = t(2497), h = t(8688), f = (t(3785), t(7763), t(3391), t(1430), t(589), t(4512), (0, r.vs)("<div><h1>Warning / \uACBD\uACE0")), p = (0, r.vs)("<div><p>You are about to exit Stremio and open <!>. If you do this you will have to open Stremio again from the Home Screen. Are you sure?</p><p>Stremio\uB97C \uC885\uB8CC\uD558\uACE0 <!>\uB97C \uC5F4\uB824\uACE0 \uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uD648 \uD654\uBA74\uC5D0\uC11C Stremio\uB97C \uB2E4\uC2DC \uC5F4\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uD655\uC2E4\uD558\uC2E0\uAC00\uC694?"), b = (0, r.vs)("<div class=buttons>");
  const x = { "netflix.com": "Netflix", "disneyplus.com": "Disney Plus", "amazon.com": "Amazon Prime", "apple.com": "Apple TV", "hbomax.com": "HBO Max", "hulu.com": "Hulu", "peacock.tv": "Peacock" }, y = (e2) => {
    const n2 = (0, i.To)((() => {
      const { externalUrl: n3 } = e2.stream;
      return n3 && ((e3) => {
        try {
          var n4;
          const { host: t2 } = new URL(e3), [, r2] = null !== (n4 = Object.entries(x).find((([e4]) => t2.endsWith(e4)))) && void 0 !== n4 ? n4 : [];
          return r2;
        } catch (e4) {
          return console.error("usePlatform", "urlToAppName", e4), null;
        }
      })(n3);
    }));
    return (0, i.a0)(l.aF, { expand: true, get onClose() {
      return e2.onClose;
    }, get children() {
      return [(o2 = f(), s2 = o2.firstChild, (0, r.Yr)(o2, (0, i.a0)(l._V, { class: "image", get src() {
        return t(5026);
      } }), s2), o2), (() => {
        var e3 = p(), t2 = e3.firstChild, i2 = t2.firstChild.nextSibling, a3 = (i2.nextSibling, t2.nextSibling), o3 = a3.firstChild.nextSibling;
        o3.nextSibling;
        return (0, r.Yr)(t2, n2, i2), (0, r.Yr)(a3, n2, o3), e3;
      })(), (a2 = b(), (0, r.Yr)(a2, (0, i.a0)(l.$n, { label: "Back / \uB4A4\uB85C", autoFocus: true, get onPress() {
        return e2.onClose;
      } }), null), (0, r.Yr)(a2, (0, i.a0)(l.$n, { label: "Leave Stremio / Stremio \uC885\uB8CC", get onPress() {
        return e2.onConfirm;
      } }), null), a2)];
      var a2, o2, s2;
    } });
  };
  var w = (0, r.vs)("<div class=message>Opening other apps is not currently possible because this device does not support deep linking yet."), k = (0, r.vs)("<div class=buttons>");
  const A = (e2) => (0, i.a0)(l.aF, { title: "Attention", get onClose() {
    return e2.onClose;
  }, get children() {
    return [w(), (n2 = k(), (0, r.Yr)(n2, (0, i.a0)(l.$n, { label: "I understand", autoFocus: true, get onPress() {
      return e2.onClose;
    } })), n2)];
    var n2;
  } });
  var Y = t(2434), S = t.n(Y), I = t(5235), E = t.n(I), F = t(6049), D = t.n(F), L = t(8938), z = t.n(L), j = t(502), C = t.n(j), P = t(3611), T = t.n(P), W = t(5629), O = {};
  O.styleTagTransform = T(), O.setAttributes = z(), O.insert = D().bind(null, "head"), O.domAPI = E(), O.insertStyleElement = C();
  S()(W.A, O);
  const X = W.A && W.A.locals ? W.A.locals : void 0;
  var B = (0, r.vs)("<div>"), H = (0, r.vs)("<div><div></div><div>");
  const _ = (e2) => {
    const n2 = (0, v.Vj)(), t2 = (0, s.W6)(), [a2, o2, l2] = (0, h.zD)(), [d2, c2, m2] = (0, h.zD)(), f2 = () => {
      const { externalUrl: t3 } = e2.stream;
      t3 && ("Tizen" === n2.name && e2.stream.tizenUrl ? n2.openExternal({ url: t3, payload: e2.stream.tizenUrl }) : "webOS" === n2.name && e2.stream.webosUrl ? n2.openExternal({ url: t3, payload: e2.stream.webosUrl }) : n2.openExternal({ url: t3 }));
    }, p2 = () => {
      const { externalUrl: r2, deepLinks: i2 } = e2.stream;
      r2 ? n2.isTitan || n2.isNetTV ? c2() : o2() : i2.player && t2.navigate(i2.player);
    };
    return [(0, i.a0)(u.zo, { get class() {
      return X.stream;
    }, get autoFocus() {
      return e2.autoFocus;
    }, onFocus: () => {
      e2.onFocus(e2.index);
    }, onPress: p2, onClick: p2, get children() {
      return [(o3 = B(), (0, r.Yr)(o3, (0, i.a0)(g.A, { get class() {
        return X.icon;
      }, name: "play" })), (0, i.gb)((() => (0, r.s7)(o3, X["play-icon"]))), o3), (n3 = H(), t3 = n3.firstChild, a3 = t3.nextSibling, (0, r.Yr)(t3, (() => e2.stream.name)), (0, r.Yr)(a3, (() => e2.stream.description)), (0, i.gb)(((e3) => {
        var i2 = X.details, o4 = X.name, s2 = X.description;
        return i2 !== e3.e && (0, r.s7)(n3, e3.e = i2), o4 !== e3.t && (0, r.s7)(t3, e3.t = o4), s2 !== e3.a && (0, r.s7)(a3, e3.a = s2), e3;
      }), { e: void 0, t: void 0, a: void 0 }), n3)];
      var n3, t3, a3, o3;
    } }), (0, i.a0)(i.wv, { get when() {
      return a2();
    }, get children() {
      return (0, i.a0)(y, { get stream() {
        return e2.stream;
      }, onConfirm: f2, onClose: l2 });
    } }), (0, i.a0)(i.wv, { get when() {
      return d2();
    }, get children() {
      return (0, i.a0)(A, { onClose: m2 });
    } })];
  };
  var G = t(297), V = {};
  V.styleTagTransform = T(), V.setAttributes = z(), V.insert = D().bind(null, "head"), V.domAPI = E(), V.insertStyleElement = C();
  S()(G.A, V);
  const M = G.A && G.A.locals ? G.A.locals : void 0;
  var R = (0, r.vs)("<div>"), N = (0, r.vs)("<div><div><div></div><div>");
  const U = (e2) => {
    var n2, t2;
    const { t: a2 } = (0, m.B)(), d2 = (0, v.Vj)(), { metaDetails: g2 } = (0, o.gK)(), [h2, f2] = (0, s.ok)(), [p2, b2] = (0, i.n5)(null !== (n2 = h2().addon) && void 0 !== n2 ? n2 : null), [x2, y2] = (0, i.n5)(parseInt(null !== (t2 = h2().stream) && void 0 !== t2 ? t2 : "0")), w2 = () => {
      var n3;
      return e2.addonsStreams.filter((({ addon: e3 }) => null === p2() || p2() === e3.transportUrl)).filter((({ content: e3 }) => null !== e3.ready)).flatMap((({ addon: e3, content: n4 }) => {
        var t3;
        return null === (t3 = n4.ready) || void 0 === t3 ? void 0 : t3.map(((n5) => {
          var t4;
          return { ...n5, name: null !== (t4 = n5.name) && void 0 !== t4 ? t4 : e3.manifest.name };
        }));
      })).filter(((e3) => null !== e3)).filter((({ externalUrl: e3, tizenUrl: n4, webosUrl: t3 }) => !e3 || d2.isWeb || d2.isVidaa || d2.isTitan || d2.isNetTV || d2.isTizen && n4 || d2.isWebOS && t3)).slice(0, (null !== (n3 = x2()) && void 0 !== n3 ? n3 : 0) + 5);
    }, k2 = (e3) => {
      (0, i.vA)((() => {
        b2(e3), y2(null), y2(0);
      }));
    }, A2 = (e3) => {
      y2(e3);
    };
    return (0, i.EH)((() => {
      f2({ addon: p2(), stream: x2() }, true);
    })), Y2 = R(), (0, r.Yr)(Y2, (0, i.a0)(u.Gk, { get class() {
      return M.filters;
    }, leave: ["left", "down"], get children() {
      return [(0, i.a0)(l.l6, { get options() {
        return [{ value: null, label: a2("ALL_ADDONS"), selected: null === p2() }, ...e2.addonsStreams.filter((({ content: e3 }) => null !== e3.ready)).map((({ addon: e3 }) => ({ value: e3.transportUrl, label: e3.manifest.name, selected: p2() === e3.transportUrl })))];
      }, autoFocus: true, onChange: k2 }), (0, i.a0)(i.wv, { get when() {
        return (0, r.ph)((() => !!g2.supportsRating()))() && "movie" === e2.type;
      }, get children() {
        return (0, i.a0)(l.GW, { get class() {
          return M.rating;
        }, get rating() {
          return e2.rating;
        }, get onLiked() {
          return e2.onLiked;
        }, get onLoved() {
          return e2.onLoved;
        } });
      } })];
    } }), null), (0, r.Yr)(Y2, (0, i.a0)(l.OY, { get class() {
      return M["streams-list"];
    }, axis: "horizontal", get index() {
      return x2() || 0;
    }, get maxIndex() {
      return w2().length - 1;
    }, get children() {
      return (0, i.a0)(i.dO, { get fallback() {
        return (0, i.a0)(l.Rh, {});
      }, get children() {
        return [(0, i.a0)(i.YG, { get when() {
          return w2().length;
        }, get children() {
          return (0, i.a0)(i.jK, { get each() {
            return w2();
          }, children: (e3, n3) => (0, i.a0)(_, { get stream() {
            return e3();
          }, index: n3, get autoFocus() {
            return x2() === n3;
          }, onFocus: A2 }) });
        } }), (0, i.a0)(i.YG, { get when() {
          return null === (n3 = e2.addonsStreams.find((({ addon: e3 }) => p2() === e3.transportUrl))) || void 0 === n3 ? void 0 : n3.content.error;
          var n3;
        }, get children() {
          var e3 = R();
          return (0, r.Yr)(e3, (() => a2("NO_STREAMS_FROM_ADDON"))), (0, i.gb)((() => (0, r.s7)(e3, M.error))), e3;
        } }), (0, i.a0)(i.YG, { get when() {
          return e2.addonsStreams.every((({ content: e3 }) => e3.error));
        }, get children() {
          var e3 = R();
          return (0, r.Yr)(e3, (() => a2("NO_STREAMS_FROM_ADDONS"))), (0, i.gb)((() => (0, r.s7)(e3, M.error))), e3;
        } })];
      } });
    } }), null), (0, r.Yr)(Y2, (0, i.a0)(i.wv, { get when() {
      return (() => {
        var e3;
        const n3 = x2();
        return null !== n3 && null !== (e3 = w2()[n3]) && void 0 !== e3 ? e3 : null;
      })();
    }, children: (e3) => {
      return n3 = N(), t3 = n3.firstChild, a3 = t3.firstChild, o2 = a3.nextSibling, (0, r.Yr)(a3, (() => e3().name)), (0, r.Yr)(o2, (() => e3().description)), (0, i.gb)(((e4) => {
        var i2 = M["stream-details"], s2 = M.inner, l2 = M.name, d3 = M.description;
        return i2 !== e4.e && (0, r.s7)(n3, e4.e = i2), s2 !== e4.t && (0, r.s7)(t3, e4.t = s2), l2 !== e4.a && (0, r.s7)(a3, e4.a = l2), d3 !== e4.o && (0, r.s7)(o2, e4.o = d3), e4;
      }), { e: void 0, t: void 0, a: void 0, o: void 0 }), n3;
      var n3, t3, a3, o2;
    } }), null), (0, i.gb)((() => (0, r.s7)(Y2, c()(e2.class, M.streams)))), Y2;
    var Y2;
  };
  t(8267), t(4965), t(9024), t(5381), t(774), t(8109), t(6705);
  var $ = t(2880), K = {};
  K.styleTagTransform = T(), K.setAttributes = z(), K.insert = D().bind(null, "head"), K.domAPI = E(), K.insertStyleElement = C();
  S()($.A, K);
  const Q = $.A && $.A.locals ? $.A.locals : void 0;
  var J = (0, r.vs)("<div> "), Z = (0, r.vs)("<div>");
  const q = (e2) => {
    const { t: n2 } = (0, m.B)(), { ctx: t2 } = (0, o.gK)(), a2 = (0, s.W6)(), l2 = () => {
      var n3;
      const t3 = null !== (n3 = e2.deepLinks.player) && void 0 !== n3 ? n3 : e2.deepLinks.metaDetailsStreams;
      a2.navigate(t3);
    };
    return (0, i.a0)(u.zo, { get class() {
      return Q.video;
    }, get autoFocus() {
      return e2.autoFocus;
    }, onFocus: () => {
      e2.onFocus(e2.index);
    }, onPress: l2, onClick: l2, get children() {
      return [(0, i.a0)(i.wv, { get when() {
        return e2.episode || e2.watched;
      }, get children() {
        var t3 = Z();
        return (0, r.Yr)(t3, (0, i.a0)(i.wv, { get when() {
          return e2.episode;
        }, get children() {
          var t4 = J(), a4 = t4.firstChild;
          return (0, r.Yr)(t4, (() => n2("EPISODE_ABBREVIATION")), a4), (0, r.Yr)(t4, (() => e2.episode), null), (0, i.gb)((() => (0, r.s7)(t4, Q.episode))), t4;
        } }), null), (0, r.Yr)(t3, (0, i.a0)(i.wv, { get when() {
          return e2.watched;
        }, get children() {
          return (0, i.a0)(g.A, { get class() {
            return Q["watched-icon"];
          }, name: "checkmark" });
        } }), null), (0, i.gb)((() => (0, r.s7)(t3, Q.indicator))), t3;
      } }), (o2 = Z(), (0, r.Yr)(o2, (0, i.a0)(i.wv, { get when() {
        return e2.upcoming;
      }, get children() {
        return (0, i.a0)(g.A, { get class() {
          return Q.icon;
        }, name: "hourglass" });
      } })), (0, i.gb)((() => (0, r.s7)(o2, Q.overlay))), o2), (a3 = Z(), (0, i.gb)(((n3) => {
        var i2 = c()(Q.thumbnail, { [Q.blurred]: t2.settings().hideSpoilers && e2.season && e2.episode && !e2.watched }), o3 = `url(${e2.thumbnail})`;
        return i2 !== n3.e && (0, r.s7)(a3, n3.e = i2), o3 !== n3.t && (0, r.$h)(a3, "background-image", n3.t = o3), n3;
      }), { e: void 0, t: void 0 }), a3)];
      var a3, o2;
    } });
  };
  var ee = t(3523), ne = {};
  ne.styleTagTransform = T(), ne.setAttributes = z(), ne.insert = D().bind(null, "head"), ne.domAPI = E(), ne.insertStyleElement = C();
  S()(ee.A, ne);
  const te = ee.A && ee.A.locals ? ee.A.locals : void 0;
  var re = (0, r.vs)("<div><div>");
  const ie = 10, ae = (e2) => {
    var n2, t2, a2;
    const { t: d2 } = (0, m.B)(), { metaDetails: g2 } = (0, o.gK)(), [v2, f2] = (0, s.ok)(), [p2, b2] = (0, i.n5)(parseInt(null !== (n2 = v2().season) && void 0 !== n2 ? n2 : "1")), [x2, y2] = (0, i.n5)(parseInt(null !== (t2 = v2().range) && void 0 !== t2 ? t2 : "0")), [w2, k2] = (0, i.n5)(parseInt(null !== (a2 = v2().video) && void 0 !== a2 ? a2 : "0")), A2 = () => [...new Set(e2.videos.map((({ season: e3 }) => e3)).filter(((e3) => void 0 !== e3)))], Y2 = (0, h.g$)((() => {
      var n3;
      const t3 = g2.lastWatchedVideoId();
      return null !== (n3 = e2.videos.find((({ id: e3 }) => e3 === t3))) && void 0 !== n3 ? n3 : null;
    }), ["id"]), S2 = (0, i.To)((() => e2.videos.filter((({ season: e3 }) => !A2().length || e3 === p2())))), I2 = () => S2().length > 50 ? [...Array(Math.ceil(S2().length / ie))].map(((e3, n3) => S2().slice(n3 * ie, n3 * ie + ie))) : [], E2 = () => I2().map(((e3, n3) => ({ value: n3.toString(), label: `${d2("EPISODE")} ${n3 * ie + 1} .. ${n3 * ie + ie}`, selected: x2() === n3 }))), F2 = () => {
      const e3 = x2();
      return null !== e3 && I2()[e3] ? I2()[e3] : S2();
    }, D2 = () => {
      const e3 = w2();
      return null !== e3 && F2()[e3] ? F2()[e3] : null;
    }, L2 = (e3) => {
      e3 && (0, i.vA)((() => {
        b2(parseInt(e3)), k2(null), k2(0);
      }));
    }, z2 = (e3) => {
      e3 && (0, i.vA)((() => {
        y2(parseInt(e3)), k2(null), k2(0);
      }));
    }, j2 = (e3) => {
      D2() && k2(e3);
    }, C2 = () => {
      const e3 = D2();
      e3 && g2.toggleVideoWatched(e3);
    };
    return (0, h.k9)(Y2, ((e3) => {
      e3 && e3.season && b2(e3.season);
    }), false), (0, h.k9)(p2, (() => {
      const e3 = g2.lastWatchedVideoId(), n3 = e3 && S2().map((({ id: e4 }) => e4)).indexOf(e3), t3 = n3 && n3 > 0 && Math.floor(n3 / ie);
      t3 && t3 > 0 && y2(t3);
    }), false), (0, h.k9)([p2, x2], (() => {
      const e3 = g2.lastWatchedVideoId(), n3 = e3 && F2().map((({ id: e4 }) => e4)).indexOf(e3);
      n3 && n3 > 0 && k2(n3);
    }), false), (0, i.EH)((() => {
      const n3 = D2();
      n3 && e2.onChange(n3);
    })), (0, i.EH)((() => {
      f2({ season: p2(), range: x2(), video: w2() }, true);
    })), P2 = re(), T2 = P2.firstChild, (0, r.Yr)(P2, (0, i.a0)(u.Gk, { get class() {
      return te.filters;
    }, leave: ["left", "down"], get children() {
      return [(0, i.a0)(i.wv, { get when() {
        return A2().length;
      }, get children() {
        return (0, i.a0)(l.l6, { get options() {
          return A2().map(((e3) => ({ value: e3.toString(), label: 0 === e3 ? d2("SPECIAL") : `${d2("SEASON")} ${e3}`, selected: p2() === e3 })));
        }, onChange: L2 });
      } }), (0, i.a0)(i.wv, { get when() {
        return E2().length;
      }, get children() {
        return (0, i.a0)(l.l6, { get options() {
          return E2();
        }, onChange: z2 });
      } }), (0, i.a0)(i.wv, { get when() {
        return g2.supportsRating();
      }, get children() {
        return (0, i.a0)(l.GW, { get class() {
          return te.rating;
        }, get rating() {
          return e2.rating;
        }, get onLiked() {
          return e2.onLiked;
        }, get onLoved() {
          return e2.onLoved;
        } });
      } })];
    } }), T2), (0, r.Yr)(P2, (0, i.a0)(l.OY, { get class() {
      return te["videos-list"];
    }, axis: "horizontal", get index() {
      return w2() || 0;
    }, get maxIndex() {
      return F2().length - 1;
    }, overflow: true, get children() {
      return (0, i.a0)(i.jK, { get each() {
        return F2();
      }, children: (e3, n3) => (0, i.a0)(q, (0, i.v6)(e3, { index: n3, get autoFocus() {
        return w2() === n3;
      }, onFocus: j2 })) });
    } }), T2), (0, r.Yr)(T2, (0, i.a0)(i.wv, { get when() {
      return D2();
    }, children: (e3) => (0, i.a0)(l.$n, { get icon() {
      return e3().watched ? "eye-off" : "eye";
    }, get label() {
      return (0, r.ph)((() => !!e3().watched))() ? d2("MARK_AS_UNWATCHED") : d2("MARK_AS_WATCHED");
    }, onPress: C2 }) })), (0, i.gb)(((n3) => {
      var t3 = c()(e2.class, te.videos), i2 = te.actions;
      return t3 !== n3.e && (0, r.s7)(P2, n3.e = t3), i2 !== n3.t && (0, r.s7)(T2, n3.t = i2), n3;
    }), { e: void 0, t: void 0 }), P2;
    var P2, T2;
  };
  var oe = t(7712), se = {};
  se.styleTagTransform = T(), se.setAttributes = z(), se.insert = D().bind(null, "head"), se.domAPI = E(), se.insertStyleElement = C();
  S()(oe.A, se);
  const le = oe.A && oe.A.locals ? oe.A.locals : void 0;
  var de = (0, r.vs)("<div><div>"), ce = (0, r.vs)("<div>");
  const me = () => {
    const e2 = (0, s.g)(), { type: n2, metaId: t2, videoId: d2 } = (0, a.J)(e2, { lazy: true }), { theme: m2 } = (0, o.Pj)(), { ctx: u2, metaDetails: g2 } = (0, o.gK)(), { state: v2, load: h2, metadata: f2, rating: p2 } = g2, [b2, x2] = (0, i.n5)(null), y2 = () => {
      var e3;
      return (null === (e3 = f2()) || void 0 === e3 ? void 0 : e3.videos) || [];
    }, w2 = () => v2().addonStreams, k2 = () => {
      var e3, n3, t3, r2;
      return null !== (e3 = b2()) && void 0 !== e3 && e3.season && null !== (n3 = b2()) && void 0 !== n3 && n3.episode ? `S${null === (t3 = b2()) || void 0 === t3 ? void 0 : t3.season}E${null === (r2 = b2()) || void 0 === r2 ? void 0 : r2.episode} - ` : null;
    }, A2 = (e3) => {
      x2(e3);
    }, Y2 = () => {
      g2.setRating("liked");
    }, S2 = () => {
      g2.setRating("loved");
    };
    return (0, i.EH)((() => {
      const e3 = y2().find((({ id: e4 }) => e4 === d2()));
      e3 && x2(e3);
    })), (0, i.EH)((() => {
      h2({ type: n2(), metaId: t2(), videoId: d2(), guessStream: true });
    })), (0, i.a0)(l.YW, { get class() {
      return le.details;
    }, nested: true, get children() {
      return [(t3 = de(), a2 = t3.firstChild, (0, r.Yr)(t3, (0, i.a0)(l._V, { get class() {
        return le.image;
      }, get classList() {
        return { [le.blurred]: m2.backgroundBlur() };
      }, get src() {
        return (null === (e4 = f2()) || void 0 === e4 ? void 0 : e4.background) || (null === (n3 = f2()) || void 0 === n3 ? void 0 : n3.poster);
        var e4, n3;
      } }), null), (0, i.gb)(((e4) => {
        var n3 = le.background, i2 = le.overlay;
        return n3 !== e4.e && (0, r.s7)(t3, e4.e = n3), i2 !== e4.t && (0, r.s7)(a2, e4.t = i2), e4;
      }), { e: void 0, t: void 0 }), t3), (e3 = ce(), (0, r.Yr)(e3, (0, i.a0)(l._V, { get class() {
        return le.logo;
      }, get src() {
        var e4, n3;
        return (null === (e4 = f2()) || void 0 === e4 ? void 0 : e4.logo) || (null === (n3 = f2()) || void 0 === n3 ? void 0 : n3.poster);
      }, get children() {
        var e4 = ce();
        return (0, r.Yr)(e4, (() => {
          var e5;
          return null === (e5 = f2()) || void 0 === e5 ? void 0 : e5.name;
        })), (0, i.gb)((() => (0, r.s7)(e4, le.title))), e4;
      } }), null), (0, r.Yr)(e3, (0, i.a0)(i.wv, { get when() {
        var e4;
        return null === (e4 = b2()) || void 0 === e4 ? void 0 : e4.title;
      }, children: (e4) => {
        return n3 = ce(), (0, r.Yr)(n3, k2, null), (0, r.Yr)(n3, e4, null), (0, i.gb)((() => (0, r.s7)(n3, le["video-title"]))), n3;
        var n3;
      } }), null), (0, r.Yr)(e3, (0, i.a0)(i.wv, { get when() {
        return null !== (e4 = null === (n3 = b2()) || void 0 === n3 ? void 0 : n3.overview) && void 0 !== e4 ? e4 : null === (t4 = f2()) || void 0 === t4 ? void 0 : t4.description;
        var e4, n3, t4;
      }, children: (e4) => {
        return n3 = ce(), (0, r.Yr)(n3, e4), (0, i.gb)((() => (0, r.s7)(n3, le.description))), n3;
        var n3;
      } }), null), (0, r.Yr)(e3, (0, i.a0)(i.wv, { get when() {
        return (() => {
          var e4;
          const n3 = null === (e4 = b2()) || void 0 === e4 ? void 0 : e4.released, t4 = u2.settings().interfaceLanguage;
          return n3 && new Date(n3).toLocaleString(t4, { year: "numeric", month: "short", day: "numeric" });
        })();
      }, children: (e4) => {
        return n3 = ce(), (0, r.Yr)(n3, e4), (0, i.gb)((() => (0, r.s7)(n3, le["video-date"]))), n3;
        var n3;
      } }), null), (0, i.gb)((() => (0, r.s7)(e3, c()(le.info, { [le["info-720p"]]: window.screen720p })))), e3), (0, i.a0)(i.dO, { get fallback() {
        return (0, i.a0)(l.Rh, { autoFocus: true });
      }, get children() {
        return [(0, i.a0)(i.YG, { get when() {
          return w2().length;
        }, get children() {
          return (0, i.a0)(U, { get class() {
            return le.content;
          }, get addonsStreams() {
            return w2();
          }, rating: p2, onLiked: Y2, onLoved: S2, get type() {
            return n2();
          } });
        } }), (0, i.a0)(i.YG, { get when() {
          return !d2();
        }, get children() {
          return (0, i.a0)(ae, { get class() {
            return le.content;
          }, get videos() {
            return y2();
          }, rating: p2, onLiked: Y2, onLoved: S2, onChange: A2 });
        } })];
      } })];
      var e3, t3, a2;
    } });
  };
} }]);
