"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7927],
    {
        1469: (e, a, t) => {
            Object.defineProperty(a, "__esModule", { value: !0 }),
                !(function (e, a) {
                    for (var t in a)
                        Object.defineProperty(e, t, { enumerable: !0, get: a[t] });
                })(a, {
                    default: function () {
                        return d;
                    },
                    getImageProps: function () {
                        return i;
                    },
                });
            let r = t(8229),
                s = t(8883),
                l = t(3063),
                n = r._(t(1193));
            function i(e) {
                let { props: a } = (0, s.getImgProps)(e, {
                    defaultLoader: n.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image/",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !0,
                    },
                });
                for (let [e, t] of Object.entries(a)) void 0 === t && delete a[e];
                return { props: a };
            }
            let d = l.Image;
        },
        6766: (e, a, t) => {
            t.d(a, { default: () => s.a });
            var r = t(1469),
                s = t.n(r);
        },
        7927: (e, a, t) => {
            t.d(a, { default: () => d });
            var r = t(5155),
                s = t(2115),
                l = t(6766),
                n = t(9775);
            let i = [
                {
                    bank: "Bank of Baroda",
                    logo: "/images/bank-logos/bank-of-baroda.png",
                    salariedRate: "7.45",
                    selfEmployedRate: "7.70",
                    processingFee: "0.25% + GST",
                    maxTenure: "30 years",
                    maxLTV: "90%",
                    features: [
                        "Lowest market rate",
                        "Quick approval",
                        "Zero prepayment charges",
                    ],
                    rating: 4.7,
                },
                {
                    bank: "ICICI Bank",
                    logo: "/images/bank-logos/icici.png",
                    salariedRate: "7.70",
                    selfEmployedRate: "7.95",
                    processingFee: "0.50% + GST",
                    maxTenure: "30 years",
                    maxLTV: "90%",
                    features: [
                        "Digital platform",
                        "Instant approval",
                        "Pre-approved offers",
                    ],
                    rating: 4.8,
                },
                {
                    bank: "HDFC Bank",
                    logo: "/images/bank-logos/hdfc.png",
                    salariedRate: "8.15",
                    selfEmployedRate: "8.40",
                    processingFee: "0.50% + GST",
                    maxTenure: "30 years",
                    maxLTV: "90%",
                    features: [
                        "Quick processing",
                        "Doorstep service",
                        "Balance transfer facility",
                    ],
                    rating: 4.7,
                },
                {
                    bank: "State Bank of India",
                    logo: "/images/bank-logos/sbi.png",
                    salariedRate: "8.25",
                    selfEmployedRate: "8.50",
                    processingFee: "0.35% + GST",
                    maxTenure: "30 years",
                    maxLTV: "90%",
                    features: ["Trusted brand", "Minimal documentation", "PMAY benefits"],
                    rating: 4.6,
                },
                {
                    bank: "Punjab National Bank",
                    logo: "/images/bank-logos/punjab-national-bank.png",
                    salariedRate: "8.30",
                    selfEmployedRate: "8.55",
                    processingFee: "0.35% + GST",
                    maxTenure: "30 years",
                    maxLTV: "90%",
                    features: [
                        "Government employees special",
                        "Rural housing loans",
                        "Recent rate cuts",
                    ],
                    rating: 4.5,
                },
                {
                    bank: "Axis Bank",
                    logo: "/images/bank-logos/axis.png",
                    salariedRate: "8.45",
                    selfEmployedRate: "8.70",
                    processingFee: "1% + GST",
                    maxTenure: "30 years",
                    maxLTV: "90%",
                    features: [
                        "Express approval",
                        "Flexible repayment",
                        "Online tracking",
                    ],
                    rating: 4.5,
                },
                {
                    bank: "Kotak Mahindra",
                    logo: "/images/bank-logos/kotak-mahindra-bank.png",
                    salariedRate: "8.50",
                    selfEmployedRate: "8.75",
                    processingFee: "0.50% + GST",
                    maxTenure: "30 years",
                    maxLTV: "90%",
                    features: [
                        "Zero prepayment charges",
                        "Special rates for women",
                        "Quick disbursal",
                    ],
                    rating: 4.6,
                },
                {
                    bank: "LIC Housing Finance",
                    logo: "/images/bank-logos/lic-india.png",
                    salariedRate: "8.55",
                    selfEmployedRate: "8.80",
                    processingFee: "0.25% + GST",
                    maxTenure: "30 years",
                    maxLTV: "90%",
                    features: [
                        "Low processing fee",
                        "Competitive rates",
                        "Trusted LIC brand",
                    ],
                    rating: 4.4,
                },
            ];
            function d() {
                let [e, a] = (0, s.useState)("salaried"),
                    [t, d] = (0, s.useState)("rate"),
                    [o, x] = (0, s.useState)(new Set()),
                    c = [...i].sort((a, r) =>
                        "rate" === t
                            ? parseFloat(
                                "salaried" === e ? a.salariedRate : a.selfEmployedRate
                            ) -
                            parseFloat(
                                "salaried" === e ? r.salariedRate : r.selfEmployedRate
                            )
                            : a.bank.localeCompare(r.bank)
                    );
                return (0, r.jsxs)("section", {
                    className:
                        "relative py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50",
                    children: [
                        (0, r.jsx)("div", {
                            className:
                                "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700",
                        }),
                        (0, r.jsxs)("div", {
                            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                            children: [
                                (0, r.jsx)(n.default, {
                                    animation: "gentle-fade-up",
                                    delay: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: "text-center mb-12",
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className:
                                                    "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight mb-6",
                                                children: [
                                                    (0, r.jsx)("svg", {
                                                        className: "h-4 w-4",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: (0, r.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                                        }),
                                                    }),
                                                    (0, r.jsx)("span", {
                                                        children: "Compare Interest Rates",
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)("h2", {
                                                className:
                                                    "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",
                                                children: "Home Loan Interest Rates from Top Banks",
                                            }),
                                            (0, r.jsx)("p", {
                                                className:
                                                    "mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300",
                                                children:
                                                    "Compare live interest rates and choose the best offer for your profile",
                                            }),
                                            (0, r.jsxs)("p", {
                                                className:
                                                    "mt-2 text-sm text-gray-500 dark:text-gray-400",
                                                children: [
                                                    "*Rates last updated:",
                                                    " ",
                                                    new Date().toLocaleDateString("en-IN", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                (0, r.jsx)(n.default, {
                                    animation: "gentle-fade-up",
                                    delay: 100,
                                    children: (0, r.jsxs)("div", {
                                        className:
                                            "mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center",
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className:
                                                    "flex rounded-lg bg-white dark:bg-gray-800 p-1 shadow-md min-h-[44px]",
                                                children: [
                                                    (0, r.jsx)("button", {
                                                        onClick: () => a("salaried"),
                                                        className:
                                                            "px-4 py-2 min-h-[40px] rounded-md text-sm font-medium transition-all ".concat(
                                                                "salaried" === e
                                                                    ? "bg-primary text-white dark:bg-primaryLight dark:text-gray-900"
                                                                    : "text-gray-700 dark:text-gray-300"
                                                            ),
                                                        children: "Salaried",
                                                    }),
                                                    (0, r.jsx)("button", {
                                                        onClick: () => a("self-employed"),
                                                        className:
                                                            "px-4 py-2 min-h-[40px] rounded-md text-sm font-medium transition-all ".concat(
                                                                "self-employed" === e
                                                                    ? "bg-primary text-white dark:bg-primaryLight dark:text-gray-900"
                                                                    : "text-gray-700 dark:text-gray-300"
                                                            ),
                                                        children: "Self-Employed",
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    (0, r.jsx)("span", {
                                                        className:
                                                            "text-sm text-gray-600 dark:text-gray-400",
                                                        children: "Sort by:",
                                                    }),
                                                    (0, r.jsxs)("select", {
                                                        value: t,
                                                        onChange: (e) => d(e.target.value),
                                                        className:
                                                            "px-4 py-2 min-h-[44px] rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 text-sm",
                                                        children: [
                                                            (0, r.jsx)("option", {
                                                                value: "rate",
                                                                children: "Interest Rate",
                                                            }),
                                                            (0, r.jsx)("option", {
                                                                value: "bank",
                                                                children: "Bank Name",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                (0, r.jsx)(n.default, {
                                    animation: "gentle-fade-up",
                                    delay: 200,
                                    children: (0, r.jsx)("div", {
                                        className: "lg:hidden space-y-4",
                                        children: c.map((a, s) => {
                                            let i =
                                                "salaried" === e
                                                    ? a.salariedRate
                                                    : a.selfEmployedRate,
                                                d = 0 === s && "rate" === t;
                                            return (0, r.jsxs)(
                                                "div",
                                                {
                                                    className:
                                                        "bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700",
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className:
                                                                "flex items-start justify-between mb-4",
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        o.has(a.bank)
                                                                            ? (0, r.jsx)("div", {
                                                                                className:
                                                                                    "h-8 w-8 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center text-xs font-semibold text-gray-600 dark:text-gray-400",
                                                                                "aria-label": "".concat(
                                                                                    a.bank,
                                                                                    " logo fallback"
                                                                                ),
                                                                                role: "img",
                                                                                children: a.bank
                                                                                    .split(" ")
                                                                                    .map((e) => e[0])
                                                                                    .join("")
                                                                                    .slice(0, 2)
                                                                                    .toUpperCase(),
                                                                            })
                                                                            : (0, r.jsx)(l.default, {
                                                                                src: a.logo,
                                                                                alt: "".concat(a.bank, " logo"),
                                                                                className: "h-8 w-auto",
                                                                                width: 32,
                                                                                height: 32,
                                                                                loading: "lazy",
                                                                                onError: () => {
                                                                                    x((e) => new Set(e).add(a.bank));
                                                                                },
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            children: [
                                                                                (0, r.jsx)("div", {
                                                                                    className:
                                                                                        "font-medium text-gray-900 dark:text-white text-base sm:text-lg",
                                                                                    children: a.bank,
                                                                                }),
                                                                                (0, r.jsxs)("div", {
                                                                                    className:
                                                                                        "flex items-center gap-1 mt-1",
                                                                                    children: [
                                                                                        (0, r.jsx)("div", {
                                                                                            className: "flex",
                                                                                            children: [
                                                                                                void 0,
                                                                                                void 0,
                                                                                                void 0,
                                                                                                void 0,
                                                                                                void 0,
                                                                                            ].map((e, t) =>
                                                                                                (0, r.jsx)(
                                                                                                    "svg",
                                                                                                    {
                                                                                                        className:
                                                                                                            "h-3 w-3 ".concat(
                                                                                                                t < Math.floor(a.rating)
                                                                                                                    ? "text-yellow-400"
                                                                                                                    : "text-gray-300 dark:text-gray-600"
                                                                                                            ),
                                                                                                        fill: "currentColor",
                                                                                                        viewBox: "0 0 20 20",
                                                                                                        children: (0, r.jsx)(
                                                                                                            "path",
                                                                                                            {
                                                                                                                d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                                                                                                            }
                                                                                                        ),
                                                                                                    },
                                                                                                    t
                                                                                                )
                                                                                            ),
                                                                                        }),
                                                                                        (0, r.jsx)("span", {
                                                                                            className:
                                                                                                "text-xs text-gray-500 dark:text-gray-400",
                                                                                            children: a.rating,
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)("div", {
                                                                    className: "text-right",
                                                                    children: [
                                                                        (0, r.jsxs)("div", {
                                                                            className:
                                                                                "inline-flex items-center gap-1 px-3 py-1 rounded-full ".concat(
                                                                                    d
                                                                                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                                                                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                                                                                ),
                                                                            children: [
                                                                                (0, r.jsxs)("span", {
                                                                                    className: "font-semibold text-lg",
                                                                                    children: [i, "%"],
                                                                                }),
                                                                                (0, r.jsx)("span", {
                                                                                    className: "text-xs",
                                                                                    children: "p.a.",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        d &&
                                                                        (0, r.jsx)("div", {
                                                                            className:
                                                                                "text-xs text-green-600 dark:text-green-400 mt-1",
                                                                            children: "Lowest Rate",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        (0, r.jsxs)("div", {
                                                            className: "grid grid-cols-2 gap-4 mb-4 text-sm",
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    children: [
                                                                        (0, r.jsx)("span", {
                                                                            className:
                                                                                "text-gray-500 dark:text-gray-400",
                                                                            children: "Processing Fee",
                                                                        }),
                                                                        (0, r.jsx)("div", {
                                                                            className:
                                                                                "font-medium text-gray-900 dark:text-white",
                                                                            children: a.processingFee,
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)("div", {
                                                                    children: [
                                                                        (0, r.jsx)("span", {
                                                                            className:
                                                                                "text-gray-500 dark:text-gray-400",
                                                                            children: "Max Tenure",
                                                                        }),
                                                                        (0, r.jsx)("div", {
                                                                            className:
                                                                                "font-medium text-gray-900 dark:text-white",
                                                                            children: a.maxTenure,
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)("div", {
                                                                    children: [
                                                                        (0, r.jsx)("span", {
                                                                            className:
                                                                                "text-gray-500 dark:text-gray-400",
                                                                            children: "Max LTV",
                                                                        }),
                                                                        (0, r.jsx)("div", {
                                                                            className:
                                                                                "font-medium text-gray-900 dark:text-white",
                                                                            children: a.maxLTV,
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, r.jsx)("div", {
                                                                    className: "flex items-end",
                                                                    children: (0, r.jsx)(n.SubtleHover, {
                                                                        type: "lift",
                                                                        children: (0, r.jsxs)("a", {
                                                                            href: "https://pulse.Credifyy.com/users/sign-up/",
                                                                            className:
                                                                                "inline-flex items-center gap-1 px-4 py-2 min-h-[44px] rounded-lg bg-primary text-white text-sm font-medium hover:bg-primaryLight transition-colors dark:bg-primaryLight dark:text-gray-900 dark:hover:bg-primary dark:hover:text-white w-full justify-center",
                                                                            children: [
                                                                                "Apply",
                                                                                (0, r.jsx)("svg", {
                                                                                    className: "h-4 w-4",
                                                                                    fill: "none",
                                                                                    viewBox: "0 0 24 24",
                                                                                    stroke: "currentColor",
                                                                                    children: (0, r.jsx)("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M9 5l7 7-7 7",
                                                                                    }),
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                },
                                                a.bank
                                            );
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(n.default, {
                                    animation: "gentle-fade-up",
                                    delay: 200,
                                    children: (0, r.jsx)("div", {
                                        className:
                                            "hidden lg:block overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800",
                                        children: (0, r.jsx)("div", {
                                            className: "overflow-x-auto",
                                            children: (0, r.jsxs)("table", {
                                                className: "w-full",
                                                children: [
                                                    (0, r.jsx)("thead", {
                                                        children: (0, r.jsxs)("tr", {
                                                            className:
                                                                "border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/50",
                                                            children: [
                                                                (0, r.jsx)("th", {
                                                                    className:
                                                                        "px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white",
                                                                    children: "Bank",
                                                                }),
                                                                (0, r.jsx)("th", {
                                                                    className:
                                                                        "px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white",
                                                                    children: "Interest Rate",
                                                                }),
                                                                (0, r.jsx)("th", {
                                                                    className:
                                                                        "px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white hidden sm:table-cell",
                                                                    children: "Processing Fee",
                                                                }),
                                                                (0, r.jsx)("th", {
                                                                    className:
                                                                        "px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white hidden lg:table-cell",
                                                                    children: "Max Tenure",
                                                                }),
                                                                (0, r.jsx)("th", {
                                                                    className:
                                                                        "px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white hidden lg:table-cell",
                                                                    children: "Max LTV",
                                                                }),
                                                                (0, r.jsx)("th", {
                                                                    className:
                                                                        "px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white",
                                                                    children: "Action",
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, r.jsx)("tbody", {
                                                        className:
                                                            "divide-y divide-gray-200 dark:divide-gray-700",
                                                        children: c.map((a, s) => {
                                                            let i =
                                                                "salaried" === e
                                                                    ? a.salariedRate
                                                                    : a.selfEmployedRate,
                                                                d = 0 === s && "rate" === t;
                                                            return (0, r.jsxs)(
                                                                "tr",
                                                                {
                                                                    className:
                                                                        "group hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                                                                    children: [
                                                                        (0, r.jsx)("td", {
                                                                            className: "px-6 py-4",
                                                                            children: (0, r.jsxs)("div", {
                                                                                className: "flex items-center gap-3",
                                                                                children: [
                                                                                    o.has(a.bank)
                                                                                        ? (0, r.jsx)("div", {
                                                                                            className:
                                                                                                "h-8 w-8 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center text-xs font-semibold text-gray-600 dark:text-gray-400",
                                                                                            "aria-label": "".concat(
                                                                                                a.bank,
                                                                                                " logo fallback"
                                                                                            ),
                                                                                            role: "img",
                                                                                            children: a.bank
                                                                                                .split(" ")
                                                                                                .map((e) => e[0])
                                                                                                .join("")
                                                                                                .slice(0, 2)
                                                                                                .toUpperCase(),
                                                                                        })
                                                                                        : (0, r.jsx)(l.default, {
                                                                                            src: a.logo,
                                                                                            alt: "".concat(a.bank, " logo"),
                                                                                            className: "h-8 w-auto",
                                                                                            width: 32,
                                                                                            height: 32,
                                                                                            loading: "lazy",
                                                                                            onError: () => {
                                                                                                x((e) =>
                                                                                                    new Set(e).add(a.bank)
                                                                                                );
                                                                                            },
                                                                                        }),
                                                                                    (0, r.jsxs)("div", {
                                                                                        children: [
                                                                                            (0, r.jsx)("div", {
                                                                                                className:
                                                                                                    "font-medium text-gray-900 dark:text-white",
                                                                                                children: a.bank,
                                                                                            }),
                                                                                            (0, r.jsxs)("div", {
                                                                                                className:
                                                                                                    "flex items-center gap-1 mt-1",
                                                                                                children: [
                                                                                                    (0, r.jsx)("div", {
                                                                                                        className: "flex",
                                                                                                        children: [
                                                                                                            void 0,
                                                                                                            void 0,
                                                                                                            void 0,
                                                                                                            void 0,
                                                                                                            void 0,
                                                                                                        ].map((e, t) =>
                                                                                                            (0, r.jsx)(
                                                                                                                "svg",
                                                                                                                {
                                                                                                                    className:
                                                                                                                        "h-3 w-3 ".concat(
                                                                                                                            t <
                                                                                                                                Math.floor(
                                                                                                                                    a.rating
                                                                                                                                )
                                                                                                                                ? "text-yellow-400"
                                                                                                                                : "text-gray-300 dark:text-gray-600"
                                                                                                                        ),
                                                                                                                    fill: "currentColor",
                                                                                                                    viewBox: "0 0 20 20",
                                                                                                                    children: (0, r.jsx)(
                                                                                                                        "path",
                                                                                                                        {
                                                                                                                            d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                                                                                                                        }
                                                                                                                    ),
                                                                                                                },
                                                                                                                t
                                                                                                            )
                                                                                                        ),
                                                                                                    }),
                                                                                                    (0, r.jsx)("span", {
                                                                                                        className:
                                                                                                            "text-xs text-gray-500 dark:text-gray-400",
                                                                                                        children: a.rating,
                                                                                                    }),
                                                                                                ],
                                                                                            }),
                                                                                        ],
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        }),
                                                                        (0, r.jsxs)("td", {
                                                                            className: "px-6 py-4 text-center",
                                                                            children: [
                                                                                (0, r.jsxs)("div", {
                                                                                    className:
                                                                                        "inline-flex items-center gap-1 px-3 py-1 rounded-full ".concat(
                                                                                            d
                                                                                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                                                                                : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                                                                                        ),
                                                                                    children: [
                                                                                        (0, r.jsxs)("span", {
                                                                                            className: "font-semibold",
                                                                                            children: [i, "%"],
                                                                                        }),
                                                                                        (0, r.jsx)("span", {
                                                                                            className: "text-xs",
                                                                                            children: "p.a.",
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                                d &&
                                                                                (0, r.jsx)("div", {
                                                                                    className:
                                                                                        "text-xs text-green-600 dark:text-green-400 mt-1",
                                                                                    children: "Lowest Rate",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, r.jsx)("td", {
                                                                            className:
                                                                                "px-6 py-4 text-center text-sm text-gray-700 dark:text-gray-300 hidden sm:table-cell",
                                                                            children: a.processingFee,
                                                                        }),
                                                                        (0, r.jsx)("td", {
                                                                            className:
                                                                                "px-6 py-4 text-center text-sm text-gray-700 dark:text-gray-300 hidden lg:table-cell",
                                                                            children: a.maxTenure,
                                                                        }),
                                                                        (0, r.jsx)("td", {
                                                                            className:
                                                                                "px-6 py-4 text-center text-sm text-gray-700 dark:text-gray-300 hidden lg:table-cell",
                                                                            children: a.maxLTV,
                                                                        }),
                                                                        (0, r.jsx)("td", {
                                                                            className: "px-6 py-4 text-center",
                                                                            children: (0, r.jsx)(n.SubtleHover, {
                                                                                type: "lift",
                                                                                children: (0, r.jsxs)("a", {
                                                                                    href: "https://pulse.Credifyy.com/users/sign-up/",
                                                                                    className:
                                                                                        "inline-flex items-center gap-1 px-4 py-2 min-h-[44px] rounded-lg bg-primary text-white text-sm font-medium hover:bg-primaryLight transition-colors dark:bg-primaryLight dark:text-gray-900 dark:hover:bg-primary dark:hover:text-white",
                                                                                    children: [
                                                                                        "Apply",
                                                                                        (0, r.jsx)("svg", {
                                                                                            className: "h-4 w-4",
                                                                                            fill: "none",
                                                                                            viewBox: "0 0 24 24",
                                                                                            stroke: "currentColor",
                                                                                            children: (0, r.jsx)("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 2,
                                                                                                d: "M9 5l7 7-7 7",
                                                                                            }),
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    ],
                                                                },
                                                                a.bank
                                                            );
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(n.default, {
                                    animation: "gentle-fade-up",
                                    delay: 300,
                                    children: (0, r.jsx)("div", {
                                        className:
                                            "mt-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-6",
                                        children: (0, r.jsxs)("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: "p-2 bg-primary/10 rounded-full",
                                                    children: (0, r.jsx)("svg", {
                                                        className:
                                                            "h-5 w-5 text-primary dark:text-primaryLight flex-shrink-0",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: (0, r.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                                        }),
                                                    }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: "text-sm text-gray-800 dark:text-gray-200",
                                                    children: [
                                                        (0, r.jsx)("p", {
                                                            className:
                                                                "font-semibold mb-2 text-gray-900 dark:text-white",
                                                            children: "Important Information:",
                                                        }),
                                                        (0, r.jsxs)("ul", {
                                                            className:
                                                                "space-y-1 text-gray-700 dark:text-gray-300",
                                                            children: [
                                                                (0, r.jsx)("li", {
                                                                    children:
                                                                        "• Interest rates updated as of January 2025 and are subject to change",
                                                                }),
                                                                (0, r.jsx)("li", {
                                                                    children:
                                                                        "• Final rates depend on Credit score, loan amount, and bank's evaluation",
                                                                }),
                                                                (0, r.jsx)("li", {
                                                                    children:
                                                                        "• Rates shown reflect recent RBI policy changes and market conditions",
                                                                }),
                                                                (0, r.jsx)("li", {
                                                                    children:
                                                                        "• Additional charges may apply - consult with bank representatives",
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            }
        },
    },
]);
