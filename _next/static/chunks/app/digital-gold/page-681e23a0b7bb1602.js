(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [62], {
        79: (e, r, a) => {
            "use strict";
            a.d(r, {
                default: () => o
            });
            var t = a(5155),
                i = a(2115);
            let n = [{
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

            function s(e) {
                let {
                    question: r,
                    answer: a,
                    index: n,
                    isOpen: s,
                    onToggle: o
                } = e, l = (0, i.useRef)(null), [c, d] = (0, i.useState)(0);
                return (0, i.useEffect)(() => {
                    if (l.current) {
                        let e = l.current.scrollHeight;
                        d(s ? e : 0)
                    }
                }, [s, a]), (0, t.jsx)("div", {
                    className: "group",
                    children: (0, t.jsxs)("div", {
                        className: "faq",
                        children: [(0, t.jsxs)("button", {
                            type: "button",
                            className: "flex w-full items-center justify-between py-5 text-left transition-all duration-200 ".concat(s ? "text-primary dark:text-primaryLight" : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"),
                            "aria-controls": "faq-".concat(n),
                            "aria-expanded": s,
                            onClick: o,
                            children: [(0, t.jsxs)("span", {
                                className: "flex items-start pr-8",
                                children: [(0, t.jsx)("span", {
                                    className: "mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ".concat(s ? "bg-primary/10 text-primary dark:bg-primaryLight/10 dark:text-primaryLight" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-500 dark:group-hover:bg-gray-700"),
                                    children: (0, t.jsx)("span", {
                                        className: "text-sm font-semibold",
                                        children: (n + 1).toString().padStart(2, "0")
                                    })
                                }), (0, t.jsx)("span", {
                                    className: "text-lg font-medium transition-colors duration-200 ".concat(s ? "text-gray-900 dark:text-white" : ""),
                                    children: r
                                })]
                            }), (0, t.jsx)("span", {
                                className: "ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ".concat(s ? "bg-primary/10 dark:bg-primaryLight/10" : "bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700"),
                                children: (0, t.jsx)("svg", {
                                    className: "h-5 w-5 transform transition-all duration-300 ".concat(s ? "rotate-180 text-primary dark:text-primaryLight" : "rotate-0 text-gray-400 dark:text-gray-500"),
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "2",
                                    stroke: "currentColor",
                                    "aria-hidden": "true",
                                    children: (0, t.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    })
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: "faq-answer overflow-hidden transition-all duration-300 ease-in-out",
                            style: {
                                maxHeight: "".concat(c, "px")
                            },
                            id: "faq-".concat(n),
                            "aria-hidden": !s,
                            children: (0, t.jsx)("div", {
                                ref: l,
                                children: (0, t.jsx)("div", {
                                    className: "pb-4 sm:pb-6 pl-10 sm:pl-16 pr-4 sm:pr-8",
                                    children: (0, t.jsx)("p", {
                                        className: "text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400",
                                        children: a
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function o() {
                let {
                    faqs: e,
                    title: r = "Frequently Asked Questions",
                    subtitle: a = "Find answers to commonly asked questions about our financial services."
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [o, l] = (0, i.useState)(null), c = e || n, d = c.length, u = (0, i.useCallback)(e => {
                    l(r => r === e ? null : e)
                }, []);
                return (0, i.useEffect)(() => {
                    let e = e => {
                        if (e.target && e.target.closest(".faq")) switch (e.key) {
                            case "ArrowDown":
                                e.preventDefault(), null === o || o === d - 1 ? l(0) : l(o + 1);
                                break;
                            case "ArrowUp":
                                e.preventDefault(), null === o || 0 === o ? l(d - 1) : l(o - 1);
                                break;
                            case "Home":
                                e.preventDefault(), l(0);
                                break;
                            case "End":
                                e.preventDefault(), l(d - 1);
                                break;
                            case "Escape":
                                e.preventDefault(), l(null)
                        }
                    };
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [o, d]), (0, t.jsxs)("section", {
                    id: "faqs",
                    className: "relative py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50",
                    "aria-labelledby": "faq-heading",
                    children: [(0, t.jsx)("div", {
                        className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"
                    }), (0, t.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                        children: [(0, t.jsxs)("div", {
                            className: "mx-auto max-w-3xl text-center",
                            children: [(0, t.jsxs)("div", {
                                className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                children: [(0, t.jsx)("svg", {
                                    className: "h-4 w-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: (0, t.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                }), (0, t.jsx)("span", {
                                    children: "Help & Support"
                                })]
                            }), (0, t.jsx)("h2", {
                                id: "faq-heading",
                                className: "mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",
                                children: r
                            }), a && (0, t.jsx)("p", {
                                className: "mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300",
                                children: a
                            })]
                        }), (0, t.jsx)("div", {
                            className: "mx-auto mt-16 max-w-4xl",
                            children: (0, t.jsx)("div", {
                                className: "rounded-2xl bg-white p-2 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800",
                                children: (0, t.jsx)("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-800",
                                    role: "region",
                                    "aria-label": "Frequently asked questions",
                                    children: c.map((e, r) => (0, t.jsx)("div", {
                                        className: "rounded-xl transition-colors duration-200 ".concat(o === r ? "bg-gray-50 dark:bg-gray-800/50" : "hover:bg-gray-50 dark:hover:bg-gray-800/30"),
                                        children: (0, t.jsx)("div", {
                                            className: "px-6",
                                            children: (0, t.jsx)(s, {
                                                question: e.question,
                                                answer: e.answer,
                                                index: r,
                                                isOpen: o === r,
                                                onToggle: () => u(r)
                                            })
                                        })
                                    }, r))
                                })
                            })
                        }), (0, t.jsx)("div", {
                            className: "mt-12 text-center",
                            children: (0, t.jsxs)("p", {
                                className: "text-base text-gray-600 dark:text-gray-400",
                                children: ["Still have questions?", " ", (0, t.jsx)("a", {
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
        4567: (e, r, a) => {
            Promise.resolve().then(a.bind(a, 79)), Promise.resolve().then(a.bind(a, 9775)), Promise.resolve().then(a.t.bind(a, 6874, 23)), Promise.resolve().then(a.t.bind(a, 3063, 23))
        },
        9775: (e, r, a) => {
            "use strict";
            a.r(r), a.d(r, {
                SubtleBackground: () => o,
                SubtleHover: () => s,
                default: () => n
            });
            var t = a(5155),
                i = a(2115);

            function n(e) {
                let {
                    children: r,
                    animation: a = "gentle-fade-up",
                    delay: n = 0,
                    threshold: s = .1,
                    once: o = !0,
                    className: l = "",
                    disabled: c = !1
                } = e, {
                    ref: d,
                    isVisible: u,
                    isReduced: m,
                    isMobile: g
                } = function() {
                    let {
                        threshold: e = .1,
                        delay: r = 0,
                        once: a = !0,
                        disabled: t = !1
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [n, s] = (0, i.useState)(!1), [o, l] = (0, i.useState)(!1), c = (0, i.useRef)(null), d = (0, i.useRef)(null);
                    return (0, i.useEffect)(() => {
                        l(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
                        let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
                            r = () => l(e.matches);
                        return e.addEventListener("change", r), () => e.removeEventListener("change", r)
                    }, []), (0, i.useEffect)(() => {
                        if (t || o || !c.current) return void s(!0);
                        let i = c.current;
                        return d.current = new IntersectionObserver(e => {
                            let [t] = e;
                            t.isIntersecting ? (setTimeout(() => {
                                s(!0)
                            }, r), a && d.current && d.current.unobserve(i)) : a || s(!1)
                        }, {
                            threshold: e,
                            rootMargin: "50px 0px"
                        }), d.current.observe(i), () => {
                            d.current && d.current.disconnect()
                        }
                    }, [e, r, a, t, o]), {
                        ref: c,
                        isVisible: n || o || t,
                        isReduced: o,
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    }
                }({
                    threshold: s,
                    delay: n,
                    once: o,
                    disabled: c
                });
                return (0, t.jsx)("div", {
                    ref: d,
                    className: "".concat((() => {
                        if (m || c) return "opacity-100 transform-none";
                        let e = "transition-all duration-500 ease-out",
                            r = g ? "mobile:" : "";
                        if (u) return "".concat(e, " opacity-100 translate-y-0 translate-x-0 scale-100");
                        switch (a) {
                            case "gentle-fade-up":
                                return "".concat(e, " opacity-0 ").concat(r, "translate-y-2 translate-y-4");
                            case "gentle-slide-in":
                                return "".concat(e, " opacity-0 ").concat(r, "-translate-x-2 -translate-x-4");
                            case "gentle-slide-right":
                                return "".concat(e, " opacity-0 ").concat(r, "translate-x-2 translate-x-4");
                            case "gentle-scale":
                                return "".concat(e, " opacity-0 scale-98");
                            default:
                                return "".concat(e, " opacity-0 translate-y-4")
                        }
                    })(), " ").concat(l),
                    style: {
                        animationDelay: m ? "0ms" : "".concat(n, "ms")
                    },
                    children: r
                })
            }

            function s(e) {
                let {
                    children: r,
                    type: a = "lift",
                    className: i = "",
                    disabled: n = !1
                } = e;
                return n ? (0, t.jsx)("div", {
                    className: i,
                    children: r
                }) : (0, t.jsx)("div", {
                    className: "".concat({
                        lift: "transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:will-change-transform",
                        glow: "transition-shadow duration-300 ease-out hover:shadow-lg hover:shadow-primary/10",
                        scale: "transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
                    } [a], " ").concat(i),
                    style: {
                        backfaceVisibility: "hidden"
                    },
                    children: r
                })
            }

            function o(e) {
                let {
                    children: r,
                    type: a = "float",
                    intensity: i = "subtle",
                    className: n = "",
                    disabled: s = !1,
                    style: o = {}
                } = e;
                return s ? (0, t.jsx)("div", {
                    className: n,
                    style: o,
                    children: r
                }) : (0, t.jsx)("div", {
                    className: "".concat({
                        float: "animate-gentle-float",
                        breathing: "animate-gentle-breathing",
                        "gentle-parallax": "transform-gpu will-change-transform"
                    } [a], " ").concat(n),
                    style: {
                        "--float-distance": {
                            minimal: "1px",
                            subtle: "2px",
                            gentle: "4px"
                        } [i],
                        animationDuration: "float" === a ? "8s" : "4s",
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                        ...o
                    },
                    children: r
                })
            }
        }
    },
    e => {
        e.O(0, [6874, 3063, 8441, 5964, 7358], () => e(e.s = 4567)), _N_E = e.O()
    }
]);