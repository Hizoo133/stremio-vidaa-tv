"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([[187], { 1475: (e, n, t) => {
  t.d(n, { A: () => l });
  var r = t(4474), a = t.n(r), i = t(2670), s = t.n(i)()(a());
  s.push([e.id, ".history-naEKv {\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding: 1rem 4rem 2rem 4rem;\n  margin-top: 8rem;\n}\n.history-naEKv > * {\n  margin: 1rem 0 1rem 0;\n}\n.history-naEKv > :first-child {\n  margin-top: 0;\n}\n.history-naEKv > :last-child {\n  margin-bottom: 0;\n}\n.history-naEKv .items-K8a2A {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n}\n.history-naEKv .button-zjUJY {\n  align-self: flex-end;\n}\n", ""]), s.locals = { history: "history-naEKv", items: "items-K8a2A", button: "button-zjUJY" };
  const l = s;
}, 4100: (e, n, t) => {
  t.r(n), t.d(n, { default: () => _ });
  var r = t(7781), a = t(2555), i = (t(4999), t(7402), t(7100), t(1200)), s = t(3497), l = t(330), o = t(8688), c = t(6066), u = t(2434), d = t.n(u), h = t(5235), g = t.n(h), m = t(6049), v = t.n(m), y = t(8938), A = t.n(y), p = t(502), b = t.n(p), f = t(3611), x = t.n(f), E = t(7852), w = {};
  w.styleTagTransform = x(), w.setAttributes = A(), w.insert = v().bind(null, "head"), w.domAPI = g(), w.insertStyleElement = b();
  d()(E.A, w);
  const C = E.A && E.A.locals ? E.A.locals : void 0, Y = (e2) => {
    const n2 = (0, i.W6)();
    return (0, a.a0)(l.$n, { get class() {
      return C.item;
    }, get label() {
      return e2.label;
    }, onPress: () => {
      n2.navigate(e2.deepLink);
    } });
  };
  var K = t(1475), k = {};
  k.styleTagTransform = x(), k.setAttributes = A(), k.insert = v().bind(null, "head"), k.domAPI = g(), k.insertStyleElement = b();
  d()(K.A, k);
  const H = K.A && K.A.locals ? K.A.locals : void 0;
  var P = (0, r.vs)("<div>");
  const R = (e2) => {
    const { t: n2 } = (0, s.B)();
    return t2 = P(), (0, r.Yr)(t2, (0, a.a0)(a.wv, { get when() {
      return e2.items.length;
    }, get children() {
      return [(t3 = P(), (0, r.Yr)(t3, (0, a.a0)(a.a, { get each() {
        return e2.items;
      }, children: ({ query: e3, deepLinks: n3 }) => (0, a.a0)(Y, { label: e3, get deepLink() {
        return n3.search;
      } }) })), (0, a.gb)((() => (0, r.s7)(t3, H.items))), t3), (0, a.a0)(l.$n, { get class() {
        return H.button;
      }, icon: "close", get label() {
        return n2("CTX_CLEAR");
      }, get onPress() {
        return e2.onClear;
      } })];
      var t3;
    } })), (0, a.gb)((() => (0, r.s7)(t2, H.history))), t2;
    var t2;
  };
  var T = t(8942), S = {};
  S.styleTagTransform = x(), S.setAttributes = A(), S.insert = v().bind(null, "head"), S.domAPI = g(), S.insertStyleElement = b();
  d()(T.A, S);
  const j = T.A && T.A.locals ? T.A.locals : void 0;
  var G = t(9238), L = (0, r.vs)("<div>");
  const U = "search", _ = () => {
    var e2, n2, t2, u2;
    const { t: d2 } = (0, s.B)(), [h2, g2] = (0, i.ok)(), { ctx: m2, search: v2 } = (0, c.gK)(), { pages: y2 } = (0, c.Pj)(), A2 = () => y2.getCache(U), [p2, b2] = (0, a.n5)(null !== (e2 = null === (n2 = A2()) || void 0 === n2 ? void 0 : n2.row) && void 0 !== e2 ? e2 : 0), [f2, x2] = (0, a.n5)(null !== (t2 = null === (u2 = A2()) || void 0 === u2 ? void 0 : u2.item) && void 0 !== t2 ? t2 : 0), [E2, w2] = (0, a.n5)(null), [C2, Y2, K2] = (0, o.zD)(), k2 = () => {
      var e3;
      return null !== (e3 = h2().query) && void 0 !== e3 ? e3 : "";
    }, H2 = () => {
      var e3;
      return !(null === (e3 = k2()) || void 0 === e3 || !e3.length);
    }, P2 = (e3) => {
      g2({ query: e3 });
    }, T2 = (e3) => {
      b2(e3);
    }, S2 = (e3, n3) => {
      (0, a.vA)((() => {
        w2(e3), x2(n3);
      }));
    }, _2 = () => {
      m2.clearSearchHistory();
    };
    return (0, o.k9)([p2, f2], (([e3, n3]) => {
      y2.setCache(U, { row: e3, item: n3 });
    })), (0, a.EH)((() => {
      v2.loadCatalogs(p2());
    })), (0, a.EH)((() => {
      const { query: e3 } = h2();
      e3 && (v2.load(e3), v2.loadCatalogs(0));
    })), (function() {
      var _pv = "", _pi = setInterval(function() {
        try {
          var el = document.querySelector('input[type="text"]') || document.querySelector("input[placeholder]") || document.querySelector("input");
          if (!el) return;
          var cv = el.value || "";
          if (cv !== _pv) {
            _pv = cv;
            if (cv.length > 0) {
              P2(cv);
            } else if (_pv === "") {
              P2("");
            }
          }
        } catch (e3) {
        }
      }, 100);
      (0, a.Ki)((function() {
        clearInterval(_pi);
      }));
    })(), (0, a.Ki)((() => {
      v2.unload();
    })), (0, a.a0)(l.YW, { get class() {
      return j.search;
    }, get nested() {
      return H2();
    }, get children() {
      return [(0, a.a0)(G.Gk, { get class() {
        return j.heading;
      }, leave: ["left", "down"], get children() {
        return (0, a.a0)(l.ks, { get placeholder() {
          return d2("STREMIO_TV_SEARCH_PLACEHOLDER");
        }, get value() {
          return k2();
        }, autoFocus: true, onChange: P2, onSubmit: P2 });
      } }), (0, a.a0)(a.dO, { get children() {
        return [(0, a.a0)(a.YG, { get when() {
          return H2();
        }, get children() {
          var e3 = L();
          return (0, r.Yr)(e3, (0, a.a0)(l.Gn, { get class() {
            return j["item-preview"];
          }, get item() {
            return E2();
          }, compact: true }), null), (0, r.Yr)(e3, (0, a.a0)(l.bp, { get item() {
            return E2();
          }, open: C2, onClose: K2 }), null), (0, r.Yr)(e3, (0, a.a0)(l.OY, { get class() {
            return j.content;
          }, axis: "vertical", get children() {
            return (0, a.a0)(a.jK, { get each() {
              return v2.state().catalogs;
            }, children: (e4, n3) => (0, a.a0)(l.WC, { get catalog() {
              return e4();
            }, index: n3, get itemIndex() {
              return f2();
            }, get autoFocus() {
              return p2() === n3;
            }, onFocus: T2, onChange: S2, onSelect: Y2 }) });
          } }), null), (0, a.gb)((() => (0, r.s7)(e3, j.container))), e3;
        } }), (0, a.a0)(a.YG, { get when() {
          return !H2();
        }, get children() {
          return (0, a.a0)(R, { get items() {
            return m2.searchHistory().slice(0, 7);
          }, onClear: _2 });
        } })];
      } })];
    } });
  };
}, 7852: (e, n, t) => {
  t.d(n, { A: () => l });
  var r = t(4474), a = t.n(r), i = t(2670), s = t.n(i)()(a());
  s.push([e.id, ".item-yZUQn {\n  justify-content: flex-start;\n  width: 100%;\n  overflow: hidden;\n}\n", ""]), s.locals = { item: "item-yZUQn" };
  const l = s;
}, 8942: (e, n, t) => {
  t.d(n, { A: () => l });
  var r = t(4474), a = t.n(r), i = t(2670), s = t.n(i)()(a());
  s.push([e.id, ".search-guyhx {\n  display: flex;\n  flex-direction: column;\n}\n.search-guyhx .heading-AvPuR {\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  padding: 2rem 4rem 1rem 4rem;\n}\n.search-guyhx .container-RxHME .item-preview-AGbhU {\n  padding-top: 6rem;\n}\n.search-guyhx .container-RxHME .content-XYvEJ {\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n}\n", ""]), s.locals = { search: "search-guyhx", heading: "heading-AvPuR", container: "container-RxHME", "item-preview": "item-preview-AGbhU", content: "content-XYvEJ" };
  const l = s;
} }]);
