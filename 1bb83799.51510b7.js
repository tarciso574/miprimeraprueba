(window.webpackJsonp = window.webpackJsonp || []).push([[33], {
    1126: function(t, e, r) {
        "use strict";
        var n = r(890);
        r.n(n).a
    },
    1127: function(t, e, r) {
        (e = r(25)(!1)).push([t.i, ".filters-date[data-v-508e1f6c]{display:flex;justify-content:flex-end;width:100%}.filters-date>div[data-v-508e1f6c]{display:flex}.filters-date label[data-v-508e1f6c]{margin-right:10px;padding-top:4px}.new-option-button-view[data-v-508e1f6c]{margin-top:-1px}.new-option-button-view svg[data-v-508e1f6c]{font-size:12px;margin-left:5px}[data-v-508e1f6c] .button-reports .dropdown-menu{left:-30%!important}[data-v-508e1f6c] .nav-pills .active{font-weight:700}[data-v-508e1f6c] .row{width:100%;margin:0}.table-clean thead th[data-v-508e1f6c]{border-top:none}.table thead th[data-v-508e1f6c]{vertical-align:top}.table-clean tbody td[data-v-508e1f6c]{border:none}@media only screen and (max-width:905px){.filters-date[data-v-508e1f6c]{justify-content:center}[data-v-508e1f6c] .mx-datepicker{width:inherit}[data-v-508e1f6c] .col-lg-3{padding:0!important}[data-v-508e1f6c] .col-lg-9{padding:0;margin-top:15px}[data-v-508e1f6c] canvas{width:100%!important}}", ""]),
        t.exports = e
    },
    1128: function(t, e, r) {
        "use strict";
        var n = r(892);
        r.n(n).a
    },
    1129: function(t, e, r) {
        (e = r(25)(!1)).push([t.i, ".table-clean thead th[data-v-75c3389a]{border-top:none}.table thead th[data-v-75c3389a]{vertical-align:top}.table-clean tbody td[data-v-75c3389a]{border:none}.table[data-v-75c3389a]{margin-bottom:0}", ""]),
        t.exports = e
    },
    1130: function(t, e, r) {
        "use strict";
        var n = r(893);
        r.n(n).a
    },
    1131: function(t, e, r) {
        (e = r(25)(!1)).push([t.i, ".table-clean thead th[data-v-ac44d904]{border-top:none}.table thead th[data-v-ac44d904]{vertical-align:top}.table-clean tbody td[data-v-ac44d904]{border:none}.table[data-v-ac44d904]{margin-bottom:0}", ""]),
        t.exports = e
    },
    1132: function(t, e, r) {
        "use strict";
        var n = r(894);
        r.n(n).a
    },
    1133: function(t, e, r) {
        (e = r(25)(!1)).push([t.i, ".table-clean thead th[data-v-46d23c2c]{border-top:none}.table thead th[data-v-46d23c2c]{vertical-align:top}.table-clean tbody td[data-v-46d23c2c]{border:none}.table[data-v-46d23c2c]{margin-bottom:0}", ""]),
        t.exports = e
    },
    1396: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(657)
          , o = r(891)
          , c = {
            mixins: [n.a, o.a],
            data: function() {
                return {
                    chartId: "sales-chart",
                    APIURL: "/stats/sales-statistics/",
                    total: 0
                }
            },
            methods: {
                getComputedData: function(data) {
                    this.total = data.data.dataset.reduce((function(a, b) {
                        return a + b
                    }
                    ), 0);
                    var t = [{
                        label: "Ventas en S/",
                        data: data.data.dataset,
                        backgroundColor: "rgba(111, 179, 241, 0.18)"
                    }];
                    return this.$emit("updateSalesTotal", this.total),
                    {
                        labels: data.data.labels,
                        datasets: t
                    }
                }
            }
        }
          , d = (r(1128),
        r(16))
          , component = Object(d.a)(c, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", [r("div", {
                staticClass: "row mb-5"
            }, [r("div", {
                staticClass: "col-lg-3 pt-4"
            }, [r("b-card", {
                attrs: {
                    title: "Ventas"
                }
            }, [r("table", {
                staticClass: "table table-clean"
            }, [r("tbody", [r("tr", [r("td", {
                staticStyle: {
                    "padding-left": "0.25rem"
                }
            }, [r("strong", [t._v("Total ventas")])]), t._v(" "), r("td", {
                staticClass: "text-right",
                staticStyle: {
                    "padding-right": "0.25rem"
                }
            }, [t._v("\n                S/ " + t._s(t._f("currency")(t.total, "")) + "\n              ")])])])])])], 1), t._v(" "), r("div", {
                staticClass: "col-lg-9"
            }, [r("canvas", {
                attrs: {
                    id: t.chartId,
                    width: "800",
                    height: "270"
                }
            })])])])
        }
        ), [], !1, null, "75c3389a", null);
        e.default = component.exports
    },
    1397: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(657)
          , o = r(891)
          , c = {
            mixins: [n.a, o.a],
            data: function() {
                return {
                    chartId: "purchases-chart",
                    APIURL: "/stats/purchases-statistics/",
                    total: 0
                }
            },
            methods: {
                getComputedData: function(data) {
                    this.total = data.data.dataset.reduce((function(a, b) {
                        return a + b
                    }
                    ), 0);
                    var t = [{
                        label: "Compras en S/",
                        data: data.data.dataset,
                        backgroundColor: "rgba(111, 179, 241, 0.18)"
                    }];
                    return this.$emit("updatePurchasesTotal", this.total),
                    {
                        labels: data.data.labels,
                        datasets: t
                    }
                }
            }
        }
          , d = (r(1130),
        r(16))
          , component = Object(d.a)(c, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", [r("div", {
                staticClass: "row mb-5"
            }, [r("div", {
                staticClass: "col-lg-3 pt-4"
            }, [r("b-card", {
                attrs: {
                    title: "Compras"
                }
            }, [r("table", {
                staticClass: "table table-clean"
            }, [r("tbody", [r("tr", [r("td", {
                staticStyle: {
                    "padding-left": "0.25rem"
                }
            }, [r("strong", [t._v("Total compras")])]), t._v(" "), r("td", {
                staticClass: "text-right",
                staticStyle: {
                    "padding-right": "0.25rem"
                }
            }, [t._v("\n                S/ " + t._s(t._f("currency")(t.total, "")) + "\n              ")])])])])])], 1), t._v(" "), r("div", {
                staticClass: "col-lg-9"
            }, [r("canvas", {
                attrs: {
                    id: t.chartId,
                    width: "800",
                    height: "270"
                }
            })])])])
        }
        ), [], !1, null, "ac44d904", null);
        e.default = component.exports
    },
    1398: function(t, e, r) {
        "use strict";
        r.r(e);
        r(78),
        r(8),
        r(63),
        r(73),
        r(21),
        r(34),
        r(35),
        r(146);
        var n = r(54)
          , o = (r(6),
        r(3),
        r(7),
        r(657))
          , c = r(891);
        function d(t, e) {
            var r;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (r = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return l(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return l(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var i = 0
                      , n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, d = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return c = t.done,
                    t
                },
                e: function(t) {
                    d = !0,
                    o = t
                },
                f: function() {
                    try {
                        c || null == r.return || r.return()
                    } finally {
                        if (d)
                            throw o
                    }
                }
            }
        }
        function l(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++)
                r[i] = t[i];
            return r
        }
        var f = {
            mixins: [o.a, c.a],
            data: function() {
                return {
                    chartId: "salesman-chart",
                    APIURL: "/stats/sales-per-salesman-statistics/",
                    total: 0,
                    sellersSummary: []
                }
            },
            methods: {
                getRelatedObject: function(t, e) {
                    for (var r = {}, i = 0; i < t.length; i++)
                        r[t[i]] = e[i];
                    return r
                },
                sortObject: function(t) {
                    return Object.keys(t).sort().reduce((function(e, r) {
                        return e[r] = t[r],
                        e
                    }
                    ), {})
                },
                fillEmptyKeys: function(t, e) {
                    for (var r, n, o = Math.max(Object.keys(t).length, Object.keys(e).length), i = 0; i < o; i++)
                        r = Object.keys(t)[i],
                        (n = Object.keys(e)[i]) && void 0 === t[n] && (t[n] = 0),
                        r && void 0 === e[r] && (e[r] = 0);
                    return [this.sortObject(t), this.sortObject(e)]
                },
                getRandomInt: function(t, e) {
                    return Math.floor(Math.random() * (e - t + 1)) + t
                },
                setSellersSummary: function(t) {
                    var summary = [];
                    t.forEach((function(t) {
                        summary.push({
                            total: t.data.reduce((function(a, b) {
                                return a + b
                            }
                            ), 0),
                            user: t.label
                        })
                    }
                    )),
                    this.sellersSummary = summary
                },
                getComputedData: function(data) {
                    var t, e, r, o, c, l, f, h = Object.keys(data.data), m = [], v = d(h.entries());
                    try {
                        for (v.s(); !(f = v.n()).done; ) {
                            var w = Object(n.a)(f.value, 2)
                              , x = w[0]
                              , y = w[1];
                            t = data.data[y],
                            (e = data.data[h[x + 1]]) ? (o = this.getRelatedObject(t.labels, t.dataset),
                            c = this.getRelatedObject(e.labels, e.dataset),
                            l = (r = this.fillEmptyKeys(o, c))[0],
                            data.data[h[x + 1]].labels = Object.keys(r[1]),
                            data.data[h[x + 1]].dataset = Object.values(r[1])) : l = o = this.getRelatedObject(t.labels, t.dataset),
                            m.push({
                                label: "Ventas de ".concat(y, " en S/"),
                                data: Object.values(l),
                                backgroundColor: "rgba(".concat(this.getRandomInt(1, 255), ", ").concat(this.getRandomInt(1, 255), ", 200, 0.18)")
                            })
                        }
                    } catch (t) {
                        v.e(t)
                    } finally {
                        v.f()
                    }
                    return this.setSellersSummary(m),
                    {
                        labels: Object.keys(l),
                        datasets: m
                    }
                }
            }
        }
          , h = (r(1132),
        r(16))
          , component = Object(h.a)(f, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", [r("div", {
                staticClass: "row"
            }, [r("div", {
                staticClass: "col-lg-3 pt-4"
            }, [r("b-card", {
                attrs: {
                    title: "Usuarios"
                }
            }, [r("table", {
                staticClass: "table table-clean"
            }, [r("tbody", [r("tr", [r("td", {
                staticStyle: {
                    "padding-left": "0.25rem"
                }
            }, [r("strong", [t._v("Usuarios del sistema")])]), t._v(" "), r("td", {
                staticClass: "text-right",
                staticStyle: {
                    "padding-right": "0.25rem"
                }
            }, [r("strong", [t._v("Valor")])])]), t._v(" "), t._l(t.sellersSummary, (function(e) {
                return r("tr", {
                    key: e.user
                }, [r("td", {
                    staticStyle: {
                        "padding-left": "0.25rem"
                    }
                }, [t._v(t._s(e.user) + ".")]), t._v(" "), r("td", {
                    staticClass: "text-right",
                    staticStyle: {
                        "padding-right": "0.25rem"
                    }
                }, [t._v("\n                " + t._s(t._f("currency")(e.total, "")) + "\n              ")])])
            }
            ))], 2)])])], 1), t._v(" "), r("div", {
                staticClass: "col-lg-9"
            }, [r("canvas", {
                attrs: {
                    id: t.chartId,
                    width: "800",
                    height: "270"
                }
            })])])])
        }
        ), [], !1, null, "46d23c2c", null);
        e.default = component.exports
    },
    1457: function(t, e, r) {
        "use strict";
        r.r(e);
        r(9),
        r(8),
        r(6),
        r(7),
        r(64);
        var n = r(0)
          , o = (r(3),
        r(59),
        r(65),
        r(23),
        r(4))
          , c = r(32)
          , d = r.n(c)
          , l = r(688)
          , f = r(42)
          , h = r(54)
          , m = (r(254),
        {
            data: function() {
                return {
                    tabs: {}
                }
            },
            methods: {
                displayComponent: function(component) {
                    for (var t = 0, e = Object.entries(this.tabs); t < e.length; t++) {
                        var r = Object(h.a)(e[t], 1)[0];
                        this.tabs[r] = !1
                    }
                    this.tabs[component] = !0
                }
            }
        })
          , v = r(670)
          , w = r(772);
        function x(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }
                ))),
                e.push.apply(e, r)
            }
            return e
        }
        function y(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? x(Object(source), !0).forEach((function(e) {
                    Object(n.a)(t, e, source[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : x(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }
                ))
            }
            return t
        }
        function _(t, e) {
            return O.apply(this, arguments)
        }
        function O() {
            return (O = Object(o.a)(regeneratorRuntime.mark((function t(e, r) {
                var data, n;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0,
                            t.next = 3,
                            e.$axios.$get("sales/expenses/totals/", {
                                params: y(y({}, r), {}, {
                                    is_active: !0,
                                    type: 3
                                }),
                                "axios-retry": {
                                    retries: 3,
                                    retryDelay: d.a.exponentialDelay
                                }
                            });
                        case 3:
                            return data = t.sent,
                            n = data.find((function(t) {
                                return "PEN" === t.currency_code
                            }
                            )) || {
                                currency_code: "PEN",
                                total: 0
                            },
                            t.abrupt("return", n);
                        case 8:
                            return t.prev = 8,
                            t.t0 = t.catch(0),
                            t.abrupt("return", {
                                currency_code: "PEN",
                                total: 0
                            });
                        case 11:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, null, [[0, 8]])
            }
            )))).apply(this, arguments)
        }
        function k(t) {
            return ["viewsummaryofstats_sale", "viewofthedayreports_sale", "viewperproductreports_sale", "viewaccountingreports_accountingsummary", "viewfocusoncustomerreports_sale", "viewrequestedreports_requestedreport"].some((function(e) {
                return t(e)
            }
            ))
        }
        function S(t, e) {
            return new Promise((function(r) {
                if (window[e])
                    r();
                else {
                    var script = document.createElement("script");
                    script.onload = r,
                    script.type = "text/javascript",
                    script.src = t,
                    document.head.appendChild(script)
                }
            }
            ))
        }
        var $ = {
            mixins: [m, l.a, v.a, w.a],
            middleware: ["require-business"],
            fetch: function(t) {
                return Object(o.a)(regeneratorRuntime.mark((function e() {
                    var r, n, o, c, d, l;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = t.store,
                                n = t.redirect,
                                o = r.getters["configs/hasPerm"],
                                c = "Owner" === r.state.employee.group_name,
                                d = r.state.configs.business,
                                c || k(o) ? o("viewsummaryofstats_sale") ? l = void 0 : o("viewofthedayreports_sale") ? l = "/".concat(d.slug, "/reports/of-the-day") : o("viewperproductreports_sale") ? l = "/".concat(d.slug, "/reports/per-product") : o("viewaccountingreports_accountingsummary") ? l = "/".concat(d.slug, "/reports/accounting") : o("viewfocusoncustomerreports_sale") ? l = "/".concat(d.slug, "/reports/focus-on-customers") : o("viewrequestedreports_requestedreport") && (l = "/".concat(d.slug, "/reports/downloads")) : [d.HOTEL, d.RESTAURANT].includes(d.type) ? l = "/".concat(d.slug, "/sales/visual") : o("view_sale") ? l = "/".concat(d.slug, "/sales") : o("view_document") ? l = "/".concat(d.slug, "/sales/billing") : o("view_quotation") && (l = "/".concat(d.slug, "/sales/quotations")),
                                e.abrupt("return", l ? n(l) : void 0);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            asyncData: function(t) {
                return Object(o.a)(regeneratorRuntime.mark((function e() {
                    var r, n, o, c, d, l, f;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = t.app,
                                n = t.store,
                                o = n.getters["configs/hasPerm"],
                                c = k(o),
                                !("Owner" === n.state.employee.group_name) && !c) {
                                    e.next = 12;
                                    break
                                }
                                if (d = {
                                    $store: n,
                                    $axios: r.$axios
                                },
                                !(l = n.state.configs.business)) {
                                    e.next = 12;
                                    break
                                }
                                return e.next = 10,
                                _(d, {
                                    business: l.id
                                });
                            case 10:
                                return f = e.sent,
                                e.abrupt("return", {
                                    totalExpenses: f
                                });
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            data: function() {
                return {
                    params: {
                        params: {
                            date__gte: void 0,
                            date__lte: void 0
                        }
                    },
                    tabs: {
                        reports: !0
                    },
                    salesTotal: 0,
                    purchasesTotal: 0,
                    displayTotalExpenses: !1
                }
            },
            mounted: function() {
                window.fbq && this.$store.getters.isDemo && window.fbq("track", "Purchase", {
                    value: 0,
                    currency: "PEN"
                })
            },
            methods: {
                fetchInitialData: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.hasPermsToRender) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.prev = 1,
                                    e.next = 4,
                                    S("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js", "Chart");
                                case 4:
                                    e.next = 10;
                                    break;
                                case 6:
                                    return e.prev = 6,
                                    e.t0 = e.catch(1),
                                    new f.a(t,e.t0),
                                    e.abrupt("return");
                                case 10:
                                    t.$refs.salesReport.initialize(),
                                    t.$refs.purchasesReport.initialize(),
                                    t.$refs.salesmanReport.initialize();
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 6]])
                    }
                    )))()
                },
                fetchData: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    _(t, t.params.params);
                                case 2:
                                    t.totalExpenses = e.sent;
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                updateDateRange: function() {},
                updateSalesTotal: function(t) {
                    this.salesTotal = t
                },
                updatePurchasesTotal: function(t) {
                    this.purchasesTotal = t
                }
            },
            computed: {
                total: function() {
                    return this.salesTotal - this.purchasesTotal
                },
                totalWithExpenses: function() {
                    return this.total - this.totalExpenses.total
                },
                hasPermsToRender: function() {
                    return this.$store.getters["configs/hasPerm"]("viewsummaryofstats_sale")
                },
                hasOtherReportPerms: function() {
                    return k(this.$store.getters["configs/hasPerm"])
                }
            }
        }
          , C = (r(1126),
        r(16))
          , R = Object(C.a)($, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("ContainerView", [r("NavigationView", {
                attrs: {
                    tabs: !0
                }
            }, [r("div", {
                staticClass: "tw-flex-grow tw-flex md:tw-overflow-x-auto scrollbar-hidden"
            }, [r("NavigationViewTabs", {
                attrs: {
                    buttons: t.buttons
                }
            })], 1), t._v(" "), r("div", {
                staticClass: "tw-flex"
            }, [r("UserTopNav", {
                staticClass: "tw-hidden lg:tw-block md:tw-ml-10"
            })], 1)]), t._v(" "), t.hasPermsToRender ? [r("ContentView", [t.errors.non_field_errors ? r("div", {
                staticClass: "alert alert-danger",
                attrs: {
                    role: "alert"
                }
            }, t._l(t.errors.non_field_errors, (function(e) {
                return r("div", {
                    key: e
                }, [r("font-awesome-icon", {
                    attrs: {
                        icon: ["fas", "times-circle"]
                    }
                }), t._v("\n            " + t._s(e) + "\n        ")], 1)
            }
            )), 0) : t._e(), t._v(" "), r("div", {
                staticClass: "tw-flex tw-flex-wrap tw-justify-end tw-mb-5"
            }, [r("div", {
                staticClass: "tw-w-1/2 sm:tw-w-auto tw-pr-2 sm:tw-pr-0"
            }, [r("DatePickerCustom", {
                attrs: {
                    filterByStartOfMonth: !0,
                    prefix: "date__gte",
                    placeholder: "Desde"
                },
                on: {
                    filter: t.updateDateFilters
                }
            })], 1), t._v(" "), r("div", {
                staticClass: "tw-w-1/2 sm:tw-w-auto tw-pl-2 sm:tw-pl-0"
            }, [r("DatePickerCustom", {
                staticClass: "tw-ml-0 sm:tw-ml-4",
                attrs: {
                    prefix: "date__lte",
                    placeholder: "Hasta"
                },
                on: {
                    filter: t.updateDateFilters
                }
            })], 1)]), t._v(" "), r("div", {
                staticClass: "mt-1 table-responsive"
            }, [r("table", {
                staticClass: "table table-hover table-clean",
                staticStyle: {
                    "margin-bottom": "0.5rem"
                }
            }, [r("thead", [r("th", [t._v("Total ventas")]), t._v(" "), r("th", [t._v("Total compras")]), t._v(" "), r("th", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.displayTotalExpenses,
                    expression: "displayTotalExpenses"
                }]
            }, [t._v("Total gastos")]), t._v(" "), r("th", [t._v("Total")])]), t._v(" "), r("tbody", [r("tr", {
                staticStyle: {
                    "background-color": "rgba(0, 0, 0, 0.075)"
                }
            }, [r("td", [t._v("S/ " + t._s(t._f("currency")(t.salesTotal, "")))]), t._v(" "), r("td", [t._v("S/ " + t._s(t._f("currency")(t.purchasesTotal, "")))]), t._v(" "), r("td", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.displayTotalExpenses && t.totalExpenses,
                    expression: "displayTotalExpenses && totalExpenses"
                }]
            }, [t._v("\n                S/ " + t._s(t._f("currency")(t.totalExpenses.total, "")) + "\n              ")]), t._v(" "), r("td", [t.displayTotalExpenses ? [t._v("\n                  S/ " + t._s(t._f("currency")(t.totalWithExpenses, "")) + "\n                ")] : [t._v(" S/ " + t._s(t._f("currency")(t.total, "")) + " ")]], 2)])])]), t._v(" "), r("SwitchComponent", {
                attrs: {
                    checked: t.displayTotalExpenses
                },
                on: {
                    change: function(e) {
                        t.displayTotalExpenses = !t.displayTotalExpenses
                    }
                }
            }), t._v(" "), r("label", [t._v("Con gastos")])], 1), t._v(" "), r("br"), r("br"), t._v(" "), r("SalesReport", {
                ref: "salesReport",
                attrs: {
                    params: t.params
                },
                on: {
                    updateSalesTotal: t.updateSalesTotal
                }
            }), t._v(" "), r("PurchasesReport", {
                ref: "purchasesReport",
                attrs: {
                    params: t.params
                },
                on: {
                    updatePurchasesTotal: t.updatePurchasesTotal
                }
            }), t._v(" "), r("SalesmanReport", {
                ref: "salesmanReport",
                attrs: {
                    params: t.params
                }
            })], 1)] : t._e(), t._v(" "), t.hasOtherReportPerms ? r("ContentView", [t._v("\n    -\n  ")]) : r("InsufficientPermissions")], 2)
        }
        ), [], !1, null, "508e1f6c", null);
        e.default = R.exports;
        installComponents(R, {
            NavigationViewTabs: r(671).default,
            UserTopNav: r(371).default,
            NavigationView: r(663).default,
            DatePickerCustom: r(733).default,
            SwitchComponent: r(702).default,
            SalesReport: r(1396).default,
            PurchasesReport: r(1397).default,
            SalesmanReport: r(1398).default,
            ContentView: r(251).default,
            InsufficientPermissions: r(662).default,
            ContainerView: r(144).default
        })
    },
    656: function(t, e, r) {
        var content = r(665);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(26).default)("e1dda884", content, !0, {
            sourceMap: !1
        })
    },
    657: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return n
        }
        ));
        var n = {
            computed: {
                user: function() {
                    return this.$store.state.auth.user
                },
                employee: function() {
                    return this.$store.state.employee
                },
                units: function() {
                    return this.$store.state.units
                },
                currencies: function() {
                    return this.$store.state.currencies
                },
                taxes: function() {
                    return this.$store.state.taxes
                },
                business: function() {
                    return this.$store.state.business
                },
                businesses: function() {
                    return this.$store.state.businesses
                },
                paymentMethods: function() {
                    return this.$store.state.payment_methods
                },
                exchangeRate: function() {
                    return this.$store.state.exchange_rate
                },
                documentTypes: function() {
                    return this.$store.state.document_types
                },
                businessSaleItemMetas: function() {
                    return this.$store.state.business_saleitem_metas
                },
                businessPurchaseItemMetas: function() {
                    return this.$store.state.business_purchaseitem_metas
                },
                permissions: function() {
                    return this.$store.state.permissions
                },
                isCreator: function() {
                    return this.user && this.user.pk === this.business.owner
                },
                strictMode: function() {
                    return this.business.strict_mode
                },
                hasEfact: function() {
                    return this.business.has_efact
                },
                businessDistribution: function() {
                    return 8 === this.business.type
                },
                businessHotel: function() {
                    return 7 === this.business.type
                },
                businessMine: function() {
                    return 6 === this.business.type
                },
                businessPharmacy: function() {
                    return 5 === this.business.type
                },
                businessWithImages: function() {
                    return 4 === this.business.type
                },
                businessRetail: function() {
                    return this.business.use_retail_search
                },
                businessRestaurant: function() {
                    return 2 === this.business.type
                },
                isFrenosur: function() {
                    return 6 === this.business.id
                }
            },
            methods: {
                hasPermission: function(t) {
                    return !this.permissions || this.permissions.indexOf(t) > -1
                }
            }
        }
    },
    658: function(t, e, r) {
        (function(e) {
            var r = /^\s+|\s+$/g
              , n = /^[-+]0x[0-9a-f]+$/i
              , o = /^0b[01]+$/i
              , c = /^0o[0-7]+$/i
              , d = parseInt
              , l = "object" == typeof e && e && e.Object === Object && e
              , f = "object" == typeof self && self && self.Object === Object && self
              , h = l || f || Function("return this")()
              , m = Object.prototype.toString
              , v = Math.max
              , w = Math.min
              , x = function() {
                return h.Date.now()
            };
            function y(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }
            function _(t) {
                if ("number" == typeof t)
                    return t;
                if (function(t) {
                    return "symbol" == typeof t || function(t) {
                        return !!t && "object" == typeof t
                    }(t) && "[object Symbol]" == m.call(t)
                }(t))
                    return NaN;
                if (y(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = y(e) ? e + "" : e
                }
                if ("string" != typeof t)
                    return 0 === t ? t : +t;
                t = t.replace(r, "");
                var l = o.test(t);
                return l || c.test(t) ? d(t.slice(2), l ? 2 : 8) : n.test(t) ? NaN : +t
            }
            t.exports = function(t, e, r) {
                var n, o, c, d, l, f, h = 0, m = !1, O = !1, k = !0;
                if ("function" != typeof t)
                    throw new TypeError("Expected a function");
                function S(time) {
                    var e = n
                      , r = o;
                    return n = o = void 0,
                    h = time,
                    d = t.apply(r, e)
                }
                function $(time) {
                    return h = time,
                    l = setTimeout(R, e),
                    m ? S(time) : d
                }
                function C(time) {
                    var t = time - f;
                    return void 0 === f || t >= e || t < 0 || O && time - h >= c
                }
                function R() {
                    var time = x();
                    if (C(time))
                        return T(time);
                    l = setTimeout(R, function(time) {
                        var t = e - (time - f);
                        return O ? w(t, c - (time - h)) : t
                    }(time))
                }
                function T(time) {
                    return l = void 0,
                    k && n ? S(time) : (n = o = void 0,
                    d)
                }
                function j() {
                    var time = x()
                      , t = C(time);
                    if (n = arguments,
                    o = this,
                    f = time,
                    t) {
                        if (void 0 === l)
                            return $(f);
                        if (O)
                            return l = setTimeout(R, e),
                            S(f)
                    }
                    return void 0 === l && (l = setTimeout(R, e)),
                    d
                }
                return e = _(e) || 0,
                y(r) && (m = !!r.leading,
                c = (O = "maxWait"in r) ? v(_(r.maxWait) || 0, e) : c,
                k = "trailing"in r ? !!r.trailing : k),
                j.cancel = function() {
                    void 0 !== l && clearTimeout(l),
                    h = 0,
                    n = f = o = l = void 0
                }
                ,
                j.flush = function() {
                    return void 0 === l ? d : T(x())
                }
                ,
                j
            }
        }
        ).call(this, r(29))
    },
    659: function(t, e, r) {
        var content = r(673);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(26).default)("39d33148", content, !0, {
            sourceMap: !1
        })
    },
    660: function(t, e, r) {
        var content = r(682);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(26).default)("1936cfc4", content, !0, {
            sourceMap: !1
        })
    },
    662: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "tw-text-center"
            }, [e("img", {
                staticClass: "tw-w-8/12 tw-inline-block",
                attrs: {
                    src: r(678),
                    alt: "No tiene permisos suficientes para visualizar esta página"
                }
            })])
        }
        ]
          , o = {
            methods: {
                reload: function() {
                    location.reload(!0)
                }
            }
        }
          , c = (r(681),
        r(16))
          , component = Object(c.a)(o, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "forbidden-container"
            }, [r("div", {
                staticClass: "tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-p-4 tw-w-full"
            }, [t._m(0), t._v(" "), r("div", {
                staticClass: "tw-text-lg"
            }, [r("strong", {
                staticClass: "tw-text-3xl tw-block tw-my-4"
            }, [t._v("\n        No tiene permisos suficientes para visualizar esta página\n      ")]), t._v(" "), r("p", {}, [t._v("\n        Si su negocio hizo una actualización reciente de sus permisos, prueba\n        "), r("a", {
                staticClass: "ml-1",
                attrs: {
                    href: "javascript:void(0)"
                },
                on: {
                    click: t.reload
                }
            }, [r("span", {
                staticClass: "font-semi-bold"
            }, [t._v("recargar la página")])]), t._v(".\n      ")]), t._v(" "), r("p", [t._v("Si cree que esto es un error y debería ver esta página, comuníquese con soporte:")]), t._v(" "), r("div", [t._l(t.$store.state.configs.contact.phones, (function(e) {
                return r("div", {
                    key: e,
                    staticClass: "mb-1"
                }, [r("fa-icon", {
                    staticClass: "mr-1",
                    attrs: {
                        icon: ["fal", "phone"]
                    }
                }), t._v(" " + t._s(e) + "\n        ")], 1)
            }
            )), t._v(" "), r("div", [r("fa-icon", {
                staticClass: "mr-1",
                attrs: {
                    icon: ["fal", "envelope"]
                }
            }), t._v("\n          " + t._s(t.$store.state.configs.contact.email) + "\n        ")], 1)], 2)])])])
        }
        ), n, !1, null, "31fee6c4", null);
        e.default = component.exports
    },
    663: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
            props: {
                tabs: {
                    type: Boolean,
                    default: !0
                }
            }
        }
          , o = (r(664),
        r(16))
          , component = Object(o.a)(n, (function() {
            var t = this.$createElement;
            return (this._self._c || t)("nav", {
                staticClass: "tw-flex tw-items-center tw-pl-5 lg:tw-pl-0 tw-pr-5 lg:tw-pr-10 tw-border-b tw-border-gray-300 tw-h-16",
                class: {
                    "navigation-view-no-tabs": !1 === this.tabs
                }
            }, [this._t("default")], 2)
        }
        ), [], !1, null, "50c45362", null);
        e.default = component.exports
    },
    664: function(t, e, r) {
        "use strict";
        var n = r(656);
        r.n(n).a
    },
    665: function(t, e, r) {
        (e = r(25)(!1)).push([t.i, ".navigation-view-no-tabs[data-v-50c45362]{padding-left:1.25rem!important;padding-right:1.25rem!important}@media (min-width:1024px){.navigation-view-no-tabs[data-v-50c45362]{padding-left:2.5rem!important;padding-right:2.5rem!important}}", ""]),
        t.exports = e
    },
    670: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return n
        }
        ));
        var n = {
            data: function() {
                return {
                    showDeleteModal: !1,
                    objectId: void 0,
                    deleteObject: {},
                    showDateFilter: !1
                }
            },
            methods: {
                openAddOrEditModal: function(t) {
                    this.objectId = t,
                    this.$refs.addOrEditModalRef.$refs.addOrEditModalRef.show()
                },
                openDeleteModal: function(object) {
                    this.deleteObject = object,
                    this.showDeleteModal = !this.showDeleteModal,
                    this.$refs.deleteModalRef.show()
                },
                onSave: function() {
                    this.fetchData(),
                    this.$refs.addOrEditModalRef.$refs.addOrEditModalRef.hide()
                },
                onDelete: function() {
                    this.fetchData(),
                    this.$refs.deleteModalRef.hide()
                }
            }
        }
    },
    671: function(t, e, r) {
        "use strict";
        r.r(e);
        r(117),
        r(21);
        var n = r(253)
          , o = {
            directives: {
                clickOutside: r.n(n).a.directive
            },
            props: {
                buttons: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                var t = this
                  , e = this.buttons.filter((function(button) {
                    return !button.hide
                }
                ))
                  , r = this.$root.context.from ? this.$root.context.from.name : void 0
                  , n = e.findIndex((function(button) {
                    return button.name === r
                }
                ));
                n = -1 != n ? n : 0;
                var o = e.findIndex((function(button) {
                    return button.name === t.$route.name
                }
                ));
                return {
                    activeButtons: e,
                    initialIndex: n,
                    currentIndex: o = -1 != o ? o : 0,
                    widthTabActive: null,
                    positionTo: 0
                }
            },
            mounted: function() {
                this.widthTabActive = this.$refs.tabRefs[this.initialIndex].$el.clientWidth;
                for (var i = 0; i < this.initialIndex; i++)
                    this.positionTo += this.$refs.tabRefs[i].$el.clientWidth;
                this.$nextTick((function() {
                    window.addEventListener("resize", this.calcWidthActiveTab),
                    window.addEventListener("resize", this.calcTabsWidthToActive),
                    this.calcWidthActiveTab(),
                    this.calcTabsWidthToActive()
                }
                ))
            },
            methods: {
                calcWidthActiveTab: function() {
                    this.widthTabActive = this.$refs.tabRefs[this.currentIndex].$el.clientWidth
                },
                calcTabsWidthToActive: function() {
                    this.positionTo = 0;
                    for (var i = 0; i < this.currentIndex; i++)
                        this.positionTo += this.$refs.tabRefs[i].$el.clientWidth
                }
            },
            beforeDestroy: function() {
                window.removeEventListener("resize", this.calcWidthActiveTab),
                window.removeEventListener("resize", this.calcTabsWidthToActive)
            }
        }
          , c = (r(672),
        r(16))
          , component = Object(c.a)(o, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", [r("div", {
                staticClass: "tw-hidden md:tw-flex tw-relative"
            }, [t.widthTabActive ? r("div", {
                staticClass: "tab-view-line",
                style: "width: " + t.widthTabActive + "px; left: " + t.positionTo + "px;"
            }) : t._e(), t._v(" "), t._l(t.activeButtons, (function(button) {
                return r("nuxt-link", {
                    key: button.name,
                    ref: "tabRefs",
                    refInFor: !0,
                    staticClass: "tw-flex tw-items-center tw-px-6 xl:tw-px-8 tw-h-16 tw-text-lg tw-font-extrabold tw-text-gray-400 hover:tw-text-black hover:tw-no-underline",
                    class: [button.name === t.$route.name ? "tab-view-active" : "tab-view"],
                    attrs: {
                        to: button.url
                    }
                }, [t._v("\n      " + t._s(button.display) + "\n    ")])
            }
            ))], 2), t._v(" "), r("div", {
                staticClass: "tw-flex md:tw-hidden"
            }, [r("Dropdown", {
                attrs: {
                    dropdownDirection: "right",
                    arrowRight: !0
                }
            }, [r("div", {
                staticClass: "tw-flex tw-items-center tw-text-xl tw-font-black tw-h-10 tw-leading-snug tw-text-black tw-cursor-pointer",
                attrs: {
                    slot: "dropdown-button"
                },
                slot: "dropdown-button"
            }, [t._v("\n        " + t._s(t.activeButtons[t.currentIndex].display) + "\n      ")]), t._v(" "), r("div", {
                staticStyle: {
                    width: "180px"
                },
                attrs: {
                    slot: "dropdown-content"
                },
                slot: "dropdown-content"
            }, [r("ul", {
                staticClass: "tw-m-0"
            }, [r("li", t._l(t.activeButtons, (function(button) {
                return r("nuxt-link", {
                    key: button.name,
                    ref: "tabRefs",
                    refInFor: !0,
                    staticClass: "tw-text-base tw-flex tw-font-bold tw-py-3 tw-px-7 tw-bg-white hover:tw-bg-gray-100 hover:tw-no-underline tw-cursor-pointer tw-text-gray-400",
                    class: [button.name === t.$route.name ? "tab-view-active" : "tab-view"],
                    attrs: {
                        to: button.url
                    }
                }, [r("div", {
                    staticClass: "tw-flex-grow"
                }, [t._v("\n                " + t._s(button.display) + "\n              ")]), t._v(" "), r("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.activeButtons[t.currentIndex].display === button.display,
                        expression: "activeButtons[currentIndex].display === button.display"
                    }],
                    staticClass: "tw-text-susii-red-500"
                }, [r("font-awesome-icon", {
                    attrs: {
                        icon: ["far", "check"]
                    }
                })], 1)])
            }
            )), 1)])])])], 1)])
        }
        ), [], !1, null, "2d061188", null);
        e.default = component.exports;
        installComponents(component, {
            Dropdown: r(372).default
        })
    },
    672: function(t, e, r) {
        "use strict";
        var n = r(659);
        r.n(n).a
    },
    673: function(t, e, r) {
        (e = r(25)(!1)).push([t.i, ".tab-view-active[data-v-2d061188]{font-weight:900!important;--tw-text-opacity:1!important;color:rgba(0,0,0,var(--tw-text-opacity))!important}.tab-view-line[data-v-2d061188]{--tw-bg-opacity:1;background-color:rgba(226,30,66,var(--tw-bg-opacity));border-radius:9999px;height:.25rem;position:absolute;bottom:0;transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.5s}", ""]),
        t.exports = e
    },
    674: function(t, e, r) {
        var content = r(716);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(26).default)("5cdd9541", content, !0, {
            sourceMap: !1
        })
    },
    678: function(t, e, r) {
        t.exports = r.p + "img/403.2afa4bb.png"
    },
    681: function(t, e, r) {
        "use strict";
        var n = r(660);
        r.n(n).a
    },
    682: function(t, e, r) {
        (e = r(25)(!1)).push([t.i, ".forbidden-container[data-v-31fee6c4]{margin-top:3rem}.forbidden-img-section img[data-v-31fee6c4]{max-width:350px}.forbidden-img-section[data-v-31fee6c4]{text-align:center}", ""]),
        t.exports = e
    },
    688: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return v
        }
        ));
        r(21),
        r(24),
        r(193);
        var n = r(54)
          , o = (r(254),
        r(23),
        r(4))
          , c = (r(17),
        r(6),
        r(3),
        r(7),
        r(32))
          , d = r.n(c)
          , l = r(658)
          , f = r.n(l)
          , h = r(103)
          , m = r(42)
          , v = {
            beforeRouteUpdate: function(t, e, r) {
                if (r(),
                0 === Object.keys(t.query).length) {
                    var n = this.getInitialQueryParams(this);
                    n.ordering = null,
                    n.page = 1,
                    this.page = n.page,
                    Object.assign(this.params.params, n)
                }
            },
            data: function() {
                var t = this.$route.query.page ? Number(this.$route.query.page) : 1;
                return {
                    errors: {},
                    APIURL: "",
                    REPORT_URLS: {},
                    COUNT_LIMIT: 75,
                    params: {
                        params: {
                            page: t,
                            ordering: this.$route.query.ordering || null,
                            business: this.$store.state.business.id
                        }
                    },
                    dataList: [],
                    loading: void 0,
                    pagination: {
                        numbers: []
                    },
                    page: t,
                    count: 0,
                    loadingTotals: !1
                }
            },
            created: function() {
                this.debouncedUpdatePageAndQueryParams = f()(this.updatePageAndQueryParams, 500),
                this.updateQueryParam = h.s.bind(this),
                this.updateQueryParams = h.t.bind(this),
                this.resetQueryParams = h.l.bind(this),
                this.getInitialQueryParams = function() {
                    return {}
                }
            },
            mounted: function() {
                this.filterByStartOfDay || this.filterByStartOfMonth || this.fetchData(),
                this.fetchInitialData()
            },
            methods: {
                toggleTotals: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.loadingTotals) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (!t.showTotals) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", t.showTotals = !1);
                                case 4:
                                    return t.loadingTotals = !0,
                                    e.prev = 5,
                                    e.next = 8,
                                    t.fetchTotals();
                                case 8:
                                    t.showTotals = !0,
                                    e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11,
                                    e.t0 = e.catch(5),
                                    t.errors = new m.a(t,e.t0);
                                case 14:
                                    return e.prev = 14,
                                    t.loadingTotals = !1,
                                    e.finish(14);
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[5, 11, 14, 17]])
                    }
                    )))()
                },
                updatePageAndQueryParams: function(t, e) {
                    this.page = 1,
                    this.params.params.page = this.page;
                    var r = {
                        page: this.page
                    };
                    r[e] = t,
                    this.updateQueryParams(r)
                },
                fetchData: f()((function() {
                    this.fetchAllData()
                }
                ), 500, {
                    leading: !0
                }),
                fetchAllData: function() {
                    this.fetchList()
                },
                getFetchConfig: function() {
                    return {
                        "axios-retry": {
                            retries: 3,
                            retryDelay: d.a.exponentialDelay
                        },
                        params: this.params.params
                    }
                },
                fetchList: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        var r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t.loading = !0,
                                    t.errors = {},
                                    e.prev = 2,
                                    e.next = 5,
                                    t.$axios.$get(t.APIURL, t.getFetchConfig());
                                case 5:
                                    r = e.sent,
                                    e.next = 12;
                                    break;
                                case 8:
                                    return e.prev = 8,
                                    e.t0 = e.catch(2),
                                    t.errors = new m.a(t,e.t0),
                                    e.abrupt("return");
                                case 12:
                                    t.dataList = r.results,
                                    t.count = r.count,
                                    t.loading = !1,
                                    t.setPaginationData(r);
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[2, 8]])
                    }
                    )))()
                },
                fetchInitialData: function() {},
                updateParams: function(code, t) {
                    this.params.params.page = void 0,
                    this.params.params[code] = t,
                    this.fetchData()
                },
                updateOrdering: function(t) {
                    this.params.params.ordering = t,
                    this.fetchData()
                },
                updateQueryOrdering: function(t) {
                    this.$set(this.params.params, "ordering", t),
                    this.updateQueryParam("ordering", t)
                },
                updateOrderingV1: function(t) {
                    this.$set(this.params.params, "ordering", t)
                },
                cleanParams: function(code) {
                    for (var t = 0, e = Object.entries(this.params.params); t < e.length; t++) {
                        var r = Object(n.a)(e[t], 1)[0];
                        r.startsWith(code) && delete this.params.params[r]
                    }
                    this.fetchData()
                },
                setPaginationData: function(t) {
                    this.pagination.next = t.next,
                    this.pagination.previous = t.previous,
                    this.pagination.numbers = t.numbers
                },
                setPage: function(t) {
                    t < 1 && (t = 1),
                    t > this.lastPage && (t = this.lastPage),
                    this.page = t,
                    this.params.params.page = this.page,
                    this.updateQueryParam("page", t),
                    window.scrollTo(0, 0)
                },
                setLazyPage: function(t) {
                    this.page = t,
                    this.params.params.page = this.page,
                    this.updateQueryParam("page", t),
                    window.scrollTo(0, 0)
                },
                getReportUrl: function(t, e) {
                    return this.REPORT_URLS[t] || "".concat(this.APIURL.replace(/\/$/, ""), "-report-").concat(t)
                },
                getReportParams: function() {
                    return this.params.params
                },
                showReport: function(t, e) {
                    var r = this;
                    return Object(o.a)(regeneratorRuntime.mark((function n() {
                        var o, c, link, d;
                        return regeneratorRuntime.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    r.$axios(r.getReportUrl(e, t), {
                                        responseType: "blob",
                                        params: r.getReportParams()
                                    });
                                case 2:
                                    o = n.sent,
                                    c = window.URL.createObjectURL(new Blob([o.data])),
                                    (link = document.createElement("a")).href = c,
                                    d = "xls" === e ? "xlsx" : e,
                                    link.download = "".concat(t, ".").concat(d),
                                    link.click();
                                case 9:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                },
                downloadOrSendReport: function(t, e) {
                    var r = this;
                    return Object(o.a)(regeneratorRuntime.mark((function n() {
                        return regeneratorRuntime.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    r.fetchAllData();
                                case 2:
                                    r.count > r.COUNT_LIMIT ? r.$refs.sendReport.show() : r.showReport(t, e);
                                case 3:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                },
                updateDateFilters: function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    e ? this.params.params[t] = e : delete this.params.params[t],
                    r ? this.updatePageAndQueryParams(e, t) : this.updateQueryParam(t, e),
                    this.fetchData()
                },
                updateDateShortcutsFilters: function(t) {
                    Object.assign(this.params.params, t),
                    this.fetchData()
                },
                getClientDisplay: function(t) {
                    return t ? t.alias ? "".concat(t.alias, ": ").concat(t.name) : t.name : "-"
                },
                saveScrollStateAndGo: function(t) {
                    var e = this;
                    return Object(o.a)(regeneratorRuntime.mark((function r() {
                        return regeneratorRuntime.wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    e.$store.dispatch("saveScrollState", {
                                        position: window.pageYOffset,
                                        routeName: e.$route.name,
                                        previousRoute: null
                                    });
                                case 2:
                                    e.$router.push(t);
                                case 3:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )))()
                }
            },
            computed: {
                lastPage: function() {
                    return this.pagination.numbers.length && this.pagination.numbers[this.pagination.numbers.length - 1] || 1
                },
                isEmptyDataList: function() {
                    return !1 === this.loading && !this.dataList.length
                },
                scrollState: function() {
                    return this.$store.state.scrollState
                },
                filterByStartOfDay: function() {
                    return !1
                },
                filterByStartOfMonth: function() {
                    return !1
                }
            }
        }
    },
    689: function(t, e, r) {
        var content = r(737);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(26).default)("868cbcf2", content, !0, {
            sourceMap: !1
        })
    },
    702: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = {
            props: ["checked", "disabled"],
            computed: {
                availableStyle: function() {
                    return this.disabled ? {
                        opacity: "0.5",
                        cursor: "not-allowed"
                    } : {}
                }
            },
            methods: {
                tryChange: function(t) {
                    t.preventDefault(),
                    this.disabled || this.$emit("change")
                }
            }
        }
          , o = (r(715),
        r(16))
          , component = Object(o.a)(n, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("label", {
                staticClass: "switch",
                on: {
                    click: this.tryChange
                }
            }, [e("input", {
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: this.checked
                }
            }), this._v(" "), e("span", {
                staticClass: "slider round",
                style: this.availableStyle
            })])
        }
        ), [], !1, null, "7f7b2f59", null);
        e.default = component.exports
    },
    715: function(t, e, r) {
        "use strict";
        var n = r(674);
        r.n(n).a
    },
    716: function(t, e, r) {
        (e = r(25)(!1)).push([t.i, '.switch[data-v-7f7b2f59]{position:relative;display:inline-block;width:30px;height:17px;margin-bottom:0}.switch input[data-v-7f7b2f59]{display:none}.slider[data-v-7f7b2f59]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc}.slider[data-v-7f7b2f59],.slider[data-v-7f7b2f59]:before{position:absolute;transition:.4s}.slider[data-v-7f7b2f59]:before{content:"";height:13px;width:13px;left:2px;bottom:2px;background-color:#fff}input:checked+.slider[data-v-7f7b2f59]{background-color:#dd2246}input:focus+.slider[data-v-7f7b2f59]{box-shadow:0 0 1px #dd2246}input:checked+.slider[data-v-7f7b2f59]:before{transform:translateX(13px)}.slider.round[data-v-7f7b2f59]{border-radius:17px}.slider.round[data-v-7f7b2f59]:before{border-radius:50%}', ""]),
        t.exports = e
    },
    733: function(t, e, r) {
        "use strict";
        r.r(e);
        r(373);
        var n = {
            mixins: [r(657).a],
            props: {
                prefix: {
                    type: String
                },
                placeholder: {
                    type: String
                },
                filterByStartOfMonth: {
                    type: Boolean,
                    default: !1
                },
                filterByStartOfDay: {
                    type: Boolean,
                    default: !1
                },
                isReportOptionsModal: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    date: void 0
                }
            },
            computed: {
                disabled: function() {
                    return !(this.$store.state.permissions.indexOf("changedatefilter_sale") > -1)
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick((function() {
                    var e = t.$route.query[t.prefix] || null;
                    if (t.prefix.endsWith("__gte")) {
                        var r = e ? t.$moment(e) : t.$moment();
                        if (t.filterByStartOfMonth) {
                            var n = r.startOf("month").toISOString();
                            t.date = r.startOf("month").toDate(),
                            t.$emit("filter", t.prefix, n, !1)
                        } else if (t.filterByStartOfDay) {
                            var o = r.startOf("day").toISOString();
                            t.date = r.startOf("day").toDate(),
                            t.$emit("filter", t.prefix, o, !1)
                        }
                    }
                    t.isReportOptionsModal && (t.date = e ? t.$moment(e).toDate() : t.$moment().toDate())
                }
                ))
            },
            methods: {
                setDate: function(t) {
                    var e;
                    t ? (e = this.prefix.endsWith("__lte") ? this.$moment(this.date, "YYYY-MM-DD").endOf("day").toISOString() : this.$moment(this.date, "YYYY-MM-DD").toISOString(),
                    this.$emit("filter", this.prefix, e, !0)) : this.$emit("filter", this.prefix, void 0, !0)
                }
            }
        }
          , o = (r(736),
        r(16))
          , component = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", [r("DatePickerSusii", {
                attrs: {
                    lang: "es",
                    format: "DD-MM-YYYY",
                    placeholder: t.placeholder,
                    disabled: t.disabled
                },
                on: {
                    change: t.setDate
                },
                model: {
                    value: t.date,
                    callback: function(e) {
                        t.date = e
                    },
                    expression: "date"
                }
            })], 1)
        }
        ), [], !1, null, "d8f91d52", null);
        e.default = component.exports
    },
    736: function(t, e, r) {
        "use strict";
        var n = r(689);
        r.n(n).a
    },
    737: function(t, e, r) {
        (e = r(25)(!1)).push([t.i, '[data-v-d8f91d52] .mx-datepicker{width:100%}@media (min-width:768px){[data-v-d8f91d52] .mx-datepicker{width:auto}}[data-v-d8f91d52] .mx-datepicker-popup{z-index:9999;width:266px;margin-top:-2.75rem}[data-v-d8f91d52] .mx-input-wrapper{--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity))}[data-v-d8f91d52] .mx-input-wrapper:hover{--tw-bg-opacity:1;background-color:rgba(228,228,231,var(--tw-bg-opacity))}[data-v-d8f91d52] .mx-input-wrapper{border-radius:1rem;cursor:pointer;display:flex;align-items:center;overflow:hidden;padding-right:.25rem}[data-v-d8f91d52] .mx-input-wrapper:hover input{--tw-bg-opacity:1!important;background-color:rgba(228,228,231,var(--tw-bg-opacity))!important}[data-v-d8f91d52] .mx-input-wrapper input{font-size:medium;line-height:normal;height:auto;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;--tw-bg-opacity:1!important;background-color:rgba(244,244,245,var(--tw-bg-opacity))!important;font-weight:600!important;line-height:1!important;padding-top:.75rem!important;padding-bottom:.75rem!important;padding-left:1.25rem!important}[data-v-d8f91d52] .mx-input-wrapper input::-moz-placeholder{--tw-placeholder-opacity:1!important;color:rgba(63,63,70,var(--tw-placeholder-opacity))!important}[data-v-d8f91d52] .mx-input-wrapper input:-ms-input-placeholder{--tw-placeholder-opacity:1!important;color:rgba(63,63,70,var(--tw-placeholder-opacity))!important}[data-v-d8f91d52] .mx-input-wrapper input::-ms-input-placeholder{--tw-placeholder-opacity:1!important;color:rgba(63,63,70,var(--tw-placeholder-opacity))!important}[data-v-d8f91d52] .mx-input-wrapper input::placeholder{--tw-placeholder-opacity:1!important;color:rgba(63,63,70,var(--tw-placeholder-opacity))!important}[data-v-d8f91d52] .mx-input-wrapper input{pointer-events:none!important;--tw-text-opacity:1!important;color:rgba(63,63,70,var(--tw-text-opacity))!important;width:100%!important}[data-v-d8f91d52] .mx-input-wrapper:hover .mx-icon-clear{display:block}[data-v-d8f91d52] .mx-input-wrapper:hover .mx-icon-clear:hover svg{fill:currentColor;--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}[data-v-d8f91d52] .mx-input-wrapper .mx-icon-clear,[data-v-d8f91d52] .mx-input-wrapper:hover .mx-icon-clear+.mx-icon-calendar{display:none}[data-v-d8f91d52] .mx-input-wrapper input:after{content:"";position:relative;top:-1px;display:inline-block;width:10px;height:10px;vertical-align:middle;border-color:currentcolor;border-style:solid;border-width:2px 0 0 2px;border-radius:1px;box-sizing:border-box;transform-origin:center;transform:rotate(-45deg) scale(.7)}[data-v-d8f91d52] .mx-icon-calendar,[data-v-d8f91d52] .mx-icon-clear{padding:.625rem;width:2.75rem}@media (min-width:640px){[data-v-d8f91d52] .mx-icon-calendar,[data-v-d8f91d52] .mx-icon-clear{padding:.75rem}}[data-v-d8f91d52] .mx-icon-calendar svg,[data-v-d8f91d52] .mx-icon-clear svg{fill:currentColor;--tw-text-opacity:1;color:rgba(63,63,70,var(--tw-text-opacity))}[data-v-d8f91d52] .mx-calendar-header-label{font-weight:800;font-size:.875rem;line-height:1.25rem;line-height:2.25rem}[data-v-d8f91d52] .mx-calendar-header-label .mx-calendar-decade-separator{height:2px;margin-top:-2px;--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity));display:inline-block;margin-left:.5rem;margin-right:.5rem;vertical-align:middle;width:.5rem}[data-v-d8f91d52] .mx-calendar-header-label button:hover{--tw-bg-opacity:1;background-color:rgba(244,244,245,var(--tw-bg-opacity))}[data-v-d8f91d52] .mx-calendar-header-label button{border-radius:.75rem;display:inline-block;font-weight:800;padding-left:.5rem;padding-right:.5rem}[data-v-d8f91d52] .mx-calendar-header-label button:hover{--tw-text-opacity:1;color:rgba(226,30,66,var(--tw-text-opacity))}[data-v-d8f91d52] .mx-datepicker-body{box-shadow:0 0 15px rgba(101,119,134,.2),0 0 3px 1px rgba(101,119,134,.15)!important;--tw-bg-opacity:1!important;background-color:rgba(255,255,255,var(--tw-bg-opacity))!important;border-radius:1rem!important;padding:.75rem!important;text-align:center!important}[data-v-d8f91d52] .mx-calendar table{margin-left:auto;margin-right:auto}[data-v-d8f91d52] .mx-calendar table thead{font-weight:700!important;font-size:.875rem!important;line-height:1.25rem!important;line-height:2.25rem!important}[data-v-d8f91d52] .mx-calendar table td:hover{--tw-bg-opacity:1!important;background-color:rgba(244,244,245,var(--tw-bg-opacity))!important}[data-v-d8f91d52] .mx-calendar table td{border-radius:.75rem!important;cursor:pointer!important;font-weight:500!important;font-size:.75rem!important;line-height:1rem!important}[data-v-d8f91d52] .mx-calendar table td.today{font-weight:700!important;--tw-text-opacity:1!important;color:rgba(226,30,66,var(--tw-text-opacity))!important}[data-v-d8f91d52] .mx-calendar table td.active{--tw-bg-opacity:1!important;background-color:rgba(226,30,66,var(--tw-bg-opacity))!important;font-weight:700!important;--tw-text-opacity:1!important;color:rgba(255,255,255,var(--tw-text-opacity))!important}[data-v-d8f91d52] .mx-calendar table td.not-current-month{--tw-text-opacity:1!important;color:rgba(161,161,170,var(--tw-text-opacity))!important}[data-v-d8f91d52] .mx-calendar .mx-table-month td{font-size:.875rem!important;line-height:1.25rem!important}[data-v-d8f91d52] .mx-calendar .mx-table-year{width:135px}[data-v-d8f91d52] .mx-calendar .mx-table-year td{font-size:.875rem!important;line-height:1.25rem!important}[data-v-d8f91d52] .mx-btn-icon-double-left,[data-v-d8f91d52] .mx-btn-icon-left{float:left}[data-v-d8f91d52] .mx-btn-icon-double-right,[data-v-d8f91d52] .mx-btn-icon-right{float:right}[data-v-d8f91d52] .mx-icon-double-left:hover,[data-v-d8f91d52] .mx-icon-left:hover{--tw-bg-opacity:1;background-color:rgba(253,237,240,var(--tw-bg-opacity))}[data-v-d8f91d52] .mx-icon-double-left,[data-v-d8f91d52] .mx-icon-left{border-radius:.75rem;display:block;padding:.5rem .625rem;--tw-text-opacity:1;color:rgba(161,161,170,var(--tw-text-opacity))}[data-v-d8f91d52] .mx-icon-double-left:hover,[data-v-d8f91d52] .mx-icon-left:hover{--tw-text-opacity:1;color:rgba(226,30,66,var(--tw-text-opacity))}[data-v-d8f91d52] .mx-icon-double-right:hover,[data-v-d8f91d52] .mx-icon-right:hover{--tw-bg-opacity:1;background-color:rgba(253,237,240,var(--tw-bg-opacity))}[data-v-d8f91d52] .mx-icon-double-right,[data-v-d8f91d52] .mx-icon-right{border-radius:.75rem;display:block;padding:.5rem .625rem;--tw-text-opacity:1;color:rgba(161,161,170,var(--tw-text-opacity))}[data-v-d8f91d52] .mx-icon-double-right:hover,[data-v-d8f91d52] .mx-icon-right:hover{--tw-text-opacity:1;color:rgba(226,30,66,var(--tw-text-opacity))}[data-v-d8f91d52] .mx-icon-double-left:after,[data-v-d8f91d52] .mx-icon-double-left:before,[data-v-d8f91d52] .mx-icon-left:before{transform-origin:center;transform:rotate(-45deg) scale(.7);margin-right:-3px}[data-v-d8f91d52] .mx-icon-double-left:after,[data-v-d8f91d52] .mx-icon-double-left:before,[data-v-d8f91d52] .mx-icon-double-right:after,[data-v-d8f91d52] .mx-icon-double-right:before,[data-v-d8f91d52] .mx-icon-left:before,[data-v-d8f91d52] .mx-icon-right:before{content:"";position:relative;top:-1px;display:inline-block;width:10px;height:10px;vertical-align:middle;border-color:currentcolor;border-style:solid;border-width:2px 0 0 2px;border-radius:1px;box-sizing:border-box}[data-v-d8f91d52] .mx-icon-double-right:after,[data-v-d8f91d52] .mx-icon-double-right:before,[data-v-d8f91d52] .mx-icon-right:before{transform-origin:center;transform:rotate(135deg) scale(.7);margin-left:-3px}', ""]),
        t.exports = e
    },
    772: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return n
        }
        ));
        var n = {
            data: function() {
                var t = this.$store.state.configs.business
                  , e = this.$store.getters["configs/hasPerm"]
                  , r = !0;
                return t.hasEfact && (r = !e("viewaccountingreports_accountingsummary")),
                {
                    buttons: [{
                        url: {
                            name: "businessSlug"
                        },
                        display: "Reportes",
                        name: "businessSlug",
                        hide: !e("viewsummaryofstats_sale")
                    }, {
                        url: {
                            name: "businessSlug-reports-of-the-day"
                        },
                        display: "Hoy",
                        name: "businessSlug-reports-of-the-day",
                        hide: !e("viewofthedayreports_sale")
                    }, {
                        url: {
                            name: "businessSlug-reports-per-product"
                        },
                        display: "Productos",
                        name: "businessSlug-reports-per-product",
                        hide: !e("viewperproductreports_sale")
                    }, {
                        url: {
                            name: "businessSlug-reports-kardex"
                        },
                        display: "Kardex",
                        name: "businessSlug-reports-kardex",
                        hide: !e("viewkardexproductreports_warehousemovement")
                    }, {
                        url: {
                            name: "businessSlug-reports-accounting"
                        },
                        display: "Contables",
                        name: "businessSlug-reports-accounting",
                        hide: r
                    }, {
                        url: {
                            name: "businessSlug-reports-focus-on-customers"
                        },
                        display: "Clientes",
                        name: "businessSlug-reports-focus-on-customers",
                        hide: !e("viewfocusoncustomerreports_sale")
                    }, {
                        url: {
                            name: "businessSlug-reports-downloads"
                        },
                        display: "Descargas",
                        name: "businessSlug-reports-downloads",
                        hide: !e("viewrequestedreports_requestedreport")
                    }]
                }
            }
        }
    },
    890: function(t, e, r) {
        var content = r(1127);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(26).default)("6416f20f", content, !0, {
            sourceMap: !1
        })
    },
    891: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        }
        ));
        r(23);
        var n = r(4)
          , o = {
            props: ["params"],
            data: function() {
                return {
                    chartId: void 0,
                    chart: {
                        data: {
                            datasets: [],
                            labels: []
                        }
                    }
                }
            },
            watch: {
                params: {
                    handler: function() {
                        this.fetchData()
                    },
                    deep: !0
                }
            },
            mounted: function() {},
            methods: {
                initialize: function() {
                    this.chart = this.initializeChart(),
                    this.fetchData()
                },
                fetchData: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        var r, n, o, c;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t.updateData([], []),
                                    e.prev = 1,
                                    e.next = 4,
                                    t.$axios.$get(t.APIURL, t.params);
                                case 4:
                                    r = e.sent,
                                    n = t.getComputedData(r),
                                    o = n.labels,
                                    c = n.datasets,
                                    t.updateData(o, c),
                                    e.next = 11;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e.catch(1);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 9]])
                    }
                    )))()
                },
                getComputedData: function() {
                    return {
                        labels: [],
                        datasets: []
                    }
                },
                updateData: function(t, e) {
                    this.chart.data.labels = t,
                    this.chart.data.datasets = e,
                    this.chart.ctx && this.chart.update()
                },
                initializeChart: function() {
                    var t = document.getElementById(this.chartId).getContext("2d");
                    return new window.Chart(t,{
                        type: "line",
                        data: {
                            labels: [],
                            datasets: []
                        },
                        options: {
                            responsive: !0,
                            tooltips: {
                                mode: "index",
                                intersect: !1
                            },
                            hover: {
                                mode: "nearest",
                                intersect: !0
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: !0
                                    }
                                }]
                            }
                        }
                    })
                }
            }
        }
    },
    892: function(t, e, r) {
        var content = r(1129);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(26).default)("04bd78b7", content, !0, {
            sourceMap: !1
        })
    },
    893: function(t, e, r) {
        var content = r(1131);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(26).default)("247f1483", content, !0, {
            sourceMap: !1
        })
    },
    894: function(t, e, r) {
        var content = r(1133);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(26).default)("469ab313", content, !0, {
            sourceMap: !1
        })
    }
}]);
 