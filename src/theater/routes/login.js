"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([[6966], { 2111: (n, e, t) => {
  t.r(e), t.d(e, { default: () => W });
  var l = t(7781), i = t(2555), r = (t(4999), t(7100), t(3497)), o = t(1200), s = t(6066), a = t(9238), d = t(2497), g = t(8688), c = t(330), u = t(2434), k = t.n(u), h = t(5235), m = t.n(h), f = t(6049), v = t.n(f), p = t(8938), b = t.n(p), _ = t(502), I = t.n(_), Z = t(3611), R = t.n(Z), x = t(9368), C = {};
  C.styleTagTransform = R(), C.setAttributes = b(), C.insert = v().bind(null, "head"), C.domAPI = m(), C.insertStyleElement = I();
  k()(x.A, C);
  const T = x.A && x.A.locals ? x.A.locals : void 0;
  var w = (0, l.vs)("<div>"), E = (0, l.vs)("<div> "), K = (0, l.vs)("<div><div>1</div><div>"), j = (0, l.vs)("<div><div>2</div><div>");
  const W = () => {
    const { t: n2 } = (0, r.B)(), e2 = (0, o.W6)(), { on: t2, off: u2 } = (0, a.cq)(), k2 = (0, d.Vj)(), { ctx: h2, authLink: m2 } = (0, s.gK)(), { load: f2, unload: v2, readData: p2, info: b2, authKey: _2 } = m2, [I2, Z2] = (0, i.n5)(3e5), R2 = () => {
      var n3;
      return null === (n3 = b2()) || void 0 === n3 ? void 0 : n3.qrcode;
    }, x2 = () => {
      const n3 = Math.floor(I2() / 6e4 % 60), e3 = Math.floor(I2() / 1e3 % 60);
      return `${n3}:${e3 < 10 ? "0" : ""}${e3}`;
    }, C2 = () => window.location.reload(), W2 = () => {
      k2.quit();
    };
    return (0, i.EH)((() => {
      const n3 = _2();
      n3 && h2.authenticate(n3);
    })), (0, i.EH)((() => {
      h2.isAuthenticated() && e2.navigate("/home", true);
    })), (0, i.EH)((() => {
      I2() <= 0 && C2();
    })), (0, g.WW)(p2, 3e3), (0, g.WW)((() => {
      Z2(((n3) => n3 - 1e3));
    }), 1e3), (0, i.Rc)((() => {
      f2(), t2("back", W2);
    })), (0, i.Ki)((() => {
      v2(), u2("back", W2);
    })), (0, i.a0)(c.YW, { get class() {
      return T.login;
    }, get children() {
      return [(e3 = w(), (0, l.Yr)(e3, (() => n2("STREMIO_TV_LOGIN_TITLE"))), (0, i.gb)((() => (0, l.s7)(e3, T.title))), e3), (0, i.a0)(i.wv, { get when() {
        return R2();
      }, get fallback() {
        return (0, i.a0)(c.Rh, { get class() {
          return T.loading;
        } });
      }, get children() {
        return [(0, i.a0)(c._V, { get class() {
          return T.qrcode;
        }, get src() {
          return R2();
        } }), (e4 = E(), t3 = e4.firstChild, (0, l.Yr)(e4, (() => n2("STREMIO_TV_LOGIN_EXPIRES_IN")), t3), (0, l.Yr)(e4, x2, null), (0, i.gb)((() => (0, l.s7)(e4, T.timer))), e4), (0, i.a0)(a.Gk, { get class() {
          return T.steps;
        }, get children() {
          return [(o2 = K(), s2 = o2.firstChild, a2 = s2.nextSibling, (0, l.Yr)(a2, (() => n2("STREMIO_TV_LOGIN_STEP_ONE")), null), (0, l.Yr)(a2, (0, i.a0)(c.N_, { get href() {
            return null === (n3 = b2()) || void 0 === n3 ? void 0 : n3.link;
            var n3;
          } }), null), (0, i.gb)(((n3) => {
            var e6 = T.step, t5 = T.count, i2 = T.label;
            return e6 !== n3.e && (0, l.s7)(o2, n3.e = e6), t5 !== n3.t && (0, l.s7)(s2, n3.t = t5), i2 !== n3.a && (0, l.s7)(a2, n3.a = i2), n3;
          }), { e: void 0, t: void 0, a: void 0 }), o2), (e5 = j(), t4 = e5.firstChild, r2 = t4.nextSibling, (0, l.Yr)(r2, (() => n2("STREMIO_TV_LOGIN_STEP_TWO"))), (0, i.gb)(((n3) => {
            var i2 = T.step, o3 = T.count, s3 = T.label;
            return i2 !== n3.e && (0, l.s7)(e5, n3.e = i2), o3 !== n3.t && (0, l.s7)(t4, n3.t = o3), s3 !== n3.a && (0, l.s7)(r2, n3.a = s3), n3;
          }), { e: void 0, t: void 0, a: void 0 }), e5)];
          var e5, t4, r2, o2, s2, a2;
        } }), (0, i.a0)(c.$n, { get class() {
          return T.button;
        }, icon: "add", get label() {
          return n2("STREMIO_TV_LOGIN_NEW_LINK");
        }, autoFocus: true, onPress: C2 })];
        var e4, t3;
      } })];
      var e3;
    } });
  };
}, 9368: (n, e, t) => {
  t.d(e, { A: () => s });
  var l = t(4474), i = t.n(l), r = t(2670), o = t.n(r)()(i());
  o.push([n.id, ".login-Zkkl4 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.login-Zkkl4 > * {\n  margin: 0.75em 0 0.75em 0;\n}\n.login-Zkkl4 > :first-child {\n  margin-top: 0;\n}\n.login-Zkkl4 > :last-child {\n  margin-bottom: 0;\n}\n.login-Zkkl4 .title-aZ_Ai {\n  font-size: 2rem;\n  font-weight: bold;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.login-Zkkl4 .loading-zx8Ye {\n  height: 10rem;\n  width: 10rem;\n}\n.login-Zkkl4 .qrcode-Wd5Jx {\n  height: 18rem;\n  width: 18rem;\n  border-radius: 1em;\n  background-color: rgba(255, 255, 255, 0.03);\n}\n.login-Zkkl4 .timer-UaDJy {\n  font-size: 1.8rem;\n  font-weight: 500;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n.login-Zkkl4 .steps-Cj23R {\n  display: flex;\n  flex-direction: column;\n}\n.login-Zkkl4 .steps-Cj23R > * {\n  margin: 0.75rem 0 0.75rem 0;\n}\n.login-Zkkl4 .steps-Cj23R > :first-child {\n  margin-top: 0;\n}\n.login-Zkkl4 .steps-Cj23R > :last-child {\n  margin-bottom: 0;\n}\n.login-Zkkl4 .steps-Cj23R .step-I8K2n {\n  flex: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.login-Zkkl4 .steps-Cj23R .step-I8K2n > * {\n  margin: 0 0.5rem 0 0.5rem;\n}\n.login-Zkkl4 .steps-Cj23R .step-I8K2n > :first-child {\n  margin-left: 0;\n}\n.login-Zkkl4 .steps-Cj23R .step-I8K2n > :last-child {\n  margin-right: 0;\n}\n.login-Zkkl4 .steps-Cj23R .step-I8K2n .count-zrUJz {\n  flex: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: calc(4rem - 1rem);\n  width: calc(4rem - 1rem);\n  font-size: 1.6rem;\n  font-weight: 600;\n  line-height: 1rem;\n  border-radius: 100%;\n  color: hsla(0, 0%, 100%, 0.9);\n  background-color: rgba(255, 255, 255, 0.03);\n}\n.login-Zkkl4 .steps-Cj23R .step-I8K2n .label-qWAC9 {\n  flex: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 1.8rem;\n  font-weight: 500;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.login-Zkkl4 .button-RfKWK {\n  width: auto;\n  margin-top: 2rem;\n}\n", ""]), o.locals = { login: "login-Zkkl4", title: "title-aZ_Ai", loading: "loading-zx8Ye", qrcode: "qrcode-Wd5Jx", timer: "timer-UaDJy", steps: "steps-Cj23R", step: "step-I8K2n", count: "count-zrUJz", label: "label-qWAC9", button: "button-RfKWK" };
  const s = o;
} }]);
