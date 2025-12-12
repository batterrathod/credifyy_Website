(() => {
    "";

    var e = {};  // Module definitions
    var t = {};  // Module cache

    // Module loader
    function r(o) {
        var cached = t[o];
        if (cached !== undefined) return cached.exports;

        var module = t[o] = { exports: {} }, threw = true;

        try {
            e[o](module, module.exports, r);
            threw = false;
        } finally {
            if (threw) delete t[o];
        }

        return module.exports;
    }

    r.m = e;

    // Runtime for handling module priority
    (() => {
        var queue = [];
        r.O = (result, chunkIds, fn, priority) => {
            if (chunkIds) {
                priority = priority || 0;
                let i = queue.length;

                while (i > 0 && queue[i - 1][2] > priority) {
                    queue[i] = queue[i - 1];
                    i--;
                }

                queue[i] = [chunkIds, fn, priority];
                return;
            }

            let smallestPri = Infinity;

            for (let i = 0; i < queue.length; i++) {
                let [ids, fn, pri] = queue[i];
                let allLoaded = true;

                for (let j = 0; j < ids.length; j++) {
                    if (!(pri === 0 || smallestPri >= pri) ||
                        !Object.keys(r.O).every(key => r.O[key](ids[j]))
                    ) {
                        allLoaded = false;
                        pri < smallestPri && (smallestPri = pri);
                    }
                }

                if (allLoaded) {
                    queue.splice(i--, 1);
                    var out = fn();
                    out !== undefined && (result = out);
                }
            }

            return result;
        };
    })();

    // Default export compatibility
    r.n = mod => {
        var getter = mod && mod.__esModule ? () => mod.default : () => mod;
        r.d(getter, { a: getter });
        return getter;
    };

    // Object.getPrototypeOf shim
    (() => {
        var gProto = Object.getPrototypeOf
            ? obj => Object.getPrototypeOf(obj)
            : obj => obj.__proto__;

        r.t = function (value, mode) {
            if (mode & 1) value = this(value);

            if (mode & 8) return value;

            if (typeof value === "object" && value) {
                if (mode & 4 && value.__esModule) return value;
                if (mode & 16 && typeof value.then === "function") return value;
            }

            var wrapper = Object.create(null);
            r.r(wrapper);
            var desc = {};

            var chain = value;
            var stopList = [null, gProto({}), gProto([]), gProto(gProto)];

            while (typeof chain === "object" && !stopList.includes(chain)) {
                Object.getOwnPropertyNames(chain).forEach(name => {
                    desc[name] = () => value[name];
                });

                chain = gProto(chain);
            }

            desc.default = () => value;
            r.d(wrapper, desc);

            return wrapper;
        };
    })();

    // Define exported getters
    r.d = (exports, definition) => {
        for (var key in definition) {
            if (r.o(definition, key) && !r.o(exports, key)) {
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            }
        }
    };

    r.f = {};
    r.e = id => Promise.all(
        Object.keys(r.f).reduce((promises, key) => {
            r.f[key](id, promises);
            return promises;
        }, [])
    );

    // Chunk file naming
    r.u = id => id + ".js";
    r.miniCssF = id => id + ".css";

    // Global object resolution
    r.g = (function () {
        if (typeof globalThis === "object") return globalThis;
        try { return this || Function("return this")(); }
        catch (e) {
            if (typeof window === "object") return window;
        }
    })();

    r.o = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

    // Load JS file dynamically
    (() => {
        var inProgress = {};
        var webpackPrefix = "_N_E:";

        r.l = (url, callback, chunkId, key) => {
            if (inProgress[url]) {
                inProgress[url].push(callback);
                return;
            }

            var script, needAttach;

            if (chunkId !== undefined) {
                for (let tag of document.getElementsByTagName("script")) {
                    if (tag.src === url || tag.getAttribute("data-webpack") === webpackPrefix + chunkId) {
                        script = tag;
                        break;
                    }
                }
            }

            if (!script) {
                needAttach = true;
                script = document.createElement("script");
                script.charset = "utf-8";
                script.timeout = 120;

                r.nc && script.setAttribute("nonce", r.nc);
                script.setAttribute("data-webpack", webpackPrefix + chunkId);
                script.src = r.tu(url);
            }

            inProgress[url] = [callback];

            var timeout = setTimeout(() => {
                onScriptEvent({ type: "timeout", target: script });
            }, 120000);

            function onScriptEvent(evt) {
                script.onerror = script.onload = null;
                clearTimeout(timeout);

                var listeners = inProgress[url];
                delete inProgress[url];

                if (script.parentNode) script.parentNode.removeChild(script);

                listeners.forEach(cb => cb(evt));
            }

            script.onerror = onScriptEvent;
            script.onload = onScriptEvent;

            if (needAttach) document.head.appendChild(script);
        };
    })();

    // Mark module as ESModule
    r.r = exports => {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports, "__esModule", { value: true });
    };

    // Trusted Types policy
    (() => {
        var policy;

        r.tt = () => {
            if (policy === undefined) {
                policy = {
                    createScriptURL: x => x
                };

                if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
                    policy = trustedTypes.createPolicy("nextjs#bundler", policy);
                }
            }
            return policy;
        };
    })();

    r.tu = url => r.tt().createScriptURL(url);
    r.p = "/_next/";
    r.nc = undefined;

    // Chunk loading logic
    (() => {
        var installedChunks = {
            8068: 0,
            2533: 0,
            1559: 0,
            8257: 0
        };

        r.f.j = (chunkId, promises) => {
            var installed = installedChunks[chunkId];

            if (installed !== 0) {
                if (installed) {
                    promises.push(installed[2]);
                } else if (/^(1559|2533|8068|8257)$/.test(chunkId)) {
                    installedChunks[chunkId] = 0;
                } else {
                    var promise = new Promise((resolve, reject) =>
                        installed = installedChunks[chunkId] = [resolve, reject]
                    );

                    promises.push(installed[2] = promise);

                    var url = r.p + r.u(chunkId);
                    var error = new Error();

                    r.l(url, event => {
                        if (installedChunks[chunkId] !== undefined && installedChunks[chunkId] !== 0) {
                            var type = event && (event.type === "load" ? "missing" : event.type);
                            var request = event && event.target && event.target.src;

                            error.message =
                                "Loading chunk " + chunkId + " failed.\n(" + type + ": " + request + ")";
                            error.name = "ChunkLoadError";
                            error.type = type;
                            error.request = request;

                            installed[1](error);
                        }
                    }, "chunk-" + chunkId, chunkId);
                }
            }
        };

        r.O.j = id => installedChunks[id] === 0;

        var webpackQueueCallback = (base, data) => {
            var [chunkIds, moreModules, runtime] = data;
            var moduleId, chunkId;

            if (chunkIds.some(id => installedChunks[id] !== 0)) {
                for (moduleId in moreModules) r.o(moreModules, moduleId) && (r.m[moduleId] = moreModules[moduleId]);
                if (runtime) var res = runtime(r);
            }

            if (base) base(data);

            for (chunkId of chunkIds) {
                if (installedChunks[chunkId] && installedChunks[chunkId][0]) {
                    installedChunks[chunkId][0]();
                }
                installedChunks[chunkId] = 0;
            }

            return r.O(res);
        };

        var chunkArray = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        chunkArray.forEach(webpackQueueCallback.bind(null, 0));
        chunkArray.push = webpackQueueCallback.bind(null, chunkArray.push.bind(chunkArray));
    })();
})();
