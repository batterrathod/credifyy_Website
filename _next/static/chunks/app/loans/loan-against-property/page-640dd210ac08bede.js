(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1695], {
        79: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => o
            });
            var s = t(5155),
                i = t(2115);
            let r = [{
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
                    index: r,
                    isOpen: n,
                    onToggle: o
                } = e, l = (0, i.useRef)(null), [d, c] = (0, i.useState)(0);
                return (0, i.useEffect)(() => {
                    if (l.current) {
                        let e = l.current.scrollHeight;
                        c(n ? e : 0)
                    }
                }, [n, t]), (0, s.jsx)("div", {
                    className: "group",
                    children: (0, s.jsxs)("div", {
                        className: "faq",
                        children: [(0, s.jsxs)("button", {
                            type: "button",
                            className: "flex w-full items-center justify-between py-5 text-left transition-all duration-200 ".concat(n ? "text-primary dark:text-primaryLight" : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"),
                            "aria-controls": "faq-".concat(r),
                            "aria-expanded": n,
                            onClick: o,
                            children: [(0, s.jsxs)("span", {
                                className: "flex items-start pr-8",
                                children: [(0, s.jsx)("span", {
                                    className: "mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ".concat(n ? "bg-primary/10 text-primary dark:bg-primaryLight/10 dark:text-primaryLight" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-500 dark:group-hover:bg-gray-700"),
                                    children: (0, s.jsx)("span", {
                                        className: "text-sm font-semibold",
                                        children: (r + 1).toString().padStart(2, "0")
                                    })
                                }), (0, s.jsx)("span", {
                                    className: "text-lg font-medium transition-colors duration-200 ".concat(n ? "text-gray-900 dark:text-white" : ""),
                                    children: a
                                })]
                            }), (0, s.jsx)("span", {
                                className: "ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ".concat(n ? "bg-primary/10 dark:bg-primaryLight/10" : "bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700"),
                                children: (0, s.jsx)("svg", {
                                    className: "h-5 w-5 transform transition-all duration-300 ".concat(n ? "rotate-180 text-primary dark:text-primaryLight" : "rotate-0 text-gray-400 dark:text-gray-500"),
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "2",
                                    stroke: "currentColor",
                                    "aria-hidden": "true",
                                    children: (0, s.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    })
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "faq-answer overflow-hidden transition-all duration-300 ease-in-out",
                            style: {
                                maxHeight: "".concat(d, "px")
                            },
                            id: "faq-".concat(r),
                            "aria-hidden": !n,
                            children: (0, s.jsx)("div", {
                                ref: l,
                                children: (0, s.jsx)("div", {
                                    className: "pb-4 sm:pb-6 pl-10 sm:pl-16 pr-4 sm:pr-8",
                                    children: (0, s.jsx)("p", {
                                        className: "text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400",
                                        children: t
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
                    title: a = "Frequently Asked Questions",
                    subtitle: t = "Find answers to commonly asked questions about our financial services."
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [o, l] = (0, i.useState)(null), d = e || r, c = d.length, x = (0, i.useCallback)(e => {
                    l(a => a === e ? null : e)
                }, []);
                return (0, i.useEffect)(() => {
                    let e = e => {
                        if (e.target && e.target.closest(".faq")) switch (e.key) {
                            case "ArrowDown":
                                e.preventDefault(), null === o || o === c - 1 ? l(0) : l(o + 1);
                                break;
                            case "ArrowUp":
                                e.preventDefault(), null === o || 0 === o ? l(c - 1) : l(o - 1);
                                break;
                            case "Home":
                                e.preventDefault(), l(0);
                                break;
                            case "End":
                                e.preventDefault(), l(c - 1);
                                break;
                            case "Escape":
                                e.preventDefault(), l(null)
                        }
                    };
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [o, c]), (0, s.jsxs)("section", {
                    id: "faqs",
                    className: "relative py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50",
                    "aria-labelledby": "faq-heading",
                    children: [(0, s.jsx)("div", {
                        className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"
                    }), (0, s.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                        children: [(0, s.jsxs)("div", {
                            className: "mx-auto max-w-3xl text-center",
                            children: [(0, s.jsxs)("div", {
                                className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                children: [(0, s.jsx)("svg", {
                                    className: "h-4 w-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                }), (0, s.jsx)("span", {
                                    children: "Help & Support"
                                })]
                            }), (0, s.jsx)("h2", {
                                id: "faq-heading",
                                className: "mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",
                                children: a
                            }), t && (0, s.jsx)("p", {
                                className: "mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300",
                                children: t
                            })]
                        }), (0, s.jsx)("div", {
                            className: "mx-auto mt-16 max-w-4xl",
                            children: (0, s.jsx)("div", {
                                className: "rounded-2xl bg-white p-2 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800",
                                children: (0, s.jsx)("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-800",
                                    role: "region",
                                    "aria-label": "Frequently asked questions",
                                    children: d.map((e, a) => (0, s.jsx)("div", {
                                        className: "rounded-xl transition-colors duration-200 ".concat(o === a ? "bg-gray-50 dark:bg-gray-800/50" : "hover:bg-gray-50 dark:hover:bg-gray-800/30"),
                                        children: (0, s.jsx)("div", {
                                            className: "px-6",
                                            children: (0, s.jsx)(n, {
                                                question: e.question,
                                                answer: e.answer,
                                                index: a,
                                                isOpen: o === a,
                                                onToggle: () => x(a)
                                            })
                                        })
                                    }, a))
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "mt-12 text-center",
                            children: (0, s.jsxs)("p", {
                                className: "text-base text-gray-600 dark:text-gray-400",
                                children: ["Still have questions?", " ", (0, s.jsx)("a", {
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
        463: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => o
            });
            var s = t(5155),
                i = t(2115),
                r = t(6766);
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

            function o() {
                let e = (0, i.useRef)(null),
                    a = (0, i.useRef)(0),
                    t = (0, i.useRef)(0),
                    o = (0, i.useRef)(0);
                return (0, i.useEffect)(() => {
                    let s = e.current;
                    if (!s) return;
                    let i = e => {
                        if (o.current) {
                            let a = e - o.current;
                            t.current -= a / 16 * .5
                        }
                        o.current = e;
                        let r = s.scrollWidth / 2;
                        Math.abs(t.current) >= r && (t.current = t.current + r), s.style.transform = "translate3d(".concat(t.current, "px, 0, 0)"), a.current = requestAnimationFrame(i)
                    };
                    return a.current = requestAnimationFrame(i), () => {
                        a.current && cancelAnimationFrame(a.current)
                    }
                }, []), (0, s.jsx)("section", {
                    className: "border-y border-gray-100 py-8 text-center dark:border-gray-800 md:py-12",
                    children: (0, s.jsx)("div", {
                        className: "mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0",
                        children: (0, s.jsx)("div", {
                            className: "relative mt-8 h-16 w-full overflow-hidden rounded-lg pt-5 lg:h-20",
                            children: (0, s.jsx)("div", {
                                ref: e,
                                className: "flex items-center gap-8 brightness-100 contrast-100 grayscale-0 transition-transform duration-100 dark:brightness-100 dark:contrast-100 lg:gap-16",
                                style: {
                                    willChange: "transform"
                                },
                                children: [...n, ...n].map((e, a) => (0, s.jsx)("div", {
                                    className: "flex-shrink-0",
                                    children: (0, s.jsx)(r.default, {
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
                    return l
                },
                getImageProps: function() {
                    return o
                }
            });
            let s = t(8229),
                i = t(8883),
                r = t(3063),
                n = s._(t(1193));

            function o(e) {
                let {
                    props: a
                } = (0, i.getImgProps)(e, {
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
            let l = r.Image
        },
        2063: (e, a, t) => {
            Promise.resolve().then(t.bind(t, 6559)), Promise.resolve().then(t.bind(t, 463)), Promise.resolve().then(t.bind(t, 79)), Promise.resolve().then(t.bind(t, 6238)), Promise.resolve().then(t.bind(t, 9775)), Promise.resolve().then(t.t.bind(t, 6874, 23)), Promise.resolve().then(t.t.bind(t, 3063, 23))
        },
        6559: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => d
            });
            var s = t(5155),
                i = t(2115),
                r = t(6429),
                n = t(3999);
            let o = e => {
                    let {
                        label: a,
                        value: t,
                        min: r,
                        max: n,
                        step: o,
                        unit: l,
                        prefix: d = "",
                        suffix: c = "",
                        onChange: x,
                        formatValue: m,
                        helpText: g,
                        icon: p,
                        gradient: h = "from-primary to-secondary"
                    } = e, [u, b] = (0, i.useState)(!1), [f, k] = (0, i.useState)(!1), y = (0, i.useRef)(null), v = (t - r) / (n - r) * 100, w = (0, i.useCallback)(e => {
                        let a = Number(e.target.value);
                        a >= r && a <= n && x(a)
                    }, [r, n, x]), j = m ? m(t) : "".concat(d).concat(t.toLocaleString("en-IN")).concat(c);
                    return (0, s.jsxs)("div", {
                        className: "space-y-3",
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [p && (0, s.jsx)("div", {
                                    className: "text-primary",
                                    children: p
                                }), (0, s.jsx)("label", {
                                    className: "text-sm font-semibold text-gray-900 dark:text-white",
                                    children: a
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "text-right",
                                children: [(0, s.jsx)("div", {
                                    className: "text-lg font-bold text-primary dark:text-primaryLight",
                                    children: j
                                }), (0, s.jsx)("div", {
                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                    children: l
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "relative",
                            children: [(0, s.jsxs)("div", {
                                className: "relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
                                children: [(0, s.jsx)("div", {
                                    className: "absolute top-0 left-0 h-full bg-gradient-to-r ".concat(h, " transition-all duration-300 ease-out"),
                                    style: {
                                        width: "".concat(v, "%")
                                    }
                                }), (u || f) && (0, s.jsx)("div", {
                                    className: "absolute top-0 left-0 h-full bg-gradient-to-r ".concat(h, " opacity-30 blur-sm transition-all duration-300"),
                                    style: {
                                        width: "".concat(v, "%")
                                    }
                                })]
                            }), (0, s.jsx)("input", {
                                ref: y,
                                type: "range",
                                min: r,
                                max: n,
                                step: o,
                                value: t,
                                onChange: w,
                                onFocus: () => b(!0),
                                onBlur: () => b(!1),
                                onMouseDown: () => k(!0),
                                onMouseUp: () => k(!1),
                                className: "absolute top-0 left-0 w-full h-3 opacity-0 cursor-pointer",
                                style: {
                                    minHeight: "44px"
                                },
                                "aria-label": "".concat(a, ": ").concat(j)
                            }), (0, s.jsx)("div", {
                                className: "absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-primary rounded-full shadow-lg transition-all duration-200 ".concat(u || f ? "scale-125 shadow-xl" : ""),
                                style: {
                                    left: "calc(".concat(v, "% - 12px)")
                                },
                                children: (0, s.jsx)("div", {
                                    className: "absolute inset-1 bg-gradient-to-r ".concat(h, " rounded-full transition-opacity duration-200 ").concat(u || f ? "opacity-100" : "opacity-0")
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, s.jsx)("input", {
                                type: "number",
                                min: r,
                                max: n,
                                step: o,
                                value: t,
                                onChange: w,
                                className: "flex-1 px-3 py-2 min-h-[44px] text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200",
                                placeholder: "".concat(r, " - ").concat(n)
                            }), g && (0, s.jsxs)("div", {
                                className: "group relative",
                                children: [(0, s.jsx)("svg", {
                                    className: "w-4 h-4 text-gray-400 cursor-help",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10",
                                    children: g
                                })]
                            })]
                        })]
                    })
                },
                l = e => {
                    let {
                        title: a,
                        value: t,
                        subtitle: i,
                        icon: r,
                        variant: n = "secondary",
                        size: o = "md"
                    } = e, l = {
                        primary: "text-white/90",
                        secondary: "text-gray-600 dark:text-gray-400",
                        accent: "text-white/90"
                    };
                    return (0, s.jsxs)("div", {
                        className: "rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ".concat({
                            primary: "bg-gradient-to-br from-primary to-primary/80 text-white",
                            secondary: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
                            accent: "bg-gradient-to-br from-secondary to-secondary/80 text-white"
                        } [n], " ").concat({
                            sm: "p-3 sm:p-4",
                            md: "p-4 sm:p-6",
                            lg: "p-4 sm:p-6 lg:p-8"
                        } [o]),
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-start justify-between mb-3",
                            children: [(0, s.jsx)("div", {
                                className: "text-sm font-medium ".concat(l[n]),
                                children: a
                            }), r && (0, s.jsx)("div", {
                                className: "text-current opacity-80",
                                children: r
                            })]
                        }), (0, s.jsx)("div", {
                            className: "text-2xl font-bold mb-1 ".concat("lg" === o ? "text-3xl" : "sm" === o ? "text-xl" : "text-2xl"),
                            children: t
                        }), i && (0, s.jsx)("div", {
                            className: "text-xs ".concat(l[n], " opacity-75"),
                            children: i
                        })]
                    })
                };

            function d(e) {
                let {
                    bankData: a,
                    theme: t = "light"
                } = e, [d, c] = (0, i.useState)((null == a ? void 0 : a.loanAmounts.defaultAmount) || 5e6), [x, m] = (0, i.useState)((null == a ? void 0 : a.interestRates.defaultRate) || 11), [g, p] = (0, i.useState)((null == a ? void 0 : a.tenures.defaultTenure) || 15), [h, u] = (0, i.useState)(!1), [b, f] = (0, i.useState)("years"), [k, y] = (0, i.useState)(!1), [v, w] = (0, i.useState)(!1), [j, N] = (0, i.useState)({}), C = (0, i.useMemo)(() => {
                    let e = "years" === b ? g : g / 12,
                        a = (0, r.s9)(d, x, e),
                        t = (0, r.LP)(d, a, e),
                        s = (0, r.Zz)(d, a, e);
                    return {
                        emi: a,
                        totalInterest: t,
                        totalAmount: s,
                        tenureInYears: e,
                        principalPercentage: d / s * 100,
                        interestPercentage: t / s * 100
                    }
                }, [d, x, g, b]), I = (0, i.useMemo)(() => h ? (0, r.CC)(d, x, C.tenureInYears) : [], [d, x, C.tenureInYears, h]);
                (0, i.useEffect)(() => {
                    let e = {};
                    d < ((null == a ? void 0 : a.loanAmounts.min) || 1e5) && (e.loanAmount = "Minimum loan amount is ₹".concat(((null == a ? void 0 : a.loanAmounts.min) || 1e5).toLocaleString("en-IN"))), d > ((null == a ? void 0 : a.loanAmounts.max) || 2e8) && (e.loanAmount = "Maximum loan amount is ₹".concat(((null == a ? void 0 : a.loanAmounts.max) || 2e8).toLocaleString("en-IN"))), N(e)
                }, [d, a]);
                let B = (0, i.useCallback)(e => {
                        "months" === e && "years" === b ? p(12 * g) : "years" === e && "months" === b && p(Math.floor(g / 12)), f(e)
                    }, [g, b]),
                    L = (0, i.useCallback)(() => {
                        y(!0), setTimeout(() => {
                            u(!h), y(!1)
                        }, 100)
                    }, [h]);
                return (0, s.jsx)("div", {
                    className: "w-full max-w-7xl mx-auto ".concat("dark" === t ? "dark" : ""),
                    children: (0, s.jsxs)("div", {
                        className: "bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800",
                        children: [(0, s.jsx)("div", {
                            className: "bg-gradient-to-r from-primary to-secondary px-8 py-6",
                            children: (0, s.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("h2", {
                                        className: "text-2xl font-bold text-white mb-2",
                                        children: "EMI Calculator"
                                    }), (0, s.jsx)("p", {
                                        className: "text-blue-100 text-sm",
                                        children: "Calculate your monthly payments with precision"
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "hidden md:flex items-center gap-4",
                                    children: (0, s.jsxs)("div", {
                                        className: "text-center",
                                        children: [(0, s.jsx)("div", {
                                            className: "text-2xl font-bold text-white",
                                            children: (0, n.vv)(C.emi)
                                        }), (0, s.jsx)("div", {
                                            className: "text-xs text-blue-100",
                                            children: "Monthly EMI"
                                        })]
                                    })
                                })]
                            })
                        }), (0, s.jsxs)("div", {
                            className: "p-4 sm:p-6 lg:p-8",
                            children: [(0, s.jsxs)("div", {
                                className: "grid lg:grid-cols-5 gap-6 md:gap-8",
                                children: [(0, s.jsxs)("div", {
                                    className: "lg:col-span-3 space-y-6 md:space-y-8",
                                    children: [(0, s.jsx)(o, {
                                        label: "Loan Amount",
                                        value: d,
                                        min: (null == a ? void 0 : a.loanAmounts.min) || 5e5,
                                        max: (null == a ? void 0 : a.loanAmounts.max) || 2e8,
                                        step: 1e5,
                                        unit: "INR",
                                        prefix: "₹",
                                        onChange: c,
                                        formatValue: n.vv,
                                        helpText: "Enter the total loan amount you need",
                                        gradient: "from-green-500 to-emerald-600",
                                        icon: (0, s.jsx)("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, s.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                            })
                                        })
                                    }), (0, s.jsx)(o, {
                                        label: "Interest Rate",
                                        value: x,
                                        min: (null == a ? void 0 : a.interestRates.min) || 8.75,
                                        max: (null == a ? void 0 : a.interestRates.max) || 18,
                                        step: .05,
                                        unit: "% per annum",
                                        suffix: "%",
                                        onChange: m,
                                        formatValue: n.Ee,
                                        helpText: "Current market rates range from 8.75% to 18%",
                                        gradient: "from-blue-500 to-indigo-600",
                                        icon: (0, s.jsx)("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, s.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                                            })
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex items-center gap-4",
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0, s.jsx)("svg", {
                                                    className: "w-5 h-5 text-primary",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: (0, s.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    })
                                                }), (0, s.jsx)("span", {
                                                    className: "text-sm font-semibold text-gray-900 dark:text-white",
                                                    children: "Loan Tenure"
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1 min-h-[44px]",
                                                children: [(0, s.jsx)("button", {
                                                    onClick: () => B("years"),
                                                    className: "px-4 py-2 min-h-[40px] text-sm font-medium rounded-md transition-all duration-200 ".concat("years" === b ? "bg-primary text-white shadow-md" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"),
                                                    children: "Years"
                                                }), (0, s.jsx)("button", {
                                                    onClick: () => B("months"),
                                                    className: "px-4 py-2 min-h-[40px] text-sm font-medium rounded-md transition-all duration-200 ".concat("months" === b ? "bg-primary text-white shadow-md" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"),
                                                    children: "Months"
                                                })]
                                            })]
                                        }), (0, s.jsx)(o, {
                                            label: "",
                                            value: g,
                                            min: "years" === b ? (null == a ? void 0 : a.tenures.min) || 5 : 60,
                                            max: "years" === b ? (null == a ? void 0 : a.tenures.max) || 20 : 240,
                                            step: "years" === b ? 1 : 12,
                                            unit: b,
                                            onChange: p,
                                            formatValue: e => "".concat(e, " ").concat(b),
                                            helpText: "Longer tenure reduces EMI but increases total interest",
                                            gradient: "from-purple-500 to-pink-600"
                                        })]
                                    }), Object.keys(j).length > 0 && (0, s.jsxs)("div", {
                                        className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex items-center gap-2 text-red-800 dark:text-red-200",
                                            children: [(0, s.jsx)("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: (0, s.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                })
                                            }), (0, s.jsx)("span", {
                                                className: "font-medium",
                                                children: "Please fix the following errors:"
                                            })]
                                        }), (0, s.jsx)("ul", {
                                            className: "mt-2 text-sm text-red-700 dark:text-red-300 list-disc list-inside",
                                            children: Object.values(j).map((e, a) => (0, s.jsx)("li", {
                                                children: e
                                            }, a))
                                        })]
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "lg:col-span-2 space-y-6",
                                    children: [(0, s.jsx)(l, {
                                        title: "Monthly EMI",
                                        value: (0, n.vv)(C.emi),
                                        subtitle: "Principal + Interest",
                                        variant: "primary",
                                        size: "lg",
                                        icon: (0, s.jsx)("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, s.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                            })
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "grid grid-cols-1 xs:grid-cols-2 gap-4",
                                        children: [(0, s.jsx)(l, {
                                            title: "Total Interest",
                                            value: (0, n.vv)(C.totalInterest),
                                            subtitle: "".concat(C.interestPercentage.toFixed(1), "% of total"),
                                            variant: "secondary",
                                            size: "sm"
                                        }), (0, s.jsx)(l, {
                                            title: "Total Amount",
                                            value: (0, n.vv)(C.totalAmount),
                                            subtitle: "Principal + Interest",
                                            variant: "secondary",
                                            size: "sm"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "bg-gray-50 dark:bg-gray-800 rounded-2xl p-6",
                                        children: [(0, s.jsx)("h4", {
                                            className: "text-sm font-semibold text-gray-900 dark:text-white mb-4",
                                            children: "Payment Breakdown"
                                        }), (0, s.jsxs)("div", {
                                            className: "relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4",
                                            children: [(0, s.jsx)("div", {
                                                className: "absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-1000 ease-out",
                                                style: {
                                                    width: "".concat(C.principalPercentage, "%")
                                                }
                                            }), (0, s.jsx)("div", {
                                                className: "absolute top-0 h-full bg-gradient-to-r from-red-500 to-orange-600 transition-all duration-1000 ease-out",
                                                style: {
                                                    left: "".concat(C.principalPercentage, "%"),
                                                    width: "".concat(C.interestPercentage, "%")
                                                }
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex items-center justify-between text-sm",
                                                children: [(0, s.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                                                    }), (0, s.jsx)("span", {
                                                        className: "text-gray-600 dark:text-gray-400",
                                                        children: "Principal"
                                                    })]
                                                }), (0, s.jsxs)("span", {
                                                    className: "font-semibold text-gray-900 dark:text-white",
                                                    children: [C.principalPercentage.toFixed(1), "%"]
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "flex items-center justify-between text-sm",
                                                children: [(0, s.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "w-3 h-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-full"
                                                    }), (0, s.jsx)("span", {
                                                        className: "text-gray-600 dark:text-gray-400",
                                                        children: "Interest"
                                                    })]
                                                }), (0, s.jsxs)("span", {
                                                    className: "font-semibold text-gray-900 dark:text-white",
                                                    children: [C.interestPercentage.toFixed(1), "%"]
                                                })]
                                            })]
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "space-y-3",
                                        children: [(0, s.jsxs)("button", {
                                            onClick: L,
                                            disabled: k,
                                            className: "w-full flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-xl transition-all duration-200 disabled:opacity-50",
                                            children: [k ? (0, s.jsxs)("svg", {
                                                className: "animate-spin w-5 h-5",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                children: [(0, s.jsx)("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4",
                                                    className: "opacity-25"
                                                }), (0, s.jsx)("path", {
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                    className: "opacity-75"
                                                })]
                                            }) : (0, s.jsx)("svg", {
                                                className: "w-5 h-5 transition-transform duration-200 ".concat(h ? "rotate-180" : ""),
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: (0, s.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M19 9l-7 7-7-7"
                                                })
                                            }), h ? "Hide" : "Show", " Amortization Schedule"]
                                        }), (0, s.jsxs)("button", {
                                            onClick: () => w(!v),
                                            className: "w-full flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] bg-primary hover:bg-primaryLight text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02]",
                                            children: [(0, s.jsx)("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: (0, s.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                })
                                            }), "View Detailed Analysis"]
                                        })]
                                    })]
                                })]
                            }), h && I.length > 0 && (0, s.jsxs)("div", {
                                className: "mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl",
                                children: [(0, s.jsx)("h3", {
                                    className: "text-xl font-bold text-gray-900 dark:text-white mb-6",
                                    children: "Year-wise Payment Schedule"
                                }), (0, s.jsx)("div", {
                                    className: "md:hidden bg-blue-50 dark:bg-blue-900/20 rounded-lg px-4 py-3 mb-4 border border-blue-200 dark:border-blue-700",
                                    children: (0, s.jsxs)("div", {
                                        className: "flex items-center text-blue-700 dark:text-blue-300",
                                        children: [(0, s.jsx)("svg", {
                                            className: "w-4 h-4 mr-2 flex-shrink-0",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: (0, s.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            })
                                        }), (0, s.jsx)("span", {
                                            className: "text-xs",
                                            children: "Swipe left to view all columns"
                                        })]
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "overflow-x-auto",
                                    children: (0, s.jsxs)("table", {
                                        className: "w-full min-w-[700px]",
                                        children: [(0, s.jsx)("thead", {
                                            children: (0, s.jsxs)("tr", {
                                                className: "border-b border-gray-200 dark:border-gray-700",
                                                children: [(0, s.jsx)("th", {
                                                    className: "text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap",
                                                    children: "Year"
                                                }), (0, s.jsx)("th", {
                                                    className: "text-right py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap",
                                                    children: "Opening Balance"
                                                }), (0, s.jsx)("th", {
                                                    className: "text-right py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap",
                                                    children: "Annual EMI"
                                                }), (0, s.jsx)("th", {
                                                    className: "text-right py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap",
                                                    children: "Principal"
                                                }), (0, s.jsx)("th", {
                                                    className: "text-right py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap",
                                                    children: "Interest"
                                                }), (0, s.jsx)("th", {
                                                    className: "text-right py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap",
                                                    children: "Closing Balance"
                                                })]
                                            })
                                        }), (0, s.jsx)("tbody", {
                                            children: I.filter(e => 12 === e.month || 0 === e.closingBalance).map((e, a) => (0, s.jsxs)("tr", {
                                                className: "border-b border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-150",
                                                children: [(0, s.jsxs)("td", {
                                                    className: "py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap",
                                                    children: ["Year ", e.year]
                                                }), (0, s.jsx)("td", {
                                                    className: "py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-right text-gray-900 dark:text-white whitespace-nowrap",
                                                    children: (0, n.vv)(e.openingBalance)
                                                }), (0, s.jsx)("td", {
                                                    className: "py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-right text-gray-900 dark:text-white whitespace-nowrap",
                                                    children: (0, n.vv)(12 * e.emi)
                                                }), (0, s.jsx)("td", {
                                                    className: "py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-right text-green-600 dark:text-green-400 whitespace-nowrap",
                                                    children: (0, n.vv)(e.totalPrincipalPaid)
                                                }), (0, s.jsx)("td", {
                                                    className: "py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-right text-red-600 dark:text-red-400 whitespace-nowrap",
                                                    children: (0, n.vv)(e.totalInterestPaid)
                                                }), (0, s.jsx)("td", {
                                                    className: "py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-right font-medium text-gray-900 dark:text-white whitespace-nowrap",
                                                    children: (0, n.vv)(e.closingBalance)
                                                })]
                                            }, a))
                                        })]
                                    })
                                })]
                            }), v && (0, s.jsxs)("div", {
                                className: "mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl",
                                children: [(0, s.jsx)("h3", {
                                    className: "text-xl font-bold text-gray-900 dark:text-white mb-6",
                                    children: "Detailed Financial Analysis"
                                }), (0, s.jsxs)("div", {
                                    className: "grid md:grid-cols-3 gap-6",
                                    children: [(0, s.jsxs)("div", {
                                        className: "space-y-3",
                                        children: [(0, s.jsx)("h4", {
                                            className: "font-semibold text-gray-900 dark:text-white",
                                            children: "Cost Analysis"
                                        }), (0, s.jsxs)("div", {
                                            className: "space-y-2 text-sm",
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [(0, s.jsx)("span", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "EMI Amount:"
                                                }), (0, s.jsx)("span", {
                                                    className: "font-medium text-gray-900 dark:text-white",
                                                    children: (0, n.vv)(C.emi)
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [(0, s.jsx)("span", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "Total Payments:"
                                                }), (0, s.jsxs)("span", {
                                                    className: "font-medium text-gray-900 dark:text-white",
                                                    children: [12 * C.tenureInYears, " payments"]
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [(0, s.jsx)("span", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "Interest Cost:"
                                                }), (0, s.jsx)("span", {
                                                    className: "font-medium text-red-600 dark:text-red-400",
                                                    children: (0, n.vv)(C.totalInterest)
                                                })]
                                            })]
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "space-y-3",
                                        children: [(0, s.jsx)("h4", {
                                            className: "font-semibold text-gray-900 dark:text-white",
                                            children: "Affordability"
                                        }), (0, s.jsxs)("div", {
                                            className: "space-y-2 text-sm",
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [(0, s.jsx)("span", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "Monthly Commitment:"
                                                }), (0, s.jsx)("span", {
                                                    className: "font-medium text-gray-900 dark:text-white",
                                                    children: (0, n.vv)(C.emi)
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [(0, s.jsx)("span", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "Recommended Income:"
                                                }), (0, s.jsx)("span", {
                                                    className: "font-medium text-gray-900 dark:text-white",
                                                    children: (0, n.vv)(3 * C.emi)
                                                })]
                                            }), (0, s.jsx)("div", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: "EMI should not exceed 30% of monthly income"
                                            })]
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "space-y-3",
                                        children: [(0, s.jsx)("h4", {
                                            className: "font-semibold text-gray-900 dark:text-white",
                                            children: "Comparison"
                                        }), (0, s.jsxs)("div", {
                                            className: "space-y-2 text-sm",
                                            children: [(0, s.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [(0, s.jsx)("span", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "vs Personal Loan:"
                                                }), (0, s.jsx)("span", {
                                                    className: "font-medium text-green-600 dark:text-green-400",
                                                    children: "Save ~40%"
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "flex justify-between",
                                                children: [(0, s.jsx)("span", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "vs Credit Card:"
                                                }), (0, s.jsx)("span", {
                                                    className: "font-medium text-green-600 dark:text-green-400",
                                                    children: "Save ~60%"
                                                })]
                                            }), (0, s.jsx)("div", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: "Based on typical market rates"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        6766: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => i.a
            });
            var s = t(1469),
                i = t.n(s)
        }
    },
    e => {
        e.O(0, [6874, 3063, 6238, 5211, 8441, 5964, 7358], () => e(e.s = 2063)), _N_E = e.O()
    }
]);