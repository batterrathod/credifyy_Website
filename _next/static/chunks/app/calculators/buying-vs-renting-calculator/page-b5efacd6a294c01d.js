(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9678], {
        79: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => l
            });
            var a = r(5155),
                s = r(2115);
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

            function i(e) {
                let {
                    question: t,
                    answer: r,
                    index: n,
                    isOpen: i,
                    onToggle: l
                } = e, o = (0, s.useRef)(null), [d, c] = (0, s.useState)(0);
                return (0, s.useEffect)(() => {
                    if (o.current) {
                        let e = o.current.scrollHeight;
                        c(i ? e : 0)
                    }
                }, [i, r]), (0, a.jsx)("div", {
                    className: "group",
                    children: (0, a.jsxs)("div", {
                        className: "faq",
                        children: [(0, a.jsxs)("button", {
                            type: "button",
                            className: "flex w-full items-center justify-between py-5 text-left transition-all duration-200 ".concat(i ? "text-primary dark:text-primaryLight" : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"),
                            "aria-controls": "faq-".concat(n),
                            "aria-expanded": i,
                            onClick: l,
                            children: [(0, a.jsxs)("span", {
                                className: "flex items-start pr-8",
                                children: [(0, a.jsx)("span", {
                                    className: "mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ".concat(i ? "bg-primary/10 text-primary dark:bg-primaryLight/10 dark:text-primaryLight" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-500 dark:group-hover:bg-gray-700"),
                                    children: (0, a.jsx)("span", {
                                        className: "text-sm font-semibold",
                                        children: (n + 1).toString().padStart(2, "0")
                                    })
                                }), (0, a.jsx)("span", {
                                    className: "text-lg font-medium transition-colors duration-200 ".concat(i ? "text-gray-900 dark:text-white" : ""),
                                    children: t
                                })]
                            }), (0, a.jsx)("span", {
                                className: "ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ".concat(i ? "bg-primary/10 dark:bg-primaryLight/10" : "bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700"),
                                children: (0, a.jsx)("svg", {
                                    className: "h-5 w-5 transform transition-all duration-300 ".concat(i ? "rotate-180 text-primary dark:text-primaryLight" : "rotate-0 text-gray-400 dark:text-gray-500"),
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: "2",
                                    stroke: "currentColor",
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    })
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "faq-answer overflow-hidden transition-all duration-300 ease-in-out",
                            style: {
                                maxHeight: "".concat(d, "px")
                            },
                            id: "faq-".concat(n),
                            "aria-hidden": !i,
                            children: (0, a.jsx)("div", {
                                ref: o,
                                children: (0, a.jsx)("div", {
                                    className: "pb-4 sm:pb-6 pl-10 sm:pl-16 pr-4 sm:pr-8",
                                    children: (0, a.jsx)("p", {
                                        className: "text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400",
                                        children: r
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
                    title: t = "Frequently Asked Questions",
                    subtitle: r = "Find answers to commonly asked questions about our financial services."
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [l, o] = (0, s.useState)(null), d = e || n, c = d.length, x = (0, s.useCallback)(e => {
                    o(t => t === e ? null : e)
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
                }, [l, c]), (0, a.jsxs)("section", {
                    id: "faqs",
                    className: "relative py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50",
                    "aria-labelledby": "faq-heading",
                    children: [(0, a.jsx)("div", {
                        className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"
                    }), (0, a.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                        children: [(0, a.jsxs)("div", {
                            className: "mx-auto max-w-3xl text-center",
                            children: [(0, a.jsxs)("div", {
                                className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                children: [(0, a.jsx)("svg", {
                                    className: "h-4 w-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: (0, a.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                }), (0, a.jsx)("span", {
                                    children: "Help & Support"
                                })]
                            }), (0, a.jsx)("h2", {
                                id: "faq-heading",
                                className: "mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",
                                children: t
                            }), r && (0, a.jsx)("p", {
                                className: "mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300",
                                children: r
                            })]
                        }), (0, a.jsx)("div", {
                            className: "mx-auto mt-16 max-w-4xl",
                            children: (0, a.jsx)("div", {
                                className: "rounded-2xl bg-white p-2 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800",
                                children: (0, a.jsx)("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-800",
                                    role: "region",
                                    "aria-label": "Frequently asked questions",
                                    children: d.map((e, t) => (0, a.jsx)("div", {
                                        className: "rounded-xl transition-colors duration-200 ".concat(l === t ? "bg-gray-50 dark:bg-gray-800/50" : "hover:bg-gray-50 dark:hover:bg-gray-800/30"),
                                        children: (0, a.jsx)("div", {
                                            className: "px-6",
                                            children: (0, a.jsx)(i, {
                                                question: e.question,
                                                answer: e.answer,
                                                index: t,
                                                isOpen: l === t,
                                                onToggle: () => x(t)
                                            })
                                        })
                                    }, t))
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "mt-12 text-center",
                            children: (0, a.jsxs)("p", {
                                className: "text-base text-gray-600 dark:text-gray-400",
                                children: ["Still have questions?", " ", (0, a.jsx)("a", {
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
        2269: (e, t, r) => {
            "use strict";
            var a = r(9509);
            r(8375);
            var s = r(2115),
                n = function(e) {
                    return e && "object" == typeof e && "default" in e ? e : {
                        default: e
                    }
                }(s),
                i = void 0 !== a && a.env && !0,
                l = function(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                },
                o = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.name,
                            a = void 0 === r ? "stylesheet" : r,
                            s = t.optimizeForSpeed,
                            n = void 0 === s ? i : s;
                        d(l(a), "`name` must be a string"), this._name = a, this._deletedRulePlaceholder = "#" + a + "-deleted-rule____{}", d("boolean" == typeof n, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = n, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                        var o = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                        this._nonce = o ? o.getAttribute("content") : null
                    }
                    var t, r = e.prototype;
                    return r.setOptimizeForSpeed = function(e) {
                            d("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), d(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                        }, r.isOptimizeForSpeed = function() {
                            return this._optimizeForSpeed
                        }, r.inject = function() {
                            var e = this;
                            if (d(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                                this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (i || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                                return
                            }
                            this._serverSheet = {
                                cssRules: [],
                                insertRule: function(t, r) {
                                    return "number" == typeof r ? e._serverSheet.cssRules[r] = {
                                        cssText: t
                                    } : e._serverSheet.cssRules.push({
                                        cssText: t
                                    }), r
                                },
                                deleteRule: function(t) {
                                    e._serverSheet.cssRules[t] = null
                                }
                            }
                        }, r.getSheetForTag = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                        }, r.getSheet = function() {
                            return this.getSheetForTag(this._tags[this._tags.length - 1])
                        }, r.insertRule = function(e, t) {
                            if (d(l(e), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                            if (this._optimizeForSpeed) {
                                var r = this.getSheet();
                                "number" != typeof t && (t = r.cssRules.length);
                                try {
                                    r.insertRule(e, t)
                                } catch (t) {
                                    return i || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                                }
                            } else {
                                var a = this._tags[t];
                                this._tags.push(this.makeStyleTag(this._name, e, a))
                            }
                            return this._rulesCount++
                        }, r.replaceRule = function(e, t) {
                            if (this._optimizeForSpeed || "undefined" == typeof window) {
                                var r = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                                if (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e]) return e;
                                r.deleteRule(e);
                                try {
                                    r.insertRule(t, e)
                                } catch (a) {
                                    i || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), r.insertRule(this._deletedRulePlaceholder, e)
                                }
                            } else {
                                var a = this._tags[e];
                                d(a, "old rule at index `" + e + "` not found"), a.textContent = t
                            }
                            return e
                        }, r.deleteRule = function(e) {
                            if ("undefined" == typeof window) return void this._serverSheet.deleteRule(e);
                            if (this._optimizeForSpeed) this.replaceRule(e, "");
                            else {
                                var t = this._tags[e];
                                d(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                            }
                        }, r.flush = function() {
                            this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(e) {
                                return e && e.parentNode.removeChild(e)
                            }), this._tags = []) : this._serverSheet.cssRules = []
                        }, r.cssRules = function() {
                            var e = this;
                            return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, r) {
                                return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, function(t) {
                                    return t.cssText === e._deletedRulePlaceholder ? null : t
                                })) : t.push(null), t
                            }, [])
                        }, r.makeStyleTag = function(e, t, r) {
                            t && d(l(t), "makeStyleTag accepts only strings as second parameter");
                            var a = document.createElement("style");
                            this._nonce && a.setAttribute("nonce", this._nonce), a.type = "text/css", a.setAttribute("data-" + e, ""), t && a.appendChild(document.createTextNode(t));
                            var s = document.head || document.getElementsByTagName("head")[0];
                            return r ? s.insertBefore(a, r) : s.appendChild(a), a
                        }, t = [{
                            key: "length",
                            get: function() {
                                return this._rulesCount
                            }
                        }],
                        function(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var a = t[r];
                                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                            }
                        }(e.prototype, t), e
                }();

            function d(e, t) {
                if (!e) throw Error("StyleSheet: " + t + ".")
            }
            var c = function(e) {
                    for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
                    return t >>> 0
                },
                x = {};

            function m(e, t) {
                if (!t) return "jsx-" + e;
                var r = String(t),
                    a = e + r;
                return x[a] || (x[a] = "jsx-" + c(e + "-" + r)), x[a]
            }

            function h(e, t) {
                "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
                var r = e + t;
                return x[r] || (x[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), x[r]
            }
            var p = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.styleSheet,
                            a = void 0 === r ? null : r,
                            s = t.optimizeForSpeed,
                            n = void 0 !== s && s;
                        this._sheet = a || new o({
                            name: "styled-jsx",
                            optimizeForSpeed: n
                        }), this._sheet.inject(), a && "boolean" == typeof n && (this._sheet.setOptimizeForSpeed(n), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }
                    var t = e.prototype;
                    return t.add = function(e) {
                        var t = this;
                        void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                            return e[t] = 0, e
                        }, {}));
                        var r = this.getIdAndRules(e),
                            a = r.styleId,
                            s = r.rules;
                        if (a in this._instancesCounts) {
                            this._instancesCounts[a] += 1;
                            return
                        }
                        var n = s.map(function(e) {
                            return t._sheet.insertRule(e)
                        }).filter(function(e) {
                            return -1 !== e
                        });
                        this._indices[a] = n, this._instancesCounts[a] = 1
                    }, t.remove = function(e) {
                        var t = this,
                            r = this.getIdAndRules(e).styleId;
                        if (function(e, t) {
                                if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                            }(r in this._instancesCounts, "styleId: `" + r + "` not found"), this._instancesCounts[r] -= 1, this._instancesCounts[r] < 1) {
                            var a = this._fromServer && this._fromServer[r];
                            a ? (a.parentNode.removeChild(a), delete this._fromServer[r]) : (this._indices[r].forEach(function(e) {
                                return t._sheet.deleteRule(e)
                            }), delete this._indices[r]), delete this._instancesCounts[r]
                        }
                    }, t.update = function(e, t) {
                        this.add(t), this.remove(e)
                    }, t.flush = function() {
                        this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }, t.cssRules = function() {
                        var e = this,
                            t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                                return [t, e._fromServer[t]]
                            }) : [],
                            r = this._sheet.cssRules();
                        return t.concat(Object.keys(this._indices).map(function(t) {
                            return [t, e._indices[t].map(function(e) {
                                return r[e].cssText
                            }).join(e._optimizeForSpeed ? "" : "\n")]
                        }).filter(function(e) {
                            return !!e[1]
                        }))
                    }, t.styles = function(e) {
                        var t, r;
                        return t = this.cssRules(), void 0 === (r = e) && (r = {}), t.map(function(e) {
                            var t = e[0],
                                a = e[1];
                            return n.default.createElement("style", {
                                id: "__" + t,
                                key: "__" + t,
                                nonce: r.nonce ? r.nonce : void 0,
                                dangerouslySetInnerHTML: {
                                    __html: a
                                }
                            })
                        })
                    }, t.getIdAndRules = function(e) {
                        var t = e.children,
                            r = e.dynamic,
                            a = e.id;
                        if (r) {
                            var s = m(a, r);
                            return {
                                styleId: s,
                                rules: Array.isArray(t) ? t.map(function(e) {
                                    return h(s, e)
                                }) : [h(s, t)]
                            }
                        }
                        return {
                            styleId: m(a),
                            rules: Array.isArray(t) ? t : [t]
                        }
                    }, t.selectFromServer = function() {
                        return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                            return e[t.id.slice(2)] = t, e
                        }, {})
                    }, e
                }(),
                u = s.createContext(null);
            u.displayName = "StyleSheetContext";
            var g = n.default.useInsertionEffect || n.default.useLayoutEffect,
                y = "undefined" != typeof window ? new p : void 0;

            function f(e) {
                var t = y || s.useContext(u);
                return t && ("undefined" == typeof window ? t.add(e) : g(function() {
                    return t.add(e),
                        function() {
                            t.remove(e)
                        }
                }, [e.id, String(e.dynamic)])), null
            }
            f.dynamic = function(e) {
                return e.map(function(e) {
                    return m(e[0], e[1])
                }).join(" ")
            }, t.style = f
        },
        5511: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => p
            });
            var a = r(5155),
                s = r(9137),
                n = r.n(s),
                i = r(2115),
                l = r(9775),
                o = r(79),
                d = r(3999),
                c = r(6429);
            let x = "\n  .slider-thumb::-webkit-slider-thumb {\n    appearance: none;\n    width: 20px;\n    height: 20px;\n    background: linear-gradient(135deg, #5562eb 0%, #7161ef 100%);\n    cursor: pointer;\n    border-radius: 50%;\n    box-shadow: 0 2px 6px rgba(0,0,0,0.2);\n    transition: all 0.2s ease;\n  }\n  .slider-thumb::-webkit-slider-thumb:hover {\n    transform: scale(1.2);\n    box-shadow: 0 3px 8px rgba(85, 98, 235, 0.4);\n  }\n  .slider-thumb::-moz-range-thumb {\n    width: 20px;\n    height: 20px;\n    background: linear-gradient(135deg, #5562eb 0%, #7161ef 100%);\n    cursor: pointer;\n    border-radius: 50%;\n    border: none;\n    box-shadow: 0 2px 6px rgba(0,0,0,0.2);\n    transition: all 0.2s ease;\n  }\n  .slider-thumb::-moz-range-thumb:hover {\n    transform: scale(1.2);\n    box-shadow: 0 3px 8px rgba(85, 98, 235, 0.4);\n  }\n  .dark .slider-thumb::-webkit-slider-thumb {\n    background: linear-gradient(135deg, #6B73FF 0%, #8B80F9 100%);\n  }\n  .dark .slider-thumb::-moz-range-thumb {\n    background: linear-gradient(135deg, #6B73FF 0%, #8B80F9 100%);\n  }\n",
                m = {
                    card: "bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
                },
                h = [{
                    question: "Is it always better to buy than rent?",
                    answer: "No, it's not always better to buy. The decision depends on your financial situation, how long you plan to stay, local market conditions, and lifestyle preferences. If you plan to move within 3-5 years, renting often makes more financial sense. Consider factors like job stability, family plans, and investment opportunities."
                }, {
                    question: "What tax benefits are available for homeowners in India (2024-25)?",
                    answer: "Under the old tax regime, homeowners can claim: Section 80C - up to ₹1.5 lakhs on principal repayment, Section 24(b) - up to ₹2 lakhs on interest for self-occupied property (₹3 lakhs for let-out property as per Budget 2025), Section 80EE - additional ₹50,000 for first-time buyers, and Section 80EEA - additional ₹1.5 lakhs for affordable housing. Note: These benefits are not available under the new tax regime."
                }, {
                    question: "How accurate is this calculator?",
                    answer: "This calculator uses 2024-25 market data and provides reliable estimates based on your inputs. However, actual results may vary due to changing interest rates (currently 7.35%-10.15%), market volatility, unexpected expenses, and tax law changes. Use it as a comprehensive guide, but consult financial advisors for personalized advice on major property decisions."
                }, {
                    question: "What additional costs should I consider when buying property?",
                    answer: "Beyond the calculator, factor in: Stamp duty and registration (5-7% of property value), GST on under-construction properties (5% for affordable, 12% for others), Home loan processing fees (0.5-1% of loan amount), Legal and documentation fees, Interior and furnishing costs, Society maintenance charges (₹2-4/sq ft monthly), Property insurance, and Brokerage fees (1-2% typically)."
                }, {
                    question: "What's the current real estate market outlook for 2025?",
                    answer: "The Indian real estate market shows strong growth with average appreciation of 6-12% across major cities. Delhi-NCR and Bangalore lead with 10-12% annual appreciation. Interest rates have stabilized at 7.35%-10.15%. Rental yields vary from 2.79% (Delhi) to 4.45% (Bangalore). The market favors buying for long-term investors (7+ years) in most cities."
                }, {
                    question: "Should I wait for property prices to drop?",
                    answer: "Timing the market is challenging. With current appreciation rates of 6-12% annually in major cities and rising construction costs, significant price drops are unlikely. Instead, focus on your personal readiness: stable income, adequate down payment (20-30%), good Credit score, and long-term plans. The best time to buy is when you're financially prepared, not when trying to time the market."
                }];

            function p() {
                let [e, t] = (0, i.useState)(75e5), [r, s] = (0, i.useState)(6), [p, u] = (0, i.useState)(.1), [g, y] = (0, i.useState)(.5), [f, b] = (0, i.useState)(35e3), [j, v] = (0, i.useState)(8), [k, w] = (0, i.useState)(20), [N, S] = (0, i.useState)(20), [C, _] = (0, i.useState)(8.5), [M, L] = (0, i.useState)(12), [R, z] = (0, i.useState)(10), [I, B] = (0, i.useState)("default"), [W, F] = (0, i.useState)(null), [A, T] = (0, i.useState)(!1), q = e => (0, d.vv)(e, {
                    symbol: !1
                });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(n(), {
                        id: x.__hash,
                        children: x
                    }), (0, a.jsxs)("div", {
                        className: "min-h-screen bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900",
                        children: [(0, a.jsxs)("section", {
                            className: "relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900",
                            children: [(0, a.jsx)("div", {
                                className: "absolute inset-0 z-0",
                                children: (0, a.jsx)("div", {
                                    className: "absolute inset-0 bg-grid-gray-100 bg-[size:20px_20px] opacity-50 dark:bg-grid-gray-800 dark:opacity-30"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "absolute inset-0 z-0",
                                children: [(0, a.jsx)(l.SubtleBackground, {
                                    type: "gentle-parallax",
                                    intensity: "minimal",
                                    className: "absolute left-10 top-20 opacity-8 dark:opacity-4",
                                    children: (0, a.jsx)("div", {
                                        className: "h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl"
                                    })
                                }), (0, a.jsx)(l.SubtleBackground, {
                                    type: "breathing",
                                    intensity: "subtle",
                                    className: "absolute right-10 bottom-20 opacity-8 dark:opacity-4",
                                    children: (0, a.jsx)("div", {
                                        className: "h-40 w-40 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-2xl"
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: "relative z-10 py-20 sm:py-24 lg:py-32",
                                children: (0, a.jsx)("div", {
                                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                                    children: (0, a.jsx)("div", {
                                        className: "grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-1 lg:gap-8 items-center",
                                        children: (0, a.jsxs)("div", {
                                            className: "mx-auto max-w-4xl text-center",
                                            children: [(0, a.jsx)(l.default, {
                                                animation: "gentle-fade-up",
                                                delay: 0,
                                                children: (0, a.jsxs)("div", {
                                                    className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary dark:bg-primaryLight/10 dark:text-primaryLight",
                                                    children: [(0, a.jsx)("svg", {
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        className: "h-4 w-4",
                                                        children: (0, a.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                        })
                                                    }), (0, a.jsx)("span", {
                                                        children: "Advanced Financial Calculator"
                                                    })]
                                                })
                                            }), (0, a.jsx)(l.default, {
                                                animation: "gentle-fade-up",
                                                delay: 100,
                                                children: (0, a.jsxs)("h1", {
                                                    className: "mt-6 sm:mt-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "block",
                                                        children: "Should You"
                                                    }), (0, a.jsx)("span", {
                                                        className: "relative mt-2 block",
                                                        children: (0, a.jsx)("span", {
                                                            className: "relative bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-primaryLight dark:to-secondaryLight",
                                                            children: "Buy or Rent?"
                                                        })
                                                    })]
                                                })
                                            }), (0, a.jsx)(l.default, {
                                                animation: "gentle-fade-up",
                                                delay: 200,
                                                children: (0, a.jsx)("p", {
                                                    className: "mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl max-w-3xl mx-auto",
                                                    children: "Make data-driven property decisions with our advanced calculator. Compare buying vs renting based on current market rates, tax benefits, and investment opportunities in India."
                                                })
                                            }), (0, a.jsx)(l.default, {
                                                animation: "gentle-fade-up",
                                                delay: 300,
                                                children: (0, a.jsxs)("div", {
                                                    className: "mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-2xl mx-auto",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-3 shadow-sm",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "text-2xl font-bold text-primary dark:text-primaryLight",
                                                            children: "8.50%"
                                                        }), (0, a.jsx)("p", {
                                                            className: "text-sm text-gray-600 dark:text-gray-400",
                                                            children: "Avg. Home Loan Rate"
                                                        })]
                                                    }), (0, a.jsxs)("div", {
                                                        className: "rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-3 shadow-sm",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "text-2xl font-bold text-primary dark:text-primaryLight",
                                                            children: "12%"
                                                        }), (0, a.jsx)("p", {
                                                            className: "text-sm text-gray-600 dark:text-gray-400",
                                                            children: "Avg. Investment Return"
                                                        })]
                                                    }), (0, a.jsxs)("div", {
                                                        className: "rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-3 shadow-sm",
                                                        children: [(0, a.jsx)("p", {
                                                            className: "text-2xl font-bold text-primary dark:text-primaryLight",
                                                            children: "6%"
                                                        }), (0, a.jsx)("p", {
                                                            className: "text-sm text-gray-600 dark:text-gray-400",
                                                            children: "Property Appreciation"
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                })
                            })]
                        }), (0, a.jsx)("section", {
                            className: "py-12 lg:py-16",
                            children: (0, a.jsxs)("div", {
                                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                                children: [(0, a.jsx)(l.default, {
                                    animation: "gentle-fade-up",
                                    children: (0, a.jsxs)("div", {
                                        className: "".concat(m.card, " mb-8"),
                                        children: [(0, a.jsx)("h3", {
                                            className: "text-lg font-semibold text-gray-900 dark:text-white mb-4",
                                            children: "Select Your City"
                                        }), (0, a.jsx)("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                                            children: Object.entries({
                                                default: {
                                                    appreciation: 6,
                                                    rentYield: 3.5,
                                                    priceToRent: 25
                                                },
                                                mumbai: {
                                                    appreciation: 7,
                                                    rentYield: 4.15,
                                                    priceToRent: 36
                                                },
                                                delhi: {
                                                    appreciation: 10,
                                                    rentYield: 2.79,
                                                    priceToRent: 30
                                                },
                                                bangalore: {
                                                    appreciation: 12,
                                                    rentYield: 4.45,
                                                    priceToRent: 24
                                                },
                                                chennai: {
                                                    appreciation: 5,
                                                    rentYield: 3.1,
                                                    priceToRent: 23
                                                },
                                                hyderabad: {
                                                    appreciation: 5,
                                                    rentYield: 3.16,
                                                    priceToRent: 22
                                                },
                                                pune: {
                                                    appreciation: 6,
                                                    rentYield: 3.8,
                                                    priceToRent: 21
                                                },
                                                kolkata: {
                                                    appreciation: 7,
                                                    rentYield: 3.5,
                                                    priceToRent: 20
                                                }
                                            }).map(e => {
                                                let [t, r] = e;
                                                return (0, a.jsx)(l.SubtleHover, {
                                                    type: "lift",
                                                    children: (0, a.jsx)("button", {
                                                        onClick: () => {
                                                            B(t), "default" !== t && s(r.appreciation)
                                                        },
                                                        className: "px-4 py-2 rounded-lg font-medium transition-all ".concat(I === t ? "bg-primary text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"),
                                                        children: "default" === t ? "All India" : t.charAt(0).toUpperCase() + t.slice(1)
                                                    })
                                                }, t)
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)(l.default, {
                                    animation: "gentle-fade-up",
                                    delay: 100,
                                    children: (0, a.jsxs)("div", {
                                        className: "".concat(m.card, " sm:p-8 lg:p-10"),
                                        children: [(0, a.jsxs)("div", {
                                            className: "mb-8",
                                            children: [(0, a.jsx)("h2", {
                                                className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white",
                                                children: "Customize Your Analysis"
                                            }), (0, a.jsx)("p", {
                                                className: "mt-2 text-gray-600 dark:text-gray-400",
                                                children: "Adjust the parameters below to match your specific situation. All rates are based on 2024-25 market data."
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "grid lg:grid-cols-2 gap-8",
                                            children: [(0, a.jsxs)("div", {
                                                className: "space-y-6",
                                                children: [(0, a.jsxs)("h3", {
                                                    className: "text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2",
                                                    children: [(0, a.jsx)("svg", {
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        className: "h-5 w-5 text-primary",
                                                        children: (0, a.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                        })
                                                    }), "Property Details"]
                                                }), (0, a.jsxs)("div", {
                                                    className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex justify-between items-center mb-3",
                                                        children: [(0, a.jsx)("label", {
                                                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                            children: "Property Price"
                                                        }), (0, a.jsxs)("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [(0, a.jsxs)("span", {
                                                                className: "text-lg font-bold text-gray-900 dark:text-white",
                                                                children: ["₹", q(e)]
                                                            }), (0, a.jsx)("input", {
                                                                type: "number",
                                                                value: e,
                                                                onChange: e => t(Number(e.target.value)),
                                                                min: "1000000",
                                                                max: "50000000",
                                                                step: "100000",
                                                                className: "w-28 px-2 py-1 text-sm rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                                            })]
                                                        })]
                                                    }), (0, a.jsx)("input", {
                                                        type: "range",
                                                        min: "1000000",
                                                        max: "50000000",
                                                        step: "100000",
                                                        value: e,
                                                        onChange: e => t(Number(e.target.value)),
                                                        className: "w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider-thumb"
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                        children: [(0, a.jsx)("span", {
                                                            children: "₹10L"
                                                        }), (0, a.jsx)("span", {
                                                            children: "₹5Cr"
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex justify-between items-center mb-3",
                                                        children: [(0, a.jsx)("label", {
                                                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                            children: "Annual Property Appreciation"
                                                        }), (0, a.jsxs)("span", {
                                                            className: "text-lg font-bold text-gray-900 dark:text-white",
                                                            children: [r, "%"]
                                                        })]
                                                    }), (0, a.jsx)("input", {
                                                        type: "range",
                                                        min: "0",
                                                        max: "15",
                                                        step: "0.5",
                                                        value: r,
                                                        onChange: e => s(Number(e.target.value)),
                                                        className: "w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider-thumb"
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                        children: [(0, a.jsx)("span", {
                                                            children: "0%"
                                                        }), (0, a.jsx)("span", {
                                                            children: "15%"
                                                        })]
                                                    }), "default" !== I && (0, a.jsxs)("p", {
                                                        className: "text-xs text-gray-600 dark:text-gray-400 mt-2",
                                                        children: ["Based on", " ", I.charAt(0).toUpperCase() + I.slice(1), " ", "historical data"]
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex justify-between items-center mb-3",
                                                        children: [(0, a.jsx)("label", {
                                                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                            children: "Annual Property Tax"
                                                        }), (0, a.jsxs)("span", {
                                                            className: "text-lg font-bold text-gray-900 dark:text-white",
                                                            children: [p, "%"]
                                                        })]
                                                    }), (0, a.jsx)("input", {
                                                        type: "range",
                                                        min: "0",
                                                        max: "1",
                                                        step: "0.05",
                                                        value: p,
                                                        onChange: e => u(Number(e.target.value)),
                                                        className: "w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider-thumb"
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                        children: [(0, a.jsx)("span", {
                                                            children: "0%"
                                                        }), (0, a.jsx)("span", {
                                                            children: "1%"
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex justify-between items-center mb-3",
                                                        children: [(0, a.jsx)("label", {
                                                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                            children: "Annual Maintenance Cost"
                                                        }), (0, a.jsxs)("span", {
                                                            className: "text-lg font-bold text-gray-900 dark:text-white",
                                                            children: [g, "%"]
                                                        })]
                                                    }), (0, a.jsx)("input", {
                                                        type: "range",
                                                        min: "0",
                                                        max: "2",
                                                        step: "0.1",
                                                        value: g,
                                                        onChange: e => y(Number(e.target.value)),
                                                        className: "w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider-thumb"
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                        children: [(0, a.jsx)("span", {
                                                            children: "0%"
                                                        }), (0, a.jsx)("span", {
                                                            children: "2%"
                                                        })]
                                                    }), (0, a.jsx)("p", {
                                                        className: "text-xs text-gray-600 dark:text-gray-400 mt-2",
                                                        children: "Typically ₹2-4 per sq ft per month"
                                                    })]
                                                }), (0, a.jsxs)("h3", {
                                                    className: "text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8 flex items-center gap-2",
                                                    children: [(0, a.jsx)("svg", {
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        className: "h-5 w-5 text-primary",
                                                        children: (0, a.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                        })
                                                    }), "Rental Details"]
                                                }), (0, a.jsxs)("div", {
                                                    className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex justify-between items-center mb-3",
                                                        children: [(0, a.jsx)("label", {
                                                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                            children: "Monthly Rent"
                                                        }), (0, a.jsxs)("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [(0, a.jsxs)("span", {
                                                                className: "text-lg font-bold text-gray-900 dark:text-white",
                                                                children: ["₹", q(f)]
                                                            }), (0, a.jsx)("input", {
                                                                type: "number",
                                                                value: f,
                                                                onChange: e => b(Number(e.target.value)),
                                                                min: "5000",
                                                                max: "200000",
                                                                step: "1000",
                                                                className: "w-28 px-2 py-1 text-sm rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                                            })]
                                                        })]
                                                    }), (0, a.jsx)("input", {
                                                        type: "range",
                                                        min: "5000",
                                                        max: "200000",
                                                        step: "1000",
                                                        value: f,
                                                        onChange: e => b(Number(e.target.value)),
                                                        className: "w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider-thumb"
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                        children: [(0, a.jsx)("span", {
                                                            children: "₹5K"
                                                        }), (0, a.jsx)("span", {
                                                            children: "₹2L"
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex justify-between items-center mb-3",
                                                        children: [(0, a.jsx)("label", {
                                                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                            children: "Annual Rent Increase"
                                                        }), (0, a.jsxs)("span", {
                                                            className: "text-lg font-bold text-gray-900 dark:text-white",
                                                            children: [j, "%"]
                                                        })]
                                                    }), (0, a.jsx)("input", {
                                                        type: "range",
                                                        min: "0",
                                                        max: "15",
                                                        step: "0.5",
                                                        value: j,
                                                        onChange: e => v(Number(e.target.value)),
                                                        className: "w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider-thumb"
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                        children: [(0, a.jsx)("span", {
                                                            children: "0%"
                                                        }), (0, a.jsx)("span", {
                                                            children: "15%"
                                                        })]
                                                    }), (0, a.jsx)("p", {
                                                        className: "text-xs text-gray-600 dark:text-gray-400 mt-2",
                                                        children: "Current market average: 7.5-10% annually"
                                                    })]
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "space-y-6",
                                                children: [(0, a.jsxs)("h3", {
                                                    className: "text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2",
                                                    children: [(0, a.jsx)("svg", {
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        className: "h-5 w-5 text-primary",
                                                        children: (0, a.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        })
                                                    }), "Mortgage Details"]
                                                }), (0, a.jsxs)("div", {
                                                    className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex justify-between items-center mb-3",
                                                        children: [(0, a.jsx)("label", {
                                                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                            children: "Down Payment"
                                                        }), (0, a.jsxs)("span", {
                                                            className: "text-lg font-bold text-gray-900 dark:text-white",
                                                            children: [k, "%"]
                                                        })]
                                                    }), (0, a.jsx)("input", {
                                                        type: "range",
                                                        min: "10",
                                                        max: "80",
                                                        step: "5",
                                                        value: k,
                                                        onChange: e => w(Number(e.target.value)),
                                                        className: "w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider-thumb"
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                        children: [(0, a.jsx)("span", {
                                                            children: "10%"
                                                        }), (0, a.jsx)("span", {
                                                            children: "80%"
                                                        })]
                                                    }), (0, a.jsxs)("p", {
                                                        className: "text-xs text-gray-600 dark:text-gray-400 mt-2",
                                                        children: ["Amount: ₹", q(e * k / 100)]
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex justify-between items-center mb-3",
                                                        children: [(0, a.jsx)("label", {
                                                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                            children: "Loan Term"
                                                        }), (0, a.jsxs)("span", {
                                                            className: "text-lg font-bold text-gray-900 dark:text-white",
                                                            children: [N, " years"]
                                                        })]
                                                    }), (0, a.jsx)("input", {
                                                        type: "range",
                                                        min: "5",
                                                        max: "30",
                                                        step: "1",
                                                        value: N,
                                                        onChange: e => S(Number(e.target.value)),
                                                        className: "w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider-thumb"
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                        children: [(0, a.jsx)("span", {
                                                            children: "5 years"
                                                        }), (0, a.jsx)("span", {
                                                            children: "30 years"
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex justify-between items-center mb-3",
                                                        children: [(0, a.jsx)("label", {
                                                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                            children: "Interest Rate"
                                                        }), (0, a.jsxs)("span", {
                                                            className: "text-lg font-bold text-gray-900 dark:text-white",
                                                            children: [C, "%"]
                                                        })]
                                                    }), (0, a.jsx)("input", {
                                                        type: "range",
                                                        min: "7",
                                                        max: "12",
                                                        step: "0.05",
                                                        value: C,
                                                        onChange: e => _(Number(e.target.value)),
                                                        className: "w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider-thumb"
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                        children: [(0, a.jsx)("span", {
                                                            children: "7%"
                                                        }), (0, a.jsx)("span", {
                                                            children: "12%"
                                                        })]
                                                    }), (0, a.jsx)("p", {
                                                        className: "text-xs text-gray-600 dark:text-gray-400 mt-2",
                                                        children: "Current market range: 7.35% - 10.15%"
                                                    })]
                                                }), (0, a.jsxs)("h3", {
                                                    className: "text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8 flex items-center gap-2",
                                                    children: [(0, a.jsx)("svg", {
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        className: "h-5 w-5 text-primary",
                                                        children: (0, a.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                        })
                                                    }), "Investment Details"]
                                                }), (0, a.jsxs)("div", {
                                                    className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex justify-between items-center mb-3",
                                                        children: [(0, a.jsx)("label", {
                                                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                            children: "Expected Investment Return"
                                                        }), (0, a.jsxs)("span", {
                                                            className: "text-lg font-bold text-gray-900 dark:text-white",
                                                            children: [M, "%"]
                                                        })]
                                                    }), (0, a.jsx)("input", {
                                                        type: "range",
                                                        min: "6",
                                                        max: "18",
                                                        step: "0.5",
                                                        value: M,
                                                        onChange: e => L(Number(e.target.value)),
                                                        className: "w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider-thumb"
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                        children: [(0, a.jsx)("span", {
                                                            children: "6%"
                                                        }), (0, a.jsx)("span", {
                                                            children: "18%"
                                                        })]
                                                    }), (0, a.jsx)("p", {
                                                        className: "text-xs text-gray-600 dark:text-gray-400 mt-2",
                                                        children: "Avg. equity returns (2024): 17.67%"
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "flex justify-between items-center mb-3",
                                                        children: [(0, a.jsx)("label", {
                                                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                            children: "Time Horizon"
                                                        }), (0, a.jsxs)("span", {
                                                            className: "text-lg font-bold text-gray-900 dark:text-white",
                                                            children: [R, " years"]
                                                        })]
                                                    }), (0, a.jsx)("input", {
                                                        type: "range",
                                                        min: "1",
                                                        max: "30",
                                                        step: "1",
                                                        value: R,
                                                        onChange: e => z(Number(e.target.value)),
                                                        className: "w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider-thumb"
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                        children: [(0, a.jsx)("span", {
                                                            children: "1 year"
                                                        }), (0, a.jsx)("span", {
                                                            children: "30 years"
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "pt-6",
                                                    children: (0, a.jsx)(l.SubtleHover, {
                                                        type: "scale",
                                                        children: (0, a.jsx)("button", {
                                                            onClick: () => {
                                                                let t = k / 100 * e,
                                                                    a = e - t,
                                                                    s = (0, c.s9)(a, C, N),
                                                                    n = e * Math.pow(1 + r / 100, R),
                                                                    i = 0;
                                                                if (R < N) {
                                                                    let e = C / 12 / 100,
                                                                        t = 12 * N;
                                                                    i = a * (Math.pow(1 + e, t) - Math.pow(1 + e, 12 * R)) / (Math.pow(1 + e, t) - 1)
                                                                }
                                                                let l = s * R * 12,
                                                                    o = a - i,
                                                                    d = p / 100 * e * R,
                                                                    x = g / 100 * e * R,
                                                                    m = n - i,
                                                                    h = 0,
                                                                    u = f;
                                                                for (let e = 0; e < R; e++) h += 12 * u, u *= 1 + j / 100;
                                                                let y = u / (1 + j / 100),
                                                                    b = t * Math.pow(1 + M / 100, R),
                                                                    v = 0,
                                                                    w = 0;
                                                                u = f;
                                                                for (let e = 0; e < 12 * R; e++) e > 0 && e % 12 == 0 && (u *= 1 + j / 100), (w = s - u) > 0 && (v += w * Math.pow(1 + M / 100 / 12, 12 * R - e));
                                                                let S = b + v,
                                                                    _ = null;
                                                                for (let s = 1; s <= 30; s++)
                                                                    if (e * Math.pow(1 + r / 100, s) - .5 * a > t * Math.pow(1 + M / 100, s)) {
                                                                        _ = s;
                                                                        break
                                                                    } F({
                                                                    buying: {
                                                                        initialInvestment: t,
                                                                        monthlyPayment: s,
                                                                        totalInterestPaid: l - o,
                                                                        futurePropertyValue: n,
                                                                        totalCostOfOwnership: t + l + d + x,
                                                                        netWorth: m
                                                                    },
                                                                    renting: {
                                                                        initialInvestment: 0,
                                                                        monthlyRent: f,
                                                                        futureMonthlyRent: y,
                                                                        totalRentPaid: h,
                                                                        investmentGrowth: S,
                                                                        netWorth: S
                                                                    },
                                                                    comparison: {
                                                                        difference: m - S,
                                                                        favorBuying: m > S,
                                                                        breakEvenYear: _
                                                                    }
                                                                }), T(!0)
                                                            },
                                                            className: "w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform",
                                                            children: (0, a.jsxs)("span", {
                                                                className: "flex items-center justify-center gap-2",
                                                                children: [(0, a.jsx)("svg", {
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    className: "h-5 w-5",
                                                                    children: (0, a.jsx)("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                                    })
                                                                }), "Calculate & Compare"]
                                                            })
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), A && W && (0, a.jsx)(l.default, {
                                            animation: "gentle-fade-up",
                                            children: (0, a.jsxs)("div", {
                                                className: "mt-12 border-t border-gray-200 dark:border-gray-700 pt-12",
                                                children: [(0, a.jsx)("h3", {
                                                    className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center",
                                                    children: "Your Financial Analysis"
                                                }), (0, a.jsxs)("div", {
                                                    className: "grid md:grid-cols-2 gap-6 mb-8",
                                                    children: [(0, a.jsx)(l.default, {
                                                        animation: "gentle-slide-in",
                                                        delay: 100,
                                                        children: (0, a.jsxs)("div", {
                                                            className: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 shadow-lg",
                                                            children: [(0, a.jsxs)("h4", {
                                                                className: "text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2",
                                                                children: [(0, a.jsx)("svg", {
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    className: "h-6 w-6 text-blue-600 dark:text-blue-400",
                                                                    children: (0, a.jsx)("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                                    })
                                                                }), "Buying Summary"]
                                                            }), (0, a.jsxs)("div", {
                                                                className: "space-y-3",
                                                                children: [(0, a.jsxs)("div", {
                                                                    className: "flex justify-between items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",
                                                                    children: [(0, a.jsx)("span", {
                                                                        className: "text-gray-600 dark:text-gray-400",
                                                                        children: "Initial Investment:"
                                                                    }), (0, a.jsxs)("span", {
                                                                        className: "font-semibold text-gray-900 dark:text-white",
                                                                        children: ["₹", q(W.buying.initialInvestment)]
                                                                    })]
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "flex justify-between items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",
                                                                    children: [(0, a.jsx)("span", {
                                                                        className: "text-gray-600 dark:text-gray-400",
                                                                        children: "Monthly Payment:"
                                                                    }), (0, a.jsxs)("span", {
                                                                        className: "font-semibold text-gray-900 dark:text-white",
                                                                        children: ["₹", q(W.buying.monthlyPayment)]
                                                                    })]
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "flex justify-between items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",
                                                                    children: [(0, a.jsx)("span", {
                                                                        className: "text-gray-600 dark:text-gray-400",
                                                                        children: "Total Interest Paid:"
                                                                    }), (0, a.jsxs)("span", {
                                                                        className: "font-semibold text-gray-900 dark:text-white",
                                                                        children: ["₹", q(W.buying.totalInterestPaid)]
                                                                    })]
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "flex justify-between items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",
                                                                    children: [(0, a.jsxs)("span", {
                                                                        className: "text-gray-600 dark:text-gray-400",
                                                                        children: ["Property Value After ", R, " Years:"]
                                                                    }), (0, a.jsxs)("span", {
                                                                        className: "font-semibold text-gray-900 dark:text-white",
                                                                        children: ["₹", q(W.buying.futurePropertyValue)]
                                                                    })]
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "flex justify-between items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",
                                                                    children: [(0, a.jsx)("span", {
                                                                        className: "text-gray-600 dark:text-gray-400",
                                                                        children: "Total Cost of Ownership:"
                                                                    }), (0, a.jsxs)("span", {
                                                                        className: "font-semibold text-gray-900 dark:text-white",
                                                                        children: ["₹", q(W.buying.totalCostOfOwnership)]
                                                                    })]
                                                                }), (0, a.jsx)("div", {
                                                                    className: "border-t border-blue-200 dark:border-blue-700 pt-3 mt-3",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "flex justify-between items-center bg-white/70 dark:bg-gray-800/70 rounded-lg p-3",
                                                                        children: [(0, a.jsxs)("span", {
                                                                            className: "text-lg font-semibold text-gray-900 dark:text-white",
                                                                            children: ["Net Worth After ", R, " Years:"]
                                                                        }), (0, a.jsxs)("span", {
                                                                            className: "text-xl font-bold text-blue-600 dark:text-blue-400",
                                                                            children: ["₹", q(W.buying.netWorth)]
                                                                        })]
                                                                    })
                                                                })]
                                                            })]
                                                        })
                                                    }), (0, a.jsx)(l.default, {
                                                        animation: "gentle-slide-right",
                                                        delay: 200,
                                                        children: (0, a.jsxs)("div", {
                                                            className: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 shadow-lg",
                                                            children: [(0, a.jsxs)("h4", {
                                                                className: "text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2",
                                                                children: [(0, a.jsx)("svg", {
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    className: "h-6 w-6 text-green-600 dark:text-green-400",
                                                                    children: (0, a.jsx)("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                                    })
                                                                }), "Renting Summary"]
                                                            }), (0, a.jsxs)("div", {
                                                                className: "space-y-3",
                                                                children: [(0, a.jsxs)("div", {
                                                                    className: "flex justify-between items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",
                                                                    children: [(0, a.jsx)("span", {
                                                                        className: "text-gray-600 dark:text-gray-400",
                                                                        children: "Initial Investment:"
                                                                    }), (0, a.jsx)("span", {
                                                                        className: "font-semibold text-gray-900 dark:text-white",
                                                                        children: "₹0"
                                                                    })]
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "flex justify-between items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",
                                                                    children: [(0, a.jsx)("span", {
                                                                        className: "text-gray-600 dark:text-gray-400",
                                                                        children: "Initial Monthly Rent:"
                                                                    }), (0, a.jsxs)("span", {
                                                                        className: "font-semibold text-gray-900 dark:text-white",
                                                                        children: ["₹", q(W.renting.monthlyRent)]
                                                                    })]
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "flex justify-between items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",
                                                                    children: [(0, a.jsxs)("span", {
                                                                        className: "text-gray-600 dark:text-gray-400",
                                                                        children: ["Monthly Rent After ", R, " Years:"]
                                                                    }), (0, a.jsxs)("span", {
                                                                        className: "font-semibold text-gray-900 dark:text-white",
                                                                        children: ["₹", q(W.renting.futureMonthlyRent)]
                                                                    })]
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "flex justify-between items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",
                                                                    children: [(0, a.jsx)("span", {
                                                                        className: "text-gray-600 dark:text-gray-400",
                                                                        children: "Total Rent Paid:"
                                                                    }), (0, a.jsxs)("span", {
                                                                        className: "font-semibold text-gray-900 dark:text-white",
                                                                        children: ["₹", q(W.renting.totalRentPaid)]
                                                                    })]
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "flex justify-between items-center p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors",
                                                                    children: [(0, a.jsx)("span", {
                                                                        className: "text-gray-600 dark:text-gray-400",
                                                                        children: "Investment Growth:"
                                                                    }), (0, a.jsxs)("span", {
                                                                        className: "font-semibold text-gray-900 dark:text-white",
                                                                        children: ["₹", q(W.renting.investmentGrowth)]
                                                                    })]
                                                                }), (0, a.jsx)("div", {
                                                                    className: "border-t border-green-200 dark:border-green-700 pt-3 mt-3",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "flex justify-between items-center bg-white/70 dark:bg-gray-800/70 rounded-lg p-3",
                                                                        children: [(0, a.jsxs)("span", {
                                                                            className: "text-lg font-semibold text-gray-900 dark:text-white",
                                                                            children: ["Net Worth After ", R, " Years:"]
                                                                        }), (0, a.jsxs)("span", {
                                                                            className: "text-xl font-bold text-green-600 dark:text-green-400",
                                                                            children: ["₹", q(W.renting.netWorth)]
                                                                        })]
                                                                    })
                                                                })]
                                                            })]
                                                        })
                                                    })]
                                                }), (0, a.jsx)(l.default, {
                                                    animation: "gentle-scale",
                                                    delay: 300,
                                                    children: (0, a.jsxs)("div", {
                                                        className: "rounded-2xl p-8 shadow-xl ".concat(W.comparison.favorBuying ? "bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30" : "bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30"),
                                                        children: [(0, a.jsx)("h4", {
                                                            className: "text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center",
                                                            children: "Final Verdict"
                                                        }), (0, a.jsxs)("div", {
                                                            className: "text-center",
                                                            children: [(0, a.jsxs)("p", {
                                                                className: "text-gray-700 dark:text-gray-300 mb-4",
                                                                children: ["After ", R, " years, the financial difference is:"]
                                                            }), (0, a.jsxs)("div", {
                                                                className: "bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mb-6",
                                                                children: [(0, a.jsxs)("p", {
                                                                    className: "text-3xl sm:text-4xl font-bold ".concat(W.comparison.favorBuying ? "text-blue-600 dark:text-blue-400" : "text-green-600 dark:text-green-400"),
                                                                    children: ["₹", q(Math.abs(W.comparison.difference))]
                                                                }), (0, a.jsxs)("p", {
                                                                    className: "text-lg mt-2 text-gray-700 dark:text-gray-300",
                                                                    children: ["in favor of", " ", (0, a.jsx)("span", {
                                                                        className: "font-bold",
                                                                        children: W.comparison.favorBuying ? "Buying" : "Renting"
                                                                    })]
                                                                })]
                                                            }), W.comparison.breakEvenYear && (0, a.jsx)("div", {
                                                                className: "bg-white/60 dark:bg-gray-800/60 rounded-lg px-4 py-2 inline-block mb-6",
                                                                children: (0, a.jsxs)("p", {
                                                                    className: "text-gray-700 dark:text-gray-300",
                                                                    children: [(0, a.jsx)("svg", {
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        className: "inline h-5 w-5 mr-1 text-primary",
                                                                        children: (0, a.jsx)("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                        })
                                                                    }), "Break-even period:", " ", (0, a.jsxs)("span", {
                                                                        className: "font-semibold",
                                                                        children: [W.comparison.breakEvenYear, " years"]
                                                                    })]
                                                                })
                                                            })]
                                                        }), (0, a.jsx)("div", {
                                                            className: "mt-6",
                                                            children: (0, a.jsx)("p", {
                                                                className: "text-gray-700 dark:text-gray-300 text-center leading-relaxed",
                                                                children: W.comparison.favorBuying ? W.comparison.difference > .1 * W.buying.totalCostOfOwnership ? "\uD83D\uDCCA Buying appears to be the stronger financial choice based on your inputs. The property appreciation and equity building outweigh the rental costs over your investment horizon." : "⚖️ The financial difference between buying and renting is minimal. Your decision should factor in lifestyle preferences, job stability, and personal circumstances." : W.comparison.difference < -(.1 * W.renting.totalRentPaid) ? "\uD83D\uDCB0 Renting and investing the difference appears more financially advantageous. The flexibility and investment returns outperform property ownership in this scenario." : "⚖️ The financial outcomes are remarkably similar. Consider non-financial factors like stability, customization freedom, and maintenance responsibilities."
                                                            })
                                                        })]
                                                    })
                                                }), (0, a.jsx)(l.default, {
                                                    animation: "gentle-fade-up",
                                                    delay: 400,
                                                    children: (0, a.jsxs)("div", {
                                                        className: "mt-8",
                                                        children: [(0, a.jsx)("h4", {
                                                            className: "text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center",
                                                            children: "Net Worth Visualization"
                                                        }), (0, a.jsx)("div", {
                                                            className: "bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-inner",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "space-y-6",
                                                                children: [(0, a.jsxs)("div", {
                                                                    children: [(0, a.jsxs)("div", {
                                                                        className: "flex justify-between mb-2",
                                                                        children: [(0, a.jsxs)("span", {
                                                                            className: "font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2",
                                                                            children: [(0, a.jsx)("span", {
                                                                                className: "h-3 w-3 rounded-full bg-blue-600"
                                                                            }), "Buying"]
                                                                        }), (0, a.jsxs)("span", {
                                                                            className: "font-bold text-gray-900 dark:text-white",
                                                                            children: ["₹", q(W.buying.netWorth)]
                                                                        })]
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden",
                                                                        children: (0, a.jsx)("div", {
                                                                            style: {
                                                                                width: "".concat(W.buying.netWorth / Math.max(W.buying.netWorth, W.renting.netWorth) * 100, "%")
                                                                            },
                                                                            className: "bg-gradient-to-r from-blue-500 to-blue-600 h-6 rounded-full transition-all duration-1000 ease-out"
                                                                        })
                                                                    })]
                                                                }), (0, a.jsxs)("div", {
                                                                    children: [(0, a.jsxs)("div", {
                                                                        className: "flex justify-between mb-2",
                                                                        children: [(0, a.jsxs)("span", {
                                                                            className: "font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2",
                                                                            children: [(0, a.jsx)("span", {
                                                                                className: "h-3 w-3 rounded-full bg-green-600"
                                                                            }), "Renting"]
                                                                        }), (0, a.jsxs)("span", {
                                                                            className: "font-bold text-gray-900 dark:text-white",
                                                                            children: ["₹", q(W.renting.netWorth)]
                                                                        })]
                                                                    }), (0, a.jsx)("div", {
                                                                        className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden",
                                                                        children: (0, a.jsx)("div", {
                                                                            style: {
                                                                                width: "".concat(W.renting.netWorth / Math.max(W.buying.netWorth, W.renting.netWorth) * 100, "%")
                                                                            },
                                                                            className: "bg-gradient-to-r from-green-500 to-green-600 h-6 rounded-full transition-all duration-1000 ease-out"
                                                                        })
                                                                    })]
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, a.jsx)("section", {
                            className: "py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800",
                            children: (0, a.jsxs)("div", {
                                className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
                                children: [(0, a.jsx)(l.default, {
                                    animation: "gentle-fade-up",
                                    children: (0, a.jsx)("h2", {
                                        className: "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12",
                                        children: "Key Factors to Consider"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "grid md:grid-cols-3 gap-6 lg:gap-8",
                                    children: [(0, a.jsx)(l.default, {
                                        animation: "gentle-fade-up",
                                        delay: 100,
                                        children: (0, a.jsx)(l.SubtleHover, {
                                            type: "lift",
                                            children: (0, a.jsxs)("div", {
                                                className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg h-full",
                                                children: [(0, a.jsx)("div", {
                                                    className: "w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl flex items-center justify-center mb-5",
                                                    children: (0, a.jsx)("svg", {
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        className: "w-7 h-7 text-blue-600 dark:text-blue-400",
                                                        children: (0, a.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        })
                                                    })
                                                }), (0, a.jsx)("h3", {
                                                    className: "text-xl font-semibold text-gray-900 dark:text-white mb-4",
                                                    children: "Financial Considerations"
                                                }), (0, a.jsxs)("ul", {
                                                    className: "space-y-3 text-gray-600 dark:text-gray-300",
                                                    children: [(0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Down payment requirement (20-30% typical)"
                                                        })]
                                                    }), (0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Monthly EMI vs rent comparison"
                                                        })]
                                                    }), (0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Tax benefits up to ₹3.5L annually"
                                                        })]
                                                    }), (0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Maintenance costs (₹2-4/sq ft)"
                                                        })]
                                                    }), (0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Investment opportunity cost"
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })
                                    }), (0, a.jsx)(l.default, {
                                        animation: "gentle-fade-up",
                                        delay: 200,
                                        children: (0, a.jsx)(l.SubtleHover, {
                                            type: "lift",
                                            children: (0, a.jsxs)("div", {
                                                className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg h-full",
                                                children: [(0, a.jsx)("div", {
                                                    className: "w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-xl flex items-center justify-center mb-5",
                                                    children: (0, a.jsx)("svg", {
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        className: "w-7 h-7 text-green-600 dark:text-green-400",
                                                        children: (0, a.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                        })
                                                    })
                                                }), (0, a.jsx)("h3", {
                                                    className: "text-xl font-semibold text-gray-900 dark:text-white mb-4",
                                                    children: "Lifestyle Factors"
                                                }), (0, a.jsxs)("ul", {
                                                    className: "space-y-3 text-gray-600 dark:text-gray-300",
                                                    children: [(0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Flexibility to relocate for career"
                                                        })]
                                                    }), (0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Job stability and location certainty"
                                                        })]
                                                    }), (0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Freedom to customize your space"
                                                        })]
                                                    }), (0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Maintenance responsibilities"
                                                        })]
                                                    }), (0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Growing family space needs"
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })
                                    }), (0, a.jsx)(l.default, {
                                        animation: "gentle-fade-up",
                                        delay: 300,
                                        children: (0, a.jsx)(l.SubtleHover, {
                                            type: "lift",
                                            children: (0, a.jsxs)("div", {
                                                className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg h-full",
                                                children: [(0, a.jsx)("div", {
                                                    className: "w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl flex items-center justify-center mb-5",
                                                    children: (0, a.jsx)("svg", {
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        className: "w-7 h-7 text-purple-600 dark:text-purple-400",
                                                        children: (0, a.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                        })
                                                    })
                                                }), (0, a.jsx)("h3", {
                                                    className: "text-xl font-semibold text-gray-900 dark:text-white mb-4",
                                                    children: "Market Considerations"
                                                }), (0, a.jsxs)("ul", {
                                                    className: "space-y-3 text-gray-600 dark:text-gray-300",
                                                    children: [(0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Local property appreciation rates"
                                                        })]
                                                    }), (0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Rental yield (2.79% - 4.45%)"
                                                        })]
                                                    }), (0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Interest rate trends (7.35%-10.15%)"
                                                        })]
                                                    }), (0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Supply-demand dynamics"
                                                        })]
                                                    }), (0, a.jsxs)("li", {
                                                        className: "flex items-start",
                                                        children: [(0, a.jsx)("svg", {
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            className: "w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0",
                                                            children: (0, a.jsx)("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            })
                                                        }), (0, a.jsx)("span", {
                                                            children: "Infrastructure development"
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsx)("section", {
                            className: "py-16 lg:py-20 bg-white dark:bg-gray-900",
                            children: (0, a.jsxs)("div", {
                                className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
                                children: [(0, a.jsx)(l.default, {
                                    animation: "gentle-fade-up",
                                    children: (0, a.jsxs)("div", {
                                        className: "text-center mb-12",
                                        children: [(0, a.jsx)("h2", {
                                            className: "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4",
                                            children: "City-wise Market Analysis"
                                        }), (0, a.jsx)("p", {
                                            className: "text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",
                                            children: "Current real estate metrics across major Indian cities based on 2024-25 data"
                                        })]
                                    })
                                }), (0, a.jsx)(l.default, {
                                    animation: "gentle-fade-up",
                                    delay: 100,
                                    children: (0, a.jsxs)("div", {
                                        className: "bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden",
                                        children: [(0, a.jsx)("div", {
                                            className: "md:hidden bg-blue-50 dark:bg-blue-900/20 px-4 py-3 border-b border-gray-200 dark:border-gray-700",
                                            children: (0, a.jsxs)("div", {
                                                className: "flex items-center text-blue-700 dark:text-blue-300",
                                                children: [(0, a.jsx)("svg", {
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    className: "w-4 h-4 mr-2 flex-shrink-0",
                                                    children: (0, a.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    })
                                                }), (0, a.jsx)("span", {
                                                    className: "text-xs",
                                                    children: "Swipe left to view all columns"
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "overflow-x-auto",
                                            children: (0, a.jsxs)("table", {
                                                className: "w-full min-w-[600px]",
                                                children: [(0, a.jsx)("thead", {
                                                    children: (0, a.jsxs)("tr", {
                                                        className: "bg-gray-50 dark:bg-gray-700",
                                                        children: [(0, a.jsx)("th", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap",
                                                            children: "City"
                                                        }), (0, a.jsx)("th", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap",
                                                            children: "Appreciation (YoY)"
                                                        }), (0, a.jsx)("th", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap",
                                                            children: "Rental Yield"
                                                        }), (0, a.jsx)("th", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap",
                                                            children: "P/R Ratio"
                                                        }), (0, a.jsx)("th", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap",
                                                            children: "Market Trend"
                                                        })]
                                                    })
                                                }), (0, a.jsxs)("tbody", {
                                                    className: "divide-y divide-gray-200 dark:divide-gray-700",
                                                    children: [(0, a.jsxs)("tr", {
                                                        className: "hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                                                        children: [(0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "flex items-center",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "w-2 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mr-3"
                                                                }), (0, a.jsxs)("div", {
                                                                    children: [(0, a.jsx)("p", {
                                                                        className: "text-sm font-semibold text-gray-900 dark:text-white",
                                                                        children: "Mumbai"
                                                                    }), (0, a.jsx)("p", {
                                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                                        children: "Financial Capital"
                                                                    })]
                                                                })]
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "7%"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "4.15%"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "33-38"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
                                                                children: "Stable"
                                                            })
                                                        })]
                                                    }), (0, a.jsxs)("tr", {
                                                        className: "hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                                                        children: [(0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "flex items-center",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "w-2 h-8 bg-gradient-to-b from-red-400 to-red-600 rounded-full mr-3"
                                                                }), (0, a.jsxs)("div", {
                                                                    children: [(0, a.jsx)("p", {
                                                                        className: "text-sm font-semibold text-gray-900 dark:text-white",
                                                                        children: "Delhi NCR"
                                                                    }), (0, a.jsx)("p", {
                                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                                        children: "National Capital"
                                                                    })]
                                                                })]
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "10%"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "2.79%"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "27-32"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
                                                                children: "Growing"
                                                            })
                                                        })]
                                                    }), (0, a.jsxs)("tr", {
                                                        className: "hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                                                        children: [(0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "flex items-center",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"
                                                                }), (0, a.jsxs)("div", {
                                                                    children: [(0, a.jsx)("p", {
                                                                        className: "text-sm font-semibold text-gray-900 dark:text-white",
                                                                        children: "Bangalore"
                                                                    }), (0, a.jsx)("p", {
                                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                                        children: "IT Capital"
                                                                    })]
                                                                })]
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "12%"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "4.45%"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "22-26"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
                                                                children: "Growing"
                                                            })
                                                        })]
                                                    }), (0, a.jsxs)("tr", {
                                                        className: "hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                                                        children: [(0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "flex items-center",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full mr-3"
                                                                }), (0, a.jsxs)("div", {
                                                                    children: [(0, a.jsx)("p", {
                                                                        className: "text-sm font-semibold text-gray-900 dark:text-white",
                                                                        children: "Chennai"
                                                                    }), (0, a.jsx)("p", {
                                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                                        children: "Detroit of India"
                                                                    })]
                                                                })]
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "5%"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "3.10%"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "20-25"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
                                                                children: "Stable"
                                                            })
                                                        })]
                                                    }), (0, a.jsxs)("tr", {
                                                        className: "hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                                                        children: [(0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "flex items-center",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "w-2 h-8 bg-gradient-to-b from-green-400 to-green-600 rounded-full mr-3"
                                                                }), (0, a.jsxs)("div", {
                                                                    children: [(0, a.jsx)("p", {
                                                                        className: "text-sm font-semibold text-gray-900 dark:text-white",
                                                                        children: "Pune"
                                                                    }), (0, a.jsx)("p", {
                                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                                        children: "Oxford of East"
                                                                    })]
                                                                })]
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "6%"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "3.80%"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "18-23"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
                                                                children: "Growing"
                                                            })
                                                        })]
                                                    }), (0, a.jsxs)("tr", {
                                                        className: "hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                                                        children: [(0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap",
                                                            children: (0, a.jsxs)("div", {
                                                                className: "flex items-center",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "w-2 h-8 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full mr-3"
                                                                }), (0, a.jsxs)("div", {
                                                                    children: [(0, a.jsx)("p", {
                                                                        className: "text-sm font-semibold text-gray-900 dark:text-white",
                                                                        children: "Hyderabad"
                                                                    }), (0, a.jsx)("p", {
                                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                                        children: "Cyberabad"
                                                                    })]
                                                                })]
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "5%"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "3.16%"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "text-sm font-medium text-gray-900 dark:text-white",
                                                                children: "20-24"
                                                            })
                                                        }), (0, a.jsx)("td", {
                                                            className: "px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center",
                                                            children: (0, a.jsx)("span", {
                                                                className: "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
                                                                children: "Growing"
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "bg-gray-50 dark:bg-gray-700/50 px-6 py-4",
                                            children: (0, a.jsxs)("div", {
                                                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: [(0, a.jsx)("p", {
                                                        className: "font-medium",
                                                        children: "⚠️ P/R Ratio = Property Price \xf7 (Monthly Rent \xd7 12)"
                                                    }), (0, a.jsx)("p", {
                                                        className: "text-xs mt-1",
                                                        children: "Higher ratio indicates renting may be more economical short-term"
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                                    children: "Data: 2024-25 Market Reports"
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, a.jsx)(o.default, {
                            title: "Frequently Asked Questions",
                            subtitle: "Everything you need to know about buying vs renting decisions",
                            faqs: h
                        }), (0, a.jsxs)("section", {
                            className: "py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-primary to-secondary dark:from-primaryDark dark:to-secondaryDark",
                            children: [(0, a.jsx)("div", {
                                className: "absolute inset-0 z-0",
                                children: (0, a.jsx)("div", {
                                    className: "absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "absolute inset-0 z-0",
                                children: [(0, a.jsx)(l.SubtleBackground, {
                                    type: "float",
                                    intensity: "minimal",
                                    className: "absolute left-4 top-4 sm:left-10 sm:top-10 opacity-10",
                                    children: (0, a.jsx)("div", {
                                        className: "h-32 w-32 sm:h-48 sm:w-48 lg:h-64 lg:w-64 rounded-full bg-white/10 blur-3xl"
                                    })
                                }), (0, a.jsx)(l.SubtleBackground, {
                                    type: "breathing",
                                    intensity: "subtle",
                                    className: "absolute right-4 bottom-4 sm:right-10 sm:bottom-10 opacity-10",
                                    children: (0, a.jsx)("div", {
                                        className: "h-40 w-40 sm:h-60 sm:w-60 lg:h-80 lg:w-80 rounded-full bg-white/10 blur-3xl"
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10",
                                children: [(0, a.jsx)(l.default, {
                                    animation: "gentle-fade-up",
                                    children: (0, a.jsx)("h2", {
                                        className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6",
                                        children: "Ready to Make Your Property Decision?"
                                    })
                                }), (0, a.jsx)(l.default, {
                                    animation: "gentle-fade-up",
                                    delay: 100,
                                    children: (0, a.jsx)("p", {
                                        className: "text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed",
                                        children: "Whether you choose to buy or rent, Credifyy helps you secure the best home loans with expert guidance tailored to your financial goals."
                                    })
                                }), (0, a.jsx)(l.default, {
                                    animation: "gentle-fade-up",
                                    delay: 200,
                                    children: (0, a.jsxs)("div", {
                                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                                        children: [(0, a.jsx)(l.SubtleHover, {
                                            type: "scale",
                                            children: (0, a.jsxs)("a", {
                                                href: "https://pulse.Credifyy.com/users/sign-up/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2",
                                                children: [(0, a.jsx)("svg", {
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    className: "h-5 w-5",
                                                    children: (0, a.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                    })
                                                }), "Explore Home Loans"]
                                            })
                                        }), (0, a.jsx)(l.SubtleHover, {
                                            type: "scale",
                                            children: (0, a.jsxs)("a", {
                                                href: "https://pulse.Credifyy.com/users/sign-up/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center gap-2",
                                                children: [(0, a.jsx)("svg", {
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    className: "h-5 w-5",
                                                    children: (0, a.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                    })
                                                }), "Get Expert Advice"]
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)(l.default, {
                                    animation: "gentle-fade-up",
                                    delay: 300,
                                    children: (0, a.jsxs)("div", {
                                        className: "mt-12 flex flex-wrap items-center justify-center gap-6 text-white/80",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, a.jsx)("svg", {
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                className: "h-5 w-5",
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                })
                                            }), (0, a.jsx)("span", {
                                                className: "text-sm",
                                                children: "100% Secure"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, a.jsx)("svg", {
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                className: "h-5 w-5",
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                })
                                            }), (0, a.jsx)("span", {
                                                className: "text-sm",
                                                children: "Quick Approval"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, a.jsx)("svg", {
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                className: "h-5 w-5",
                                                children: (0, a.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                })
                                            }), (0, a.jsx)("span", {
                                                className: "text-sm",
                                                children: "Expert Support"
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "sr-only",
                            children: [(0, a.jsx)("h1", {
                                children: "Buying vs Renting Calculator India 2025"
                            }), (0, a.jsx)("p", {
                                children: "Compare buying vs renting property in India with our advanced financial calculator. Updated with 2024-25 market data including current home loan rates (7.35%-10.15%), property appreciation rates, rental yields, and tax benefits under Section 80C and 24(b)."
                            }), (0, a.jsx)("p", {
                                children: "Make informed property decisions for major Indian cities including Mumbai, Delhi NCR, Bangalore, Chennai, Pune, Hyderabad, and Kolkata. Our calculator factors in down payment, EMI, property appreciation, rental inflation, investment returns, and tax savings."
                            })]
                        })]
                    })]
                })
            }
        },
        8359: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 5511))
        },
        8375: () => {},
        9137: (e, t, r) => {
            "use strict";
            e.exports = r(2269).style
        },
        9775: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                SubtleBackground: () => l,
                SubtleHover: () => i,
                default: () => n
            });
            var a = r(5155),
                s = r(2115);

            function n(e) {
                let {
                    children: t,
                    animation: r = "gentle-fade-up",
                    delay: n = 0,
                    threshold: i = .1,
                    once: l = !0,
                    className: o = "",
                    disabled: d = !1
                } = e, {
                    ref: c,
                    isVisible: x,
                    isReduced: m,
                    isMobile: h
                } = function() {
                    let {
                        threshold: e = .1,
                        delay: t = 0,
                        once: r = !0,
                        disabled: a = !1
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [n, i] = (0, s.useState)(!1), [l, o] = (0, s.useState)(!1), d = (0, s.useRef)(null), c = (0, s.useRef)(null);
                    return (0, s.useEffect)(() => {
                        o(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
                        let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
                            t = () => o(e.matches);
                        return e.addEventListener("change", t), () => e.removeEventListener("change", t)
                    }, []), (0, s.useEffect)(() => {
                        if (a || l || !d.current) return void i(!0);
                        let s = d.current;
                        return c.current = new IntersectionObserver(e => {
                            let [a] = e;
                            a.isIntersecting ? (setTimeout(() => {
                                i(!0)
                            }, t), r && c.current && c.current.unobserve(s)) : r || i(!1)
                        }, {
                            threshold: e,
                            rootMargin: "50px 0px"
                        }), c.current.observe(s), () => {
                            c.current && c.current.disconnect()
                        }
                    }, [e, t, r, a, l]), {
                        ref: d,
                        isVisible: n || l || a,
                        isReduced: l,
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    }
                }({
                    threshold: i,
                    delay: n,
                    once: l,
                    disabled: d
                });
                return (0, a.jsx)("div", {
                    ref: c,
                    className: "".concat((() => {
                        if (m || d) return "opacity-100 transform-none";
                        let e = "transition-all duration-500 ease-out",
                            t = h ? "mobile:" : "";
                        if (x) return "".concat(e, " opacity-100 translate-y-0 translate-x-0 scale-100");
                        switch (r) {
                            case "gentle-fade-up":
                                return "".concat(e, " opacity-0 ").concat(t, "translate-y-2 translate-y-4");
                            case "gentle-slide-in":
                                return "".concat(e, " opacity-0 ").concat(t, "-translate-x-2 -translate-x-4");
                            case "gentle-slide-right":
                                return "".concat(e, " opacity-0 ").concat(t, "translate-x-2 translate-x-4");
                            case "gentle-scale":
                                return "".concat(e, " opacity-0 scale-98");
                            default:
                                return "".concat(e, " opacity-0 translate-y-4")
                        }
                    })(), " ").concat(o),
                    style: {
                        animationDelay: m ? "0ms" : "".concat(n, "ms")
                    },
                    children: t
                })
            }

            function i(e) {
                let {
                    children: t,
                    type: r = "lift",
                    className: s = "",
                    disabled: n = !1
                } = e;
                return n ? (0, a.jsx)("div", {
                    className: s,
                    children: t
                }) : (0, a.jsx)("div", {
                    className: "".concat({
                        lift: "transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:will-change-transform",
                        glow: "transition-shadow duration-300 ease-out hover:shadow-lg hover:shadow-primary/10",
                        scale: "transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
                    } [r], " ").concat(s),
                    style: {
                        backfaceVisibility: "hidden"
                    },
                    children: t
                })
            }

            function l(e) {
                let {
                    children: t,
                    type: r = "float",
                    intensity: s = "subtle",
                    className: n = "",
                    disabled: i = !1,
                    style: l = {}
                } = e;
                return i ? (0, a.jsx)("div", {
                    className: n,
                    style: l,
                    children: t
                }) : (0, a.jsx)("div", {
                    className: "".concat({
                        float: "animate-gentle-float",
                        breathing: "animate-gentle-breathing",
                        "gentle-parallax": "transform-gpu will-change-transform"
                    } [r], " ").concat(n),
                    style: {
                        "--float-distance": {
                            minimal: "1px",
                            subtle: "2px",
                            gentle: "4px"
                        } [s],
                        animationDuration: "float" === r ? "8s" : "4s",
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                        ...l
                    },
                    children: t
                })
            }
        }
    },
    e => {
        e.O(0, [5211, 8441, 5964, 7358], () => e(e.s = 8359)), _N_E = e.O()
    }
]);