(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4144], {
        79: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => l
            });
            var r = t(5155),
                s = t(2115);
            let i = [{
                id: "cibil-score-accuracy",
                question: "How accurate is the Credit score you provide for customers?",
                answer: "We provide authentic Credit scores and reports from Equifax, which is the most widely used Credit bureau in India. This is the same score used by major banks like SBI, HDFC, and ICICI when evaluating loan applications. As per RBI guidelines, our scores are updated monthly and provide an accurate reflection of your current Credit standing across all financial institutions. Our platform also provides insights from other Credit bureaus like Experian and CRIF Highmark for a comprehensive view.",
                category: "Credit-score"
            }, {
                id: "loan-offers-matching",
                question: "How do you determine which bank loan offers to show me?",
                answer: "We analyze your Credit score, income documents (Form 16, ITR, salary slips), and other financial factors aligned with bank requirements to match you with lenders most likely to approve your application. Our pre-qualification process uses a soft Credit inquiry, which doesn't affect your Credit score as per RBI regulations. We show you personalized rates and terms from multiple banks like SBI, HDFC, ICICI, Axis and others, allowing you to compare EMIs, interest rates, processing fees, and prepayment options to choose the best fit for your needs. We also factor in bank-specific offerings like SBI MaxGain, HDFC Home Saver, or special rates for women borrowers as per government initiatives.",
                category: "loans"
            }, {
                id: "digital-gold-safety",
                question: "Is digital gold a safe investment for Indians compared to traditional gold?",
                answer: "Yes, digital gold is a secure investment aligned with India's strong cultural affinity for gold. Each unit of digital gold is backed by 24K physical gold of 99.9% purity (BIS standard), stored in secure vaults approved by the Bullion Association. The gold is fully insured and regularly audited by independent agencies as per SEBI guidelines. For investors, digital gold offers all the traditional benefits of physical gold (auspicious for occasions like Dhanteras and Akshaya Tritiya) without storage or security concerns of keeping gold at home. You can buy as little as ₹10 worth (unlike minimum 1 gram for physical gold), accumulate systematically, and sell 24/7 at transparent market rates with minimal transaction fees. Digital gold can also be converted to physical delivery for occasions like weddings, and provides proper GST invoicing for transparency.",
                category: "digital-gold"
            }, {
                id: "improve-cibil-score",
                question: "How can I improve my Credit score in the Credit system?",
                answer: "Improving your Credit score in India involves several key strategies aligned with the Credit system: pay all loan EMIs and Credit card bills on time (this has 35% impact on your score), maintain Credit utilization below 30% on Credit cards, avoid applying for multiple loans or cards in a short period (each application creates a hard inquiry visible to banks), keep old Credit accounts open to maintain a longer Credit history (especially your first Credit card), ensure your Aadhaar and PAN details are correctly linked to all financial accounts, and regularly check your Credit Score report for errors or fraud. As per RBI guidelines, cleared loans remain on your report for 7 years, so maintaining good repayment history is crucial. Our platform provides personalized recommendations based on your specific Credit profile and monitors your progress over time with alerts for any changes.",
                category: "Credit-score"
            }, {
                id: "Credit-card-recommendations",
                question: "What makes your Credit card recommendations different for consumers?",
                answer: "Our Credit card recommendations are uniquely tailored for the market, considering factors like your spending in rupees across categories (groceries, dining, fuel, e-commerce), specific merchant tie-ups (like BigBasket, Swiggy, or IRCTC), domestic and international travel benefits relevant to travelers, and festival/seasonal offers from banks. We analyze rewards programs (cashback vs reward points), annual fees (including GST), interest rates, joining/renewal benefits, and card features to match you with options that maximize value for your lifestyle. Our platform shows Indian-specific benefits like airport lounge access in airports, fuel surcharge waivers at petrol pumps, EMI conversion options, and Zomato/Swiggy privileges. Unlike generic comparison sites, we show your approval probability for each card based on your Credit score and income, helping you apply with confidence while minimizing rejection risks that could impact your Credit score.",
                category: "Credit-cards"
            }];

            function n(e) {
                let {
                    question: a,
                    answer: t,
                    index: i,
                    isOpen: n,
                    onToggle: l
                } = e, o = (0, s.useRef)(null), [d, c] = (0, s.useState)(0);
                return (0, s.useEffect)(() => {
                    if (o.current) {
                        let e = o.current.scrollHeight;
                        c(n ? e : 0)
                    }
                }, [n, t]), (0, r.jsx)("div", {
                    className: "group",
                    children: (0, r.jsxs)("div", {
                        className: "faq",
                        children: [(0, r.jsxs)("button", {
                            type: "button",
                            className: "flex w-full items-center justify-between py-5 text-left transition-all duration-200 ".concat(n ? "text-primary dark:text-primaryLight" : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"),
                            "aria-controls": "faq-".concat(i),
                            "aria-expanded": n,
                            onClick: l,
                            children: [(0, r.jsxs)("span", {
                                className: "flex items-start pr-8",
                                children: [(0, r.jsx)("span", {
                                    className: "mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ".concat(n ? "bg-primary/10 text-primary dark:bg-primaryLight/10 dark:text-primaryLight" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-500 dark:group-hover:bg-gray-700"),
                                    children: (0, r.jsx)("span", {
                                        className: "text-sm font-semibold",
                                        children: (i + 1).toString().padStart(2, "0")
                                    })
                                }), (0, r.jsx)("span", {
                                    className: "text-lg font-medium transition-colors duration-200 ".concat(n ? "text-gray-900 dark:text-white" : ""),
                                    children: a
                                })]
                            }), (0, r.jsx)("span", {
                                className: "ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ".concat(n ? "bg-primary/10 dark:bg-primaryLight/10" : "bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700"),
                                children: (0, r.jsx)("svg", {
                                    className: "h-5 w-5 transform transition-all duration-300 ".concat(n ? "rotate-180 text-primary dark:text-primaryLight" : "rotate-0 text-gray-400 dark:text-gray-500"),
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "2",
                                    stroke: "currentColor",
                                    "aria-hidden": "true",
                                    children: (0, r.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "faq-answer overflow-hidden transition-all duration-300 ease-in-out",
                            style: {
                                maxHeight: "".concat(d, "px")
                            },
                            id: "faq-".concat(i),
                            "aria-hidden": !n,
                            children: (0, r.jsx)("div", {
                                ref: o,
                                children: (0, r.jsx)("div", {
                                    className: "pb-4 sm:pb-6 pl-10 sm:pl-16 pr-4 sm:pr-8",
                                    children: (0, r.jsx)("p", {
                                        className: "text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400",
                                        children: t
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function l() {
                let {
                    faqs: e,
                    title: a = "Frequently Asked Questions",
                    subtitle: t = "Find answers to commonly asked questions about our financial services."
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [l, o] = (0, s.useState)(null), d = e || i, c = d.length, m = (0, s.useCallback)(e => {
                    o(a => a === e ? null : e)
                }, []);
                return (0, s.useEffect)(() => {
                    let e = e => {
                        if (e.target && e.target.closest(".faq")) switch (e.key) {
                            case "ArrowDown":
                                e.preventDefault(), null === l || l === c - 1 ? o(0) : o(l + 1);
                                break;
                            case "ArrowUp":
                                e.preventDefault(), null === l || 0 === l ? o(c - 1) : o(l - 1);
                                break;
                            case "Home":
                                e.preventDefault(), o(0);
                                break;
                            case "End":
                                e.preventDefault(), o(c - 1);
                                break;
                            case "Escape":
                                e.preventDefault(), o(null)
                        }
                    };
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [l, c]), (0, r.jsxs)("section", {
                    id: "faqs",
                    className: "relative py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50",
                    "aria-labelledby": "faq-heading",
                    children: [(0, r.jsx)("div", {
                        className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"
                    }), (0, r.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                        children: [(0, r.jsxs)("div", {
                            className: "mx-auto max-w-3xl text-center",
                            children: [(0, r.jsxs)("div", {
                                className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                children: [(0, r.jsx)("svg", {
                                    className: "h-4 w-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: (0, r.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                }), (0, r.jsx)("span", {
                                    children: "Help & Support"
                                })]
                            }), (0, r.jsx)("h2", {
                                id: "faq-heading",
                                className: "mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",
                                children: a
                            }), t && (0, r.jsx)("p", {
                                className: "mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300",
                                children: t
                            })]
                        }), (0, r.jsx)("div", {
                            className: "mx-auto mt-16 max-w-4xl",
                            children: (0, r.jsx)("div", {
                                className: "rounded-2xl bg-white p-2 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800",
                                children: (0, r.jsx)("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-800",
                                    role: "region",
                                    "aria-label": "Frequently asked questions",
                                    children: d.map((e, a) => (0, r.jsx)("div", {
                                        className: "rounded-xl transition-colors duration-200 ".concat(l === a ? "bg-gray-50 dark:bg-gray-800/50" : "hover:bg-gray-50 dark:hover:bg-gray-800/30"),
                                        children: (0, r.jsx)("div", {
                                            className: "px-6",
                                            children: (0, r.jsx)(n, {
                                                question: e.question,
                                                answer: e.answer,
                                                index: a,
                                                isOpen: l === a,
                                                onToggle: () => m(a)
                                            })
                                        })
                                    }, a))
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "mt-12 text-center",
                            children: (0, r.jsxs)("p", {
                                className: "text-base text-gray-600 dark:text-gray-400",
                                children: ["Still have questions?", " ", (0, r.jsx)("a", {
                                    href: "mailto:askus@myCredifyy.com",
                                    className: "font-medium text-primary hover:text-primaryLight dark:text-primaryLight dark:hover:text-primary transition-colors duration-200",
                                    children: "Contact our support team"
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        333: (e, a, t) => {
            "use strict";
            t.r(a), t.d(a, {
                default: () => k
            });
            var r = t(5155),
                s = t(6766),
                i = t(6874),
                n = t.n(i),
                l = t(463),
                o = t(79),
                d = t(6238),
                c = t(9775),
                m = t(3606),
                x = t(2115),
                g = t(3999);
            let h = [5e4, 1e5, 3e5, 5e5, 1e6, 25e5],
                p = [{
                    name: "HDFC Bank",
                    rate: 10.5,
                    color: "bg-blue-600"
                }, {
                    name: "ICICI Bank",
                    rate: 10.65,
                    color: "bg-orange-600"
                }, {
                    name: "SBI",
                    rate: 11.15,
                    color: "bg-blue-700"
                }, {
                    name: "Axis Bank",
                    rate: 10.49,
                    color: "bg-pink-600"
                }];

            function u() {
                let [e, a] = (0, x.useState)({
                    loanAmount: 5e5,
                    interestRate: 10.5,
                    tenure: 36
                }), [t, s] = (0, x.useState)({
                    emi: 0,
                    totalInterest: 0,
                    totalAmount: 0
                }), [i, n] = (0, x.useState)(0);
                (0, x.useEffect)(() => {
                    s(((e, a, t) => {
                        let r = a / 12 / 100,
                            s = e * r * Math.pow(1 + r, t) / (Math.pow(1 + r, t) - 1),
                            i = s * t;
                        return {
                            emi: Math.round(s),
                            totalInterest: Math.round(i - e),
                            totalAmount: Math.round(i)
                        }
                    })(e.loanAmount, e.interestRate, e.tenure))
                }, [e]);
                let l = e => {
                        a(a => ({
                            ...a,
                            loanAmount: e
                        }))
                    },
                    o = e => {
                        a(a => ({
                            ...a,
                            interestRate: e
                        }))
                    },
                    d = e.loanAmount / t.totalAmount * 100;
                return (0, r.jsxs)("div", {
                    className: "mx-auto max-w-6xl",
                    children: [(0, r.jsxs)("div", {
                        className: "grid gap-6 md:gap-8 md:grid-cols-2",
                        children: [(0, r.jsx)(c.default, {
                            animation: "gentle-fade-up",
                            delay: 200,
                            children: (0, r.jsxs)("div", {
                                className: "rounded-2xl bg-white p-4 sm:p-6 lg:p-8 shadow-xl dark:bg-gray-800",
                                children: [(0, r.jsxs)("div", {
                                    className: "mb-8",
                                    children: [(0, r.jsxs)("div", {
                                        className: "mb-4 flex items-center justify-between",
                                        children: [(0, r.jsx)("label", {
                                            className: "text-lg font-semibold text-gray-900 dark:text-white",
                                            children: "Loan Amount"
                                        }), (0, r.jsxs)("div", {
                                            className: "text-2xl font-bold text-primary dark:text-primaryLight",
                                            children: ["₹", (0, g.mC)(e.loanAmount)]
                                        })]
                                    }), (0, r.jsx)("input", {
                                        type: "range",
                                        min: "10000",
                                        max: "4000000",
                                        step: "10000",
                                        value: e.loanAmount,
                                        onChange: e => l(Number(e.target.value)),
                                        className: "h-3 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary dark:[&::-webkit-slider-thumb]:bg-primaryLight [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary dark:[&::-moz-range-thumb]:bg-primaryLight [&::-moz-range-thumb]:border-0",
                                        style: {
                                            minHeight: "44px"
                                        }
                                    }), (0, r.jsx)("div", {
                                        className: "mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3",
                                        children: h.map(a => (0, r.jsx)(c.SubtleHover, {
                                            type: "scale",
                                            children: (0, r.jsxs)("button", {
                                                onClick: () => l(a),
                                                className: "rounded-lg px-3 py-2 min-h-[44px] text-sm font-medium transition-all ".concat(e.loanAmount === a ? "bg-primary text-white dark:bg-primaryLight dark:text-gray-900" : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"),
                                                children: ["₹", a >= 1e5 ? "".concat(a / 1e5, "L") : "".concat(a / 1e3, "K")]
                                            })
                                        }, a))
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "mb-8",
                                    children: [(0, r.jsxs)("div", {
                                        className: "mb-4 flex items-center justify-between",
                                        children: [(0, r.jsx)("label", {
                                            className: "text-lg font-semibold text-gray-900 dark:text-white",
                                            children: "Interest Rate (% p.a.)"
                                        }), (0, r.jsxs)("div", {
                                            className: "text-2xl font-bold text-primary dark:text-primaryLight",
                                            children: [e.interestRate, "%"]
                                        })]
                                    }), (0, r.jsx)("input", {
                                        type: "range",
                                        min: "8",
                                        max: "24",
                                        step: "0.01",
                                        value: e.interestRate,
                                        onChange: e => o(Number(e.target.value)),
                                        className: "h-3 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary dark:[&::-webkit-slider-thumb]:bg-primaryLight [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary dark:[&::-moz-range-thumb]:bg-primaryLight [&::-moz-range-thumb]:border-0",
                                        style: {
                                            minHeight: "44px"
                                        }
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "mb-8",
                                    children: [(0, r.jsxs)("div", {
                                        className: "mb-4 flex items-center justify-between",
                                        children: [(0, r.jsx)("label", {
                                            className: "text-lg font-semibold text-gray-900 dark:text-white",
                                            children: "Loan Tenure"
                                        }), (0, r.jsxs)("div", {
                                            className: "text-2xl font-bold text-primary dark:text-primaryLight",
                                            children: [e.tenure, " months"]
                                        })]
                                    }), (0, r.jsx)("input", {
                                        type: "range",
                                        min: "3",
                                        max: "84",
                                        step: "1",
                                        value: e.tenure,
                                        onChange: e => {
                                            var t;
                                            return t = Number(e.target.value), void a(e => ({
                                                ...e,
                                                tenure: t
                                            }))
                                        },
                                        className: "h-3 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary dark:[&::-webkit-slider-thumb]:bg-primaryLight [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary dark:[&::-moz-range-thumb]:bg-primaryLight [&::-moz-range-thumb]:border-0",
                                        style: {
                                            minHeight: "44px"
                                        }
                                    }), (0, r.jsxs)("div", {
                                        className: "mt-4 flex justify-between text-sm text-gray-600 dark:text-gray-400",
                                        children: [(0, r.jsx)("span", {
                                            children: "3 months"
                                        }), (0, r.jsx)("span", {
                                            children: "7 years"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "mb-8",
                                    children: [(0, r.jsx)("label", {
                                        className: "mb-4 block text-lg font-semibold text-gray-900 dark:text-white",
                                        children: "Compare Bank Rates"
                                    }), (0, r.jsx)("div", {
                                        className: "space-y-2",
                                        children: p.map((e, a) => (0, r.jsx)(c.SubtleHover, {
                                            type: "lift",
                                            children: (0, r.jsxs)("button", {
                                                onClick: () => {
                                                    n(a), o(e.rate)
                                                },
                                                className: "flex w-full items-center justify-between rounded-lg p-3 min-h-[44px] transition-all ".concat(i === a ? "bg-primary/10 border-2 border-primary dark:bg-primaryLight/10 dark:border-primaryLight" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"),
                                                children: [(0, r.jsx)("span", {
                                                    className: "font-medium text-gray-900 dark:text-white",
                                                    children: e.name
                                                }), (0, r.jsxs)("span", {
                                                    className: "font-semibold text-primary dark:text-primaryLight",
                                                    children: [e.rate, "%"]
                                                })]
                                            })
                                        }, a))
                                    })]
                                })]
                            })
                        }), (0, r.jsx)(c.default, {
                            animation: "gentle-fade-up",
                            delay: 300,
                            children: (0, r.jsxs)("div", {
                                className: "space-y-6",
                                children: [(0, r.jsxs)("div", {
                                    className: "rounded-2xl bg-gradient-to-br from-primary to-secondary p-4 sm:p-6 lg:p-8 text-white shadow-xl",
                                    children: [(0, r.jsx)("h3", {
                                        className: "mb-2 text-lg font-medium text-white/80",
                                        children: "Monthly EMI"
                                    }), (0, r.jsxs)("div", {
                                        className: "mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold",
                                        children: ["₹", (0, g.mC)(t.emi)]
                                    }), (0, r.jsxs)("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [(0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("p", {
                                                className: "text-sm text-white/70",
                                                children: "Total Interest"
                                            }), (0, r.jsxs)("p", {
                                                className: "text-xl font-semibold",
                                                children: ["₹", (0, g.mC)(t.totalInterest)]
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("p", {
                                                className: "text-sm text-white/70",
                                                children: "Total Amount"
                                            }), (0, r.jsxs)("p", {
                                                className: "text-xl font-semibold",
                                                children: ["₹", (0, g.mC)(t.totalAmount)]
                                            })]
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "rounded-2xl bg-white p-4 sm:p-6 lg:p-8 shadow-xl dark:bg-gray-800",
                                    children: [(0, r.jsx)("h3", {
                                        className: "mb-6 text-lg font-semibold text-gray-900 dark:text-white",
                                        children: "Principal vs Interest Breakdown"
                                    }), (0, r.jsxs)("div", {
                                        className: "space-y-6",
                                        children: [(0, r.jsx)("div", {
                                            className: "flex justify-center",
                                            children: (0, r.jsxs)("div", {
                                                className: "relative h-48 w-48",
                                                children: [(0, r.jsxs)("svg", {
                                                    className: "h-full w-full -rotate-90 transform",
                                                    children: [(0, r.jsx)("circle", {
                                                        cx: "96",
                                                        cy: "96",
                                                        r: "88",
                                                        stroke: "currentColor",
                                                        strokeWidth: "16",
                                                        fill: "none",
                                                        className: "text-gray-200 dark:text-gray-700"
                                                    }), (0, r.jsx)("circle", {
                                                        cx: "96",
                                                        cy: "96",
                                                        r: "88",
                                                        stroke: "currentColor",
                                                        strokeWidth: "16",
                                                        fill: "none",
                                                        strokeDasharray: "".concat(2 * Math.PI * 88),
                                                        strokeDashoffset: "".concat(2 * Math.PI * 88 * (1 - d / 100)),
                                                        className: "text-primary transition-all duration-500 dark:text-primaryLight"
                                                    })]
                                                }), (0, r.jsx)("div", {
                                                    className: "absolute inset-0 flex items-center justify-center",
                                                    children: (0, r.jsxs)("div", {
                                                        className: "text-center",
                                                        children: [(0, r.jsxs)("div", {
                                                            className: "text-3xl font-bold text-gray-900 dark:text-white",
                                                            children: [Math.round(d), "%"]
                                                        }), (0, r.jsx)("div", {
                                                            className: "text-sm text-gray-600 dark:text-gray-400",
                                                            children: "Principal"
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6",
                                            children: [(0, r.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0, r.jsx)("div", {
                                                    className: "h-3 w-3 flex-shrink-0 rounded-full bg-primary dark:bg-primaryLight"
                                                }), (0, r.jsxs)("span", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: ["Principal: ₹", (0, g.mC)(e.loanAmount)]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0, r.jsx)("div", {
                                                    className: "h-3 w-3 flex-shrink-0 rounded-full bg-gray-200 dark:bg-gray-700"
                                                }), (0, r.jsxs)("span", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: ["Interest: ₹", (0, g.mC)(t.totalInterest)]
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "rounded-2xl bg-white p-4 sm:p-6 lg:p-8 shadow-xl dark:bg-gray-800",
                                    children: [(0, r.jsx)("h3", {
                                        className: "mb-4 text-lg font-semibold text-gray-900 dark:text-white",
                                        children: "Year-wise Payment Breakdown"
                                    }), (0, r.jsx)("div", {
                                        className: "space-y-3",
                                        children: [1, 2, 3].map(a => {
                                            let s = t.emi * Math.min(12, e.tenure - (a - 1) * 12);
                                            return 0 === Math.max(0, e.tenure - (a - 1) * 12) ? null : (0, r.jsxs)("div", {
                                                className: "flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-700",
                                                children: [(0, r.jsxs)("span", {
                                                    className: "font-medium text-gray-700 dark:text-gray-300",
                                                    children: ["Year ", a]
                                                }), (0, r.jsxs)("span", {
                                                    className: "font-semibold text-gray-900 dark:text-white",
                                                    children: ["₹", (0, g.mC)(Math.round(s))]
                                                })]
                                            }, a)
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20",
                                        children: (0, r.jsxs)("p", {
                                            className: "text-sm text-blue-800 dark:text-blue-200",
                                            children: [(0, r.jsx)("strong", {
                                                children: "Save on Interest:"
                                            }), " Increase your EMI by 10% to save ₹", (0, g.mC)(Math.round(.15 * t.totalInterest)), " and reduce tenure by ", Math.round(.2 * e.tenure), " months."]
                                        })
                                    })]
                                })]
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: "mt-12 text-center",
                        children: (0, r.jsxs)(c.default, {
                            animation: "gentle-fade-up",
                            delay: 400,
                            children: [(0, r.jsx)("p", {
                                className: "mb-6 text-lg text-gray-600 dark:text-gray-400",
                                children: "Happy with the calculation? Apply now and get your loan approved in 2 minutes!"
                            }), (0, r.jsx)(c.SubtleHover, {
                                type: "lift",
                                children: (0, r.jsxs)("a", {
                                    href: "https://pulse.Credifyy.com/users/sign-up/",
                                    className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] text-base font-semibold text-white transition-all duration-200 hover:bg-primaryLight hover:shadow-xl hover:shadow-primary/25 dark:bg-primaryLight dark:text-gray-900 dark:hover:bg-primary dark:hover:text-white",
                                    children: ["Apply for Personal Loan", (0, r.jsx)("svg", {
                                        className: "h-5 w-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                        })
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }
            let y = {
                    "@context": "https://schema.org",
                    "@type": "FinancialProduct",
                    name: "Personal Loans in India - Credifyy",
                    description: "Get instant personal loans from ₹10,000 to ₹40 lakhs with competitive interest rates starting from 10.49% p.a. Compare offers from 90+ banks and NBFCs.",
                    provider: {
                        "@type": "Organization",
                        name: "Credifyy",
                        url: "https://Credifyy.com",
                        logo: "https://Credifyy.com/logo.png"
                    },
                    areaServed: {
                        "@type": "Country",
                        name: "India"
                    },
                    feesAndCommissionsSpecification: "Processing fee 0-4% of loan amount (Zero fees from select banks)",
                    interestRate: "10.49% - 24% p.a.",
                    aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.6",
                        ratingCount: "15847",
                        bestRating: "5"
                    },
                    offers: {
                        "@type": "Offer",
                        price: "10.49",
                        priceCurrency: "INR",
                        description: "Starting interest rate for personal loans"
                    }
                },
                b = [{
                    icon: (0, r.jsx)("svg", {
                        className: "h-6 w-6",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: (0, r.jsx)("path", {
                            d: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                        })
                    }),
                    title: "Education",
                    description: "Fund higher education abroad",
                    stats: "₹25L avg"
                }, {
                    icon: (0, r.jsx)("svg", {
                        className: "h-6 w-6",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",
                            clipRule: "evenodd"
                        })
                    }),
                    title: "Medical Emergency",
                    description: "Instant funds for healthcare",
                    stats: "24hr approval"
                }, {
                    icon: (0, r.jsx)("svg", {
                        className: "h-6 w-6",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                            clipRule: "evenodd"
                        })
                    }),
                    title: "Wedding",
                    description: "Plan your dream celebration",
                    stats: "₹8L avg"
                }, {
                    icon: (0, r.jsx)("svg", {
                        className: "h-6 w-6",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: (0, r.jsx)("path", {
                            d: "M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
                        })
                    }),
                    title: "Debt Consolidation",
                    description: "Save up to 50% on interest",
                    stats: "₹4L saved"
                }, {
                    icon: (0, r.jsx)("svg", {
                        className: "h-6 w-6",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z",
                            clipRule: "evenodd"
                        })
                    }),
                    title: "Travel & Vacation",
                    description: "Explore without limits",
                    stats: "₹3L avg"
                }, {
                    icon: (0, r.jsx)("svg", {
                        className: "h-6 w-6",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: (0, r.jsx)("path", {
                            d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                        })
                    }),
                    title: "Home Renovation",
                    description: "Transform your space",
                    stats: "₹5L avg"
                }],
                f = [{
                    bank: "Axis Bank",
                    rate: "10.49%",
                    amount: "₹40L",
                    time: "30 min",
                    special: "Instant approval",
                    badge: "Lowest Rate"
                }, {
                    bank: "HDFC Bank",
                    rate: "10.50%",
                    amount: "₹50L",
                    time: "2 hours",
                    special: "Zero processing fee",
                    badge: "Most Popular"
                }, {
                    bank: "ICICI Bank",
                    rate: "10.65%",
                    amount: "₹50L",
                    time: "1 hour",
                    special: "Pre-approved offers",
                    badge: "Quick Approval"
                }, {
                    bank: "Kotak Mahindra",
                    rate: "10.75%",
                    amount: "₹40L",
                    time: "2 hours",
                    special: "Flexi EMI options",
                    badge: "Flexible Terms"
                }, {
                    bank: "SBI",
                    rate: "11.15%",
                    amount: "₹30L",
                    time: "24 hours",
                    special: "Government backed",
                    badge: "Trusted"
                }, {
                    bank: "YES Bank",
                    rate: "11.25%",
                    amount: "₹40L",
                    time: "3 hours",
                    special: "Digital process",
                    badge: "Tech Enabled"
                }];

            function k() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(y)
                        }
                    }), (0, r.jsxs)("section", {
                        className: "relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900",
                        children: [(0, r.jsx)("div", {
                            className: "absolute inset-0 z-0",
                            children: (0, r.jsx)("div", {
                                className: "absolute inset-0 bg-grid-gray-100 bg-[size:20px_20px] opacity-50 dark:bg-grid-gray-800 dark:opacity-30"
                            })
                        }), (0, r.jsxs)("div", {
                            className: "absolute inset-0 z-0",
                            children: [(0, r.jsx)(c.SubtleBackground, {
                                type: "gentle-parallax",
                                intensity: "minimal",
                                className: "absolute right-20 top-20 opacity-10 dark:opacity-5",
                                children: (0, r.jsx)("div", {
                                    className: "h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl"
                                })
                            }), (0, r.jsx)(c.SubtleBackground, {
                                type: "breathing",
                                intensity: "subtle",
                                className: "absolute left-10 bottom-20 opacity-10 dark:opacity-5",
                                children: (0, r.jsx)("div", {
                                    className: "h-40 w-40 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-2xl"
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "relative z-10 py-20 sm:py-24 lg:py-32",
                            children: (0, r.jsxs)("div", {
                                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                                children: [(0, r.jsx)(c.default, {
                                    animation: "gentle-fade-up",
                                    delay: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight mb-6",
                                        children: [(0, r.jsx)("svg", {
                                            className: "h-4 w-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Trusted by 5 Million+ Indians"
                                        })]
                                    })
                                }), (0, r.jsx)(c.default, {
                                    animation: "gentle-fade-up",
                                    delay: 50,
                                    children: (0, r.jsxs)("div", {
                                        className: "mb-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600 dark:text-gray-400",
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, r.jsx)("div", {
                                                className: "h-2 w-2 bg-green-500 rounded-full animate-pulse"
                                            }), (0, r.jsx)("span", {
                                                className: "font-medium",
                                                children: "RBI Licensed Partners"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, r.jsx)("div", {
                                                className: "flex",
                                                children: [void 0, void 0, void 0, void 0, void 0].map((e, a) => (0, r.jsx)("svg", {
                                                    className: "h-4 w-4 text-yellow-400",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    children: (0, r.jsx)("path", {
                                                        d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    })
                                                }, a))
                                            }), (0, r.jsx)("span", {
                                                className: "font-medium",
                                                children: "4.6/5 (15,800+ reviews)"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, r.jsx)("svg", {
                                                className: "h-4 w-4 text-green-500",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: (0, r.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    d: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
                                                    clipRule: "evenodd"
                                                })
                                            }), (0, r.jsx)("span", {
                                                className: "font-medium",
                                                children: "₹3,500 Cr+ Disbursed"
                                            })]
                                        })]
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-8 items-center",
                                    children: [(0, r.jsxs)("div", {
                                        className: "text-center lg:text-left",
                                        children: [(0, r.jsx)(c.default, {
                                            animation: "gentle-fade-up",
                                            delay: 100,
                                            children: (0, r.jsxs)("h1", {
                                                className: "text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl",
                                                children: [(0, r.jsx)("span", {
                                                    className: "block",
                                                    children: "Instant Personal Loans"
                                                }), (0, r.jsxs)("span", {
                                                    className: "relative mt-1 sm:mt-2 block",
                                                    children: [(0, r.jsx)("span", {
                                                        className: "relative bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-primaryLight dark:to-secondaryLight",
                                                        children: "₹10K to ₹1 Crore"
                                                    }), (0, r.jsx)("svg", {
                                                        className: "absolute left-0 -bottom-1 sm:-bottom-2 w-full opacity-30",
                                                        height: "8",
                                                        viewBox: "0 0 250 8",
                                                        preserveAspectRatio: "none",
                                                        children: (0, r.jsx)("path", {
                                                            d: "M0,4 Q62.5,0 125,4 T250,4",
                                                            stroke: "currentColor",
                                                            strokeWidth: "3",
                                                            fill: "none",
                                                            className: "text-primary dark:text-primaryLight"
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, r.jsx)(c.default, {
                                            animation: "gentle-fade-up",
                                            delay: 200,
                                            children: (0, r.jsx)("p", {
                                                className: "mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl lg:text-left text-center",
                                                children: "Compare offers from 90+ banks and NBFCs. Get instant approval in under 2 minutes with rates starting from 10.49% p.a. 100% digital process with same-day disbursal."
                                            })
                                        }), (0, r.jsx)(c.default, {
                                            animation: "gentle-fade-up",
                                            delay: 300,
                                            children: (0, r.jsxs)("div", {
                                                className: "mt-8 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 text-center lg:text-left border border-gray-200/50 dark:border-gray-700/50",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "text-2xl font-bold text-primary dark:text-primaryLight",
                                                        children: "10.49%"
                                                    }), (0, r.jsx)("div", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400 font-medium",
                                                        children: "Starting Rate"
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 text-center lg:text-left border border-gray-200/50 dark:border-gray-700/50",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "text-2xl font-bold text-primary dark:text-primaryLight",
                                                        children: "2 Min"
                                                    }), (0, r.jsx)("div", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400 font-medium",
                                                        children: "Approval Time"
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 text-center lg:text-left border border-gray-200/50 dark:border-gray-700/50",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "text-2xl font-bold text-primary dark:text-primaryLight",
                                                        children: "90+"
                                                    }), (0, r.jsx)("div", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400 font-medium",
                                                        children: "Bank Partners"
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 text-center lg:text-left border border-gray-200/50 dark:border-gray-700/50",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "text-2xl font-bold text-primary dark:text-primaryLight",
                                                        children: "Zero"
                                                    }), (0, r.jsx)("div", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400 font-medium",
                                                        children: "Hidden Charges"
                                                    })]
                                                })]
                                            })
                                        }), (0, r.jsx)(c.default, {
                                            animation: "gentle-fade-up",
                                            delay: 400,
                                            children: (0, r.jsxs)("div", {
                                                className: "mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:justify-start",
                                                children: [(0, r.jsx)(c.SubtleHover, {
                                                    type: "lift",
                                                    children: (0, r.jsxs)(n(), {
                                                        href: "https://pulse.Credifyy.com/users/sign-up/",
                                                        className: "group relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-primaryLight hover:shadow-xl hover:shadow-primary/25 dark:bg-primaryLight dark:text-gray-900 dark:hover:bg-primary dark:hover:text-white",
                                                        children: ["Check Eligibility Now", (0, r.jsx)("svg", {
                                                            className: "ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: (0, r.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                                            })
                                                        })]
                                                    })
                                                }), (0, r.jsx)(c.SubtleHover, {
                                                    type: "lift",
                                                    children: (0, r.jsxs)("button", {
                                                        onClick: () => {
                                                            var e;
                                                            return null == (e = document.getElementById("calculator")) ? void 0 : e.scrollIntoView({
                                                                behavior: "smooth"
                                                            })
                                                        },
                                                        className: "group inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:text-white",
                                                        children: ["Calculate EMI", (0, r.jsx)("svg", {
                                                            className: "ml-2 h-5 w-5",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: (0, r.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "relative lg:pl-8",
                                        children: (0, r.jsx)(c.default, {
                                            animation: "gentle-slide-right",
                                            delay: 200,
                                            children: (0, r.jsx)(c.SubtleBackground, {
                                                type: "float",
                                                intensity: "gentle",
                                                className: "relative",
                                                children: (0, r.jsxs)("div", {
                                                    className: "relative mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none",
                                                    children: [(0, r.jsx)(s.default, {
                                                        className: "relative w-full h-auto",
                                                        src: "/images/personal-loan-hero.svg",
                                                        alt: "Instant Personal Loans in India",
                                                        width: 700,
                                                        height: 600,
                                                        priority: !0
                                                    }), (0, r.jsx)(c.SubtleBackground, {
                                                        type: "float",
                                                        intensity: "subtle",
                                                        className: "absolute -right-4 top-8 hidden sm:block",
                                                        children: (0, r.jsx)("div", {
                                                            className: "rounded-xl bg-white p-4 shadow-xl dark:bg-gray-800",
                                                            children: (0, r.jsxs)("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [(0, r.jsxs)("div", {
                                                                    className: "relative",
                                                                    children: [(0, r.jsx)("div", {
                                                                        className: "h-3 w-3 animate-ping absolute inline-flex rounded-full bg-green-400 opacity-75"
                                                                    }), (0, r.jsx)("div", {
                                                                        className: "relative inline-flex h-3 w-3 rounded-full bg-green-500"
                                                                    })]
                                                                }), (0, r.jsxs)("div", {
                                                                    children: [(0, r.jsx)("div", {
                                                                        className: "text-sm font-semibold text-gray-900 dark:text-white",
                                                                        children: "Live Applications"
                                                                    }), (0, r.jsx)("div", {
                                                                        className: "text-xs text-gray-600 dark:text-gray-400",
                                                                        children: "2,341 loans today"
                                                                    })]
                                                                })]
                                                            })
                                                        })
                                                    }), (0, r.jsx)(c.SubtleBackground, {
                                                        type: "float",
                                                        intensity: "subtle",
                                                        className: "absolute -left-4 bottom-16 hidden sm:block",
                                                        style: {
                                                            animationDelay: "1s"
                                                        },
                                                        children: (0, r.jsx)("div", {
                                                            className: "rounded-xl bg-white p-4 shadow-xl dark:bg-gray-800",
                                                            children: (0, r.jsxs)("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [(0, r.jsx)("div", {
                                                                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
                                                                    children: (0, r.jsx)("svg", {
                                                                        className: "h-5 w-5",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        children: (0, r.jsx)("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M5 13l4 4L19 7"
                                                                        })
                                                                    })
                                                                }), (0, r.jsxs)("div", {
                                                                    children: [(0, r.jsx)("div", {
                                                                        className: "text-2xl font-bold text-gray-900 dark:text-white",
                                                                        children: "92%"
                                                                    }), (0, r.jsx)("div", {
                                                                        className: "text-xs text-gray-600 dark:text-gray-400",
                                                                        children: "Approval Rate"
                                                                    })]
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                })
                                            })
                                        })
                                    })]
                                })]
                            })
                        })]
                    }), (0, r.jsx)(d.default, {}), (0, r.jsxs)("section", {
                        className: "relative py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50",
                        children: [(0, r.jsx)("div", {
                            className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"
                        }), (0, r.jsxs)("div", {
                            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                            children: [(0, r.jsx)("div", {
                                className: "text-center mb-12",
                                children: (0, r.jsxs)(c.default, {
                                    animation: "gentle-fade-up",
                                    children: [(0, r.jsxs)("div", {
                                        className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight mb-6",
                                        children: [(0, r.jsx)("svg", {
                                            className: "h-4 w-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Compare Top Banks"
                                        })]
                                    }), (0, r.jsx)("h2", {
                                        className: "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",
                                        children: "Best Personal Loan Offers Today"
                                    }), (0, r.jsx)("p", {
                                        className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
                                        children: "Real-time rates from leading banks and NBFCs"
                                    })]
                                })
                            }), (0, r.jsx)(c.default, {
                                animation: "gentle-fade-up",
                                delay: 100,
                                children: (0, r.jsx)("div", {
                                    className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12",
                                    children: f.map((e, a) => (0, r.jsxs)("div", {
                                        className: "group relative rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 dark:bg-gray-800 border border-gray-100 dark:border-gray-700",
                                        children: [(0, r.jsx)("div", {
                                            className: "absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                        }), (0, r.jsxs)("div", {
                                            className: "relative",
                                            children: [(0, r.jsxs)("div", {
                                                className: "mb-4 flex items-center justify-between",
                                                children: [(0, r.jsx)("h3", {
                                                    className: "font-bold text-gray-900 dark:text-white text-lg",
                                                    children: e.bank
                                                }), e.badge && (0, r.jsx)("span", {
                                                    className: "rounded-full px-3 py-1 text-xs font-semibold ".concat("Lowest Rate" === e.badge ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "Most Popular" === e.badge ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : "Quick Approval" === e.badge ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"),
                                                    children: e.badge
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "space-y-3 text-sm mb-4",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50",
                                                    children: [(0, r.jsx)("span", {
                                                        className: "text-gray-600 dark:text-gray-400 font-medium",
                                                        children: "Interest Rate"
                                                    }), (0, r.jsx)("span", {
                                                        className: "font-bold text-primary dark:text-primaryLight text-lg",
                                                        children: e.rate
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [(0, r.jsx)("span", {
                                                        className: "text-gray-600 dark:text-gray-400",
                                                        children: "Max Amount"
                                                    }), (0, r.jsx)("span", {
                                                        className: "font-semibold text-gray-900 dark:text-white",
                                                        children: e.amount
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [(0, r.jsx)("span", {
                                                        className: "text-gray-600 dark:text-gray-400",
                                                        children: "Approval Time"
                                                    }), (0, r.jsx)("span", {
                                                        className: "font-semibold text-green-600 dark:text-green-400",
                                                        children: e.time
                                                    })]
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "mt-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 p-3 text-center",
                                                children: (0, r.jsx)("span", {
                                                    className: "text-sm font-semibold text-gray-700 dark:text-gray-300",
                                                    children: e.special
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "mt-4",
                                                children: (0, r.jsx)("button", {
                                                    className: "w-full rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary font-semibold py-2 px-4 transition-all duration-200 dark:bg-primaryLight/10 dark:text-primaryLight dark:hover:bg-primaryLight dark:hover:text-gray-900",
                                                    children: "View Details"
                                                })
                                            })]
                                        })]
                                    }, a))
                                })
                            }), (0, r.jsx)(l.default, {})]
                        })]
                    }), (0, r.jsx)("section", {
                        id: "calculator",
                        className: "section-padding",
                        children: (0, r.jsxs)("div", {
                            className: "container-custom",
                            children: [(0, r.jsx)("div", {
                                className: "text-center mb-12",
                                children: (0, r.jsxs)(c.default, {
                                    animation: "gentle-fade-up",
                                    children: [(0, r.jsxs)("div", {
                                        className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight mb-6",
                                        children: [(0, r.jsx)("svg", {
                                            className: "h-4 w-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Smart Calculator"
                                        })]
                                    }), (0, r.jsx)("h2", {
                                        className: "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",
                                        children: "Calculate Your Personal Loan EMI"
                                    }), (0, r.jsx)("p", {
                                        className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
                                        children: "Plan your loan with our advanced EMI calculator"
                                    })]
                                })
                            }), (0, r.jsx)(u, {})]
                        })
                    }), (0, r.jsxs)("section", {
                        className: "relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800",
                        children: [(0, r.jsx)("div", {
                            className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"
                        }), (0, r.jsxs)("div", {
                            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                            children: [(0, r.jsx)("div", {
                                className: "text-center",
                                children: (0, r.jsxs)(c.default, {
                                    animation: "gentle-fade-up",
                                    children: [(0, r.jsxs)("div", {
                                        className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight mb-6",
                                        children: [(0, r.jsx)("svg", {
                                            className: "h-4 w-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Smart Financial Solutions"
                                        })]
                                    }), (0, r.jsx)("h2", {
                                        className: "text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",
                                        children: "Fund Every Dream, Every Goal"
                                    }), (0, r.jsx)("p", {
                                        className: "mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300",
                                        children: "From life-changing moments to everyday needs, get the perfect loan match with competitive rates and lightning-fast approval."
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                                children: b.map((e, a) => (0, r.jsx)(c.default, {
                                    animation: "gentle-fade-up",
                                    delay: 100 * a,
                                    children: (0, r.jsx)(c.SubtleHover, {
                                        type: "lift",
                                        children: (0, r.jsxs)("div", {
                                            className: "group relative h-full rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-gray-900 border border-gray-100 dark:border-gray-800",
                                            children: [(0, r.jsx)("div", {
                                                className: "absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            }), (0, r.jsxs)("div", {
                                                className: "relative",
                                                children: [(0, r.jsx)("div", {
                                                    className: "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:from-primary group-hover:to-secondary group-hover:text-white dark:from-primaryLight/10 dark:to-secondaryLight/10 dark:text-primaryLight dark:group-hover:from-primaryLight dark:group-hover:to-secondaryLight dark:group-hover:text-gray-900",
                                                    children: e.icon
                                                }), (0, r.jsx)("h3", {
                                                    className: "mb-3 text-xl font-bold text-gray-900 dark:text-white",
                                                    children: e.title
                                                }), (0, r.jsx)("p", {
                                                    className: "mb-6 text-gray-600 dark:text-gray-400 leading-relaxed",
                                                    children: e.description
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "flex items-center text-sm font-bold text-primary dark:text-primaryLight",
                                                        children: (0, r.jsx)("span", {
                                                            className: "bg-primary/10 dark:bg-primaryLight/10 px-3 py-1 rounded-full",
                                                            children: e.stats
                                                        })
                                                    }), (0, r.jsxs)("button", {
                                                        className: "flex items-center text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight transition-colors duration-200",
                                                        children: [(0, r.jsx)("span", {
                                                            children: "Explore"
                                                        }), (0, r.jsx)("svg", {
                                                            className: "ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: (0, r.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                }, e.title))
                            }), (0, r.jsx)("div", {
                                className: "mt-12 text-center",
                                children: (0, r.jsxs)(c.default, {
                                    animation: "gentle-fade-up",
                                    delay: 600,
                                    children: [(0, r.jsx)("p", {
                                        className: "text-lg text-gray-600 dark:text-gray-400 mb-6",
                                        children: "Don't see your need? Our experts will find the perfect loan solution for you."
                                    }), (0, r.jsx)(c.SubtleHover, {
                                        type: "lift",
                                        children: (0, r.jsxs)(n(), {
                                            href: "https://pulse.Credifyy.com/users/sign-up/",
                                            className: "group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-primaryLight hover:shadow-xl hover:shadow-primary/25 dark:bg-primaryLight dark:text-gray-900 dark:hover:bg-primary dark:hover:text-white",
                                            children: ["Get Personalized Recommendations", (0, r.jsx)("svg", {
                                                className: "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })]
                    }), (0, r.jsx)("section", {
                        className: "section-padding",
                        children: (0, r.jsxs)("div", {
                            className: "container-custom",
                            children: [(0, r.jsx)("div", {
                                className: "text-center mb-12",
                                children: (0, r.jsxs)(c.default, {
                                    animation: "gentle-fade-up",
                                    children: [(0, r.jsxs)("div", {
                                        className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight mb-6",
                                        children: [(0, r.jsx)("svg", {
                                            className: "h-4 w-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Simple Process"
                                        })]
                                    }), (0, r.jsx)("h2", {
                                        className: "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",
                                        children: "Get Your Loan in 4 Simple Steps"
                                    }), (0, r.jsx)("p", {
                                        className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
                                        children: "From application to money in bank - all in under 24 hours"
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                className: "relative",
                                children: [(0, r.jsx)("div", {
                                    className: "absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 transform bg-gray-300 dark:bg-gray-700 lg:block"
                                }), (0, r.jsx)("div", {
                                    className: "space-y-12 lg:space-y-16",
                                    children: [{
                                        step: "1",
                                        title: "Check Eligibility",
                                        time: "30 seconds",
                                        description: "Enter basic details like income, employment, and loan amount. Get instant eligibility check.",
                                        icon: (0, r.jsx)("svg", {
                                            className: "h-6 w-6",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            })
                                        })
                                    }, {
                                        step: "2",
                                        title: "Compare & Select",
                                        time: "2 minutes",
                                        description: "View personalized offers from 30+ banks. Compare interest rates, EMIs, and features.",
                                        icon: (0, r.jsx)("svg", {
                                            className: "h-6 w-6",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            })
                                        })
                                    }, {
                                        step: "3",
                                        title: "Upload Documents",
                                        time: "5 minutes",
                                        description: "Upload PAN, Aadhaar, salary slips digitally. AI-powered instant verification.",
                                        icon: (0, r.jsx)("svg", {
                                            className: "h-6 w-6",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            })
                                        })
                                    }, {
                                        step: "4",
                                        title: "Get Money",
                                        time: "Same day",
                                        description: "Digital agreement signing. Money Credited directly to your bank account.",
                                        icon: (0, r.jsx)("svg", {
                                            className: "h-6 w-6",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            })
                                        })
                                    }].map((e, a) => (0, r.jsx)(c.default, {
                                        animation: "gentle-fade-up",
                                        delay: 100 * a,
                                        children: (0, r.jsxs)("div", {
                                            className: "relative flex items-center ".concat(a % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"),
                                            children: [(0, r.jsx)("div", {
                                                className: "flex-1 ".concat(a % 2 == 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"),
                                                children: (0, r.jsxs)("div", {
                                                    className: "rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 ".concat(a % 2 == 0 ? "lg:ml-auto lg:max-w-md" : "lg:mr-auto lg:max-w-md"),
                                                    children: [(0, r.jsxs)("div", {
                                                        className: "mb-4 flex items-center gap-4 ".concat(a % 2 == 0 ? "lg:flex-row-reverse" : ""),
                                                        children: [(0, r.jsx)("div", {
                                                            className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                                            children: e.icon
                                                        }), (0, r.jsxs)("div", {
                                                            className: "flex-1",
                                                            children: [(0, r.jsx)("h3", {
                                                                className: "text-xl font-semibold text-gray-900 dark:text-white",
                                                                children: e.title
                                                            }), (0, r.jsx)("p", {
                                                                className: "text-sm text-primary dark:text-primaryLight",
                                                                children: e.time
                                                            })]
                                                        })]
                                                    }), (0, r.jsx)("p", {
                                                        className: "text-gray-600 dark:text-gray-400",
                                                        children: e.description
                                                    })]
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "absolute left-1/2 hidden -translate-x-1/2 transform lg:block",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg dark:bg-primaryLight dark:text-gray-900",
                                                    children: e.step
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "mb-4 flex items-center gap-4 lg:hidden",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white dark:bg-primaryLight dark:text-gray-900",
                                                    children: e.step
                                                })
                                            })]
                                        })
                                    }, a))
                                })]
                            }), (0, r.jsx)("div", {
                                className: "mt-12 text-center",
                                children: (0, r.jsx)(c.SubtleHover, {
                                    type: "lift",
                                    children: (0, r.jsxs)(n(), {
                                        href: "https://pulse.Credifyy.com/users/sign-up/",
                                        className: "group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-primaryLight hover:shadow-xl hover:shadow-primary/25 dark:bg-primaryLight dark:text-gray-900 dark:hover:bg-primary dark:hover:text-white",
                                        children: ["Start Your Application", (0, r.jsx)("svg", {
                                            className: "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                            })
                                        })]
                                    })
                                })
                            })]
                        })
                    }), (0, r.jsx)("section", {
                        className: "relative py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/50",
                        children: (0, r.jsxs)("div", {
                            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                            children: [(0, r.jsxs)("div", {
                                className: "text-center mb-8",
                                children: [(0, r.jsx)("h3", {
                                    className: "text-2xl font-bold text-gray-900 dark:text-white",
                                    children: "Bank-Level Security & Compliance"
                                }), (0, r.jsx)("p", {
                                    className: "mt-2 text-gray-600 dark:text-gray-400",
                                    children: "Your data is protected with industry-leading security standards"
                                })]
                            }), (0, r.jsx)(m.A, {
                                variant: "grid",
                                showDescriptions: !0,
                                className: "max-w-4xl mx-auto"
                            })]
                        })
                    }), (0, r.jsx)("section", {
                        className: "section-padding",
                        children: (0, r.jsx)("div", {
                            className: "container-custom",
                            children: (0, r.jsxs)("div", {
                                className: "mx-auto max-w-5xl",
                                children: [(0, r.jsx)(c.default, {
                                    animation: "gentle-fade-up",
                                    children: (0, r.jsxs)("div", {
                                        className: "text-center mb-12",
                                        children: [(0, r.jsxs)("div", {
                                            className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight mb-6",
                                            children: [(0, r.jsx)("svg", {
                                                className: "h-4 w-4",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                })
                                            }), (0, r.jsx)("span", {
                                                children: "Compare Rates"
                                            })]
                                        }), (0, r.jsx)("h2", {
                                            className: "text-3xl font-bold text-gray-900 dark:text-white",
                                            children: "Personal Loan Interest Rates - December 2024"
                                        }), (0, r.jsx)("p", {
                                            className: "mt-4 text-lg text-gray-600 dark:text-gray-400",
                                            children: "*Rates updated daily. Final rate depends on your profile."
                                        })]
                                    })
                                }), (0, r.jsx)(c.default, {
                                    animation: "gentle-fade-up",
                                    delay: 100,
                                    children: (0, r.jsx)("div", {
                                        className: "overflow-hidden rounded-2xl shadow-xl",
                                        children: (0, r.jsx)("div", {
                                            className: "overflow-x-auto",
                                            children: (0, r.jsxs)("table", {
                                                className: "w-full",
                                                children: [(0, r.jsx)("thead", {
                                                    children: (0, r.jsxs)("tr", {
                                                        className: "bg-gradient-to-r from-primary to-secondary text-white",
                                                        children: [(0, r.jsx)("th", {
                                                            className: "px-6 py-4 text-left text-sm font-semibold",
                                                            children: "Bank/NBFC"
                                                        }), (0, r.jsx)("th", {
                                                            className: "px-6 py-4 text-left text-sm font-semibold",
                                                            children: "Interest Rate"
                                                        }), (0, r.jsx)("th", {
                                                            className: "px-6 py-4 text-left text-sm font-semibold",
                                                            children: "Processing Fee"
                                                        }), (0, r.jsx)("th", {
                                                            className: "px-6 py-4 text-left text-sm font-semibold",
                                                            children: "Max Tenure"
                                                        })]
                                                    })
                                                }), (0, r.jsxs)("tbody", {
                                                    className: "divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900",
                                                    children: [(0, r.jsxs)("tr", {
                                                        className: "transition-colors hover:bg-gray-50 dark:hover:bg-gray-800",
                                                        children: [(0, r.jsx)("td", {
                                                            className: "px-6 py-4",
                                                            children: (0, r.jsxs)("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [(0, r.jsx)("span", {
                                                                    className: "font-medium text-gray-900 dark:text-gray-100",
                                                                    children: "HDFC Bank"
                                                                }), (0, r.jsx)("span", {
                                                                    className: "rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400",
                                                                    children: "Lowest"
                                                                })]
                                                            })
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 font-semibold text-primary dark:text-primaryLight",
                                                            children: "10.50% - 21.50%"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 text-gray-600 dark:text-gray-400",
                                                            children: "Up to 2.50%"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 text-gray-600 dark:text-gray-400",
                                                            children: "60 months"
                                                        })]
                                                    }), (0, r.jsxs)("tr", {
                                                        className: "transition-colors hover:bg-gray-50 dark:hover:bg-gray-800",
                                                        children: [(0, r.jsx)("td", {
                                                            className: "px-6 py-4 font-medium text-gray-900 dark:text-gray-100",
                                                            children: "ICICI Bank"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 font-semibold text-primary dark:text-primaryLight",
                                                            children: "10.65% - 16.00%"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 text-gray-600 dark:text-gray-400",
                                                            children: "Up to 2.00%"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 text-gray-600 dark:text-gray-400",
                                                            children: "60 months"
                                                        })]
                                                    }), (0, r.jsxs)("tr", {
                                                        className: "transition-colors hover:bg-gray-50 dark:hover:bg-gray-800",
                                                        children: [(0, r.jsx)("td", {
                                                            className: "px-6 py-4 font-medium text-gray-900 dark:text-gray-100",
                                                            children: "SBI"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 font-semibold text-primary dark:text-primaryLight",
                                                            children: "11.15% - 15.65%"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 text-gray-600 dark:text-gray-400",
                                                            children: "1.50% + GST"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 text-gray-600 dark:text-gray-400",
                                                            children: "72 months"
                                                        })]
                                                    }), (0, r.jsxs)("tr", {
                                                        className: "transition-colors hover:bg-gray-50 dark:hover:bg-gray-800",
                                                        children: [(0, r.jsx)("td", {
                                                            className: "px-6 py-4 font-medium text-gray-900 dark:text-gray-100",
                                                            children: "Axis Bank"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 font-semibold text-primary dark:text-primaryLight",
                                                            children: "10.49% - 22.00%"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 text-gray-600 dark:text-gray-400",
                                                            children: "Up to 2.00%"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 text-gray-600 dark:text-gray-400",
                                                            children: "60 months"
                                                        })]
                                                    }), (0, r.jsxs)("tr", {
                                                        className: "transition-colors hover:bg-gray-50 dark:hover:bg-gray-800",
                                                        children: [(0, r.jsx)("td", {
                                                            className: "px-6 py-4",
                                                            children: (0, r.jsxs)("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [(0, r.jsx)("span", {
                                                                    className: "font-medium text-gray-900 dark:text-gray-100",
                                                                    children: "Kotak Mahindra"
                                                                }), (0, r.jsx)("span", {
                                                                    className: "rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                                                                    children: "Fast"
                                                                })]
                                                            })
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 font-semibold text-primary dark:text-primaryLight",
                                                            children: "10.99% - 24.00%"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 text-gray-600 dark:text-gray-400",
                                                            children: "Up to 3.00%"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 text-gray-600 dark:text-gray-400",
                                                            children: "60 months"
                                                        })]
                                                    }), (0, r.jsxs)("tr", {
                                                        className: "transition-colors hover:bg-gray-50 dark:hover:bg-gray-800",
                                                        children: [(0, r.jsx)("td", {
                                                            className: "px-6 py-4 font-medium text-gray-900 dark:text-gray-100",
                                                            children: "Bajaj Finserv"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 font-semibold text-primary dark:text-primaryLight",
                                                            children: "11.00% - 24.00%"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 text-gray-600 dark:text-gray-400",
                                                            children: "Up to 4.00%"
                                                        }), (0, r.jsx)("td", {
                                                            className: "px-6 py-4 text-gray-600 dark:text-gray-400",
                                                            children: "96 months"
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "mt-6 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20",
                                    children: (0, r.jsxs)("div", {
                                        className: "flex items-start gap-3",
                                        children: [(0, r.jsx)("svg", {
                                            className: "h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                                clipRule: "evenodd"
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "text-sm text-blue-800 dark:text-blue-200",
                                            children: [(0, r.jsx)("strong", {
                                                children: "Pro Tip:"
                                            }), " Your actual interest rate depends on your Credit score, income, and employment stability. A score above 750 can get you the lowest rates. Check your free Credit score to know your eligibility."]
                                        })]
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)("section", {
                        className: "section-padding bg-gray-50 dark:bg-gray-800",
                        children: (0, r.jsx)("div", {
                            className: "container-custom",
                            children: (0, r.jsxs)("div", {
                                className: "mx-auto max-w-5xl",
                                children: [(0, r.jsx)(c.default, {
                                    animation: "gentle-fade-up",
                                    children: (0, r.jsxs)("div", {
                                        className: "text-center mb-12",
                                        children: [(0, r.jsxs)("div", {
                                            className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight mb-6",
                                            children: [(0, r.jsx)("svg", {
                                                className: "h-4 w-4",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                })
                                            }), (0, r.jsx)("span", {
                                                children: "Eligibility Criteria"
                                            })]
                                        }), (0, r.jsx)("h2", {
                                            className: "text-3xl font-bold text-gray-900 dark:text-white",
                                            children: "Am I Eligible for a Personal Loan?"
                                        }), (0, r.jsx)("p", {
                                            className: "mt-4 text-lg text-gray-600 dark:text-gray-300",
                                            children: "Check if you meet the basic requirements for instant approval"
                                        })]
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "grid gap-8 md:grid-cols-2",
                                    children: [(0, r.jsx)(c.default, {
                                        animation: "gentle-fade-up",
                                        delay: 100,
                                        children: (0, r.jsxs)("div", {
                                            className: "group relative h-full rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-900",
                                            children: [(0, r.jsx)("div", {
                                                className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            }), (0, r.jsxs)("div", {
                                                className: "relative",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "mb-6 flex items-center gap-3",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                                        children: (0, r.jsx)("svg", {
                                                            className: "h-6 w-6",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: (0, r.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("h3", {
                                                        className: "text-xl font-semibold text-gray-900 dark:text-white",
                                                        children: "For Salaried Professionals"
                                                    })]
                                                }), (0, r.jsxs)("ul", {
                                                    className: "space-y-4",
                                                    children: [(0, r.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, r.jsx)("svg", {
                                                            className: "mr-3 h-5 w-5 text-green-500 mt-0.5",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: (0, r.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            })
                                                        }), (0, r.jsxs)("div", {
                                                            children: [(0, r.jsx)("span", {
                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                children: "Age: 21 to 60 years"
                                                            }), (0, r.jsx)("p", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "At the time of loan maturity"
                                                            })]
                                                        })]
                                                    }), (0, r.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, r.jsx)("svg", {
                                                            className: "mr-3 h-5 w-5 text-green-500 mt-0.5",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: (0, r.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            })
                                                        }), (0, r.jsxs)("div", {
                                                            children: [(0, r.jsx)("span", {
                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                children: "Minimum Income: ₹15,000/month"
                                                            }), (0, r.jsx)("p", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "₹20,000 for metro cities"
                                                            })]
                                                        })]
                                                    }), (0, r.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, r.jsx)("svg", {
                                                            className: "mr-3 h-5 w-5 text-green-500 mt-0.5",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: (0, r.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            })
                                                        }), (0, r.jsxs)("div", {
                                                            children: [(0, r.jsx)("span", {
                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                children: "Work Experience: 1+ year"
                                                            }), (0, r.jsx)("p", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "6 months with current employer"
                                                            })]
                                                        })]
                                                    }), (0, r.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, r.jsx)("svg", {
                                                            className: "mr-3 h-5 w-5 text-green-500 mt-0.5",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: (0, r.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            })
                                                        }), (0, r.jsxs)("div", {
                                                            children: [(0, r.jsx)("span", {
                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                children: "Credit Score: 650+"
                                                            }), (0, r.jsx)("p", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "750+ for best rates"
                                                            })]
                                                        })]
                                                    })]
                                                }), (0, r.jsx)("div", {
                                                    className: "mt-6",
                                                    children: (0, r.jsx)(c.SubtleHover, {
                                                        type: "lift",
                                                        children: (0, r.jsxs)(n(), {
                                                            href: "https://pulse.Credifyy.com/users/sign-up/",
                                                            className: "inline-flex items-center text-primary hover:text-primaryLight dark:text-primaryLight dark:hover:text-primary",
                                                            children: ["Check Eligibility", (0, r.jsx)("svg", {
                                                                className: "ml-2 h-4 w-4",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                children: (0, r.jsx)("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, r.jsx)(c.default, {
                                        animation: "gentle-fade-up",
                                        delay: 200,
                                        children: (0, r.jsxs)("div", {
                                            className: "group relative h-full rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-900",
                                            children: [(0, r.jsx)("div", {
                                                className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            }), (0, r.jsxs)("div", {
                                                className: "relative",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "mb-6 flex items-center gap-3",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary dark:bg-secondaryLight/10 dark:text-secondaryLight",
                                                        children: (0, r.jsx)("svg", {
                                                            className: "h-6 w-6",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: (0, r.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("h3", {
                                                        className: "text-xl font-semibold text-gray-900 dark:text-white",
                                                        children: "For Self-Employed / Business"
                                                    })]
                                                }), (0, r.jsxs)("ul", {
                                                    className: "space-y-4",
                                                    children: [(0, r.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, r.jsx)("svg", {
                                                            className: "mr-3 h-5 w-5 text-green-500 mt-0.5",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: (0, r.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            })
                                                        }), (0, r.jsxs)("div", {
                                                            children: [(0, r.jsx)("span", {
                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                children: "Age: 25 to 65 years"
                                                            }), (0, r.jsx)("p", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "At the time of loan maturity"
                                                            })]
                                                        })]
                                                    }), (0, r.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, r.jsx)("svg", {
                                                            className: "mr-3 h-5 w-5 text-green-500 mt-0.5",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: (0, r.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            })
                                                        }), (0, r.jsxs)("div", {
                                                            children: [(0, r.jsx)("span", {
                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                children: "Business Vintage: 2+ years"
                                                            }), (0, r.jsx)("p", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "Current business operational period"
                                                            })]
                                                        })]
                                                    }), (0, r.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, r.jsx)("svg", {
                                                            className: "mr-3 h-5 w-5 text-green-500 mt-0.5",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: (0, r.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            })
                                                        }), (0, r.jsxs)("div", {
                                                            children: [(0, r.jsx)("span", {
                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                children: "Annual Turnover: ₹10+ lakhs"
                                                            }), (0, r.jsx)("p", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "Based on last 2 years ITR"
                                                            })]
                                                        })]
                                                    }), (0, r.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, r.jsx)("svg", {
                                                            className: "mr-3 h-5 w-5 text-green-500 mt-0.5",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: (0, r.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            })
                                                        }), (0, r.jsxs)("div", {
                                                            children: [(0, r.jsx)("span", {
                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                children: "Credit Score: 650+"
                                                            }), (0, r.jsx)("p", {
                                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                                children: "Business loan history preferred"
                                                            })]
                                                        })]
                                                    })]
                                                }), (0, r.jsx)("div", {
                                                    className: "mt-6",
                                                    children: (0, r.jsx)(c.SubtleHover, {
                                                        type: "lift",
                                                        children: (0, r.jsxs)(n(), {
                                                            href: "https://pulse.Credifyy.com/users/sign-up/",
                                                            className: "inline-flex items-center text-secondary hover:text-secondaryLight dark:text-secondaryLight dark:hover:text-secondary",
                                                            children: ["Check Eligibility", (0, r.jsx)("svg", {
                                                                className: "ml-2 h-4 w-4",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                children: (0, r.jsx)("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                }), (0, r.jsx)(c.default, {
                                    animation: "gentle-fade-up",
                                    delay: 300,
                                    children: (0, r.jsxs)("div", {
                                        className: "mt-12 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 dark:from-primary/10 dark:to-secondary/10",
                                        children: [(0, r.jsx)("h3", {
                                            className: "mb-6 text-xl font-semibold text-gray-900 dark:text-white",
                                            children: "Documents Required for Quick Approval"
                                        }), (0, r.jsxs)("div", {
                                            className: "grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4",
                                            children: [(0, r.jsxs)("div", {
                                                className: "text-center",
                                                children: [(0, r.jsx)("div", {
                                                    className: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-md dark:bg-gray-800 dark:text-primaryLight",
                                                    children: (0, r.jsx)("svg", {
                                                        className: "h-6 w-6",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: (0, r.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                                        })
                                                    })
                                                }), (0, r.jsx)("h4", {
                                                    className: "font-medium text-gray-900 dark:text-white",
                                                    children: "PAN Card"
                                                }), (0, r.jsx)("p", {
                                                    className: "mt-1 text-sm text-gray-600 dark:text-gray-400",
                                                    children: "For identity & tax verification"
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "text-center",
                                                children: [(0, r.jsx)("div", {
                                                    className: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-md dark:bg-gray-800 dark:text-primaryLight",
                                                    children: (0, r.jsx)("svg", {
                                                        className: "h-6 w-6",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: (0, r.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                                        })
                                                    })
                                                }), (0, r.jsx)("h4", {
                                                    className: "font-medium text-gray-900 dark:text-white",
                                                    children: "Aadhaar Card"
                                                }), (0, r.jsx)("p", {
                                                    className: "mt-1 text-sm text-gray-600 dark:text-gray-400",
                                                    children: "For address & KYC"
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "text-center",
                                                children: [(0, r.jsx)("div", {
                                                    className: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-md dark:bg-gray-800 dark:text-primaryLight",
                                                    children: (0, r.jsx)("svg", {
                                                        className: "h-6 w-6",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: (0, r.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        })
                                                    })
                                                }), (0, r.jsx)("h4", {
                                                    className: "font-medium text-gray-900 dark:text-white",
                                                    children: "Salary Slips"
                                                }), (0, r.jsx)("p", {
                                                    className: "mt-1 text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Last 3 months"
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "text-center",
                                                children: [(0, r.jsx)("div", {
                                                    className: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-md dark:bg-gray-800 dark:text-primaryLight",
                                                    children: (0, r.jsx)("svg", {
                                                        className: "h-6 w-6",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: (0, r.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                                        })
                                                    })
                                                }), (0, r.jsx)("h4", {
                                                    className: "font-medium text-gray-900 dark:text-white",
                                                    children: "Bank Statements"
                                                }), (0, r.jsx)("p", {
                                                    className: "mt-1 text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Last 6 months"
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)(o.default, {
                        faqs: [{
                            question: "How quickly can I get a personal loan through Credifyy?",
                            answer: "With Credifyy, you can get instant pre-approval within 2 minutes of application. Once your documents are verified (which takes 30 minutes to 2 hours), the loan amount is disbursed within 24-48 hours. Some partner banks offer same-day disbursement for pre-approved customers. The entire process is 100% digital - no branch visits required."
                        }, {
                            question: "What is the maximum personal loan amount I can get?",
                            answer: "You can get personal loans from ₹10,000 up to ₹40 lakhs depending on your income, Credit score, and repayment capacity. Generally, banks approve loans up to 10-20 times your monthly income. For example, if you earn ₹50,000/month, you may be eligible for loans up to ₹5-10 lakhs. Use our eligibility calculator to check your exact loan amount."
                        }, {
                            question: "Can I get a personal loan with a low Credit score?",
                            answer: "Yes, you can get a personal loan even with a Credit score as low as 550 through some of our NBFC partners. However, a lower Credit score means higher interest rates (18-24% p.a.) and lower loan amounts. We recommend improving your score to 750+ for the best rates (10.49-14% p.a.). Credifyy also provides free Credit score improvement tips and tracking."
                        }, {
                            question: "Are there any hidden charges in personal loans?",
                            answer: "No, reputable lenders through Credifyy are completely transparent about all charges. Common fees include: Processing fee (0-4% of loan amount), GST on processing fee (18%), Late payment charges (₹500-2000), Prepayment charges (0-5% for part prepayment after 12 EMIs), and Loan cancellation charges (₹1000-3000). Always read the loan agreement carefully before signing."
                        }, {
                            question: "Can I prepay my personal loan without charges?",
                            answer: "Yes, you can prepay your personal loan, but terms vary by lender. Most banks allow: Full prepayment after 12 EMIs with 2-4% charges, Part prepayment (up to 25% annually) with 2-5% charges, and some banks like HDFC offer zero prepayment charges on floating rate loans. Always check prepayment terms before taking the loan as it can save you significant interest."
                        }, {
                            question: "What happens if I miss an EMI payment?",
                            answer: "Missing an EMI payment has several consequences: Late payment fee of ₹500-2000 plus GST, negative impact on Credit score (can drop 50-100 points), higher interest charges on outstanding amount, and after 90 days, loan becomes NPA affecting future loan eligibility. If you're facing difficulties, contact your lender immediately for restructuring options. Credifyy can help negotiate better terms."
                        }]
                    }), (0, r.jsxs)("section", {
                        className: "relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary py-20 sm:py-24 lg:py-32",
                        children: [(0, r.jsx)("div", {
                            className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        }), (0, r.jsx)("div", {
                            className: "absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]"
                        }), (0, r.jsx)("div", {
                            className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                            children: (0, r.jsxs)("div", {
                                className: "text-center",
                                children: [(0, r.jsxs)(c.default, {
                                    animation: "gentle-fade-up",
                                    children: [(0, r.jsxs)("div", {
                                        className: "inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm mb-6",
                                        children: [(0, r.jsx)("svg", {
                                            className: "h-4 w-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Join 5 Million+ Satisfied Customers"
                                        })]
                                    }), (0, r.jsxs)("h2", {
                                        className: "text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl",
                                        children: ["Ready to Get Your", (0, r.jsx)("span", {
                                            className: "block mt-2",
                                            children: "Personal Loan?"
                                        })]
                                    }), (0, r.jsx)("p", {
                                        className: "mx-auto mt-6 max-w-2xl text-lg text-blue-100 leading-relaxed",
                                        children: "Join 85,000+ customers who got instant approval this month. Check your eligibility now with zero impact on your Credit score."
                                    }), (0, r.jsxs)("div", {
                                        className: "mt-8 flex flex-wrap items-center justify-center gap-6 text-white/90",
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2",
                                            children: [(0, r.jsx)("svg", {
                                                className: "h-5 w-5",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: (0, r.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                })
                                            }), (0, r.jsx)("span", {
                                                className: "font-medium",
                                                children: "No Credit Score Impact"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2",
                                            children: [(0, r.jsx)("svg", {
                                                className: "h-5 w-5",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: (0, r.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                    clipRule: "evenodd"
                                                })
                                            }), (0, r.jsx)("span", {
                                                className: "font-medium",
                                                children: "100% Free Service"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2",
                                            children: [(0, r.jsx)("svg", {
                                                className: "h-5 w-5",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: (0, r.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    d: "M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z",
                                                    clipRule: "evenodd"
                                                })
                                            }), (0, r.jsx)("span", {
                                                className: "font-medium",
                                                children: "Instant Digital Process"
                                            })]
                                        })]
                                    })]
                                }), (0, r.jsxs)(c.default, {
                                    animation: "gentle-fade-up",
                                    delay: 100,
                                    children: [(0, r.jsxs)("div", {
                                        className: "mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6",
                                        children: [(0, r.jsx)(c.SubtleHover, {
                                            type: "lift",
                                            children: (0, r.jsxs)(n(), {
                                                href: "https://pulse.Credifyy.com/users/sign-up/",
                                                className: "group inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-bold text-primary transition-all duration-200 hover:bg-gray-100 hover:shadow-2xl hover:scale-105",
                                                children: ["Check Eligibility Now", (0, r.jsx)("svg", {
                                                    className: "ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: (0, r.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                                    })
                                                })]
                                            })
                                        }), (0, r.jsx)(c.SubtleHover, {
                                            type: "lift",
                                            children: (0, r.jsxs)("a", {
                                                href: "tel:+917330755533",
                                                className: "group inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-white/15 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/60 hover:bg-white/25 hover:scale-105",
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
                                                }), "Talk to Expert: +91 73307 55533"]
                                            })
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "mt-8 text-center",
                                        children: (0, r.jsxs)("p", {
                                            className: "text-sm text-white/80",
                                            children: [(0, r.jsx)("strong", {
                                                className: "text-white",
                                                children: "2,847 people"
                                            }), " applied in the last 24 hours"]
                                        })
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        463: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => l
            });
            var r = t(5155),
                s = t(2115),
                i = t(6766);
            let n = [{
                id: "hdfc",
                name: "HDFC Bank",
                logo: {
                    default: "/images/bank-logos/hdfc.png",
                    avif: {
                        "1x": "/images/bank-logos/hdfc-40px.avif",
                        "2x": "/images/bank-logos/hdfc-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/hdfc-40px.webp",
                        "2x": "/images/bank-logos/hdfc-40px@2x.webp"
                    }
                },
                width: 134,
                height: 40
            }, {
                id: "icici",
                name: "ICICI Bank",
                logo: {
                    default: "/images/bank-logos/icici.png",
                    avif: {
                        "1x": "/images/bank-logos/icici-40px.avif",
                        "2x": "/images/bank-logos/icici-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/icici-40px.webp",
                        "2x": "/images/bank-logos/icici-40px@2x.webp"
                    }
                },
                width: 202,
                height: 40
            }, {
                id: "sbi",
                name: "State Bank of India",
                logo: {
                    default: "/images/bank-logos/sbi.png",
                    avif: {
                        "1x": "/images/bank-logos/sbi-40px.avif",
                        "2x": "/images/bank-logos/sbi-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/sbi-40px.webp",
                        "2x": "/images/bank-logos/sbi-40px@2x.webp"
                    }
                },
                width: 115,
                height: 40
            }, {
                id: "axis",
                name: "Axis Bank",
                logo: {
                    default: "/images/bank-logos/axis.png",
                    avif: {
                        "1x": "/images/bank-logos/axis-40px.avif",
                        "2x": "/images/bank-logos/axis-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/axis-40px.webp",
                        "2x": "/images/bank-logos/axis-40px@2x.webp"
                    }
                },
                width: 168,
                height: 40
            }, {
                id: "kotak",
                name: "Kotak Mahindra Bank",
                logo: {
                    default: "/images/bank-logos/kotak-mahindra-bank.png",
                    avif: {
                        "1x": "/images/bank-logos/kotak-mahindra-bank-40px.avif",
                        "2x": "/images/bank-logos/kotak-mahindra-bank-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/kotak-mahindra-bank-40px.webp",
                        "2x": "/images/bank-logos/kotak-mahindra-bank-40px@2x.webp"
                    }
                },
                width: 152,
                height: 40
            }, {
                id: "yes-bank",
                name: "Yes Bank",
                logo: {
                    default: "/images/bank-logos/yes-bank.png",
                    avif: {
                        "1x": "/images/bank-logos/yes-bank-40px.avif",
                        "2x": "/images/bank-logos/yes-bank-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/yes-bank-40px.webp",
                        "2x": "/images/bank-logos/yes-bank-40px@2x.webp"
                    }
                },
                width: 110,
                height: 40
            }, {
                id: "aditya-birla",
                name: "Aditya Birla Group",
                logo: {
                    default: "/images/bank-logos/aditya-birla-group.png",
                    avif: {
                        "1x": "/images/bank-logos/aditya-birla-group-40px.avif",
                        "2x": "/images/bank-logos/aditya-birla-group-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/aditya-birla-group-40px.webp",
                        "2x": "/images/bank-logos/aditya-birla-group-40px@2x.webp"
                    }
                },
                width: 73,
                height: 40
            }, {
                id: "au-small-finance",
                name: "AU Small Finance Bank",
                logo: {
                    default: "/images/bank-logos/au-small-finance-bank-limited.png",
                    avif: {
                        "1x": "/images/bank-logos/au-small-finance-bank-limited-40px.avif",
                        "2x": "/images/bank-logos/au-small-finance-bank-limited-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/au-small-finance-bank-limited-40px.webp",
                        "2x": "/images/bank-logos/au-small-finance-bank-limited-40px@2x.webp"
                    }
                },
                width: 77,
                height: 40
            }, {
                id: "bajaj-finserv",
                name: "Bajaj Finserv",
                logo: {
                    default: "/images/bank-logos/bajaj-finserv.png",
                    avif: {
                        "1x": "/images/bank-logos/bajaj-finserv-40px.avif",
                        "2x": "/images/bank-logos/bajaj-finserv-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/bajaj-finserv-40px.webp",
                        "2x": "/images/bank-logos/bajaj-finserv-40px@2x.webp"
                    }
                },
                width: 151,
                height: 40
            }, {
                id: "bank-of-baroda",
                name: "Bank of Baroda",
                logo: {
                    default: "/images/bank-logos/bank-of-baroda.png",
                    avif: {
                        "1x": "/images/bank-logos/bank-of-baroda-40px.avif",
                        "2x": "/images/bank-logos/bank-of-baroda-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/bank-of-baroda-40px.webp",
                        "2x": "/images/bank-logos/bank-of-baroda-40px@2x.webp"
                    }
                },
                width: 126,
                height: 40
            }, {
                id: "canara-bank",
                name: "Canara Bank",
                logo: {
                    default: "/images/bank-logos/canara-bank.png",
                    avif: {
                        "1x": "/images/bank-logos/canara-bank-40px.avif",
                        "2x": "/images/bank-logos/canara-bank-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/canara-bank-40px.webp",
                        "2x": "/images/bank-logos/canara-bank-40px@2x.webp"
                    }
                },
                width: 158,
                height: 40
            }, {
                id: "central-bank",
                name: "Central Bank of India",
                logo: {
                    default: "/images/bank-logos/central-bank-of-india.png",
                    avif: {
                        "1x": "/images/bank-logos/central-bank-of-india-40px.avif",
                        "2x": "/images/bank-logos/central-bank-of-india-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/central-bank-of-india-40px.webp",
                        "2x": "/images/bank-logos/central-bank-of-india-40px@2x.webp"
                    }
                },
                width: 127,
                height: 40
            }, {
                id: "fullerton",
                name: "Fullerton India",
                logo: {
                    default: "/images/bank-logos/fullterton-india.png",
                    avif: {
                        "1x": "/images/bank-logos/fullterton-india-40px.avif",
                        "2x": "/images/bank-logos/fullterton-india-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/fullterton-india-40px.webp",
                        "2x": "/images/bank-logos/fullterton-india-40px@2x.webp"
                    }
                },
                width: 115,
                height: 40
            }, {
                id: "idfc-first",
                name: "IDFC First Bank",
                logo: {
                    default: "/images/bank-logos/idfc-first-bank.png",
                    avif: {
                        "1x": "/images/bank-logos/idfc-first-bank-40px.avif",
                        "2x": "/images/bank-logos/idfc-first-bank-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/idfc-first-bank-40px.webp",
                        "2x": "/images/bank-logos/idfc-first-bank-40px@2x.webp"
                    }
                },
                width: 173,
                height: 40
            }, {
                id: "indian-bank",
                name: "Indian Bank",
                logo: {
                    default: "/images/bank-logos/indian-bank.png",
                    avif: {
                        "1x": "/images/bank-logos/indian-bank-40px.avif",
                        "2x": "/images/bank-logos/indian-bank-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/indian-bank-40px.webp",
                        "2x": "/images/bank-logos/indian-bank-40px@2x.webp"
                    }
                },
                width: 162,
                height: 40
            }, {
                id: "indian-overseas",
                name: "Indian Overseas Bank",
                logo: {
                    default: "/images/bank-logos/indian-overseas-bank.png",
                    avif: {
                        "1x": "/images/bank-logos/indian-overseas-bank-40px.avif",
                        "2x": "/images/bank-logos/indian-overseas-bank-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/indian-overseas-bank-40px.webp",
                        "2x": "/images/bank-logos/indian-overseas-bank-40px@2x.webp"
                    }
                },
                width: 196,
                height: 40
            }, {
                id: "lic",
                name: "LIC India",
                logo: {
                    default: "/images/bank-logos/lic-india.png",
                    avif: {
                        "1x": "/images/bank-logos/lic-india-40px.avif",
                        "2x": "/images/bank-logos/lic-india-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/lic-india-40px.webp",
                        "2x": "/images/bank-logos/lic-india-40px@2x.webp"
                    }
                },
                width: 178,
                height: 40
            }, {
                id: "pnb",
                name: "Punjab National Bank",
                logo: {
                    default: "/images/bank-logos/punjab-national-bank.png",
                    avif: {
                        "1x": "/images/bank-logos/punjab-national-bank-40px.avif",
                        "2x": "/images/bank-logos/punjab-national-bank-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/punjab-national-bank-40px.webp",
                        "2x": "/images/bank-logos/punjab-national-bank-40px@2x.webp"
                    }
                },
                width: 166,
                height: 40
            }, {
                id: "uco-bank",
                name: "UCO Bank",
                logo: {
                    default: "/images/bank-logos/uco-bank.png",
                    avif: {
                        "1x": "/images/bank-logos/uco-bank-40px.avif",
                        "2x": "/images/bank-logos/uco-bank-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/uco-bank-40px.webp",
                        "2x": "/images/bank-logos/uco-bank-40px@2x.webp"
                    }
                },
                width: 98,
                height: 40
            }, {
                id: "union-bank",
                name: "Union Bank of India",
                logo: {
                    default: "/images/bank-logos/union-bank-of-india.png",
                    avif: {
                        "1x": "/images/bank-logos/union-bank-of-india-40px.avif",
                        "2x": "/images/bank-logos/union-bank-of-india-40px@2x.avif"
                    },
                    webp: {
                        "1x": "/images/bank-logos/union-bank-of-india-40px.webp",
                        "2x": "/images/bank-logos/union-bank-of-india-40px@2x.webp"
                    }
                },
                width: 177,
                height: 40
            }];

            function l() {
                let e = (0, s.useRef)(null),
                    a = (0, s.useRef)(0),
                    t = (0, s.useRef)(0),
                    l = (0, s.useRef)(0);
                return (0, s.useEffect)(() => {
                    let r = e.current;
                    if (!r) return;
                    let s = e => {
                        if (l.current) {
                            let a = e - l.current;
                            t.current -= a / 16 * .5
                        }
                        l.current = e;
                        let i = r.scrollWidth / 2;
                        Math.abs(t.current) >= i && (t.current = t.current + i), r.style.transform = "translate3d(".concat(t.current, "px, 0, 0)"), a.current = requestAnimationFrame(s)
                    };
                    return a.current = requestAnimationFrame(s), () => {
                        a.current && cancelAnimationFrame(a.current)
                    }
                }, []), (0, r.jsx)("section", {
                    className: "border-y border-gray-100 py-8 text-center dark:border-gray-800 md:py-12",
                    children: (0, r.jsx)("div", {
                        className: "mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0",
                        children: (0, r.jsx)("div", {
                            className: "relative mt-8 h-16 w-full overflow-hidden rounded-lg pt-5 lg:h-20",
                            children: (0, r.jsx)("div", {
                                ref: e,
                                className: "flex items-center gap-8 brightness-100 contrast-100 grayscale-0 transition-transform duration-100 dark:brightness-100 dark:contrast-100 lg:gap-16",
                                style: {
                                    willChange: "transform"
                                },
                                children: [...n, ...n].map((e, a) => (0, r.jsx)("div", {
                                    className: "flex-shrink-0",
                                    children: (0, r.jsx)(i.default, {
                                        src: e.logo.webp["1x"],
                                        alt: e.name,
                                        width: e.width,
                                        height: e.height,
                                        className: "block h-8 w-auto lg:h-10 lg:w-auto",
                                        loading: "lazy"
                                    })
                                }, "".concat(e.id, "-").concat(a)))
                            })
                        })
                    })
                })
            }
        },
        859: (e, a, t) => {
            Promise.resolve().then(t.bind(t, 333))
        },
        1469: (e, a, t) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), ! function(e, a) {
                for (var t in a) Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: a[t]
                })
            }(a, {
                default: function() {
                    return o
                },
                getImageProps: function() {
                    return l
                }
            });
            let r = t(8229),
                s = t(8883),
                i = t(3063),
                n = r._(t(1193));

            function l(e) {
                let {
                    props: a
                } = (0, s.getImgProps)(e, {
                    defaultLoader: n.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image/",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !0
                    }
                });
                for (let [e, t] of Object.entries(a)) void 0 === t && delete a[e];
                return {
                    props: a
                }
            }
            let o = i.Image
        },
        3606: (e, a, t) => {
            "use strict";
            t.d(a, {
                A: () => n
            });
            var r = t(5155),
                s = t(9775);
            let i = [{
                icon: (0, r.jsx)("svg", {
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, r.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    })
                }),
                label: "SOC 2 Certified",
                description: "24/7 monitoring"
            }, {
                icon: (0, r.jsx)("svg", {
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, r.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    })
                }),
                label: "256-bit SSL",
                description: "Bank-level encryption"
            }, {
                icon: (0, r.jsx)("svg", {
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, r.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    })
                }),
                label: "ISO 27001",
                description: "Certified secure"
            }, {
                icon: (0, r.jsx)("svg", {
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, r.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    })
                }),
                label: "Data Protected",
                description: "Your data is secure"
            }];

            function n(e) {
                let {
                    variant: a = "inline",
                    showDescriptions: t = !1,
                    className: n = ""
                } = e;
                return "grid" === a ? (0, r.jsx)("div", {
                    className: "grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4 ".concat(n),
                    children: i.map((e, a) => (0, r.jsx)(s.default, {
                        animation: "gentle-fade-up",
                        delay: 100 * a,
                        children: (0, r.jsxs)("div", {
                            className: "text-center group",
                            children: [(0, r.jsx)("div", {
                                className: "inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-green-100 text-green-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white dark:bg-green-900/30 dark:text-green-400 dark:group-hover:bg-green-500",
                                children: (0, r.jsx)("div", {
                                    className: "scale-75 sm:scale-100",
                                    children: e.icon
                                })
                            }), (0, r.jsxs)("div", {
                                className: "mt-2 sm:mt-3",
                                children: [(0, r.jsx)("div", {
                                    className: "text-xs sm:text-sm font-semibold text-gray-900 dark:text-white",
                                    children: e.label
                                }), t && e.description && (0, r.jsx)("div", {
                                    className: "mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400",
                                    children: e.description
                                })]
                            })]
                        })
                    }, a))
                }) : (0, r.jsx)("div", {
                    className: "flex flex-wrap items-center justify-center gap-6 sm:gap-8 ".concat(n),
                    children: i.map((e, a) => (0, r.jsx)(s.default, {
                        animation: "gentle-fade-up",
                        delay: 100 * a,
                        children: (0, r.jsxs)("div", {
                            className: "flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-all duration-200 hover:text-gray-900 dark:hover:text-gray-200",
                            children: [(0, r.jsx)("div", {
                                className: "text-green-500",
                                children: e.icon
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("div", {
                                    className: "text-sm font-medium",
                                    children: e.label
                                }), t && e.description && (0, r.jsx)("div", {
                                    className: "text-xs text-gray-500 dark:text-gray-500",
                                    children: e.description
                                })]
                            })]
                        })
                    }, a))
                })
            }
        },
        3999: (e, a, t) => {
            "use strict";

            function r(e) {
                return Number(e).toLocaleString("en-IN")
            }

            function s(e) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        symbol: t = !0,
                        decimals: r = 0
                    } = a,
                    s = Number(e).toLocaleString("en-IN", {
                        minimumFractionDigits: r,
                        maximumFractionDigits: r
                    });
                return t ? "₹".concat(s) : s
            }

            function i(e) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                return "".concat(Number(e).toFixed(a), "%")
            }

            function n() {
                for (var e = arguments.length, a = Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                return a.filter(Boolean).join(" ").trim()
            }
            t.d(a, {
                Ee: () => i,
                cn: () => n,
                mC: () => r,
                vv: () => s
            })
        },
        6766: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => s.a
            });
            var r = t(1469),
                s = t.n(r)
        }
    },
    e => {
        e.O(0, [6874, 3063, 6238, 8441, 5964, 7358], () => e(e.s = 859)), _N_E = e.O()
    }
]);