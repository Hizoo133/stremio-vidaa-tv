(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([
  [9114],
  {
    6620: (A) => {
      "use strict";
      A.exports = function(A2, k, e, b) {
        var r = self || window;
        try {
          try {
            var a;
            try {
              a = new r.Blob([A2]);
            } catch (k2) {
              (a = new (r.BlobBuilder || r.WebKitBlobBuilder || r.MozBlobBuilder || r.MSBlobBuilder)()).append(A2), a = a.getBlob();
            }
            var f = r.URL || r.webkitURL, i = f.createObjectURL(a), B = new r[k](i, e);
            return f.revokeObjectURL(i), B;
          } catch (b2) {
            return new r[k]("data:application/javascript,".concat(encodeURIComponent(A2)), e);
          }
        } catch (A3) {
          if (!b) throw Error("Inline worker is not supported");
          return new r[b](A3);
        }
      };
    },
    9861: (A, k, e) => {
      A.exports = function() {
        try {
          var w = new Worker("v5-worker.js");
          w.onerror = function(ev) {
            console.error("[core] Worker error:", ev.message || ev);
          };
          return w;
        } catch (err) {
          console.error("[core] Failed to create Worker:", err);
          throw err;
        }
      };
    }
  }
]);
