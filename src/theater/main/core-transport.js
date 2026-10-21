// Deconstructed Theater 1.10.0 modules (core-transport.js)
module.exports = {
  2363: (e, t, n) => {
    "use strict";
    n.d(t, { X: () => c, z: () => u });
    var r = n(7781), o = n(2555), i = (n(4999), n(6471), n(6399), n(7716), n(7100), n(6859)), a = n.n(i);
    const l = () => {
      let e2, t2;
      return { load: async () => {
        const { default: r2 } = await n.e(9114).then(n.t.bind(n, 9861, 23));
        e2 = new r2(), t2 = new (a())(window, e2);
      }, start: (e3) => t2 ? t2.call(["init"], [e3]) : Promise.reject("Bridge not initialized"), getState: (e3) => t2 ? t2.call(["getState"], [e3]) : Promise.reject("Bridge not initialized"), dispatch: (e3, n2) => t2 ? t2.call(["dispatch"], [e3, n2, location.hash]) : Promise.reject("Bridge not initialized"), decodeStream: (e3) => t2 ? t2.call(["decodeStream"], [e3]) : Promise.reject("Bridge not initialized"), stop: () => {
        e2 && e2.terminate();
      } };
    }, s = (0, o.q6)({}), c = (e2) => {
      const t2 = l(), [n2, i2] = (0, o.n5)(false), [a2, c2] = (0, o.n5)(), [u2, d] = (0, o.n5)([]), [h, f] = (0, o.n5)([]), v = ({ name: e3, args: t3 }) => {
        switch (e3) {
          case "NewState":
            u2().forEach(((e4) => e4(t3)));
            break;
          case "CoreEvent":
            if ("Error" === t3.event) {
              const { source: e4, error: n3 } = t3.args;
              h().forEach(((t4) => t4(e4.event, n3.message)));
            }
        }
      };
      return (0, o.Rc)((async () => {
        if (!window.core) try {
          await t2.load(), await t2.start(e2.appInfo), i2(true), c2(null), window.core = t2, window.onCoreEvent = v;
        } catch (e3) {
          console.error("Failed to initialize core:", e3), i2(false), c2(e3);
        }
      })), (0, o.Ki)((() => {
        d([]), f([]), i2(false), c2(null), t2.stop(), window.onCoreEvent = null, window.core = null;
      })), (0, o.a0)(s.Provider, { value: { transport: t2, onNewState: (e3) => {
        d(((t3) => [...t3, e3]));
      }, onError: (e3) => {
        f(((t3) => [...t3, e3]));
      } }, get children() {
        return (0, o.a0)(o.dO, { get children() {
          return [(0, o.a0)(o.YG, { get when() {
            return a2();
          }, get children() {
            return e2.error;
          } }), (0, o.a0)(o.YG, { get when() {
            return n2();
          }, get children() {
            return e2.children;
          } }), (0, o.a0)(o.YG, { get when() {
            return (0, r.ph)((() => !a2()))() && !n2();
          }, get children() {
            return e2.loading;
          } })];
        } });
      } });
    }, u = () => (0, o.NT)(s);
  }
};
