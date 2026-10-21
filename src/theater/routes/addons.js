"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([[5710], { 6523: (n, e, t) => {
  t.r(e), t.d(e, { default: () => J });
  var i = t(7781), a = t(2555), s = t(9170), d = t(3497), o = t(330), r = t(1517), l = t(6066), c = t(2434), h = t.n(c), g = t(5235), m = t.n(g), A = t(6049), S = t.n(A), u = t(8938), _ = t.n(u), f = t(502), L = t.n(f), T = t(3611), U = t.n(T), v = t(7404), I = {};
  I.styleTagTransform = U(), I.setAttributes = _(), I.insert = S().bind(null, "head"), I.domAPI = m(), I.insertStyleElement = L();
  h()(v.A, I);
  const D = v.A && v.A.locals ? v.A.locals : void 0;
  var p = (0, i.vs)("<div><div></div><div>");
  const J = () => {
    const { t: n2 } = (0, d.B)(), e2 = (0, r.Y)(), { ctx: t2 } = (0, l.gK)(), c2 = () => {
      t2.syncAddons(), e2.show({ title: n2("STREMIO_TV_ADDONS_SYNC_ADDONS"), message: n2("STREMIO_TV_ADDONS_SYNC_SUCCESS") });
    };
    return (0, a.a0)(o.YW, { get class() {
      return D.addons;
    }, get children() {
      return [(0, a.a0)(s.A, { get class() {
        return D.icon;
      }, name: "addons" }), (e3 = p(), t3 = e3.firstChild, d2 = t3.nextSibling, (0, i.Yr)(t3, (() => n2("STREMIO_TV_ADDONS_TITLE"))), (0, i.Yr)(d2, (() => n2("STREMIO_TV_ADDONS_SUBTITLE"))), (0, a.gb)(((n3) => {
        var a2 = D.heading, s2 = D.title, o2 = D.note;
        return a2 !== n3.e && (0, i.s7)(e3, n3.e = a2), s2 !== n3.t && (0, i.s7)(t3, n3.t = s2), o2 !== n3.a && (0, i.s7)(d2, n3.a = o2), n3;
      }), { e: void 0, t: void 0, a: void 0 }), e3), (0, a.a0)(o.$n, { icon: "cloud-sync", get label() {
        return n2("STREMIO_TV_ADDONS_SYNC_ADDONS");
      }, autoFocus: true, onPress: c2 })];
      var e3, t3, d2;
    } });
  };
}, 7404: (n, e, t) => {
  t.d(e, { A: () => o });
  var i = t(4474), a = t.n(i), s = t(2670), d = t.n(s)()(a());
  d.push([n.id, ".addons-LUJe6 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.addons-LUJe6 > * {\n  margin: 1.25rem 0 1.25rem 0;\n}\n.addons-LUJe6 > :first-child {\n  margin-top: 0;\n}\n.addons-LUJe6 > :last-child {\n  margin-bottom: 0;\n}\n.addons-LUJe6 .icon-4a3iU {\n  height: 10rem;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.addons-LUJe6 .heading-q2AKI {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 65vw;\n  text-align: center;\n}\n.addons-LUJe6 .heading-q2AKI > * {\n  margin: 0.25rem 0 0.25rem 0;\n}\n.addons-LUJe6 .heading-q2AKI > :first-child {\n  margin-top: 0;\n}\n.addons-LUJe6 .heading-q2AKI > :last-child {\n  margin-bottom: 0;\n}\n.addons-LUJe6 .heading-q2AKI .title-ZSLYp {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.addons-LUJe6 .heading-q2AKI .note-y2pKA {\n  font-size: 1.5rem;\n  font-weight: 500;\n  font-style: italic;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n", ""]), d.locals = { addons: "addons-LUJe6", icon: "icon-4a3iU", heading: "heading-q2AKI", title: "title-ZSLYp", note: "note-y2pKA" };
  const o = d;
} }]);
