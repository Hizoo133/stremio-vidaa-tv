// Deconstructed Theater 1.10.0 modules (mediaCapabilities.js)
module.exports = {
  2258: (e) => {
    !(function t(r) {
      e.exports = (function() {
        "use strict";
        function e2(e3, t2) {
          var r2 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(e3);
            t2 && (n2 = n2.filter((function(t3) {
              return Object.getOwnPropertyDescriptor(e3, t3).enumerable;
            }))), r2.push.apply(r2, n2);
          }
          return r2;
        }
        function n(t2) {
          for (var r2 = 1; r2 < arguments.length; r2++) {
            var n2 = null != arguments[r2] ? arguments[r2] : {};
            r2 % 2 ? e2(Object(n2), true).forEach((function(e3) {
              l(t2, e3, n2[e3]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : e2(Object(n2)).forEach((function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
            }));
          }
          return t2;
        }
        function i(e3, t2) {
          if ("object" != typeof e3 || !e3) return e3;
          var r2 = e3[Symbol.toPrimitive];
          if (void 0 !== r2) {
            var n2 = r2.call(e3, t2 || "default");
            if ("object" != typeof n2) return n2;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t2 ? String : Number)(e3);
        }
        function a(e3) {
          var t2 = i(e3, "string");
          return "symbol" == typeof t2 ? t2 : String(t2);
        }
        function s(e3, t2) {
          for (var r2 = 0; r2 < t2.length; r2++) {
            var n2 = t2[r2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, a(n2.key), n2);
          }
        }
        function o(e3, t2, r2) {
          return t2 && s(e3.prototype, t2), r2 && s(e3, r2), Object.defineProperty(e3, "prototype", { writable: false }), e3;
        }
        function l(e3, t2, r2) {
          return (t2 = a(t2)) in e3 ? Object.defineProperty(e3, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e3[t2] = r2, e3;
        }
        function u() {
          return u = Object.assign ? Object.assign.bind() : function(e3) {
            for (var t2 = 1; t2 < arguments.length; t2++) {
              var r2 = arguments[t2];
              for (var n2 in r2) Object.prototype.hasOwnProperty.call(r2, n2) && (e3[n2] = r2[n2]);
            }
            return e3;
          }, u.apply(this, arguments);
        }
        function c(e3, t2) {
          e3.prototype = Object.create(t2.prototype), e3.prototype.constructor = e3, h(e3, t2);
        }
        function d(e3) {
          return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, d(e3);
        }
        function h(e3, t2) {
          return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t3) {
            return e4.__proto__ = t3, e4;
          }, h(e3, t2);
        }
        function f() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
            }))), true;
          } catch (e3) {
            return false;
          }
        }
        function g(e3, t2, r2) {
          return g = f() ? Reflect.construct.bind() : function(e4, t3, r3) {
            var n2 = [null];
            n2.push.apply(n2, t3);
            var i2 = new (Function.bind.apply(e4, n2))();
            return r3 && h(i2, r3.prototype), i2;
          }, g.apply(null, arguments);
        }
        function m(e3) {
          try {
            return -1 !== Function.toString.call(e3).indexOf("[native code]");
          } catch (t2) {
            return "function" == typeof e3;
          }
        }
        function p(e3) {
          var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return p = function(e4) {
            if (null === e4 || !m(e4)) return e4;
            if ("function" != typeof e4) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t2) {
              if (t2.has(e4)) return t2.get(e4);
              t2.set(e4, r2);
            }
            function r2() {
              return g(e4, arguments, d(this).constructor);
            }
            return r2.prototype = Object.create(e4.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }), h(r2, e4);
          }, p(e3);
        }
        function v(e3) {
          if (void 0 === e3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function y(e3, t2) {
          if (e3) {
            if ("string" == typeof e3) return T(e3, t2);
            var r2 = Object.prototype.toString.call(e3).slice(8, -1);
            return "Object" === r2 && e3.constructor && (r2 = e3.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(e3) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? T(e3, t2) : void 0;
          }
        }
        function T(e3, t2) {
          (null == t2 || t2 > e3.length) && (t2 = e3.length);
          for (var r2 = 0, n2 = new Array(t2); r2 < t2; r2++) n2[r2] = e3[r2];
          return n2;
        }
        function b(e3, t2) {
          var r2 = "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
          if (r2) return (r2 = r2.call(e3)).next.bind(r2);
          if (Array.isArray(e3) || (r2 = y(e3)) || t2 && e3 && "number" == typeof e3.length) {
            r2 && (e3 = r2);
            var n2 = 0;
            return function() {
              return n2 >= e3.length ? { done: true } : { done: false, value: e3[n2++] };
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function E(e3) {
          return e3 && e3.__esModule && Object.prototype.hasOwnProperty.call(e3, "default") ? e3.default : e3;
        }
        var S = { exports: {} };
        !(function(e3) {
          var t2, r2, n2, i2, a2;
          t2 = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, r2 = /^(?=([^\/?#]*))\1([^]*)$/, n2 = /(?:\/|^)\.(?=\/)/g, i2 = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, a2 = { buildAbsoluteURL: function(e4, t3, n3) {
            if (n3 = n3 || {}, e4 = e4.trim(), !(t3 = t3.trim())) {
              if (!n3.alwaysNormalize) return e4;
              var i3 = a2.parseURL(e4);
              if (!i3) throw new Error("Error trying to parse base URL.");
              return i3.path = a2.normalizePath(i3.path), a2.buildURLFromParts(i3);
            }
            var s2 = a2.parseURL(t3);
            if (!s2) throw new Error("Error trying to parse relative URL.");
            if (s2.scheme) return n3.alwaysNormalize ? (s2.path = a2.normalizePath(s2.path), a2.buildURLFromParts(s2)) : t3;
            var o2 = a2.parseURL(e4);
            if (!o2) throw new Error("Error trying to parse base URL.");
            if (!o2.netLoc && o2.path && "/" !== o2.path[0]) {
              var l2 = r2.exec(o2.path);
              o2.netLoc = l2[1], o2.path = l2[2];
            }
            o2.netLoc && !o2.path && (o2.path = "/");
            var u2 = { scheme: o2.scheme, netLoc: s2.netLoc, path: null, params: s2.params, query: s2.query, fragment: s2.fragment };
            if (!s2.netLoc && (u2.netLoc = o2.netLoc, "/" !== s2.path[0])) if (s2.path) {
              var c2 = o2.path, d2 = c2.substring(0, c2.lastIndexOf("/") + 1) + s2.path;
              u2.path = a2.normalizePath(d2);
            } else u2.path = o2.path, s2.params || (u2.params = o2.params, s2.query || (u2.query = o2.query));
            return null === u2.path && (u2.path = n3.alwaysNormalize ? a2.normalizePath(s2.path) : s2.path), a2.buildURLFromParts(u2);
          }, parseURL: function(e4) {
            var r3 = t2.exec(e4);
            return r3 ? { scheme: r3[1] || "", netLoc: r3[2] || "", path: r3[3] || "", params: r3[4] || "", query: r3[5] || "", fragment: r3[6] || "" } : null;
          }, normalizePath: function(e4) {
            for (e4 = e4.split("").reverse().join("").replace(n2, ""); e4.length !== (e4 = e4.replace(i2, "")).length; ) ;
            return e4.split("").reverse().join("");
          }, buildURLFromParts: function(e4) {
            return e4.scheme + e4.netLoc + e4.path + e4.params + e4.query + e4.fragment;
          } }, e3.exports = a2;
        })(S);
        var A = S.exports, k = Number.isFinite || function(e3) {
          return "number" == typeof e3 && isFinite(e3);
        }, L = Number.isSafeInteger || function(e3) {
          return "number" == typeof e3 && Math.abs(e3) <= R;
        }, R = Number.MAX_SAFE_INTEGER || 9007199254740991, I = (function(e3) {
          return e3.MEDIA_ATTACHING = "hlsMediaAttaching", e3.MEDIA_ATTACHED = "hlsMediaAttached", e3.MEDIA_DETACHING = "hlsMediaDetaching", e3.MEDIA_DETACHED = "hlsMediaDetached", e3.BUFFER_RESET = "hlsBufferReset", e3.BUFFER_CODECS = "hlsBufferCodecs", e3.BUFFER_CREATED = "hlsBufferCreated", e3.BUFFER_APPENDING = "hlsBufferAppending", e3.BUFFER_APPENDED = "hlsBufferAppended", e3.BUFFER_EOS = "hlsBufferEos", e3.BUFFER_FLUSHING = "hlsBufferFlushing", e3.BUFFER_FLUSHED = "hlsBufferFlushed", e3.MANIFEST_LOADING = "hlsManifestLoading", e3.MANIFEST_LOADED = "hlsManifestLoaded", e3.MANIFEST_PARSED = "hlsManifestParsed", e3.LEVEL_SWITCHING = "hlsLevelSwitching", e3.LEVEL_SWITCHED = "hlsLevelSwitched", e3.LEVEL_LOADING = "hlsLevelLoading", e3.LEVEL_LOADED = "hlsLevelLoaded", e3.LEVEL_UPDATED = "hlsLevelUpdated", e3.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", e3.LEVELS_UPDATED = "hlsLevelsUpdated", e3.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", e3.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", e3.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", e3.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", e3.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", e3.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", e3.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", e3.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", e3.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", e3.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", e3.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", e3.CUES_PARSED = "hlsCuesParsed", e3.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", e3.INIT_PTS_FOUND = "hlsInitPtsFound", e3.FRAG_LOADING = "hlsFragLoading", e3.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", e3.FRAG_LOADED = "hlsFragLoaded", e3.FRAG_DECRYPTED = "hlsFragDecrypted", e3.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", e3.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", e3.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", e3.FRAG_PARSED = "hlsFragParsed", e3.FRAG_BUFFERED = "hlsFragBuffered", e3.FRAG_CHANGED = "hlsFragChanged", e3.FPS_DROP = "hlsFpsDrop", e3.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", e3.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", e3.ERROR = "hlsError", e3.DESTROYING = "hlsDestroying", e3.KEY_LOADING = "hlsKeyLoading", e3.KEY_LOADED = "hlsKeyLoaded", e3.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", e3.BACK_BUFFER_REACHED = "hlsBackBufferReached", e3.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", e3;
        })({}), w = (function(e3) {
          return e3.NETWORK_ERROR = "networkError", e3.MEDIA_ERROR = "mediaError", e3.KEY_SYSTEM_ERROR = "keySystemError", e3.MUX_ERROR = "muxError", e3.OTHER_ERROR = "otherError", e3;
        })({}), D = (function(e3) {
          return e3.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", e3.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", e3.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", e3.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", e3.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", e3.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", e3.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", e3.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", e3.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", e3.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", e3.MANIFEST_LOAD_ERROR = "manifestLoadError", e3.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", e3.MANIFEST_PARSING_ERROR = "manifestParsingError", e3.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", e3.LEVEL_EMPTY_ERROR = "levelEmptyError", e3.LEVEL_LOAD_ERROR = "levelLoadError", e3.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", e3.LEVEL_PARSING_ERROR = "levelParsingError", e3.LEVEL_SWITCH_ERROR = "levelSwitchError", e3.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", e3.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", e3.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", e3.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", e3.FRAG_LOAD_ERROR = "fragLoadError", e3.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", e3.FRAG_DECRYPT_ERROR = "fragDecryptError", e3.FRAG_PARSING_ERROR = "fragParsingError", e3.FRAG_GAP = "fragGap", e3.REMUX_ALLOC_ERROR = "remuxAllocError", e3.KEY_LOAD_ERROR = "keyLoadError", e3.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", e3.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", e3.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", e3.BUFFER_APPEND_ERROR = "bufferAppendError", e3.BUFFER_APPENDING_ERROR = "bufferAppendingError", e3.BUFFER_STALLED_ERROR = "bufferStalledError", e3.BUFFER_FULL_ERROR = "bufferFullError", e3.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", e3.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", e3.INTERNAL_EXCEPTION = "internalException", e3.INTERNAL_ABORTED = "aborted", e3.UNKNOWN = "unknown", e3;
        })({}), C = function() {
        }, x = { trace: C, debug: C, log: C, warn: C, info: C, error: C }, _ = x;
        function O(e3) {
          var t2 = self.console[e3];
          return t2 ? t2.bind(self.console, "[" + e3 + "] >") : C;
        }
        function P(e3) {
          for (var t2 = arguments.length, r2 = new Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
          r2.forEach((function(t3) {
            _[t3] = e3[t3] ? e3[t3].bind(e3) : O(t3);
          }));
        }
        function M(e3, t2) {
          if ("object" == typeof console && true === e3 || "object" == typeof e3) {
            P(e3, "debug", "log", "info", "warn", "error");
            try {
              _.log('Debug logs enabled for "' + t2 + '" in hls.js version 1.5.5-0.canary.9893');
            } catch (e4) {
              _ = x;
            }
          } else _ = x;
        }
        var F = _, N = /^(\d+)x(\d+)$/, U = /(.+?)=(".*?"|.*?)(?:,|$)/g, B = (function() {
          function e3(t3) {
            "string" == typeof t3 && (t3 = e3.parseAttrList(t3)), u(this, t3);
          }
          var t2 = e3.prototype;
          return t2.decimalInteger = function(e4) {
            var t3 = parseInt(this[e4], 10);
            return t3 > Number.MAX_SAFE_INTEGER ? 1 / 0 : t3;
          }, t2.hexadecimalInteger = function(e4) {
            if (this[e4]) {
              var t3 = (this[e4] || "0x").slice(2);
              t3 = (1 & t3.length ? "0" : "") + t3;
              for (var r2 = new Uint8Array(t3.length / 2), n2 = 0; n2 < t3.length / 2; n2++) r2[n2] = parseInt(t3.slice(2 * n2, 2 * n2 + 2), 16);
              return r2;
            }
            return null;
          }, t2.hexadecimalIntegerAsNumber = function(e4) {
            var t3 = parseInt(this[e4], 16);
            return t3 > Number.MAX_SAFE_INTEGER ? 1 / 0 : t3;
          }, t2.decimalFloatingPoint = function(e4) {
            return parseFloat(this[e4]);
          }, t2.optionalFloat = function(e4, t3) {
            var r2 = this[e4];
            return r2 ? parseFloat(r2) : t3;
          }, t2.enumeratedString = function(e4) {
            return this[e4];
          }, t2.bool = function(e4) {
            return "YES" === this[e4];
          }, t2.decimalResolution = function(e4) {
            var t3 = N.exec(this[e4]);
            if (null !== t3) return { width: parseInt(t3[1], 10), height: parseInt(t3[2], 10) };
          }, e3.parseAttrList = function(e4) {
            var t3, r2 = {}, n2 = '"';
            for (U.lastIndex = 0; null !== (t3 = U.exec(e4)); ) {
              var i2 = t3[2];
              0 === i2.indexOf(n2) && i2.lastIndexOf(n2) === i2.length - 1 && (i2 = i2.slice(1, -1)), r2[t3[1].trim()] = i2;
            }
            return r2;
          }, o(e3, [{ key: "clientAttrs", get: function() {
            return Object.keys(this).filter((function(e4) {
              return "X-" === e4.substring(0, 2);
            }));
          } }]), e3;
        })();
        function G(e3) {
          return "ID" !== e3 && "CLASS" !== e3 && "START-DATE" !== e3 && "DURATION" !== e3 && "END-DATE" !== e3 && "END-ON-NEXT" !== e3;
        }
        function V(e3) {
          return "SCTE35-OUT" === e3 || "SCTE35-IN" === e3;
        }
        var H = (function() {
          function e3(e4, t2) {
            if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, t2) {
              var r2 = t2.attr;
              for (var n2 in r2) if (Object.prototype.hasOwnProperty.call(e4, n2) && e4[n2] !== r2[n2]) {
                F.warn('DATERANGE tag attribute: "' + n2 + '" does not match for tags with ID: "' + e4.ID + '"'), this._badValueForSameId = n2;
                break;
              }
              e4 = u(new B({}), r2, e4);
            }
            if (this.attr = e4, this._startDate = new Date(e4["START-DATE"]), "END-DATE" in this.attr) {
              var i2 = new Date(this.attr["END-DATE"]);
              k(i2.getTime()) && (this._endDate = i2);
            }
          }
          return o(e3, [{ key: "id", get: function() {
            return this.attr.ID;
          } }, { key: "class", get: function() {
            return this.attr.CLASS;
          } }, { key: "startDate", get: function() {
            return this._startDate;
          } }, { key: "endDate", get: function() {
            if (this._endDate) return this._endDate;
            var e4 = this.duration;
            return null !== e4 ? new Date(this._startDate.getTime() + 1e3 * e4) : null;
          } }, { key: "duration", get: function() {
            if ("DURATION" in this.attr) {
              var e4 = this.attr.decimalFloatingPoint("DURATION");
              if (k(e4)) return e4;
            } else if (this._endDate) return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
            return null;
          } }, { key: "plannedDuration", get: function() {
            return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
          } }, { key: "endOnNext", get: function() {
            return this.attr.bool("END-ON-NEXT");
          } }, { key: "isValid", get: function() {
            return !!this.id && !this._badValueForSameId && k(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class);
          } }]), e3;
        })(), K = function() {
          this.aborted = false, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = { start: 0, first: 0, end: 0 }, this.parsing = { start: 0, end: 0 }, this.buffering = { start: 0, first: 0, end: 0 };
        }, j = { AUDIO: "audio", VIDEO: "video", AUDIOVIDEO: "audiovideo" }, Y = (function() {
          function e3(e4) {
            var t2;
            this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = ((t2 = {})[j.AUDIO] = null, t2[j.VIDEO] = null, t2[j.AUDIOVIDEO] = null, t2), this.baseurl = e4;
          }
          return e3.prototype.setByteRange = function(e4, t2) {
            var r2, n2 = e4.split("@", 2);
            r2 = 1 === n2.length ? (null == t2 ? void 0 : t2.byteRangeEndOffset) || 0 : parseInt(n2[1]), this._byteRange = [r2, parseInt(n2[0]) + r2];
          }, o(e3, [{ key: "byteRange", get: function() {
            return this._byteRange ? this._byteRange : [];
          } }, { key: "byteRangeStartOffset", get: function() {
            return this.byteRange[0];
          } }, { key: "byteRangeEndOffset", get: function() {
            return this.byteRange[1];
          } }, { key: "url", get: function() {
            return !this._url && this.baseurl && this.relurl && (this._url = A.buildAbsoluteURL(this.baseurl, this.relurl, { alwaysNormalize: true })), this._url || "";
          }, set: function(e4) {
            this._url = e4;
          } }]), e3;
        })(), W = (function(e3) {
          function t2(t3, r3) {
            var n2;
            return (n2 = e3.call(this, r3) || this)._decryptdata = null, n2.rawProgramDateTime = null, n2.programDateTime = null, n2.tagList = [], n2.duration = 0, n2.sn = 0, n2.levelkeys = void 0, n2.type = void 0, n2.loader = null, n2.keyLoader = null, n2.level = -1, n2.cc = 0, n2.startPTS = void 0, n2.endPTS = void 0, n2.startDTS = void 0, n2.endDTS = void 0, n2.start = 0, n2.deltaPTS = void 0, n2.maxStartPTS = void 0, n2.minEndPTS = void 0, n2.stats = new K(), n2.data = void 0, n2.bitrateTest = false, n2.title = null, n2.initSegment = null, n2.endList = void 0, n2.gap = void 0, n2.urlId = 0, n2.type = t3, n2;
          }
          c(t2, e3);
          var r2 = t2.prototype;
          return r2.setKeyFormat = function(e4) {
            if (this.levelkeys) {
              var t3 = this.levelkeys[e4];
              t3 && !this._decryptdata && (this._decryptdata = t3.getDecryptData(this.sn));
            }
          }, r2.abortRequests = function() {
            var e4, t3;
            null == (e4 = this.loader) || e4.abort(), null == (t3 = this.keyLoader) || t3.abort();
          }, r2.setElementaryStreamInfo = function(e4, t3, r3, n2, i2, a2) {
            void 0 === a2 && (a2 = false);
            var s2 = this.elementaryStreams, o2 = s2[e4];
            o2 ? (o2.startPTS = Math.min(o2.startPTS, t3), o2.endPTS = Math.max(o2.endPTS, r3), o2.startDTS = Math.min(o2.startDTS, n2), o2.endDTS = Math.max(o2.endDTS, i2)) : s2[e4] = { startPTS: t3, endPTS: r3, startDTS: n2, endDTS: i2, partial: a2 };
          }, r2.clearElementaryStreamInfo = function() {
            var e4 = this.elementaryStreams;
            e4[j.AUDIO] = null, e4[j.VIDEO] = null, e4[j.AUDIOVIDEO] = null;
          }, o(t2, [{ key: "decryptdata", get: function() {
            if (!this.levelkeys && !this._decryptdata) return null;
            if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
              var e4 = this.levelkeys.identity;
              if (e4) this._decryptdata = e4.getDecryptData(this.sn);
              else {
                var t3 = Object.keys(this.levelkeys);
                if (1 === t3.length) return this._decryptdata = this.levelkeys[t3[0]].getDecryptData(this.sn);
              }
            }
            return this._decryptdata;
          } }, { key: "end", get: function() {
            return this.start + this.duration;
          } }, { key: "endProgramDateTime", get: function() {
            if (null === this.programDateTime) return null;
            if (!k(this.programDateTime)) return null;
            var e4 = k(this.duration) ? this.duration : 0;
            return this.programDateTime + 1e3 * e4;
          } }, { key: "encrypted", get: function() {
            var e4;
            if (null != (e4 = this._decryptdata) && e4.encrypted) return true;
            if (this.levelkeys) {
              var t3 = Object.keys(this.levelkeys), r3 = t3.length;
              if (r3 > 1 || 1 === r3 && this.levelkeys[t3[0]].encrypted) return true;
            }
            return false;
          } }]), t2;
        })(Y), z = (function(e3) {
          function t2(t3, r2, n2, i2, a2) {
            var s2;
            (s2 = e3.call(this, n2) || this).fragOffset = 0, s2.duration = 0, s2.gap = false, s2.independent = false, s2.relurl = void 0, s2.fragment = void 0, s2.index = void 0, s2.stats = new K(), s2.duration = t3.decimalFloatingPoint("DURATION"), s2.gap = t3.bool("GAP"), s2.independent = t3.bool("INDEPENDENT"), s2.relurl = t3.enumeratedString("URI"), s2.fragment = r2, s2.index = i2;
            var o2 = t3.enumeratedString("BYTERANGE");
            return o2 && s2.setByteRange(o2, a2), a2 && (s2.fragOffset = a2.fragOffset + a2.duration), s2;
          }
          return c(t2, e3), o(t2, [{ key: "start", get: function() {
            return this.fragment.start + this.fragOffset;
          } }, { key: "end", get: function() {
            return this.start + this.duration;
          } }, { key: "loaded", get: function() {
            var e4 = this.elementaryStreams;
            return !!(e4.audio || e4.video || e4.audiovideo);
          } }]), t2;
        })(Y), q = 10, X = (function() {
          function e3(e4) {
            this.PTSKnown = false, this.alignedSliding = false, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = true, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = true, this.advanced = true, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = false, this.canSkipUntil = 0, this.canSkipDateRanges = false, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = false, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e4;
          }
          return e3.prototype.reloaded = function(e4) {
            if (!e4) return this.advanced = true, void (this.updated = true);
            var t2 = this.lastPartSn - e4.lastPartSn, r2 = this.lastPartIndex - e4.lastPartIndex;
            this.updated = this.endSN !== e4.endSN || !!r2 || !!t2 || !this.live, this.advanced = this.endSN > e4.endSN || t2 > 0 || 0 === t2 && r2 > 0, this.updated || this.advanced ? this.misses = Math.floor(0.6 * e4.misses) : this.misses = e4.misses + 1, this.availabilityDelay = e4.availabilityDelay;
          }, o(e3, [{ key: "hasProgramDateTime", get: function() {
            return !!this.fragments.length && k(this.fragments[this.fragments.length - 1].programDateTime);
          } }, { key: "levelTargetDuration", get: function() {
            return this.averagetargetduration || this.targetduration || q;
          } }, { key: "drift", get: function() {
            var e4 = this.driftEndTime - this.driftStartTime;
            return e4 > 0 ? 1e3 * (this.driftEnd - this.driftStart) / e4 : 1;
          } }, { key: "edge", get: function() {
            return this.partEnd || this.fragmentEnd;
          } }, { key: "partEnd", get: function() {
            var e4;
            return null != (e4 = this.partList) && e4.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
          } }, { key: "fragmentEnd", get: function() {
            var e4;
            return null != (e4 = this.fragments) && e4.length ? this.fragments[this.fragments.length - 1].end : 0;
          } }, { key: "age", get: function() {
            return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
          } }, { key: "lastPartIndex", get: function() {
            var e4;
            return null != (e4 = this.partList) && e4.length ? this.partList[this.partList.length - 1].index : -1;
          } }, { key: "lastPartSn", get: function() {
            var e4;
            return null != (e4 = this.partList) && e4.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
          } }]), e3;
        })();
        function $(e3) {
          return Uint8Array.from(atob(e3), (function(e4) {
            return e4.charCodeAt(0);
          }));
        }
        function J(e3) {
          var t2 = ee(e3).subarray(0, 16), r2 = new Uint8Array(16);
          return r2.set(t2, 16 - t2.length), r2;
        }
        function Q(e3) {
          var t2 = function(e4, t3, r2) {
            var n2 = e4[t3];
            e4[t3] = e4[r2], e4[r2] = n2;
          };
          t2(e3, 0, 3), t2(e3, 1, 2), t2(e3, 4, 5), t2(e3, 6, 7);
        }
        function Z(e3) {
          var t2 = e3.split(":"), r2 = null;
          if ("data" === t2[0] && 2 === t2.length) {
            var n2 = t2[1].split(";"), i2 = n2[n2.length - 1].split(",");
            if (2 === i2.length) {
              var a2 = "base64" === i2[0], s2 = i2[1];
              a2 ? (n2.splice(-1, 1), r2 = $(s2)) : r2 = J(s2);
            }
          }
          return r2;
        }
        function ee(e3) {
          return Uint8Array.from(unescape(encodeURIComponent(e3)), (function(e4) {
            return e4.charCodeAt(0);
          }));
        }
        var te = "undefined" != typeof self ? self : void 0, re = { CLEARKEY: "org.w3.clearkey", FAIRPLAY: "com.apple.fps", PLAYREADY: "com.microsoft.playready", WIDEVINE: "com.widevine.alpha" }, ne = { CLEARKEY: "org.w3.clearkey", FAIRPLAY: "com.apple.streamingkeydelivery", PLAYREADY: "com.microsoft.playready", WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" };
        function ie(e3) {
          switch (e3) {
            case ne.FAIRPLAY:
              return re.FAIRPLAY;
            case ne.PLAYREADY:
              return re.PLAYREADY;
            case ne.WIDEVINE:
              return re.WIDEVINE;
            case ne.CLEARKEY:
              return re.CLEARKEY;
          }
        }
        var ae = { WIDEVINE: "edef8ba979d64acea3c827dcd51d21ed" };
        function se(e3) {
          if (e3 === ae.WIDEVINE) return re.WIDEVINE;
        }
        function oe(e3) {
          switch (e3) {
            case re.FAIRPLAY:
              return ne.FAIRPLAY;
            case re.PLAYREADY:
              return ne.PLAYREADY;
            case re.WIDEVINE:
              return ne.WIDEVINE;
            case re.CLEARKEY:
              return ne.CLEARKEY;
          }
        }
        function le(e3) {
          var t2 = e3.drmSystems, r2 = e3.widevineLicenseUrl, n2 = t2 ? [re.FAIRPLAY, re.WIDEVINE, re.PLAYREADY, re.CLEARKEY].filter((function(e4) {
            return !!t2[e4];
          })) : [];
          return !n2[re.WIDEVINE] && r2 && n2.push(re.WIDEVINE), n2;
        }
        var ue, ce = null != te && null != (ue = te.navigator) && ue.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
        function de(e3, t2, r2, n2) {
          var i2;
          switch (e3) {
            case re.FAIRPLAY:
              i2 = ["cenc", "sinf"];
              break;
            case re.WIDEVINE:
            case re.PLAYREADY:
              i2 = ["cenc"];
              break;
            case re.CLEARKEY:
              i2 = ["cenc", "keyids"];
              break;
            default:
              throw new Error("Unknown key-system: " + e3);
          }
          return he(i2, t2, r2, n2);
        }
        function he(e3, t2, r2, n2) {
          return [{ initDataTypes: e3, persistentState: n2.persistentState || "optional", distinctiveIdentifier: n2.distinctiveIdentifier || "optional", sessionTypes: n2.sessionTypes || [n2.sessionType || "temporary"], audioCapabilities: t2.map((function(e4) {
            return { contentType: 'audio/mp4; codecs="' + e4 + '"', robustness: n2.audioRobustness || "", encryptionScheme: n2.audioEncryptionScheme || null };
          })), videoCapabilities: r2.map((function(e4) {
            return { contentType: 'video/mp4; codecs="' + e4 + '"', robustness: n2.videoRobustness || "", encryptionScheme: n2.videoEncryptionScheme || null };
          })) }];
        }
        function fe(e3, t2, r2) {
          return Uint8Array.prototype.slice ? e3.slice(t2, r2) : new Uint8Array(Array.prototype.slice.call(e3, t2, r2));
        }
        var ge, me = function(e3, t2) {
          return t2 + 10 <= e3.length && 73 === e3[t2] && 68 === e3[t2 + 1] && 51 === e3[t2 + 2] && e3[t2 + 3] < 255 && e3[t2 + 4] < 255 && e3[t2 + 6] < 128 && e3[t2 + 7] < 128 && e3[t2 + 8] < 128 && e3[t2 + 9] < 128;
        }, pe = function(e3, t2) {
          return t2 + 10 <= e3.length && 51 === e3[t2] && 68 === e3[t2 + 1] && 73 === e3[t2 + 2] && e3[t2 + 3] < 255 && e3[t2 + 4] < 255 && e3[t2 + 6] < 128 && e3[t2 + 7] < 128 && e3[t2 + 8] < 128 && e3[t2 + 9] < 128;
        }, ve = function(e3, t2) {
          for (var r2 = t2, n2 = 0; me(e3, t2); ) n2 += 10, n2 += ye(e3, t2 + 6), pe(e3, t2 + 10) && (n2 += 10), t2 += n2;
          if (n2 > 0) return e3.subarray(r2, r2 + n2);
        }, ye = function(e3, t2) {
          var r2 = 0;
          return r2 = (127 & e3[t2]) << 21, r2 |= (127 & e3[t2 + 1]) << 14, r2 |= (127 & e3[t2 + 2]) << 7, r2 |= 127 & e3[t2 + 3];
        }, Te = function(e3, t2) {
          return me(e3, t2) && ye(e3, t2 + 6) + 10 <= e3.length - t2;
        }, be = function(e3) {
          for (var t2 = Ae(e3), r2 = 0; r2 < t2.length; r2++) {
            var n2 = t2[r2];
            if (Ee(n2)) return we(n2);
          }
        }, Ee = function(e3) {
          return e3 && "PRIV" === e3.key && "com.apple.streaming.transportStreamTimestamp" === e3.info;
        }, Se = function(e3) {
          var t2 = String.fromCharCode(e3[0], e3[1], e3[2], e3[3]), r2 = ye(e3, 4), n2 = 10;
          return { type: t2, size: r2, data: e3.subarray(n2, n2 + r2) };
        }, Ae = function(e3) {
          for (var t2 = 0, r2 = []; me(e3, t2); ) {
            for (var n2 = ye(e3, t2 + 6), i2 = (t2 += 10) + n2; t2 + 8 < i2; ) {
              var a2 = Se(e3.subarray(t2)), s2 = ke(a2);
              s2 && r2.push(s2), t2 += a2.size + 10;
            }
            pe(e3, t2) && (t2 += 10);
          }
          return r2;
        }, ke = function(e3) {
          return "PRIV" === e3.type ? Le(e3) : "W" === e3.type[0] ? Ie(e3) : Re(e3);
        }, Le = function(e3) {
          if (!(e3.size < 2)) {
            var t2 = De(e3.data, true), r2 = new Uint8Array(e3.data.subarray(t2.length + 1));
            return { key: e3.type, info: t2, data: r2.buffer };
          }
        }, Re = function(e3) {
          if (!(e3.size < 2)) {
            if ("TXXX" === e3.type) {
              var t2 = 1, r2 = De(e3.data.subarray(t2), true);
              t2 += r2.length + 1;
              var n2 = De(e3.data.subarray(t2));
              return { key: e3.type, info: r2, data: n2 };
            }
            var i2 = De(e3.data.subarray(1));
            return { key: e3.type, data: i2 };
          }
        }, Ie = function(e3) {
          if ("WXXX" === e3.type) {
            if (e3.size < 2) return;
            var t2 = 1, r2 = De(e3.data.subarray(t2), true);
            t2 += r2.length + 1;
            var n2 = De(e3.data.subarray(t2));
            return { key: e3.type, info: r2, data: n2 };
          }
          var i2 = De(e3.data);
          return { key: e3.type, data: i2 };
        }, we = function(e3) {
          if (8 === e3.data.byteLength) {
            var t2 = new Uint8Array(e3.data), r2 = 1 & t2[3], n2 = (t2[4] << 23) + (t2[5] << 15) + (t2[6] << 7) + t2[7];
            return n2 /= 45, r2 && (n2 += 4772185884e-2), Math.round(n2);
          }
        }, De = function(e3, t2) {
          void 0 === t2 && (t2 = false);
          var r2 = Ce();
          if (r2) {
            var n2 = r2.decode(e3);
            if (t2) {
              var i2 = n2.indexOf("\0");
              return -1 !== i2 ? n2.substring(0, i2) : n2;
            }
            return n2.replace(/\0/g, "");
          }
          for (var a2, s2, o2, l2 = e3.length, u2 = "", c2 = 0; c2 < l2; ) {
            if (0 === (a2 = e3[c2++]) && t2) return u2;
            if (0 !== a2 && 3 !== a2) switch (a2 >> 4) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                u2 += String.fromCharCode(a2);
                break;
              case 12:
              case 13:
                s2 = e3[c2++], u2 += String.fromCharCode((31 & a2) << 6 | 63 & s2);
                break;
              case 14:
                s2 = e3[c2++], o2 = e3[c2++], u2 += String.fromCharCode((15 & a2) << 12 | (63 & s2) << 6 | 63 & o2);
            }
          }
          return u2;
        };
        function Ce() {
          if (!navigator.userAgent.includes("PlayStation 4")) return ge || void 0 === self.TextDecoder || (ge = new self.TextDecoder("utf-8")), ge;
        }
        var xe = { hexDump: function(e3) {
          for (var t2 = "", r2 = 0; r2 < e3.length; r2++) {
            var n2 = e3[r2].toString(16);
            n2.length < 2 && (n2 = "0" + n2), t2 += n2;
          }
          return t2;
        } }, _e = Math.pow(2, 32) - 1, Oe = [].push, Pe = { video: 1, audio: 2, id3: 3, text: 4 };
        function Me(e3) {
          return String.fromCharCode.apply(null, e3);
        }
        function Fe(e3, t2) {
          var r2 = e3[t2] << 8 | e3[t2 + 1];
          return r2 < 0 ? 65536 + r2 : r2;
        }
        function Ne(e3, t2) {
          var r2 = Be(e3, t2);
          return r2 < 0 ? 4294967296 + r2 : r2;
        }
        function Ue(e3, t2) {
          var r2 = Ne(e3, t2);
          return r2 *= Math.pow(2, 32), r2 += Ne(e3, t2 + 4);
        }
        function Be(e3, t2) {
          return e3[t2] << 24 | e3[t2 + 1] << 16 | e3[t2 + 2] << 8 | e3[t2 + 3];
        }
        function Ge(e3, t2, r2) {
          e3[t2] = r2 >> 24, e3[t2 + 1] = r2 >> 16 & 255, e3[t2 + 2] = r2 >> 8 & 255, e3[t2 + 3] = 255 & r2;
        }
        function Ve(e3) {
          for (var t2 = e3.byteLength, r2 = 0; r2 < t2; ) {
            var n2 = Ne(e3, r2);
            if (n2 > 8 && 109 === e3[r2 + 4] && 111 === e3[r2 + 5] && 111 === e3[r2 + 6] && 102 === e3[r2 + 7]) return true;
            r2 = n2 > 1 ? r2 + n2 : t2;
          }
          return false;
        }
        function He(e3, t2) {
          var r2 = [];
          if (!t2.length) return r2;
          for (var n2 = e3.byteLength, i2 = 0; i2 < n2; ) {
            var a2 = Ne(e3, i2), s2 = a2 > 1 ? i2 + a2 : n2;
            if (Me(e3.subarray(i2 + 4, i2 + 8)) === t2[0]) if (1 === t2.length) r2.push(e3.subarray(i2 + 8, s2));
            else {
              var o2 = He(e3.subarray(i2 + 8, s2), t2.slice(1));
              o2.length && Oe.apply(r2, o2);
            }
            i2 = s2;
          }
          return r2;
        }
        function Ke(e3) {
          var t2 = [], r2 = e3[0], n2 = 8, i2 = Ne(e3, n2);
          n2 += 4;
          var a2 = 0, s2 = 0;
          0 === r2 ? (a2 = Ne(e3, n2), s2 = Ne(e3, n2 + 4), n2 += 8) : (a2 = Ue(e3, n2), s2 = Ue(e3, n2 + 8), n2 += 16), n2 += 2;
          var o2 = e3.length + s2, l2 = Fe(e3, n2);
          n2 += 2;
          for (var u2 = 0; u2 < l2; u2++) {
            var c2 = n2, d2 = Ne(e3, c2);
            c2 += 4;
            var h2 = 2147483647 & d2;
            if (1 == (2147483648 & d2) >>> 31) return F.warn("SIDX has hierarchical references (not supported)"), null;
            var f2 = Ne(e3, c2);
            c2 += 4, t2.push({ referenceSize: h2, subsegmentDuration: f2, info: { duration: f2 / i2, start: o2, end: o2 + h2 - 1 } }), o2 += h2, n2 = c2 += 4;
          }
          return { earliestPresentationTime: a2, timescale: i2, version: r2, referencesCount: l2, references: t2 };
        }
        function je(e3) {
          for (var t2 = [], r2 = He(e3, ["moov", "trak"]), i2 = 0; i2 < r2.length; i2++) {
            var a2 = r2[i2], s2 = He(a2, ["tkhd"])[0];
            if (s2) {
              var o2 = s2[0], l2 = Ne(s2, 0 === o2 ? 12 : 20), u2 = He(a2, ["mdia", "mdhd"])[0];
              if (u2) {
                var c2 = Ne(u2, 0 === (o2 = u2[0]) ? 12 : 20), d2 = He(a2, ["mdia", "hdlr"])[0];
                if (d2) {
                  var h2 = Me(d2.subarray(8, 12)), f2 = { soun: j.AUDIO, vide: j.VIDEO }[h2];
                  if (f2) {
                    var g2 = Ye(He(a2, ["mdia", "minf", "stbl", "stsd"])[0]);
                    t2[l2] = { timescale: c2, type: f2 }, t2[f2] = n({ timescale: c2, id: l2 }, g2);
                  }
                }
              }
            }
          }
          return He(e3, ["moov", "mvex", "trex"]).forEach((function(e4) {
            var r3 = Ne(e4, 4), n2 = t2[r3];
            n2 && (n2.default = { duration: Ne(e4, 12), flags: Ne(e4, 20) });
          })), t2;
        }
        function Ye(e3) {
          var t2 = e3.subarray(8), r2 = t2.subarray(86), n2 = Me(t2.subarray(4, 8)), i2 = n2, a2 = "enca" === n2 || "encv" === n2;
          if (a2) {
            var s2 = He(t2, [n2])[0];
            He(s2.subarray("enca" === n2 ? 28 : 78), ["sinf"]).forEach((function(e4) {
              var t3 = He(e4, ["schm"])[0];
              if (t3) {
                var r3 = Me(t3.subarray(4, 8));
                if ("cbcs" === r3 || "cenc" === r3) {
                  var n3 = He(e4, ["frma"])[0];
                  n3 && (i2 = Me(n3));
                }
              }
            }));
          }
          switch (i2) {
            case "avc1":
            case "avc2":
            case "avc3":
            case "avc4":
              var o2 = He(r2, ["avcC"])[0];
              i2 += "." + ze(o2[1]) + ze(o2[2]) + ze(o2[3]);
              break;
            case "mp4a":
              var l2 = He(t2, [n2])[0], u2 = He(l2.subarray(28), ["esds"])[0];
              if (u2 && u2.length > 12) {
                var c2 = 4;
                if (3 !== u2[c2++]) break;
                c2 = We(u2, c2), c2 += 2;
                var d2 = u2[c2++];
                if (128 & d2 && (c2 += 2), 64 & d2 && (c2 += u2[c2++]), 4 !== u2[c2++]) break;
                c2 = We(u2, c2);
                var h2 = u2[c2++];
                if (64 !== h2) break;
                if (i2 += "." + ze(h2), c2 += 12, 5 !== u2[c2++]) break;
                c2 = We(u2, c2);
                var f2 = u2[c2++], g2 = (248 & f2) >> 3;
                31 === g2 && (g2 += 1 + ((7 & f2) << 3) + ((224 & u2[c2]) >> 5)), i2 += "." + g2;
              }
              break;
            case "hvc1":
            case "hev1":
              var m2 = He(r2, ["hvcC"])[0], p2 = m2[1], v2 = ["", "A", "B", "C"][p2 >> 6], y2 = 31 & p2, T2 = Ne(m2, 2), b2 = (32 & p2) >> 5 ? "H" : "L", E2 = m2[12], S2 = m2.subarray(6, 12);
              i2 += "." + v2 + y2, i2 += "." + T2.toString(16).toUpperCase(), i2 += "." + b2 + E2;
              for (var A2 = "", k2 = S2.length; k2--; ) {
                var L2 = S2[k2];
                (L2 || A2) && (A2 = "." + L2.toString(16).toUpperCase() + A2);
              }
              i2 += A2;
              break;
            case "dvh1":
            case "dvhe":
              var R2 = He(r2, ["dvcC"])[0], I2 = R2[2] >> 1 & 127, w2 = R2[2] << 5 & 32 | R2[3] >> 3 & 31;
              i2 += "." + qe(I2) + "." + qe(w2);
              break;
            case "vp09":
              var D2 = He(r2, ["vpcC"])[0], C2 = D2[4], x2 = D2[5], _2 = D2[6] >> 4 & 15;
              i2 += "." + qe(C2) + "." + qe(x2) + "." + qe(_2);
              break;
            case "av01":
              var O2 = He(r2, ["av1C"])[0], P2 = O2[1] >>> 5, M2 = 31 & O2[1], F2 = O2[2] >>> 7 ? "H" : "M", N2 = (64 & O2[2]) >> 6, U2 = (32 & O2[2]) >> 5, B2 = 2 === P2 && N2 ? U2 ? 12 : 10 : N2 ? 10 : 8, G2 = (16 & O2[2]) >> 4, V2 = (8 & O2[2]) >> 3, H2 = (4 & O2[2]) >> 2, K2 = 3 & O2[2], j2 = 1, Y2 = 1, W2 = 1, z2 = 0;
              i2 += "." + P2 + "." + qe(M2) + F2 + "." + qe(B2) + "." + G2 + "." + V2 + H2 + K2 + "." + qe(j2) + "." + qe(Y2) + "." + qe(W2) + "." + z2;
          }
          return { codec: i2, encrypted: a2 };
        }
        function We(e3, t2) {
          for (var r2 = t2 + 5; 128 & e3[t2++] && t2 < r2; ) ;
          return t2;
        }
        function ze(e3) {
          return ("0" + e3.toString(16).toUpperCase()).slice(-2);
        }
        function qe(e3) {
          return (e3 < 10 ? "0" : "") + e3;
        }
        function Xe(e3, t2) {
          if (!e3 || !t2) return e3;
          var r2 = t2.keyId;
          return r2 && t2.isCommonEncryption && He(e3, ["moov", "trak"]).forEach((function(e4) {
            var t3 = He(e4, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8), n2 = He(t3, ["enca"]), i2 = n2.length > 0;
            i2 || (n2 = He(t3, ["encv"])), n2.forEach((function(e5) {
              He(i2 ? e5.subarray(28) : e5.subarray(78), ["sinf"]).forEach((function(e6) {
                var t4 = $e(e6);
                if (t4) {
                  var n3 = t4.subarray(8, 24);
                  n3.some((function(e7) {
                    return 0 !== e7;
                  })) || (F.log("[eme] Patching keyId in 'enc" + (i2 ? "a" : "v") + ">sinf>>tenc' box: " + xe.hexDump(n3) + " -> " + xe.hexDump(r2)), t4.set(r2, 8));
                }
              }));
            }));
          })), e3;
        }
        function $e(e3) {
          var t2 = He(e3, ["schm"])[0];
          if (t2) {
            var r2 = Me(t2.subarray(4, 8));
            if ("cbcs" === r2 || "cenc" === r2) return He(e3, ["schi", "tenc"])[0];
          }
          return F.error("[eme] missing 'schm' box"), null;
        }
        function Je(e3, t2) {
          return He(t2, ["moof", "traf"]).reduce((function(t3, r2) {
            var n2 = He(r2, ["tfdt"])[0], i2 = n2[0], a2 = He(r2, ["tfhd"]).reduce((function(t4, r3) {
              var a3 = Ne(r3, 4), s2 = e3[a3];
              if (s2) {
                var o2 = Ne(n2, 4);
                if (1 === i2) {
                  if (o2 === _e) return F.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), t4;
                  o2 *= _e + 1, o2 += Ne(n2, 8);
                }
                var l2 = o2 / (s2.timescale || 9e4);
                if (k(l2) && (null === t4 || l2 < t4)) return l2;
              }
              return t4;
            }), null);
            return null !== a2 && k(a2) && (null === t3 || a2 < t3) ? a2 : t3;
          }), null);
        }
        function Qe(e3, t2) {
          for (var r2 = 1 / 0, n2 = 0, i2 = 0, a2 = He(e3, ["sidx"]), s2 = 0; s2 < a2.length; s2++) {
            var o2 = Ke(a2[s2]);
            if (null != o2 && o2.references) {
              r2 = Math.min(r2, o2.earliestPresentationTime / o2.timescale);
              var l2 = o2.references.reduce((function(e4, t3) {
                return e4 + t3.info.duration || 0;
              }), 0);
              i2 = (n2 = Math.max(n2, l2 + o2.earliestPresentationTime / o2.timescale)) - r2;
            }
          }
          if (i2 && k(i2)) return i2;
          for (var u2 = 0, c2 = 0, d2 = 0, h2 = He(e3, ["moof", "traf"]), f2 = 0; f2 < h2.length; f2++) {
            var g2 = h2[f2], m2 = He(g2, ["tfhd"])[0], p2 = t2[Ne(m2, 4)];
            if (p2) {
              var v2 = p2.default, y2 = Ne(m2, 0) | (null == v2 ? void 0 : v2.flags), T2 = null == v2 ? void 0 : v2.duration;
              8 & y2 && (T2 = Ne(m2, 2 & y2 ? 12 : 8));
              for (var b2 = p2.timescale || 9e4, E2 = He(g2, ["trun"]), S2 = 0; S2 < E2.length; S2++) !(u2 = Ze(E2[S2])) && T2 && (u2 = T2 * Ne(E2[S2], 4)), p2.type === j.VIDEO ? c2 += u2 / b2 : p2.type === j.AUDIO && (d2 += u2 / b2);
            }
          }
          return c2 || d2;
        }
        function Ze(e3) {
          var t2 = Ne(e3, 0), r2 = 8;
          1 & t2 && (r2 += 4), 4 & t2 && (r2 += 4);
          for (var n2 = 0, i2 = Ne(e3, 4), a2 = 0; a2 < i2; a2++) 256 & t2 && (n2 += Ne(e3, r2), r2 += 4), 512 & t2 && (r2 += 4), 1024 & t2 && (r2 += 4), 2048 & t2 && (r2 += 4);
          return n2;
        }
        function et(e3, t2, r2) {
          He(t2, ["moof", "traf"]).forEach((function(t3) {
            He(t3, ["tfhd"]).forEach((function(n2) {
              var i2 = Ne(n2, 4), a2 = e3[i2];
              if (a2) {
                var s2 = a2.timescale || 9e4;
                He(t3, ["tfdt"]).forEach((function(e4) {
                  var t4 = e4[0], n3 = r2 * s2;
                  if (n3) {
                    var i3 = Ne(e4, 4);
                    if (0 === t4) i3 -= n3, Ge(e4, 4, i3 = Math.max(i3, 0));
                    else {
                      i3 *= Math.pow(2, 32), i3 += Ne(e4, 8), i3 -= n3, i3 = Math.max(i3, 0);
                      var a3 = Math.floor(i3 / (_e + 1)), o2 = Math.floor(i3 % (_e + 1));
                      Ge(e4, 4, a3), Ge(e4, 8, o2);
                    }
                  }
                }));
              }
            }));
          }));
        }
        function tt(e3) {
          var t2 = { valid: null, remainder: null }, r2 = He(e3, ["moof"]);
          if (r2.length < 2) return t2.remainder = e3, t2;
          var n2 = r2[r2.length - 1];
          return t2.valid = fe(e3, 0, n2.byteOffset - 8), t2.remainder = fe(e3, n2.byteOffset - 8), t2;
        }
        function rt(e3, t2) {
          var r2 = new Uint8Array(e3.length + t2.length);
          return r2.set(e3), r2.set(t2, e3.length), r2;
        }
        function nt(e3, t2) {
          var r2 = [], n2 = t2.samples, i2 = t2.timescale, a2 = t2.id, s2 = false;
          return He(n2, ["moof"]).map((function(o2) {
            var l2 = o2.byteOffset - 8;
            He(o2, ["traf"]).map((function(o3) {
              var u2 = He(o3, ["tfdt"]).map((function(e4) {
                var t3 = e4[0], r3 = Ne(e4, 4);
                return 1 === t3 && (r3 *= Math.pow(2, 32), r3 += Ne(e4, 8)), r3 / i2;
              }))[0];
              return void 0 !== u2 && (e3 = u2), He(o3, ["tfhd"]).map((function(u3) {
                var c2 = Ne(u3, 4), d2 = 16777215 & Ne(u3, 0), h2 = 0, f2 = !!(16 & d2), g2 = 0, m2 = !!(32 & d2), p2 = 8;
                c2 === a2 && (!!(1 & d2) && (p2 += 8), !!(2 & d2) && (p2 += 4), !!(8 & d2) && (h2 = Ne(u3, p2), p2 += 4), f2 && (g2 = Ne(u3, p2), p2 += 4), m2 && (p2 += 4), "video" === t2.type && (s2 = it(t2.codec)), He(o3, ["trun"]).map((function(a3) {
                  var o4 = a3[0], u4 = 16777215 & Ne(a3, 0), c3 = !!(1 & u4), d3 = 0, f3 = !!(4 & u4), m3 = !!(256 & u4), p3 = 0, v2 = !!(512 & u4), y2 = 0, T2 = !!(1024 & u4), b2 = !!(2048 & u4), E2 = 0, S2 = Ne(a3, 4), A2 = 8;
                  c3 && (d3 = Ne(a3, A2), A2 += 4), f3 && (A2 += 4);
                  for (var k2 = d3 + l2, L2 = 0; L2 < S2; L2++) {
                    if (m3 ? (p3 = Ne(a3, A2), A2 += 4) : p3 = h2, v2 ? (y2 = Ne(a3, A2), A2 += 4) : y2 = g2, T2 && (A2 += 4), b2 && (E2 = 0 === o4 ? Ne(a3, A2) : Be(a3, A2), A2 += 4), t2.type === j.VIDEO) for (var R2 = 0; R2 < y2; ) {
                      var I2 = Ne(n2, k2);
                      at(s2, n2[k2 += 4]) && st(n2.subarray(k2, k2 + I2), s2 ? 2 : 1, e3 + E2 / i2, r2), k2 += I2, R2 += I2 + 4;
                    }
                    e3 += p3 / i2;
                  }
                })));
              }));
            }));
          })), r2;
        }
        function it(e3) {
          if (!e3) return false;
          var t2 = e3.indexOf("."), r2 = t2 < 0 ? e3 : e3.substring(0, t2);
          return "hvc1" === r2 || "hev1" === r2 || "dvh1" === r2 || "dvhe" === r2;
        }
        function at(e3, t2) {
          if (e3) {
            var r2 = t2 >> 1 & 63;
            return 39 === r2 || 40 === r2;
          }
          return 6 == (31 & t2);
        }
        function st(e3, t2, r2, n2) {
          var i2 = ot(e3), a2 = 0;
          a2 += t2;
          for (var s2 = 0, o2 = 0, l2 = 0; a2 < i2.length; ) {
            s2 = 0;
            do {
              if (a2 >= i2.length) break;
              s2 += l2 = i2[a2++];
            } while (255 === l2);
            o2 = 0;
            do {
              if (a2 >= i2.length) break;
              o2 += l2 = i2[a2++];
            } while (255 === l2);
            var u2 = i2.length - a2, c2 = a2;
            if (o2 < u2) a2 += o2;
            else if (o2 > u2) {
              F.error("Malformed SEI payload. " + o2 + " is too small, only " + u2 + " bytes left to parse.");
              break;
            }
            if (4 === s2) {
              if (181 === i2[c2++]) {
                var d2 = Fe(i2, c2);
                if (c2 += 2, 49 === d2) {
                  var h2 = Ne(i2, c2);
                  if (c2 += 4, 1195456820 === h2) {
                    var f2 = i2[c2++];
                    if (3 === f2) {
                      var g2 = i2[c2++], m2 = 64 & g2, p2 = m2 ? 2 + 3 * (31 & g2) : 0, v2 = new Uint8Array(p2);
                      if (m2) {
                        v2[0] = g2;
                        for (var y2 = 1; y2 < p2; y2++) v2[y2] = i2[c2++];
                      }
                      n2.push({ type: f2, payloadType: s2, pts: r2, bytes: v2 });
                    }
                  }
                }
              }
            } else if (5 === s2 && o2 > 16) {
              for (var T2 = [], b2 = 0; b2 < 16; b2++) {
                var E2 = i2[c2++].toString(16);
                T2.push(1 == E2.length ? "0" + E2 : E2), 3 !== b2 && 5 !== b2 && 7 !== b2 && 9 !== b2 || T2.push("-");
              }
              for (var S2 = o2 - 16, A2 = new Uint8Array(S2), k2 = 0; k2 < S2; k2++) A2[k2] = i2[c2++];
              n2.push({ payloadType: s2, pts: r2, uuid: T2.join(""), userData: De(A2), userDataBytes: A2 });
            }
          }
        }
        function ot(e3) {
          for (var t2 = e3.byteLength, r2 = [], n2 = 1; n2 < t2 - 2; ) 0 === e3[n2] && 0 === e3[n2 + 1] && 3 === e3[n2 + 2] ? (r2.push(n2 + 2), n2 += 2) : n2++;
          if (0 === r2.length) return e3;
          var i2 = t2 - r2.length, a2 = new Uint8Array(i2), s2 = 0;
          for (n2 = 0; n2 < i2; s2++, n2++) s2 === r2[0] && (s2++, r2.shift()), a2[n2] = e3[s2];
          return a2;
        }
        function lt(e3) {
          var t2 = e3[0], r2 = "", n2 = "", i2 = 0, a2 = 0, s2 = 0, o2 = 0, l2 = 0, u2 = 0;
          if (0 === t2) {
            for (; "\0" !== Me(e3.subarray(u2, u2 + 1)); ) r2 += Me(e3.subarray(u2, u2 + 1)), u2 += 1;
            for (r2 += Me(e3.subarray(u2, u2 + 1)), u2 += 1; "\0" !== Me(e3.subarray(u2, u2 + 1)); ) n2 += Me(e3.subarray(u2, u2 + 1)), u2 += 1;
            n2 += Me(e3.subarray(u2, u2 + 1)), u2 += 1, i2 = Ne(e3, 12), a2 = Ne(e3, 16), o2 = Ne(e3, 20), l2 = Ne(e3, 24), u2 = 28;
          } else if (1 === t2) {
            i2 = Ne(e3, u2 += 4);
            var c2 = Ne(e3, u2 += 4), d2 = Ne(e3, u2 += 4);
            for (u2 += 4, s2 = Math.pow(2, 32) * c2 + d2, L(s2) || (s2 = Number.MAX_SAFE_INTEGER, F.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o2 = Ne(e3, u2), l2 = Ne(e3, u2 += 4), u2 += 4; "\0" !== Me(e3.subarray(u2, u2 + 1)); ) r2 += Me(e3.subarray(u2, u2 + 1)), u2 += 1;
            for (r2 += Me(e3.subarray(u2, u2 + 1)), u2 += 1; "\0" !== Me(e3.subarray(u2, u2 + 1)); ) n2 += Me(e3.subarray(u2, u2 + 1)), u2 += 1;
            n2 += Me(e3.subarray(u2, u2 + 1)), u2 += 1;
          }
          return { schemeIdUri: r2, value: n2, timeScale: i2, presentationTime: s2, presentationTimeDelta: a2, eventDuration: o2, id: l2, payload: e3.subarray(u2, e3.byteLength) };
        }
        function ut(e3) {
          for (var t2 = arguments.length, r2 = new Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
          for (var i2 = r2.length, a2 = 8, s2 = i2; s2--; ) a2 += r2[s2].byteLength;
          var o2 = new Uint8Array(a2);
          for (o2[0] = a2 >> 24 & 255, o2[1] = a2 >> 16 & 255, o2[2] = a2 >> 8 & 255, o2[3] = 255 & a2, o2.set(e3, 4), s2 = 0, a2 = 8; s2 < i2; s2++) o2.set(r2[s2], a2), a2 += r2[s2].byteLength;
          return o2;
        }
        function ct(e3, t2, r2) {
          if (16 !== e3.byteLength) throw new RangeError("Invalid system id");
          var n2, i2, a2;
          if (t2) {
            n2 = 1, i2 = new Uint8Array(16 * t2.length);
            for (var s2 = 0; s2 < t2.length; s2++) {
              var o2 = t2[s2];
              if (16 !== o2.byteLength) throw new RangeError("Invalid key");
              i2.set(o2, 16 * s2);
            }
          } else n2 = 0, i2 = new Uint8Array();
          n2 > 0 ? (a2 = new Uint8Array(4), t2.length > 0 && new DataView(a2.buffer).setUint32(0, t2.length, false)) : a2 = new Uint8Array();
          var l2 = new Uint8Array(4);
          return r2 && r2.byteLength > 0 && new DataView(l2.buffer).setUint32(0, r2.byteLength, false), ut([112, 115, 115, 104], new Uint8Array([n2, 0, 0, 0]), e3, a2, i2, l2, r2 || new Uint8Array());
        }
        function dt(e3) {
          if (!(e3 instanceof ArrayBuffer) || e3.byteLength < 32) return null;
          var t2 = { version: 0, systemId: "", kids: null, data: null }, r2 = new DataView(e3), n2 = r2.getUint32(0);
          if (e3.byteLength !== n2 && n2 > 44) return null;
          if (1886614376 !== r2.getUint32(4)) return null;
          if (t2.version = r2.getUint32(8) >>> 24, t2.version > 1) return null;
          t2.systemId = xe.hexDump(new Uint8Array(e3, 12, 16));
          var i2 = r2.getUint32(28);
          if (0 === t2.version) {
            if (n2 - 32 < i2) return null;
            t2.data = new Uint8Array(e3, 32, i2);
          } else if (1 === t2.version) {
            t2.kids = [];
            for (var a2 = 0; a2 < i2; a2++) t2.kids.push(new Uint8Array(e3, 32 + 16 * a2, 16));
          }
          return t2;
        }
        var ht = {}, ft = (function() {
          function e3(e4, t3, r2, n2, i2) {
            void 0 === n2 && (n2 = [1]), void 0 === i2 && (i2 = null), this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e4, this.uri = t3, this.keyFormat = r2, this.keyFormatVersions = n2, this.iv = i2, this.encrypted = !!e4 && "NONE" !== e4, this.isCommonEncryption = this.encrypted && "AES-128" !== e4;
          }
          e3.clearKeyUriToKeyIdMap = function() {
            ht = {};
          };
          var t2 = e3.prototype;
          return t2.isSupported = function() {
            if (this.method) {
              if ("AES-128" === this.method || "NONE" === this.method) return true;
              if ("identity" === this.keyFormat) return "SAMPLE-AES" === this.method;
              switch (this.keyFormat) {
                case ne.FAIRPLAY:
                case ne.WIDEVINE:
                case ne.PLAYREADY:
                case ne.CLEARKEY:
                  return -1 !== ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method);
              }
            }
            return false;
          }, t2.getDecryptData = function(t3) {
            if (!this.encrypted || !this.uri) return null;
            if ("AES-128" === this.method && this.uri && !this.iv) {
              "number" != typeof t3 && ("AES-128" !== this.method || this.iv || F.warn('missing IV for initialization segment with method="' + this.method + '" - compliance issue'), t3 = 0);
              var r2 = gt(t3);
              return new e3(this.method, this.uri, "identity", this.keyFormatVersions, r2);
            }
            var n2 = Z(this.uri);
            if (n2) switch (this.keyFormat) {
              case ne.WIDEVINE:
                this.pssh = n2, n2.length >= 22 && (this.keyId = n2.subarray(n2.length - 22, n2.length - 6));
                break;
              case ne.PLAYREADY:
                var i2 = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                this.pssh = ct(i2, null, n2);
                var a2 = new Uint16Array(n2.buffer, n2.byteOffset, n2.byteLength / 2), s2 = String.fromCharCode.apply(null, Array.from(a2)), o2 = s2.substring(s2.indexOf("<"), s2.length), l2 = new DOMParser().parseFromString(o2, "text/xml").getElementsByTagName("KID")[0];
                if (l2) {
                  var u2 = l2.childNodes[0] ? l2.childNodes[0].nodeValue : l2.getAttribute("VALUE");
                  if (u2) {
                    var c2 = $(u2).subarray(0, 16);
                    Q(c2), this.keyId = c2;
                  }
                }
                break;
              default:
                var d2 = n2.subarray(0, 16);
                if (16 !== d2.length) {
                  var h2 = new Uint8Array(16);
                  h2.set(d2, 16 - d2.length), d2 = h2;
                }
                this.keyId = d2;
            }
            if (!this.keyId || 16 !== this.keyId.byteLength) {
              var f2 = ht[this.uri];
              if (!f2) {
                var g2 = Object.keys(ht).length % Number.MAX_SAFE_INTEGER;
                f2 = new Uint8Array(16), new DataView(f2.buffer, 12, 4).setUint32(0, g2), ht[this.uri] = f2;
              }
              this.keyId = f2;
            }
            return this;
          }, e3;
        })();
        function gt(e3) {
          for (var t2 = new Uint8Array(16), r2 = 12; r2 < 16; r2++) t2[r2] = e3 >> 8 * (15 - r2) & 255;
          return t2;
        }
        var mt = /\{\$([a-zA-Z0-9-_]+)\}/g;
        function pt(e3) {
          return mt.test(e3);
        }
        function vt(e3, t2, r2) {
          if (null !== e3.variableList || e3.hasVariableRefs) for (var n2 = r2.length; n2--; ) {
            var i2 = r2[n2], a2 = t2[i2];
            a2 && (t2[i2] = yt(e3, a2));
          }
        }
        function yt(e3, t2) {
          if (null !== e3.variableList || e3.hasVariableRefs) {
            var r2 = e3.variableList;
            return t2.replace(mt, (function(t3) {
              var n2 = t3.substring(2, t3.length - 1), i2 = null == r2 ? void 0 : r2[n2];
              return void 0 === i2 ? (e3.playlistParsingError || (e3.playlistParsingError = new Error('Missing preceding EXT-X-DEFINE tag for Variable Reference: "' + n2 + '"')), t3) : i2;
            }));
          }
          return t2;
        }
        function Tt(e3, t2, r2) {
          var n2, i2, a2 = e3.variableList;
          if (a2 || (e3.variableList = a2 = {}), "QUERYPARAM" in t2) {
            n2 = t2.QUERYPARAM;
            try {
              var s2 = new self.URL(r2).searchParams;
              if (!s2.has(n2)) throw new Error('"' + n2 + '" does not match any query parameter in URI: "' + r2 + '"');
              i2 = s2.get(n2);
            } catch (t3) {
              e3.playlistParsingError || (e3.playlistParsingError = new Error("EXT-X-DEFINE QUERYPARAM: " + t3.message));
            }
          } else n2 = t2.NAME, i2 = t2.VALUE;
          n2 in a2 ? e3.playlistParsingError || (e3.playlistParsingError = new Error('EXT-X-DEFINE duplicate Variable Name declarations: "' + n2 + '"')) : a2[n2] = i2 || "";
        }
        function bt(e3, t2, r2) {
          var n2 = t2.IMPORT;
          if (r2 && n2 in r2) {
            var i2 = e3.variableList;
            i2 || (e3.variableList = i2 = {}), i2[n2] = r2[n2];
          } else e3.playlistParsingError || (e3.playlistParsingError = new Error('EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "' + n2 + '"'));
        }
        function Et(e3) {
          if (void 0 === e3 && (e3 = true), "undefined" != typeof self) return (e3 || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource;
        }
        var St = { audio: { a3ds: 1, "ac-3": 0.95, "ac-4": 1, alac: 0.9, alaw: 1, dra1: 1, "dts+": 1, "dts-": 1, dtsc: 1, dtse: 1, dtsh: 1, "ec-3": 0.9, enca: 1, fLaC: 0.9, flac: 0.9, FLAC: 0.9, g719: 1, g726: 1, m4ae: 1, mha1: 1, mha2: 1, mhm1: 1, mhm2: 1, mlpa: 1, mp4a: 1, "raw ": 1, Opus: 1, opus: 1, samr: 1, sawb: 1, sawp: 1, sevc: 1, sqcp: 1, ssmv: 1, twos: 1, ulaw: 1 }, video: { avc1: 1, avc2: 1, avc3: 1, avc4: 1, avcp: 1, av01: 0.8, drac: 1, dva1: 1, dvav: 1, dvh1: 0.7, dvhe: 0.7, encv: 1, hev1: 0.75, hvc1: 0.75, mjp2: 1, mp4v: 1, mvc1: 1, mvc2: 1, mvc3: 1, mvc4: 1, resv: 1, rv60: 1, s263: 1, svc1: 1, svc2: 1, "vc-1": 1, vp08: 1, vp09: 0.9 }, text: { stpp: 1, wvtt: 1 } };
        function At(e3, t2) {
          var r2 = St[t2];
          return !!r2 && !!r2[e3.slice(0, 4)];
        }
        function kt(e3, t2, r2) {
          return void 0 === r2 && (r2 = true), !e3.split(",").some((function(e4) {
            return !Lt(e4, t2, r2);
          }));
        }
        function Lt(e3, t2, r2) {
          var n2;
          void 0 === r2 && (r2 = true);
          var i2 = Et(r2);
          return null != (n2 = null == i2 ? void 0 : i2.isTypeSupported(Rt(e3, t2))) && n2;
        }
        function Rt(e3, t2) {
          return t2 + '/mp4;codecs="' + e3 + '"';
        }
        function It(e3) {
          if (e3) {
            var t2 = e3.substring(0, 4);
            return St.video[t2];
          }
          return 2;
        }
        function wt(e3) {
          return e3.split(",").reduce((function(e4, t2) {
            var r2 = St.video[t2];
            return r2 ? (2 * r2 + e4) / (e4 ? 3 : 2) : (St.audio[t2] + e4) / (e4 ? 2 : 1);
          }), 0);
        }
        var Dt = {};
        function Ct(e3, t2) {
          if (void 0 === t2 && (t2 = true), Dt[e3]) return Dt[e3];
          for (var r2 = { flac: ["flac", "fLaC", "FLAC"], opus: ["opus", "Opus"] }[e3], n2 = 0; n2 < r2.length; n2++) if (Lt(r2[n2], "audio", t2)) return Dt[e3] = r2[n2], r2[n2];
          return e3;
        }
        var xt = /flac|opus/i;
        function _t(e3, t2) {
          return void 0 === t2 && (t2 = true), e3.replace(xt, (function(e4) {
            return Ct(e4.toLowerCase(), t2);
          }));
        }
        function Ot(e3, t2) {
          return e3 && "mp4a" !== e3 ? e3 : t2;
        }
        function Pt(e3) {
          var t2 = e3.split(".");
          if (t2.length > 2) {
            var r2 = t2.shift() + ".";
            return r2 += parseInt(t2.shift()).toString(16), r2 += ("000" + parseInt(t2.shift()).toString(16)).slice(-4);
          }
          return e3;
        }
        var Mt = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, Ft = /#EXT-X-MEDIA:(.*)/g, Nt = /^#EXT(?:INF|-X-TARGETDURATION):/m, Ut = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"), Bt = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")), Gt = (function() {
          function e3() {
          }
          return e3.findGroup = function(e4, t2) {
            for (var r2 = 0; r2 < e4.length; r2++) {
              var n2 = e4[r2];
              if (n2.id === t2) return n2;
            }
          }, e3.resolve = function(e4, t2) {
            return A.buildAbsoluteURL(t2, e4, { alwaysNormalize: true });
          }, e3.isMediaPlaylist = function(e4) {
            return Nt.test(e4);
          }, e3.parseMasterPlaylist = function(t2, r2) {
            var n2, i2 = { contentSteering: null, levels: [], playlistParsingError: null, sessionData: null, sessionKeys: null, startTimeOffset: null, variableList: null, hasVariableRefs: pt(t2) }, a2 = [];
            for (Mt.lastIndex = 0; null != (n2 = Mt.exec(t2)); ) if (n2[1]) {
              var s2, o2 = new B(n2[1]);
              vt(i2, o2, ["CODECS", "SUPPLEMENTAL-CODECS", "ALLOWED-CPC", "PATHWAY-ID", "STABLE-VARIANT-ID", "AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS", "NAME"]);
              var l2 = yt(i2, n2[2]), u2 = { attrs: o2, bitrate: o2.decimalInteger("BANDWIDTH") || o2.decimalInteger("AVERAGE-BANDWIDTH"), name: o2.NAME, url: e3.resolve(l2, r2) }, c2 = o2.decimalResolution("RESOLUTION");
              c2 && (u2.width = c2.width, u2.height = c2.height), Kt(o2.CODECS, u2), null != (s2 = u2.unknownCodecs) && s2.length || a2.push(u2), i2.levels.push(u2);
            } else if (n2[3]) {
              var d2 = n2[3], h2 = n2[4];
              switch (d2) {
                case "SESSION-DATA":
                  var f2 = new B(h2);
                  vt(i2, f2, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
                  var g2 = f2["DATA-ID"];
                  g2 && (null === i2.sessionData && (i2.sessionData = {}), i2.sessionData[g2] = f2);
                  break;
                case "SESSION-KEY":
                  var m2 = Vt(h2, r2, i2);
                  m2.encrypted && m2.isSupported() ? (null === i2.sessionKeys && (i2.sessionKeys = []), i2.sessionKeys.push(m2)) : F.warn('[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "' + h2 + '"');
                  break;
                case "DEFINE":
                  var p2 = new B(h2);
                  vt(i2, p2, ["NAME", "VALUE", "QUERYPARAM"]), Tt(i2, p2, r2);
                  break;
                case "CONTENT-STEERING":
                  var v2 = new B(h2);
                  vt(i2, v2, ["SERVER-URI", "PATHWAY-ID"]), i2.contentSteering = { uri: e3.resolve(v2["SERVER-URI"], r2), pathwayId: v2["PATHWAY-ID"] || "." };
                  break;
                case "START":
                  i2.startTimeOffset = Ht(h2);
              }
            }
            var y2 = a2.length > 0 && a2.length < i2.levels.length;
            return i2.levels = y2 ? a2 : i2.levels, 0 === i2.levels.length && (i2.playlistParsingError = new Error("no levels found in manifest")), i2;
          }, e3.parseMasterPlaylistMedia = function(t2, r2, n2) {
            var i2, a2 = {}, s2 = n2.levels, o2 = { AUDIO: s2.map((function(e4) {
              return { id: e4.attrs.AUDIO, audioCodec: e4.audioCodec };
            })), SUBTITLES: s2.map((function(e4) {
              return { id: e4.attrs.SUBTITLES, textCodec: e4.textCodec };
            })), "CLOSED-CAPTIONS": [] }, l2 = 0;
            for (Ft.lastIndex = 0; null !== (i2 = Ft.exec(t2)); ) {
              var u2 = new B(i2[1]), c2 = u2.TYPE;
              if (c2) {
                var d2 = o2[c2], h2 = a2[c2] || [];
                a2[c2] = h2, vt(n2, u2, ["URI", "GROUP-ID", "LANGUAGE", "ASSOC-LANGUAGE", "STABLE-RENDITION-ID", "NAME", "INSTREAM-ID", "CHARACTERISTICS", "CHANNELS"]);
                var f2 = u2.LANGUAGE, g2 = u2["ASSOC-LANGUAGE"], m2 = u2.CHANNELS, p2 = u2.CHARACTERISTICS, v2 = u2["INSTREAM-ID"], y2 = { attrs: u2, bitrate: 0, id: l2++, groupId: u2["GROUP-ID"] || "", name: u2.NAME || f2 || "", type: c2, default: u2.bool("DEFAULT"), autoselect: u2.bool("AUTOSELECT"), forced: u2.bool("FORCED"), lang: f2, url: u2.URI ? e3.resolve(u2.URI, r2) : "" };
                if (g2 && (y2.assocLang = g2), m2 && (y2.channels = m2), p2 && (y2.characteristics = p2), v2 && (y2.instreamId = v2), null != d2 && d2.length) {
                  var T2 = e3.findGroup(d2, y2.groupId) || d2[0];
                  jt(y2, T2, "audioCodec"), jt(y2, T2, "textCodec");
                }
                h2.push(y2);
              }
            }
            return a2;
          }, e3.parseLevelPlaylist = function(e4, t2, r2, n2, i2, a2) {
            var s2, o2, l2, c2 = new X(t2), d2 = c2.fragments, h2 = null, f2 = 0, g2 = 0, m2 = 0, p2 = 0, v2 = null, y2 = new W(n2, t2), T2 = -1, b2 = false, E2 = null;
            for (Ut.lastIndex = 0, c2.m3u8 = e4, c2.hasVariableRefs = pt(e4); null !== (s2 = Ut.exec(e4)); ) {
              b2 && (b2 = false, (y2 = new W(n2, t2)).start = m2, y2.sn = f2, y2.cc = p2, y2.level = r2, h2 && (y2.initSegment = h2, y2.rawProgramDateTime = h2.rawProgramDateTime, h2.rawProgramDateTime = null, E2 && (y2.setByteRange(E2), E2 = null)));
              var S2 = s2[1];
              if (S2) {
                y2.duration = parseFloat(S2);
                var A2 = (" " + s2[2]).slice(1);
                y2.title = A2 || null, y2.tagList.push(A2 ? ["INF", S2, A2] : ["INF", S2]);
              } else if (s2[3]) {
                if (k(y2.duration)) {
                  y2.start = m2, l2 && qt(y2, l2, c2), y2.sn = f2, y2.level = r2, y2.cc = p2, d2.push(y2);
                  var L2 = (" " + s2[3]).slice(1);
                  y2.relurl = yt(c2, L2), Wt(y2, v2), v2 = y2, m2 += y2.duration, f2++, g2 = 0, b2 = true;
                }
              } else if (s2[4]) {
                var R2 = (" " + s2[4]).slice(1);
                v2 ? y2.setByteRange(R2, v2) : y2.setByteRange(R2);
              } else if (s2[5]) y2.rawProgramDateTime = (" " + s2[5]).slice(1), y2.tagList.push(["PROGRAM-DATE-TIME", y2.rawProgramDateTime]), -1 === T2 && (T2 = d2.length);
              else {
                if (!(s2 = s2[0].match(Bt))) {
                  F.warn("No matches on slow regex match for level playlist!");
                  continue;
                }
                for (o2 = 1; o2 < s2.length && void 0 === s2[o2]; o2++) ;
                var I2 = (" " + s2[o2]).slice(1), w2 = (" " + s2[o2 + 1]).slice(1), D2 = s2[o2 + 2] ? (" " + s2[o2 + 2]).slice(1) : "";
                switch (I2) {
                  case "PLAYLIST-TYPE":
                    c2.type = w2.toUpperCase();
                    break;
                  case "MEDIA-SEQUENCE":
                    f2 = c2.startSN = parseInt(w2);
                    break;
                  case "SKIP":
                    var C2 = new B(w2);
                    vt(c2, C2, ["RECENTLY-REMOVED-DATERANGES"]);
                    var x2 = C2.decimalInteger("SKIPPED-SEGMENTS");
                    if (k(x2)) {
                      c2.skippedSegments = x2;
                      for (var _2 = x2; _2--; ) d2.unshift(null);
                      f2 += x2;
                    }
                    var O2 = C2.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                    O2 && (c2.recentlyRemovedDateranges = O2.split("	"));
                    break;
                  case "TARGETDURATION":
                    c2.targetduration = Math.max(parseInt(w2), 1);
                    break;
                  case "VERSION":
                    c2.version = parseInt(w2);
                    break;
                  case "INDEPENDENT-SEGMENTS":
                  case "EXTM3U":
                    break;
                  case "ENDLIST":
                    c2.live = false;
                    break;
                  case "#":
                    (w2 || D2) && y2.tagList.push(D2 ? [w2, D2] : [w2]);
                    break;
                  case "DISCONTINUITY":
                    p2++, y2.tagList.push(["DIS"]);
                    break;
                  case "GAP":
                    y2.gap = true, y2.tagList.push([I2]);
                    break;
                  case "BITRATE":
                    y2.tagList.push([I2, w2]);
                    break;
                  case "DATERANGE":
                    var P2 = new B(w2);
                    vt(c2, P2, ["ID", "CLASS", "START-DATE", "END-DATE", "SCTE35-CMD", "SCTE35-OUT", "SCTE35-IN"]), vt(c2, P2, P2.clientAttrs);
                    var M2 = new H(P2, c2.dateRanges[P2.ID]);
                    M2.isValid || c2.skippedSegments ? c2.dateRanges[M2.id] = M2 : F.warn('Ignoring invalid DATERANGE tag: "' + w2 + '"'), y2.tagList.push(["EXT-X-DATERANGE", w2]);
                    break;
                  case "DEFINE":
                    var N2 = new B(w2);
                    vt(c2, N2, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]), "IMPORT" in N2 ? bt(c2, N2, a2) : Tt(c2, N2, t2);
                    break;
                  case "DISCONTINUITY-SEQUENCE":
                    p2 = parseInt(w2);
                    break;
                  case "KEY":
                    var U2 = Vt(w2, t2, c2);
                    if (U2.isSupported()) {
                      if ("NONE" === U2.method) {
                        l2 = void 0;
                        break;
                      }
                      l2 || (l2 = {}), l2[U2.keyFormat] && (l2 = u({}, l2)), l2[U2.keyFormat] = U2;
                    } else F.warn('[Keys] Ignoring invalid EXT-X-KEY tag: "' + w2 + '"');
                    break;
                  case "START":
                    c2.startTimeOffset = Ht(w2);
                    break;
                  case "MAP":
                    var G2 = new B(w2);
                    if (vt(c2, G2, ["BYTERANGE", "URI"]), y2.duration) {
                      var V2 = new W(n2, t2);
                      zt(V2, G2, r2, l2), h2 = V2, y2.initSegment = h2, h2.rawProgramDateTime && !y2.rawProgramDateTime && (y2.rawProgramDateTime = h2.rawProgramDateTime);
                    } else {
                      var K2 = y2.byteRangeEndOffset;
                      if (K2) {
                        var j2 = y2.byteRangeStartOffset;
                        E2 = K2 - j2 + "@" + j2;
                      } else E2 = null;
                      zt(y2, G2, r2, l2), h2 = y2, b2 = true;
                    }
                    break;
                  case "SERVER-CONTROL":
                    var Y2 = new B(w2);
                    c2.canBlockReload = Y2.bool("CAN-BLOCK-RELOAD"), c2.canSkipUntil = Y2.optionalFloat("CAN-SKIP-UNTIL", 0), c2.canSkipDateRanges = c2.canSkipUntil > 0 && Y2.bool("CAN-SKIP-DATERANGES"), c2.partHoldBack = Y2.optionalFloat("PART-HOLD-BACK", 0), c2.holdBack = Y2.optionalFloat("HOLD-BACK", 0);
                    break;
                  case "PART-INF":
                    var q2 = new B(w2);
                    c2.partTarget = q2.decimalFloatingPoint("PART-TARGET");
                    break;
                  case "PART":
                    var $2 = c2.partList;
                    $2 || ($2 = c2.partList = []);
                    var J2 = g2 > 0 ? $2[$2.length - 1] : void 0, Q2 = g2++, Z2 = new B(w2);
                    vt(c2, Z2, ["BYTERANGE", "URI"]);
                    var ee2 = new z(Z2, y2, t2, Q2, J2);
                    $2.push(ee2), y2.duration += ee2.duration;
                    break;
                  case "PRELOAD-HINT":
                    var te2 = new B(w2);
                    vt(c2, te2, ["URI"]), c2.preloadHint = te2;
                    break;
                  case "RENDITION-REPORT":
                    var re2 = new B(w2);
                    vt(c2, re2, ["URI"]), c2.renditionReports = c2.renditionReports || [], c2.renditionReports.push(re2);
                    break;
                  default:
                    F.warn("line parsed but not handled: " + s2);
                }
              }
            }
            v2 && !v2.relurl ? (d2.pop(), m2 -= v2.duration, c2.partList && (c2.fragmentHint = v2)) : c2.partList && (Wt(y2, v2), y2.cc = p2, c2.fragmentHint = y2, l2 && qt(y2, l2, c2));
            var ne2 = d2.length, ie2 = d2[0], ae2 = d2[ne2 - 1];
            if ((m2 += c2.skippedSegments * c2.targetduration) > 0 && ne2 && ae2) {
              c2.averagetargetduration = m2 / ne2;
              var se2 = ae2.sn;
              c2.endSN = "initSegment" !== se2 ? se2 : 0, c2.live || (ae2.endList = true), ie2 && (c2.startCC = ie2.cc);
            } else c2.endSN = 0, c2.startCC = 0;
            return c2.fragmentHint && (m2 += c2.fragmentHint.duration), c2.totalduration = m2, c2.endCC = p2, T2 > 0 && Yt(d2, T2), c2;
          }, e3;
        })();
        function Vt(e3, t2, r2) {
          var n2, i2, a2 = new B(e3);
          vt(r2, a2, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
          var s2 = null != (n2 = a2.METHOD) ? n2 : "", o2 = a2.URI, l2 = a2.hexadecimalInteger("IV"), u2 = a2.KEYFORMATVERSIONS, c2 = null != (i2 = a2.KEYFORMAT) ? i2 : "identity";
          o2 && a2.IV && !l2 && F.error("Invalid IV: " + a2.IV);
          var d2 = o2 ? Gt.resolve(o2, t2) : "", h2 = (u2 || "1").split("/").map(Number).filter(Number.isFinite);
          return new ft(s2, d2, c2, h2, l2);
        }
        function Ht(e3) {
          var t2 = new B(e3).decimalFloatingPoint("TIME-OFFSET");
          return k(t2) ? t2 : null;
        }
        function Kt(e3, t2) {
          var r2 = (e3 || "").split(/[ ,]+/).filter((function(e4) {
            return e4;
          }));
          ["video", "audio", "text"].forEach((function(e4) {
            var n2 = r2.filter((function(t3) {
              return At(t3, e4);
            }));
            n2.length && (t2[e4 + "Codec"] = n2.join(","), r2 = r2.filter((function(e5) {
              return -1 === n2.indexOf(e5);
            })));
          })), t2.unknownCodecs = r2;
        }
        function jt(e3, t2, r2) {
          var n2 = t2[r2];
          n2 && (e3[r2] = n2);
        }
        function Yt(e3, t2) {
          for (var r2 = e3[t2], n2 = t2; n2--; ) {
            var i2 = e3[n2];
            if (!i2) return;
            i2.programDateTime = r2.programDateTime - 1e3 * i2.duration, r2 = i2;
          }
        }
        function Wt(e3, t2) {
          e3.rawProgramDateTime ? e3.programDateTime = Date.parse(e3.rawProgramDateTime) : null != t2 && t2.programDateTime && (e3.programDateTime = t2.endProgramDateTime), k(e3.programDateTime) || (e3.programDateTime = null, e3.rawProgramDateTime = null);
        }
        function zt(e3, t2, r2, n2) {
          e3.relurl = t2.URI, t2.BYTERANGE && e3.setByteRange(t2.BYTERANGE), e3.level = r2, e3.sn = "initSegment", n2 && (e3.levelkeys = n2), e3.initSegment = null;
        }
        function qt(e3, t2, r2) {
          e3.levelkeys = t2;
          var n2 = r2.encryptedFragments;
          n2.length && n2[n2.length - 1].levelkeys === t2 || !Object.keys(t2).some((function(e4) {
            return t2[e4].isCommonEncryption;
          })) || n2.push(e3);
        }
        var Xt = { MANIFEST: "manifest", LEVEL: "level", AUDIO_TRACK: "audioTrack", SUBTITLE_TRACK: "subtitleTrack" }, $t = { MAIN: "main", AUDIO: "audio", SUBTITLE: "subtitle" };
        function Jt(e3) {
          switch (e3.type) {
            case Xt.AUDIO_TRACK:
              return $t.AUDIO;
            case Xt.SUBTITLE_TRACK:
              return $t.SUBTITLE;
            default:
              return $t.MAIN;
          }
        }
        function Qt(e3, t2) {
          var r2 = e3.url;
          return void 0 !== r2 && 0 !== r2.indexOf("data:") || (r2 = t2.url), r2;
        }
        var Zt = (function() {
          function e3(e4) {
            this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.hls = e4, this.registerListeners();
          }
          var t2 = e3.prototype;
          return t2.startLoad = function(e4) {
          }, t2.stopLoad = function() {
            this.destroyInternalLoaders();
          }, t2.registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.on(I.LEVEL_LOADING, this.onLevelLoading, this), e4.on(I.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e4.on(I.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
          }, t2.unregisterListeners = function() {
            var e4 = this.hls;
            e4.off(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.off(I.LEVEL_LOADING, this.onLevelLoading, this), e4.off(I.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e4.off(I.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
          }, t2.createInternalLoader = function(e4) {
            var t3 = this.hls.config, r2 = t3.pLoader, n2 = t3.loader, i2 = new (r2 || n2)(t3);
            return this.loaders[e4.type] = i2, i2;
          }, t2.getInternalLoader = function(e4) {
            return this.loaders[e4.type];
          }, t2.resetInternalLoader = function(e4) {
            this.loaders[e4] && delete this.loaders[e4];
          }, t2.destroyInternalLoaders = function() {
            for (var e4 in this.loaders) {
              var t3 = this.loaders[e4];
              t3 && t3.destroy(), this.resetInternalLoader(e4);
            }
          }, t2.destroy = function() {
            this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
          }, t2.onManifestLoading = function(e4, t3) {
            var r2 = t3.url;
            this.variableList = null, this.load({ id: null, level: 0, responseType: "text", type: Xt.MANIFEST, url: r2, deliveryDirectives: null });
          }, t2.onLevelLoading = function(e4, t3) {
            var r2 = t3.id, n2 = t3.level, i2 = t3.pathwayId, a2 = t3.url, s2 = t3.deliveryDirectives;
            this.load({ id: r2, level: n2, pathwayId: i2, responseType: "text", type: Xt.LEVEL, url: a2, deliveryDirectives: s2 });
          }, t2.onAudioTrackLoading = function(e4, t3) {
            var r2 = t3.id, n2 = t3.groupId, i2 = t3.url, a2 = t3.deliveryDirectives;
            this.load({ id: r2, groupId: n2, level: null, responseType: "text", type: Xt.AUDIO_TRACK, url: i2, deliveryDirectives: a2 });
          }, t2.onSubtitleTrackLoading = function(e4, t3) {
            var r2 = t3.id, n2 = t3.groupId, i2 = t3.url, a2 = t3.deliveryDirectives;
            this.load({ id: r2, groupId: n2, level: null, responseType: "text", type: Xt.SUBTITLE_TRACK, url: i2, deliveryDirectives: a2 });
          }, t2.load = function(e4) {
            var t3, r2, n2, i2 = this, a2 = this.hls.config, s2 = this.getInternalLoader(e4);
            if (s2) {
              var o2 = s2.context;
              if (o2 && o2.url === e4.url && o2.level === e4.level) return void F.trace("[playlist-loader]: playlist request ongoing");
              F.log("[playlist-loader]: aborting previous loader for type: " + e4.type), s2.abort();
            }
            if (r2 = e4.type === Xt.MANIFEST ? a2.manifestLoadPolicy.default : u({}, a2.playlistLoadPolicy.default, { timeoutRetry: null, errorRetry: null }), s2 = this.createInternalLoader(e4), k(null == (t3 = e4.deliveryDirectives) ? void 0 : t3.part) && (e4.type === Xt.LEVEL && null !== e4.level ? n2 = this.hls.levels[e4.level].details : e4.type === Xt.AUDIO_TRACK && null !== e4.id ? n2 = this.hls.audioTracks[e4.id].details : e4.type === Xt.SUBTITLE_TRACK && null !== e4.id && (n2 = this.hls.subtitleTracks[e4.id].details), n2)) {
              var l2 = n2.partTarget, c2 = n2.targetduration;
              if (l2 && c2) {
                var d2 = 1e3 * Math.max(3 * l2, 0.8 * c2);
                r2 = u({}, r2, { maxTimeToFirstByteMs: Math.min(d2, r2.maxTimeToFirstByteMs), maxLoadTimeMs: Math.min(d2, r2.maxTimeToFirstByteMs) });
              }
            }
            var h2 = r2.errorRetry || r2.timeoutRetry || {}, f2 = { loadPolicy: r2, timeout: r2.maxLoadTimeMs, maxRetry: h2.maxNumRetry || 0, retryDelay: h2.retryDelayMs || 0, maxRetryDelay: h2.maxRetryDelayMs || 0 }, g2 = { onSuccess: function(e5, t4, r3, n3) {
              var a3 = i2.getInternalLoader(r3);
              i2.resetInternalLoader(r3.type);
              var s3 = e5.data;
              0 === s3.indexOf("#EXTM3U") ? (t4.parsing.start = performance.now(), Gt.isMediaPlaylist(s3) ? i2.handleTrackOrLevelPlaylist(e5, t4, r3, n3 || null, a3) : i2.handleMasterPlaylist(e5, t4, r3, n3)) : i2.handleManifestParsingError(e5, r3, new Error("no EXTM3U delimiter"), n3 || null, t4);
            }, onError: function(e5, t4, r3, n3) {
              i2.handleNetworkError(t4, r3, false, e5, n3);
            }, onTimeout: function(e5, t4, r3) {
              i2.handleNetworkError(t4, r3, true, void 0, e5);
            } };
            s2.load(e4, f2, g2);
          }, t2.handleMasterPlaylist = function(e4, t3, r2, n2) {
            var i2 = this.hls, a2 = e4.data, s2 = Qt(e4, r2), o2 = Gt.parseMasterPlaylist(a2, s2);
            if (o2.playlistParsingError) this.handleManifestParsingError(e4, r2, o2.playlistParsingError, n2, t3);
            else {
              var l2 = o2.contentSteering, u2 = o2.levels, c2 = o2.sessionData, d2 = o2.sessionKeys, h2 = o2.startTimeOffset, f2 = o2.variableList;
              this.variableList = f2;
              var g2 = Gt.parseMasterPlaylistMedia(a2, s2, o2), m2 = g2.AUDIO, p2 = void 0 === m2 ? [] : m2, v2 = g2.SUBTITLES, y2 = g2["CLOSED-CAPTIONS"];
              p2.length && (p2.some((function(e5) {
                return !e5.url;
              })) || !u2[0].audioCodec || u2[0].attrs.AUDIO || (F.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), p2.unshift({ type: "main", name: "main", groupId: "main", default: false, autoselect: false, forced: false, id: -1, attrs: new B({}), bitrate: 0, url: "" }))), i2.trigger(I.MANIFEST_LOADED, { levels: u2, audioTracks: p2, subtitles: v2, captions: y2, contentSteering: l2, url: s2, stats: t3, networkDetails: n2, sessionData: c2, sessionKeys: d2, startTimeOffset: h2, variableList: f2 });
            }
          }, t2.handleTrackOrLevelPlaylist = function(e4, t3, r2, n2, i2) {
            var a2 = this.hls, s2 = r2.id, o2 = r2.level, l2 = r2.type, u2 = Qt(e4, r2), c2 = 0, d2 = k(o2) ? o2 : k(s2) ? s2 : 0, h2 = Jt(r2), f2 = Gt.parseLevelPlaylist(e4.data, u2, d2, h2, c2, this.variableList);
            if (l2 === Xt.MANIFEST) {
              var g2 = { attrs: new B({}), bitrate: 0, details: f2, name: "", url: u2 };
              a2.trigger(I.MANIFEST_LOADED, { levels: [g2], audioTracks: [], url: u2, stats: t3, networkDetails: n2, sessionData: null, sessionKeys: null, contentSteering: null, startTimeOffset: null, variableList: null });
            }
            t3.parsing.end = performance.now(), r2.levelDetails = f2, this.handlePlaylistLoaded(f2, e4, t3, r2, n2, i2);
          }, t2.handleManifestParsingError = function(e4, t3, r2, n2, i2) {
            this.hls.trigger(I.ERROR, { type: w.NETWORK_ERROR, details: D.MANIFEST_PARSING_ERROR, fatal: t3.type === Xt.MANIFEST, url: e4.url, err: r2, error: r2, reason: r2.message, response: e4, context: t3, networkDetails: n2, stats: i2 });
          }, t2.handleNetworkError = function(e4, t3, r2, i2, a2) {
            void 0 === r2 && (r2 = false);
            var s2 = "A network " + (r2 ? "timeout" : "error" + (i2 ? " (status " + i2.code + ")" : "")) + " occurred while loading " + e4.type;
            e4.type === Xt.LEVEL ? s2 += ": " + e4.level + " id: " + e4.id : e4.type !== Xt.AUDIO_TRACK && e4.type !== Xt.SUBTITLE_TRACK || (s2 += " id: " + e4.id + ' group-id: "' + e4.groupId + '"');
            var o2 = new Error(s2);
            F.warn("[playlist-loader]: " + s2);
            var l2 = D.UNKNOWN, u2 = false, c2 = this.getInternalLoader(e4);
            switch (e4.type) {
              case Xt.MANIFEST:
                l2 = r2 ? D.MANIFEST_LOAD_TIMEOUT : D.MANIFEST_LOAD_ERROR, u2 = true;
                break;
              case Xt.LEVEL:
                l2 = r2 ? D.LEVEL_LOAD_TIMEOUT : D.LEVEL_LOAD_ERROR, u2 = false;
                break;
              case Xt.AUDIO_TRACK:
                l2 = r2 ? D.AUDIO_TRACK_LOAD_TIMEOUT : D.AUDIO_TRACK_LOAD_ERROR, u2 = false;
                break;
              case Xt.SUBTITLE_TRACK:
                l2 = r2 ? D.SUBTITLE_TRACK_LOAD_TIMEOUT : D.SUBTITLE_LOAD_ERROR, u2 = false;
            }
            c2 && this.resetInternalLoader(e4.type);
            var d2 = { type: w.NETWORK_ERROR, details: l2, fatal: u2, url: e4.url, loader: c2, context: e4, error: o2, networkDetails: t3, stats: a2 };
            if (i2) {
              var h2 = (null == t3 ? void 0 : t3.url) || e4.url;
              d2.response = n({ url: h2, data: void 0 }, i2);
            }
            this.hls.trigger(I.ERROR, d2);
          }, t2.handlePlaylistLoaded = function(e4, t3, r2, n2, i2, a2) {
            var s2 = this.hls, o2 = n2.type, l2 = n2.level, u2 = n2.id, c2 = n2.groupId, d2 = n2.deliveryDirectives, h2 = Qt(t3, n2), f2 = Jt(n2), g2 = "number" == typeof n2.level && f2 === $t.MAIN ? l2 : void 0;
            if (e4.fragments.length) {
              e4.targetduration || (e4.playlistParsingError = new Error("Missing Target Duration"));
              var m2 = e4.playlistParsingError;
              if (m2) s2.trigger(I.ERROR, { type: w.NETWORK_ERROR, details: D.LEVEL_PARSING_ERROR, fatal: false, url: h2, error: m2, reason: m2.message, response: t3, context: n2, level: g2, parent: f2, networkDetails: i2, stats: r2 });
              else switch (e4.live && a2 && (a2.getCacheAge && (e4.ageHeader = a2.getCacheAge() || 0), a2.getCacheAge && !isNaN(e4.ageHeader) || (e4.ageHeader = 0)), o2) {
                case Xt.MANIFEST:
                case Xt.LEVEL:
                  s2.trigger(I.LEVEL_LOADED, { details: e4, level: g2 || 0, id: u2 || 0, stats: r2, networkDetails: i2, deliveryDirectives: d2 });
                  break;
                case Xt.AUDIO_TRACK:
                  s2.trigger(I.AUDIO_TRACK_LOADED, { details: e4, id: u2 || 0, groupId: c2 || "", stats: r2, networkDetails: i2, deliveryDirectives: d2 });
                  break;
                case Xt.SUBTITLE_TRACK:
                  s2.trigger(I.SUBTITLE_TRACK_LOADED, { details: e4, id: u2 || 0, groupId: c2 || "", stats: r2, networkDetails: i2, deliveryDirectives: d2 });
              }
            } else {
              var p2 = new Error("No Segments found in Playlist");
              s2.trigger(I.ERROR, { type: w.NETWORK_ERROR, details: D.LEVEL_EMPTY_ERROR, fatal: false, url: h2, error: p2, reason: p2.message, response: t3, context: n2, level: g2, parent: f2, networkDetails: i2, stats: r2 });
            }
          }, e3;
        })();
        function er(e3, t2) {
          var r2;
          try {
            r2 = new Event("addtrack");
          } catch (e4) {
            (r2 = document.createEvent("Event")).initEvent("addtrack", false, false);
          }
          r2.track = e3, t2.dispatchEvent(r2);
        }
        function tr(e3, t2) {
          var r2 = e3.mode;
          if ("disabled" === r2 && (e3.mode = "hidden"), e3.cues && !e3.cues.getCueById(t2.id)) try {
            if (e3.addCue(t2), !e3.cues.getCueById(t2.id)) throw new Error("addCue is failed for: " + t2);
          } catch (r3) {
            F.debug("[texttrack-utils]: " + r3);
            try {
              var n2 = new self.TextTrackCue(t2.startTime, t2.endTime, t2.text);
              n2.id = t2.id, e3.addCue(n2);
            } catch (e4) {
              F.debug("[texttrack-utils]: Legacy TextTrackCue fallback failed: " + e4);
            }
          }
          "disabled" === r2 && (e3.mode = r2);
        }
        function rr(e3) {
          var t2 = e3.mode;
          if ("disabled" === t2 && (e3.mode = "hidden"), e3.cues) for (var r2 = e3.cues.length; r2--; ) e3.removeCue(e3.cues[r2]);
          "disabled" === t2 && (e3.mode = t2);
        }
        function nr(e3, t2, r2, n2) {
          var i2 = e3.mode;
          if ("disabled" === i2 && (e3.mode = "hidden"), e3.cues && e3.cues.length > 0) for (var a2 = ar(e3.cues, t2, r2), s2 = 0; s2 < a2.length; s2++) n2 && !n2(a2[s2]) || e3.removeCue(a2[s2]);
          "disabled" === i2 && (e3.mode = i2);
        }
        function ir(e3, t2) {
          if (t2 < e3[0].startTime) return 0;
          var r2 = e3.length - 1;
          if (t2 > e3[r2].endTime) return -1;
          for (var n2 = 0, i2 = r2; n2 <= i2; ) {
            var a2 = Math.floor((i2 + n2) / 2);
            if (t2 < e3[a2].startTime) i2 = a2 - 1;
            else {
              if (!(t2 > e3[a2].startTime && n2 < r2)) return a2;
              n2 = a2 + 1;
            }
          }
          return e3[n2].startTime - t2 < t2 - e3[i2].startTime ? n2 : i2;
        }
        function ar(e3, t2, r2) {
          var n2 = [], i2 = ir(e3, t2);
          if (i2 > -1) for (var a2 = i2, s2 = e3.length; a2 < s2; a2++) {
            var o2 = e3[a2];
            if (o2.startTime >= t2 && o2.endTime <= r2) n2.push(o2);
            else if (o2.startTime > r2) return n2;
          }
          return n2;
        }
        function sr(e3) {
          for (var t2 = [], r2 = 0; r2 < e3.length; r2++) {
            var n2 = e3[r2];
            "subtitles" !== n2.kind && "captions" !== n2.kind || !n2.label || t2.push(e3[r2]);
          }
          return t2;
        }
        var or = { audioId3: "org.id3", dateRange: "com.apple.quicktime.HLS", emsg: "https://aomedia.org/emsg/ID3" }, lr = 0.25;
        function ur() {
          if ("undefined" != typeof self) return self.VTTCue || self.TextTrackCue;
        }
        function cr(e3, t2, r2, i2, a2) {
          var s2 = new e3(t2, r2, "");
          try {
            s2.value = i2, a2 && (s2.type = a2);
          } catch (o2) {
            s2 = new e3(t2, r2, JSON.stringify(a2 ? n({ type: a2 }, i2) : i2));
          }
          return s2;
        }
        var dr = (function() {
          var e3 = ur();
          try {
            e3 && new e3(0, Number.POSITIVE_INFINITY, "");
          } catch (e4) {
            return Number.MAX_VALUE;
          }
          return Number.POSITIVE_INFINITY;
        })();
        function hr(e3, t2) {
          return e3.getTime() / 1e3 - t2;
        }
        function fr(e3) {
          return Uint8Array.from(e3.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer;
        }
        var gr = (function() {
          function e3(e4) {
            this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = e4, this._registerListeners();
          }
          var t2 = e3.prototype;
          return t2.destroy = function() {
            this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null;
          }, t2._registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.MEDIA_ATTACHED, this.onMediaAttached, this), e4.on(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.on(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.on(I.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e4.on(I.BUFFER_FLUSHING, this.onBufferFlushing, this), e4.on(I.LEVEL_UPDATED, this.onLevelUpdated, this);
          }, t2._unregisterListeners = function() {
            var e4 = this.hls;
            e4.off(I.MEDIA_ATTACHED, this.onMediaAttached, this), e4.off(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.off(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.off(I.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e4.off(I.BUFFER_FLUSHING, this.onBufferFlushing, this), e4.off(I.LEVEL_UPDATED, this.onLevelUpdated, this);
          }, t2.onMediaAttached = function(e4, t3) {
            this.media = t3.media;
          }, t2.onMediaDetaching = function() {
            this.id3Track && (rr(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {});
          }, t2.onManifestLoading = function() {
            this.dateRangeCuesAppended = {};
          }, t2.createTrack = function(e4) {
            var t3 = this.getID3Track(e4.textTracks);
            return t3.mode = "hidden", t3;
          }, t2.getID3Track = function(e4) {
            if (this.media) {
              for (var t3 = 0; t3 < e4.length; t3++) {
                var r2 = e4[t3];
                if ("metadata" === r2.kind && "id3" === r2.label) return er(r2, this.media), r2;
              }
              return this.media.addTextTrack("metadata", "id3");
            }
          }, t2.onFragParsingMetadata = function(e4, t3) {
            if (this.media) {
              var r2 = this.hls.config, n2 = r2.enableEmsgMetadataCues, i2 = r2.enableID3MetadataCues;
              if (n2 || i2) {
                var a2 = t3.samples;
                this.id3Track || (this.id3Track = this.createTrack(this.media));
                var s2 = ur();
                if (s2) for (var o2 = 0; o2 < a2.length; o2++) {
                  var l2 = a2[o2].type;
                  if ((l2 !== or.emsg || n2) && i2) {
                    var u2 = Ae(a2[o2].data);
                    if (u2) {
                      var c2 = a2[o2].pts, d2 = c2 + a2[o2].duration;
                      d2 > dr && (d2 = dr), d2 - c2 <= 0 && (d2 = c2 + lr);
                      for (var h2 = 0; h2 < u2.length; h2++) {
                        var f2 = u2[h2];
                        if (!Ee(f2)) {
                          this.updateId3CueEnds(c2, l2);
                          var g2 = cr(s2, c2, d2, f2, l2);
                          g2 && this.id3Track.addCue(g2);
                        }
                      }
                    }
                  }
                }
              }
            }
          }, t2.updateId3CueEnds = function(e4, t3) {
            var r2, n2 = null == (r2 = this.id3Track) ? void 0 : r2.cues;
            if (n2) for (var i2 = n2.length; i2--; ) {
              var a2 = n2[i2];
              a2.type === t3 && a2.startTime < e4 && a2.endTime === dr && (a2.endTime = e4);
            }
          }, t2.onBufferFlushing = function(e4, t3) {
            var r2 = t3.startOffset, n2 = t3.endOffset, i2 = t3.type, a2 = this.id3Track, s2 = this.hls;
            if (s2) {
              var o2 = s2.config, l2 = o2.enableEmsgMetadataCues, u2 = o2.enableID3MetadataCues;
              a2 && (l2 || u2) && nr(a2, r2, n2, "audio" === i2 ? function(e5) {
                return e5.type === or.audioId3 && u2;
              } : "video" === i2 ? function(e5) {
                return e5.type === or.emsg && l2;
              } : function(e5) {
                return e5.type === or.audioId3 && u2 || e5.type === or.emsg && l2;
              });
            }
          }, t2.onLevelUpdated = function(e4, t3) {
            var r2 = this, n2 = t3.details;
            if (this.media && n2.hasProgramDateTime && this.hls.config.enableDateRangeMetadataCues) {
              var i2 = this.dateRangeCuesAppended, a2 = this.id3Track, s2 = n2.dateRanges, o2 = Object.keys(s2);
              if (a2) for (var l2 = Object.keys(i2).filter((function(e5) {
                return !o2.includes(e5);
              })), u2 = function() {
                var e5 = l2[c2];
                Object.keys(i2[e5].cues).forEach((function(t4) {
                  a2.removeCue(i2[e5].cues[t4]);
                })), delete i2[e5];
              }, c2 = l2.length; c2--; ) u2();
              var d2 = n2.fragments[n2.fragments.length - 1];
              if (0 !== o2.length && k(null == d2 ? void 0 : d2.programDateTime)) {
                this.id3Track || (this.id3Track = this.createTrack(this.media));
                for (var h2 = d2.programDateTime / 1e3 - d2.start, f2 = ur(), g2 = function() {
                  var e5 = o2[m2], t4 = s2[e5], n3 = hr(t4.startDate, h2), a3 = i2[e5], l3 = (null == a3 ? void 0 : a3.cues) || {}, u3 = (null == a3 ? void 0 : a3.durationKnown) || false, c3 = dr, d3 = t4.endDate;
                  if (d3) c3 = hr(d3, h2), u3 = true;
                  else if (t4.endOnNext && !u3) {
                    var g3 = o2.reduce((function(e6, r3) {
                      if (r3 !== t4.id) {
                        var n4 = s2[r3];
                        if (n4.class === t4.class && n4.startDate > t4.startDate && (!e6 || t4.startDate < e6.startDate)) return n4;
                      }
                      return e6;
                    }), null);
                    g3 && (c3 = hr(g3.startDate, h2), u3 = true);
                  }
                  for (var p2 = Object.keys(t4.attr), v2 = 0; v2 < p2.length; v2++) {
                    var y2 = p2[v2];
                    if (G(y2)) {
                      var T2 = l3[y2];
                      if (T2) u3 && !a3.durationKnown && (T2.endTime = c3);
                      else if (f2) {
                        var b2 = t4.attr[y2];
                        V(y2) && (b2 = fr(b2));
                        var E2 = cr(f2, n3, c3, { key: y2, data: b2 }, or.dateRange);
                        E2 && (E2.id = e5, r2.id3Track.addCue(E2), l3[y2] = E2);
                      }
                    }
                  }
                  i2[e5] = { cues: l3, dateRange: t4, durationKnown: u3 };
                }, m2 = 0; m2 < o2.length; m2++) g2();
              }
            }
          }, e3;
        })(), mr = (function() {
          function e3(e4) {
            var t3 = this;
            this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function() {
              return t3.timeupdate();
            }, this.hls = e4, this.config = e4.config, this.registerListeners();
          }
          var t2 = e3.prototype;
          return t2.destroy = function() {
            this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
          }, t2.registerListeners = function() {
            this.hls.on(I.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(I.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(I.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(I.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(I.ERROR, this.onError, this);
          }, t2.unregisterListeners = function() {
            this.hls.off(I.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(I.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(I.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(I.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(I.ERROR, this.onError, this);
          }, t2.onMediaAttached = function(e4, t3) {
            this.media = t3.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
          }, t2.onMediaDetaching = function() {
            this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
          }, t2.onManifestLoading = function() {
            this.levelDetails = null, this._latency = null, this.stallCount = 0;
          }, t2.onLevelUpdated = function(e4, t3) {
            var r2 = t3.details;
            this.levelDetails = r2, r2.advanced && this.timeupdate(), !r2.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
          }, t2.onError = function(e4, t3) {
            var r2;
            t3.details === D.BUFFER_STALLED_ERROR && (this.stallCount++, null != (r2 = this.levelDetails) && r2.live && F.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
          }, t2.timeupdate = function() {
            var e4 = this.media, t3 = this.levelDetails;
            if (e4 && t3) {
              this.currentTime = e4.currentTime;
              var r2 = this.computeLatency();
              if (null !== r2) {
                this._latency = r2;
                var n2 = this.config, i2 = n2.lowLatencyMode, a2 = n2.maxLiveSyncPlaybackRate;
                if (i2 && 1 !== a2 && t3.live) {
                  var s2 = this.targetLatency;
                  if (null !== s2) {
                    var o2 = r2 - s2;
                    if (o2 < Math.min(this.maxLatency, s2 + t3.targetduration) && o2 > 0.05 && this.forwardBufferLength > 1) {
                      var l2 = Math.min(2, Math.max(1, a2)), u2 = Math.round(2 / (1 + Math.exp(-0.75 * o2 - this.edgeStalled)) * 20) / 20;
                      e4.playbackRate = Math.min(l2, Math.max(1, u2));
                    } else 1 !== e4.playbackRate && 0 !== e4.playbackRate && (e4.playbackRate = 1);
                  }
                }
              }
            }
          }, t2.estimateLiveEdge = function() {
            var e4 = this.levelDetails;
            return null === e4 ? null : e4.edge + e4.age;
          }, t2.computeLatency = function() {
            var e4 = this.estimateLiveEdge();
            return null === e4 ? null : e4 - this.currentTime;
          }, o(e3, [{ key: "latency", get: function() {
            return this._latency || 0;
          } }, { key: "maxLatency", get: function() {
            var e4 = this.config, t3 = this.levelDetails;
            return void 0 !== e4.liveMaxLatencyDuration ? e4.liveMaxLatencyDuration : t3 ? e4.liveMaxLatencyDurationCount * t3.targetduration : 0;
          } }, { key: "targetLatency", get: function() {
            var e4 = this.levelDetails;
            if (null === e4) return null;
            var t3 = e4.holdBack, r2 = e4.partHoldBack, n2 = e4.targetduration, i2 = this.config, a2 = i2.liveSyncDuration, s2 = i2.liveSyncDurationCount, o2 = i2.lowLatencyMode, l2 = this.hls.userConfig, u2 = o2 && r2 || t3;
            (l2.liveSyncDuration || l2.liveSyncDurationCount || 0 === u2) && (u2 = void 0 !== a2 ? a2 : s2 * n2);
            var c2 = n2, d2 = 1;
            return u2 + Math.min(this.stallCount * d2, c2);
          } }, { key: "liveSyncPosition", get: function() {
            var e4 = this.estimateLiveEdge(), t3 = this.targetLatency, r2 = this.levelDetails;
            if (null === e4 || null === t3 || null === r2) return null;
            var n2 = r2.edge, i2 = e4 - t3 - this.edgeStalled, a2 = n2 - r2.totalduration, s2 = n2 - (this.config.lowLatencyMode && r2.partTarget || r2.targetduration);
            return Math.min(Math.max(a2, i2), s2);
          } }, { key: "drift", get: function() {
            var e4 = this.levelDetails;
            return null === e4 ? 1 : e4.drift;
          } }, { key: "edgeStalled", get: function() {
            var e4 = this.levelDetails;
            if (null === e4) return 0;
            var t3 = 3 * (this.config.lowLatencyMode && e4.partTarget || e4.targetduration);
            return Math.max(e4.age - t3, 0);
          } }, { key: "forwardBufferLength", get: function() {
            var e4 = this.media, t3 = this.levelDetails;
            if (!e4 || !t3) return 0;
            var r2 = e4.buffered.length;
            return (r2 ? e4.buffered.end(r2 - 1) : t3.edge) - this.currentTime;
          } }]), e3;
        })(), pr = ["NONE", "TYPE-0", "TYPE-1", null];
        function vr(e3) {
          return pr.indexOf(e3) > -1;
        }
        var yr = ["SDR", "PQ", "HLG"];
        function Tr(e3) {
          return !!e3 && yr.indexOf(e3) > -1;
        }
        var br = { No: "", Yes: "YES", v2: "v2" };
        function Er(e3, t2) {
          var r2 = e3.canSkipUntil, n2 = e3.canSkipDateRanges, i2 = e3.endSN;
          return r2 && (void 0 !== t2 ? t2 - i2 : 0) < r2 ? n2 ? br.v2 : br.Yes : br.No;
        }
        var Sr = (function() {
          function e3(e4, t2, r2) {
            this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e4, this.part = t2, this.skip = r2;
          }
          return e3.prototype.addDirectives = function(e4) {
            var t2 = new self.URL(e4);
            return void 0 !== this.msn && t2.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && t2.searchParams.set("_HLS_part", this.part.toString()), this.skip && t2.searchParams.set("_HLS_skip", this.skip), t2.href;
          }, e3;
        })(), Ar = (function() {
          function e3(e4) {
            this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [e4.url], this._attrs = [e4.attrs], this.bitrate = e4.bitrate, e4.details && (this.details = e4.details), this.id = e4.id || 0, this.name = e4.name, this.width = e4.width || 0, this.height = e4.height || 0, this.frameRate = e4.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = e4.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = e4.audioCodec, this.videoCodec = e4.videoCodec, this.codecSet = [e4.videoCodec, e4.audioCodec].filter((function(e5) {
              return !!e5;
            })).map((function(e5) {
              return e5.substring(0, 4);
            })).join(","), this.addGroupId("audio", e4.attrs.AUDIO), this.addGroupId("text", e4.attrs.SUBTITLES);
          }
          var t2 = e3.prototype;
          return t2.hasAudioGroup = function(e4) {
            return kr(this._audioGroups, e4);
          }, t2.hasSubtitleGroup = function(e4) {
            return kr(this._subtitleGroups, e4);
          }, t2.addGroupId = function(e4, t3) {
            if (t3) {
              if ("audio" === e4) {
                var r2 = this._audioGroups;
                r2 || (r2 = this._audioGroups = []), -1 === r2.indexOf(t3) && r2.push(t3);
              } else if ("text" === e4) {
                var n2 = this._subtitleGroups;
                n2 || (n2 = this._subtitleGroups = []), -1 === n2.indexOf(t3) && n2.push(t3);
              }
            }
          }, t2.addFallback = function() {
          }, o(e3, [{ key: "maxBitrate", get: function() {
            return Math.max(this.realBitrate, this.bitrate);
          } }, { key: "averageBitrate", get: function() {
            return this._avgBitrate || this.realBitrate || this.bitrate;
          } }, { key: "attrs", get: function() {
            return this._attrs[0];
          } }, { key: "codecs", get: function() {
            return this.attrs.CODECS || "";
          } }, { key: "pathwayId", get: function() {
            return this.attrs["PATHWAY-ID"] || ".";
          } }, { key: "videoRange", get: function() {
            return this.attrs["VIDEO-RANGE"] || "SDR";
          } }, { key: "score", get: function() {
            return this.attrs.optionalFloat("SCORE", 0);
          } }, { key: "uri", get: function() {
            return this.url[0] || "";
          } }, { key: "audioGroups", get: function() {
            return this._audioGroups;
          } }, { key: "subtitleGroups", get: function() {
            return this._subtitleGroups;
          } }, { key: "urlId", get: function() {
            return 0;
          }, set: function(e4) {
          } }, { key: "audioGroupIds", get: function() {
            return this.audioGroups ? [this.audioGroupId] : void 0;
          } }, { key: "textGroupIds", get: function() {
            return this.subtitleGroups ? [this.textGroupId] : void 0;
          } }, { key: "audioGroupId", get: function() {
            var e4;
            return null == (e4 = this.audioGroups) ? void 0 : e4[0];
          } }, { key: "textGroupId", get: function() {
            var e4;
            return null == (e4 = this.subtitleGroups) ? void 0 : e4[0];
          } }]), e3;
        })();
        function kr(e3, t2) {
          return !(!t2 || !e3) && -1 !== e3.indexOf(t2);
        }
        function Lr(e3, t2) {
          var r2 = t2.startPTS;
          if (k(r2)) {
            var n2, i2 = 0;
            t2.sn > e3.sn ? (i2 = r2 - e3.start, n2 = e3) : (i2 = e3.start - r2, n2 = t2), n2.duration !== i2 && (n2.duration = i2);
          } else t2.sn > e3.sn ? e3.cc === t2.cc && e3.minEndPTS ? t2.start = e3.start + (e3.minEndPTS - e3.start) : t2.start = e3.start + e3.duration : t2.start = Math.max(e3.start - t2.duration, 0);
        }
        function Rr(e3, t2, r2, n2, i2, a2) {
          n2 - r2 <= 0 && (F.warn("Fragment should have a positive duration", t2), n2 = r2 + t2.duration, a2 = i2 + t2.duration);
          var s2 = r2, o2 = n2, l2 = t2.startPTS, u2 = t2.endPTS;
          if (k(l2)) {
            var c2 = Math.abs(l2 - r2);
            k(t2.deltaPTS) ? t2.deltaPTS = Math.max(c2, t2.deltaPTS) : t2.deltaPTS = c2, s2 = Math.max(r2, l2), r2 = Math.min(r2, l2), i2 = Math.min(i2, t2.startDTS), o2 = Math.min(n2, u2), n2 = Math.max(n2, u2), a2 = Math.max(a2, t2.endDTS);
          }
          var d2 = r2 - t2.start;
          0 !== t2.start && (t2.start = r2), t2.duration = n2 - t2.start, t2.startPTS = r2, t2.maxStartPTS = s2, t2.startDTS = i2, t2.endPTS = n2, t2.minEndPTS = o2, t2.endDTS = a2;
          var h2, f2 = t2.sn;
          if (!e3 || f2 < e3.startSN || f2 > e3.endSN) return 0;
          var g2 = f2 - e3.startSN, m2 = e3.fragments;
          for (m2[g2] = t2, h2 = g2; h2 > 0; h2--) Lr(m2[h2], m2[h2 - 1]);
          for (h2 = g2; h2 < m2.length - 1; h2++) Lr(m2[h2], m2[h2 + 1]);
          return e3.fragmentHint && Lr(m2[m2.length - 1], e3.fragmentHint), e3.PTSKnown = e3.alignedSliding = true, d2;
        }
        function Ir(e3, t2) {
          for (var r2 = null, n2 = e3.fragments, i2 = n2.length - 1; i2 >= 0; i2--) {
            var a2 = n2[i2].initSegment;
            if (a2) {
              r2 = a2;
              break;
            }
          }
          e3.fragmentHint && delete e3.fragmentHint.endPTS;
          var s2, o2 = 0;
          if (Cr(e3, t2, (function(e4, n3) {
            e4.relurl && (o2 = e4.cc - n3.cc), k(e4.startPTS) && k(e4.endPTS) && (n3.start = n3.startPTS = e4.startPTS, n3.startDTS = e4.startDTS, n3.maxStartPTS = e4.maxStartPTS, n3.endPTS = e4.endPTS, n3.endDTS = e4.endDTS, n3.minEndPTS = e4.minEndPTS, n3.duration = e4.endPTS - e4.startPTS, n3.duration && (s2 = n3), t2.PTSKnown = t2.alignedSliding = true), n3.elementaryStreams = e4.elementaryStreams, n3.loader = e4.loader, n3.stats = e4.stats, e4.initSegment && (n3.initSegment = e4.initSegment, r2 = e4.initSegment);
          })), r2 && (t2.fragmentHint ? t2.fragments.concat(t2.fragmentHint) : t2.fragments).forEach((function(e4) {
            var t3;
            !e4 || e4.initSegment && e4.initSegment.relurl !== (null == (t3 = r2) ? void 0 : t3.relurl) || (e4.initSegment = r2);
          })), t2.skippedSegments) if (t2.deltaUpdateFailed = t2.fragments.some((function(e4) {
            return !e4;
          })), t2.deltaUpdateFailed) {
            F.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
            for (var l2 = t2.skippedSegments; l2--; ) t2.fragments.shift();
            t2.startSN = t2.fragments[0].sn, t2.startCC = t2.fragments[0].cc;
          } else t2.canSkipDateRanges && (t2.dateRanges = wr(e3.dateRanges, t2.dateRanges, t2.recentlyRemovedDateranges));
          var u2 = t2.fragments;
          if (o2) {
            F.warn("discontinuity sliding from playlist, take drift into account");
            for (var c2 = 0; c2 < u2.length; c2++) u2[c2].cc += o2;
          }
          t2.skippedSegments && (t2.startCC = t2.fragments[0].cc), Dr(e3.partList, t2.partList, (function(e4, t3) {
            t3.elementaryStreams = e4.elementaryStreams, t3.stats = e4.stats;
          })), s2 ? Rr(t2, s2, s2.startPTS, s2.endPTS, s2.startDTS, s2.endDTS) : xr(e3, t2), u2.length && (t2.totalduration = t2.edge - u2[0].start), t2.driftStartTime = e3.driftStartTime, t2.driftStart = e3.driftStart;
          var d2 = t2.advancedDateTime;
          if (t2.advanced && d2) {
            var h2 = t2.edge;
            t2.driftStart || (t2.driftStartTime = d2, t2.driftStart = h2), t2.driftEndTime = d2, t2.driftEnd = h2;
          } else t2.driftEndTime = e3.driftEndTime, t2.driftEnd = e3.driftEnd, t2.advancedDateTime = e3.advancedDateTime;
        }
        function wr(e3, t2, r2) {
          var n2 = u({}, e3);
          return r2 && r2.forEach((function(e4) {
            delete n2[e4];
          })), Object.keys(t2).forEach((function(e4) {
            var r3 = new H(t2[e4].attr, n2[e4]);
            r3.isValid ? n2[e4] = r3 : F.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "' + JSON.stringify(t2[e4].attr) + '"');
          })), n2;
        }
        function Dr(e3, t2, r2) {
          if (e3 && t2) for (var n2 = 0, i2 = 0, a2 = e3.length; i2 <= a2; i2++) {
            var s2 = e3[i2], o2 = t2[i2 + n2];
            s2 && o2 && s2.index === o2.index && s2.fragment.sn === o2.fragment.sn ? r2(s2, o2) : n2--;
          }
        }
        function Cr(e3, t2, r2) {
          for (var n2 = t2.skippedSegments, i2 = Math.max(e3.startSN, t2.startSN) - t2.startSN, a2 = (e3.fragmentHint ? 1 : 0) + (n2 ? t2.endSN : Math.min(e3.endSN, t2.endSN)) - t2.startSN, s2 = t2.startSN - e3.startSN, o2 = t2.fragmentHint ? t2.fragments.concat(t2.fragmentHint) : t2.fragments, l2 = e3.fragmentHint ? e3.fragments.concat(e3.fragmentHint) : e3.fragments, u2 = i2; u2 <= a2; u2++) {
            var c2 = l2[s2 + u2], d2 = o2[u2];
            n2 && !d2 && u2 < n2 && (d2 = t2.fragments[u2] = c2), c2 && d2 && r2(c2, d2);
          }
        }
        function xr(e3, t2) {
          var r2 = t2.startSN + t2.skippedSegments - e3.startSN, n2 = e3.fragments;
          r2 < 0 || r2 >= n2.length || _r(t2, n2[r2].start);
        }
        function _r(e3, t2) {
          if (t2) {
            for (var r2 = e3.fragments, n2 = e3.skippedSegments; n2 < r2.length; n2++) r2[n2].start += t2;
            e3.fragmentHint && (e3.fragmentHint.start += t2);
          }
        }
        function Or(e3, t2) {
          void 0 === t2 && (t2 = 1 / 0);
          var r2 = 1e3 * e3.targetduration;
          if (e3.updated) {
            var n2 = e3.fragments, i2 = 4;
            if (n2.length && r2 * i2 > t2) {
              var a2 = 1e3 * n2[n2.length - 1].duration;
              a2 < r2 && (r2 = a2);
            }
          } else r2 /= 2;
          return Math.round(r2);
        }
        function Pr(e3, t2, r2) {
          if (null == e3 || !e3.details) return null;
          var n2 = e3.details, i2 = n2.fragments[t2 - n2.startSN];
          return i2 || ((i2 = n2.fragmentHint) && i2.sn === t2 ? i2 : t2 < n2.startSN && r2 && r2.sn === t2 ? r2 : null);
        }
        function Mr(e3, t2, r2) {
          var n2;
          return null != e3 && e3.details ? Fr(null == (n2 = e3.details) ? void 0 : n2.partList, t2, r2) : null;
        }
        function Fr(e3, t2, r2) {
          if (e3) for (var n2 = e3.length; n2--; ) {
            var i2 = e3[n2];
            if (i2.index === r2 && i2.fragment.sn === t2) return i2;
          }
          return null;
        }
        function Nr(e3) {
          e3.forEach((function(e4, t2) {
            var r2 = e4.details;
            null != r2 && r2.fragments && r2.fragments.forEach((function(e5) {
              e5.level = t2;
            }));
          }));
        }
        function Ur(e3) {
          switch (e3.details) {
            case D.FRAG_LOAD_TIMEOUT:
            case D.KEY_LOAD_TIMEOUT:
            case D.LEVEL_LOAD_TIMEOUT:
            case D.MANIFEST_LOAD_TIMEOUT:
              return true;
          }
          return false;
        }
        function Br(e3, t2) {
          var r2 = Ur(t2);
          return e3.default[(r2 ? "timeout" : "error") + "Retry"];
        }
        function Gr(e3, t2) {
          var r2 = "linear" === e3.backoff ? 1 : Math.pow(2, t2);
          return Math.min(r2 * e3.retryDelayMs, e3.maxRetryDelayMs);
        }
        function Vr(e3) {
          return n(n({}, e3), { errorRetry: null, timeoutRetry: null });
        }
        function Hr(e3, t2, r2, n2) {
          if (!e3) return false;
          var i2 = null == n2 ? void 0 : n2.code, a2 = t2 < e3.maxNumRetry && (Kr(i2) || !!r2);
          return e3.shouldRetry ? e3.shouldRetry(e3, t2, r2, n2, a2) : a2;
        }
        function Kr(e3) {
          return 0 === e3 && false === navigator.onLine || !!e3 && (e3 < 400 || e3 > 499);
        }
        var jr = { search: function(e3, t2) {
          for (var r2 = 0, n2 = e3.length - 1, i2 = null, a2 = null; r2 <= n2; ) {
            var s2 = t2(a2 = e3[i2 = (r2 + n2) / 2 | 0]);
            if (s2 > 0) r2 = i2 + 1;
            else {
              if (!(s2 < 0)) return a2;
              n2 = i2 - 1;
            }
          }
          return null;
        } };
        function Yr(e3, t2, r2) {
          if (null === t2 || !Array.isArray(e3) || !e3.length || !k(t2)) return null;
          if (t2 < (e3[0].programDateTime || 0)) return null;
          if (t2 >= (e3[e3.length - 1].endProgramDateTime || 0)) return null;
          r2 = r2 || 0;
          for (var n2 = 0; n2 < e3.length; ++n2) {
            var i2 = e3[n2];
            if (qr(t2, r2, i2)) return i2;
          }
          return null;
        }
        function Wr(e3, t2, r2, n2) {
          void 0 === r2 && (r2 = 0), void 0 === n2 && (n2 = 0);
          var i2 = null;
          if (e3) {
            i2 = t2[e3.sn - t2[0].sn + 1] || null;
            var a2 = e3.endDTS - r2;
            a2 > 0 && a2 < 15e-7 && (r2 += 15e-7);
          } else 0 === r2 && 0 === t2[0].start && (i2 = t2[0]);
          if (i2 && (!e3 || e3.level === i2.level) && 0 === zr(r2, n2, i2)) return i2;
          var s2 = jr.search(t2, zr.bind(null, r2, n2));
          return !s2 || s2 === e3 && i2 ? i2 : s2;
        }
        function zr(e3, t2, r2) {
          if (void 0 === e3 && (e3 = 0), void 0 === t2 && (t2 = 0), r2.start <= e3 && r2.start + r2.duration > e3) return 0;
          var n2 = Math.min(t2, r2.duration + (r2.deltaPTS ? r2.deltaPTS : 0));
          return r2.start + r2.duration - n2 <= e3 ? 1 : r2.start - n2 > e3 && r2.start ? -1 : 0;
        }
        function qr(e3, t2, r2) {
          var n2 = 1e3 * Math.min(t2, r2.duration + (r2.deltaPTS ? r2.deltaPTS : 0));
          return (r2.endProgramDateTime || 0) - n2 > e3;
        }
        function Xr(e3, t2) {
          return jr.search(e3, (function(e4) {
            return e4.cc < t2 ? 1 : e4.cc > t2 ? -1 : 0;
          }));
        }
        var $r = { DoNothing: 0, SendEndCallback: 1, SendAlternateToPenaltyBox: 2, RemoveAlternatePermanently: 3, InsertDiscontinuity: 4, RetryRequest: 5 }, Jr = { None: 0, MoveAllAlternatesMatchingHost: 1, MoveAllAlternatesMatchingHDCP: 2, SwitchToSDR: 4 }, Qr = (function() {
          function e3(e4) {
            this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = e4, this.log = F.log.bind(F, "[info]:"), this.warn = F.warn.bind(F, "[warning]:"), this.error = F.error.bind(F, "[error]:"), this.registerListeners();
          }
          var t2 = e3.prototype;
          return t2.registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.ERROR, this.onError, this), e4.on(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.on(I.LEVEL_UPDATED, this.onLevelUpdated, this);
          }, t2.unregisterListeners = function() {
            var e4 = this.hls;
            e4 && (e4.off(I.ERROR, this.onError, this), e4.off(I.ERROR, this.onErrorOut, this), e4.off(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.off(I.LEVEL_UPDATED, this.onLevelUpdated, this));
          }, t2.destroy = function() {
            this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {};
          }, t2.startLoad = function(e4) {
          }, t2.stopLoad = function() {
            this.playlistError = 0;
          }, t2.getVariantLevelIndex = function(e4) {
            return (null == e4 ? void 0 : e4.type) === $t.MAIN ? e4.level : this.hls.loadLevel;
          }, t2.onManifestLoading = function() {
            this.playlistError = 0, this.penalizedRenditions = {};
          }, t2.onLevelUpdated = function() {
            this.playlistError = 0;
          }, t2.onError = function(e4, t3) {
            var r2, n2;
            if (!t3.fatal) {
              var i2 = this.hls, a2 = t3.context;
              switch (t3.details) {
                case D.FRAG_LOAD_ERROR:
                case D.FRAG_LOAD_TIMEOUT:
                case D.KEY_LOAD_ERROR:
                case D.KEY_LOAD_TIMEOUT:
                  return void (t3.errorAction = this.getFragRetryOrSwitchAction(t3));
                case D.FRAG_PARSING_ERROR:
                  if (null != (r2 = t3.frag) && r2.gap) return void (t3.errorAction = { action: $r.DoNothing, flags: Jr.None });
                case D.FRAG_GAP:
                case D.FRAG_DECRYPT_ERROR:
                  return t3.errorAction = this.getFragRetryOrSwitchAction(t3), void (t3.errorAction.action = $r.SendAlternateToPenaltyBox);
                case D.LEVEL_EMPTY_ERROR:
                case D.LEVEL_PARSING_ERROR:
                  var s2, o2, l2 = t3.parent === $t.MAIN ? t3.level : i2.loadLevel;
                  return void (t3.details === D.LEVEL_EMPTY_ERROR && null != (s2 = t3.context) && null != (o2 = s2.levelDetails) && o2.live ? t3.errorAction = this.getPlaylistRetryOrSwitchAction(t3, l2) : (t3.levelRetry = false, t3.errorAction = this.getLevelSwitchAction(t3, l2)));
                case D.LEVEL_LOAD_ERROR:
                case D.LEVEL_LOAD_TIMEOUT:
                  return void ("number" == typeof (null == a2 ? void 0 : a2.level) && (t3.errorAction = this.getPlaylistRetryOrSwitchAction(t3, a2.level)));
                case D.AUDIO_TRACK_LOAD_ERROR:
                case D.AUDIO_TRACK_LOAD_TIMEOUT:
                case D.SUBTITLE_LOAD_ERROR:
                case D.SUBTITLE_TRACK_LOAD_TIMEOUT:
                  if (a2) {
                    var u2 = i2.levels[i2.loadLevel];
                    if (u2 && (a2.type === Xt.AUDIO_TRACK && u2.hasAudioGroup(a2.groupId) || a2.type === Xt.SUBTITLE_TRACK && u2.hasSubtitleGroup(a2.groupId))) return t3.errorAction = this.getPlaylistRetryOrSwitchAction(t3, i2.loadLevel), t3.errorAction.action = $r.SendAlternateToPenaltyBox, void (t3.errorAction.flags = Jr.MoveAllAlternatesMatchingHost);
                  }
                  return;
                case D.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
                  var c2 = i2.levels[i2.loadLevel], d2 = null == c2 ? void 0 : c2.attrs["HDCP-LEVEL"];
                  return void (d2 ? t3.errorAction = { action: $r.SendAlternateToPenaltyBox, flags: Jr.MoveAllAlternatesMatchingHDCP, hdcpLevel: d2 } : this.keySystemError(t3));
                case D.BUFFER_ADD_CODEC_ERROR:
                case D.REMUX_ALLOC_ERROR:
                case D.BUFFER_APPEND_ERROR:
                  return void (t3.errorAction = this.getLevelSwitchAction(t3, null != (n2 = t3.level) ? n2 : i2.loadLevel));
                case D.INTERNAL_EXCEPTION:
                case D.BUFFER_APPENDING_ERROR:
                case D.BUFFER_FULL_ERROR:
                case D.LEVEL_SWITCH_ERROR:
                case D.BUFFER_STALLED_ERROR:
                case D.BUFFER_SEEK_OVER_HOLE:
                case D.BUFFER_NUDGE_ON_STALL:
                  return void (t3.errorAction = { action: $r.DoNothing, flags: Jr.None });
              }
              t3.type === w.KEY_SYSTEM_ERROR && this.keySystemError(t3);
            }
          }, t2.keySystemError = function(e4) {
            var t3 = this.getVariantLevelIndex(e4.frag);
            e4.levelRetry = false, e4.errorAction = this.getLevelSwitchAction(e4, t3);
          }, t2.getPlaylistRetryOrSwitchAction = function(e4, t3) {
            var r2 = Br(this.hls.config.playlistLoadPolicy, e4), n2 = this.playlistError++;
            if (Hr(r2, n2, Ur(e4), e4.response)) return { action: $r.RetryRequest, flags: Jr.None, retryConfig: r2, retryCount: n2 };
            var i2 = this.getLevelSwitchAction(e4, t3);
            return r2 && (i2.retryConfig = r2, i2.retryCount = n2), i2;
          }, t2.getFragRetryOrSwitchAction = function(e4) {
            var t3 = this.hls, r2 = this.getVariantLevelIndex(e4.frag), n2 = t3.levels[r2], i2 = t3.config, a2 = i2.fragLoadPolicy, s2 = i2.keyLoadPolicy, o2 = Br(e4.details.startsWith("key") ? s2 : a2, e4), l2 = t3.levels.reduce((function(e5, t4) {
              return e5 + t4.fragmentError;
            }), 0);
            if (n2 && (e4.details !== D.FRAG_GAP && n2.fragmentError++, Hr(o2, l2, Ur(e4), e4.response))) return { action: $r.RetryRequest, flags: Jr.None, retryConfig: o2, retryCount: l2 };
            var u2 = this.getLevelSwitchAction(e4, r2);
            return o2 && (u2.retryConfig = o2, u2.retryCount = l2), u2;
          }, t2.getLevelSwitchAction = function(e4, t3) {
            var r2 = this.hls;
            null == t3 && (t3 = r2.loadLevel);
            var n2 = this.hls.levels[t3];
            if (n2) {
              var i2, a2, s2 = e4.details;
              n2.loadError++, s2 === D.BUFFER_APPEND_ERROR && n2.fragmentError++;
              var o2 = -1, l2 = r2.levels, u2 = r2.loadLevel, c2 = r2.minAutoLevel, d2 = r2.maxAutoLevel;
              r2.autoLevelEnabled || (r2.loadLevel = -1);
              for (var h2, f2 = null == (i2 = e4.frag) ? void 0 : i2.type, g2 = (f2 === $t.AUDIO && s2 === D.FRAG_PARSING_ERROR || "audio" === e4.sourceBufferName && (s2 === D.BUFFER_ADD_CODEC_ERROR || s2 === D.BUFFER_APPEND_ERROR)) && l2.some((function(e5) {
                var t4 = e5.audioCodec;
                return n2.audioCodec !== t4;
              })), m2 = "video" === e4.sourceBufferName && (s2 === D.BUFFER_ADD_CODEC_ERROR || s2 === D.BUFFER_APPEND_ERROR) && l2.some((function(e5) {
                var t4 = e5.codecSet, r3 = e5.audioCodec;
                return n2.codecSet !== t4 && n2.audioCodec === r3;
              })), p2 = null != (a2 = e4.context) ? a2 : {}, v2 = p2.type, y2 = p2.groupId, T2 = function() {
                var t4 = (b2 + u2) % l2.length;
                if (t4 !== u2 && t4 >= c2 && t4 <= d2 && 0 === l2[t4].loadError) {
                  var r3, i3, a3 = l2[t4];
                  if (s2 === D.FRAG_GAP && e4.frag) {
                    var h3 = l2[t4].details;
                    if (h3) {
                      var p3 = Wr(e4.frag, h3.fragments, e4.frag.start);
                      if (null != p3 && p3.gap) return 0;
                    }
                  } else {
                    if (v2 === Xt.AUDIO_TRACK && a3.hasAudioGroup(y2) || v2 === Xt.SUBTITLE_TRACK && a3.hasSubtitleGroup(y2)) return 0;
                    if (f2 === $t.AUDIO && null != (r3 = n2.audioGroups) && r3.some((function(e5) {
                      return a3.hasAudioGroup(e5);
                    })) || f2 === $t.SUBTITLE && null != (i3 = n2.subtitleGroups) && i3.some((function(e5) {
                      return a3.hasSubtitleGroup(e5);
                    })) || g2 && n2.audioCodec === a3.audioCodec || !g2 && n2.audioCodec !== a3.audioCodec || m2 && n2.codecSet === a3.codecSet) return 0;
                  }
                  return o2 = t4, 1;
                }
              }, b2 = l2.length; b2-- && (0 === (h2 = T2()) || 1 !== h2); ) ;
              if (o2 > -1 && r2.loadLevel !== o2) return e4.levelRetry = true, this.playlistError = 0, { action: $r.SendAlternateToPenaltyBox, flags: Jr.None, nextAutoLevel: o2 };
            }
            return { action: $r.SendAlternateToPenaltyBox, flags: Jr.MoveAllAlternatesMatchingHost };
          }, t2.onErrorOut = function(e4, t3) {
            var r2;
            switch (null == (r2 = t3.errorAction) ? void 0 : r2.action) {
              case $r.DoNothing:
                break;
              case $r.SendAlternateToPenaltyBox:
                this.sendAlternateToPenaltyBox(t3), t3.errorAction.resolved || t3.details === D.FRAG_GAP ? /MediaSource readyState: ended/.test(t3.error.message) && (this.warn('MediaSource ended after "' + t3.sourceBufferName + '" sourceBuffer append error. Attempting to recover from media error.'), this.hls.recoverMediaError()) : t3.fatal = true;
            }
            t3.fatal && this.hls.stopLoad();
          }, t2.sendAlternateToPenaltyBox = function(e4) {
            var t3 = this.hls, r2 = e4.errorAction;
            if (r2) {
              var n2 = r2.flags, i2 = r2.hdcpLevel, a2 = r2.nextAutoLevel;
              switch (n2) {
                case Jr.None:
                  this.switchLevel(e4, a2);
                  break;
                case Jr.MoveAllAlternatesMatchingHDCP:
                  i2 && (t3.maxHdcpLevel = pr[pr.indexOf(i2) - 1], r2.resolved = true), this.warn('Restricting playback to HDCP-LEVEL of "' + t3.maxHdcpLevel + '" or lower');
              }
              r2.resolved || this.switchLevel(e4, a2);
            }
          }, t2.switchLevel = function(e4, t3) {
            void 0 !== t3 && e4.errorAction && (this.warn("switching to level " + t3 + " after " + e4.details), this.hls.nextAutoLevel = t3, e4.errorAction.resolved = true, this.hls.nextLoadLevel = this.hls.nextAutoLevel);
          }, e3;
        })(), Zr = (function() {
          function e3(e4, t3) {
            this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = false, this.log = void 0, this.warn = void 0, this.log = F.log.bind(F, t3 + ":"), this.warn = F.warn.bind(F, t3 + ":"), this.hls = e4;
          }
          var t2 = e3.prototype;
          return t2.destroy = function() {
            this.clearTimer(), this.hls = this.log = this.warn = null;
          }, t2.clearTimer = function() {
            -1 !== this.timer && (self.clearTimeout(this.timer), this.timer = -1);
          }, t2.startLoad = function() {
            this.canLoad = true, this.requestScheduled = -1, this.loadPlaylist();
          }, t2.stopLoad = function() {
            this.canLoad = false, this.clearTimer();
          }, t2.switchParams = function(e4, t3) {
            var r2 = null == t3 ? void 0 : t3.renditionReports;
            if (r2) {
              for (var n2 = -1, i2 = 0; i2 < r2.length; i2++) {
                var a2 = r2[i2], s2 = void 0;
                try {
                  s2 = new self.URL(a2.URI, t3.url).href;
                } catch (e5) {
                  F.warn("Could not construct new URL for Rendition Report: " + e5), s2 = a2.URI || "";
                }
                if (s2 === e4) {
                  n2 = i2;
                  break;
                }
                s2 === e4.substring(0, s2.length) && (n2 = i2);
              }
              if (-1 !== n2) {
                var o2 = r2[n2], l2 = parseInt(o2["LAST-MSN"]) || (null == t3 ? void 0 : t3.lastPartSn), u2 = parseInt(o2["LAST-PART"]) || (null == t3 ? void 0 : t3.lastPartIndex);
                if (this.hls.config.lowLatencyMode) {
                  var c2 = Math.min(t3.age - t3.partTarget, t3.targetduration);
                  u2 >= 0 && c2 > t3.partTarget && (u2 += 1);
                }
                return new Sr(l2, u2 >= 0 ? u2 : void 0, br.No);
              }
            }
          }, t2.loadPlaylist = function(e4) {
            -1 === this.requestScheduled && (this.requestScheduled = self.performance.now());
          }, t2.shouldLoadPlaylist = function(e4) {
            return this.canLoad && !!e4 && !!e4.url && (!e4.details || e4.details.live);
          }, t2.shouldReloadPlaylist = function(e4) {
            return -1 === this.timer && -1 === this.requestScheduled && this.shouldLoadPlaylist(e4);
          }, t2.playlistLoaded = function(e4, t3, r2) {
            var n2 = this, i2 = t3.details, a2 = t3.stats, s2 = self.performance.now(), o2 = a2.loading.first ? Math.max(0, s2 - a2.loading.first) : 0;
            if (i2.advancedDateTime = Date.now() - o2, i2.live || null != r2 && r2.live) {
              if (i2.reloaded(r2), r2 && this.log("live playlist " + e4 + " " + (i2.advanced ? "REFRESHED " + i2.lastPartSn + "-" + i2.lastPartIndex : i2.updated ? "UPDATED" : "MISSED")), r2 && i2.fragments.length > 0 && Ir(r2, i2), !this.canLoad || !i2.live) return;
              var l2, u2 = void 0, c2 = void 0;
              if (i2.canBlockReload && i2.endSN && i2.advanced) {
                var d2 = this.hls.config.lowLatencyMode, h2 = i2.lastPartSn, f2 = i2.endSN, g2 = i2.lastPartIndex, m2 = h2 === f2;
                -1 !== g2 ? (u2 = m2 ? f2 + 1 : h2, c2 = m2 ? d2 ? 0 : g2 : g2 + 1) : u2 = f2 + 1;
                var p2 = i2.age, v2 = p2 + i2.ageHeader, y2 = Math.min(v2 - i2.partTarget, 1.5 * i2.targetduration);
                if (y2 > 0) {
                  if (r2 && y2 > r2.tuneInGoal) this.warn("CDN Tune-in goal increased from: " + r2.tuneInGoal + " to: " + y2 + " with playlist age: " + i2.age), y2 = 0;
                  else {
                    var T2 = Math.floor(y2 / i2.targetduration);
                    u2 += T2, void 0 !== c2 && (c2 += Math.round(y2 % i2.targetduration / i2.partTarget)), this.log("CDN Tune-in age: " + i2.ageHeader + "s last advanced " + p2.toFixed(2) + "s goal: " + y2 + " skip sn " + T2 + " to part " + c2);
                  }
                  i2.tuneInGoal = y2;
                }
                if (l2 = this.getDeliveryDirectives(i2, t3.deliveryDirectives, u2, c2), d2 || !m2) return void this.loadPlaylist(l2);
              } else (i2.canBlockReload || i2.canSkipUntil) && (l2 = this.getDeliveryDirectives(i2, t3.deliveryDirectives, u2, c2));
              var b2 = this.hls.mainForwardBufferInfo, E2 = b2 ? b2.end - b2.len : 0, S2 = Or(i2, 1e3 * (i2.edge - E2));
              i2.updated && s2 > this.requestScheduled + S2 && (this.requestScheduled = a2.loading.start), void 0 !== u2 && i2.canBlockReload ? this.requestScheduled = a2.loading.first + S2 - (1e3 * i2.partTarget || 1e3) : -1 === this.requestScheduled || this.requestScheduled + S2 < s2 ? this.requestScheduled = s2 : this.requestScheduled - s2 <= 0 && (this.requestScheduled += S2);
              var A2 = this.requestScheduled - s2;
              A2 = Math.max(0, A2), this.log("reload live playlist " + e4 + " in " + Math.round(A2) + " ms"), this.timer = self.setTimeout((function() {
                return n2.loadPlaylist(l2);
              }), A2);
            } else this.clearTimer();
          }, t2.getDeliveryDirectives = function(e4, t3, r2, n2) {
            var i2 = Er(e4, r2);
            return null != t3 && t3.skip && e4.deltaUpdateFailed && (r2 = t3.msn, n2 = t3.part, i2 = br.No), new Sr(r2, n2, i2);
          }, t2.checkRetry = function(e4) {
            var t3 = this, r2 = e4.details, n2 = Ur(e4), i2 = e4.errorAction, a2 = i2 || {}, s2 = a2.action, o2 = a2.retryCount, l2 = void 0 === o2 ? 0 : o2, u2 = a2.retryConfig, c2 = !!i2 && !!u2 && (s2 === $r.RetryRequest || !i2.resolved && s2 === $r.SendAlternateToPenaltyBox);
            if (c2) {
              var d2;
              if (this.requestScheduled = -1, l2 >= u2.maxNumRetry) return false;
              if (n2 && null != (d2 = e4.context) && d2.deliveryDirectives) this.warn("Retrying playlist loading " + (l2 + 1) + "/" + u2.maxNumRetry + ' after "' + r2 + '" without delivery-directives'), this.loadPlaylist();
              else {
                var h2 = Gr(u2, l2);
                this.timer = self.setTimeout((function() {
                  return t3.loadPlaylist();
                }), h2), this.warn("Retrying playlist loading " + (l2 + 1) + "/" + u2.maxNumRetry + ' after "' + r2 + '" in ' + h2 + "ms");
              }
              e4.levelRetry = true, i2.resolved = true;
            }
            return c2;
          }, e3;
        })(), en = (function() {
          function e3(e4, t3, r2) {
            void 0 === t3 && (t3 = 0), void 0 === r2 && (r2 = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e4, this.alpha_ = e4 ? Math.exp(Math.log(0.5) / e4) : 0, this.estimate_ = t3, this.totalWeight_ = r2;
          }
          var t2 = e3.prototype;
          return t2.sample = function(e4, t3) {
            var r2 = Math.pow(this.alpha_, e4);
            this.estimate_ = t3 * (1 - r2) + r2 * this.estimate_, this.totalWeight_ += e4;
          }, t2.getTotalWeight = function() {
            return this.totalWeight_;
          }, t2.getEstimate = function() {
            if (this.alpha_) {
              var e4 = 1 - Math.pow(this.alpha_, this.totalWeight_);
              if (e4) return this.estimate_ / e4;
            }
            return this.estimate_;
          }, e3;
        })(), tn = (function() {
          function e3(e4, t3, r2, n2) {
            void 0 === n2 && (n2 = 100), this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = r2, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new en(e4), this.fast_ = new en(t3), this.defaultTTFB_ = n2, this.ttfb_ = new en(e4);
          }
          var t2 = e3.prototype;
          return t2.update = function(e4, t3) {
            var r2 = this.slow_, n2 = this.fast_, i2 = this.ttfb_;
            r2.halfLife !== e4 && (this.slow_ = new en(e4, r2.getEstimate(), r2.getTotalWeight())), n2.halfLife !== t3 && (this.fast_ = new en(t3, n2.getEstimate(), n2.getTotalWeight())), i2.halfLife !== e4 && (this.ttfb_ = new en(e4, i2.getEstimate(), i2.getTotalWeight()));
          }, t2.sample = function(e4, t3) {
            var r2 = (e4 = Math.max(e4, this.minDelayMs_)) / 1e3, n2 = 8 * t3 / r2;
            this.fast_.sample(r2, n2), this.slow_.sample(r2, n2);
          }, t2.sampleTTFB = function(e4) {
            var t3 = e4 / 1e3, r2 = Math.sqrt(2) * Math.exp(-Math.pow(t3, 2) / 2);
            this.ttfb_.sample(r2, Math.max(e4, 5));
          }, t2.canEstimate = function() {
            return this.fast_.getTotalWeight() >= this.minWeight_;
          }, t2.getEstimate = function() {
            return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
          }, t2.getEstimateTTFB = function() {
            return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
          }, t2.destroy = function() {
          }, e3;
        })(), rn = { supported: true, configurations: [], decodingInfoResults: [{ supported: true, powerEfficient: true, smooth: true }] }, nn = {};
        function an(e3, t2, r2, n2, i2, a2) {
          var s2 = e3.audioCodec ? e3.audioGroups : null, o2 = null == a2 ? void 0 : a2.audioCodec, l2 = null == a2 ? void 0 : a2.channels, u2 = l2 ? parseInt(l2) : o2 ? 1 / 0 : 2, c2 = null;
          if (null != s2 && s2.length) try {
            c2 = 1 === s2.length && s2[0] ? t2.groups[s2[0]].channels : s2.reduce((function(e4, r3) {
              if (r3) {
                var n3 = t2.groups[r3];
                if (!n3) throw new Error("Audio track group " + r3 + " not found");
                Object.keys(n3.channels).forEach((function(t3) {
                  e4[t3] = (e4[t3] || 0) + n3.channels[t3];
                }));
              }
              return e4;
            }), { 2: 0 });
          } catch (e4) {
            return true;
          }
          return void 0 !== e3.videoCodec && (e3.width > 1920 && e3.height > 1088 || e3.height > 1920 && e3.width > 1088 || e3.frameRate > Math.max(n2, 30) || "SDR" !== e3.videoRange && e3.videoRange !== r2 || e3.bitrate > Math.max(i2, 8e6)) || !!c2 && k(u2) && Object.keys(c2).some((function(e4) {
            return parseInt(e4) > u2;
          }));
        }
        function sn(e3, t2, r2) {
          var i2 = e3.videoCodec, a2 = e3.audioCodec;
          if (!i2 || !a2 || !r2) return Promise.resolve(rn);
          var s2 = { width: e3.width, height: e3.height, bitrate: Math.ceil(Math.max(0.9 * e3.bitrate, e3.averageBitrate)), framerate: e3.frameRate || 30 }, o2 = e3.videoRange;
          "SDR" !== o2 && (s2.transferFunction = o2.toLowerCase());
          var l2 = i2.split(",").map((function(e4) {
            return { type: "media-source", video: n(n({}, s2), {}, { contentType: Rt(e4, "video") }) };
          }));
          return a2 && e3.audioGroups && e3.audioGroups.forEach((function(e4) {
            var r3;
            e4 && (null == (r3 = t2.groups[e4]) || r3.tracks.forEach((function(t3) {
              if (t3.groupId === e4) {
                var r4 = t3.channels || "", n2 = parseFloat(r4);
                k(n2) && n2 > 2 && l2.push.apply(l2, a2.split(",").map((function(e5) {
                  return { type: "media-source", audio: { contentType: Rt(e5, "audio"), channels: "" + n2 } };
                })));
              }
            })));
          })), Promise.all(l2.map((function(e4) {
            var t3 = on(e4);
            return nn[t3] || (nn[t3] = r2.decodingInfo(e4));
          }))).then((function(e4) {
            return { supported: !e4.some((function(e5) {
              return !e5.supported;
            })), configurations: l2, decodingInfoResults: e4 };
          })).catch((function(e4) {
            return { supported: false, configurations: l2, decodingInfoResults: [], error: e4 };
          }));
        }
        function on(e3) {
          var t2 = e3.audio, r2 = e3.video, n2 = r2 || t2;
          if (n2) {
            var i2 = n2.contentType.split('"')[1];
            if (r2) return "r" + r2.height + "x" + r2.width + "f" + Math.ceil(r2.framerate) + (r2.transferFunction || "sd") + "_" + i2 + "_" + Math.ceil(r2.bitrate / 1e5);
            if (t2) return "c" + t2.channels + (t2.spatialRendering ? "s" : "n") + "_" + i2;
          }
          return "";
        }
        function ln() {
          if ("function" == typeof matchMedia) {
            var e3 = matchMedia("(dynamic-range: high)"), t2 = matchMedia("bad query");
            if (e3.media !== t2.media) return true === e3.matches;
          }
          return false;
        }
        function un(e3, t2) {
          var r2 = false, n2 = [];
          return e3 && (r2 = "SDR" !== e3, n2 = [e3]), t2 && (n2 = t2.allowedVideoRanges || yr.slice(0), n2 = (r2 = void 0 !== t2.preferHDR ? t2.preferHDR : ln()) ? n2.filter((function(e4) {
            return "SDR" !== e4;
          })) : ["SDR"]), { preferHDR: r2, allowedVideoRanges: n2 };
        }
        function cn(e3, t2, r2, n2, i2) {
          for (var a2 = Object.keys(e3), s2 = null == n2 ? void 0 : n2.channels, o2 = null == n2 ? void 0 : n2.audioCodec, l2 = s2 && 2 === parseInt(s2), u2 = true, c2 = false, d2 = 1 / 0, h2 = 1 / 0, f2 = 1 / 0, g2 = 0, m2 = [], p2 = un(t2, i2), v2 = p2.preferHDR, y2 = p2.allowedVideoRanges, T2 = function() {
            var t3 = e3[a2[b2]];
            u2 = t3.channels[2] > 0, d2 = Math.min(d2, t3.minHeight), h2 = Math.min(h2, t3.minFramerate), f2 = Math.min(f2, t3.minBitrate);
            var r3 = y2.filter((function(e4) {
              return t3.videoRanges[e4] > 0;
            }));
            r3.length > 0 && (c2 = true, m2 = r3);
          }, b2 = a2.length; b2--; ) T2();
          d2 = k(d2) ? d2 : 0, h2 = k(h2) ? h2 : 0;
          var E2 = Math.max(1080, d2), S2 = Math.max(30, h2);
          return f2 = k(f2) ? f2 : r2, r2 = Math.max(f2, r2), c2 || (t2 = void 0, m2 = []), { codecSet: a2.reduce((function(t3, n3) {
            var i3 = e3[n3];
            if (n3 === t3) return t3;
            if (i3.minBitrate > r2) return dn(n3, "min bitrate of " + i3.minBitrate + " > current estimate of " + r2), t3;
            if (!i3.hasDefaultAudio) return dn(n3, "no renditions with default or auto-select sound found"), t3;
            if (o2 && n3.indexOf(o2.substring(0, 4)) % 5 != 0) return dn(n3, 'audio codec preference "' + o2 + '" not found'), t3;
            if (s2 && !l2) {
              if (!i3.channels[s2]) return dn(n3, "no renditions with " + s2 + " channel sound found (channels options: " + Object.keys(i3.channels) + ")"), t3;
            } else if ((!o2 || l2) && u2 && 0 === i3.channels[2]) return dn(n3, "no renditions with stereo sound found"), t3;
            return i3.minHeight > E2 ? (dn(n3, "min resolution of " + i3.minHeight + " > maximum of " + E2), t3) : i3.minFramerate > S2 ? (dn(n3, "min framerate of " + i3.minFramerate + " > maximum of " + S2), t3) : m2.some((function(e4) {
              return i3.videoRanges[e4] > 0;
            })) ? i3.maxScore < g2 ? (dn(n3, "max score of " + i3.maxScore + " < selected max of " + g2), t3) : t3 && (wt(n3) >= wt(t3) || i3.fragmentError > e3[t3].fragmentError) ? t3 : (g2 = i3.maxScore, n3) : (dn(n3, "no variants with VIDEO-RANGE of " + JSON.stringify(m2) + " found"), t3);
          }), void 0), videoRanges: m2, preferHDR: v2, minFramerate: h2, minBitrate: f2 };
        }
        function dn(e3, t2) {
          F.log('[abr] start candidates with "' + e3 + '" ignored because ' + t2);
        }
        function hn(e3) {
          return e3.reduce((function(e4, t2) {
            var r2 = e4.groups[t2.groupId];
            r2 || (r2 = e4.groups[t2.groupId] = { tracks: [], channels: { 2: 0 }, hasDefault: false, hasAutoSelect: false }), r2.tracks.push(t2);
            var n2 = t2.channels || "2";
            return r2.channels[n2] = (r2.channels[n2] || 0) + 1, r2.hasDefault = r2.hasDefault || t2.default, r2.hasAutoSelect = r2.hasAutoSelect || t2.autoselect, r2.hasDefault && (e4.hasDefaultAudio = true), r2.hasAutoSelect && (e4.hasAutoSelectAudio = true), e4;
          }), { hasDefaultAudio: false, hasAutoSelectAudio: false, groups: {} });
        }
        function fn(e3, t2, r2, n2) {
          return e3.slice(r2, n2 + 1).reduce((function(e4, r3) {
            if (!r3.codecSet) return e4;
            var n3 = r3.audioGroups, i2 = e4[r3.codecSet];
            i2 || (e4[r3.codecSet] = i2 = { minBitrate: 1 / 0, minHeight: 1 / 0, minFramerate: 1 / 0, maxScore: 0, videoRanges: { SDR: 0 }, channels: { 2: 0 }, hasDefaultAudio: !n3, fragmentError: 0 }), i2.minBitrate = Math.min(i2.minBitrate, r3.bitrate);
            var a2 = Math.min(r3.height, r3.width);
            return i2.minHeight = Math.min(i2.minHeight, a2), i2.minFramerate = Math.min(i2.minFramerate, r3.frameRate), i2.maxScore = Math.max(i2.maxScore, r3.score), i2.fragmentError += r3.fragmentError, i2.videoRanges[r3.videoRange] = (i2.videoRanges[r3.videoRange] || 0) + 1, n3 && n3.forEach((function(e5) {
              if (e5) {
                var r4 = t2.groups[e5];
                i2.hasDefaultAudio = i2.hasDefaultAudio || t2.hasDefaultAudio ? r4.hasDefault : r4.hasAutoSelect || !t2.hasDefaultAudio && !t2.hasAutoSelectAudio, Object.keys(r4.channels).forEach((function(e6) {
                  i2.channels[e6] = (i2.channels[e6] || 0) + r4.channels[e6];
                }));
              }
            })), e4;
          }), {});
        }
        function gn(e3, t2, r2) {
          if ("attrs" in e3) {
            var n2 = t2.indexOf(e3);
            if (-1 !== n2) return n2;
          }
          for (var i2 = 0; i2 < t2.length; i2++) if (mn(e3, t2[i2], r2)) return i2;
          return -1;
        }
        function mn(e3, t2, r2) {
          var n2 = e3.groupId, i2 = e3.name, a2 = e3.lang, s2 = e3.assocLang, o2 = e3.characteristics, l2 = e3.default, u2 = e3.forced;
          return (void 0 === n2 || t2.groupId === n2) && (void 0 === i2 || t2.name === i2) && (void 0 === a2 || t2.lang === a2) && (void 0 === a2 || t2.assocLang === s2) && (void 0 === l2 || t2.default === l2) && (void 0 === u2 || t2.forced === u2) && (void 0 === o2 || pn(o2, t2.characteristics)) && (void 0 === r2 || r2(e3, t2));
        }
        function pn(e3, t2) {
          void 0 === t2 && (t2 = "");
          var r2 = e3.split(","), n2 = t2.split(",");
          return r2.length === n2.length && !r2.some((function(e4) {
            return -1 === n2.indexOf(e4);
          }));
        }
        function vn(e3, t2) {
          var r2 = e3.audioCodec, n2 = e3.channels;
          return !(void 0 !== r2 && (t2.audioCodec || "").substring(0, 4) !== r2.substring(0, 4) || void 0 !== n2 && n2 !== (t2.channels || "2"));
        }
        function yn(e3, t2, r2, n2, i2) {
          var a2 = t2[n2], s2 = t2.reduce((function(e4, t3, r3) {
            var n3 = t3.uri;
            return (e4[n3] || (e4[n3] = [])).push(r3), e4;
          }), {})[a2.uri];
          s2.length > 1 && (n2 = Math.max.apply(Math, s2));
          var o2 = a2.videoRange, l2 = a2.frameRate, u2 = a2.codecSet.substring(0, 4), c2 = Tn(t2, n2, (function(t3) {
            if (t3.videoRange !== o2 || t3.frameRate !== l2 || t3.codecSet.substring(0, 4) !== u2) return false;
            var n3 = t3.audioGroups, a3 = r2.filter((function(e4) {
              return !n3 || -1 !== n3.indexOf(e4.groupId);
            }));
            return gn(e3, a3, i2) > -1;
          }));
          return c2 > -1 ? c2 : Tn(t2, n2, (function(t3) {
            var n3 = t3.audioGroups, a3 = r2.filter((function(e4) {
              return !n3 || -1 !== n3.indexOf(e4.groupId);
            }));
            return gn(e3, a3, i2) > -1;
          }));
        }
        function Tn(e3, t2, r2) {
          for (var n2 = t2; n2; n2--) if (r2(e3[n2])) return n2;
          for (var i2 = t2 + 1; i2 < e3.length; i2++) if (r2(e3[i2])) return i2;
          return -1;
        }
        var bn = (function() {
          function e3(e4) {
            var t3 = this;
            this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this._abandonRulesCheck = function() {
              var e5 = t3.fragCurrent, r2 = t3.partCurrent, n2 = t3.hls, i2 = n2.autoLevelEnabled, a2 = n2.media;
              if (e5 && a2) {
                var s2 = performance.now(), o2 = r2 ? r2.stats : e5.stats, l2 = r2 ? r2.duration : e5.duration, u2 = s2 - o2.loading.start, c2 = n2.minAutoLevel;
                if (o2.aborted || o2.loaded && o2.loaded === o2.total || e5.level <= c2) return t3.clearTimer(), void (t3._nextAutoLevel = -1);
                if (i2 && !a2.paused && a2.playbackRate && a2.readyState) {
                  var d2 = n2.mainForwardBufferInfo;
                  if (null !== d2) {
                    var h2 = t3.bwEstimator.getEstimateTTFB(), f2 = Math.abs(a2.playbackRate);
                    if (!(u2 <= Math.max(h2, l2 / (2 * f2) * 1e3))) {
                      var g2 = d2.len / f2, m2 = o2.loading.first ? o2.loading.first - o2.loading.start : -1, p2 = o2.loaded && m2 > -1, v2 = t3.getBwEstimate(), y2 = n2.levels, T2 = y2[e5.level], b2 = o2.total || Math.max(o2.loaded, Math.round(l2 * T2.averageBitrate / 8)), E2 = p2 ? u2 - m2 : u2;
                      E2 < 1 && p2 && (E2 = Math.min(u2, 8 * o2.loaded / v2));
                      var S2 = p2 ? 1e3 * o2.loaded / E2 : 0, A2 = S2 ? (b2 - o2.loaded) / S2 : 8 * b2 / v2 + h2 / 1e3;
                      if (!(A2 <= g2)) {
                        var L2, R2 = S2 ? 8 * S2 : v2, w2 = Number.POSITIVE_INFINITY;
                        for (L2 = e5.level - 1; L2 > c2; L2--) {
                          var D2 = y2[L2].maxBitrate;
                          if ((w2 = t3.getTimeToLoadFrag(h2 / 1e3, R2, l2 * D2, !y2[L2].details)) < g2) break;
                        }
                        if (!(w2 >= A2 || w2 > 10 * l2)) {
                          n2.nextLoadLevel = n2.nextAutoLevel = L2, p2 ? t3.bwEstimator.sample(u2 - Math.min(h2, m2), o2.loaded) : t3.bwEstimator.sampleTTFB(u2);
                          var C2 = y2[L2].maxBitrate;
                          t3.getBwEstimate() * t3.hls.config.abrBandWidthUpFactor > C2 && t3.resetEstimator(C2), t3.clearTimer(), F.warn("[abr] Fragment " + e5.sn + (r2 ? " part " + r2.index : "") + " of level " + e5.level + " is loading too slowly;\n      Time to underbuffer: " + g2.toFixed(3) + " s\n      Estimated load time for current fragment: " + A2.toFixed(3) + " s\n      Estimated load time for down switch fragment: " + w2.toFixed(3) + " s\n      TTFB estimate: " + (0 | m2) + " ms\n      Current BW estimate: " + (k(v2) ? 0 | v2 : "Unknown") + " bps\n      New BW estimate: " + (0 | t3.getBwEstimate()) + " bps\n      Switching to level " + L2 + " @ " + (0 | C2) + " bps"), n2.trigger(I.FRAG_LOAD_EMERGENCY_ABORTED, { frag: e5, part: r2, stats: o2 });
                        }
                      }
                    }
                  }
                }
              }
            }, this.hls = e4, this.bwEstimator = this.initEstimator(), this.registerListeners();
          }
          var t2 = e3.prototype;
          return t2.resetEstimator = function(e4) {
            e4 && (F.log("setting initial bwe to " + e4), this.hls.config.abrEwmaDefaultEstimate = e4), this.firstSelection = -1, this.bwEstimator = this.initEstimator();
          }, t2.initEstimator = function() {
            var e4 = this.hls.config;
            return new tn(e4.abrEwmaSlowVoD, e4.abrEwmaFastVoD, e4.abrEwmaDefaultEstimate);
          }, t2.registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.on(I.FRAG_LOADING, this.onFragLoading, this), e4.on(I.FRAG_LOADED, this.onFragLoaded, this), e4.on(I.FRAG_BUFFERED, this.onFragBuffered, this), e4.on(I.LEVEL_SWITCHING, this.onLevelSwitching, this), e4.on(I.LEVEL_LOADED, this.onLevelLoaded, this), e4.on(I.LEVELS_UPDATED, this.onLevelsUpdated, this), e4.on(I.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e4.on(I.ERROR, this.onError, this);
          }, t2.unregisterListeners = function() {
            var e4 = this.hls;
            e4 && (e4.off(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.off(I.FRAG_LOADING, this.onFragLoading, this), e4.off(I.FRAG_LOADED, this.onFragLoaded, this), e4.off(I.FRAG_BUFFERED, this.onFragBuffered, this), e4.off(I.LEVEL_SWITCHING, this.onLevelSwitching, this), e4.off(I.LEVEL_LOADED, this.onLevelLoaded, this), e4.off(I.LEVELS_UPDATED, this.onLevelsUpdated, this), e4.off(I.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e4.off(I.ERROR, this.onError, this));
          }, t2.destroy = function() {
            this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = null, this.fragCurrent = this.partCurrent = null;
          }, t2.onManifestLoading = function(e4, t3) {
            this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer();
          }, t2.onLevelsUpdated = function() {
            this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null;
          }, t2.onMaxAutoLevelUpdated = function() {
            this.firstSelection = -1, this.nextAutoLevelKey = "";
          }, t2.onFragLoading = function(e4, t3) {
            var r2, n2 = t3.frag;
            this.ignoreFragment(n2) || (n2.bitrateTest || (this.fragCurrent = n2, this.partCurrent = null != (r2 = t3.part) ? r2 : null), this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100));
          }, t2.onLevelSwitching = function(e4, t3) {
            this.clearTimer();
          }, t2.onError = function(e4, t3) {
            if (!t3.fatal) switch (t3.details) {
              case D.BUFFER_ADD_CODEC_ERROR:
              case D.BUFFER_APPEND_ERROR:
                this.lastLoadedFragLevel = -1, this.firstSelection = -1;
                break;
              case D.FRAG_LOAD_TIMEOUT:
                var r2 = t3.frag, n2 = this.fragCurrent, i2 = this.partCurrent;
                if (r2 && n2 && r2.sn === n2.sn && r2.level === n2.level) {
                  var a2 = performance.now(), s2 = i2 ? i2.stats : r2.stats, o2 = a2 - s2.loading.start, l2 = s2.loading.first ? s2.loading.first - s2.loading.start : -1;
                  if (s2.loaded && l2 > -1) {
                    var u2 = this.bwEstimator.getEstimateTTFB();
                    this.bwEstimator.sample(o2 - Math.min(u2, l2), s2.loaded);
                  } else this.bwEstimator.sampleTTFB(o2);
                }
            }
          }, t2.getTimeToLoadFrag = function(e4, t3, r2, n2) {
            return e4 + r2 / t3 + (n2 ? this.lastLevelLoadSec : 0);
          }, t2.onLevelLoaded = function(e4, t3) {
            var r2 = this.hls.config, n2 = t3.stats.loading, i2 = n2.end - n2.start;
            k(i2) && (this.lastLevelLoadSec = i2 / 1e3), t3.details.live ? this.bwEstimator.update(r2.abrEwmaSlowLive, r2.abrEwmaFastLive) : this.bwEstimator.update(r2.abrEwmaSlowVoD, r2.abrEwmaFastVoD);
          }, t2.onFragLoaded = function(e4, t3) {
            var r2 = t3.frag, n2 = t3.part, i2 = n2 ? n2.stats : r2.stats;
            if (r2.type === $t.MAIN && this.bwEstimator.sampleTTFB(i2.loading.first - i2.loading.start), !this.ignoreFragment(r2)) {
              if (this.clearTimer(), r2.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
                var a2 = n2 ? n2.duration : r2.duration, s2 = this.hls.levels[r2.level], o2 = (s2.loaded ? s2.loaded.bytes : 0) + i2.loaded, l2 = (s2.loaded ? s2.loaded.duration : 0) + a2;
                s2.loaded = { bytes: o2, duration: l2 }, s2.realBitrate = Math.round(8 * o2 / l2);
              }
              if (r2.bitrateTest) {
                var u2 = { stats: i2, frag: r2, part: n2, id: r2.type };
                this.onFragBuffered(I.FRAG_BUFFERED, u2), r2.bitrateTest = false;
              } else this.lastLoadedFragLevel = r2.level;
            }
          }, t2.onFragBuffered = function(e4, t3) {
            var r2 = t3.frag, n2 = t3.part, i2 = null != n2 && n2.stats.loaded ? n2.stats : r2.stats;
            if (!i2.aborted && !this.ignoreFragment(r2)) {
              var a2 = i2.parsing.end - i2.loading.start - Math.min(i2.loading.first - i2.loading.start, this.bwEstimator.getEstimateTTFB());
              this.bwEstimator.sample(a2, i2.loaded), i2.bwEstimate = this.getBwEstimate(), r2.bitrateTest ? this.bitrateTestDelay = a2 / 1e3 : this.bitrateTestDelay = 0;
            }
          }, t2.ignoreFragment = function(e4) {
            return e4.type !== $t.MAIN || "initSegment" === e4.sn;
          }, t2.clearTimer = function() {
            this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1);
          }, t2.getAutoLevelKey = function() {
            var e4;
            return this.getBwEstimate() + "_" + (null == (e4 = this.hls.mainForwardBufferInfo) ? void 0 : e4.len);
          }, t2.getNextABRAutoLevel = function() {
            var e4 = this.fragCurrent, t3 = this.partCurrent, r2 = this.hls, n2 = r2.maxAutoLevel, i2 = r2.config, a2 = r2.minAutoLevel, s2 = r2.media, o2 = t3 ? t3.duration : e4 ? e4.duration : 0, l2 = s2 && 0 !== s2.playbackRate ? Math.abs(s2.playbackRate) : 1, u2 = this.getBwEstimate(), c2 = r2.mainForwardBufferInfo, d2 = (c2 ? c2.len : 0) / l2, h2 = i2.abrBandWidthFactor, f2 = i2.abrBandWidthUpFactor;
            if (d2) {
              var g2 = this.findBestLevel(u2, a2, n2, d2, 0, h2, f2);
              if (g2 >= 0) return g2;
            }
            var m2 = o2 ? Math.min(o2, i2.maxStarvationDelay) : i2.maxStarvationDelay;
            if (!d2) {
              var p2 = this.bitrateTestDelay;
              p2 && (m2 = (o2 ? Math.min(o2, i2.maxLoadingDelay) : i2.maxLoadingDelay) - p2, F.info("[abr] bitrate test took " + Math.round(1e3 * p2) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * m2) + " ms"), h2 = f2 = 1);
            }
            var v2 = this.findBestLevel(u2, a2, n2, d2, m2, h2, f2);
            if (F.info("[abr] " + (d2 ? "rebuffering expected" : "buffer is empty") + ", optimal quality level " + v2), v2 > -1) return v2;
            var y2 = r2.levels[a2], T2 = r2.levels[r2.loadLevel];
            return (null == y2 ? void 0 : y2.bitrate) < (null == T2 ? void 0 : T2.bitrate) ? a2 : r2.loadLevel;
          }, t2.getBwEstimate = function() {
            return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
          }, t2.findBestLevel = function(e4, t3, r2, n2, i2, a2, s2) {
            var o2, l2 = this, u2 = n2 + i2, c2 = this.lastLoadedFragLevel, d2 = -1 === c2 ? this.hls.firstLevel : c2, h2 = this.fragCurrent, f2 = this.partCurrent, g2 = this.hls, m2 = g2.levels, p2 = g2.allAudioTracks, v2 = g2.loadLevel, y2 = g2.config;
            if (1 === m2.length) return 0;
            var T2, b2 = m2[d2], E2 = !(null == b2 || null == (o2 = b2.details) || !o2.live), S2 = -1 === v2 || -1 === c2, A2 = "SDR", L2 = (null == b2 ? void 0 : b2.frameRate) || 0, R2 = y2.audioPreference, I2 = y2.videoPreference, w2 = this.audioTracksByGroup || (this.audioTracksByGroup = hn(p2));
            if (S2) {
              if (-1 !== this.firstSelection) return this.firstSelection;
              var D2 = cn(this.codecTiers || (this.codecTiers = fn(m2, w2, t3, r2)), A2, e4, R2, I2), C2 = D2.codecSet, x2 = D2.videoRanges, _2 = D2.minFramerate, O2 = D2.minBitrate, P2 = D2.preferHDR;
              T2 = C2, A2 = P2 ? x2[x2.length - 1] : x2[0], L2 = _2, e4 = Math.max(e4, O2), F.log("[abr] picked start tier " + JSON.stringify(D2));
            } else T2 = null == b2 ? void 0 : b2.codecSet, A2 = null == b2 ? void 0 : b2.videoRange;
            for (var M2, N2 = f2 ? f2.duration : h2 ? h2.duration : 0, U2 = this.bwEstimator.getEstimateTTFB() / 1e3, B2 = [], G2 = function() {
              var t4, o3 = m2[V2], h3 = V2 > d2;
              if (!o3) return 0;
              if (y2.useMediaCapabilities && !o3.supportedResult && !o3.supportedPromise) {
                var g3 = navigator.mediaCapabilities;
                "function" == typeof (null == g3 ? void 0 : g3.decodingInfo) && an(o3, w2, A2, L2, e4, R2) ? (o3.supportedPromise = sn(o3, w2, g3), o3.supportedPromise.then((function(e5) {
                  o3.supportedResult = e5;
                  var t5 = l2.hls.levels, r3 = t5.indexOf(o3);
                  e5.error ? F.warn('[abr] MediaCapabilities decodingInfo error: "' + e5.error + '" for level ' + r3 + " " + JSON.stringify(e5)) : e5.supported || (F.warn("[abr] Unsupported MediaCapabilities decodingInfo result for level " + r3 + " " + JSON.stringify(e5)), r3 > -1 && t5.length > 1 && (F.log("[abr] Removing unsupported level " + r3), l2.hls.removeLevel(r3)));
                }))) : o3.supportedResult = rn;
              }
              if (T2 && o3.codecSet !== T2 || A2 && o3.videoRange !== A2 || h3 && L2 > o3.frameRate || !h3 && L2 > 0 && L2 < o3.frameRate || o3.supportedResult && (null == (t4 = o3.supportedResult.decodingInfoResults) || !t4[0].smooth)) return B2.push(V2), 0;
              var p3, I3 = o3.details, D3 = (f2 ? null == I3 ? void 0 : I3.partTarget : null == I3 ? void 0 : I3.averagetargetduration) || N2;
              p3 = h3 ? s2 * e4 : a2 * e4;
              var C3 = N2 && n2 >= 2 * N2 && 0 === i2 ? m2[V2].averageBitrate : m2[V2].maxBitrate, x3 = l2.getTimeToLoadFrag(U2, p3, C3 * D3, void 0 === I3);
              if (p3 >= C3 && (V2 === c2 || 0 === o3.loadError && 0 === o3.fragmentError) && (x3 <= U2 || !k(x3) || E2 && !l2.bitrateTestDelay || x3 < u2)) {
                var _3 = l2.forcedAutoLevel;
                return V2 === v2 || -1 !== _3 && _3 === v2 || (B2.length && F.trace("[abr] Skipped level(s) " + B2.join(",") + " of " + r2 + ' max with CODECS and VIDEO-RANGE:"' + m2[B2[0]].codecs + '" ' + m2[B2[0]].videoRange + '; not compatible with "' + b2.codecs + '" ' + A2), F.info("[abr] switch candidate:" + d2 + "->" + V2 + " adjustedbw(" + Math.round(p3) + ")-bitrate=" + Math.round(p3 - C3) + " ttfb:" + U2.toFixed(1) + " avgDuration:" + D3.toFixed(1) + " maxFetchDuration:" + u2.toFixed(1) + " fetchDuration:" + x3.toFixed(1) + " firstSelection:" + S2 + " codecSet:" + T2 + " videoRange:" + A2 + " hls.loadLevel:" + v2)), S2 && (l2.firstSelection = V2), { v: V2 };
              }
            }, V2 = r2; V2 >= t3; V2--) if (0 !== (M2 = G2()) && M2) return M2.v;
            return -1;
          }, o(e3, [{ key: "firstAutoLevel", get: function() {
            var e4 = this.hls, t3 = e4.maxAutoLevel, r2 = e4.minAutoLevel, n2 = this.getBwEstimate(), i2 = this.hls.config.maxStarvationDelay, a2 = this.findBestLevel(n2, r2, t3, 0, i2, 1, 1);
            if (a2 > -1) return a2;
            var s2 = this.hls.firstLevel, o2 = Math.min(Math.max(s2, r2), t3);
            return F.warn("[abr] Could not find best starting auto level. Defaulting to first in playlist " + s2 + " clamped to " + o2), o2;
          } }, { key: "forcedAutoLevel", get: function() {
            return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
          } }, { key: "nextAutoLevel", get: function() {
            var e4 = this.forcedAutoLevel, t3 = this.bwEstimator.canEstimate(), r2 = this.lastLoadedFragLevel > -1;
            if (!(-1 === e4 || t3 && r2 && this.nextAutoLevelKey !== this.getAutoLevelKey())) return e4;
            var n2 = t3 && r2 ? this.getNextABRAutoLevel() : this.firstAutoLevel;
            if (-1 !== e4) {
              var i2 = this.hls.levels;
              if (i2.length > Math.max(e4, n2) && i2[e4].loadError <= i2[n2].loadError) return e4;
            }
            return this._nextAutoLevel = n2, this.nextAutoLevelKey = this.getAutoLevelKey(), n2;
          }, set: function(e4) {
            var t3 = this.hls, r2 = t3.maxAutoLevel, n2 = t3.minAutoLevel, i2 = Math.min(Math.max(e4, n2), r2);
            this._nextAutoLevel !== i2 && (this.nextAutoLevelKey = "", this._nextAutoLevel = i2);
          } }]), e3;
        })(), En = (function() {
          function e3() {
            this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
          }
          var t2 = e3.prototype;
          return t2.destroy = function() {
            this.onHandlerDestroying(), this.onHandlerDestroyed();
          }, t2.onHandlerDestroying = function() {
            this.clearNextTick(), this.clearInterval();
          }, t2.onHandlerDestroyed = function() {
          }, t2.hasInterval = function() {
            return !!this._tickInterval;
          }, t2.hasNextTick = function() {
            return !!this._tickTimer;
          }, t2.setInterval = function(e4) {
            return !this._tickInterval && (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e4), true);
          }, t2.clearInterval = function() {
            return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, true);
          }, t2.clearNextTick = function() {
            return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, true);
          }, t2.tick = function() {
            this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
          }, t2.tickImmediate = function() {
            this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
          }, t2.doTick = function() {
          }, e3;
        })(), Sn = { NOT_LOADED: "NOT_LOADED", APPENDING: "APPENDING", PARTIAL: "PARTIAL", OK: "OK" }, An = (function() {
          function e3(e4) {
            this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = false, this.hls = e4, this._registerListeners();
          }
          var t2 = e3.prototype;
          return t2._registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.BUFFER_APPENDED, this.onBufferAppended, this), e4.on(I.FRAG_BUFFERED, this.onFragBuffered, this), e4.on(I.FRAG_LOADED, this.onFragLoaded, this);
          }, t2._unregisterListeners = function() {
            var e4 = this.hls;
            e4.off(I.BUFFER_APPENDED, this.onBufferAppended, this), e4.off(I.FRAG_BUFFERED, this.onFragBuffered, this), e4.off(I.FRAG_LOADED, this.onFragLoaded, this);
          }, t2.destroy = function() {
            this._unregisterListeners(), this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null;
          }, t2.getAppendedFrag = function(e4, t3) {
            var r2 = this.activePartLists[t3];
            if (r2) for (var n2 = r2.length; n2--; ) {
              var i2 = r2[n2];
              if (!i2) break;
              var a2 = i2.end;
              if (i2.start <= e4 && null !== a2 && e4 <= a2) return i2;
            }
            return this.getBufferedFrag(e4, t3);
          }, t2.getBufferedFrag = function(e4, t3) {
            for (var r2 = this.fragments, n2 = Object.keys(r2), i2 = n2.length; i2--; ) {
              var a2 = r2[n2[i2]];
              if ((null == a2 ? void 0 : a2.body.type) === t3 && a2.buffered) {
                var s2 = a2.body;
                if (s2.start <= e4 && e4 <= s2.end) return s2;
              }
            }
            return null;
          }, t2.detectEvictedFragments = function(e4, t3, r2, n2) {
            var i2 = this;
            this.timeRanges && (this.timeRanges[e4] = t3);
            var a2 = (null == n2 ? void 0 : n2.fragment.sn) || -1;
            Object.keys(this.fragments).forEach((function(n3) {
              var s2 = i2.fragments[n3];
              if (s2 && !(a2 >= s2.body.sn)) if (s2.buffered || s2.loaded) {
                var o2 = s2.range[e4];
                o2 && o2.time.some((function(e5) {
                  var r3 = !i2.isTimeBuffered(e5.startPTS, e5.endPTS, t3);
                  return r3 && i2.removeFragment(s2.body), r3;
                }));
              } else s2.body.type === r2 && i2.removeFragment(s2.body);
            }));
          }, t2.detectPartialFragments = function(e4) {
            var t3 = this, r2 = this.timeRanges, n2 = e4.frag, i2 = e4.part;
            if (r2 && "initSegment" !== n2.sn) {
              var a2 = Ln(n2), s2 = this.fragments[a2];
              if (!(!s2 || s2.buffered && n2.gap)) {
                var o2 = !n2.relurl;
                Object.keys(r2).forEach((function(e5) {
                  var a3 = n2.elementaryStreams[e5];
                  if (a3) {
                    var l2 = r2[e5], u2 = o2 || true === a3.partial;
                    s2.range[e5] = t3.getBufferedTimes(n2, i2, u2, l2);
                  }
                })), s2.loaded = null, Object.keys(s2.range).length ? (s2.buffered = true, (s2.body.endList = n2.endList || s2.body.endList) && (this.endListFragments[s2.body.type] = s2), kn(s2) || this.removeParts(n2.sn - 1, n2.type)) : this.removeFragment(s2.body);
              }
            }
          }, t2.removeParts = function(e4, t3) {
            var r2 = this.activePartLists[t3];
            r2 && (this.activePartLists[t3] = r2.filter((function(t4) {
              return t4.fragment.sn >= e4;
            })));
          }, t2.fragBuffered = function(e4, t3) {
            var r2 = Ln(e4), n2 = this.fragments[r2];
            !n2 && t3 && (n2 = this.fragments[r2] = { body: e4, appendedPTS: null, loaded: null, buffered: false, range: /* @__PURE__ */ Object.create(null) }, e4.gap && (this.hasGaps = true)), n2 && (n2.loaded = null, n2.buffered = true);
          }, t2.getBufferedTimes = function(e4, t3, r2, n2) {
            for (var i2 = { time: [], partial: r2 }, a2 = e4.start, s2 = e4.end, o2 = e4.minEndPTS || s2, l2 = e4.maxStartPTS || a2, u2 = 0; u2 < n2.length; u2++) {
              var c2 = n2.start(u2) - this.bufferPadding, d2 = n2.end(u2) + this.bufferPadding;
              if (l2 >= c2 && o2 <= d2) {
                i2.time.push({ startPTS: Math.max(a2, n2.start(u2)), endPTS: Math.min(s2, n2.end(u2)) });
                break;
              }
              if (a2 < d2 && s2 > c2) {
                var h2 = Math.max(a2, n2.start(u2)), f2 = Math.min(s2, n2.end(u2));
                f2 > h2 && (i2.partial = true, i2.time.push({ startPTS: h2, endPTS: f2 }));
              } else if (s2 <= c2) break;
            }
            return i2;
          }, t2.getPartialFragment = function(e4) {
            var t3, r2, n2, i2 = null, a2 = 0, s2 = this.bufferPadding, o2 = this.fragments;
            return Object.keys(o2).forEach((function(l2) {
              var u2 = o2[l2];
              u2 && kn(u2) && (r2 = u2.body.start - s2, n2 = u2.body.end + s2, e4 >= r2 && e4 <= n2 && (t3 = Math.min(e4 - r2, n2 - e4), a2 <= t3 && (i2 = u2.body, a2 = t3)));
            })), i2;
          }, t2.isEndListAppended = function(e4) {
            var t3 = this.endListFragments[e4];
            return void 0 !== t3 && (t3.buffered || kn(t3));
          }, t2.getState = function(e4) {
            var t3 = Ln(e4), r2 = this.fragments[t3];
            return r2 ? r2.buffered ? kn(r2) ? Sn.PARTIAL : Sn.OK : Sn.APPENDING : Sn.NOT_LOADED;
          }, t2.isTimeBuffered = function(e4, t3, r2) {
            for (var n2, i2, a2 = 0; a2 < r2.length; a2++) {
              if (n2 = r2.start(a2) - this.bufferPadding, i2 = r2.end(a2) + this.bufferPadding, e4 >= n2 && t3 <= i2) return true;
              if (t3 <= n2) return false;
            }
            return false;
          }, t2.onFragLoaded = function(e4, t3) {
            var r2 = t3.frag, n2 = t3.part;
            if ("initSegment" !== r2.sn && !r2.bitrateTest) {
              var i2 = n2 ? null : t3, a2 = Ln(r2);
              this.fragments[a2] = { body: r2, appendedPTS: null, loaded: i2, buffered: false, range: /* @__PURE__ */ Object.create(null) };
            }
          }, t2.onBufferAppended = function(e4, t3) {
            var r2 = this, n2 = t3.frag, i2 = t3.part, a2 = t3.timeRanges;
            if ("initSegment" !== n2.sn) {
              var s2 = n2.type;
              if (i2) {
                var o2 = this.activePartLists[s2];
                o2 || (this.activePartLists[s2] = o2 = []), o2.push(i2);
              }
              this.timeRanges = a2, Object.keys(a2).forEach((function(e5) {
                var t4 = a2[e5];
                r2.detectEvictedFragments(e5, t4, s2, i2);
              }));
            }
          }, t2.onFragBuffered = function(e4, t3) {
            this.detectPartialFragments(t3);
          }, t2.hasFragment = function(e4) {
            var t3 = Ln(e4);
            return !!this.fragments[t3];
          }, t2.hasParts = function(e4) {
            var t3;
            return !(null == (t3 = this.activePartLists[e4]) || !t3.length);
          }, t2.removeFragmentsInRange = function(e4, t3, r2, n2, i2) {
            var a2 = this;
            n2 && !this.hasGaps || Object.keys(this.fragments).forEach((function(s2) {
              var o2 = a2.fragments[s2];
              if (o2) {
                var l2 = o2.body;
                l2.type !== r2 || n2 && !l2.gap || l2.start < t3 && l2.end > e4 && (o2.buffered || i2) && a2.removeFragment(l2);
              }
            }));
          }, t2.removeFragment = function(e4) {
            var t3 = Ln(e4);
            e4.stats.loaded = 0, e4.clearElementaryStreamInfo();
            var r2 = this.activePartLists[e4.type];
            if (r2) {
              var n2 = e4.sn;
              this.activePartLists[e4.type] = r2.filter((function(e5) {
                return e5.fragment.sn !== n2;
              }));
            }
            delete this.fragments[t3], e4.endList && delete this.endListFragments[e4.type];
          }, t2.removeAllFragments = function() {
            this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = false;
          }, e3;
        })();
        function kn(e3) {
          var t2, r2, n2;
          return e3.buffered && (e3.body.gap || (null == (t2 = e3.range.video) ? void 0 : t2.partial) || (null == (r2 = e3.range.audio) ? void 0 : r2.partial) || (null == (n2 = e3.range.audiovideo) ? void 0 : n2.partial));
        }
        function Ln(e3) {
          return e3.type + "_" + e3.level + "_" + e3.sn;
        }
        var Rn = { length: 0, start: function() {
          return 0;
        }, end: function() {
          return 0;
        } }, In = (function() {
          function e3() {
          }
          return e3.isBuffered = function(t2, r2) {
            try {
              if (t2) {
                for (var n2 = e3.getBuffered(t2), i2 = 0; i2 < n2.length; i2++) if (r2 >= n2.start(i2) && r2 <= n2.end(i2)) return true;
              }
            } catch (e4) {
            }
            return false;
          }, e3.bufferInfo = function(t2, r2, n2) {
            try {
              if (t2) {
                var i2, a2 = e3.getBuffered(t2), s2 = [];
                for (i2 = 0; i2 < a2.length; i2++) s2.push({ start: a2.start(i2), end: a2.end(i2) });
                return this.bufferedInfo(s2, r2, n2);
              }
            } catch (e4) {
            }
            return { len: 0, start: r2, end: r2, nextStart: void 0 };
          }, e3.bufferedInfo = function(e4, t2, r2) {
            t2 = Math.max(0, t2), e4.sort((function(e5, t3) {
              var r3 = e5.start - t3.start;
              return r3 || t3.end - e5.end;
            }));
            var n2 = [];
            if (r2) for (var i2 = 0; i2 < e4.length; i2++) {
              var a2 = n2.length;
              if (a2) {
                var s2 = n2[a2 - 1].end;
                e4[i2].start - s2 < r2 ? e4[i2].end > s2 && (n2[a2 - 1].end = e4[i2].end) : n2.push(e4[i2]);
              } else n2.push(e4[i2]);
            }
            else n2 = e4;
            for (var o2, l2 = 0, u2 = t2, c2 = t2, d2 = 0; d2 < n2.length; d2++) {
              var h2 = n2[d2].start, f2 = n2[d2].end;
              if (t2 + r2 >= h2 && t2 < f2) u2 = h2, l2 = (c2 = f2) - t2;
              else if (t2 + r2 < h2) {
                o2 = h2;
                break;
              }
            }
            return { len: l2, start: u2 || 0, end: c2 || 0, nextStart: o2 };
          }, e3.getBuffered = function(e4) {
            try {
              return e4.buffered;
            } catch (e5) {
              return F.log("failed to get media.buffered", e5), Rn;
            }
          }, e3;
        })(), wn = function(e3, t2, r2, n2, i2, a2) {
          void 0 === n2 && (n2 = 0), void 0 === i2 && (i2 = -1), void 0 === a2 && (a2 = false), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = Dn(), this.buffering = { audio: Dn(), video: Dn(), audiovideo: Dn() }, this.level = e3, this.sn = t2, this.id = r2, this.size = n2, this.part = i2, this.partial = a2;
        };
        function Dn() {
          return { start: 0, executeStart: 0, executeEnd: 0, end: 0 };
        }
        function Cn(e3, t2) {
          for (var r2 = 0, n2 = e3.length; r2 < n2; r2++) {
            var i2;
            if ((null == (i2 = e3[r2]) ? void 0 : i2.cc) === t2) return e3[r2];
          }
          return null;
        }
        function xn(e3, t2, r2) {
          return !(!t2 || !(r2.endCC > r2.startCC || e3 && e3.cc < r2.startCC));
        }
        function _n(e3, t2) {
          var r2 = e3.fragments, n2 = t2.fragments;
          if (n2.length && r2.length) {
            var i2 = Cn(r2, n2[0].cc);
            if (i2 && (!i2 || i2.startPTS)) return i2;
            F.log("No frag in previous level to align on");
          } else F.log("No fragments to align");
        }
        function On(e3, t2) {
          if (e3) {
            var r2 = e3.start + t2;
            e3.start = e3.startPTS = r2, e3.endPTS = r2 + e3.duration;
          }
        }
        function Pn(e3, t2) {
          for (var r2 = t2.fragments, n2 = 0, i2 = r2.length; n2 < i2; n2++) On(r2[n2], e3);
          t2.fragmentHint && On(t2.fragmentHint, e3), t2.alignedSliding = true;
        }
        function Mn(e3, t2, r2) {
          t2 && (Fn(e3, r2, t2), !r2.alignedSliding && t2 && Nn(r2, t2), r2.alignedSliding || !t2 || r2.skippedSegments || xr(t2, r2));
        }
        function Fn(e3, t2, r2) {
          if (xn(e3, r2, t2)) {
            var n2 = _n(r2, t2);
            n2 && k(n2.start) && (F.log("Adjusting PTS using last level due to CC increase within current level " + t2.url), Pn(n2.start, t2));
          }
        }
        function Nn(e3, t2) {
          if (e3.hasProgramDateTime && t2.hasProgramDateTime) {
            var r2 = e3.fragments, n2 = t2.fragments;
            if (r2.length && n2.length) {
              var i2, a2, s2 = Math.min(t2.endCC, e3.endCC);
              t2.startCC < s2 && e3.startCC < s2 && (i2 = Cn(n2, s2), a2 = Cn(r2, s2)), i2 && a2 || (a2 = Cn(r2, (i2 = n2[Math.floor(n2.length / 2)]).cc) || r2[Math.floor(r2.length / 2)]);
              var o2 = i2.programDateTime, l2 = a2.programDateTime;
              o2 && l2 && Pn((l2 - o2) / 1e3 - (a2.start - i2.start), e3);
            }
          }
        }
        var Un = Math.pow(2, 17), Bn = (function() {
          function e3(e4) {
            this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e4;
          }
          var t2 = e3.prototype;
          return t2.destroy = function() {
            this.loader && (this.loader.destroy(), this.loader = null);
          }, t2.abort = function() {
            this.loader && this.loader.abort();
          }, t2.load = function(e4, t3) {
            var r2 = this, i2 = e4.url;
            if (!i2) return Promise.reject(new Hn({ type: w.NETWORK_ERROR, details: D.FRAG_LOAD_ERROR, fatal: false, frag: e4, error: new Error("Fragment does not have a " + (i2 ? "part list" : "url")), networkDetails: null }));
            this.abort();
            var a2 = this.config, s2 = a2.fLoader, o2 = a2.loader;
            return new Promise((function(l2, u2) {
              if (r2.loader && r2.loader.destroy(), e4.gap) {
                if (e4.tagList.some((function(e5) {
                  return "GAP" === e5[0];
                }))) return void u2(Vn(e4));
                e4.gap = false;
              }
              var c2 = r2.loader = e4.loader = s2 ? new s2(a2) : new o2(a2), d2 = Gn(e4), h2 = Vr(a2.fragLoadPolicy.default), f2 = { loadPolicy: h2, timeout: h2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0, highWaterMark: "initSegment" === e4.sn ? 1 / 0 : Un };
              e4.stats = c2.stats, c2.load(d2, f2, { onSuccess: function(t4, n2, i3, a3) {
                r2.resetLoader(e4, c2);
                var s3 = t4.data;
                i3.resetIV && e4.decryptdata && (e4.decryptdata.iv = new Uint8Array(s3.slice(0, 16)), s3 = s3.slice(16)), l2({ frag: e4, part: null, payload: s3, networkDetails: a3 });
              }, onError: function(t4, a3, s3, o3) {
                r2.resetLoader(e4, c2), u2(new Hn({ type: w.NETWORK_ERROR, details: D.FRAG_LOAD_ERROR, fatal: false, frag: e4, response: n({ url: i2, data: void 0 }, t4), error: new Error("HTTP Error " + t4.code + " " + t4.text), networkDetails: s3, stats: o3 }));
              }, onAbort: function(t4, n2, i3) {
                r2.resetLoader(e4, c2), u2(new Hn({ type: w.NETWORK_ERROR, details: D.INTERNAL_ABORTED, fatal: false, frag: e4, error: new Error("Aborted"), networkDetails: i3, stats: t4 }));
              }, onTimeout: function(t4, n2, i3) {
                r2.resetLoader(e4, c2), u2(new Hn({ type: w.NETWORK_ERROR, details: D.FRAG_LOAD_TIMEOUT, fatal: false, frag: e4, error: new Error("Timeout after " + f2.timeout + "ms"), networkDetails: i3, stats: t4 }));
              }, onProgress: function(r3, n2, i3, a3) {
                t3 && t3({ frag: e4, part: null, payload: i3, networkDetails: a3 });
              } });
            }));
          }, t2.loadPart = function(e4, t3, r2) {
            var i2 = this;
            this.abort();
            var a2 = this.config, s2 = a2.fLoader, o2 = a2.loader;
            return new Promise((function(l2, u2) {
              if (i2.loader && i2.loader.destroy(), e4.gap || t3.gap) u2(Vn(e4, t3));
              else {
                var c2 = i2.loader = e4.loader = s2 ? new s2(a2) : new o2(a2), d2 = Gn(e4, t3), h2 = Vr(a2.fragLoadPolicy.default), f2 = { loadPolicy: h2, timeout: h2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0, highWaterMark: Un };
                t3.stats = c2.stats, c2.load(d2, f2, { onSuccess: function(n2, a3, s3, o3) {
                  i2.resetLoader(e4, c2), i2.updateStatsFromPart(e4, t3);
                  var u3 = { frag: e4, part: t3, payload: n2.data, networkDetails: o3 };
                  r2(u3), l2(u3);
                }, onError: function(r3, a3, s3, o3) {
                  i2.resetLoader(e4, c2), u2(new Hn({ type: w.NETWORK_ERROR, details: D.FRAG_LOAD_ERROR, fatal: false, frag: e4, part: t3, response: n({ url: d2.url, data: void 0 }, r3), error: new Error("HTTP Error " + r3.code + " " + r3.text), networkDetails: s3, stats: o3 }));
                }, onAbort: function(r3, n2, a3) {
                  e4.stats.aborted = t3.stats.aborted, i2.resetLoader(e4, c2), u2(new Hn({ type: w.NETWORK_ERROR, details: D.INTERNAL_ABORTED, fatal: false, frag: e4, part: t3, error: new Error("Aborted"), networkDetails: a3, stats: r3 }));
                }, onTimeout: function(r3, n2, a3) {
                  i2.resetLoader(e4, c2), u2(new Hn({ type: w.NETWORK_ERROR, details: D.FRAG_LOAD_TIMEOUT, fatal: false, frag: e4, part: t3, error: new Error("Timeout after " + f2.timeout + "ms"), networkDetails: a3, stats: r3 }));
                } });
              }
            }));
          }, t2.updateStatsFromPart = function(e4, t3) {
            var r2 = e4.stats, n2 = t3.stats, i2 = n2.total;
            if (r2.loaded += n2.loaded, i2) {
              var a2 = Math.round(e4.duration / t3.duration), s2 = Math.min(Math.round(r2.loaded / i2), a2), o2 = (a2 - s2) * Math.round(r2.loaded / s2);
              r2.total = r2.loaded + o2;
            } else r2.total = Math.max(r2.loaded, r2.total);
            var l2 = r2.loading, u2 = n2.loading;
            l2.start ? l2.first += u2.first - u2.start : (l2.start = u2.start, l2.first = u2.first), l2.end = u2.end;
          }, t2.resetLoader = function(e4, t3) {
            e4.loader = null, this.loader === t3 && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t3.destroy();
          }, e3;
        })();
        function Gn(e3, t2) {
          void 0 === t2 && (t2 = null);
          var r2 = t2 || e3, n2 = { frag: e3, part: t2, responseType: "arraybuffer", url: r2.url, headers: {}, rangeStart: 0, rangeEnd: 0 }, i2 = r2.byteRangeStartOffset, a2 = r2.byteRangeEndOffset;
          if (k(i2) && k(a2)) {
            var s2, o2 = i2, l2 = a2;
            if ("initSegment" === e3.sn && "AES-128" === (null == (s2 = e3.decryptdata) ? void 0 : s2.method)) {
              var u2 = a2 - i2;
              u2 % 16 && (l2 = a2 + (16 - u2 % 16)), 0 !== i2 && (n2.resetIV = true, o2 = i2 - 16);
            }
            n2.rangeStart = o2, n2.rangeEnd = l2;
          }
          return n2;
        }
        function Vn(e3, t2) {
          var r2 = new Error("GAP " + (e3.gap ? "tag" : "attribute") + " found"), n2 = { type: w.MEDIA_ERROR, details: D.FRAG_GAP, fatal: false, frag: e3, error: r2, networkDetails: null };
          return t2 && (n2.part = t2), (t2 || e3).stats.aborted = true, new Hn(n2);
        }
        var Hn = (function(e3) {
          function t2(t3) {
            var r2;
            return (r2 = e3.call(this, t3.error.message) || this).data = void 0, r2.data = t3, r2;
          }
          return c(t2, e3), t2;
        })(p(Error)), Kn = (function() {
          function e3(e4, t2) {
            this.subtle = void 0, this.aesIV = void 0, this.subtle = e4, this.aesIV = t2;
          }
          return e3.prototype.decrypt = function(e4, t2) {
            return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, t2, e4);
          }, e3;
        })(), jn = (function() {
          function e3(e4, t2) {
            this.subtle = void 0, this.key = void 0, this.subtle = e4, this.key = t2;
          }
          return e3.prototype.expandKey = function() {
            return this.subtle.importKey("raw", this.key, { name: "AES-CBC" }, false, ["encrypt", "decrypt"]);
          }, e3;
        })();
        function Yn(e3) {
          var t2 = e3.byteLength, r2 = t2 && new DataView(e3.buffer).getUint8(t2 - 1);
          return r2 ? fe(e3, 0, t2 - r2) : e3;
        }
        var Wn = (function() {
          function e3() {
            this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
          }
          var t2 = e3.prototype;
          return t2.uint8ArrayToUint32Array_ = function(e4) {
            for (var t3 = new DataView(e4), r2 = new Uint32Array(4), n2 = 0; n2 < 4; n2++) r2[n2] = t3.getUint32(4 * n2);
            return r2;
          }, t2.initTable = function() {
            var e4 = this.sBox, t3 = this.invSBox, r2 = this.subMix, n2 = r2[0], i2 = r2[1], a2 = r2[2], s2 = r2[3], o2 = this.invSubMix, l2 = o2[0], u2 = o2[1], c2 = o2[2], d2 = o2[3], h2 = new Uint32Array(256), f2 = 0, g2 = 0, m2 = 0;
            for (m2 = 0; m2 < 256; m2++) h2[m2] = m2 < 128 ? m2 << 1 : m2 << 1 ^ 283;
            for (m2 = 0; m2 < 256; m2++) {
              var p2 = g2 ^ g2 << 1 ^ g2 << 2 ^ g2 << 3 ^ g2 << 4;
              p2 = p2 >>> 8 ^ 255 & p2 ^ 99, e4[f2] = p2, t3[p2] = f2;
              var v2 = h2[f2], y2 = h2[v2], T2 = h2[y2], b2 = 257 * h2[p2] ^ 16843008 * p2;
              n2[f2] = b2 << 24 | b2 >>> 8, i2[f2] = b2 << 16 | b2 >>> 16, a2[f2] = b2 << 8 | b2 >>> 24, s2[f2] = b2, b2 = 16843009 * T2 ^ 65537 * y2 ^ 257 * v2 ^ 16843008 * f2, l2[p2] = b2 << 24 | b2 >>> 8, u2[p2] = b2 << 16 | b2 >>> 16, c2[p2] = b2 << 8 | b2 >>> 24, d2[p2] = b2, f2 ? (f2 = v2 ^ h2[h2[h2[T2 ^ v2]]], g2 ^= h2[h2[g2]]) : f2 = g2 = 1;
            }
          }, t2.expandKey = function(e4) {
            for (var t3 = this.uint8ArrayToUint32Array_(e4), r2 = true, n2 = 0; n2 < t3.length && r2; ) r2 = t3[n2] === this.key[n2], n2++;
            if (!r2) {
              this.key = t3;
              var i2 = this.keySize = t3.length;
              if (4 !== i2 && 6 !== i2 && 8 !== i2) throw new Error("Invalid aes key size=" + i2);
              var a2, s2, o2, l2, u2 = this.ksRows = 4 * (i2 + 6 + 1), c2 = this.keySchedule = new Uint32Array(u2), d2 = this.invKeySchedule = new Uint32Array(u2), h2 = this.sBox, f2 = this.rcon, g2 = this.invSubMix, m2 = g2[0], p2 = g2[1], v2 = g2[2], y2 = g2[3];
              for (a2 = 0; a2 < u2; a2++) a2 < i2 ? o2 = c2[a2] = t3[a2] : (l2 = o2, a2 % i2 == 0 ? (l2 = h2[(l2 = l2 << 8 | l2 >>> 24) >>> 24] << 24 | h2[l2 >>> 16 & 255] << 16 | h2[l2 >>> 8 & 255] << 8 | h2[255 & l2], l2 ^= f2[a2 / i2 | 0] << 24) : i2 > 6 && a2 % i2 == 4 && (l2 = h2[l2 >>> 24] << 24 | h2[l2 >>> 16 & 255] << 16 | h2[l2 >>> 8 & 255] << 8 | h2[255 & l2]), c2[a2] = o2 = (c2[a2 - i2] ^ l2) >>> 0);
              for (s2 = 0; s2 < u2; s2++) a2 = u2 - s2, l2 = 3 & s2 ? c2[a2] : c2[a2 - 4], d2[s2] = s2 < 4 || a2 <= 4 ? l2 : m2[h2[l2 >>> 24]] ^ p2[h2[l2 >>> 16 & 255]] ^ v2[h2[l2 >>> 8 & 255]] ^ y2[h2[255 & l2]], d2[s2] = d2[s2] >>> 0;
            }
          }, t2.networkToHostOrderSwap = function(e4) {
            return e4 << 24 | (65280 & e4) << 8 | (16711680 & e4) >> 8 | e4 >>> 24;
          }, t2.decrypt = function(e4, t3, r2) {
            for (var n2, i2, a2, s2, o2, l2, u2, c2, d2, h2, f2, g2, m2, p2, v2 = this.keySize + 6, y2 = this.invKeySchedule, T2 = this.invSBox, b2 = this.invSubMix, E2 = b2[0], S2 = b2[1], A2 = b2[2], k2 = b2[3], L2 = this.uint8ArrayToUint32Array_(r2), R2 = L2[0], I2 = L2[1], w2 = L2[2], D2 = L2[3], C2 = new Int32Array(e4), x2 = new Int32Array(C2.length), _2 = this.networkToHostOrderSwap; t3 < C2.length; ) {
              for (d2 = _2(C2[t3]), h2 = _2(C2[t3 + 1]), f2 = _2(C2[t3 + 2]), g2 = _2(C2[t3 + 3]), o2 = d2 ^ y2[0], l2 = g2 ^ y2[1], u2 = f2 ^ y2[2], c2 = h2 ^ y2[3], m2 = 4, p2 = 1; p2 < v2; p2++) n2 = E2[o2 >>> 24] ^ S2[l2 >> 16 & 255] ^ A2[u2 >> 8 & 255] ^ k2[255 & c2] ^ y2[m2], i2 = E2[l2 >>> 24] ^ S2[u2 >> 16 & 255] ^ A2[c2 >> 8 & 255] ^ k2[255 & o2] ^ y2[m2 + 1], a2 = E2[u2 >>> 24] ^ S2[c2 >> 16 & 255] ^ A2[o2 >> 8 & 255] ^ k2[255 & l2] ^ y2[m2 + 2], s2 = E2[c2 >>> 24] ^ S2[o2 >> 16 & 255] ^ A2[l2 >> 8 & 255] ^ k2[255 & u2] ^ y2[m2 + 3], o2 = n2, l2 = i2, u2 = a2, c2 = s2, m2 += 4;
              n2 = T2[o2 >>> 24] << 24 ^ T2[l2 >> 16 & 255] << 16 ^ T2[u2 >> 8 & 255] << 8 ^ T2[255 & c2] ^ y2[m2], i2 = T2[l2 >>> 24] << 24 ^ T2[u2 >> 16 & 255] << 16 ^ T2[c2 >> 8 & 255] << 8 ^ T2[255 & o2] ^ y2[m2 + 1], a2 = T2[u2 >>> 24] << 24 ^ T2[c2 >> 16 & 255] << 16 ^ T2[o2 >> 8 & 255] << 8 ^ T2[255 & l2] ^ y2[m2 + 2], s2 = T2[c2 >>> 24] << 24 ^ T2[o2 >> 16 & 255] << 16 ^ T2[l2 >> 8 & 255] << 8 ^ T2[255 & u2] ^ y2[m2 + 3], x2[t3] = _2(n2 ^ R2), x2[t3 + 1] = _2(s2 ^ I2), x2[t3 + 2] = _2(a2 ^ w2), x2[t3 + 3] = _2(i2 ^ D2), R2 = d2, I2 = h2, w2 = f2, D2 = g2, t3 += 4;
            }
            return x2.buffer;
          }, e3;
        })(), zn = 16, qn = (function() {
          function e3(e4, t3) {
            var r2 = (void 0 === t3 ? {} : t3).removePKCS7Padding, n2 = void 0 === r2 || r2;
            if (this.logEnabled = true, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = e4.enableSoftwareAES, this.removePKCS7Padding = n2, n2) try {
              var i2 = self.crypto;
              i2 && (this.subtle = i2.subtle || i2.webkitSubtle);
            } catch (e5) {
            }
            null === this.subtle && (this.useSoftware = true);
          }
          var t2 = e3.prototype;
          return t2.destroy = function() {
            this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
          }, t2.isSync = function() {
            return this.useSoftware;
          }, t2.flush = function() {
            var e4 = this.currentResult, t3 = this.remainderData;
            if (!e4 || t3) return this.reset(), null;
            var r2 = new Uint8Array(e4);
            return this.reset(), this.removePKCS7Padding ? Yn(r2) : r2;
          }, t2.reset = function() {
            this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
          }, t2.decrypt = function(e4, t3, r2) {
            var n2 = this;
            return this.useSoftware ? new Promise((function(i2, a2) {
              n2.softwareDecrypt(new Uint8Array(e4), t3, r2);
              var s2 = n2.flush();
              s2 ? i2(s2.buffer) : a2(new Error("[softwareDecrypt] Failed to decrypt data"));
            })) : this.webCryptoDecrypt(new Uint8Array(e4), t3, r2);
          }, t2.softwareDecrypt = function(e4, t3, r2) {
            var n2 = this.currentIV, i2 = this.currentResult, a2 = this.remainderData;
            this.logOnce("JS AES decrypt"), a2 && (e4 = rt(a2, e4), this.remainderData = null);
            var s2 = this.getValidChunk(e4);
            if (!s2.length) return null;
            n2 && (r2 = n2);
            var o2 = this.softwareDecrypter;
            o2 || (o2 = this.softwareDecrypter = new Wn()), o2.expandKey(t3);
            var l2 = i2;
            return this.currentResult = o2.decrypt(s2.buffer, 0, r2), this.currentIV = fe(s2, -16).buffer, l2 || null;
          }, t2.webCryptoDecrypt = function(e4, t3, r2) {
            var n2 = this, i2 = this.subtle;
            return this.key === t3 && this.fastAesKey || (this.key = t3, this.fastAesKey = new jn(i2, t3)), this.fastAesKey.expandKey().then((function(t4) {
              return i2 ? (n2.logOnce("WebCrypto AES decrypt"), new Kn(i2, new Uint8Array(r2)).decrypt(e4.buffer, t4)) : Promise.reject(new Error("web crypto not initialized"));
            })).catch((function(i3) {
              return F.warn("[decrypter]: WebCrypto Error, disable WebCrypto API, " + i3.name + ": " + i3.message), n2.onWebCryptoError(e4, t3, r2);
            }));
          }, t2.onWebCryptoError = function(e4, t3, r2) {
            this.useSoftware = true, this.logEnabled = true, this.softwareDecrypt(e4, t3, r2);
            var n2 = this.flush();
            if (n2) return n2.buffer;
            throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data");
          }, t2.getValidChunk = function(e4) {
            var t3 = e4, r2 = e4.length - e4.length % zn;
            return r2 !== e4.length && (t3 = fe(e4, 0, r2), this.remainderData = fe(e4, r2)), t3;
          }, t2.logOnce = function(e4) {
            this.logEnabled && (F.log("[decrypter]: " + e4), this.logEnabled = false);
          }, e3;
        })(), Xn = { toString: function(e3) {
          for (var t2 = "", r2 = e3.length, n2 = 0; n2 < r2; n2++) t2 += "[" + e3.start(n2).toFixed(3) + "-" + e3.end(n2).toFixed(3) + "]";
          return t2;
        } }, $n = { STOPPED: "STOPPED", IDLE: "IDLE", KEY_LOADING: "KEY_LOADING", FRAG_LOADING: "FRAG_LOADING", FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY", WAITING_TRACK: "WAITING_TRACK", PARSING: "PARSING", PARSED: "PARSED", ENDED: "ENDED", ERROR: "ERROR", WAITING_INIT_PTS: "WAITING_INIT_PTS", WAITING_LEVEL: "WAITING_LEVEL" }, Jn = (function(e3) {
          function t2(t3, r3, n2, i2, a2) {
            var s2;
            return (s2 = e3.call(this) || this).hls = void 0, s2.fragPrevious = null, s2.fragCurrent = null, s2.fragmentTracker = void 0, s2.transmuxer = null, s2._state = $n.STOPPED, s2.playlistType = void 0, s2.media = null, s2.mediaBuffer = null, s2.config = void 0, s2.bitrateTest = false, s2.lastCurrentTime = 0, s2.nextLoadPosition = 0, s2.startPosition = 0, s2.startTimeOffset = null, s2.loadedmetadata = false, s2.retryDate = 0, s2.levels = null, s2.fragmentLoader = void 0, s2.keyLoader = void 0, s2.levelLastLoaded = null, s2.startFragRequested = false, s2.decrypter = void 0, s2.initPTS = [], s2.onvseeking = null, s2.onvended = null, s2.logPrefix = "", s2.log = void 0, s2.warn = void 0, s2.playlistType = a2, s2.logPrefix = i2, s2.log = F.log.bind(F, i2 + ":"), s2.warn = F.warn.bind(F, i2 + ":"), s2.hls = t3, s2.fragmentLoader = new Bn(t3.config), s2.keyLoader = n2, s2.fragmentTracker = r3, s2.config = t3.config, s2.decrypter = new qn(t3.config), t3.on(I.MANIFEST_LOADED, s2.onManifestLoaded, v(s2)), s2;
          }
          c(t2, e3);
          var r2 = t2.prototype;
          return r2.doTick = function() {
            this.onTickEnd();
          }, r2.onTickEnd = function() {
          }, r2.startLoad = function(e4) {
          }, r2.stopLoad = function() {
            this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
            var e4 = this.fragCurrent;
            null != e4 && e4.loader && (e4.abortRequests(), this.fragmentTracker.removeFragment(e4)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = $n.STOPPED;
          }, r2._streamEnded = function(e4, t3) {
            if (t3.live || e4.nextStart || !e4.end || !this.media) return false;
            var r3 = t3.partList;
            if (null != r3 && r3.length) {
              var n2 = r3[r3.length - 1];
              return In.isBuffered(this.media, n2.start + n2.duration / 2);
            }
            var i2 = t3.fragments[t3.fragments.length - 1].type;
            return this.fragmentTracker.isEndListAppended(i2);
          }, r2.getLevelDetails = function() {
            var e4;
            if (this.levels && null !== this.levelLastLoaded) return null == (e4 = this.levelLastLoaded) ? void 0 : e4.details;
          }, r2.onMediaAttached = function(e4, t3) {
            var r3 = this.media = this.mediaBuffer = t3.media;
            this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), r3.addEventListener("seeking", this.onvseeking), r3.addEventListener("ended", this.onvended);
            var n2 = this.config;
            this.levels && n2.autoStartLoad && this.state === $n.STOPPED && this.startLoad(n2.startPosition);
          }, r2.onMediaDetaching = function() {
            var e4 = this.media;
            null != e4 && e4.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e4 && this.onvseeking && this.onvended && (e4.removeEventListener("seeking", this.onvseeking), e4.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = false, this.fragmentTracker.removeAllFragments(), this.stopLoad();
          }, r2.onMediaSeeking = function() {
            var e4 = this.config, t3 = this.fragCurrent, r3 = this.media, n2 = this.mediaBuffer, i2 = this.state, a2 = r3 ? r3.currentTime : 0, s2 = In.bufferInfo(n2 || r3, a2, e4.maxBufferHole);
            if (this.log("media seeking to " + (k(a2) ? a2.toFixed(3) : a2) + ", state: " + i2), this.state === $n.ENDED) this.resetLoadingState();
            else if (t3) {
              var o2 = e4.maxFragLookUpTolerance, l2 = t3.start - o2, u2 = t3.start + t3.duration + o2;
              if (!s2.len || u2 < s2.start || l2 > s2.end) {
                var c2 = a2 > u2;
                (a2 < l2 || c2) && (c2 && t3.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), t3.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
              }
            }
            r3 && (this.fragmentTracker.removeFragmentsInRange(a2, 1 / 0, this.playlistType, true), this.lastCurrentTime = a2), this.loadedmetadata || s2.len || (this.nextLoadPosition = this.startPosition = a2), this.tickImmediate();
          }, r2.onMediaEnded = function() {
            this.startPosition = this.lastCurrentTime = 0;
          }, r2.onManifestLoaded = function(e4, t3) {
            this.startTimeOffset = t3.startTimeOffset, this.initPTS = [];
          }, r2.onHandlerDestroying = function() {
            this.hls.off(I.MANIFEST_LOADED, this.onManifestLoaded, this), this.stopLoad(), e3.prototype.onHandlerDestroying.call(this), this.hls = null;
          }, r2.onHandlerDestroyed = function() {
            this.state = $n.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, e3.prototype.onHandlerDestroyed.call(this);
          }, r2.loadFragment = function(e4, t3, r3) {
            this._loadFragForPlayback(e4, t3, r3);
          }, r2._loadFragForPlayback = function(e4, t3, r3) {
            var n2 = this, i2 = function(t4) {
              if (n2.fragContextChanged(e4)) return n2.warn("Fragment " + e4.sn + (t4.part ? " p: " + t4.part.index : "") + " of level " + e4.level + " was dropped during download."), void n2.fragmentTracker.removeFragment(e4);
              e4.stats.chunkCount++, n2._handleFragmentLoadProgress(t4);
            };
            this._doFragLoad(e4, t3, r3, i2).then((function(t4) {
              if (t4) {
                var r4 = n2.state;
                n2.fragContextChanged(e4) ? (r4 === $n.FRAG_LOADING || !n2.fragCurrent && r4 === $n.PARSING) && (n2.fragmentTracker.removeFragment(e4), n2.state = $n.IDLE) : ("payload" in t4 && (n2.log("Loaded fragment " + e4.sn + " of level " + e4.level), n2.hls.trigger(I.FRAG_LOADED, t4)), n2._handleFragmentLoadComplete(t4));
              }
            })).catch((function(t4) {
              n2.state !== $n.STOPPED && n2.state !== $n.ERROR && (n2.warn(t4), n2.resetFragmentLoading(e4));
            }));
          }, r2.clearTrackerIfNeeded = function(e4) {
            var t3, r3 = this.fragmentTracker;
            if (r3.getState(e4) === Sn.APPENDING) {
              var n2 = e4.type, i2 = this.getFwdBufferInfo(this.mediaBuffer, n2), a2 = Math.max(e4.duration, i2 ? i2.len : this.config.maxBufferLength);
              this.reduceMaxBufferLength(a2) && r3.removeFragment(e4);
            } else 0 === (null == (t3 = this.mediaBuffer) ? void 0 : t3.buffered.length) ? r3.removeAllFragments() : r3.hasParts(e4.type) && (r3.detectPartialFragments({ frag: e4, part: null, stats: e4.stats, id: e4.type }), r3.getState(e4) === Sn.PARTIAL && r3.removeFragment(e4));
          }, r2.checkLiveUpdate = function(e4) {
            if (e4.updated && !e4.live) {
              var t3 = e4.fragments[e4.fragments.length - 1];
              this.fragmentTracker.detectPartialFragments({ frag: t3, part: null, stats: t3.stats, id: t3.type });
            }
            e4.fragments[0] || (e4.deltaUpdateFailed = true);
          }, r2.flushMainBuffer = function(e4, t3, r3) {
            if (void 0 === r3 && (r3 = null), e4 - t3) {
              var n2 = { startOffset: e4, endOffset: t3, type: r3 };
              this.hls.trigger(I.BUFFER_FLUSHING, n2);
            }
          }, r2._loadInitSegment = function(e4, t3) {
            var r3 = this;
            this._doFragLoad(e4, t3).then((function(t4) {
              if (!t4 || r3.fragContextChanged(e4) || !r3.levels) throw new Error("init load aborted");
              return t4;
            })).then((function(t4) {
              var n2 = r3.hls, i2 = t4.payload, a2 = e4.decryptdata;
              if (i2 && i2.byteLength > 0 && null != a2 && a2.key && a2.iv && "AES-128" === a2.method) {
                var s2 = self.performance.now();
                return r3.decrypter.decrypt(new Uint8Array(i2), a2.key.buffer, a2.iv.buffer).catch((function(t5) {
                  throw n2.trigger(I.ERROR, { type: w.MEDIA_ERROR, details: D.FRAG_DECRYPT_ERROR, fatal: false, error: t5, reason: t5.message, frag: e4 }), t5;
                })).then((function(i3) {
                  var a3 = self.performance.now();
                  return n2.trigger(I.FRAG_DECRYPTED, { frag: e4, payload: i3, stats: { tstart: s2, tdecrypt: a3 } }), t4.payload = i3, r3.completeInitSegmentLoad(t4);
                }));
              }
              return r3.completeInitSegmentLoad(t4);
            })).catch((function(t4) {
              r3.state !== $n.STOPPED && r3.state !== $n.ERROR && (r3.warn(t4), r3.resetFragmentLoading(e4));
            }));
          }, r2.completeInitSegmentLoad = function(e4) {
            if (!this.levels) throw new Error("init load aborted, missing levels");
            var t3 = e4.frag.stats;
            this.state = $n.IDLE, e4.frag.data = new Uint8Array(e4.payload), t3.parsing.start = t3.buffering.start = self.performance.now(), t3.parsing.end = t3.buffering.end = self.performance.now(), this.tick();
          }, r2.fragContextChanged = function(e4) {
            var t3 = this.fragCurrent;
            return !e4 || !t3 || e4.sn !== t3.sn || e4.level !== t3.level;
          }, r2.fragBufferedComplete = function(e4, t3) {
            var r3, n2, i2, a2, s2 = this.mediaBuffer ? this.mediaBuffer : this.media;
            if (this.log("Buffered " + e4.type + " sn: " + e4.sn + (t3 ? " part: " + t3.index : "") + " of " + (this.playlistType === $t.MAIN ? "level" : "track") + " " + e4.level + " (frag:[" + (null != (r3 = e4.startPTS) ? r3 : NaN).toFixed(3) + "-" + (null != (n2 = e4.endPTS) ? n2 : NaN).toFixed(3) + "] > buffer:" + (s2 ? Xn.toString(In.getBuffered(s2)) : "(detached)") + ")"), "initSegment" !== e4.sn) {
              var o2;
              if (e4.type !== $t.SUBTITLE) {
                var l2 = e4.elementaryStreams;
                if (!Object.keys(l2).some((function(e5) {
                  return !!l2[e5];
                }))) return void (this.state = $n.IDLE);
              }
              var u2 = null == (o2 = this.levels) ? void 0 : o2[e4.level];
              null != u2 && u2.fragmentError && (this.log("Resetting level fragment error count of " + u2.fragmentError + " on frag buffered"), u2.fragmentError = 0);
            }
            this.state = $n.IDLE, s2 && (!this.loadedmetadata && e4.type == $t.MAIN && s2.buffered.length && (null == (i2 = this.fragCurrent) ? void 0 : i2.sn) === (null == (a2 = this.fragPrevious) ? void 0 : a2.sn) && (this.loadedmetadata = true, this.seekToStartPos()), this.tick());
          }, r2.seekToStartPos = function() {
          }, r2._handleFragmentLoadComplete = function(e4) {
            var t3 = this.transmuxer;
            if (t3) {
              var r3 = e4.frag, n2 = e4.part, i2 = e4.partsLoaded, a2 = !i2 || 0 === i2.length || i2.some((function(e5) {
                return !e5;
              })), s2 = new wn(r3.level, r3.sn, r3.stats.chunkCount + 1, 0, n2 ? n2.index : -1, !a2);
              t3.flush(s2);
            }
          }, r2._handleFragmentLoadProgress = function(e4) {
          }, r2._doFragLoad = function(e4, t3, r3, n2) {
            var i2, a2 = this;
            void 0 === r3 && (r3 = null);
            var s2 = null == t3 ? void 0 : t3.details;
            if (!this.levels || !s2) throw new Error("frag load aborted, missing level" + (s2 ? "" : " detail") + "s");
            var o2 = null;
            if (!e4.encrypted || null != (i2 = e4.decryptdata) && i2.key ? !e4.encrypted && s2.encryptedFragments.length && this.keyLoader.loadClear(e4, s2.encryptedFragments) : (this.log("Loading key for " + e4.sn + " of [" + s2.startSN + "-" + s2.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + e4.level), this.state = $n.KEY_LOADING, this.fragCurrent = e4, o2 = this.keyLoader.load(e4).then((function(e5) {
              if (!a2.fragContextChanged(e5.frag)) return a2.hls.trigger(I.KEY_LOADED, e5), a2.state === $n.KEY_LOADING && (a2.state = $n.IDLE), e5;
            })), this.hls.trigger(I.KEY_LOADING, { frag: e4 }), null === this.fragCurrent && (o2 = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))), r3 = Math.max(e4.start, r3 || 0), this.config.lowLatencyMode && "initSegment" !== e4.sn) {
              var l2 = s2.partList;
              if (l2 && n2) {
                r3 > e4.end && s2.fragmentHint && (e4 = s2.fragmentHint);
                var u2 = this.getNextPart(l2, e4, r3);
                if (u2 > -1) {
                  var c2, d2 = l2[u2];
                  return this.log("Loading part sn: " + e4.sn + " p: " + d2.index + " cc: " + e4.cc + " of playlist [" + s2.startSN + "-" + s2.endSN + "] parts [0-" + u2 + "-" + (l2.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + e4.level + ", target: " + parseFloat(r3.toFixed(3))), this.nextLoadPosition = d2.start + d2.duration, this.state = $n.FRAG_LOADING, c2 = o2 ? o2.then((function(r4) {
                    return !r4 || a2.fragContextChanged(r4.frag) ? null : a2.doFragPartsLoad(e4, d2, t3, n2);
                  })).catch((function(e5) {
                    return a2.handleFragLoadError(e5);
                  })) : this.doFragPartsLoad(e4, d2, t3, n2).catch((function(e5) {
                    return a2.handleFragLoadError(e5);
                  })), this.hls.trigger(I.FRAG_LOADING, { frag: e4, part: d2, targetBufferTime: r3 }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : c2;
                }
                if (!e4.url || this.loadedEndOfParts(l2, r3)) return Promise.resolve(null);
              }
            }
            this.log("Loading fragment " + e4.sn + " cc: " + e4.cc + " " + (s2 ? "of [" + s2.startSN + "-" + s2.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + e4.level + ", target: " + parseFloat(r3.toFixed(3))), k(e4.sn) && !this.bitrateTest && (this.nextLoadPosition = e4.start + e4.duration), this.state = $n.FRAG_LOADING;
            var h2, f2 = this.config.progressive;
            return h2 = f2 && o2 ? o2.then((function(t4) {
              return !t4 || a2.fragContextChanged(null == t4 ? void 0 : t4.frag) ? null : a2.fragmentLoader.load(e4, n2);
            })).catch((function(e5) {
              return a2.handleFragLoadError(e5);
            })) : Promise.all([this.fragmentLoader.load(e4, f2 ? n2 : void 0), o2]).then((function(e5) {
              var t4 = e5[0];
              return !f2 && t4 && n2 && n2(t4), t4;
            })).catch((function(e5) {
              return a2.handleFragLoadError(e5);
            })), this.hls.trigger(I.FRAG_LOADING, { frag: e4, targetBufferTime: r3 }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : h2;
          }, r2.doFragPartsLoad = function(e4, t3, r3, n2) {
            var i2 = this;
            return new Promise((function(a2, s2) {
              var o2, l2 = [], u2 = null == (o2 = r3.details) ? void 0 : o2.partList;
              !(function t4(o3) {
                i2.fragmentLoader.loadPart(e4, o3, n2).then((function(n3) {
                  l2[o3.index] = n3;
                  var s3 = n3.part;
                  i2.hls.trigger(I.FRAG_LOADED, n3);
                  var c2 = Mr(r3, e4.sn, o3.index + 1) || Fr(u2, e4.sn, o3.index + 1);
                  if (!c2) return a2({ frag: e4, part: s3, partsLoaded: l2 });
                  t4(c2);
                })).catch(s2);
              })(t3);
            }));
          }, r2.handleFragLoadError = function(e4) {
            if ("data" in e4) {
              var t3 = e4.data;
              e4.data && t3.details === D.INTERNAL_ABORTED ? this.handleFragLoadAborted(t3.frag, t3.part) : this.hls.trigger(I.ERROR, t3);
            } else this.hls.trigger(I.ERROR, { type: w.OTHER_ERROR, details: D.INTERNAL_EXCEPTION, err: e4, error: e4, fatal: true });
            return null;
          }, r2._handleTransmuxerFlush = function(e4) {
            var t3 = this.getCurrentContext(e4);
            if (t3 && this.state === $n.PARSING) {
              var r3 = t3.frag, n2 = t3.part, i2 = t3.level, a2 = self.performance.now();
              r3.stats.parsing.end = a2, n2 && (n2.stats.parsing.end = a2), this.updateLevelTiming(r3, n2, i2, e4.partial);
            } else this.fragCurrent || this.state === $n.STOPPED || this.state === $n.ERROR || (this.state = $n.IDLE);
          }, r2.getCurrentContext = function(e4) {
            var t3 = this.levels, r3 = this.fragCurrent, n2 = e4.level, i2 = e4.sn, a2 = e4.part;
            if (null == t3 || !t3[n2]) return this.warn("Levels object was unset while buffering fragment " + i2 + " of level " + n2 + ". The current chunk will not be buffered."), null;
            var s2 = t3[n2], o2 = a2 > -1 ? Mr(s2, i2, a2) : null, l2 = o2 ? o2.fragment : Pr(s2, i2, r3);
            return l2 ? (r3 && r3 !== l2 && (l2.stats = r3.stats), { frag: l2, part: o2, level: s2 }) : null;
          }, r2.bufferFragmentData = function(e4, t3, r3, n2, i2) {
            var a2;
            if (e4 && this.state === $n.PARSING) {
              var s2 = e4.data1, o2 = e4.data2, l2 = s2;
              if (s2 && o2 && (l2 = rt(s2, o2)), null != (a2 = l2) && a2.length) {
                var u2 = { type: e4.type, frag: t3, part: r3, chunkMeta: n2, parent: t3.type, data: l2 };
                if (this.hls.trigger(I.BUFFER_APPENDING, u2), e4.dropped && e4.independent && !r3) {
                  if (i2) return;
                  this.flushBufferGap(t3);
                }
              }
            }
          }, r2.flushBufferGap = function(e4) {
            var t3 = this.media;
            if (t3) if (In.isBuffered(t3, t3.currentTime)) {
              var r3 = t3.currentTime, n2 = In.bufferInfo(t3, r3, 0), i2 = e4.duration, a2 = Math.min(2 * this.config.maxFragLookUpTolerance, 0.25 * i2), s2 = Math.max(Math.min(e4.start - a2, n2.end - a2), r3 + a2);
              e4.start - s2 > a2 && this.flushMainBuffer(s2, e4.start);
            } else this.flushMainBuffer(0, e4.start);
          }, r2.getFwdBufferInfo = function(e4, t3) {
            var r3 = this.getLoadPosition();
            return k(r3) ? this.getFwdBufferInfoAtPos(e4, r3, t3) : null;
          }, r2.getFwdBufferInfoAtPos = function(e4, t3, r3) {
            var n2 = this.config.maxBufferHole, i2 = In.bufferInfo(e4, t3, n2);
            if (0 === i2.len && void 0 !== i2.nextStart) {
              var a2 = this.fragmentTracker.getBufferedFrag(t3, r3);
              if (a2 && i2.nextStart < a2.end) return In.bufferInfo(e4, t3, Math.max(i2.nextStart, n2));
            }
            return i2;
          }, r2.getMaxBufferLength = function(e4) {
            var t3, r3 = this.config;
            return t3 = e4 ? Math.max(8 * r3.maxBufferSize / e4, r3.maxBufferLength) : r3.maxBufferLength, Math.min(t3, r3.maxMaxBufferLength);
          }, r2.reduceMaxBufferLength = function(e4) {
            var t3 = this.config, r3 = e4 || t3.maxBufferLength;
            return t3.maxMaxBufferLength >= r3 && (t3.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + t3.maxMaxBufferLength + "s"), true);
          }, r2.getAppendedFrag = function(e4, t3) {
            var r3 = this.fragmentTracker.getAppendedFrag(e4, $t.MAIN);
            return r3 && "fragment" in r3 ? r3.fragment : r3;
          }, r2.getNextFragment = function(e4, t3) {
            var r3 = t3.fragments, n2 = r3.length;
            if (!n2) return null;
            var i2, a2 = this.config, s2 = r3[0].start;
            if (t3.live) {
              var o2 = a2.initialLiveManifestSize;
              if (n2 < o2) return this.warn("Not enough fragments to start playback (have: " + n2 + ", need: " + o2 + ")"), null;
              (!t3.PTSKnown && !this.startFragRequested && -1 === this.startPosition || e4 < s2) && (i2 = this.getInitialLiveFragment(t3, r3), this.startPosition = this.nextLoadPosition = i2 ? this.hls.liveSyncPosition || i2.start : e4);
            } else e4 <= s2 && (i2 = r3[0]);
            if (!i2) {
              var l2 = a2.lowLatencyMode ? t3.partEnd : t3.fragmentEnd;
              i2 = this.getFragmentAtPosition(e4, l2, t3);
            }
            return this.mapToInitFragWhenRequired(i2);
          }, r2.isLoopLoading = function(e4, t3) {
            var r3 = this.fragmentTracker.getState(e4);
            return (r3 === Sn.OK || r3 === Sn.PARTIAL && !!e4.gap) && this.nextLoadPosition > t3;
          }, r2.getNextFragmentLoopLoading = function(e4, t3, r3, n2, i2) {
            var a2 = e4.gap, s2 = this.getNextFragment(this.nextLoadPosition, t3);
            if (null === s2) return s2;
            if (e4 = s2, a2 && e4 && !e4.gap && r3.nextStart) {
              var o2 = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, r3.nextStart, n2);
              if (null !== o2 && r3.len + o2.len >= i2) return this.log('buffer full after gaps in "' + n2 + '" playlist starting at sn: ' + e4.sn), null;
            }
            return e4;
          }, r2.mapToInitFragWhenRequired = function(e4) {
            return null == e4 || !e4.initSegment || null != e4 && e4.initSegment.data || this.bitrateTest ? e4 : e4.initSegment;
          }, r2.getNextPart = function(e4, t3, r3) {
            for (var n2 = -1, i2 = false, a2 = true, s2 = 0, o2 = e4.length; s2 < o2; s2++) {
              var l2 = e4[s2];
              if (a2 = a2 && !l2.independent, n2 > -1 && r3 < l2.start) break;
              var u2 = l2.loaded;
              u2 ? n2 = -1 : (i2 || l2.independent || a2) && l2.fragment === t3 && (n2 = s2), i2 = u2;
            }
            return n2;
          }, r2.loadedEndOfParts = function(e4, t3) {
            var r3 = e4[e4.length - 1];
            return r3 && t3 > r3.start && r3.loaded;
          }, r2.getInitialLiveFragment = function(e4, t3) {
            var r3 = this.fragPrevious, n2 = null;
            if (r3) {
              if (e4.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + r3.programDateTime), n2 = Yr(t3, r3.endProgramDateTime, this.config.maxFragLookUpTolerance)), !n2) {
                var i2 = r3.sn + 1;
                if (i2 >= e4.startSN && i2 <= e4.endSN) {
                  var a2 = t3[i2 - e4.startSN];
                  r3.cc === a2.cc && (n2 = a2, this.log("Live playlist, switching playlist, load frag with next SN: " + n2.sn));
                }
                n2 || (n2 = Xr(t3, r3.cc)) && this.log("Live playlist, switching playlist, load frag with same CC: " + n2.sn);
              }
            } else {
              var s2 = this.hls.liveSyncPosition;
              null !== s2 && (n2 = this.getFragmentAtPosition(s2, this.bitrateTest ? e4.fragmentEnd : e4.edge, e4));
            }
            return n2;
          }, r2.getFragmentAtPosition = function(e4, t3, r3) {
            var n2, i2 = this.config, a2 = this.fragPrevious, s2 = r3.fragments, o2 = r3.endSN, l2 = r3.fragmentHint, u2 = i2.maxFragLookUpTolerance, c2 = r3.partList, d2 = !!(i2.lowLatencyMode && null != c2 && c2.length && l2);
            if (d2 && l2 && !this.bitrateTest && (s2 = s2.concat(l2), o2 = l2.sn), n2 = e4 < t3 ? Wr(a2, s2, e4, e4 > t3 - u2 ? 0 : u2) : s2[s2.length - 1]) {
              var h2 = n2.sn - r3.startSN, f2 = this.fragmentTracker.getState(n2);
              if ((f2 === Sn.OK || f2 === Sn.PARTIAL && n2.gap) && (a2 = n2), a2 && n2.sn === a2.sn && (!d2 || c2[0].fragment.sn > n2.sn) && a2 && n2.level === a2.level) {
                var g2 = s2[h2 + 1];
                n2 = n2.sn < o2 && this.fragmentTracker.getState(g2) !== Sn.OK ? g2 : null;
              }
            }
            return n2;
          }, r2.synchronizeToLiveEdge = function(e4) {
            var t3 = this.config, r3 = this.media;
            if (r3) {
              var n2 = this.hls.liveSyncPosition, i2 = r3.currentTime, a2 = e4.fragments[0].start, s2 = e4.edge, o2 = i2 >= a2 - t3.maxFragLookUpTolerance && i2 <= s2;
              if (null !== n2 && r3.duration > n2 && (i2 < n2 || !o2)) {
                var l2 = void 0 !== t3.liveMaxLatencyDuration ? t3.liveMaxLatencyDuration : t3.liveMaxLatencyDurationCount * e4.targetduration;
                (!o2 && r3.readyState < 4 || i2 < s2 - l2) && (this.loadedmetadata || (this.nextLoadPosition = n2), r3.readyState && (this.warn("Playback: " + i2.toFixed(3) + " is located too far from the end of live sliding playlist: " + s2 + ", reset currentTime to : " + n2.toFixed(3)), r3.currentTime = n2));
              }
            }
          }, r2.alignPlaylists = function(e4, t3, r3) {
            var n2 = e4.fragments.length;
            if (!n2) return this.warn("No fragments in live playlist"), 0;
            var i2 = e4.fragments[0].start, a2 = !t3, s2 = e4.alignedSliding && k(i2);
            if (a2 || !s2 && !i2) {
              var o2 = this.fragPrevious;
              Mn(o2, r3, e4);
              var l2 = e4.fragments[0].start;
              return this.log("Live playlist sliding: " + l2.toFixed(2) + " start-sn: " + (t3 ? t3.startSN : "na") + "->" + e4.startSN + " prev-sn: " + (o2 ? o2.sn : "na") + " fragments: " + n2), l2;
            }
            return i2;
          }, r2.waitForCdnTuneIn = function(e4) {
            var t3 = 3;
            return e4.live && e4.canBlockReload && e4.partTarget && e4.tuneInGoal > Math.max(e4.partHoldBack, e4.partTarget * t3);
          }, r2.setStartPosition = function(e4, t3) {
            var r3 = this.startPosition;
            if (r3 < t3 && (r3 = -1), -1 === r3 || -1 === this.lastCurrentTime) {
              var n2 = null !== this.startTimeOffset, i2 = n2 ? this.startTimeOffset : e4.startTimeOffset;
              null !== i2 && k(i2) ? (r3 = t3 + i2, i2 < 0 && (r3 += e4.totalduration), r3 = Math.min(Math.max(t3, r3), t3 + e4.totalduration), this.log("Start time offset " + i2 + " found in " + (n2 ? "multivariant" : "media") + " playlist, adjust startPosition to " + r3), this.startPosition = r3) : e4.live ? r3 = this.hls.liveSyncPosition || t3 : this.startPosition = r3 = 0, this.lastCurrentTime = r3;
            }
            this.nextLoadPosition = r3;
          }, r2.getLoadPosition = function() {
            var e4 = this.media, t3 = 0;
            return this.loadedmetadata && e4 ? t3 = e4.currentTime : this.nextLoadPosition && (t3 = this.nextLoadPosition), t3;
          }, r2.handleFragLoadAborted = function(e4, t3) {
            this.transmuxer && "initSegment" !== e4.sn && e4.stats.aborted && (this.warn("Fragment " + e4.sn + (t3 ? " part " + t3.index : "") + " of level " + e4.level + " was aborted"), this.resetFragmentLoading(e4));
          }, r2.resetFragmentLoading = function(e4) {
            this.fragCurrent && (this.fragContextChanged(e4) || this.state === $n.FRAG_LOADING_WAITING_RETRY) || (this.state = $n.IDLE);
          }, r2.onFragmentOrKeyLoadError = function(e4, t3) {
            if (t3.chunkMeta && !t3.frag) {
              var r3 = this.getCurrentContext(t3.chunkMeta);
              r3 && (t3.frag = r3.frag);
            }
            var n2 = t3.frag;
            if (n2 && n2.type === e4 && this.levels) if (this.fragContextChanged(n2)) {
              var i2;
              this.warn("Frag load error must match current frag to retry " + n2.url + " > " + (null == (i2 = this.fragCurrent) ? void 0 : i2.url));
            } else {
              var a2 = t3.details === D.FRAG_GAP;
              a2 && this.fragmentTracker.fragBuffered(n2, true);
              var s2 = t3.errorAction, o2 = s2 || {}, l2 = o2.action, u2 = o2.retryCount, c2 = void 0 === u2 ? 0 : u2, d2 = o2.retryConfig;
              if (s2 && l2 === $r.RetryRequest && d2) {
                this.resetStartWhenNotLoaded(this.levelLastLoaded);
                var h2 = Gr(d2, c2);
                this.warn("Fragment " + n2.sn + " of " + e4 + " " + n2.level + " errored with " + t3.details + ", retrying loading " + (c2 + 1) + "/" + d2.maxNumRetry + " in " + h2 + "ms"), s2.resolved = true, this.retryDate = self.performance.now() + h2, this.state = $n.FRAG_LOADING_WAITING_RETRY;
              } else if (d2 && s2) {
                if (this.resetFragmentErrors(e4), !(c2 < d2.maxNumRetry)) return void F.warn(t3.details + " reached or exceeded max retry (" + c2 + ")");
                a2 || l2 === $r.RemoveAlternatePermanently || (s2.resolved = true);
              } else (null == s2 ? void 0 : s2.action) === $r.SendAlternateToPenaltyBox ? this.state = $n.WAITING_LEVEL : this.state = $n.ERROR;
              this.tickImmediate();
            }
          }, r2.reduceLengthAndFlushBuffer = function(e4) {
            if (this.state === $n.PARSING || this.state === $n.PARSED) {
              var t3 = e4.parent, r3 = this.getFwdBufferInfo(this.mediaBuffer, t3), n2 = r3 && r3.len > 0.5;
              n2 && this.reduceMaxBufferLength(r3.len);
              var i2 = !n2;
              return i2 && this.warn("Buffer full error while media.currentTime is not buffered, flush " + t3 + " buffer"), e4.frag && (this.fragmentTracker.removeFragment(e4.frag), this.nextLoadPosition = e4.frag.start), this.resetLoadingState(), i2;
            }
            return false;
          }, r2.resetFragmentErrors = function(e4) {
            e4 === $t.AUDIO && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = false), this.state !== $n.STOPPED && (this.state = $n.IDLE);
          }, r2.afterBufferFlushed = function(e4, t3, r3) {
            if (e4) {
              var n2 = In.getBuffered(e4);
              this.fragmentTracker.detectEvictedFragments(t3, n2, r3), this.state === $n.ENDED && this.resetLoadingState();
            }
          }, r2.resetLoadingState = function() {
            this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = $n.IDLE;
          }, r2.resetStartWhenNotLoaded = function(e4) {
            if (!this.loadedmetadata) {
              this.startFragRequested = false;
              var t3 = e4 ? e4.details : null;
              null != t3 && t3.live ? (this.startPosition = -1, this.setStartPosition(t3, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
            }
          }, r2.resetWhenMissingContext = function(e4) {
            this.warn("The loading context changed while buffering fragment " + e4.sn + " of level " + e4.level + ". This chunk will not be buffered."), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState();
          }, r2.removeUnbufferedFrags = function(e4) {
            void 0 === e4 && (e4 = 0), this.fragmentTracker.removeFragmentsInRange(e4, 1 / 0, this.playlistType, false, true);
          }, r2.updateLevelTiming = function(e4, t3, r3, n2) {
            var i2, a2 = this, s2 = r3.details;
            if (s2) {
              if (!Object.keys(e4.elementaryStreams).reduce((function(t4, i3) {
                var o3 = e4.elementaryStreams[i3];
                if (o3) {
                  var l2 = o3.endPTS - o3.startPTS;
                  if (l2 <= 0) return a2.warn("Could not parse fragment " + e4.sn + " " + i3 + " duration reliably (" + l2 + ")"), t4 || false;
                  var u2 = n2 ? 0 : Rr(s2, e4, o3.startPTS, o3.endPTS, o3.startDTS, o3.endDTS);
                  return a2.hls.trigger(I.LEVEL_PTS_UPDATED, { details: s2, level: r3, drift: u2, type: i3, frag: e4, start: o3.startPTS, end: o3.endPTS }), true;
                }
                return t4;
              }), false) && null === (null == (i2 = this.transmuxer) ? void 0 : i2.error)) {
                var o2 = new Error("Found no media in fragment " + e4.sn + " of level " + e4.level + " resetting transmuxer to fallback to playlist timing");
                if (0 === r3.fragmentError && (r3.fragmentError++, e4.gap = true, this.fragmentTracker.removeFragment(e4), this.fragmentTracker.fragBuffered(e4, true)), this.warn(o2.message), this.hls.trigger(I.ERROR, { type: w.MEDIA_ERROR, details: D.FRAG_PARSING_ERROR, fatal: false, error: o2, frag: e4, reason: "Found no media in msn " + e4.sn + ' of level "' + r3.url + '"' }), !this.hls) return;
                this.resetTransmuxer();
              }
              this.state = $n.PARSED, this.hls.trigger(I.FRAG_PARSED, { frag: e4, part: t3 });
            } else this.warn("level.details undefined");
          }, r2.resetTransmuxer = function() {
            this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
          }, r2.recoverWorkerError = function(e4) {
            "demuxerWorker" === e4.event && (this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState());
          }, o(t2, [{ key: "state", get: function() {
            return this._state;
          }, set: function(e4) {
            var t3 = this._state;
            t3 !== e4 && (this._state = e4, this.log(t3 + "->" + e4));
          } }]), t2;
        })(En), Qn = (function() {
          function e3() {
            this.chunks = [], this.dataLength = 0;
          }
          var t2 = e3.prototype;
          return t2.push = function(e4) {
            this.chunks.push(e4), this.dataLength += e4.length;
          }, t2.flush = function() {
            var e4, t3 = this.chunks, r2 = this.dataLength;
            return t3.length ? (e4 = 1 === t3.length ? t3[0] : Zn(t3, r2), this.reset(), e4) : new Uint8Array(0);
          }, t2.reset = function() {
            this.chunks.length = 0, this.dataLength = 0;
          }, e3;
        })();
        function Zn(e3, t2) {
          for (var r2 = new Uint8Array(t2), n2 = 0, i2 = 0; i2 < e3.length; i2++) {
            var a2 = e3[i2];
            r2.set(a2, n2), n2 += a2.length;
          }
          return r2;
        }
        function ei(e3, t2) {
          return void 0 === e3 && (e3 = ""), void 0 === t2 && (t2 = 9e4), { type: e3, id: -1, pid: -1, inputTimeScale: t2, sequenceNumber: -1, samples: [], dropped: 0 };
        }
        var ti = (function() {
          function e3() {
            this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
          }
          var t2 = e3.prototype;
          return t2.resetInitSegment = function(e4, t3, r2, n2) {
            this._id3Track = { type: "id3", id: 3, pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0 };
          }, t2.resetTimeStamp = function(e4) {
            this.initPTS = e4, this.resetContiguity();
          }, t2.resetContiguity = function() {
            this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
          }, t2.canParse = function(e4, t3) {
            return false;
          }, t2.appendFrame = function(e4, t3, r2) {
          }, t2.demux = function(e4, t3) {
            this.cachedData && (e4 = rt(this.cachedData, e4), this.cachedData = null);
            var r2, n2 = ve(e4, 0), i2 = n2 ? n2.length : 0, a2 = this._audioTrack, s2 = this._id3Track, o2 = n2 ? be(n2) : void 0, l2 = e4.length;
            for ((null === this.basePTS || 0 === this.frameIndex && k(o2)) && (this.basePTS = ri(o2, t3, this.initPTS), this.lastPTS = this.basePTS), null === this.lastPTS && (this.lastPTS = this.basePTS), n2 && n2.length > 0 && s2.samples.push({ pts: this.lastPTS, dts: this.lastPTS, data: n2, type: or.audioId3, duration: Number.POSITIVE_INFINITY }); i2 < l2; ) {
              if (this.canParse(e4, i2)) {
                var u2 = this.appendFrame(a2, e4, i2);
                u2 ? (this.frameIndex++, this.lastPTS = u2.sample.pts, r2 = i2 += u2.length) : i2 = l2;
              } else Te(e4, i2) ? (n2 = ve(e4, i2), s2.samples.push({ pts: this.lastPTS, dts: this.lastPTS, data: n2, type: or.audioId3, duration: Number.POSITIVE_INFINITY }), r2 = i2 += n2.length) : i2++;
              if (i2 === l2 && r2 !== l2) {
                var c2 = fe(e4, r2);
                this.cachedData ? this.cachedData = rt(this.cachedData, c2) : this.cachedData = c2;
              }
            }
            return { audioTrack: a2, videoTrack: ei(), id3Track: s2, textTrack: ei() };
          }, t2.demuxSampleAes = function(e4, t3, r2) {
            return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"));
          }, t2.flush = function(e4) {
            var t3 = this.cachedData;
            return t3 && (this.cachedData = null, this.demux(t3, 0)), { audioTrack: this._audioTrack, videoTrack: ei(), id3Track: this._id3Track, textTrack: ei() };
          }, t2.destroy = function() {
          }, e3;
        })(), ri = function(e3, t2, r2) {
          return k(e3) ? 90 * e3 : 9e4 * t2 + (r2 ? 9e4 * r2.baseTime / r2.timescale : 0);
        };
        function ni(e3, t2, r2, n2) {
          var i2, a2, s2, o2, l2 = navigator.userAgent.toLowerCase(), u2 = n2, c2 = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
          i2 = 1 + ((192 & t2[r2 + 2]) >>> 6);
          var d2 = (60 & t2[r2 + 2]) >>> 2;
          if (!(d2 > c2.length - 1)) return s2 = (1 & t2[r2 + 2]) << 2, s2 |= (192 & t2[r2 + 3]) >>> 6, F.log("manifest codec:" + n2 + ", ADTS type:" + i2 + ", samplingIndex:" + d2), /firefox/i.test(l2) ? d2 >= 6 ? (i2 = 5, o2 = new Array(4), a2 = d2 - 3) : (i2 = 2, o2 = new Array(2), a2 = d2) : -1 !== l2.indexOf("android") ? (i2 = 2, o2 = new Array(2), a2 = d2) : (i2 = 5, o2 = new Array(4), n2 && (-1 !== n2.indexOf("mp4a.40.29") || -1 !== n2.indexOf("mp4a.40.5")) || !n2 && d2 >= 6 ? a2 = d2 - 3 : ((n2 && -1 !== n2.indexOf("mp4a.40.2") && (d2 >= 6 && 1 === s2 || /vivaldi/i.test(l2)) || !n2 && 1 === s2) && (i2 = 2, o2 = new Array(2)), a2 = d2)), o2[0] = i2 << 3, o2[0] |= (14 & d2) >> 1, o2[1] |= (1 & d2) << 7, o2[1] |= s2 << 3, 5 === i2 && (o2[1] |= (14 & a2) >> 1, o2[2] = (1 & a2) << 7, o2[2] |= 8, o2[3] = 0), { config: o2, samplerate: c2[d2], channelCount: s2, codec: "mp4a.40." + i2, manifestCodec: u2 };
          var h2 = new Error("invalid ADTS sampling index:" + d2);
          e3.emit(I.ERROR, I.ERROR, { type: w.MEDIA_ERROR, details: D.FRAG_PARSING_ERROR, fatal: true, error: h2, reason: h2.message });
        }
        function ii(e3, t2) {
          return 255 === e3[t2] && 240 == (246 & e3[t2 + 1]);
        }
        function ai(e3, t2) {
          return 1 & e3[t2 + 1] ? 7 : 9;
        }
        function si(e3, t2) {
          return (3 & e3[t2 + 3]) << 11 | e3[t2 + 4] << 3 | (224 & e3[t2 + 5]) >>> 5;
        }
        function oi(e3, t2) {
          return t2 + 5 < e3.length;
        }
        function li(e3, t2) {
          return t2 + 1 < e3.length && ii(e3, t2);
        }
        function ui(e3, t2) {
          return oi(e3, t2) && ii(e3, t2) && si(e3, t2) <= e3.length - t2;
        }
        function ci(e3, t2) {
          if (li(e3, t2)) {
            var r2 = ai(e3, t2);
            if (t2 + r2 >= e3.length) return false;
            var n2 = si(e3, t2);
            if (n2 <= r2) return false;
            var i2 = t2 + n2;
            return i2 === e3.length || li(e3, i2);
          }
          return false;
        }
        function di(e3, t2, r2, n2, i2) {
          if (!e3.samplerate) {
            var a2 = ni(t2, r2, n2, i2);
            if (!a2) return;
            e3.config = a2.config, e3.samplerate = a2.samplerate, e3.channelCount = a2.channelCount, e3.codec = a2.codec, e3.manifestCodec = a2.manifestCodec, F.log("parsed codec:" + e3.codec + ", rate:" + a2.samplerate + ", channels:" + a2.channelCount);
          }
        }
        function hi(e3) {
          return 9216e4 / e3;
        }
        function fi(e3, t2) {
          var r2 = ai(e3, t2);
          if (t2 + r2 <= e3.length) {
            var n2 = si(e3, t2) - r2;
            if (n2 > 0) return { headerLength: r2, frameLength: n2 };
          }
        }
        function gi(e3, t2, r2, n2, i2) {
          var a2, s2 = n2 + i2 * hi(e3.samplerate), o2 = fi(t2, r2);
          if (o2) {
            var l2 = o2.frameLength, u2 = o2.headerLength, c2 = u2 + l2, d2 = Math.max(0, r2 + c2 - t2.length);
            d2 ? (a2 = new Uint8Array(c2 - u2)).set(t2.subarray(r2 + u2, t2.length), 0) : a2 = t2.subarray(r2 + u2, r2 + c2);
            var h2 = { unit: a2, pts: s2 };
            return d2 || e3.samples.push(h2), { sample: h2, length: c2, missing: d2 };
          }
          var f2 = t2.length - r2;
          return (a2 = new Uint8Array(f2)).set(t2.subarray(r2, t2.length), 0), { sample: { unit: a2, pts: s2 }, length: f2, missing: -1 };
        }
        var mi = null, pi = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], vi = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], yi = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]], Ti = [0, 1, 1, 4];
        function bi(e3, t2, r2, n2, i2) {
          if (!(r2 + 24 > t2.length)) {
            var a2 = Ei(t2, r2);
            if (a2 && r2 + a2.frameLength <= t2.length) {
              var s2 = n2 + i2 * (9e4 * a2.samplesPerFrame / a2.sampleRate), o2 = { unit: t2.subarray(r2, r2 + a2.frameLength), pts: s2, dts: s2 };
              return e3.config = [], e3.channelCount = a2.channelCount, e3.samplerate = a2.sampleRate, e3.samples.push(o2), { sample: o2, length: a2.frameLength, missing: 0 };
            }
          }
        }
        function Ei(e3, t2) {
          var r2 = e3[t2 + 1] >> 3 & 3, n2 = e3[t2 + 1] >> 1 & 3, i2 = e3[t2 + 2] >> 4 & 15, a2 = e3[t2 + 2] >> 2 & 3;
          if (1 !== r2 && 0 !== i2 && 15 !== i2 && 3 !== a2) {
            var s2 = e3[t2 + 2] >> 1 & 1, o2 = e3[t2 + 3] >> 6, l2 = 1e3 * pi[14 * (3 === r2 ? 3 - n2 : 3 === n2 ? 3 : 4) + i2 - 1], u2 = vi[3 * (3 === r2 ? 0 : 2 === r2 ? 1 : 2) + a2], c2 = 3 === o2 ? 1 : 2, d2 = yi[r2][n2], h2 = Ti[n2], f2 = 8 * d2 * h2, g2 = Math.floor(d2 * l2 / u2 + s2) * h2;
            if (null === mi) {
              var m2 = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
              mi = m2 ? parseInt(m2[1]) : 0;
            }
            return !!mi && mi <= 87 && 2 === n2 && l2 >= 224e3 && 0 === o2 && (e3[t2 + 3] = 128 | e3[t2 + 3]), { sampleRate: u2, channelCount: c2, frameLength: g2, samplesPerFrame: f2 };
          }
        }
        function Si(e3, t2) {
          return !(255 !== e3[t2] || 224 & ~e3[t2 + 1] || !(6 & e3[t2 + 1]));
        }
        function Ai(e3, t2) {
          return t2 + 1 < e3.length && Si(e3, t2);
        }
        function ki(e3, t2) {
          var r2 = 4;
          return Si(e3, t2) && r2 <= e3.length - t2;
        }
        function Li(e3, t2) {
          if (t2 + 1 < e3.length && Si(e3, t2)) {
            var r2 = 4, n2 = Ei(e3, t2), i2 = r2;
            null != n2 && n2.frameLength && (i2 = n2.frameLength);
            var a2 = t2 + i2;
            return a2 === e3.length || Ai(e3, a2);
          }
          return false;
        }
        var Ri = (function(e3) {
          function t2(t3, r3) {
            var n2;
            return (n2 = e3.call(this) || this).observer = void 0, n2.config = void 0, n2.observer = t3, n2.config = r3, n2;
          }
          c(t2, e3);
          var r2 = t2.prototype;
          return r2.resetInitSegment = function(t3, r3, n2, i2) {
            e3.prototype.resetInitSegment.call(this, t3, r3, n2, i2), this._audioTrack = { container: "audio/adts", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "aac", samples: [], manifestCodec: r3, duration: i2, inputTimeScale: 9e4, dropped: 0 };
          }, t2.probe = function(e4) {
            if (!e4) return false;
            var t3 = ve(e4, 0), r3 = (null == t3 ? void 0 : t3.length) || 0;
            if (Li(e4, r3)) return false;
            for (var n2 = e4.length; r3 < n2; r3++) if (ci(e4, r3)) return F.log("ADTS sync word found !"), true;
            return false;
          }, r2.canParse = function(e4, t3) {
            return ui(e4, t3);
          }, r2.appendFrame = function(e4, t3, r3) {
            di(e4, this.observer, t3, r3, e4.manifestCodec);
            var n2 = gi(e4, t3, r3, this.basePTS, this.frameIndex);
            if (n2 && 0 === n2.missing) return n2;
          }, t2;
        })(ti), Ii = /\/emsg[-/]ID3/i, wi = (function() {
          function e3(e4, t3) {
            this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t3;
          }
          var t2 = e3.prototype;
          return t2.resetTimeStamp = function() {
          }, t2.resetInitSegment = function(e4, t3, r2, n2) {
            var i2 = this.videoTrack = ei("video", 1), a2 = this.audioTrack = ei("audio", 1), s2 = this.txtTrack = ei("text", 1);
            if (this.id3Track = ei("id3", 1), this.timeOffset = 0, null != e4 && e4.byteLength) {
              var o2 = je(e4);
              if (o2.video) {
                var l2 = o2.video, u2 = l2.id, c2 = l2.timescale, d2 = l2.codec;
                i2.id = u2, i2.timescale = s2.timescale = c2, i2.codec = d2;
              }
              if (o2.audio) {
                var h2 = o2.audio, f2 = h2.id, g2 = h2.timescale, m2 = h2.codec;
                a2.id = f2, a2.timescale = g2, a2.codec = m2;
              }
              s2.id = Pe.text, i2.sampleDuration = 0, i2.duration = a2.duration = n2;
            }
          }, t2.resetContiguity = function() {
            this.remainderData = null;
          }, e3.probe = function(e4) {
            return Ve(e4);
          }, t2.demux = function(e4, t3) {
            this.timeOffset = t3;
            var r2 = e4, n2 = this.videoTrack, i2 = this.txtTrack;
            if (this.config.progressive) {
              this.remainderData && (r2 = rt(this.remainderData, e4));
              var a2 = tt(r2);
              this.remainderData = a2.remainder, n2.samples = a2.valid || new Uint8Array();
            } else n2.samples = r2;
            var s2 = this.extractID3Track(n2, t3);
            return i2.samples = nt(t3, n2), { videoTrack: n2, audioTrack: this.audioTrack, id3Track: s2, textTrack: this.txtTrack };
          }, t2.flush = function() {
            var e4 = this.timeOffset, t3 = this.videoTrack, r2 = this.txtTrack;
            t3.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
            var n2 = this.extractID3Track(t3, this.timeOffset);
            return r2.samples = nt(e4, t3), { videoTrack: t3, audioTrack: ei(), id3Track: n2, textTrack: ei() };
          }, t2.extractID3Track = function(e4, t3) {
            var r2 = this.id3Track;
            if (e4.samples.length) {
              var n2 = He(e4.samples, ["emsg"]);
              n2 && n2.forEach((function(e5) {
                var n3 = lt(e5);
                if (Ii.test(n3.schemeIdUri)) {
                  var i2 = k(n3.presentationTime) ? n3.presentationTime / n3.timeScale : t3 + n3.presentationTimeDelta / n3.timeScale, a2 = 4294967295 === n3.eventDuration ? Number.POSITIVE_INFINITY : n3.eventDuration / n3.timeScale;
                  a2 <= 1e-3 && (a2 = Number.POSITIVE_INFINITY);
                  var s2 = n3.payload;
                  r2.samples.push({ data: s2, len: s2.byteLength, dts: i2, pts: i2, type: or.emsg, duration: a2 });
                }
              }));
            }
            return r2;
          }, t2.demuxSampleAes = function(e4, t3, r2) {
            return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
          }, t2.destroy = function() {
          }, e3;
        })(), Di = function(e3, t2) {
          var r2 = 0, n2 = 5;
          t2 += n2;
          for (var i2 = new Uint32Array(1), a2 = new Uint32Array(1), s2 = new Uint8Array(1); n2 > 0; ) {
            s2[0] = e3[t2];
            var o2 = Math.min(n2, 8), l2 = 8 - o2;
            a2[0] = 4278190080 >>> 24 + l2 << l2, i2[0] = (s2[0] & a2[0]) >> l2, r2 = r2 ? r2 << o2 | i2[0] : i2[0], t2 += 1, n2 -= o2;
          }
          return r2;
        }, Ci = (function(e3) {
          function t2(t3) {
            var r3;
            return (r3 = e3.call(this) || this).observer = void 0, r3.observer = t3, r3;
          }
          c(t2, e3);
          var r2 = t2.prototype;
          return r2.resetInitSegment = function(t3, r3, n2, i2) {
            e3.prototype.resetInitSegment.call(this, t3, r3, n2, i2), this._audioTrack = { container: "audio/ac-3", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "ac3", samples: [], manifestCodec: r3, duration: i2, inputTimeScale: 9e4, dropped: 0 };
          }, r2.canParse = function(e4, t3) {
            return t3 + 64 < e4.length;
          }, r2.appendFrame = function(e4, t3, r3) {
            var n2 = xi(e4, t3, r3, this.basePTS, this.frameIndex);
            if (-1 !== n2) return { sample: e4.samples[e4.samples.length - 1], length: n2, missing: 0 };
          }, t2.probe = function(e4) {
            if (!e4) return false;
            var t3 = ve(e4, 0);
            if (!t3) return false;
            var r3 = t3.length;
            return 11 === e4[r3] && 119 === e4[r3 + 1] && void 0 !== be(t3) && Di(e4, r3) < 16;
          }, t2;
        })(ti);
        function xi(e3, t2, r2, n2, i2) {
          if (r2 + 8 > t2.length) return -1;
          if (11 !== t2[r2] || 119 !== t2[r2 + 1]) return -1;
          var a2 = t2[r2 + 4] >> 6;
          if (a2 >= 3) return -1;
          var s2 = [48e3, 44100, 32e3][a2], o2 = 63 & t2[r2 + 4], l2 = 2 * [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][3 * o2 + a2];
          if (r2 + l2 > t2.length) return -1;
          var u2 = t2[r2 + 6] >> 5, c2 = 0;
          2 === u2 ? c2 += 2 : (1 & u2 && 1 !== u2 && (c2 += 2), 4 & u2 && (c2 += 2));
          var d2 = (t2[r2 + 6] << 8 | t2[r2 + 7]) >> 12 - c2 & 1, h2 = [2, 1, 2, 3, 3, 4, 4, 5][u2] + d2, f2 = t2[r2 + 5] >> 3, g2 = 7 & t2[r2 + 5], m2 = new Uint8Array([a2 << 6 | f2 << 1 | g2 >> 2, (3 & g2) << 6 | u2 << 3 | d2 << 2 | o2 >> 4, o2 << 4 & 224]), p2 = n2 + i2 * (1536 / s2 * 9e4), v2 = t2.subarray(r2, r2 + l2);
          return e3.config = m2, e3.channelCount = h2, e3.samplerate = s2, e3.samples.push({ unit: v2, pts: p2 }), l2;
        }
        var _i = (function() {
          function e3() {
            this.VideoSample = null;
          }
          var t2 = e3.prototype;
          return t2.createVideoSample = function(e4, t3, r2, n2) {
            return { key: e4, frame: false, pts: t3, dts: r2, units: [], debug: n2, length: 0 };
          }, t2.getLastNalUnit = function(e4) {
            var t3, r2, n2 = this.VideoSample;
            if (n2 && 0 !== n2.units.length || (n2 = e4[e4.length - 1]), null != (t3 = n2) && t3.units) {
              var i2 = n2.units;
              r2 = i2[i2.length - 1];
            }
            return r2;
          }, t2.pushAccessUnit = function(e4, t3) {
            if (e4.units.length && e4.frame) {
              if (void 0 === e4.pts) {
                var r2 = t3.samples, n2 = r2.length;
                if (!n2) return void t3.dropped++;
                var i2 = r2[n2 - 1];
                e4.pts = i2.pts, e4.dts = i2.dts;
              }
              t3.samples.push(e4);
            }
            e4.debug.length && F.log(e4.pts + "/" + e4.dts + ":" + e4.debug);
          }, e3;
        })(), Oi = (function() {
          function e3(e4) {
            this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e4, this.bytesAvailable = e4.byteLength, this.word = 0, this.bitsAvailable = 0;
          }
          var t2 = e3.prototype;
          return t2.loadWord = function() {
            var e4 = this.data, t3 = this.bytesAvailable, r2 = e4.byteLength - t3, n2 = new Uint8Array(4), i2 = Math.min(4, t3);
            if (0 === i2) throw new Error("no bytes available");
            n2.set(e4.subarray(r2, r2 + i2)), this.word = new DataView(n2.buffer).getUint32(0), this.bitsAvailable = 8 * i2, this.bytesAvailable -= i2;
          }, t2.skipBits = function(e4) {
            var t3;
            e4 = Math.min(e4, 8 * this.bytesAvailable + this.bitsAvailable), this.bitsAvailable > e4 ? (this.word <<= e4, this.bitsAvailable -= e4) : (e4 -= this.bitsAvailable, e4 -= (t3 = e4 >> 3) << 3, this.bytesAvailable -= t3, this.loadWord(), this.word <<= e4, this.bitsAvailable -= e4);
          }, t2.readBits = function(e4) {
            var t3 = Math.min(this.bitsAvailable, e4), r2 = this.word >>> 32 - t3;
            if (e4 > 32 && F.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t3, this.bitsAvailable > 0) this.word <<= t3;
            else {
              if (!(this.bytesAvailable > 0)) throw new Error("no bits available");
              this.loadWord();
            }
            return (t3 = e4 - t3) > 0 && this.bitsAvailable ? r2 << t3 | this.readBits(t3) : r2;
          }, t2.skipLZ = function() {
            var e4;
            for (e4 = 0; e4 < this.bitsAvailable; ++e4) if (this.word & 2147483648 >>> e4) return this.word <<= e4, this.bitsAvailable -= e4, e4;
            return this.loadWord(), e4 + this.skipLZ();
          }, t2.skipUEG = function() {
            this.skipBits(1 + this.skipLZ());
          }, t2.skipEG = function() {
            this.skipBits(1 + this.skipLZ());
          }, t2.readUEG = function() {
            var e4 = this.skipLZ();
            return this.readBits(e4 + 1) - 1;
          }, t2.readEG = function() {
            var e4 = this.readUEG();
            return 1 & e4 ? 1 + e4 >>> 1 : -1 * (e4 >>> 1);
          }, t2.readBoolean = function() {
            return 1 === this.readBits(1);
          }, t2.readUByte = function() {
            return this.readBits(8);
          }, t2.readUShort = function() {
            return this.readBits(16);
          }, t2.readUInt = function() {
            return this.readBits(32);
          }, t2.skipScalingList = function(e4) {
            for (var t3 = 8, r2 = 8, n2 = 0; n2 < e4; n2++) 0 !== r2 && (r2 = (t3 + this.readEG() + 256) % 256), t3 = 0 === r2 ? t3 : r2;
          }, t2.readSPS = function() {
            var e4, t3, r2, n2 = 0, i2 = 0, a2 = 0, s2 = 0, o2 = this.readUByte.bind(this), l2 = this.readBits.bind(this), u2 = this.readUEG.bind(this), c2 = this.readBoolean.bind(this), d2 = this.skipBits.bind(this), h2 = this.skipEG.bind(this), f2 = this.skipUEG.bind(this), g2 = this.skipScalingList.bind(this);
            o2();
            var m2 = o2();
            if (l2(5), d2(3), o2(), f2(), 100 === m2 || 110 === m2 || 122 === m2 || 244 === m2 || 44 === m2 || 83 === m2 || 86 === m2 || 118 === m2 || 128 === m2) {
              var p2 = u2();
              if (3 === p2 && d2(1), f2(), f2(), d2(1), c2()) for (t3 = 3 !== p2 ? 8 : 12, r2 = 0; r2 < t3; r2++) c2() && g2(r2 < 6 ? 16 : 64);
            }
            f2();
            var v2 = u2();
            if (0 === v2) u2();
            else if (1 === v2) for (d2(1), h2(), h2(), e4 = u2(), r2 = 0; r2 < e4; r2++) h2();
            f2(), d2(1);
            var y2 = u2(), T2 = u2(), b2 = l2(1);
            0 === b2 && d2(1), d2(1), c2() && (n2 = u2(), i2 = u2(), a2 = u2(), s2 = u2());
            var E2 = [1, 1];
            if (c2() && c2()) switch (o2()) {
              case 1:
                E2 = [1, 1];
                break;
              case 2:
                E2 = [12, 11];
                break;
              case 3:
                E2 = [10, 11];
                break;
              case 4:
                E2 = [16, 11];
                break;
              case 5:
                E2 = [40, 33];
                break;
              case 6:
                E2 = [24, 11];
                break;
              case 7:
                E2 = [20, 11];
                break;
              case 8:
                E2 = [32, 11];
                break;
              case 9:
                E2 = [80, 33];
                break;
              case 10:
                E2 = [18, 11];
                break;
              case 11:
                E2 = [15, 11];
                break;
              case 12:
                E2 = [64, 33];
                break;
              case 13:
                E2 = [160, 99];
                break;
              case 14:
                E2 = [4, 3];
                break;
              case 15:
                E2 = [3, 2];
                break;
              case 16:
                E2 = [2, 1];
                break;
              case 255:
                E2 = [o2() << 8 | o2(), o2() << 8 | o2()];
            }
            return { width: Math.ceil(16 * (y2 + 1) - 2 * n2 - 2 * i2), height: (2 - b2) * (T2 + 1) * 16 - (b2 ? 2 : 4) * (a2 + s2), pixelRatio: E2 };
          }, t2.readSliceType = function() {
            return this.readUByte(), this.readUEG(), this.readUEG();
          }, e3;
        })(), Pi = (function(e3) {
          function t2() {
            return e3.apply(this, arguments) || this;
          }
          c(t2, e3);
          var r2 = t2.prototype;
          return r2.parseAVCPES = function(e4, t3, r3, n2, i2) {
            var a2, s2 = this, o2 = this.parseAVCNALu(e4, r3.data), l2 = this.VideoSample, u2 = false;
            r3.data = null, l2 && o2.length && !e4.audFound && (this.pushAccessUnit(l2, e4), l2 = this.VideoSample = this.createVideoSample(false, r3.pts, r3.dts, "")), o2.forEach((function(n3) {
              var o3;
              switch (n3.type) {
                case 1:
                  var c2 = false;
                  a2 = true;
                  var d2, h2 = n3.data;
                  if (u2 && h2.length > 4) {
                    var f2 = new Oi(h2).readSliceType();
                    2 !== f2 && 4 !== f2 && 7 !== f2 && 9 !== f2 || (c2 = true);
                  }
                  c2 && null != (d2 = l2) && d2.frame && !l2.key && (s2.pushAccessUnit(l2, e4), l2 = s2.VideoSample = null), l2 || (l2 = s2.VideoSample = s2.createVideoSample(true, r3.pts, r3.dts, "")), l2.frame = true, l2.key = c2;
                  break;
                case 5:
                  a2 = true, null != (o3 = l2) && o3.frame && !l2.key && (s2.pushAccessUnit(l2, e4), l2 = s2.VideoSample = null), l2 || (l2 = s2.VideoSample = s2.createVideoSample(true, r3.pts, r3.dts, "")), l2.key = true, l2.frame = true;
                  break;
                case 6:
                  a2 = true, st(n3.data, 1, r3.pts, t3.samples);
                  break;
                case 7:
                  var g2, m2;
                  a2 = true, u2 = true;
                  var p2 = n3.data, v2 = new Oi(p2).readSPS();
                  if (!e4.sps || e4.width !== v2.width || e4.height !== v2.height || (null == (g2 = e4.pixelRatio) ? void 0 : g2[0]) !== v2.pixelRatio[0] || (null == (m2 = e4.pixelRatio) ? void 0 : m2[1]) !== v2.pixelRatio[1]) {
                    e4.width = v2.width, e4.height = v2.height, e4.pixelRatio = v2.pixelRatio, e4.sps = [p2], e4.duration = i2;
                    for (var y2 = p2.subarray(1, 4), T2 = "avc1.", b2 = 0; b2 < 3; b2++) {
                      var E2 = y2[b2].toString(16);
                      E2.length < 2 && (E2 = "0" + E2), T2 += E2;
                    }
                    e4.codec = T2;
                  }
                  break;
                case 8:
                  a2 = true, e4.pps = [n3.data];
                  break;
                case 9:
                  a2 = true, e4.audFound = true, l2 && s2.pushAccessUnit(l2, e4), l2 = s2.VideoSample = s2.createVideoSample(false, r3.pts, r3.dts, "");
                  break;
                case 12:
                  a2 = true;
                  break;
                default:
                  a2 = false, l2 && (l2.debug += "unknown NAL " + n3.type + " ");
              }
              l2 && a2 && l2.units.push(n3);
            })), n2 && l2 && (this.pushAccessUnit(l2, e4), this.VideoSample = null);
          }, r2.parseAVCNALu = function(e4, t3) {
            var r3, n2, i2 = t3.byteLength, a2 = e4.naluState || 0, s2 = a2, o2 = [], l2 = 0, u2 = -1, c2 = 0;
            for (-1 === a2 && (u2 = 0, c2 = 31 & t3[0], a2 = 0, l2 = 1); l2 < i2; ) if (r3 = t3[l2++], a2) if (1 !== a2) if (r3) if (1 === r3) {
              if (n2 = l2 - a2 - 1, u2 >= 0) {
                var d2 = { data: t3.subarray(u2, n2), type: c2 };
                o2.push(d2);
              } else {
                var h2 = this.getLastNalUnit(e4.samples);
                h2 && (s2 && l2 <= 4 - s2 && h2.state && (h2.data = h2.data.subarray(0, h2.data.byteLength - s2)), n2 > 0 && (h2.data = rt(h2.data, t3.subarray(0, n2)), h2.state = 0));
              }
              l2 < i2 ? (u2 = l2, c2 = 31 & t3[l2], a2 = 0) : a2 = -1;
            } else a2 = 0;
            else a2 = 3;
            else a2 = r3 ? 0 : 2;
            else a2 = r3 ? 0 : 1;
            if (u2 >= 0 && a2 >= 0) {
              var f2 = { data: t3.subarray(u2, i2), type: c2, state: a2 };
              o2.push(f2);
            }
            if (0 === o2.length) {
              var g2 = this.getLastNalUnit(e4.samples);
              g2 && (g2.data = rt(g2.data, t3));
            }
            return e4.naluState = a2, o2;
          }, t2;
        })(_i), Mi = (function() {
          function e3(e4, t3, r2) {
            this.keyData = void 0, this.decrypter = void 0, this.keyData = r2, this.decrypter = new qn(t3, { removePKCS7Padding: false });
          }
          var t2 = e3.prototype;
          return t2.decryptBuffer = function(e4) {
            return this.decrypter.decrypt(e4, this.keyData.key.buffer, this.keyData.iv.buffer);
          }, t2.decryptAacSample = function(e4, t3, r2) {
            var n2 = this, i2 = e4[t3].unit;
            if (!(i2.length <= 16)) {
              var a2 = i2.subarray(16, i2.length - i2.length % 16), s2 = a2.buffer.slice(a2.byteOffset, a2.byteOffset + a2.length);
              this.decryptBuffer(s2).then((function(a3) {
                var s3 = new Uint8Array(a3);
                i2.set(s3, 16), n2.decrypter.isSync() || n2.decryptAacSamples(e4, t3 + 1, r2);
              }));
            }
          }, t2.decryptAacSamples = function(e4, t3, r2) {
            for (; ; t3++) {
              if (t3 >= e4.length) return void r2();
              if (!(e4[t3].unit.length < 32 || (this.decryptAacSample(e4, t3, r2), this.decrypter.isSync()))) return;
            }
          }, t2.getAvcEncryptedData = function(e4) {
            for (var t3 = 16 * Math.floor((e4.length - 48) / 160) + 16, r2 = new Int8Array(t3), n2 = 0, i2 = 32; i2 < e4.length - 16; i2 += 160, n2 += 16) r2.set(e4.subarray(i2, i2 + 16), n2);
            return r2;
          }, t2.getAvcDecryptedUnit = function(e4, t3) {
            for (var r2 = new Uint8Array(t3), n2 = 0, i2 = 32; i2 < e4.length - 16; i2 += 160, n2 += 16) e4.set(r2.subarray(n2, n2 + 16), i2);
            return e4;
          }, t2.decryptAvcSample = function(e4, t3, r2, n2, i2) {
            var a2 = this, s2 = ot(i2.data), o2 = this.getAvcEncryptedData(s2);
            this.decryptBuffer(o2.buffer).then((function(o3) {
              i2.data = a2.getAvcDecryptedUnit(s2, o3), a2.decrypter.isSync() || a2.decryptAvcSamples(e4, t3, r2 + 1, n2);
            }));
          }, t2.decryptAvcSamples = function(e4, t3, r2, n2) {
            if (e4 instanceof Uint8Array) throw new Error("Cannot decrypt samples of type Uint8Array");
            for (; ; t3++, r2 = 0) {
              if (t3 >= e4.length) return void n2();
              for (var i2 = e4[t3].units; !(r2 >= i2.length); r2++) {
                var a2 = i2[r2];
                if (!(a2.data.length <= 48 || 1 !== a2.type && 5 !== a2.type || (this.decryptAvcSample(e4, t3, r2, n2, a2), this.decrypter.isSync()))) return;
              }
            }
          }, e3;
        })(), Fi = 188, Ni = (function() {
          function e3(e4, t3, r2) {
            this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = false, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = e4, this.config = t3, this.typeSupported = r2, this.videoParser = new Pi();
          }
          e3.probe = function(t3) {
            var r2 = e3.syncOffset(t3);
            return r2 > 0 && F.warn("MPEG2-TS detected but first sync word found @ offset " + r2), -1 !== r2;
          }, e3.syncOffset = function(e4) {
            for (var t3 = e4.length, r2 = Math.min(5 * Fi, t3 - Fi) + 1, n2 = 0; n2 < r2; ) {
              for (var i2 = false, a2 = -1, s2 = 0, o2 = n2; o2 < t3; o2 += Fi) {
                if (71 !== e4[o2] || t3 - o2 !== Fi && 71 !== e4[o2 + Fi]) {
                  if (s2) return -1;
                  break;
                }
                if (s2++, -1 === a2 && 0 !== (a2 = o2) && (r2 = Math.min(a2 + 99 * Fi, e4.length - Fi) + 1), i2 || (i2 = 0 === Ui(e4, o2)), i2 && s2 > 1 && (0 === a2 && s2 > 2 || o2 + Fi > r2)) return a2;
              }
              n2++;
            }
            return -1;
          }, e3.createTrack = function(e4, t3) {
            return { container: "video" === e4 || "audio" === e4 ? "video/mp2t" : void 0, type: e4, id: Pe[e4], pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0, duration: "audio" === e4 ? t3 : void 0 };
          };
          var t2 = e3.prototype;
          return t2.resetInitSegment = function(t3, r2, n2, i2) {
            this.pmtParsed = false, this._pmtId = -1, this._videoTrack = e3.createTrack("video"), this._audioTrack = e3.createTrack("audio", i2), this._id3Track = e3.createTrack("id3"), this._txtTrack = e3.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.remainderData = null, this.audioCodec = r2, this.videoCodec = n2, this._duration = i2;
          }, t2.resetTimeStamp = function() {
          }, t2.resetContiguity = function() {
            var e4 = this._audioTrack, t3 = this._videoTrack, r2 = this._id3Track;
            e4 && (e4.pesData = null), t3 && (t3.pesData = null), r2 && (r2.pesData = null), this.aacOverFlow = null, this.remainderData = null;
          }, t2.demux = function(t3, r2, n2, i2) {
            var a2;
            void 0 === n2 && (n2 = false), void 0 === i2 && (i2 = false), n2 || (this.sampleAes = null);
            var s2 = this._videoTrack, o2 = this._audioTrack, l2 = this._id3Track, u2 = this._txtTrack, c2 = s2.pid, d2 = s2.pesData, h2 = o2.pid, f2 = l2.pid, g2 = o2.pesData, m2 = l2.pesData, p2 = null, v2 = this.pmtParsed, y2 = this._pmtId, T2 = t3.length;
            if (this.remainderData && (T2 = (t3 = rt(this.remainderData, t3)).length, this.remainderData = null), T2 < Fi && !i2) return this.remainderData = t3, { audioTrack: o2, videoTrack: s2, id3Track: l2, textTrack: u2 };
            var b2 = Math.max(0, e3.syncOffset(t3));
            (T2 -= (T2 - b2) % Fi) < t3.byteLength && !i2 && (this.remainderData = new Uint8Array(t3.buffer, T2, t3.buffer.byteLength - T2));
            for (var E2 = 0, S2 = b2; S2 < T2; S2 += Fi) if (71 === t3[S2]) {
              var A2 = !!(64 & t3[S2 + 1]), k2 = Ui(t3, S2), L2 = void 0;
              if ((48 & t3[S2 + 3]) >> 4 > 1) {
                if ((L2 = S2 + 5 + t3[S2 + 4]) === S2 + Fi) continue;
              } else L2 = S2 + 4;
              switch (k2) {
                case c2:
                  A2 && (d2 && (a2 = Hi(d2)) && this.videoParser.parseAVCPES(s2, u2, a2, false, this._duration), d2 = { data: [], size: 0 }), d2 && (d2.data.push(t3.subarray(L2, S2 + Fi)), d2.size += S2 + Fi - L2);
                  break;
                case h2:
                  if (A2) {
                    if (g2 && (a2 = Hi(g2))) switch (o2.segmentCodec) {
                      case "aac":
                        this.parseAACPES(o2, a2);
                        break;
                      case "mp3":
                        this.parseMPEGPES(o2, a2);
                        break;
                      case "ac3":
                        this.parseAC3PES(o2, a2);
                    }
                    g2 = { data: [], size: 0 };
                  }
                  g2 && (g2.data.push(t3.subarray(L2, S2 + Fi)), g2.size += S2 + Fi - L2);
                  break;
                case f2:
                  A2 && (m2 && (a2 = Hi(m2)) && this.parseID3PES(l2, a2), m2 = { data: [], size: 0 }), m2 && (m2.data.push(t3.subarray(L2, S2 + Fi)), m2.size += S2 + Fi - L2);
                  break;
                case 0:
                  A2 && (L2 += t3[L2] + 1), y2 = this._pmtId = Bi(t3, L2);
                  break;
                case y2:
                  A2 && (L2 += t3[L2] + 1);
                  var R2 = Gi(t3, L2, this.typeSupported, n2);
                  (c2 = R2.videoPid) > 0 && (s2.pid = c2, s2.segmentCodec = R2.segmentVideoCodec), (h2 = R2.audioPid) > 0 && (o2.pid = h2, o2.segmentCodec = R2.segmentAudioCodec), (f2 = R2.id3Pid) > 0 && (l2.pid = f2), null === p2 || v2 || (F.warn("MPEG-TS PMT found at " + S2 + " after unknown PID '" + p2 + "'. Backtracking to sync byte @" + b2 + " to parse all TS packets."), p2 = null, S2 = b2 - 188), v2 = this.pmtParsed = true;
                  break;
                case 17:
                case 8191:
                  break;
                default:
                  p2 = k2;
              }
            } else E2++;
            if (E2 > 0) {
              var C2 = new Error("Found " + E2 + " TS packet/s that do not start with 0x47");
              this.observer.emit(I.ERROR, I.ERROR, { type: w.MEDIA_ERROR, details: D.FRAG_PARSING_ERROR, fatal: false, error: C2, reason: C2.message });
            }
            s2.pesData = d2, o2.pesData = g2, l2.pesData = m2;
            var x2 = { audioTrack: o2, videoTrack: s2, id3Track: l2, textTrack: u2 };
            return i2 && this.extractRemainingSamples(x2), x2;
          }, t2.flush = function() {
            var e4, t3 = this.remainderData;
            return this.remainderData = null, e4 = t3 ? this.demux(t3, -1, false, true) : { videoTrack: this._videoTrack, audioTrack: this._audioTrack, id3Track: this._id3Track, textTrack: this._txtTrack }, this.extractRemainingSamples(e4), this.sampleAes ? this.decrypt(e4, this.sampleAes) : e4;
          }, t2.extractRemainingSamples = function(e4) {
            var t3, r2 = e4.audioTrack, n2 = e4.videoTrack, i2 = e4.id3Track, a2 = e4.textTrack, s2 = n2.pesData, o2 = r2.pesData, l2 = i2.pesData;
            if (s2 && (t3 = Hi(s2)) ? (this.videoParser.parseAVCPES(n2, a2, t3, true, this._duration), n2.pesData = null) : n2.pesData = s2, o2 && (t3 = Hi(o2))) {
              switch (r2.segmentCodec) {
                case "aac":
                  this.parseAACPES(r2, t3);
                  break;
                case "mp3":
                  this.parseMPEGPES(r2, t3);
                  break;
                case "ac3":
                  this.parseAC3PES(r2, t3);
              }
              r2.pesData = null;
            } else null != o2 && o2.size && F.log("last AAC PES packet truncated,might overlap between fragments"), r2.pesData = o2;
            l2 && (t3 = Hi(l2)) ? (this.parseID3PES(i2, t3), i2.pesData = null) : i2.pesData = l2;
          }, t2.demuxSampleAes = function(e4, t3, r2) {
            var n2 = this.demux(e4, r2, true, !this.config.progressive), i2 = this.sampleAes = new Mi(this.observer, this.config, t3);
            return this.decrypt(n2, i2);
          }, t2.decrypt = function(e4, t3) {
            return new Promise((function(r2) {
              var n2 = e4.audioTrack, i2 = e4.videoTrack;
              n2.samples && "aac" === n2.segmentCodec ? t3.decryptAacSamples(n2.samples, 0, (function() {
                i2.samples ? t3.decryptAvcSamples(i2.samples, 0, 0, (function() {
                  r2(e4);
                })) : r2(e4);
              })) : i2.samples && t3.decryptAvcSamples(i2.samples, 0, 0, (function() {
                r2(e4);
              }));
            }));
          }, t2.destroy = function() {
            this._duration = 0;
          }, t2.parseAACPES = function(e4, t3) {
            var r2, n2, i2, a2 = 0, s2 = this.aacOverFlow, o2 = t3.data;
            if (s2) {
              this.aacOverFlow = null;
              var l2 = s2.missing, u2 = s2.sample.unit.byteLength;
              if (-1 === l2) o2 = rt(s2.sample.unit, o2);
              else {
                var c2 = u2 - l2;
                s2.sample.unit.set(o2.subarray(0, l2), c2), e4.samples.push(s2.sample), a2 = s2.missing;
              }
            }
            for (r2 = a2, n2 = o2.length; r2 < n2 - 1 && !li(o2, r2); r2++) ;
            if (r2 !== a2) {
              var d2, h2 = r2 < n2 - 1;
              d2 = h2 ? "AAC PES did not start with ADTS header,offset:" + r2 : "No ADTS header found in AAC PES";
              var f2 = new Error(d2);
              if (F.warn("parsing error: " + d2), this.observer.emit(I.ERROR, I.ERROR, { type: w.MEDIA_ERROR, details: D.FRAG_PARSING_ERROR, fatal: false, levelRetry: h2, error: f2, reason: d2 }), !h2) return;
            }
            if (di(e4, this.observer, o2, r2, this.audioCodec), void 0 !== t3.pts) i2 = t3.pts;
            else {
              if (!s2) return void F.warn("[tsdemuxer]: AAC PES unknown PTS");
              var g2 = hi(e4.samplerate);
              i2 = s2.sample.pts + g2;
            }
            for (var m2, p2 = 0; r2 < n2; ) {
              if (r2 += (m2 = gi(e4, o2, r2, i2, p2)).length, m2.missing) {
                this.aacOverFlow = m2;
                break;
              }
              for (p2++; r2 < n2 - 1 && !li(o2, r2); r2++) ;
            }
          }, t2.parseMPEGPES = function(e4, t3) {
            var r2 = t3.data, n2 = r2.length, i2 = 0, a2 = 0, s2 = t3.pts;
            if (void 0 !== s2) for (; a2 < n2; ) if (Ai(r2, a2)) {
              var o2 = bi(e4, r2, a2, s2, i2);
              if (!o2) break;
              a2 += o2.length, i2++;
            } else a2++;
            else F.warn("[tsdemuxer]: MPEG PES unknown PTS");
          }, t2.parseAC3PES = function(e4, t3) {
            var r2 = t3.data, n2 = t3.pts;
            if (void 0 !== n2) for (var i2, a2 = r2.length, s2 = 0, o2 = 0; o2 < a2 && (i2 = xi(e4, r2, o2, n2, s2++)) > 0; ) o2 += i2;
            else F.warn("[tsdemuxer]: AC3 PES unknown PTS");
          }, t2.parseID3PES = function(e4, t3) {
            if (void 0 !== t3.pts) {
              var r2 = u({}, t3, { type: this._videoTrack ? or.emsg : or.audioId3, duration: Number.POSITIVE_INFINITY });
              e4.samples.push(r2);
            } else F.warn("[tsdemuxer]: ID3 PES unknown PTS");
          }, e3;
        })();
        function Ui(e3, t2) {
          return ((31 & e3[t2 + 1]) << 8) + e3[t2 + 2];
        }
        function Bi(e3, t2) {
          return (31 & e3[t2 + 10]) << 8 | e3[t2 + 11];
        }
        function Gi(e3, t2, r2, n2) {
          var i2 = { audioPid: -1, videoPid: -1, id3Pid: -1, segmentVideoCodec: "avc", segmentAudioCodec: "aac" }, a2 = t2 + 3 + ((15 & e3[t2 + 1]) << 8 | e3[t2 + 2]) - 4;
          for (t2 += 12 + ((15 & e3[t2 + 10]) << 8 | e3[t2 + 11]); t2 < a2; ) {
            var s2 = Ui(e3, t2), o2 = (15 & e3[t2 + 3]) << 8 | e3[t2 + 4];
            switch (e3[t2]) {
              case 207:
                if (!n2) {
                  Vi("ADTS AAC");
                  break;
                }
              case 15:
                -1 === i2.audioPid && (i2.audioPid = s2);
                break;
              case 21:
                -1 === i2.id3Pid && (i2.id3Pid = s2);
                break;
              case 219:
                if (!n2) {
                  Vi("H.264");
                  break;
                }
              case 27:
                -1 === i2.videoPid && (i2.videoPid = s2, i2.segmentVideoCodec = "avc");
                break;
              case 3:
              case 4:
                r2.mpeg || r2.mp3 ? -1 === i2.audioPid && (i2.audioPid = s2, i2.segmentAudioCodec = "mp3") : F.log("MPEG audio found, not supported in this browser");
                break;
              case 193:
                if (!n2) {
                  Vi("AC-3");
                  break;
                }
              case 129:
                r2.ac3 ? -1 === i2.audioPid && (i2.audioPid = s2, i2.segmentAudioCodec = "ac3") : F.log("AC-3 audio found, not supported in this browser");
                break;
              case 6:
                if (-1 === i2.audioPid && o2 > 0) for (var l2 = t2 + 5, u2 = o2; u2 > 2; ) {
                  106 === e3[l2] && (true !== r2.ac3 ? F.log("AC-3 audio found, not supported in this browser for now") : (i2.audioPid = s2, i2.segmentAudioCodec = "ac3"));
                  var c2 = e3[l2 + 1] + 2;
                  l2 += c2, u2 -= c2;
                }
                break;
              case 194:
              case 135:
                F.warn("Unsupported EC-3 in M2TS found");
                break;
              case 36:
                F.warn("Unsupported HEVC in M2TS found");
            }
            t2 += o2 + 5;
          }
          return i2;
        }
        function Vi(e3) {
          F.log(e3 + " with AES-128-CBC encryption found in unencrypted stream");
        }
        function Hi(e3) {
          var t2, r2, n2, i2, a2, s2 = 0, o2 = e3.data;
          if (!e3 || 0 === e3.size) return null;
          for (; o2[0].length < 19 && o2.length > 1; ) o2[0] = rt(o2[0], o2[1]), o2.splice(1, 1);
          if (1 === ((t2 = o2[0])[0] << 16) + (t2[1] << 8) + t2[2]) {
            if ((r2 = (t2[4] << 8) + t2[5]) && r2 > e3.size - 6) return null;
            var l2 = t2[7];
            192 & l2 && (i2 = 536870912 * (14 & t2[9]) + 4194304 * (255 & t2[10]) + 16384 * (254 & t2[11]) + 128 * (255 & t2[12]) + (254 & t2[13]) / 2, 64 & l2 ? i2 - (a2 = 536870912 * (14 & t2[14]) + 4194304 * (255 & t2[15]) + 16384 * (254 & t2[16]) + 128 * (255 & t2[17]) + (254 & t2[18]) / 2) > 54e5 && (F.warn(Math.round((i2 - a2) / 9e4) + "s delta between PTS and DTS, align them"), i2 = a2) : a2 = i2);
            var u2 = (n2 = t2[8]) + 9;
            if (e3.size <= u2) return null;
            e3.size -= u2;
            for (var c2 = new Uint8Array(e3.size), d2 = 0, h2 = o2.length; d2 < h2; d2++) {
              var f2 = (t2 = o2[d2]).byteLength;
              if (u2) {
                if (u2 > f2) {
                  u2 -= f2;
                  continue;
                }
                t2 = t2.subarray(u2), f2 -= u2, u2 = 0;
              }
              c2.set(t2, s2), s2 += f2;
            }
            return r2 && (r2 -= n2 + 3), { data: c2, pts: i2, dts: a2, len: r2 };
          }
          return null;
        }
        var Ki = (function(e3) {
          function t2() {
            return e3.apply(this, arguments) || this;
          }
          c(t2, e3);
          var r2 = t2.prototype;
          return r2.resetInitSegment = function(t3, r3, n2, i2) {
            e3.prototype.resetInitSegment.call(this, t3, r3, n2, i2), this._audioTrack = { container: "audio/mpeg", type: "audio", id: 2, pid: -1, sequenceNumber: 0, segmentCodec: "mp3", samples: [], manifestCodec: r3, duration: i2, inputTimeScale: 9e4, dropped: 0 };
          }, t2.probe = function(e4) {
            if (!e4) return false;
            var t3 = ve(e4, 0), r3 = (null == t3 ? void 0 : t3.length) || 0;
            if (t3 && 11 === e4[r3] && 119 === e4[r3 + 1] && void 0 !== be(t3) && Di(e4, r3) <= 16) return false;
            for (var n2 = e4.length; r3 < n2; r3++) if (Li(e4, r3)) return F.log("MPEG Audio sync word found !"), true;
            return false;
          }, r2.canParse = function(e4, t3) {
            return ki(e4, t3);
          }, r2.appendFrame = function(e4, t3, r3) {
            if (null !== this.basePTS) return bi(e4, t3, r3, this.basePTS, this.frameIndex);
          }, t2;
        })(ti), ji = (function() {
          function e3() {
          }
          return e3.getSilentFrame = function(e4, t2) {
            if ("mp4a.40.2" === e4) {
              if (1 === t2) return new Uint8Array([0, 200, 0, 128, 35, 128]);
              if (2 === t2) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
              if (3 === t2) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
              if (4 === t2) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
              if (5 === t2) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
              if (6 === t2) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
            } else {
              if (1 === t2) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
              if (2 === t2) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
              if (3 === t2) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            }
          }, e3;
        })(), Yi = Math.pow(2, 32) - 1, Wi = (function() {
          function e3() {
          }
          return e3.init = function() {
            var t2;
            for (t2 in e3.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], ".mp3": [], dac3: [], "ac-3": [], mvex: [], mvhd: [], pasp: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] }, e3.types) e3.types.hasOwnProperty(t2) && (e3.types[t2] = [t2.charCodeAt(0), t2.charCodeAt(1), t2.charCodeAt(2), t2.charCodeAt(3)]);
            var r2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), n2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
            e3.HDLR_TYPES = { video: r2, audio: n2 };
            var i2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), a2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
            e3.STTS = e3.STSC = e3.STCO = a2, e3.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e3.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e3.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e3.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
            var s2 = new Uint8Array([105, 115, 111, 109]), o2 = new Uint8Array([97, 118, 99, 49]), l2 = new Uint8Array([0, 0, 0, 1]);
            e3.FTYP = e3.box(e3.types.ftyp, s2, l2, s2, o2), e3.DINF = e3.box(e3.types.dinf, e3.box(e3.types.dref, i2));
          }, e3.box = function(e4) {
            for (var t2 = 8, r2 = arguments.length, n2 = new Array(r2 > 1 ? r2 - 1 : 0), i2 = 1; i2 < r2; i2++) n2[i2 - 1] = arguments[i2];
            for (var a2 = n2.length, s2 = a2; a2--; ) t2 += n2[a2].byteLength;
            var o2 = new Uint8Array(t2);
            for (o2[0] = t2 >> 24 & 255, o2[1] = t2 >> 16 & 255, o2[2] = t2 >> 8 & 255, o2[3] = 255 & t2, o2.set(e4, 4), a2 = 0, t2 = 8; a2 < s2; a2++) o2.set(n2[a2], t2), t2 += n2[a2].byteLength;
            return o2;
          }, e3.hdlr = function(t2) {
            return e3.box(e3.types.hdlr, e3.HDLR_TYPES[t2]);
          }, e3.mdat = function(t2) {
            return e3.box(e3.types.mdat, t2);
          }, e3.mdhd = function(t2, r2) {
            r2 *= t2;
            var n2 = Math.floor(r2 / (Yi + 1)), i2 = Math.floor(r2 % (Yi + 1));
            return e3.box(e3.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t2 >> 24 & 255, t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2, n2 >> 24, n2 >> 16 & 255, n2 >> 8 & 255, 255 & n2, i2 >> 24, i2 >> 16 & 255, i2 >> 8 & 255, 255 & i2, 85, 196, 0, 0]));
          }, e3.mdia = function(t2) {
            return e3.box(e3.types.mdia, e3.mdhd(t2.timescale, t2.duration), e3.hdlr(t2.type), e3.minf(t2));
          }, e3.mfhd = function(t2) {
            return e3.box(e3.types.mfhd, new Uint8Array([0, 0, 0, 0, t2 >> 24, t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2]));
          }, e3.minf = function(t2) {
            return "audio" === t2.type ? e3.box(e3.types.minf, e3.box(e3.types.smhd, e3.SMHD), e3.DINF, e3.stbl(t2)) : e3.box(e3.types.minf, e3.box(e3.types.vmhd, e3.VMHD), e3.DINF, e3.stbl(t2));
          }, e3.moof = function(t2, r2, n2) {
            return e3.box(e3.types.moof, e3.mfhd(t2), e3.traf(n2, r2));
          }, e3.moov = function(t2) {
            for (var r2 = t2.length, n2 = []; r2--; ) n2[r2] = e3.trak(t2[r2]);
            return e3.box.apply(null, [e3.types.moov, e3.mvhd(t2[0].timescale, t2[0].duration)].concat(n2).concat(e3.mvex(t2)));
          }, e3.mvex = function(t2) {
            for (var r2 = t2.length, n2 = []; r2--; ) n2[r2] = e3.trex(t2[r2]);
            return e3.box.apply(null, [e3.types.mvex].concat(n2));
          }, e3.mvhd = function(t2, r2) {
            r2 *= t2;
            var n2 = Math.floor(r2 / (Yi + 1)), i2 = Math.floor(r2 % (Yi + 1)), a2 = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t2 >> 24 & 255, t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2, n2 >> 24, n2 >> 16 & 255, n2 >> 8 & 255, 255 & n2, i2 >> 24, i2 >> 16 & 255, i2 >> 8 & 255, 255 & i2, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
            return e3.box(e3.types.mvhd, a2);
          }, e3.sdtp = function(t2) {
            var r2, n2, i2 = t2.samples || [], a2 = new Uint8Array(4 + i2.length);
            for (r2 = 0; r2 < i2.length; r2++) n2 = i2[r2].flags, a2[r2 + 4] = n2.dependsOn << 4 | n2.isDependedOn << 2 | n2.hasRedundancy;
            return e3.box(e3.types.sdtp, a2);
          }, e3.stbl = function(t2) {
            return e3.box(e3.types.stbl, e3.stsd(t2), e3.box(e3.types.stts, e3.STTS), e3.box(e3.types.stsc, e3.STSC), e3.box(e3.types.stsz, e3.STSZ), e3.box(e3.types.stco, e3.STCO));
          }, e3.avc1 = function(t2) {
            var r2, n2, i2, a2 = [], s2 = [];
            for (r2 = 0; r2 < t2.sps.length; r2++) i2 = (n2 = t2.sps[r2]).byteLength, a2.push(i2 >>> 8 & 255), a2.push(255 & i2), a2 = a2.concat(Array.prototype.slice.call(n2));
            for (r2 = 0; r2 < t2.pps.length; r2++) i2 = (n2 = t2.pps[r2]).byteLength, s2.push(i2 >>> 8 & 255), s2.push(255 & i2), s2 = s2.concat(Array.prototype.slice.call(n2));
            var o2 = e3.box(e3.types.avcC, new Uint8Array([1, a2[3], a2[4], a2[5], 255, 224 | t2.sps.length].concat(a2).concat([t2.pps.length]).concat(s2))), l2 = t2.width, u2 = t2.height, c2 = t2.pixelRatio[0], d2 = t2.pixelRatio[1];
            return e3.box(e3.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l2 >> 8 & 255, 255 & l2, u2 >> 8 & 255, 255 & u2, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o2, e3.box(e3.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e3.box(e3.types.pasp, new Uint8Array([c2 >> 24, c2 >> 16 & 255, c2 >> 8 & 255, 255 & c2, d2 >> 24, d2 >> 16 & 255, d2 >> 8 & 255, 255 & d2])));
          }, e3.esds = function(e4) {
            var t2 = e4.config.length;
            return new Uint8Array([0, 0, 0, 0, 3, 23 + t2, 0, 1, 0, 4, 15 + t2, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t2]).concat(e4.config).concat([6, 1, 2]));
          }, e3.audioStsd = function(e4) {
            var t2 = e4.samplerate;
            return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e4.channelCount, 0, 16, 0, 0, 0, 0, t2 >> 8 & 255, 255 & t2, 0, 0]);
          }, e3.mp4a = function(t2) {
            return e3.box(e3.types.mp4a, e3.audioStsd(t2), e3.box(e3.types.esds, e3.esds(t2)));
          }, e3.mp3 = function(t2) {
            return e3.box(e3.types[".mp3"], e3.audioStsd(t2));
          }, e3.ac3 = function(t2) {
            return e3.box(e3.types["ac-3"], e3.audioStsd(t2), e3.box(e3.types.dac3, t2.config));
          }, e3.stsd = function(t2) {
            return "audio" === t2.type ? "mp3" === t2.segmentCodec && "mp3" === t2.codec ? e3.box(e3.types.stsd, e3.STSD, e3.mp3(t2)) : "ac3" === t2.segmentCodec ? e3.box(e3.types.stsd, e3.STSD, e3.ac3(t2)) : e3.box(e3.types.stsd, e3.STSD, e3.mp4a(t2)) : e3.box(e3.types.stsd, e3.STSD, e3.avc1(t2));
          }, e3.tkhd = function(t2) {
            var r2 = t2.id, n2 = t2.duration * t2.timescale, i2 = t2.width, a2 = t2.height, s2 = Math.floor(n2 / (Yi + 1)), o2 = Math.floor(n2 % (Yi + 1));
            return e3.box(e3.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r2 >> 24 & 255, r2 >> 16 & 255, r2 >> 8 & 255, 255 & r2, 0, 0, 0, 0, s2 >> 24, s2 >> 16 & 255, s2 >> 8 & 255, 255 & s2, o2 >> 24, o2 >> 16 & 255, o2 >> 8 & 255, 255 & o2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i2 >> 8 & 255, 255 & i2, 0, 0, a2 >> 8 & 255, 255 & a2, 0, 0]));
          }, e3.traf = function(t2, r2) {
            var n2 = e3.sdtp(t2), i2 = t2.id, a2 = Math.floor(r2 / (Yi + 1)), s2 = Math.floor(r2 % (Yi + 1));
            return e3.box(e3.types.traf, e3.box(e3.types.tfhd, new Uint8Array([0, 0, 0, 0, i2 >> 24, i2 >> 16 & 255, i2 >> 8 & 255, 255 & i2])), e3.box(e3.types.tfdt, new Uint8Array([1, 0, 0, 0, a2 >> 24, a2 >> 16 & 255, a2 >> 8 & 255, 255 & a2, s2 >> 24, s2 >> 16 & 255, s2 >> 8 & 255, 255 & s2])), e3.trun(t2, n2.length + 16 + 20 + 8 + 16 + 8 + 8), n2);
          }, e3.trak = function(t2) {
            return t2.duration = t2.duration || 4294967295, e3.box(e3.types.trak, e3.tkhd(t2), e3.mdia(t2));
          }, e3.trex = function(t2) {
            var r2 = t2.id;
            return e3.box(e3.types.trex, new Uint8Array([0, 0, 0, 0, r2 >> 24, r2 >> 16 & 255, r2 >> 8 & 255, 255 & r2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]));
          }, e3.trun = function(t2, r2) {
            var n2, i2, a2, s2, o2, l2, u2 = t2.samples || [], c2 = u2.length, d2 = 12 + 16 * c2, h2 = new Uint8Array(d2);
            for (r2 += 8 + d2, h2.set(["video" === t2.type ? 1 : 0, 0, 15, 1, c2 >>> 24 & 255, c2 >>> 16 & 255, c2 >>> 8 & 255, 255 & c2, r2 >>> 24 & 255, r2 >>> 16 & 255, r2 >>> 8 & 255, 255 & r2], 0), n2 = 0; n2 < c2; n2++) a2 = (i2 = u2[n2]).duration, s2 = i2.size, o2 = i2.flags, l2 = i2.cts, h2.set([a2 >>> 24 & 255, a2 >>> 16 & 255, a2 >>> 8 & 255, 255 & a2, s2 >>> 24 & 255, s2 >>> 16 & 255, s2 >>> 8 & 255, 255 & s2, o2.isLeading << 2 | o2.dependsOn, o2.isDependedOn << 6 | o2.hasRedundancy << 4 | o2.paddingValue << 1 | o2.isNonSync, 61440 & o2.degradPrio, 15 & o2.degradPrio, l2 >>> 24 & 255, l2 >>> 16 & 255, l2 >>> 8 & 255, 255 & l2], 12 + 16 * n2);
            return e3.box(e3.types.trun, h2);
          }, e3.initSegment = function(t2) {
            e3.types || e3.init();
            var r2 = e3.moov(t2);
            return rt(e3.FTYP, r2);
          }, e3;
        })();
        Wi.types = void 0, Wi.HDLR_TYPES = void 0, Wi.STTS = void 0, Wi.STSC = void 0, Wi.STCO = void 0, Wi.STSZ = void 0, Wi.VMHD = void 0, Wi.SMHD = void 0, Wi.STSD = void 0, Wi.FTYP = void 0, Wi.DINF = void 0;
        var zi = 9e4;
        function qi(e3, t2, r2, n2) {
          void 0 === r2 && (r2 = 1), void 0 === n2 && (n2 = false);
          var i2 = e3 * t2 * r2;
          return n2 ? Math.round(i2) : i2;
        }
        function Xi(e3, t2, r2, n2) {
          return void 0 === r2 && (r2 = 1), void 0 === n2 && (n2 = false), qi(e3, t2, 1 / r2, n2);
        }
        function $i(e3, t2) {
          return void 0 === t2 && (t2 = false), qi(e3, 1e3, 1 / zi, t2);
        }
        function Ji(e3, t2) {
          return void 0 === t2 && (t2 = 1), qi(e3, zi, 1 / t2);
        }
        var Qi = 1e4, Zi = 1024, ea = 1152, ta = 1536, ra = null, na = null, ia = (function() {
          function e3(e4, t3, r2, n2) {
            if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = false, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = false, this.isVideoContiguous = false, this.videoTrackConfig = void 0, this.observer = e4, this.config = t3, this.typeSupported = r2, this.ISGenerated = false, null === ra) {
              var i2 = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
              ra = i2 ? parseInt(i2[1]) : 0;
            }
            if (null === na) {
              var a2 = navigator.userAgent.match(/Safari\/(\d+)/i);
              na = a2 ? parseInt(a2[1]) : 0;
            }
          }
          var t2 = e3.prototype;
          return t2.destroy = function() {
            this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
          }, t2.resetTimeStamp = function(e4) {
            F.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = e4;
          }, t2.resetNextTimestamp = function() {
            F.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = false, this.isAudioContiguous = false;
          }, t2.resetInitSegment = function() {
            F.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = false, this.videoTrackConfig = void 0;
          }, t2.getVideoStartPts = function(e4) {
            var t3 = false, r2 = e4.reduce((function(e5, r3) {
              var n2 = r3.pts - e5;
              return n2 < -4294967296 ? (t3 = true, aa(e5, r3.pts)) : n2 > 0 ? e5 : r3.pts;
            }), e4[0].pts);
            return t3 && F.debug("PTS rollover detected"), r2;
          }, t2.remux = function(e4, t3, r2, n2, i2, a2, s2, o2) {
            var l2, u2, c2, d2, h2, f2, g2 = i2, m2 = i2, p2 = e4.pid > -1, v2 = t3.pid > -1, y2 = t3.samples.length, T2 = e4.samples.length > 0, b2 = s2 && y2 > 0 || y2 > 1;
            if ((!p2 || T2) && (!v2 || b2) || this.ISGenerated || s2) {
              if (this.ISGenerated) {
                var E2, S2, A2, k2, L2 = this.videoTrackConfig;
                !L2 || t3.width === L2.width && t3.height === L2.height && (null == (E2 = t3.pixelRatio) ? void 0 : E2[0]) === (null == (S2 = L2.pixelRatio) ? void 0 : S2[0]) && (null == (A2 = t3.pixelRatio) ? void 0 : A2[1]) === (null == (k2 = L2.pixelRatio) ? void 0 : k2[1]) || this.resetInitSegment();
              } else c2 = this.generateIS(e4, t3, i2, a2);
              var R2, I2 = this.isVideoContiguous, w2 = -1;
              if (b2 && (w2 = sa(t3.samples), !I2 && this.config.forceKeyFrameOnDiscontinuity)) if (f2 = true, w2 > 0) {
                F.warn("[mp4-remuxer]: Dropped " + w2 + " out of " + y2 + " video samples due to a missing keyframe");
                var D2 = this.getVideoStartPts(t3.samples);
                t3.samples = t3.samples.slice(w2), t3.dropped += w2, R2 = m2 += (t3.samples[0].pts - D2) / t3.inputTimeScale;
              } else -1 === w2 && (F.warn("[mp4-remuxer]: No keyframe found out of " + y2 + " video samples"), f2 = false);
              if (this.ISGenerated) {
                if (T2 && b2) {
                  var C2 = this.getVideoStartPts(t3.samples), x2 = (aa(e4.samples[0].pts, C2) - C2) / t3.inputTimeScale;
                  g2 += Math.max(0, x2), m2 += Math.max(0, -x2);
                }
                if (T2) {
                  if (e4.samplerate || (F.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), c2 = this.generateIS(e4, t3, i2, a2)), u2 = this.remuxAudio(e4, g2, this.isAudioContiguous, a2, v2 || b2 || o2 === $t.AUDIO ? m2 : void 0), b2) {
                    var _2 = u2 ? u2.endPTS - u2.startPTS : 0;
                    t3.inputTimeScale || (F.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), c2 = this.generateIS(e4, t3, i2, a2)), l2 = this.remuxVideo(t3, m2, I2, _2);
                  }
                } else b2 && (l2 = this.remuxVideo(t3, m2, I2, 0));
                l2 && (l2.firstKeyFrame = w2, l2.independent = -1 !== w2, l2.firstKeyFramePTS = R2);
              }
            }
            return this.ISGenerated && this._initPTS && this._initDTS && (r2.samples.length && (h2 = oa(r2, i2, this._initPTS, this._initDTS)), n2.samples.length && (d2 = la(n2, i2, this._initPTS))), { audio: u2, video: l2, initSegment: c2, independent: f2, text: d2, id3: h2 };
          }, t2.generateIS = function(e4, t3, r2, n2) {
            var i2, a2, s2, o2 = e4.samples, l2 = t3.samples, u2 = this.typeSupported, c2 = {}, d2 = this._initPTS, h2 = !d2 || n2, f2 = "audio/mp4";
            if (h2 && (i2 = a2 = 1 / 0), e4.config && o2.length) {
              switch (e4.timescale = e4.samplerate, e4.segmentCodec) {
                case "mp3":
                  u2.mpeg ? (f2 = "audio/mpeg", e4.codec = "") : u2.mp3 && (e4.codec = "mp3");
                  break;
                case "ac3":
                  e4.codec = "ac-3";
              }
              c2.audio = { id: "audio", container: f2, codec: e4.codec, initSegment: "mp3" === e4.segmentCodec && u2.mpeg ? new Uint8Array(0) : Wi.initSegment([e4]), metadata: { channelCount: e4.channelCount } }, h2 && (s2 = e4.inputTimeScale, d2 && s2 === d2.timescale ? h2 = false : i2 = a2 = o2[0].pts - Math.round(s2 * r2));
            }
            if (t3.sps && t3.pps && l2.length) {
              if (t3.timescale = t3.inputTimeScale, c2.video = { id: "main", container: "video/mp4", codec: t3.codec, initSegment: Wi.initSegment([t3]), metadata: { width: t3.width, height: t3.height } }, h2) if (s2 = t3.inputTimeScale, d2 && s2 === d2.timescale) h2 = false;
              else {
                var g2 = this.getVideoStartPts(l2), m2 = Math.round(s2 * r2);
                a2 = Math.min(a2, aa(l2[0].dts, g2) - m2), i2 = Math.min(i2, g2 - m2);
              }
              this.videoTrackConfig = { width: t3.width, height: t3.height, pixelRatio: t3.pixelRatio };
            }
            if (Object.keys(c2).length) return this.ISGenerated = true, h2 ? (this._initPTS = { baseTime: i2, timescale: s2 }, this._initDTS = { baseTime: a2, timescale: s2 }) : i2 = s2 = void 0, { tracks: c2, initPTS: i2, timescale: s2 };
          }, t2.remuxVideo = function(e4, t3, r2, n2) {
            var i2, a2, s2 = e4.inputTimeScale, o2 = e4.samples, l2 = [], c2 = o2.length, d2 = this._initPTS, h2 = this.nextAvcDts, f2 = 8, g2 = this.videoSampleDuration, m2 = Number.POSITIVE_INFINITY, p2 = Number.NEGATIVE_INFINITY, v2 = false;
            if (!r2 || null === h2) {
              var y2 = t3 * s2, T2 = o2[0].pts - aa(o2[0].dts, o2[0].pts);
              ra && null !== h2 && Math.abs(y2 - T2 - h2) < 15e3 ? r2 = true : h2 = y2 - T2;
            }
            for (var b2 = d2.baseTime * s2 / d2.timescale, E2 = 0; E2 < c2; E2++) {
              var S2 = o2[E2];
              S2.pts = aa(S2.pts - b2, h2), S2.dts = aa(S2.dts - b2, h2), S2.dts < o2[E2 > 0 ? E2 - 1 : E2].dts && (v2 = true);
            }
            v2 && o2.sort((function(e5, t4) {
              var r3 = e5.dts - t4.dts, n3 = e5.pts - t4.pts;
              return r3 || n3;
            })), i2 = o2[0].dts;
            var A2 = (a2 = o2[o2.length - 1].dts) - i2, k2 = A2 ? Math.round(A2 / (c2 - 1)) : g2 || e4.inputTimeScale / 30;
            if (r2) {
              var L2 = i2 - h2, R2 = L2 > k2, C2 = L2 < -1;
              if ((R2 || C2) && (R2 ? F.warn("AVC: " + $i(L2, true) + " ms (" + L2 + "dts) hole between fragments detected at " + t3.toFixed(3)) : F.warn("AVC: " + $i(-L2, true) + " ms (" + L2 + "dts) overlapping between fragments detected at " + t3.toFixed(3)), !C2 || h2 >= o2[0].pts || ra)) {
                i2 = h2;
                var x2 = o2[0].pts - L2;
                if (R2) o2[0].dts = i2, o2[0].pts = x2;
                else for (var _2 = 0; _2 < o2.length && !(o2[_2].dts > x2); _2++) o2[_2].dts -= L2, o2[_2].pts -= L2;
                F.log("Video: Initial PTS/DTS adjusted: " + $i(x2, true) + "/" + $i(i2, true) + ", delta: " + $i(L2, true) + " ms");
              }
            }
            for (var O2 = 0, P2 = 0, M2 = i2 = Math.max(0, i2), N2 = 0; N2 < c2; N2++) {
              for (var U2 = o2[N2], B2 = U2.units, G2 = B2.length, V2 = 0, H2 = 0; H2 < G2; H2++) V2 += B2[H2].data.length;
              P2 += V2, O2 += G2, U2.length = V2, U2.dts < M2 ? (U2.dts = M2, M2 += k2 / 4 | 0 || 1) : M2 = U2.dts, m2 = Math.min(U2.pts, m2), p2 = Math.max(U2.pts, p2);
            }
            a2 = o2[c2 - 1].dts;
            var K2, j2 = P2 + 4 * O2 + 8;
            try {
              K2 = new Uint8Array(j2);
            } catch (e5) {
              return void this.observer.emit(I.ERROR, I.ERROR, { type: w.MUX_ERROR, details: D.REMUX_ALLOC_ERROR, fatal: false, error: e5, bytes: j2, reason: "fail allocating video mdat " + j2 });
            }
            var Y2 = new DataView(K2.buffer);
            Y2.setUint32(0, j2), K2.set(Wi.types.mdat, 4);
            for (var W2 = false, z2 = Number.POSITIVE_INFINITY, q2 = Number.POSITIVE_INFINITY, X2 = Number.NEGATIVE_INFINITY, $2 = Number.NEGATIVE_INFINITY, J2 = 0; J2 < c2; J2++) {
              for (var Q2 = o2[J2], Z2 = Q2.units, ee2 = 0, te2 = 0, re2 = Z2.length; te2 < re2; te2++) {
                var ne2 = Z2[te2], ie2 = ne2.data, ae2 = ne2.data.byteLength;
                Y2.setUint32(f2, ae2), f2 += 4, K2.set(ie2, f2), f2 += ae2, ee2 += 4 + ae2;
              }
              var se2 = void 0;
              if (J2 < c2 - 1) g2 = o2[J2 + 1].dts - Q2.dts, se2 = o2[J2 + 1].pts - Q2.pts;
              else {
                var oe2 = this.config, le2 = J2 > 0 ? Q2.dts - o2[J2 - 1].dts : k2;
                if (se2 = J2 > 0 ? Q2.pts - o2[J2 - 1].pts : k2, oe2.stretchShortVideoTrack && null !== this.nextAudioPts) {
                  var ue2 = Math.floor(oe2.maxBufferHole * s2), ce2 = (n2 ? m2 + n2 * s2 : this.nextAudioPts) - Q2.pts;
                  ce2 > ue2 ? ((g2 = ce2 - le2) < 0 ? g2 = le2 : W2 = true, F.log("[mp4-remuxer]: It is approximately " + ce2 / 90 + " ms to the next segment; using duration " + g2 / 90 + " ms for the last video frame.")) : g2 = le2;
                } else g2 = le2;
              }
              var de2 = Math.round(Q2.pts - Q2.dts);
              z2 = Math.min(z2, g2), X2 = Math.max(X2, g2), q2 = Math.min(q2, se2), $2 = Math.max($2, se2), l2.push(new ca(Q2.key, g2, ee2, de2));
            }
            if (l2.length) {
              if (ra) {
                if (ra < 70) {
                  var he2 = l2[0].flags;
                  he2.dependsOn = 2, he2.isNonSync = 0;
                }
              } else if (na && $2 - q2 < X2 - z2 && k2 / X2 < 0.025 && 0 === l2[0].cts) {
                F.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
                for (var fe2 = i2, ge2 = 0, me2 = l2.length; ge2 < me2; ge2++) {
                  var pe2 = fe2 + l2[ge2].duration, ve2 = fe2 + l2[ge2].cts;
                  if (ge2 < me2 - 1) {
                    var ye2 = pe2 + l2[ge2 + 1].cts;
                    l2[ge2].duration = ye2 - ve2;
                  } else l2[ge2].duration = ge2 ? l2[ge2 - 1].duration : k2;
                  l2[ge2].cts = 0, fe2 = pe2;
                }
              }
            }
            g2 = W2 || !g2 ? k2 : g2, this.nextAvcDts = h2 = a2 + g2, this.videoSampleDuration = g2, this.isVideoContiguous = true;
            var Te2 = { data1: Wi.moof(e4.sequenceNumber++, i2, u({}, e4, { samples: l2 })), data2: K2, startPTS: m2 / s2, endPTS: (p2 + g2) / s2, startDTS: i2 / s2, endDTS: h2 / s2, type: "video", hasAudio: false, hasVideo: true, nb: l2.length, dropped: e4.dropped };
            return e4.samples = [], e4.dropped = 0, Te2;
          }, t2.getSamplesPerFrame = function(e4) {
            switch (e4.segmentCodec) {
              case "mp3":
                return ea;
              case "ac3":
                return ta;
              default:
                return Zi;
            }
          }, t2.remuxAudio = function(e4, t3, r2, n2, i2) {
            var a2 = e4.inputTimeScale, s2 = a2 / (e4.samplerate ? e4.samplerate : a2), o2 = this.getSamplesPerFrame(e4), l2 = o2 * s2, c2 = this._initPTS, d2 = "mp3" === e4.segmentCodec && this.typeSupported.mpeg, h2 = [], f2 = void 0 !== i2, g2 = e4.samples, m2 = d2 ? 0 : 8, p2 = this.nextAudioPts || -1, v2 = t3 * a2, y2 = c2.baseTime * a2 / c2.timescale;
            if (this.isAudioContiguous = r2 = r2 || g2.length && p2 > 0 && (n2 && Math.abs(v2 - p2) < 9e3 || Math.abs(aa(g2[0].pts - y2, v2) - p2) < 20 * l2), g2.forEach((function(e5) {
              e5.pts = aa(e5.pts - y2, v2);
            })), !r2 || p2 < 0) {
              if (g2 = g2.filter((function(e5) {
                return e5.pts >= 0;
              })), !g2.length) return;
              p2 = 0 === i2 ? 0 : n2 && !f2 ? Math.max(0, v2) : g2[0].pts;
            }
            if ("aac" === e4.segmentCodec) for (var T2 = this.config.maxAudioFramesDrift, b2 = 0, E2 = p2; b2 < g2.length; b2++) {
              var S2 = g2[b2], A2 = S2.pts, k2 = A2 - E2, L2 = Math.abs(1e3 * k2 / a2);
              if (k2 <= -T2 * l2 && f2) 0 === b2 && (F.warn("Audio frame @ " + (A2 / a2).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * k2 / a2) + " ms."), this.nextAudioPts = p2 = E2 = A2);
              else if (k2 >= T2 * l2 && L2 < Qi && f2) {
                var R2 = Math.round(k2 / l2);
                (E2 = A2 - R2 * l2) < 0 && (R2--, E2 += l2), 0 === b2 && (this.nextAudioPts = p2 = E2), F.warn("[mp4-remuxer]: Injecting " + R2 + " audio frame @ " + (E2 / a2).toFixed(3) + "s due to " + Math.round(1e3 * k2 / a2) + " ms gap.");
                for (var C2 = 0; C2 < R2; C2++) {
                  var x2 = Math.max(E2, 0), _2 = ji.getSilentFrame(e4.manifestCodec || e4.codec, e4.channelCount);
                  _2 || (F.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), _2 = S2.unit.subarray()), g2.splice(b2, 0, { unit: _2, pts: x2 }), E2 += l2, b2++;
                }
              }
              S2.pts = E2, E2 += l2;
            }
            for (var O2, P2 = null, M2 = null, N2 = 0, U2 = g2.length; U2--; ) N2 += g2[U2].unit.byteLength;
            for (var B2 = 0, G2 = g2.length; B2 < G2; B2++) {
              var V2 = g2[B2], H2 = V2.unit, K2 = V2.pts;
              if (null !== M2) h2[B2 - 1].duration = Math.round((K2 - M2) / s2);
              else {
                if (r2 && "aac" === e4.segmentCodec && (K2 = p2), P2 = K2, !(N2 > 0)) return;
                N2 += m2;
                try {
                  O2 = new Uint8Array(N2);
                } catch (e5) {
                  return void this.observer.emit(I.ERROR, I.ERROR, { type: w.MUX_ERROR, details: D.REMUX_ALLOC_ERROR, fatal: false, error: e5, bytes: N2, reason: "fail allocating audio mdat " + N2 });
                }
                d2 || (new DataView(O2.buffer).setUint32(0, N2), O2.set(Wi.types.mdat, 4));
              }
              O2.set(H2, m2);
              var j2 = H2.byteLength;
              m2 += j2, h2.push(new ca(true, o2, j2, 0)), M2 = K2;
            }
            var Y2 = h2.length;
            if (Y2) {
              var W2 = h2[h2.length - 1];
              this.nextAudioPts = p2 = M2 + s2 * W2.duration;
              var z2 = d2 ? new Uint8Array(0) : Wi.moof(e4.sequenceNumber++, P2 / s2, u({}, e4, { samples: h2 }));
              e4.samples = [];
              var q2 = P2 / a2, X2 = p2 / a2, $2 = { data1: z2, data2: O2, startPTS: q2, endPTS: X2, startDTS: q2, endDTS: X2, type: "audio", hasAudio: true, hasVideo: false, nb: Y2 };
              return this.isAudioContiguous = true, $2;
            }
          }, t2.remuxEmptyAudio = function(e4, t3, r2, n2) {
            var i2 = e4.inputTimeScale, a2 = i2 / (e4.samplerate ? e4.samplerate : i2), s2 = this.nextAudioPts, o2 = this._initDTS, l2 = 9e4 * o2.baseTime / o2.timescale, u2 = (null !== s2 ? s2 : n2.startDTS * i2) + l2, c2 = n2.endDTS * i2 + l2, d2 = a2 * Zi, h2 = Math.ceil((c2 - u2) / d2), f2 = ji.getSilentFrame(e4.manifestCodec || e4.codec, e4.channelCount);
            if (F.warn("[mp4-remuxer]: remux empty Audio"), f2) {
              for (var g2 = [], m2 = 0; m2 < h2; m2++) {
                var p2 = u2 + m2 * d2;
                g2.push({ unit: f2, pts: p2, dts: p2 });
              }
              return e4.samples = g2, this.remuxAudio(e4, t3, r2, false);
            }
            F.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
          }, e3;
        })();
        function aa(e3, t2) {
          var r2;
          if (null === t2) return e3;
          for (r2 = t2 < e3 ? -8589934592 : 8589934592; Math.abs(e3 - t2) > 4294967296; ) e3 += r2;
          return e3;
        }
        function sa(e3) {
          for (var t2 = 0; t2 < e3.length; t2++) if (e3[t2].key) return t2;
          return -1;
        }
        function oa(e3, t2, r2, n2) {
          var i2 = e3.samples.length;
          if (i2) {
            for (var a2 = e3.inputTimeScale, s2 = 0; s2 < i2; s2++) {
              var o2 = e3.samples[s2];
              o2.pts = aa(o2.pts - r2.baseTime * a2 / r2.timescale, t2 * a2) / a2, o2.dts = aa(o2.dts - n2.baseTime * a2 / n2.timescale, t2 * a2) / a2;
            }
            var l2 = e3.samples;
            return e3.samples = [], { samples: l2 };
          }
        }
        function la(e3, t2, r2) {
          var n2 = e3.samples.length;
          if (n2) {
            for (var i2 = e3.inputTimeScale, a2 = 0; a2 < n2; a2++) {
              var s2 = e3.samples[a2];
              s2.pts = aa(s2.pts - r2.baseTime * i2 / r2.timescale, t2 * i2) / i2;
            }
            e3.samples.sort((function(e4, t3) {
              return e4.pts - t3.pts;
            }));
            var o2 = e3.samples;
            return e3.samples = [], { samples: o2 };
          }
        }
        var ua, ca = function(e3, t2, r2, n2) {
          this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = t2, this.size = r2, this.cts = n2, this.flags = { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: e3 ? 2 : 1, isNonSync: e3 ? 0 : 1 };
        }, da = (function() {
          function e3() {
            this.emitInitSegment = false, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null;
          }
          var t2 = e3.prototype;
          return t2.destroy = function() {
          }, t2.resetTimeStamp = function(e4) {
            this.initPTS = e4, this.lastEndTime = null;
          }, t2.resetNextTimestamp = function() {
            this.lastEndTime = null;
          }, t2.resetInitSegment = function(e4, t3, r2, n2) {
            this.audioCodec = t3, this.videoCodec = r2, this.generateInitSegment(Xe(e4, n2)), this.emitInitSegment = true;
          }, t2.generateInitSegment = function(e4) {
            var t3 = this.audioCodec, r2 = this.videoCodec;
            if (null == e4 || !e4.byteLength) return this.initTracks = void 0, void (this.initData = void 0);
            var n2 = this.initData = je(e4);
            n2.audio && (t3 = fa(n2.audio, j.AUDIO)), n2.video && (r2 = fa(n2.video, j.VIDEO));
            var i2 = {};
            n2.audio && n2.video ? i2.audiovideo = { container: "video/mp4", codec: t3 + "," + r2, initSegment: e4, id: "main" } : n2.audio ? i2.audio = { container: "audio/mp4", codec: t3, initSegment: e4, id: "audio" } : n2.video ? i2.video = { container: "video/mp4", codec: r2, initSegment: e4, id: "main" } : F.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = i2;
          }, t2.remux = function(e4, t3, r2, n2, i2, a2) {
            var s2, o2, l2 = this.initPTS, u2 = this.lastEndTime, c2 = { audio: void 0, video: void 0, text: n2, id3: r2, initSegment: void 0 };
            k(u2) || (u2 = this.lastEndTime = i2 || 0);
            var d2 = t3.samples;
            if (null == d2 || !d2.length) return c2;
            var h2 = { initPTS: void 0, timescale: 1 }, f2 = this.initData;
            if (null != (s2 = f2) && s2.length || (this.generateInitSegment(d2), f2 = this.initData), null == (o2 = f2) || !o2.length) return F.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), c2;
            this.emitInitSegment && (h2.tracks = this.initTracks, this.emitInitSegment = false);
            var g2 = Qe(d2, f2), m2 = Je(f2, d2), p2 = null === m2 ? i2 : m2;
            (ha(l2, p2, i2, g2) || h2.timescale !== l2.timescale && a2) && (h2.initPTS = p2 - i2, l2 && 1 === l2.timescale && F.warn("Adjusting initPTS by " + (h2.initPTS - l2.baseTime)), this.initPTS = l2 = { baseTime: h2.initPTS, timescale: 1 });
            var v2 = e4 ? p2 - l2.baseTime / l2.timescale : u2, y2 = v2 + g2;
            et(f2, d2, l2.baseTime / l2.timescale), g2 > 0 ? this.lastEndTime = y2 : (F.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
            var T2 = !!f2.audio, b2 = !!f2.video, E2 = "";
            T2 && (E2 += "audio"), b2 && (E2 += "video");
            var S2 = { data1: d2, startPTS: v2, startDTS: v2, endPTS: y2, endDTS: y2, type: E2, hasAudio: T2, hasVideo: b2, nb: 1, dropped: 0 };
            return c2.audio = "audio" === S2.type ? S2 : void 0, c2.video = "audio" !== S2.type ? S2 : void 0, c2.initSegment = h2, c2.id3 = oa(r2, i2, l2, l2), n2.samples.length && (c2.text = la(n2, i2, l2)), c2;
          }, e3;
        })();
        function ha(e3, t2, r2, n2) {
          if (null === e3) return true;
          var i2 = Math.max(n2, 1), a2 = t2 - e3.baseTime / e3.timescale;
          return Math.abs(a2 - r2) > i2;
        }
        function fa(e3, t2) {
          var r2 = null == e3 ? void 0 : e3.codec;
          if (r2 && r2.length > 4) return r2;
          if (t2 === j.AUDIO) {
            if ("ec-3" === r2 || "ac-3" === r2 || "alac" === r2) return r2;
            if ("fLaC" === r2 || "Opus" === r2) return _t(r2, false);
            var n2 = "mp4a.40.5";
            return F.info('Parsed audio codec "' + r2 + '" or audio object type not handled. Using "' + n2 + '"'), n2;
          }
          return F.warn('Unhandled video codec "' + r2 + '"'), "hvc1" === r2 || "hev1" === r2 ? "hvc1.1.6.L120.90" : "av01" === r2 ? "av01.0.04M.08" : "avc1.42e01e";
        }
        try {
          ua = self.performance.now.bind(self.performance);
        } catch (e3) {
          F.debug("Unable to use Performance API on this environment"), ua = null == te ? void 0 : te.Date.now;
        }
        var ga = [{ demux: wi, remux: da }, { demux: Ni, remux: ia }, { demux: Ri, remux: ia }, { demux: Ki, remux: ia }];
        ga.splice(2, 0, { demux: Ci, remux: ia });
        var ma = (function() {
          function e3(e4, t3, r2, n2, i2) {
            this.async = false, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e4, this.typeSupported = t3, this.config = r2, this.vendor = n2, this.id = i2;
          }
          var t2 = e3.prototype;
          return t2.configure = function(e4) {
            this.transmuxConfig = e4, this.decrypter && this.decrypter.reset();
          }, t2.push = function(e4, t3, r2, n2) {
            var i2 = this, a2 = r2.transmuxing;
            a2.executeStart = ua();
            var s2 = new Uint8Array(e4), o2 = this.currentTransmuxState, l2 = this.transmuxConfig;
            n2 && (this.currentTransmuxState = n2);
            var u2 = n2 || o2, c2 = u2.contiguous, d2 = u2.discontinuity, h2 = u2.trackSwitch, f2 = u2.accurateTimeOffset, g2 = u2.timeOffset, m2 = u2.initSegmentChange, p2 = l2.audioCodec, v2 = l2.videoCodec, y2 = l2.defaultInitPts, T2 = l2.duration, b2 = l2.initSegmentData, E2 = pa(s2, t3);
            if (E2 && "AES-128" === E2.method) {
              var S2 = this.getDecrypter();
              if (!S2.isSync()) return this.decryptionPromise = S2.webCryptoDecrypt(s2, E2.key.buffer, E2.iv.buffer).then((function(e5) {
                var t4 = i2.push(e5, null, r2);
                return i2.decryptionPromise = null, t4;
              })), this.decryptionPromise;
              var A2 = S2.softwareDecrypt(s2, E2.key.buffer, E2.iv.buffer);
              if (r2.part > -1 && (A2 = S2.flush()), !A2) return a2.executeEnd = ua(), va(r2);
              s2 = new Uint8Array(A2);
            }
            var k2 = this.needsProbing(d2, h2);
            if (k2) {
              var L2 = this.configureTransmuxer(s2);
              if (L2) return F.warn("[transmuxer] " + L2.message), this.observer.emit(I.ERROR, I.ERROR, { type: w.MEDIA_ERROR, details: D.FRAG_PARSING_ERROR, fatal: false, error: L2, reason: L2.message }), a2.executeEnd = ua(), va(r2);
            }
            (d2 || h2 || m2 || k2) && this.resetInitSegment(b2, p2, v2, T2, t3), (d2 || m2 || k2) && this.resetInitialTimestamp(y2), c2 || this.resetContiguity();
            var R2 = this.transmux(s2, E2, g2, f2, r2), C2 = this.currentTransmuxState;
            return C2.contiguous = true, C2.discontinuity = false, C2.trackSwitch = false, a2.executeEnd = ua(), R2;
          }, t2.flush = function(e4) {
            var t3 = this, r2 = e4.transmuxing;
            r2.executeStart = ua();
            var n2 = this.decrypter, i2 = this.currentTransmuxState, a2 = this.decryptionPromise;
            if (a2) return a2.then((function() {
              return t3.flush(e4);
            }));
            var s2 = [], o2 = i2.timeOffset;
            if (n2) {
              var l2 = n2.flush();
              l2 && s2.push(this.push(l2, null, e4));
            }
            var u2 = this.demuxer, c2 = this.remuxer;
            if (!u2 || !c2) return r2.executeEnd = ua(), [va(e4)];
            var d2 = u2.flush(o2);
            return ya(d2) ? d2.then((function(r3) {
              return t3.flushRemux(s2, r3, e4), s2;
            })) : (this.flushRemux(s2, d2, e4), s2);
          }, t2.flushRemux = function(e4, t3, r2) {
            var n2 = t3.audioTrack, i2 = t3.videoTrack, a2 = t3.id3Track, s2 = t3.textTrack, o2 = this.currentTransmuxState, l2 = o2.accurateTimeOffset, u2 = o2.timeOffset;
            F.log("[transmuxer.ts]: Flushed fragment " + r2.sn + (r2.part > -1 ? " p: " + r2.part : "") + " of level " + r2.level);
            var c2 = this.remuxer.remux(n2, i2, a2, s2, u2, l2, true, this.id);
            e4.push({ remuxResult: c2, chunkMeta: r2 }), r2.transmuxing.executeEnd = ua();
          }, t2.resetInitialTimestamp = function(e4) {
            var t3 = this.demuxer, r2 = this.remuxer;
            t3 && r2 && (t3.resetTimeStamp(e4), r2.resetTimeStamp(e4));
          }, t2.resetContiguity = function() {
            var e4 = this.demuxer, t3 = this.remuxer;
            e4 && t3 && (e4.resetContiguity(), t3.resetNextTimestamp());
          }, t2.resetInitSegment = function(e4, t3, r2, n2, i2) {
            var a2 = this.demuxer, s2 = this.remuxer;
            a2 && s2 && (a2.resetInitSegment(e4, t3, r2, n2), s2.resetInitSegment(e4, t3, r2, i2));
          }, t2.destroy = function() {
            this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
          }, t2.transmux = function(e4, t3, r2, n2, i2) {
            return t3 && "SAMPLE-AES" === t3.method ? this.transmuxSampleAes(e4, t3, r2, n2, i2) : this.transmuxUnencrypted(e4, r2, n2, i2);
          }, t2.transmuxUnencrypted = function(e4, t3, r2, n2) {
            var i2 = this.demuxer.demux(e4, t3, false, !this.config.progressive), a2 = i2.audioTrack, s2 = i2.videoTrack, o2 = i2.id3Track, l2 = i2.textTrack;
            return { remuxResult: this.remuxer.remux(a2, s2, o2, l2, t3, r2, false, this.id), chunkMeta: n2 };
          }, t2.transmuxSampleAes = function(e4, t3, r2, n2, i2) {
            var a2 = this;
            return this.demuxer.demuxSampleAes(e4, t3, r2).then((function(e5) {
              return { remuxResult: a2.remuxer.remux(e5.audioTrack, e5.videoTrack, e5.id3Track, e5.textTrack, r2, n2, false, a2.id), chunkMeta: i2 };
            }));
          }, t2.configureTransmuxer = function(e4) {
            for (var t3, r2 = this.config, n2 = this.observer, i2 = this.typeSupported, a2 = this.vendor, s2 = 0, o2 = ga.length; s2 < o2; s2++) {
              var l2;
              if (null != (l2 = ga[s2].demux) && l2.probe(e4)) {
                t3 = ga[s2];
                break;
              }
            }
            if (!t3) return new Error("Failed to find demuxer by probing fragment data");
            var u2 = this.demuxer, c2 = this.remuxer, d2 = t3.remux, h2 = t3.demux;
            c2 && c2 instanceof d2 || (this.remuxer = new d2(n2, r2, i2, a2)), u2 && u2 instanceof h2 || (this.demuxer = new h2(n2, r2, i2), this.probe = h2.probe);
          }, t2.needsProbing = function(e4, t3) {
            return !this.demuxer || !this.remuxer || e4 || t3;
          }, t2.getDecrypter = function() {
            var e4 = this.decrypter;
            return e4 || (e4 = this.decrypter = new qn(this.config)), e4;
          }, e3;
        })();
        function pa(e3, t2) {
          var r2 = null;
          return e3.byteLength > 0 && null != (null == t2 ? void 0 : t2.key) && null !== t2.iv && null != t2.method && (r2 = t2), r2;
        }
        var va = function(e3) {
          return { remuxResult: {}, chunkMeta: e3 };
        };
        function ya(e3) {
          return "then" in e3 && e3.then instanceof Function;
        }
        var Ta = function(e3, t2, r2, n2, i2) {
          this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e3, this.videoCodec = t2, this.initSegmentData = r2, this.duration = n2, this.defaultInitPts = i2 || null;
        }, ba = function(e3, t2, r2, n2, i2, a2) {
          this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e3, this.contiguous = t2, this.accurateTimeOffset = r2, this.trackSwitch = n2, this.timeOffset = i2, this.initSegmentChange = a2;
        }, Ea = { exports: {} };
        !(function(e3) {
          var t2 = Object.prototype.hasOwnProperty, r2 = "~";
          function n2() {
          }
          function i2(e4, t3, r3) {
            this.fn = e4, this.context = t3, this.once = r3 || false;
          }
          function a2(e4, t3, n3, a3, s3) {
            if ("function" != typeof n3) throw new TypeError("The listener must be a function");
            var o3 = new i2(n3, a3 || e4, s3), l2 = r2 ? r2 + t3 : t3;
            return e4._events[l2] ? e4._events[l2].fn ? e4._events[l2] = [e4._events[l2], o3] : e4._events[l2].push(o3) : (e4._events[l2] = o3, e4._eventsCount++), e4;
          }
          function s2(e4, t3) {
            0 == --e4._eventsCount ? e4._events = new n2() : delete e4._events[t3];
          }
          function o2() {
            this._events = new n2(), this._eventsCount = 0;
          }
          Object.create && (n2.prototype = /* @__PURE__ */ Object.create(null), new n2().__proto__ || (r2 = false)), o2.prototype.eventNames = function() {
            var e4, n3, i3 = [];
            if (0 === this._eventsCount) return i3;
            for (n3 in e4 = this._events) t2.call(e4, n3) && i3.push(r2 ? n3.slice(1) : n3);
            return Object.getOwnPropertySymbols ? i3.concat(Object.getOwnPropertySymbols(e4)) : i3;
          }, o2.prototype.listeners = function(e4) {
            var t3 = r2 ? r2 + e4 : e4, n3 = this._events[t3];
            if (!n3) return [];
            if (n3.fn) return [n3.fn];
            for (var i3 = 0, a3 = n3.length, s3 = new Array(a3); i3 < a3; i3++) s3[i3] = n3[i3].fn;
            return s3;
          }, o2.prototype.listenerCount = function(e4) {
            var t3 = r2 ? r2 + e4 : e4, n3 = this._events[t3];
            return n3 ? n3.fn ? 1 : n3.length : 0;
          }, o2.prototype.emit = function(e4, t3, n3, i3, a3, s3) {
            var o3 = r2 ? r2 + e4 : e4;
            if (!this._events[o3]) return false;
            var l2, u2, c2 = this._events[o3], d2 = arguments.length;
            if (c2.fn) {
              switch (c2.once && this.removeListener(e4, c2.fn, void 0, true), d2) {
                case 1:
                  return c2.fn.call(c2.context), true;
                case 2:
                  return c2.fn.call(c2.context, t3), true;
                case 3:
                  return c2.fn.call(c2.context, t3, n3), true;
                case 4:
                  return c2.fn.call(c2.context, t3, n3, i3), true;
                case 5:
                  return c2.fn.call(c2.context, t3, n3, i3, a3), true;
                case 6:
                  return c2.fn.call(c2.context, t3, n3, i3, a3, s3), true;
              }
              for (u2 = 1, l2 = new Array(d2 - 1); u2 < d2; u2++) l2[u2 - 1] = arguments[u2];
              c2.fn.apply(c2.context, l2);
            } else {
              var h2, f2 = c2.length;
              for (u2 = 0; u2 < f2; u2++) switch (c2[u2].once && this.removeListener(e4, c2[u2].fn, void 0, true), d2) {
                case 1:
                  c2[u2].fn.call(c2[u2].context);
                  break;
                case 2:
                  c2[u2].fn.call(c2[u2].context, t3);
                  break;
                case 3:
                  c2[u2].fn.call(c2[u2].context, t3, n3);
                  break;
                case 4:
                  c2[u2].fn.call(c2[u2].context, t3, n3, i3);
                  break;
                default:
                  if (!l2) for (h2 = 1, l2 = new Array(d2 - 1); h2 < d2; h2++) l2[h2 - 1] = arguments[h2];
                  c2[u2].fn.apply(c2[u2].context, l2);
              }
            }
            return true;
          }, o2.prototype.on = function(e4, t3, r3) {
            return a2(this, e4, t3, r3, false);
          }, o2.prototype.once = function(e4, t3, r3) {
            return a2(this, e4, t3, r3, true);
          }, o2.prototype.removeListener = function(e4, t3, n3, i3) {
            var a3 = r2 ? r2 + e4 : e4;
            if (!this._events[a3]) return this;
            if (!t3) return s2(this, a3), this;
            var o3 = this._events[a3];
            if (o3.fn) o3.fn !== t3 || i3 && !o3.once || n3 && o3.context !== n3 || s2(this, a3);
            else {
              for (var l2 = 0, u2 = [], c2 = o3.length; l2 < c2; l2++) (o3[l2].fn !== t3 || i3 && !o3[l2].once || n3 && o3[l2].context !== n3) && u2.push(o3[l2]);
              u2.length ? this._events[a3] = 1 === u2.length ? u2[0] : u2 : s2(this, a3);
            }
            return this;
          }, o2.prototype.removeAllListeners = function(e4) {
            var t3;
            return e4 ? (t3 = r2 ? r2 + e4 : e4, this._events[t3] && s2(this, t3)) : (this._events = new n2(), this._eventsCount = 0), this;
          }, o2.prototype.off = o2.prototype.removeListener, o2.prototype.addListener = o2.prototype.on, o2.prefixed = r2, o2.EventEmitter = o2, e3.exports = o2;
        })(Ea);
        var Sa = E(Ea.exports);
        function Aa(e3) {
          var t2 = new Sa(), r2 = function(t3, r3) {
            e3.postMessage({ event: t3, data: r3 });
          };
          t2.on(I.FRAG_DECRYPTED, r2), t2.on(I.ERROR, r2);
          var n2 = function() {
            var e4 = function(e5) {
              var t4 = function(t5) {
                r2("workerLog", { logType: e5, message: t5 });
              };
              F[e5] = t4;
            };
            for (var t3 in F) e4(t3);
          };
          e3.addEventListener("message", (function(i2) {
            var a2 = i2.data;
            switch (a2.cmd) {
              case "init":
                var s2 = JSON.parse(a2.config);
                e3.transmuxer = new ma(t2, a2.typeSupported, s2, a2.vendor, a2.id), M(s2.debug, a2.id), n2(), r2("init", null);
                break;
              case "configure":
                e3.transmuxer.configure(a2.config);
                break;
              case "demux":
                var o2 = e3.transmuxer.push(a2.data, a2.decryptdata, a2.chunkMeta, a2.state);
                ya(o2) ? (e3.transmuxer.async = true, o2.then((function(t3) {
                  ka(e3, t3);
                })).catch((function(e4) {
                  r2(I.ERROR, { type: w.MEDIA_ERROR, details: D.FRAG_PARSING_ERROR, chunkMeta: a2.chunkMeta, fatal: false, error: e4, err: e4, reason: "transmuxer-worker push error" });
                }))) : (e3.transmuxer.async = false, ka(e3, o2));
                break;
              case "flush":
                var l2 = a2.chunkMeta, u2 = e3.transmuxer.flush(l2);
                ya(u2) || e3.transmuxer.async ? (ya(u2) || (u2 = Promise.resolve(u2)), u2.then((function(t3) {
                  Ra(e3, t3, l2);
                })).catch((function(e4) {
                  r2(I.ERROR, { type: w.MEDIA_ERROR, details: D.FRAG_PARSING_ERROR, chunkMeta: a2.chunkMeta, fatal: false, error: e4, err: e4, reason: "transmuxer-worker flush error" });
                }))) : Ra(e3, u2, l2);
            }
          }));
        }
        function ka(e3, t2) {
          if (Ia(t2.remuxResult)) return false;
          var r2 = [], n2 = t2.remuxResult, i2 = n2.audio, a2 = n2.video;
          return i2 && La(r2, i2), a2 && La(r2, a2), e3.postMessage({ event: "transmuxComplete", data: t2 }, r2), true;
        }
        function La(e3, t2) {
          t2.data1 && e3.push(t2.data1.buffer), t2.data2 && e3.push(t2.data2.buffer);
        }
        function Ra(e3, t2, r2) {
          t2.reduce((function(t3, r3) {
            return ka(e3, r3) || t3;
          }), false) || e3.postMessage({ event: "transmuxComplete", data: t2[0] }), e3.postMessage({ event: "flush", data: r2 });
        }
        function Ia(e3) {
          return !(e3.audio || e3.video || e3.text || e3.id3 || e3.initSegment);
        }
        function wa() {
          return true;
        }
        function Da() {
          var e3 = new self.Blob(["var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(" + t.toString() + ")(true);"], { type: "text/javascript" }), r2 = self.URL.createObjectURL(e3);
          return { worker: new self.Worker(r2), objectURL: r2 };
        }
        function Ca(e3) {
          var t2 = new self.URL(e3, self.location.href).href;
          return { worker: new self.Worker(t2), scriptURL: t2 };
        }
        void 0 !== r && r && Aa(self);
        var xa = (function() {
          function e3(e4, t3, r2, n2) {
            var i2 = this;
            this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
            var a2 = e4.config;
            this.hls = e4, this.id = t3, this.useWorker = !!a2.enableWorker, this.onTransmuxComplete = r2, this.onFlush = n2;
            var s2 = function(e5, t4) {
              (t4 = t4 || {}).frag = i2.frag, t4.id = i2.id, e5 === I.ERROR && (i2.error = t4.error), i2.hls.trigger(e5, t4);
            };
            this.observer = new Sa(), this.observer.on(I.FRAG_DECRYPTED, s2), this.observer.on(I.ERROR, s2);
            var o2 = Et(a2.preferManagedMediaSource) || { isTypeSupported: function() {
              return false;
            } }, l2 = { mpeg: o2.isTypeSupported("audio/mpeg"), mp3: o2.isTypeSupported('audio/mp4; codecs="mp3"'), ac3: o2.isTypeSupported('audio/mp4; codecs="ac-3"') }, u2 = navigator.vendor;
            if (this.useWorker && "undefined" != typeof Worker && (a2.workerPath || wa())) try {
              a2.workerPath ? (F.log("loading Web Worker " + a2.workerPath + ' for "' + t3 + '"'), this.workerContext = Ca(a2.workerPath)) : (F.log('injecting Web Worker for "' + t3 + '"'), this.workerContext = Da()), this.onwmsg = function(e5) {
                return i2.onWorkerMessage(e5);
              };
              var c2 = this.workerContext.worker;
              c2.addEventListener("message", this.onwmsg), c2.onerror = function(e5) {
                var r3 = new Error(e5.message + "  (" + e5.filename + ":" + e5.lineno + ")");
                a2.enableWorker = false, F.warn('Error in "' + t3 + '" Web Worker, fallback to inline'), i2.hls.trigger(I.ERROR, { type: w.OTHER_ERROR, details: D.INTERNAL_EXCEPTION, fatal: false, event: "demuxerWorker", error: r3 });
              }, c2.postMessage({ cmd: "init", typeSupported: l2, vendor: u2, id: t3, config: JSON.stringify(a2) });
            } catch (e5) {
              F.warn('Error setting up "' + t3 + '" Web Worker, fallback to inline', e5), this.resetWorker(), this.error = null, this.transmuxer = new ma(this.observer, l2, a2, u2, t3);
            }
            else this.transmuxer = new ma(this.observer, l2, a2, u2, t3);
          }
          var t2 = e3.prototype;
          return t2.resetWorker = function() {
            if (this.workerContext) {
              var e4 = this.workerContext, t3 = e4.worker, r2 = e4.objectURL;
              r2 && self.URL.revokeObjectURL(r2), t3.removeEventListener("message", this.onwmsg), t3.onerror = null, t3.terminate(), this.workerContext = null;
            }
          }, t2.destroy = function() {
            if (this.workerContext) this.resetWorker(), this.onwmsg = void 0;
            else {
              var e4 = this.transmuxer;
              e4 && (e4.destroy(), this.transmuxer = null);
            }
            var t3 = this.observer;
            t3 && t3.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null;
          }, t2.push = function(e4, t3, r2, n2, i2, a2, s2, o2, l2, u2) {
            var c2, d2, h2 = this;
            l2.transmuxing.start = self.performance.now();
            var f2 = this.transmuxer, g2 = a2 ? a2.start : i2.start, m2 = i2.decryptdata, p2 = this.frag, v2 = !(p2 && i2.cc === p2.cc), y2 = !(p2 && l2.level === p2.level), T2 = p2 ? l2.sn - p2.sn : -1, b2 = this.part ? l2.part - this.part.index : -1, E2 = 0 === T2 && l2.id > 1 && l2.id === (null == p2 ? void 0 : p2.stats.chunkCount), S2 = !y2 && (1 === T2 || 0 === T2 && (1 === b2 || E2 && b2 <= 0)), A2 = self.performance.now();
            (y2 || T2 || 0 === i2.stats.parsing.start) && (i2.stats.parsing.start = A2), !a2 || !b2 && S2 || (a2.stats.parsing.start = A2);
            var k2 = !(p2 && (null == (c2 = i2.initSegment) ? void 0 : c2.url) === (null == (d2 = p2.initSegment) ? void 0 : d2.url)), L2 = new ba(v2, S2, o2, y2, g2, k2);
            if (!S2 || v2 || k2) {
              F.log("[transmuxer-interface, " + i2.type + "]: Starting new transmux session for sn: " + l2.sn + " p: " + l2.part + " level: " + l2.level + " id: " + l2.id + "\n        discontinuity: " + v2 + "\n        trackSwitch: " + y2 + "\n        contiguous: " + S2 + "\n        accurateTimeOffset: " + o2 + "\n        timeOffset: " + g2 + "\n        initSegmentChange: " + k2);
              var R2 = new Ta(r2, n2, t3, s2, u2);
              this.configureTransmuxer(R2);
            }
            if (this.frag = i2, this.part = a2, this.workerContext) this.workerContext.worker.postMessage({ cmd: "demux", data: e4, decryptdata: m2, chunkMeta: l2, state: L2 }, e4 instanceof ArrayBuffer ? [e4] : []);
            else if (f2) {
              var I2 = f2.push(e4, m2, l2, L2);
              ya(I2) ? (f2.async = true, I2.then((function(e5) {
                h2.handleTransmuxComplete(e5);
              })).catch((function(e5) {
                h2.transmuxerError(e5, l2, "transmuxer-interface push error");
              }))) : (f2.async = false, this.handleTransmuxComplete(I2));
            }
          }, t2.flush = function(e4) {
            var t3 = this;
            e4.transmuxing.start = self.performance.now();
            var r2 = this.transmuxer;
            if (this.workerContext) this.workerContext.worker.postMessage({ cmd: "flush", chunkMeta: e4 });
            else if (r2) {
              var n2 = r2.flush(e4);
              ya(n2) || r2.async ? (ya(n2) || (n2 = Promise.resolve(n2)), n2.then((function(r3) {
                t3.handleFlushResult(r3, e4);
              })).catch((function(r3) {
                t3.transmuxerError(r3, e4, "transmuxer-interface flush error");
              }))) : this.handleFlushResult(n2, e4);
            }
          }, t2.transmuxerError = function(e4, t3, r2) {
            this.hls && (this.error = e4, this.hls.trigger(I.ERROR, { type: w.MEDIA_ERROR, details: D.FRAG_PARSING_ERROR, chunkMeta: t3, fatal: false, error: e4, err: e4, reason: r2 }));
          }, t2.handleFlushResult = function(e4, t3) {
            var r2 = this;
            e4.forEach((function(e5) {
              r2.handleTransmuxComplete(e5);
            })), this.onFlush(t3);
          }, t2.onWorkerMessage = function(e4) {
            var t3 = e4.data, r2 = this.hls;
            switch (t3.event) {
              case "init":
                var n2, i2 = null == (n2 = this.workerContext) ? void 0 : n2.objectURL;
                i2 && self.URL.revokeObjectURL(i2);
                break;
              case "transmuxComplete":
                this.handleTransmuxComplete(t3.data);
                break;
              case "flush":
                this.onFlush(t3.data);
                break;
              case "workerLog":
                F[t3.data.logType] && F[t3.data.logType](t3.data.message);
                break;
              default:
                t3.data = t3.data || {}, t3.data.frag = this.frag, t3.data.id = this.id, r2.trigger(t3.event, t3.data);
            }
          }, t2.configureTransmuxer = function(e4) {
            var t3 = this.transmuxer;
            this.workerContext ? this.workerContext.worker.postMessage({ cmd: "configure", config: e4 }) : t3 && t3.configure(e4);
          }, t2.handleTransmuxComplete = function(e4) {
            e4.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e4);
          }, e3;
        })();
        function _a(e3, t2) {
          if (e3.length !== t2.length) return false;
          for (var r2 = 0; r2 < e3.length; r2++) if (!Oa(e3[r2].attrs, t2[r2].attrs)) return false;
          return true;
        }
        function Oa(e3, t2, r2) {
          var n2 = e3["STABLE-RENDITION-ID"];
          return n2 && !r2 ? n2 === t2["STABLE-RENDITION-ID"] : !(r2 || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some((function(r3) {
            return e3[r3] !== t2[r3];
          }));
        }
        function Pa(e3, t2) {
          return t2.label.toLowerCase() === e3.name.toLowerCase() && (!t2.language || t2.language.toLowerCase() === (e3.lang || "").toLowerCase());
        }
        var Ma = 100, Fa = (function(e3) {
          function t2(t3, r3, n2) {
            var i2;
            return (i2 = e3.call(this, t3, r3, n2, "[audio-stream-controller]", $t.AUDIO) || this).videoBuffer = null, i2.videoTrackCC = -1, i2.waitingVideoCC = -1, i2.bufferedTrack = null, i2.switchingTrack = null, i2.trackId = -1, i2.waitingData = null, i2.mainDetails = null, i2.flushing = false, i2.bufferFlushed = false, i2.cachedTrackLoadedData = null, i2._registerListeners(), i2;
          }
          c(t2, e3);
          var r2 = t2.prototype;
          return r2.onHandlerDestroying = function() {
            this._unregisterListeners(), e3.prototype.onHandlerDestroying.call(this), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null;
          }, r2._registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.MEDIA_ATTACHED, this.onMediaAttached, this), e4.on(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.on(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.on(I.LEVEL_LOADED, this.onLevelLoaded, this), e4.on(I.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e4.on(I.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e4.on(I.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e4.on(I.ERROR, this.onError, this), e4.on(I.BUFFER_RESET, this.onBufferReset, this), e4.on(I.BUFFER_CREATED, this.onBufferCreated, this), e4.on(I.BUFFER_FLUSHING, this.onBufferFlushing, this), e4.on(I.BUFFER_FLUSHED, this.onBufferFlushed, this), e4.on(I.INIT_PTS_FOUND, this.onInitPtsFound, this), e4.on(I.FRAG_BUFFERED, this.onFragBuffered, this);
          }, r2._unregisterListeners = function() {
            var e4 = this.hls;
            e4.off(I.MEDIA_ATTACHED, this.onMediaAttached, this), e4.off(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.off(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.off(I.LEVEL_LOADED, this.onLevelLoaded, this), e4.off(I.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e4.off(I.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e4.off(I.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e4.off(I.ERROR, this.onError, this), e4.off(I.BUFFER_RESET, this.onBufferReset, this), e4.off(I.BUFFER_CREATED, this.onBufferCreated, this), e4.off(I.BUFFER_FLUSHING, this.onBufferFlushing, this), e4.off(I.BUFFER_FLUSHED, this.onBufferFlushed, this), e4.off(I.INIT_PTS_FOUND, this.onInitPtsFound, this), e4.off(I.FRAG_BUFFERED, this.onFragBuffered, this);
          }, r2.onInitPtsFound = function(e4, t3) {
            var r3 = t3.frag, n2 = t3.id, i2 = t3.initPTS, a2 = t3.timescale;
            if ("main" === n2) {
              var s2 = r3.cc;
              this.initPTS[r3.cc] = { baseTime: i2, timescale: a2 }, this.log("InitPTS for cc: " + s2 + " found from main: " + i2), this.videoTrackCC = s2, this.state === $n.WAITING_INIT_PTS && this.tick();
            }
          }, r2.startLoad = function(e4) {
            if (!this.levels) return this.startPosition = e4, void (this.state = $n.STOPPED);
            var t3 = this.lastCurrentTime;
            this.stopLoad(), this.setInterval(Ma), t3 > 0 && -1 === e4 ? (this.log("Override startPosition with lastCurrentTime @" + t3.toFixed(3)), e4 = t3, this.state = $n.IDLE) : (this.loadedmetadata = false, this.state = $n.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e4, this.tick();
          }, r2.doTick = function() {
            switch (this.state) {
              case $n.IDLE:
                this.doTickIdle();
                break;
              case $n.WAITING_TRACK:
                var t3, r3 = this.levels, n2 = this.trackId, i2 = null == r3 || null == (t3 = r3[n2]) ? void 0 : t3.details;
                if (i2) {
                  if (this.waitForCdnTuneIn(i2)) break;
                  this.state = $n.WAITING_INIT_PTS;
                }
                break;
              case $n.FRAG_LOADING_WAITING_RETRY:
                var a2, s2 = performance.now(), o2 = this.retryDate;
                if (!o2 || s2 >= o2 || null != (a2 = this.media) && a2.seeking) {
                  var l2 = this.levels, u2 = this.trackId;
                  this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded((null == l2 ? void 0 : l2[u2]) || null), this.state = $n.IDLE;
                }
                break;
              case $n.WAITING_INIT_PTS:
                var c2 = this.waitingData;
                if (c2) {
                  var d2 = c2.frag, h2 = c2.part, f2 = c2.cache, g2 = c2.complete;
                  if (void 0 !== this.initPTS[d2.cc]) {
                    this.waitingData = null, this.waitingVideoCC = -1, this.state = $n.FRAG_LOADING;
                    var m2 = { frag: d2, part: h2, payload: f2.flush(), networkDetails: null };
                    this._handleFragmentLoadProgress(m2), g2 && e3.prototype._handleFragmentLoadComplete.call(this, m2);
                  } else if (this.videoTrackCC !== this.waitingVideoCC) this.log("Waiting fragment cc (" + d2.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
                  else {
                    var p2 = this.getLoadPosition(), v2 = In.bufferInfo(this.mediaBuffer, p2, this.config.maxBufferHole);
                    zr(v2.end, this.config.maxFragLookUpTolerance, d2) < 0 && (this.log("Waiting fragment cc (" + d2.cc + ") @ " + d2.start + " cancelled because another fragment at " + v2.end + " is needed"), this.clearWaitingFragment());
                  }
                } else this.state = $n.IDLE;
            }
            this.onTickEnd();
          }, r2.clearWaitingFragment = function() {
            var e4 = this.waitingData;
            e4 && (this.fragmentTracker.removeFragment(e4.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = $n.IDLE);
          }, r2.resetLoadingState = function() {
            this.clearWaitingFragment(), e3.prototype.resetLoadingState.call(this);
          }, r2.onTickEnd = function() {
            var e4 = this.media;
            null != e4 && e4.readyState && (this.lastCurrentTime = e4.currentTime);
          }, r2.doTickIdle = function() {
            var e4 = this.hls, t3 = this.levels, r3 = this.media, n2 = this.trackId, i2 = e4.config;
            if ((r3 || !this.startFragRequested && i2.startFragPrefetch) && null != t3 && t3[n2]) {
              var a2 = t3[n2], s2 = a2.details;
              if (!s2 || s2.live && this.levelLastLoaded !== a2 || this.waitForCdnTuneIn(s2)) this.state = $n.WAITING_TRACK;
              else {
                var o2 = this.mediaBuffer ? this.mediaBuffer : this.media;
                this.bufferFlushed && o2 && (this.bufferFlushed = false, this.afterBufferFlushed(o2, j.AUDIO, $t.AUDIO));
                var l2 = this.getFwdBufferInfo(o2, $t.AUDIO);
                if (null !== l2) {
                  var u2 = this.bufferedTrack, c2 = this.switchingTrack;
                  if (!c2 && this._streamEnded(l2, s2)) return e4.trigger(I.BUFFER_EOS, { type: "audio" }), void (this.state = $n.ENDED);
                  var d2 = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, $t.MAIN), h2 = l2.len, f2 = this.getMaxBufferLength(null == d2 ? void 0 : d2.len), g2 = s2.fragments, m2 = g2[0].start, p2 = this.flushing ? this.getLoadPosition() : l2.end;
                  if (c2 && r3) {
                    var v2 = this.getLoadPosition();
                    u2 && !Oa(c2.attrs, u2.attrs) && (p2 = v2), s2.PTSKnown && v2 < m2 && (l2.end > m2 || l2.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), r3.currentTime = m2 + 0.05);
                  }
                  if (!(h2 >= f2 && !c2 && p2 < g2[g2.length - 1].start)) {
                    var y2 = this.getNextFragment(p2, s2), T2 = false;
                    if (y2 && this.isLoopLoading(y2, p2) && (T2 = !!y2.gap, y2 = this.getNextFragmentLoopLoading(y2, s2, l2, $t.MAIN, f2)), y2) {
                      var b2 = d2 && y2.start > d2.end + s2.targetduration;
                      if (b2 || (null == d2 || !d2.len) && l2.len) {
                        var E2 = this.getAppendedFrag(y2.start, $t.MAIN);
                        if (null === E2) return;
                        if (T2 || (T2 = !!E2.gap || !!b2 && 0 === d2.len), b2 && !T2 || T2 && l2.nextStart && l2.nextStart < E2.end) return;
                      }
                      this.loadFragment(y2, a2, p2);
                    } else this.bufferFlushed = true;
                  }
                }
              }
            }
          }, r2.getMaxBufferLength = function(t3) {
            var r3 = e3.prototype.getMaxBufferLength.call(this);
            return t3 ? Math.min(Math.max(r3, t3), this.config.maxMaxBufferLength) : r3;
          }, r2.onMediaDetaching = function() {
            this.videoBuffer = null, this.bufferFlushed = this.flushing = false, e3.prototype.onMediaDetaching.call(this);
          }, r2.onAudioTracksUpdated = function(e4, t3) {
            var r3 = t3.audioTracks;
            this.resetTransmuxer(), this.levels = r3.map((function(e5) {
              return new Ar(e5);
            }));
          }, r2.onAudioTrackSwitching = function(e4, t3) {
            var r3 = !!t3.url;
            this.trackId = t3.id;
            var n2 = this.fragCurrent;
            n2 && (n2.abortRequests(), this.removeUnbufferedFrags(n2.start)), this.resetLoadingState(), r3 ? this.setInterval(Ma) : this.resetTransmuxer(), r3 ? (this.switchingTrack = t3, this.state = $n.IDLE, this.flushAudioIfNeeded(t3)) : (this.switchingTrack = null, this.bufferedTrack = t3, this.state = $n.STOPPED), this.tick();
          }, r2.onManifestLoading = function() {
            this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = this.flushing = false, this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.startFragRequested = false, this.trackId = this.videoTrackCC = this.waitingVideoCC = -1;
          }, r2.onLevelLoaded = function(e4, t3) {
            this.mainDetails = t3.details, null !== this.cachedTrackLoadedData && (this.hls.trigger(I.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null);
          }, r2.onAudioTrackLoaded = function(e4, t3) {
            var r3;
            if (null != this.mainDetails) {
              var n2 = this.levels, i2 = t3.details, a2 = t3.id;
              if (n2) {
                this.log("Audio track " + a2 + " loaded [" + i2.startSN + "," + i2.endSN + "]" + (i2.lastPartSn ? "[part-" + i2.lastPartSn + "-" + i2.lastPartIndex + "]" : "") + ",duration:" + i2.totalduration);
                var s2 = n2[a2], o2 = 0;
                if (i2.live || null != (r3 = s2.details) && r3.live) {
                  this.checkLiveUpdate(i2);
                  var l2, u2 = this.mainDetails;
                  if (i2.deltaUpdateFailed || !u2) return;
                  !s2.details && i2.hasProgramDateTime && u2.hasProgramDateTime ? (Nn(i2, u2), o2 = i2.fragments[0].start) : o2 = this.alignPlaylists(i2, s2.details, null == (l2 = this.levelLastLoaded) ? void 0 : l2.details);
                }
                s2.details = i2, this.levelLastLoaded = s2, this.startFragRequested || !this.mainDetails && i2.live || this.setStartPosition(this.mainDetails || i2, o2), this.state !== $n.WAITING_TRACK || this.waitForCdnTuneIn(i2) || (this.state = $n.IDLE), this.tick();
              } else this.warn("Audio tracks were reset while loading level " + a2);
            } else this.cachedTrackLoadedData = t3;
          }, r2._handleFragmentLoadProgress = function(e4) {
            var t3, r3 = e4.frag, n2 = e4.part, i2 = e4.payload, a2 = this.config, s2 = this.trackId, o2 = this.levels;
            if (o2) {
              var l2 = o2[s2];
              if (l2) {
                var u2 = l2.details;
                if (!u2) return this.warn("Audio track details undefined on fragment load progress"), void this.removeUnbufferedFrags(r3.start);
                var c2 = a2.defaultAudioCodec || l2.audioCodec || "mp4a.40.2", d2 = this.transmuxer;
                d2 || (d2 = this.transmuxer = new xa(this.hls, $t.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
                var h2 = this.initPTS[r3.cc], f2 = null == (t3 = r3.initSegment) ? void 0 : t3.data;
                if (void 0 !== h2) {
                  var g2 = false, m2 = n2 ? n2.index : -1, p2 = -1 !== m2, v2 = new wn(r3.level, r3.sn, r3.stats.chunkCount, i2.byteLength, m2, p2);
                  d2.push(i2, f2, c2, "", r3, n2, u2.totalduration, g2, v2, h2);
                } else this.log("Unknown video PTS for cc " + r3.cc + ", waiting for video PTS before demuxing audio frag " + r3.sn + " of [" + u2.startSN + " ," + u2.endSN + "],track " + s2), (this.waitingData = this.waitingData || { frag: r3, part: n2, cache: new Qn(), complete: false }).cache.push(new Uint8Array(i2)), this.waitingVideoCC = this.videoTrackCC, this.state = $n.WAITING_INIT_PTS;
              } else this.warn("Audio track is undefined on fragment load progress");
            } else this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + r3.sn + " of level " + r3.level + " will not be buffered");
          }, r2._handleFragmentLoadComplete = function(t3) {
            this.waitingData ? this.waitingData.complete = true : e3.prototype._handleFragmentLoadComplete.call(this, t3);
          }, r2.onBufferReset = function() {
            this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = false;
          }, r2.onBufferCreated = function(e4, t3) {
            var r3 = t3.tracks.audio;
            r3 && (this.mediaBuffer = r3.buffer || null), t3.tracks.video && (this.videoBuffer = t3.tracks.video.buffer || null);
          }, r2.onFragBuffered = function(e4, t3) {
            var r3 = t3.frag, i2 = t3.part;
            if (r3.type === $t.AUDIO) if (this.fragContextChanged(r3)) this.warn("Fragment " + r3.sn + (i2 ? " p: " + i2.index : "") + " of level " + r3.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + (this.switchingTrack ? this.switchingTrack.name : "false"));
            else {
              if ("initSegment" !== r3.sn) {
                this.fragPrevious = r3;
                var a2 = this.switchingTrack;
                a2 && (this.bufferedTrack = a2, this.switchingTrack = null, this.hls.trigger(I.AUDIO_TRACK_SWITCHED, n({}, a2)));
              }
              this.fragBufferedComplete(r3, i2);
            }
            else if (!this.loadedmetadata && r3.type === $t.MAIN) {
              var s2 = this.videoBuffer || this.media;
              s2 && In.getBuffered(s2).length && (this.loadedmetadata = true);
            }
          }, r2.onError = function(t3, r3) {
            var n2;
            if (r3.fatal) this.state = $n.ERROR;
            else switch (r3.details) {
              case D.FRAG_GAP:
              case D.FRAG_PARSING_ERROR:
              case D.FRAG_DECRYPT_ERROR:
              case D.FRAG_LOAD_ERROR:
              case D.FRAG_LOAD_TIMEOUT:
              case D.KEY_LOAD_ERROR:
              case D.KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError($t.AUDIO, r3);
                break;
              case D.AUDIO_TRACK_LOAD_ERROR:
              case D.AUDIO_TRACK_LOAD_TIMEOUT:
              case D.LEVEL_PARSING_ERROR:
                r3.levelRetry || this.state !== $n.WAITING_TRACK || (null == (n2 = r3.context) ? void 0 : n2.type) !== Xt.AUDIO_TRACK || (this.state = $n.IDLE);
                break;
              case D.BUFFER_APPEND_ERROR:
              case D.BUFFER_FULL_ERROR:
                if (!r3.parent || "audio" !== r3.parent) return;
                if (r3.details === D.BUFFER_APPEND_ERROR) return void this.resetLoadingState();
                this.reduceLengthAndFlushBuffer(r3) && (this.bufferedTrack = null, e3.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio"));
                break;
              case D.INTERNAL_EXCEPTION:
                this.recoverWorkerError(r3);
            }
          }, r2.onBufferFlushing = function(e4, t3) {
            t3.type !== j.VIDEO && (this.flushing = true);
          }, r2.onBufferFlushed = function(e4, t3) {
            var r3 = t3.type;
            if (r3 !== j.VIDEO) {
              this.flushing = false, this.bufferFlushed = true, this.state === $n.ENDED && (this.state = $n.IDLE);
              var n2 = this.mediaBuffer || this.media;
              n2 && (this.afterBufferFlushed(n2, r3, $t.AUDIO), this.tick());
            }
          }, r2._handleTransmuxComplete = function(e4) {
            var t3, r3 = "audio", n2 = this.hls, i2 = e4.remuxResult, a2 = e4.chunkMeta, s2 = this.getCurrentContext(a2);
            if (s2) {
              var o2 = s2.frag, l2 = s2.part, c2 = s2.level, d2 = c2.details, h2 = i2.audio, f2 = i2.text, g2 = i2.id3, m2 = i2.initSegment;
              if (!this.fragContextChanged(o2) && d2) {
                if (this.state = $n.PARSING, this.switchingTrack && h2 && this.completeAudioSwitch(this.switchingTrack), null != m2 && m2.tracks) {
                  var p2 = o2.initSegment || o2;
                  this._bufferInitSegment(c2, m2.tracks, p2, a2), n2.trigger(I.FRAG_PARSING_INIT_SEGMENT, { frag: p2, id: r3, tracks: m2.tracks });
                }
                if (h2) {
                  var v2 = h2.startPTS, y2 = h2.endPTS, T2 = h2.startDTS, b2 = h2.endDTS;
                  l2 && (l2.elementaryStreams[j.AUDIO] = { startPTS: v2, endPTS: y2, startDTS: T2, endDTS: b2 }), o2.setElementaryStreamInfo(j.AUDIO, v2, y2, T2, b2), this.bufferFragmentData(h2, o2, l2, a2);
                }
                if (null != g2 && null != (t3 = g2.samples) && t3.length) {
                  var E2 = u({ id: r3, frag: o2, details: d2 }, g2);
                  n2.trigger(I.FRAG_PARSING_METADATA, E2);
                }
                if (f2) {
                  var S2 = u({ id: r3, frag: o2, details: d2 }, f2);
                  n2.trigger(I.FRAG_PARSING_USERDATA, S2);
                }
              } else this.fragmentTracker.removeFragment(o2);
            } else this.resetWhenMissingContext(a2);
          }, r2._bufferInitSegment = function(e4, t3, r3, n2) {
            if (this.state === $n.PARSING) {
              t3.video && delete t3.video;
              var i2 = t3.audio;
              if (i2) {
                i2.id = "audio";
                var a2 = e4.audioCodec;
                this.log("Init audio buffer, container:" + i2.container + ", codecs[level/parsed]=[" + a2 + "/" + i2.codec + "]"), a2 && 1 === a2.split(",").length && (i2.levelCodec = a2), this.hls.trigger(I.BUFFER_CODECS, t3);
                var s2 = i2.initSegment;
                if (null != s2 && s2.byteLength) {
                  var o2 = { type: "audio", frag: r3, part: null, chunkMeta: n2, parent: r3.type, data: s2 };
                  this.hls.trigger(I.BUFFER_APPENDING, o2);
                }
                this.tickImmediate();
              }
            }
          }, r2.loadFragment = function(t3, r3, n2) {
            var i2, a2 = this.fragmentTracker.getState(t3);
            if (this.fragCurrent = t3, this.switchingTrack || a2 === Sn.NOT_LOADED || a2 === Sn.PARTIAL) if ("initSegment" === t3.sn) this._loadInitSegment(t3, r3);
            else if (null != (i2 = r3.details) && i2.live && !this.initPTS[t3.cc]) {
              this.log("Waiting for video PTS in continuity counter " + t3.cc + " of live stream before loading audio fragment " + t3.sn + " of level " + this.trackId), this.state = $n.WAITING_INIT_PTS;
              var s2 = this.mainDetails;
              s2 && s2.fragments[0].start !== r3.details.fragments[0].start && Nn(r3.details, s2);
            } else this.startFragRequested = true, e3.prototype.loadFragment.call(this, t3, r3, n2);
            else this.clearTrackerIfNeeded(t3);
          }, r2.flushAudioIfNeeded = function(t3) {
            var r3 = this.media, n2 = this.bufferedTrack, i2 = null == n2 ? void 0 : n2.attrs, a2 = t3.attrs;
            r3 && i2 && (i2.CHANNELS !== a2.CHANNELS || n2.name !== t3.name || n2.lang !== t3.lang) && (this.log("Switching audio track : flushing all audio"), e3.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio"), this.bufferedTrack = null);
          }, r2.completeAudioSwitch = function(e4) {
            var t3 = this.hls;
            this.flushAudioIfNeeded(e4), this.bufferedTrack = e4, this.switchingTrack = null, t3.trigger(I.AUDIO_TRACK_SWITCHED, n({}, e4));
          }, t2;
        })(Jn), Na = (function(e3) {
          function t2(t3) {
            var r3;
            return (r3 = e3.call(this, t3, "[audio-track-controller]") || this).tracks = [], r3.groupIds = null, r3.tracksInGroup = [], r3.trackId = -1, r3.currentTrack = null, r3.selectDefaultTrack = true, r3.registerListeners(), r3;
          }
          c(t2, e3);
          var r2 = t2.prototype;
          return r2.registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.on(I.MANIFEST_PARSED, this.onManifestParsed, this), e4.on(I.LEVEL_LOADING, this.onLevelLoading, this), e4.on(I.LEVEL_SWITCHING, this.onLevelSwitching, this), e4.on(I.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e4.on(I.ERROR, this.onError, this);
          }, r2.unregisterListeners = function() {
            var e4 = this.hls;
            e4.off(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.off(I.MANIFEST_PARSED, this.onManifestParsed, this), e4.off(I.LEVEL_LOADING, this.onLevelLoading, this), e4.off(I.LEVEL_SWITCHING, this.onLevelSwitching, this), e4.off(I.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e4.off(I.ERROR, this.onError, this);
          }, r2.destroy = function() {
            this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, e3.prototype.destroy.call(this);
          }, r2.onManifestLoading = function() {
            this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = true;
          }, r2.onManifestParsed = function(e4, t3) {
            this.tracks = t3.audioTracks || [];
          }, r2.onAudioTrackLoaded = function(e4, t3) {
            var r3 = t3.id, n2 = t3.groupId, i2 = t3.details, a2 = this.tracksInGroup[r3];
            if (a2 && a2.groupId === n2) {
              var s2 = a2.details;
              a2.details = t3.details, this.log("Audio track " + r3 + ' "' + a2.name + '" lang:' + a2.lang + " group:" + n2 + " loaded [" + i2.startSN + "-" + i2.endSN + "]"), r3 === this.trackId && this.playlistLoaded(r3, t3, s2);
            } else this.warn("Audio track with id:" + r3 + " and group:" + n2 + " not found in active group " + (null == a2 ? void 0 : a2.groupId));
          }, r2.onLevelLoading = function(e4, t3) {
            this.switchLevel(t3.level);
          }, r2.onLevelSwitching = function(e4, t3) {
            this.switchLevel(t3.level);
          }, r2.switchLevel = function(e4) {
            var t3 = this.hls.levels[e4];
            if (t3) {
              var r3 = t3.audioGroups || null, n2 = this.groupIds, i2 = this.currentTrack;
              if (!r3 || (null == n2 ? void 0 : n2.length) !== (null == r3 ? void 0 : r3.length) || null != r3 && r3.some((function(e5) {
                return -1 === (null == n2 ? void 0 : n2.indexOf(e5));
              }))) {
                this.groupIds = r3, this.trackId = -1, this.currentTrack = null;
                var a2 = this.tracks.filter((function(e5) {
                  return !r3 || -1 !== r3.indexOf(e5.groupId);
                }));
                if (a2.length) this.selectDefaultTrack && !a2.some((function(e5) {
                  return e5.default;
                })) && (this.selectDefaultTrack = false), a2.forEach((function(e5, t4) {
                  e5.id = t4;
                }));
                else if (!i2 && !this.tracksInGroup.length) return;
                this.tracksInGroup = a2;
                var s2 = this.hls.config.audioPreference;
                if (!i2 && s2) {
                  var o2 = gn(s2, a2, vn);
                  if (o2 > -1) i2 = a2[o2];
                  else {
                    var l2 = gn(s2, this.tracks);
                    i2 = this.tracks[l2];
                  }
                }
                var u2 = this.findTrackId(i2);
                -1 === u2 && i2 && (u2 = this.findTrackId(null));
                var c2 = { audioTracks: a2 };
                this.log("Updating audio tracks, " + a2.length + " track(s) found in group(s): " + (null == r3 ? void 0 : r3.join(","))), this.hls.trigger(I.AUDIO_TRACKS_UPDATED, c2);
                var d2 = this.trackId;
                if (-1 !== u2 && -1 === d2) this.setAudioTrack(u2);
                else if (a2.length && -1 === d2) {
                  var h2, f2 = new Error("No audio track selected for current audio group-ID(s): " + (null == (h2 = this.groupIds) ? void 0 : h2.join(",")) + " track count: " + a2.length);
                  this.warn(f2.message), this.hls.trigger(I.ERROR, { type: w.MEDIA_ERROR, details: D.AUDIO_TRACK_LOAD_ERROR, fatal: true, error: f2 });
                }
              } else this.shouldReloadPlaylist(i2) && this.setAudioTrack(this.trackId);
            }
          }, r2.onError = function(e4, t3) {
            !t3.fatal && t3.context && (t3.context.type !== Xt.AUDIO_TRACK || t3.context.id !== this.trackId || this.groupIds && -1 === this.groupIds.indexOf(t3.context.groupId) || (this.requestScheduled = -1, this.checkRetry(t3)));
          }, r2.setAudioOption = function(e4) {
            var t3 = this.hls;
            if (t3.config.audioPreference = e4, e4) {
              var r3 = this.allAudioTracks;
              if (this.selectDefaultTrack = false, r3.length) {
                var n2 = this.currentTrack;
                if (n2 && mn(e4, n2, vn)) return n2;
                var i2 = gn(e4, this.tracksInGroup, vn);
                if (i2 > -1) {
                  var a2 = this.tracksInGroup[i2];
                  return this.setAudioTrack(i2), a2;
                }
                if (n2) {
                  var s2 = t3.loadLevel;
                  -1 === s2 && (s2 = t3.firstAutoLevel);
                  var o2 = yn(e4, t3.levels, r3, s2, vn);
                  if (-1 === o2) return null;
                  t3.nextLoadLevel = o2;
                }
                if (e4.channels || e4.audioCodec) {
                  var l2 = gn(e4, r3);
                  if (l2 > -1) return r3[l2];
                }
              }
            }
            return null;
          }, r2.setAudioTrack = function(e4) {
            var t3 = this.tracksInGroup;
            if (e4 < 0 || e4 >= t3.length) this.warn("Invalid audio track id: " + e4);
            else {
              this.clearTimer(), this.selectDefaultTrack = false;
              var r3 = this.currentTrack, i2 = t3[e4], a2 = i2.details && !i2.details.live;
              if (!(e4 === this.trackId && i2 === r3 && a2 || (this.log("Switching to audio-track " + e4 + ' "' + i2.name + '" lang:' + i2.lang + " group:" + i2.groupId + " channels:" + i2.channels), this.trackId = e4, this.currentTrack = i2, this.hls.trigger(I.AUDIO_TRACK_SWITCHING, n({}, i2)), a2))) {
                var s2 = this.switchParams(i2.url, null == r3 ? void 0 : r3.details);
                this.loadPlaylist(s2);
              }
            }
          }, r2.findTrackId = function(e4) {
            for (var t3 = this.tracksInGroup, r3 = 0; r3 < t3.length; r3++) {
              var n2 = t3[r3];
              if ((!this.selectDefaultTrack || n2.default) && (!e4 || mn(e4, n2, vn))) return r3;
            }
            if (e4) {
              for (var i2 = e4.name, a2 = e4.lang, s2 = e4.assocLang, o2 = e4.characteristics, l2 = e4.audioCodec, u2 = e4.channels, c2 = 0; c2 < t3.length; c2++) if (mn({ name: i2, lang: a2, assocLang: s2, characteristics: o2, audioCodec: l2, channels: u2 }, t3[c2], vn)) return c2;
              for (var d2 = 0; d2 < t3.length; d2++) {
                var h2 = t3[d2];
                if (Oa(e4.attrs, h2.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return d2;
              }
              for (var f2 = 0; f2 < t3.length; f2++) {
                var g2 = t3[f2];
                if (Oa(e4.attrs, g2.attrs, ["LANGUAGE"])) return f2;
              }
            }
            return -1;
          }, r2.loadPlaylist = function(t3) {
            var r3 = this.currentTrack;
            if (this.shouldLoadPlaylist(r3) && r3) {
              e3.prototype.loadPlaylist.call(this);
              var n2 = r3.id, i2 = r3.groupId, a2 = r3.url;
              if (t3) try {
                a2 = t3.addDirectives(a2);
              } catch (e4) {
                this.warn("Could not construct new URL with HLS Delivery Directives: " + e4);
              }
              this.log("loading audio-track playlist " + n2 + ' "' + r3.name + '" lang:' + r3.lang + " group:" + i2), this.clearTimer(), this.hls.trigger(I.AUDIO_TRACK_LOADING, { url: a2, id: n2, groupId: i2, deliveryDirectives: t3 || null });
            }
          }, o(t2, [{ key: "allAudioTracks", get: function() {
            return this.tracks;
          } }, { key: "audioTracks", get: function() {
            return this.tracksInGroup;
          } }, { key: "audioTrack", get: function() {
            return this.trackId;
          }, set: function(e4) {
            this.selectDefaultTrack = false, this.setAudioTrack(e4);
          } }]), t2;
        })(Zr), Ua = 500, Ba = (function(e3) {
          function t2(t3, r3, n2) {
            var i2;
            return (i2 = e3.call(this, t3, r3, n2, "[subtitle-stream-controller]", $t.SUBTITLE) || this).currentTrackId = -1, i2.tracksBuffered = [], i2.mainDetails = null, i2._registerListeners(), i2;
          }
          c(t2, e3);
          var r2 = t2.prototype;
          return r2.onHandlerDestroying = function() {
            this._unregisterListeners(), e3.prototype.onHandlerDestroying.call(this), this.mainDetails = null;
          }, r2._registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.MEDIA_ATTACHED, this.onMediaAttached, this), e4.on(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.on(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.on(I.LEVEL_LOADED, this.onLevelLoaded, this), e4.on(I.ERROR, this.onError, this), e4.on(I.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e4.on(I.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e4.on(I.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e4.on(I.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e4.on(I.BUFFER_FLUSHING, this.onBufferFlushing, this), e4.on(I.FRAG_BUFFERED, this.onFragBuffered, this);
          }, r2._unregisterListeners = function() {
            var e4 = this.hls;
            e4.off(I.MEDIA_ATTACHED, this.onMediaAttached, this), e4.off(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.off(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.off(I.LEVEL_LOADED, this.onLevelLoaded, this), e4.off(I.ERROR, this.onError, this), e4.off(I.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e4.off(I.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e4.off(I.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e4.off(I.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e4.off(I.BUFFER_FLUSHING, this.onBufferFlushing, this), e4.off(I.FRAG_BUFFERED, this.onFragBuffered, this);
          }, r2.startLoad = function(e4) {
            this.stopLoad(), this.state = $n.IDLE, this.setInterval(Ua), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e4, this.tick();
          }, r2.onManifestLoading = function() {
            this.mainDetails = null, this.fragmentTracker.removeAllFragments();
          }, r2.onMediaDetaching = function() {
            this.tracksBuffered = [], e3.prototype.onMediaDetaching.call(this);
          }, r2.onLevelLoaded = function(e4, t3) {
            this.mainDetails = t3.details;
          }, r2.onSubtitleFragProcessed = function(e4, t3) {
            var r3 = t3.frag, n2 = t3.success;
            if (this.fragPrevious = r3, this.state = $n.IDLE, n2) {
              var i2 = this.tracksBuffered[this.currentTrackId];
              if (i2) {
                for (var a2, s2 = r3.start, o2 = 0; o2 < i2.length; o2++) if (s2 >= i2[o2].start && s2 <= i2[o2].end) {
                  a2 = i2[o2];
                  break;
                }
                var l2 = r3.start + r3.duration;
                a2 ? a2.end = l2 : (a2 = { start: s2, end: l2 }, i2.push(a2)), this.fragmentTracker.fragBuffered(r3), this.fragBufferedComplete(r3, null);
              }
            }
          }, r2.onBufferFlushing = function(e4, t3) {
            var r3 = t3.startOffset, n2 = t3.endOffset;
            if (0 === r3 && n2 !== Number.POSITIVE_INFINITY) {
              var i2 = n2 - 1;
              if (i2 <= 0) return;
              t3.endOffsetSubtitles = Math.max(0, i2), this.tracksBuffered.forEach((function(e5) {
                for (var t4 = 0; t4 < e5.length; ) if (e5[t4].end <= i2) e5.shift();
                else {
                  if (!(e5[t4].start < i2)) break;
                  e5[t4].start = i2, t4++;
                }
              })), this.fragmentTracker.removeFragmentsInRange(r3, i2, $t.SUBTITLE);
            }
          }, r2.onFragBuffered = function(e4, t3) {
            var r3;
            this.loadedmetadata || t3.frag.type !== $t.MAIN || null != (r3 = this.media) && r3.buffered.length && (this.loadedmetadata = true);
          }, r2.onError = function(e4, t3) {
            var r3 = t3.frag;
            (null == r3 ? void 0 : r3.type) === $t.SUBTITLE && (this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== $n.STOPPED && (this.state = $n.IDLE));
          }, r2.onSubtitleTracksUpdated = function(e4, t3) {
            var r3 = this, n2 = t3.subtitleTracks;
            this.levels && !_a(this.levels, n2) ? (this.tracksBuffered = [], this.levels = n2.map((function(e5) {
              var t4 = new Ar(e5);
              return r3.tracksBuffered[t4.id] = [], t4;
            })), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, $t.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null) : this.levels = n2.map((function(e5) {
              return new Ar(e5);
            }));
          }, r2.onSubtitleTrackSwitch = function(e4, t3) {
            var r3;
            if (this.currentTrackId = t3.id, null != (r3 = this.levels) && r3.length && -1 !== this.currentTrackId) {
              var n2 = this.levels[this.currentTrackId];
              null != n2 && n2.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, n2 && this.setInterval(Ua);
            } else this.clearInterval();
          }, r2.onSubtitleTrackLoaded = function(e4, t3) {
            var r3, n2 = this.currentTrackId, i2 = this.levels, a2 = t3.details, s2 = t3.id;
            if (i2) {
              var o2 = i2[n2];
              if (!(s2 >= i2.length || s2 !== n2) && o2) {
                this.log("Subtitle track " + s2 + " loaded [" + a2.startSN + "," + a2.endSN + "]" + (a2.lastPartSn ? "[part-" + a2.lastPartSn + "-" + a2.lastPartIndex + "]" : "") + ",duration:" + a2.totalduration), this.mediaBuffer = this.mediaBufferTimeRanges;
                var l2 = 0;
                if (a2.live || null != (r3 = o2.details) && r3.live) {
                  var u2 = this.mainDetails;
                  if (a2.deltaUpdateFailed || !u2) return;
                  var c2, d2 = u2.fragments[0];
                  o2.details ? 0 === (l2 = this.alignPlaylists(a2, o2.details, null == (c2 = this.levelLastLoaded) ? void 0 : c2.details)) && d2 && _r(a2, l2 = d2.start) : a2.hasProgramDateTime && u2.hasProgramDateTime ? (Nn(a2, u2), l2 = a2.fragments[0].start) : d2 && _r(a2, l2 = d2.start);
                }
                o2.details = a2, this.levelLastLoaded = o2, this.startFragRequested || !this.mainDetails && a2.live || this.setStartPosition(this.mainDetails || a2, l2), this.tick(), a2.live && !this.fragCurrent && this.media && this.state === $n.IDLE && (Wr(null, a2.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), o2.details = void 0));
              }
            } else this.warn("Subtitle tracks were reset while loading level " + s2);
          }, r2._handleFragmentLoadComplete = function(e4) {
            var t3 = this, r3 = e4.frag, n2 = e4.payload, i2 = r3.decryptdata, a2 = this.hls;
            if (!this.fragContextChanged(r3) && n2 && n2.byteLength > 0 && null != i2 && i2.key && i2.iv && "AES-128" === i2.method) {
              var s2 = performance.now();
              this.decrypter.decrypt(new Uint8Array(n2), i2.key.buffer, i2.iv.buffer).catch((function(e5) {
                throw a2.trigger(I.ERROR, { type: w.MEDIA_ERROR, details: D.FRAG_DECRYPT_ERROR, fatal: false, error: e5, reason: e5.message, frag: r3 }), e5;
              })).then((function(e5) {
                var t4 = performance.now();
                a2.trigger(I.FRAG_DECRYPTED, { frag: r3, payload: e5, stats: { tstart: s2, tdecrypt: t4 } });
              })).catch((function(e5) {
                t3.warn(e5.name + ": " + e5.message), t3.state = $n.IDLE;
              }));
            }
          }, r2.doTick = function() {
            if (this.media) {
              if (this.state === $n.IDLE) {
                var e4 = this.currentTrackId, t3 = this.levels, r3 = null == t3 ? void 0 : t3[e4];
                if (!r3 || !t3.length || !r3.details) return;
                var n2 = this.config, i2 = this.getLoadPosition(), a2 = In.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], i2, n2.maxBufferHole), s2 = a2.end, o2 = a2.len, l2 = this.getFwdBufferInfo(this.media, $t.MAIN), u2 = r3.details;
                if (o2 > this.getMaxBufferLength(null == l2 ? void 0 : l2.len) + u2.levelTargetDuration) return;
                var c2 = u2.fragments, d2 = c2.length, h2 = u2.edge, f2 = null, g2 = this.fragPrevious;
                if (s2 < h2) {
                  var m2 = n2.maxFragLookUpTolerance, p2 = s2 > h2 - m2 ? 0 : m2;
                  !(f2 = Wr(g2, c2, Math.max(c2[0].start, s2), p2)) && g2 && g2.start < c2[0].start && (f2 = c2[0]);
                } else f2 = c2[d2 - 1];
                if (!f2) return;
                if ("initSegment" !== (f2 = this.mapToInitFragWhenRequired(f2)).sn) {
                  var v2 = c2[f2.sn - u2.startSN - 1];
                  v2 && v2.cc === f2.cc && this.fragmentTracker.getState(v2) === Sn.NOT_LOADED && (f2 = v2);
                }
                this.fragmentTracker.getState(f2) === Sn.NOT_LOADED && this.loadFragment(f2, r3, s2);
              }
            } else this.state = $n.IDLE;
          }, r2.getMaxBufferLength = function(t3) {
            var r3 = e3.prototype.getMaxBufferLength.call(this);
            return t3 ? Math.max(r3, t3) : r3;
          }, r2.loadFragment = function(t3, r3, n2) {
            this.fragCurrent = t3, "initSegment" === t3.sn ? this._loadInitSegment(t3, r3) : (this.startFragRequested = true, e3.prototype.loadFragment.call(this, t3, r3, n2));
          }, o(t2, [{ key: "mediaBufferTimeRanges", get: function() {
            return new Ga(this.tracksBuffered[this.currentTrackId] || []);
          } }]), t2;
        })(Jn), Ga = function(e3) {
          this.buffered = void 0;
          var t2 = function(t3, r2, n2) {
            if ((r2 >>>= 0) > n2 - 1) throw new DOMException("Failed to execute '" + t3 + "' on 'TimeRanges': The index provided (" + r2 + ") is greater than the maximum bound (" + n2 + ")");
            return e3[r2][t3];
          };
          this.buffered = { get length() {
            return e3.length;
          }, end: function(r2) {
            return t2("end", r2, e3.length);
          }, start: function(r2) {
            return t2("start", r2, e3.length);
          } };
        }, Va = (function(e3) {
          function t2(t3) {
            var r3;
            return (r3 = e3.call(this, t3, "[subtitle-track-controller]") || this).media = null, r3.tracks = [], r3.groupIds = null, r3.tracksInGroup = [], r3.trackId = -1, r3.currentTrack = null, r3.selectDefaultTrack = true, r3.queuedDefaultTrack = -1, r3.asyncPollTrackChange = function() {
              return r3.pollTrackChange(0);
            }, r3.useTextTrackPolling = false, r3.subtitlePollingInterval = -1, r3._subtitleDisplay = true, r3.onTextTracksChanged = function() {
              if (r3.useTextTrackPolling || self.clearInterval(r3.subtitlePollingInterval), r3.media && r3.hls.config.renderTextTracksNatively) {
                for (var e4 = null, t4 = sr(r3.media.textTracks), n2 = 0; n2 < t4.length; n2++) if ("hidden" === t4[n2].mode) e4 = t4[n2];
                else if ("showing" === t4[n2].mode) {
                  e4 = t4[n2];
                  break;
                }
                var i2 = r3.findTrackForTextTrack(e4);
                r3.subtitleTrack !== i2 && r3.setSubtitleTrack(i2);
              }
            }, r3.registerListeners(), r3;
          }
          c(t2, e3);
          var r2 = t2.prototype;
          return r2.destroy = function() {
            this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, e3.prototype.destroy.call(this);
          }, r2.registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.MEDIA_ATTACHED, this.onMediaAttached, this), e4.on(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.on(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.on(I.MANIFEST_PARSED, this.onManifestParsed, this), e4.on(I.LEVEL_LOADING, this.onLevelLoading, this), e4.on(I.LEVEL_SWITCHING, this.onLevelSwitching, this), e4.on(I.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e4.on(I.ERROR, this.onError, this);
          }, r2.unregisterListeners = function() {
            var e4 = this.hls;
            e4.off(I.MEDIA_ATTACHED, this.onMediaAttached, this), e4.off(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.off(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.off(I.MANIFEST_PARSED, this.onManifestParsed, this), e4.off(I.LEVEL_LOADING, this.onLevelLoading, this), e4.off(I.LEVEL_SWITCHING, this.onLevelSwitching, this), e4.off(I.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e4.off(I.ERROR, this.onError, this);
          }, r2.onMediaAttached = function(e4, t3) {
            this.media = t3.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
          }, r2.pollTrackChange = function(e4) {
            self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, e4);
          }, r2.onMediaDetaching = function() {
            this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), sr(this.media.textTracks).forEach((function(e4) {
              rr(e4);
            })), this.subtitleTrack = -1, this.media = null);
          }, r2.onManifestLoading = function() {
            this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = true;
          }, r2.onManifestParsed = function(e4, t3) {
            this.tracks = t3.subtitleTracks;
          }, r2.onSubtitleTrackLoaded = function(e4, t3) {
            var r3 = t3.id, n2 = t3.groupId, i2 = t3.details, a2 = this.tracksInGroup[r3];
            if (a2 && a2.groupId === n2) {
              var s2 = a2.details;
              a2.details = t3.details, this.log("Subtitle track " + r3 + ' "' + a2.name + '" lang:' + a2.lang + " group:" + n2 + " loaded [" + i2.startSN + "-" + i2.endSN + "]"), r3 === this.trackId && this.playlistLoaded(r3, t3, s2);
            } else this.warn("Subtitle track with id:" + r3 + " and group:" + n2 + " not found in active group " + (null == a2 ? void 0 : a2.groupId));
          }, r2.onLevelLoading = function(e4, t3) {
            this.switchLevel(t3.level);
          }, r2.onLevelSwitching = function(e4, t3) {
            this.switchLevel(t3.level);
          }, r2.switchLevel = function(e4) {
            var t3 = this.hls.levels[e4];
            if (t3) {
              var r3 = t3.subtitleGroups || null, n2 = this.groupIds, i2 = this.currentTrack;
              if (!r3 || (null == n2 ? void 0 : n2.length) !== (null == r3 ? void 0 : r3.length) || null != r3 && r3.some((function(e5) {
                return -1 === (null == n2 ? void 0 : n2.indexOf(e5));
              }))) {
                this.groupIds = r3, this.trackId = -1, this.currentTrack = null;
                var a2 = this.tracks.filter((function(e5) {
                  return !r3 || -1 !== r3.indexOf(e5.groupId);
                }));
                if (a2.length) this.selectDefaultTrack && !a2.some((function(e5) {
                  return e5.default;
                })) && (this.selectDefaultTrack = false), a2.forEach((function(e5, t4) {
                  e5.id = t4;
                }));
                else if (!i2 && !this.tracksInGroup.length) return;
                this.tracksInGroup = a2;
                var s2 = this.hls.config.subtitlePreference;
                if (!i2 && s2) {
                  this.selectDefaultTrack = false;
                  var o2 = gn(s2, a2);
                  if (o2 > -1) i2 = a2[o2];
                  else {
                    var l2 = gn(s2, this.tracks);
                    i2 = this.tracks[l2];
                  }
                }
                var u2 = this.findTrackId(i2);
                -1 === u2 && i2 && (u2 = this.findTrackId(null));
                var c2 = { subtitleTracks: a2 };
                this.log("Updating subtitle tracks, " + a2.length + ' track(s) found in "' + (null == r3 ? void 0 : r3.join(",")) + '" group-id'), this.hls.trigger(I.SUBTITLE_TRACKS_UPDATED, c2), -1 !== u2 && -1 === this.trackId && this.setSubtitleTrack(u2);
              } else this.shouldReloadPlaylist(i2) && this.setSubtitleTrack(this.trackId);
            }
          }, r2.findTrackId = function(e4) {
            for (var t3 = this.tracksInGroup, r3 = this.selectDefaultTrack, n2 = 0; n2 < t3.length; n2++) {
              var i2 = t3[n2];
              if ((!r3 || i2.default) && (r3 || e4) && (!e4 || mn(i2, e4))) return n2;
            }
            if (e4) {
              for (var a2 = 0; a2 < t3.length; a2++) {
                var s2 = t3[a2];
                if (Oa(e4.attrs, s2.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return a2;
              }
              for (var o2 = 0; o2 < t3.length; o2++) {
                var l2 = t3[o2];
                if (Oa(e4.attrs, l2.attrs, ["LANGUAGE"])) return o2;
              }
            }
            return -1;
          }, r2.findTrackForTextTrack = function(e4) {
            if (e4) {
              for (var t3 = this.tracksInGroup, r3 = 0; r3 < t3.length; r3++) if (Pa(t3[r3], e4)) return r3;
            }
            return -1;
          }, r2.onError = function(e4, t3) {
            !t3.fatal && t3.context && (t3.context.type !== Xt.SUBTITLE_TRACK || t3.context.id !== this.trackId || this.groupIds && -1 === this.groupIds.indexOf(t3.context.groupId) || this.checkRetry(t3));
          }, r2.setSubtitleOption = function(e4) {
            if (this.hls.config.subtitlePreference = e4, e4) {
              var t3 = this.allSubtitleTracks;
              if (this.selectDefaultTrack = false, t3.length) {
                var r3 = this.currentTrack;
                if (r3 && mn(e4, r3)) return r3;
                var n2 = gn(e4, this.tracksInGroup);
                if (n2 > -1) {
                  var i2 = this.tracksInGroup[n2];
                  return this.setSubtitleTrack(n2), i2;
                }
                if (r3) return null;
                var a2 = gn(e4, t3);
                if (a2 > -1) return t3[a2];
              }
            }
            return null;
          }, r2.loadPlaylist = function(t3) {
            e3.prototype.loadPlaylist.call(this);
            var r3 = this.currentTrack;
            if (this.shouldLoadPlaylist(r3) && r3) {
              var n2 = r3.id, i2 = r3.groupId, a2 = r3.url;
              if (t3) try {
                a2 = t3.addDirectives(a2);
              } catch (e4) {
                this.warn("Could not construct new URL with HLS Delivery Directives: " + e4);
              }
              this.log("Loading subtitle playlist for id " + n2), this.hls.trigger(I.SUBTITLE_TRACK_LOADING, { url: a2, id: n2, groupId: i2, deliveryDirectives: t3 || null });
            }
          }, r2.toggleTrackModes = function() {
            var e4 = this.media;
            if (e4) {
              var t3, r3 = sr(e4.textTracks), n2 = this.currentTrack;
              if (n2 && ((t3 = r3.filter((function(e5) {
                return Pa(n2, e5);
              }))[0]) || this.warn('Unable to find subtitle TextTrack with name "' + n2.name + '" and language "' + n2.lang + '"')), [].slice.call(r3).forEach((function(e5) {
                "disabled" !== e5.mode && e5 !== t3 && (e5.mode = "disabled");
              })), t3) {
                var i2 = this.subtitleDisplay ? "showing" : "hidden";
                t3.mode !== i2 && (t3.mode = i2);
              }
            }
          }, r2.setSubtitleTrack = function(e4) {
            var t3 = this.tracksInGroup;
            if (this.media) if (e4 < -1 || e4 >= t3.length || !k(e4)) this.warn("Invalid subtitle track id: " + e4);
            else {
              this.clearTimer(), this.selectDefaultTrack = false;
              var r3 = this.currentTrack, n2 = t3[e4] || null;
              if (this.trackId = e4, this.currentTrack = n2, this.toggleTrackModes(), n2) {
                var i2 = !!n2.details && !n2.details.live;
                if (e4 !== this.trackId || n2 !== r3 || !i2) {
                  this.log("Switching to subtitle-track " + e4 + (n2 ? ' "' + n2.name + '" lang:' + n2.lang + " group:" + n2.groupId : ""));
                  var a2 = n2.id, s2 = n2.groupId, o2 = void 0 === s2 ? "" : s2, l2 = n2.name, u2 = n2.type, c2 = n2.url;
                  this.hls.trigger(I.SUBTITLE_TRACK_SWITCH, { id: a2, groupId: o2, name: l2, type: u2, url: c2 });
                  var d2 = this.switchParams(n2.url, null == r3 ? void 0 : r3.details);
                  this.loadPlaylist(d2);
                }
              } else this.hls.trigger(I.SUBTITLE_TRACK_SWITCH, { id: e4 });
            }
            else this.queuedDefaultTrack = e4;
          }, o(t2, [{ key: "subtitleDisplay", get: function() {
            return this._subtitleDisplay;
          }, set: function(e4) {
            this._subtitleDisplay = e4, this.trackId > -1 && this.toggleTrackModes();
          } }, { key: "allSubtitleTracks", get: function() {
            return this.tracks;
          } }, { key: "subtitleTracks", get: function() {
            return this.tracksInGroup;
          } }, { key: "subtitleTrack", get: function() {
            return this.trackId;
          }, set: function(e4) {
            this.selectDefaultTrack = false, this.setSubtitleTrack(e4);
          } }]), t2;
        })(Zr), Ha = (function() {
          function e3(e4) {
            this.buffers = void 0, this.queues = { video: [], audio: [], audiovideo: [] }, this.buffers = e4;
          }
          var t2 = e3.prototype;
          return t2.append = function(e4, t3, r2) {
            var n2 = this.queues[t3];
            n2.push(e4), 1 !== n2.length || r2 || this.executeNext(t3);
          }, t2.insertAbort = function(e4, t3) {
            this.queues[t3].unshift(e4), this.executeNext(t3);
          }, t2.appendBlocker = function(e4) {
            var t3, r2 = new Promise((function(e5) {
              t3 = e5;
            })), n2 = { execute: t3, onStart: function() {
            }, onComplete: function() {
            }, onError: function() {
            } };
            return this.append(n2, e4), r2;
          }, t2.executeNext = function(e4) {
            var t3 = this.queues[e4];
            if (t3.length) {
              var r2 = t3[0];
              try {
                r2.execute();
              } catch (t4) {
                F.warn('[buffer-operation-queue]: Exception executing "' + e4 + '" SourceBuffer operation: ' + t4), r2.onError(t4);
                var n2 = this.buffers[e4];
                null != n2 && n2.updating || this.shiftAndExecuteNext(e4);
              }
            }
          }, t2.shiftAndExecuteNext = function(e4) {
            this.queues[e4].shift(), this.executeNext(e4);
          }, t2.current = function(e4) {
            return this.queues[e4][0];
          }, e3;
        })(), Ka = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/, ja = (function() {
          function e3(e4) {
            var t3 = this;
            this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendSource = void 0, this.appendErrors = { audio: 0, video: 0, audiovideo: 0 }, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this.log = void 0, this.warn = void 0, this.error = void 0, this._onEndStreaming = function(e5) {
              t3.hls && t3.hls.pauseBuffering();
            }, this._onStartStreaming = function(e5) {
              t3.hls && t3.hls.resumeBuffering();
            }, this._onMediaSourceOpen = function() {
              var e5 = t3.media, r3 = t3.mediaSource;
              t3.log("Media source opened"), e5 && (e5.removeEventListener("emptied", t3._onMediaEmptied), t3.updateMediaElementDuration(), t3.hls.trigger(I.MEDIA_ATTACHED, { media: e5, mediaSource: r3 })), r3 && r3.removeEventListener("sourceopen", t3._onMediaSourceOpen), t3.checkPendingTracks();
            }, this._onMediaSourceClose = function() {
              t3.log("Media source closed");
            }, this._onMediaSourceEnded = function() {
              t3.log("Media source ended");
            }, this._onMediaEmptied = function() {
              var e5 = t3.mediaSrc, r3 = t3._objectUrl;
              e5 !== r3 && F.error("Media element src was set while attaching MediaSource (" + r3 + " > " + e5 + ")");
            }, this.hls = e4;
            var r2 = "[buffer-controller]";
            this.appendSource = e4.config.preferManagedMediaSource, this.log = F.log.bind(F, r2), this.warn = F.warn.bind(F, r2), this.error = F.error.bind(F, r2), this._initSourceBuffer(), this.registerListeners();
          }
          var t2 = e3.prototype;
          return t2.hasSourceTypes = function() {
            return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
          }, t2.destroy = function() {
            this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null, this.hls = null;
          }, t2.registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.MEDIA_ATTACHING, this.onMediaAttaching, this), e4.on(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.on(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.on(I.MANIFEST_PARSED, this.onManifestParsed, this), e4.on(I.BUFFER_RESET, this.onBufferReset, this), e4.on(I.BUFFER_APPENDING, this.onBufferAppending, this), e4.on(I.BUFFER_CODECS, this.onBufferCodecs, this), e4.on(I.BUFFER_EOS, this.onBufferEos, this), e4.on(I.BUFFER_FLUSHING, this.onBufferFlushing, this), e4.on(I.LEVEL_UPDATED, this.onLevelUpdated, this), e4.on(I.FRAG_PARSED, this.onFragParsed, this), e4.on(I.FRAG_CHANGED, this.onFragChanged, this);
          }, t2.unregisterListeners = function() {
            var e4 = this.hls;
            e4.off(I.MEDIA_ATTACHING, this.onMediaAttaching, this), e4.off(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.off(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.off(I.MANIFEST_PARSED, this.onManifestParsed, this), e4.off(I.BUFFER_RESET, this.onBufferReset, this), e4.off(I.BUFFER_APPENDING, this.onBufferAppending, this), e4.off(I.BUFFER_CODECS, this.onBufferCodecs, this), e4.off(I.BUFFER_EOS, this.onBufferEos, this), e4.off(I.BUFFER_FLUSHING, this.onBufferFlushing, this), e4.off(I.LEVEL_UPDATED, this.onLevelUpdated, this), e4.off(I.FRAG_PARSED, this.onFragParsed, this), e4.off(I.FRAG_CHANGED, this.onFragChanged, this);
          }, t2._initSourceBuffer = function() {
            this.sourceBuffer = {}, this.operationQueue = new Ha(this.sourceBuffer), this.listeners = { audio: [], video: [], audiovideo: [] }, this.appendErrors = { audio: 0, video: 0, audiovideo: 0 }, this.lastMpegAudioChunk = null;
          }, t2.onManifestLoading = function() {
            this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null;
          }, t2.onManifestParsed = function(e4, t3) {
            var r2 = 2;
            (t3.audio && !t3.video || !t3.altAudio) && (r2 = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r2, this.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected");
          }, t2.onMediaAttaching = function(e4, t3) {
            var r2 = this.media = t3.media, n2 = Et(this.appendSource);
            if (r2 && n2) {
              var i2, a2 = this.mediaSource = new n2();
              this.log("created media source: " + (null == (i2 = a2.constructor) ? void 0 : i2.name)), a2.addEventListener("sourceopen", this._onMediaSourceOpen), a2.addEventListener("sourceended", this._onMediaSourceEnded), a2.addEventListener("sourceclose", this._onMediaSourceClose), a2.addEventListener("startstreaming", this._onStartStreaming), a2.addEventListener("endstreaming", this._onEndStreaming);
              var s2 = this._objectUrl = self.URL.createObjectURL(a2);
              if (this.appendSource) try {
                r2.removeAttribute("src");
                var o2 = self.ManagedMediaSource;
                r2.disableRemotePlayback = r2.disableRemotePlayback || o2 && a2 instanceof o2, Ya(r2), Wa(r2, s2), r2.load();
              } catch (e5) {
                r2.src = s2;
              }
              else r2.src = s2;
              r2.addEventListener("emptied", this._onMediaEmptied);
            }
          }, t2.onMediaDetaching = function() {
            var e4 = this.media, t3 = this.mediaSource, r2 = this._objectUrl;
            if (t3) {
              if (this.log("media source detaching"), "open" === t3.readyState) try {
                t3.endOfStream();
              } catch (e5) {
                this.warn("onMediaDetaching: " + e5.message + " while calling endOfStream");
              }
              this.onBufferReset(), t3.removeEventListener("sourceopen", this._onMediaSourceOpen), t3.removeEventListener("sourceended", this._onMediaSourceEnded), t3.removeEventListener("sourceclose", this._onMediaSourceClose), t3.removeEventListener("startstreaming", this._onStartStreaming), t3.removeEventListener("endstreaming", this._onEndStreaming), e4 && (e4.removeEventListener("emptied", this._onMediaEmptied), r2 && self.URL.revokeObjectURL(r2), this.mediaSrc === r2 ? (e4.removeAttribute("src"), this.appendSource && Ya(e4), e4.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
            }
            this.hls.trigger(I.MEDIA_DETACHED, void 0);
          }, t2.onBufferReset = function() {
            var e4 = this;
            this.getSourceBufferTypes().forEach((function(t3) {
              e4.resetBuffer(t3);
            })), this._initSourceBuffer();
          }, t2.resetBuffer = function(e4) {
            var t3 = this.sourceBuffer[e4];
            try {
              var r2;
              t3 && (this.removeBufferListeners(e4), this.sourceBuffer[e4] = void 0, null != (r2 = this.mediaSource) && r2.sourceBuffers.length && this.mediaSource.removeSourceBuffer(t3));
            } catch (t4) {
              this.warn("onBufferReset " + e4, t4);
            }
          }, t2.onBufferCodecs = function(e4, t3) {
            var r2 = this, n2 = this.getSourceBufferTypes().length, i2 = Object.keys(t3);
            if (i2.forEach((function(e5) {
              if (n2) {
                var i3 = r2.tracks[e5];
                if (i3 && "function" == typeof i3.buffer.changeType) {
                  var a3, s2 = t3[e5], o2 = s2.id, l2 = s2.codec, u2 = s2.levelCodec, c2 = s2.container, d2 = s2.metadata, h2 = Ot(i3.codec, i3.levelCodec), f2 = null == h2 ? void 0 : h2.replace(Ka, "$1"), g2 = Ot(l2, u2), m2 = null == (a3 = g2) ? void 0 : a3.replace(Ka, "$1");
                  if (g2 && f2 !== m2) {
                    "audio" === e5.slice(0, 5) && (g2 = _t(g2, r2.hls.config.preferManagedMediaSource));
                    var p2 = c2 + ";codecs=" + g2;
                    r2.appendChangeType(e5, p2), r2.log("switching codec " + h2 + " to " + g2), r2.tracks[e5] = { buffer: i3.buffer, codec: l2, container: c2, levelCodec: u2, metadata: d2, id: o2 };
                  }
                }
              } else r2.pendingTracks[e5] = t3[e5];
            })), !n2) {
              var a2 = Math.max(this.bufferCodecEventsExpected - 1, 0);
              this.bufferCodecEventsExpected !== a2 && (this.log(a2 + " bufferCodec event(s) expected " + i2.join(",")), this.bufferCodecEventsExpected = a2), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks();
            }
          }, t2.appendChangeType = function(e4, t3) {
            var r2 = this, n2 = this.operationQueue, i2 = { execute: function() {
              var i3 = r2.sourceBuffer[e4];
              i3 && (r2.log("changing " + e4 + " sourceBuffer type to " + t3), i3.changeType(t3)), n2.shiftAndExecuteNext(e4);
            }, onStart: function() {
            }, onComplete: function() {
            }, onError: function(t4) {
              r2.warn("Failed to change " + e4 + " SourceBuffer type", t4);
            } };
            n2.append(i2, e4, !!this.pendingTracks[e4]);
          }, t2.onBufferAppending = function(e4, t3) {
            var r2 = this, n2 = this.hls, i2 = this.operationQueue, a2 = this.tracks, s2 = t3.data, o2 = t3.type, l2 = t3.frag, u2 = t3.part, c2 = t3.chunkMeta, d2 = c2.buffering[o2], h2 = self.performance.now();
            d2.start = h2;
            var f2 = l2.stats.buffering, g2 = u2 ? u2.stats.buffering : null;
            0 === f2.start && (f2.start = h2), g2 && 0 === g2.start && (g2.start = h2);
            var m2 = a2.audio, p2 = false;
            "audio" === o2 && "audio/mpeg" === (null == m2 ? void 0 : m2.container) && (p2 = !this.lastMpegAudioChunk || 1 === c2.id || this.lastMpegAudioChunk.sn !== c2.sn, this.lastMpegAudioChunk = c2);
            var v2 = l2.start, y2 = { execute: function() {
              if (d2.executeStart = self.performance.now(), p2) {
                var e5 = r2.sourceBuffer[o2];
                if (e5) {
                  var t4 = v2 - e5.timestampOffset;
                  Math.abs(t4) >= 0.1 && (r2.log("Updating audio SourceBuffer timestampOffset to " + v2 + " (delta: " + t4 + ") sn: " + l2.sn + ")"), e5.timestampOffset = v2);
                }
              }
              r2.appendExecutor(s2, o2);
            }, onStart: function() {
            }, onComplete: function() {
              var e5 = self.performance.now();
              d2.executeEnd = d2.end = e5, 0 === f2.first && (f2.first = e5), g2 && 0 === g2.first && (g2.first = e5);
              var t4 = r2.sourceBuffer, n3 = {};
              for (var i3 in t4) n3[i3] = In.getBuffered(t4[i3]);
              r2.appendErrors[o2] = 0, "audio" === o2 || "video" === o2 ? r2.appendErrors.audiovideo = 0 : (r2.appendErrors.audio = 0, r2.appendErrors.video = 0), r2.hls.trigger(I.BUFFER_APPENDED, { type: o2, frag: l2, part: u2, chunkMeta: c2, parent: l2.type, timeRanges: n3 });
            }, onError: function(e5) {
              var t4 = { type: w.MEDIA_ERROR, parent: l2.type, details: D.BUFFER_APPEND_ERROR, sourceBufferName: o2, frag: l2, part: u2, chunkMeta: c2, error: e5, err: e5, fatal: false };
              if (e5.code === DOMException.QUOTA_EXCEEDED_ERR) t4.details = D.BUFFER_FULL_ERROR;
              else {
                var i3 = ++r2.appendErrors[o2];
                t4.details = D.BUFFER_APPEND_ERROR, r2.warn("Failed " + i3 + "/" + n2.config.appendErrorMaxRetry + ' times to append segment in "' + o2 + '" sourceBuffer'), i3 >= n2.config.appendErrorMaxRetry && (t4.fatal = true);
              }
              n2.trigger(I.ERROR, t4);
            } };
            i2.append(y2, o2, !!this.pendingTracks[o2]);
          }, t2.onBufferFlushing = function(e4, t3) {
            var r2 = this, n2 = this.operationQueue, i2 = function(e5) {
              return { execute: r2.removeExecutor.bind(r2, e5, t3.startOffset, t3.endOffset), onStart: function() {
              }, onComplete: function() {
                r2.hls.trigger(I.BUFFER_FLUSHED, { type: e5 });
              }, onError: function(t4) {
                r2.warn("Failed to remove from " + e5 + " SourceBuffer", t4);
              } };
            };
            t3.type ? n2.append(i2(t3.type), t3.type) : this.getSourceBufferTypes().forEach((function(e5) {
              n2.append(i2(e5), e5);
            }));
          }, t2.onFragParsed = function(e4, t3) {
            var r2 = this, n2 = t3.frag, i2 = t3.part, a2 = [], s2 = i2 ? i2.elementaryStreams : n2.elementaryStreams;
            s2[j.AUDIOVIDEO] ? a2.push("audiovideo") : (s2[j.AUDIO] && a2.push("audio"), s2[j.VIDEO] && a2.push("video"));
            var o2 = function() {
              var e5 = self.performance.now();
              n2.stats.buffering.end = e5, i2 && (i2.stats.buffering.end = e5);
              var t4 = i2 ? i2.stats : n2.stats;
              r2.hls.trigger(I.FRAG_BUFFERED, { frag: n2, part: i2, stats: t4, id: n2.type });
            };
            0 === a2.length && this.warn("Fragments must have at least one ElementaryStreamType set. type: " + n2.type + " level: " + n2.level + " sn: " + n2.sn), this.blockBuffers(o2, a2);
          }, t2.onFragChanged = function(e4, t3) {
            this.trimBuffers();
          }, t2.onBufferEos = function(e4, t3) {
            var r2 = this;
            this.getSourceBufferTypes().reduce((function(e5, n2) {
              var i2 = r2.sourceBuffer[n2];
              return !i2 || t3.type && t3.type !== n2 || (i2.ending = true, i2.ended || (i2.ended = true, r2.log(n2 + " sourceBuffer now EOS"))), e5 && !(i2 && !i2.ended);
            }), true) && (this.log("Queueing mediaSource.endOfStream()"), this.blockBuffers((function() {
              r2.getSourceBufferTypes().forEach((function(e6) {
                var t4 = r2.sourceBuffer[e6];
                t4 && (t4.ending = false);
              }));
              var e5 = r2.mediaSource;
              e5 && "open" === e5.readyState ? (r2.log("Calling mediaSource.endOfStream()"), e5.endOfStream()) : e5 && r2.log("Could not call mediaSource.endOfStream(). mediaSource.readyState: " + e5.readyState);
            })));
          }, t2.onLevelUpdated = function(e4, t3) {
            var r2 = t3.details;
            r2.fragments.length && (this.details = r2, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
          }, t2.trimBuffers = function() {
            var e4 = this.hls, t3 = this.details, r2 = this.media;
            if (r2 && null !== t3 && this.getSourceBufferTypes().length) {
              var n2 = e4.config, i2 = r2.currentTime, a2 = t3.levelTargetDuration, s2 = t3.live && null !== n2.liveBackBufferLength ? n2.liveBackBufferLength : n2.backBufferLength;
              if (k(s2) && s2 > 0) {
                var o2 = Math.max(s2, a2), l2 = Math.floor(i2 / a2) * a2 - o2;
                this.flushBackBuffer(i2, a2, l2);
              }
              if (k(n2.frontBufferFlushThreshold) && n2.frontBufferFlushThreshold > 0) {
                var u2 = Math.max(n2.maxBufferLength, n2.frontBufferFlushThreshold), c2 = Math.max(u2, a2), d2 = Math.floor(i2 / a2) * a2 + c2;
                this.flushFrontBuffer(i2, a2, d2);
              }
            }
          }, t2.flushBackBuffer = function(e4, t3, r2) {
            var n2 = this, i2 = this.details, a2 = this.sourceBuffer;
            this.getSourceBufferTypes().forEach((function(s2) {
              var o2 = a2[s2];
              if (o2) {
                var l2 = In.getBuffered(o2);
                if (l2.length > 0 && r2 > l2.start(0)) {
                  if (n2.hls.trigger(I.BACK_BUFFER_REACHED, { bufferEnd: r2 }), null != i2 && i2.live) n2.hls.trigger(I.LIVE_BACK_BUFFER_REACHED, { bufferEnd: r2 });
                  else if (o2.ended && l2.end(l2.length - 1) - e4 < 2 * t3) return void n2.log("Cannot flush " + s2 + " back buffer while SourceBuffer is in ended state");
                  n2.hls.trigger(I.BUFFER_FLUSHING, { startOffset: 0, endOffset: r2, type: s2 });
                }
              }
            }));
          }, t2.flushFrontBuffer = function(e4, t3, r2) {
            var n2 = this, i2 = this.sourceBuffer;
            this.getSourceBufferTypes().forEach((function(a2) {
              var s2 = i2[a2];
              if (s2) {
                var o2 = In.getBuffered(s2), l2 = o2.length;
                if (l2 < 2) return;
                var u2 = o2.start(l2 - 1), c2 = o2.end(l2 - 1);
                if (r2 > u2 || e4 >= u2 && e4 <= c2) return;
                if (s2.ended && e4 - c2 < 2 * t3) return void n2.log("Cannot flush " + a2 + " front buffer while SourceBuffer is in ended state");
                n2.hls.trigger(I.BUFFER_FLUSHING, { startOffset: u2, endOffset: 1 / 0, type: a2 });
              }
            }));
          }, t2.updateMediaElementDuration = function() {
            if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
              var e4 = this.details, t3 = this.hls, r2 = this.media, n2 = this.mediaSource, i2 = e4.fragments[0].start + e4.totalduration, a2 = r2.duration, s2 = k(n2.duration) ? n2.duration : 0;
              e4.live && t3.config.liveDurationInfinity ? (n2.duration = 1 / 0, this.updateSeekableRange(e4)) : (i2 > s2 && i2 > a2 || !k(a2)) && (this.log("Updating Media Source duration to " + i2.toFixed(3)), n2.duration = i2);
            }
          }, t2.updateSeekableRange = function(e4) {
            var t3 = this.mediaSource, r2 = e4.fragments;
            if (r2.length && e4.live && null != t3 && t3.setLiveSeekableRange) {
              var n2 = Math.max(0, r2[0].start), i2 = Math.max(n2, n2 + e4.totalduration);
              this.log("Media Source duration is set to " + t3.duration + ". Setting seekable range to " + n2 + "-" + i2 + "."), t3.setLiveSeekableRange(n2, i2);
            }
          }, t2.checkPendingTracks = function() {
            var e4 = this.bufferCodecEventsExpected, t3 = this.operationQueue, r2 = this.pendingTracks, n2 = Object.keys(r2).length;
            if (n2 && (!e4 || 2 === n2 || "audiovideo" in r2)) {
              this.createSourceBuffers(r2), this.pendingTracks = {};
              var i2 = this.getSourceBufferTypes();
              if (i2.length) this.hls.trigger(I.BUFFER_CREATED, { tracks: this.tracks }), i2.forEach((function(e5) {
                t3.executeNext(e5);
              }));
              else {
                var a2 = new Error("could not create source buffer for media codec(s)");
                this.hls.trigger(I.ERROR, { type: w.MEDIA_ERROR, details: D.BUFFER_INCOMPATIBLE_CODECS_ERROR, fatal: true, error: a2, reason: a2.message });
              }
            }
          }, t2.createSourceBuffers = function(e4) {
            var t3 = this, r2 = this.sourceBuffer, n2 = this.mediaSource;
            if (!n2) throw Error("createSourceBuffers called when mediaSource was null");
            var i2 = function(i3) {
              if (!r2[i3]) {
                var a3 = e4[i3];
                if (!a3) throw Error("source buffer exists for track " + i3 + ", however track does not");
                var s2 = a3.levelCodec || a3.codec;
                s2 && "audio" === i3.slice(0, 5) && (s2 = _t(s2, t3.hls.config.preferManagedMediaSource));
                var o2 = a3.container + ";codecs=" + s2;
                t3.log("creating sourceBuffer(" + o2 + ")");
                try {
                  var l2 = r2[i3] = n2.addSourceBuffer(o2), u2 = i3;
                  t3.addBufferListener(u2, "updatestart", t3._onSBUpdateStart), t3.addBufferListener(u2, "updateend", t3._onSBUpdateEnd), t3.addBufferListener(u2, "error", t3._onSBUpdateError), t3.addBufferListener(u2, "bufferedchange", (function(e5, r3) {
                    var n3 = r3.removedRanges;
                    null != n3 && n3.length && t3.hls.trigger(I.BUFFER_FLUSHED, { type: i3 });
                  })), t3.tracks[i3] = { buffer: l2, codec: s2, container: a3.container, levelCodec: a3.levelCodec, metadata: a3.metadata, id: a3.id };
                } catch (e5) {
                  t3.error("error while trying to add sourceBuffer: " + e5.message), t3.hls.trigger(I.ERROR, { type: w.MEDIA_ERROR, details: D.BUFFER_ADD_CODEC_ERROR, fatal: false, error: e5, sourceBufferName: i3, mimeType: o2 });
                }
              }
            };
            for (var a2 in e4) i2(a2);
          }, t2._onSBUpdateStart = function(e4) {
            this.operationQueue.current(e4).onStart();
          }, t2._onSBUpdateEnd = function(e4) {
            var t3;
            if ("closed" !== (null == (t3 = this.mediaSource) ? void 0 : t3.readyState)) {
              var r2 = this.operationQueue;
              r2.current(e4).onComplete(), r2.shiftAndExecuteNext(e4);
            } else this.resetBuffer(e4);
          }, t2._onSBUpdateError = function(e4, t3) {
            var r2, n2 = new Error(e4 + " SourceBuffer error. MediaSource readyState: " + (null == (r2 = this.mediaSource) ? void 0 : r2.readyState));
            this.error("" + n2, t3), this.hls.trigger(I.ERROR, { type: w.MEDIA_ERROR, details: D.BUFFER_APPENDING_ERROR, sourceBufferName: e4, error: n2, fatal: false });
            var i2 = this.operationQueue.current(e4);
            i2 && i2.onError(n2);
          }, t2.removeExecutor = function(e4, t3, r2) {
            var n2 = this.media, i2 = this.mediaSource, a2 = this.operationQueue, s2 = this.sourceBuffer[e4];
            if (!n2 || !i2 || !s2) return this.warn("Attempting to remove from the " + e4 + " SourceBuffer, but it does not exist"), void a2.shiftAndExecuteNext(e4);
            var o2 = k(n2.duration) ? n2.duration : 1 / 0, l2 = k(i2.duration) ? i2.duration : 1 / 0, u2 = Math.max(0, t3), c2 = Math.min(r2, o2, l2);
            c2 > u2 && (!s2.ending || s2.ended) ? (s2.ended = false, this.log("Removing [" + u2 + "," + c2 + "] from the " + e4 + " SourceBuffer"), s2.remove(u2, c2)) : a2.shiftAndExecuteNext(e4);
          }, t2.appendExecutor = function(e4, t3) {
            var r2 = this.sourceBuffer[t3];
            if (r2) r2.ended = false, r2.appendBuffer(e4);
            else if (!this.pendingTracks[t3]) throw new Error("Attempting to append to the " + t3 + " SourceBuffer, but it does not exist");
          }, t2.blockBuffers = function(e4, t3) {
            var r2 = this;
            if (void 0 === t3 && (t3 = this.getSourceBufferTypes()), !t3.length) return this.log("Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve().then(e4);
            var n2 = this.operationQueue, i2 = t3.map((function(e5) {
              return n2.appendBlocker(e5);
            }));
            Promise.all(i2).then((function() {
              e4(), t3.forEach((function(e5) {
                var t4 = r2.sourceBuffer[e5];
                null != t4 && t4.updating || n2.shiftAndExecuteNext(e5);
              }));
            }));
          }, t2.getSourceBufferTypes = function() {
            return Object.keys(this.sourceBuffer);
          }, t2.addBufferListener = function(e4, t3, r2) {
            var n2 = this.sourceBuffer[e4];
            if (n2) {
              var i2 = r2.bind(this, e4);
              this.listeners[e4].push({ event: t3, listener: i2 }), n2.addEventListener(t3, i2);
            }
          }, t2.removeBufferListeners = function(e4) {
            var t3 = this.sourceBuffer[e4];
            t3 && this.listeners[e4].forEach((function(e5) {
              t3.removeEventListener(e5.event, e5.listener);
            }));
          }, o(e3, [{ key: "mediaSrc", get: function() {
            var e4, t3 = (null == (e4 = this.media) ? void 0 : e4.firstChild) || this.media;
            return null == t3 ? void 0 : t3.src;
          } }]), e3;
        })();
        function Ya(e3) {
          var t2 = e3.querySelectorAll("source");
          [].slice.call(t2).forEach((function(t3) {
            e3.removeChild(t3);
          }));
        }
        function Wa(e3, t2) {
          var r2 = self.document.createElement("source");
          r2.type = "video/mp4", r2.src = t2, e3.appendChild(r2);
        }
        var za = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 }, qa = function(e3) {
          var t2 = e3;
          return za.hasOwnProperty(e3) && (t2 = za[e3]), String.fromCharCode(t2);
        }, Xa = 15, $a = 100, Ja = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 }, Qa = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 }, Za = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 }, es = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 }, ts = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"], rs = (function() {
          function e3() {
            this.time = null, this.verboseLevel = 0;
          }
          return e3.prototype.log = function(e4, t2) {
            if (this.verboseLevel >= e4) {
              var r2 = "function" == typeof t2 ? t2() : t2;
              F.log(this.time + " [" + e4 + "] " + r2);
            }
          }, e3;
        })(), ns = function(e3) {
          for (var t2 = [], r2 = 0; r2 < e3.length; r2++) t2.push(e3[r2].toString(16));
          return t2;
        }, is = (function() {
          function e3() {
            this.foreground = "white", this.underline = false, this.italics = false, this.background = "black", this.flash = false;
          }
          var t2 = e3.prototype;
          return t2.reset = function() {
            this.foreground = "white", this.underline = false, this.italics = false, this.background = "black", this.flash = false;
          }, t2.setStyles = function(e4) {
            for (var t3 = ["foreground", "underline", "italics", "background", "flash"], r2 = 0; r2 < t3.length; r2++) {
              var n2 = t3[r2];
              e4.hasOwnProperty(n2) && (this[n2] = e4[n2]);
            }
          }, t2.isDefault = function() {
            return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash;
          }, t2.equals = function(e4) {
            return this.foreground === e4.foreground && this.underline === e4.underline && this.italics === e4.italics && this.background === e4.background && this.flash === e4.flash;
          }, t2.copy = function(e4) {
            this.foreground = e4.foreground, this.underline = e4.underline, this.italics = e4.italics, this.background = e4.background, this.flash = e4.flash;
          }, t2.toString = function() {
            return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
          }, e3;
        })(), as = (function() {
          function e3() {
            this.uchar = " ", this.penState = new is();
          }
          var t2 = e3.prototype;
          return t2.reset = function() {
            this.uchar = " ", this.penState.reset();
          }, t2.setChar = function(e4, t3) {
            this.uchar = e4, this.penState.copy(t3);
          }, t2.setPenState = function(e4) {
            this.penState.copy(e4);
          }, t2.equals = function(e4) {
            return this.uchar === e4.uchar && this.penState.equals(e4.penState);
          }, t2.copy = function(e4) {
            this.uchar = e4.uchar, this.penState.copy(e4.penState);
          }, t2.isEmpty = function() {
            return " " === this.uchar && this.penState.isDefault();
          }, e3;
        })(), ss = (function() {
          function e3(e4) {
            this.chars = [], this.pos = 0, this.currPenState = new is(), this.cueStartTime = null, this.logger = void 0;
            for (var t3 = 0; t3 < $a; t3++) this.chars.push(new as());
            this.logger = e4;
          }
          var t2 = e3.prototype;
          return t2.equals = function(e4) {
            for (var t3 = 0; t3 < $a; t3++) if (!this.chars[t3].equals(e4.chars[t3])) return false;
            return true;
          }, t2.copy = function(e4) {
            for (var t3 = 0; t3 < $a; t3++) this.chars[t3].copy(e4.chars[t3]);
          }, t2.isEmpty = function() {
            for (var e4 = true, t3 = 0; t3 < $a; t3++) if (!this.chars[t3].isEmpty()) {
              e4 = false;
              break;
            }
            return e4;
          }, t2.setCursor = function(e4) {
            this.pos !== e4 && (this.pos = e4), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > $a && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = $a);
          }, t2.moveCursor = function(e4) {
            var t3 = this.pos + e4;
            if (e4 > 1) for (var r2 = this.pos + 1; r2 < t3 + 1; r2++) this.chars[r2].setPenState(this.currPenState);
            this.setCursor(t3);
          }, t2.backSpace = function() {
            this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
          }, t2.insertChar = function(e4) {
            var t3 = this;
            e4 >= 144 && this.backSpace();
            var r2 = qa(e4);
            this.pos >= $a ? this.logger.log(0, (function() {
              return "Cannot insert " + e4.toString(16) + " (" + r2 + ") at position " + t3.pos + ". Skipping it!";
            })) : (this.chars[this.pos].setChar(r2, this.currPenState), this.moveCursor(1));
          }, t2.clearFromPos = function(e4) {
            var t3;
            for (t3 = e4; t3 < $a; t3++) this.chars[t3].reset();
          }, t2.clear = function() {
            this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
          }, t2.clearToEndOfRow = function() {
            this.clearFromPos(this.pos);
          }, t2.getTextString = function() {
            for (var e4 = [], t3 = true, r2 = 0; r2 < $a; r2++) {
              var n2 = this.chars[r2].uchar;
              " " !== n2 && (t3 = false), e4.push(n2);
            }
            return t3 ? "" : e4.join("");
          }, t2.setPenStyles = function(e4) {
            this.currPenState.setStyles(e4), this.chars[this.pos].setPenState(this.currPenState);
          }, e3;
        })(), os = (function() {
          function e3(e4) {
            this.rows = [], this.currRow = Xa - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0;
            for (var t3 = 0; t3 < Xa; t3++) this.rows.push(new ss(e4));
            this.logger = e4;
          }
          var t2 = e3.prototype;
          return t2.reset = function() {
            for (var e4 = 0; e4 < Xa; e4++) this.rows[e4].clear();
            this.currRow = Xa - 1;
          }, t2.equals = function(e4) {
            for (var t3 = true, r2 = 0; r2 < Xa; r2++) if (!this.rows[r2].equals(e4.rows[r2])) {
              t3 = false;
              break;
            }
            return t3;
          }, t2.copy = function(e4) {
            for (var t3 = 0; t3 < Xa; t3++) this.rows[t3].copy(e4.rows[t3]);
          }, t2.isEmpty = function() {
            for (var e4 = true, t3 = 0; t3 < Xa; t3++) if (!this.rows[t3].isEmpty()) {
              e4 = false;
              break;
            }
            return e4;
          }, t2.backSpace = function() {
            this.rows[this.currRow].backSpace();
          }, t2.clearToEndOfRow = function() {
            this.rows[this.currRow].clearToEndOfRow();
          }, t2.insertChar = function(e4) {
            this.rows[this.currRow].insertChar(e4);
          }, t2.setPen = function(e4) {
            this.rows[this.currRow].setPenStyles(e4);
          }, t2.moveCursor = function(e4) {
            this.rows[this.currRow].moveCursor(e4);
          }, t2.setCursor = function(e4) {
            this.logger.log(2, "setCursor: " + e4), this.rows[this.currRow].setCursor(e4);
          }, t2.setPAC = function(e4) {
            this.logger.log(2, (function() {
              return "pacData = " + JSON.stringify(e4);
            }));
            var t3 = e4.row - 1;
            if (this.nrRollUpRows && t3 < this.nrRollUpRows - 1 && (t3 = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t3) {
              for (var r2 = 0; r2 < Xa; r2++) this.rows[r2].clear();
              var n2 = this.currRow + 1 - this.nrRollUpRows, i2 = this.lastOutputScreen;
              if (i2) {
                var a2 = i2.rows[n2].cueStartTime, s2 = this.logger.time;
                if (null !== a2 && null !== s2 && a2 < s2) for (var o2 = 0; o2 < this.nrRollUpRows; o2++) this.rows[t3 - this.nrRollUpRows + o2 + 1].copy(i2.rows[n2 + o2]);
              }
            }
            this.currRow = t3;
            var l2 = this.rows[this.currRow];
            if (null !== e4.indent) {
              var u2 = e4.indent, c2 = Math.max(u2 - 1, 0);
              l2.setCursor(e4.indent), e4.color = l2.chars[c2].penState.foreground;
            }
            var d2 = { foreground: e4.color, underline: e4.underline, italics: e4.italics, background: "black", flash: false };
            this.setPen(d2);
          }, t2.setBkgData = function(e4) {
            this.logger.log(2, (function() {
              return "bkgData = " + JSON.stringify(e4);
            })), this.backSpace(), this.setPen(e4), this.insertChar(32);
          }, t2.setRollUpRows = function(e4) {
            this.nrRollUpRows = e4;
          }, t2.rollUp = function() {
            var e4 = this;
            if (null !== this.nrRollUpRows) {
              this.logger.log(1, (function() {
                return e4.getDisplayText();
              }));
              var t3 = this.currRow + 1 - this.nrRollUpRows, r2 = this.rows.splice(t3, 1)[0];
              r2.clear(), this.rows.splice(this.currRow, 0, r2), this.logger.log(2, "Rolling up");
            } else this.logger.log(3, "roll_up but nrRollUpRows not set yet");
          }, t2.getDisplayText = function(e4) {
            e4 = e4 || false;
            for (var t3 = [], r2 = "", n2 = -1, i2 = 0; i2 < Xa; i2++) {
              var a2 = this.rows[i2].getTextString();
              a2 && (n2 = i2 + 1, e4 ? t3.push("Row " + n2 + ": '" + a2 + "'") : t3.push(a2.trim()));
            }
            return t3.length > 0 && (r2 = e4 ? "[" + t3.join(" | ") + "]" : t3.join("\n")), r2;
          }, t2.getTextAndFormat = function() {
            return this.rows;
          }, e3;
        })(), ls = (function() {
          function e3(e4, t3, r2) {
            this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e4, this.outputFilter = t3, this.mode = null, this.verbose = 0, this.displayedMemory = new os(r2), this.nonDisplayedMemory = new os(r2), this.lastOutputScreen = new os(r2), this.currRollUpRow = this.displayedMemory.rows[Xa - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = r2;
          }
          var t2 = e3.prototype;
          return t2.reset = function() {
            this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[Xa - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
          }, t2.getHandler = function() {
            return this.outputFilter;
          }, t2.setHandler = function(e4) {
            this.outputFilter = e4;
          }, t2.setPAC = function(e4) {
            this.writeScreen.setPAC(e4);
          }, t2.setBkgData = function(e4) {
            this.writeScreen.setBkgData(e4);
          }, t2.setMode = function(e4) {
            e4 !== this.mode && (this.mode = e4, this.logger.log(2, (function() {
              return "MODE=" + e4;
            })), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e4);
          }, t2.insertChars = function(e4) {
            for (var t3 = this, r2 = 0; r2 < e4.length; r2++) this.writeScreen.insertChar(e4[r2]);
            var n2 = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
            this.logger.log(2, (function() {
              return n2 + ": " + t3.writeScreen.getDisplayText(true);
            })), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(1, (function() {
              return "DISPLAYED: " + t3.displayedMemory.getDisplayText(true);
            })), this.outputDataUpdate());
          }, t2.ccRCL = function() {
            this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
          }, t2.ccBS = function() {
            this.logger.log(2, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
          }, t2.ccAOF = function() {
          }, t2.ccAON = function() {
          }, t2.ccDER = function() {
            this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
          }, t2.ccRU = function(e4) {
            this.logger.log(2, "RU(" + e4 + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e4);
          }, t2.ccFON = function() {
            this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({ flash: true });
          }, t2.ccRDC = function() {
            this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
          }, t2.ccTR = function() {
            this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
          }, t2.ccRTD = function() {
            this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
          }, t2.ccEDM = function() {
            this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(true);
          }, t2.ccCR = function() {
            this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(true);
          }, t2.ccENM = function() {
            this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
          }, t2.ccEOC = function() {
            var e4 = this;
            if (this.logger.log(2, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
              var t3 = this.displayedMemory;
              this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t3, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, (function() {
                return "DISP: " + e4.displayedMemory.getDisplayText();
              }));
            }
            this.outputDataUpdate(true);
          }, t2.ccTO = function(e4) {
            this.logger.log(2, "TO(" + e4 + ") - Tab Offset"), this.writeScreen.moveCursor(e4);
          }, t2.ccMIDROW = function(e4) {
            var t3 = { flash: false };
            if (t3.underline = e4 % 2 == 1, t3.italics = e4 >= 46, t3.italics) t3.foreground = "white";
            else {
              var r2 = Math.floor(e4 / 2) - 16, n2 = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
              t3.foreground = n2[r2];
            }
            this.logger.log(2, "MIDROW: " + JSON.stringify(t3)), this.writeScreen.setPen(t3);
          }, t2.outputDataUpdate = function(e4) {
            void 0 === e4 && (e4 = false);
            var t3 = this.logger.time;
            null !== t3 && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t3, this.lastOutputScreen), e4 && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t3) : this.cueStartTime = t3, this.lastOutputScreen.copy(this.displayedMemory));
          }, t2.cueSplitAtTime = function(e4) {
            this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e4, this.displayedMemory), this.cueStartTime = e4));
          }, e3;
        })(), us = (function() {
          function e3(e4, t3, r2) {
            this.channels = void 0, this.currentChannel = 0, this.cmdHistory = hs(), this.logger = void 0;
            var n2 = this.logger = new rs();
            this.channels = [null, new ls(e4, t3, n2), new ls(e4 + 1, r2, n2)];
          }
          var t2 = e3.prototype;
          return t2.getHandler = function(e4) {
            return this.channels[e4].getHandler();
          }, t2.setHandler = function(e4, t3) {
            this.channels[e4].setHandler(t3);
          }, t2.addData = function(e4, t3) {
            var r2, n2, i2, a2 = false;
            this.logger.time = e4;
            for (var s2 = 0; s2 < t3.length; s2 += 2) if (n2 = 127 & t3[s2], i2 = 127 & t3[s2 + 1], 0 !== n2 || 0 !== i2) {
              if (this.logger.log(3, "[" + ns([t3[s2], t3[s2 + 1]]) + "] -> (" + ns([n2, i2]) + ")"), (r2 = this.parseCmd(n2, i2)) || (r2 = this.parseMidrow(n2, i2)), r2 || (r2 = this.parsePAC(n2, i2)), r2 || (r2 = this.parseBackgroundAttributes(n2, i2)), !r2 && (a2 = this.parseChars(n2, i2))) {
                var o2 = this.currentChannel;
                o2 && o2 > 0 ? this.channels[o2].insertChars(a2) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
              }
              r2 || a2 || this.logger.log(2, "Couldn't parse cleaned data " + ns([n2, i2]) + " orig: " + ns([t3[s2], t3[s2 + 1]]));
            }
          }, t2.parseCmd = function(e4, t3) {
            var r2 = this.cmdHistory;
            if (!((20 === e4 || 28 === e4 || 21 === e4 || 29 === e4) && t3 >= 32 && t3 <= 47 || (23 === e4 || 31 === e4) && t3 >= 33 && t3 <= 35)) return false;
            if (ds(e4, t3, r2)) return cs(null, null, r2), this.logger.log(3, "Repeated command (" + ns([e4, t3]) + ") is dropped"), true;
            var n2 = 20 === e4 || 21 === e4 || 23 === e4 ? 1 : 2, i2 = this.channels[n2];
            return 20 === e4 || 21 === e4 || 28 === e4 || 29 === e4 ? 32 === t3 ? i2.ccRCL() : 33 === t3 ? i2.ccBS() : 34 === t3 ? i2.ccAOF() : 35 === t3 ? i2.ccAON() : 36 === t3 ? i2.ccDER() : 37 === t3 ? i2.ccRU(2) : 38 === t3 ? i2.ccRU(3) : 39 === t3 ? i2.ccRU(4) : 40 === t3 ? i2.ccFON() : 41 === t3 ? i2.ccRDC() : 42 === t3 ? i2.ccTR() : 43 === t3 ? i2.ccRTD() : 44 === t3 ? i2.ccEDM() : 45 === t3 ? i2.ccCR() : 46 === t3 ? i2.ccENM() : 47 === t3 && i2.ccEOC() : i2.ccTO(t3 - 32), cs(e4, t3, r2), this.currentChannel = n2, true;
          }, t2.parseMidrow = function(e4, t3) {
            var r2 = 0;
            if ((17 === e4 || 25 === e4) && t3 >= 32 && t3 <= 47) {
              if ((r2 = 17 === e4 ? 1 : 2) !== this.currentChannel) return this.logger.log(0, "Mismatch channel in midrow parsing"), false;
              var n2 = this.channels[r2];
              return !!n2 && (n2.ccMIDROW(t3), this.logger.log(3, "MIDROW (" + ns([e4, t3]) + ")"), true);
            }
            return false;
          }, t2.parsePAC = function(e4, t3) {
            var r2, n2 = this.cmdHistory;
            if (!((e4 >= 17 && e4 <= 23 || e4 >= 25 && e4 <= 31) && t3 >= 64 && t3 <= 127 || (16 === e4 || 24 === e4) && t3 >= 64 && t3 <= 95)) return false;
            if (ds(e4, t3, n2)) return cs(null, null, n2), true;
            var i2 = e4 <= 23 ? 1 : 2;
            r2 = t3 >= 64 && t3 <= 95 ? 1 === i2 ? Ja[e4] : Za[e4] : 1 === i2 ? Qa[e4] : es[e4];
            var a2 = this.channels[i2];
            return !!a2 && (a2.setPAC(this.interpretPAC(r2, t3)), cs(e4, t3, n2), this.currentChannel = i2, true);
          }, t2.interpretPAC = function(e4, t3) {
            var r2, n2 = { color: null, italics: false, indent: null, underline: false, row: e4 };
            return r2 = t3 > 95 ? t3 - 96 : t3 - 64, n2.underline = !(1 & ~r2), r2 <= 13 ? n2.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r2 / 2)] : r2 <= 15 ? (n2.italics = true, n2.color = "white") : n2.indent = 4 * Math.floor((r2 - 16) / 2), n2;
          }, t2.parseChars = function(e4, t3) {
            var r2, n2, i2 = null, a2 = null;
            if (e4 >= 25 ? (r2 = 2, a2 = e4 - 8) : (r2 = 1, a2 = e4), a2 >= 17 && a2 <= 19 ? (n2 = 17 === a2 ? t3 + 80 : 18 === a2 ? t3 + 112 : t3 + 144, this.logger.log(2, "Special char '" + qa(n2) + "' in channel " + r2), i2 = [n2]) : e4 >= 32 && e4 <= 127 && (i2 = 0 === t3 ? [e4] : [e4, t3]), i2) {
              var s2 = ns(i2);
              this.logger.log(3, "Char codes =  " + s2.join(",")), cs(e4, t3, this.cmdHistory);
            }
            return i2;
          }, t2.parseBackgroundAttributes = function(e4, t3) {
            var r2;
            if (!((16 === e4 || 24 === e4) && t3 >= 32 && t3 <= 47 || (23 === e4 || 31 === e4) && t3 >= 45 && t3 <= 47)) return false;
            var n2 = {};
            16 === e4 || 24 === e4 ? (r2 = Math.floor((t3 - 32) / 2), n2.background = ts[r2], t3 % 2 == 1 && (n2.background = n2.background + "_semi")) : 45 === t3 ? n2.background = "transparent" : (n2.foreground = "black", 47 === t3 && (n2.underline = true));
            var i2 = e4 <= 23 ? 1 : 2;
            return this.channels[i2].setBkgData(n2), cs(e4, t3, this.cmdHistory), true;
          }, t2.reset = function() {
            for (var e4 = 0; e4 < Object.keys(this.channels).length; e4++) {
              var t3 = this.channels[e4];
              t3 && t3.reset();
            }
            this.cmdHistory = hs();
          }, t2.cueSplitAtTime = function(e4) {
            for (var t3 = 0; t3 < this.channels.length; t3++) {
              var r2 = this.channels[t3];
              r2 && r2.cueSplitAtTime(e4);
            }
          }, e3;
        })();
        function cs(e3, t2, r2) {
          r2.a = e3, r2.b = t2;
        }
        function ds(e3, t2, r2) {
          return r2.a === e3 && r2.b === t2;
        }
        function hs() {
          return { a: null, b: null };
        }
        var fs = (function() {
          function e3(e4, t3) {
            this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e4, this.trackName = t3;
          }
          var t2 = e3.prototype;
          return t2.dispatchCue = function() {
            null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
          }, t2.newCue = function(e4, t3, r2) {
            (null === this.startTime || this.startTime > e4) && (this.startTime = e4), this.endTime = t3, this.screen = r2, this.timelineController.createCaptionsTrack(this.trackName);
          }, t2.reset = function() {
            this.cueRanges = [], this.startTime = null;
          }, e3;
        })(), gs = (function() {
          if (null != te && te.VTTCue) return self.VTTCue;
          var e3 = ["", "lr", "rl"], t2 = ["start", "middle", "end", "left", "right"];
          function r2(e4, t3) {
            if ("string" != typeof t3) return false;
            if (!Array.isArray(e4)) return false;
            var r3 = t3.toLowerCase();
            return !!~e4.indexOf(r3) && r3;
          }
          function n2(t3) {
            return r2(e3, t3);
          }
          function i2(e4) {
            return r2(t2, e4);
          }
          function a2(e4) {
            for (var t3 = arguments.length, r3 = new Array(t3 > 1 ? t3 - 1 : 0), n3 = 1; n3 < t3; n3++) r3[n3 - 1] = arguments[n3];
            for (var i3 = 1; i3 < arguments.length; i3++) {
              var a3 = arguments[i3];
              for (var s3 in a3) e4[s3] = a3[s3];
            }
            return e4;
          }
          function s2(e4, t3, r3) {
            var s3 = this, o2 = { enumerable: true };
            s3.hasBeenReset = false;
            var l2 = "", u2 = false, c2 = e4, d2 = t3, h2 = r3, f2 = null, g2 = "", m2 = true, p2 = "auto", v2 = "start", y2 = 50, T2 = "middle", b2 = 50, E2 = "middle";
            Object.defineProperty(s3, "id", a2({}, o2, { get: function() {
              return l2;
            }, set: function(e5) {
              l2 = "" + e5;
            } })), Object.defineProperty(s3, "pauseOnExit", a2({}, o2, { get: function() {
              return u2;
            }, set: function(e5) {
              u2 = !!e5;
            } })), Object.defineProperty(s3, "startTime", a2({}, o2, { get: function() {
              return c2;
            }, set: function(e5) {
              if ("number" != typeof e5) throw new TypeError("Start time must be set to a number.");
              c2 = e5, this.hasBeenReset = true;
            } })), Object.defineProperty(s3, "endTime", a2({}, o2, { get: function() {
              return d2;
            }, set: function(e5) {
              if ("number" != typeof e5) throw new TypeError("End time must be set to a number.");
              d2 = e5, this.hasBeenReset = true;
            } })), Object.defineProperty(s3, "text", a2({}, o2, { get: function() {
              return h2;
            }, set: function(e5) {
              h2 = "" + e5, this.hasBeenReset = true;
            } })), Object.defineProperty(s3, "region", a2({}, o2, { get: function() {
              return f2;
            }, set: function(e5) {
              f2 = e5, this.hasBeenReset = true;
            } })), Object.defineProperty(s3, "vertical", a2({}, o2, { get: function() {
              return g2;
            }, set: function(e5) {
              var t4 = n2(e5);
              if (false === t4) throw new SyntaxError("An invalid or illegal string was specified.");
              g2 = t4, this.hasBeenReset = true;
            } })), Object.defineProperty(s3, "snapToLines", a2({}, o2, { get: function() {
              return m2;
            }, set: function(e5) {
              m2 = !!e5, this.hasBeenReset = true;
            } })), Object.defineProperty(s3, "line", a2({}, o2, { get: function() {
              return p2;
            }, set: function(e5) {
              if ("number" != typeof e5 && "auto" !== e5) throw new SyntaxError("An invalid number or illegal string was specified.");
              p2 = e5, this.hasBeenReset = true;
            } })), Object.defineProperty(s3, "lineAlign", a2({}, o2, { get: function() {
              return v2;
            }, set: function(e5) {
              var t4 = i2(e5);
              if (!t4) throw new SyntaxError("An invalid or illegal string was specified.");
              v2 = t4, this.hasBeenReset = true;
            } })), Object.defineProperty(s3, "position", a2({}, o2, { get: function() {
              return y2;
            }, set: function(e5) {
              if (e5 < 0 || e5 > 100) throw new Error("Position must be between 0 and 100.");
              y2 = e5, this.hasBeenReset = true;
            } })), Object.defineProperty(s3, "positionAlign", a2({}, o2, { get: function() {
              return T2;
            }, set: function(e5) {
              var t4 = i2(e5);
              if (!t4) throw new SyntaxError("An invalid or illegal string was specified.");
              T2 = t4, this.hasBeenReset = true;
            } })), Object.defineProperty(s3, "size", a2({}, o2, { get: function() {
              return b2;
            }, set: function(e5) {
              if (e5 < 0 || e5 > 100) throw new Error("Size must be between 0 and 100.");
              b2 = e5, this.hasBeenReset = true;
            } })), Object.defineProperty(s3, "align", a2({}, o2, { get: function() {
              return E2;
            }, set: function(e5) {
              var t4 = i2(e5);
              if (!t4) throw new SyntaxError("An invalid or illegal string was specified.");
              E2 = t4, this.hasBeenReset = true;
            } })), s3.displayState = void 0;
          }
          return s2.prototype.getCueAsHTML = function() {
            return self.WebVTT.convertCueToDOMTree(self, this.text);
          }, s2;
        })(), ms = (function() {
          function e3() {
          }
          return e3.prototype.decode = function(e4, t2) {
            if (!e4) return "";
            if ("string" != typeof e4) throw new Error("Error - expected string data.");
            return decodeURIComponent(encodeURIComponent(e4));
          }, e3;
        })();
        function ps(e3) {
          function t2(e4, t3, r3, n2) {
            return 3600 * (0 | e4) + 60 * (0 | t3) + (0 | r3) + parseFloat(n2 || 0);
          }
          var r2 = e3.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
          return r2 ? parseFloat(r2[2]) > 59 ? t2(r2[2], r2[3], 0, r2[4]) : t2(r2[1], r2[2], r2[3], r2[4]) : null;
        }
        var vs = (function() {
          function e3() {
            this.values = /* @__PURE__ */ Object.create(null);
          }
          var t2 = e3.prototype;
          return t2.set = function(e4, t3) {
            this.get(e4) || "" === t3 || (this.values[e4] = t3);
          }, t2.get = function(e4, t3, r2) {
            return r2 ? this.has(e4) ? this.values[e4] : t3[r2] : this.has(e4) ? this.values[e4] : t3;
          }, t2.has = function(e4) {
            return e4 in this.values;
          }, t2.alt = function(e4, t3, r2) {
            for (var n2 = 0; n2 < r2.length; ++n2) if (t3 === r2[n2]) {
              this.set(e4, t3);
              break;
            }
          }, t2.integer = function(e4, t3) {
            /^-?\d+$/.test(t3) && this.set(e4, parseInt(t3, 10));
          }, t2.percent = function(e4, t3) {
            if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t3)) {
              var r2 = parseFloat(t3);
              if (r2 >= 0 && r2 <= 100) return this.set(e4, r2), true;
            }
            return false;
          }, e3;
        })();
        function ys(e3, t2, r2, n2) {
          var i2 = n2 ? e3.split(n2) : [e3];
          for (var a2 in i2) if ("string" == typeof i2[a2]) {
            var s2 = i2[a2].split(r2);
            2 === s2.length && t2(s2[0], s2[1]);
          }
        }
        var Ts = new gs(0, 0, ""), bs = "middle" === Ts.align ? "middle" : "center";
        function Es(e3, t2, r2) {
          var n2 = e3;
          function i2() {
            var t3 = ps(e3);
            if (null === t3) throw new Error("Malformed timestamp: " + n2);
            return e3 = e3.replace(/^[^\sa-zA-Z-]+/, ""), t3;
          }
          function a2(e4, t3) {
            var n3 = new vs();
            ys(e4, (function(e5, t4) {
              var i4;
              switch (e5) {
                case "region":
                  for (var a4 = r2.length - 1; a4 >= 0; a4--) if (r2[a4].id === t4) {
                    n3.set(e5, r2[a4].region);
                    break;
                  }
                  break;
                case "vertical":
                  n3.alt(e5, t4, ["rl", "lr"]);
                  break;
                case "line":
                  i4 = t4.split(","), n3.integer(e5, i4[0]), n3.percent(e5, i4[0]) && n3.set("snapToLines", false), n3.alt(e5, i4[0], ["auto"]), 2 === i4.length && n3.alt("lineAlign", i4[1], ["start", bs, "end"]);
                  break;
                case "position":
                  i4 = t4.split(","), n3.percent(e5, i4[0]), 2 === i4.length && n3.alt("positionAlign", i4[1], ["start", bs, "end", "line-left", "line-right", "auto"]);
                  break;
                case "size":
                  n3.percent(e5, t4);
                  break;
                case "align":
                  n3.alt(e5, t4, ["start", bs, "end", "left", "right"]);
              }
            }), /:/, /\s/), t3.region = n3.get("region", null), t3.vertical = n3.get("vertical", "");
            var i3 = n3.get("line", "auto");
            "auto" === i3 && -1 === Ts.line && (i3 = -1), t3.line = i3, t3.lineAlign = n3.get("lineAlign", "start"), t3.snapToLines = n3.get("snapToLines", true), t3.size = n3.get("size", 100), t3.align = n3.get("align", bs);
            var a3 = n3.get("position", "auto");
            "auto" === a3 && 50 === Ts.position && (a3 = "start" === t3.align || "left" === t3.align ? 0 : "end" === t3.align || "right" === t3.align ? 100 : 50), t3.position = a3;
          }
          function s2() {
            e3 = e3.replace(/^\s+/, "");
          }
          if (s2(), t2.startTime = i2(), s2(), "-->" !== e3.slice(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + n2);
          e3 = e3.slice(3), s2(), t2.endTime = i2(), s2(), a2(e3, t2);
        }
        function Ss(e3) {
          return e3.replace(/<br(?: \/)?>/gi, "\n");
        }
        var As = (function() {
          function e3() {
            this.state = "INITIAL", this.buffer = "", this.decoder = new ms(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
          }
          var t2 = e3.prototype;
          return t2.parse = function(e4) {
            var t3 = this;
            function r2() {
              var e5 = t3.buffer, r3 = 0;
              for (e5 = Ss(e5); r3 < e5.length && "\r" !== e5[r3] && "\n" !== e5[r3]; ) ++r3;
              var n3 = e5.slice(0, r3);
              return "\r" === e5[r3] && ++r3, "\n" === e5[r3] && ++r3, t3.buffer = e5.slice(r3), n3;
            }
            function n2(e5) {
              ys(e5, (function(e6, t4) {
              }), /:/);
            }
            e4 && (t3.buffer += t3.decoder.decode(e4, { stream: true }));
            try {
              var i2 = "";
              if ("INITIAL" === t3.state) {
                if (!/\r\n|\n/.test(t3.buffer)) return this;
                var a2 = (i2 = r2()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                if (null == a2 || !a2[0]) throw new Error("Malformed WebVTT signature.");
                t3.state = "HEADER";
              }
              for (var s2 = false; t3.buffer; ) {
                if (!/\r\n|\n/.test(t3.buffer)) return this;
                switch (s2 ? s2 = false : i2 = r2(), t3.state) {
                  case "HEADER":
                    /:/.test(i2) ? n2(i2) : i2 || (t3.state = "ID");
                    continue;
                  case "NOTE":
                    i2 || (t3.state = "ID");
                    continue;
                  case "ID":
                    if (/^NOTE($|[ \t])/.test(i2)) {
                      t3.state = "NOTE";
                      break;
                    }
                    if (!i2) continue;
                    if (t3.cue = new gs(0, 0, ""), t3.state = "CUE", -1 === i2.indexOf("-->")) {
                      t3.cue.id = i2;
                      continue;
                    }
                  case "CUE":
                    if (!t3.cue) {
                      t3.state = "BADCUE";
                      continue;
                    }
                    try {
                      Es(i2, t3.cue, t3.regionList);
                    } catch (e5) {
                      t3.cue = null, t3.state = "BADCUE";
                      continue;
                    }
                    t3.state = "CUETEXT";
                    continue;
                  case "CUETEXT":
                    var o2 = -1 !== i2.indexOf("-->");
                    if (!i2 || o2 && (s2 = true)) {
                      t3.oncue && t3.cue && t3.oncue(t3.cue), t3.cue = null, t3.state = "ID";
                      continue;
                    }
                    if (null === t3.cue) continue;
                    t3.cue.text && (t3.cue.text += "\n"), t3.cue.text += i2;
                    continue;
                  case "BADCUE":
                    i2 || (t3.state = "ID");
                }
              }
            } catch (e5) {
              "CUETEXT" === t3.state && t3.cue && t3.oncue && t3.oncue(t3.cue), t3.cue = null, t3.state = "INITIAL" === t3.state ? "BADWEBVTT" : "BADCUE";
            }
            return this;
          }, t2.flush = function() {
            var e4 = this;
            try {
              if ((e4.cue || "HEADER" === e4.state) && (e4.buffer += "\n\n", e4.parse()), "INITIAL" === e4.state || "BADWEBVTT" === e4.state) throw new Error("Malformed WebVTT signature.");
            } catch (t3) {
              e4.onparsingerror && e4.onparsingerror(t3);
            }
            return e4.onflush && e4.onflush(), this;
          }, e3;
        })(), ks = /\r\n|\n\r|\n|\r/g, Ls = function(e3, t2, r2) {
          return void 0 === r2 && (r2 = 0), e3.slice(r2, r2 + t2.length) === t2;
        }, Rs = function(e3) {
          var t2 = parseInt(e3.slice(-3)), r2 = parseInt(e3.slice(-6, -4)), n2 = parseInt(e3.slice(-9, -7)), i2 = e3.length > 9 ? parseInt(e3.substring(0, e3.indexOf(":"))) : 0;
          if (!(k(t2) && k(r2) && k(n2) && k(i2))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + e3);
          return t2 += 1e3 * r2, t2 += 6e4 * n2, t2 += 36e5 * i2;
        }, Is = function(e3) {
          for (var t2 = 5381, r2 = e3.length; r2; ) t2 = 33 * t2 ^ e3.charCodeAt(--r2);
          return (t2 >>> 0).toString();
        };
        function ws(e3, t2, r2) {
          return Is(e3.toString()) + Is(t2.toString()) + Is(r2);
        }
        var Ds = function(e3, t2, r2) {
          var n2 = e3[t2], i2 = e3[n2.prevCC];
          if (!i2 || !i2.new && n2.new) return e3.ccOffset = e3.presentationOffset = n2.start, void (n2.new = false);
          for (; null != (a2 = i2) && a2.new; ) {
            var a2;
            e3.ccOffset += n2.start - i2.start, n2.new = false, i2 = e3[(n2 = i2).prevCC];
          }
          e3.presentationOffset = r2;
        };
        function Cs(e3, t2, r2, n2, i2, a2, s2) {
          var o2, l2 = new As(), u2 = De(new Uint8Array(e3)).trim().replace(ks, "\n").split("\n"), c2 = [], d2 = t2 ? Ji(t2.baseTime, t2.timescale) : 0, h2 = "00:00.000", f2 = 0, g2 = 0, m2 = true;
          l2.oncue = function(e4) {
            var a3 = r2[n2], s3 = r2.ccOffset, l3 = (f2 - d2) / 9e4;
            if (null != a3 && a3.new && (void 0 !== g2 ? s3 = r2.ccOffset = a3.start : Ds(r2, n2, l3)), l3) {
              if (!t2) return void (o2 = new Error("Missing initPTS for VTT MPEGTS"));
              s3 = l3 - r2.presentationOffset;
            }
            var u3 = e4.endTime - e4.startTime, h3 = aa(9e4 * (e4.startTime + s3 - g2), 9e4 * i2) / 9e4;
            e4.startTime = Math.max(h3, 0), e4.endTime = Math.max(h3 + u3, 0);
            var m3 = e4.text.trim();
            e4.text = decodeURIComponent(encodeURIComponent(m3)), e4.id || (e4.id = ws(e4.startTime, e4.endTime, m3)), e4.endTime > 0 && c2.push(e4);
          }, l2.onparsingerror = function(e4) {
            o2 = e4;
          }, l2.onflush = function() {
            o2 ? s2(o2) : a2(c2);
          }, u2.forEach((function(e4) {
            if (m2) {
              if (Ls(e4, "X-TIMESTAMP-MAP=")) {
                m2 = false, e4.slice(16).split(",").forEach((function(e5) {
                  Ls(e5, "LOCAL:") ? h2 = e5.slice(6) : Ls(e5, "MPEGTS:") && (f2 = parseInt(e5.slice(7)));
                }));
                try {
                  g2 = Rs(h2) / 1e3;
                } catch (e5) {
                  o2 = e5;
                }
                return;
              }
              "" === e4 && (m2 = false);
            }
            l2.parse(e4 + "\n");
          })), l2.flush();
        }
        var xs = "stpp.ttml.im1t", _s = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, Os = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, Ps = { left: "start", center: "center", right: "end", start: "start", end: "end" };
        function Ms(e3, t2, r2, n2) {
          var i2 = He(new Uint8Array(e3), ["mdat"]);
          if (0 !== i2.length) {
            var a2 = i2.map((function(e4) {
              return De(e4);
            })), s2 = Xi(t2.baseTime, 1, t2.timescale);
            try {
              a2.forEach((function(e4) {
                return r2(Fs(e4, s2));
              }));
            } catch (e4) {
              n2(e4);
            }
          } else n2(new Error("Could not parse IMSC1 mdat"));
        }
        function Fs(e3, t2) {
          var r2 = new DOMParser().parseFromString(e3, "text/xml").getElementsByTagName("tt")[0];
          if (!r2) throw new Error("Invalid ttml");
          var n2 = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 }, i2 = Object.keys(n2).reduce((function(e4, t3) {
            return e4[t3] = r2.getAttribute("ttp:" + t3) || n2[t3], e4;
          }), {}), a2 = "preserve" !== r2.getAttribute("xml:space"), s2 = Us(Ns(r2, "styling", "style")), o2 = Us(Ns(r2, "layout", "region")), l2 = Ns(r2, "body", "[begin]");
          return [].map.call(l2, (function(e4) {
            var r3 = Bs(e4, a2);
            if (!r3 || !e4.hasAttribute("begin")) return null;
            var n3 = Ks(e4.getAttribute("begin"), i2), l3 = Ks(e4.getAttribute("dur"), i2), c2 = Ks(e4.getAttribute("end"), i2);
            if (null === n3) throw Hs(e4);
            if (null === c2) {
              if (null === l3) throw Hs(e4);
              c2 = n3 + l3;
            }
            var d2 = new gs(n3 - t2, c2 - t2, r3);
            d2.id = ws(d2.startTime, d2.endTime, d2.text);
            var h2 = Gs(o2[e4.getAttribute("region")], s2[e4.getAttribute("style")], s2), f2 = h2.textAlign;
            if (f2) {
              var g2 = Ps[f2];
              g2 && (d2.lineAlign = g2), d2.align = f2;
            }
            return u(d2, h2), d2;
          })).filter((function(e4) {
            return null !== e4;
          }));
        }
        function Ns(e3, t2, r2) {
          var n2 = e3.getElementsByTagName(t2)[0];
          return n2 ? [].slice.call(n2.querySelectorAll(r2)) : [];
        }
        function Us(e3) {
          return e3.reduce((function(e4, t2) {
            var r2 = t2.getAttribute("xml:id");
            return r2 && (e4[r2] = t2), e4;
          }), {});
        }
        function Bs(e3, t2) {
          return [].slice.call(e3.childNodes).reduce((function(e4, r2, n2) {
            var i2;
            return "br" === r2.nodeName && n2 ? e4 + "\n" : null != (i2 = r2.childNodes) && i2.length ? Bs(r2, t2) : t2 ? e4 + r2.textContent.trim().replace(/\s+/g, " ") : e4 + r2.textContent;
          }), "");
        }
        function Gs(e3, t2, r2) {
          var n2 = "http://www.w3.org/ns/ttml#styling", i2 = null, a2 = ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"], s2 = null != e3 && e3.hasAttribute("style") ? e3.getAttribute("style") : null;
          return s2 && r2.hasOwnProperty(s2) && (i2 = r2[s2]), a2.reduce((function(r3, a3) {
            var s3 = Vs(t2, n2, a3) || Vs(e3, n2, a3) || Vs(i2, n2, a3);
            return s3 && (r3[a3] = s3), r3;
          }), {});
        }
        function Vs(e3, t2, r2) {
          return e3 && e3.hasAttributeNS(t2, r2) ? e3.getAttributeNS(t2, r2) : null;
        }
        function Hs(e3) {
          return new Error("Could not parse ttml timestamp " + e3);
        }
        function Ks(e3, t2) {
          if (!e3) return null;
          var r2 = ps(e3);
          return null === r2 && (_s.test(e3) ? r2 = js(e3, t2) : Os.test(e3) && (r2 = Ys(e3, t2))), r2;
        }
        function js(e3, t2) {
          var r2 = _s.exec(e3), n2 = (0 | r2[4]) + (0 | r2[5]) / t2.subFrameRate;
          return 3600 * (0 | r2[1]) + 60 * (0 | r2[2]) + (0 | r2[3]) + n2 / t2.frameRate;
        }
        function Ys(e3, t2) {
          var r2 = Os.exec(e3), n2 = Number(r2[1]);
          switch (r2[2]) {
            case "h":
              return 3600 * n2;
            case "m":
              return 60 * n2;
            case "ms":
              return 1e3 * n2;
            case "f":
              return n2 / t2.frameRate;
            case "t":
              return n2 / t2.tickRate;
          }
          return n2;
        }
        var Ws = (function() {
          function e3(e4) {
            this.hls = void 0, this.media = null, this.config = void 0, this.enabled = true, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = $s(), this.captionsProperties = void 0, this.hls = e4, this.config = e4.config, this.Cues = e4.config.cueHandler, this.captionsProperties = { textTrack1: { label: this.config.captionsTextTrack1Label, languageCode: this.config.captionsTextTrack1LanguageCode }, textTrack2: { label: this.config.captionsTextTrack2Label, languageCode: this.config.captionsTextTrack2LanguageCode }, textTrack3: { label: this.config.captionsTextTrack3Label, languageCode: this.config.captionsTextTrack3LanguageCode }, textTrack4: { label: this.config.captionsTextTrack4Label, languageCode: this.config.captionsTextTrack4LanguageCode } }, e4.on(I.MEDIA_ATTACHING, this.onMediaAttaching, this), e4.on(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.on(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.on(I.MANIFEST_LOADED, this.onManifestLoaded, this), e4.on(I.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e4.on(I.FRAG_LOADING, this.onFragLoading, this), e4.on(I.FRAG_LOADED, this.onFragLoaded, this), e4.on(I.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e4.on(I.FRAG_DECRYPTED, this.onFragDecrypted, this), e4.on(I.INIT_PTS_FOUND, this.onInitPtsFound, this), e4.on(I.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e4.on(I.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }
          var t2 = e3.prototype;
          return t2.destroy = function() {
            var e4 = this.hls;
            e4.off(I.MEDIA_ATTACHING, this.onMediaAttaching, this), e4.off(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.off(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.off(I.MANIFEST_LOADED, this.onManifestLoaded, this), e4.off(I.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e4.off(I.FRAG_LOADING, this.onFragLoading, this), e4.off(I.FRAG_LOADED, this.onFragLoaded, this), e4.off(I.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e4.off(I.FRAG_DECRYPTED, this.onFragDecrypted, this), e4.off(I.INIT_PTS_FOUND, this.onInitPtsFound, this), e4.off(I.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e4.off(I.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = null, this.cea608Parser1 = this.cea608Parser2 = void 0;
          }, t2.initCea608Parsers = function() {
            if (this.config.enableCEA708Captions && (!this.cea608Parser1 || !this.cea608Parser2)) {
              var e4 = new fs(this, "textTrack1"), t3 = new fs(this, "textTrack2"), r2 = new fs(this, "textTrack3"), n2 = new fs(this, "textTrack4");
              this.cea608Parser1 = new us(1, e4, t3), this.cea608Parser2 = new us(3, r2, n2);
            }
          }, t2.addCues = function(e4, t3, r2, n2, i2) {
            for (var a2 = false, s2 = i2.length; s2--; ) {
              var o2 = i2[s2], l2 = Xs(o2[0], o2[1], t3, r2);
              if (l2 >= 0 && (o2[0] = Math.min(o2[0], t3), o2[1] = Math.max(o2[1], r2), a2 = true, l2 / (r2 - t3) > 0.5)) return;
            }
            if (a2 || i2.push([t3, r2]), this.config.renderTextTracksNatively) {
              var u2 = this.captionsTracks[e4];
              this.Cues.newCue(u2, t3, r2, n2);
            } else {
              var c2 = this.Cues.newCue(null, t3, r2, n2);
              this.hls.trigger(I.CUES_PARSED, { type: "captions", cues: c2, track: e4 });
            }
          }, t2.onInitPtsFound = function(e4, t3) {
            var r2 = this, n2 = t3.frag, i2 = t3.id, a2 = t3.initPTS, s2 = t3.timescale, o2 = this.unparsedVttFrags;
            "main" === i2 && (this.initPTS[n2.cc] = { baseTime: a2, timescale: s2 }), o2.length && (this.unparsedVttFrags = [], o2.forEach((function(e5) {
              r2.onFragLoaded(I.FRAG_LOADED, e5);
            })));
          }, t2.getExistingTrack = function(e4, t3) {
            var r2 = this.media;
            if (r2) for (var n2 = 0; n2 < r2.textTracks.length; n2++) {
              var i2 = r2.textTracks[n2];
              if (qs(i2, { name: e4, lang: t3, attrs: {} })) return i2;
            }
            return null;
          }, t2.createCaptionsTrack = function(e4) {
            this.config.renderTextTracksNatively ? this.createNativeTrack(e4) : this.createNonNativeTrack(e4);
          }, t2.createNativeTrack = function(e4) {
            if (!this.captionsTracks[e4]) {
              var t3 = this.captionsProperties, r2 = this.captionsTracks, n2 = this.media, i2 = t3[e4], a2 = i2.label, s2 = i2.languageCode, o2 = this.getExistingTrack(a2, s2);
              if (o2) r2[e4] = o2, rr(r2[e4]), er(r2[e4], n2);
              else {
                var l2 = this.createTextTrack("captions", a2, s2);
                l2 && (l2[e4] = true, r2[e4] = l2);
              }
            }
          }, t2.createNonNativeTrack = function(e4) {
            if (!this.nonNativeCaptionsTracks[e4]) {
              var t3 = this.captionsProperties[e4];
              if (t3) {
                var r2 = { _id: e4, label: t3.label, kind: "captions", default: !!t3.media && !!t3.media.default, closedCaptions: t3.media };
                this.nonNativeCaptionsTracks[e4] = r2, this.hls.trigger(I.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [r2] });
              }
            }
          }, t2.createTextTrack = function(e4, t3, r2) {
            var n2 = this.media;
            if (n2) return n2.addTextTrack(e4, t3, r2);
          }, t2.onMediaAttaching = function(e4, t3) {
            this.media = t3.media, this._cleanTracks();
          }, t2.onMediaDetaching = function() {
            var e4 = this.captionsTracks;
            Object.keys(e4).forEach((function(t3) {
              rr(e4[t3]), delete e4[t3];
            })), this.nonNativeCaptionsTracks = {};
          }, t2.onManifestLoading = function() {
            this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = $s(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
          }, t2._cleanTracks = function() {
            var e4 = this.media;
            if (e4) {
              var t3 = e4.textTracks;
              if (t3) for (var r2 = 0; r2 < t3.length; r2++) rr(t3[r2]);
            }
          }, t2.onSubtitleTracksUpdated = function(e4, t3) {
            var r2 = this, n2 = t3.subtitleTracks || [], i2 = n2.some((function(e5) {
              return e5.textCodec === xs;
            }));
            if (this.config.enableWebVTT || i2 && this.config.enableIMSC1) {
              if (_a(this.tracks, n2)) return void (this.tracks = n2);
              if (this.textTracks = [], this.tracks = n2, this.config.renderTextTracksNatively) {
                var a2 = this.media, s2 = a2 ? sr(a2.textTracks) : null;
                if (this.tracks.forEach((function(e5, t4) {
                  var n3;
                  if (s2) {
                    for (var i3 = null, a3 = 0; a3 < s2.length; a3++) if (s2[a3] && qs(s2[a3], e5)) {
                      i3 = s2[a3], s2[a3] = null;
                      break;
                    }
                    i3 && (n3 = i3);
                  }
                  if (n3) rr(n3);
                  else {
                    var o3 = zs(e5);
                    (n3 = r2.createTextTrack(o3, e5.name, e5.lang)) && (n3.mode = "disabled");
                  }
                  n3 && r2.textTracks.push(n3);
                })), null != s2 && s2.length) {
                  var o2 = s2.filter((function(e5) {
                    return null !== e5;
                  })).map((function(e5) {
                    return e5.label;
                  }));
                  o2.length && F.warn("Media element contains unused subtitle tracks: " + o2.join(", ") + ". Replace media element for each source to clear TextTracks and captions menu.");
                }
              } else if (this.tracks.length) {
                var l2 = this.tracks.map((function(e5) {
                  return { label: e5.name, kind: e5.type.toLowerCase(), default: e5.default, subtitleTrack: e5 };
                }));
                this.hls.trigger(I.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: l2 });
              }
            }
          }, t2.onManifestLoaded = function(e4, t3) {
            var r2 = this;
            this.config.enableCEA708Captions && t3.captions && t3.captions.forEach((function(e5) {
              var t4 = /(?:CC|SERVICE)([1-4])/.exec(e5.instreamId);
              if (t4) {
                var n2 = "textTrack" + t4[1], i2 = r2.captionsProperties[n2];
                i2 && (i2.label = e5.name, e5.lang && (i2.languageCode = e5.lang), i2.media = e5);
              }
            }));
          }, t2.closedCaptionsForLevel = function(e4) {
            var t3 = this.hls.levels[e4.level];
            return null == t3 ? void 0 : t3.attrs["CLOSED-CAPTIONS"];
          }, t2.onFragLoading = function(e4, t3) {
            this.initCea608Parsers();
            var r2 = this.cea608Parser1, n2 = this.cea608Parser2, i2 = this.lastCc, a2 = this.lastSn, s2 = this.lastPartIndex;
            if (this.enabled && r2 && n2 && t3.frag.type === $t.MAIN) {
              var o2, l2, u2 = t3.frag, c2 = u2.cc, d2 = u2.sn, h2 = null != (o2 = null == t3 || null == (l2 = t3.part) ? void 0 : l2.index) ? o2 : -1;
              d2 === a2 + 1 || d2 === a2 && h2 === s2 + 1 || c2 === i2 || (r2.reset(), n2.reset()), this.lastCc = c2, this.lastSn = d2, this.lastPartIndex = h2;
            }
          }, t2.onFragLoaded = function(e4, t3) {
            var r2 = t3.frag, n2 = t3.payload;
            if (r2.type === $t.SUBTITLE) if (n2.byteLength) {
              var i2 = r2.decryptdata, a2 = "stats" in t3;
              if (null == i2 || !i2.encrypted || a2) {
                var s2 = this.tracks[r2.level], o2 = this.vttCCs;
                o2[r2.cc] || (o2[r2.cc] = { start: r2.start, prevCC: this.prevCC, new: true }, this.prevCC = r2.cc), s2 && s2.textCodec === xs ? this._parseIMSC1(r2, n2) : this._parseVTTs(t3);
              }
            } else this.hls.trigger(I.SUBTITLE_FRAG_PROCESSED, { success: false, frag: r2, error: new Error("Empty subtitle payload") });
          }, t2._parseIMSC1 = function(e4, t3) {
            var r2 = this, n2 = this.hls;
            Ms(t3, this.initPTS[e4.cc], (function(t4) {
              r2._appendCues(t4, e4.level), n2.trigger(I.SUBTITLE_FRAG_PROCESSED, { success: true, frag: e4 });
            }), (function(t4) {
              F.log("Failed to parse IMSC1: " + t4), n2.trigger(I.SUBTITLE_FRAG_PROCESSED, { success: false, frag: e4, error: t4 });
            }));
          }, t2._parseVTTs = function(e4) {
            var t3, r2 = this, n2 = e4.frag, i2 = e4.payload, a2 = this.initPTS, s2 = this.unparsedVttFrags, o2 = a2.length - 1;
            if (a2[n2.cc] || -1 !== o2) {
              var l2 = this.hls;
              Cs(null != (t3 = n2.initSegment) && t3.data ? rt(n2.initSegment.data, new Uint8Array(i2)) : i2, this.initPTS[n2.cc], this.vttCCs, n2.cc, n2.start, (function(e5) {
                r2._appendCues(e5, n2.level), l2.trigger(I.SUBTITLE_FRAG_PROCESSED, { success: true, frag: n2 });
              }), (function(t4) {
                var a3 = "Missing initPTS for VTT MPEGTS" === t4.message;
                a3 ? s2.push(e4) : r2._fallbackToIMSC1(n2, i2), F.log("Failed to parse VTT cue: " + t4), a3 && o2 > n2.cc || l2.trigger(I.SUBTITLE_FRAG_PROCESSED, { success: false, frag: n2, error: t4 });
              }));
            } else s2.push(e4);
          }, t2._fallbackToIMSC1 = function(e4, t3) {
            var r2 = this, n2 = this.tracks[e4.level];
            n2.textCodec || Ms(t3, this.initPTS[e4.cc], (function() {
              n2.textCodec = xs, r2._parseIMSC1(e4, t3);
            }), (function() {
              n2.textCodec = "wvtt";
            }));
          }, t2._appendCues = function(e4, t3) {
            var r2 = this.hls;
            if (this.config.renderTextTracksNatively) {
              var n2 = this.textTracks[t3];
              if (!n2 || "disabled" === n2.mode) return;
              e4.forEach((function(e5) {
                return tr(n2, e5);
              }));
            } else {
              var i2 = this.tracks[t3];
              if (!i2) return;
              var a2 = i2.default ? "default" : "subtitles" + t3;
              r2.trigger(I.CUES_PARSED, { type: "subtitles", cues: e4, track: a2 });
            }
          }, t2.onFragDecrypted = function(e4, t3) {
            t3.frag.type === $t.SUBTITLE && this.onFragLoaded(I.FRAG_LOADED, t3);
          }, t2.onSubtitleTracksCleared = function() {
            this.tracks = [], this.captionsTracks = {};
          }, t2.onFragParsingUserdata = function(e4, t3) {
            this.initCea608Parsers();
            var r2 = this.cea608Parser1, n2 = this.cea608Parser2;
            if (this.enabled && r2 && n2) {
              var i2 = t3.frag, a2 = t3.samples;
              if (i2.type !== $t.MAIN || "NONE" !== this.closedCaptionsForLevel(i2)) for (var s2 = 0; s2 < a2.length; s2++) {
                var o2 = a2[s2].bytes;
                if (o2) {
                  var l2 = this.extractCea608Data(o2);
                  r2.addData(a2[s2].pts, l2[0]), n2.addData(a2[s2].pts, l2[1]);
                }
              }
            }
          }, t2.onBufferFlushing = function(e4, t3) {
            var r2 = t3.startOffset, n2 = t3.endOffset, i2 = t3.endOffsetSubtitles, a2 = t3.type, s2 = this.media;
            if (s2 && !(s2.currentTime < n2)) {
              if (!a2 || "video" === a2) {
                var o2 = this.captionsTracks;
                Object.keys(o2).forEach((function(e5) {
                  return nr(o2[e5], r2, n2);
                }));
              }
              if (this.config.renderTextTracksNatively && 0 === r2 && void 0 !== i2) {
                var l2 = this.textTracks;
                Object.keys(l2).forEach((function(e5) {
                  return nr(l2[e5], r2, i2);
                }));
              }
            }
          }, t2.extractCea608Data = function(e4) {
            for (var t3 = [[], []], r2 = 31 & e4[0], n2 = 2, i2 = 0; i2 < r2; i2++) {
              var a2 = e4[n2++], s2 = 127 & e4[n2++], o2 = 127 & e4[n2++];
              if ((0 !== s2 || 0 !== o2) && 4 & a2) {
                var l2 = 3 & a2;
                0 !== l2 && 1 !== l2 || (t3[l2].push(s2), t3[l2].push(o2));
              }
            }
            return t3;
          }, e3;
        })();
        function zs(e3) {
          return e3.characteristics && /transcribes-spoken-dialog/gi.test(e3.characteristics) && /describes-music-and-sound/gi.test(e3.characteristics) ? "captions" : "subtitles";
        }
        function qs(e3, t2) {
          return !!e3 && e3.kind === zs(t2) && Pa(t2, e3);
        }
        function Xs(e3, t2, r2, n2) {
          return Math.min(t2, n2) - Math.max(e3, r2);
        }
        function $s() {
          return { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: true } };
        }
        var Js = (function() {
          function e3(e4) {
            this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e4, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
          }
          var t2 = e3.prototype;
          return t2.setStreamController = function(e4) {
            this.streamController = e4;
          }, t2.destroy = function() {
            this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
          }, t2.registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e4.on(I.MEDIA_ATTACHING, this.onMediaAttaching, this), e4.on(I.MANIFEST_PARSED, this.onManifestParsed, this), e4.on(I.LEVELS_UPDATED, this.onLevelsUpdated, this), e4.on(I.BUFFER_CODECS, this.onBufferCodecs, this), e4.on(I.MEDIA_DETACHING, this.onMediaDetaching, this);
          }, t2.unregisterListener = function() {
            var e4 = this.hls;
            e4.off(I.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e4.off(I.MEDIA_ATTACHING, this.onMediaAttaching, this), e4.off(I.MANIFEST_PARSED, this.onManifestParsed, this), e4.off(I.LEVELS_UPDATED, this.onLevelsUpdated, this), e4.off(I.BUFFER_CODECS, this.onBufferCodecs, this), e4.off(I.MEDIA_DETACHING, this.onMediaDetaching, this);
          }, t2.onFpsDropLevelCapping = function(e4, t3) {
            var r2 = this.hls.levels[t3.droppedLevel];
            this.isLevelAllowed(r2) && this.restrictedLevels.push({ bitrate: r2.bitrate, height: r2.height, width: r2.width });
          }, t2.onMediaAttaching = function(e4, t3) {
            this.media = t3.media instanceof HTMLVideoElement ? t3.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize();
          }, t2.onManifestParsed = function(e4, t3) {
            var r2 = this.hls;
            this.restrictedLevels = [], this.firstLevel = t3.firstLevel, r2.config.capLevelToPlayerSize && t3.video && this.startCapping();
          }, t2.onLevelsUpdated = function(e4, t3) {
            this.timer && k(this.autoLevelCapping) && this.detectPlayerSize();
          }, t2.onBufferCodecs = function(e4, t3) {
            this.hls.config.capLevelToPlayerSize && t3.video && this.startCapping();
          }, t2.onMediaDetaching = function() {
            this.stopCapping();
          }, t2.detectPlayerSize = function() {
            if (this.media) {
              if (this.mediaHeight <= 0 || this.mediaWidth <= 0) return void (this.clientRect = null);
              var e4 = this.hls.levels;
              if (e4.length) {
                var t3 = this.hls, r2 = this.getMaxLevel(e4.length - 1);
                r2 !== this.autoLevelCapping && F.log("Setting autoLevelCapping to " + r2 + ": " + e4[r2].height + "p@" + e4[r2].bitrate + " for media " + this.mediaWidth + "x" + this.mediaHeight), t3.autoLevelCapping = r2, t3.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t3.autoLevelCapping;
              }
            }
          }, t2.getMaxLevel = function(t3) {
            var r2 = this, n2 = this.hls.levels;
            if (!n2.length) return -1;
            var i2 = n2.filter((function(e4, n3) {
              return r2.isLevelAllowed(e4) && n3 <= t3;
            }));
            return this.clientRect = null, e3.getMaxLevelByMediaSize(i2, this.mediaWidth, this.mediaHeight);
          }, t2.startCapping = function() {
            this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
          }, t2.stopCapping = function() {
            this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
          }, t2.getDimensions = function() {
            if (this.clientRect) return this.clientRect;
            var e4 = this.media, t3 = { width: 0, height: 0 };
            if (e4) {
              var r2 = e4.getBoundingClientRect();
              t3.width = r2.width, t3.height = r2.height, t3.width || t3.height || (t3.width = r2.right - r2.left || e4.width || 0, t3.height = r2.bottom - r2.top || e4.height || 0);
            }
            return this.clientRect = t3, t3;
          }, t2.isLevelAllowed = function(e4) {
            return !this.restrictedLevels.some((function(t3) {
              return e4.bitrate === t3.bitrate && e4.width === t3.width && e4.height === t3.height;
            }));
          }, e3.getMaxLevelByMediaSize = function(e4, t3, r2) {
            if (null == e4 || !e4.length) return -1;
            for (var n2 = function(e5, t4) {
              return !t4 || e5.width !== t4.width || e5.height !== t4.height;
            }, i2 = e4.length - 1, a2 = Math.max(t3, r2), s2 = 0; s2 < e4.length; s2 += 1) {
              var o2 = e4[s2];
              if ((o2.width >= a2 || o2.height >= a2) && n2(o2, e4[s2 + 1])) {
                i2 = s2;
                break;
              }
            }
            return i2;
          }, o(e3, [{ key: "mediaWidth", get: function() {
            return this.getDimensions().width * this.contentScaleFactor;
          } }, { key: "mediaHeight", get: function() {
            return this.getDimensions().height * this.contentScaleFactor;
          } }, { key: "contentScaleFactor", get: function() {
            var e4 = 1;
            if (!this.hls.config.ignoreDevicePixelRatio) try {
              e4 = self.devicePixelRatio;
            } catch (e5) {
            }
            return e4;
          } }]), e3;
        })(), Qs = (function() {
          function e3(e4) {
            this.hls = void 0, this.isVideoPlaybackQualityAvailable = false, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e4, this.registerListeners();
          }
          var t2 = e3.prototype;
          return t2.setStreamController = function(e4) {
            this.streamController = e4;
          }, t2.registerListeners = function() {
            this.hls.on(I.MEDIA_ATTACHING, this.onMediaAttaching, this);
          }, t2.unregisterListeners = function() {
            this.hls.off(I.MEDIA_ATTACHING, this.onMediaAttaching, this);
          }, t2.destroy = function() {
            this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = false, this.media = null;
          }, t2.onMediaAttaching = function(e4, t3) {
            var r2 = this.hls.config;
            if (r2.capLevelOnFPSDrop) {
              var n2 = t3.media instanceof self.HTMLVideoElement ? t3.media : null;
              this.media = n2, n2 && "function" == typeof n2.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = true), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), r2.fpsDroppedMonitoringPeriod);
            }
          }, t2.checkFPS = function(e4, t3, r2) {
            var n2 = performance.now();
            if (t3) {
              if (this.lastTime) {
                var i2 = n2 - this.lastTime, a2 = r2 - this.lastDroppedFrames, s2 = t3 - this.lastDecodedFrames, o2 = 1e3 * a2 / i2, l2 = this.hls;
                if (l2.trigger(I.FPS_DROP, { currentDropped: a2, currentDecoded: s2, totalDroppedFrames: r2 }), o2 > 0 && a2 > l2.config.fpsDroppedMonitoringThreshold * s2) {
                  var u2 = l2.currentLevel;
                  F.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u2), u2 > 0 && (-1 === l2.autoLevelCapping || l2.autoLevelCapping >= u2) && (u2 -= 1, l2.trigger(I.FPS_DROP_LEVEL_CAPPING, { level: u2, droppedLevel: l2.currentLevel }), l2.autoLevelCapping = u2, this.streamController.nextLevelSwitch());
                }
              }
              this.lastTime = n2, this.lastDroppedFrames = r2, this.lastDecodedFrames = t3;
            }
          }, t2.checkFPSInterval = function() {
            var e4 = this.media;
            if (e4) if (this.isVideoPlaybackQualityAvailable) {
              var t3 = e4.getVideoPlaybackQuality();
              this.checkFPS(e4, t3.totalVideoFrames, t3.droppedVideoFrames);
            } else this.checkFPS(e4, e4.webkitDecodedFrameCount, e4.webkitDroppedFrameCount);
          }, e3;
        })(), Zs = "[eme]", eo = (function() {
          function e3(t3) {
            this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = e3.CDMCleanupPromise ? [e3.CDMCleanupPromise] : [], this.onMediaEncrypted = this._onMediaEncrypted.bind(this), this.onWaitingForKey = this._onWaitingForKey.bind(this), this.debug = F.debug.bind(F, Zs), this.log = F.log.bind(F, Zs), this.warn = F.warn.bind(F, Zs), this.error = F.error.bind(F, Zs), this.hls = t3, this.config = t3.config, this.registerListeners();
          }
          var t2 = e3.prototype;
          return t2.destroy = function() {
            this.unregisterListeners(), this.onMediaDetached();
            var e4 = this.config;
            e4.requestMediaKeySystemAccessFunc = null, e4.licenseXhrSetup = e4.licenseResponseCallback = void 0, e4.drmSystems = e4.drmSystemOptions = {}, this.hls = this.onMediaEncrypted = this.onWaitingForKey = this.keyIdToKeySessionPromise = null, this.config = null;
          }, t2.registerListeners = function() {
            this.hls.on(I.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(I.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(I.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(I.MANIFEST_LOADED, this.onManifestLoaded, this);
          }, t2.unregisterListeners = function() {
            this.hls.off(I.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(I.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(I.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(I.MANIFEST_LOADED, this.onManifestLoaded, this);
          }, t2.getLicenseServerUrl = function(e4) {
            var t3 = this.config, r2 = t3.drmSystems, n2 = t3.widevineLicenseUrl, i2 = r2[e4];
            if (i2) return i2.licenseUrl;
            if (e4 === re.WIDEVINE && n2) return n2;
            throw new Error('no license server URL configured for key-system "' + e4 + '"');
          }, t2.getServerCertificateUrl = function(e4) {
            var t3 = this.config.drmSystems[e4];
            if (t3) return t3.serverCertificateUrl;
            this.log('No Server Certificate in config.drmSystems["' + e4 + '"]');
          }, t2.attemptKeySystemAccess = function(e4) {
            var t3 = this, r2 = this.hls.levels, n2 = function(e5, t4, r3) {
              return !!e5 && r3.indexOf(e5) === t4;
            }, i2 = r2.map((function(e5) {
              return e5.audioCodec;
            })).filter(n2), a2 = r2.map((function(e5) {
              return e5.videoCodec;
            })).filter(n2);
            return i2.length + a2.length === 0 && a2.push("avc1.42e01e"), new Promise((function(r3, n3) {
              !(function e5(s2) {
                var o2 = s2.shift();
                t3.getMediaKeysPromise(o2, i2, a2).then((function(e6) {
                  return r3({ keySystem: o2, mediaKeys: e6 });
                })).catch((function(t4) {
                  s2.length ? e5(s2) : n3(t4 instanceof ao ? t4 : new ao({ type: w.KEY_SYSTEM_ERROR, details: D.KEY_SYSTEM_NO_ACCESS, error: t4, fatal: true }, t4.message));
                }));
              })(e4);
            }));
          }, t2.requestMediaKeySystemAccess = function(e4, t3) {
            var r2 = this.config.requestMediaKeySystemAccessFunc;
            if ("function" != typeof r2) {
              var n2 = "Configured requestMediaKeySystemAccess is not a function " + r2;
              return null === ce && "http:" === self.location.protocol && (n2 = "navigator.requestMediaKeySystemAccess is not available over insecure protocol " + location.protocol), Promise.reject(new Error(n2));
            }
            return r2(e4, t3);
          }, t2.getMediaKeysPromise = function(e4, t3, r2) {
            var n2 = this, i2 = de(e4, t3, r2, this.config.drmSystemOptions), a2 = this.keySystemAccessPromises[e4], s2 = null == a2 ? void 0 : a2.keySystemAccess;
            if (!s2) {
              this.log('Requesting encrypted media "' + e4 + '" key-system access with config: ' + JSON.stringify(i2)), s2 = this.requestMediaKeySystemAccess(e4, i2);
              var o2 = this.keySystemAccessPromises[e4] = { keySystemAccess: s2 };
              return s2.catch((function(t4) {
                n2.log('Failed to obtain access to key-system "' + e4 + '": ' + t4);
              })), s2.then((function(t4) {
                n2.log('Access for key-system "' + t4.keySystem + '" obtained');
                var r3 = n2.fetchServerCertificate(e4);
                return n2.log('Create media-keys for "' + e4 + '"'), o2.mediaKeys = t4.createMediaKeys().then((function(t5) {
                  return n2.log('Media-keys created for "' + e4 + '"'), r3.then((function(r4) {
                    return r4 ? n2.setMediaKeysServerCertificate(t5, e4, r4) : t5;
                  }));
                })), o2.mediaKeys.catch((function(t5) {
                  n2.error('Failed to create media-keys for "' + e4 + '"}: ' + t5);
                })), o2.mediaKeys;
              }));
            }
            return s2.then((function() {
              return a2.mediaKeys;
            }));
          }, t2.createMediaKeySessionContext = function(e4) {
            var t3 = e4.decryptdata, r2 = e4.keySystem, n2 = e4.mediaKeys;
            this.log('Creating key-system session "' + r2 + '" keyId: ' + xe.hexDump(t3.keyId || []));
            var i2 = n2.createSession(), a2 = { decryptdata: t3, keySystem: r2, mediaKeys: n2, mediaKeysSession: i2, keyStatus: "status-pending" };
            return this.mediaKeySessions.push(a2), a2;
          }, t2.renewKeySession = function(e4) {
            var t3 = e4.decryptdata;
            if (t3.pssh) {
              var r2 = this.createMediaKeySessionContext(e4), n2 = this.getKeyIdString(t3), i2 = "cenc";
              this.keyIdToKeySessionPromise[n2] = this.generateRequestWithPreferredKeySession(r2, i2, t3.pssh, "expired");
            } else this.warn("Could not renew expired session. Missing pssh initData.");
            this.removeSession(e4);
          }, t2.getKeyIdString = function(e4) {
            if (!e4) throw new Error("Could not read keyId of undefined decryptdata");
            if (null === e4.keyId) throw new Error("keyId is null");
            return xe.hexDump(e4.keyId);
          }, t2.updateKeySession = function(e4, t3) {
            var r2, n2 = e4.mediaKeysSession;
            return this.log('Updating key-session "' + n2.sessionId + '" for keyID ' + xe.hexDump((null == (r2 = e4.decryptdata) ? void 0 : r2.keyId) || []) + "\n      } (data length: " + (t3 ? t3.byteLength : t3) + ")"), n2.update(t3);
          }, t2.selectKeySystemFormat = function(e4) {
            var t3 = Object.keys(e4.levelkeys || {});
            return this.keyFormatPromise || (this.log("Selecting key-system from fragment (sn: " + e4.sn + " " + e4.type + ": " + e4.level + ") key formats " + t3.join(", ")), this.keyFormatPromise = this.getKeyFormatPromise(t3)), this.keyFormatPromise;
          }, t2.getKeyFormatPromise = function(e4) {
            var t3 = this;
            return new Promise((function(r2, n2) {
              var i2 = le(t3.config), a2 = e4.map(ie).filter((function(e5) {
                return !!e5 && -1 !== i2.indexOf(e5);
              }));
              return t3.getKeySystemSelectionPromise(a2).then((function(e5) {
                var t4 = e5.keySystem, i3 = oe(t4);
                i3 ? r2(i3) : n2(new Error('Unable to find format for key-system "' + t4 + '"'));
              })).catch(n2);
            }));
          }, t2.loadKey = function(e4) {
            var t3 = this, r2 = e4.keyInfo.decryptdata, n2 = this.getKeyIdString(r2), i2 = "(keyId: " + n2 + ' format: "' + r2.keyFormat + '" method: ' + r2.method + " uri: " + r2.uri + ")";
            this.log("Starting session for key " + i2);
            var a2 = this.keyIdToKeySessionPromise[n2];
            return a2 || (a2 = this.keyIdToKeySessionPromise[n2] = this.getKeySystemForKeyPromise(r2).then((function(n3) {
              var a3 = n3.keySystem, s2 = n3.mediaKeys;
              return t3.throwIfDestroyed(), t3.log("Handle encrypted media sn: " + e4.frag.sn + " " + e4.frag.type + ": " + e4.frag.level + " using key " + i2), t3.attemptSetMediaKeys(a3, s2).then((function() {
                t3.throwIfDestroyed();
                var e5 = t3.createMediaKeySessionContext({ keySystem: a3, mediaKeys: s2, decryptdata: r2 }), n4 = "cenc";
                return t3.generateRequestWithPreferredKeySession(e5, n4, r2.pssh, "playlist-key");
              }));
            }))).catch((function(e5) {
              return t3.handleError(e5);
            })), a2;
          }, t2.throwIfDestroyed = function(e4) {
            if (!this.hls) throw new Error("invalid state");
          }, t2.handleError = function(e4) {
            this.hls && (this.error(e4.message), e4 instanceof ao ? this.hls.trigger(I.ERROR, e4.data) : this.hls.trigger(I.ERROR, { type: w.KEY_SYSTEM_ERROR, details: D.KEY_SYSTEM_NO_KEYS, error: e4, fatal: true }));
          }, t2.getKeySystemForKeyPromise = function(e4) {
            var t3 = this.getKeyIdString(e4), r2 = this.keyIdToKeySessionPromise[t3];
            if (!r2) {
              var n2 = ie(e4.keyFormat), i2 = n2 ? [n2] : le(this.config);
              return this.attemptKeySystemAccess(i2);
            }
            return r2;
          }, t2.getKeySystemSelectionPromise = function(e4) {
            if (e4.length || (e4 = le(this.config)), 0 === e4.length) throw new ao({ type: w.KEY_SYSTEM_ERROR, details: D.KEY_SYSTEM_NO_CONFIGURED_LICENSE, fatal: true }, "Missing key-system license configuration options " + JSON.stringify({ drmSystems: this.config.drmSystems }));
            return this.attemptKeySystemAccess(e4);
          }, t2._onMediaEncrypted = function(e4) {
            var t3 = this, r2 = e4.initDataType, n2 = e4.initData;
            if (this.debug('"' + e4.type + '" event: init data type: "' + r2 + '"'), null !== n2) {
              var i2, a2;
              if ("sinf" === r2 && this.config.drmSystems[re.FAIRPLAY]) {
                var s2 = Me(new Uint8Array(n2));
                try {
                  var o2 = $(JSON.parse(s2).sinf), l2 = $e(new Uint8Array(o2));
                  if (!l2) return;
                  i2 = l2.subarray(8, 24), a2 = re.FAIRPLAY;
                } catch (e5) {
                  return void this.warn('Failed to parse sinf "encrypted" event message initData');
                }
              } else {
                var u2 = dt(n2);
                if (null === u2) return;
                0 === u2.version && u2.systemId === ae.WIDEVINE && u2.data && (i2 = u2.data.subarray(8, 24)), a2 = se(u2.systemId);
              }
              if (a2 && i2) {
                for (var c2, d2 = xe.hexDump(i2), h2 = this.keyIdToKeySessionPromise, f2 = this.mediaKeySessions, g2 = h2[d2], m2 = function() {
                  var e5 = f2[p2], a3 = e5.decryptdata;
                  if (a3.pssh || !a3.keyId) return 0;
                  var s3 = xe.hexDump(a3.keyId);
                  return d2 === s3 || -1 !== a3.uri.replace(/-/g, "").indexOf(d2) ? (g2 = h2[s3], delete h2[s3], a3.pssh = new Uint8Array(n2), a3.keyId = i2, g2 = h2[d2] = g2.then((function() {
                    return t3.generateRequestWithPreferredKeySession(e5, r2, n2, "encrypted-event-key-match");
                  })), 1) : void 0;
                }, p2 = 0; p2 < f2.length && (0 === (c2 = m2()) || 1 !== c2); p2++) ;
                g2 || (g2 = h2[d2] = this.getKeySystemSelectionPromise([a2]).then((function(e5) {
                  var a3, s3 = e5.keySystem, o3 = e5.mediaKeys;
                  t3.throwIfDestroyed();
                  var l3 = new ft("ISO-23001-7", d2, null != (a3 = oe(s3)) ? a3 : "");
                  return l3.pssh = new Uint8Array(n2), l3.keyId = i2, t3.attemptSetMediaKeys(s3, o3).then((function() {
                    t3.throwIfDestroyed();
                    var e6 = t3.createMediaKeySessionContext({ decryptdata: l3, keySystem: s3, mediaKeys: o3 });
                    return t3.generateRequestWithPreferredKeySession(e6, r2, n2, "encrypted-event-no-match");
                  }));
                }))), g2.catch((function(e5) {
                  return t3.handleError(e5);
                }));
              }
            }
          }, t2._onWaitingForKey = function(e4) {
            this.log('"' + e4.type + '" event');
          }, t2.attemptSetMediaKeys = function(e4, t3) {
            var r2 = this, n2 = this.setMediaKeysQueue.slice();
            this.log('Setting media-keys for "' + e4 + '"');
            var i2 = Promise.all(n2).then((function() {
              if (!r2.media) throw new Error("Attempted to set mediaKeys without media element attached");
              return r2.media.setMediaKeys(t3);
            }));
            return this.setMediaKeysQueue.push(i2), i2.then((function() {
              r2.log('Media-keys set for "' + e4 + '"'), n2.push(i2), r2.setMediaKeysQueue = r2.setMediaKeysQueue.filter((function(e5) {
                return -1 === n2.indexOf(e5);
              }));
            }));
          }, t2.generateRequestWithPreferredKeySession = function(e4, t3, r2, n2) {
            var i2, a2, s2 = this, o2 = null == (i2 = this.config.drmSystems) || null == (a2 = i2[e4.keySystem]) ? void 0 : a2.generateRequest;
            if (o2) try {
              var l2 = o2.call(this.hls, t3, r2, e4);
              if (!l2) throw new Error("Invalid response from configured generateRequest filter");
              t3 = l2.initDataType, r2 = e4.decryptdata.pssh = l2.initData ? new Uint8Array(l2.initData) : null;
            } catch (e5) {
              var u2;
              if (this.warn(e5.message), null != (u2 = this.hls) && u2.config.debug) throw e5;
            }
            if (null === r2) return this.log('Skipping key-session request for "' + n2 + '" (no initData)'), Promise.resolve(e4);
            var c2 = this.getKeyIdString(e4.decryptdata);
            this.log('Generating key-session request for "' + n2 + '": ' + c2 + " (init data type: " + t3 + " length: " + (r2 ? r2.byteLength : null) + ")");
            var d2 = new Sa(), h2 = e4._onmessage = function(t4) {
              var r3 = e4.mediaKeysSession;
              if (r3) {
                var n3 = t4.messageType, i3 = t4.message;
                s2.log('"' + n3 + '" message event for session "' + r3.sessionId + '" message size: ' + i3.byteLength), "license-request" === n3 || "license-renewal" === n3 ? s2.renewLicense(e4, i3).catch((function(e5) {
                  s2.handleError(e5), d2.emit("error", e5);
                })) : "license-release" === n3 ? e4.keySystem === re.FAIRPLAY && (s2.updateKeySession(e4, ee("acknowledged")), s2.removeSession(e4)) : s2.warn('unhandled media key message type "' + n3 + '"');
              } else d2.emit("error", new Error("invalid state"));
            }, f2 = e4._onkeystatuseschange = function(t4) {
              if (e4.mediaKeysSession) {
                s2.onKeyStatusChange(e4);
                var r3 = e4.keyStatus;
                d2.emit("keyStatus", r3), "expired" === r3 && (s2.warn(e4.keySystem + " expired for key " + c2), s2.renewKeySession(e4));
              } else d2.emit("error", new Error("invalid state"));
            };
            e4.mediaKeysSession.addEventListener("message", h2), e4.mediaKeysSession.addEventListener("keystatuseschange", f2);
            var g2 = new Promise((function(e5, t4) {
              d2.on("error", t4), d2.on("keyStatus", (function(r3) {
                r3.startsWith("usable") ? e5() : "output-restricted" === r3 ? t4(new ao({ type: w.KEY_SYSTEM_ERROR, details: D.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED, fatal: false }, "HDCP level output restricted")) : "internal-error" === r3 ? t4(new ao({ type: w.KEY_SYSTEM_ERROR, details: D.KEY_SYSTEM_STATUS_INTERNAL_ERROR, fatal: true }, 'key status changed to "' + r3 + '"')) : "expired" === r3 ? t4(new Error("key expired while generating request")) : s2.warn('unhandled key status change "' + r3 + '"');
              }));
            }));
            return e4.mediaKeysSession.generateRequest(t3, r2).then((function() {
              var t4;
              s2.log('Request generated for key-session "' + (null == (t4 = e4.mediaKeysSession) ? void 0 : t4.sessionId) + '" keyId: ' + c2);
            })).catch((function(e5) {
              throw new ao({ type: w.KEY_SYSTEM_ERROR, details: D.KEY_SYSTEM_NO_SESSION, error: e5, fatal: false }, "Error generating key-session request: " + e5);
            })).then((function() {
              return g2;
            })).catch((function(t4) {
              throw d2.removeAllListeners(), s2.removeSession(e4), t4;
            })).then((function() {
              return d2.removeAllListeners(), e4;
            }));
          }, t2.onKeyStatusChange = function(e4) {
            var t3 = this;
            e4.mediaKeysSession.keyStatuses.forEach((function(r2, n2) {
              t3.log('key status change "' + r2 + '" for keyStatuses keyId: ' + xe.hexDump("buffer" in n2 ? new Uint8Array(n2.buffer, n2.byteOffset, n2.byteLength) : new Uint8Array(n2)) + " session keyId: " + xe.hexDump(new Uint8Array(e4.decryptdata.keyId || [])) + " uri: " + e4.decryptdata.uri), e4.keyStatus = r2;
            }));
          }, t2.fetchServerCertificate = function(e4) {
            var t3 = this.config, r2 = new (0, t3.loader)(t3), i2 = this.getServerCertificateUrl(e4);
            return i2 ? (this.log('Fetching server certificate for "' + e4 + '"'), new Promise((function(a2, s2) {
              var o2 = { responseType: "arraybuffer", url: i2 }, l2 = t3.certLoadPolicy.default, u2 = { loadPolicy: l2, timeout: l2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 }, c2 = { onSuccess: function(e5, t4, r3, n2) {
                a2(e5.data);
              }, onError: function(t4, r3, a3, l3) {
                s2(new ao({ type: w.KEY_SYSTEM_ERROR, details: D.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED, fatal: true, networkDetails: a3, response: n({ url: o2.url, data: void 0 }, t4) }, '"' + e4 + '" certificate request failed (' + i2 + "). Status: " + t4.code + " (" + t4.text + ")"));
              }, onTimeout: function(t4, r3, n2) {
                s2(new ao({ type: w.KEY_SYSTEM_ERROR, details: D.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED, fatal: true, networkDetails: n2, response: { url: o2.url, data: void 0 } }, '"' + e4 + '" certificate request timed out (' + i2 + ")"));
              }, onAbort: function(e5, t4, r3) {
                s2(new Error("aborted"));
              } };
              r2.load(o2, u2, c2);
            }))) : Promise.resolve();
          }, t2.setMediaKeysServerCertificate = function(e4, t3, r2) {
            var n2 = this;
            return new Promise((function(i2, a2) {
              e4.setServerCertificate(r2).then((function(a3) {
                n2.log("setServerCertificate " + (a3 ? "success" : "not supported by CDM") + " (" + (null == r2 ? void 0 : r2.byteLength) + ') on "' + t3 + '"'), i2(e4);
              })).catch((function(e5) {
                a2(new ao({ type: w.KEY_SYSTEM_ERROR, details: D.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED, error: e5, fatal: true }, e5.message));
              }));
            }));
          }, t2.renewLicense = function(e4, t3) {
            var r2 = this;
            return this.requestLicense(e4, new Uint8Array(t3)).then((function(t4) {
              return r2.updateKeySession(e4, new Uint8Array(t4)).catch((function(e5) {
                throw new ao({ type: w.KEY_SYSTEM_ERROR, details: D.KEY_SYSTEM_SESSION_UPDATE_FAILED, error: e5, fatal: true }, e5.message);
              }));
            }));
          }, t2.unpackPlayReadyKeyMessage = function(e4, t3) {
            var r2 = String.fromCharCode.apply(null, new Uint16Array(t3.buffer));
            if (!r2.includes("PlayReadyKeyMessage")) return e4.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t3;
            var n2 = new DOMParser().parseFromString(r2, "application/xml"), i2 = n2.querySelectorAll("HttpHeader");
            if (i2.length > 0) for (var a2, s2 = 0, o2 = i2.length; s2 < o2; s2++) {
              var l2, u2, c2 = null == (l2 = (a2 = i2[s2]).querySelector("name")) ? void 0 : l2.textContent, d2 = null == (u2 = a2.querySelector("value")) ? void 0 : u2.textContent;
              c2 && d2 && e4.setRequestHeader(c2, d2);
            }
            var h2 = n2.querySelector("Challenge"), f2 = null == h2 ? void 0 : h2.textContent;
            if (!f2) throw new Error("Cannot find <Challenge> in key message");
            return ee(atob(f2));
          }, t2.setupLicenseXHR = function(e4, t3, r2, n2) {
            var i2 = this, a2 = this.config.licenseXhrSetup;
            return a2 ? Promise.resolve().then((function() {
              if (!r2.decryptdata) throw new Error("Key removed");
              return a2.call(i2.hls, e4, t3, r2, n2);
            })).catch((function(s2) {
              if (!r2.decryptdata) throw s2;
              return e4.open("POST", t3, true), a2.call(i2.hls, e4, t3, r2, n2);
            })).then((function(r3) {
              return e4.readyState || e4.open("POST", t3, true), { xhr: e4, licenseChallenge: r3 || n2 };
            })) : (e4.open("POST", t3, true), Promise.resolve({ xhr: e4, licenseChallenge: n2 }));
          }, t2.requestLicense = function(e4, t3) {
            var r2 = this, n2 = this.config.keyLoadPolicy.default;
            return new Promise((function(i2, a2) {
              var s2 = r2.getLicenseServerUrl(e4.keySystem);
              r2.log("Sending license request to URL: " + s2);
              var o2 = new XMLHttpRequest();
              o2.responseType = "arraybuffer", o2.onreadystatechange = function() {
                if (!r2.hls || !e4.mediaKeysSession) return a2(new Error("invalid state"));
                if (4 === o2.readyState) if (200 === o2.status) {
                  r2._requestLicenseFailureCount = 0;
                  var l2 = o2.response;
                  r2.log("License received " + (l2 instanceof ArrayBuffer ? l2.byteLength : l2));
                  var u2 = r2.config.licenseResponseCallback;
                  if (u2) try {
                    l2 = u2.call(r2.hls, o2, s2, e4);
                  } catch (e5) {
                    r2.error(e5);
                  }
                  i2(l2);
                } else {
                  var c2 = n2.errorRetry, d2 = c2 ? c2.maxNumRetry : 0;
                  if (r2._requestLicenseFailureCount++, r2._requestLicenseFailureCount > d2 || o2.status >= 400 && o2.status < 500) a2(new ao({ type: w.KEY_SYSTEM_ERROR, details: D.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: true, networkDetails: o2, response: { url: s2, data: void 0, code: o2.status, text: o2.statusText } }, "License Request XHR failed (" + s2 + "). Status: " + o2.status + " (" + o2.statusText + ")"));
                  else {
                    var h2 = d2 - r2._requestLicenseFailureCount + 1;
                    r2.warn("Retrying license request, " + h2 + " attempts left"), r2.requestLicense(e4, t3).then(i2, a2);
                  }
                }
              }, e4.licenseXhr && e4.licenseXhr.readyState !== XMLHttpRequest.DONE && e4.licenseXhr.abort(), e4.licenseXhr = o2, r2.setupLicenseXHR(o2, s2, e4, t3).then((function(t4) {
                var n3 = t4.xhr, i3 = t4.licenseChallenge;
                e4.keySystem == re.PLAYREADY && (i3 = r2.unpackPlayReadyKeyMessage(n3, i3)), n3.send(i3);
              }));
            }));
          }, t2.onMediaAttached = function(e4, t3) {
            if (this.config.emeEnabled) {
              var r2 = t3.media;
              this.media = r2, r2.addEventListener("encrypted", this.onMediaEncrypted), r2.addEventListener("waitingforkey", this.onWaitingForKey);
            }
          }, t2.onMediaDetached = function() {
            var t3 = this, r2 = this.media, n2 = this.mediaKeySessions;
            r2 && (r2.removeEventListener("encrypted", this.onMediaEncrypted), r2.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, ft.clearKeyUriToKeyIdMap();
            var i2 = n2.length;
            e3.CDMCleanupPromise = Promise.all(n2.map((function(e4) {
              return t3.removeSession(e4);
            })).concat(null == r2 ? void 0 : r2.setMediaKeys(null).catch((function(e4) {
              t3.log("Could not clear media keys: " + e4);
            })))).then((function() {
              i2 && (t3.log("finished closing key sessions and clearing media keys"), n2.length = 0);
            })).catch((function(e4) {
              t3.log("Could not close sessions and clear media keys: " + e4);
            }));
          }, t2.onManifestLoading = function() {
            this.keyFormatPromise = null;
          }, t2.onManifestLoaded = function(e4, t3) {
            var r2 = t3.sessionKeys;
            if (r2 && this.config.emeEnabled && !this.keyFormatPromise) {
              var n2 = r2.reduce((function(e5, t4) {
                return -1 === e5.indexOf(t4.keyFormat) && e5.push(t4.keyFormat), e5;
              }), []);
              this.log("Selecting key-system from session-keys " + n2.join(", ")), this.keyFormatPromise = this.getKeyFormatPromise(n2);
            }
          }, t2.removeSession = function(e4) {
            var t3 = this, r2 = e4.mediaKeysSession, n2 = e4.licenseXhr;
            if (r2) {
              this.log("Remove licenses and keys and close session " + r2.sessionId), e4._onmessage && (r2.removeEventListener("message", e4._onmessage), e4._onmessage = void 0), e4._onkeystatuseschange && (r2.removeEventListener("keystatuseschange", e4._onkeystatuseschange), e4._onkeystatuseschange = void 0), n2 && n2.readyState !== XMLHttpRequest.DONE && n2.abort(), e4.mediaKeysSession = e4.decryptdata = e4.licenseXhr = void 0;
              var i2 = this.mediaKeySessions.indexOf(e4);
              return i2 > -1 && this.mediaKeySessions.splice(i2, 1), r2.remove().catch((function(e5) {
                t3.log("Could not remove session: " + e5);
              })).then((function() {
                return r2.close();
              })).catch((function(e5) {
                t3.log("Could not close session: " + e5);
              }));
            }
          }, e3;
        })();
        eo.CDMCleanupPromise = void 0;
        var to, ro, no, io, ao = (function(e3) {
          function t2(t3, r2) {
            var n2;
            return (n2 = e3.call(this, r2) || this).data = void 0, t3.error || (t3.error = new Error(r2)), n2.data = t3, t3.err = t3.error, n2;
          }
          return c(t2, e3), t2;
        })(p(Error));
        (function(e3) {
          e3.MANIFEST = "m", e3.AUDIO = "a", e3.VIDEO = "v", e3.MUXED = "av", e3.INIT = "i", e3.CAPTION = "c", e3.TIMED_TEXT = "tt", e3.KEY = "k", e3.OTHER = "o";
        })(to || (to = {})), (function(e3) {
          e3.DASH = "d", e3.HLS = "h", e3.SMOOTH = "s", e3.OTHER = "o";
        })(ro || (ro = {})), (function(e3) {
          e3.OBJECT = "CMCD-Object", e3.REQUEST = "CMCD-Request", e3.SESSION = "CMCD-Session", e3.STATUS = "CMCD-Status";
        })(no || (no = {}));
        var so = ((io = {})[no.OBJECT] = ["br", "d", "ot", "tb"], io[no.REQUEST] = ["bl", "dl", "mtp", "nor", "nrr", "su"], io[no.SESSION] = ["cid", "pr", "sf", "sid", "st", "v"], io[no.STATUS] = ["bs", "rtp"], io), oo = function e3(t2, r2) {
          this.value = void 0, this.params = void 0, Array.isArray(t2) && (t2 = t2.map((function(t3) {
            return t3 instanceof e3 ? t3 : new e3(t3);
          }))), this.value = t2, this.params = r2;
        }, lo = function(e3) {
          this.description = void 0, this.description = e3;
        }, uo = "Dict";
        function co(e3) {
          return Array.isArray(e3) ? JSON.stringify(e3) : e3 instanceof Map ? "Map{}" : e3 instanceof Set ? "Set{}" : "object" == typeof e3 ? JSON.stringify(e3) : String(e3);
        }
        function ho(e3, t2, r2, n2) {
          return new Error("failed to " + e3 + ' "' + co(t2) + '" as ' + r2, { cause: n2 });
        }
        var fo = "Bare Item", go = "Boolean", mo = "Byte Sequence", po = "Decimal", vo = "Integer";
        function yo(e3) {
          return e3 < -999999999999999 || 999999999999999 < e3;
        }
        var To = /[\x00-\x1f\x7f]+/, bo = "Token", Eo = "Key";
        function So(e3, t2, r2) {
          return ho("serialize", e3, t2, r2);
        }
        function Ao(e3) {
          if ("boolean" != typeof e3) throw So(e3, go);
          return e3 ? "?1" : "?0";
        }
        function ko(e3) {
          return btoa(String.fromCharCode.apply(String, e3));
        }
        function Lo(e3) {
          if (false === ArrayBuffer.isView(e3)) throw So(e3, mo);
          return ":" + ko(e3) + ":";
        }
        function Ro(e3) {
          if (yo(e3)) throw So(e3, vo);
          return e3.toString();
        }
        function Io(e3) {
          return "@" + Ro(e3.getTime() / 1e3);
        }
        function wo(e3, t2) {
          if (e3 < 0) return -wo(-e3, t2);
          var r2 = Math.pow(10, t2);
          if (Math.abs(e3 * r2 % 1 - 0.5) < Number.EPSILON) {
            var n2 = Math.floor(e3 * r2);
            return (n2 % 2 == 0 ? n2 : n2 + 1) / r2;
          }
          return Math.round(e3 * r2) / r2;
        }
        function Do(e3) {
          var t2 = wo(e3, 3);
          if (Math.floor(Math.abs(t2)).toString().length > 12) throw So(e3, po);
          var r2 = t2.toString();
          return r2.includes(".") ? r2 : r2 + ".0";
        }
        var Co = "String";
        function xo(e3) {
          if (To.test(e3)) throw So(e3, Co);
          return '"' + e3.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
        }
        function _o(e3) {
          return e3.description || e3.toString().slice(7, -1);
        }
        function Oo(e3) {
          var t2 = _o(e3);
          if (false === /^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(t2)) throw So(t2, bo);
          return t2;
        }
        function Po(e3) {
          switch (typeof e3) {
            case "number":
              if (!k(e3)) throw So(e3, fo);
              return Number.isInteger(e3) ? Ro(e3) : Do(e3);
            case "string":
              return xo(e3);
            case "symbol":
              return Oo(e3);
            case "boolean":
              return Ao(e3);
            case "object":
              if (e3 instanceof Date) return Io(e3);
              if (e3 instanceof Uint8Array) return Lo(e3);
              if (e3 instanceof lo) return Oo(e3);
            default:
              throw So(e3, fo);
          }
        }
        function Mo(e3) {
          if (false === /^[a-z*][a-z0-9\-_.*]*$/.test(e3)) throw So(e3, Eo);
          return e3;
        }
        function Fo(e3) {
          return null == e3 ? "" : Object.entries(e3).map((function(e4) {
            var t2 = e4[0], r2 = e4[1];
            return true === r2 ? ";" + Mo(t2) : ";" + Mo(t2) + "=" + Po(r2);
          })).join("");
        }
        function No(e3) {
          return e3 instanceof oo ? "" + Po(e3.value) + Fo(e3.params) : Po(e3);
        }
        function Uo(e3) {
          return "(" + e3.value.map(No).join(" ") + ")" + Fo(e3.params);
        }
        function Bo(e3, t2) {
          var r2;
          if (void 0 === t2 && (t2 = { whitespace: true }), "object" != typeof e3) throw So(e3, uo);
          var n2 = e3 instanceof Map ? e3.entries() : Object.entries(e3), i2 = null != (r2 = t2) && r2.whitespace ? " " : "";
          return Array.from(n2).map((function(e4) {
            var t3 = e4[0], r3 = e4[1];
            r3 instanceof oo == 0 && (r3 = new oo(r3));
            var n3 = Mo(t3);
            return true === r3.value ? n3 += Fo(r3.params) : (n3 += "=", Array.isArray(r3.value) ? n3 += Uo(r3) : n3 += No(r3)), n3;
          })).join("," + i2);
        }
        function Go(e3, t2) {
          return Bo(e3, t2);
        }
        var Vo = function(e3) {
          return "ot" === e3 || "sf" === e3 || "st" === e3;
        }, Ho = function(e3) {
          return "number" == typeof e3 ? k(e3) : null != e3 && "" !== e3 && false !== e3;
        };
        function Ko(e3, t2) {
          var r2 = new URL(e3), n2 = new URL(t2);
          if (r2.origin !== n2.origin) return e3;
          for (var i2 = r2.pathname.split("/").slice(1), a2 = n2.pathname.split("/").slice(1, -1); i2[0] === a2[0]; ) i2.shift(), a2.shift();
          for (; a2.length; ) a2.shift(), i2.unshift("..");
          return i2.join("/");
        }
        function jo() {
          try {
            return crypto.randomUUID();
          } catch (n2) {
            try {
              var e3 = URL.createObjectURL(new Blob()), t2 = e3.toString();
              return URL.revokeObjectURL(e3), t2.slice(t2.lastIndexOf("/") + 1);
            } catch (e4) {
              var r2 = (/* @__PURE__ */ new Date()).getTime();
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e5) {
                var t3 = (r2 + 16 * Math.random()) % 16 | 0;
                return r2 = Math.floor(r2 / 16), ("x" == e5 ? t3 : 3 & t3 | 8).toString(16);
              }));
            }
          }
        }
        var Yo = function(e3) {
          return Math.round(e3);
        }, Wo = function(e3) {
          return 100 * Yo(e3 / 100);
        }, zo = { br: Yo, d: Yo, bl: Wo, dl: Wo, mtp: Wo, nor: function(e3, t2) {
          return null != t2 && t2.baseUrl && (e3 = Ko(e3, t2.baseUrl)), encodeURIComponent(e3);
        }, rtp: Wo, tb: Yo };
        function qo(e3, t2) {
          var r2 = {};
          if (null == e3 || "object" != typeof e3) return r2;
          var n2 = Object.keys(e3).sort(), i2 = u({}, zo, null == t2 ? void 0 : t2.formatters), a2 = null == t2 ? void 0 : t2.filter;
          return n2.forEach((function(n3) {
            if (null == a2 || !a2(n3)) {
              var s2 = e3[n3], o2 = i2[n3];
              o2 && (s2 = o2(s2, t2)), "v" === n3 && 1 === s2 || "pr" == n3 && 1 === s2 || Ho(s2) && (Vo(n3) && "string" == typeof s2 && (s2 = new lo(s2)), r2[n3] = s2);
            }
          })), r2;
        }
        function Xo(e3, t2) {
          return void 0 === t2 && (t2 = {}), e3 ? Go(qo(e3, t2), u({ whitespace: false }, t2)) : "";
        }
        function $o(e3, t2) {
          var r2;
          if (void 0 === t2 && (t2 = {}), !e3) return {};
          var n2 = Object.entries(e3), i2 = Object.entries(so).concat(Object.entries((null == (r2 = t2) ? void 0 : r2.customHeaderMap) || {})), a2 = n2.reduce((function(e4, t3) {
            var r3, n3 = t3[0], a3 = t3[1], s2 = (null == (r3 = i2.find((function(e5) {
              return e5[1].includes(n3);
            }))) ? void 0 : r3[0]) || no.REQUEST;
            return null != e4[s2] || (e4[s2] = {}), e4[s2][n3] = a3, e4;
          }), {});
          return Object.entries(a2).reduce((function(e4, r3) {
            var n3 = r3[0], i3 = r3[1];
            return e4[n3] = Xo(i3, t2), e4;
          }), {});
        }
        function Jo(e3, t2, r2) {
          return u(e3, $o(t2, r2));
        }
        var Qo = "CMCD";
        function Zo(e3, t2) {
          if (void 0 === t2 && (t2 = {}), !e3) return "";
          var r2 = Xo(e3, t2);
          return Qo + "=" + encodeURIComponent(r2);
        }
        var el = /CMCD=[^&#]+/;
        function tl(e3, t2, r2) {
          var n2 = Zo(t2, r2);
          if (!n2) return e3;
          if (el.test(e3)) return e3.replace(el, n2);
          var i2 = e3.includes("?") ? "&" : "?";
          return "" + e3 + i2 + n2;
        }
        var rl = (function() {
          function e3(e4) {
            var t3 = this;
            this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = false, this.includeKeys = void 0, this.initialized = false, this.starved = false, this.buffering = true, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = function() {
              t3.initialized && (t3.starved = true), t3.buffering = true;
            }, this.onPlaying = function() {
              t3.initialized || (t3.initialized = true), t3.buffering = false;
            }, this.applyPlaylistData = function(e5) {
              try {
                t3.apply(e5, { ot: to.MANIFEST, su: !t3.initialized });
              } catch (e6) {
                F.warn("Could not generate manifest CMCD data.", e6);
              }
            }, this.applyFragmentData = function(e5) {
              try {
                var r3 = e5.frag, n3 = t3.hls.levels[r3.level], i2 = t3.getObjectType(r3), a2 = { d: 1e3 * r3.duration, ot: i2 };
                i2 !== to.VIDEO && i2 !== to.AUDIO && i2 != to.MUXED || (a2.br = n3.bitrate / 1e3, a2.tb = t3.getTopBandwidth(i2) / 1e3, a2.bl = t3.getBufferLength(i2)), t3.apply(e5, a2);
              } catch (e6) {
                F.warn("Could not generate segment CMCD data.", e6);
              }
            }, this.hls = e4;
            var r2 = this.config = e4.config, n2 = r2.cmcd;
            null != n2 && (r2.pLoader = this.createPlaylistLoader(), r2.fLoader = this.createFragmentLoader(), this.sid = n2.sessionId || jo(), this.cid = n2.contentId, this.useHeaders = true === n2.useHeaders, this.includeKeys = n2.includeKeys, this.registerListeners());
          }
          var t2 = e3.prototype;
          return t2.registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.MEDIA_ATTACHED, this.onMediaAttached, this), e4.on(I.MEDIA_DETACHED, this.onMediaDetached, this), e4.on(I.BUFFER_CREATED, this.onBufferCreated, this);
          }, t2.unregisterListeners = function() {
            var e4 = this.hls;
            e4.off(I.MEDIA_ATTACHED, this.onMediaAttached, this), e4.off(I.MEDIA_DETACHED, this.onMediaDetached, this), e4.off(I.BUFFER_CREATED, this.onBufferCreated, this);
          }, t2.destroy = function() {
            this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = null;
          }, t2.onMediaAttached = function(e4, t3) {
            this.media = t3.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying);
          }, t2.onMediaDetached = function() {
            this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null);
          }, t2.onBufferCreated = function(e4, t3) {
            var r2, n2;
            this.audioBuffer = null == (r2 = t3.tracks.audio) ? void 0 : r2.buffer, this.videoBuffer = null == (n2 = t3.tracks.video) ? void 0 : n2.buffer;
          }, t2.createData = function() {
            var e4;
            return { v: 1, sf: ro.HLS, sid: this.sid, cid: this.cid, pr: null == (e4 = this.media) ? void 0 : e4.playbackRate, mtp: this.hls.bandwidthEstimate / 1e3 };
          }, t2.apply = function(e4, t3) {
            void 0 === t3 && (t3 = {}), u(t3, this.createData());
            var r2 = t3.ot === to.INIT || t3.ot === to.VIDEO || t3.ot === to.MUXED;
            this.starved && r2 && (t3.bs = true, t3.su = true, this.starved = false), null == t3.su && (t3.su = this.buffering);
            var n2 = this.includeKeys;
            n2 && (t3 = Object.keys(t3).reduce((function(e5, r3) {
              return n2.includes(r3) && (e5[r3] = t3[r3]), e5;
            }), {})), this.useHeaders ? (e4.headers || (e4.headers = {}), Jo(e4.headers, t3)) : e4.url = tl(e4.url, t3);
          }, t2.getObjectType = function(e4) {
            var t3 = e4.type;
            return "subtitle" === t3 ? to.TIMED_TEXT : "initSegment" === e4.sn ? to.INIT : "audio" === t3 ? to.AUDIO : "main" === t3 ? this.hls.audioTracks.length ? to.VIDEO : to.MUXED : void 0;
          }, t2.getTopBandwidth = function(e4) {
            var t3, r2 = 0, n2 = this.hls;
            if (e4 === to.AUDIO) t3 = n2.audioTracks;
            else {
              var i2 = n2.maxAutoLevel, a2 = i2 > -1 ? i2 + 1 : n2.levels.length;
              t3 = n2.levels.slice(0, a2);
            }
            for (var s2, o2 = b(t3); !(s2 = o2()).done; ) {
              var l2 = s2.value;
              l2.bitrate > r2 && (r2 = l2.bitrate);
            }
            return r2 > 0 ? r2 : NaN;
          }, t2.getBufferLength = function(e4) {
            var t3 = this.hls.media, r2 = e4 === to.AUDIO ? this.audioBuffer : this.videoBuffer;
            return r2 && t3 ? 1e3 * In.bufferInfo(r2, t3.currentTime, this.config.maxBufferHole).len : NaN;
          }, t2.createPlaylistLoader = function() {
            var e4 = this.config.pLoader, t3 = this.applyPlaylistData, r2 = e4 || this.config.loader;
            return (function() {
              function e5(e6) {
                this.loader = void 0, this.loader = new r2(e6);
              }
              var n2 = e5.prototype;
              return n2.destroy = function() {
                this.loader.destroy();
              }, n2.abort = function() {
                this.loader.abort();
              }, n2.load = function(e6, r3, n3) {
                t3(e6), this.loader.load(e6, r3, n3);
              }, o(e5, [{ key: "stats", get: function() {
                return this.loader.stats;
              } }, { key: "context", get: function() {
                return this.loader.context;
              } }]), e5;
            })();
          }, t2.createFragmentLoader = function() {
            var e4 = this.config.fLoader, t3 = this.applyFragmentData, r2 = e4 || this.config.loader;
            return (function() {
              function e5(e6) {
                this.loader = void 0, this.loader = new r2(e6);
              }
              var n2 = e5.prototype;
              return n2.destroy = function() {
                this.loader.destroy();
              }, n2.abort = function() {
                this.loader.abort();
              }, n2.load = function(e6, r3, n3) {
                t3(e6), this.loader.load(e6, r3, n3);
              }, o(e5, [{ key: "stats", get: function() {
                return this.loader.stats;
              } }, { key: "context", get: function() {
                return this.loader.context;
              } }]), e5;
            })();
          }, e3;
        })(), nl = 3e5, il = (function() {
          function e3(e4) {
            this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = false, this.enabled = true, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e4, this.log = F.log.bind(F, "[content-steering]:"), this.registerListeners();
          }
          var t2 = e3.prototype;
          return t2.registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.on(I.MANIFEST_LOADED, this.onManifestLoaded, this), e4.on(I.MANIFEST_PARSED, this.onManifestParsed, this), e4.on(I.ERROR, this.onError, this);
          }, t2.unregisterListeners = function() {
            var e4 = this.hls;
            e4 && (e4.off(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.off(I.MANIFEST_LOADED, this.onManifestLoaded, this), e4.off(I.MANIFEST_PARSED, this.onManifestParsed, this), e4.off(I.ERROR, this.onError, this));
          }, t2.startLoad = function() {
            if (this.started = true, this.clearTimeout(), this.enabled && this.uri) {
              if (this.updated) {
                var e4 = 1e3 * this.timeToLoad - (performance.now() - this.updated);
                if (e4 > 0) return void this.scheduleRefresh(this.uri, e4);
              }
              this.loadSteeringManifest(this.uri);
            }
          }, t2.stopLoad = function() {
            this.started = false, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout();
          }, t2.clearTimeout = function() {
            -1 !== this.reloadTimer && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1);
          }, t2.destroy = function() {
            this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
          }, t2.removeLevel = function(e4) {
            var t3 = this.levels;
            t3 && (this.levels = t3.filter((function(t4) {
              return t4 !== e4;
            })));
          }, t2.onManifestLoading = function() {
            this.stopLoad(), this.enabled = true, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
          }, t2.onManifestLoaded = function(e4, t3) {
            var r2 = t3.contentSteering;
            null !== r2 && (this.pathwayId = r2.pathwayId, this.uri = r2.uri, this.started && this.startLoad());
          }, t2.onManifestParsed = function(e4, t3) {
            this.audioTracks = t3.audioTracks, this.subtitleTracks = t3.subtitleTracks;
          }, t2.onError = function(e4, t3) {
            var r2 = t3.errorAction;
            if ((null == r2 ? void 0 : r2.action) === $r.SendAlternateToPenaltyBox && r2.flags === Jr.MoveAllAlternatesMatchingHost) {
              var n2 = this.levels, i2 = this.pathwayPriority, a2 = this.pathwayId;
              if (t3.context) {
                var s2 = t3.context, o2 = s2.groupId, l2 = s2.pathwayId, u2 = s2.type;
                o2 && n2 ? a2 = this.getPathwayForGroupId(o2, u2, a2) : l2 && (a2 = l2);
              }
              a2 in this.penalizedPathways || (this.penalizedPathways[a2] = performance.now()), !i2 && n2 && (i2 = n2.reduce((function(e5, t4) {
                return -1 === e5.indexOf(t4.pathwayId) && e5.push(t4.pathwayId), e5;
              }), [])), i2 && i2.length > 1 && (this.updatePathwayPriority(i2), r2.resolved = this.pathwayId !== a2), r2.resolved || F.warn("Could not resolve " + t3.details + ' ("' + t3.error.message + '") with content-steering for Pathway: ' + a2 + " levels: " + (n2 ? n2.length : n2) + " priorities: " + JSON.stringify(i2) + " penalized: " + JSON.stringify(this.penalizedPathways));
            }
          }, t2.filterParsedLevels = function(e4) {
            this.levels = e4;
            var t3 = this.getLevelsForPathway(this.pathwayId);
            if (0 === t3.length) {
              var r2 = e4[0].pathwayId;
              this.log("No levels found in Pathway " + this.pathwayId + '. Setting initial Pathway to "' + r2 + '"'), t3 = this.getLevelsForPathway(r2), this.pathwayId = r2;
            }
            return t3.length !== e4.length ? (this.log("Found " + t3.length + "/" + e4.length + ' levels in Pathway "' + this.pathwayId + '"'), t3) : e4;
          }, t2.getLevelsForPathway = function(e4) {
            return null === this.levels ? [] : this.levels.filter((function(t3) {
              return e4 === t3.pathwayId;
            }));
          }, t2.updatePathwayPriority = function(e4) {
            var t3;
            this.pathwayPriority = e4;
            var r2 = this.penalizedPathways, n2 = performance.now();
            Object.keys(r2).forEach((function(e5) {
              n2 - r2[e5] > nl && delete r2[e5];
            }));
            for (var i2 = 0; i2 < e4.length; i2++) {
              var a2 = e4[i2];
              if (!(a2 in r2)) {
                if (a2 === this.pathwayId) return;
                var s2 = this.hls.nextLoadLevel, o2 = this.hls.levels[s2];
                if ((t3 = this.getLevelsForPathway(a2)).length > 0) {
                  this.log('Setting Pathway to "' + a2 + '"'), this.pathwayId = a2, Nr(t3), this.hls.trigger(I.LEVELS_UPDATED, { levels: t3 });
                  var l2 = this.hls.levels[s2];
                  o2 && l2 && this.levels && (l2.attrs["STABLE-VARIANT-ID"] !== o2.attrs["STABLE-VARIANT-ID"] && l2.bitrate !== o2.bitrate && this.log("Unstable Pathways change from bitrate " + o2.bitrate + " to " + l2.bitrate), this.hls.nextLoadLevel = s2);
                  break;
                }
              }
            }
          }, t2.getPathwayForGroupId = function(e4, t3, r2) {
            for (var n2 = this.getLevelsForPathway(r2).concat(this.levels || []), i2 = 0; i2 < n2.length; i2++) if (t3 === Xt.AUDIO_TRACK && n2[i2].hasAudioGroup(e4) || t3 === Xt.SUBTITLE_TRACK && n2[i2].hasSubtitleGroup(e4)) return n2[i2].pathwayId;
            return r2;
          }, t2.clonePathways = function(e4) {
            var t3 = this, r2 = this.levels;
            if (r2) {
              var n2 = {}, i2 = {};
              e4.forEach((function(e5) {
                var a2 = e5.ID, s2 = e5["BASE-ID"], o2 = e5["URI-REPLACEMENT"];
                if (!r2.some((function(e6) {
                  return e6.pathwayId === a2;
                }))) {
                  var l2 = t3.getLevelsForPathway(s2).map((function(e6) {
                    var t4 = new B(e6.attrs);
                    t4["PATHWAY-ID"] = a2;
                    var r3 = t4.AUDIO && t4.AUDIO + "_clone_" + a2, s3 = t4.SUBTITLES && t4.SUBTITLES + "_clone_" + a2;
                    r3 && (n2[t4.AUDIO] = r3, t4.AUDIO = r3), s3 && (i2[t4.SUBTITLES] = s3, t4.SUBTITLES = s3);
                    var l3 = sl(e6.uri, t4["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", o2), u2 = new Ar({ attrs: t4, audioCodec: e6.audioCodec, bitrate: e6.bitrate, height: e6.height, name: e6.name, url: l3, videoCodec: e6.videoCodec, width: e6.width });
                    if (e6.audioGroups) for (var c2 = 1; c2 < e6.audioGroups.length; c2++) u2.addGroupId("audio", e6.audioGroups[c2] + "_clone_" + a2);
                    if (e6.subtitleGroups) for (var d2 = 1; d2 < e6.subtitleGroups.length; d2++) u2.addGroupId("text", e6.subtitleGroups[d2] + "_clone_" + a2);
                    return u2;
                  }));
                  r2.push.apply(r2, l2), al(t3.audioTracks, n2, o2, a2), al(t3.subtitleTracks, i2, o2, a2);
                }
              }));
            }
          }, t2.loadSteeringManifest = function(e4) {
            var t3, r2 = this, n2 = this.hls.config, i2 = n2.loader;
            this.loader && this.loader.destroy(), this.loader = new i2(n2);
            try {
              t3 = new self.URL(e4);
            } catch (t4) {
              return this.enabled = false, void this.log("Failed to parse Steering Manifest URI: " + e4);
            }
            if ("data:" !== t3.protocol) {
              var a2 = 0 | (this.hls.bandwidthEstimate || n2.abrEwmaDefaultEstimate);
              t3.searchParams.set("_HLS_pathway", this.pathwayId), t3.searchParams.set("_HLS_throughput", "" + a2);
            }
            var s2 = { responseType: "json", url: t3.href }, o2 = n2.steeringManifestLoadPolicy.default, l2 = o2.errorRetry || o2.timeoutRetry || {}, u2 = { loadPolicy: o2, timeout: o2.maxLoadTimeMs, maxRetry: l2.maxNumRetry || 0, retryDelay: l2.retryDelayMs || 0, maxRetryDelay: l2.maxRetryDelayMs || 0 }, c2 = { onSuccess: function(e5, n3, i3, a3) {
              r2.log('Loaded steering manifest: "' + t3 + '"');
              var s3 = e5.data;
              if (1 === s3.VERSION) {
                r2.updated = performance.now(), r2.timeToLoad = s3.TTL;
                var o3 = s3["RELOAD-URI"], l3 = s3["PATHWAY-CLONES"], u3 = s3["PATHWAY-PRIORITY"];
                if (o3) try {
                  r2.uri = new self.URL(o3, t3).href;
                } catch (e6) {
                  return r2.enabled = false, void r2.log("Failed to parse Steering Manifest RELOAD-URI: " + o3);
                }
                r2.scheduleRefresh(r2.uri || i3.url), l3 && r2.clonePathways(l3);
                var c3 = { steeringManifest: s3, url: t3.toString() };
                r2.hls.trigger(I.STEERING_MANIFEST_LOADED, c3), u3 && r2.updatePathwayPriority(u3);
              } else r2.log("Steering VERSION " + s3.VERSION + " not supported!");
            }, onError: function(e5, t4, n3, i3) {
              if (r2.log("Error loading steering manifest: " + e5.code + " " + e5.text + " (" + t4.url + ")"), r2.stopLoad(), 410 === e5.code) return r2.enabled = false, void r2.log("Steering manifest " + t4.url + " no longer available");
              var a3 = 1e3 * r2.timeToLoad;
              if (429 !== e5.code) r2.scheduleRefresh(r2.uri || t4.url, a3);
              else {
                var s3 = r2.loader;
                if ("function" == typeof (null == s3 ? void 0 : s3.getResponseHeader)) {
                  var o3 = s3.getResponseHeader("Retry-After");
                  o3 && (a3 = 1e3 * parseFloat(o3));
                }
                r2.log("Steering manifest " + t4.url + " rate limited");
              }
            }, onTimeout: function(e5, t4, n3) {
              r2.log("Timeout loading steering manifest (" + t4.url + ")"), r2.scheduleRefresh(r2.uri || t4.url);
            } };
            this.log("Requesting steering manifest: " + t3), this.loader.load(s2, u2, c2);
          }, t2.scheduleRefresh = function(e4, t3) {
            var r2 = this;
            void 0 === t3 && (t3 = 1e3 * this.timeToLoad), this.clearTimeout(), this.reloadTimer = self.setTimeout((function() {
              var t4, n2 = null == (t4 = r2.hls) ? void 0 : t4.media;
              !n2 || n2.ended ? r2.scheduleRefresh(e4, 1e3 * r2.timeToLoad) : r2.loadSteeringManifest(e4);
            }), t3);
          }, e3;
        })();
        function al(e3, t2, r2, n2) {
          e3 && Object.keys(t2).forEach((function(i2) {
            var a2 = e3.filter((function(e4) {
              return e4.groupId === i2;
            })).map((function(e4) {
              var a3 = u({}, e4);
              return a3.details = void 0, a3.attrs = new B(a3.attrs), a3.url = a3.attrs.URI = sl(e4.url, e4.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", r2), a3.groupId = a3.attrs["GROUP-ID"] = t2[i2], a3.attrs["PATHWAY-ID"] = n2, a3;
            }));
            e3.push.apply(e3, a2);
          }));
        }
        function sl(e3, t2, r2, n2) {
          var i2, a2 = n2.HOST, s2 = n2.PARAMS, o2 = n2[r2];
          t2 && (i2 = null == o2 ? void 0 : o2[t2]) && (e3 = i2);
          var l2 = new self.URL(e3);
          return a2 && !i2 && (l2.host = a2), s2 && Object.keys(s2).sort().forEach((function(e4) {
            e4 && l2.searchParams.set(e4, s2[e4]);
          })), l2.href;
        }
        var ol = /^age:\s*[\d.]+\s*$/im, ll = (function() {
          function e3(e4) {
            this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = e4 && e4.xhrSetup || null, this.stats = new K(), this.retryDelay = 0;
          }
          var t2 = e3.prototype;
          return t2.destroy = function() {
            this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null, this.stats = null;
          }, t2.abortInternal = function() {
            var e4 = this.loader;
            self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e4 && (e4.onreadystatechange = null, e4.onprogress = null, 4 !== e4.readyState && (this.stats.aborted = true, e4.abort()));
          }, t2.abort = function() {
            var e4;
            this.abortInternal(), null != (e4 = this.callbacks) && e4.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
          }, t2.load = function(e4, t3, r2) {
            if (this.stats.loading.start) throw new Error("Loader can only be used once.");
            this.stats.loading.start = self.performance.now(), this.context = e4, this.config = t3, this.callbacks = r2, this.loadInternal();
          }, t2.loadInternal = function() {
            var e4 = this, t3 = this.config, r2 = this.context;
            if (t3 && r2) {
              var n2 = this.loader = new self.XMLHttpRequest(), i2 = this.stats;
              i2.loading.first = 0, i2.loaded = 0, i2.aborted = false;
              var a2 = this.xhrSetup;
              a2 ? Promise.resolve().then((function() {
                if (!e4.stats.aborted) return a2(n2, r2.url);
              })).catch((function(e5) {
                return n2.open("GET", r2.url, true), a2(n2, r2.url);
              })).then((function() {
                e4.stats.aborted || e4.openAndSendXhr(n2, r2, t3);
              })).catch((function(t4) {
                e4.callbacks.onError({ code: n2.status, text: t4.message }, r2, n2, i2);
              })) : this.openAndSendXhr(n2, r2, t3);
            }
          }, t2.openAndSendXhr = function(e4, t3, r2) {
            e4.readyState || e4.open("GET", t3.url, true);
            var n2 = t3.headers, i2 = r2.loadPolicy, a2 = i2.maxTimeToFirstByteMs, s2 = i2.maxLoadTimeMs;
            if (n2) for (var o2 in n2) e4.setRequestHeader(o2, n2[o2]);
            t3.rangeEnd && e4.setRequestHeader("Range", "bytes=" + t3.rangeStart + "-" + (t3.rangeEnd - 1)), e4.onreadystatechange = this.readystatechange.bind(this), e4.onprogress = this.loadprogress.bind(this), e4.responseType = t3.responseType, self.clearTimeout(this.requestTimeout), r2.timeout = a2 && k(a2) ? a2 : s2, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r2.timeout), e4.send();
          }, t2.readystatechange = function() {
            var e4 = this.context, t3 = this.loader, r2 = this.stats;
            if (e4 && t3) {
              var n2 = t3.readyState, i2 = this.config;
              if (!r2.aborted && n2 >= 2 && (0 === r2.loading.first && (r2.loading.first = Math.max(self.performance.now(), r2.loading.start), i2.timeout !== i2.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), i2.timeout = i2.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), i2.loadPolicy.maxLoadTimeMs - (r2.loading.first - r2.loading.start)))), 4 === n2)) {
                self.clearTimeout(this.requestTimeout), t3.onreadystatechange = null, t3.onprogress = null;
                var a2 = t3.status, s2 = "text" !== t3.responseType;
                if (a2 >= 200 && a2 < 300 && (s2 && t3.response || null !== t3.responseText)) {
                  r2.loading.end = Math.max(self.performance.now(), r2.loading.first);
                  var o2 = s2 ? t3.response : t3.responseText, l2 = "arraybuffer" === t3.responseType ? o2.byteLength : o2.length;
                  if (r2.loaded = r2.total = l2, r2.bwEstimate = 8e3 * r2.total / (r2.loading.end - r2.loading.first), !this.callbacks) return;
                  var u2 = this.callbacks.onProgress;
                  if (u2 && u2(r2, e4, o2, t3), !this.callbacks) return;
                  var c2 = { url: t3.responseURL, data: o2, code: a2 };
                  this.callbacks.onSuccess(c2, r2, e4, t3);
                } else {
                  var d2 = i2.loadPolicy.errorRetry;
                  Hr(d2, r2.retry, false, { url: e4.url, data: void 0, code: a2 }) ? this.retry(d2) : (F.error(a2 + " while loading " + e4.url), this.callbacks.onError({ code: a2, text: t3.statusText }, e4, t3, r2));
                }
              }
            }
          }, t2.loadtimeout = function() {
            var e4, t3 = null == (e4 = this.config) ? void 0 : e4.loadPolicy.timeoutRetry;
            if (Hr(t3, this.stats.retry, true)) this.retry(t3);
            else {
              var r2;
              F.warn("timeout while loading " + (null == (r2 = this.context) ? void 0 : r2.url));
              var n2 = this.callbacks;
              n2 && (this.abortInternal(), n2.onTimeout(this.stats, this.context, this.loader));
            }
          }, t2.retry = function(e4) {
            var t3 = this.context, r2 = this.stats;
            this.retryDelay = Gr(e4, r2.retry), r2.retry++, F.warn((status ? "HTTP Status " + status : "Timeout") + " while loading " + (null == t3 ? void 0 : t3.url) + ", retrying " + r2.retry + "/" + e4.maxNumRetry + " in " + this.retryDelay + "ms"), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
          }, t2.loadprogress = function(e4) {
            var t3 = this.stats;
            t3.loaded = e4.loaded, e4.lengthComputable && (t3.total = e4.total);
          }, t2.getCacheAge = function() {
            var e4 = null;
            if (this.loader && ol.test(this.loader.getAllResponseHeaders())) {
              var t3 = this.loader.getResponseHeader("age");
              e4 = t3 ? parseFloat(t3) : null;
            }
            return e4;
          }, t2.getResponseHeader = function(e4) {
            return this.loader && new RegExp("^" + e4 + ":\\s*[\\d.]+\\s*$", "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e4) : null;
          }, e3;
        })();
        function ul() {
          if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
            return new self.ReadableStream({}), true;
          } catch (e3) {
          }
          return false;
        }
        var cl = /(\d+)-(\d+)\/(\d+)/, dl = (function() {
          function e3(e4) {
            this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e4.fetchSetup || ml, this.controller = new self.AbortController(), this.stats = new K();
          }
          var t2 = e3.prototype;
          return t2.destroy = function() {
            this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null;
          }, t2.abortInternal = function() {
            this.controller && !this.stats.loading.end && (this.stats.aborted = true, this.controller.abort());
          }, t2.abort = function() {
            var e4;
            this.abortInternal(), null != (e4 = this.callbacks) && e4.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
          }, t2.load = function(e4, t3, r2) {
            var n2 = this, i2 = this.stats;
            if (i2.loading.start) throw new Error("Loader can only be used once.");
            i2.loading.start = self.performance.now();
            var a2 = hl(e4, this.controller.signal), s2 = r2.onProgress, o2 = "arraybuffer" === e4.responseType, l2 = o2 ? "byteLength" : "length", u2 = t3.loadPolicy, c2 = u2.maxTimeToFirstByteMs, d2 = u2.maxLoadTimeMs;
            this.context = e4, this.config = t3, this.callbacks = r2, this.request = this.fetchSetup(e4, a2), self.clearTimeout(this.requestTimeout), t3.timeout = c2 && k(c2) ? c2 : d2, this.requestTimeout = self.setTimeout((function() {
              n2.abortInternal(), r2.onTimeout(i2, e4, n2.response);
            }), t3.timeout), self.fetch(this.request).then((function(a3) {
              n2.response = n2.loader = a3;
              var l3 = Math.max(self.performance.now(), i2.loading.start);
              if (self.clearTimeout(n2.requestTimeout), t3.timeout = d2, n2.requestTimeout = self.setTimeout((function() {
                n2.abortInternal(), r2.onTimeout(i2, e4, n2.response);
              }), d2 - (l3 - i2.loading.start)), !a3.ok) {
                var u3 = a3.status, c3 = a3.statusText;
                throw new vl(c3 || "fetch, bad network response", u3, a3);
              }
              return i2.loading.first = l3, i2.total = gl(a3.headers) || i2.total, s2 && k(t3.highWaterMark) ? n2.loadProgressively(a3, i2, e4, t3.highWaterMark, s2) : o2 ? a3.arrayBuffer() : "json" === e4.responseType ? a3.json() : a3.text();
            })).then((function(a3) {
              var o3 = n2.response;
              if (!o3) throw new Error("loader destroyed");
              self.clearTimeout(n2.requestTimeout), i2.loading.end = Math.max(self.performance.now(), i2.loading.first);
              var u3 = a3[l2];
              u3 && (i2.loaded = i2.total = u3);
              var c3 = { url: o3.url, data: a3, code: o3.status };
              s2 && !k(t3.highWaterMark) && s2(i2, e4, a3, o3), r2.onSuccess(c3, i2, e4, o3);
            })).catch((function(t4) {
              if (self.clearTimeout(n2.requestTimeout), !i2.aborted) {
                var a3 = t4 && t4.code || 0, s3 = t4 ? t4.message : null;
                r2.onError({ code: a3, text: s3 }, e4, t4 ? t4.details : null, i2);
              }
            }));
          }, t2.getCacheAge = function() {
            var e4 = null;
            if (this.response) {
              var t3 = this.response.headers.get("age");
              e4 = t3 ? parseFloat(t3) : null;
            }
            return e4;
          }, t2.getResponseHeader = function(e4) {
            return this.response ? this.response.headers.get(e4) : null;
          }, t2.loadProgressively = function(e4, t3, r2, n2, i2) {
            void 0 === n2 && (n2 = 0);
            var a2 = new Qn(), s2 = e4.body.getReader();
            return (function o2() {
              return s2.read().then((function(s3) {
                if (s3.done) return a2.dataLength && i2(t3, r2, a2.flush(), e4), Promise.resolve(new ArrayBuffer(0));
                var l2 = s3.value, u2 = l2.length;
                return t3.loaded += u2, u2 < n2 || a2.dataLength ? (a2.push(l2), a2.dataLength >= n2 && i2(t3, r2, a2.flush(), e4)) : i2(t3, r2, l2, e4), o2();
              })).catch((function() {
                return Promise.reject();
              }));
            })();
          }, e3;
        })();
        function hl(e3, t2) {
          var r2 = { method: "GET", mode: "cors", credentials: "same-origin", signal: t2, headers: new self.Headers(u({}, e3.headers)) };
          return e3.rangeEnd && r2.headers.set("Range", "bytes=" + e3.rangeStart + "-" + String(e3.rangeEnd - 1)), r2;
        }
        function fl(e3) {
          var t2 = cl.exec(e3);
          if (t2) return parseInt(t2[2]) - parseInt(t2[1]) + 1;
        }
        function gl(e3) {
          var t2 = e3.get("Content-Range");
          if (t2) {
            var r2 = fl(t2);
            if (k(r2)) return r2;
          }
          var n2 = e3.get("Content-Length");
          if (n2) return parseInt(n2);
        }
        function ml(e3, t2) {
          return new self.Request(e3.url, t2);
        }
        var pl, vl = (function(e3) {
          function t2(t3, r2, n2) {
            var i2;
            return (i2 = e3.call(this, t3) || this).code = void 0, i2.details = void 0, i2.code = r2, i2.details = n2, i2;
          }
          return c(t2, e3), t2;
        })(p(Error)), yl = /\s/, Tl = { newCue: function(e3, t2, r2, n2) {
          for (var i2, a2, s2, o2, l2, u2 = [], c2 = self.VTTCue || self.TextTrackCue, d2 = 0; d2 < n2.rows.length; d2++) if (s2 = true, o2 = 0, l2 = "", !(i2 = n2.rows[d2]).isEmpty()) {
            for (var h2, f2 = 0; f2 < i2.chars.length; f2++) yl.test(i2.chars[f2].uchar) && s2 ? o2++ : (l2 += i2.chars[f2].uchar, s2 = false);
            i2.cueStartTime = t2, t2 === r2 && (r2 += 1e-4), o2 >= 16 ? o2-- : o2++;
            var g2 = Ss(l2.trim()), m2 = ws(t2, r2, g2);
            null != e3 && null != (h2 = e3.cues) && h2.getCueById(m2) || ((a2 = new c2(t2, r2, g2)).id = m2, a2.line = d2 + 1, a2.align = "left", a2.position = 10 + Math.min(80, 10 * Math.floor(8 * o2 / 32)), u2.push(a2));
          }
          return e3 && u2.length && (u2.sort((function(e4, t3) {
            return "auto" === e4.line || "auto" === t3.line ? 0 : e4.line > 8 && t3.line > 8 ? t3.line - e4.line : e4.line - t3.line;
          })), u2.forEach((function(t3) {
            return tr(e3, t3);
          }))), u2;
        } }, bl = n(n({ autoStartLoad: true, startPosition: -1, defaultAudioCodec: void 0, debug: false, capLevelOnFPSDrop: false, capLevelToPlayerSize: false, ignoreDevicePixelRatio: false, preferManagedMediaSource: true, initialLiveManifestSize: 1, maxBufferLength: 30, backBufferLength: 1 / 0, frontBufferFlushThreshold: 1 / 0, maxBufferSize: 6e7, maxBufferHole: 0.1, highBufferWatchdogPeriod: 2, nudgeOffset: 0.1, nudgeMaxRetry: 3, maxFragLookUpTolerance: 0.25, liveSyncDurationCount: 3, liveMaxLatencyDurationCount: 1 / 0, liveSyncDuration: void 0, liveMaxLatencyDuration: void 0, maxLiveSyncPlaybackRate: 1, liveDurationInfinity: false, liveBackBufferLength: null, maxMaxBufferLength: 600, enableWorker: true, workerPath: null, enableSoftwareAES: true, startLevel: void 0, startFragPrefetch: false, fpsDroppedMonitoringPeriod: 5e3, fpsDroppedMonitoringThreshold: 0.2, appendErrorMaxRetry: 3, loader: ll, fLoader: void 0, pLoader: void 0, xhrSetup: void 0, licenseXhrSetup: void 0, licenseResponseCallback: void 0, abrController: bn, bufferController: ja, capLevelController: Js, errorController: Qr, fpsController: Qs, stretchShortVideoTrack: false, maxAudioFramesDrift: 1, forceKeyFrameOnDiscontinuity: true, abrEwmaFastLive: 3, abrEwmaSlowLive: 9, abrEwmaFastVoD: 3, abrEwmaSlowVoD: 9, abrEwmaDefaultEstimate: 5e5, abrEwmaDefaultEstimateMax: 5e6, abrBandWidthFactor: 0.95, abrBandWidthUpFactor: 0.7, abrMaxWithRealBitrate: false, maxStarvationDelay: 4, maxLoadingDelay: 4, minAutoBitrate: 0, emeEnabled: false, widevineLicenseUrl: void 0, drmSystems: {}, drmSystemOptions: {}, requestMediaKeySystemAccessFunc: ce, testBandwidth: true, progressive: false, lowLatencyMode: true, cmcd: void 0, enableDateRangeMetadataCues: true, enableEmsgMetadataCues: true, enableID3MetadataCues: true, useMediaCapabilities: true, certLoadPolicy: { default: { maxTimeToFirstByteMs: 8e3, maxLoadTimeMs: 2e4, timeoutRetry: null, errorRetry: null } }, keyLoadPolicy: { default: { maxTimeToFirstByteMs: 8e3, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear" }, errorRetry: { maxNumRetry: 8, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear" } } }, manifestLoadPolicy: { default: { maxTimeToFirstByteMs: 1 / 0, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, playlistLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 2, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, fragLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 12e4, timeoutRetry: { maxNumRetry: 4, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 6, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, steeringManifestLoadPolicy: { default: { maxTimeToFirstByteMs: 1e4, maxLoadTimeMs: 2e4, timeoutRetry: { maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0 }, errorRetry: { maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3 } } }, manifestLoadingTimeOut: 1e4, manifestLoadingMaxRetry: 1, manifestLoadingRetryDelay: 1e3, manifestLoadingMaxRetryTimeout: 64e3, levelLoadingTimeOut: 1e4, levelLoadingMaxRetry: 4, levelLoadingRetryDelay: 1e3, levelLoadingMaxRetryTimeout: 64e3, fragLoadingTimeOut: 2e4, fragLoadingMaxRetry: 6, fragLoadingRetryDelay: 1e3, fragLoadingMaxRetryTimeout: 64e3 }, El()), {}, { subtitleStreamController: Ba, subtitleTrackController: Va, timelineController: Ws, audioStreamController: Fa, audioTrackController: Na, emeController: eo, cmcdController: rl, contentSteeringController: il });
        function El() {
          return { cueHandler: Tl, enableWebVTT: true, enableIMSC1: true, enableCEA708Captions: true, captionsTextTrack1Label: "English", captionsTextTrack1LanguageCode: "en", captionsTextTrack2Label: "Spanish", captionsTextTrack2LanguageCode: "es", captionsTextTrack3Label: "Unknown CC", captionsTextTrack3LanguageCode: "", captionsTextTrack4Label: "Unknown CC", captionsTextTrack4LanguageCode: "", renderTextTracksNatively: true };
        }
        function Sl(e3, t2) {
          if ((t2.liveSyncDurationCount || t2.liveMaxLatencyDurationCount) && (t2.liveSyncDuration || t2.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
          if (void 0 !== t2.liveMaxLatencyDurationCount && (void 0 === t2.liveSyncDurationCount || t2.liveMaxLatencyDurationCount <= t2.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
          if (void 0 !== t2.liveMaxLatencyDuration && (void 0 === t2.liveSyncDuration || t2.liveMaxLatencyDuration <= t2.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
          var r2 = Al(e3), i2 = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
          return ["manifest", "level", "frag"].forEach((function(e4) {
            var n2 = ("level" === e4 ? "playlist" : e4) + "LoadPolicy", a2 = void 0 === t2[n2], s2 = [];
            i2.forEach((function(i3) {
              var o2 = e4 + "Loading" + i3, l2 = t2[o2];
              if (void 0 !== l2 && a2) {
                s2.push(o2);
                var u2 = r2[n2].default;
                switch (t2[n2] = { default: u2 }, i3) {
                  case "TimeOut":
                    u2.maxLoadTimeMs = l2, u2.maxTimeToFirstByteMs = l2;
                    break;
                  case "MaxRetry":
                    u2.errorRetry.maxNumRetry = l2, u2.timeoutRetry.maxNumRetry = l2;
                    break;
                  case "RetryDelay":
                    u2.errorRetry.retryDelayMs = l2, u2.timeoutRetry.retryDelayMs = l2;
                    break;
                  case "MaxRetryTimeout":
                    u2.errorRetry.maxRetryDelayMs = l2, u2.timeoutRetry.maxRetryDelayMs = l2;
                }
              }
            })), s2.length && F.warn('hls.js config: "' + s2.join('", "') + '" setting(s) are deprecated, use "' + n2 + '": ' + JSON.stringify(t2[n2]));
          })), n(n({}, r2), t2);
        }
        function Al(e3) {
          return e3 && "object" == typeof e3 ? Array.isArray(e3) ? e3.map(Al) : Object.keys(e3).reduce((function(t2, r2) {
            return t2[r2] = Al(e3[r2]), t2;
          }), {}) : e3;
        }
        function kl(e3) {
          var t2 = e3.loader;
          t2 !== dl && t2 !== ll ? (F.log("[config]: Custom loader detected, cannot enable progressive streaming"), e3.progressive = false) : ul() && (e3.loader = dl, e3.progressive = true, e3.enableSoftwareAES = true, F.log("[config]: Progressive streaming enabled, using FetchLoader"));
        }
        var Ll = (function(e3) {
          function t2(t3, r3) {
            var n2;
            return (n2 = e3.call(this, t3, "[level-controller]") || this)._levels = [], n2._firstLevel = -1, n2._maxAutoLevel = -1, n2._startLevel = void 0, n2.currentLevel = null, n2.currentLevelIndex = -1, n2.manualLevelIndex = -1, n2.steering = void 0, n2.onParsedComplete = void 0, n2.steering = r3, n2._registerListeners(), n2;
          }
          c(t2, e3);
          var r2 = t2.prototype;
          return r2._registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.on(I.MANIFEST_LOADED, this.onManifestLoaded, this), e4.on(I.LEVEL_LOADED, this.onLevelLoaded, this), e4.on(I.LEVELS_UPDATED, this.onLevelsUpdated, this), e4.on(I.FRAG_BUFFERED, this.onFragBuffered, this), e4.on(I.ERROR, this.onError, this);
          }, r2._unregisterListeners = function() {
            var e4 = this.hls;
            e4.off(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.off(I.MANIFEST_LOADED, this.onManifestLoaded, this), e4.off(I.LEVEL_LOADED, this.onLevelLoaded, this), e4.off(I.LEVELS_UPDATED, this.onLevelsUpdated, this), e4.off(I.FRAG_BUFFERED, this.onFragBuffered, this), e4.off(I.ERROR, this.onError, this);
          }, r2.destroy = function() {
            this._unregisterListeners(), this.steering = null, this.resetLevels(), e3.prototype.destroy.call(this);
          }, r2.stopLoad = function() {
            this._levels.forEach((function(e4) {
              e4.loadError = 0, e4.fragmentError = 0;
            })), e3.prototype.stopLoad.call(this);
          }, r2.resetLevels = function() {
            this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1;
          }, r2.onManifestLoading = function(e4, t3) {
            this.resetLevels();
          }, r2.onManifestLoaded = function(e4, t3) {
            var r3 = this.hls.config.preferManagedMediaSource, n2 = [], i2 = {}, a2 = {}, s2 = false, o2 = false, l2 = false;
            t3.levels.forEach((function(e5) {
              var t4, u2, c2 = e5.attrs, d2 = e5.audioCodec, h2 = e5.videoCodec;
              -1 !== (null == (t4 = d2) ? void 0 : t4.indexOf("mp4a.40.34")) && (pl || (pl = /chrome|firefox/i.test(navigator.userAgent)), pl && (e5.audioCodec = d2 = void 0)), d2 && (e5.audioCodec = d2 = _t(d2, r3)), 0 === (null == (u2 = h2) ? void 0 : u2.indexOf("avc1")) && (h2 = e5.videoCodec = Pt(h2));
              var f2 = e5.width, g2 = e5.height, m2 = e5.unknownCodecs;
              if (s2 || (s2 = !(!f2 || !g2)), o2 || (o2 = !!h2), l2 || (l2 = !!d2), !(null != m2 && m2.length || d2 && !kt(d2, "audio", r3) || h2 && !kt(h2, "video", r3))) {
                var p2 = c2.CODECS, v2 = c2["FRAME-RATE"], y2 = c2["HDCP-LEVEL"], T2 = c2["PATHWAY-ID"], b2 = c2.RESOLUTION, E2 = c2["VIDEO-RANGE"], S2 = (T2 || ".") + "-" + e5.bitrate + "-" + b2 + "-" + v2 + "-" + p2 + "-" + E2 + "-" + y2;
                if (i2[S2]) if (i2[S2].uri === e5.url || e5.attrs["PATHWAY-ID"]) i2[S2].addGroupId("audio", c2.AUDIO), i2[S2].addGroupId("text", c2.SUBTITLES);
                else {
                  var A2 = a2[S2] += 1;
                  e5.attrs["PATHWAY-ID"] = new Array(A2 + 1).join(".");
                  var k2 = new Ar(e5);
                  i2[S2] = k2, n2.push(k2);
                }
                else {
                  var L2 = new Ar(e5);
                  i2[S2] = L2, a2[S2] = 1, n2.push(L2);
                }
              }
            })), this.filterAndSortMediaOptions(n2, t3, s2, o2, l2);
          }, r2.filterAndSortMediaOptions = function(e4, t3, r3, n2, i2) {
            var a2 = this, s2 = [], o2 = [], l2 = e4;
            if ((r3 || n2) && i2 && (l2 = l2.filter((function(e5) {
              var t4 = e5.videoCodec, r4 = e5.videoRange, n3 = e5.width, i3 = e5.height;
              return (!!t4 || !(!n3 || !i3)) && Tr(r4);
            }))), 0 !== l2.length) {
              if (t3.audioTracks) {
                var u2 = this.hls.config.preferManagedMediaSource;
                Rl(s2 = t3.audioTracks.filter((function(e5) {
                  return !e5.audioCodec || kt(e5.audioCodec, "audio", u2);
                })));
              }
              t3.subtitles && Rl(o2 = t3.subtitles);
              var c2 = l2.slice(0);
              l2.sort((function(e5, t4) {
                if (e5.attrs["HDCP-LEVEL"] !== t4.attrs["HDCP-LEVEL"]) return (e5.attrs["HDCP-LEVEL"] || "") > (t4.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
                if (r3 && e5.height !== t4.height) return e5.height - t4.height;
                if (e5.frameRate !== t4.frameRate) return e5.frameRate - t4.frameRate;
                if (e5.videoRange !== t4.videoRange) return yr.indexOf(e5.videoRange) - yr.indexOf(t4.videoRange);
                if (e5.videoCodec !== t4.videoCodec) {
                  var n3 = It(e5.videoCodec), i3 = It(t4.videoCodec);
                  if (n3 !== i3) return i3 - n3;
                }
                if (e5.uri === t4.uri && e5.codecSet !== t4.codecSet) {
                  var a3 = wt(e5.codecSet), s3 = wt(t4.codecSet);
                  if (a3 !== s3) return s3 - a3;
                }
                return e5.averageBitrate !== t4.averageBitrate ? e5.averageBitrate - t4.averageBitrate : 0;
              }));
              var d2 = c2[0];
              if (this.steering && (l2 = this.steering.filterParsedLevels(l2)).length !== c2.length) {
                for (var h2 = 0; h2 < c2.length; h2++) if (c2[h2].pathwayId === l2[0].pathwayId) {
                  d2 = c2[h2];
                  break;
                }
              }
              this._levels = l2;
              for (var f2 = 0; f2 < l2.length; f2++) if (l2[f2] === d2) {
                var g2;
                this._firstLevel = f2;
                var m2 = d2.bitrate, p2 = this.hls.bandwidthEstimate;
                if (this.log("manifest loaded, " + l2.length + " level(s) found, first bitrate: " + m2), void 0 === (null == (g2 = this.hls.userConfig) ? void 0 : g2.abrEwmaDefaultEstimate)) {
                  var v2 = Math.min(m2, this.hls.config.abrEwmaDefaultEstimateMax);
                  v2 > p2 && p2 === bl.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = v2);
                }
                break;
              }
              var y2 = i2 && !n2, T2 = { levels: l2, audioTracks: s2, subtitleTracks: o2, sessionData: t3.sessionData, sessionKeys: t3.sessionKeys, firstLevel: this._firstLevel, stats: t3.stats, audio: i2, video: n2, altAudio: !y2 && s2.some((function(e5) {
                return !!e5.url;
              })) };
              this.hls.trigger(I.MANIFEST_PARSED, T2), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
            } else Promise.resolve().then((function() {
              if (a2.hls) {
                t3.levels.length && a2.warn("One or more CODECS in variant not supported: " + JSON.stringify(t3.levels[0].attrs));
                var e5 = new Error("no level with compatible codecs found in manifest");
                a2.hls.trigger(I.ERROR, { type: w.MEDIA_ERROR, details: D.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: true, url: t3.url, error: e5, reason: e5.message });
              }
            }));
          }, r2.onError = function(e4, t3) {
            !t3.fatal && t3.context && t3.context.type === Xt.LEVEL && t3.context.level === this.level && this.checkRetry(t3);
          }, r2.onFragBuffered = function(e4, t3) {
            var r3 = t3.frag;
            if (void 0 !== r3 && r3.type === $t.MAIN) {
              var n2 = r3.elementaryStreams;
              if (!Object.keys(n2).some((function(e5) {
                return !!n2[e5];
              }))) return;
              var i2 = this._levels[r3.level];
              null != i2 && i2.loadError && (this.log("Resetting level error count of " + i2.loadError + " on frag buffered"), i2.loadError = 0);
            }
          }, r2.onLevelLoaded = function(e4, t3) {
            var r3, n2, i2 = t3.level, a2 = t3.details, s2 = this._levels[i2];
            if (!s2) return this.warn("Invalid level index " + i2), void (null != (n2 = t3.deliveryDirectives) && n2.skip && (a2.deltaUpdateFailed = true));
            i2 === this.currentLevelIndex ? (0 === s2.fragmentError && (s2.loadError = 0), this.playlistLoaded(i2, t3, s2.details)) : null != (r3 = t3.deliveryDirectives) && r3.skip && (a2.deltaUpdateFailed = true);
          }, r2.loadPlaylist = function(t3) {
            e3.prototype.loadPlaylist.call(this);
            var r3 = this.currentLevelIndex, n2 = this.currentLevel;
            if (n2 && this.shouldLoadPlaylist(n2)) {
              var i2 = n2.uri;
              if (t3) try {
                i2 = t3.addDirectives(i2);
              } catch (e4) {
                this.warn("Could not construct new URL with HLS Delivery Directives: " + e4);
              }
              var a2 = n2.attrs["PATHWAY-ID"];
              this.log("Loading level index " + r3 + (void 0 !== (null == t3 ? void 0 : t3.msn) ? " at sn " + t3.msn + " part " + t3.part : "") + " with" + (a2 ? " Pathway " + a2 : "") + " " + i2), this.clearTimer(), this.hls.trigger(I.LEVEL_LOADING, { url: i2, level: r3, pathwayId: n2.attrs["PATHWAY-ID"], id: 0, deliveryDirectives: t3 || null });
            }
          }, r2.removeLevel = function(e4) {
            var t3, r3 = this, n2 = this._levels.filter((function(t4, n3) {
              return n3 !== e4 || (r3.steering && r3.steering.removeLevel(t4), t4 === r3.currentLevel && (r3.currentLevel = null, r3.currentLevelIndex = -1, t4.details && t4.details.fragments.forEach((function(e5) {
                return e5.level = -1;
              }))), false);
            }));
            Nr(n2), this._levels = n2, this.currentLevelIndex > -1 && null != (t3 = this.currentLevel) && t3.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.hls.trigger(I.LEVELS_UPDATED, { levels: n2 });
          }, r2.onLevelsUpdated = function(e4, t3) {
            var r3 = t3.levels;
            this._levels = r3;
          }, r2.checkMaxAutoUpdated = function() {
            var e4 = this.hls, t3 = e4.autoLevelCapping, r3 = e4.maxAutoLevel, n2 = e4.maxHdcpLevel;
            this._maxAutoLevel !== r3 && (this._maxAutoLevel = r3, this.hls.trigger(I.MAX_AUTO_LEVEL_UPDATED, { autoLevelCapping: t3, levels: this.levels, maxAutoLevel: r3, minAutoLevel: this.hls.minAutoLevel, maxHdcpLevel: n2 }));
          }, o(t2, [{ key: "levels", get: function() {
            return 0 === this._levels.length ? null : this._levels;
          } }, { key: "level", get: function() {
            return this.currentLevelIndex;
          }, set: function(e4) {
            var t3 = this._levels;
            if (0 !== t3.length) {
              if (e4 < 0 || e4 >= t3.length) {
                var r3 = new Error("invalid level idx"), n2 = e4 < 0;
                if (this.hls.trigger(I.ERROR, { type: w.OTHER_ERROR, details: D.LEVEL_SWITCH_ERROR, level: e4, fatal: n2, error: r3, reason: r3.message }), n2) return;
                e4 = Math.min(e4, t3.length - 1);
              }
              var i2 = this.currentLevelIndex, a2 = this.currentLevel, s2 = a2 ? a2.attrs["PATHWAY-ID"] : void 0, o2 = t3[e4], l2 = o2.attrs["PATHWAY-ID"];
              if (this.currentLevelIndex = e4, this.currentLevel = o2, i2 !== e4 || !o2.details || !a2 || s2 !== l2) {
                this.log("Switching to level " + e4 + " (" + (o2.height ? o2.height + "p " : "") + (o2.videoRange ? o2.videoRange + " " : "") + (o2.codecSet ? o2.codecSet + " " : "") + "@" + o2.bitrate + ")" + (l2 ? " with Pathway " + l2 : "") + " from level " + i2 + (s2 ? " with Pathway " + s2 : ""));
                var u2 = { level: e4, attrs: o2.attrs, details: o2.details, bitrate: o2.bitrate, averageBitrate: o2.averageBitrate, maxBitrate: o2.maxBitrate, realBitrate: o2.realBitrate, width: o2.width, height: o2.height, codecSet: o2.codecSet, audioCodec: o2.audioCodec, videoCodec: o2.videoCodec, audioGroups: o2.audioGroups, subtitleGroups: o2.subtitleGroups, loaded: o2.loaded, loadError: o2.loadError, fragmentError: o2.fragmentError, name: o2.name, id: o2.id, uri: o2.uri, url: o2.url, urlId: 0, audioGroupIds: o2.audioGroupIds, textGroupIds: o2.textGroupIds };
                this.hls.trigger(I.LEVEL_SWITCHING, u2);
                var c2 = o2.details;
                if (!c2 || c2.live) {
                  var d2 = this.switchParams(o2.uri, null == a2 ? void 0 : a2.details);
                  this.loadPlaylist(d2);
                }
              }
            }
          } }, { key: "manualLevel", get: function() {
            return this.manualLevelIndex;
          }, set: function(e4) {
            this.manualLevelIndex = e4, void 0 === this._startLevel && (this._startLevel = e4), -1 !== e4 && (this.level = e4);
          } }, { key: "firstLevel", get: function() {
            return this._firstLevel;
          }, set: function(e4) {
            this._firstLevel = e4;
          } }, { key: "startLevel", get: function() {
            if (void 0 === this._startLevel) {
              var e4 = this.hls.config.startLevel;
              return void 0 !== e4 ? e4 : this.hls.firstAutoLevel;
            }
            return this._startLevel;
          }, set: function(e4) {
            this._startLevel = e4;
          } }, { key: "nextLoadLevel", get: function() {
            return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel;
          }, set: function(e4) {
            this.level = e4, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e4);
          } }]), t2;
        })(Zr);
        function Rl(e3) {
          var t2 = {};
          e3.forEach((function(e4) {
            var r2 = e4.groupId || "";
            e4.id = t2[r2] = t2[r2] || 0, t2[r2]++;
          }));
        }
        var Il = (function() {
          function e3(e4) {
            this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = e4;
          }
          var t2 = e3.prototype;
          return t2.abort = function(e4) {
            for (var t3 in this.keyUriToKeyInfo) {
              var r2 = this.keyUriToKeyInfo[t3].loader;
              if (r2) {
                var n2;
                if (e4 && e4 !== (null == (n2 = r2.context) ? void 0 : n2.frag.type)) return;
                r2.abort();
              }
            }
          }, t2.detach = function() {
            for (var e4 in this.keyUriToKeyInfo) {
              var t3 = this.keyUriToKeyInfo[e4];
              (t3.mediaKeySessionContext || t3.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[e4];
            }
          }, t2.destroy = function() {
            for (var e4 in this.detach(), this.keyUriToKeyInfo) {
              var t3 = this.keyUriToKeyInfo[e4].loader;
              t3 && t3.destroy();
            }
            this.keyUriToKeyInfo = {};
          }, t2.createKeyLoadError = function(e4, t3, r2, n2, i2) {
            return void 0 === t3 && (t3 = D.KEY_LOAD_ERROR), new Hn({ type: w.NETWORK_ERROR, details: t3, fatal: false, frag: e4, response: i2, error: r2, networkDetails: n2 });
          }, t2.loadClear = function(e4, t3) {
            var r2 = this;
            if (this.emeController && this.config.emeEnabled) for (var n2 = e4.sn, i2 = e4.cc, a2 = function() {
              var e5 = t3[s2];
              if (i2 <= e5.cc && ("initSegment" === n2 || "initSegment" === e5.sn || n2 < e5.sn)) return r2.emeController.selectKeySystemFormat(e5).then((function(t4) {
                e5.setKeyFormat(t4);
              })), 1;
            }, s2 = 0; s2 < t3.length && !a2(); s2++) ;
          }, t2.load = function(e4) {
            var t3 = this;
            return !e4.decryptdata && e4.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(e4).then((function(r2) {
              return t3.loadInternal(e4, r2);
            })) : this.loadInternal(e4);
          }, t2.loadInternal = function(e4, t3) {
            var r2, n2;
            t3 && e4.setKeyFormat(t3);
            var i2 = e4.decryptdata;
            if (!i2) {
              var a2 = new Error(t3 ? "Expected frag.decryptdata to be defined after setting format " + t3 : "Missing decryption data on fragment in onKeyLoading");
              return Promise.reject(this.createKeyLoadError(e4, D.KEY_LOAD_ERROR, a2));
            }
            var s2 = i2.uri;
            if (!s2) return Promise.reject(this.createKeyLoadError(e4, D.KEY_LOAD_ERROR, new Error('Invalid key URI: "' + s2 + '"')));
            var o2, l2 = this.keyUriToKeyInfo[s2];
            if (null != (r2 = l2) && r2.decryptdata.key) return i2.key = l2.decryptdata.key, Promise.resolve({ frag: e4, keyInfo: l2 });
            if (null != (n2 = l2) && n2.keyLoadPromise) switch (null == (o2 = l2.mediaKeySessionContext) ? void 0 : o2.keyStatus) {
              case void 0:
              case "status-pending":
              case "usable":
              case "usable-in-future":
                return l2.keyLoadPromise.then((function(t4) {
                  return i2.key = t4.keyInfo.decryptdata.key, { frag: e4, keyInfo: l2 };
                }));
            }
            switch (l2 = this.keyUriToKeyInfo[s2] = { decryptdata: i2, keyLoadPromise: null, loader: null, mediaKeySessionContext: null }, i2.method) {
              case "ISO-23001-7":
              case "SAMPLE-AES":
              case "SAMPLE-AES-CENC":
              case "SAMPLE-AES-CTR":
                return "identity" === i2.keyFormat ? this.loadKeyHTTP(l2, e4) : this.loadKeyEME(l2, e4);
              case "AES-128":
                return this.loadKeyHTTP(l2, e4);
              default:
                return Promise.reject(this.createKeyLoadError(e4, D.KEY_LOAD_ERROR, new Error('Key supplied with unsupported METHOD: "' + i2.method + '"')));
            }
          }, t2.loadKeyEME = function(e4, t3) {
            var r2 = { frag: t3, keyInfo: e4 };
            if (this.emeController && this.config.emeEnabled) {
              var n2 = this.emeController.loadKey(r2);
              if (n2) return (e4.keyLoadPromise = n2.then((function(t4) {
                return e4.mediaKeySessionContext = t4, r2;
              }))).catch((function(t4) {
                throw e4.keyLoadPromise = null, t4;
              }));
            }
            return Promise.resolve(r2);
          }, t2.loadKeyHTTP = function(e4, t3) {
            var r2 = this, i2 = this.config, a2 = new (0, i2.loader)(i2);
            return t3.keyLoader = e4.loader = a2, e4.keyLoadPromise = new Promise((function(s2, o2) {
              var l2 = { keyInfo: e4, frag: t3, responseType: "arraybuffer", url: e4.decryptdata.uri }, u2 = i2.keyLoadPolicy.default, c2 = { loadPolicy: u2, timeout: u2.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0 }, d2 = { onSuccess: function(e5, t4, n2, i3) {
                var a3 = n2.frag, l3 = n2.keyInfo, u3 = n2.url;
                if (!a3.decryptdata || l3 !== r2.keyUriToKeyInfo[u3]) return o2(r2.createKeyLoadError(a3, D.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), i3));
                l3.decryptdata.key = a3.decryptdata.key = new Uint8Array(e5.data), a3.keyLoader = null, l3.loader = null, s2({ frag: a3, keyInfo: l3 });
              }, onError: function(e5, i3, a3, s3) {
                r2.resetLoader(i3), o2(r2.createKeyLoadError(t3, D.KEY_LOAD_ERROR, new Error("HTTP Error " + e5.code + " loading key " + e5.text), a3, n({ url: l2.url, data: void 0 }, e5)));
              }, onTimeout: function(e5, n2, i3) {
                r2.resetLoader(n2), o2(r2.createKeyLoadError(t3, D.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), i3));
              }, onAbort: function(e5, n2, i3) {
                r2.resetLoader(n2), o2(r2.createKeyLoadError(t3, D.INTERNAL_ABORTED, new Error("key loading aborted"), i3));
              } };
              a2.load(l2, c2, d2);
            }));
          }, t2.resetLoader = function(e4) {
            var t3 = e4.frag, r2 = e4.keyInfo, n2 = e4.url, i2 = r2.loader;
            t3.keyLoader === i2 && (t3.keyLoader = null, r2.loader = null), delete this.keyUriToKeyInfo[n2], i2 && i2.destroy();
          }, e3;
        })();
        function wl() {
          return self.SourceBuffer || self.WebKitSourceBuffer;
        }
        function Dl() {
          if (!Et()) return false;
          var e3 = wl();
          return !e3 || e3.prototype && "function" == typeof e3.prototype.appendBuffer && "function" == typeof e3.prototype.remove;
        }
        function Cl() {
          if (!Dl()) return false;
          var e3 = Et();
          return "function" == typeof (null == e3 ? void 0 : e3.isTypeSupported) && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((function(t2) {
            return e3.isTypeSupported(Rt(t2, "video"));
          })) || ["mp4a.40.2", "fLaC"].some((function(t2) {
            return e3.isTypeSupported(Rt(t2, "audio"));
          })));
        }
        function xl() {
          var e3, t2 = wl();
          return "function" == typeof (null == t2 || null == (e3 = t2.prototype) ? void 0 : e3.changeType);
        }
        var _l = 250, Ol = 2, Pl = 0.1, Ml = 0.05, Fl = (function() {
          function e3(e4, t3, r2, n2) {
            this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = false, this.stalled = null, this.moved = false, this.seeking = false, this.config = e4, this.media = t3, this.fragmentTracker = r2, this.hls = n2;
          }
          var t2 = e3.prototype;
          return t2.destroy = function() {
            this.media = null, this.hls = this.fragmentTracker = null;
          }, t2.poll = function(e4, t3) {
            var r2 = this.config, n2 = this.media, i2 = this.stalled;
            if (null !== n2) {
              var a2 = n2.currentTime, s2 = n2.seeking, o2 = this.seeking && !s2, l2 = !this.seeking && s2;
              if (this.seeking = s2, a2 === e4) if (l2 || o2) this.stalled = null;
              else if (n2.paused && !s2 || n2.ended || 0 === n2.playbackRate || !In.getBuffered(n2).length) this.nudgeRetry = 0;
              else {
                var u2 = In.bufferInfo(n2, a2, 0), c2 = u2.nextStart || 0;
                if (s2) {
                  var d2 = u2.len > Ol, h2 = !c2 || t3 && t3.start <= a2 || c2 - a2 > Ol && !this.fragmentTracker.getPartialFragment(a2);
                  if (d2 || h2) return;
                  this.moved = false;
                }
                if (!this.moved && null !== this.stalled) {
                  var f2;
                  if (!(u2.len > 0 || c2)) return;
                  var g2 = Math.max(c2, u2.start || 0) - a2, m2 = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, p2 = (null == m2 || null == (f2 = m2.details) ? void 0 : f2.live) ? 2 * m2.details.targetduration : Ol, v2 = this.fragmentTracker.getPartialFragment(a2);
                  if (g2 > 0 && (g2 <= p2 || v2)) return void (n2.paused || this._trySkipBufferHole(v2));
                }
                var y2 = self.performance.now();
                if (null !== i2) {
                  var T2 = y2 - i2;
                  if (s2 || !(T2 >= _l) || (this._reportStall(u2), this.media)) {
                    var b2 = In.bufferInfo(n2, a2, r2.maxBufferHole);
                    this._tryFixBufferStall(b2, T2);
                  }
                } else this.stalled = y2;
              }
              else if (this.moved = true, s2 || (this.nudgeRetry = 0), null !== i2) {
                if (this.stallReported) {
                  var E2 = self.performance.now() - i2;
                  F.warn("playback not stuck anymore @" + a2 + ", after " + Math.round(E2) + "ms"), this.stallReported = false;
                }
                this.stalled = null;
              }
            }
          }, t2._tryFixBufferStall = function(e4, t3) {
            var r2 = this.config, n2 = this.fragmentTracker, i2 = this.media;
            if (null !== i2) {
              var a2 = i2.currentTime, s2 = n2.getPartialFragment(a2);
              if (s2 && (this._trySkipBufferHole(s2) || !this.media)) return;
              (e4.len > r2.maxBufferHole || e4.nextStart && e4.nextStart - a2 < r2.maxBufferHole) && t3 > 1e3 * r2.highBufferWatchdogPeriod && (F.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
            }
          }, t2._reportStall = function(e4) {
            var t3 = this.hls, r2 = this.media;
            if (!this.stallReported && r2) {
              this.stallReported = true;
              var n2 = new Error("Playback stalling at @" + r2.currentTime + " due to low buffer (" + JSON.stringify(e4) + ")");
              F.warn(n2.message), t3.trigger(I.ERROR, { type: w.MEDIA_ERROR, details: D.BUFFER_STALLED_ERROR, fatal: false, error: n2, buffer: e4.len });
            }
          }, t2._trySkipBufferHole = function(e4) {
            var t3 = this.config, r2 = this.hls, n2 = this.media;
            if (null === n2) return 0;
            var i2 = n2.currentTime, a2 = In.bufferInfo(n2, i2, 0), s2 = i2 < a2.start ? a2.start : a2.nextStart;
            if (s2) {
              var o2 = a2.len <= t3.maxBufferHole, l2 = a2.len > 0 && a2.len < 1 && n2.readyState < 3, u2 = s2 - i2;
              if (u2 > 0 && (o2 || l2)) {
                if (u2 > t3.maxBufferHole) {
                  var c2 = this.fragmentTracker, d2 = false;
                  if (0 === i2) {
                    var h2 = c2.getAppendedFrag(0, $t.MAIN);
                    h2 && s2 < h2.end && (d2 = true);
                  }
                  if (!d2) {
                    var f2 = e4 || c2.getAppendedFrag(i2, $t.MAIN);
                    if (f2) {
                      for (var g2 = false, m2 = f2.end; m2 < s2; ) {
                        var p2 = c2.getPartialFragment(m2);
                        if (!p2) {
                          g2 = true;
                          break;
                        }
                        m2 += p2.duration;
                      }
                      if (g2) return 0;
                    }
                  }
                }
                var v2 = Math.max(s2 + Ml, i2 + Pl);
                if (F.warn("skipping hole, adjusting currentTime from " + i2 + " to " + v2), this.moved = true, this.stalled = null, n2.currentTime = v2, e4 && !e4.gap) {
                  var y2 = new Error("fragment loaded with buffer holes, seeking from " + i2 + " to " + v2);
                  r2.trigger(I.ERROR, { type: w.MEDIA_ERROR, details: D.BUFFER_SEEK_OVER_HOLE, fatal: false, error: y2, reason: y2.message, frag: e4 });
                }
                return v2;
              }
            }
            return 0;
          }, t2._tryNudgeBuffer = function() {
            var e4 = this.config, t3 = this.hls, r2 = this.media, n2 = this.nudgeRetry;
            if (null !== r2) {
              var i2 = r2.currentTime;
              if (this.nudgeRetry++, n2 < e4.nudgeMaxRetry) {
                var a2 = i2 + (n2 + 1) * e4.nudgeOffset, s2 = new Error("Nudging 'currentTime' from " + i2 + " to " + a2);
                F.warn(s2.message), r2.currentTime = a2, t3.trigger(I.ERROR, { type: w.MEDIA_ERROR, details: D.BUFFER_NUDGE_ON_STALL, error: s2, fatal: false });
              } else {
                var o2 = new Error("Playhead still not moving while enough data buffered @" + i2 + " after " + e4.nudgeMaxRetry + " nudges");
                F.error(o2.message), t3.trigger(I.ERROR, { type: w.MEDIA_ERROR, details: D.BUFFER_STALLED_ERROR, error: o2, fatal: true });
              }
            }
          }, e3;
        })(), Nl = 100, Ul = (function(e3) {
          function t2(t3, r3, n2) {
            var i2;
            return (i2 = e3.call(this, t3, r3, n2, "[stream-controller]", $t.MAIN) || this).audioCodecSwap = false, i2.gapController = null, i2.level = -1, i2._forceStartLoad = false, i2.altAudio = false, i2.audioOnly = false, i2.fragPlaying = null, i2.onvplaying = null, i2.onvseeked = null, i2.fragLastKbps = 0, i2.couldBacktrack = false, i2.backtrackFragment = null, i2.audioCodecSwitch = false, i2.videoBuffer = null, i2._registerListeners(), i2;
          }
          c(t2, e3);
          var r2 = t2.prototype;
          return r2._registerListeners = function() {
            var e4 = this.hls;
            e4.on(I.MEDIA_ATTACHED, this.onMediaAttached, this), e4.on(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.on(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.on(I.MANIFEST_PARSED, this.onManifestParsed, this), e4.on(I.LEVEL_LOADING, this.onLevelLoading, this), e4.on(I.LEVEL_LOADED, this.onLevelLoaded, this), e4.on(I.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e4.on(I.ERROR, this.onError, this), e4.on(I.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e4.on(I.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e4.on(I.BUFFER_CREATED, this.onBufferCreated, this), e4.on(I.BUFFER_FLUSHED, this.onBufferFlushed, this), e4.on(I.LEVELS_UPDATED, this.onLevelsUpdated, this), e4.on(I.FRAG_BUFFERED, this.onFragBuffered, this);
          }, r2._unregisterListeners = function() {
            var e4 = this.hls;
            e4.off(I.MEDIA_ATTACHED, this.onMediaAttached, this), e4.off(I.MEDIA_DETACHING, this.onMediaDetaching, this), e4.off(I.MANIFEST_LOADING, this.onManifestLoading, this), e4.off(I.MANIFEST_PARSED, this.onManifestParsed, this), e4.off(I.LEVEL_LOADED, this.onLevelLoaded, this), e4.off(I.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e4.off(I.ERROR, this.onError, this), e4.off(I.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e4.off(I.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e4.off(I.BUFFER_CREATED, this.onBufferCreated, this), e4.off(I.BUFFER_FLUSHED, this.onBufferFlushed, this), e4.off(I.LEVELS_UPDATED, this.onLevelsUpdated, this), e4.off(I.FRAG_BUFFERED, this.onFragBuffered, this);
          }, r2.onHandlerDestroying = function() {
            this._unregisterListeners(), e3.prototype.onHandlerDestroying.call(this);
          }, r2.startLoad = function(e4) {
            if (this.levels) {
              var t3 = this.lastCurrentTime, r3 = this.hls;
              if (this.stopLoad(), this.setInterval(Nl), this.level = -1, !this.startFragRequested) {
                var n2 = r3.startLevel;
                -1 === n2 && (r3.config.testBandwidth && this.levels.length > 1 ? (n2 = 0, this.bitrateTest = true) : n2 = r3.firstAutoLevel), r3.nextLoadLevel = n2, this.level = r3.loadLevel, this.loadedmetadata = false;
              }
              t3 > 0 && -1 === e4 && (this.log("Override startPosition with lastCurrentTime @" + t3.toFixed(3)), e4 = t3), this.state = $n.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e4, this.tick();
            } else this._forceStartLoad = true, this.state = $n.STOPPED;
          }, r2.stopLoad = function() {
            this._forceStartLoad = false, e3.prototype.stopLoad.call(this);
          }, r2.doTick = function() {
            switch (this.state) {
              case $n.WAITING_LEVEL:
                var e4 = this.levels, t3 = this.level, r3 = null == e4 ? void 0 : e4[t3], n2 = null == r3 ? void 0 : r3.details;
                if (n2 && (!n2.live || this.levelLastLoaded === r3)) {
                  if (this.waitForCdnTuneIn(n2)) break;
                  this.state = $n.IDLE;
                  break;
                }
                if (this.hls.nextLoadLevel !== this.level) {
                  this.state = $n.IDLE;
                  break;
                }
                break;
              case $n.FRAG_LOADING_WAITING_RETRY:
                var i2, a2 = self.performance.now(), s2 = this.retryDate;
                if (!s2 || a2 >= s2 || null != (i2 = this.media) && i2.seeking) {
                  var o2 = this.levels, l2 = this.level, u2 = null == o2 ? void 0 : o2[l2];
                  this.resetStartWhenNotLoaded(u2 || null), this.state = $n.IDLE;
                }
            }
            this.state === $n.IDLE && this.doTickIdle(), this.onTickEnd();
          }, r2.onTickEnd = function() {
            e3.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged();
          }, r2.doTickIdle = function() {
            var e4 = this.hls, t3 = this.levelLastLoaded, r3 = this.levels, n2 = this.media, i2 = e4.config, a2 = e4.nextLoadLevel;
            if (null !== t3 && (n2 || !this.startFragRequested && i2.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && null != r3 && r3[a2]) {
              var s2 = r3[a2], o2 = this.getMainFwdBufferInfo();
              if (null !== o2) {
                var l2 = this.getLevelDetails();
                if (l2 && this._streamEnded(o2, l2)) {
                  var u2 = {};
                  return this.altAudio && (u2.type = "video"), this.hls.trigger(I.BUFFER_EOS, u2), void (this.state = $n.ENDED);
                }
                e4.loadLevel !== a2 && -1 === e4.manualLevel && this.log("Adapting to level " + a2 + " from level " + this.level), this.level = e4.nextLoadLevel = a2;
                var c2 = s2.details;
                if (!c2 || this.state === $n.WAITING_LEVEL || c2.live && this.levelLastLoaded !== s2) return this.level = a2, void (this.state = $n.WAITING_LEVEL);
                var d2 = o2.len, h2 = this.getMaxBufferLength(s2.maxBitrate);
                if (!(d2 >= h2)) {
                  this.backtrackFragment && this.backtrackFragment.start > o2.end && (this.backtrackFragment = null);
                  var f2 = this.backtrackFragment ? this.backtrackFragment.start : o2.end, g2 = this.getNextFragment(f2, c2);
                  if (this.couldBacktrack && !this.fragPrevious && g2 && "initSegment" !== g2.sn && this.fragmentTracker.getState(g2) !== Sn.OK) {
                    var m2, p2 = (null != (m2 = this.backtrackFragment) ? m2 : g2).sn - c2.startSN, v2 = c2.fragments[p2 - 1];
                    v2 && g2.cc === v2.cc && (g2 = v2, this.fragmentTracker.removeFragment(v2));
                  } else this.backtrackFragment && o2.len && (this.backtrackFragment = null);
                  if (g2 && this.isLoopLoading(g2, f2)) {
                    if (!g2.gap) {
                      var y2 = this.audioOnly && !this.altAudio ? j.AUDIO : j.VIDEO, T2 = (y2 === j.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
                      T2 && this.afterBufferFlushed(T2, y2, $t.MAIN);
                    }
                    g2 = this.getNextFragmentLoopLoading(g2, c2, o2, $t.MAIN, h2);
                  }
                  g2 && (!g2.initSegment || g2.initSegment.data || this.bitrateTest || (g2 = g2.initSegment), this.loadFragment(g2, s2, f2));
                }
              }
            }
          }, r2.loadFragment = function(t3, r3, n2) {
            var i2 = this.fragmentTracker.getState(t3);
            this.fragCurrent = t3, i2 === Sn.NOT_LOADED || i2 === Sn.PARTIAL ? "initSegment" === t3.sn ? this._loadInitSegment(t3, r3) : this.bitrateTest ? (this.log("Fragment " + t3.sn + " of level " + t3.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(t3, r3)) : (this.startFragRequested = true, e3.prototype.loadFragment.call(this, t3, r3, n2)) : this.clearTrackerIfNeeded(t3);
          }, r2.getBufferedFrag = function(e4) {
            return this.fragmentTracker.getBufferedFrag(e4, $t.MAIN);
          }, r2.followingBufferedFrag = function(e4) {
            return e4 ? this.getBufferedFrag(e4.end + 0.5) : null;
          }, r2.immediateLevelSwitch = function() {
            this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
          }, r2.nextLevelSwitch = function() {
            var e4 = this.levels, t3 = this.media;
            if (null != t3 && t3.readyState) {
              var r3, n2 = this.getAppendedFrag(t3.currentTime);
              n2 && n2.start > 1 && this.flushMainBuffer(0, n2.start - 1);
              var i2 = this.getLevelDetails();
              if (null != i2 && i2.live) {
                var a2 = this.getMainFwdBufferInfo();
                if (!a2 || a2.len < 2 * i2.targetduration) return;
              }
              if (!t3.paused && e4) {
                var s2 = e4[this.hls.nextLoadLevel], o2 = this.fragLastKbps;
                r3 = o2 && this.fragCurrent ? this.fragCurrent.duration * s2.maxBitrate / (1e3 * o2) + 1 : 0;
              } else r3 = 0;
              var l2 = this.getBufferedFrag(t3.currentTime + r3);
              if (l2) {
                var u2 = this.followingBufferedFrag(l2);
                if (u2) {
                  this.abortCurrentFrag();
                  var c2 = u2.maxStartPTS ? u2.maxStartPTS : u2.start, d2 = u2.duration, h2 = Math.max(l2.end, c2 + Math.min(Math.max(d2 - this.config.maxFragLookUpTolerance, d2 * (this.couldBacktrack ? 0.5 : 0.125)), d2 * (this.couldBacktrack ? 0.75 : 0.25)));
                  this.flushMainBuffer(h2, Number.POSITIVE_INFINITY);
                }
              }
            }
          }, r2.abortCurrentFrag = function() {
            var e4 = this.fragCurrent;
            switch (this.fragCurrent = null, this.backtrackFragment = null, e4 && (e4.abortRequests(), this.fragmentTracker.removeFragment(e4)), this.state) {
              case $n.KEY_LOADING:
              case $n.FRAG_LOADING:
              case $n.FRAG_LOADING_WAITING_RETRY:
              case $n.PARSING:
              case $n.PARSED:
                this.state = $n.IDLE;
            }
            this.nextLoadPosition = this.getLoadPosition();
          }, r2.flushMainBuffer = function(t3, r3) {
            e3.prototype.flushMainBuffer.call(this, t3, r3, this.altAudio ? "video" : null);
          }, r2.onMediaAttached = function(t3, r3) {
            e3.prototype.onMediaAttached.call(this, t3, r3);
            var n2 = r3.media;
            this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), n2.addEventListener("playing", this.onvplaying), n2.addEventListener("seeked", this.onvseeked), this.gapController = new Fl(this.config, n2, this.fragmentTracker, this.hls);
          }, r2.onMediaDetaching = function() {
            var t3 = this.media;
            t3 && this.onvplaying && this.onvseeked && (t3.removeEventListener("playing", this.onvplaying), t3.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), e3.prototype.onMediaDetaching.call(this);
          }, r2.onMediaPlaying = function() {
            this.tick();
          }, r2.onMediaSeeked = function() {
            var e4 = this.media, t3 = e4 ? e4.currentTime : null;
            k(t3) && this.log("Media seeked to " + t3.toFixed(3));
            var r3 = this.getMainFwdBufferInfo();
            null !== r3 && 0 !== r3.len ? this.tick() : this.warn('Main forward buffer length on "seeked" event ' + (r3 ? r3.len : "empty") + ")");
          }, r2.onManifestLoading = function() {
            this.log("Trigger BUFFER_RESET"), this.hls.trigger(I.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = false, this.startPosition = this.lastCurrentTime = this.fragLastKbps = 0, this.levels = this.fragPlaying = this.backtrackFragment = this.levelLastLoaded = null, this.altAudio = this.audioOnly = this.startFragRequested = false;
          }, r2.onManifestParsed = function(e4, t3) {
            var r3 = false, n2 = false;
            t3.levels.forEach((function(e5) {
              var t4 = e5.audioCodec;
              t4 && (r3 = r3 || -1 !== t4.indexOf("mp4a.40.2"), n2 = n2 || -1 !== t4.indexOf("mp4a.40.5"));
            })), this.audioCodecSwitch = r3 && n2 && !xl(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t3.levels, this.startFragRequested = false;
          }, r2.onLevelLoading = function(e4, t3) {
            var r3 = this.levels;
            if (r3 && this.state === $n.IDLE) {
              var n2 = r3[t3.level];
              (!n2.details || n2.details.live && this.levelLastLoaded !== n2 || this.waitForCdnTuneIn(n2.details)) && (this.state = $n.WAITING_LEVEL);
            }
          }, r2.onLevelLoaded = function(e4, t3) {
            var r3, n2 = this.levels, i2 = t3.level, a2 = t3.details, s2 = a2.totalduration;
            if (n2) {
              this.log("Level " + i2 + " loaded [" + a2.startSN + "," + a2.endSN + "]" + (a2.lastPartSn ? "[part-" + a2.lastPartSn + "-" + a2.lastPartIndex + "]" : "") + ", cc [" + a2.startCC + ", " + a2.endCC + "] duration:" + s2);
              var o2 = n2[i2], l2 = this.fragCurrent;
              !l2 || this.state !== $n.FRAG_LOADING && this.state !== $n.FRAG_LOADING_WAITING_RETRY || l2.level !== t3.level && l2.loader && this.abortCurrentFrag();
              var u2 = 0;
              if (a2.live || null != (r3 = o2.details) && r3.live) {
                var c2;
                if (this.checkLiveUpdate(a2), a2.deltaUpdateFailed) return;
                u2 = this.alignPlaylists(a2, o2.details, null == (c2 = this.levelLastLoaded) ? void 0 : c2.details);
              }
              if (o2.details = a2, this.levelLastLoaded = o2, this.hls.trigger(I.LEVEL_UPDATED, { details: a2, level: i2 }), this.state === $n.WAITING_LEVEL) {
                if (this.waitForCdnTuneIn(a2)) return;
                this.state = $n.IDLE;
              }
              this.startFragRequested ? a2.live && this.synchronizeToLiveEdge(a2) : this.setStartPosition(a2, u2), this.tick();
            } else this.warn("Levels were reset while loading level " + i2);
          }, r2._handleFragmentLoadProgress = function(e4) {
            var t3, r3 = e4.frag, n2 = e4.part, i2 = e4.payload, a2 = this.levels;
            if (a2) {
              var s2 = a2[r3.level], o2 = s2.details;
              if (!o2) return this.warn("Dropping fragment " + r3.sn + " of level " + r3.level + " after level details were reset"), void this.fragmentTracker.removeFragment(r3);
              var l2 = s2.videoCodec, u2 = o2.PTSKnown || !o2.live, c2 = null == (t3 = r3.initSegment) ? void 0 : t3.data, d2 = this._getAudioCodec(s2), h2 = this.transmuxer = this.transmuxer || new xa(this.hls, $t.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), f2 = n2 ? n2.index : -1, g2 = -1 !== f2, m2 = new wn(r3.level, r3.sn, r3.stats.chunkCount, i2.byteLength, f2, g2), p2 = this.initPTS[r3.cc];
              h2.push(i2, c2, d2, l2, r3, n2, o2.totalduration, u2, m2, p2);
            } else this.warn("Levels were reset while fragment load was in progress. Fragment " + r3.sn + " of level " + r3.level + " will not be buffered");
          }, r2.onAudioTrackSwitching = function(e4, t3) {
            var r3 = this.altAudio;
            if (!t3.url) {
              if (this.mediaBuffer !== this.media) {
                this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                var n2 = this.fragCurrent;
                n2 && (this.log("Switching to main audio track, cancel main fragment load"), n2.abortRequests(), this.fragmentTracker.removeFragment(n2)), this.resetTransmuxer(), this.resetLoadingState();
              } else this.audioOnly && this.resetTransmuxer();
              var i2 = this.hls;
              r3 && (i2.trigger(I.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: null }), this.fragmentTracker.removeAllFragments()), i2.trigger(I.AUDIO_TRACK_SWITCHED, t3);
            }
          }, r2.onAudioTrackSwitched = function(e4, t3) {
            var r3 = t3.id, n2 = !!this.hls.audioTracks[r3].url;
            if (n2) {
              var i2 = this.videoBuffer;
              i2 && this.mediaBuffer !== i2 && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i2);
            }
            this.altAudio = n2, this.tick();
          }, r2.onBufferCreated = function(e4, t3) {
            var r3, n2, i2 = t3.tracks, a2 = false;
            for (var s2 in i2) {
              var o2 = i2[s2];
              if ("main" === o2.id) {
                if (n2 = s2, r3 = o2, "video" === s2) {
                  var l2 = i2[s2];
                  l2 && (this.videoBuffer = l2.buffer);
                }
              } else a2 = true;
            }
            a2 && r3 ? (this.log("Alternate track found, use " + n2 + ".buffered to schedule main fragment loading"), this.mediaBuffer = r3.buffer) : this.mediaBuffer = this.media;
          }, r2.onFragBuffered = function(e4, t3) {
            var r3 = t3.frag, n2 = t3.part;
            if (!r3 || r3.type === $t.MAIN) {
              if (this.fragContextChanged(r3)) return this.warn("Fragment " + r3.sn + (n2 ? " p: " + n2.index : "") + " of level " + r3.level + " finished buffering, but was aborted. state: " + this.state), void (this.state === $n.PARSED && (this.state = $n.IDLE));
              var i2 = n2 ? n2.stats : r3.stats;
              this.fragLastKbps = Math.round(8 * i2.total / (i2.buffering.end - i2.loading.first)), "initSegment" !== r3.sn && (this.fragPrevious = r3), this.fragBufferedComplete(r3, n2);
            }
          }, r2.onError = function(e4, t3) {
            var r3;
            if (t3.fatal) this.state = $n.ERROR;
            else switch (t3.details) {
              case D.FRAG_GAP:
              case D.FRAG_PARSING_ERROR:
              case D.FRAG_DECRYPT_ERROR:
              case D.FRAG_LOAD_ERROR:
              case D.FRAG_LOAD_TIMEOUT:
              case D.KEY_LOAD_ERROR:
              case D.KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError($t.MAIN, t3);
                break;
              case D.LEVEL_LOAD_ERROR:
              case D.LEVEL_LOAD_TIMEOUT:
              case D.LEVEL_PARSING_ERROR:
                t3.levelRetry || this.state !== $n.WAITING_LEVEL || (null == (r3 = t3.context) ? void 0 : r3.type) !== Xt.LEVEL || (this.state = $n.IDLE);
                break;
              case D.BUFFER_APPEND_ERROR:
              case D.BUFFER_FULL_ERROR:
                if (!t3.parent || "main" !== t3.parent) return;
                if (t3.details === D.BUFFER_APPEND_ERROR) return void this.resetLoadingState();
                this.reduceLengthAndFlushBuffer(t3) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                break;
              case D.INTERNAL_EXCEPTION:
                this.recoverWorkerError(t3);
            }
          }, r2.checkBuffer = function() {
            var e4 = this.media, t3 = this.gapController;
            if (e4 && t3 && e4.readyState) {
              if (this.loadedmetadata || !In.getBuffered(e4).length) {
                var r3 = this.state !== $n.IDLE ? this.fragCurrent : null;
                t3.poll(this.lastCurrentTime, r3);
              }
              this.lastCurrentTime = e4.currentTime;
            }
          }, r2.onFragLoadEmergencyAborted = function() {
            this.state = $n.IDLE, this.loadedmetadata || (this.startFragRequested = false, this.nextLoadPosition = this.startPosition), this.tickImmediate();
          }, r2.onBufferFlushed = function(e4, t3) {
            var r3 = t3.type;
            if (r3 !== j.AUDIO || this.audioOnly && !this.altAudio) {
              var n2 = (r3 === j.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
              this.afterBufferFlushed(n2, r3, $t.MAIN), this.tick();
            }
          }, r2.onLevelsUpdated = function(e4, t3) {
            this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level), this.levels = t3.levels;
          }, r2.swapAudioCodec = function() {
            this.audioCodecSwap = !this.audioCodecSwap;
          }, r2.seekToStartPos = function() {
            var e4 = this.media;
            if (e4) {
              var t3 = e4.currentTime, r3 = this.startPosition;
              if (r3 >= 0 && t3 < r3) {
                if (e4.seeking) return void this.log("could not seek to " + r3 + ", already seeking at " + t3);
                var n2 = In.getBuffered(e4), i2 = (n2.length ? n2.start(0) : 0) - r3;
                i2 > 0 && (i2 < this.config.maxBufferHole || i2 < this.config.maxFragLookUpTolerance) && (this.log("adjusting start position by " + i2 + " to match buffer start"), r3 += i2, this.startPosition = r3), this.log("seek to target start position " + r3 + " from current time " + t3), e4.currentTime = r3;
              }
            }
          }, r2._getAudioCodec = function(e4) {
            var t3 = this.config.defaultAudioCodec || e4.audioCodec;
            return this.audioCodecSwap && t3 && (this.log("Swapping audio codec"), t3 = -1 !== t3.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), t3;
          }, r2._loadBitrateTestFrag = function(e4, t3) {
            var r3 = this;
            e4.bitrateTest = true, this._doFragLoad(e4, t3).then((function(n2) {
              var i2 = r3.hls;
              if (n2 && !r3.fragContextChanged(e4)) {
                t3.fragmentError = 0, r3.state = $n.IDLE, r3.startFragRequested = false, r3.bitrateTest = false;
                var a2 = e4.stats;
                a2.parsing.start = a2.parsing.end = a2.buffering.start = a2.buffering.end = self.performance.now(), i2.trigger(I.FRAG_LOADED, n2), e4.bitrateTest = false;
              }
            }));
          }, r2._handleTransmuxComplete = function(e4) {
            var t3, r3 = "main", n2 = this.hls, i2 = e4.remuxResult, a2 = e4.chunkMeta, s2 = this.getCurrentContext(a2);
            if (s2) {
              var o2 = s2.frag, l2 = s2.part, u2 = s2.level, c2 = i2.video, d2 = i2.text, h2 = i2.id3, f2 = i2.initSegment, g2 = u2.details, m2 = this.altAudio ? void 0 : i2.audio;
              if (this.fragContextChanged(o2)) this.fragmentTracker.removeFragment(o2);
              else {
                if (this.state = $n.PARSING, f2) {
                  if (null != f2 && f2.tracks) {
                    var p2 = o2.initSegment || o2;
                    this._bufferInitSegment(u2, f2.tracks, p2, a2), n2.trigger(I.FRAG_PARSING_INIT_SEGMENT, { frag: p2, id: r3, tracks: f2.tracks });
                  }
                  var v2 = f2.initPTS, y2 = f2.timescale;
                  k(v2) && (this.initPTS[o2.cc] = { baseTime: v2, timescale: y2 }, n2.trigger(I.INIT_PTS_FOUND, { frag: o2, id: r3, initPTS: v2, timescale: y2 }));
                }
                if (c2 && g2 && "initSegment" !== o2.sn) {
                  var T2 = g2.fragments[o2.sn - 1 - g2.startSN], b2 = o2.sn === g2.startSN, E2 = !T2 || o2.cc > T2.cc;
                  if (false !== i2.independent) {
                    var S2 = c2.startPTS, A2 = c2.endPTS, L2 = c2.startDTS, R2 = c2.endDTS;
                    if (l2) l2.elementaryStreams[c2.type] = { startPTS: S2, endPTS: A2, startDTS: L2, endDTS: R2 };
                    else if (c2.firstKeyFrame && c2.independent && 1 === a2.id && !E2 && (this.couldBacktrack = true), c2.dropped && c2.independent) {
                      var w2 = this.getMainFwdBufferInfo(), D2 = (w2 ? w2.end : this.getLoadPosition()) + this.config.maxBufferHole, C2 = c2.firstKeyFramePTS ? c2.firstKeyFramePTS : S2;
                      if (!b2 && D2 < C2 - this.config.maxBufferHole && !E2) return void this.backtrack(o2);
                      E2 && (o2.gap = true), o2.setElementaryStreamInfo(c2.type, o2.start, A2, o2.start, R2, true);
                    } else b2 && S2 > Ol && (o2.gap = true);
                    o2.setElementaryStreamInfo(c2.type, S2, A2, L2, R2), this.backtrackFragment && (this.backtrackFragment = o2), this.bufferFragmentData(c2, o2, l2, a2, b2 || E2);
                  } else {
                    if (!b2 && !E2) return void this.backtrack(o2);
                    o2.gap = true;
                  }
                }
                if (m2) {
                  var x2 = m2.startPTS, _2 = m2.endPTS, O2 = m2.startDTS, P2 = m2.endDTS;
                  l2 && (l2.elementaryStreams[j.AUDIO] = { startPTS: x2, endPTS: _2, startDTS: O2, endDTS: P2 }), o2.setElementaryStreamInfo(j.AUDIO, x2, _2, O2, P2), this.bufferFragmentData(m2, o2, l2, a2);
                }
                if (g2 && null != h2 && null != (t3 = h2.samples) && t3.length) {
                  var M2 = { id: r3, frag: o2, details: g2, samples: h2.samples };
                  n2.trigger(I.FRAG_PARSING_METADATA, M2);
                }
                if (g2 && d2) {
                  var F2 = { id: r3, frag: o2, details: g2, samples: d2.samples };
                  n2.trigger(I.FRAG_PARSING_USERDATA, F2);
                }
              }
            } else this.resetWhenMissingContext(a2);
          }, r2._bufferInitSegment = function(e4, t3, r3, n2) {
            var i2 = this;
            if (this.state === $n.PARSING) {
              this.audioOnly = !!t3.audio && !t3.video, this.altAudio && !this.audioOnly && delete t3.audio;
              var a2 = t3.audio, s2 = t3.video, o2 = t3.audiovideo;
              if (a2) {
                var l2 = e4.audioCodec, u2 = navigator.userAgent.toLowerCase();
                this.audioCodecSwitch && (l2 && (l2 = -1 !== l2.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== a2.metadata.channelCount && -1 === u2.indexOf("firefox") && (l2 = "mp4a.40.5")), l2 && -1 !== l2.indexOf("mp4a.40.5") && -1 !== u2.indexOf("android") && "audio/mpeg" !== a2.container && (l2 = "mp4a.40.2", this.log("Android: force audio codec to " + l2)), e4.audioCodec && e4.audioCodec !== l2 && this.log('Swapping manifest audio codec "' + e4.audioCodec + '" for "' + l2 + '"'), a2.levelCodec = l2, a2.id = "main", this.log("Init audio buffer, container:" + a2.container + ", codecs[selected/level/parsed]=[" + (l2 || "") + "/" + (e4.audioCodec || "") + "/" + a2.codec + "]");
              }
              s2 && (s2.levelCodec = e4.videoCodec, s2.id = "main", this.log("Init video buffer, container:" + s2.container + ", codecs[level/parsed]=[" + (e4.videoCodec || "") + "/" + s2.codec + "]")), o2 && this.log("Init audiovideo buffer, container:" + o2.container + ", codecs[level/parsed]=[" + e4.codecs + "/" + o2.codec + "]"), this.hls.trigger(I.BUFFER_CODECS, t3), Object.keys(t3).forEach((function(e5) {
                var a3 = t3[e5].initSegment;
                null != a3 && a3.byteLength && i2.hls.trigger(I.BUFFER_APPENDING, { type: e5, data: a3, frag: r3, part: null, chunkMeta: n2, parent: r3.type });
              })), this.tickImmediate();
            }
          }, r2.getMainFwdBufferInfo = function() {
            return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, $t.MAIN);
          }, r2.backtrack = function(e4) {
            this.couldBacktrack = true, this.backtrackFragment = e4, this.resetTransmuxer(), this.flushBufferGap(e4), this.fragmentTracker.removeFragment(e4), this.fragPrevious = null, this.nextLoadPosition = e4.start, this.state = $n.IDLE;
          }, r2.checkFragmentChanged = function() {
            var e4 = this.media, t3 = null;
            if (e4 && e4.readyState > 1 && false === e4.seeking) {
              var r3 = e4.currentTime;
              if (In.isBuffered(e4, r3) ? t3 = this.getAppendedFrag(r3) : In.isBuffered(e4, r3 + 0.1) && (t3 = this.getAppendedFrag(r3 + 0.1)), t3) {
                this.backtrackFragment = null;
                var n2 = this.fragPlaying, i2 = t3.level;
                n2 && t3.sn === n2.sn && n2.level === i2 || (this.fragPlaying = t3, this.hls.trigger(I.FRAG_CHANGED, { frag: t3 }), n2 && n2.level === i2 || this.hls.trigger(I.LEVEL_SWITCHED, { level: i2 }));
              }
            }
          }, o(t2, [{ key: "nextLevel", get: function() {
            var e4 = this.nextBufferedFrag;
            return e4 ? e4.level : -1;
          } }, { key: "currentFrag", get: function() {
            var e4 = this.media;
            return e4 ? this.fragPlaying || this.getAppendedFrag(e4.currentTime) : null;
          } }, { key: "currentProgramDateTime", get: function() {
            var e4 = this.media;
            if (e4) {
              var t3 = e4.currentTime, r3 = this.currentFrag;
              if (r3 && k(t3) && k(r3.programDateTime)) {
                var n2 = r3.programDateTime + 1e3 * (t3 - r3.start);
                return new Date(n2);
              }
            }
            return null;
          } }, { key: "currentLevel", get: function() {
            var e4 = this.currentFrag;
            return e4 ? e4.level : -1;
          } }, { key: "nextBufferedFrag", get: function() {
            var e4 = this.currentFrag;
            return e4 ? this.followingBufferedFrag(e4) : null;
          } }, { key: "forceStartLoad", get: function() {
            return this._forceStartLoad;
          } }]), t2;
        })(Jn), Bl = (function() {
          function e3(t3) {
            void 0 === t3 && (t3 = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this.started = false, this._emitter = new Sa(), this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null, this.triggeringException = void 0, M(t3.debug || false, "Hls instance");
            var r2 = this.config = Sl(e3.DefaultConfig, t3);
            this.userConfig = t3, r2.progressive && kl(r2);
            var n2 = r2.abrController, i2 = r2.bufferController, a2 = r2.capLevelController, s2 = r2.errorController, o2 = r2.fpsController, l2 = new s2(this), u2 = this.abrController = new n2(this), c2 = this.bufferController = new i2(this), d2 = this.capLevelController = new a2(this), h2 = new o2(this), f2 = new Zt(this), g2 = new gr(this), m2 = r2.contentSteeringController, p2 = m2 ? new m2(this) : null, v2 = this.levelController = new Ll(this, p2), y2 = new An(this), T2 = new Il(this.config), b2 = this.streamController = new Ul(this, y2, T2);
            d2.setStreamController(b2), h2.setStreamController(b2);
            var E2 = [f2, v2, b2];
            p2 && E2.splice(1, 0, p2), this.networkControllers = E2;
            var S2 = [u2, c2, d2, h2, g2, y2];
            this.audioTrackController = this.createController(r2.audioTrackController, E2);
            var A2 = r2.audioStreamController;
            A2 && E2.push(new A2(this, y2, T2)), this.subtitleTrackController = this.createController(r2.subtitleTrackController, E2);
            var k2 = r2.subtitleStreamController;
            k2 && E2.push(new k2(this, y2, T2)), this.createController(r2.timelineController, S2), T2.emeController = this.emeController = this.createController(r2.emeController, S2), this.cmcdController = this.createController(r2.cmcdController, S2), this.latencyController = this.createController(mr, S2), this.coreComponents = S2, E2.push(l2);
            var L2 = l2.onErrorOut;
            "function" == typeof L2 && this.on(I.ERROR, L2, l2);
          }
          e3.isMSESupported = function() {
            return Dl();
          }, e3.isSupported = function() {
            return Cl();
          }, e3.getMediaSource = function() {
            return Et();
          };
          var t2 = e3.prototype;
          return t2.createController = function(e4, t3) {
            if (e4) {
              var r2 = new e4(this);
              return t3 && t3.push(r2), r2;
            }
            return null;
          }, t2.on = function(e4, t3, r2) {
            void 0 === r2 && (r2 = this), this._emitter.on(e4, t3, r2);
          }, t2.once = function(e4, t3, r2) {
            void 0 === r2 && (r2 = this), this._emitter.once(e4, t3, r2);
          }, t2.removeAllListeners = function(e4) {
            this._emitter.removeAllListeners(e4);
          }, t2.off = function(e4, t3, r2, n2) {
            void 0 === r2 && (r2 = this), this._emitter.off(e4, t3, r2, n2);
          }, t2.listeners = function(e4) {
            return this._emitter.listeners(e4);
          }, t2.emit = function(e4, t3, r2) {
            return this._emitter.emit(e4, t3, r2);
          }, t2.trigger = function(e4, t3) {
            if (this.config.debug) return this.emit(e4, e4, t3);
            try {
              return this.emit(e4, e4, t3);
            } catch (t4) {
              if (F.error("An internal error happened while handling event " + e4 + '. Error message: "' + t4.message + '". Here is a stacktrace:', t4), !this.triggeringException) {
                this.triggeringException = true;
                var r2 = e4 === I.ERROR;
                this.trigger(I.ERROR, { type: w.OTHER_ERROR, details: D.INTERNAL_EXCEPTION, fatal: r2, event: e4, error: t4 }), this.triggeringException = false;
              }
            }
            return false;
          }, t2.listenerCount = function(e4) {
            return this._emitter.listenerCount(e4);
          }, t2.destroy = function() {
            F.log("destroy"), this.trigger(I.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach((function(e5) {
              return e5.destroy();
            })), this.networkControllers.length = 0, this.coreComponents.forEach((function(e5) {
              return e5.destroy();
            })), this.coreComponents.length = 0;
            var e4 = this.config;
            e4.xhrSetup = e4.fetchSetup = void 0, this.userConfig = null;
          }, t2.attachMedia = function(e4) {
            F.log("attachMedia"), this._media = e4, this.trigger(I.MEDIA_ATTACHING, { media: e4 });
          }, t2.detachMedia = function() {
            F.log("detachMedia"), this.trigger(I.MEDIA_DETACHING, void 0), this._media = null;
          }, t2.loadSource = function(e4) {
            this.stopLoad();
            var t3 = this.media, r2 = this.url, n2 = this.url = A.buildAbsoluteURL(self.location.href, e4, { alwaysNormalize: true });
            this._autoLevelCapping = -1, this._maxHdcpLevel = null, F.log("loadSource:" + n2), t3 && r2 && (r2 !== n2 || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t3)), this.trigger(I.MANIFEST_LOADING, { url: e4 });
          }, t2.startLoad = function(e4) {
            void 0 === e4 && (e4 = -1), F.log("startLoad(" + e4 + ")"), this.started = true, this.networkControllers.forEach((function(t3) {
              t3.startLoad(e4);
            }));
          }, t2.stopLoad = function() {
            F.log("stopLoad"), this.started = false, this.networkControllers.forEach((function(e4) {
              e4.stopLoad();
            }));
          }, t2.resumeBuffering = function() {
            this.started && this.networkControllers.forEach((function(e4) {
              "fragmentLoader" in e4 && e4.startLoad(-1);
            }));
          }, t2.pauseBuffering = function() {
            this.networkControllers.forEach((function(e4) {
              "fragmentLoader" in e4 && e4.stopLoad();
            }));
          }, t2.swapAudioCodec = function() {
            F.log("swapAudioCodec"), this.streamController.swapAudioCodec();
          }, t2.recoverMediaError = function() {
            F.log("recoverMediaError");
            var e4 = this._media;
            this.detachMedia(), e4 && this.attachMedia(e4);
          }, t2.removeLevel = function(e4) {
            this.levelController.removeLevel(e4);
          }, t2.setAudioOption = function(e4) {
            var t3;
            return null == (t3 = this.audioTrackController) ? void 0 : t3.setAudioOption(e4);
          }, t2.setSubtitleOption = function(e4) {
            var t3;
            return null == (t3 = this.subtitleTrackController) || t3.setSubtitleOption(e4), null;
          }, o(e3, [{ key: "levels", get: function() {
            var e4 = this.levelController.levels;
            return e4 || [];
          } }, { key: "currentLevel", get: function() {
            return this.streamController.currentLevel;
          }, set: function(e4) {
            F.log("set currentLevel:" + e4), this.levelController.manualLevel = e4, this.streamController.immediateLevelSwitch();
          } }, { key: "nextLevel", get: function() {
            return this.streamController.nextLevel;
          }, set: function(e4) {
            F.log("set nextLevel:" + e4), this.levelController.manualLevel = e4, this.streamController.nextLevelSwitch();
          } }, { key: "loadLevel", get: function() {
            return this.levelController.level;
          }, set: function(e4) {
            F.log("set loadLevel:" + e4), this.levelController.manualLevel = e4;
          } }, { key: "nextLoadLevel", get: function() {
            return this.levelController.nextLoadLevel;
          }, set: function(e4) {
            this.levelController.nextLoadLevel = e4;
          } }, { key: "firstLevel", get: function() {
            return Math.max(this.levelController.firstLevel, this.minAutoLevel);
          }, set: function(e4) {
            F.log("set firstLevel:" + e4), this.levelController.firstLevel = e4;
          } }, { key: "startLevel", get: function() {
            var e4 = this.levelController.startLevel;
            return -1 === e4 && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : e4;
          }, set: function(e4) {
            F.log("set startLevel:" + e4), -1 !== e4 && (e4 = Math.max(e4, this.minAutoLevel)), this.levelController.startLevel = e4;
          } }, { key: "capLevelToPlayerSize", get: function() {
            return this.config.capLevelToPlayerSize;
          }, set: function(e4) {
            var t3 = !!e4;
            t3 !== this.config.capLevelToPlayerSize && (t3 ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t3);
          } }, { key: "autoLevelCapping", get: function() {
            return this._autoLevelCapping;
          }, set: function(e4) {
            this._autoLevelCapping !== e4 && (F.log("set autoLevelCapping:" + e4), this._autoLevelCapping = e4, this.levelController.checkMaxAutoUpdated());
          } }, { key: "bandwidthEstimate", get: function() {
            var e4 = this.abrController.bwEstimator;
            return e4 ? e4.getEstimate() : NaN;
          }, set: function(e4) {
            this.abrController.resetEstimator(e4);
          } }, { key: "ttfbEstimate", get: function() {
            var e4 = this.abrController.bwEstimator;
            return e4 ? e4.getEstimateTTFB() : NaN;
          } }, { key: "maxHdcpLevel", get: function() {
            return this._maxHdcpLevel;
          }, set: function(e4) {
            vr(e4) && this._maxHdcpLevel !== e4 && (this._maxHdcpLevel = e4, this.levelController.checkMaxAutoUpdated());
          } }, { key: "autoLevelEnabled", get: function() {
            return -1 === this.levelController.manualLevel;
          } }, { key: "manualLevel", get: function() {
            return this.levelController.manualLevel;
          } }, { key: "minAutoLevel", get: function() {
            var e4 = this.levels, t3 = this.config.minAutoBitrate;
            if (!e4) return 0;
            for (var r2 = e4.length, n2 = 0; n2 < r2; n2++) if (e4[n2].maxBitrate >= t3) return n2;
            return 0;
          } }, { key: "maxAutoLevel", get: function() {
            var e4, t3 = this.levels, r2 = this.autoLevelCapping, n2 = this.maxHdcpLevel;
            if (e4 = -1 === r2 && null != t3 && t3.length ? t3.length - 1 : r2, n2) for (var i2 = e4; i2--; ) {
              var a2 = t3[i2].attrs["HDCP-LEVEL"];
              if (a2 && a2 <= n2) return i2;
            }
            return e4;
          } }, { key: "firstAutoLevel", get: function() {
            return this.abrController.firstAutoLevel;
          } }, { key: "nextAutoLevel", get: function() {
            return this.abrController.nextAutoLevel;
          }, set: function(e4) {
            this.abrController.nextAutoLevel = e4;
          } }, { key: "playingDate", get: function() {
            return this.streamController.currentProgramDateTime;
          } }, { key: "mainForwardBufferInfo", get: function() {
            return this.streamController.getMainFwdBufferInfo();
          } }, { key: "allAudioTracks", get: function() {
            var e4 = this.audioTrackController;
            return e4 ? e4.allAudioTracks : [];
          } }, { key: "audioTracks", get: function() {
            var e4 = this.audioTrackController;
            return e4 ? e4.audioTracks : [];
          } }, { key: "audioTrack", get: function() {
            var e4 = this.audioTrackController;
            return e4 ? e4.audioTrack : -1;
          }, set: function(e4) {
            var t3 = this.audioTrackController;
            t3 && (t3.audioTrack = e4);
          } }, { key: "allSubtitleTracks", get: function() {
            var e4 = this.subtitleTrackController;
            return e4 ? e4.allSubtitleTracks : [];
          } }, { key: "subtitleTracks", get: function() {
            var e4 = this.subtitleTrackController;
            return e4 ? e4.subtitleTracks : [];
          } }, { key: "subtitleTrack", get: function() {
            var e4 = this.subtitleTrackController;
            return e4 ? e4.subtitleTrack : -1;
          }, set: function(e4) {
            var t3 = this.subtitleTrackController;
            t3 && (t3.subtitleTrack = e4);
          } }, { key: "media", get: function() {
            return this._media;
          } }, { key: "subtitleDisplay", get: function() {
            var e4 = this.subtitleTrackController;
            return !!e4 && e4.subtitleDisplay;
          }, set: function(e4) {
            var t3 = this.subtitleTrackController;
            t3 && (t3.subtitleDisplay = e4);
          } }, { key: "lowLatencyMode", get: function() {
            return this.config.lowLatencyMode;
          }, set: function(e4) {
            this.config.lowLatencyMode = e4;
          } }, { key: "liveSyncPosition", get: function() {
            return this.latencyController.liveSyncPosition;
          } }, { key: "latency", get: function() {
            return this.latencyController.latency;
          } }, { key: "maxLatency", get: function() {
            return this.latencyController.maxLatency;
          } }, { key: "targetLatency", get: function() {
            return this.latencyController.targetLatency;
          } }, { key: "drift", get: function() {
            return this.latencyController.drift;
          } }, { key: "forceStartLoad", get: function() {
            return this.streamController.forceStartLoad;
          } }], [{ key: "version", get: function() {
            return "1.5.5-0.canary.9893";
          } }, { key: "Events", get: function() {
            return I;
          } }, { key: "ErrorTypes", get: function() {
            return w;
          } }, { key: "ErrorDetails", get: function() {
            return D;
          } }, { key: "DefaultConfig", get: function() {
            return e3.defaultConfig ? e3.defaultConfig : bl;
          }, set: function(t3) {
            e3.defaultConfig = t3;
          } }]), e3;
        })();
        return Bl.defaultConfig = void 0, Bl;
      })();
    })(false);
  }
};
