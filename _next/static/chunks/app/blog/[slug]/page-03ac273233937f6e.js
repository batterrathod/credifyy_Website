(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5953], {
        7032: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => n
            });
            var a = r(5155),
                o = r(2115);

            function n(e) {
                let {
                    url: t,
                    title: r,
                    description: n,
                    hashtags: s = []
                } = e, [i, l] = (0, o.useState)(!1), c = encodeURIComponent(t), h = encodeURIComponent(r), d = encodeURIComponent(n), g = s.map(e => encodeURIComponent(e)).join(","), m = {
                    facebook: "https://www.facebook.com/sharer/sharer.php?u=".concat(c, "&quote=").concat(h),
                    twitter: "https://twitter.com/intent/tweet?url=".concat(c, "&text=").concat(h).concat(g ? "&hashtags=".concat(g) : ""),
                    linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=".concat(c, "&title=").concat(h, "&summary=").concat(d),
                    whatsapp: "https://wa.me/?text=".concat(h, "%20").concat(c)
                }, u = e => {
                    let t = m[e],
                        r = window.open(t, "share", "width=600,height=400,scrollbars=yes,resizable=yes");
                    r && r.focus()
                }, x = async () => {
                    try {
                        await navigator.clipboard.writeText(t), l(!0), setTimeout(() => l(!1), 2e3)
                    } catch (r) {
                        let e = document.createElement("textarea");
                        e.value = t, document.body.appendChild(e), e.select();
                        try {
                            document.execCommand("copy"), l(!0), setTimeout(() => l(!1), 2e3)
                        } catch (e) {}
                        document.body.removeChild(e)
                    }
                };
                return (0, a.jsx)("div", {
                    className: "mt-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700",
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col md:flex-row items-center justify-between",
                        children: [(0, a.jsxs)("div", {
                            className: "mb-4 md:mb-0",
                            children: [(0, a.jsx)("h3", {
                                className: "text-lg font-bold text-gray-900 dark:text-white mb-1",
                                children: "Found this helpful?"
                            }), (0, a.jsx)("p", {
                                className: "text-gray-600 dark:text-gray-400",
                                children: "Share this article with others who could benefit."
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [(0, a.jsx)("span", {
                                className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                children: "Share:"
                            }), (0, a.jsx)("button", {
                                onClick: () => u("facebook"),
                                className: "w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group",
                                title: "Share on Facebook",
                                "aria-label": "Share on Facebook",
                                children: (0, a.jsx)("svg", {
                                    className: "w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, a.jsx)("path", {
                                        d: "M12 2.04c-5.5 0-10.04 4.48-10.04 10.04 0 5 3.66 9.13 8.44 9.88v-7H7.9v-2.88h2.5V9.85c0-2.42 1.44-3.76 3.65-3.76 1.06 0 2.17.19 2.17.19v2.38h-1.22c-1.2 0-1.58.75-1.58 1.51v1.81h2.68l-.43 2.88h-2.25v7c4.78-.75 8.44-4.88 8.44-9.88C22.04 6.52 17.5 2.04 12 2.04z"
                                    })
                                })
                            }), (0, a.jsx)("button", {
                                onClick: () => u("twitter"),
                                className: "w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group",
                                title: "Share on X (Twitter)",
                                "aria-label": "Share on X (Twitter)",
                                children: (0, a.jsx)("svg", {
                                    className: "w-5 h-5 text-black dark:text-white group-hover:scale-110 transition-transform",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, a.jsx)("path", {
                                        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                    })
                                })
                            }), (0, a.jsx)("button", {
                                onClick: () => u("linkedin"),
                                className: "w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group",
                                title: "Share on LinkedIn",
                                "aria-label": "Share on LinkedIn",
                                children: (0, a.jsx)("svg", {
                                    className: "w-5 h-5 text-[#0A66C2] group-hover:scale-110 transition-transform",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, a.jsx)("path", {
                                        d: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                                    })
                                })
                            }), (0, a.jsx)("button", {
                                onClick: () => u("whatsapp"),
                                className: "w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group",
                                title: "Share via WhatsApp",
                                "aria-label": "Share via WhatsApp",
                                children: (0, a.jsx)("svg", {
                                    className: "w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, a.jsx)("path", {
                                        d: "M12.017 2.012C6.498 2.012 2.017 6.493 2.017 12.017c0 1.744.457 3.4 1.316 4.855L2 22l5.233-1.237c1.4.767 2.99 1.225 4.784 1.225 5.519 0 9.983-4.481 9.983-9.983S17.536 2.012 12.017 2.012zM12.017 20.146c-1.473 0-2.856-.4-4.042-1.096l-.29-.172-3.009.712.731-2.93-.19-.304c-.765-1.233-1.169-2.653-1.169-4.101 0-4.486 3.65-8.129 8.137-8.129s8.137 3.643 8.137 8.129-3.65 8.129-8.137 8.129zm4.476-6.123c-.246-.123-1.456-.718-1.682-.8-.225-.082-.39-.123-.554.123-.164.246-.636.8-.78.966s-.287.184-.533.061-1.04-.384-1.98-1.22c-.732-.65-1.226-1.453-1.37-1.699s-.015-.379.108-.502c.111-.11.246-.287.369-.43.123-.143.164-.246.246-.41.082-.164.041-.307-.02-.43-.061-.123-.554-1.335-.76-1.83-.2-.482-.404-.418-.554-.425-.143-.007-.307-.009-.471-.009s-.43.062-.656.307c-.225.246-.861.842-.861 2.054s.882 2.381 1.005 2.545c.123.164 1.733 2.645 4.197 3.708.586.253 1.044.404 1.401.517.589.187 1.125.16 1.549.097.472-.07 1.456-.596 1.661-1.171.205-.575.205-1.068.143-1.171-.061-.102-.225-.164-.472-.287z"
                                    })
                                })
                            }), (0, a.jsxs)("button", {
                                onClick: x,
                                className: "w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group relative",
                                title: i ? "Link copied!" : "Copy link",
                                "aria-label": i ? "Link copied!" : "Copy link",
                                children: [i ? (0, a.jsx)("svg", {
                                    className: "w-5 h-5 text-green-600 dark:text-green-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, a.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M5 13l4 4L19 7"
                                    })
                                }) : (0, a.jsx)("svg", {
                                    className: "w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, a.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    })
                                }), i && (0, a.jsx)("div", {
                                    className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs py-1 px-2 rounded whitespace-nowrap",
                                    children: "Copied!"
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        9207: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 7032)), Promise.resolve().then(r.t.bind(r, 6874, 23)), Promise.resolve().then(r.t.bind(r, 3063, 23))
        }
    },
    e => {
        e.O(0, [6874, 3063, 8441, 5964, 7358], () => e(e.s = 9207)), _N_E = e.O()
    }
]);