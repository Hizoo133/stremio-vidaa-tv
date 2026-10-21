// Deconstructed Theater 1.10.0 modules (models.js)
module.exports = {
  6066: (e, t, n) => {
    "use strict";
    n.d(t, { tv: () => U, gK: () => Y, Pj: () => H });
    var r = n(2555), o = (n(4999), n(6471), n(6399), n(1012), n(7621), n(7100), n(2363)), i = n(2408), a = n(8688);
    const l = ({ model: e2, modelAction: t2, defaultState: n2, parseState: i2, preload: l2 }) => {
      const { transport: s2 } = (0, o.z)(), c2 = (0, a.SR)(0), [u2, d2] = (0, r.n5)(null != l2 && l2), [h2, f2] = (0, r.n5)(n2);
      return { model: e2, loaded: u2, state: h2, update: (e3) => {
        c2((() => {
          if (u2() && e3) {
            const t3 = i2 ? i2(e3) : e3;
            f2(((e4) => ({ ...e4, ...t3 })));
          }
        }));
      }, load: async (n3) => {
        d2(true), await s2.dispatch({ action: "Load", args: { model: t2, args: n3 } }, e2);
      }, unload: async () => {
        d2(false), await s2.dispatch({ action: "Unload" }, e2), f2((() => n2));
      }, dispatchAction: (n3, r2) => t2 ? s2.dispatch({ action: t2, args: { action: n3, args: r2 } }, e2) : Promise.resolve() };
    }, s = (e2) => e2 && "string" == typeof e2.type && e2.content ? { ready: "Ready" === e2.type ? e2.content : null, error: "Err" === e2.type ? "object" == typeof e2.content ? "string" == typeof e2.content.type && "object" == typeof e2.content.content ? e2.content.content.message : e2.content.type : e2.content : null } : { ready: null, error: null }, c = { code: { ready: null, error: null }, data: { ready: null, error: null } }, u = (e2) => ({ code: s(null == e2 ? void 0 : e2.code), data: s(null == e2 ? void 0 : e2.data) }), d = () => {
      const e2 = l({ model: "auth_link", modelAction: "Link", defaultState: c, parseState: u }), { code: t2, data: n2 } = (0, i.J)((() => e2.state()));
      return { ...e2, readData: () => e2.dispatchAction("ReadData"), info: () => t2().ready, authKey: () => {
        var e3, t3;
        return null !== (e3 = null === (t3 = n2().ready) || void 0 === t3 ? void 0 : t3.authKey) && void 0 !== e3 ? e3 : null;
      } };
    }, h = { catalogs: [] }, f = (e2) => ({ catalogs: e2.catalogs.map(((e3) => ({ ...e3, content: s(e3.content) }))) }), v = () => {
      const e2 = l({ model: "board", modelAction: "CatalogsWithExtra", defaultState: h, parseState: f }), t2 = (0, r.To)((() => e2.state().catalogs));
      return { ...e2, catalogs: t2, load: () => e2.load({ type: null, extra: [] }), loadCatalogs: (t3) => e2.dispatchAction("LoadRange", { start: Math.max(0, t3 - 2), end: t3 + 2 }) };
    }, p = { items: [] }, m = () => {
      const e2 = l({ model: "continue_watching_preview", defaultState: p, preload: true });
      return { ...e2, items: () => e2.state().items };
    }, g = { auth: null, settings: {}, searchHistory: [], newVideos: {} }, y = (e2) => ({ ...e2.profile, searchHistory: e2.searchHistory, newVideos: e2.notifications.items }), b = () => {
      const e2 = l({ model: "ctx", modelAction: "Ctx", defaultState: g, parseState: y, preload: true }), { auth: t2, settings: n2, searchHistory: o2 } = (0, i.J)(e2.state), a2 = (0, r.To)((() => {
        var e3;
        return Boolean(null === (e3 = t2()) || void 0 === e3 ? void 0 : e3.key);
      })), s2 = (0, r.To)((() => {
        var e3, n3;
        return null !== (e3 = null === (n3 = t2()) || void 0 === n3 ? void 0 : n3.user) && void 0 !== e3 ? e3 : null;
      }));
      return { ...e2, isAuthenticated: a2, user: s2, settings: n2, searchHistory: o2, authenticate: (t3) => e2.dispatchAction("Authenticate", { type: "LoginWithToken", token: t3 }), logout: () => e2.dispatchAction("Logout"), syncUser: () => e2.dispatchAction("PullUserFromAPI"), syncAddons: () => e2.dispatchAction("PullAddonsFromAPI"), syncLibrary: () => e2.dispatchAction("SyncLibraryWithAPI"), syncNotifications: () => e2.dispatchAction("PullNotifications"), addToLibrary: (t3) => e2.dispatchAction("AddToLibrary", t3), removeFromLibrary: (t3) => e2.dispatchAction("RemoveFromLibrary", t3.id), rewindLibraryItem: (t3) => e2.dispatchAction("RewindLibraryItem", t3.id), updateSettings: (t3) => e2.dispatchAction("UpdateSettings", { ...n2(), ...t3 }), clearSearchHistory: () => e2.dispatchAction("ClearSearchHistory") };
    }, w = { catalog: null, selectable: { types: [], catalogs: [], extra: [] } }, k = (e2) => ({ ...e2, catalog: { ...e2.catalog, content: s(e2.catalog ? e2.catalog.content : {}) } }), x = () => {
      const e2 = l({ model: "discover", modelAction: "CatalogWithFilters", defaultState: w, parseState: k }), { catalog: t2, selectable: n2 } = (0, i.J)((() => e2.state()));
      return { ...e2, catalog: t2, selectable: n2, loadCatalog: (t3, n3, r2, o2) => e2.load({ request: { base: t3, path: { resource: "catalog", type: n3, id: r2, extra: o2 } } }), loadNextPage: () => e2.dispatchAction("LoadNextPage") };
    }, S = { catalog: [], selected: null, selectable: { types: [], sorts: [] } }, A = () => {
      const e2 = l({ model: "library", modelAction: "LibraryWithFilters", defaultState: S }), { catalog: t2, selectable: n2 } = (0, i.J)((() => e2.state()));
      return { ...e2, catalog: t2, selectable: n2, load: (t3, n3) => e2.load({ request: { type: t3, sort: n3 } }), loading: () => !e2.state().selected, loadNextPage: () => e2.dispatchAction("LoadNextPage") };
    }, T = { selected: null, metaItem: null, addonStreams: [], ratingInfo: null, libraryItem: null }, M = (e2) => {
      var t2;
      return { ...e2, metaItem: s(null == e2 || null === (t2 = e2.metaItem) || void 0 === t2 ? void 0 : t2.content), addonStreams: e2.streams.map(((e3) => ({ ...e3, content: s(e3.content) }))), ratingInfo: null != e2 && e2.ratingInfo ? s(e2.ratingInfo) : null };
    }, B = () => {
      const e2 = l({ model: "meta_details", modelAction: "MetaDetails", defaultState: T, parseState: M }), { ratingInfo: t2, metaItem: n2, libraryItem: r2 } = (0, i.J)(e2.state), o2 = () => {
        var e3, t3;
        return null !== (e3 = null === (t3 = n2()) || void 0 === t3 ? void 0 : t3.ready) && void 0 !== e3 ? e3 : null;
      };
      return { ...e2, loading: () => {
        var e3, t3;
        return !(null !== (e3 = n2()) && void 0 !== e3 && e3.ready || null !== (t3 = n2()) && void 0 !== t3 && t3.error);
      }, error: () => {
        var e3, t3;
        return null !== (e3 = null === (t3 = n2()) || void 0 === t3 ? void 0 : t3.error) && void 0 !== e3 ? e3 : null;
      }, metadata: o2, supportsRating: () => !!t2(), rating: () => {
        var e3, n3;
        return null !== (e3 = null === (n3 = t2()) || void 0 === n3 || null === (n3 = n3.ready) || void 0 === n3 ? void 0 : n3.status) && void 0 !== e3 ? e3 : null;
      }, lastWatchedVideoId: () => {
        var e3, t3;
        return null !== (e3 = null === (t3 = r2()) || void 0 === t3 || null === (t3 = t3.state) || void 0 === t3 ? void 0 : t3.video_id) && void 0 !== e3 ? e3 : null;
      }, load: ({ type: t3, metaId: n3, videoId: r3, guessStream: o3 }) => {
        t3 && n3 && e2.load({ metaPath: { resource: "meta", id: n3, type: t3, extra: [] }, streamPath: r3 ? { resource: "stream", type: t3, id: r3, extra: [] } : null, guessStream: o3 });
      }, setWatched: (t3) => {
        e2.dispatchAction("MarkAsWatched", t3);
      }, toggleVideoWatched: ({ id: t3, released: n3, watched: r3 }) => {
        e2.dispatchAction("MarkVideoAsWatched", [{ id: t3, released: n3 }, !r3]);
      }, setRating: (n3) => {
        var r3, i2;
        const a2 = null === (r3 = o2()) || void 0 === r3 ? void 0 : r3.id, l2 = (null === (i2 = t2()) || void 0 === i2 || null === (i2 = i2.ready) || void 0 === i2 ? void 0 : i2.status) === n3 ? null : n3;
        a2 && e2.dispatchAction("Rate", l2);
      } };
    };
    n(4189), n(4692), n(1273), n(3384);
    const j = ({ name: e2, defaultState: t2 }) => {
      const n2 = (0, a.SR)(0), [o2, i2] = (0, r.n5)(t2), l2 = (e3) => {
        i2(((t3) => ({ ...t3, ...e3 })));
      };
      return (0, a.k9)(o2, ((t3) => {
        n2((async () => {
          try {
            await localStorage.setItem(e2, JSON.stringify(t3));
          } catch (t4) {
            console.error(`Failed to save '${e2}' state:`, t4);
          }
        }));
      })), (0, r.Rc)((async () => {
        const n3 = await localStorage.getItem(e2);
        if (n3) try {
          const e3 = JSON.parse(n3), r2 = Object.fromEntries(Object.keys(t2).filter(((t3) => Object.keys(e3).includes(t3))).map(((t3) => [[t3], e3[t3]])));
          l2(r2);
        } catch (t3) {
          console.error(`Failed to initialize '${e2}' store state:`, t3);
        }
      })), { state: o2, update: l2 };
    }, E = {}, I = () => {
      const e2 = j({ name: "routes", defaultState: E });
      return { ...e2, getCache: (t2) => e2.state()[t2], setCache: (t2, n2) => {
        e2.update({ [t2]: n2 });
      } };
    }, C = { libraryItem: null, metaItem: null, nextVideo: null, selected: null, seriesInfo: null, streamState: null, subtitles: [], title: null }, P = (e2) => ({ ...e2, metaItem: s(e2.metaItem) }), z = () => {
      const { transport: e2 } = (0, o.z)(), t2 = l({ model: "player", modelAction: "Player", defaultState: C, parseState: P });
      return { ...t2, load: async ({ stream: n2, streamTransportUrl: r2, metaTransportUrl: o2, type: i2, id: a2, videoId: l2 }) => {
        const s2 = await e2.decodeStream(n2);
        if (null !== s2) return t2.load({ stream: s2, streamRequest: r2 && i2 && l2 ? { base: r2, path: { resource: "stream", type: i2, id: l2, extra: [] } } : null, metaRequest: o2 && i2 && a2 ? { base: o2, path: { resource: "meta", type: i2, id: a2, extra: [] } } : null, subtitlesPath: i2 && l2 ? { resource: "subtitles", type: i2, id: l2, extra: [] } : null });
      }, ended: () => t2.dispatchAction("Ended"), updateVideoParams: (e3) => t2.dispatchAction("VideoParamsChanged", { videoParams: e3 }), updateTime: (e3, n2, r2) => t2.dispatchAction("TimeChanged", { time: e3, duration: n2, device: r2 }), updateSeek: (e3, n2, r2) => t2.dispatchAction("Seek", { time: e3, duration: n2, device: r2 }), updatePaused: (e3) => t2.dispatchAction("PausedChanged", { paused: e3 }), updateStream: (e3) => t2.dispatchAction("StreamStateChanged", { state: { ...t2.state().streamState, ...e3 } }) };
    }, L = { catalogs: [] }, O = (e2) => ({ catalogs: e2.catalogs.map(((e3) => ({ ...e3, content: s(e3.content) }))) }), R = () => {
      const e2 = l({ model: "search", modelAction: "CatalogsWithExtra", defaultState: L, parseState: O }), t2 = (0, a.SR)(500);
      return { ...e2, load: (t3) => e2.load({ extra: [["search", t3]] }), loadCatalogs: (n2) => new Promise(((r2) => {
        t2((() => r2(e2.dispatchAction("LoadRange", { start: Math.max(0, n2 - 1), end: n2 + 1 }))));
      })) };
    }, N = { baseUrl: null, transportUrl: null, settings: null }, F = (e2) => ({ baseUrl: e2.baseUrl, transportUrl: e2.selected ? e2.selected.transportUrl : null, settings: s(e2.settings) }), q = () => {
      const e2 = l({ model: "streaming_server", modelAction: "StreamingServer", defaultState: N, parseState: F, preload: true }), { baseUrl: t2, settings: n2 } = (0, i.J)(e2.state);
      return { ...e2, version: () => {
        var e3, t3;
        return null !== (e3 = null === (t3 = n2()) || void 0 === t3 || null === (t3 = t3.ready) || void 0 === t3 ? void 0 : t3.serverVersion) && void 0 !== e3 ? e3 : null;
      }, online: () => Boolean(t2()), reload: () => e2.dispatchAction("Reload") };
    }, D = { theme: "default", animations: true, backgroundBlur: false }, _ = () => {
      const e2 = j({ name: "theme", defaultState: D }), { theme: t2, animations: n2, backgroundBlur: r2 } = (0, i.J)((() => e2.state()));
      return { ...e2, theme: t2, animations: n2, animationsClass: () => ({ "animations-disabled": !n2() }), backgroundBlur: r2, setTheme: (t3) => {
        e2.update({ theme: t3 });
      }, setBackgroundBlur: (t3) => {
        e2.update({ backgroundBlur: t3 });
      }, setAnimations: (t3) => {
        e2.update({ animations: t3 });
      } };
    }, V = (0, r.q6)({}), U = (e2) => {
      const { transport: t2, onNewState: n2 } = (0, o.z)(), [i2, a2] = (0, r.n5)(false), l2 = { ctx: b(), streamingServer: q(), authLink: d(), search: R(), continueWatching: m(), board: v(), discover: x(), library: A(), metaDetails: B(), player: z() }, s2 = { theme: _(), pages: I() }, c2 = (e3) => Promise.all(e3.map((async (e4) => {
        const [n3] = Object.entries(l2).find((([, t3]) => t3.model === e4)) || [];
        if (n3) {
          const e5 = l2[n3];
          if (e5.loaded()) {
            const n4 = await t2.getState(e5.model);
            n4 && e5.update(n4);
          }
        }
      })));
      return (0, r.Rc)((async () => {
        n2(((e3) => {
          c2(e3);
        })), await c2(Object.values(l2).map((({ model: e3 }) => e3))), a2(true);
      })), (0, r.a0)(V.Provider, { value: { modelStores: l2, stores: s2 }, get children() {
        return (0, r.a0)(r.wv, { get when() {
          return i2();
        }, get fallback() {
          return e2.loading;
        }, get children() {
          return e2.children;
        } });
      } });
    }, Y = () => {
      const { modelStores: e2 } = (0, r.NT)(V);
      return e2;
    }, H = () => {
      const { stores: e2 } = (0, r.NT)(V);
      return e2;
    };
  }
};
