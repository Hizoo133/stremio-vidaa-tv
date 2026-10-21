// Deconstructed Theater 1.10.0 modules (i18n.js)
module.exports = {
  3497: (e, t, n) => {
    "use strict";
    n.d(t, { D: () => a, B: () => l });
    var r = n(2555);
    n(4999), n(6471), n(7100);
    const o = (0, r.q6)({});
    function i(e2) {
      return n(9047)(`./${e2}.json`);
    }
    const a = (e2) => {
      const [t2, n2] = (0, r.n5)(e2.defaultLocale), [a2] = (0, r.Zg)(t2, i);
      return (0, r.a0)(o.Provider, { value: { t: (e3, t3) => {
        var n3, r2;
        const o2 = a2();
        return null !== (n3 = null !== (r2 = o2 && o2[e3]) && void 0 !== r2 ? r2 : t3) && void 0 !== n3 ? n3 : e3;
      }, setLocale: n2 }, get children() {
        return e2.children;
      } });
    }, l = () => (0, r.NT)(o);
  },
  9047: (e, t, n) => {
    var r = { "./ar-AR.json": [9865, 7669], "./bg-BG.json": [533, 3276], "./bn-BD.json": [5817, 3287], "./ca-CA.json": [9827, 478], "./cs-CZ.json": [8832, 7073], "./da-DK.json": [2099, 4264], "./de-DE.json": [4522, 467], "./el-GR.json": [9465, 1466], "./en-US.json": [6330, 8061], "./eo-EO.json": [1175, 5252], "./es-ES.json": [1047, 4036], "./et-EE.json": [2466, 6845], "./eu-ES.json": [8093, 9494], "./fa-IR.json": [7499, 239], "./fi-FI.json": [389, 4864], "./fr-FR.json": [2751, 7673], "./he-IL.json": [5687, 6834], "./hi-IN.json": [1021, 9643], "./hr-HR.json": [8863, 2060], "./hu-HU.json": [7165, 4869], "./id-ID.json": [1749, 1397], "./it-IT.json": [6693, 8588], "./ja-JP.json": [9098, 8599], "./ko-KR.json": [1988, 4206], "./mk-MK.json": [5703, 2385], "./my-BM.json": [8551, 9576], "./nb-NO.json": [5208, 5779], "./ne-NP.json": [905, 5194], "./nl-NL.json": [7987, 3373], "./nn-NO.json": [2820, 8980], "./pa-IN.json": [4701, 7546], "./package.json": [2924, 6547], "./pl-PL.json": [5787, 344], "./pt-BR.json": [6303, 4737], "./pt-PT.json": [2203, 6558], "./ro-RO.json": [7762, 9367], "./ru-RU.json": [9621, 940], "./sk-SK.json": [2827, 3749], "./sl-SL.json": [9433, 5714], "./sr-RS.json": [4095, 8523], "./sv-SE.json": [1560, 7811], "./te-IN.json": [4821, 7226], "./tl-TM.json": [656, 4417], "./tr-TR.json": [9327, 1608], "./uk-UA.json": [1641, 631], "./ur-PK.json": [4271, 7822], "./vi-VN.json": [7300, 3429], "./zh-CN.json": [6400, 620], "./zh-HK.json": [672, 8203], "./zh-TW.json": [5720, 5394] };
    function o(e2) {
      if (!n.o(r, e2)) return Promise.resolve().then((() => {
        var t3 = new Error("Cannot find module '" + e2 + "'");
        throw t3.code = "MODULE_NOT_FOUND", t3;
      }));
      var t2 = r[e2], o2 = t2[0];
      return n.e(t2[1]).then((() => n.t(o2, 19)));
    }
    o.keys = () => Object.keys(r), o.id = 9047, e.exports = o;
  }
};
