(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7177], {
        3343: (e, a, r) => {
            "use strict";
            r.d(a, {
                default: () => d
            });
            var t = r(5155),
                s = r(2115),
                n = r(6874),
                l = r.n(n),
                i = r(6766),
                o = r(5695);

            function d() {
                let [e, a] = (0, s.useState)(!1), [r, n] = (0, s.useState)({}), [d, c] = (0, s.useState)(""), m = (0, o.usePathname)(), h = (0, s.useRef)(null), x = e => e.endsWith("/") ? e.slice(0, -1) : e, g = x(m), p = e => x(e) === g, u = e => {
                    n(a => ({
                        ...a,
                        [e]: !a[e]
                    }))
                };
                (0, s.useEffect)(() => {
                    let e = e => {
                        h.current && !h.current.contains(e.target) && n({})
                    };
                    return document.addEventListener("click", e), () => document.removeEventListener("click", e)
                }, []), (0, s.useEffect)(() => {
                    let e = () => {
                        window.innerWidth >= 1024 && n({})
                    };
                    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []);
                let y = ["SBI", "HDFC", "ICICI", "Axis", "Kotak", "PNB"],
                    b = e => d ? e.filter(e => e.label.toLowerCase().includes(d.toLowerCase())) : e,
                    f = e => !!d && b(e).length > 0,
                    k = () => !d || f(v.balanceTransferGuides) || f(v.interestRates) || f(v.emiCalculators),
                    v = {
                        personalizedHomeLoans: [{
                            href: "/loans/home-loan",
                            label: "Best Home Loan Rates"
                        }, {
                            href: "/loans/loan-against-property",
                            label: "Loan Against Property"
                        }, {
                            href: "/loans/nri-home-loans",
                            label: "NRI Home Loans India"
                        }, {
                            href: "/loans/top-up-home-loan",
                            label: "Top Up Home Loans"
                        }, {
                            href: "/loans/home-loan-without-itr",
                            label: "Home Loan Without ITR"
                        }, {
                            href: "/loans/home-loans-for-self-employed",
                            label: "Self Employed Home Loans"
                        }, {
                            href: "/loans/home-loans-for-salaried",
                            label: "Salaried Home Loans"
                        }, {
                            href: "/calculators/home-loan-emi-calculator",
                            label: "Home Loan EMI Calculator"
                        }, {
                            href: "/loans/home-loan-balance-transfer",
                            label: "Home Loan Balance Transfer"
                        }],
                        balanceTransferGuides: [{
                            href: "/balance-transfer-guides/sbi",
                            label: "SBI Home Loan Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/hdfc",
                            label: "HDFC Home Loan Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/icici",
                            label: "ICICI Home Loan Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/axis",
                            label: "Axis Home Loan Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/kotak",
                            label: "Kotak Home Loan Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/pnb",
                            label: "PNB Home Loan Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/bank-of-baroda",
                            label: "Bank of Baroda Home Loan Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/canara-bank",
                            label: "Canara Bank Home Loan Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/union-bank",
                            label: "Union Bank Home Loan Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/yes-bank",
                            label: "Yes Bank Home Loan Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/indian-bank",
                            label: "Indian Bank Home Loan Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/central-bank",
                            label: "Central Bank Home Loan Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/indian-overseas-bank",
                            label: "Indian Overseas Bank Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/uco-bank",
                            label: "UCO Bank Home Loan Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/idfc-first-bank",
                            label: "IDFC First Bank Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/au-small-finance-bank",
                            label: "AU Small Finance Bank Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/lic-housing-finance",
                            label: "LIC Housing Finance Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/bajaj-finserv",
                            label: "Bajaj Finserv Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/aditya-birla-capital",
                            label: "Aditya Birla Capital Balance Transfer Guide"
                        }, {
                            href: "/balance-transfer-guides/fullerton-india",
                            label: "Fullerton India Balance Transfer Guide"
                        }],
                        interestRates: [{
                            href: "/interest-rates/sbi",
                            label: "SBI Home Loan Interest Rates"
                        }, {
                            href: "/interest-rates/hdfc",
                            label: "HDFC Home Loan Interest Rates"
                        }, {
                            href: "/interest-rates/icici",
                            label: "ICICI Home Loan Interest Rates"
                        }, {
                            href: "/interest-rates/axis",
                            label: "Axis Home Loan Interest Rates"
                        }, {
                            href: "/interest-rates/kotak",
                            label: "Kotak Home Loan Interest Rates"
                        }, {
                            href: "/interest-rates/pnb",
                            label: "PNB Home Loan Interest Rates"
                        }, {
                            href: "/interest-rates/bank-of-baroda",
                            label: "Bank of Baroda Interest Rates"
                        }, {
                            href: "/interest-rates/canara-bank",
                            label: "Canara Bank Interest Rates"
                        }, {
                            href: "/interest-rates/union-bank",
                            label: "Union Bank Interest Rates"
                        }, {
                            href: "/interest-rates/yes-bank",
                            label: "Yes Bank Interest Rates"
                        }, {
                            href: "/interest-rates/indian-bank",
                            label: "Indian Bank Interest Rates"
                        }, {
                            href: "/interest-rates/central-bank",
                            label: "Central Bank Interest Rates"
                        }, {
                            href: "/interest-rates/indian-overseas-bank",
                            label: "Indian Overseas Bank Rates"
                        }, {
                            href: "/interest-rates/uco-bank",
                            label: "UCO Bank Interest Rates"
                        }, {
                            href: "/interest-rates/idfc-first-bank",
                            label: "IDFC First Bank Rates"
                        }, {
                            href: "/interest-rates/au-small-finance-bank",
                            label: "AU Small Finance Bank Rates"
                        }, {
                            href: "/interest-rates/lic-housing-finance",
                            label: "LIC Housing Finance Rates"
                        }, {
                            href: "/interest-rates/bajaj-finserv",
                            label: "Bajaj Finserv Interest Rates"
                        }, {
                            href: "/interest-rates/aditya-birla-capital",
                            label: "Aditya Birla Capital Rates"
                        }, {
                            href: "/interest-rates/fullerton-india",
                            label: "Fullerton India Rates"
                        }],
                        emiCalculators: [{
                            href: "/calculators/emi/sbi",
                            label: "SBI Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/hdfc",
                            label: "HDFC Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/icici",
                            label: "ICICI Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/axis",
                            label: "Axis Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/kotak",
                            label: "Kotak Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/pnb",
                            label: "PNB Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/bank-of-baroda",
                            label: "Bank of Baroda Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/canara-bank",
                            label: "Canara Bank Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/union-bank",
                            label: "Union Bank of India Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/yes-bank",
                            label: "Yes Bank Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/indian-bank",
                            label: "Indian Bank Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/central-bank",
                            label: "Central Bank of India Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/indian-overseas-bank",
                            label: "Indian Overseas Bank Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/uco-bank",
                            label: "UCO Bank Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/idfc-first-bank",
                            label: "IDFC First Bank Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/au-small-finance-bank",
                            label: "AU Small Finance Bank Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/lic-housing-finance",
                            label: "LIC Housing Finance Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/bajaj-finserv",
                            label: "Bajaj Finserv Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/aditya-birla-capital",
                            label: "Aditya Birla Capital Home Loan EMI Calculator"
                        }, {
                            href: "/calculators/emi/fullerton-india",
                            label: "Fullerton India Home Loan EMI Calculator"
                        }]
                    };
                return (0, t.jsx)("header", {
                    children: (0, t.jsx)("nav", {
                        id: "navbar",
                        className: "fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-white/95 backdrop-blur-lg dark:border-gray-700/30 dark:bg-gray-900/95",
                        children: (0, t.jsx)("div", {
                            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                            children: (0, t.jsxs)("div", {
                                className: "relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0 lg:py-5",
                                children: [(0, t.jsxs)("div", {
                                    className: "relative z-20 flex w-full justify-between md:px-0 lg:w-max",
                                    children: [(0, t.jsx)(l(), {
                                        href: "/",
                                        "aria-label": "Credifyy logo",
                                        className: "flex items-center space-x-2 transition-transform duration-200 hover:scale-105",
                                        children: (0, t.jsx)(i.default, {
                                            src: "/logo.png",
                                            alt: "Credifyy Logo",
                                            className: "h-7 w-auto md:h-8",
                                            width: 190,
                                            height: 28,
                                            priority: !0
                                        })
                                    }), (0, t.jsx)("button", {
                                        "aria-label": "Toggle navigation menu",
                                        id: "hamburger",
                                        className: "relative -mr-2 p-3 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden touch-manipulation min-h-[48px] min-w-[48px] flex items-center justify-center",
                                        onClick: () => a(!e),
                                        type: "button",
                                        children: (0, t.jsxs)("div", {
                                            className: "relative w-6 h-5",
                                            children: [(0, t.jsx)("div", {
                                                "aria-hidden": "true",
                                                className: "absolute h-0.5 w-6 rounded-full bg-gray-900 transition-all duration-300 dark:bg-gray-300 ".concat(e ? "rotate-45 top-2.5" : "top-0")
                                            }), (0, t.jsx)("div", {
                                                "aria-hidden": "true",
                                                className: "absolute h-0.5 w-6 rounded-full bg-gray-900 transition-all duration-300 dark:bg-gray-300 ".concat(e ? "opacity-0" : "top-2.5")
                                            }), (0, t.jsx)("div", {
                                                "aria-hidden": "true",
                                                className: "absolute h-0.5 w-6 rounded-full bg-gray-900 transition-all duration-300 dark:bg-gray-300 ".concat(e ? "-rotate-45 top-2.5" : "top-5")
                                            })]
                                        })
                                    })]
                                }), (0, t.jsx)("div", {
                                    "aria-hidden": "true",
                                    className: "fixed inset-0 z-10 h-screen w-screen origin-bottom bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-darker/70 lg:hidden ".concat(e ? "scale-y-100" : "scale-y-0"),
                                    onClick: () => a(!1)
                                }), (0, t.jsxs)("div", {
                                    ref: h,
                                    className: "absolute top-full left-0 z-20 w-full origin-top-right flex-col flex-wrap justify-end gap-6 rounded-b-2xl border-x border-b border-gray-100 bg-white p-4 sm:p-6 shadow-xl transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 max-h-[80vh] overflow-y-auto overscroll-contain lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:max-h-none lg:overflow-visible dark:lg:bg-transparent ".concat(e ? "visible translate-y-0 scale-100 opacity-100" : "invisible translate-y-1 scale-95 opacity-0"),
                                    children: [(0, t.jsx)("div", {
                                        className: "text-gray-600 dark:text-gray-300 lg:pr-4",
                                        children: (0, t.jsxs)("ul", {
                                            className: "space-y-4 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm lg:items-center",
                                            children: [(0, t.jsx)("li", {
                                                children: (0, t.jsx)(l(), {
                                                    href: "/Credit-score",
                                                    className: "nav-link block rounded-md px-3 py-3 lg:py-3 transition-all duration-200 hover:bg-gray-50 hover:text-primary dark:hover:bg-gray-800 dark:hover:text-primaryLight lg:px-4 min-h-[48px] flex items-center ".concat(p("/Credit-score") ? "text-primary dark:text-primaryLight font-semibold" : ""),
                                                    onClick: () => a(!1),
                                                    children: (0, t.jsx)("span", {
                                                        children: "Credit Score"
                                                    })
                                                })
                                            }), (0, t.jsxs)("li", {
                                                className: "group relative",
                                                children: [(0, t.jsxs)("button", {
                                                    className: "nav-link flex items-center rounded-md px-3 py-3 lg:py-3 transition-all duration-200 hover:bg-gray-50 hover:text-primary dark:hover:bg-gray-800 dark:hover:text-primaryLight lg:px-4 min-h-[48px] ".concat(m.startsWith("/loans") || m.startsWith("/balance-transfer-guides") || m.startsWith("/interest-rates") || m.startsWith("/calculators/emi") ? "text-primary dark:text-primaryLight font-semibold" : ""),
                                                    onClick: e => {
                                                        window.innerWidth < 1024 && (e.preventDefault(), u("loans"))
                                                    },
                                                    children: [(0, t.jsx)("span", {
                                                        children: "Loans"
                                                    }), (0, t.jsx)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: (0, t.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 9l-7 7-7-7"
                                                        })
                                                    })]
                                                }), (0, t.jsx)("div", {
                                                    className: "invisible absolute left-0 z-50 mt-2 hidden w-[800px] max-w-[90vw] rounded-lg bg-white opacity-0 shadow-xl ring-1 ring-black ring-opacity-5 transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:bg-gray-800 lg:block",
                                                    children: (0, t.jsx)("div", {
                                                        className: "p-6",
                                                        children: (0, t.jsxs)("div", {
                                                            className: "grid grid-cols-3 gap-6",
                                                            children: [(0, t.jsxs)("div", {
                                                                children: [(0, t.jsxs)("div", {
                                                                    className: "mb-4 flex items-center gap-2",
                                                                    children: [(0, t.jsx)("span", {
                                                                        className: "text-2xl",
                                                                        children: "\uD83C\uDFE0"
                                                                    }), (0, t.jsx)("h3", {
                                                                        className: "text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100",
                                                                        children: "Home Loans"
                                                                    })]
                                                                }), (0, t.jsx)("ul", {
                                                                    className: "space-y-2",
                                                                    children: v.personalizedHomeLoans.map(e => (0, t.jsx)("li", {
                                                                        children: (0, t.jsxs)(l(), {
                                                                            href: e.href,
                                                                            className: "block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primaryLight",
                                                                            onClick: () => a(!1),
                                                                            children: ["• ", e.label]
                                                                        })
                                                                    }, e.href))
                                                                })]
                                                            }), (0, t.jsxs)("div", {
                                                                children: [(0, t.jsxs)("div", {
                                                                    className: "mb-4 flex items-center gap-2",
                                                                    children: [(0, t.jsx)("span", {
                                                                        className: "text-2xl",
                                                                        children: "\uD83D\uDCB0"
                                                                    }), (0, t.jsx)("h3", {
                                                                        className: "text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100",
                                                                        children: "Other Loans"
                                                                    })]
                                                                }), (0, t.jsxs)("ul", {
                                                                    className: "space-y-2",
                                                                    children: [(0, t.jsx)("li", {
                                                                        children: (0, t.jsx)(l(), {
                                                                            href: "/loans/personal-loan",
                                                                            className: "block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primaryLight",
                                                                            onClick: () => a(!1),
                                                                            children: "• Personal Loan"
                                                                        })
                                                                    }), (0, t.jsx)("li", {
                                                                        children: (0, t.jsx)(l(), {
                                                                            href: "/loans/business-loan",
                                                                            className: "block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primaryLight",
                                                                            onClick: () => a(!1),
                                                                            children: "• Business Loan"
                                                                        })
                                                                    })]
                                                                }), (0, t.jsxs)("div", {
                                                                    className: "mt-6 mb-4 flex items-center gap-2",
                                                                    children: [(0, t.jsx)("span", {
                                                                        className: "text-2xl",
                                                                        children: "\uD83D\uDCCA"
                                                                    }), (0, t.jsx)("h3", {
                                                                        className: "text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100",
                                                                        children: "Tools"
                                                                    })]
                                                                }), (0, t.jsxs)("ul", {
                                                                    className: "space-y-2",
                                                                    children: [(0, t.jsx)("li", {
                                                                        children: (0, t.jsx)(l(), {
                                                                            href: "/calculators/home-loan-emi-calculator",
                                                                            className: "block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primaryLight",
                                                                            onClick: () => a(!1),
                                                                            children: "• EMI Calculator"
                                                                        })
                                                                    }), (0, t.jsx)("li", {
                                                                        children: (0, t.jsx)(l(), {
                                                                            href: "/calculators/buying-vs-renting-calculator",
                                                                            className: "block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primaryLight",
                                                                            onClick: () => a(!1),
                                                                            children: "• Buy vs Rent"
                                                                        })
                                                                    }), (0, t.jsx)("li", {
                                                                        children: (0, t.jsx)(l(), {
                                                                            href: "/interest-rates",
                                                                            className: "block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primaryLight",
                                                                            onClick: () => a(!1),
                                                                            children: "• Compare Rates"
                                                                        })
                                                                    })]
                                                                })]
                                                            }), (0, t.jsxs)("div", {
                                                                children: [(0, t.jsxs)("div", {
                                                                    className: "mb-4 flex items-center gap-2",
                                                                    children: [(0, t.jsx)("span", {
                                                                        className: "text-2xl",
                                                                        children: "\uD83C\uDFE6"
                                                                    }), (0, t.jsx)("h3", {
                                                                        className: "text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100",
                                                                        children: "By Bank"
                                                                    })]
                                                                }), (0, t.jsx)("div", {
                                                                    className: "mb-4",
                                                                    children: (0, t.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Search Bank",
                                                                        value: d,
                                                                        onChange: e => c(e.target.value),
                                                                        className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400",
                                                                        onClick: e => e.stopPropagation()
                                                                    })
                                                                }), k() ? (0, t.jsxs)("div", {
                                                                    className: "space-y-3",
                                                                    children: [(0, t.jsxs)("div", {
                                                                        children: [(0, t.jsxs)("button", {
                                                                            className: "flex w-full items-center justify-between rounded-md bg-gray-50 px-3 py-2 text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
                                                                            onClick: e => {
                                                                                e.preventDefault(), e.stopPropagation(), u("balanceTransfer")
                                                                            },
                                                                            children: [(0, t.jsxs)("span", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [(0, t.jsx)("span", {
                                                                                    className: "text-xs",
                                                                                    children: "\uD83D\uDCB1"
                                                                                }), "Balance Transfer", d && f(v.balanceTransferGuides.slice(1)) && (0, t.jsx)("span", {
                                                                                    className: "ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                                                                    children: b(v.balanceTransferGuides.slice(1)).length
                                                                                })]
                                                                            }), (0, t.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "h-4 w-4 transition-transform duration-200 ".concat(r.balanceTransfer || d && f(v.balanceTransferGuides.slice(1)) ? "rotate-90" : ""),
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                children: (0, t.jsx)("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M9 5l7 7-7 7"
                                                                                })
                                                                            })]
                                                                        }), (r.balanceTransfer || d && f(v.balanceTransferGuides.slice(1))) && (0, t.jsx)("div", {
                                                                            className: "mt-1 max-h-32 overflow-y-auto rounded-md bg-white p-2 shadow-sm dark:bg-gray-800",
                                                                            children: (0, t.jsx)("ul", {
                                                                                className: "space-y-1 text-xs",
                                                                                children: b(v.balanceTransferGuides.slice(1)).map(e => (0, t.jsx)("li", {
                                                                                    children: (0, t.jsx)(l(), {
                                                                                        href: e.href,
                                                                                        className: "block rounded px-2 py-1 text-gray-600 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primaryLight",
                                                                                        onClick: () => a(!1),
                                                                                        children: e.label.replace(" Home Loan Balance Transfer Guide", "").replace(" Balance Transfer Guide", "")
                                                                                    })
                                                                                }, e.href))
                                                                            })
                                                                        })]
                                                                    }), (0, t.jsxs)("div", {
                                                                        children: [(0, t.jsxs)("button", {
                                                                            className: "flex w-full items-center justify-between rounded-md bg-gray-50 px-3 py-2 text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
                                                                            onClick: e => {
                                                                                e.preventDefault(), e.stopPropagation(), u("interestRates")
                                                                            },
                                                                            children: [(0, t.jsxs)("span", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [(0, t.jsx)("span", {
                                                                                    className: "text-xs",
                                                                                    children: "\uD83D\uDCB0"
                                                                                }), "Interest Rates", d && f(v.interestRates) && (0, t.jsx)("span", {
                                                                                    className: "ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                                                                    children: b(v.interestRates).length
                                                                                })]
                                                                            }), (0, t.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "h-4 w-4 transition-transform duration-200 ".concat(r.interestRates || d && f(v.interestRates) ? "rotate-90" : ""),
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                children: (0, t.jsx)("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M9 5l7 7-7 7"
                                                                                })
                                                                            })]
                                                                        }), (r.interestRates || d && f(v.interestRates)) && (0, t.jsx)("div", {
                                                                            className: "mt-1 max-h-32 overflow-y-auto rounded-md bg-white p-2 shadow-sm dark:bg-gray-800",
                                                                            children: (0, t.jsx)("ul", {
                                                                                className: "space-y-1 text-xs",
                                                                                children: b(v.interestRates).map(e => (0, t.jsx)("li", {
                                                                                    children: (0, t.jsx)(l(), {
                                                                                        href: e.href,
                                                                                        className: "block rounded px-2 py-1 text-gray-600 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primaryLight",
                                                                                        onClick: () => a(!1),
                                                                                        children: e.label.replace(" Home Loan Interest Rates", "").replace(" Interest Rates", "").replace(" Rates", "")
                                                                                    })
                                                                                }, e.href))
                                                                            })
                                                                        })]
                                                                    }), (0, t.jsxs)("div", {
                                                                        children: [(0, t.jsxs)("button", {
                                                                            className: "flex w-full items-center justify-between rounded-md bg-gray-50 px-3 py-2 text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
                                                                            onClick: e => {
                                                                                e.preventDefault(), e.stopPropagation(), u("emiCalculators")
                                                                            },
                                                                            children: [(0, t.jsxs)("span", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [(0, t.jsx)("span", {
                                                                                    className: "text-xs",
                                                                                    children: "\uD83E\uDDEE"
                                                                                }), "EMI Calculators", d && f(v.emiCalculators) && (0, t.jsx)("span", {
                                                                                    className: "ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                                                                    children: b(v.emiCalculators).length
                                                                                })]
                                                                            }), (0, t.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "h-4 w-4 transition-transform duration-200 ".concat(r.emiCalculators || d && f(v.emiCalculators) ? "rotate-90" : ""),
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                children: (0, t.jsx)("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M9 5l7 7-7 7"
                                                                                })
                                                                            })]
                                                                        }), (r.emiCalculators || d && f(v.emiCalculators)) && (0, t.jsx)("div", {
                                                                            className: "mt-1 max-h-32 overflow-y-auto rounded-md bg-white p-2 shadow-sm dark:bg-gray-800",
                                                                            children: (0, t.jsx)("ul", {
                                                                                className: "space-y-1 text-xs",
                                                                                children: b(v.emiCalculators).map(e => (0, t.jsx)("li", {
                                                                                    children: (0, t.jsx)(l(), {
                                                                                        href: e.href,
                                                                                        className: "block rounded px-2 py-1 text-gray-600 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primaryLight",
                                                                                        onClick: () => a(!1),
                                                                                        children: e.label.replace(" Home Loan EMI Calculator", "").replace(" EMI Calculator", "").replace(" Calculator", "")
                                                                                    })
                                                                                }, e.href))
                                                                            })
                                                                        })]
                                                                    })]
                                                                }) : (0, t.jsxs)("div", {
                                                                    className: "py-8 text-center",
                                                                    children: [(0, t.jsx)("svg", {
                                                                        className: "mx-auto h-12 w-12 text-gray-400 dark:text-gray-500",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        children: (0, t.jsx)("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 1.5,
                                                                            d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                        })
                                                                    }), (0, t.jsx)("p", {
                                                                        className: "mt-2 text-sm font-medium text-gray-900 dark:text-gray-100",
                                                                        children: "No banks found"
                                                                    }), (0, t.jsx)("p", {
                                                                        className: "mt-1 text-xs text-gray-500 dark:text-gray-400",
                                                                        children: "Try searching for a different bank name"
                                                                    })]
                                                                }), !d && (0, t.jsxs)("div", {
                                                                    className: "mt-4 pt-3 border-t border-gray-200 dark:border-gray-600",
                                                                    children: [(0, t.jsx)("p", {
                                                                        className: "mb-2 text-xs font-medium uppercase text-gray-500 dark:text-gray-400",
                                                                        children: "Popular Banks:"
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "grid grid-cols-2 gap-1",
                                                                        children: y.map(e => (0, t.jsx)(l(), {
                                                                            href: "/interest-rates/".concat(e.toLowerCase()),
                                                                            className: "block rounded px-2 py-1 text-xs font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primaryLight text-center",
                                                                            onClick: () => a(!1),
                                                                            children: e
                                                                        }, e))
                                                                    })]
                                                                })]
                                                            })]
                                                        })
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: "lg:hidden ".concat(r.loans ? "max-h-[500px] opacity-100 visible overflow-y-auto transition-all duration-300" : "max-h-0 opacity-0 invisible overflow-hidden"),
                                                    children: (0, t.jsxs)("div", {
                                                        className: "mt-2 rounded-lg bg-gray-50 p-4 dark:bg-gray-800",
                                                        children: [(0, t.jsxs)("div", {
                                                            className: "mb-4",
                                                            children: [(0, t.jsx)("h3", {
                                                                className: "mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100",
                                                                children: "Quick Links"
                                                            }), (0, t.jsxs)("ul", {
                                                                className: "space-y-2",
                                                                children: [(0, t.jsx)("li", {
                                                                    children: (0, t.jsx)(l(), {
                                                                        href: "/loans/home-loan",
                                                                        className: "block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primaryLight",
                                                                        onClick: () => a(!1),
                                                                        children: "• Best Home Loan Rates"
                                                                    })
                                                                }), (0, t.jsx)("li", {
                                                                    children: (0, t.jsx)(l(), {
                                                                        href: "/calculators/home-loan-emi-calculator",
                                                                        className: "block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primaryLight",
                                                                        onClick: () => a(!1),
                                                                        children: "• EMI Calculator"
                                                                    })
                                                                }), (0, t.jsx)("li", {
                                                                    children: (0, t.jsx)(l(), {
                                                                        href: "/interest-rates",
                                                                        className: "block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primaryLight",
                                                                        onClick: () => a(!1),
                                                                        children: "• Compare Interest Rates"
                                                                    })
                                                                })]
                                                            })]
                                                        }), (0, t.jsxs)("div", {
                                                            className: "space-y-2",
                                                            children: [(0, t.jsxs)("div", {
                                                                children: [(0, t.jsxs)("button", {
                                                                    className: "flex w-full items-center justify-between rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100",
                                                                    onClick: () => u("mobileHomeLoans"),
                                                                    children: ["Home Loans", (0, t.jsx)("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className: "h-4 w-4 transition-transform duration-200 ".concat(r.mobileHomeLoans ? "rotate-180" : ""),
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        children: (0, t.jsx)("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M19 9l-7 7-7-7"
                                                                        })
                                                                    })]
                                                                }), r.mobileHomeLoans && (0, t.jsx)("ul", {
                                                                    className: "mt-2 space-y-1 pl-4",
                                                                    children: v.personalizedHomeLoans.map(e => (0, t.jsx)("li", {
                                                                        children: (0, t.jsx)(l(), {
                                                                            href: e.href,
                                                                            className: "block rounded px-3 py-2 text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight",
                                                                            onClick: () => a(!1),
                                                                            children: e.label
                                                                        })
                                                                    }, e.href))
                                                                })]
                                                            }), (0, t.jsxs)("div", {
                                                                children: [(0, t.jsxs)("button", {
                                                                    className: "flex w-full items-center justify-between rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100",
                                                                    onClick: () => u("mobileOtherLoans"),
                                                                    children: ["Other Loans", (0, t.jsx)("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className: "h-4 w-4 transition-transform duration-200 ".concat(r.mobileOtherLoans ? "rotate-180" : ""),
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        children: (0, t.jsx)("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M19 9l-7 7-7-7"
                                                                        })
                                                                    })]
                                                                }), r.mobileOtherLoans && (0, t.jsxs)("ul", {
                                                                    className: "mt-2 space-y-1 pl-4",
                                                                    children: [(0, t.jsx)("li", {
                                                                        children: (0, t.jsx)(l(), {
                                                                            href: "/loans/personal-loan",
                                                                            className: "block rounded px-3 py-2 text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight",
                                                                            onClick: () => a(!1),
                                                                            children: "Personal Loan"
                                                                        })
                                                                    }), (0, t.jsx)("li", {
                                                                        children: (0, t.jsx)(l(), {
                                                                            href: "/loans/business-loan",
                                                                            className: "block rounded px-3 py-2 text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight",
                                                                            onClick: () => a(!1),
                                                                            children: "Business Loan"
                                                                        })
                                                                    })]
                                                                })]
                                                            }), (0, t.jsxs)("div", {
                                                                children: [(0, t.jsxs)("button", {
                                                                    className: "flex w-full items-center justify-between rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100",
                                                                    onClick: () => u("mobileFindByBank"),
                                                                    children: ["Find by Bank", (0, t.jsx)("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className: "h-4 w-4 transition-transform duration-200 ".concat(r.mobileFindByBank ? "rotate-180" : ""),
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        children: (0, t.jsx)("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M19 9l-7 7-7-7"
                                                                        })
                                                                    })]
                                                                }), r.mobileFindByBank && (0, t.jsxs)("div", {
                                                                    className: "mt-2 pl-4",
                                                                    children: [(0, t.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Search Bank",
                                                                        value: d,
                                                                        onChange: e => c(e.target.value),
                                                                        className: "mb-3 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                                                                    }), k() ? (0, t.jsxs)("div", {
                                                                        className: "space-y-2 mb-3",
                                                                        children: [(0, t.jsxs)("div", {
                                                                            children: [(0, t.jsxs)("button", {
                                                                                className: "flex w-full items-center justify-between rounded bg-gray-100 px-2 py-1.5 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300",
                                                                                onClick: () => u("mobileBalanceTransfer"),
                                                                                children: [(0, t.jsxs)("span", {
                                                                                    children: ["\uD83D\uDCB1 Balance Transfer", d && f(v.balanceTransferGuides.slice(1)) && (0, t.jsx)("span", {
                                                                                        className: "ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                                                                        children: b(v.balanceTransferGuides.slice(1)).length
                                                                                    })]
                                                                                }), (0, t.jsx)("svg", {
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    className: "h-3 w-3 transition-transform duration-200 ".concat(r.mobileBalanceTransfer || d && f(v.balanceTransferGuides.slice(1)) ? "rotate-180" : ""),
                                                                                    fill: "none",
                                                                                    viewBox: "0 0 24 24",
                                                                                    stroke: "currentColor",
                                                                                    children: (0, t.jsx)("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M19 9l-7 7-7-7"
                                                                                    })
                                                                                })]
                                                                            }), (r.mobileBalanceTransfer || d && f(v.balanceTransferGuides.slice(1))) && (0, t.jsx)("ul", {
                                                                                className: "mt-1 max-h-32 space-y-1 overflow-y-auto pl-4 text-xs",
                                                                                children: b(v.balanceTransferGuides.slice(1)).map(e => (0, t.jsx)("li", {
                                                                                    children: (0, t.jsx)(l(), {
                                                                                        href: e.href,
                                                                                        className: "block rounded px-2 py-1 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight",
                                                                                        onClick: () => a(!1),
                                                                                        children: e.label.replace(" Home Loan Balance Transfer Guide", "").replace(" Balance Transfer Guide", "")
                                                                                    })
                                                                                }, e.href))
                                                                            })]
                                                                        }), (0, t.jsxs)("div", {
                                                                            children: [(0, t.jsxs)("button", {
                                                                                className: "flex w-full items-center justify-between rounded bg-gray-100 px-2 py-1.5 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300",
                                                                                onClick: () => u("mobileInterestRates"),
                                                                                children: [(0, t.jsxs)("span", {
                                                                                    children: ["\uD83D\uDCB0 Interest Rates", d && f(v.interestRates) && (0, t.jsx)("span", {
                                                                                        className: "ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                                                                        children: b(v.interestRates).length
                                                                                    })]
                                                                                }), (0, t.jsx)("svg", {
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    className: "h-3 w-3 transition-transform duration-200 ".concat(r.mobileInterestRates || d && f(v.interestRates) ? "rotate-180" : ""),
                                                                                    fill: "none",
                                                                                    viewBox: "0 0 24 24",
                                                                                    stroke: "currentColor",
                                                                                    children: (0, t.jsx)("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M19 9l-7 7-7-7"
                                                                                    })
                                                                                })]
                                                                            }), (r.mobileInterestRates || d && f(v.interestRates)) && (0, t.jsx)("ul", {
                                                                                className: "mt-1 max-h-32 space-y-1 overflow-y-auto pl-4 text-xs",
                                                                                children: b(v.interestRates).map(e => (0, t.jsx)("li", {
                                                                                    children: (0, t.jsx)(l(), {
                                                                                        href: e.href,
                                                                                        className: "block rounded px-2 py-1 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight",
                                                                                        onClick: () => a(!1),
                                                                                        children: e.label.replace(" Home Loan Interest Rates", "").replace(" Interest Rates", "").replace(" Rates", "")
                                                                                    })
                                                                                }, e.href))
                                                                            })]
                                                                        }), (0, t.jsxs)("div", {
                                                                            children: [(0, t.jsxs)("button", {
                                                                                className: "flex w-full items-center justify-between rounded bg-gray-100 px-2 py-1.5 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300",
                                                                                onClick: () => u("mobileEmiCalculators"),
                                                                                children: [(0, t.jsxs)("span", {
                                                                                    children: ["\uD83E\uDDEE EMI Calculators", d && f(v.emiCalculators) && (0, t.jsx)("span", {
                                                                                        className: "ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                                                                        children: b(v.emiCalculators).length
                                                                                    })]
                                                                                }), (0, t.jsx)("svg", {
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    className: "h-3 w-3 transition-transform duration-200 ".concat(r.mobileEmiCalculators || d && f(v.emiCalculators) ? "rotate-180" : ""),
                                                                                    fill: "none",
                                                                                    viewBox: "0 0 24 24",
                                                                                    stroke: "currentColor",
                                                                                    children: (0, t.jsx)("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M19 9l-7 7-7-7"
                                                                                    })
                                                                                })]
                                                                            }), (r.mobileEmiCalculators || d && f(v.emiCalculators)) && (0, t.jsx)("ul", {
                                                                                className: "mt-1 max-h-32 space-y-1 overflow-y-auto pl-4 text-xs",
                                                                                children: b(v.emiCalculators).map(e => (0, t.jsx)("li", {
                                                                                    children: (0, t.jsx)(l(), {
                                                                                        href: e.href,
                                                                                        className: "block rounded px-2 py-1 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight",
                                                                                        onClick: () => a(!1),
                                                                                        children: e.label.replace(" Home Loan EMI Calculator", "").replace(" EMI Calculator", "").replace(" Calculator", "")
                                                                                    })
                                                                                }, e.href))
                                                                            })]
                                                                        })]
                                                                    }) : (0, t.jsxs)("div", {
                                                                        className: "py-6 text-center mb-3",
                                                                        children: [(0, t.jsx)("svg", {
                                                                            className: "mx-auto h-10 w-10 text-gray-400 dark:text-gray-500",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            children: (0, t.jsx)("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 1.5,
                                                                                d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                            })
                                                                        }), (0, t.jsx)("p", {
                                                                            className: "mt-2 text-xs font-medium text-gray-900 dark:text-gray-100",
                                                                            children: "No banks found"
                                                                        }), (0, t.jsx)("p", {
                                                                            className: "mt-1 text-[10px] text-gray-500 dark:text-gray-400",
                                                                            children: "Try a different bank name"
                                                                        })]
                                                                    }), !d && (0, t.jsxs)("div", {
                                                                        className: "border-t border-gray-200 pt-2 dark:border-gray-600",
                                                                        children: [(0, t.jsx)("p", {
                                                                            className: "mb-1 text-xs font-medium text-gray-500 dark:text-gray-400",
                                                                            children: "Popular Banks:"
                                                                        }), (0, t.jsx)("div", {
                                                                            className: "flex flex-wrap gap-1",
                                                                            children: y.map(e => (0, t.jsx)(l(), {
                                                                                href: "/interest-rates/".concat(e.toLowerCase()),
                                                                                className: "rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200 hover:text-primary dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-primaryLight",
                                                                                onClick: () => a(!1),
                                                                                children: e
                                                                            }, e))
                                                                        })]
                                                                    })]
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            }), (0, t.jsx)("li", {
                                                children: (0, t.jsx)(l(), {
                                                    href: "/Credit-cards",
                                                    className: "nav-link block rounded-md px-3 py-3 lg:py-3 transition-all duration-200 hover:bg-gray-50 hover:text-primary dark:hover:bg-gray-800 dark:hover:text-primaryLight lg:px-4 min-h-[48px] flex items-center ".concat(p("/Credit-cards") ? "text-primary dark:text-primaryLight font-semibold" : ""),
                                                    onClick: () => a(!1),
                                                    children: (0, t.jsx)("span", {
                                                        children: "Credit Cards"
                                                    })
                                                })
                                            }), (0, t.jsx)("li", {
                                                children: (0, t.jsx)(l(), {
                                                    href: "/digital-gold",
                                                    className: "nav-link block rounded-md px-3 py-3 lg:py-3 transition-all duration-200 hover:bg-gray-50 hover:text-primary dark:hover:bg-gray-800 dark:hover:text-primaryLight lg:px-4 min-h-[48px] flex items-center ".concat(p("/digital-gold") ? "text-primary dark:text-primaryLight font-semibold" : ""),
                                                    onClick: () => a(!1),
                                                    children: (0, t.jsx)("span", {
                                                        children: "Digital Gold"
                                                    })
                                                })
                                            }), (0, t.jsx)("li", {
                                                children: (0, t.jsx)(l(), {
                                                    href: "/blog",
                                                    className: "nav-link block rounded-md px-3 py-3 lg:py-3 transition-all duration-200 hover:bg-gray-50 hover:text-primary dark:hover:bg-gray-800 dark:hover:text-primaryLight lg:px-4 min-h-[48px] flex items-center ".concat(p("/blog") ? "text-primary dark:text-primaryLight font-semibold" : ""),
                                                    onClick: () => a(!1),
                                                    children: (0, t.jsx)("span", {
                                                        children: "Blog"
                                                    })
                                                })
                                            }), (0, t.jsx)("li", {
                                                children: (0, t.jsx)(l(), {
                                                    href: "/about",
                                                    className: "nav-link block rounded-md px-3 py-3 lg:py-3 transition-all duration-200 hover:bg-gray-50 hover:text-primary dark:hover:bg-gray-800 dark:hover:text-primaryLight lg:px-4 min-h-[48px] flex items-center ".concat(p("/about") ? "text-primary dark:text-primaryLight font-semibold" : ""),
                                                    onClick: () => a(!1),
                                                    children: (0, t.jsx)("span", {
                                                        children: "About"
                                                    })
                                                })
                                            }), (0, t.jsx)("li", {
                                                children: (0, t.jsx)(l(), {
                                                    href: "/partner-program",
                                                    className: "nav-link block rounded-md px-3 py-3 lg:py-3 transition-all duration-200 hover:bg-gray-50 hover:text-primary dark:hover:bg-gray-800 dark:hover:text-primaryLight lg:px-4 min-h-[48px] flex items-center ".concat(p("/partner-program") ? "text-primary dark:text-primaryLight font-semibold" : ""),
                                                    onClick: () => a(!1),
                                                    children: (0, t.jsx)("span", {
                                                        children: "Partner Program"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "mt-8 -ml-1 flex w-full flex-col space-y-2 border-t border-gray-200 pt-6 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-2 lg:space-y-0 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0",
                                        children: (0, t.jsx)("div", {
                                            className: "flex items-center gap-4",
                                            children: (0, t.jsx)("a", {
                                                href: "https://pulse.Credifyy.com/users/sign-in/",
                                                className: "group relative ml-auto flex min-h-[48px] items-center justify-center px-5 rounded-full bg-primary text-white transition-all duration-200 hover:bg-primaryLight hover:shadow-lg active:scale-95 dark:bg-primaryLight dark:text-gray-900 dark:hover:bg-primary dark:hover:text-white sm:px-6 sm:min-h-[48px]",
                                                children: (0, t.jsx)("span", {
                                                    className: "relative text-sm font-semibold",
                                                    children: "Sign In"
                                                })
                                            })
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
        },
        6822: (e, a, r) => {
            Promise.resolve().then(r.t.bind(r, 9324, 23)), Promise.resolve().then(r.bind(r, 8317)), Promise.resolve().then(r.bind(r, 3343)), Promise.resolve().then(r.t.bind(r, 9243, 23)), Promise.resolve().then(r.t.bind(r, 9140, 23)), Promise.resolve().then(r.t.bind(r, 4250, 23))
        },
        8317: (e, a, r) => {
            "use strict";
            r.d(a, {
                default: () => d
            });
            var t = r(5155),
                s = r(6874),
                n = r.n(s),
                l = r(6766),
                i = r(5695),
                o = r(2115);

            function d() {
                let e = (0, i.usePathname)(),
                    [a, r] = (0, o.useState)([]),
                    s = e => e.endsWith("/") ? e.slice(0, -1) : e,
                    d = s(e),
                    c = function(e) {
                        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text-sm duration-100 hover:text-primary dark:hover:text-white";
                        return s(e) === d ? "".concat(a, " text-primary dark:text-white") : a
                    };
                return (0, t.jsx)("footer", {
                    className: "border-t border-gray-200 pt-16 pb-8 dark:border-gray-800 bg-gray-50 dark:bg-gray-900",
                    children: (0, t.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                        children: [(0, t.jsx)("div", {
                            className: "mb-12 lg:mb-16",
                            children: (0, t.jsxs)("div", {
                                className: "max-w-md",
                                children: [(0, t.jsx)(n(), {
                                    href: "/",
                                    "aria-label": "Credifyy logo",
                                    className: "inline-block",
                                    children: (0, t.jsx)(l.default, {
                                        src: "/logo.png",
                                        alt: "Credifyy Logo",
                                        className: "h-8 w-auto",
                                        width: 190,
                                        height: 28
                                    })
                                }), (0, t.jsx)("p", {
                                    className: "mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400",
                                    children: "Your trusted partner for smarter financial decisions. Compare loans, check Credit scores, and make informed choices."
                                }), (0, t.jsxs)("div", {
                                    className: "mt-6 space-y-3",
                                    children: [(0, t.jsxs)("a", {
                                        href: "mailto:askus@myCredifyy.com",
                                        className: "flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200 hover:text-primary dark:hover:text-primaryLight group",
                                        children: [(0, t.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "mr-2.5 h-4 w-4 text-gray-400 transition-colors duration-200 group-hover:text-primary dark:group-hover:text-primaryLight",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, t.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            })
                                        }), "askus@myCredifyy.com"]
                                    }), (0, t.jsxs)("a", {
                                        href: "tel:+917330755533",
                                        className: "flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200 hover:text-primary dark:hover:text-primaryLight group",
                                        children: [(0, t.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "mr-2.5 h-4 w-4 text-gray-400 transition-colors duration-200 group-hover:text-primary dark:group-hover:text-primaryLight",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, t.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            })
                                        }), "+91 73307 55533"]
                                    })]
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-8 mb-12",
                            children: [{
                                id: "products",
                                title: "Products",
                                links: [{
                                    name: "Credit Score",
                                    href: "/Credit-score"
                                }, {
                                    name: "Home Loans",
                                    href: "/loans/home-loan"
                                }, {
                                    name: "Personal Loans",
                                    href: "/loans/personal-loan"
                                }, {
                                    name: "Business Loans",
                                    href: "/loans/business-loan"
                                }, {
                                    name: "Loan Against Property",
                                    href: "/loans/loan-against-property"
                                }, {
                                    name: "Balance Transfer",
                                    href: "/loans/home-loan-balance-transfer"
                                }, {
                                    name: "Top-up Loans",
                                    href: "/loans/top-up-home-loan"
                                }, {
                                    name: "NRI Home Loans",
                                    href: "/loans/nri-home-loans"
                                }, {
                                    name: "Credit Cards",
                                    href: "/Credit-cards"
                                }, {
                                    name: "Digital Gold",
                                    href: "/digital-gold"
                                }]
                            }, {
                                id: "tools",
                                title: "Tools & Resources",
                                links: [{
                                    name: "EMI Calculator",
                                    href: "/calculators/home-loan-emi-calculator"
                                }, {
                                    name: "Buying vs Renting",
                                    href: "/calculators/buying-vs-renting-calculator"
                                }, {
                                    name: "Compare Interest Rates",
                                    href: "/interest-rates"
                                }, {
                                    name: "Blog",
                                    href: "/blog"
                                }]
                            }, {
                                id: "company",
                                title: "Company",
                                links: [{
                                    name: "About Us",
                                    href: "/about"
                                }, {
                                    name: "Partner Program",
                                    href: "/partner-program"
                                }, {
                                    name: "Careers",
                                    href: "https://www.linkedin.com/company/myCredifyy/",
                                    external: !0
                                }]
                            }, {
                                id: "support",
                                title: "Support & Legal",
                                links: [{
                                    name: "Grievance Redressal",
                                    href: "/grievance-redressal"
                                }, {
                                    name: "Security",
                                    href: "/security"
                                }, {
                                    name: "Privacy Policy",
                                    href: "/privacy-policy"
                                }, {
                                    name: "Terms and Conditions",
                                    href: "/terms-and-conditions"
                                }, {
                                    name: "Disclaimer",
                                    href: "/disclaimer"
                                }, {
                                    name: "HDFC Important Links",
                                    href: "https://www.hdfcbank.com/personal/useful-links/important-messages/product-features-and-policy",
                                    external: !0
                                }]
                            }].map(e => (0, t.jsxs)("div", {
                                className: "border-b border-gray-200 dark:border-gray-700 lg:border-0 last:border-0",
                                children: [(0, t.jsxs)("button", {
                                    className: "flex items-center justify-between w-full py-4 lg:py-0 lg:cursor-default text-left",
                                    onClick: () => {
                                        var a;
                                        return a = e.id, void r(e => e.includes(a) ? e.filter(e => e !== a) : [...e, a])
                                    },
                                    "aria-expanded": a.includes(e.id),
                                    "aria-controls": "footer-".concat(e.id),
                                    children: [(0, t.jsx)("h3", {
                                        className: "text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100",
                                        children: e.title
                                    }), (0, t.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 lg:hidden ".concat(a.includes(e.id) ? "rotate-180" : ""),
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, t.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 9l-7 7-7-7"
                                        })
                                    })]
                                }), (0, t.jsx)("ul", {
                                    id: "footer-".concat(e.id),
                                    className: "space-y-3 overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 lg:mt-4 ".concat(a.includes(e.id) ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"),
                                    children: e.links.map(e => (0, t.jsx)("li", {
                                        children: e.external ? (0, t.jsx)("a", {
                                            href: e.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors duration-100 block",
                                            children: e.name
                                        }) : (0, t.jsx)(n(), {
                                            href: e.href,
                                            className: c(e.href),
                                            children: e.name
                                        })
                                    }, e.href))
                                })]
                            }, e.id))
                        }), (0, t.jsxs)("div", {
                            className: "mb-12 text-center lg:text-left",
                            children: [(0, t.jsx)("h3", {
                                className: "text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4",
                                children: "Follow Us"
                            }), (0, t.jsxs)("div", {
                                className: "flex justify-center lg:justify-start gap-4",
                                children: [(0, t.jsxs)("a", {
                                    href: "https://www.facebook.com/Credifyyofficial",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "facebook",
                                    className: "p-2 rounded-lg bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primaryLight dark:hover:text-gray-900",
                                    children: [(0, t.jsx)("span", {
                                        className: "sr-only",
                                        children: "Facebook"
                                    }), (0, t.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "18",
                                        height: "18",
                                        fill: "currentColor",
                                        viewBox: "0 0 18 18",
                                        children: (0, t.jsx)("path", {
                                            d: "M18 9.055c0-5.002-4.03-9.055-9-9.055C4.03 0-.002 4.053-.002 9.056c0 4.519 3.291 8.265 7.594 8.945v-6.328h-2.284V9.056h2.284V7.06c0-2.269 1.344-3.522 3.4-3.522.985 0 2.015.176 2.015.176v2.228h-1.135c-1.117 0-1.466.698-1.466 1.415v1.698h2.495l-.398 2.617H10.406V18c4.303-.68 7.594-4.426 7.594-8.945z"
                                        })
                                    })]
                                }), (0, t.jsxs)("a", {
                                    href: "https://x.com/myCredifyy",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "twitter",
                                    className: "p-2 rounded-lg bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primaryLight dark:hover:text-gray-900",
                                    children: [(0, t.jsx)("span", {
                                        className: "sr-only",
                                        children: "Twitter"
                                    }), (0, t.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "18",
                                        height: "18",
                                        fill: "currentColor",
                                        viewBox: "0 0 18 18",
                                        children: (0, t.jsx)("path", {
                                            d: "M5.654 16.875c6.793 0 10.509-5.628 10.509-10.501 0-.158 0-.317-.007-.475A7.521 7.521 0 0 0 18 3.985a7.489 7.489 0 0 1-2.125.583 3.713 3.713 0 0 0 1.628-2.044 7.349 7.349 0 0 1-2.348.892A3.697 3.697 0 0 0 8.859 6.784a10.489 10.489 0 0 1-7.613-3.858 3.701 3.701 0 0 0 1.145 4.93A3.738 3.738 0 0 1 .72 7.394v.051a3.696 3.696 0 0 0 2.96 3.62 3.603 3.603 0 0 1-.973.129 3.632 3.632 0 0 1-.691-.064 3.691 3.691 0 0 0 3.45 2.562A7.411 7.411 0 0 1 .878 15.278a7.109 7.109 0 0 1-.878-.051A10.503 10.503 0 0 0 5.654 16.875z"
                                        })
                                    })]
                                }), (0, t.jsxs)("a", {
                                    href: "https://www.linkedin.com/company/myCredifyy/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "linkedin",
                                    className: "p-2 rounded-lg bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primaryLight dark:hover:text-gray-900",
                                    children: [(0, t.jsx)("span", {
                                        className: "sr-only",
                                        children: "LinkedIn"
                                    }), (0, t.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "18",
                                        height: "18",
                                        fill: "currentColor",
                                        viewBox: "0 0 18 18",
                                        children: (0, t.jsx)("path", {
                                            d: "M0 1.289C0 .577.592 0 1.322 0h15.356C17.408 0 18 .577 18 1.289v15.421c0 .712-.592 1.29-1.322 1.29H1.322C.592 18 0 17.422 0 16.71V1.289zm5.561 13.779V6.94H2.861v8.128h2.701zm-1.35-9.238c.941 0 1.527-.623 1.527-1.404-.017-.797-.585-1.403-1.509-1.403-.925 0-1.528.607-1.528 1.403 0 .781.586 1.404 1.493 1.404h.018zm5.522 9.238v-4.528c0-.243.018-.486.09-.659.195-.486.639-.988 1.386-.988.978 0 1.368.745 1.368 1.838v4.337h2.701V10.406c0-2.498-1.332-3.658-3.109-3.658-1.433 0-2.076.787-2.436 1.342v.028h-.018a6.239 6.239 0 0 1 .018-.028V6.94h-2.7c.034.763 0 8.128 0 8.128h2.7z"
                                        })
                                    })]
                                }), (0, t.jsxs)("a", {
                                    href: "https://www.youtube.com/@Credifyy",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "youtube",
                                    className: "p-2 rounded-lg bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primaryLight dark:hover:text-gray-900",
                                    children: [(0, t.jsx)("span", {
                                        className: "sr-only",
                                        children: "YouTube"
                                    }), (0, t.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "18",
                                        height: "18",
                                        fill: "currentColor",
                                        viewBox: "0 0 18 18",
                                        children: (0, t.jsx)("path", {
                                            d: "M9.057 2.249h.1c.925.003 5.61.037 6.873.377a2.261 2.261 0 0 1 1.592 1.597c.113.428.193.993.247 1.577l.011.117.025.293.009.117c.073 1.028.082 1.991.083 2.201v.084c-.001.218-.011 1.246-.092 2.318l-.009.118-.01.117c-.056.643-.139 1.282-.264 1.753a2.257 2.257 0 0 1-1.592 1.597c-1.305.351-6.264.376-6.953.377h-.16c-.348 0-1.785-.007-3.293-.059l-.191-.007-.098-.004-.192-.008-.192-.008c-1.249-.055-2.438-.144-2.986-.292a2.257 2.257 0 0 1-1.592-1.596c-.125-.469-.208-1.109-.264-1.753l-.01-.117-.009-.117A35.325 35.325 0 0 1 0 8.64v-.138c.002-.242.011-1.078.072-2l.008-.116.003-.059.009-.117.025-.292.011-.117c.054-.584.134-1.151.247-1.577a2.257 2.257 0 0 1 1.592-1.597c.548-.146 1.737-.236 2.986-.293l.191-.008.194-.007.097-.003.192-.008A112.26 112.26 0 0 1 8.841 2.25h.217zM7.2 5.86v5.42l4.677-2.71L7.2 5.86z"
                                        })
                                    })]
                                })]
                            })]
                        }), (0, t.jsx)("div", {
                            className: "border-t border-gray-200 pt-8 dark:border-gray-700",
                            children: (0, t.jsxs)("div", {
                                className: "flex flex-col justify-between space-y-4 text-sm md:flex-row md:items-center md:space-y-0",
                                children: [(0, t.jsx)("span", {
                                    className: "text-gray-500 dark:text-gray-400 text-center md:text-left",
                                    children: "\xa9 Credifyy 2025 - All rights reserved"
                                }), (0, t.jsxs)("div", {
                                    className: "flex justify-center md:justify-end space-x-6",
                                    children: [(0, t.jsx)(n(), {
                                        href: "/privacy-policy",
                                        className: c("/privacy-policy", "text-gray-500 transition-colors duration-200 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"),
                                        children: "Privacy Policy"
                                    }), (0, t.jsx)(n(), {
                                        href: "/terms-and-conditions",
                                        className: c("/terms-and-conditions", "text-gray-500 transition-colors duration-200 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight"),
                                        children: "Terms"
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
        },
        9324: () => {}
    },
    e => {
        e.O(0, [2533, 1559, 6874, 3063, 2830, 8441, 5964, 7358], () => e(e.s = 6822)), _N_E = e.O()
    }
]);