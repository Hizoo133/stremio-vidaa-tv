"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([[8842], { 1768: (e, t, n) => {
  n.r(t), n.d(t, { default: () => W });
  var s = n(7781), r = n(2555), o = (n(4999), n(6399), n(1012), n(7100), n(1200)), a = n(6066), i = n(8688), l = n(9238), c = n(330), d = (n(7621), n(3497));
  const g = ({ selectable: e2 }) => {
    const { t: t2 } = (0, d.B)(), n2 = (0, i.ze)();
    return { types: () => e2().types.map((({ deepLinks: e3, type: n3, selected: s2 }) => ({ value: e3.discover, label: t2(`TYPE_${n3}`, n3), selected: s2 }))), catalogs: () => e2().catalogs.map((({ deepLinks: e3, selected: t3, ...s2 }) => ({ value: e3.discover, label: n2.name(s2), selected: t3 }))), extra: () => e2().extra.map((({ options: e3 }) => e3.map((({ value: e4, deepLinks: n3, selected: s2 }) => ({ value: n3.discover, label: e4 ? t2(e4, e4) : t2("NONE"), selected: s2 }))))) };
  };
  var v = n(2434), u = n.n(v), p = n(5235), m = n.n(p), h = n(6049), f = n.n(h), y = n(8938), _ = n.n(y), C = n(502), b = n.n(C), x = n(3611), N = n.n(x), k = n(7900), K = {};
  K.styleTagTransform = N(), K.setAttributes = _(), K.insert = f().bind(null, "head"), K.domAPI = m(), K.insertStyleElement = b();
  u()(k.A, K);
  const F = k.A && k.A.locals ? k.A.locals : void 0;
  var R = (0, s.vs)("<div>");
  const A = "discover", W = () => {
    const e2 = (0, o.W6)(), t2 = (0, o.g)(), [n2] = (0, o.ok)(), { discover: d2 } = (0, a.gK)(), v2 = g(d2), { pages: u2 } = (0, a.Pj)(), { getCache: p2, setCache: m2 } = u2, [h2, f2] = (0, r.n5)(t2().type && null !== (y2 = null === (_2 = p2(A)) || void 0 === _2 ? void 0 : _2.item) && void 0 !== y2 ? y2 : 0);
    var y2, _2;
    const [C2, b2] = (0, r.n5)(null), [x2, N2, k2] = (0, i.zD)(), K2 = (t3) => {
      e2.navigate(t3);
    }, W2 = (e3, t3) => {
      (0, r.vA)((() => {
        b2(e3), f2(t3);
      }));
    }, w = () => {
      d2.loadNextPage();
    };
    return (0, r.EH)((() => {
      const { transportUrl: s2, type: r2, id: o2 } = t2(), { ...a2 } = n2();
      if (s2 && r2 && o2) return d2.loadCatalog(s2, r2, o2, Object.entries(a2));
      if (r2 && !s2 && !o2) {
        const t3 = d2.selectable().types.find(((e3) => e3.type === r2));
        if (t3) return e2.navigate(t3.deepLinks.discover);
      }
      d2.load();
    })), (0, i.k9)([t2, n2], (() => {
      f2(0);
    })), (0, i.k9)(h2, ((e3) => {
      m2(A, { item: e3 });
    })), (0, r.Ki)((() => {
      d2.unload();
    })), (0, r.a0)(c.YW, { get class() {
      return F.discover;
    }, get children() {
      return [(0, r.a0)(c.Gn, { get item() {
        return C2();
      } }), (0, r.a0)(c.bp, { get item() {
        return C2();
      }, open: x2, onClose: k2 }), (e3 = R(), (0, s.Yr)(e3, (0, r.a0)(l.Gk, { get class() {
        return F.filters;
      }, leave: ["left", "down"], get children() {
        return [(0, r.a0)(c.l6, { get options() {
          return v2.types();
        }, onChange: K2 }), (0, r.a0)(c.l6, { get options() {
          return v2.catalogs();
        }, onChange: K2 }), (0, r.a0)(r.a, { get each() {
          return v2.extra();
        }, children: (e4) => (0, r.a0)(c.l6, { options: e4, onChange: K2 }) })];
      } }), null), (0, s.Yr)(e3, (0, r.a0)(r.wv, { get when() {
        return d2.catalog();
      }, children: (e4) => (0, r.a0)(c.WC, { get catalog() {
        return e4();
      }, index: 0, get itemIndex() {
        return h2();
      }, autoFocus: true, onChange: W2, onNextPage: w, onSelect: N2 }) }), null), (0, r.gb)((() => (0, s.s7)(e3, F.content))), e3)];
      var e3;
    } });
  };
}, 7900: (e, t, n) => {
  n.d(t, { A: () => i });
  var s = n(4474), r = n.n(s), o = n(2670), a = n.n(o)()(r());
  a.push([e.id, ".discover-sKRNy .content-sFo_t {\n  z-index: 1;\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.discover-sKRNy .content-sFo_t > * {\n  margin: 1rem 0 1rem 0;\n}\n.discover-sKRNy .content-sFo_t > :first-child {\n  margin-top: 0;\n}\n.discover-sKRNy .content-sFo_t > :last-child {\n  margin-bottom: 0;\n}\n.discover-sKRNy .content-sFo_t .filters-C_DVW {\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  padding: 0 4rem;\n}\n.discover-sKRNy .content-sFo_t .filters-C_DVW > * {\n  margin: 0 0.75rem 0 0.75rem;\n}\n.discover-sKRNy .content-sFo_t .filters-C_DVW > :first-child {\n  margin-left: 0;\n}\n.discover-sKRNy .content-sFo_t .filters-C_DVW > :last-child {\n  margin-right: 0;\n}\n", ""]), a.locals = { discover: "discover-sKRNy", content: "content-sFo_t", filters: "filters-C_DVW" };
  const i = a;
} }]);
