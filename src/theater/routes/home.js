"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([[7962], { 6971: (e, t, n) => {
  n.r(t), n.d(t, { default: () => B });
  var o = n(7781), r = n(2555), a = (n(4999), n(6471), n(7100), n(3497)), s = n(330), i = n(6066), l = n(8688), c = n(2497), u = n(2434), d = n.n(u), g = n(5235), h = n.n(g), m = n(6049), v = n.n(m), f = n(8938), p = n.n(f), w = n(502), C = n.n(w), b = n(3611), A = n.n(b), k = n(8884), y = {};
  y.styleTagTransform = A(), y.setAttributes = p(), y.insert = v().bind(null, "head"), y.domAPI = h(), y.insertStyleElement = C();
  d()(k.A, y);
  const I = k.A && k.A.locals ? k.A.locals : void 0;
  var P = (0, o.vs)("<div class=message>Due to operating system restrictions, some Stremio features and streams are currently unavailable on this device.<br>We're working to provide full functionality in a future update."), S = (0, o.vs)("<div class=buttons>");
  const T = "home", B = () => {
    var e2, t2, n2, u2;
    const { t: d2 } = (0, a.B)(), g2 = (0, c.Vj)(), h2 = (0, l.SR)(500), { continueWatching: m2, board: v2 } = (0, i.gK)(), { pages: f2 } = (0, i.Pj)(), { getCache: p2, setCache: w2 } = f2, C2 = () => p2(T), [b2, A2] = (0, r.n5)(null !== (e2 = null === (t2 = C2()) || void 0 === t2 ? void 0 : t2.row) && void 0 !== e2 ? e2 : 0), [k2, y2] = (0, r.n5)(null !== (n2 = null === (u2 = C2()) || void 0 === u2 ? void 0 : u2.item) && void 0 !== n2 ? n2 : 0), [B2, W] = (0, r.n5)(null), [x, D, E] = (0, l.zD)(), [F, G] = (0, r.n5)(false), N = () => m2.items().length ? { title: d2("CONTINUE_WATCHING"), content: m2.items() } : null, j = (e3) => {
      A2(e3);
    }, H = (e3, t3) => {
      (0, r.vA)((() => {
        W(e3), y2(t3);
      }));
    }, K = async () => {
      localStorage.setItem("warningModalDismissed", "true"), G(false);
    };
    return (0, r.EH)((() => {
      const e3 = b2() - (N() ? 1 : 0);
      h2((() => v2.loadCatalogs(e3)));
    })), (0, l.k9)([b2, k2], (([e3, t3]) => {
      w2(T, { row: e3, item: t3 });
    })), (0, l.k9)(N, ((e3) => {
      const t3 = b2(), n3 = k2();
      if (e3 && 0 === t3) {
        const t4 = e3.content[n3];
        t4 && W(t4);
      }
    })), (0, r.EH)((async () => {
      const e3 = localStorage.getItem("warningModalDismissed");
      G(!e3 && (g2.isTitan || g2.isNetTV || g2.isVidaa));
    })), (0, r.Rc)((() => {
      v2.load();
    })), (0, r.Ki)((() => {
      v2.unload();
    })), (0, r.a0)(s.YW, { get class() {
      return I.home;
    }, get children() {
      return [(0, r.a0)(s.Gn, { get item() {
        return B2();
      } }), (0, r.a0)(s.bp, { get item() {
        return B2();
      }, open: x, onClose: E }), (0, r.a0)(s.OY, { get class() {
        return I.content;
      }, axis: "vertical", get children() {
        return (0, r.a0)(r.jK, { get each() {
          return [N(), ...v2.catalogs()].filter(((e3) => null !== e3));
        }, children: (e3, t3) => (0, r.a0)(s.WC, { get catalog() {
          return e3();
        }, index: t3, get itemIndex() {
          return k2();
        }, get autoFocus() {
          return b2() === t3;
        }, showMore: true, onFocus: j, onChange: H, onSelect: D }) });
      } }), (0, r.a0)(r.wv, { get when() {
        return F();
      }, get children() {
        return (0, r.a0)(s.aF, { title: "Attention", onClose: K, get children() {
          return [P(), (e3 = S(), (0, o.Yr)(e3, (0, r.a0)(s.$n, { label: "I understand", autoFocus: true, onPress: K })), e3)];
          var e3;
        } });
      } })];
    } });
  };
}, 8884: (e, t, n) => {
  n.d(t, { A: () => i });
  var o = n(4474), r = n.n(o), a = n(2670), s = n.n(a)()(r());
  s.push([e.id, ".home-qPkGc .content-BPvBy {\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n}\n", ""]), s.locals = { home: "home-qPkGc", content: "content-BPvBy" };
  const i = s;
} }]);
