// Deconstructed Theater 1.10.0 modules (platform.js)
module.exports = {
  2497: (e, t, n) => {
    "use strict";
    n.d(t, { V9: () => S, aJ: () => i, Vj: () => A });
    var r = n(2555);
    n(4999), n(2140), n(4189), n(6399), n(1012), n(3384), n(7100), n(3785), n(7763), n(3391), n(1430), n(589), n(4512);
    const o = (0, r.q6)({}), i = () => ({ "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.270 Safari/537.36 WebAppManager": 25, "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.211 Safari/537.36 WebAppManager": 24, "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.128 Safari/537.36 WebAppManager": 23, "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 WebAppManager": 22, "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36 WebAppManager": 6, "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36 WebAppManager": 5, "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.34 Safari/537.36 WebAppManager": 4, "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) QtWebEngine/5.2.1 Chrome/38.0.2125.122 Safari/537.36 WebAppManager": 3 })[navigator.userAgent] || 0;
    n(7402);
    const a = () => {
      const e2 = navigator.userAgent.match(/Tizen (\d+\.\d+)/i);
      return e2 && e2[1] ? parseFloat(e2[1]) : 0;
    }, l = () => {
      const e2 = navigator.userAgent.match(/TitanOS\/(\d+\.\d+)/i);
      return e2 && e2[1] ? parseFloat(e2[1]) : 0;
    };
    n(7311);
    const s = () => {
      const e2 = navigator.userAgent.match(/NETTV\/(\d+\.\d+.\d+.\d+)/i);
      return e2 && e2[1] ? parseFloat(e2[1].replace(/(?<=\..*)\./g, "")) : 0;
    }, c = () => {
      try {
        const e2 = Hisense_GetOSVersion();
        return parseFloat(e2.replace(/[^\d.]/g, ""));
      } catch (e2) {
        return 0;
      }
    };
    var u = (function(e2) {
      return e2.WEB_OS = "webOS", e2.TIZEN = "Tizen", e2.TITAN = "Titan", e2.NETTV = "NetTV", e2.WEB = "Web", e2.VIDAA = "Vidaa", e2;
    })(u || {});
    let d = u.WEB, h = null;
    const f = i();
    f > 0 && (d = u.WEB_OS, h = f);
    const v = a();
    if (v > 0 && (d = u.TIZEN, h = v), d === u.WEB) {
      const e2 = s(), t2 = l();
      e2 > 0 && 0 === t2 ? (d = u.NETTV, h = e2) : t2 > 0 && (d = u.TITAN, h = t2);
    }
    if (d === u.WEB) {
      const e2 = c();
      e2 > 0 && (d = u.VIDAA, h = e2);
    }
    const p = d === u.TIZEN, m = d === u.WEB_OS, g = d === u.TITAN, y = d === u.NETTV, b = d === u.WEB, w = d === u.VIDAA, k = { "netflix.com": "Netflix", "disneyplus.com": "Disney Plus", "amazon.com": "Amazon Prime", "apple.com": "Apple TV", "hbomax.com": "HBO Max", "hulu.com": "Hulu", "peacock.tv": "Peacock" }, x = (e2) => {
      void 0 !== globalThis.tizen && alert(e2), void 0 !== globalThis.webOS && globalThis.webOS.service.request("luna://com.webos.notification", { method: "createToast", parameters: { sourceId: "io.strem.tv", message: e2 }, onSuccess: () => {
      }, onFailure: (e3) => {
        console.error("Platform", "showAlert", e3);
      } });
    }, S = (e2) => ((0, r.Rc)((() => {
      globalThis.tizen && globalThis.tizen.tvinputdevice.registerKeyBatch(["MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaRewind", "MediaFastForward", "MediaTrackNext", "MediaTrackPrevious", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    })), (0, r.a0)(o.Provider, { value: { name: d, version: h, quit: () => {
      g && globalThis.tizen ? globalThis.tizen.application.getCurrentApplication().exit() : m && globalThis.webOS ? globalThis.webOS.platformBack() : g && globalThis.SmartTvA_API ? globalThis.SmartTvA_API.exit() : window.close();
    }, openExternal: ({ url: e3, payload: t2 }) => {
      if (p && void 0 !== globalThis.tizen) if (t2) {
        const e4 = JSON.parse(t2), n2 = new globalThis.tizen.ApplicationControlData("PAYLOAD", [JSON.stringify({ values: e4.action_data })]), r2 = new globalThis.tizen.ApplicationControl("http://tizen.org/appcontrol/operation/view", null, null, null, [n2]);
        globalThis.tizen.application.launchAppControl(r2, e4.id, null, ((e5) => {
          console.error("Platform", "openExternal", e5), x(e5);
        }));
      } else {
        const t3 = new globalThis.tizen.ApplicationControl("http://tizen.org/appcontrol/operation/view", e3);
        globalThis.tizen.application.launchAppControl(t3, null, null, ((e4) => {
          console.error("Platform", "openExternal", e4), x(e4);
        }));
      }
      else if (m && void 0 !== globalThis.webOS) {
        const n2 = t2 ? JSON.parse(t2) : { id: "com.webos.app.browser", params: { target: e3 } };
        globalThis.webOS.service.request("luna://com.webos.applicationManager", { method: "launch", parameters: n2, onSuccess: null, onFailure: (t3) => {
          console.error("Platform", "openExternal", t3);
          const n3 = ((e4) => {
            try {
              var t4;
              const { host: n4 } = new URL(e4), [, r2] = null !== (t4 = Object.entries(k).find((([e5]) => n4.endsWith(e5)))) && void 0 !== t4 ? t4 : [];
              return r2;
            } catch (e5) {
              return console.error("Platform", "urlToAppName", e5), null;
            }
          })(e3);
          x(`${null != n3 ? n3 : "The app"} is not installed`);
        } });
      } else window.open(e3, "_blank");
    }, isTizen: p, isWebOS: m, isTitan: g, isNetTV: y, isWeb: b, isVidaa: w }, get children() {
      return e2.children;
    } })), A = () => (0, r.NT)(o);
  }
};
