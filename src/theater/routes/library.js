"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([[7920], { 7228: (e, n, t) => {
  t.d(n, { A: () => o });
  var r = t(4474), l = t.n(r), i = t(2670), a = t.n(i)()(l());
  a.push([e.id, ".library-J0Lti .placeholder-zN3fb {\n  z-index: 1;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.library-J0Lti .placeholder-zN3fb > * {\n  margin: 0.75rem 0 0.75rem 0;\n}\n.library-J0Lti .placeholder-zN3fb > :first-child {\n  margin-top: 0;\n}\n.library-J0Lti .placeholder-zN3fb > :last-child {\n  margin-bottom: 0;\n}\n.library-J0Lti .placeholder-zN3fb .image-uUIaS {\n  height: calc(18rem - 1.5rem);\n  width: calc(18rem - 1.5rem);\n}\n.library-J0Lti .placeholder-zN3fb .text-uY5su {\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.library-J0Lti .content-haNlB {\n  z-index: 1;\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.library-J0Lti .content-haNlB > * {\n  margin: 1rem 0 1rem 0;\n}\n.library-J0Lti .content-haNlB > :first-child {\n  margin-top: 0;\n}\n.library-J0Lti .content-haNlB > :last-child {\n  margin-bottom: 0;\n}\n.library-J0Lti .content-haNlB .filters-R1HS3 {\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  padding: 0 4rem;\n}\n.library-J0Lti .content-haNlB .filters-R1HS3 > * {\n  margin: 0 0.75rem 0 0.75rem;\n}\n.library-J0Lti .content-haNlB .filters-R1HS3 > :first-child {\n  margin-left: 0;\n}\n.library-J0Lti .content-haNlB .filters-R1HS3 > :last-child {\n  margin-right: 0;\n}\n", ""]), a.locals = { library: "library-J0Lti", placeholder: "placeholder-zN3fb", image: "image-uUIaS", text: "text-uY5su", content: "content-haNlB", filters: "filters-R1HS3" };
  const o = a;
}, 9493: (e, n, t) => {
  t.r(n), t.d(n, { default: () => A });
  var r = t(7781), l = t(2555), i = (t(4999), t(2517), t(7100), t(1200)), a = t(3497), o = t(9238), s = t(330), c = t(8688), d = t(6066);
  t(6399), t(7621);
  const g = ({ selectable: e2 }) => {
    const { t: n2 } = (0, a.B)();
    return { types: () => e2().types.map((({ deepLinks: e3, type: t2, selected: r2 }) => ({ value: e3.library, label: n2(`TYPE_${null != t2 ? t2 : "ALL"}`, null != t2 ? t2 : void 0), selected: r2 }))), sorts: () => e2().sorts.map((({ deepLinks: e3, sort: t2, selected: r2 }) => ({ value: e3.library, label: n2(`SORT_${t2.toUpperCase()}`, t2), selected: r2 }))) };
  };
  var h = t(2434), u = t.n(h), b = t(5235), m = t.n(b), p = t(6049), v = t.n(p), f = t(8938), y = t.n(f), L = t(502), N = t.n(L), x = t(3611), J = t.n(x), w = t(7228), B = {};
  B.styleTagTransform = J(), B.setAttributes = y(), B.insert = v().bind(null, "head"), B.domAPI = m(), B.insertStyleElement = N();
  u()(w.A, B);
  const Y = w.A && w.A.locals ? w.A.locals : void 0;
  var z = (0, r.vs)("<div><div>"), C = (0, r.vs)("<div>");
  const k = "library", A = () => {
    const { t: e2 } = (0, a.B)(), { navigate: n2 } = (0, i.W6)(), h2 = (0, i.g)(), [u2] = (0, i.ok)(), { library: b2 } = (0, d.gK)(), { pages: m2 } = (0, d.Pj)(), [p2, v2] = (0, l.n5)((null !== (f2 = h2().type) && void 0 !== f2 ? f2 : u2().sort) && null !== (y2 = null === (L2 = m2.getCache(k)) || void 0 === L2 ? void 0 : L2.item) && void 0 !== y2 ? y2 : 0);
    var f2, y2, L2;
    const [N2, x2] = (0, l.n5)(null), [J2, w2, B2] = (0, c.zD)(), A2 = g(b2), S = (e3) => {
      n2(e3);
    }, R = (e3, n3) => {
      (0, l.vA)((() => {
        x2(e3), v2(n3);
      }));
    }, P = () => {
      n2("/discover");
    }, _ = () => {
      b2.loadNextPage();
    };
    return (0, l.EH)((() => {
      const { type: e3 } = h2(), { sort: n3 } = u2();
      b2.load(e3, n3);
    })), (0, c.k9)([h2, u2], (() => {
      v2(null), v2(0);
    })), (0, c.k9)(p2, ((e3) => {
      e3 && m2.setCache(k, { item: e3 });
    })), (0, l.Ki)((() => {
      b2.unload();
    })), (0, l.a0)(s.YW, { get class() {
      return Y.library;
    }, get children() {
      return [(0, l.a0)(l.wv, { get when() {
        return !b2.catalog().length;
      }, get children() {
        return (0, l.a0)(l.dO, { get children() {
          return [(0, l.a0)(l.YG, { get when() {
            return b2.loading();
          }, get children() {
            return (0, l.a0)(s.Rh, { autoFocus: true });
          } }), (0, l.a0)(l.YG, { get when() {
            return !b2.loading();
          }, get children() {
            var n3 = z(), i2 = n3.firstChild;
            return (0, r.Yr)(n3, (0, l.a0)(s._V, { get class() {
              return Y.image;
            }, get src() {
              return t(7162);
            } }), i2), (0, r.Yr)(i2, (() => e2("MOBILE_EMPTY_LIBRARY"))), (0, r.Yr)(n3, (0, l.a0)(s.$n, { icon: "discover", label: "Go to Discover", autoFocus: true, onPress: P }), null), (0, l.gb)(((e3) => {
              var t2 = Y.placeholder, l2 = Y.text;
              return t2 !== e3.e && (0, r.s7)(n3, e3.e = t2), l2 !== e3.t && (0, r.s7)(i2, e3.t = l2), e3;
            }), { e: void 0, t: void 0 }), n3;
          } })];
        } });
      } }), (0, l.a0)(l.wv, { get when() {
        return b2.catalog().length;
      }, get children() {
        return [(0, l.a0)(s.Gn, { get item() {
          return N2();
        } }), (0, l.a0)(s.bp, { get item() {
          return N2();
        }, open: J2, onClose: B2 }), (e3 = C(), (0, r.Yr)(e3, (0, l.a0)(o.Gk, { get class() {
          return Y.filters;
        }, leave: ["left", "down"], get children() {
          return [(0, l.a0)(s.l6, { get options() {
            return A2.types();
          }, onChange: S }), (0, l.a0)(s.l6, { get options() {
            return A2.sorts();
          }, onChange: S })];
        } }), null), (0, r.Yr)(e3, (0, l.a0)(s.WC, { get catalog() {
          return { content: b2.catalog() };
        }, index: 0, get itemIndex() {
          var e4;
          return null !== (e4 = p2()) && void 0 !== e4 ? e4 : 0;
        }, autoFocus: true, onNextPage: _, onChange: R, onSelect: w2 }), null), (0, l.gb)((() => (0, r.s7)(e3, Y.content))), e3)];
        var e3;
      } })];
    } });
  };
} }]);
