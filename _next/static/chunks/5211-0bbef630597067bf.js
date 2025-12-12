"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5211],
    {
        3999: (t, n, e) => {
            function r(t) {
                return Number(t).toLocaleString("en-IN");
            }
            function o(t) {
                let n =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { symbol: e = !0, decimals: r = 0 } = n,
                    o = Number(t).toLocaleString("en-IN", {
                        minimumFractionDigits: r,
                        maximumFractionDigits: r,
                    });
                return e ? "₹".concat(o) : o;
            }
            function a(t) {
                let n =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                return "".concat(Number(t).toFixed(n), "%");
            }
            function i() {
                for (var t = arguments.length, n = Array(t), e = 0; e < t; e++)
                    n[e] = arguments[e];
                return n.filter(Boolean).join(" ").trim();
            }
            e.d(n, { Ee: () => a, cn: () => i, mC: () => r, vv: () => o });
        },
        6429: (t, n, e) => {
            e.d(n, { CC: () => i, LP: () => o, Zz: () => a, s9: () => r });
            let r = (t, n, e) => {
                let r = n / 12 / 100,
                    o = 12 * e;
                return 0 === r
                    ? t / o
                    : Math.round(
                        (t * r * Math.pow(1 + r, o)) / (Math.pow(1 + r, o) - 1)
                    );
            },
                o = (t, n, e) => Math.round(12 * e * n - t),
                a = (t, n, e) => Math.round(12 * e * n),
                i = (t, n, e) => {
                    let o = n / 12 / 100,
                        a = 12 * e,
                        i = r(t, n, e),
                        u = [],
                        l = t,
                        c = 0,
                        h = 0;
                    for (let t = 1; t <= a; t++) {
                        let n = Math.round(l * o),
                            e = i - n,
                            r = Math.max(0, l - e);
                        (c += n),
                            (h += e),
                            u.push({
                                month: ((t - 1) % 12) + 1,
                                year: Math.floor((t - 1) / 12) + 1,
                                openingBalance: Math.round(l),
                                emi: i,
                                principal: e,
                                interest: n,
                                closingBalance: Math.round(r),
                                totalInterestPaid: c,
                                totalPrincipalPaid: h,
                            }),
                            (l = r);
                    }
                    return u;
                };
        },
    },
]);
