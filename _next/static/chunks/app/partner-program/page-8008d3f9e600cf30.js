(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1182], {
        79: (a, e, i) => {
            "use strict";
            i.d(e, {
                default: () => s
            });
            var n = i(5155),
                t = i(2115);
            let o = [{
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

            function r(a) {
                let {
                    question: e,
                    answer: i,
                    index: o,
                    isOpen: r,
                    onToggle: s
                } = a, l = (0, t.useRef)(null), [d, c] = (0, t.useState)(0);
                return (0, t.useEffect)(() => {
                    if (l.current) {
                        let a = l.current.scrollHeight;
                        c(r ? a : 0)
                    }
                }, [r, i]), (0, n.jsx)("div", {
                    className: "group",
                    children: (0, n.jsxs)("div", {
                        className: "faq",
                        children: [(0, n.jsxs)("button", {
                            type: "button",
                            className: "flex w-full items-center justify-between py-5 text-left transition-all duration-200 ".concat(r ? "text-primary dark:text-primaryLight" : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"),
                            "aria-controls": "faq-".concat(o),
                            "aria-expanded": r,
                            onClick: s,
                            children: [(0, n.jsxs)("span", {
                                className: "flex items-start pr-8",
                                children: [(0, n.jsx)("span", {
                                    className: "mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ".concat(r ? "bg-primary/10 text-primary dark:bg-primaryLight/10 dark:text-primaryLight" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-500 dark:group-hover:bg-gray-700"),
                                    children: (0, n.jsx)("span", {
                                        className: "text-sm font-semibold",
                                        children: (o + 1).toString().padStart(2, "0")
                                    })
                                }), (0, n.jsx)("span", {
                                    className: "text-lg font-medium transition-colors duration-200 ".concat(r ? "text-gray-900 dark:text-white" : ""),
                                    children: e
                                })]
                            }), (0, n.jsx)("span", {
                                className: "ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ".concat(r ? "bg-primary/10 dark:bg-primaryLight/10" : "bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700"),
                                children: (0, n.jsx)("svg", {
                                    className: "h-5 w-5 transform transition-all duration-300 ".concat(r ? "rotate-180 text-primary dark:text-primaryLight" : "rotate-0 text-gray-400 dark:text-gray-500"),
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "2",
                                    stroke: "currentColor",
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    })
                                })
                            })]
                        }), (0, n.jsx)("div", {
                            className: "faq-answer overflow-hidden transition-all duration-300 ease-in-out",
                            style: {
                                maxHeight: "".concat(d, "px")
                            },
                            id: "faq-".concat(o),
                            "aria-hidden": !r,
                            children: (0, n.jsx)("div", {
                                ref: l,
                                children: (0, n.jsx)("div", {
                                    className: "pb-4 sm:pb-6 pl-10 sm:pl-16 pr-4 sm:pr-8",
                                    children: (0, n.jsx)("p", {
                                        className: "text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400",
                                        children: i
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function s() {
                let {
                    faqs: a,
                    title: e = "Frequently Asked Questions",
                    subtitle: i = "Find answers to commonly asked questions about our financial services."
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [s, l] = (0, t.useState)(null), d = a || o, c = d.length, g = (0, t.useCallback)(a => {
                    l(e => e === a ? null : a)
                }, []);
                return (0, t.useEffect)(() => {
                    let a = a => {
                        if (a.target && a.target.closest(".faq")) switch (a.key) {
                            case "ArrowDown":
                                a.preventDefault(), null === s || s === c - 1 ? l(0) : l(s + 1);
                                break;
                            case "ArrowUp":
                                a.preventDefault(), null === s || 0 === s ? l(c - 1) : l(s - 1);
                                break;
                            case "Home":
                                a.preventDefault(), l(0);
                                break;
                            case "End":
                                a.preventDefault(), l(c - 1);
                                break;
                            case "Escape":
                                a.preventDefault(), l(null)
                        }
                    };
                    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a)
                }, [s, c]), (0, n.jsxs)("section", {
                    id: "faqs",
                    className: "relative py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50",
                    "aria-labelledby": "faq-heading",
                    children: [(0, n.jsx)("div", {
                        className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"
                    }), (0, n.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                        children: [(0, n.jsxs)("div", {
                            className: "mx-auto max-w-3xl text-center",
                            children: [(0, n.jsxs)("div", {
                                className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                children: [(0, n.jsx)("svg", {
                                    className: "h-4 w-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: (0, n.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                }), (0, n.jsx)("span", {
                                    children: "Help & Support"
                                })]
                            }), (0, n.jsx)("h2", {
                                id: "faq-heading",
                                className: "mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",
                                children: e
                            }), i && (0, n.jsx)("p", {
                                className: "mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300",
                                children: i
                            })]
                        }), (0, n.jsx)("div", {
                            className: "mx-auto mt-16 max-w-4xl",
                            children: (0, n.jsx)("div", {
                                className: "rounded-2xl bg-white p-2 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800",
                                children: (0, n.jsx)("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-800",
                                    role: "region",
                                    "aria-label": "Frequently asked questions",
                                    children: d.map((a, e) => (0, n.jsx)("div", {
                                        className: "rounded-xl transition-colors duration-200 ".concat(s === e ? "bg-gray-50 dark:bg-gray-800/50" : "hover:bg-gray-50 dark:hover:bg-gray-800/30"),
                                        children: (0, n.jsx)("div", {
                                            className: "px-6",
                                            children: (0, n.jsx)(r, {
                                                question: a.question,
                                                answer: a.answer,
                                                index: e,
                                                isOpen: s === e,
                                                onToggle: () => g(e)
                                            })
                                        })
                                    }, e))
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: "mt-12 text-center",
                            children: (0, n.jsxs)("p", {
                                className: "text-base text-gray-600 dark:text-gray-400",
                                children: ["Still have questions?", " ", (0, n.jsx)("a", {
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
        463: (a, e, i) => {
            "use strict";
            i.d(e, {
                default: () => s
            });
            var n = i(5155),
                t = i(2115),
                o = i(6766);
            let r = [{
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

            function s() {
                let a = (0, t.useRef)(null),
                    e = (0, t.useRef)(0),
                    i = (0, t.useRef)(0),
                    s = (0, t.useRef)(0);
                return (0, t.useEffect)(() => {
                    let n = a.current;
                    if (!n) return;
                    let t = a => {
                        if (s.current) {
                            let e = a - s.current;
                            i.current -= e / 16 * .5
                        }
                        s.current = a;
                        let o = n.scrollWidth / 2;
                        Math.abs(i.current) >= o && (i.current = i.current + o), n.style.transform = "translate3d(".concat(i.current, "px, 0, 0)"), e.current = requestAnimationFrame(t)
                    };
                    return e.current = requestAnimationFrame(t), () => {
                        e.current && cancelAnimationFrame(e.current)
                    }
                }, []), (0, n.jsx)("section", {
                    className: "border-y border-gray-100 py-8 text-center dark:border-gray-800 md:py-12",
                    children: (0, n.jsx)("div", {
                        className: "mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0",
                        children: (0, n.jsx)("div", {
                            className: "relative mt-8 h-16 w-full overflow-hidden rounded-lg pt-5 lg:h-20",
                            children: (0, n.jsx)("div", {
                                ref: a,
                                className: "flex items-center gap-8 brightness-100 contrast-100 grayscale-0 transition-transform duration-100 dark:brightness-100 dark:contrast-100 lg:gap-16",
                                style: {
                                    willChange: "transform"
                                },
                                children: [...r, ...r].map((a, e) => (0, n.jsx)("div", {
                                    className: "flex-shrink-0",
                                    children: (0, n.jsx)(o.default, {
                                        src: a.logo.webp["1x"],
                                        alt: a.name,
                                        width: a.width,
                                        height: a.height,
                                        className: "block h-8 w-auto lg:h-10 lg:w-auto",
                                        loading: "lazy"
                                    })
                                }, "".concat(a.id, "-").concat(e)))
                            })
                        })
                    })
                })
            }
        },
        1469: (a, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), ! function(a, e) {
                for (var i in e) Object.defineProperty(a, i, {
                    enumerable: !0,
                    get: e[i]
                })
            }(e, {
                default: function() {
                    return l
                },
                getImageProps: function() {
                    return s
                }
            });
            let n = i(8229),
                t = i(8883),
                o = i(3063),
                r = n._(i(1193));

            function s(a) {
                let {
                    props: e
                } = (0, t.getImgProps)(a, {
                    defaultLoader: r.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image/",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !0
                    }
                });
                for (let [a, i] of Object.entries(e)) void 0 === i && delete e[a];
                return {
                    props: e
                }
            }
            let l = o.Image
        },
        6766: (a, e, i) => {
            "use strict";
            i.d(e, {
                default: () => t.a
            });
            var n = i(1469),
                t = i.n(n)
        },
        7992: (a, e, i) => {
            Promise.resolve().then(i.bind(i, 463)), Promise.resolve().then(i.bind(i, 79)), Promise.resolve().then(i.bind(i, 9775)), Promise.resolve().then(i.t.bind(i, 6874, 23)), Promise.resolve().then(i.t.bind(i, 3063, 23))
        },
        9775: (a, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                SubtleBackground: () => s,
                SubtleHover: () => r,
                default: () => o
            });
            var n = i(5155),
                t = i(2115);

            function o(a) {
                let {
                    children: e,
                    animation: i = "gentle-fade-up",
                    delay: o = 0,
                    threshold: r = .1,
                    once: s = !0,
                    className: l = "",
                    disabled: d = !1
                } = a, {
                    ref: c,
                    isVisible: g,
                    isReduced: m,
                    isMobile: p
                } = function() {
                    let {
                        threshold: a = .1,
                        delay: e = 0,
                        once: i = !0,
                        disabled: n = !1
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [o, r] = (0, t.useState)(!1), [s, l] = (0, t.useState)(!1), d = (0, t.useRef)(null), c = (0, t.useRef)(null);
                    return (0, t.useEffect)(() => {
                        l(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
                        let a = window.matchMedia("(prefers-reduced-motion: reduce)"),
                            e = () => l(a.matches);
                        return a.addEventListener("change", e), () => a.removeEventListener("change", e)
                    }, []), (0, t.useEffect)(() => {
                        if (n || s || !d.current) return void r(!0);
                        let t = d.current;
                        return c.current = new IntersectionObserver(a => {
                            let [n] = a;
                            n.isIntersecting ? (setTimeout(() => {
                                r(!0)
                            }, e), i && c.current && c.current.unobserve(t)) : i || r(!1)
                        }, {
                            threshold: a,
                            rootMargin: "50px 0px"
                        }), c.current.observe(t), () => {
                            c.current && c.current.disconnect()
                        }
                    }, [a, e, i, n, s]), {
                        ref: d,
                        isVisible: o || s || n,
                        isReduced: s,
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    }
                }({
                    threshold: r,
                    delay: o,
                    once: s,
                    disabled: d
                });
                return (0, n.jsx)("div", {
                    ref: c,
                    className: "".concat((() => {
                        if (m || d) return "opacity-100 transform-none";
                        let a = "transition-all duration-500 ease-out",
                            e = p ? "mobile:" : "";
                        if (g) return "".concat(a, " opacity-100 translate-y-0 translate-x-0 scale-100");
                        switch (i) {
                            case "gentle-fade-up":
                                return "".concat(a, " opacity-0 ").concat(e, "translate-y-2 translate-y-4");
                            case "gentle-slide-in":
                                return "".concat(a, " opacity-0 ").concat(e, "-translate-x-2 -translate-x-4");
                            case "gentle-slide-right":
                                return "".concat(a, " opacity-0 ").concat(e, "translate-x-2 translate-x-4");
                            case "gentle-scale":
                                return "".concat(a, " opacity-0 scale-98");
                            default:
                                return "".concat(a, " opacity-0 translate-y-4")
                        }
                    })(), " ").concat(l),
                    style: {
                        animationDelay: m ? "0ms" : "".concat(o, "ms")
                    },
                    children: e
                })
            }

            function r(a) {
                let {
                    children: e,
                    type: i = "lift",
                    className: t = "",
                    disabled: o = !1
                } = a;
                return o ? (0, n.jsx)("div", {
                    className: t,
                    children: e
                }) : (0, n.jsx)("div", {
                    className: "".concat({
                        lift: "transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:will-change-transform",
                        glow: "transition-shadow duration-300 ease-out hover:shadow-lg hover:shadow-primary/10",
                        scale: "transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
                    } [i], " ").concat(t),
                    style: {
                        backfaceVisibility: "hidden"
                    },
                    children: e
                })
            }

            function s(a) {
                let {
                    children: e,
                    type: i = "float",
                    intensity: t = "subtle",
                    className: o = "",
                    disabled: r = !1,
                    style: s = {}
                } = a;
                return r ? (0, n.jsx)("div", {
                    className: o,
                    style: s,
                    children: e
                }) : (0, n.jsx)("div", {
                    className: "".concat({
                        float: "animate-gentle-float",
                        breathing: "animate-gentle-breathing",
                        "gentle-parallax": "transform-gpu will-change-transform"
                    } [i], " ").concat(o),
                    style: {
                        "--float-distance": {
                            minimal: "1px",
                            subtle: "2px",
                            gentle: "4px"
                        } [t],
                        animationDuration: "float" === i ? "8s" : "4s",
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                        ...s
                    },
                    children: e
                })
            }
        }
    },
    a => {
        a.O(0, [6874, 3063, 8441, 5964, 7358], () => a(a.s = 7992)), _N_E = a.O()
    }
]);