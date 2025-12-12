"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [592],
    {
        79: (e, r, a) => {
            a.d(r, { default: () => o });
            var t = a(5155),
                s = a(2115);
            let i = [
                {
                    id: "cibil-score-accuracy",
                    question:
                        "How accurate is the Credit score you provide for customers?",
                    answer:
                        "We provide authentic Credit scores and reports from Equifax, which is the most widely used Credit bureau in India. This is the same score used by major banks like SBI, HDFC, and ICICI when evaluating loan applications. As per RBI guidelines, our scores are updated monthly and provide an accurate reflection of your current Credit standing across all financial institutions. Our platform also provides insights from other Credit bureaus like Experian and CRIF Highmark for a comprehensive view.",
                    category: "Credit-score",
                },
                {
                    id: "loan-offers-matching",
                    question: "How do you determine which bank loan offers to show me?",
                    answer:
                        "We analyze your Credit score, income documents (Form 16, ITR, salary slips), and other financial factors aligned with bank requirements to match you with lenders most likely to approve your application. Our pre-qualification process uses a soft Credit inquiry, which doesn't affect your Credit score as per RBI regulations. We show you personalized rates and terms from multiple banks like SBI, HDFC, ICICI, Axis and others, allowing you to compare EMIs, interest rates, processing fees, and prepayment options to choose the best fit for your needs. We also factor in bank-specific offerings like SBI MaxGain, HDFC Home Saver, or special rates for women borrowers as per government initiatives.",
                    category: "loans",
                },
                {
                    id: "digital-gold-safety",
                    question:
                        "Is digital gold a safe investment for Indians compared to traditional gold?",
                    answer:
                        "Yes, digital gold is a secure investment aligned with India's strong cultural affinity for gold. Each unit of digital gold is backed by 24K physical gold of 99.9% purity (BIS standard), stored in secure vaults approved by the Bullion Association. The gold is fully insured and regularly audited by independent agencies as per SEBI guidelines. For investors, digital gold offers all the traditional benefits of physical gold (auspicious for occasions like Dhanteras and Akshaya Tritiya) without storage or security concerns of keeping gold at home. You can buy as little as ₹10 worth (unlike minimum 1 gram for physical gold), accumulate systematically, and sell 24/7 at transparent market rates with minimal transaction fees. Digital gold can also be converted to physical delivery for occasions like weddings, and provides proper GST invoicing for transparency.",
                    category: "digital-gold",
                },
                {
                    id: "improve-cibil-score",
                    question: "How can I improve my Credit score in the Credit system?",
                    answer:
                        "Improving your Credit score in India involves several key strategies aligned with the Credit system: pay all loan EMIs and Credit card bills on time (this has 35% impact on your score), maintain Credit utilization below 30% on Credit cards, avoid applying for multiple loans or cards in a short period (each application creates a hard inquiry visible to banks), keep old Credit accounts open to maintain a longer Credit history (especially your first Credit card), ensure your Aadhaar and PAN details are correctly linked to all financial accounts, and regularly check your Credit Score report for errors or fraud. As per RBI guidelines, cleared loans remain on your report for 7 years, so maintaining good repayment history is crucial. Our platform provides personalized recommendations based on your specific Credit profile and monitors your progress over time with alerts for any changes.",
                    category: "Credit-score",
                },
                {
                    id: "Credit-card-recommendations",
                    question:
                        "What makes your Credit card recommendations different for consumers?",
                    answer:
                        "Our Credit card recommendations are uniquely tailored for the market, considering factors like your spending in rupees across categories (groceries, dining, fuel, e-commerce), specific merchant tie-ups (like BigBasket, Swiggy, or IRCTC), domestic and international travel benefits relevant to travelers, and festival/seasonal offers from banks. We analyze rewards programs (cashback vs reward points), annual fees (including GST), interest rates, joining/renewal benefits, and card features to match you with options that maximize value for your lifestyle. Our platform shows Indian-specific benefits like airport lounge access in airports, fuel surcharge waivers at petrol pumps, EMI conversion options, and Zomato/Swiggy privileges. Unlike generic comparison sites, we show your approval probability for each card based on your Credit score and income, helping you apply with confidence while minimizing rejection risks that could impact your Credit score.",
                    category: "Credit-cards",
                },
            ];
            function n(e) {
                let { question: r, answer: a, index: i, isOpen: n, onToggle: o } = e,
                    l = (0, s.useRef)(null),
                    [d, c] = (0, s.useState)(0);
                return (
                    (0, s.useEffect)(() => {
                        if (l.current) {
                            let e = l.current.scrollHeight;
                            c(n ? e : 0);
                        }
                    }, [n, a]),
                    (0, t.jsx)("div", {
                        className: "group",
                        children: (0, t.jsxs)("div", {
                            className: "faq",
                            children: [
                                (0, t.jsxs)("button", {
                                    type: "button",
                                    className:
                                        "flex w-full items-center justify-between py-5 text-left transition-all duration-200 ".concat(
                                            n
                                                ? "text-primary dark:text-primaryLight"
                                                : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                                        ),
                                    "aria-controls": "faq-".concat(i),
                                    "aria-expanded": n,
                                    onClick: o,
                                    children: [
                                        (0, t.jsxs)("span", {
                                            className: "flex items-start pr-8",
                                            children: [
                                                (0, t.jsx)("span", {
                                                    className:
                                                        "mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ".concat(
                                                            n
                                                                ? "bg-primary/10 text-primary dark:bg-primaryLight/10 dark:text-primaryLight"
                                                                : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-500 dark:group-hover:bg-gray-700"
                                                        ),
                                                    children: (0, t.jsx)("span", {
                                                        className: "text-sm font-semibold",
                                                        children: (i + 1).toString().padStart(2, "0"),
                                                    }),
                                                }),
                                                (0, t.jsx)("span", {
                                                    className:
                                                        "text-lg font-medium transition-colors duration-200 ".concat(
                                                            n ? "text-gray-900 dark:text-white" : ""
                                                        ),
                                                    children: r,
                                                }),
                                            ],
                                        }),
                                        (0, t.jsx)("span", {
                                            className:
                                                "ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ".concat(
                                                    n
                                                        ? "bg-primary/10 dark:bg-primaryLight/10"
                                                        : "bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700"
                                                ),
                                            children: (0, t.jsx)("svg", {
                                                className:
                                                    "h-5 w-5 transform transition-all duration-300 ".concat(
                                                        n
                                                            ? "rotate-180 text-primary dark:text-primaryLight"
                                                            : "rotate-0 text-gray-400 dark:text-gray-500"
                                                    ),
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "2",
                                                stroke: "currentColor",
                                                "aria-hidden": "true",
                                                children: (0, t.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, t.jsx)("div", {
                                    className:
                                        "faq-answer overflow-hidden transition-all duration-300 ease-in-out",
                                    style: { maxHeight: "".concat(d, "px") },
                                    id: "faq-".concat(i),
                                    "aria-hidden": !n,
                                    children: (0, t.jsx)("div", {
                                        ref: l,
                                        children: (0, t.jsx)("div", {
                                            className: "pb-4 sm:pb-6 pl-10 sm:pl-16 pr-4 sm:pr-8",
                                            children: (0, t.jsx)("p", {
                                                className:
                                                    "text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400",
                                                children: a,
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            }
            function o() {
                let {
                    faqs: e,
                    title: r = "Frequently Asked Questions",
                    subtitle:
                    a = "Find answers to commonly asked questions about our financial services.",
                } = arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    [o, l] = (0, s.useState)(null),
                    d = e || i,
                    c = d.length,
                    m = (0, s.useCallback)((e) => {
                        l((r) => (r === e ? null : e));
                    }, []);
                return (
                    (0, s.useEffect)(() => {
                        let e = (e) => {
                            if (e.target && e.target.closest(".faq"))
                                switch (e.key) {
                                    case "ArrowDown":
                                        e.preventDefault(),
                                            null === o || o === c - 1 ? l(0) : l(o + 1);
                                        break;
                                    case "ArrowUp":
                                        e.preventDefault(),
                                            null === o || 0 === o ? l(c - 1) : l(o - 1);
                                        break;
                                    case "Home":
                                        e.preventDefault(), l(0);
                                        break;
                                    case "End":
                                        e.preventDefault(), l(c - 1);
                                        break;
                                    case "Escape":
                                        e.preventDefault(), l(null);
                                }
                        };
                        return (
                            document.addEventListener("keydown", e),
                            () => document.removeEventListener("keydown", e)
                        );
                    }, [o, c]),
                    (0, t.jsxs)("section", {
                        id: "faqs",
                        className:
                            "relative py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50",
                        "aria-labelledby": "faq-heading",
                        children: [
                            (0, t.jsx)("div", {
                                className:
                                    "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700",
                            }),
                            (0, t.jsxs)("div", {
                                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: "mx-auto max-w-3xl text-center",
                                        children: [
                                            (0, t.jsxs)("div", {
                                                className:
                                                    "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                                children: [
                                                    (0, t.jsx)("svg", {
                                                        className: "h-4 w-4",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: (0, t.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                                        }),
                                                    }),
                                                    (0, t.jsx)("span", { children: "Help & Support" }),
                                                ],
                                            }),
                                            (0, t.jsx)("h2", {
                                                id: "faq-heading",
                                                className:
                                                    "mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",
                                                children: r,
                                            }),
                                            a &&
                                            (0, t.jsx)("p", {
                                                className:
                                                    "mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300",
                                                children: a,
                                            }),
                                        ],
                                    }),
                                    (0, t.jsx)("div", {
                                        className: "mx-auto mt-16 max-w-4xl",
                                        children: (0, t.jsx)("div", {
                                            className:
                                                "rounded-2xl bg-white p-2 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800",
                                            children: (0, t.jsx)("div", {
                                                className:
                                                    "divide-y divide-gray-200 dark:divide-gray-800",
                                                role: "region",
                                                "aria-label": "Frequently asked questions",
                                                children: d.map((e, r) =>
                                                    (0, t.jsx)(
                                                        "div",
                                                        {
                                                            className:
                                                                "rounded-xl transition-colors duration-200 ".concat(
                                                                    o === r
                                                                        ? "bg-gray-50 dark:bg-gray-800/50"
                                                                        : "hover:bg-gray-50 dark:hover:bg-gray-800/30"
                                                                ),
                                                            children: (0, t.jsx)("div", {
                                                                className: "px-6",
                                                                children: (0, t.jsx)(n, {
                                                                    question: e.question,
                                                                    answer: e.answer,
                                                                    index: r,
                                                                    isOpen: o === r,
                                                                    onToggle: () => m(r),
                                                                }),
                                                            }),
                                                        },
                                                        r
                                                    )
                                                ),
                                            }),
                                        }),
                                    }),
                                    (0, t.jsx)("div", {
                                        className: "mt-12 text-center",
                                        children: (0, t.jsxs)("p", {
                                            className: "text-base text-gray-600 dark:text-gray-400",
                                            children: [
                                                "Still have questions?",
                                                " ",
                                                (0, t.jsx)("a", {
                                                    href: "mailto:askus@myCredifyy.com",
                                                    className:
                                                        "font-medium text-primary hover:text-primaryLight dark:text-primaryLight dark:hover:text-primary transition-colors duration-200",
                                                    children: "Contact our support team",
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            }
        },
        3999: (e, r, a) => {
            function t(e) {
                return Number(e).toLocaleString("en-IN");
            }
            function s(e) {
                let r =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { symbol: a = !0, decimals: t = 0 } = r,
                    s = Number(e).toLocaleString("en-IN", {
                        minimumFractionDigits: t,
                        maximumFractionDigits: t,
                    });
                return a ? "₹".concat(s) : s;
            }
            function i(e) {
                let r =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                return "".concat(Number(e).toFixed(r), "%");
            }
            function n() {
                for (var e = arguments.length, r = Array(e), a = 0; a < e; a++)
                    r[a] = arguments[a];
                return r.filter(Boolean).join(" ").trim();
            }
            a.d(r, { Ee: () => i, cn: () => n, mC: () => t, vv: () => s });
        },
        4265: (e, r, a) => {
            a.d(r, { BankHeroSection: () => d });
            var t = a(5155);
            a(2115);
            var s = a(6874),
                i = a.n(s),
                n = a(3999),
                o = a(9775);
            function l(e) {
                let { children: r, type: a = "float", className: s } = e;
                return (0, t.jsx)("div", {
                    className: (0, n.cn)(
                        "pointer-events-none select-none",
                        "animate-pulse",
                        s
                    ),
                    style: {
                        animationDuration:
                            "gentle-parallax" === a ? "8s" : "breathing" === a ? "4s" : "6s",
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                        animationDirection: "alternate",
                    },
                    children: r,
                });
            }
            function d(e) {
                let { bank: r, mclrRate: a } = e,
                    s = r.interestRates.min,
                    d = r.loanAmounts.max,
                    c = r.tenures.max,
                    m = s / 12 / 100,
                    x = (5e6 * m * Math.pow(1 + m, 240)) / (Math.pow(1 + m, 240) - 1);
                return (0, t.jsxs)("section", {
                    className:
                        "relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-20 sm:py-24 lg:py-32",
                    children: [
                        (0, t.jsx)("div", {
                            className:
                                "absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-900 bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
                        }),
                        (0, t.jsx)(l, {
                            type: "float",
                            children: (0, t.jsx)("div", {
                                className:
                                    "absolute -left-12 -top-12 sm:-left-24 sm:-top-24 lg:-left-48 lg:-top-48 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[600px] lg:w-[600px] rounded-full bg-primary/20 blur-3xl",
                            }),
                        }),
                        (0, t.jsx)(l, {
                            type: "breathing",
                            children: (0, t.jsx)("div", {
                                className:
                                    "absolute -right-12 -bottom-12 sm:-right-24 sm:-bottom-24 lg:-right-48 lg:-bottom-48 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[600px] lg:w-[600px] rounded-full bg-secondary/20 blur-3xl",
                            }),
                        }),
                        (0, t.jsx)("div", {
                            className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                            children: (0, t.jsxs)("div", {
                                className: "grid gap-12 lg:grid-cols-2 lg:gap-16 items-center",
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: "space-y-8",
                                        children: [
                                            (0, t.jsx)(o.default, {
                                                animation: "gentle-fade-up",
                                                children: (0, t.jsxs)("div", {
                                                    className:
                                                        "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primary/20 dark:text-primary",
                                                    children: [
                                                        (0, t.jsxs)("span", {
                                                            className: "relative flex h-2 w-2",
                                                            children: [
                                                                (0, t.jsx)("span", {
                                                                    className:
                                                                        "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75",
                                                                }),
                                                                (0, t.jsx)("span", {
                                                                    className:
                                                                        "relative inline-flex rounded-full h-2 w-2 bg-primary",
                                                                }),
                                                            ],
                                                        }),
                                                        r.name,
                                                        " Home Loans",
                                                    ],
                                                }),
                                            }),
                                            (0, t.jsx)(o.default, {
                                                animation: "gentle-fade-up",
                                                delay: 100,
                                                children: (0, t.jsxs)("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        (0, t.jsxs)("h1", {
                                                            className:
                                                                "text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl",
                                                            children: [
                                                                r.name,
                                                                (0, t.jsx)("span", {
                                                                    className:
                                                                        "block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
                                                                    children: "Home Loan Interest Rates",
                                                                }),
                                                            ],
                                                        }),
                                                        (0, t.jsx)("p", {
                                                            className:
                                                                "text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed",
                                                            children: r.description,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, t.jsx)(o.default, {
                                                animation: "gentle-fade-up",
                                                delay: 200,
                                                children: (0, t.jsxs)("div", {
                                                    className: "space-y-6",
                                                    children: [
                                                        (0, t.jsxs)("div", {
                                                            className: "flex flex-wrap gap-4",
                                                            children: [
                                                                (0, t.jsxs)(i(), {
                                                                    href: "https://pulse.Credifyy.com/users/sign-up/",
                                                                    className:
                                                                        "group relative inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primaryLight hover:shadow-xl hover:shadow-primary/25 dark:bg-primaryLight dark:text-gray-900 dark:hover:bg-primary dark:hover:text-white dark:hover:shadow-primaryLight/25 sm:px-8 sm:py-4 sm:text-base",
                                                                    children: [
                                                                        "Apply Now",
                                                                        (0, t.jsx)("svg", {
                                                                            className:
                                                                                "ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 sm:h-5 sm:w-5",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            children: (0, t.jsx)("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M13 7l5 5m0 0l-5 5m5-5H6",
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, t.jsxs)(i(), {
                                                                    href: "/calculators/emi",
                                                                    className:
                                                                        "group inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:text-white sm:px-8 sm:py-4 sm:text-base",
                                                                    children: [
                                                                        "Calculate EMI",
                                                                        (0, t.jsx)("svg", {
                                                                            className:
                                                                                "ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 sm:h-5 sm:w-5",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            children: (0, t.jsx)("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        a &&
                                                        (0, t.jsxs)("div", {
                                                            className:
                                                                "inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400",
                                                            children: [
                                                                (0, t.jsx)("svg", {
                                                                    className: "h-4 w-4",
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
                                                                (0, t.jsxs)("span", {
                                                                    children: [
                                                                        "1-Year MCLR: ",
                                                                        (0, t.jsxs)("strong", {
                                                                            children: [a, "%"],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, t.jsxs)("div", {
                                        className: "grid grid-cols-2 gap-4 sm:gap-6",
                                        children: [
                                            (0, t.jsx)(o.default, {
                                                animation: "gentle-scale",
                                                delay: 300,
                                                children: (0, t.jsxs)("div", {
                                                    className:
                                                        "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                                                    children: [
                                                        (0, t.jsx)("div", {
                                                            className:
                                                                "absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-400/10 group-hover:to-green-400/20 transition-colors duration-300",
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                (0, t.jsx)("div", {
                                                                    className:
                                                                        "flex items-center justify-between",
                                                                    children: (0, t.jsx)("div", {
                                                                        className: "rounded-lg bg-green-500/20 p-3",
                                                                        children: (0, t.jsx)("svg", {
                                                                            className:
                                                                                "h-6 w-6 text-green-600 dark:text-green-400",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: (0, t.jsx)("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, t.jsxs)("div", {
                                                                    className: "mt-4",
                                                                    children: [
                                                                        (0, t.jsx)("h3", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-600 dark:text-gray-400",
                                                                            children: "Starting Rate",
                                                                        }),
                                                                        (0, t.jsxs)("p", {
                                                                            className:
                                                                                "mt-1 text-2xl font-bold text-gray-900 dark:text-white",
                                                                            children: [s, "% p.a."],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, t.jsx)(o.default, {
                                                animation: "gentle-scale",
                                                delay: 400,
                                                children: (0, t.jsxs)("div", {
                                                    className:
                                                        "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                                                    children: [
                                                        (0, t.jsx)("div", {
                                                            className:
                                                                "absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/10 group-hover:to-blue-400/20 transition-colors duration-300",
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                (0, t.jsx)("div", {
                                                                    className:
                                                                        "flex items-center justify-between",
                                                                    children: (0, t.jsx)("div", {
                                                                        className: "rounded-lg bg-blue-500/20 p-3",
                                                                        children: (0, t.jsx)("svg", {
                                                                            className:
                                                                                "h-6 w-6 text-blue-600 dark:text-blue-400",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: (0, t.jsx)("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, t.jsxs)("div", {
                                                                    className: "mt-4",
                                                                    children: [
                                                                        (0, t.jsx)("h3", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-600 dark:text-gray-400",
                                                                            children: "Max Loan Amount",
                                                                        }),
                                                                        (0, t.jsx)("p", {
                                                                            className:
                                                                                "mt-1 text-2xl font-bold text-gray-900 dark:text-white",
                                                                            children: (0, n.vv)(d),
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, t.jsx)(o.default, {
                                                animation: "gentle-scale",
                                                delay: 500,
                                                children: (0, t.jsxs)("div", {
                                                    className:
                                                        "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                                                    children: [
                                                        (0, t.jsx)("div", {
                                                            className:
                                                                "absolute inset-0 bg-gradient-to-br from-purple-400/0 to-purple-400/10 group-hover:to-purple-400/20 transition-colors duration-300",
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                (0, t.jsx)("div", {
                                                                    className:
                                                                        "flex items-center justify-between",
                                                                    children: (0, t.jsx)("div", {
                                                                        className:
                                                                            "rounded-lg bg-purple-500/20 p-3",
                                                                        children: (0, t.jsx)("svg", {
                                                                            className:
                                                                                "h-6 w-6 text-purple-600 dark:text-purple-400",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: (0, t.jsx)("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, t.jsxs)("div", {
                                                                    className: "mt-4",
                                                                    children: [
                                                                        (0, t.jsx)("h3", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-600 dark:text-gray-400",
                                                                            children: "Max Tenure",
                                                                        }),
                                                                        (0, t.jsxs)("p", {
                                                                            className:
                                                                                "mt-1 text-2xl font-bold text-gray-900 dark:text-white",
                                                                            children: [c, " years"],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, t.jsx)(o.default, {
                                                animation: "gentle-scale",
                                                delay: 600,
                                                children: (0, t.jsxs)("div", {
                                                    className:
                                                        "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                                                    children: [
                                                        (0, t.jsx)("div", {
                                                            className:
                                                                "absolute inset-0 bg-gradient-to-br from-orange-400/0 to-orange-400/10 group-hover:to-orange-400/20 transition-colors duration-300",
                                                        }),
                                                        (0, t.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                (0, t.jsx)("div", {
                                                                    className:
                                                                        "flex items-center justify-between",
                                                                    children: (0, t.jsx)("div", {
                                                                        className:
                                                                            "rounded-lg bg-orange-500/20 p-3",
                                                                        children: (0, t.jsx)("svg", {
                                                                            className:
                                                                                "h-6 w-6 text-orange-600 dark:text-orange-400",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: (0, t.jsx)("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, t.jsxs)("div", {
                                                                    className: "mt-4",
                                                                    children: [
                                                                        (0, t.jsx)("h3", {
                                                                            className:
                                                                                "text-sm font-medium text-gray-600 dark:text-gray-400",
                                                                            children: "EMI for ₹50L",
                                                                        }),
                                                                        (0, t.jsx)("p", {
                                                                            className:
                                                                                "mt-1 text-2xl font-bold text-gray-900 dark:text-white",
                                                                            children: (0, n.vv)(Math.round(x)),
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                });
            }
        },
        5132: (e, r, a) => {
            a.d(r, { BankEligibilitySection: () => i });
            var t = a(5155);
            a(2115);
            var s = a(9775);
            function i(e) {
                let { bank: r } = e;
                return (0, t.jsxs)("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: [
                        (0, t.jsx)(s.default, {
                            animation: "gentle-fade-up",
                            children: (0, t.jsxs)("div", {
                                className: "text-center mb-12",
                                children: [
                                    (0, t.jsxs)("div", {
                                        className:
                                            "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight mb-6",
                                        children: [
                                            (0, t.jsx)("svg", {
                                                className: "h-4 w-4",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: (0, t.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                                }),
                                            }),
                                            (0, t.jsx)("span", { children: "Eligibility" }),
                                        ],
                                    }),
                                    (0, t.jsx)("h2", {
                                        className:
                                            "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",
                                        children: "Eligibility & Documentation",
                                    }),
                                    (0, t.jsxs)("p", {
                                        className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
                                        children: [
                                            "Check if you qualify for ",
                                            r.name,
                                            " home loan and documents required",
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        (0, t.jsxs)("div", {
                            className: "grid gap-12 lg:grid-cols-2",
                            children: [
                                (0, t.jsx)(s.default, {
                                    animation: "gentle-slide-in",
                                    delay: 100,
                                    children: (0, t.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            (0, t.jsx)("div", {
                                                className:
                                                    "absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl",
                                            }),
                                            (0, t.jsxs)("div", {
                                                className:
                                                    "relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8",
                                                children: [
                                                    (0, t.jsxs)("div", {
                                                        className: "flex items-center mb-6",
                                                        children: [
                                                            (0, t.jsx)("div", {
                                                                className:
                                                                    "flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-secondary",
                                                                children: (0, t.jsx)("svg", {
                                                                    className: "h-6 w-6 text-white",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: (0, t.jsx)("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                                                    }),
                                                                }),
                                                            }),
                                                            (0, t.jsx)("h3", {
                                                                className:
                                                                    "ml-4 text-xl font-semibold text-gray-900 dark:text-white",
                                                                children: "Eligibility Criteria",
                                                            }),
                                                        ],
                                                    }),
                                                    (0, t.jsx)("ul", {
                                                        className: "space-y-4",
                                                        children: r.eligibilityCriteria.map((e, r) =>
                                                            (0, t.jsxs)(
                                                                "li",
                                                                {
                                                                    className: "flex items-start",
                                                                    children: [
                                                                        (0, t.jsx)("svg", {
                                                                            className:
                                                                                "h-5 w-5 text-green-500 mt-0.5 flex-shrink-0",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: (0, t.jsx)("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M5 13l4 4L19 7",
                                                                            }),
                                                                        }),
                                                                        (0, t.jsx)("span", {
                                                                            className:
                                                                                "ml-3 text-gray-700 dark:text-gray-300",
                                                                            children: e,
                                                                        }),
                                                                    ],
                                                                },
                                                                r
                                                            )
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                (0, t.jsx)(s.default, {
                                    animation: "gentle-slide-right",
                                    delay: 200,
                                    children: (0, t.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            (0, t.jsx)("div", {
                                                className:
                                                    "absolute -inset-4 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl blur-xl",
                                            }),
                                            (0, t.jsxs)("div", {
                                                className:
                                                    "relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8",
                                                children: [
                                                    (0, t.jsxs)("div", {
                                                        className: "flex items-center mb-6",
                                                        children: [
                                                            (0, t.jsx)("div", {
                                                                className:
                                                                    "flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-secondary to-primary",
                                                                children: (0, t.jsx)("svg", {
                                                                    className: "h-6 w-6 text-white",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: (0, t.jsx)("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                                                    }),
                                                                }),
                                                            }),
                                                            (0, t.jsx)("h3", {
                                                                className:
                                                                    "ml-4 text-xl font-semibold text-gray-900 dark:text-white",
                                                                children: "Documents Required",
                                                            }),
                                                        ],
                                                    }),
                                                    (0, t.jsx)("ul", {
                                                        className: "space-y-4",
                                                        children: r.documentsRequired.map((e, r) =>
                                                            (0, t.jsxs)(
                                                                "li",
                                                                {
                                                                    className: "flex items-start",
                                                                    children: [
                                                                        (0, t.jsx)("svg", {
                                                                            className:
                                                                                "h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: (0, t.jsx)("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                                                                            }),
                                                                        }),
                                                                        (0, t.jsx)("span", {
                                                                            className:
                                                                                "ml-3 text-gray-700 dark:text-gray-300",
                                                                            children: e,
                                                                        }),
                                                                    ],
                                                                },
                                                                r
                                                            )
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, t.jsx)(s.default, {
                            animation: "gentle-fade-up",
                            delay: 300,
                            children: (0, t.jsxs)("div", {
                                className:
                                    "mt-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 text-center",
                                children: [
                                    (0, t.jsx)("h3", {
                                        className:
                                            "text-xl font-semibold text-gray-900 dark:text-white mb-4",
                                        children: "Processing Fees",
                                    }),
                                    (0, t.jsxs)("div", {
                                        className:
                                            "flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-700 dark:text-gray-300",
                                        children: [
                                            (0, t.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    (0, t.jsx)("svg", {
                                                        className: "h-5 w-5 text-primary mr-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: (0, t.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                                        }),
                                                    }),
                                                    (0, t.jsxs)("span", {
                                                        children: [
                                                            (0, t.jsxs)("strong", {
                                                                children: [r.processingFees.percentage, "%"],
                                                            }),
                                                            " of loan amount",
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, t.jsx)("div", {
                                                className:
                                                    "hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600",
                                            }),
                                            (0, t.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    (0, t.jsx)("svg", {
                                                        className: "h-5 w-5 text-primary mr-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: (0, t.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                                                        }),
                                                    }),
                                                    (0, t.jsxs)("span", {
                                                        children: [
                                                            "Min: ",
                                                            (0, t.jsxs)("strong", {
                                                                children: [
                                                                    "₹",
                                                                    r.processingFees.minAmount.toLocaleString(
                                                                        "en-IN"
                                                                    ),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, t.jsx)("div", {
                                                className:
                                                    "hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600",
                                            }),
                                            (0, t.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    (0, t.jsx)("svg", {
                                                        className: "h-5 w-5 text-primary mr-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: (0, t.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
                                                        }),
                                                    }),
                                                    (0, t.jsxs)("span", {
                                                        children: [
                                                            "Max: ",
                                                            (0, t.jsxs)("strong", {
                                                                children: [
                                                                    "₹",
                                                                    r.processingFees.maxAmount.toLocaleString(
                                                                        "en-IN"
                                                                    ),
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
                        }),
                        (0, t.jsx)(s.default, {
                            animation: "gentle-fade-up",
                            delay: 400,
                            children: (0, t.jsxs)("div", {
                                className: "mt-12 text-center",
                                children: [
                                    (0, t.jsx)("p", {
                                        className: "text-lg text-gray-600 dark:text-gray-300 mb-6",
                                        children:
                                            "Meet all the eligibility criteria? Apply now for instant approval!",
                                    }),
                                    (0, t.jsxs)("a", {
                                        href: "https://pulse.Credifyy.com/users/sign-up/",
                                        className:
                                            "group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-primaryLight hover:shadow-xl dark:bg-primaryLight dark:text-gray-900 dark:hover:bg-primary dark:hover:text-white",
                                        children: [
                                            "Start Your Application",
                                            (0, t.jsx)("svg", {
                                                className:
                                                    "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, t.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M13 7l5 5m0 0l-5 5m5-5H6",
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                });
            }
        },
    },
]);
