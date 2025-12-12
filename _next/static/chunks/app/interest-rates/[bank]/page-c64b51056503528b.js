(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9482], {
        3683: (e, t, a) => {
            "use strict";
            a.d(t, {
                BankLoanFeatures: () => n
            });
            var r = a(5155);
            a(2115);
            var s = a(9775);

            function n(e) {
                let {
                    bank: t
                } = e, a = t.features.filter(e => e.toLowerCase().includes("special") || e.toLowerCase().includes("women") || e.toLowerCase().includes("unique") || e.toLowerCase().includes("exclusive")), n = t.features.filter(e => !a.includes(e));
                return (0, r.jsxs)("div", {
                    className: "grid gap-8",
                    children: [a.length > 0 && (0, r.jsxs)("div", {
                        className: "mb-12",
                        children: [(0, r.jsx)(s.default, {
                            animation: "gentle-fade-up",
                            delay: 100,
                            children: (0, r.jsx)("h3", {
                                className: "text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center",
                                children: "Special Features"
                            })
                        }), (0, r.jsx)("div", {
                            className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                            children: a.map((e, t) => (0, r.jsx)(s.default, {
                                animation: "gentle-scale",
                                delay: 200 + 100 * t,
                                children: (0, r.jsxs)("div", {
                                    className: "relative group",
                                    children: [(0, r.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-sm group-hover:blur-md transition-all duration-300 opacity-50"
                                    }), (0, r.jsxs)("div", {
                                        className: "relative flex items-start space-x-4 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300",
                                        children: [(0, r.jsx)("div", {
                                            className: "flex-shrink-0",
                                            children: (0, r.jsx)("div", {
                                                className: "flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-secondary",
                                                children: (0, r.jsx)("svg", {
                                                    className: "h-6 w-6 text-white",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    })
                                                })
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "flex-1",
                                            children: (0, r.jsx)("p", {
                                                className: "text-base font-medium text-gray-900 dark:text-white",
                                                children: e
                                            })
                                        })]
                                    })]
                                })
                            }, t))
                        })]
                    }), (0, r.jsx)("div", {
                        className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
                        children: n.map((e, t) => (0, r.jsx)(s.default, {
                            animation: "gentle-fade-up",
                            delay: 300 + 50 * t,
                            children: (0, r.jsxs)("div", {
                                className: "flex items-start space-x-4 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-lg transition-shadow duration-300",
                                children: [(0, r.jsx)("div", {
                                    className: "flex-shrink-0",
                                    children: (0, r.jsx)("div", {
                                        className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20",
                                        children: (0, r.jsx)("svg", {
                                            className: "h-5 w-5 text-primary",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M5 13l4 4L19 7"
                                            })
                                        })
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, r.jsx)("p", {
                                        className: "text-base text-gray-700 dark:text-gray-300",
                                        children: e
                                    })
                                })]
                            })
                        }, t))
                    }), (0, r.jsx)(s.default, {
                        animation: "gentle-fade-up",
                        delay: 500,
                        children: (0, r.jsxs)("div", {
                            className: "mt-12 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-8 text-center",
                            children: [(0, r.jsxs)("h3", {
                                className: "text-xl font-semibold text-gray-900 dark:text-white mb-4",
                                children: ["Ready to Apply for ", t.name, " Home Loan?"]
                            }), (0, r.jsx)("p", {
                                className: "text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto",
                                children: "Take advantage of these features and competitive interest rates. Apply online in minutes and get instant approval."
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-wrap gap-4 justify-center",
                                children: [(0, r.jsxs)("a", {
                                    href: "https://pulse.Credifyy.com/users/sign-up/",
                                    className: "group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-primaryLight hover:shadow-xl hover:shadow-primary/25 dark:bg-primaryLight dark:text-gray-900 dark:hover:bg-primary dark:hover:text-white",
                                    children: ["Apply Now", (0, r.jsx)("svg", {
                                        className: "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                        })
                                    })]
                                }), (0, r.jsxs)("a", {
                                    href: "tel:+917330755533",
                                    className: "inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:text-white",
                                    children: [(0, r.jsx)("svg", {
                                        className: "mr-2 h-5 w-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        })
                                    }), "Talk to Expert"]
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        5996: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 5132)), Promise.resolve().then(a.bind(a, 4265)), Promise.resolve().then(a.bind(a, 3683)), Promise.resolve().then(a.bind(a, 79)), Promise.resolve().then(a.bind(a, 8169)), Promise.resolve().then(a.bind(a, 6187)), Promise.resolve().then(a.bind(a, 6238)), Promise.resolve().then(a.bind(a, 9775)), Promise.resolve().then(a.t.bind(a, 6874, 23))
        },
        6187: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => n
            });
            var r = a(5155),
                s = a(9775);

            function n(e) {
                let {
                    rates: t,
                    bankName: a = "SBI"
                } = e;
                return (0, r.jsx)("section", {
                    className: "py-20 sm:py-24 lg:py-32 bg-white dark:bg-gray-800",
                    children: (0, r.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                        children: [(0, r.jsx)(s.default, {
                            animation: "gentle-fade-up",
                            delay: 0,
                            children: (0, r.jsxs)("div", {
                                className: "text-center mb-12",
                                children: [(0, r.jsxs)("div", {
                                    className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight mb-6",
                                    children: [(0, r.jsx)("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 00-2 2h-2a2 2 0 01-2-2z"
                                        })
                                    }), (0, r.jsx)("span", {
                                        children: "Reference Rates"
                                    })]
                                }), (0, r.jsxs)("h2", {
                                    className: "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",
                                    children: [a, " MCLR Rates 2025"]
                                }), (0, r.jsx)("p", {
                                    className: "mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                    children: "Marginal Cost of Funds based Lending Rate (MCLR) forms the benchmark for floating rate home loans. Your home loan interest rate is typically MCLR + spread."
                                })]
                            })
                        }), (0, r.jsx)(s.default, {
                            animation: "gentle-fade-up",
                            delay: 200,
                            children: (0, r.jsxs)("div", {
                                className: "bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl overflow-hidden",
                                children: [(0, r.jsxs)("div", {
                                    className: "bg-gradient-to-r from-primary to-secondary px-6 py-4",
                                    children: [(0, r.jsx)("h3", {
                                        className: "text-xl font-semibold text-white",
                                        children: "Current MCLR Rates (% per annum)"
                                    }), (0, r.jsx)("p", {
                                        className: "text-blue-100 text-sm mt-1",
                                        children: "Effective from January 29, 2025"
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "hidden md:block overflow-x-auto",
                                    children: (0, r.jsxs)("table", {
                                        className: "w-full min-w-[600px]",
                                        children: [(0, r.jsx)("thead", {
                                            className: "bg-gray-100 dark:bg-gray-700",
                                            children: (0, r.jsxs)("tr", {
                                                className: "border-b border-gray-200 dark:border-gray-600",
                                                children: [(0, r.jsx)("th", {
                                                    className: "px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap",
                                                    children: "MCLR Tenure"
                                                }), (0, r.jsx)("th", {
                                                    className: "px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap",
                                                    children: "Interest Rate (% p.a.)"
                                                }), (0, r.jsx)("th", {
                                                    className: "px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap",
                                                    children: "Applicable For"
                                                })]
                                            })
                                        }), (0, r.jsx)("tbody", {
                                            className: "divide-y divide-gray-200 dark:divide-gray-700",
                                            children: t.map((e, t) => (0, r.jsxs)("tr", {
                                                className: "hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",
                                                children: [(0, r.jsxs)("td", {
                                                    className: "px-4 py-3 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap",
                                                    children: [e.tenure, " MCLR"]
                                                }), (0, r.jsx)("td", {
                                                    className: "px-4 py-3 text-center",
                                                    children: (0, r.jsxs)("span", {
                                                        className: "inline-block px-3 py-1 text-lg font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-lg",
                                                        children: [e.rate, "%"]
                                                    })
                                                }), (0, r.jsx)("td", {
                                                    className: "px-4 py-3 text-center text-sm text-gray-600 dark:text-gray-400",
                                                    children: "1 Year" === e.tenure ? "Most Home Loans" : "Overnight" === e.tenure ? "Working Capital" : "1 Month" === e.tenure || "3 Months" === e.tenure ? "Short-term Loans" : "Long-term Loans"
                                                })]
                                            }, t))
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "md:hidden space-y-4 p-4",
                                    children: t.map((e, t) => (0, r.jsxs)("div", {
                                        className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [(0, r.jsxs)("div", {
                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                children: [e.tenure, " MCLR"]
                                            }), (0, r.jsx)("div", {
                                                children: (0, r.jsxs)("span", {
                                                    className: "inline-block px-3 py-1 text-lg font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-lg",
                                                    children: [e.rate, "%"]
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "text-sm text-gray-600 dark:text-gray-400",
                                            children: [(0, r.jsx)("span", {
                                                className: "font-medium",
                                                children: "Applicable For: "
                                            }), "1 Year" === e.tenure ? "Most Home Loans" : "Overnight" === e.tenure ? "Working Capital" : "1 Month" === e.tenure || "3 Months" === e.tenure ? "Short-term Loans" : "Long-term Loans"]
                                        })]
                                    }, t))
                                }), (0, r.jsx)("div", {
                                    className: "bg-blue-50 dark:bg-blue-900/20 px-6 py-4",
                                    children: (0, r.jsxs)("div", {
                                        className: "flex items-start space-x-3",
                                        children: [(0, r.jsx)("svg", {
                                            className: "w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "text-sm text-blue-800 dark:text-blue-200",
                                            children: [(0, r.jsx)("p", {
                                                className: "font-medium mb-1",
                                                children: "How MCLR affects your home loan rate:"
                                            }), (0, r.jsx)("p", {
                                                children: "Your home loan interest rate = MCLR + Bank's Spread (typically 0.40% - 0.95%)"
                                            }), (0, r.jsxs)("p", {
                                                className: "mt-1",
                                                children: ["Most ", a, " home loans are linked to 1 Year MCLR for stability and competitive rates."]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        8169: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => n
            });
            var r = a(5155),
                s = a(9775);

            function n(e) {
                let {
                    rateTypes: t,
                    bankName: a = "SBI"
                } = e;
                return (0, r.jsx)("section", {
                    className: "py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900",
                    children: (0, r.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                        children: [(0, r.jsx)(s.default, {
                            animation: "gentle-fade-up",
                            delay: 0,
                            children: (0, r.jsxs)("div", {
                                className: "text-center mb-12",
                                children: [(0, r.jsxs)("div", {
                                    className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight mb-6",
                                    children: [(0, r.jsx)("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        })
                                    }), (0, r.jsx)("span", {
                                        children: "Competitive Rates"
                                    })]
                                }), (0, r.jsxs)("h2", {
                                    className: "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",
                                    children: [a, " Home Loan Interest Rates"]
                                }), (0, r.jsx)("p", {
                                    className: "mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                    children: "Detailed interest rates based on borrower profile, loan amount, and loan type. Choose the best option that suits your requirements."
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "space-y-8",
                            children: t.map((e, t) => (0, r.jsx)(s.default, {
                                animation: "gentle-fade-up",
                                delay: 200 + 100 * t,
                                children: (0, r.jsxs)("div", {
                                    className: "bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden",
                                    children: [(0, r.jsxs)("div", {
                                        className: "bg-gradient-to-r from-primary to-secondary px-6 py-6",
                                        children: [(0, r.jsx)("h3", {
                                            className: "text-2xl font-bold text-white",
                                            children: e.type
                                        }), (0, r.jsx)("p", {
                                            className: "text-blue-100 mt-2",
                                            children: e.description
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "hidden md:block overflow-x-auto",
                                        children: (0, r.jsxs)("table", {
                                            className: "w-full min-w-[700px]",
                                            children: [(0, r.jsx)("thead", {
                                                className: "bg-gray-100 dark:bg-gray-700",
                                                children: (0, r.jsxs)("tr", {
                                                    className: "border-b border-gray-200 dark:border-gray-600",
                                                    children: [(0, r.jsx)("th", {
                                                        className: "px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap",
                                                        children: "Borrower Category"
                                                    }), (0, r.jsx)("th", {
                                                        className: "px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap",
                                                        children: "Loan Amount"
                                                    }), (0, r.jsx)("th", {
                                                        className: "px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap",
                                                        children: "Interest Rate"
                                                    }), (0, r.jsx)("th", {
                                                        className: "px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap",
                                                        children: "Processing Fee"
                                                    })]
                                                })
                                            }), (0, r.jsx)("tbody", {
                                                className: "divide-y divide-gray-200 dark:divide-gray-700",
                                                children: e.rates.map((e, t) => (0, r.jsxs)("tr", {
                                                    className: "hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300",
                                                    children: [(0, r.jsx)("td", {
                                                        className: "px-4 py-3",
                                                        children: (0, r.jsxs)("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [e.borrowerCategory.includes("Women") && (0, r.jsx)("span", {
                                                                className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-300",
                                                                children: "Special Offer"
                                                            }), (0, r.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: e.borrowerCategory
                                                            })]
                                                        })
                                                    }), (0, r.jsx)("td", {
                                                        className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                        children: e.loanAmount
                                                    }), (0, r.jsx)("td", {
                                                        className: "px-4 py-3 text-center",
                                                        children: e.special ? (0, r.jsx)("div", {
                                                            className: "text-center",
                                                            children: (0, r.jsx)("span", {
                                                                className: "inline-flex items-center justify-center px-3 py-1 text-sm font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-lg",
                                                                children: e.special
                                                            })
                                                        }) : (0, r.jsxs)("span", {
                                                            className: "inline-block px-3 py-1 text-lg font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-lg",
                                                            children: [e.interestRate, "%"]
                                                        })
                                                    }), (0, r.jsx)("td", {
                                                        className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                        children: e.processingFee
                                                    })]
                                                }, t))
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "md:hidden space-y-4 p-4",
                                        children: e.rates.map((e, t) => (0, r.jsxs)("div", {
                                            className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-3",
                                            children: [(0, r.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [e.borrowerCategory.includes("Women") && (0, r.jsx)("span", {
                                                        className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-300",
                                                        children: "Special Offer"
                                                    }), (0, r.jsx)("span", {
                                                        className: "text-sm font-medium text-gray-900 dark:text-white",
                                                        children: e.borrowerCategory
                                                    })]
                                                }), (0, r.jsx)("div", {
                                                    children: e.special ? (0, r.jsx)("span", {
                                                        className: "inline-flex items-center justify-center px-3 py-1 text-sm font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-lg",
                                                        children: e.special
                                                    }) : (0, r.jsxs)("span", {
                                                        className: "inline-block px-3 py-1 text-lg font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-lg",
                                                        children: [e.interestRate, "%"]
                                                    })
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "grid grid-cols-1 gap-2 text-sm",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "flex justify-between",
                                                    children: [(0, r.jsx)("span", {
                                                        className: "text-gray-600 dark:text-gray-400",
                                                        children: "Loan Amount:"
                                                    }), (0, r.jsx)("span", {
                                                        className: "text-gray-900 dark:text-white font-medium",
                                                        children: e.loanAmount
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex justify-between",
                                                    children: [(0, r.jsx)("span", {
                                                        className: "text-gray-600 dark:text-gray-400",
                                                        children: "Processing Fee:"
                                                    }), (0, r.jsx)("span", {
                                                        className: "text-gray-900 dark:text-white font-medium",
                                                        children: e.processingFee
                                                    })]
                                                })]
                                            })]
                                        }, t))
                                    }), "Regular Home Loan" === e.type && (0, r.jsx)("div", {
                                        className: "bg-yellow-50 dark:bg-yellow-900/20 px-6 py-4",
                                        children: (0, r.jsxs)("div", {
                                            className: "flex items-start space-x-3",
                                            children: [(0, r.jsx)("svg", {
                                                className: "w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.896-.833-2.664 0L3.232 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                })
                                            }), (0, r.jsxs)("div", {
                                                className: "text-sm text-yellow-800 dark:text-yellow-200",
                                                children: [(0, r.jsx)("p", {
                                                    className: "font-medium mb-1",
                                                    children: "Important Notes:"
                                                }), (0, r.jsxs)("ul", {
                                                    className: "list-disc list-inside space-y-1",
                                                    children: [(0, r.jsx)("li", {
                                                        children: "Women borrowers get an additional 0.05% discount on applicable rates"
                                                    }), (0, r.jsx)("li", {
                                                        children: "Rates are subject to Credit profile and property evaluation"
                                                    }), (0, r.jsx)("li", {
                                                        children: "Processing fees may vary based on loan amount and customer relationship"
                                                    })]
                                                })]
                                            })]
                                        })
                                    }), "SBI Maxgain Home Loan" === e.type && (0, r.jsx)("div", {
                                        className: "bg-blue-50 dark:bg-blue-900/20 px-6 py-4",
                                        children: (0, r.jsxs)("div", {
                                            className: "flex items-start space-x-3",
                                            children: [(0, r.jsx)("svg", {
                                                className: "w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                })
                                            }), (0, r.jsxs)("div", {
                                                className: "text-sm text-blue-800 dark:text-blue-200",
                                                children: [(0, r.jsx)("p", {
                                                    className: "font-medium mb-1",
                                                    children: "Maxgain Features:"
                                                }), (0, r.jsxs)("ul", {
                                                    className: "list-disc list-inside space-y-1",
                                                    children: [(0, r.jsx)("li", {
                                                        children: "Overdraft facility on home loan account"
                                                    }), (0, r.jsx)("li", {
                                                        children: "Deposit surplus funds to reduce interest burden"
                                                    }), (0, r.jsx)("li", {
                                                        children: "Withdraw funds when needed, subject to available limit"
                                                    }), (0, r.jsx)("li", {
                                                        children: "Interest charged only on outstanding principal amount"
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            }, t))
                        }), (0, r.jsx)(s.default, {
                            animation: "gentle-fade-up",
                            delay: 600,
                            children: (0, r.jsx)("div", {
                                className: "mt-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6",
                                children: (0, r.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0, r.jsx)("h3", {
                                        className: "text-xl font-bold text-gray-900 dark:text-white mb-4",
                                        children: "Best Rates Summary"
                                    }), (0, r.jsxs)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                        children: [(0, r.jsxs)("div", {
                                            className: "text-center",
                                            children: [(0, r.jsx)("div", {
                                                className: "text-3xl font-bold text-green-600 dark:text-green-400",
                                                children: "8.40%"
                                            }), (0, r.jsx)("div", {
                                                className: "text-sm text-gray-600 dark:text-gray-400 mt-1",
                                                children: "Lowest Rate"
                                            }), (0, r.jsx)("div", {
                                                className: "text-xs text-gray-500 dark:text-gray-500 mt-1",
                                                children: "Salaried, Up to ₹30L"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "text-center",
                                            children: [(0, r.jsx)("div", {
                                                className: "text-3xl font-bold text-blue-600 dark:text-blue-400",
                                                children: "8.35%"
                                            }), (0, r.jsx)("div", {
                                                className: "text-sm text-gray-600 dark:text-gray-400 mt-1",
                                                children: "With Women Discount"
                                            }), (0, r.jsx)("div", {
                                                className: "text-xs text-gray-500 dark:text-gray-500 mt-1",
                                                children: "Additional 0.05% off"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "text-center",
                                            children: [(0, r.jsx)("div", {
                                                className: "text-3xl font-bold text-purple-600 dark:text-purple-400",
                                                children: "8.50%"
                                            }), (0, r.jsx)("div", {
                                                className: "text-sm text-gray-600 dark:text-gray-400 mt-1",
                                                children: "Maxgain Lowest"
                                            }), (0, r.jsx)("div", {
                                                className: "text-xs text-gray-500 dark:text-gray-500 mt-1",
                                                children: "With overdraft facility"
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        }
    },
    e => {
        e.O(0, [6874, 6238, 592, 8441, 5964, 7358], () => e(e.s = 5996)), _N_E = e.O()
    }
]);