Date.prototype.format = function (e) {
        var t = this,
            n = Date._formators;
        return n || (Date._formators = n = {
            y: function (e, t) {
                return e = e.getFullYear(), e < 0 ? "BC" + -e : t < 3 && e < 2e3 ? e % 100 : e
            },
            M: function (e) {
                return e.getMonth() + 1
            },
            d: function (e) {
                return e.getDate()
            },
            H: function (e) {
                return e.getHours()
            },
            m: function (e) {
                return e.getMinutes()
            },
            s: function (e) {
                return e.getSeconds()
            },
            e: function (e, t) {
                return (1 === t ? "" : 2 === t ? "周" : "星期") + [2 === t ? "日" : "天", "一", "二", "三", "四", "五", "六"][e.getDay()]
            }
        }), (e || "yyyy/MM/dd HH:mm:ss").replace(/(\w)\1*/g, function (e, r) {
            if (r in n) {
                for (r = "" + n[r](t, e.length); r.length < e.length;) r = "0" + r;
                e = r
            }
            return e
        })
    }, Date.from = function (e, t) {
        if (e && !(e instanceof Date))
            if (t) {
                var n = [0],
                    r = {},
                    o = new RegExp(t.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1").replace(/([yMdHms])\1*/g, function (e, t) {
                        return n.push(t), "\\s*(\\d+)?\\s*"
                    })).exec(e);
                if (o)
                    for (var a = 1; a < o.length; a++) r[n[a]] = +o[a];
                e = new Date(r.y || (new Date).getFullYear(), r.M ? r.M - 1 : (new Date).getMonth(), r.d || 1, r.H || 0, r.m || 0, r.s || 0)
            } else e = new Date(e.constructor === String ? e.replace(/(\d{4})\D*(\d\d?)\D*(\d\d?)/, "$1/$2/$3") : e);
        return e
    }, Date.prototype.addDay = function (e) {
        return new Date(+this + 864e5 * e)
    }, Date.prototype.addMinute = function (e) {
        return new Date(+this + 6e4 * e)
    }, Date.prototype.addMonth = function (e) {
        var t = new Date(+this);
        return t.setMonth(t.getMonth() + e), this.getDate() !== t.getDate() && t.setDate(0), t
    }, Date.prototype.toDay = function () {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate())
    }, Date.now = Date.now || function () {
        return +new Date
    }, window.Fp = {
        detect: function (e) {
            var t = window.navigator.userAgent.toLowerCase(),
                n = {
                    os: function () {
                        return /android/i.test(t) ? "android" : /iphone|ipod|ipad/i.test(t) ? "ios" : void 0
                    },
                    osver: function () {
                        var e = n.os();
                        return "android" === e ? function () {
                            var e = t.match(/android\s([0-9\.]*)/);
                            return e ? e[1] : ""
                        }() : "ios" === e ? function () {
                            var e = window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            return e ? [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)].join(".") : ""
                        }() : void 0
                    }
                };
            return n[e] ? n[e]() : null
        },
        getData: function (e) {
            return null == window.Fp_serverData && (Fp_serverData = {}), void 0 == e ? Fp_serverData : Fp_serverData[e]
        },
        getQuery: function (e) {
            var t = Fp.getQueryRaw(e);
            return null != t ? t : window.Fp_serverQuery && Fp_serverQuery[e.toLowerCase()]
        },
        getQueryRaw: function (e, t) {
            var n = /\?([^#]*)(#|$)/.exec(t || location.href);
            return n && (n = new RegExp("(^|&)" + e.replace(/([\-.*+?^${}()|[\]\/\\])/g, "\\$1") + "=([^&]*)(&|$)", "i").exec(n[1])) ? decodeURIComponent(n[2]) : null
        }
    },
    function () {
        var e = document.documentElement,
            t = Fp.detect("os");
        t && e.classList.add(t), /MicroMessenger/i.test(window.navigator.userAgent) && e.classList.add("wx")
    }();