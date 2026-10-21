// Deconstructed Theater 1.10.0 modules (index.js)
module.exports = {
  2152: (e) => {
    e.exports = function(e2, t) {
      var _ctrl = "undefined" != typeof AbortController ? new AbortController() : null, _timer = setTimeout((function() {
        _ctrl && _ctrl.abort();
      }), 1e4);
      fetch((window.__STREMIO_SERVER_URL__ || "http://127.0.0.1:11470") + "/tracks/" + encodeURIComponent(e2), _ctrl ? { signal: _ctrl.signal } : {}).then((function(e3) {
        return e3.json();
      })).then((function(e3) {
        clearTimeout(_timer);
        var r = e3.filter((function(e4) {
          return "audio" === (e4 || {}).type;
        })), n = e3.filter((function(e4) {
          return "text" === (e4 || {}).type;
        }));
        t({ audio: r, subs: n });
      })).catch((function(e3) {
        clearTimeout(_timer);
        console.error("[tracks] fetch failed:", e3), t(false);
      }));
    };
  }
};
