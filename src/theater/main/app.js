// Deconstructed Theater 1.10.0 modules (app.js)
module.exports = {
  330: (e, t, n) => {
    "use strict";
    n.d(t, { uV: () => A, aK: () => E, $n: () => Y, WC: () => me, ru: () => q, _V: () => te, bp: () => Je, Gn: () => ot, N_: () => ke, Rh: () => Me, W1: () => _e, aF: () => Ge, Fp: () => gt, YW: () => xt, GW: () => Bt, OY: () => zt, l6: () => Ut, fs: () => $t, ks: () => Qt });
    var r = n(7781), o = n(2555), i = (n(6471), n(9238)), a = n(3497), l = n(2434), s = n.n(l), c = n(5235), u = n.n(c), d = n(6049), h = n.n(d), f = n(8938), v = n.n(f), p = n(502), m = n.n(p), g = n(3611), y = n.n(g), b = n(2838), w = {};
    w.styleTagTransform = y(), w.setAttributes = v(), w.insert = h().bind(null, "head"), w.domAPI = u(), w.insertStyleElement = m();
    s()(b.A, w);
    const k = b.A && b.A.locals ? b.A.locals : void 0;
    var x = (0, r.vs)('<img alt="Error image">'), S = (0, r.vs)("<div>");
    const A = () => {
      const { t: e2 } = (0, a.B)(), t2 = async () => {
        await localStorage.clear(), location.reload();
      };
      return (0, o.a0)(i.Gk, { get class() {
        return k["app-error"];
      }, get children() {
        return [(a2 = x(), (0, o.gb)(((e3) => {
          var t3 = k.image, o2 = n(7162);
          return t3 !== e3.e && (0, r.s7)(a2, e3.e = t3), o2 !== e3.t && (0, r.Bq)(a2, "src", e3.t = o2), e3;
        }), { e: void 0, t: void 0 }), a2), (i2 = S(), (0, r.Yr)(i2, (() => e2("GENERIC_ERROR_MESSAGE"))), (0, o.gb)((() => (0, r.s7)(i2, k.message))), i2), (0, o.a0)(Y, { get label() {
          return e2("CLEAR_DATA");
        }, autoFocus: true, onPress: t2 })];
        var i2, a2;
      } });
    };
    var T = n(3134), M = {};
    M.styleTagTransform = y(), M.setAttributes = v(), M.insert = h().bind(null, "head"), M.domAPI = u(), M.insertStyleElement = m();
    s()(T.A, M);
    const B = T.A && T.A.locals ? T.A.locals : void 0;
    var j = (0, r.vs)('<div><img alt="App icon">');
    const E = () => {
      return e2 = j(), t2 = e2.firstChild, (0, o.gb)(((o2) => {
        var i2 = B["app-loading"], a2 = B.icon, l2 = n(9826);
        return i2 !== o2.e && (0, r.s7)(e2, o2.e = i2), a2 !== o2.t && (0, r.s7)(t2, o2.t = a2), l2 !== o2.a && (0, r.Bq)(t2, "src", o2.a = l2), o2;
      }), { e: void 0, t: void 0, a: void 0 }), e2;
      var e2, t2;
    };
    n(4999), n(7100);
    var I = n(7500), C = n.n(I), P = n(9170), z = n(365), L = n(8688), O = n(4720), R = {};
    R.styleTagTransform = y(), R.setAttributes = v(), R.insert = h().bind(null, "head"), R.domAPI = u(), R.insertStyleElement = m();
    s()(O.A, R);
    const N = O.A && O.A.locals ? O.A.locals : void 0;
    var F = (0, r.vs)("<div>");
    const q = (e2) => {
      const { t: t2 } = (0, a.B)(), n2 = (0, L.SR)(3e3), [i2, l2] = (0, o.n5)(false), s2 = () => {
        var n3;
        return t2(null !== (n3 = e2.label) && void 0 !== n3 ? n3 : "BACK");
      }, c2 = () => {
        l2(true), n2((() => l2(false)));
      };
      return (0, o.Rc)((() => {
        window.addEventListener("mousemove", c2);
      })), (0, o.Ki)((() => {
        window.removeEventListener("mousemove", c2);
      })), (0, o.a0)(z.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return i2();
        }, get children() {
          var t3 = F();
          return (0, r.q2)(t3, "click", e2.onClick, true), (0, r.Yr)(t3, (0, o.a0)(P.A, { get class() {
            return N.icon;
          }, get name() {
            return null !== (t4 = e2.icon) && void 0 !== t4 ? t4 : "chevron-back";
            var t4;
          } }), null), (0, r.Yr)(t3, (0, o.a0)(o.wv, { get when() {
            return !e2.noLabel;
          }, get children() {
            var e3 = F();
            return (0, r.Yr)(e3, s2), (0, o.gb)((() => (0, r.s7)(e3, N.label))), e3;
          } }), null), (0, o.gb)((() => {
            return (0, r.s7)(t3, C()(e2.class, N["floating-button"], N[null !== (n3 = e2.position) && void 0 !== n3 ? n3 : "left"]));
            var n3;
          })), t3;
        } });
      } });
    };
    (0, r.z_)(["click"]);
    var D = n(8024), _ = {};
    _.styleTagTransform = y(), _.setAttributes = v(), _.insert = h().bind(null, "head"), _.domAPI = u(), _.insertStyleElement = m();
    s()(D.A, _);
    const V = D.A && D.A.locals ? D.A.locals : void 0;
    var U = (0, r.vs)("<div>");
    const Y = (e2) => (0, o.a0)(i.zo, { get class() {
      return C()(e2.class, V.button);
    }, get classList() {
      return { selected: e2.selected };
    }, get autoFocus() {
      return e2.autoFocus;
    }, get onPress() {
      return e2.onPress;
    }, get onClick() {
      return e2.onPress;
    }, get onFocus() {
      return e2.onFocus;
    }, get onBlur() {
      return e2.onBlur;
    }, get children() {
      return [(0, o.a0)(o.wv, { get when() {
        return e2.icon;
      }, keyed: true, children: (e3) => (0, o.a0)(P.A, { get class() {
        return V.icon;
      }, name: e3 }) }), (0, o.a0)(o.wv, { get when() {
        return e2.label;
      }, get children() {
        var t2 = U();
        return (0, r.Yr)(t2, (() => e2.label)), (0, o.gb)((() => (0, r.s7)(t2, V.label))), t2;
      } })];
    } });
    var H = n(1200), G = n(2034), K = {};
    K.styleTagTransform = y(), K.setAttributes = v(), K.insert = h().bind(null, "head"), K.domAPI = u(), K.insertStyleElement = m();
    s()(G.A, K);
    const $ = G.A && G.A.locals ? G.A.locals : void 0, W = (e2) => (0, o.a0)(i.zo, { get class() {
      return $.error;
    }, get autoFocus() {
      return e2.autoFocus;
    }, get onFocus() {
      return e2.onFocus;
    }, children: "This catalog did not return any content." });
    var Z = n(2142), J = {};
    J.styleTagTransform = y(), J.setAttributes = v(), J.insert = h().bind(null, "head"), J.domAPI = u(), J.insertStyleElement = m();
    s()(Z.A, J);
    const X = Z.A && Z.A.locals ? Z.A.locals : void 0;
    var Q = n(6066), ee = (0, r.vs)("<img loading=lazy>", true, false, false);
    const te = (e2) => {
      let t2;
      const [n2, i2] = (0, o.n5)(false), a2 = (0, o.To)((() => e2.src)), l2 = async () => {
        i2(false), e2.onLoaded && e2.onLoaded();
      }, s2 = () => {
        i2(true);
      };
      return (0, L.k9)(a2, (() => {
        i2(false);
      })), (0, o.a0)(o.wv, { get when() {
        return (0, r.ph)((() => !!a2()))() && !n2();
      }, get fallback() {
        var t3;
        return null !== (t3 = e2.fallback) && void 0 !== t3 ? t3 : e2.children;
      }, get children() {
        var n3 = ee();
        n3.addEventListener("error", s2), n3.addEventListener("load", l2);
        var i3 = t2;
        return "function" == typeof i3 ? (0, r.Yx)(i3, n3) : t2 = n3, (0, o.gb)(((t3) => {
          var o2 = e2.class, i4 = e2.classList, l3 = a2();
          return o2 !== t3.e && (0, r.s7)(n3, t3.e = o2), t3.t = (0, r.pP)(n3, i4, t3.t), l3 !== t3.a && (0, r.Bq)(n3, "src", t3.a = l3), t3;
        }), { e: void 0, t: void 0, a: void 0 }), n3;
      } });
    };
    var ne = n(1256), re = {};
    re.styleTagTransform = y(), re.setAttributes = v(), re.insert = h().bind(null, "head"), re.domAPI = u(), re.insertStyleElement = m();
    s()(ne.A, re);
    const oe = ne.A && ne.A.locals ? ne.A.locals : void 0;
    var ie = (0, r.vs)("<div>"), ae = (0, r.vs)("<div><div></div><div></div><div><div>"), le = (0, r.vs)("<div><div>");
    const se = ["movies", "series", "channels", "tv"], ce = (e2) => {
      const { ctx: t2 } = (0, Q.gK)(), n2 = () => e2.item && "_id" in e2.item ? e2.item : null, a2 = () => {
        var t3, r2, o2;
        return null !== (t3 = null === (r2 = e2.item && !("_id" in e2.item) ? e2.item : null) || void 0 === r2 ? void 0 : r2.watched) && void 0 !== t3 ? t3 : null === (o2 = n2()) || void 0 === o2 ? void 0 : o2.watched;
      };
      return (0, o.a0)(i.zo, { get class() {
        var t3, n3;
        return C()(oe.item, oe[null !== (t3 = null === (n3 = e2.item) || void 0 === n3 ? void 0 : n3.posterShape) && void 0 !== t3 ? t3 : "poster"]);
      }, get autoFocus() {
        return e2.autoFocus;
      }, get onPress() {
        return e2.onPress;
      }, get onClick() {
        return e2.onPress;
      }, onFocus: () => {
        null !== e2.index && e2.onFocus && e2.onFocus(e2.index, e2.item);
      }, get children() {
        return [(0, o.a0)(o.wv, { get when() {
          return e2.item;
        }, get fallback() {
          return (0, o.a0)(P.A, { get class() {
            return oe.icon;
          }, name: "add" });
        }, children: (t3) => (0, o.a0)(te, { get class() {
          return oe.image;
        }, get src() {
          return t3().poster;
        }, get children() {
          return (0, o.a0)(P.A, { get class() {
            return oe.icon;
          }, get name() {
            return e2.item && se.includes(e2.item.type) ? e2.item.type : "movies";
          } });
        } }) }), (0, o.a0)(o.wv, { get when() {
          return (() => {
            var e3, r2;
            const o2 = n2();
            if (!o2) return 0;
            const { newVideos: i2 } = t2.state(), a3 = null !== (e3 = null === (r2 = i2[o2._id]) || void 0 === r2 ? void 0 : r2.length) && void 0 !== e3 ? e3 : 0;
            return Math.min(Math.max(a3, 0), 99);
          })();
        }, children: (e3) => {
          return t3 = ae(), n3 = t3.firstChild, i2 = n3.nextSibling, a3 = i2.nextSibling, l2 = a3.firstChild, (0, r.Yr)(a3, (0, o.a0)(P.A, { name: "add" }), l2), (0, r.Yr)(l2, e3), (0, o.gb)(((e4) => {
            var o2 = oe["new-videos"], s2 = oe.layer, c2 = oe.layer, u2 = oe.layer, d2 = oe.label;
            return o2 !== e4.e && (0, r.s7)(t3, e4.e = o2), s2 !== e4.t && (0, r.s7)(n3, e4.t = s2), c2 !== e4.a && (0, r.s7)(i2, e4.a = c2), u2 !== e4.o && (0, r.s7)(a3, e4.o = u2), d2 !== e4.i && (0, r.s7)(l2, e4.i = d2), e4;
          }), { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }), t3;
          var t3, n3, i2, a3, l2;
        } }), (0, o.a0)(o.wv, { get when() {
          return null === (e3 = n2()) || void 0 === e3 ? void 0 : e3.progress;
          var e3;
        }, children: (e3) => {
          return t3 = le(), n3 = t3.firstChild, (0, o.gb)(((o2) => {
            var i2 = oe.progress, a3 = oe.inner, l2 = `${e3()}%`;
            return i2 !== o2.e && (0, r.s7)(t3, o2.e = i2), a3 !== o2.t && (0, r.s7)(n3, o2.t = a3), l2 !== o2.a && (0, r.$h)(n3, "width", o2.a = l2), o2;
          }), { e: void 0, t: void 0, a: void 0 }), t3;
          var t3, n3;
        } }), (0, o.a0)(o.wv, { get when() {
          return a2();
        }, get children() {
          var e3 = ie();
          return (0, r.Yr)(e3, (0, o.a0)(P.A, { get class() {
            return oe["watched-icon"];
          }, name: "checkmark" })), (0, o.gb)((() => (0, r.s7)(e3, oe.watched))), e3;
        } })];
      } });
    };
    var ue = n(214), de = {};
    de.styleTagTransform = y(), de.setAttributes = v(), de.insert = h().bind(null, "head"), de.domAPI = u(), de.insertStyleElement = m();
    s()(ue.A, de);
    const he = ue.A && ue.A.locals ? ue.A.locals : void 0, fe = (e2) => {
      const t2 = () => e2.items.length, n2 = (n3, r2) => {
        e2.onItemFocus && e2.onItemFocus(n3, r2), n3 >= t2() - 10 && e2.onLoadNextPage && e2.onLoadNextPage();
      }, i2 = () => {
        e2.onItemPress && e2.onItemPress();
      }, a2 = () => {
        e2.onMorePress && e2.onMorePress();
      };
      return (0, o.a0)(zt, { get class() {
        return C()(e2.class, he.content);
      }, axis: "horizontal", get index() {
        return e2.itemIndex;
      }, get maxIndex() {
        return t2();
      }, overflow: true, get children() {
        return [(0, o.a0)(o.jK, { get each() {
          return e2.items;
        }, children: (t3, a3) => (0, o.a0)(ce, { index: a3, get item() {
          return t3();
        }, get autoFocus() {
          return (0, r.ph)((() => !!e2.autoFocus))() && ("number" == typeof e2.itemIndex ? e2.itemIndex === a3 : 0 === a3);
        }, onFocus: n2, onPress: i2 }) }), (0, o.a0)(o.wv, { get when() {
          return e2.showMore;
        }, get children() {
          return (0, o.a0)(ce, { get index() {
            return t2();
          }, onFocus: n2, onPress: a2 });
        } })];
      } });
    };
    var ve = (0, r.vs)("<div nav-scroll-anchor=vertical>"), pe = (0, r.vs)("<div>");
    const me = (e2) => {
      const t2 = (0, L.ze)(), n2 = (0, H.W6)(), a2 = () => e2.catalog, l2 = () => "ready" in a2().content && "error" in a2().content, s2 = () => {
        e2.onFocus && e2.onFocus(e2.index);
      }, c2 = (t3, n3) => {
        (0, o.vA)((() => {
          s2(), e2.onChange && n3 && e2.onChange(n3, t3);
        }));
      }, u2 = () => {
        var e3, t3;
        n2.navigate(null !== (e3 = null === (t3 = a2().deepLinks) || void 0 === t3 ? void 0 : t3.discover) && void 0 !== e3 ? e3 : "#/library");
      }, d2 = () => (0, o.a0)(Me, { get class() {
        return X.loading;
      }, animations: false, get autoFocus() {
        return e2.autoFocus;
      }, onFocus: s2 });
      return h2 = ve(), (0, r.Yr)(h2, (0, o.a0)(o.wv, { get when() {
        return t2.title(a2());
      }, children: (e3) => {
        return t3 = pe(), (0, r.Yr)(t3, e3), (0, o.gb)((() => (0, r.s7)(t3, X.title))), t3;
        var t3;
      } }), null), (0, r.Yr)(h2, (0, o.a0)(i.Gk, { get class() {
        return X.container;
      }, get children() {
        return (0, o.a0)(o.dO, { get children() {
          return [(0, o.a0)(o.YG, { get when() {
            return l2() ? a2().content : null;
          }, children: (t3) => (0, o.a0)(o.dO, { get fallback() {
            return (0, o.a0)(d2, {});
          }, get children() {
            return [(0, o.a0)(o.YG, { get when() {
              return t3().ready;
            }, children: (t4) => (0, o.a0)(fe, { get class() {
              return X.content;
            }, get items() {
              return t4();
            }, get itemIndex() {
              return e2.itemIndex;
            }, get showMore() {
              return e2.showMore;
            }, get autoFocus() {
              return e2.autoFocus;
            }, onItemFocus: c2, get onItemPress() {
              return e2.onSelect;
            }, onMorePress: u2, get onLoadNextPage() {
              return e2.onNextPage;
            } }) }), (0, o.a0)(o.YG, { get when() {
              return t3().error;
            }, get children() {
              return (0, o.a0)(W, { get autoFocus() {
                return e2.autoFocus;
              }, onFocus: s2 });
            } })];
          } }) }), (0, o.a0)(o.YG, { get when() {
            return l2() ? [] : a2().content;
          }, children: (t3) => (0, o.a0)(fe, { get class() {
            return X.content;
          }, get items() {
            return t3();
          }, get itemIndex() {
            return e2.itemIndex;
          }, get showMore() {
            return e2.showMore;
          }, get autoFocus() {
            return e2.autoFocus;
          }, onItemFocus: c2, get onItemPress() {
            return e2.onSelect;
          }, onMorePress: u2, get onLoadNextPage() {
            return e2.onNextPage;
          } }) })];
        } });
      } }), null), (0, o.gb)((() => (0, r.s7)(h2, X.catalog))), h2;
      var h2;
    };
    var ge = n(2497), ye = n(3980), be = {};
    be.styleTagTransform = y(), be.setAttributes = v(), be.insert = h().bind(null, "head"), be.domAPI = u(), be.insertStyleElement = m();
    s()(ye.A, be);
    const we = ye.A && ye.A.locals ? ye.A.locals : void 0, ke = (e2) => {
      const t2 = (0, ge.Vj)(), n2 = () => {
        e2.href && t2.openExternal({ url: e2.href });
      };
      return (0, o.a0)(i.zo, { get class() {
        return we.link;
      }, get autoFocus() {
        return e2.autoFocus;
      }, onClick: n2, onPress: n2, get children() {
        return e2.href;
      } });
    };
    var xe = n(5074), Se = {};
    Se.styleTagTransform = y(), Se.setAttributes = v(), Se.insert = h().bind(null, "head"), Se.domAPI = u(), Se.insertStyleElement = m();
    s()(xe.A, Se);
    const Ae = xe.A && xe.A.locals ? xe.A.locals : void 0;
    var Te = (0, r.vs)("<div><div></div><div>");
    const Me = (e2) => {
      const { theme: t2 } = (0, Q.Pj)();
      return (0, o.a0)(i.zo, { get class() {
        return C()(e2.class, Ae["loading-container"]);
      }, get autoFocus() {
        return e2.autoFocus;
      }, get onFocus() {
        return e2.onFocus;
      }, get children() {
        return (0, o.a0)(o.wv, { get when() {
          return (0, r.ph)((() => !!t2.animations()))() && false !== e2.animations;
        }, fallback: "Loading ...", get children() {
          var e3 = Te(), t3 = e3.firstChild, n2 = t3.nextSibling;
          return (0, o.gb)(((o2) => {
            var i2 = Ae.loading, a2 = Ae.ripple, l2 = Ae.ripple;
            return i2 !== o2.e && (0, r.s7)(e3, o2.e = i2), a2 !== o2.t && (0, r.s7)(t3, o2.t = a2), l2 !== o2.a && (0, r.s7)(n2, o2.a = l2), o2;
          }), { e: void 0, t: void 0, a: void 0 }), e3;
        } });
      } });
    };
    var Be = n(9485), je = {};
    je.styleTagTransform = y(), je.setAttributes = v(), je.insert = h().bind(null, "head"), je.domAPI = u(), je.insertStyleElement = m();
    s()(Be.A, je);
    const Ee = Be.A && Be.A.locals ? Be.A.locals : void 0;
    var Ie = (0, r.vs)("<div><div>"), Ce = (0, r.vs)("<div>");
    const Pe = (e2) => {
      const { t: t2 } = (0, a.B)(), n2 = () => {
        const n3 = "function" == typeof e2.label ? e2.label() : e2.label;
        return n3 && t2(n3, n3);
      }, l2 = () => e2.checked && e2.checked(), s2 = () => e2.tag && t2(e2.tag, e2.tag);
      return (0, o.a0)(i.zo, { get class() {
        return Ee.option;
      }, get classList() {
        return { [Ee.selected]: e2.selected && e2.selected() };
      }, get autoFocus() {
        return e2.autoFocus;
      }, onFocus: () => {
        e2.onSelect(e2.index, e2.options);
      }, get onPress() {
        return e2.onClick;
      }, get onClick() {
        return e2.onClick;
      }, get children() {
        return [(0, o.a0)(o.dO, { get children() {
          return [(0, o.a0)(o.YG, { get when() {
            return void 0 !== e2.color;
          }, get children() {
            var t3 = Ie(), n3 = t3.firstChild;
            return (0, o.gb)(((o2) => {
              var i2 = Ee.color, a2 = Ee.inner, l3 = e2.color;
              return i2 !== o2.e && (0, r.s7)(t3, o2.e = i2), a2 !== o2.t && (0, r.s7)(n3, o2.t = a2), l3 !== o2.a && (0, r.$h)(n3, "background-color", o2.a = l3), o2;
            }), { e: void 0, t: void 0, a: void 0 }), t3;
          } }), (0, o.a0)(o.YG, { get when() {
            return void 0 === e2.checked;
          }, get children() {
            return [(0, o.a0)(o.wv, { get when() {
              return e2.icon;
            }, keyed: true, children: (e3) => (0, o.a0)(P.A, { get class() {
              return Ee.icon;
            }, name: e3 }) }), (t3 = Ce(), (0, r.Yr)(t3, n2), (0, o.gb)((() => (0, r.s7)(t3, Ee.label))), t3), (0, o.a0)(o.wv, { get when() {
              return s2();
            }, get children() {
              var e3 = Ce();
              return (0, r.Yr)(e3, s2), (0, o.gb)((() => (0, r.s7)(e3, Ee.tag))), e3;
            } })];
            var t3;
          } }), (0, o.a0)(o.YG, { get when() {
            return void 0 !== e2.checked;
          }, get children() {
            return [(i2 = Ce(), (0, o.gb)(((e4) => {
              var t3 = Ee.toggle, n4 = !!l2();
              return t3 !== e4.e && (0, r.s7)(i2, e4.e = t3), n4 !== e4.t && i2.classList.toggle("checked", e4.t = n4), e4;
            }), { e: void 0, t: void 0 }), i2), (n3 = Ce(), (0, r.Yr)(n3, (e3 = (0, r.ph)((() => !!l2())), () => e3() ? t2("ON") : t2("OFF"))), (0, o.gb)((() => (0, r.s7)(n3, Ee.label))), n3)];
            var e3, n3, i2;
          } })];
        } }), (0, o.a0)(o.wv, { get when() {
          var t3;
          return null === (t3 = e2.options) || void 0 === t3 ? void 0 : t3.length;
        }, get children() {
          return (0, o.a0)(P.A, { get class() {
            return Ee["arrow-icon"];
          }, name: "chevron-forward" });
        } })];
      } });
    };
    var ze = n(6052), Le = {};
    Le.styleTagTransform = y(), Le.setAttributes = v(), Le.insert = h().bind(null, "head"), Le.domAPI = u(), Le.insertStyleElement = m();
    s()(ze.A, Le);
    const Oe = ze.A && ze.A.locals ? ze.A.locals : void 0, Re = (e2) => {
      const [t2, n2] = (0, o.n5)(0), a2 = () => {
        var t3;
        return null !== (t3 = e2.options) && void 0 !== t3 ? t3 : [];
      }, l2 = (t3, r2) => {
        n2(t3), e2.onChange(e2.index, r2);
      };
      return (0, o.a0)(o.wv, { get when() {
        return a2().length;
      }, get children() {
        return (0, o.a0)(i.Gk, { leave: ["left", "right"], get children() {
          return (0, o.a0)(zt, { get class() {
            return Oe.list;
          }, axis: "vertical", get scrollReset() {
            return e2.resetScroll;
          }, overflow: true, get children() {
            return (0, o.a0)(o.a, { get each() {
              return a2().slice(0, t2() + 10);
            }, children: (t3, n3) => (0, o.a0)(o.wv, { get when() {
              return !(t3.disabled && t3.disabled());
            }, get children() {
              return (0, o.a0)(Pe, (0, o.v6)({ get index() {
                return n3();
              }, get autoFocus() {
                return (0, r.ph)((() => !!e2.autoFocus))() && 0 === n3();
              }, onSelect: l2 }, t3));
            } }) });
          } });
        } });
      } });
    };
    var Ne = n(9038), Fe = {};
    Fe.styleTagTransform = y(), Fe.setAttributes = v(), Fe.insert = h().bind(null, "head"), Fe.domAPI = u(), Fe.insertStyleElement = m();
    s()(Ne.A, Fe);
    const qe = Ne.A && Ne.A.locals ? Ne.A.locals : void 0;
    var De = (0, r.vs)("<div><div><div></div></div><div>");
    const _e = (e2) => {
      const { onBack: t2 } = (0, i.cq)(), n2 = (0, H.W6)(), [a2, l2] = (0, o.n5)({ 0: e2.options }), [s2, c2] = (0, o.n5)(), u2 = (e3, t3) => {
        const n3 = e3 + 1;
        l2(((e4) => ({ ...e4, [n3]: t3, [n3 + 1]: void 0 }))), c2(n3);
      };
      return t2((() => {
        e2.onClose && e2.onClose();
      })), (0, o.Rc)((() => {
        n2.setBackDisabled(true);
      })), (0, o.Ki)((() => {
        n2.setBackDisabled(false);
      })), d2 = De(), h2 = d2.firstChild, f2 = h2.firstChild, v2 = h2.nextSibling, (0, r.Yr)(f2, (() => e2.title)), (0, r.Yr)(v2, (0, o.a0)(o.jK, { get each() {
        return Object.values(a2());
      }, children: (e3, t3) => (0, o.a0)(Re, { index: t3, get options() {
        return e3();
      }, get resetScroll() {
        return s2() === t3;
      }, autoFocus: 0 === t3, onChange: u2 }) })), (0, o.gb)(((t3) => {
        var n3 = C()(e2.class, qe.menu), o2 = qe.heading, i2 = qe.title, a3 = qe.inner;
        return n3 !== t3.e && (0, r.s7)(d2, t3.e = n3), o2 !== t3.t && (0, r.s7)(h2, t3.t = o2), i2 !== t3.a && (0, r.s7)(f2, t3.a = i2), a3 !== t3.o && (0, r.s7)(v2, t3.o = a3), t3;
      }), { e: void 0, t: void 0, a: void 0, o: void 0 }), d2;
      var d2, h2, f2, v2;
    };
    var Ve = n(1762), Ue = {};
    Ue.styleTagTransform = y(), Ue.setAttributes = v(), Ue.insert = h().bind(null, "head"), Ue.domAPI = u(), Ue.insertStyleElement = m();
    s()(Ve.A, Ue);
    const Ye = Ve.A && Ve.A.locals ? Ve.A.locals : void 0;
    var He = (0, r.vs)("<div>");
    const Ge = (e2) => {
      const t2 = (0, H.W6)(), { onBack: n2 } = (0, i.cq)();
      return n2(e2.onClose), (0, o.Rc)((() => {
        t2.setBackDisabled(true);
      })), (0, o.Ki)((() => {
        t2.setBackDisabled(false);
      })), (0, o.a0)(r.ZL, { get children() {
        return (0, o.a0)(i.Gk, { get class() {
          return C()(Ye.modal, { [Ye.expand]: e2.expand });
        }, leave: ["none"], get children() {
          return [(0, o.a0)(q, { position: "right", icon: "close", noLabel: true, get onClick() {
            return e2.onClose;
          } }), (n3 = He(), (0, r.q2)(n3, "click", e2.onClose, true), (0, o.gb)((() => (0, r.s7)(n3, Ye.backdrop))), n3), (t3 = He(), (0, r.Yr)(t3, (0, o.a0)(o.wv, { get when() {
            return e2.title;
          }, get children() {
            var t4 = He();
            return (0, r.Yr)(t4, (() => e2.title)), (0, o.gb)((() => (0, r.s7)(t4, Ye.title))), t4;
          } }), null), (0, r.Yr)(t3, (() => e2.children), null), (0, o.gb)((() => (0, r.s7)(t3, Ye.content))), t3)];
          var t3, n3;
        } });
      } });
    };
    (0, r.z_)(["click"]);
    var Ke = n(2444), $e = {};
    $e.styleTagTransform = y(), $e.setAttributes = v(), $e.insert = h().bind(null, "head"), $e.domAPI = u(), $e.insertStyleElement = m();
    s()(Ke.A, $e);
    const We = Ke.A && Ke.A.locals ? Ke.A.locals : void 0;
    var Ze = (0, r.vs)("<div>");
    const Je = (e2) => {
      const { t: t2 } = (0, a.B)(), { onBack: l2 } = (0, i.cq)(), s2 = (0, H.W6)(), { ctx: c2, metaDetails: u2 } = (0, Q.gK)(), { loading: d2, metadata: h2, error: f2 } = u2, v2 = () => e2.item && "_id" in e2.item ? e2.item : null, p2 = () => e2.item && !("_id" in e2.item) ? e2.item : null, m2 = () => {
        var e3;
        return null === (e3 = h2()) || void 0 === e3 ? void 0 : e3.inLibrary;
      }, g2 = () => {
        var e3;
        return null === (e3 = h2()) || void 0 === e3 ? void 0 : e3.watched;
      }, y2 = () => {
        var e3;
        return null === (e3 = h2()) || void 0 === e3 || null === (e3 = e3.trailerStreams) || void 0 === e3 || null === (e3 = e3[0]) || void 0 === e3 || null === (e3 = e3.deepLinks) || void 0 === e3 ? void 0 : e3.player;
      }, b2 = () => {
        var e3, t3;
        return null === (e3 = null !== (t3 = v2()) && void 0 !== t3 ? t3 : p2()) || void 0 === e3 ? void 0 : e3.deepLinks;
      }, w2 = () => {
        var e3;
        return null === (e3 = v2()) || void 0 === e3 ? void 0 : e3.progress;
      }, k2 = () => {
        var e3, t3, n2, r2, o2;
        const i2 = null !== (e3 = null !== (t3 = null === (n2 = b2()) || void 0 === n2 ? void 0 : n2.player) && void 0 !== t3 ? t3 : null === (r2 = b2()) || void 0 === r2 ? void 0 : r2.metaDetailsStreams) && void 0 !== e3 ? e3 : null === (o2 = b2()) || void 0 === o2 ? void 0 : o2.metaDetailsVideos;
        s2.navigate(i2);
      }, x2 = () => {
        var e3, t3, n2;
        const r2 = null !== (e3 = null === (t3 = b2()) || void 0 === t3 ? void 0 : t3.metaDetailsVideos) && void 0 !== e3 ? e3 : null === (n2 = b2()) || void 0 === n2 ? void 0 : n2.metaDetailsStreams;
        s2.navigate(r2);
      }, S2 = () => {
        const e3 = h2();
        e3 && (m2() ? c2.removeFromLibrary(e3) : c2.addToLibrary(e3));
      }, A2 = () => {
        u2.setWatched(!g2());
      }, T2 = () => {
        const t3 = h2();
        t3 && c2.rewindLibraryItem(t3), e2.onClose();
      }, M2 = () => {
        s2.navigate(y2());
      };
      return (0, L.k9)(e2.open, ((e3) => {
        if (s2.setBackDisabled(e3), e3) {
          var t3, n2, r2, o2, i2, a2;
          const e4 = null !== (t3 = null === (n2 = v2()) || void 0 === n2 ? void 0 : n2.type) && void 0 !== t3 ? t3 : null === (r2 = p2()) || void 0 === r2 ? void 0 : r2.type, l3 = null !== (o2 = null === (i2 = v2()) || void 0 === i2 ? void 0 : i2._id) && void 0 !== o2 ? o2 : null === (a2 = p2()) || void 0 === a2 ? void 0 : a2.id;
          e4 && l3 && u2.load({ type: e4, metaId: l3 });
        }
      })), l2((() => {
        e2.onClose && e2.onClose();
      })), (0, o.Ki)((() => {
        s2.setBackDisabled(false);
      })), (0, o.a0)(z.e, { name: "slide-fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return e2.open();
        }, get children() {
          return (0, o.a0)(i.Gk, { get class() {
            return We["item-menu"];
          }, leave: ["left"], get onLeave() {
            return e2.onClose;
          }, get children() {
            return [(l3 = Ze(), (0, r.q2)(l3, "click", e2.onClose, true), (0, o.gb)((() => (0, r.s7)(l3, We.backdrop))), l3), (a2 = Ze(), (0, r.Yr)(a2, (0, o.a0)(o.dO, { get children() {
              return [(0, o.a0)(o.YG, { get when() {
                return d2();
              }, get children() {
                return (0, o.a0)(Me, { autoFocus: true });
              } }), (0, o.a0)(o.YG, { get when() {
                return h2();
              }, get children() {
                return [(0, o.a0)(Y, { get class() {
                  return We.option;
                }, icon: "play", get label() {
                  return t2(w2() ? "CONTINUE_WATCHING" : "PLAY_NOW");
                }, autoFocus: true, onPress: k2 }), (0, o.a0)(Y, { get class() {
                  return We.option;
                }, icon: "details", get label() {
                  return t2("LIBRARY_DETAILS");
                }, onPress: x2 }), (0, o.a0)(Y, { get class() {
                  return We.option;
                }, get icon() {
                  return m2() ? "remove" : "add";
                }, get label() {
                  return (0, r.ph)((() => !m2()))() ? t2("ADD_TO_LIB") : t2("REMOVE_FROM_LIB");
                }, onPress: S2 }), (0, o.a0)(Y, { get class() {
                  return We.option;
                }, get icon() {
                  return g2() ? "eye-off" : "eye";
                }, get label() {
                  return (0, r.ph)((() => !g2()))() ? t2("MARK_AS_WATCHED") : t2("MARK_AS_UNWATCHED");
                }, onPress: A2 }), (0, o.a0)(o.wv, { get when() {
                  return y2();
                }, get children() {
                  return (0, o.a0)(Y, { get class() {
                    return We.option;
                  }, icon: "trailer", get label() {
                    return t2("TRAILER");
                  }, onPress: M2 });
                } }), (0, o.a0)(o.wv, { get when() {
                  return w2();
                }, get children() {
                  return (0, o.a0)(Y, { get class() {
                    return We.option;
                  }, icon: "close", get label() {
                    return t2("LIBRARY_RESUME_DISMISS");
                  }, onPress: T2 });
                } })];
              } }), (0, o.a0)(o.YG, { get when() {
                return f2();
              }, get children() {
                return (0, o.a0)(i.zo, { get class() {
                  return We.error;
                }, autoFocus: true, get children() {
                  return [(0, o.a0)(te, { get class() {
                    return We.image;
                  }, get src() {
                    return n(7162);
                  } }), (e3 = Ze(), (0, r.Yr)(e3, (() => t2("GENERIC_ERROR_MESSAGE"))), (0, o.gb)((() => (0, r.s7)(e3, We.label))), e3)];
                  var e3;
                } });
              } })];
            } })), (0, o.gb)((() => (0, r.s7)(a2, We.content))), a2)];
            var a2, l3;
          } });
        } });
      } });
    };
    (0, r.z_)(["click"]);
    n(928), n(6399), n(1273), n(1012), n(7621);
    var Xe = n(970), Qe = {};
    Qe.styleTagTransform = y(), Qe.setAttributes = v(), Qe.insert = h().bind(null, "head"), Qe.domAPI = u(), Qe.insertStyleElement = m();
    s()(Xe.A, Qe);
    const et = Xe.A && Xe.A.locals ? Xe.A.locals : void 0;
    var tt = (0, r.vs)("<div>"), nt = (0, r.vs)("<div><div></div><div></div><div>"), rt = (0, r.vs)("<div><div><div></div></div><div><div><div>");
    const ot = (e2) => {
      const { metaDetails: t2 } = (0, Q.gK)(), { metadata: n2 } = t2, i2 = (0, L.SR)(500), a2 = (0, L.SR)(500), l2 = () => e2.item && "_id" in e2.item ? e2.item : null, s2 = () => e2.item && !("_id" in e2.item) ? e2.item : null, c2 = () => {
        var e3;
        return null !== (e3 = l2()) && void 0 !== e3 ? e3 : s2();
      }, [u2, d2] = (0, o.n5)(false), [h2, f2] = (0, o.n5)(false), [v2, p2] = (0, o.n5)(null), m2 = () => {
        var e3, t3;
        return l2() && n2() && (null === (e3 = l2()) || void 0 === e3 ? void 0 : e3._id) === (null === (t3 = n2()) || void 0 === t3 ? void 0 : t3.id);
      }, g2 = () => {
        var e3;
        return null === (e3 = c2()) || void 0 === e3 ? void 0 : e3.name;
      }, y2 = () => {
        var e3;
        return null === (e3 = v2()) || void 0 === e3 ? void 0 : e3.description;
      }, b2 = () => {
        var e3;
        return null === (e3 = v2()) || void 0 === e3 ? void 0 : e3.runtime;
      }, w2 = () => {
        var e3;
        return null === (e3 = v2()) || void 0 === e3 ? void 0 : e3.releaseInfo;
      }, k2 = () => {
        var e3, t3;
        return null !== (e3 = null === (t3 = v2()) || void 0 === t3 ? void 0 : t3.links) && void 0 !== e3 ? e3 : [];
      }, x2 = () => {
        var e3;
        return null === (e3 = k2().find((({ category: e4 }) => "imdb" === e4))) || void 0 === e3 ? void 0 : e3.name;
      }, S2 = () => {
        f2(false);
      };
      return (0, L.k9)(c2, (() => {
        (0, o.vA)((() => {
          d2(true), f2(true);
        }));
      })), (0, L.k9)(s2, ((e3) => {
        e3 && i2((() => {
          (0, o.vA)((() => {
            d2(false), p2(e3);
          }));
        }));
      })), (0, L.k9)(n2, ((e3) => {
        e3 && (0, o.vA)((() => {
          d2(false), p2(e3);
        }));
      })), (0, L.k9)(l2, ((e3) => {
        m2() && i2((() => {
          (0, o.vA)((() => {
            d2(false), p2(n2()), f2(false);
          }));
        })), e3 && a2((() => {
          t2.load({ type: e3.type, metaId: e3._id });
        }));
      })), A2 = rt(), T2 = A2.firstChild, M2 = T2.firstChild, B2 = T2.nextSibling, j2 = B2.firstChild, E2 = j2.firstChild, (0, r.Yr)(M2, g2), (0, r.Yr)(T2, (0, o.a0)(z.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return !u2();
        }, get children() {
          var e3 = nt(), t3 = e3.firstChild, n3 = t3.nextSibling, i3 = n3.nextSibling;
          return (0, r.Yr)(t3, (0, o.a0)(o.wv, { get when() {
            return b2();
          }, get children() {
            var e4 = tt();
            return (0, r.Yr)(e4, b2), (0, o.gb)((() => (0, r.s7)(e4, et.label))), e4;
          } }), null), (0, r.Yr)(t3, (0, o.a0)(o.wv, { get when() {
            return w2();
          }, get children() {
            var e4 = tt();
            return (0, r.Yr)(e4, w2), (0, o.gb)((() => (0, r.s7)(e4, et.label))), e4;
          } }), null), (0, r.Yr)(t3, (0, o.a0)(o.wv, { get when() {
            return x2();
          }, get children() {
            var e4 = tt();
            return (0, r.Yr)(e4, x2, null), (0, r.Yr)(e4, (0, o.a0)(P.A, { get class() {
              return et["imdb-icon"];
            }, name: "imdb" }), null), (0, o.gb)((() => (0, r.s7)(e4, et.label))), e4;
          } }), null), (0, r.Yr)(n3, y2), (0, r.Yr)(i3, (() => {
            var e4;
            return null === (e4 = k2().filter((({ category: e5 }) => "Cast" === e5)).map((({ name: e5 }) => e5))) || void 0 === e4 ? void 0 : e4.join(", ");
          })), (0, o.gb)(((o2) => {
            var a3 = et.details, l3 = et.info, s3 = et.description, c3 = et.cast;
            return a3 !== o2.e && (0, r.s7)(e3, o2.e = a3), l3 !== o2.t && (0, r.s7)(t3, o2.t = l3), s3 !== o2.a && (0, r.s7)(n3, o2.a = s3), c3 !== o2.o && (0, r.s7)(i3, o2.o = c3), o2;
          }), { e: void 0, t: void 0, a: void 0, o: void 0 }), e3;
        } });
      } }), null), (0, r.Yr)(j2, (0, o.a0)(te, { get class() {
        return et["background-image"];
      }, get src() {
        return null !== (e3 = null === (t3 = v2()) || void 0 === t3 ? void 0 : t3.background) && void 0 !== e3 ? e3 : null === (n3 = v2()) || void 0 === n3 ? void 0 : n3.poster;
        var e3, t3, n3;
      }, onLoaded: S2 }), null), (0, o.gb)(((t3) => {
        var n3 = C()(e2.class, et["item-preview"], { [et.compact]: e2.compact }, { [et["item-preview-720p"]]: window.screen720p }), o2 = et["info-container"], i3 = et.title, a3 = et["background-container"], l3 = { [et.visible]: !u2() && !h2() }, s3 = C()(et["background-inner"], { [et["background-inner-720p"]]: window.screen720p }), c3 = et["gradient-overlay"];
        return n3 !== t3.e && (0, r.s7)(A2, t3.e = n3), o2 !== t3.t && (0, r.s7)(T2, t3.t = o2), i3 !== t3.a && (0, r.s7)(M2, t3.a = i3), a3 !== t3.o && (0, r.s7)(B2, t3.o = a3), t3.i = (0, r.pP)(B2, l3, t3.i), s3 !== t3.n && (0, r.s7)(j2, t3.n = s3), c3 !== t3.s && (0, r.s7)(E2, t3.s = c3), t3;
      }), { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0 }), A2;
      var A2, T2, M2, B2, j2, E2;
    };
    var it = n(7363), at = {};
    at.styleTagTransform = y(), at.setAttributes = v(), at.insert = h().bind(null, "head"), at.domAPI = u(), at.insertStyleElement = m();
    s()(it.A, at);
    const lt = it.A && it.A.locals ? it.A.locals : void 0;
    var st = (0, r.vs)("<div>");
    const ct = (e2) => {
      const { t: t2 } = (0, a.B)(), n2 = (0, H.g)(), l2 = (0, H.lq)(), s2 = () => e2.tab.isFocused ? e2.tab.isFocused(n2()) : !!e2.tab.name && l2().name === e2.tab.name, c2 = () => {
        e2.onPress(e2.tab.path);
      };
      return (0, o.a0)(i.zo, { get class() {
        return lt.tab;
      }, get classList() {
        return { [lt.selected]: s2() };
      }, onPress: c2, onClick: c2, get children() {
        return [(0, o.a0)(o.wv, { get when() {
          return null !== (t3 = e2.tab.icon) && void 0 !== t3 ? t3 : s2() ? e2.tab.name : `${e2.tab.name}-outline`;
          var t3;
        }, keyed: true, children: (e3) => (0, o.a0)(P.A, { get class() {
          return lt.icon;
        }, name: e3 }) }), (0, o.a0)(o.wv, { get when() {
          return e2.showLabel ? e2.tab.label : null;
        }, children: (e3) => {
          return n3 = st(), (0, r.Yr)(n3, (() => t2(e3()))), (0, o.gb)((() => (0, r.s7)(n3, lt.label))), n3;
          var n3;
        } })];
      } });
    };
    var ut = n(8536), dt = {};
    dt.styleTagTransform = y(), dt.setAttributes = v(), dt.insert = h().bind(null, "head"), dt.domAPI = u(), dt.insertStyleElement = m();
    s()(ut.A, dt);
    const ht = ut.A && ut.A.locals ? ut.A.locals : void 0;
    var ft = (0, r.vs)("<div>"), vt = (0, r.vs)("<div><div><img><img></div><div>");
    const pt = [{ path: "/search", name: "search", label: "STREMIO_TV_NAV_SEARCH" }, { path: "/home", name: "home", label: "STREMIO_TV_NAV_HOME" }, { path: "/discover", name: "discover", label: "STREMIO_TV_NAV_DISCOVER" }, { path: null, label: "MORE", icon: "more-horizontal" }, { path: "/library", name: "library", label: "STREMIO_TV_NAV_LIBRARY" }, { path: "/addons", name: "addons", label: "STREMIO_TV_NAV_ADDONS" }, { path: "/settings", name: "settings", label: "STREMIO_TV_NAV_SETTINGS" }], mt = [{ path: null, label: "BACK", icon: "chevron-back" }, { path: "/discover/movie", name: "movies", label: "STREMIO_TV_NAV_MOVIES", isFocused: (e2) => "movie" === e2.type }, { path: "/discover/series", name: "series", label: "STREMIO_TV_NAV_SERIES", isFocused: (e2) => "series" === e2.type }, { path: "/discover/tv", name: "channels", label: "STREMIO_TV_NAV_CHANNELS", isFocused: (e2) => "tv" === e2.type || "channel" === e2.type }], gt = () => {
      const e2 = (0, H.W6)(), { onBack: t2 } = (0, i.cq)(), a2 = (0, H.lq)(), { theme: l2 } = (0, Q.Pj)(), [s2, c2, u2] = (0, L.zD)(), [d2, h2, f2] = (0, L.zD)(), [v2, , , p2] = (0, L.zD)(), m2 = (t3) => {
        null === t3 ? p2() : e2.navigate(t3, true);
      }, g2 = () => {
        (0, o.vA)((() => {
          h2(), c2();
        }));
      }, y2 = () => {
        (0, o.vA)((() => {
          f2(), u2();
        }));
      };
      return (0, L.k9)(d2, ((t3) => {
        e2.setBackDisabled(t3);
      })), (0, L.k9)(v2, (() => {
        (0, o.vA)((() => {
          u2(), c2();
        }));
      })), t2((() => {
        1 === e2.size() && (d2() ? window.dispatchEvent(new Event("quit")) : !e2.backDisabled() && g2());
      })), (0, o.a0)(o.wv, { get when() {
        var e3;
        return !(null !== (e3 = a2().data) && void 0 !== e3 && e3.hideNavbar);
      }, get children() {
        return (0, o.a0)(i.Gk, { get class() {
          return ht.navbar;
        }, get classList() {
          return { [ht.expanded]: d2(), ...l2.animationsClass() };
        }, leave: ["right"], layoutUpdate: false, get autoFocus() {
          return s2();
        }, onEnter: g2, onLeave: y2, get children() {
          return [(0, o.a0)(z.e, { name: "fade", get children() {
            return (0, o.a0)(o.wv, { get when() {
              return d2();
            }, get children() {
              var e4 = ft();
              return (0, r.q2)(e4, "click", f2, true), (0, o.gb)((() => (0, r.s7)(e4, ht.backdrop))), e4;
            } });
          } }), (s3 = ft(), (0, o.gb)((() => (0, r.s7)(s3, ht.background))), s3), (e3 = vt(), t3 = e3.firstChild, i2 = t3.firstChild, a3 = i2.nextSibling, l3 = t3.nextSibling, (0, r.q2)(e3, "mouseleave", f2), (0, r.q2)(e3, "mouseover", h2, true), (0, r.Yr)(l3, (0, o.a0)(o.dO, { get children() {
            return [(0, o.a0)(o.YG, { get when() {
              return v2();
            }, get children() {
              return (0, o.a0)(o.a, { each: mt, children: (e4) => (0, o.a0)(ct, { tab: e4, get showLabel() {
                return d2();
              }, onPress: m2 }) });
            } }), (0, o.a0)(o.YG, { get when() {
              return !v2();
            }, get children() {
              return (0, o.a0)(o.a, { each: pt, children: (e4) => (0, o.a0)(ct, { tab: e4, get showLabel() {
                return d2();
              }, onPress: m2 }) });
            } })];
          } })), (0, o.gb)(((o2) => {
            var s4 = ht.content, c3 = ht.heading, u3 = ht.icon, d3 = n(9826), h3 = ht.logo, f3 = n(7968), v3 = ht.tabs;
            return s4 !== o2.e && (0, r.s7)(e3, o2.e = s4), c3 !== o2.t && (0, r.s7)(t3, o2.t = c3), u3 !== o2.a && (0, r.s7)(i2, o2.a = u3), d3 !== o2.o && (0, r.Bq)(i2, "src", o2.o = d3), h3 !== o2.i && (0, r.s7)(a3, o2.i = h3), f3 !== o2.n && (0, r.Bq)(a3, "src", o2.n = f3), v3 !== o2.s && (0, r.s7)(l3, o2.s = v3), o2;
          }), { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0 }), e3)];
          var e3, t3, i2, a3, l3, s3;
        } });
      } });
    };
    (0, r.z_)(["click", "mouseover"]);
    var yt = n(1158), bt = {};
    bt.styleTagTransform = y(), bt.setAttributes = v(), bt.insert = h().bind(null, "head"), bt.domAPI = u(), bt.insertStyleElement = m();
    s()(yt.A, bt);
    const wt = yt.A && yt.A.locals ? yt.A.locals : void 0;
    var kt = (0, r.vs)("<div><div>");
    const xt = (e2) => {
      const t2 = (0, H.lq)(), { onBack: n2 } = (0, i.cq)(), { theme: a2 } = (0, Q.Pj)(), l2 = (0, H.W6)(), s2 = () => {
        e2.nested && l2.back();
      };
      return n2(s2), c2 = kt(), u2 = c2.firstChild, (0, r.Yr)(c2, (0, o.a0)(o.wv, { get when() {
        return e2.nested;
      }, get children() {
        return (0, o.a0)(q, { onClick: s2 });
      } }), u2), (0, r.Yr)(u2, (() => e2.children)), (0, o.gb)(((n3) => {
        var o2, i2 = C()(wt.page, { [wt["page-720p"]]: window.screen720p }), l3 = { [wt["hide-navbar"]]: !(null === (o2 = t2().data) || void 0 === o2 || !o2.hideNavbar), ...a2.animationsClass() }, s3 = C()(e2.class, wt.inner);
        return i2 !== n3.e && (0, r.s7)(c2, n3.e = i2), n3.t = (0, r.pP)(c2, l3, n3.t), s3 !== n3.a && (0, r.s7)(u2, n3.a = s3), n3;
      }), { e: void 0, t: void 0, a: void 0 }), c2;
      var c2, u2;
    };
    var St = n(2926), At = {};
    At.styleTagTransform = y(), At.setAttributes = v(), At.insert = h().bind(null, "head"), At.domAPI = u(), At.insertStyleElement = m();
    s()(St.A, At);
    const Tt = St.A && St.A.locals ? St.A.locals : void 0;
    var Mt = (0, r.vs)("<div>");
    const Bt = (e2) => {
      const t2 = () => e2.rating && e2.rating();
      return n2 = Mt(), (0, r.Yr)(n2, (0, o.a0)(Y, { get class() {
        return C()(Tt["icon-container"]);
      }, get icon() {
        return "liked" === t2() ? "thumbs-up" : "thumbs-up-outline";
      }, get onPress() {
        return e2.onLiked;
      } }), null), (0, r.Yr)(n2, (0, o.a0)(Y, { get class() {
        return C()(Tt["icon-container"]);
      }, get icon() {
        return "loved" === t2() ? "heart" : "heart-outline";
      }, get onPress() {
        return e2.onLoved;
      } }), null), (0, o.gb)((() => (0, r.s7)(n2, C()(Tt["ratings-container"], e2.class)))), n2;
      var n2;
    };
    var jt = n(6746), Et = {};
    Et.styleTagTransform = y(), Et.setAttributes = v(), Et.insert = h().bind(null, "head"), Et.domAPI = u(), Et.insertStyleElement = m();
    s()(jt.A, Et);
    const It = jt.A && jt.A.locals ? jt.A.locals : void 0;
    var Ct = (0, r.vs)("<div>"), Pt = (0, r.vs)("<div><div>");
    const zt = (e2) => {
      const t2 = (0, i.fR)(e2.axis), n2 = (0, i.cq)(), a2 = () => {
        n2.move("left");
      }, l2 = () => {
        n2.move("right");
      };
      return (0, o.EH)((() => {
        e2.scrollReset && t2.reset();
      })), (() => {
        var n3 = Pt(), i2 = n3.firstChild;
        (0, r.Yr)(n3, (0, o.a0)(o.wv, { get when() {
          return "horizontal" === e2.axis && (null !== (t3 = e2.index) && void 0 !== t3 ? t3 : 0) > 0;
          var t3;
        }, get children() {
          var e3 = Ct();
          return e3.$$click = a2, (0, r.Yr)(e3, (0, o.a0)(P.A, { get class() {
            return It.icon;
          }, name: "chevron-back" })), (0, o.gb)((() => (0, r.s7)(e3, C()(It.control, It.left)))), e3;
        } }), i2);
        var s2 = t2.ref;
        return "function" == typeof s2 ? (0, r.Yx)(s2, i2) : t2.ref = i2, (0, r.Yr)(i2, (() => e2.children)), (0, r.Yr)(n3, (0, o.a0)(o.wv, { get when() {
          return "horizontal" === e2.axis && (null !== (t3 = e2.index) && void 0 !== t3 ? t3 : 0) < (null !== (n4 = e2.maxIndex) && void 0 !== n4 ? n4 : 0);
          var t3, n4;
        }, get children() {
          var e3 = Ct();
          return e3.$$click = l2, (0, r.Yr)(e3, (0, o.a0)(P.A, { get class() {
            return It.icon;
          }, name: "chevron-forward" })), (0, o.gb)((() => (0, r.s7)(e3, C()(It.control, It.right)))), e3;
        } }), null), (0, o.gb)(((t3) => {
          var o2 = It["scroll-container"], a3 = { [It.overflow]: e2.overflow }, l3 = C()(e2.class, It["scroll-content"]), s3 = e2.style;
          return o2 !== t3.e && (0, r.s7)(n3, t3.e = o2), t3.t = (0, r.pP)(n3, a3, t3.t), l3 !== t3.a && (0, r.s7)(i2, t3.a = l3), t3.o = (0, r.iF)(i2, s3, t3.o), t3;
        }), { e: void 0, t: void 0, a: void 0, o: void 0 }), n3;
      })();
    };
    (0, r.z_)(["click"]);
    var Lt = n(9525), Ot = {};
    Ot.styleTagTransform = y(), Ot.setAttributes = v(), Ot.insert = h().bind(null, "head"), Ot.domAPI = u(), Ot.insertStyleElement = m();
    s()(Lt.A, Ot);
    const Rt = Lt.A && Lt.A.locals ? Lt.A.locals : void 0;
    var Nt = (0, r.vs)("<div>");
    const Ft = (e2) => {
      const t2 = (0, o.To)((() => e2.selected)), n2 = () => {
        e2.onSelect(e2.value);
      };
      return (0, o.a0)(i.zo, { get class() {
        return Rt.option;
      }, get classList() {
        return { [Rt.selected]: t2() };
      }, get autoFocus() {
        return t2();
      }, onPress: n2, onClick: n2, get children() {
        var t3 = Nt();
        return (0, r.Yr)(t3, (() => e2.label)), (0, o.gb)((() => (0, r.s7)(t3, Rt.label))), t3;
      } });
    };
    var qt = n(4e3), Dt = {};
    Dt.styleTagTransform = y(), Dt.setAttributes = v(), Dt.insert = h().bind(null, "head"), Dt.domAPI = u(), Dt.insertStyleElement = m();
    s()(qt.A, Dt);
    const _t = qt.A && qt.A.locals ? qt.A.locals : void 0;
    var Vt = (0, r.vs)("<div>");
    const Ut = (e2) => {
      const { onBack: t2 } = (0, i.cq)(), n2 = (0, H.W6)(), [a2, l2, s2] = (0, L.zD)(), c2 = () => {
        var t3, n3;
        return null !== (t3 = null === (n3 = e2.options.find((({ selected: e3 }) => e3))) || void 0 === n3 ? void 0 : n3.label) && void 0 !== t3 ? t3 : null;
      }, u2 = (t3) => {
        (0, o.vA)((() => {
          e2.onChange(t3), s2();
        }));
      };
      return (0, L.k9)(a2, ((e3) => {
        n2.setBackDisabled(e3);
      })), t2((() => {
        s2();
      })), d2 = Vt(), (0, r.Yr)(d2, (0, o.a0)(i.zo, { get class() {
        return _t.selected;
      }, get autoFocus() {
        return e2.autoFocus;
      }, onPress: l2, onClick: l2, get children() {
        return [(0, o.a0)(P.A, { get class() {
          return _t.icon;
        }, name: "more-vertical" }), (e3 = Vt(), (0, r.Yr)(e3, c2), (0, o.gb)((() => (0, r.s7)(e3, _t.label))), e3)];
        var e3;
      } }), null), (0, r.Yr)(d2, (0, o.a0)(z.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return a2();
        }, get children() {
          var e3 = Vt();
          return (0, r.q2)(e3, "click", s2, true), (0, o.gb)((() => (0, r.s7)(e3, _t.backdrop))), e3;
        } });
      } }), null), (0, r.Yr)(d2, (0, o.a0)(z.e, { name: "fade", get children() {
        return (0, o.a0)(o.wv, { get when() {
          return a2();
        }, get children() {
          return (0, o.a0)(i.Gk, { leave: ["none"], get children() {
            return (0, o.a0)(zt, { get class() {
              return _t.menu;
            }, axis: "vertical", overflow: true, get children() {
              return (0, o.a0)(o.jK, { get each() {
                return e2.options;
              }, children: (e3) => (0, o.a0)(Ft, (0, o.v6)(e3, { onSelect: u2 })) });
            } });
          } });
        } });
      } }), null), (0, o.gb)((() => (0, r.s7)(d2, C()(e2.class, _t.select)))), d2;
      var d2;
    };
    (0, r.z_)(["click"]);
    var Yt = n(6604), Ht = {};
    Ht.styleTagTransform = y(), Ht.setAttributes = v(), Ht.insert = h().bind(null, "head"), Ht.domAPI = u(), Ht.insertStyleElement = m();
    s()(Yt.A, Ht);
    const Gt = Yt.A && Yt.A.locals ? Yt.A.locals : void 0;
    var Kt = (0, r.vs)("<textarea readonly>");
    const $t = (e2) => {
      const { ref: t2, focus: n2 } = (0, i.Wc)(), a2 = () => {
        n2();
      };
      return (0, o.Rc)((() => {
        e2.autoFocus && n2();
      })), (l2 = Kt()).$$click = a2, (0, r.Yx)(t2, l2), (0, r.Yr)(l2, (() => e2.value)), (0, o.gb)((() => (0, r.s7)(l2, Gt["text-area"]))), l2;
      var l2;
    };
    (0, r.z_)(["click"]);
    var Wt = n(6490), Zt = {};
    Zt.styleTagTransform = y(), Zt.setAttributes = v(), Zt.insert = h().bind(null, "head"), Zt.domAPI = u(), Zt.insertStyleElement = m();
    s()(Wt.A, Zt);
    const Jt = Wt.A && Wt.A.locals ? Wt.A.locals : void 0;
    var Xt = (0, r.vs)("<input type=text autocomplete=off autocorrect=off autocapitalize=off>");
    const Qt = (e2) => {
      const { ref: t2, focus: n2 } = (0, i.Wc)(), a2 = () => {
        n2();
      }, l2 = ({ target: t3 }) => {
        const { value: n3 } = t3;
        e2.onInput && e2.onInput(n3);
      }, s2 = ({ target: t3 }) => {
        const { value: n3 } = t3;
        e2.onChange && e2.onChange(n3);
      }, c2 = ({ target: t3 }) => {
        const { value: n3 } = t3;
        e2.onSubmit && e2.onSubmit(n3);
      };
      return (0, o.Rc)((() => {
        e2.autoFocus && n2();
      })), (u2 = Xt()).addEventListener("submit", c2), u2.addEventListener("change", s2), u2.addEventListener("keydown", function(t3) {
        if ("Enter" === t3.key || 13 === t3.keyCode || "Select" === t3.key) {
          var n3 = t3.target.value;
          e2.onSubmit && e2.onSubmit(n3), e2.onChange && e2.onChange(n3);
        }
      }), u2.addEventListener("blur", function() {
        var n3 = u2.value;
        if (n3 && n3.length > 0) {
          e2.onSubmit && e2.onSubmit(n3);
          e2.onChange && e2.onChange(n3);
        }
      }), u2.addEventListener("input", function() {
        var n3 = u2.value;
        if (n3 && n3.length > 0) {
          e2.onChange && e2.onChange(n3);
        }
      }), (function() {
        var _lastVal = "", _poll = setInterval(function() {
          if (!u2 || !u2.parentNode) {
            clearInterval(_poll);
            return;
          }
          var v2 = u2.value || "";
          if (v2 !== _lastVal) {
            _lastVal = v2;
            if (v2.length > 0) {
              e2.onChange && e2.onChange(v2);
            } else {
              e2.onChange && e2.onChange("");
            }
          }
        }, 500);
      })(), u2.$$input = l2, u2.$$click = a2, (0, r.Yx)(t2, u2), (0, o.gb)(((t3) => {
        var n3 = C()(e2.class, Jt["text-input"]), o2 = e2.placeholder;
        return n3 !== t3.e && (0, r.s7)(u2, t3.e = n3), o2 !== t3.t && (0, r.Bq)(u2, "placeholder", t3.t = o2), t3;
      }), { e: void 0, t: void 0 }), (0, o.gb)((() => u2.value = e2.value)), u2;
      var u2;
    };
    (0, r.z_)(["click", "input"]);
  },
  3591: (e, t, n) => {
    "use strict";
    var r = n(2555), o = n(7781), i = n(2363), a = n(6066), l = n(9238), s = n(3497), c = n(2497), u = n(1517), d = n(330), h = (n(4999), n(6471), n(6399), n(1012), n(7100), n(2408)), f = n(8185), v = n(8688), p = (0, o.vs)("<div class=message>Are you sure you want to quit the app?"), m = (0, o.vs)("<div class=buttons>");
    const g = (e2) => {
      const { t: t2 } = (0, s.B)();
      return (0, r.a0)(d.aF, { get onClose() {
        return e2.onCancel;
      }, get children() {
        return [p(), (n2 = m(), (0, o.Yr)(n2, (0, r.a0)(d.$n, { get label() {
          return t2("QUIT");
        }, get onPress() {
          return e2.onConfirm;
        } }), null), (0, o.Yr)(n2, (0, r.a0)(d.$n, { get label() {
          return t2("BUTTON_CANCEL");
        }, autoFocus: true, get onPress() {
          return e2.onCancel;
        } }), null), n2)];
        var n2;
      } });
    };
    var y = n(1200);
    const b = (0, r.RZ)((() => n.e(5710).then(n.bind(n, 6523)))), w = (0, r.RZ)((() => n.e(6415).then(n.bind(n, 8826)))), k = (0, r.RZ)((() => n.e(8842).then(n.bind(n, 1768)))), x = (0, r.RZ)((() => n.e(7962).then(n.bind(n, 6971)))), S = (0, r.RZ)((() => n.e(7920).then(n.bind(n, 9493)))), A = (0, r.RZ)((() => n.e(6966).then(n.bind(n, 2111)))), T = (0, r.RZ)((() => n.e(1088).then(n.bind(n, 7488)))), M = (0, r.RZ)((() => n.e(187).then(n.bind(n, 4100)))), B = (0, r.RZ)((() => n.e(6472).then(n.bind(n, 5819)))), j = () => {
      const { setLocale: e2 } = (0, s.B)(), t2 = (0, c.Vj)(), { ctx: n2 } = (0, a.gK)(), { onError: o2 } = (0, i.z)(), l2 = (0, u.Y)(), p2 = /* @__PURE__ */ ((e3) => {
        const t3 = () => e3.isAuthenticated();
        return [{ name: "login", path: "/login", component: A, data: { hideNavbar: true } }, { name: "search", path: "/search", component: M, guard: t3 }, { name: "home", path: "/home", component: x, guard: t3 }, { name: "discover", path: "/discover", component: k, guard: t3 }, { name: "discover", path: "/discover/:type", component: k, guard: t3 }, { name: "discover", path: "/discover/:transportUrl/:type/:id", component: k, guard: t3 }, { name: "library", path: "/library/:type?", component: S, guard: t3 }, { name: "addons", path: "/addons", component: b, guard: t3 }, { name: "settings", path: "/settings", component: B, guard: t3 }, { name: "details", path: "/detail/:type/:metaId/:videoId?", component: w, guard: t3 }, { name: "player", path: "/player/:stream", component: T, guard: t3, data: { hideNavbar: true } }, { name: "player", path: "/player/:stream/:streamTransportUrl/:metaTransportUrl/:type/:id/:videoId?", component: T, guard: t3, data: { hideNavbar: true } }];
      })(n2), { interfaceLanguage: m2 } = (0, h.J)(n2.settings, { lazy: true }), [j2, E2, I2] = (0, v.zD)(false), C2 = () => {
        t2.quit();
      }, P2 = () => {
        t2.isTitan || t2.isNetTV ? E2() : C2();
      };
      return (0, r.EH)((async () => {
        n2.isAuthenticated() && (await n2.syncUser(), await n2.syncAddons(), await n2.syncLibrary(), await n2.syncNotifications());
      })), (0, r.EH)((() => {
        if (m2) {
          const t3 = m2(), n3 = f.C_.find((({ ietf: e3, alpha3: n4 }) => e3 === t3 || n4.includes(t3)));
          n3 && e2(n3.ietf);
        }
      })), (0, r.Rc)((() => {
        o2(((e3, t3) => {
          l2.show({ title: e3, message: t3, timeout: 8e3 });
        })), window.addEventListener("quit", P2);
      })), (0, r.Ki)((() => {
        window.removeEventListener("quit", P2);
      })), (0, r.a0)(y.Ix, { get defaultRoute() {
        return p2[0];
      }, routes: p2, get children() {
        return [(0, r.a0)(d.Fp, {}), (0, r.a0)(r.wv, { get when() {
          return j2();
        }, get children() {
          return (0, r.a0)(g, { onConfirm: C2, onCancel: I2 });
        } })];
      } });
    };
    var E = n(2434), I = n.n(E), C = n(5235), P = n.n(C), z = n(6049), L = n.n(z), O = n(8938), R = n.n(O), N = n(502), F = n.n(N), q = n(3611), D = n.n(q), _ = n(2708), V = {};
    V.styleTagTransform = D(), V.setAttributes = R(), V.insert = L().bind(null, "head"), V.domAPI = P(), V.insertStyleElement = F();
    I()(_.A, V);
    _.A && _.A.locals && _.A.locals;
    const U = { appVersion: "1.10.0", shellVersion: null }, Y = document.getElementById("root");
    (0, o.XX)((() => (0, r.a0)(l.i9, { get children() {
      return (0, r.a0)(s.D, { defaultLocale: "en-US", get children() {
        return (0, r.a0)(i.X, { appInfo: U, get loading() {
          return (0, r.a0)(d.aK, {});
        }, get error() {
          return (0, r.a0)(d.uV, {});
        }, get children() {
          return (0, r.a0)(a.tv, { get loading() {
            return (0, r.a0)(d.aK, {});
          }, get children() {
            return (0, r.a0)(u.a, { class: "toast", transition: "slide-fade", get children() {
              return (0, r.a0)(c.V9, { get children() {
                return (0, r.a0)(j, {});
              } });
            } });
          } });
        } });
      } });
    } })), Y);
  }
};
