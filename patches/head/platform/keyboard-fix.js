    // VIDAA keyboard fix — intercept programmatic input.value changes
    // The VIDAA system keyboard sets input.value directly without firing DOM events.
    // This script overrides the value setter to fire synthetic input events so that
    // input value changes are tracked without prematurely triggering search or closing the OSK.
    (function() {
        window.__STREMIO_PATCH_VERSION__ = 5;

        // Layer 1: Override HTMLInputElement.prototype.value setter
        try {
            var desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
            if (desc && desc.set) {
                var origSet = desc.set;
                var origGet = desc.get;
                var guard = false;
                Object.defineProperty(HTMLInputElement.prototype, 'value', {
                    get: origGet,
                    set: function(v) {
                        var old = origGet.call(this);
                        origSet.call(this, v);
                        if (v !== old && !guard) {
                            guard = true;
                            try {
                                this.dispatchEvent(new Event('input', { bubbles: true }));
                            } catch(e) {}
                            guard = false;
                        }
                    },
                    configurable: true
                });
            }
        } catch(e) {}
    })();
