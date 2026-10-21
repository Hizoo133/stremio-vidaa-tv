// Deconstructed Theater 1.10.0 modules (router.js)
module.exports = {
  1200: (e, t, n) => {
    "use strict";
    n.d(t, { Ix: () => s, W6: () => c, g: () => u, lq: () => h, ok: () => d });
    var r = n(2555), o = n(7781);
    n(4999), n(4189), n(4692), n(7402), n(7311), n(6399), n(1273), n(1012), n(7621), n(7100), n(3785), n(7763), n(3391), n(1430), n(589), n(4512);
    const i = (0, r.q6)({});
    n(2093), n(6471);
    const a = (e2) => window.dispatchEvent(new Event(e2)), l = () => new URL(`${window.location.origin}${window.location.hash.replace("#", "")}`), s = (e2) => {
      const t2 = (() => {
        const [e3, t3] = (0, r.n5)([]), [n3, o2] = (0, r.n5)(false), i2 = (e4, n4) => {
          t3(((t4) => (n4 && t4.pop(), t4.push(e4), t4)));
        }, l2 = () => {
          t3(((e4) => (e4.pop(), e4)));
        };
        return { entries: e3, size: () => e3().length, navigate: (e4, t4) => {
          if (!e4) return;
          const n4 = "#" !== Array.from(e4)[0] ? `#${e4}` : e4, r2 = t4 ? "replaceState" : "pushState";
          window.history[r2](Math.random(), "", n4), i2(n4, t4), a("historyChange");
        }, back: () => new Promise(((e4) => {
          if (n3()) return e4();
          const t4 = () => {
            window.removeEventListener("popstate", t4), l2(), a("historyChange"), e4();
          };
          window.addEventListener("popstate", t4), window.history.back();
        })), backDisabled: n3, setBackDisabled: o2 };
      })(), [n2, s2] = (0, r.n5)(e2.defaultRoute), [c2, u2] = (0, r.n5)({}, { equals: (e3, t3) => JSON.stringify(e3) === JSON.stringify(t3) }), [d2, h2] = (0, r.n5)({}, { equals: (e3, t3) => JSON.stringify(e3) === JSON.stringify(t3) }), f = () => {
        const n3 = l(), [, o2, ...i2] = n3.pathname.split("/"), a2 = e2.routes.find(((e3) => {
          const [, t3, ...n4] = e3.path.split("/"), r2 = n4.filter(((e4) => e4.endsWith("?"))), a3 = n4.length - r2.length;
          return t3 === o2 && i2.length >= a3 && i2.length <= a3 + r2.length;
        }));
        if (a2) {
          if (a2.guard && !a2.guard()) return t2.navigate(e2.defaultRoute.path, true);
          const [, , ...o3] = a2.path.split("/"), l2 = Object.fromEntries(o3.filter(((e3, t3) => i2[t3])).map(((e3, t3) => [e3.replace(":", "").replace("?", ""), decodeURIComponent(i2[t3])]))), c3 = Object.fromEntries(Array.from(n3.searchParams.entries()));
          (0, r.vA)((() => {
            u2(l2), h2(c3), s2(a2);
          }));
        }
      };
      return (0, r.Rc)((() => {
        f(), window.addEventListener("hashchange", f), window.addEventListener("historyChange", f), t2.navigate(e2.defaultRoute.path);
      })), (0, r.Ki)((() => {
        window.removeEventListener("hashchange", f), window.removeEventListener("historyChange", f);
      })), (0, r.a0)(i.Provider, { value: { currentRoute: n2, params: c2, searchParams: d2, updateSearchParams: (e3, n3) => {
        const r2 = l(), o2 = new URLSearchParams(e3.filter((([e4, t3]) => null != t3))), i2 = `${r2.pathname}?${o2}`;
        t2.navigate(i2, n3);
      }, history: t2 }, get children() {
        return [(0, o.ph)((() => e2.children)), (0, r.a0)(o.Qi, { get component() {
          return null === (e3 = n2()) || void 0 === e3 ? void 0 : e3.component;
          var e3;
        } })];
      } });
    }, c = () => (0, r.NT)(i).history, u = () => (0, r.NT)(i).params, d = () => {
      const e2 = (0, r.NT)(i);
      return [e2.searchParams, (t2, n2) => e2.updateSearchParams(Object.entries(t2), n2)];
    }, h = () => (0, r.NT)(i).currentRoute;
  }
};
