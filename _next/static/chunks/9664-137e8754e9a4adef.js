(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9664],
    {
        7038: (e) => {
            e.exports = { slider: "EMICalculator_slider__ms1VC" };
        },
        9664: (e, s, a) => {
            "use strict";
            a.d(s, { default: () => x });
            var t = a(5155),
                l = a(2115),
                r = a(6429),
                n = a(3999),
                i = a(7038),
                c = a.n(i);
            function x(e) {
                let { bankData: s, showBankDetails: a = !0 } = e,
                    [i, x] = (0, l.useState)(
                        (null == s ? void 0 : s.loanAmounts.defaultAmount) || 5e6
                    ),
                    [d, m] = (0, l.useState)(
                        (null == s ? void 0 : s.interestRates.defaultRate) || 8.7
                    ),
                    [o, p] = (0, l.useState)(
                        (null == s ? void 0 : s.tenures.defaultTenure) || 20
                    ),
                    [g, h] = (0, l.useState)(!1),
                    [u, y] = (0, l.useState)("years"),
                    j = "years" === u ? o : o / 12,
                    b = (0, l.useMemo)(() => (0, r.s9)(i, d, j), [i, d, j]),
                    v = (0, l.useMemo)(() => (0, r.LP)(i, b, j), [i, b, j]),
                    N = (0, l.useMemo)(() => (0, r.Zz)(i, b, j), [i, b, j]),
                    f = (0, l.useMemo)(() => (g ? (0, r.CC)(i, d, j) : []), [i, d, j, g]),
                    w = (e) => {
                        "months" === e && "years" === u
                            ? p(12 * o)
                            : "years" === e && "months" === u && p(Math.floor(o / 12)),
                            y(e);
                    };
                return (0, t.jsxs)("div", {
                    className: "w-full max-w-7xl mx-auto",
                    children: [
                        a &&
                        s &&
                        (0, t.jsxs)("div", {
                            className:
                                "bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 lg:mb-12 border border-gray-100",
                            children: [
                                (0, t.jsxs)("h2", {
                                    className:
                                        "text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6",
                                    children: [s.name, " Home Loan"],
                                }),
                                (0, t.jsx)("p", {
                                    className:
                                        "text-gray-600 mb-6 lg:mb-8 text-lg leading-relaxed",
                                    children: s.description,
                                }),
                                (0, t.jsxs)("div", {
                                    className: "grid md:grid-cols-2 gap-6 lg:gap-8",
                                    children: [
                                        (0, t.jsxs)("div", {
                                            children: [
                                                (0, t.jsx)("h3", {
                                                    className:
                                                        "font-semibold text-gray-900 mb-3 lg:mb-4 text-lg",
                                                    children: "Key Features",
                                                }),
                                                (0, t.jsx)("ul", {
                                                    className: "space-y-2",
                                                    children: s.features.map((e, s) =>
                                                        (0, t.jsxs)(
                                                            "li",
                                                            {
                                                                className: "flex items-start",
                                                                children: [
                                                                    (0, t.jsx)("svg", {
                                                                        className:
                                                                            "w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 20 20",
                                                                        children: (0, t.jsx)("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                            clipRule: "evenodd",
                                                                        }),
                                                                    }),
                                                                    (0, t.jsx)("span", {
                                                                        className: "text-gray-700",
                                                                        children: e,
                                                                    }),
                                                                ],
                                                            },
                                                            s
                                                        )
                                                    ),
                                                }),
                                            ],
                                        }),
                                        (0, t.jsxs)("div", {
                                            children: [
                                                (0, t.jsx)("h3", {
                                                    className:
                                                        "font-semibold text-gray-900 mb-3 lg:mb-4 text-lg",
                                                    children: "Interest Rates & Fees",
                                                }),
                                                (0, t.jsxs)("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        (0, t.jsxs)("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                (0, t.jsx)("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Interest Rate Range:",
                                                                }),
                                                                (0, t.jsxs)("span", {
                                                                    className: "font-semibold",
                                                                    children: [
                                                                        (0, n.Ee)(s.interestRates.min),
                                                                        " - ",
                                                                        (0, n.Ee)(s.interestRates.max),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                (0, t.jsx)("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Processing Fee:",
                                                                }),
                                                                (0, t.jsxs)("span", {
                                                                    className: "font-semibold",
                                                                    children: [
                                                                        (0, n.Ee)(s.processingFees.percentage),
                                                                        " of loan amount",
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                (0, t.jsx)("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Max Loan Amount:",
                                                                }),
                                                                (0, t.jsx)("span", {
                                                                    className: "font-semibold",
                                                                    children: (0, n.vv)(s.loanAmounts.max),
                                                                }),
                                                            ],
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                (0, t.jsx)("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Max Tenure:",
                                                                }),
                                                                (0, t.jsxs)("span", {
                                                                    className: "font-semibold",
                                                                    children: [s.tenures.max, " years"],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, t.jsxs)("div", {
                            className:
                                "bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-100",
                            children: [
                                (0, t.jsx)("h2", {
                                    className:
                                        "text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8",
                                    children: "EMI Calculator",
                                }),
                                (0, t.jsxs)("div", {
                                    className: "grid md:grid-cols-2 gap-8 lg:gap-12",
                                    children: [
                                        (0, t.jsxs)("div", {
                                            className: "space-y-6 lg:space-y-8",
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    children: [
                                                        (0, t.jsx)("label", {
                                                            className:
                                                                "block text-sm font-medium text-gray-700 mb-2",
                                                            children: "Loan Amount",
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                (0, t.jsx)("input", {
                                                                    type: "range",
                                                                    min:
                                                                        (null == s ? void 0 : s.loanAmounts.min) ||
                                                                        1e5,
                                                                    max:
                                                                        (null == s ? void 0 : s.loanAmounts.max) ||
                                                                        5e7,
                                                                    step: "100000",
                                                                    value: i,
                                                                    onChange: (e) => x(Number(e.target.value)),
                                                                    className:
                                                                        "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ".concat(
                                                                            c().slider
                                                                        ),
                                                                }),
                                                                (0, t.jsxs)("div", {
                                                                    className: "mt-2",
                                                                    children: [
                                                                        (0, t.jsx)("input", {
                                                                            type: "number",
                                                                            value: i,
                                                                            onChange: (e) =>
                                                                                x(Number(e.target.value)),
                                                                            className:
                                                                                "w-full px-3 lg:px-4 py-3 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]",
                                                                        }),
                                                                        (0, t.jsx)("span", {
                                                                            className:
                                                                                "text-sm text-gray-500 mt-1 block",
                                                                            children: (0, n.vv)(i),
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                (0, t.jsxs)("div", {
                                                    children: [
                                                        (0, t.jsx)("label", {
                                                            className:
                                                                "block text-sm font-medium text-gray-700 mb-2",
                                                            children: "Interest Rate (% p.a.)",
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                (0, t.jsx)("input", {
                                                                    type: "range",
                                                                    min:
                                                                        (null == s
                                                                            ? void 0
                                                                            : s.interestRates.min) || 6,
                                                                    max:
                                                                        (null == s
                                                                            ? void 0
                                                                            : s.interestRates.max) || 15,
                                                                    step: "0.05",
                                                                    value: d,
                                                                    onChange: (e) => m(Number(e.target.value)),
                                                                    className:
                                                                        "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ".concat(
                                                                            c().slider
                                                                        ),
                                                                }),
                                                                (0, t.jsxs)("div", {
                                                                    className: "mt-2",
                                                                    children: [
                                                                        (0, t.jsx)("input", {
                                                                            type: "number",
                                                                            value: d,
                                                                            step: "0.05",
                                                                            onChange: (e) =>
                                                                                m(Number(e.target.value)),
                                                                            className:
                                                                                "w-full px-3 lg:px-4 py-3 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]",
                                                                        }),
                                                                        (0, t.jsx)("span", {
                                                                            className:
                                                                                "text-sm text-gray-500 mt-1 block",
                                                                            children: (0, n.Ee)(d),
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                (0, t.jsxs)("div", {
                                                    children: [
                                                        (0, t.jsx)("label", {
                                                            className:
                                                                "block text-sm font-medium text-gray-700 mb-2",
                                                            children: "Loan Tenure",
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "flex space-x-4 mb-2",
                                                            children: [
                                                                (0, t.jsx)("button", {
                                                                    onClick: () => w("years"),
                                                                    className:
                                                                        "px-4 lg:px-5 py-3 lg:py-3 rounded-lg text-sm font-medium transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ".concat(
                                                                            "years" === u
                                                                                ? "bg-primary text-white"
                                                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                                        ),
                                                                    children: "Years",
                                                                }),
                                                                (0, t.jsx)("button", {
                                                                    onClick: () => w("months"),
                                                                    className:
                                                                        "px-4 lg:px-5 py-3 lg:py-3 rounded-lg text-sm font-medium transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ".concat(
                                                                            "months" === u
                                                                                ? "bg-primary text-white"
                                                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                                        ),
                                                                    children: "Months",
                                                                }),
                                                            ],
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                (0, t.jsx)("input", {
                                                                    type: "range",
                                                                    min:
                                                                        "years" === u
                                                                            ? (null == s ? void 0 : s.tenures.min) ||
                                                                            1
                                                                            : 12,
                                                                    max:
                                                                        "years" === u
                                                                            ? (null == s ? void 0 : s.tenures.max) ||
                                                                            30
                                                                            : 360,
                                                                    step: "years" === u ? 1 : 12,
                                                                    value: o,
                                                                    onChange: (e) => p(Number(e.target.value)),
                                                                    className:
                                                                        "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ".concat(
                                                                            c().slider
                                                                        ),
                                                                }),
                                                                (0, t.jsxs)("div", {
                                                                    className: "mt-2",
                                                                    children: [
                                                                        (0, t.jsx)("input", {
                                                                            type: "number",
                                                                            value: o,
                                                                            onChange: (e) =>
                                                                                p(Number(e.target.value)),
                                                                            className:
                                                                                "w-full px-3 lg:px-4 py-3 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[44px]",
                                                                        }),
                                                                        (0, t.jsxs)("span", {
                                                                            className:
                                                                                "text-sm text-gray-500 mt-1 block",
                                                                            children: [o, " ", u],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, t.jsxs)("div", {
                                            className:
                                                "bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 border border-gray-100",
                                            children: [
                                                (0, t.jsx)("h3", {
                                                    className:
                                                        "text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6",
                                                    children: "EMI Details",
                                                }),
                                                (0, t.jsxs)("div", {
                                                    className: "space-y-4 lg:space-y-6",
                                                    children: [
                                                        (0, t.jsxs)("div", {
                                                            className:
                                                                "bg-gradient-to-r from-primary to-primaryLight text-white rounded-xl p-4 lg:p-6",
                                                            children: [
                                                                (0, t.jsx)("p", {
                                                                    className: "text-sm opacity-90",
                                                                    children: "Monthly EMI",
                                                                }),
                                                                (0, t.jsx)("p", {
                                                                    className: "text-3xl font-bold",
                                                                    children: (0, n.vv)(b),
                                                                }),
                                                            ],
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "grid grid-cols-2 gap-4 lg:gap-6",
                                                            children: [
                                                                (0, t.jsxs)("div", {
                                                                    className: "bg-white rounded-lg p-4",
                                                                    children: [
                                                                        (0, t.jsx)("p", {
                                                                            className: "text-sm text-gray-600",
                                                                            children: "Principal Amount",
                                                                        }),
                                                                        (0, t.jsx)("p", {
                                                                            className:
                                                                                "text-xl font-semibold text-gray-900",
                                                                            children: (0, n.vv)(i),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, t.jsxs)("div", {
                                                                    className: "bg-white rounded-lg p-4",
                                                                    children: [
                                                                        (0, t.jsx)("p", {
                                                                            className: "text-sm text-gray-600",
                                                                            children: "Total Interest",
                                                                        }),
                                                                        (0, t.jsx)("p", {
                                                                            className:
                                                                                "text-xl font-semibold text-gray-900",
                                                                            children: (0, n.vv)(v),
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "bg-white rounded-lg p-4",
                                                            children: [
                                                                (0, t.jsx)("p", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: "Total Amount Payable",
                                                                }),
                                                                (0, t.jsx)("p", {
                                                                    className:
                                                                        "text-xl font-semibold text-gray-900",
                                                                    children: (0, n.vv)(N),
                                                                }),
                                                            ],
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className:
                                                                "bg-white rounded-xl p-4 lg:p-5 shadow-sm border border-gray-100",
                                                            children: [
                                                                (0, t.jsx)("p", {
                                                                    className:
                                                                        "text-sm text-gray-600 mb-3 lg:mb-4",
                                                                    children: "Payment Breakdown",
                                                                }),
                                                                (0, t.jsx)("div", {
                                                                    className:
                                                                        "relative h-4 bg-gray-200 rounded-full overflow-hidden",
                                                                    children: (0, t.jsx)("div", {
                                                                        className:
                                                                            "absolute top-0 left-0 h-full bg-primary",
                                                                        style: {
                                                                            width: "".concat((i / N) * 100, "%"),
                                                                        },
                                                                    }),
                                                                }),
                                                                (0, t.jsxs)("div", {
                                                                    className:
                                                                        "flex justify-between mt-2 text-sm",
                                                                    children: [
                                                                        (0, t.jsxs)("span", {
                                                                            className: "text-primary",
                                                                            children: [
                                                                                "Principal: ",
                                                                                ((i / N) * 100).toFixed(1),
                                                                                "%",
                                                                            ],
                                                                        }),
                                                                        (0, t.jsxs)("span", {
                                                                            className: "text-gray-600",
                                                                            children: [
                                                                                "Interest: ",
                                                                                ((v / N) * 100).toFixed(1),
                                                                                "%",
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsxs)("div", {
                                    className: "mt-8 lg:mt-12",
                                    children: [
                                        (0, t.jsxs)("button", {
                                            onClick: () => h(!g),
                                            className:
                                                "flex items-center justify-between w-full px-4 lg:px-6 py-3 lg:py-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors min-h-[44px]",
                                            children: [
                                                (0, t.jsx)("span", {
                                                    className: "font-semibold text-gray-900",
                                                    children: "Amortization Schedule",
                                                }),
                                                (0, t.jsx)("svg", {
                                                    className:
                                                        "w-5 h-5 text-gray-600 transform transition-transform ".concat(
                                                            g ? "rotate-180" : ""
                                                        ),
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, t.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M19 9l-7 7-7-7",
                                                    }),
                                                }),
                                            ],
                                        }),
                                        g &&
                                        f.length > 0 &&
                                        (0, t.jsxs)(t.Fragment, {
                                            children: [
                                                (0, t.jsx)("div", {
                                                    className:
                                                        "mt-4 md:hidden bg-blue-50 rounded-lg px-4 py-3 border border-blue-200",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "flex items-center text-blue-700",
                                                        children: [
                                                            (0, t.jsx)("svg", {
                                                                className: "w-4 h-4 mr-2 flex-shrink-0",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: (0, t.jsx)("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                                                }),
                                                            }),
                                                            (0, t.jsx)("span", {
                                                                className: "text-xs",
                                                                children: "Swipe left to view all columns",
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, t.jsx)("div", {
                                                    className: "mt-4 hidden md:block overflow-x-auto",
                                                    children: (0, t.jsxs)("table", {
                                                        className:
                                                            "w-full min-w-[800px] divide-y divide-gray-200",
                                                        children: [
                                                            (0, t.jsx)("thead", {
                                                                className: "bg-gray-50",
                                                                children: (0, t.jsxs)("tr", {
                                                                    children: [
                                                                        (0, t.jsx)("th", {
                                                                            className:
                                                                                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                            children: "Year",
                                                                        }),
                                                                        (0, t.jsx)("th", {
                                                                            className:
                                                                                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                            children: "Opening Balance",
                                                                        }),
                                                                        (0, t.jsx)("th", {
                                                                            className:
                                                                                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                            children: "EMI \xd7 12",
                                                                        }),
                                                                        (0, t.jsx)("th", {
                                                                            className:
                                                                                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                            children: "Principal",
                                                                        }),
                                                                        (0, t.jsx)("th", {
                                                                            className:
                                                                                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                            children: "Interest",
                                                                        }),
                                                                        (0, t.jsx)("th", {
                                                                            className:
                                                                                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                            children: "Closing Balance",
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                            (0, t.jsx)("tbody", {
                                                                className:
                                                                    "bg-white divide-y divide-gray-200",
                                                                children: f
                                                                    .filter(
                                                                        (e) =>
                                                                            12 === e.month || 0 === e.closingBalance
                                                                    )
                                                                    .map((e, s) =>
                                                                        (0, t.jsxs)(
                                                                            "tr",
                                                                            {
                                                                                className: "hover:bg-gray-50",
                                                                                children: [
                                                                                    (0, t.jsxs)("td", {
                                                                                        className:
                                                                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                                                        children: ["Year ", e.year],
                                                                                    }),
                                                                                    (0, t.jsx)("td", {
                                                                                        className:
                                                                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                                                        children: (0, n.vv)(
                                                                                            e.openingBalance
                                                                                        ),
                                                                                    }),
                                                                                    (0, t.jsx)("td", {
                                                                                        className:
                                                                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                                                        children: (0, n.vv)(12 * e.emi),
                                                                                    }),
                                                                                    (0, t.jsx)("td", {
                                                                                        className:
                                                                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                                                        children: (0, n.vv)(
                                                                                            e.totalPrincipalPaid
                                                                                        ),
                                                                                    }),
                                                                                    (0, t.jsx)("td", {
                                                                                        className:
                                                                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                                                        children: (0, n.vv)(
                                                                                            e.totalInterestPaid
                                                                                        ),
                                                                                    }),
                                                                                    (0, t.jsx)("td", {
                                                                                        className:
                                                                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                                                        children: (0, n.vv)(
                                                                                            e.closingBalance
                                                                                        ),
                                                                                    }),
                                                                                ],
                                                                            },
                                                                            s
                                                                        )
                                                                    ),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, t.jsx)("div", {
                                                    className: "mt-4 md:hidden overflow-x-auto",
                                                    children: (0, t.jsxs)("table", {
                                                        className:
                                                            "w-full min-w-[600px] divide-y divide-gray-200",
                                                        children: [
                                                            (0, t.jsx)("thead", {
                                                                className: "bg-gray-50",
                                                                children: (0, t.jsxs)("tr", {
                                                                    children: [
                                                                        (0, t.jsx)("th", {
                                                                            className:
                                                                                "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                            children: "Year",
                                                                        }),
                                                                        (0, t.jsx)("th", {
                                                                            className:
                                                                                "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                            children: "Opening Balance",
                                                                        }),
                                                                        (0, t.jsx)("th", {
                                                                            className:
                                                                                "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                            children: "EMI \xd7 12",
                                                                        }),
                                                                        (0, t.jsx)("th", {
                                                                            className:
                                                                                "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                            children: "Principal",
                                                                        }),
                                                                        (0, t.jsx)("th", {
                                                                            className:
                                                                                "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                            children: "Interest",
                                                                        }),
                                                                        (0, t.jsx)("th", {
                                                                            className:
                                                                                "px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                            children: "Closing Balance",
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                            (0, t.jsx)("tbody", {
                                                                className:
                                                                    "bg-white divide-y divide-gray-200",
                                                                children: f
                                                                    .filter(
                                                                        (e) =>
                                                                            12 === e.month || 0 === e.closingBalance
                                                                    )
                                                                    .map((e, s) =>
                                                                        (0, t.jsxs)(
                                                                            "tr",
                                                                            {
                                                                                className: "hover:bg-gray-50",
                                                                                children: [
                                                                                    (0, t.jsxs)("td", {
                                                                                        className:
                                                                                            "px-3 py-2 whitespace-nowrap text-xs text-gray-900",
                                                                                        children: ["Year ", e.year],
                                                                                    }),
                                                                                    (0, t.jsx)("td", {
                                                                                        className:
                                                                                            "px-3 py-2 whitespace-nowrap text-xs text-gray-900",
                                                                                        children: (0, n.vv)(
                                                                                            e.openingBalance
                                                                                        ),
                                                                                    }),
                                                                                    (0, t.jsx)("td", {
                                                                                        className:
                                                                                            "px-3 py-2 whitespace-nowrap text-xs text-gray-900",
                                                                                        children: (0, n.vv)(12 * e.emi),
                                                                                    }),
                                                                                    (0, t.jsx)("td", {
                                                                                        className:
                                                                                            "px-3 py-2 whitespace-nowrap text-xs text-gray-900",
                                                                                        children: (0, n.vv)(
                                                                                            e.totalPrincipalPaid
                                                                                        ),
                                                                                    }),
                                                                                    (0, t.jsx)("td", {
                                                                                        className:
                                                                                            "px-3 py-2 whitespace-nowrap text-xs text-gray-900",
                                                                                        children: (0, n.vv)(
                                                                                            e.totalInterestPaid
                                                                                        ),
                                                                                    }),
                                                                                    (0, t.jsx)("td", {
                                                                                        className:
                                                                                            "px-3 py-2 whitespace-nowrap text-xs text-gray-900",
                                                                                        children: (0, n.vv)(
                                                                                            e.closingBalance
                                                                                        ),
                                                                                    }),
                                                                                ],
                                                                            },
                                                                            s
                                                                        )
                                                                    ),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        a &&
                        s &&
                        (0, t.jsxs)("div", {
                            className: "grid md:grid-cols-2 gap-8 lg:gap-10 mt-8 lg:mt-12",
                            children: [
                                (0, t.jsxs)("div", {
                                    className:
                                        "bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100",
                                    children: [
                                        (0, t.jsx)("h3", {
                                            className:
                                                "text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6",
                                            children: "Eligibility Criteria",
                                        }),
                                        (0, t.jsx)("ul", {
                                            className: "space-y-2",
                                            children: s.eligibilityCriteria.map((e, s) =>
                                                (0, t.jsxs)(
                                                    "li",
                                                    {
                                                        className: "flex items-start",
                                                        children: [
                                                            (0, t.jsx)("svg", {
                                                                className:
                                                                    "w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: (0, t.jsx)("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                    clipRule: "evenodd",
                                                                }),
                                                            }),
                                                            (0, t.jsx)("span", {
                                                                className: "text-gray-700",
                                                                children: e,
                                                            }),
                                                        ],
                                                    },
                                                    s
                                                )
                                            ),
                                        }),
                                    ],
                                }),
                                (0, t.jsxs)("div", {
                                    className:
                                        "bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100",
                                    children: [
                                        (0, t.jsx)("h3", {
                                            className:
                                                "text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6",
                                            children: "Documents Required",
                                        }),
                                        (0, t.jsx)("ul", {
                                            className: "space-y-2",
                                            children: s.documentsRequired.map((e, s) =>
                                                (0, t.jsxs)(
                                                    "li",
                                                    {
                                                        className: "flex items-start",
                                                        children: [
                                                            (0, t.jsx)("svg", {
                                                                className:
                                                                    "w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: (0, t.jsx)("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                                                                    clipRule: "evenodd",
                                                                }),
                                                            }),
                                                            (0, t.jsx)("span", {
                                                                className: "text-gray-700",
                                                                children: e,
                                                            }),
                                                        ],
                                                    },
                                                    s
                                                )
                                            ),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            }
        },
    },
]);
