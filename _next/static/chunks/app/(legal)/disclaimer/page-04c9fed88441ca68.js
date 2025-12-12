(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5261], {
        6182: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 9775)), Promise.resolve().then(n.t.bind(n, 6874, 23))
        },
        9775: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                SubtleBackground: () => c,
                SubtleHover: () => s,
                default: () => i
            });
            var a = n(5155),
                r = n(2115);

            function i(e) {
                let {
                    children: t,
                    animation: n = "gentle-fade-up",
                    delay: i = 0,
                    threshold: s = .1,
                    once: c = !0,
                    className: o = "",
                    disabled: l = !1
                } = e, {
                    ref: u,
                    isVisible: d,
                    isReduced: f,
                    isMobile: m
                } = function() {
                    let {
                        threshold: e = .1,
                        delay: t = 0,
                        once: n = !0,
                        disabled: a = !1
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [i, s] = (0, r.useState)(!1), [c, o] = (0, r.useState)(!1), l = (0, r.useRef)(null), u = (0, r.useRef)(null);
                    return (0, r.useEffect)(() => {
                        o(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
                        let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
                            t = () => o(e.matches);
                        return e.addEventListener("change", t), () => e.removeEventListener("change", t)
                    }, []), (0, r.useEffect)(() => {
                        if (a || c || !l.current) return void s(!0);
                        let r = l.current;
                        return u.current = new IntersectionObserver(e => {
                            let [a] = e;
                            a.isIntersecting ? (setTimeout(() => {
                                s(!0)
                            }, t), n && u.current && u.current.unobserve(r)) : n || s(!1)
                        }, {
                            threshold: e,
                            rootMargin: "50px 0px"
                        }), u.current.observe(r), () => {
                            u.current && u.current.disconnect()
                        }
                    }, [e, t, n, a, c]), {
                        ref: l,
                        isVisible: i || c || a,
                        isReduced: c,
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    }
                }({
                    threshold: s,
                    delay: i,
                    once: c,
                    disabled: l
                });
                return (0, a.jsx)("div", {
                    ref: u,
                    className: "".concat((() => {
                        if (f || l) return "opacity-100 transform-none";
                        let e = "transition-all duration-500 ease-out",
                            t = m ? "mobile:" : "";
                        if (d) return "".concat(e, " opacity-100 translate-y-0 translate-x-0 scale-100");
                        switch (n) {
                            case "gentle-fade-up":
                                return "".concat(e, " opacity-0 ").concat(t, "translate-y-2 translate-y-4");
                            case "gentle-slide-in":
                                return "".concat(e, " opacity-0 ").concat(t, "-translate-x-2 -translate-x-4");
                            case "gentle-slide-right":
                                return "".concat(e, " opacity-0 ").concat(t, "translate-x-2 translate-x-4");
                            case "gentle-scale":
                                return "".concat(e, " opacity-0 scale-98");
                            default:
                                return "".concat(e, " opacity-0 translate-y-4")
                        }
                    })(), " ").concat(o),
                    style: {
                        animationDelay: f ? "0ms" : "".concat(i, "ms")
                    },
                    children: t
                })
            }

            function s(e) {
                let {
                    children: t,
                    type: n = "lift",
                    className: r = "",
                    disabled: i = !1
                } = e;
                return i ? (0, a.jsx)("div", {
                    className: r,
                    children: t
                }) : (0, a.jsx)("div", {
                    className: "".concat({
                        lift: "transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:will-change-transform",
                        glow: "transition-shadow duration-300 ease-out hover:shadow-lg hover:shadow-primary/10",
                        scale: "transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
                    } [n], " ").concat(r),
                    style: {
                        backfaceVisibility: "hidden"
                    },
                    children: t
                })
            }

            function c(e) {
                let {
                    children: t,
                    type: n = "float",
                    intensity: r = "subtle",
                    className: i = "",
                    disabled: s = !1,
                    style: c = {}
                } = e;
                return s ? (0, a.jsx)("div", {
                    className: i,
                    style: c,
                    children: t
                }) : (0, a.jsx)("div", {
                    className: "".concat({
                        float: "animate-gentle-float",
                        breathing: "animate-gentle-breathing",
                        "gentle-parallax": "transform-gpu will-change-transform"
                    } [n], " ").concat(i),
                    style: {
                        "--float-distance": {
                            minimal: "1px",
                            subtle: "2px",
                            gentle: "4px"
                        } [r],
                        animationDuration: "float" === n ? "8s" : "4s",
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                        ...c
                    },
                    children: t
                })
            }
        }
    },
    e => {
        e.O(0, [6874, 8441, 5964, 7358], () => e(e.s = 6182)), _N_E = e.O()
    }
]);