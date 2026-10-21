// Deconstructed Theater 1.10.0 modules (hooks.js)
module.exports = {
  2408: (e, t, n) => {
    "use strict";
    n.d(t, { J: () => a });
    n(4999), n(7100);
    var r = n(2555);
    n(2093), n(6399), n(5020), n(1273), n(7716), n(7621), n(989), !n(7781).S$ && r.IJ;
    var o = (e2) => "function" != typeof e2 || e2.length ? e2 : e2();
    Object.entries, Object.keys;
    var i = (e2) => "object" == typeof e2 && null !== e2;
    function a(e2, t2) {
      var n2;
      const l = null != t2 ? t2 : {}, s = null !== (n2 = l.memo) && void 0 !== n2 ? n2 : "function" == typeof e2, c = "function" == typeof e2 ? (t3) => () => e2()[t3] : (t3) => () => e2[t3], u = o(e2);
      if (l.lazy) {
        const e3 = (0, r.QQ)();
        return (function(e4, t3) {
          return new Proxy({}, { get: (n3, r2) => {
            if (r2 === Symbol.iterator || "length" === r2) return Reflect.get(e4, r2);
            const o2 = Reflect.get(n3, r2);
            if (o2) return o2;
            const i2 = t3(r2);
            return Reflect.set(n3, r2, i2), i2;
          }, set: () => false });
        })(u, ((n3) => {
          const o2 = c(n3);
          return l.deep && i(u[n3]) ? (0, r.vP)(e3, (() => a(o2, { ...l, memo: s }))) : s ? (0, r.vP)(e3, (() => (0, r.To)(o2, void 0, t2))) : o2;
        }));
      }
      const d = Array.isArray(u) ? [] : {};
      for (const [e3, n3] of Object.entries(u)) {
        const o2 = c(e3);
        l.deep && i(n3) ? d[e3] = a(o2, { ...l, memo: s }) : d[e3] = s ? (0, r.To)(o2, void 0, t2) : o2;
      }
      return d;
    }
  }
};
