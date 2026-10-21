// Deconstructed Theater 1.10.0 modules (spatial-nav.js)
module.exports = {
  9238: (e, t, n) => {
    "use strict";
    n.d(t, { Gk: () => R, zo: () => q, i9: () => C, Wc: () => N, cq: () => P, fR: () => D });
    var r = n(2555), o = (n(2113), n(4999), n(5802), n(6471), n(8267), n(4965), n(9024), n(5381), n(774), n(8109), n(6705), n(6399), n(1273), n(1012), n(6019), n(7716), n(7621), n(7100), n(8688));
    const i = () => {
      const [e2, t2] = (0, r.n5)([]), n2 = (t3 = 0) => e2().length ? e2()[t3] : null;
      return { all: e2, add: (e3) => {
        var r2;
        (null === (r2 = n2()) || void 0 === r2 ? void 0 : r2.id) !== e3.id && t2(((t3) => [e3, ...t3]));
      }, removeById: (e3) => {
        t2(((t3) => t3.filter(((t4) => t4.id !== e3))));
      }, last: n2, lastByArea: (t3) => e2().find((({ area: e3 }) => e3 === t3)), clear: () => {
        t2([]);
      } };
    }, a = (0, r.q6)({});
    n(2093);
    const l = (e2, t2) => {
      var n2;
      return parseInt(null !== (n2 = e2.getAttribute(t2)) && void 0 !== n2 ? n2 : "0");
    }, s = (e2) => {
      const t2 = e2.parentNode;
      if (!t2 || t2.isEqualNode(window.document)) return null;
      return t2.getAttribute("nav-area") ? t2 : s(t2);
    }, c = (e2, t2) => {
      const n2 = e2.parentNode;
      if (!n2 || n2.isEqualNode(window.document)) return null;
      return n2.getAttribute("nav-scroll-anchor") === t2 ? n2 : c(n2, t2);
    }, u = (e2, t2 = []) => {
      const n2 = e2.parentNode;
      if (!n2 || n2.isEqualNode(window.document)) return t2;
      return n2.getAttribute("nav-axis") && t2.push(n2), u(n2, t2);
    }, d = (e2) => "INPUT" === e2.tagName && "text" === e2.getAttribute("type"), h = (e2) => "TEXTAREA" === e2.tagName, f = { height: 0, width: 0, top: 0, bottom: 0, left: 0, right: 0, center: { y: 0, x: 0 } };
    n(2517);
    const v = () => (Math.random() + 1).toString(36).substring(7), p = (e2, t2, n2, r2) => {
      const o2 = t2.x - e2.x, i2 = t2.y - e2.y, a2 = o2 * (r2.y - n2.y) - (r2.x - n2.x) * i2;
      if (0 === a2) return null;
      const l2 = ((r2.y - n2.y) * (r2.x - e2.x) + (n2.x - r2.x) * (r2.y - e2.y)) / a2, s2 = ((e2.y - t2.y) * (r2.x - e2.x) + o2 * (r2.y - e2.y)) / a2;
      return 0 <= l2 && l2 <= 1 && 0 <= s2 && s2 <= 1 ? { x: e2.x + l2 * o2, y: e2.y + l2 * i2 } : null;
    }, m = (e2, t2) => Math.sqrt(Math.pow(e2.x - t2.x, 2) + Math.pow(e2.y - t2.y, 2)), g = (e2, t2, n2) => {
      var r2;
      const o2 = t2.filter(((t3) => e2.id !== t3.id)).filter(((t3) => ((e3, t4, n3) => {
        switch (n3) {
          case "up":
            return t4.layout.top <= e3.layout.bottom && t4.layout.bottom <= e3.layout.top;
          case "down":
            return t4.layout.top >= e3.layout.bottom && t4.layout.bottom >= e3.layout.top;
          case "left":
            return t4.layout.left <= e3.layout.right && t4.layout.right <= e3.layout.left;
          case "right":
            return t4.layout.left >= e3.layout.right && t4.layout.right >= e3.layout.left;
        }
      })(e2, t3, n2))).map(((t3) => {
        const r3 = "left" === n2 || "right" === n2 ? "top" : "left", o3 = e2.layout[r3] - t3.layout[r3], i2 = ((e3, t4, n3) => {
          switch (n3) {
            case "up":
              return p({ x: e3.layout.center.x, y: e3.layout.top }, { x: e3.layout.center.x, y: 0 }, { x: t4.layout.left, y: t4.layout.bottom }, { x: t4.layout.right, y: t4.layout.bottom });
            case "down":
              return p({ x: e3.layout.center.x, y: e3.layout.bottom }, { x: e3.layout.center.x, y: window.innerHeight }, { x: t4.layout.left, y: t4.layout.top }, { x: t4.layout.right, y: t4.layout.top });
            case "left":
              return p({ x: e3.layout.left, y: e3.layout.center.y }, { x: 0, y: e3.layout.center.y }, { x: t4.layout.right, y: t4.layout.top }, { x: t4.layout.right, y: t4.layout.bottom });
            case "right":
              return p({ x: e3.layout.right, y: e3.layout.center.y }, { x: window.innerWidth, y: e3.layout.center.y }, { x: t4.layout.left, y: t4.layout.top }, { x: t4.layout.left, y: t4.layout.bottom });
            case "none":
              return null;
          }
        })(e2, t3, n2), a2 = ((e3, t4, n3, r4) => {
          let o4 = m(e3.layout.center, t4.layout.center);
          if (n3) switch (r4) {
            case "up":
              o4 = m({ x: e3.layout.center.x, y: e3.layout.top }, n3);
            case "down":
              o4 = m({ x: e3.layout.center.x, y: e3.layout.bottom }, n3);
            case "left":
              o4 = m({ x: e3.layout.left, y: e3.layout.center.y }, n3);
            case "right":
              o4 = m({ x: e3.layout.right, y: e3.layout.center.y }, n3);
          }
          return o4;
        })(e2, t3, i2, n2);
        return { item: t3, distance: a2, offset: o3 };
      })).sort(((e3, t3) => e3.distance - t3.distance)).sort(((e3, t3) => Math.abs(e3.offset) - Math.abs(t3.offset))).map((({ item: e3 }) => e3));
      return null !== (r2 = o2[0]) && void 0 !== r2 ? r2 : void 0;
    }, y = (e2, t2) => {
      var n2;
      const r2 = new Event(e2, { bubbles: true, cancelable: false });
      (null !== (n2 = null == t2 ? void 0 : t2.element) && void 0 !== n2 ? n2 : window).dispatchEvent(r2);
    }, b = { up: [38, 29460], down: [40, 29461], left: [37, 4], right: [39, 5], ok: [13, 29443, 65376], back: [8, 27, 461, 10009, 88], play: [415, 207], pause: [19, 119], playPause: [179, 10252], stop: [413], seekPrev: [412, 177, 168], seekNext: [418, 417, 176, 208] }, w = 0.7, k = 0, x = 1, S = 2, A = 3, T = 12, M = 13, B = 14, j = 15, E = 0, I = 1, C = (e2) => {
      let t2 = null, n2 = null;
      const v2 = i(), [p2, m2] = (0, r.n5)([]), [C2, P2] = (0, r.n5)([]), [z2, L2] = (0, r.n5)([]), [O2, R2] = (0, r.n5)(null), N2 = (e3) => {
        const t3 = (t4) => t4.map(((t5) => (e3.includes(t5.id) && true === t5.layoutUpdate && (t5.layout = ((e4) => {
          const t6 = e4.offsetHeight, n3 = e4.offsetWidth;
          let r2 = 0, o2 = 0;
          for (; e4.offsetParent; ) {
            const t7 = l(e4, "vertical"), n4 = l(e4, "horizontal");
            r2 += e4.offsetTop - t7, o2 += e4.offsetLeft - n4, e4 = e4.offsetParent;
          }
          return { height: t6, width: n3, top: r2, bottom: r2 + t6, left: o2, right: o2 + n3, center: { y: r2 + t6 / 2, x: o2 + n3 / 2 } };
        })(t5.element)), t5)));
        (0, r.vA)((() => {
          m2(t3), P2(t3);
        }));
      }, F2 = (e3, t3) => {
        const n3 = z2().filter((({ id: t4 }) => e3.scrollables.includes(t4))), o2 = n3.filter((({ axis: e4 }) => !t3 || ("up" === t3 || "down" === t3) && "vertical" === e4 || ("left" === t3 || "right" === t3) && "horizontal" === e4)).flatMap((({ id: e4 }) => p2().filter((({ scrollables: t4 }) => t4.includes(e4))))), i2 = o2.map((({ area: e4 }) => e4)).filter(((e4) => null !== e4)), a2 = o2.map((({ id: e4 }) => e4));
        n3.forEach(((t4) => V(t4, e3))), (0, r.vA)((() => {
          N2([...new Set(i2)]), N2([...new Set(a2)]);
        }));
      }, q2 = async (e3) => {
        var t3;
        if ((null === (t3 = O2()) || void 0 === t3 ? void 0 : t3.id) === e3) return;
        const n3 = p2().find(((t4) => t4.id === e3));
        if (n3) return (0, r.vA)((() => {
          R2(n3), F2(n3), v2.add(n3);
        }));
        C2().find(((t4) => t4.id === e3)) && (0, r.vA)((() => {
          const t4 = v2.lastByArea(e3);
          if (t4) return q2(t4.id);
          const n4 = p2().find((({ area: t5 }) => t5 === e3));
          return n4 ? q2(n4.id) : void 0;
        }));
      }, D2 = async (e3, t3) => {
        e3 && (0, r.vA)((() => {
          R2(e3), F2(e3, t3), v2.add(e3);
        }));
      }, _ = async (e3) => {
        const t3 = O2();
        if (!t3) return;
        const n3 = p2().filter((({ area: e4 }) => e4 === t3.area)), r2 = g(t3, n3, e3);
        if (r2) return D2(r2, e3);
        const o2 = C2().find((({ id: e4 }) => e4 === t3.area));
        if (null != o2 && o2.leave && (o2.leave.includes("none") || !o2.leave.includes(e3))) return;
        const i2 = C2().filter((({ id: e4 }) => e4 !== t3.area)), a2 = g(t3, i2, e3);
        if (a2) {
          const n4 = v2.lastByArea(a2.id);
          if (n4) return D2(n4, e3);
          const r3 = p2().filter((({ area: e4 }) => e4 === a2.id)), o3 = g(t3, r3, e3);
          if (o3) return D2(o3, e3);
        }
        const l2 = g(t3, p2().filter((({ area: e4 }) => !e4)), e3);
        l2 && D2(l2, e3);
      }, V = (e3, t3) => {
        const n3 = "vertical" === e3.axis ? "offsetTop" : "offsetLeft", r2 = e3.element.children[0];
        let o2 = 0;
        if (t3) {
          const i2 = c(t3.element, e3.axis);
          o2 = i2 ? i2[n3] : t3.element[n3] - r2[n3];
        }
        e3.element.setAttribute(e3.axis, o2.toString()), e3.element.style.transform = "vertical" === e3.axis ? `translateY(-${o2}px)` : `translateX(-${o2}px)`;
      }, U = (e3, t3) => {
        const n3 = O2();
        !n3 || d(n3.element) && !((e4) => {
          if (d(e4)) return 0 === e4.value.length;
          return true;
        })(n3.element) || (e3.preventDefault(), t3(n3));
      }, Y = (e3, t3) => {
        const n3 = O2();
        n3 && !h(n3.element) && (e3.preventDefault(), t3(n3));
      }, H = (e3) => {
        const t3 = (t4) => b[t4].includes(e3.keyCode);
        t3("up") && Y(e3, (() => {
          _("up");
        })), t3("down") && Y(e3, (() => {
          _("down");
        })), t3("left") && (y("left"), U(e3, (() => {
          _("left");
        }))), t3("right") && (y("right"), U(e3, (() => {
          _("right");
        }))), y("any"), t3("ok") && (y("ok"), U(e3, ((e4) => {
          y("press", e4);
        }))), t3("back") && U(e3, (() => {
          y("back");
        })), t3("play") && (e3.preventDefault(), y("play")), t3("pause") && (e3.preventDefault(), y("pause")), t3("playPause") && (e3.preventDefault(), y("playPause")), t3("stop") && (e3.preventDefault(), y("stop")), t3("seekPrev") && (e3.preventDefault(), y("seekPrev")), t3("seekNext") && (e3.preventDefault(), y("seekNext"));
      }, G = ({ deltaY: e3 }) => {
        _(e3 < 0 ? "up" : "down");
      }, K = () => {
        n2 && clearInterval(n2), n2 = setInterval((() => {
          [...navigator.getGamepads()].filter(((e3) => null !== e3 && e3.connected)).forEach((({ buttons: e3, axes: t3 }) => {
            var n3;
            const r2 = t3[k], o2 = t3[x], i2 = t3[S], a2 = t3[A], l2 = e3[T], s2 = e3[M], c2 = e3[B], u2 = e3[j], d2 = e3[E], h2 = e3[I];
            if (-1 === r2 && -1 === i2 && 1 === o2 && 1 === a2) return;
            const f2 = { up: o2 < -0.7 || a2 < -0.7 || (null == l2 ? void 0 : l2.pressed), down: o2 > w || a2 > w || (null == s2 ? void 0 : s2.pressed), left: r2 < -0.7 || i2 < -0.7 || (null == c2 ? void 0 : c2.pressed), right: r2 > w || i2 > w || (null == u2 ? void 0 : u2.pressed), ok: d2.pressed, back: h2.pressed }, [v3] = null !== (n3 = Object.entries(f2).find((([, e4]) => e4))) && void 0 !== n3 ? n3 : [];
            v3 && H(new KeyboardEvent("keydown", { keyCode: b[v3][0] }));
          }));
        }), 100);
      }, $ = () => {
        (0, r.vA)((() => {
          N2(p2().map((({ id: e3 }) => e3))), N2(C2().map((({ id: e3 }) => e3)));
        }));
      };
      return (0, o.k9)(O2, ((e3, t3) => {
        if (e3 && t3 && e3.area !== t3.area) {
          const n3 = C2().find((({ id: e4 }) => e4 === t3.area));
          n3 && y("leave", n3);
          const r2 = C2().find((({ id: t4 }) => t4 === e3.area));
          r2 && y("enter", r2);
        }
        if (t3 && (t3.element.removeAttribute("focused"), y("blur", t3), (d(t3.element) || h(t3.element)) && t3.element.blur()), e3 && (e3.element.setAttribute("focused", "true"), y("focus", e3), (d(e3.element) || h(e3.element)) && e3.element.focus()), t3 && !e3) {
          const e4 = v2.last();
          if (e4) return q2(e4.id);
          const t4 = p2()[0];
          if (t4) return q2(t4.id);
        }
      })), (0, r.Rc)((() => {
        const e3 = document.getElementById("root");
        t2 = new MutationObserver($), e3 && t2.observe(e3, { subtree: true, childList: false, attributes: true, attributeFilter: ["nav-id"], attributeOldValue: false, characterData: false, characterDataOldValue: false }), document.addEventListener("keydown", H), document.addEventListener("wheel", G), window.addEventListener("gamepadconnected", K), window.addEventListener("gamepaddisconnected", K);
      })), (0, r.Ki)((() => {
        t2 && t2.disconnect(), document.removeEventListener("keydown", H), document.removeEventListener("wheel", G), window.removeEventListener("gamepadconnected", K), window.removeEventListener("gamepaddisconnected", K), n2 && clearInterval(n2), n2 = null;
      })), (0, r.a0)(a.Provider, { value: { addFocusable: (e3) => {
        const t3 = (({ id: e4, element: t4, layoutUpdate: n3 = true }) => {
          var r2, o2;
          t4.setAttribute("nav-id", e4);
          const i2 = null !== (r2 = null === (o2 = s(t4)) || void 0 === o2 ? void 0 : o2.getAttribute("nav-id")) && void 0 !== r2 ? r2 : null, a2 = u(t4).map(((e5) => e5.getAttribute("nav-id"))).filter(((e5) => null !== e5));
          return { id: e4, element: t4, layout: f, layoutUpdate: n3, area: i2, scrollables: a2 };
        })(e3);
        m2(((e4) => [...e4, t3]));
      }, addArea: (e3) => {
        const t3 = (({ id: e4, element: t4, leave: n3, layoutUpdate: r2 = true }) => (t4.setAttribute("nav-id", e4), t4.setAttribute("nav-area", "true"), { id: e4, element: t4, layout: f, layoutUpdate: r2, leave: n3 }))(e3);
        P2(((e4) => [...e4, t3]));
      }, addScrollable: (e3) => {
        const t3 = (({ id: e4, element: t4, axis: n3 = "horizontal" }) => (t4.setAttribute("nav-id", e4), t4.setAttribute("nav-axis", n3), { id: e4, element: t4, axis: n3 }))(e3);
        L2(((e4) => [...e4, t3]));
      }, remove: (e3) => {
        v2.removeById(e3);
        const t3 = (t4) => t4.filter(((t5) => t5.id !== e3));
        (0, r.vA)((() => {
          R2(((t4) => (null == t4 ? void 0 : t4.id) === e3 ? null : t4)), m2(t3), P2(t3), L2(t3);
        }));
      }, focused: O2, focus: q2, move: _, resetScrollable: (e3) => {
        const t3 = z2().find(((t4) => t4.id === e3));
        t3 && V(t3);
      } }, get children() {
        return e2.children;
      } });
    }, P = () => {
      const e2 = (0, r.NT)(a);
      let t2 = [];
      const n2 = (e3, n3) => {
        t2.push([e3, n3]), window.addEventListener(e3, n3);
      }, o2 = (e3, n3) => {
        t2 = t2.filter(((t3) => t3[0] !== e3 && t3[1] !== n3)), window.removeEventListener(e3, n3);
      };
      return (0, r.Ki)((() => {
        t2.forEach((([e3, t3]) => o2(e3, t3)));
      })), { on: n2, off: o2, move: (t3) => {
        e2.move(t3);
      }, onBack: (e3) => {
        n2("back", e3);
      } };
    };
    var z = n(7781);
    const L = (e2) => {
      const t2 = (0, r.NT)(a), n2 = v();
      let o2 = null;
      return (0, r.Rc)((() => {
        o2 && t2.addArea({ id: n2, element: o2, ...e2 });
      })), (0, r.Ki)((() => {
        t2.remove(n2);
      })), { ref: (e3) => o2 = e3, focus: () => {
        t2.focus(n2);
      } };
    };
    var O = (0, z.vs)("<div>");
    const R = (e2) => {
      const { ref: t2, focus: n2 } = L({ leave: e2.leave, layoutUpdate: e2.layoutUpdate });
      return (0, o.k9)((() => e2.autoFocus), ((e3) => {
        e3 && n2();
      })), (0, r.Rc)((() => {
        e2.autoFocus && n2();
      })), i2 = O(), (0, z.q2)(i2, "leave", e2.onLeave), (0, z.q2)(i2, "enter", e2.onEnter), (0, z.Yx)(t2, i2), (0, z.Yr)(i2, (() => e2.children)), (0, r.gb)(((t3) => {
        var n3 = e2.class, r2 = e2.classList, o2 = e2.style;
        return n3 !== t3.e && (0, z.s7)(i2, t3.e = n3), t3.t = (0, z.pP)(i2, r2, t3.t), t3.a = (0, z.iF)(i2, o2, t3.a), t3;
      }), { e: void 0, t: void 0, a: void 0 }), i2;
      var i2;
    }, N = (e2) => {
      const t2 = (0, r.NT)(a), n2 = v();
      let o2 = null;
      const i2 = (0, r.To)((() => {
        const e3 = t2.focused();
        return (null == e3 ? void 0 : e3.id) === n2;
      }));
      return (0, r.Rc)((() => {
        o2 && t2.addFocusable({ id: n2, element: o2, ...e2 });
      })), (0, r.Ki)((() => {
        t2.remove(n2);
      })), { ref: (e3) => o2 = e3, focus: () => {
        t2.focus(n2);
      }, focused: i2 };
    };
    var F = (0, z.vs)("<div>");
    const q = (e2) => {
      const { ref: t2, focus: n2 } = N({ layoutUpdate: e2.layoutUpdate }), i2 = () => {
        n2(), e2.onClick && e2.onClick();
      };
      return (0, o.k9)((() => e2.autoFocus), ((e3) => {
        e3 && n2();
      })), (0, r.Rc)((() => {
        e2.autoFocus && n2();
      })), a2 = F(), (0, z.q2)(a2, "blur", e2.onBlur), (0, z.q2)(a2, "focus", e2.onFocus), (0, z.q2)(a2, "press", e2.onPress), a2.$$click = i2, (0, z.Yx)(t2, a2), (0, z.Yr)(a2, (() => e2.children)), (0, r.gb)(((t3) => {
        var n3 = e2.class, r2 = e2.classList, o2 = e2.style;
        return n3 !== t3.e && (0, z.s7)(a2, t3.e = n3), t3.t = (0, z.pP)(a2, r2, t3.t), t3.a = (0, z.iF)(a2, o2, t3.a), t3;
      }), { e: void 0, t: void 0, a: void 0 }), a2;
      var a2;
    };
    (0, z.z_)(["click"]);
    const D = (e2) => {
      const t2 = (0, r.NT)(a), n2 = v();
      let o2 = null;
      return (0, r.Rc)((() => {
        o2 && t2.addScrollable({ id: n2, element: o2, axis: e2 });
      })), (0, r.Ki)((() => {
        t2.remove(n2);
      })), { ref: (e3) => o2 = e3, id: n2, reset: () => {
        t2.resetScrollable(n2);
      } };
    };
  }
};
