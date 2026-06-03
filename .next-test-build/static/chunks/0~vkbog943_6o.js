(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  778756,
  (e, t, r) => {
    r.isUnsafeProperty = function (e) {
      return "__proto__" === e;
    };
  },
  333858,
  (e, t, r) => {
    r.isDeepKey = function (e) {
      switch (typeof e) {
        case "number":
        case "symbol":
          return !1;
        case "string":
          return e.includes(".") || e.includes("[") || e.includes("]");
      }
    };
  },
  596736,
  (e, t, r) => {
    r.toKey = function (e) {
      return "string" == typeof e || "symbol" == typeof e
        ? e
        : Object.is(e?.valueOf?.(), -0)
          ? "-0"
          : String(e);
    };
  },
  448018,
  (e, t, r) => {
    r.toString = function e(t) {
      if (null == t) return "";
      if ("string" == typeof t) return t;
      if (Array.isArray(t)) return t.map(e).join(",");
      let r = String(t);
      return "0" === r && Object.is(Number(t), -0) ? "-0" : r;
    };
  },
  979232,
  (e, t, r) => {
    let n = e.r(596736),
      i = e.r(448018);
    r.toPath = function (e) {
      if (Array.isArray(e)) return e.map(n.toKey);
      if ("symbol" == typeof e) return [e];
      e = i.toString(e);
      let t = [],
        r = e.length;
      if (0 === r) return t;
      let a = 0,
        o = "",
        l = "",
        u = !1;
      for (46 === e.charCodeAt(0) && (t.push(""), a++); a < r; ) {
        let n = e[a];
        (l
          ? "\\" === n && a + 1 < r
            ? (o += e[++a])
            : n === l
              ? (l = "")
              : (o += n)
          : u
            ? '"' === n || "'" === n
              ? (l = n)
              : "]" === n
                ? ((u = !1), t.push(o), (o = ""))
                : (o += n)
            : "[" === n
              ? ((u = !0), o && (t.push(o), (o = "")))
              : "." === n
                ? o && (t.push(o), (o = ""))
                : (o += n),
          a++);
      }
      return (o && t.push(o), t);
    };
  },
  918915,
  (e, t, r) => {
    let n = e.r(778756),
      i = e.r(333858),
      a = e.r(596736),
      o = e.r(979232);
    r.get = function e(t, r, l) {
      if (null == t) return l;
      switch (typeof r) {
        case "string": {
          if (n.isUnsafeProperty(r)) return l;
          let a = t[r];
          if (void 0 === a)
            if (i.isDeepKey(r)) return e(t, o.toPath(r), l);
            else return l;
          return a;
        }
        case "number":
        case "symbol": {
          "number" == typeof r && (r = a.toKey(r));
          let e = t[r];
          if (void 0 === e) return l;
          return e;
        }
        default: {
          if (Array.isArray(r)) {
            var u = t,
              c = r,
              s = l;
            if (0 === c.length) return s;
            let e = u;
            for (let t = 0; t < c.length; t++) {
              if (null == e || n.isUnsafeProperty(c[t])) return s;
              e = e[c[t]];
            }
            return void 0 === e ? s : e;
          }
          if (
            ((r = Object.is(r?.valueOf(), -0) ? "-0" : String(r)),
            n.isUnsafeProperty(r))
          )
            return l;
          let e = t[r];
          if (void 0 === e) return l;
          return e;
        }
      }
    };
  },
  992068,
  (e, t, r) => {
    t.exports = e.r(918915).get;
  },
  614595,
  (e, t, r) => {
    "use strict";
    var n = e.r(271645),
      i =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      a = n.useSyncExternalStore,
      o = n.useRef,
      l = n.useEffect,
      u = n.useMemo,
      c = n.useDebugValue;
    r.useSyncExternalStoreWithSelector = function (e, t, r, n, s) {
      var f = o(null);
      if (null === f.current) {
        var d = { hasValue: !1, value: null };
        f.current = d;
      } else d = f.current;
      var p = a(
        e,
        (f = u(
          function () {
            function e(e) {
              if (!l) {
                if (
                  ((l = !0), (a = e), (e = n(e)), void 0 !== s && d.hasValue)
                ) {
                  var t = d.value;
                  if (s(t, e)) return (o = t);
                }
                return (o = e);
              }
              if (((t = o), i(a, e))) return t;
              var r = n(e);
              return void 0 !== s && s(t, r)
                ? ((a = e), t)
                : ((a = e), (o = r));
            }
            var a,
              o,
              l = !1,
              u = void 0 === r ? null : r;
            return [
              function () {
                return e(t());
              },
              null === u
                ? void 0
                : function () {
                    return e(u());
                  },
            ];
          },
          [t, r, n, s],
        ))[0],
        f[1],
      );
      return (
        l(
          function () {
            ((d.hasValue = !0), (d.value = p));
          },
          [p],
        ),
        c(p),
        p
      );
    };
  },
  313027,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(614595);
  },
  755838,
  (e, t, r) => {
    "use strict";
    var n = e.r(271645),
      i =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      a = n.useState,
      o = n.useEffect,
      l = n.useLayoutEffect,
      u = n.useDebugValue;
    function c(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !i(e, r);
      } catch (e) {
        return !0;
      }
    }
    var s =
      "u" < typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
        ? function (e, t) {
            return t();
          }
        : function (e, t) {
            var r = t(),
              n = a({ inst: { value: r, getSnapshot: t } }),
              i = n[0].inst,
              s = n[1];
            return (
              l(
                function () {
                  ((i.value = r), (i.getSnapshot = t), c(i) && s({ inst: i }));
                },
                [e, r, t],
              ),
              o(
                function () {
                  return (
                    c(i) && s({ inst: i }),
                    e(function () {
                      c(i) && s({ inst: i });
                    })
                  );
                },
                [e],
              ),
              u(r),
              r
            );
          };
    r.useSyncExternalStore =
      void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : s;
  },
  802239,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(755838);
  },
  752822,
  (e, t, r) => {
    "use strict";
    var n = e.r(271645),
      i = e.r(802239),
      a =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      o = i.useSyncExternalStore,
      l = n.useRef,
      u = n.useEffect,
      c = n.useMemo,
      s = n.useDebugValue;
    r.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
      var f = l(null);
      if (null === f.current) {
        var d = { hasValue: !1, value: null };
        f.current = d;
      } else d = f.current;
      var p = o(
        e,
        (f = c(
          function () {
            function e(e) {
              if (!u) {
                if (
                  ((u = !0), (o = e), (e = n(e)), void 0 !== i && d.hasValue)
                ) {
                  var t = d.value;
                  if (i(t, e)) return (l = t);
                }
                return (l = e);
              }
              if (((t = l), a(o, e))) return t;
              var r = n(e);
              return void 0 !== i && i(t, r)
                ? ((o = e), t)
                : ((o = e), (l = r));
            }
            var o,
              l,
              u = !1,
              c = void 0 === r ? null : r;
            return [
              function () {
                return e(t());
              },
              null === c
                ? void 0
                : function () {
                    return e(c());
                  },
            ];
          },
          [t, r, n, i],
        ))[0],
        f[1],
      );
      return (
        u(
          function () {
            ((d.hasValue = !0), (d.value = p));
          },
          [p],
        ),
        s(p),
        p
      );
    };
  },
  430224,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(752822);
  },
  844647,
  (e, t, r) => {
    r.flatten = function (e, t = 1) {
      let r = [],
        n = Math.floor(t),
        i = (e, t) => {
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            Array.isArray(o) && t < n ? i(o, t + 1) : r.push(o);
          }
        };
      return (i(e, 0), r);
    };
  },
  393363,
  (e, t, r) => {
    r.isEqualsSameValueZero = function (e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t));
    };
  },
  123855,
  (e, t, r) => {
    e.r(393363);
  },
  570871,
  (e, t, r) => {
    r.isLength = function (e) {
      return Number.isSafeInteger(e) && e >= 0;
    };
  },
  269642,
  (e, t, r) => {
    let n = e.r(570871);
    r.isArrayLike = function (e) {
      return null != e && "function" != typeof e && n.isLength(e.length);
    };
  },
  490820,
  (e, t, r) => {
    r.isObject = function (e) {
      return null !== e && ("object" == typeof e || "function" == typeof e);
    };
  },
  605257,
  (e, t, r) => {
    let n = /^(?:0|[1-9]\d*)$/;
    r.isIndex = function (e, t = Number.MAX_SAFE_INTEGER) {
      switch (typeof e) {
        case "number":
          return Number.isInteger(e) && e >= 0 && e < t;
        case "symbol":
          return !1;
        case "string":
          return n.test(e);
      }
    };
  },
  615111,
  (e, t, r) => {
    let n = e.r(393363);
    e.r(123855);
    let i = e.r(269642),
      a = e.r(490820),
      o = e.r(605257);
    r.isIterateeCall = function (e, t, r) {
      return (
        !!a.isObject(r) &&
        ((!!("number" == typeof t && i.isArrayLike(r) && o.isIndex(t)) &&
          t < r.length) ||
          ("string" == typeof t && t in r)) &&
        n.isEqualsSameValueZero(r[t], e)
      );
    };
  },
  545403,
  (e, t, r) => {
    function n(e) {
      return "symbol" == typeof e
        ? 1
        : null === e
          ? 2
          : void 0 === e
            ? 3
            : 4 * (e != e);
    }
    r.compareValues = (e, t, r) => {
      if (e !== t) {
        let i = n(e),
          a = n(t);
        if (i === a && 0 === i) {
          if (e < t) return "desc" === r ? 1 : -1;
          if (e > t) return "desc" === r ? -1 : 1;
        }
        return "desc" === r ? a - i : i - a;
      }
      return 0;
    };
  },
  209542,
  (e, t, r) => {
    r.isSymbol = function (e) {
      return "symbol" == typeof e || e instanceof Symbol;
    };
  },
  538104,
  (e, t, r) => {
    let n = e.r(209542),
      i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      a = /^\w*$/;
    r.isKey = function (e, t) {
      return (
        !Array.isArray(e) &&
        (!!(
          "number" == typeof e ||
          "boolean" == typeof e ||
          null == e ||
          n.isSymbol(e)
        ) ||
          ("string" == typeof e && (a.test(e) || !i.test(e))) ||
          (null != t && Object.hasOwn(t, e)))
      );
    };
  },
  200910,
  (e, t, r) => {
    let n = e.r(979232),
      i = e.r(545403),
      a = e.r(538104);
    r.orderBy = function (e, t, r, o) {
      if (null == e) return [];
      ((r = o ? void 0 : r),
        Array.isArray(e) || (e = Object.values(e)),
        Array.isArray(t) || (t = null == t ? [null] : [t]),
        0 === t.length && (t = [null]),
        Array.isArray(r) || (r = null == r ? [] : [r]),
        (r = r.map((e) => String(e))));
      let l = (e, t) => {
          let r = e;
          for (let e = 0; e < t.length && null != r; ++e) r = r[t[e]];
          return r;
        },
        u = t.map((e) =>
          (Array.isArray(e) && 1 === e.length && (e = e[0]),
          null == e || "function" == typeof e || Array.isArray(e) || a.isKey(e))
            ? e
            : { key: e, path: n.toPath(e) },
        );
      return e
        .map((e) => ({
          original: e,
          criteria: u.map((t) => {
            var r, n;
            return (
              (r = t),
              null == (n = e) || null == r
                ? n
                : "object" == typeof r && "key" in r
                  ? Object.hasOwn(n, r.key)
                    ? n[r.key]
                    : l(n, r.path)
                  : "function" == typeof r
                    ? r(n)
                    : Array.isArray(r)
                      ? l(n, r)
                      : "object" == typeof n
                        ? n[r]
                        : n
            );
          }),
        }))
        .slice()
        .sort((e, t) => {
          for (let n = 0; n < u.length; n++) {
            let a = i.compareValues(e.criteria[n], t.criteria[n], r[n]);
            if (0 !== a) return a;
          }
          return 0;
        })
        .map((e) => e.original);
    };
  },
  369955,
  (e, t, r) => {
    let n = e.r(844647),
      i = e.r(615111),
      a = e.r(200910);
    r.sortBy = function (e, ...t) {
      let r = t.length;
      return (
        r > 1 && i.isIterateeCall(e, t[0], t[1])
          ? (t = [])
          : r > 2 && i.isIterateeCall(t[0], t[1], t[2]) && (t = [t[0]]),
        a.orderBy(e, n.flatten(t), ["asc"])
      );
    };
  },
  342342,
  (e, t, r) => {
    t.exports = e.r(369955).sortBy;
  },
  24798,
  (e, t, r) => {
    r.debounce = function (e, t, { signal: r, edges: n } = {}) {
      let i,
        a = null,
        o = null != n && n.includes("leading"),
        l = null == n || n.includes("trailing"),
        u = () => {
          null !== a && (e.apply(i, a), (i = void 0), (a = null));
        },
        c = null,
        s = () => {
          (null != c && clearTimeout(c),
            (c = setTimeout(() => {
              ((c = null), l && u(), f());
            }, t)));
        },
        f = () => {
          (null !== c && (clearTimeout(c), (c = null)),
            (i = void 0),
            (a = null));
        },
        d = function (...e) {
          if (r?.aborted) return;
          ((i = this), (a = e));
          let t = null == c;
          (s(), o && t && u());
        };
      return (
        (d.schedule = s),
        (d.cancel = f),
        (d.flush = () => {
          u();
        }),
        r?.addEventListener("abort", f, { once: !0 }),
        d
      );
    };
  },
  396074,
  (e, t, r) => {
    let n = e.r(24798);
    r.debounce = function (e, t = 0, r = {}) {
      let i;
      "object" != typeof r && (r = {});
      let { leading: a = !1, trailing: o = !0, maxWait: l } = r,
        u = [, ,];
      (a && (u[0] = "leading"), o && (u[1] = "trailing"));
      let c = null,
        s = n.debounce(
          function (...t) {
            ((i = e.apply(this, t)), (c = null));
          },
          t,
          { edges: u },
        ),
        f = function (...t) {
          return null != l &&
            (null === c && (c = Date.now()), Date.now() - c >= l)
            ? ((i = e.apply(this, t)),
              (c = Date.now()),
              s.cancel(),
              s.schedule(),
              i)
            : (s.apply(this, t), i);
        };
      return ((f.cancel = s.cancel), (f.flush = () => (s.flush(), i)), f);
    };
  },
  46508,
  (e, t, r) => {
    let n = e.r(396074);
    r.throttle = function (e, t = 0, r = {}) {
      let { leading: i = !0, trailing: a = !0 } = r;
      return n.debounce(e, t, { leading: i, maxWait: t, trailing: a });
    };
  },
  458723,
  (e, t, r) => {
    t.exports = e.r(46508).throttle;
  },
  341015,
  (e, t, r) => {
    let n = e.r(209542);
    r.toNumber = function (e) {
      return n.isSymbol(e) ? NaN : Number(e);
    };
  },
  389793,
  (e, t, r) => {
    let n = e.r(341015);
    r.toFinite = function (e) {
      return e
        ? (e = n.toNumber(e)) === 1 / 0 || e === -1 / 0
          ? (e < 0 ? -1 : 1) * Number.MAX_VALUE
          : e == e
            ? e
            : 0
        : 0 === e
          ? e
          : 0;
    };
  },
  745264,
  (e, t, r) => {
    let n = e.r(389793),
      i = e.r(615111);
    r.range = function (e, t, r) {
      (r &&
        "number" != typeof r &&
        i.isIterateeCall(e, t, r) &&
        (t = r = void 0),
        (e = n.toFinite(e)),
        void 0 === t ? ((t = e), (e = 0)) : (t = n.toFinite(t)),
        (r = void 0 === r ? (e < t ? 1 : -1) : n.toFinite(r)));
      let a = Math.max(Math.ceil((t - e) / (r || 1)), 0),
        o = Array(a);
      for (let t = 0; t < a; t++) ((o[t] = e), (e += r));
      return o;
    };
  },
  666814,
  (e, t, r) => {
    t.exports = e.r(745264).range;
  },
  651655,
  (e, t, r) => {
    !(function (r) {
      "use strict";
      var n,
        i = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
        },
        a = !0,
        o = "[DecimalError] ",
        l = o + "Invalid argument: ",
        u = o + "Exponent out of range: ",
        c = Math.floor,
        s = Math.pow,
        f = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        d = c(1286742750677284.5),
        p = {};
      function h(e, t) {
        var r,
          n,
          i,
          o,
          l,
          u,
          c,
          s,
          f = e.constructor,
          d = f.precision;
        if (!e.s || !t.s) return (t.s || (t = new f(e)), a ? P(t, d) : t);
        if (
          ((c = e.d),
          (s = t.d),
          (l = e.e),
          (i = t.e),
          (c = c.slice()),
          (o = l - i))
        ) {
          for (
            o < 0
              ? ((n = c), (o = -o), (u = s.length))
              : ((n = s), (i = l), (u = c.length)),
              o > (u = (l = Math.ceil(d / 7)) > u ? l + 1 : u + 1) &&
                ((o = u), (n.length = 1)),
              n.reverse();
            o--;
          )
            n.push(0);
          n.reverse();
        }
        for (
          (u = c.length) - (o = s.length) < 0 &&
            ((o = u), (n = s), (s = c), (c = n)),
            r = 0;
          o;
        )
          ((r = ((c[--o] = c[o] + s[o] + r) / 1e7) | 0), (c[o] %= 1e7));
        for (r && (c.unshift(r), ++i), u = c.length; 0 == c[--u]; ) c.pop();
        return ((t.d = c), (t.e = i), a ? P(t, d) : t);
      }
      function y(e, t, r) {
        if (e !== ~~e || e < t || e > r) throw Error(l + e);
      }
      function v(e) {
        var t,
          r,
          n,
          i = e.length - 1,
          a = "",
          o = e[0];
        if (i > 0) {
          for (a += o, t = 1; t < i; t++)
            ((r = 7 - (n = e[t] + "").length) && (a += w(r)), (a += n));
          (r = 7 - (n = (o = e[t]) + "").length) && (a += w(r));
        } else if (0 === o) return "0";
        for (; o % 10 == 0; ) o /= 10;
        return a + o;
      }
      ((p.absoluteValue = p.abs =
        function () {
          var e = new this.constructor(this);
          return (e.s && (e.s = 1), e);
        }),
        (p.comparedTo = p.cmp =
          function (e) {
            var t, r, n, i;
            if (((e = new this.constructor(e)), this.s !== e.s))
              return this.s || -e.s;
            if (this.e !== e.e) return (this.e > e.e) ^ (this.s < 0) ? 1 : -1;
            for (
              t = 0, r = (n = this.d.length) < (i = e.d.length) ? n : i;
              t < r;
              ++t
            )
              if (this.d[t] !== e.d[t])
                return (this.d[t] > e.d[t]) ^ (this.s < 0) ? 1 : -1;
            return n === i ? 0 : (n > i) ^ (this.s < 0) ? 1 : -1;
          }),
        (p.decimalPlaces = p.dp =
          function () {
            var e = this.d.length - 1,
              t = (e - this.e) * 7;
            if ((e = this.d[e])) for (; e % 10 == 0; e /= 10) t--;
            return t < 0 ? 0 : t;
          }),
        (p.dividedBy = p.div =
          function (e) {
            return g(this, new this.constructor(e));
          }),
        (p.dividedToIntegerBy = p.idiv =
          function (e) {
            var t = this.constructor;
            return P(g(this, new t(e), 0, 1), t.precision);
          }),
        (p.equals = p.eq =
          function (e) {
            return !this.cmp(e);
          }),
        (p.exponent = function () {
          return b(this);
        }),
        (p.greaterThan = p.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (p.greaterThanOrEqualTo = p.gte =
          function (e) {
            return this.cmp(e) >= 0;
          }),
        (p.isInteger = p.isint =
          function () {
            return this.e > this.d.length - 2;
          }),
        (p.isNegative = p.isneg =
          function () {
            return this.s < 0;
          }),
        (p.isPositive = p.ispos =
          function () {
            return this.s > 0;
          }),
        (p.isZero = function () {
          return 0 === this.s;
        }),
        (p.lessThan = p.lt =
          function (e) {
            return 0 > this.cmp(e);
          }),
        (p.lessThanOrEqualTo = p.lte =
          function (e) {
            return 1 > this.cmp(e);
          }),
        (p.logarithm = p.log =
          function (e) {
            var t,
              r = this.constructor,
              i = r.precision,
              l = i + 5;
            if (void 0 === e) e = new r(10);
            else if ((e = new r(e)).s < 1 || e.eq(n)) throw Error(o + "NaN");
            if (this.s < 1) throw Error(o + (this.s ? "NaN" : "-Infinity"));
            return this.eq(n)
              ? new r(0)
              : ((a = !1), (t = g(O(this, l), O(e, l), l)), (a = !0), P(t, i));
          }),
        (p.minus = p.sub =
          function (e) {
            return (
              (e = new this.constructor(e)),
              this.s == e.s ? _(this, e) : h(this, ((e.s = -e.s), e))
            );
          }),
        (p.modulo = p.mod =
          function (e) {
            var t,
              r = this.constructor,
              n = r.precision;
            if (!(e = new r(e)).s) throw Error(o + "NaN");
            return this.s
              ? ((a = !1),
                (t = g(this, e, 0, 1).times(e)),
                (a = !0),
                this.minus(t))
              : P(new r(this), n);
          }),
        (p.naturalExponential = p.exp =
          function () {
            return m(this);
          }),
        (p.naturalLogarithm = p.ln =
          function () {
            return O(this);
          }),
        (p.negated = p.neg =
          function () {
            var e = new this.constructor(this);
            return ((e.s = -e.s || 0), e);
          }),
        (p.plus = p.add =
          function (e) {
            return (
              (e = new this.constructor(e)),
              this.s == e.s ? h(this, e) : _(this, ((e.s = -e.s), e))
            );
          }),
        (p.precision = p.sd =
          function (e) {
            var t, r, n;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
              throw Error(l + e);
            if (
              ((t = b(this) + 1),
              (r = 7 * (n = this.d.length - 1) + 1),
              (n = this.d[n]))
            ) {
              for (; n % 10 == 0; n /= 10) r--;
              for (n = this.d[0]; n >= 10; n /= 10) r++;
            }
            return e && t > r ? t : r;
          }),
        (p.squareRoot = p.sqrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              l,
              u,
              s = this.constructor;
            if (this.s < 1) {
              if (!this.s) return new s(0);
              throw Error(o + "NaN");
            }
            for (
              e = b(this),
                a = !1,
                0 == (i = Math.sqrt(+this)) || i == 1 / 0
                  ? (((t = v(this.d)).length + e) % 2 == 0 && (t += "0"),
                    (i = Math.sqrt(t)),
                    (e = c((e + 1) / 2) - (e < 0 || e % 2)),
                    (n = new s(
                      (t =
                        i == 1 / 0
                          ? "5e" + e
                          : (t = i.toExponential()).slice(
                              0,
                              t.indexOf("e") + 1,
                            ) + e),
                    )))
                  : (n = new s(i.toString())),
                i = u = (r = s.precision) + 3;
              ;
            )
              if (
                ((n = (l = n).plus(g(this, l, u + 2)).times(0.5)),
                v(l.d).slice(0, u) === (t = v(n.d)).slice(0, u))
              ) {
                if (((t = t.slice(u - 3, u + 1)), i == u && "4999" == t)) {
                  if ((P(l, r + 1, 0), l.times(l).eq(this))) {
                    n = l;
                    break;
                  }
                } else if ("9999" != t) break;
                u += 4;
              }
            return ((a = !0), P(n, r));
          }),
        (p.times = p.mul =
          function (e) {
            var t,
              r,
              n,
              i,
              o,
              l,
              u,
              c,
              s,
              f = this.constructor,
              d = this.d,
              p = (e = new f(e)).d;
            if (!this.s || !e.s) return new f(0);
            for (
              e.s *= this.s,
                r = this.e + e.e,
                (c = d.length) < (s = p.length) &&
                  ((o = d), (d = p), (p = o), (l = c), (c = s), (s = l)),
                o = [],
                n = l = c + s;
              n--;
            )
              o.push(0);
            for (n = s; --n >= 0; ) {
              for (t = 0, i = c + n; i > n; )
                ((u = o[i] + p[n] * d[i - n - 1] + t),
                  (o[i--] = (u % 1e7) | 0),
                  (t = (u / 1e7) | 0));
              o[i] = ((o[i] + t) % 1e7) | 0;
            }
            for (; !o[--l]; ) o.pop();
            return (
              t ? ++r : o.shift(),
              (e.d = o),
              (e.e = r),
              a ? P(e, f.precision) : e
            );
          }),
        (p.toDecimalPlaces = p.todp =
          function (e, t) {
            var r = this,
              n = r.constructor;
            return ((r = new n(r)), void 0 === e)
              ? r
              : (y(e, 0, 1e9),
                void 0 === t ? (t = n.rounding) : y(t, 0, 8),
                P(r, e + b(r) + 1, t));
          }),
        (p.toExponential = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = E(n, !0))
              : (y(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : y(t, 0, 8),
                (r = E((n = P(new i(n), e + 1, t)), !0, e + 1))),
            r
          );
        }),
        (p.toFixed = function (e, t) {
          var r,
            n,
            i = this.constructor;
          return void 0 === e
            ? E(this)
            : (y(e, 0, 1e9),
              void 0 === t ? (t = i.rounding) : y(t, 0, 8),
              (r = E(
                (n = P(new i(this), e + b(this) + 1, t)).abs(),
                !1,
                e + b(n) + 1,
              )),
              this.isneg() && !this.isZero() ? "-" + r : r);
        }),
        (p.toInteger = p.toint =
          function () {
            var e = this.constructor;
            return P(new e(this), b(this) + 1, e.rounding);
          }),
        (p.toNumber = function () {
          return +this;
        }),
        (p.toPower = p.pow =
          function (e) {
            var t,
              r,
              i,
              l,
              u,
              s,
              f = this,
              d = f.constructor,
              p = +(e = new d(e));
            if (!e.s) return new d(n);
            if (!(f = new d(f)).s) {
              if (e.s < 1) throw Error(o + "Infinity");
              return f;
            }
            if (f.eq(n)) return f;
            if (((i = d.precision), e.eq(n))) return P(f, i);
            if (((s = (t = e.e) >= (r = e.d.length - 1)), (u = f.s), s)) {
              if ((r = p < 0 ? -p : p) <= 0x1fffffffffffff) {
                for (
                  l = new d(n), t = Math.ceil(i / 7 + 4), a = !1;
                  r % 2 && S((l = l.times(f)).d, t), 0 !== (r = c(r / 2));
                )
                  S((f = f.times(f)).d, t);
                return ((a = !0), e.s < 0 ? new d(n).div(l) : P(l, i));
              }
            } else if (u < 0) throw Error(o + "NaN");
            return (
              (u = u < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1),
              (f.s = 1),
              (a = !1),
              (l = e.times(O(f, i + 12))),
              (a = !0),
              ((l = m(l)).s = u),
              l
            );
          }),
        (p.toPrecision = function (e, t) {
          var r,
            n,
            i = this,
            a = i.constructor;
          return (
            void 0 === e
              ? ((r = b(i)), (n = E(i, r <= a.toExpNeg || r >= a.toExpPos)))
              : (y(e, 1, 1e9),
                void 0 === t ? (t = a.rounding) : y(t, 0, 8),
                (r = b((i = P(new a(i), e, t)))),
                (n = E(i, e <= r || r <= a.toExpNeg, e))),
            n
          );
        }),
        (p.toSignificantDigits = p.tosd =
          function (e, t) {
            var r = this.constructor;
            return (
              void 0 === e
                ? ((e = r.precision), (t = r.rounding))
                : (y(e, 1, 1e9), void 0 === t ? (t = r.rounding) : y(t, 0, 8)),
              P(new r(this), e, t)
            );
          }),
        (p.toString =
          p.valueOf =
          p.val =
          p.toJSON =
            function () {
              var e = b(this),
                t = this.constructor;
              return E(this, e <= t.toExpNeg || e >= t.toExpPos);
            }));
      var g = (function () {
        function e(e, t) {
          var r,
            n = 0,
            i = e.length;
          for (e = e.slice(); i--; )
            ((r = e[i] * t + n), (e[i] = (r % 1e7) | 0), (n = (r / 1e7) | 0));
          return (n && e.unshift(n), e);
        }
        function t(e, t, r, n) {
          var i, a;
          if (r != n) a = r > n ? 1 : -1;
          else
            for (i = a = 0; i < r; i++)
              if (e[i] != t[i]) {
                a = e[i] > t[i] ? 1 : -1;
                break;
              }
          return a;
        }
        function r(e, t, r) {
          for (var n = 0; r--; )
            ((e[r] -= n), (n = +(e[r] < t[r])), (e[r] = 1e7 * n + e[r] - t[r]));
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (n, i, a, l) {
          var u,
            c,
            s,
            f,
            d,
            p,
            h,
            y,
            v,
            g,
            m,
            x,
            w,
            O,
            j,
            _,
            E,
            S,
            k = n.constructor,
            A = n.s == i.s ? 1 : -1,
            M = n.d,
            C = i.d;
          if (!n.s) return new k(n);
          if (!i.s) throw Error(o + "Division by zero");
          for (
            s = 0,
              c = n.e - i.e,
              E = C.length,
              j = M.length,
              y = (h = new k(A)).d = [];
            C[s] == (M[s] || 0);
          )
            ++s;
          if (
            (C[s] > (M[s] || 0) && --c,
            (x =
              null == a ? (a = k.precision) : l ? a + (b(n) - b(i)) + 1 : a) <
              0)
          )
            return new k(0);
          if (((x = (x / 7 + 2) | 0), (s = 0), 1 == E))
            for (f = 0, C = C[0], x++; (s < j || f) && x--; s++)
              ((w = 1e7 * f + (M[s] || 0)),
                (y[s] = (w / C) | 0),
                (f = (w % C) | 0));
          else {
            for (
              (f = (1e7 / (C[0] + 1)) | 0) > 1 &&
                ((C = e(C, f)), (M = e(M, f)), (E = C.length), (j = M.length)),
                O = E,
                g = (v = M.slice(0, E)).length;
              g < E;
            )
              v[g++] = 0;
            ((S = C.slice()).unshift(0), (_ = C[0]), C[1] >= 1e7 / 2 && ++_);
            do
              ((f = 0),
                (u = t(C, v, E, g)) < 0
                  ? ((m = v[0]),
                    E != g && (m = 1e7 * m + (v[1] || 0)),
                    (f = (m / _) | 0) > 1
                      ? (f >= 1e7 && (f = 1e7 - 1),
                        (p = (d = e(C, f)).length),
                        (g = v.length),
                        1 == (u = t(d, v, p, g)) &&
                          (f--, r(d, E < p ? S : C, p)))
                      : (0 == f && (u = f = 1), (d = C.slice())),
                    (p = d.length) < g && d.unshift(0),
                    r(v, d, g),
                    -1 == u &&
                      ((g = v.length),
                      (u = t(C, v, E, g)) < 1 && (f++, r(v, E < g ? S : C, g))),
                    (g = v.length))
                  : 0 === u && (f++, (v = [0])),
                (y[s++] = f),
                u && v[0] ? (v[g++] = M[O] || 0) : ((v = [M[O]]), (g = 1)));
            while ((O++ < j || void 0 !== v[0]) && x--);
          }
          return (y[0] || y.shift(), (h.e = c), P(h, l ? a + b(h) + 1 : a));
        };
      })();
      function m(e, t) {
        var r,
          i,
          o,
          l,
          c,
          f = 0,
          d = 0,
          p = e.constructor,
          h = p.precision;
        if (b(e) > 16) throw Error(u + b(e));
        if (!e.s) return new p(n);
        for (
          null == t ? ((a = !1), (c = h)) : (c = t), l = new p(0.03125);
          e.abs().gte(0.1);
        )
          ((e = e.times(l)), (d += 5));
        for (
          c += ((Math.log(s(2, d)) / Math.LN10) * 2 + 5) | 0,
            r = i = o = new p(n),
            p.precision = c;
          ;
        ) {
          if (
            ((i = P(i.times(e), c)),
            (r = r.times(++f)),
            v((l = o.plus(g(i, r, c))).d).slice(0, c) === v(o.d).slice(0, c))
          ) {
            for (; d--; ) o = P(o.times(o), c);
            return ((p.precision = h), null == t ? ((a = !0), P(o, h)) : o);
          }
          o = l;
        }
      }
      function b(e) {
        for (var t = 7 * e.e, r = e.d[0]; r >= 10; r /= 10) t++;
        return t;
      }
      function x(e, t, r) {
        if (t > e.LN10.sd())
          throw (
            (a = !0),
            r && (e.precision = r),
            Error(o + "LN10 precision limit exceeded")
          );
        return P(new e(e.LN10), t);
      }
      function w(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
      }
      function O(e, t) {
        var r,
          i,
          l,
          u,
          c,
          s,
          f,
          d,
          p,
          h = 1,
          y = e,
          m = y.d,
          w = y.constructor,
          j = w.precision;
        if (y.s < 1) throw Error(o + (y.s ? "NaN" : "-Infinity"));
        if (y.eq(n)) return new w(0);
        if ((null == t ? ((a = !1), (d = j)) : (d = t), y.eq(10)))
          return (null == t && (a = !0), x(w, d));
        if (
          ((w.precision = d += 10),
          (i = (r = v(m)).charAt(0)),
          !(15e14 > Math.abs((u = b(y)))))
        )
          return (
            (f = x(w, d + 2, j).times(u + "")),
            (y = O(new w(i + "." + r.slice(1)), d - 10).plus(f)),
            (w.precision = j),
            null == t ? ((a = !0), P(y, j)) : y
          );
        for (; (i < 7 && 1 != i) || (1 == i && r.charAt(1) > 3); )
          ((i = (r = v((y = y.times(e)).d)).charAt(0)), h++);
        for (
          u = b(y),
            i > 1
              ? ((y = new w("0." + r)), u++)
              : (y = new w(i + "." + r.slice(1))),
            s = c = y = g(y.minus(n), y.plus(n), d),
            p = P(y.times(y), d),
            l = 3;
          ;
        ) {
          if (
            ((c = P(c.times(p), d)),
            v((f = s.plus(g(c, new w(l), d))).d).slice(0, d) ===
              v(s.d).slice(0, d))
          )
            return (
              (s = s.times(2)),
              0 !== u && (s = s.plus(x(w, d + 2, j).times(u + ""))),
              (s = g(s, new w(h), d)),
              (w.precision = j),
              null == t ? ((a = !0), P(s, j)) : s
            );
          ((s = f), (l += 2));
        }
      }
      function j(e, t) {
        var r, n, i;
        for (
          (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (n = t.search(/e/i)) > 0
              ? (r < 0 && (r = n),
                (r += +t.slice(n + 1)),
                (t = t.substring(0, n)))
              : r < 0 && (r = t.length),
            n = 0;
          48 === t.charCodeAt(n);
        )
          ++n;
        for (i = t.length; 48 === t.charCodeAt(i - 1); ) --i;
        if ((t = t.slice(n, i))) {
          if (
            ((i -= n),
            (e.e = c((r = r - n - 1) / 7)),
            (e.d = []),
            (n = (r + 1) % 7),
            r < 0 && (n += 7),
            n < i)
          ) {
            for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i; )
              e.d.push(+t.slice(n, (n += 7)));
            n = 7 - (t = t.slice(n)).length;
          } else n -= i;
          for (; n--; ) t += "0";
          if ((e.d.push(+t), a && (e.e > d || e.e < -d))) throw Error(u + r);
        } else ((e.s = 0), (e.e = 0), (e.d = [0]));
        return e;
      }
      function P(e, t, r) {
        var n,
          i,
          o,
          l,
          f,
          p,
          h,
          y,
          v = e.d;
        for (l = 1, o = v[0]; o >= 10; o /= 10) l++;
        if ((n = t - l) < 0) ((n += 7), (i = t), (h = v[(y = 0)]));
        else {
          if ((y = Math.ceil((n + 1) / 7)) >= (o = v.length)) return e;
          for (l = 1, h = o = v[y]; o >= 10; o /= 10) l++;
          ((n %= 7), (i = n - 7 + l));
        }
        if (
          (void 0 !== r &&
            ((f = ((h / (o = s(10, l - i - 1))) % 10) | 0),
            (p = t < 0 || void 0 !== v[y + 1] || h % o),
            (p =
              r < 4
                ? (f || p) && (0 == r || r == (e.s < 0 ? 3 : 2))
                : f > 5 ||
                  (5 == f &&
                    (4 == r ||
                      p ||
                      (6 == r &&
                        ((n > 0 ? (i > 0 ? h / s(10, l - i) : 0) : v[y - 1]) %
                          10) &
                          1) ||
                      r == (e.s < 0 ? 8 : 7))))),
          t < 1 || !v[0])
        )
          return (
            p
              ? ((o = b(e)),
                (v.length = 1),
                (t = t - o - 1),
                (v[0] = s(10, (7 - (t % 7)) % 7)),
                (e.e = c(-t / 7) || 0))
              : ((v.length = 1), (v[0] = e.e = e.s = 0)),
            e
          );
        if (
          (0 == n
            ? ((v.length = y), (o = 1), y--)
            : ((v.length = y + 1),
              (o = s(10, 7 - n)),
              (v[y] = i > 0 ? (((h / s(10, l - i)) % s(10, i)) | 0) * o : 0)),
          p)
        )
          for (;;)
            if (0 == y) {
              1e7 == (v[0] += o) && ((v[0] = 1), ++e.e);
              break;
            } else {
              if (((v[y] += o), 1e7 != v[y])) break;
              ((v[y--] = 0), (o = 1));
            }
        for (n = v.length; 0 === v[--n]; ) v.pop();
        if (a && (e.e > d || e.e < -d)) throw Error(u + b(e));
        return e;
      }
      function _(e, t) {
        var r,
          n,
          i,
          o,
          l,
          u,
          c,
          s,
          f,
          d,
          p = e.constructor,
          h = p.precision;
        if (!e.s || !t.s)
          return (t.s ? (t.s = -t.s) : (t = new p(e)), a ? P(t, h) : t);
        if (
          ((c = e.d),
          (d = t.d),
          (n = t.e),
          (s = e.e),
          (c = c.slice()),
          (l = s - n))
        ) {
          for (
            (f = l < 0)
              ? ((r = c), (l = -l), (u = d.length))
              : ((r = d), (n = s), (u = c.length)),
              l > (i = Math.max(Math.ceil(h / 7), u) + 2) &&
                ((l = i), (r.length = 1)),
              r.reverse(),
              i = l;
            i--;
          )
            r.push(0);
          r.reverse();
        } else {
          for (
            (f = (i = c.length) < (u = d.length)) && (u = i), i = 0;
            i < u;
            i++
          )
            if (c[i] != d[i]) {
              f = c[i] < d[i];
              break;
            }
          l = 0;
        }
        for (
          f && ((r = c), (c = d), (d = r), (t.s = -t.s)),
            u = c.length,
            i = d.length - u;
          i > 0;
          --i
        )
          c[u++] = 0;
        for (i = d.length; i > l; ) {
          if (c[--i] < d[i]) {
            for (o = i; o && 0 === c[--o]; ) c[o] = 1e7 - 1;
            (--c[o], (c[i] += 1e7));
          }
          c[i] -= d[i];
        }
        for (; 0 === c[--u]; ) c.pop();
        for (; 0 === c[0]; c.shift()) --n;
        return c[0] ? ((t.d = c), (t.e = n), a ? P(t, h) : t) : new p(0);
      }
      function E(e, t, r) {
        var n,
          i = b(e),
          a = v(e.d),
          o = a.length;
        return (
          t
            ? (r && (n = r - o) > 0
                ? (a = a.charAt(0) + "." + a.slice(1) + w(n))
                : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
              (a = a + (i < 0 ? "e" : "e+") + i))
            : i < 0
              ? ((a = "0." + w(-i - 1) + a),
                r && (n = r - o) > 0 && (a += w(n)))
              : i >= o
                ? ((a += w(i + 1 - o)),
                  r && (n = r - i - 1) > 0 && (a = a + "." + w(n)))
                : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
                  r &&
                    (n = r - o) > 0 &&
                    (i + 1 === o && (a += "."), (a += w(n)))),
          e.s < 0 ? "-" + a : a
        );
      }
      function S(e, t) {
        if (e.length > t) return ((e.length = t), !0);
      }
      function k(e) {
        if (!e || "object" != typeof e) throw Error(o + "Object expected");
        var t,
          r,
          n,
          i = [
            "precision",
            1,
            1e9,
            "rounding",
            0,
            8,
            "toExpNeg",
            -1 / 0,
            0,
            "toExpPos",
            0,
            1 / 0,
          ];
        for (t = 0; t < i.length; t += 3)
          if (void 0 !== (n = e[(r = i[t])]))
            if (c(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
            else throw Error(l + r + ": " + n);
        if (void 0 !== (n = e[(r = "LN10")]))
          if (n == Math.LN10) this[r] = new this(n);
          else throw Error(l + r + ": " + n);
        return this;
      }
      if (
        (((i = (function e(t) {
          var r, n, i;
          function a(e) {
            if (!(this instanceof a)) return new a(e);
            if (((this.constructor = a), e instanceof a)) {
              ((this.s = e.s),
                (this.e = e.e),
                (this.d = (e = e.d) ? e.slice() : e));
              return;
            }
            if ("number" == typeof e) {
              if (0 * e != 0) throw Error(l + e);
              if (e > 0) this.s = 1;
              else if (e < 0) ((e = -e), (this.s = -1));
              else {
                ((this.s = 0), (this.e = 0), (this.d = [0]));
                return;
              }
              if (e === ~~e && e < 1e7) {
                ((this.e = 0), (this.d = [e]));
                return;
              }
              return j(this, e.toString());
            }
            if ("string" != typeof e) throw Error(l + e);
            if (
              (45 === e.charCodeAt(0)
                ? ((e = e.slice(1)), (this.s = -1))
                : (this.s = 1),
              f.test(e))
            )
              j(this, e);
            else throw Error(l + e);
          }
          if (
            ((a.prototype = p),
            (a.ROUND_UP = 0),
            (a.ROUND_DOWN = 1),
            (a.ROUND_CEIL = 2),
            (a.ROUND_FLOOR = 3),
            (a.ROUND_HALF_UP = 4),
            (a.ROUND_HALF_DOWN = 5),
            (a.ROUND_HALF_EVEN = 6),
            (a.ROUND_HALF_CEIL = 7),
            (a.ROUND_HALF_FLOOR = 8),
            (a.clone = e),
            (a.config = a.set = k),
            void 0 === t && (t = {}),
            t)
          )
            for (
              r = 0,
                i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
              r < i.length;
            )
              t.hasOwnProperty((n = i[r++])) || (t[n] = this[n]);
          return (a.config(t), a);
        })(i)).default = i.Decimal =
          i),
        (n = new i(1)),
        "function" == typeof define && define.amd)
      ) {
        let t;
        (e.r, void 0 !== (t = i) && e.v(t));
      } else
        t.exports
          ? (t.exports = i)
          : (r ||
              (r =
                "u" > typeof self && self && self.self == self
                  ? self
                  : Function("return this")()),
            (r.Decimal = i));
    })(e.e);
  },
  478492,
  (e, t, r) => {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
      i = "~";
    function a() {}
    function o(e, t, r) {
      ((this.fn = e), (this.context = t), (this.once = r || !1));
    }
    function l(e, t, r, n, a) {
      if ("function" != typeof r)
        throw TypeError("The listener must be a function");
      var l = new o(r, n || e, a),
        u = i ? i + t : t;
      return (
        e._events[u]
          ? e._events[u].fn
            ? (e._events[u] = [e._events[u], l])
            : e._events[u].push(l)
          : ((e._events[u] = l), e._eventsCount++),
        e
      );
    }
    function u(e, t) {
      0 == --e._eventsCount ? (e._events = new a()) : delete e._events[t];
    }
    function c() {
      ((this._events = new a()), (this._eventsCount = 0));
    }
    (Object.create &&
      ((a.prototype = Object.create(null)), new a().__proto__ || (i = !1)),
      (c.prototype.eventNames = function () {
        var e,
          t,
          r = [];
        if (0 === this._eventsCount) return r;
        for (t in (e = this._events))
          n.call(e, t) && r.push(i ? t.slice(1) : t);
        return Object.getOwnPropertySymbols
          ? r.concat(Object.getOwnPropertySymbols(e))
          : r;
      }),
      (c.prototype.listeners = function (e) {
        var t = i ? i + e : e,
          r = this._events[t];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var n = 0, a = r.length, o = Array(a); n < a; n++) o[n] = r[n].fn;
        return o;
      }),
      (c.prototype.listenerCount = function (e) {
        var t = i ? i + e : e,
          r = this._events[t];
        return r ? (r.fn ? 1 : r.length) : 0;
      }),
      (c.prototype.emit = function (e, t, r, n, a, o) {
        var l = i ? i + e : e;
        if (!this._events[l]) return !1;
        var u,
          c,
          s = this._events[l],
          f = arguments.length;
        if (s.fn) {
          switch ((s.once && this.removeListener(e, s.fn, void 0, !0), f)) {
            case 1:
              return (s.fn.call(s.context), !0);
            case 2:
              return (s.fn.call(s.context, t), !0);
            case 3:
              return (s.fn.call(s.context, t, r), !0);
            case 4:
              return (s.fn.call(s.context, t, r, n), !0);
            case 5:
              return (s.fn.call(s.context, t, r, n, a), !0);
            case 6:
              return (s.fn.call(s.context, t, r, n, a, o), !0);
          }
          for (c = 1, u = Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
          s.fn.apply(s.context, u);
        } else {
          var d,
            p = s.length;
          for (c = 0; c < p; c++)
            switch (
              (s[c].once && this.removeListener(e, s[c].fn, void 0, !0), f)
            ) {
              case 1:
                s[c].fn.call(s[c].context);
                break;
              case 2:
                s[c].fn.call(s[c].context, t);
                break;
              case 3:
                s[c].fn.call(s[c].context, t, r);
                break;
              case 4:
                s[c].fn.call(s[c].context, t, r, n);
                break;
              default:
                if (!u)
                  for (d = 1, u = Array(f - 1); d < f; d++)
                    u[d - 1] = arguments[d];
                s[c].fn.apply(s[c].context, u);
            }
        }
        return !0;
      }),
      (c.prototype.on = function (e, t, r) {
        return l(this, e, t, r, !1);
      }),
      (c.prototype.once = function (e, t, r) {
        return l(this, e, t, r, !0);
      }),
      (c.prototype.removeListener = function (e, t, r, n) {
        var a = i ? i + e : e;
        if (!this._events[a]) return this;
        if (!t) return (u(this, a), this);
        var o = this._events[a];
        if (o.fn)
          o.fn !== t || (n && !o.once) || (r && o.context !== r) || u(this, a);
        else {
          for (var l = 0, c = [], s = o.length; l < s; l++)
            (o[l].fn !== t || (n && !o[l].once) || (r && o[l].context !== r)) &&
              c.push(o[l]);
          c.length ? (this._events[a] = 1 === c.length ? c[0] : c) : u(this, a);
        }
        return this;
      }),
      (c.prototype.removeAllListeners = function (e) {
        var t;
        return (
          e
            ? ((t = i ? i + e : e), this._events[t] && u(this, t))
            : ((this._events = new a()), (this._eventsCount = 0)),
          this
        );
      }),
      (c.prototype.off = c.prototype.removeListener),
      (c.prototype.addListener = c.prototype.on),
      (c.prefixed = i),
      (c.EventEmitter = c),
      (t.exports = c));
  },
  552210,
  (e, t, r) => {
    "use strict";
    var n = "function" == typeof Symbol && Symbol.for,
      i = n ? Symbol.for("react.element") : 60103,
      a = n ? Symbol.for("react.portal") : 60106,
      o = n ? Symbol.for("react.fragment") : 60107,
      l = n ? Symbol.for("react.strict_mode") : 60108,
      u = n ? Symbol.for("react.profiler") : 60114,
      c = n ? Symbol.for("react.provider") : 60109,
      s = n ? Symbol.for("react.context") : 60110,
      f = n ? Symbol.for("react.async_mode") : 60111,
      d = n ? Symbol.for("react.concurrent_mode") : 60111,
      p = n ? Symbol.for("react.forward_ref") : 60112,
      h = n ? Symbol.for("react.suspense") : 60113,
      y = n ? Symbol.for("react.suspense_list") : 60120,
      v = n ? Symbol.for("react.memo") : 60115,
      g = n ? Symbol.for("react.lazy") : 60116,
      m = n ? Symbol.for("react.block") : 60121,
      b = n ? Symbol.for("react.fundamental") : 60117,
      x = n ? Symbol.for("react.responder") : 60118,
      w = n ? Symbol.for("react.scope") : 60119;
    function O(e) {
      if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
          case i:
            switch ((e = e.type)) {
              case f:
              case d:
              case o:
              case u:
              case l:
              case h:
                return e;
              default:
                switch ((e = e && e.$$typeof)) {
                  case s:
                  case p:
                  case g:
                  case v:
                  case c:
                    return e;
                  default:
                    return t;
                }
            }
          case a:
            return t;
        }
      }
    }
    function j(e) {
      return O(e) === d;
    }
    ((r.AsyncMode = f),
      (r.ConcurrentMode = d),
      (r.ContextConsumer = s),
      (r.ContextProvider = c),
      (r.Element = i),
      (r.ForwardRef = p),
      (r.Fragment = o),
      (r.Lazy = g),
      (r.Memo = v),
      (r.Portal = a),
      (r.Profiler = u),
      (r.StrictMode = l),
      (r.Suspense = h),
      (r.isAsyncMode = function (e) {
        return j(e) || O(e) === f;
      }),
      (r.isConcurrentMode = j),
      (r.isContextConsumer = function (e) {
        return O(e) === s;
      }),
      (r.isContextProvider = function (e) {
        return O(e) === c;
      }),
      (r.isElement = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === i;
      }),
      (r.isForwardRef = function (e) {
        return O(e) === p;
      }),
      (r.isFragment = function (e) {
        return O(e) === o;
      }),
      (r.isLazy = function (e) {
        return O(e) === g;
      }),
      (r.isMemo = function (e) {
        return O(e) === v;
      }),
      (r.isPortal = function (e) {
        return O(e) === a;
      }),
      (r.isProfiler = function (e) {
        return O(e) === u;
      }),
      (r.isStrictMode = function (e) {
        return O(e) === l;
      }),
      (r.isSuspense = function (e) {
        return O(e) === h;
      }),
      (r.isValidElementType = function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === o ||
          e === d ||
          e === u ||
          e === l ||
          e === h ||
          e === y ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === g ||
              e.$$typeof === v ||
              e.$$typeof === c ||
              e.$$typeof === s ||
              e.$$typeof === p ||
              e.$$typeof === b ||
              e.$$typeof === x ||
              e.$$typeof === w ||
              e.$$typeof === m))
        );
      }),
      (r.typeOf = O));
  },
  179684,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(552210);
  },
  618256,
  (e, t, r) => {
    r.isPlainObject = function (e) {
      if ("object" != typeof e || null == e) return !1;
      if (null === Object.getPrototypeOf(e)) return !0;
      if ("[object Object]" !== Object.prototype.toString.call(e)) {
        let t = e[Symbol.toStringTag];
        return (
          null != t &&
          !!Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable &&
          e.toString() === `[object ${t}]`
        );
      }
      let t = e;
      for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    };
  },
  707328,
  (e, t, r) => {
    t.exports = e.r(618256).isPlainObject;
  },
  210185,
  (e, t, r) => {
    r.uniqBy = function (e, t) {
      let r = new Map();
      for (let n = 0; n < e.length; n++) {
        let i = e[n],
          a = t(i, n, e);
        r.has(a) || r.set(a, i);
      }
      return Array.from(r.values());
    };
  },
  117139,
  (e, t, r) => {
    r.ary = function (e, t) {
      return function (...r) {
        return e.apply(this, r.slice(0, t));
      };
    };
  },
  736074,
  (e, t, r) => {
    r.identity = function (e) {
      return e;
    };
  },
  777473,
  (e, t, r) => {
    let n = e.r(918915);
    r.property = function (e) {
      return function (t) {
        return n.get(t, e);
      };
    };
  },
  875234,
  (e, t, r) => {
    r.isPrimitive = function (e) {
      return null == e || ("object" != typeof e && "function" != typeof e);
    };
  },
  55424,
  (e, t, r) => {
    r.isTypedArray = function (e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    };
  },
  709866,
  (e, t, r) => {
    r.getSymbols = function (e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t),
      );
    };
  },
  223678,
  (e, t, r) => {
    r.getTag = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : Object.prototype.toString.call(e);
    };
  },
  955813,
  (e, t, r) => {
    ((r.argumentsTag = "[object Arguments]"),
      (r.arrayBufferTag = "[object ArrayBuffer]"),
      (r.arrayTag = "[object Array]"),
      (r.bigInt64ArrayTag = "[object BigInt64Array]"),
      (r.bigUint64ArrayTag = "[object BigUint64Array]"),
      (r.booleanTag = "[object Boolean]"),
      (r.dataViewTag = "[object DataView]"),
      (r.dateTag = "[object Date]"),
      (r.errorTag = "[object Error]"),
      (r.float32ArrayTag = "[object Float32Array]"),
      (r.float64ArrayTag = "[object Float64Array]"),
      (r.functionTag = "[object Function]"),
      (r.int16ArrayTag = "[object Int16Array]"),
      (r.int32ArrayTag = "[object Int32Array]"),
      (r.int8ArrayTag = "[object Int8Array]"),
      (r.mapTag = "[object Map]"),
      (r.numberTag = "[object Number]"),
      (r.objectTag = "[object Object]"),
      (r.regexpTag = "[object RegExp]"),
      (r.setTag = "[object Set]"),
      (r.stringTag = "[object String]"),
      (r.symbolTag = "[object Symbol]"),
      (r.uint16ArrayTag = "[object Uint16Array]"),
      (r.uint32ArrayTag = "[object Uint32Array]"),
      (r.uint8ArrayTag = "[object Uint8Array]"),
      (r.uint8ClampedArrayTag = "[object Uint8ClampedArray]"));
  },
  735071,
  (e, t, r) => {
    r.globalThis_ =
      ("object" == typeof globalThis && globalThis) ||
      ("object" == typeof window && window) ||
      ("object" == typeof self && self) ||
      e.g ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  },
  225810,
  (e, t, r) => {
    let n = e.r(735071);
    r.isBuffer = function (e) {
      return (
        void 0 !== n.globalThis_.Buffer && n.globalThis_.Buffer.isBuffer(e)
      );
    };
  },
  692348,
  (e, t, r) => {
    let n = e.r(875234),
      i = e.r(55424),
      a = e.r(709866),
      o = e.r(223678),
      l = e.r(955813),
      u = e.r(225810);
    function c(e, t, r, a = new Map(), f) {
      let d = f?.(e, t, r, a);
      if (void 0 !== d) return d;
      if (n.isPrimitive(e)) return e;
      if (a.has(e)) return a.get(e);
      if (Array.isArray(e)) {
        let t = Array(e.length);
        a.set(e, t);
        for (let n = 0; n < e.length; n++) t[n] = c(e[n], n, r, a, f);
        return (
          Object.hasOwn(e, "index") && (t.index = e.index),
          Object.hasOwn(e, "input") && (t.input = e.input),
          t
        );
      }
      if (e instanceof Date) return new Date(e.getTime());
      if (e instanceof RegExp) {
        let t = new RegExp(e.source, e.flags);
        return ((t.lastIndex = e.lastIndex), t);
      }
      if (e instanceof Map) {
        let t = new Map();
        for (let [n, i] of (a.set(e, t), e)) t.set(n, c(i, n, r, a, f));
        return t;
      }
      if (e instanceof Set) {
        let t = new Set();
        for (let n of (a.set(e, t), e)) t.add(c(n, void 0, r, a, f));
        return t;
      }
      if (u.isBuffer(e)) return e.subarray();
      if (i.isTypedArray(e)) {
        let t = new (Object.getPrototypeOf(e).constructor)(e.length);
        a.set(e, t);
        for (let n = 0; n < e.length; n++) t[n] = c(e[n], n, r, a, f);
        return t;
      }
      if (
        e instanceof ArrayBuffer ||
        ("u" > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
      )
        return e.slice(0);
      if (e instanceof DataView) {
        let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
        return (a.set(e, t), s(t, e, r, a, f), t);
      }
      if ("u" > typeof File && e instanceof File) {
        let t = new File([e], e.name, { type: e.type });
        return (a.set(e, t), s(t, e, r, a, f), t);
      }
      if ("u" > typeof Blob && e instanceof Blob) {
        let t = new Blob([e], { type: e.type });
        return (a.set(e, t), s(t, e, r, a, f), t);
      }
      if (e instanceof Error) {
        let t = structuredClone(e);
        return (
          a.set(e, t),
          (t.message = e.message),
          (t.name = e.name),
          (t.stack = e.stack),
          (t.cause = e.cause),
          (t.constructor = e.constructor),
          s(t, e, r, a, f),
          t
        );
      }
      if (e instanceof Boolean) {
        let t = new Boolean(e.valueOf());
        return (a.set(e, t), s(t, e, r, a, f), t);
      }
      if (e instanceof Number) {
        let t = new Number(e.valueOf());
        return (a.set(e, t), s(t, e, r, a, f), t);
      }
      if (e instanceof String) {
        let t = new String(e.valueOf());
        return (a.set(e, t), s(t, e, r, a, f), t);
      }
      if (
        "object" == typeof e &&
        (function (e) {
          switch (o.getTag(e)) {
            case l.argumentsTag:
            case l.arrayTag:
            case l.arrayBufferTag:
            case l.dataViewTag:
            case l.booleanTag:
            case l.dateTag:
            case l.float32ArrayTag:
            case l.float64ArrayTag:
            case l.int8ArrayTag:
            case l.int16ArrayTag:
            case l.int32ArrayTag:
            case l.mapTag:
            case l.numberTag:
            case l.objectTag:
            case l.regexpTag:
            case l.setTag:
            case l.stringTag:
            case l.symbolTag:
            case l.uint8ArrayTag:
            case l.uint8ClampedArrayTag:
            case l.uint16ArrayTag:
            case l.uint32ArrayTag:
              return !0;
            default:
              return !1;
          }
        })(e)
      ) {
        let t = Object.create(Object.getPrototypeOf(e));
        return (a.set(e, t), s(t, e, r, a, f), t);
      }
      return e;
    }
    function s(e, t, r = e, n, i) {
      let o = [...Object.keys(t), ...a.getSymbols(t)];
      for (let a = 0; a < o.length; a++) {
        let l = o[a],
          u = Object.getOwnPropertyDescriptor(e, l);
        (null == u || u.writable) && (e[l] = c(t[l], l, r, n, i));
      }
    }
    ((r.cloneDeepWith = function (e, t) {
      return c(e, void 0, e, new Map(), t);
    }),
      (r.cloneDeepWithImpl = c),
      (r.copyProperties = s));
  },
  399510,
  (e, t, r) => {
    let n = e.r(692348);
    r.cloneDeep = function (e) {
      return n.cloneDeepWithImpl(e, void 0, e, new Map(), void 0);
    };
  },
  844695,
  (e, t, r) => {
    let n = e.r(875234),
      i = e.r(393363);
    e.r(123855);
    let a = e.r(490820);
    function o(e, t, r, u) {
      if (t === e) return !0;
      switch (typeof t) {
        case "object":
          return (function (e, t, r, i) {
            if (null == t) return !0;
            if (Array.isArray(t)) return l(e, t, r, i);
            if (t instanceof Map) {
              var a,
                o,
                u,
                c,
                s = e,
                f = t,
                d = r,
                p = i;
              if (0 === f.size) return !0;
              if (!(s instanceof Map)) return !1;
              for (let [e, t] of f.entries())
                if (!1 === d(s.get(e), t, e, s, f, p)) return !1;
              return !0;
            }
            if (t instanceof Set) {
              return (
                (a = e),
                (o = t),
                (u = r),
                (c = i),
                0 === o.size || (a instanceof Set && l([...a], [...o], u, c))
              );
            }
            let h = Object.keys(t);
            if (null == e || n.isPrimitive(e)) return 0 === h.length;
            if (0 === h.length) return !0;
            if (i?.has(t)) return i.get(t) === e;
            i?.set(t, e);
            try {
              for (let a = 0; a < h.length; a++) {
                let o = h[a];
                if (
                  (!n.isPrimitive(e) && !(o in e)) ||
                  (void 0 === t[o] && void 0 !== e[o]) ||
                  (null === t[o] && null !== e[o]) ||
                  !r(e[o], t[o], o, e, t, i)
                )
                  return !1;
              }
              return !0;
            } finally {
              i?.delete(t);
            }
          })(e, t, r, u);
        case "function":
          if (Object.keys(t).length > 0) return o(e, { ...t }, r, u);
          return i.isEqualsSameValueZero(e, t);
        default:
          if (!a.isObject(e)) return i.isEqualsSameValueZero(e, t);
          if ("string" == typeof t) return "" === t;
          return !0;
      }
    }
    function l(e, t, r, n) {
      if (0 === t.length) return !0;
      if (!Array.isArray(e)) return !1;
      let i = new Set();
      for (let a = 0; a < t.length; a++) {
        let o = t[a],
          l = !1;
        for (let u = 0; u < e.length; u++) {
          if (i.has(u)) continue;
          let c = e[u],
            s = !1;
          if ((r(c, o, a, e, t, n) && (s = !0), s)) {
            (i.add(u), (l = !0));
            break;
          }
        }
        if (!l) return !1;
      }
      return !0;
    }
    r.isMatchWith = function e(t, r, n) {
      return "function" != typeof n
        ? e(t, r, () => void 0)
        : o(
            t,
            r,
            function e(t, r, i, a, l, u) {
              let c = n(t, r, i, a, l, u);
              return void 0 !== c ? !!c : o(t, r, e, u);
            },
            new Map(),
          );
    };
  },
  603450,
  (e, t, r) => {
    let n = e.r(844695);
    r.isMatch = function (e, t) {
      return n.isMatchWith(e, t, () => void 0);
    };
  },
  67284,
  (e, t, r) => {
    let n = e.r(399510),
      i = e.r(603450);
    r.matches = function (e) {
      return ((e = n.cloneDeep(e)), (t) => i.isMatch(t, e));
    };
  },
  668110,
  (e, t, r) => {
    let n = e.r(223678),
      i = e.r(955813),
      a = e.r(692348);
    r.cloneDeepWith = function (e, t) {
      return a.cloneDeepWith(e, (r, o, l, u) => {
        let c = t?.(r, o, l, u);
        if (void 0 !== c) return c;
        if ("object" == typeof e) {
          if (
            "[object Object]" === n.getTag(e) &&
            "function" != typeof e.constructor
          ) {
            let t = {};
            return (u.set(e, t), a.copyProperties(t, e, l, u), t);
          }
          switch (Object.prototype.toString.call(e)) {
            case i.numberTag:
            case i.stringTag:
            case i.booleanTag: {
              let t = new e.constructor(e?.valueOf());
              return (a.copyProperties(t, e), t);
            }
            case i.argumentsTag: {
              let t = {};
              return (
                a.copyProperties(t, e),
                (t.length = e.length),
                (t[Symbol.iterator] = e[Symbol.iterator]),
                t
              );
            }
            default:
              return;
          }
        }
      });
    };
  },
  793141,
  (e, t, r) => {
    let n = e.r(668110);
    r.cloneDeep = function (e) {
      return n.cloneDeepWith(e);
    };
  },
  917858,
  (e, t, r) => {
    let n = e.r(223678);
    r.isArguments = function (e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "[object Arguments]" === n.getTag(e)
      );
    };
  },
  56518,
  (e, t, r) => {
    let n = e.r(333858),
      i = e.r(979232),
      a = e.r(605257),
      o = e.r(917858);
    r.has = function (e, t) {
      let r;
      if (
        0 ===
        (r = Array.isArray(t)
          ? t
          : "string" == typeof t && n.isDeepKey(t) && e?.[t] == null
            ? i.toPath(t)
            : [t]).length
      )
        return !1;
      let l = e;
      for (let e = 0; e < r.length; e++) {
        let t = r[e];
        if (
          (null == l || !Object.hasOwn(l, t)) &&
          !(
            (Array.isArray(l) || o.isArguments(l)) &&
            a.isIndex(t) &&
            t < l.length
          )
        )
          return !1;
        l = l[t];
      }
      return !0;
    };
  },
  140656,
  (e, t, r) => {
    let n = e.r(596736),
      i = e.r(918915),
      a = e.r(603450),
      o = e.r(793141),
      l = e.r(56518);
    r.matchesProperty = function (e, t) {
      switch (typeof e) {
        case "object":
          Object.is(e?.valueOf(), -0) && (e = "-0");
          break;
        case "number":
          e = n.toKey(e);
      }
      return (
        (t = o.cloneDeep(t)),
        function (r) {
          let n = i.get(r, e);
          return void 0 === n
            ? l.has(r, e)
            : void 0 === t
              ? void 0 === n
              : a.isMatch(n, t);
        }
      );
    };
  },
  627519,
  (e, t, r) => {
    let n = e.r(736074),
      i = e.r(777473),
      a = e.r(67284),
      o = e.r(140656);
    r.iteratee = function (e) {
      if (null == e) return n.identity;
      switch (typeof e) {
        case "function":
          return e;
        case "object":
          if (Array.isArray(e) && 2 === e.length)
            return o.matchesProperty(e[0], e[1]);
          return a.matches(e);
        case "string":
        case "symbol":
        case "number":
          return i.property(e);
      }
    };
  },
  352603,
  (e, t, r) => {
    r.isObjectLike = function (e) {
      return "object" == typeof e && null !== e;
    };
  },
  544936,
  (e, t, r) => {
    let n = e.r(269642),
      i = e.r(352603);
    r.isArrayLikeObject = function (e) {
      return i.isObjectLike(e) && n.isArrayLike(e);
    };
  },
  77008,
  (e, t, r) => {
    let n = e.r(210185),
      i = e.r(117139),
      a = e.r(736074),
      o = e.r(627519),
      l = e.r(544936);
    r.uniqBy = function (e, t = a.identity) {
      return l.isArrayLikeObject(e)
        ? n.uniqBy(Array.from(e), i.ary(o.iteratee(t), 1))
        : [];
    };
  },
  892809,
  (e, t, r) => {
    t.exports = e.r(77008).uniqBy;
  },
  634359,
  (e) => {
    "use strict";
    var t,
      r,
      n,
      i,
      a,
      o,
      l,
      u,
      c,
      s,
      f,
      d,
      p,
      h,
      y,
      v,
      g,
      m,
      b,
      x,
      w,
      O,
      j,
      P,
      _,
      E,
      S,
      k,
      A,
      M,
      C,
      T,
      D,
      I,
      N,
      z,
      L = e.i(843476),
      R = e.i(271645);
    e.i(247167);
    var F = Symbol.for("immer-nothing"),
      B = Symbol.for("immer-draftable"),
      $ = Symbol.for("immer-state");
    function U(e) {
      throw Error(
        `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
      );
    }
    var K = Object,
      W = K.getPrototypeOf,
      q = "constructor",
      H = "prototype",
      V = "configurable",
      Y = "enumerable",
      G = "writable",
      X = "value",
      Z = (e) => !!e && !!e[$];
    function Q(e) {
      return !!e && (et(e) || el(e) || !!e[B] || !!e[q]?.[B] || eu(e) || ec(e));
    }
    var J = K[H][q].toString(),
      ee = new WeakMap();
    function et(e) {
      if (!e || !es(e)) return !1;
      let t = W(e);
      if (null === t || t === K[H]) return !0;
      let r = K.hasOwnProperty.call(t, q) && t[q];
      if (r === Object) return !0;
      if (!ef(r)) return !1;
      let n = ee.get(r);
      return (
        void 0 === n && ((n = Function.toString.call(r)), ee.set(r, n)),
        n === J
      );
    }
    function er(e, t, r = !0) {
      0 === en(e)
        ? (r ? Reflect.ownKeys(e) : K.keys(e)).forEach((r) => {
            t(r, e[r], e);
          })
        : e.forEach((r, n) => t(n, r, e));
    }
    function en(e) {
      let t = e[$];
      return t ? t.type_ : el(e) ? 1 : eu(e) ? 2 : 3 * !!ec(e);
    }
    var ei = (e, t, r = en(e)) =>
        2 === r ? e.has(t) : K[H].hasOwnProperty.call(e, t),
      ea = (e, t, r = en(e)) => (2 === r ? e.get(t) : e[t]),
      eo = (e, t, r, n = en(e)) => {
        2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
      },
      el = Array.isArray,
      eu = (e) => e instanceof Map,
      ec = (e) => e instanceof Set,
      es = (e) => "object" == typeof e,
      ef = (e) => "function" == typeof e,
      ed = (e) => (e.modified_ ? e.copy_ : e.base_);
    function ep(e, t) {
      if (eu(e)) return new Map(e);
      if (ec(e)) return new Set(e);
      if (el(e)) return Array[H].slice.call(e);
      let r = et(e);
      if (!0 !== t && ("class_only" !== t || r)) {
        let t = W(e);
        if (null !== t && r) return { ...e };
        let n = K.create(t);
        return K.assign(n, e);
      }
      {
        let t = K.getOwnPropertyDescriptors(e);
        delete t[$];
        let r = Reflect.ownKeys(t);
        for (let n = 0; n < r.length; n++) {
          let i = r[n],
            a = t[i];
          (!1 === a[G] && ((a[G] = !0), (a[V] = !0)),
            (a.get || a.set) &&
              (t[i] = { [V]: !0, [G]: !0, [Y]: a[Y], [X]: e[i] }));
        }
        return K.create(W(e), t);
      }
    }
    function eh(e, t = !1) {
      return (
        ev(e) ||
          Z(e) ||
          !Q(e) ||
          (en(e) > 1 &&
            K.defineProperties(e, { set: ey, add: ey, clear: ey, delete: ey }),
          K.freeze(e),
          t &&
            er(
              e,
              (e, t) => {
                eh(t, !0);
              },
              !1,
            )),
        e
      );
    }
    var ey = {
      [X]: function () {
        U(2);
      },
    };
    function ev(e) {
      return !(null !== e && es(e)) || K.isFrozen(e);
    }
    var eg = "MapSet",
      em = "Patches",
      eb = "ArrayMethods",
      ex = {};
    function ew(e) {
      let t = ex[e];
      return (t || U(0, e), t);
    }
    var eO = (e) => !!ex[e];
    function ej(e, t) {
      t &&
        ((e.patchPlugin_ = ew(em)),
        (e.patches_ = []),
        (e.inversePatches_ = []),
        (e.patchListener_ = t));
    }
    function eP(e) {
      (e_(e), e.drafts_.forEach(eS), (e.drafts_ = null));
    }
    function e_(e) {
      e === a && (a = e.parent_);
    }
    var eE = (e) =>
      (a = {
        drafts_: [],
        parent_: a,
        immer_: e,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0,
        handledSet_: new Set(),
        processedForPatches_: new Set(),
        mapSetPlugin_: eO(eg) ? ew(eg) : void 0,
        arrayMethodsPlugin_: eO(eb) ? ew(eb) : void 0,
      });
    function eS(e) {
      let t = e[$];
      0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
    }
    function ek(e, t) {
      t.unfinalizedDrafts_ = t.drafts_.length;
      let r = t.drafts_[0];
      if (void 0 !== e && e !== r) {
        (r[$].modified_ && (eP(t), U(4)), Q(e) && (e = eA(t, e)));
        let { patchPlugin_: n } = t;
        n && n.generateReplacementPatches_(r[$].base_, e, t);
      } else e = eA(t, r);
      return (
        (function (e, t, r = !1) {
          !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && eh(t, r);
        })(t, e, !0),
        eP(t),
        t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
        e !== F ? e : void 0
      );
    }
    function eA(e, t) {
      if (ev(t)) return t;
      let r = t[$];
      if (!r) return eN(t, e.handledSet_, e);
      if (!eC(r, e)) return t;
      if (!r.modified_) return r.base_;
      if (!r.finalized_) {
        let { callbacks_: t } = r;
        if (t) for (; t.length > 0; ) t.pop()(e);
        eI(r, e);
      }
      return r.copy_;
    }
    function eM(e) {
      ((e.finalized_ = !0), e.scope_.unfinalizedDrafts_--);
    }
    var eC = (e, t) => e.scope_ === t,
      eT = [];
    function eD(e, t, r, n) {
      let i = e.copy_ || e.base_,
        a = e.type_;
      if (void 0 !== n && ea(i, n, a) === t) return void eo(i, n, r, a);
      if (!e.draftLocations_) {
        let t = (e.draftLocations_ = new Map());
        er(i, (e, r) => {
          if (Z(r)) {
            let n = t.get(r) || [];
            (n.push(e), t.set(r, n));
          }
        });
      }
      for (let n of e.draftLocations_.get(t) ?? eT) eo(i, n, r, a);
    }
    function eI(e, t) {
      if (
        e.modified_ &&
        !e.finalized_ &&
        (3 === e.type_ ||
          (1 === e.type_ && e.allIndicesReassigned_) ||
          (e.assigned_?.size ?? 0) > 0)
      ) {
        let { patchPlugin_: r } = t;
        if (r) {
          let n = r.getPath(e);
          n && r.generatePatches_(e, n, t);
        }
        eM(e);
      }
    }
    function eN(e, t, r) {
      return (
        (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1) ||
          Z(e) ||
          t.has(e) ||
          !Q(e) ||
          ev(e) ||
          (t.add(e),
          er(e, (n, i) => {
            if (Z(i)) {
              let t = i[$];
              eC(t, r) && (eo(e, n, ed(t), e.type_), eM(t));
            } else Q(i) && eN(i, t, r);
          })),
        e
      );
    }
    var ez = {
        get(e, t) {
          let r;
          if (t === $) return e;
          let n = e.scope_.arrayMethodsPlugin_,
            i = 1 === e.type_ && "string" == typeof t;
          if (i && n?.isArrayOperationMethod(t))
            return n.createMethodInterceptor(e, t);
          let a = e.copy_ || e.base_;
          if (!ei(a, t, e.type_)) {
            var o;
            let r;
            return (
              (o = e),
              (r = eF(a, t)) ? (X in r ? r[X] : r.get?.call(o.draft_)) : void 0
            );
          }
          let l = a[t];
          if (
            e.finalized_ ||
            !Q(l) ||
            (i &&
              e.operationMethod &&
              n?.isMutatingArrayMethod(e.operationMethod) &&
              Number.isInteger((r = +t)) &&
              String(r) === t)
          )
            return l;
          if (l === eR(e.base_, t)) {
            e$(e);
            let r = 1 === e.type_ ? +t : t,
              n = eU(e.scope_, l, e, r);
            return (e.copy_[r] = n);
          }
          return l;
        },
        has: (e, t) => t in (e.copy_ || e.base_),
        ownKeys: (e) => Reflect.ownKeys(e.copy_ || e.base_),
        set(e, t, r) {
          let n = eF(e.copy_ || e.base_, t);
          if (n?.set) return (n.set.call(e.draft_, r), !0);
          if (!e.modified_) {
            let n = eR(e.copy_ || e.base_, t),
              i = n?.[$];
            if (i && i.base_ === r)
              return ((e.copy_[t] = r), e.assigned_.set(t, !1), !0);
            if (
              (r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) &&
              (void 0 !== r || ei(e.base_, t, e.type_))
            )
              return !0;
            (e$(e), eB(e));
          }
          return (
            !!(
              (e.copy_[t] === r && (void 0 !== r || t in e.copy_)) ||
              (Number.isNaN(r) && Number.isNaN(e.copy_[t]))
            ) ||
            ((e.copy_[t] = r),
            e.assigned_.set(t, !0),
            !(function (e, t, r) {
              let { scope_: n } = e;
              if (Z(r)) {
                let i = r[$];
                eC(i, n) &&
                  i.callbacks_.push(function () {
                    (e$(e), eD(e, r, ed(i), t));
                  });
              } else
                Q(r) &&
                  e.callbacks_.push(function () {
                    let i = e.copy_ || e.base_;
                    3 === e.type_
                      ? i.has(r) && eN(r, n.handledSet_, n)
                      : ea(i, t, e.type_) === r &&
                        n.drafts_.length > 1 &&
                        (e.assigned_.get(t) ?? !1) === !0 &&
                        e.copy_ &&
                        eN(ea(e.copy_, t, e.type_), n.handledSet_, n);
                  });
            })(e, t, r),
            !0)
          );
        },
        deleteProperty: (e, t) => (
          e$(e),
          void 0 !== eR(e.base_, t) || t in e.base_
            ? (e.assigned_.set(t, !1), eB(e))
            : e.assigned_.delete(t),
          e.copy_ && delete e.copy_[t],
          !0
        ),
        getOwnPropertyDescriptor(e, t) {
          let r = e.copy_ || e.base_,
            n = Reflect.getOwnPropertyDescriptor(r, t);
          return n
            ? {
                [G]: !0,
                [V]: 1 !== e.type_ || "length" !== t,
                [Y]: n[Y],
                [X]: r[t],
              }
            : n;
        },
        defineProperty() {
          U(11);
        },
        getPrototypeOf: (e) => W(e.base_),
        setPrototypeOf() {
          U(12);
        },
      },
      eL = {};
    for (let e in ez) {
      let t = ez[e];
      eL[e] = function () {
        let e = arguments;
        return ((e[0] = e[0][0]), t.apply(this, e));
      };
    }
    function eR(e, t) {
      let r = e[$];
      return (r ? r.copy_ || r.base_ : e)[t];
    }
    function eF(e, t) {
      if (!(t in e)) return;
      let r = W(e);
      for (; r; ) {
        let e = Object.getOwnPropertyDescriptor(r, t);
        if (e) return e;
        r = W(r);
      }
    }
    function eB(e) {
      !e.modified_ && ((e.modified_ = !0), e.parent_ && eB(e.parent_));
    }
    function e$(e) {
      e.copy_ ||
        ((e.assigned_ = new Map()),
        (e.copy_ = ep(e.base_, e.scope_.immer_.useStrictShallowCopy_)));
    }
    function eU(e, t, r, n) {
      let [i, o] = eu(t)
        ? ew(eg).proxyMap_(t, r)
        : ec(t)
          ? ew(eg).proxySet_(t, r)
          : (function (e, t) {
              let r = el(e),
                n = {
                  type_: +!!r,
                  scope_: t ? t.scope_ : a,
                  modified_: !1,
                  finalized_: !1,
                  assigned_: void 0,
                  parent_: t,
                  base_: e,
                  draft_: null,
                  copy_: null,
                  revoke_: null,
                  isManual_: !1,
                  callbacks_: void 0,
                },
                i = n,
                o = ez;
              r && ((i = [n]), (o = eL));
              let { revoke: l, proxy: u } = Proxy.revocable(i, o);
              return ((n.draft_ = u), (n.revoke_ = l), [u, n]);
            })(t, r);
      if (
        ((r?.scope_ ?? a).drafts_.push(i),
        (o.callbacks_ = r?.callbacks_ ?? []),
        (o.key_ = n),
        r && void 0 !== n)
      )
        r.callbacks_.push(function (e) {
          if (!o || !eC(o, e)) return;
          e.mapSetPlugin_?.fixSetContents(o);
          let t = ed(o);
          (eD(r, o.draft_ ?? o, t, n), eI(o, e));
        });
      else
        o.callbacks_.push(function (e) {
          e.mapSetPlugin_?.fixSetContents(o);
          let { patchPlugin_: t } = e;
          o.modified_ && t && t.generatePatches_(o, [], e);
        });
      return i;
    }
    function eK(e) {
      return (
        Z(e) || U(10, e),
        (function e(t) {
          let r;
          if (!Q(t) || ev(t)) return t;
          let n = t[$],
            i = !0;
          if (n) {
            if (!n.modified_) return n.base_;
            ((n.finalized_ = !0),
              (r = ep(t, n.scope_.immer_.useStrictShallowCopy_)),
              (i = n.scope_.immer_.shouldUseStrictIteration()));
          } else r = ep(t, !0);
          return (
            er(
              r,
              (t, n) => {
                eo(r, t, e(n));
              },
              i,
            ),
            n && (n.finalized_ = !1),
            r
          );
        })(e)
      );
    }
    ((eL.deleteProperty = function (e, t) {
      return eL.set.call(this, e, t, void 0);
    }),
      (eL.set = function (e, t, r) {
        return ez.set.call(this, e[0], t, r, e[0]);
      }));
    var eW = new (class {
        constructor(e) {
          ((this.autoFreeze_ = !0),
            (this.useStrictShallowCopy_ = !1),
            (this.useStrictIteration_ = !1),
            (this.produce = (e, t, r) => {
              let n;
              if (ef(e) && !ef(t)) {
                let r = t;
                t = e;
                let n = this;
                return function (e = r, ...i) {
                  return n.produce(e, (e) => t.call(this, e, ...i));
                };
              }
              if ((ef(t) || U(6), void 0 === r || ef(r) || U(7), Q(e))) {
                let i = eE(this),
                  a = eU(i, e, void 0),
                  o = !0;
                try {
                  ((n = t(a)), (o = !1));
                } finally {
                  o ? eP(i) : e_(i);
                }
                return (ej(i, r), ek(n, i));
              }
              if (e && es(e)) U(1, e);
              else {
                if (
                  (void 0 === (n = t(e)) && (n = e),
                  n === F && (n = void 0),
                  this.autoFreeze_ && eh(n, !0),
                  r)
                ) {
                  let t = [],
                    i = [];
                  (ew(em).generateReplacementPatches_(e, n, {
                    patches_: t,
                    inversePatches_: i,
                  }),
                    r(t, i));
                }
                return n;
              }
            }),
            (this.produceWithPatches = (e, t) => {
              let r, n;
              return ef(e)
                ? (t, ...r) => this.produceWithPatches(t, (t) => e(t, ...r))
                : [
                    this.produce(e, t, (e, t) => {
                      ((r = e), (n = t));
                    }),
                    r,
                    n,
                  ];
            }),
            ((e) => "boolean" == typeof e)(e?.autoFreeze) &&
              this.setAutoFreeze(e.autoFreeze),
            ((e) => "boolean" == typeof e)(e?.useStrictShallowCopy) &&
              this.setUseStrictShallowCopy(e.useStrictShallowCopy),
            ((e) => "boolean" == typeof e)(e?.useStrictIteration) &&
              this.setUseStrictIteration(e.useStrictIteration));
        }
        createDraft(e) {
          (Q(e) || U(8), Z(e) && (e = eK(e)));
          let t = eE(this),
            r = eU(t, e, void 0);
          return ((r[$].isManual_ = !0), e_(t), r);
        }
        finishDraft(e, t) {
          let r = e && e[$];
          (r && r.isManual_) || U(9);
          let { scope_: n } = r;
          return (ej(n, t), ek(void 0, n));
        }
        setAutoFreeze(e) {
          this.autoFreeze_ = e;
        }
        setUseStrictShallowCopy(e) {
          this.useStrictShallowCopy_ = e;
        }
        setUseStrictIteration(e) {
          this.useStrictIteration_ = e;
        }
        shouldUseStrictIteration() {
          return this.useStrictIteration_;
        }
        applyPatches(e, t) {
          let r;
          for (r = t.length - 1; r >= 0; r--) {
            let n = t[r];
            if (0 === n.path.length && "replace" === n.op) {
              e = n.value;
              break;
            }
          }
          r > -1 && (t = t.slice(r + 1));
          let n = ew(em).applyPatches_;
          return Z(e) ? n(e, t) : this.produce(e, (e) => n(e, t));
        }
      })().produce,
      eq = (e) => (Array.isArray(e) ? e : [e]),
      eH = 0,
      eV = class {
        revision = eH;
        _value;
        _lastValue;
        _isEqual = eY;
        constructor(e, t = eY) {
          ((this._value = this._lastValue = e), (this._isEqual = t));
        }
        get value() {
          return this._value;
        }
        set value(e) {
          this.value !== e && ((this._value = e), (this.revision = ++eH));
        }
      };
    function eY(e, t) {
      return e === t;
    }
    function eG(e) {
      return (
        e instanceof eV || console.warn("Not a valid cell! ", e),
        e.value
      );
    }
    var eX = (e, t) => !1;
    function eZ() {
      return (function (e = eY) {
        return new eV(null, e);
      })(eX);
    }
    var eQ = (e) => {
      let t = e.collectionTag;
      (null === t && (t = e.collectionTag = eZ()), eG(t));
    };
    Symbol();
    var eJ = 0,
      e0 = Object.getPrototypeOf({}),
      e1 = class {
        constructor(e) {
          ((this.value = e), (this.value = e), (this.tag.value = e));
        }
        proxy = new Proxy(this, e2);
        tag = eZ();
        tags = {};
        children = {};
        collectionTag = null;
        id = eJ++;
      },
      e2 = {
        get: (e, t) =>
          (function () {
            let { value: r } = e,
              n = Reflect.get(r, t);
            if ("symbol" == typeof t || t in e0) return n;
            if ("object" == typeof n && null !== n) {
              var i;
              let r = e.children[t];
              return (
                void 0 === r &&
                  (r = e.children[t] =
                    Array.isArray((i = n)) ? new e5(i) : new e1(i)),
                r.tag && eG(r.tag),
                r.proxy
              );
            }
            {
              let r = e.tags[t];
              return (
                void 0 === r && ((r = e.tags[t] = eZ()).value = n),
                eG(r),
                n
              );
            }
          })(),
        ownKeys: (e) => (eQ(e), Reflect.ownKeys(e.value)),
        getOwnPropertyDescriptor: (e, t) =>
          Reflect.getOwnPropertyDescriptor(e.value, t),
        has: (e, t) => Reflect.has(e.value, t),
      },
      e5 = class {
        constructor(e) {
          ((this.value = e), (this.value = e), (this.tag.value = e));
        }
        proxy = new Proxy([this], e3);
        tag = eZ();
        tags = {};
        children = {};
        collectionTag = null;
        id = eJ++;
      },
      e3 = {
        get: ([e], t) => ("length" === t && eQ(e), e2.get(e, t)),
        ownKeys: ([e]) => e2.ownKeys(e),
        getOwnPropertyDescriptor: ([e], t) => e2.getOwnPropertyDescriptor(e, t),
        has: ([e], t) => e2.has(e, t),
      },
      e6 =
        "u" > typeof WeakRef
          ? WeakRef
          : class {
              constructor(e) {
                this.value = e;
              }
              deref() {
                return this.value;
              }
            };
    function e4() {
      return { s: 0, v: void 0, o: null, p: null };
    }
    function e8(e, t = {}) {
      let r,
        n = e4(),
        { resultEqualityCheck: i } = t,
        a = 0;
      function o() {
        let t,
          o = n,
          { length: l } = arguments;
        for (let e = 0; e < l; e++) {
          let t = arguments[e];
          if ("function" == typeof t || ("object" == typeof t && null !== t)) {
            let e = o.o;
            null === e && (o.o = e = new WeakMap());
            let r = e.get(t);
            void 0 === r ? ((o = e4()), e.set(t, o)) : (o = r);
          } else {
            let e = o.p;
            null === e && (o.p = e = new Map());
            let r = e.get(t);
            void 0 === r ? ((o = e4()), e.set(t, o)) : (o = r);
          }
        }
        let u = o;
        if (1 === o.s) t = o.v;
        else if (((t = e.apply(null, arguments)), a++, i)) {
          let e = r?.deref?.() ?? r;
          (null != e && i(e, t) && ((t = e), 0 !== a && a--),
            (r =
              ("object" == typeof t && null !== t) || "function" == typeof t
                ? new e6(t)
                : t));
        }
        return ((u.s = 1), (u.v = t), t);
      }
      return (
        (o.clearCache = () => {
          ((n = e4()), o.resetResultsCount());
        }),
        (o.resultsCount = () => a),
        (o.resetResultsCount = () => {
          a = 0;
        }),
        o
      );
    }
    var e7 = (function (e, ...t) {
        let r = "function" == typeof e ? { memoize: e, memoizeOptions: t } : e,
          n = (...e) => {
            let t,
              n,
              i = 0,
              a = 0,
              o = {},
              l = e.pop();
            ("object" == typeof l && ((o = l), (l = e.pop())),
              (function (
                e,
                t = `expected a function, instead received ${typeof e}`,
              ) {
                if ("function" != typeof e) throw TypeError(t);
              })(
                l,
                `createSelector expects an output function after the inputs, but received: [${typeof l}]`,
              ));
            let {
                memoize: u,
                memoizeOptions: c = [],
                argsMemoize: s = e8,
                argsMemoizeOptions: f = [],
                devModeChecks: d = {},
              } = { ...r, ...o },
              p = eq(c),
              h = eq(f),
              y =
                (!(function (
                  e,
                  t = "expected all items to be functions, instead received the following types: ",
                ) {
                  if (!e.every((e) => "function" == typeof e)) {
                    let r = e
                      .map((e) =>
                        "function" == typeof e
                          ? `function ${e.name || "unnamed"}()`
                          : typeof e,
                      )
                      .join(", ");
                    throw TypeError(`${t}[${r}]`);
                  }
                })(
                  (t = Array.isArray(e[0]) ? e[0] : e),
                  "createSelector expects all input-selectors to be functions, but received the following types: ",
                ),
                t),
              v = u(
                function () {
                  return (i++, l.apply(null, arguments));
                },
                ...p,
              );
            return Object.assign(
              s(
                function () {
                  a++;
                  let e = (function (e, t) {
                    let r = [],
                      { length: n } = e;
                    for (let i = 0; i < n; i++) r.push(e[i].apply(null, t));
                    return r;
                  })(y, arguments);
                  return (n = v.apply(null, e));
                },
                ...h,
              ),
              {
                resultFunc: l,
                memoizedResultFunc: v,
                dependencies: y,
                dependencyRecomputations: () => a,
                resetDependencyRecomputations: () => {
                  a = 0;
                },
                lastResult: () => n,
                recomputations: () => i,
                resetRecomputations: () => {
                  i = 0;
                },
                memoize: u,
                argsMemoize: s,
              },
            );
          };
        return (Object.assign(n, { withTypes: () => n }), n);
      })(e8),
      e9 = Object.assign(
        (e, t = e7) => {
          !(function (
            e,
            t = `expected an object, instead received ${typeof e}`,
          ) {
            if ("object" != typeof e) throw TypeError(t);
          })(
            e,
            `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
          );
          let r = Object.keys(e);
          return t(
            r.map((t) => e[t]),
            (...e) => e.reduce((e, t, n) => ((e[r[n]] = t), e), {}),
          );
        },
        { withTypes: () => e9 },
      );
    function te(e) {
      return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
    }
    var tt =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable",
      tr = () => Math.random().toString(36).substring(7).split("").join("."),
      tn = {
        INIT: `@@redux/INIT${tr()}`,
        REPLACE: `@@redux/REPLACE${tr()}`,
        PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${tr()}`,
      };
    function ti(e) {
      if ("object" != typeof e || null === e) return !1;
      let t = e;
      for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
      return (
        Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e)
      );
    }
    function ta(e) {
      let t,
        r = Object.keys(e),
        n = {};
      for (let t = 0; t < r.length; t++) {
        let i = r[t];
        "function" == typeof e[i] && (n[i] = e[i]);
      }
      let i = Object.keys(n);
      try {
        Object.keys(n).forEach((e) => {
          let t = n[e];
          if (void 0 === t(void 0, { type: tn.INIT })) throw Error(te(12));
          if (void 0 === t(void 0, { type: tn.PROBE_UNKNOWN_ACTION() }))
            throw Error(te(13));
        });
      } catch (e) {
        t = e;
      }
      return function (e = {}, r) {
        if (t) throw t;
        let a = !1,
          o = {};
        for (let t = 0; t < i.length; t++) {
          let l = i[t],
            u = n[l],
            c = e[l],
            s = u(c, r);
          if (void 0 === s) throw (r && r.type, Error(te(14)));
          ((o[l] = s), (a = a || s !== c));
        }
        return (a = a || i.length !== Object.keys(e).length) ? o : e;
      };
    }
    function to(...e) {
      return 0 === e.length
        ? (e) => e
        : 1 === e.length
          ? e[0]
          : e.reduce(
              (e, t) =>
                (...r) =>
                  e(t(...r)),
            );
    }
    function tl(e) {
      return ti(e) && "type" in e && "string" == typeof e.type;
    }
    function tu(e) {
      return ({ dispatch: t, getState: r }) =>
        (n) =>
        (i) =>
          "function" == typeof i ? i(t, r, e) : n(i);
    }
    var tc = tu(),
      ts =
        "u" > typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          : function () {
              if (0 != arguments.length)
                return "object" == typeof arguments[0]
                  ? to
                  : to.apply(null, arguments);
            };
    function tf(e, t) {
      function r(...n) {
        if (t) {
          let r = t(...n);
          if (!r) throw Error(t0(0));
          return {
            type: e,
            payload: r.payload,
            ...("meta" in r && { meta: r.meta }),
            ...("error" in r && { error: r.error }),
          };
        }
        return { type: e, payload: n[0] };
      }
      return (
        (r.toString = () => `${e}`),
        (r.type = e),
        (r.match = (t) => tl(t) && t.type === e),
        r
      );
    }
    "u" > typeof window &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__;
    var td = class e extends Array {
      constructor(...t) {
        (super(...t), Object.setPrototypeOf(this, e.prototype));
      }
      static get [Symbol.species]() {
        return e;
      }
      concat(...e) {
        return super.concat.apply(this, e);
      }
      prepend(...t) {
        return 1 === t.length && Array.isArray(t[0])
          ? new e(...t[0].concat(this))
          : new e(...t.concat(this));
      }
    };
    function tp(e) {
      return Q(e) ? eW(e, () => {}) : e;
    }
    function th(e, t, r) {
      return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
    }
    var ty = "RTK_autoBatch",
      tv = () => (e) => ({ payload: e, meta: { [ty]: !0 } }),
      tg = (e) => (t) => {
        setTimeout(t, e);
      },
      tm =
        (e = { type: "raf" }) =>
        (t) =>
        (...r) => {
          let n,
            i = t(...r),
            a = !0,
            o = !1,
            l = !1,
            u = new Set(),
            c =
              "tick" === e.type
                ? queueMicrotask
                : "raf" === e.type
                  ? "u" > typeof window && window.requestAnimationFrame
                    ? ((n = window.requestAnimationFrame),
                      (e) => {
                        let t = !1,
                          r = () => {
                            t ||
                              ((t = !0),
                              cancelAnimationFrame(i),
                              clearTimeout(a),
                              e());
                          },
                          i = n(r),
                          a = setTimeout(r, 100);
                      })
                    : tg(10)
                  : "callback" === e.type
                    ? e.queueNotification
                    : tg(e.timeout),
            s = () => {
              ((l = !1), o && ((o = !1), u.forEach((e) => e())));
            };
          return Object.assign({}, i, {
            subscribe(e) {
              let t = i.subscribe(() => a && e());
              return (
                u.add(e),
                () => {
                  (t(), u.delete(e));
                }
              );
            },
            dispatch(e) {
              try {
                return (
                  (o = !(a = !e?.meta?.[ty])) && !l && ((l = !0), c(s)),
                  i.dispatch(e)
                );
              } finally {
                a = !0;
              }
            },
          });
        };
    function tb(e) {
      let t,
        r = {},
        n = [],
        i = {
          addCase(e, t) {
            let n = "string" == typeof e ? e : e.type;
            if (!n) throw Error(t0(28));
            if (n in r) throw Error(t0(29));
            return ((r[n] = t), i);
          },
          addAsyncThunk: (e, t) => (
            t.pending && (r[e.pending.type] = t.pending),
            t.rejected && (r[e.rejected.type] = t.rejected),
            t.fulfilled && (r[e.fulfilled.type] = t.fulfilled),
            t.settled && n.push({ matcher: e.settled, reducer: t.settled }),
            i
          ),
          addMatcher: (e, t) => (n.push({ matcher: e, reducer: t }), i),
          addDefaultCase: (e) => ((t = e), i),
        };
      return (e(i), [r, n, t]);
    }
    var tx = Symbol.for("rtk-slice-createasyncthunk"),
      tw =
        (((r = tw || {}).reducer = "reducer"),
        (r.reducerWithPrepare = "reducerWithPrepare"),
        (r.asyncThunk = "asyncThunk"),
        r),
      tO = (function ({ creators: e } = {}) {
        let t = e?.asyncThunk?.[tx];
        return function (e) {
          let r,
            { name: n, reducerPath: i = n } = e;
          if (!n) throw Error(t0(11));
          let a =
              ("function" == typeof e.reducers
                ? e.reducers(
                    (function () {
                      function e(e, t) {
                        return {
                          _reducerDefinitionType: "asyncThunk",
                          payloadCreator: e,
                          ...t,
                        };
                      }
                      return (
                        (e.withTypes = () => e),
                        {
                          reducer: (e) =>
                            Object.assign(
                              { [e.name]: (...t) => e(...t) }[e.name],
                              { _reducerDefinitionType: "reducer" },
                            ),
                          preparedReducer: (e, t) => ({
                            _reducerDefinitionType: "reducerWithPrepare",
                            prepare: e,
                            reducer: t,
                          }),
                          asyncThunk: e,
                        }
                      );
                    })(),
                  )
                : e.reducers) || {},
            o = Object.keys(a),
            l = {},
            u = {},
            c = {},
            s = [],
            f = {
              addCase(e, t) {
                let r = "string" == typeof e ? e : e.type;
                if (!r) throw Error(t0(12));
                if (r in u) throw Error(t0(13));
                return ((u[r] = t), f);
              },
              addMatcher: (e, t) => (s.push({ matcher: e, reducer: t }), f),
              exposeAction: (e, t) => ((c[e] = t), f),
              exposeCaseReducer: (e, t) => ((l[e] = t), f),
            };
          function d() {
            let [t = {}, r = [], n] =
                "function" == typeof e.extraReducers
                  ? tb(e.extraReducers)
                  : [e.extraReducers],
              i = { ...t, ...u };
            return (function (e, t) {
              let r,
                [n, i, a] = tb(t);
              if ("function" == typeof e) r = () => tp(e());
              else {
                let t = tp(e);
                r = () => t;
              }
              function o(e = r(), t) {
                let l = [
                  n[t.type],
                  ...i
                    .filter(({ matcher: e }) => e(t))
                    .map(({ reducer: e }) => e),
                ];
                return (
                  0 === l.filter((e) => !!e).length && (l = [a]),
                  l.reduce((e, r) => {
                    if (r)
                      if (Z(e)) {
                        let n = r(e, t);
                        return void 0 === n ? e : n;
                      } else {
                        if (Q(e)) return eW(e, (e) => r(e, t));
                        let n = r(e, t);
                        if (void 0 === n) {
                          if (null === e) return e;
                          throw Error(
                            "A case reducer on a non-draftable value must not return undefined",
                          );
                        }
                        return n;
                      }
                    return e;
                  }, e)
                );
              }
              return ((o.getInitialState = r), o);
            })(e.initialState, (e) => {
              for (let t in i) e.addCase(t, i[t]);
              for (let t of s) e.addMatcher(t.matcher, t.reducer);
              for (let t of r) e.addMatcher(t.matcher, t.reducer);
              n && e.addDefaultCase(n);
            });
          }
          o.forEach((r) => {
            let i = a[r],
              o = {
                reducerName: r,
                type: `${n}/${r}`,
                createNotation: "function" == typeof e.reducers,
              };
            "asyncThunk" === i._reducerDefinitionType
              ? (function ({ type: e, reducerName: t }, r, n, i) {
                  if (!i) throw Error(t0(18));
                  let {
                      payloadCreator: a,
                      fulfilled: o,
                      pending: l,
                      rejected: u,
                      settled: c,
                      options: s,
                    } = r,
                    f = i(e, a, s);
                  (n.exposeAction(t, f),
                    o && n.addCase(f.fulfilled, o),
                    l && n.addCase(f.pending, l),
                    u && n.addCase(f.rejected, u),
                    c && n.addMatcher(f.settled, c),
                    n.exposeCaseReducer(t, {
                      fulfilled: o || tj,
                      pending: l || tj,
                      rejected: u || tj,
                      settled: c || tj,
                    }));
                })(o, i, f, t)
              : (function (
                  { type: e, reducerName: t, createNotation: r },
                  n,
                  i,
                ) {
                  let a, o;
                  if ("reducer" in n) {
                    if (r && "reducerWithPrepare" !== n._reducerDefinitionType)
                      throw Error(t0(17));
                    ((a = n.reducer), (o = n.prepare));
                  } else a = n;
                  i.addCase(e, a)
                    .exposeCaseReducer(t, a)
                    .exposeAction(t, o ? tf(e, o) : tf(e));
                })(o, i, f);
          });
          let p = (e) => e,
            h = new Map(),
            y = new WeakMap();
          function v(e, t) {
            return (r || (r = d()), r(e, t));
          }
          function g() {
            return (r || (r = d()), r.getInitialState());
          }
          function m(t, r = !1) {
            function n(e) {
              let i = e[t];
              return (void 0 === i && r && (i = th(y, n, g)), i);
            }
            function i(t = p) {
              let n = th(h, r, () => new WeakMap());
              return th(n, t, () => {
                let n = {};
                for (let [i, a] of Object.entries(e.selectors ?? {}))
                  n[i] = (function (e, t, r, n) {
                    function i(a, ...o) {
                      let l = t(a);
                      return (void 0 === l && n && (l = r()), e(l, ...o));
                    }
                    return ((i.unwrapped = e), i);
                  })(a, t, () => th(y, t, g), r);
                return n;
              });
            }
            return {
              reducerPath: t,
              getSelectors: i,
              get selectors() {
                return i(n);
              },
              selectSlice: n,
            };
          }
          let b = {
            name: n,
            reducer: v,
            actions: c,
            caseReducers: l,
            getInitialState: g,
            ...m(i),
            injectInto(e, { reducerPath: t, ...r } = {}) {
              let n = t ?? i;
              return (
                e.inject({ reducerPath: n, reducer: v }, r),
                { ...b, ...m(n, !0) }
              );
            },
          };
          return b;
        };
      })();
    function tj() {}
    var tP = "listener",
      t_ = "completed",
      tE = "cancelled",
      tS = `task-${tE}`,
      tk = `task-${t_}`,
      tA = `${tP}-${tE}`,
      tM = `${tP}-${t_}`,
      tC = class {
        constructor(e) {
          ((this.code = e), (this.message = `task ${tE} (reason: ${e})`));
        }
        code;
        name = "TaskAbortError";
        message;
      },
      tT = (e, t) => {
        if ("function" != typeof e) throw TypeError(t0(32));
      },
      tD = () => {},
      tI = (e, t = tD) => (e.catch(t), e),
      tN = (e, t) => (
        e.addEventListener("abort", t, { once: !0 }),
        () => e.removeEventListener("abort", t)
      ),
      tz = (e) => {
        if (e.aborted) throw new tC(e.reason);
      };
    function tL(e, t) {
      let r = tD;
      return new Promise((n, i) => {
        let a = () => i(new tC(e.reason));
        e.aborted ? a() : ((r = tN(e, a)), t.finally(() => r()).then(n, i));
      }).finally(() => {
        r = tD;
      });
    }
    var tR = async (e, t) => {
        try {
          await Promise.resolve();
          let t = await e();
          return { status: "ok", value: t };
        } catch (e) {
          return {
            status: e instanceof tC ? "cancelled" : "rejected",
            error: e,
          };
        } finally {
          t?.();
        }
      },
      tF = (e) => (t) => tI(tL(e, t).then((t) => (tz(e), t))),
      tB = (e) => {
        let t = tF(e);
        return (e) => t(new Promise((t) => setTimeout(t, e)));
      },
      { assign: t$ } = Object,
      tU = {},
      tK = "listenerMiddleware",
      tW = (e) => {
        let {
          type: t,
          actionCreator: r,
          matcher: n,
          predicate: i,
          effect: a,
        } = e;
        if (t) i = tf(t).match;
        else if (r) ((t = r.type), (i = r.match));
        else if (n) i = n;
        else if (i);
        else throw Error(t0(21));
        return (
          tT(a, "options.listener"),
          { predicate: i, type: t, effect: a }
        );
      },
      tq = t$(
        (e) => {
          let { type: t, predicate: r, effect: n } = tW(e);
          return {
            id: ((e = 21) => {
              let t = "",
                r = e;
              for (; r--; )
                t +=
                  "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
                    (64 * Math.random()) | 0
                  ];
              return t;
            })(),
            effect: n,
            type: t,
            predicate: r,
            pending: new Set(),
            unsubscribe: () => {
              throw Error(t0(22));
            },
          };
        },
        { withTypes: () => tq },
      ),
      tH = (e, t) => {
        let { type: r, effect: n, predicate: i } = tW(t);
        return Array.from(e.values()).find(
          (e) =>
            ("string" == typeof r ? e.type === r : e.predicate === i) &&
            e.effect === n,
        );
      },
      tV = (e) => {
        e.pending.forEach((e) => {
          e.abort(tA);
        });
      },
      tY = (e, t, r) => {
        try {
          e(t, r);
        } catch (e) {
          setTimeout(() => {
            throw e;
          }, 0);
        }
      },
      tG = t$(tf(`${tK}/add`), { withTypes: () => tG }),
      tX = tf(`${tK}/removeAll`),
      tZ = t$(tf(`${tK}/remove`), { withTypes: () => tZ }),
      tQ = (...e) => {
        console.error(`${tK}/error`, ...e);
      },
      tJ = (e = {}) => {
        let t = new Map(),
          r = new Map(),
          { extra: n, onError: i = tQ } = e;
        tT(i, "onError");
        let a = (e) => {
          var r;
          return (
            ((r = tH(t, e) ?? tq(e)).unsubscribe = () => t.delete(r.id)),
            t.set(r.id, r),
            (e) => {
              (r.unsubscribe(), e?.cancelActive && tV(r));
            }
          );
        };
        t$(a, { withTypes: () => a });
        let o = (e) => {
          let r = tH(t, e);
          return (r && (r.unsubscribe(), e.cancelActive && tV(r)), !!r);
        };
        t$(o, { withTypes: () => o });
        let l = async (e, o, l, u) => {
            var c, s;
            let f,
              d = new AbortController(),
              p =
                ((c = d.signal),
                (f = async (e, t) => {
                  tz(c);
                  let r = () => {},
                    n = [
                      new Promise((t, n) => {
                        let i = a({
                          predicate: e,
                          effect: (e, r) => {
                            (r.unsubscribe(),
                              t([e, r.getState(), r.getOriginalState()]));
                          },
                        });
                        r = () => {
                          (i(), n());
                        };
                      }),
                    ];
                  null != t &&
                    n.push(new Promise((e) => setTimeout(e, t, null)));
                  try {
                    let e = await tL(c, Promise.race(n));
                    return (tz(c), e);
                  } finally {
                    r();
                  }
                }),
                (e, t) => tI(f(e, t))),
              h = [];
            try {
              let i;
              (e.pending.add(d),
                (i = r.get(e) ?? 0),
                r.set(e, i + 1),
                await Promise.resolve(
                  e.effect(
                    o,
                    t$({}, l, {
                      getOriginalState: u,
                      condition: (e, t) => p(e, t).then(Boolean),
                      take: p,
                      delay: tB(d.signal),
                      pause: tF(d.signal),
                      extra: n,
                      signal: d.signal,
                      fork:
                        ((s = d.signal),
                        (e, t) => {
                          tT(e, "taskExecutor");
                          let r = new AbortController();
                          tN(s, () => r.abort(s.reason));
                          let n = tR(
                            async () => {
                              (tz(s), tz(r.signal));
                              let t = await e({
                                pause: tF(r.signal),
                                delay: tB(r.signal),
                                signal: r.signal,
                              });
                              return (tz(r.signal), t);
                            },
                            () => r.abort(tk),
                          );
                          return (
                            t?.autoJoin && h.push(n.catch(tD)),
                            {
                              result: tF(s)(n),
                              cancel() {
                                r.abort(tS);
                              },
                            }
                          );
                        }),
                      unsubscribe: e.unsubscribe,
                      subscribe: () => {
                        t.set(e.id, e);
                      },
                      cancelActiveListeners: () => {
                        e.pending.forEach((e, t, r) => {
                          e !== d && (e.abort(tA), r.delete(e));
                        });
                      },
                      cancel: () => {
                        (d.abort(tA), e.pending.delete(d));
                      },
                      throwIfCancelled: () => {
                        tz(d.signal);
                      },
                    }),
                  ),
                ));
            } catch (e) {
              e instanceof tC || tY(i, e, { raisedBy: "effect" });
            } finally {
              let t;
              (await Promise.all(h),
                d.abort(tM),
                1 === (t = r.get(e) ?? 1) ? r.delete(e) : r.set(e, t - 1),
                e.pending.delete(d));
            }
          },
          u = () => {
            for (let e of r.keys()) tV(e);
            t.clear();
          };
        return {
          middleware: (e) => (r) => (n) => {
            let c;
            if (!tl(n)) return r(n);
            if (tG.match(n)) return a(n.payload);
            if (tX.match(n)) return void u();
            if (tZ.match(n)) return o(n.payload);
            let s = e.getState(),
              f = () => {
                if (s === tU) throw Error(t0(23));
                return s;
              };
            try {
              if (((c = r(n)), t.size > 0)) {
                let r = e.getState();
                for (let a of Array.from(t.values())) {
                  let t = !1;
                  try {
                    t = a.predicate(n, r, s);
                  } catch (e) {
                    ((t = !1), tY(i, e, { raisedBy: "predicate" }));
                  }
                  t && l(a, n, e, f);
                }
              }
            } finally {
              s = tU;
            }
            return c;
          },
          startListening: a,
          stopListening: o,
          clearListeners: u,
        };
      };
    function t0(e) {
      return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
    }
    var t1 = e.i(992068);
    function t2(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
        r = 10 ** t,
        n = Math.round(e * r) / r;
      return Object.is(n, -0) ? 0 : n;
    }
    function t5(e) {
      for (
        var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
        n < t;
        n++
      )
        r[n - 1] = arguments[n];
      return e.reduce((e, t, n) => {
        var i = r[n - 1];
        return "string" == typeof i
          ? e + i + t
          : void 0 !== i
            ? e + t2(i) + t
            : e + t;
      }, "");
    }
    var t3 = (e) => (0 === e ? 0 : e > 0 ? 1 : -1),
      t6 = (e) => "number" == typeof e && e != +e,
      t4 = (e) => "string" == typeof e && e.indexOf("%") === e.length - 1,
      t8 = (e) => ("number" == typeof e || e instanceof Number) && !t6(e),
      t7 = (e) => t8(e) || "string" == typeof e,
      t9 = 0,
      re = (e) => {
        var t = ++t9;
        return "".concat(e || "").concat(t);
      },
      rt = function (e, t) {
        var r,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!t8(e) && "string" != typeof e) return n;
        if (t4(e)) {
          if (null == t) return n;
          var a = e.indexOf("%");
          r = (t * parseFloat(e.slice(0, a))) / 100;
        } else r = +e;
        return (t6(r) && (r = n), i && null != t && r > t && (r = t), r);
      },
      rr = (e) => {
        if (!Array.isArray(e)) return !1;
        for (var t = e.length, r = {}, n = 0; n < t; n++)
          if (r[String(e[n])]) return !0;
          else r[String(e[n])] = !0;
        return !1;
      };
    function rn(e, t, r) {
      return t8(e) && t8(t) ? t2(e + r * (t - e)) : t;
    }
    function ri(e, t, r) {
      if (e && e.length)
        return e.find(
          (e) =>
            e && ("function" == typeof t ? t(e) : (0, t1.default)(e, t)) === r,
        );
    }
    var ra = (e) =>
      null == e ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
    function ro(e) {
      return null != e;
    }
    function rl() {}
    var ru = (e, t) => {
        if (t && Array.isArray(e)) {
          var r = Number.parseInt(t, 10);
          if (!t6(r)) return e[r];
        }
      },
      rc = tO({
        name: "options",
        initialState: {
          chartName: "",
          tooltipPayloadSearcher: () => void 0,
          eventEmitter: void 0,
          defaultTooltipEventType: "axis",
        },
        reducers: {
          createEventEmitter: (e) => {
            null == e.eventEmitter &&
              (e.eventEmitter = Symbol("rechartsEventEmitter"));
          },
        },
      }),
      rs = rc.reducer,
      { createEventEmitter: rf } = rc.actions,
      rd = (e.i(313027), { notify() {}, get: () => [] }),
      rp =
        "u" > typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      rh = "u" > typeof navigator && "ReactNative" === navigator.product,
      ry = rp || rh ? R.useLayoutEffect : R.useEffect;
    function rv(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
    }
    var rg = Symbol.for("react-redux-context"),
      rm = "u" > typeof globalThis ? globalThis : {},
      rb = (function () {
        if (!R.createContext) return {};
        let e = (rm[rg] ??= new Map()),
          t = e.get(R.createContext);
        return (
          t || ((t = R.createContext(null)), e.set(R.createContext, t)),
          t
        );
      })(),
      rx = function (e) {
        let { children: t, context: r, serverState: n, store: i } = e,
          a = R.useMemo(() => {
            let e = (function (e) {
              let t,
                r = rd,
                n = 0,
                i = !1;
              function a() {
                u.onStateChange && u.onStateChange();
              }
              function o() {
                if ((n++, !t)) {
                  let n, i;
                  ((t = e.subscribe(a)),
                    (n = null),
                    (i = null),
                    (r = {
                      clear() {
                        ((n = null), (i = null));
                      },
                      notify() {
                        let e = n;
                        for (; e; ) (e.callback(), (e = e.next));
                      },
                      get() {
                        let e = [],
                          t = n;
                        for (; t; ) (e.push(t), (t = t.next));
                        return e;
                      },
                      subscribe(e) {
                        let t = !0,
                          r = (i = { callback: e, next: null, prev: i });
                        return (
                          r.prev ? (r.prev.next = r) : (n = r),
                          function () {
                            t &&
                              null !== n &&
                              ((t = !1),
                              r.next ? (r.next.prev = r.prev) : (i = r.prev),
                              r.prev ? (r.prev.next = r.next) : (n = r.next));
                          }
                        );
                      },
                    }));
                }
              }
              function l() {
                (n--, t && 0 === n && (t(), (t = void 0), r.clear(), (r = rd)));
              }
              let u = {
                addNestedSub: function (e) {
                  o();
                  let t = r.subscribe(e),
                    n = !1;
                  return () => {
                    n || ((n = !0), t(), l());
                  };
                },
                notifyNestedSubs: function () {
                  r.notify();
                },
                handleChangeWrapper: a,
                isSubscribed: function () {
                  return i;
                },
                trySubscribe: function () {
                  i || ((i = !0), o());
                },
                tryUnsubscribe: function () {
                  i && ((i = !1), l());
                },
                getListeners: () => r,
              };
              return u;
            })(i);
            return {
              store: i,
              subscription: e,
              getServerState: n ? () => n : void 0,
            };
          }, [i, n]),
          o = R.useMemo(() => i.getState(), [i]);
        return (
          ry(() => {
            let { subscription: e } = a;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              o !== i.getState() && e.notifyNestedSubs(),
              () => {
                (e.tryUnsubscribe(), (e.onStateChange = void 0));
              }
            );
          }, [a, o]),
          R.createElement((r || rb).Provider, { value: a }, t)
        );
      };
    function rw(e = rb) {
      return function () {
        return R.useContext(e);
      };
    }
    var rO = rw(),
      rj = Symbol.for("immer-nothing"),
      rP = Symbol.for("immer-draftable"),
      r_ = Symbol.for("immer-state");
    function rE(e) {
      throw Error(
        `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
      );
    }
    var rS = Object.getPrototypeOf;
    function rk(e) {
      return !!e && !!e[r_];
    }
    function rA(e) {
      return (
        !!e &&
        (rT(e) ||
          Array.isArray(e) ||
          !!e[rP] ||
          !!e.constructor?.[rP] ||
          rL(e) ||
          rR(e))
      );
    }
    var rM = Object.prototype.constructor.toString(),
      rC = new WeakMap();
    function rT(e) {
      if (!e || "object" != typeof e) return !1;
      let t = Object.getPrototypeOf(e);
      if (null === t || t === Object.prototype) return !0;
      let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
      if (r === Object) return !0;
      if ("function" != typeof r) return !1;
      let n = rC.get(r);
      return (
        void 0 === n && ((n = Function.toString.call(r)), rC.set(r, n)),
        n === rM
      );
    }
    function rD(e, t, r = !0) {
      0 === rI(e)
        ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((r) => {
            t(r, e[r], e);
          })
        : e.forEach((r, n) => t(n, r, e));
    }
    function rI(e) {
      let t = e[r_];
      return t ? t.type_ : Array.isArray(e) ? 1 : rL(e) ? 2 : 3 * !!rR(e);
    }
    function rN(e, t) {
      return 2 === rI(e)
        ? e.has(t)
        : Object.prototype.hasOwnProperty.call(e, t);
    }
    function rz(e, t, r) {
      let n = rI(e);
      2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
    }
    function rL(e) {
      return e instanceof Map;
    }
    function rR(e) {
      return e instanceof Set;
    }
    function rF(e) {
      return e.copy_ || e.base_;
    }
    function rB(e, t) {
      if (rL(e)) return new Map(e);
      if (rR(e)) return new Set(e);
      if (Array.isArray(e)) return Array.prototype.slice.call(e);
      let r = rT(e);
      if (!0 !== t && ("class_only" !== t || r)) {
        let t = rS(e);
        return null !== t && r ? { ...e } : Object.assign(Object.create(t), e);
      }
      {
        let t = Object.getOwnPropertyDescriptors(e);
        delete t[r_];
        let r = Reflect.ownKeys(t);
        for (let n = 0; n < r.length; n++) {
          let i = r[n],
            a = t[i];
          (!1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) &&
              (t[i] = {
                configurable: !0,
                writable: !0,
                enumerable: a.enumerable,
                value: e[i],
              }));
        }
        return Object.create(rS(e), t);
      }
    }
    function r$(e, t = !1) {
      return (
        rK(e) ||
          rk(e) ||
          !rA(e) ||
          (rI(e) > 1 &&
            Object.defineProperties(e, {
              set: rU,
              add: rU,
              clear: rU,
              delete: rU,
            }),
          Object.freeze(e),
          t && Object.values(e).forEach((e) => r$(e, !0))),
        e
      );
    }
    var rU = {
      value: function () {
        rE(2);
      },
    };
    function rK(e) {
      return null === e || "object" != typeof e || Object.isFrozen(e);
    }
    var rW = {};
    function rq(e) {
      let t = rW[e];
      return (t || rE(0, e), t);
    }
    function rH(e, t) {
      t &&
        (rq("Patches"),
        (e.patches_ = []),
        (e.inversePatches_ = []),
        (e.patchListener_ = t));
    }
    function rV(e) {
      (rY(e), e.drafts_.forEach(rX), (e.drafts_ = null));
    }
    function rY(e) {
      e === o && (o = e.parent_);
    }
    function rG(e) {
      return (o = {
        drafts_: [],
        parent_: o,
        immer_: e,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0,
      });
    }
    function rX(e) {
      let t = e[r_];
      0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
    }
    function rZ(e, t) {
      t.unfinalizedDrafts_ = t.drafts_.length;
      let r = t.drafts_[0];
      return (
        void 0 !== e && e !== r
          ? (r[r_].modified_ && (rV(t), rE(4)),
            rA(e) && ((e = rQ(t, e)), t.parent_ || r0(t, e)),
            t.patches_ &&
              rq("Patches").generateReplacementPatches_(
                r[r_].base_,
                e,
                t.patches_,
                t.inversePatches_,
              ))
          : (e = rQ(t, r, [])),
        rV(t),
        t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
        e !== rj ? e : void 0
      );
    }
    function rQ(e, t, r) {
      if (rK(t)) return t;
      let n = e.immer_.shouldUseStrictIteration(),
        i = t[r_];
      if (!i) return (rD(t, (n, a) => rJ(e, i, t, n, a, r), n), t);
      if (i.scope_ !== e) return t;
      if (!i.modified_) return (r0(e, i.base_, !0), i.base_);
      if (!i.finalized_) {
        ((i.finalized_ = !0), i.scope_.unfinalizedDrafts_--);
        let t = i.copy_,
          a = t,
          o = !1;
        (3 === i.type_ && ((a = new Set(t)), t.clear(), (o = !0)),
          rD(a, (n, a) => rJ(e, i, t, n, a, r, o), n),
          r0(e, t, !1),
          r &&
            e.patches_ &&
            rq("Patches").generatePatches_(
              i,
              r,
              e.patches_,
              e.inversePatches_,
            ));
      }
      return i.copy_;
    }
    function rJ(e, t, r, n, i, a, o) {
      if (null == i || ("object" != typeof i && !o)) return;
      let l = rK(i);
      if (!l || o) {
        if (rk(i)) {
          let o = rQ(
            e,
            i,
            a && t && 3 !== t.type_ && !rN(t.assigned_, n)
              ? a.concat(n)
              : void 0,
          );
          if ((rz(r, n, o), !rk(o))) return;
          e.canAutoFreeze_ = !1;
        } else o && r.add(i);
        if (rA(i) && !l) {
          if (
            (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
            (t && t.base_ && t.base_[n] === i && l)
          )
            return;
          (rQ(e, i),
            (!t || !t.scope_.parent_) &&
              "symbol" != typeof n &&
              (rL(r)
                ? r.has(n)
                : Object.prototype.propertyIsEnumerable.call(r, n)) &&
              r0(e, i));
        }
      }
    }
    function r0(e, t, r = !1) {
      !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && r$(t, r);
    }
    var r1 = {
        get(e, t) {
          if (t === r_) return e;
          let r = rF(e);
          if (!rN(r, t)) {
            var n;
            let i;
            return (
              (n = e),
              (i = r3(r, t))
                ? "value" in i
                  ? i.value
                  : i.get?.call(n.draft_)
                : void 0
            );
          }
          let i = r[t];
          return e.finalized_ || !rA(i)
            ? i
            : i === r5(e.base_, t)
              ? (r4(e), (e.copy_[t] = r7(i, e)))
              : i;
        },
        has: (e, t) => t in rF(e),
        ownKeys: (e) => Reflect.ownKeys(rF(e)),
        set(e, t, r) {
          let n = r3(rF(e), t);
          if (n?.set) return (n.set.call(e.draft_, r), !0);
          if (!e.modified_) {
            let n = r5(rF(e), t),
              i = n?.[r_];
            if (i && i.base_ === r)
              return ((e.copy_[t] = r), (e.assigned_[t] = !1), !0);
            if (
              (r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) &&
              (void 0 !== r || rN(e.base_, t))
            )
              return !0;
            (r4(e), r6(e));
          }
          return (
            !!(
              (e.copy_[t] === r && (void 0 !== r || t in e.copy_)) ||
              (Number.isNaN(r) && Number.isNaN(e.copy_[t]))
            ) || ((e.copy_[t] = r), (e.assigned_[t] = !0), !0)
          );
        },
        deleteProperty: (e, t) => (
          void 0 !== r5(e.base_, t) || t in e.base_
            ? ((e.assigned_[t] = !1), r4(e), r6(e))
            : delete e.assigned_[t],
          e.copy_ && delete e.copy_[t],
          !0
        ),
        getOwnPropertyDescriptor(e, t) {
          let r = rF(e),
            n = Reflect.getOwnPropertyDescriptor(r, t);
          return n
            ? {
                writable: !0,
                configurable: 1 !== e.type_ || "length" !== t,
                enumerable: n.enumerable,
                value: r[t],
              }
            : n;
        },
        defineProperty() {
          rE(11);
        },
        getPrototypeOf: (e) => rS(e.base_),
        setPrototypeOf() {
          rE(12);
        },
      },
      r2 = {};
    function r5(e, t) {
      let r = e[r_];
      return (r ? rF(r) : e)[t];
    }
    function r3(e, t) {
      if (!(t in e)) return;
      let r = rS(e);
      for (; r; ) {
        let e = Object.getOwnPropertyDescriptor(r, t);
        if (e) return e;
        r = rS(r);
      }
    }
    function r6(e) {
      !e.modified_ && ((e.modified_ = !0), e.parent_ && r6(e.parent_));
    }
    function r4(e) {
      e.copy_ || (e.copy_ = rB(e.base_, e.scope_.immer_.useStrictShallowCopy_));
    }
    (rD(r1, (e, t) => {
      r2[e] = function () {
        return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
      };
    }),
      (r2.deleteProperty = function (e, t) {
        return r2.set.call(this, e, t, void 0);
      }),
      (r2.set = function (e, t, r) {
        return r1.set.call(this, e[0], t, r, e[0]);
      }));
    var r8 = class {
      constructor(e) {
        ((this.autoFreeze_ = !0),
          (this.useStrictShallowCopy_ = !1),
          (this.useStrictIteration_ = !0),
          (this.produce = (e, t, r) => {
            let n;
            if ("function" == typeof e && "function" != typeof t) {
              let r = t;
              t = e;
              let n = this;
              return function (e = r, ...i) {
                return n.produce(e, (e) => t.call(this, e, ...i));
              };
            }
            if (
              ("function" != typeof t && rE(6),
              void 0 !== r && "function" != typeof r && rE(7),
              rA(e))
            ) {
              let i = rG(this),
                a = r7(e, void 0),
                o = !0;
              try {
                ((n = t(a)), (o = !1));
              } finally {
                o ? rV(i) : rY(i);
              }
              return (rH(i, r), rZ(n, i));
            }
            if (e && "object" == typeof e) rE(1, e);
            else {
              if (
                (void 0 === (n = t(e)) && (n = e),
                n === rj && (n = void 0),
                this.autoFreeze_ && r$(n, !0),
                r)
              ) {
                let t = [],
                  i = [];
                (rq("Patches").generateReplacementPatches_(e, n, t, i),
                  r(t, i));
              }
              return n;
            }
          }),
          (this.produceWithPatches = (e, t) => {
            let r, n;
            return "function" == typeof e
              ? (t, ...r) => this.produceWithPatches(t, (t) => e(t, ...r))
              : [
                  this.produce(e, t, (e, t) => {
                    ((r = e), (n = t));
                  }),
                  r,
                  n,
                ];
          }),
          "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze),
          "boolean" == typeof e?.useStrictShallowCopy &&
            this.setUseStrictShallowCopy(e.useStrictShallowCopy),
          "boolean" == typeof e?.useStrictIteration &&
            this.setUseStrictIteration(e.useStrictIteration));
      }
      createDraft(e) {
        var t;
        (rA(e) || rE(8),
          rk(e) &&
            (rk((t = e)) || rE(10, t),
            (e = (function e(t) {
              let r;
              if (!rA(t) || rK(t)) return t;
              let n = t[r_],
                i = !0;
              if (n) {
                if (!n.modified_) return n.base_;
                ((n.finalized_ = !0),
                  (r = rB(t, n.scope_.immer_.useStrictShallowCopy_)),
                  (i = n.scope_.immer_.shouldUseStrictIteration()));
              } else r = rB(t, !0);
              return (
                rD(
                  r,
                  (t, n) => {
                    rz(r, t, e(n));
                  },
                  i,
                ),
                n && (n.finalized_ = !1),
                r
              );
            })(t))));
        let r = rG(this),
          n = r7(e, void 0);
        return ((n[r_].isManual_ = !0), rY(r), n);
      }
      finishDraft(e, t) {
        let r = e && e[r_];
        (r && r.isManual_) || rE(9);
        let { scope_: n } = r;
        return (rH(n, t), rZ(void 0, n));
      }
      setAutoFreeze(e) {
        this.autoFreeze_ = e;
      }
      setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e;
      }
      setUseStrictIteration(e) {
        this.useStrictIteration_ = e;
      }
      shouldUseStrictIteration() {
        return this.useStrictIteration_;
      }
      applyPatches(e, t) {
        let r;
        for (r = t.length - 1; r >= 0; r--) {
          let n = t[r];
          if (0 === n.path.length && "replace" === n.op) {
            e = n.value;
            break;
          }
        }
        r > -1 && (t = t.slice(r + 1));
        let n = rq("Patches").applyPatches_;
        return rk(e) ? n(e, t) : this.produce(e, (e) => n(e, t));
      }
    };
    function r7(e, t) {
      let r = rL(e)
        ? rq("MapSet").proxyMap_(e, t)
        : rR(e)
          ? rq("MapSet").proxySet_(e, t)
          : (function (e, t) {
              let r = Array.isArray(e),
                n = {
                  type_: +!!r,
                  scope_: t ? t.scope_ : o,
                  modified_: !1,
                  finalized_: !1,
                  assigned_: {},
                  parent_: t,
                  base_: e,
                  draft_: null,
                  copy_: null,
                  revoke_: null,
                  isManual_: !1,
                },
                i = n,
                a = r1;
              r && ((i = [n]), (a = r2));
              let { revoke: l, proxy: u } = Proxy.revocable(i, a);
              return ((n.draft_ = u), (n.revoke_ = l), u);
            })(e, t);
      return ((t ? t.scope_ : o).drafts_.push(r), r);
    }
    new r8().produce;
    var r9 = {
        active: !1,
        index: null,
        dataKey: void 0,
        graphicalItemId: void 0,
        coordinate: void 0,
      },
      ne = tO({
        name: "tooltip",
        initialState: {
          itemInteraction: { click: r9, hover: r9 },
          axisInteraction: { click: r9, hover: r9 },
          keyboardInteraction: r9,
          syncInteraction: {
            active: !1,
            index: null,
            dataKey: void 0,
            label: void 0,
            coordinate: void 0,
            sourceViewBox: void 0,
            graphicalItemId: void 0,
          },
          tooltipItemPayloads: [],
          settings: {
            shared: void 0,
            trigger: "hover",
            axisId: 0,
            active: !1,
            defaultIndex: void 0,
          },
        },
        reducers: {
          addTooltipEntrySettings: {
            reducer(e, t) {
              e.tooltipItemPayloads.push(t.payload);
            },
            prepare: tv(),
          },
          replaceTooltipEntrySettings: {
            reducer(e, t) {
              var { prev: r, next: n } = t.payload,
                i = eK(e).tooltipItemPayloads.indexOf(r);
              i > -1 && (e.tooltipItemPayloads[i] = n);
            },
            prepare: tv(),
          },
          removeTooltipEntrySettings: {
            reducer(e, t) {
              var r = eK(e).tooltipItemPayloads.indexOf(t.payload);
              r > -1 && e.tooltipItemPayloads.splice(r, 1);
            },
            prepare: tv(),
          },
          setTooltipSettingsState(e, t) {
            e.settings = t.payload;
          },
          setActiveMouseOverItemIndex(e, t) {
            ((e.syncInteraction.active = !1),
              (e.syncInteraction.sourceViewBox = void 0),
              (e.keyboardInteraction.active = !1),
              (e.itemInteraction.hover.active = !0),
              (e.itemInteraction.hover.index = t.payload.activeIndex),
              (e.itemInteraction.hover.dataKey = t.payload.activeDataKey),
              (e.itemInteraction.hover.graphicalItemId =
                t.payload.activeGraphicalItemId),
              (e.itemInteraction.hover.coordinate =
                t.payload.activeCoordinate));
          },
          mouseLeaveChart(e) {
            ((e.itemInteraction.hover.active = !1),
              (e.axisInteraction.hover.active = !1));
          },
          mouseLeaveItem(e) {
            e.itemInteraction.hover.active = !1;
          },
          setActiveClickItemIndex(e, t) {
            ((e.syncInteraction.active = !1),
              (e.syncInteraction.sourceViewBox = void 0),
              (e.itemInteraction.click.active = !0),
              (e.keyboardInteraction.active = !1),
              (e.itemInteraction.click.index = t.payload.activeIndex),
              (e.itemInteraction.click.dataKey = t.payload.activeDataKey),
              (e.itemInteraction.click.graphicalItemId =
                t.payload.activeGraphicalItemId),
              (e.itemInteraction.click.coordinate =
                t.payload.activeCoordinate));
          },
          setMouseOverAxisIndex(e, t) {
            ((e.syncInteraction.active = !1),
              (e.syncInteraction.sourceViewBox = void 0),
              (e.axisInteraction.hover.active = !0),
              (e.keyboardInteraction.active = !1),
              (e.axisInteraction.hover.index = t.payload.activeIndex),
              (e.axisInteraction.hover.dataKey = t.payload.activeDataKey),
              (e.axisInteraction.hover.coordinate =
                t.payload.activeCoordinate));
          },
          setMouseClickAxisIndex(e, t) {
            ((e.syncInteraction.active = !1),
              (e.syncInteraction.sourceViewBox = void 0),
              (e.keyboardInteraction.active = !1),
              (e.axisInteraction.click.active = !0),
              (e.axisInteraction.click.index = t.payload.activeIndex),
              (e.axisInteraction.click.dataKey = t.payload.activeDataKey),
              (e.axisInteraction.click.coordinate =
                t.payload.activeCoordinate));
          },
          setSyncInteraction(e, t) {
            e.syncInteraction = t.payload;
          },
          setKeyboardInteraction(e, t) {
            ((e.keyboardInteraction.active = t.payload.active),
              (e.keyboardInteraction.index = t.payload.activeIndex),
              (e.keyboardInteraction.coordinate = t.payload.activeCoordinate));
          },
        },
      }),
      {
        addTooltipEntrySettings: nt,
        replaceTooltipEntrySettings: nr,
        removeTooltipEntrySettings: nn,
        setTooltipSettingsState: ni,
        setActiveMouseOverItemIndex: na,
        mouseLeaveItem: no,
        mouseLeaveChart: nl,
        setActiveClickItemIndex: nu,
        setMouseOverAxisIndex: nc,
        setMouseClickAxisIndex: ns,
        setSyncInteraction: nf,
        setKeyboardInteraction: nd,
      } = ne.actions,
      np = ne.reducer,
      nh = tO({
        name: "chartData",
        initialState: {
          chartData: void 0,
          computedData: void 0,
          dataStartIndex: 0,
          dataEndIndex: 0,
        },
        reducers: {
          setChartData(e, t) {
            if (((e.chartData = t.payload), null == t.payload)) {
              ((e.dataStartIndex = 0), (e.dataEndIndex = 0));
              return;
            }
            t.payload.length > 0 &&
              e.dataEndIndex !== t.payload.length - 1 &&
              (e.dataEndIndex = t.payload.length - 1);
          },
          setComputedData(e, t) {
            e.computedData = t.payload;
          },
          setDataStartEndIndexes(e, t) {
            var { startIndex: r, endIndex: n } = t.payload;
            (null != r && (e.dataStartIndex = r),
              null != n && (e.dataEndIndex = n));
          },
        },
      }),
      {
        setChartData: ny,
        setDataStartEndIndexes: nv,
        setComputedData: ng,
      } = nh.actions,
      nm = nh.reducer,
      nb = tO({
        name: "chartLayout",
        initialState: {
          layoutType: "horizontal",
          width: 0,
          height: 0,
          margin: { top: 5, right: 5, bottom: 5, left: 5 },
          scale: 1,
        },
        reducers: {
          setLayout(e, t) {
            e.layoutType = t.payload;
          },
          setChartSize(e, t) {
            ((e.width = t.payload.width), (e.height = t.payload.height));
          },
          setMargin(e, t) {
            var r, n, i, a;
            ((e.margin.top = null != (r = t.payload.top) ? r : 0),
              (e.margin.right = null != (n = t.payload.right) ? n : 0),
              (e.margin.bottom = null != (i = t.payload.bottom) ? i : 0),
              (e.margin.left = null != (a = t.payload.left) ? a : 0));
          },
          setScale(e, t) {
            e.scale = t.payload;
          },
        },
      }),
      {
        setMargin: nx,
        setLayout: nw,
        setChartSize: nO,
        setScale: nj,
      } = nb.actions,
      nP = nb.reducer,
      n_ = e.i(430224),
      nE = (0, R.createContext)(null),
      nS = (e) => e,
      nk = () => {
        var e = (0, R.useContext)(nE);
        return e ? e.store.dispatch : nS;
      },
      nA = () => {},
      nM = () => nA,
      nC = (e, t) => e === t;
    function nT(e) {
      var t = (0, R.useContext)(nE),
        r = (0, R.useMemo)(
          () =>
            t
              ? (t) => {
                  if (null != t) return e(t);
                }
              : nA,
          [t, e],
        );
      return (0, n_.useSyncExternalStoreWithSelector)(
        t ? t.subscription.addNestedSub : nM,
        t ? t.store.getState : nA,
        t ? t.store.getState : nA,
        r,
        nC,
      );
    }
    var nD = e.i(342342),
      nI = (e) => e.legend.settings;
    function nN(e) {
      return "object" == typeof e && "length" in e ? e : Array.from(e);
    }
    function nz(e) {
      return function () {
        return e;
      };
    }
    function nL(e, t) {
      if ((i = e.length) > 1)
        for (var r, n, i, a = 1, o = e[t[0]], l = o.length; a < i; ++a)
          for (n = o, o = e[t[a]], r = 0; r < l; ++r)
            o[r][1] += o[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
    }
    function nR(e) {
      for (var t = e.length, r = Array(t); --t >= 0; ) r[t] = t;
      return r;
    }
    function nF(e, t) {
      return e[t];
    }
    function nB(e) {
      let t = [];
      return ((t.key = e), t);
    }
    function n$(e, t, r) {
      return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
    }
    function nU(e) {
      return Number.isFinite(e);
    }
    function nK(e) {
      return "number" == typeof e && e > 0 && Number.isFinite(e);
    }
    function nW(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function nq(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? nW(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : nW(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function nH(e, t, r) {
      return null == e || null == t
        ? r
        : t7(t)
          ? (0, t1.default)(e, t, r)
          : "function" == typeof t
            ? t(e)
            : r;
    }
    (e7([(e) => e.legend.payload, nI], (e, t) => {
      var { itemSorter: r } = t,
        n = e.flat(1);
      return r ? (0, nD.default)(n, r) : n;
    }),
      Array.prototype.slice);
    var nV = (e, t) =>
        ("horizontal" === e && "xAxis" === t) ||
        ("vertical" === e && "yAxis" === t) ||
        ("centric" === e && "angleAxis" === t) ||
        ("radial" === e && "radiusAxis" === t),
      nY = (e, t, r, n) => {
        if (n) return e.map((e) => e.coordinate);
        var i,
          a,
          o = e.map(
            (e) => (
              e.coordinate === t && (i = !0),
              e.coordinate === r && (a = !0),
              e.coordinate
            ),
          );
        return (i || o.push(t), a || o.push(r), o);
      },
      nG = (e, t, r) => {
        if (!e) return null;
        var {
          duplicateDomain: n,
          type: i,
          range: a,
          scale: o,
          realScaleType: l,
          isCategorical: u,
          categoricalDomain: c,
          tickCount: s,
          ticks: f,
          niceTicks: d,
          axisType: p,
        } = e;
        if (!o) return null;
        var h = "scaleBand" === l && o.bandwidth ? o.bandwidth() / 2 : 2,
          y =
            (t || r) && "category" === i && o.bandwidth ? o.bandwidth() / h : 0;
        return ((y =
          "angleAxis" === p && a && a.length >= 2
            ? 2 * t3(a[0] - a[1]) * y
            : y),
        t && (f || d))
          ? (f || d || [])
              .map((e, t) => {
                var r = n ? n.indexOf(e) : e,
                  i = o.map(r);
                return nU(i)
                  ? { coordinate: i + y, value: e, offset: y, index: t }
                  : null;
              })
              .filter(ro)
          : u && c
            ? c
                .map((e, t) => {
                  var r = o.map(e);
                  return nU(r)
                    ? { coordinate: r + y, value: e, index: t, offset: y }
                    : null;
                })
                .filter(ro)
            : o.ticks && !r && null != s
              ? o
                  .ticks(s)
                  .map((e, t) => {
                    var r = o.map(e);
                    return nU(r)
                      ? { coordinate: r + y, value: e, index: t, offset: y }
                      : null;
                  })
                  .filter(ro)
              : o
                  .domain()
                  .map((e, t) => {
                    var r = o.map(e);
                    return nU(r)
                      ? {
                          coordinate: r + y,
                          value: n ? n[e] : e,
                          index: t,
                          offset: y,
                        }
                      : null;
                  })
                  .filter(ro);
      },
      nX = {
        sign: (e) => {
          var t,
            r = e.length;
          if (!(r <= 0)) {
            var n = null == (t = e[0]) ? void 0 : t.length;
            if (null != n && !(n <= 0))
              for (var i = 0; i < n; ++i)
                for (var a = 0, o = 0, l = 0; l < r; ++l) {
                  var u = e[l],
                    c = null == u ? void 0 : u[i];
                  if (null != c) {
                    var s = c[1],
                      f = c[0],
                      d = t6(s) ? f : s;
                    d >= 0
                      ? ((c[0] = a), (a += d), (c[1] = a))
                      : ((c[0] = o), (o += d), (c[1] = o));
                  }
                }
          }
        },
        expand: function (e, t) {
          if ((n = e.length) > 0) {
            for (var r, n, i, a = 0, o = e[0].length; a < o; ++a) {
              for (i = r = 0; r < n; ++r) i += e[r][a][1] || 0;
              if (i) for (r = 0; r < n; ++r) e[r][a][1] /= i;
            }
            nL(e, t);
          }
        },
        none: nL,
        silhouette: function (e, t) {
          if ((r = e.length) > 0) {
            for (var r, n = 0, i = e[t[0]], a = i.length; n < a; ++n) {
              for (var o = 0, l = 0; o < r; ++o) l += e[o][n][1] || 0;
              i[n][1] += i[n][0] = -l / 2;
            }
            nL(e, t);
          }
        },
        wiggle: function (e, t) {
          if ((i = e.length) > 0 && (n = (r = e[t[0]]).length) > 0) {
            for (var r, n, i, a = 0, o = 1; o < n; ++o) {
              for (var l = 0, u = 0, c = 0; l < i; ++l) {
                for (
                  var s = e[t[l]],
                    f = s[o][1] || 0,
                    d = (f - (s[o - 1][1] || 0)) / 2,
                    p = 0;
                  p < l;
                  ++p
                ) {
                  var h = e[t[p]];
                  d += (h[o][1] || 0) - (h[o - 1][1] || 0);
                }
                ((u += f), (c += d * f));
              }
              ((r[o - 1][1] += r[o - 1][0] = a), u && (a -= c / u));
            }
            ((r[o - 1][1] += r[o - 1][0] = a), nL(e, t));
          }
        },
        positive: (e) => {
          var t,
            r = e.length;
          if (!(r <= 0)) {
            var n = null == (t = e[0]) ? void 0 : t.length;
            if (null != n && !(n <= 0))
              for (var i = 0; i < n; ++i)
                for (var a = 0, o = 0; o < r; ++o) {
                  var l = e[o],
                    u = null == l ? void 0 : l[i];
                  if (null != u) {
                    var c = t6(u[1]) ? u[0] : u[1];
                    c >= 0
                      ? ((u[0] = a), (a += c), (u[1] = a))
                      : ((u[0] = 0), (u[1] = 0));
                  }
                }
          }
        },
      };
    function nZ(e) {
      var {
        axis: t,
        ticks: r,
        bandSize: n,
        entry: i,
        index: a,
        dataKey: o,
      } = e;
      if ("category" === t.type) {
        if (!t.allowDuplicatedCategory && t.dataKey && null != i[t.dataKey]) {
          var l = ri(r, "value", i[t.dataKey]);
          if (l) return l.coordinate + n / 2;
        }
        return null != r && r[a] ? r[a].coordinate + n / 2 : null;
      }
      var u = nH(i, null == o ? t.dataKey : o),
        c = t.scale.map(u);
      return t8(c) ? c : null;
    }
    var nQ = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      nJ = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      n0 = (e, t, r) => {
        if (e && e.scale && e.scale.bandwidth) {
          var n = e.scale.bandwidth();
          if (!r || n > 0) return n;
        }
        if (e && t && t.length >= 2) {
          for (
            var i = (0, nD.default)(t, (e) => e.coordinate),
              a = 1 / 0,
              o = 1,
              l = i.length;
            o < l;
            o++
          ) {
            var u = i[o],
              c = i[o - 1];
            a = Math.min(
              ((null == u ? void 0 : u.coordinate) || 0) -
                ((null == c ? void 0 : c.coordinate) || 0),
              a,
            );
          }
          return a === 1 / 0 ? 0 : a;
        }
        return r ? void 0 : 0;
      };
    function n1(e) {
      var {
        tooltipEntrySettings: t,
        dataKey: r,
        payload: n,
        value: i,
        name: a,
      } = e;
      return nq(nq({}, t), {}, { dataKey: r, payload: n, value: i, name: a });
    }
    function n2(e, t) {
      return e ? String(e) : "string" == typeof t ? t : void 0;
    }
    var n5 = (e) => e.layout.width,
      n3 = (e) => e.layout.height,
      n6 = (e) => e.layout.scale,
      n4 = (e) => e.layout.margin,
      n8 = e7(
        (e) => e.cartesianAxis.xAxis,
        (e) => Object.values(e),
      ),
      n7 = e7(
        (e) => e.cartesianAxis.yAxis,
        (e) => Object.values(e),
      );
    function n9(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function ie(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? n9(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : n9(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var it = e7(
        [
          n5,
          n3,
          n4,
          (e) => e.brush.height,
          function (e) {
            return n7(e).reduce(
              (e, t) =>
                "left" !== t.orientation || t.mirror || t.hide
                  ? e
                  : e + ("number" == typeof t.width ? t.width : 60),
              0,
            );
          },
          function (e) {
            return n7(e).reduce(
              (e, t) =>
                "right" !== t.orientation || t.mirror || t.hide
                  ? e
                  : e + ("number" == typeof t.width ? t.width : 60),
              0,
            );
          },
          function (e) {
            return n8(e).reduce(
              (e, t) =>
                "top" !== t.orientation || t.mirror || t.hide
                  ? e
                  : e + t.height,
              0,
            );
          },
          function (e) {
            return n8(e).reduce(
              (e, t) =>
                "bottom" !== t.orientation || t.mirror || t.hide
                  ? e
                  : e + t.height,
              0,
            );
          },
          nI,
          (e) => e.legend.size,
        ],
        (e, t, r, n, i, a, o, l, u, c) => {
          var s = { left: (r.left || 0) + i, right: (r.right || 0) + a },
            f = ie(
              ie({}, { top: (r.top || 0) + o, bottom: (r.bottom || 0) + l }),
              s,
            ),
            d = f.bottom;
          f.bottom += n;
          var p =
              e -
              (f = ((e, t, r) => {
                if (t && r) {
                  var { width: n, height: i } = r,
                    { align: a, verticalAlign: o, layout: l } = t;
                  if (
                    ("vertical" === l ||
                      ("horizontal" === l && "middle" === o)) &&
                    "center" !== a &&
                    t8(e[a])
                  )
                    return nq(nq({}, e), {}, { [a]: e[a] + (n || 0) });
                  if (
                    ("horizontal" === l ||
                      ("vertical" === l && "center" === a)) &&
                    "middle" !== o &&
                    t8(e[o])
                  )
                    return nq(nq({}, e), {}, { [o]: e[o] + (i || 0) });
                }
                return e;
              })(f, u, c)).left -
              f.right,
            h = t - f.top - f.bottom;
          return ie(
            ie({ brushBottom: d }, f),
            {},
            { width: Math.max(p, 0), height: Math.max(h, 0) },
          );
        },
      ),
      ir = e7(it, (e) => ({
        x: e.left,
        y: e.top,
        width: e.width,
        height: e.height,
      })),
      ii = e7(n5, n3, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
      ia = (0, R.createContext)(null),
      io = () => null != (0, R.useContext)(ia),
      il = (e) => e.brush,
      iu = e7([il, it, n4], (e, t, r) => ({
        height: e.height,
        x: t8(e.x) ? e.x : t.left,
        y: t8(e.y)
          ? e.y
          : t.top +
            t.height +
            t.brushBottom -
            ((null == r ? void 0 : r.bottom) || 0),
        width: t8(e.width) ? e.width : t.width,
      }));
    function ic() {
      for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
        (e = arguments[r]) &&
          (t = (function e(t) {
            var r,
              n,
              i = "";
            if ("string" == typeof t || "number" == typeof t) i += t;
            else if ("object" == typeof t)
              if (Array.isArray(t)) {
                var a = t.length;
                for (r = 0; r < a; r++)
                  t[r] && (n = e(t[r])) && (i && (i += " "), (i += n));
              } else for (n in t) t[n] && (i && (i += " "), (i += n));
            return i;
          })(e)) &&
          (n && (n += " "), (n += t));
      return n;
    }
    var is = e.i(458723),
      id = function (e, t) {
        for (
          var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2;
          i < r;
          i++
        )
          n[i - 2] = arguments[i];
        if (
          "u" > typeof console &&
          console.warn &&
          (void 0 === t &&
            console.warn("LogUtils requires an error message argument"),
          !e)
        )
          if (void 0 === t)
            console.warn(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var a = 0;
            console.warn(t.replace(/%s/g, () => n[a++]));
          }
      },
      ip = "100%",
      ih = "100%",
      iy = { width: -1, height: -1 },
      iv = (e, t, r) => {
        var { width: n = ip, height: i = ih, aspect: a, maxHeight: o } = r,
          l = t4(n) ? e : Number(n),
          u = t4(i) ? t : Number(i);
        return (
          a &&
            a > 0 &&
            (l ? (u = l / a) : u && (l = u * a),
            o && null != u && u > o && (u = o)),
          { calculatedWidth: l, calculatedHeight: u }
        );
      },
      ig = { width: 0, height: 0, overflow: "visible" },
      im = { width: 0, overflowX: "visible" },
      ib = { height: 0, overflowY: "visible" },
      ix = {};
    function iw() {
      return (iw = Object.assign.bind()).apply(null, arguments);
    }
    function iO(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function ij(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? iO(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : iO(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var iP = (0, R.createContext)(iy);
    function i_(e) {
      var { children: t, width: r, height: n } = e,
        i = (0, R.useMemo)(() => ({ width: r, height: n }), [r, n]);
      return nK(i.width) && nK(i.height)
        ? R.createElement(iP.Provider, { value: i }, t)
        : null;
    }
    var iE = () => (0, R.useContext)(iP),
      iS = (0, R.forwardRef)((e, t) => {
        var {
            aspect: r,
            initialDimension: n = iy,
            width: i,
            height: a,
            minWidth: o = 0,
            minHeight: l,
            maxHeight: u,
            children: c,
            debounce: s = 0,
            id: f,
            className: d,
            onResize: p,
            style: h = {},
          } = e,
          y = (0, R.useRef)(null),
          v = (0, R.useRef)();
        ((v.current = p), (0, R.useImperativeHandle)(t, () => y.current));
        var [g, m] = (0, R.useState)({
            containerWidth: n.width,
            containerHeight: n.height,
          }),
          b = (0, R.useCallback)((e, t) => {
            m((r) => {
              var n = Math.round(e),
                i = Math.round(t);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []);
        (0, R.useEffect)(() => {
          if (null == y.current || "u" < typeof ResizeObserver) return rl;
          var e = (e) => {
            var t,
              r = e[0];
            if (null != r) {
              var { width: n, height: i } = r.contentRect;
              (b(n, i), null == (t = v.current) || t.call(v, n, i));
            }
          };
          s > 0 && (e = (0, is.default)(e, s, { trailing: !0, leading: !1 }));
          var t = new ResizeObserver(e),
            { width: r, height: n } = y.current.getBoundingClientRect();
          return (
            b(r, n),
            t.observe(y.current),
            () => {
              t.disconnect();
            }
          );
        }, [b, s]);
        var { containerWidth: x, containerHeight: w } = g;
        id(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
        var { calculatedWidth: O, calculatedHeight: j } = iv(x, w, {
          width: i,
          height: a,
          aspect: r,
          maxHeight: u,
        });
        return (
          id(
            (null != O && O > 0) || (null != j && j > 0),
            "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
            O,
            j,
            i,
            a,
            o,
            l,
            r,
          ),
          R.createElement(
            "div",
            {
              id: f ? "".concat(f) : void 0,
              className: ic("recharts-responsive-container", d),
              style: ij(
                ij({}, h),
                {},
                {
                  width: i,
                  height: a,
                  minWidth: o,
                  minHeight: l,
                  maxHeight: u,
                },
              ),
              ref: y,
            },
            R.createElement(
              "div",
              {
                style: ((e) => {
                  var { width: t, height: r } = e,
                    n = t4(t),
                    i = t4(r);
                  return n && i ? ig : n ? im : i ? ib : ix;
                })({ width: i, height: a }),
              },
              R.createElement(i_, { width: O, height: j }, c),
            ),
          )
        );
      }),
      ik = (0, R.forwardRef)((e, t) => {
        var r = iE();
        if (nK(r.width) && nK(r.height)) return e.children;
        var { width: n, height: i } = (function (e) {
            var { width: t, height: r, aspect: n } = e,
              i = t,
              a = r;
            return (
              void 0 === i && void 0 === a
                ? ((i = ip), (a = ih))
                : void 0 === i
                  ? (i = n && n > 0 ? void 0 : ip)
                  : void 0 === a && (a = n && n > 0 ? void 0 : ih),
              { width: i, height: a }
            );
          })({ width: e.width, height: e.height, aspect: e.aspect }),
          { calculatedWidth: a, calculatedHeight: o } = iv(void 0, void 0, {
            width: n,
            height: i,
            aspect: e.aspect,
            maxHeight: e.maxHeight,
          });
        return t8(a) && t8(o)
          ? R.createElement(i_, { width: a, height: o }, e.children)
          : R.createElement(iS, iw({}, e, { width: n, height: i, ref: t }));
      });
    function iA(e) {
      if (e)
        return {
          x: e.x,
          y: e.y,
          upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
          lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
          width: e.width,
          height: e.height,
        };
    }
    var iM = () => {
        var e,
          t = io(),
          r = nT(ir),
          n = nT(iu),
          i = null == (e = nT(il)) ? void 0 : e.padding;
        return t && n && i
          ? {
              width: n.width - i.left - i.right,
              height: n.height - i.top - i.bottom,
              x: i.left,
              y: i.top,
            }
          : r;
      },
      iC = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0,
        brushBottom: 0,
      },
      iT = () => {
        var e;
        return null != (e = nT(it)) ? e : iC;
      },
      iD = (e) => e.layout.layoutType,
      iI = () => {
        var e = nT(iD);
        if ("horizontal" === e || "vertical" === e) return e;
      },
      iN = (e) => {
        var t = e.layout.layoutType;
        if ("centric" === t || "radial" === t) return t;
      },
      iz = (e) => {
        var t = nk(),
          r = io(),
          { width: n, height: i } = e,
          a = iE(),
          o = n,
          l = i;
        return (
          a &&
            ((o = a.width > 0 ? a.width : n),
            (l = a.height > 0 ? a.height : i)),
          (0, R.useEffect)(() => {
            !r && nK(o) && nK(l) && t(nO({ width: o, height: l }));
          }, [t, r, o, l]),
          null
        );
      },
      iL = e.i(666814),
      iR = (e) => e.chartData,
      iF = e7([iR], (e) => {
        var t = null != e.chartData ? e.chartData.length - 1 : 0;
        return {
          chartData: e.chartData,
          computedData: e.computedData,
          dataEndIndex: t,
          dataStartIndex: 0,
        };
      }),
      iB = (e, t, r, n) => (n ? iF(e) : iR(e)),
      i$ = e7([iB], (e) => {
        var { chartData: t, dataStartIndex: r, dataEndIndex: n } = e;
        return null != t ? t.slice(r, n + 1) : [];
      });
    e7([iF], (e) => {
      var { chartData: t, dataStartIndex: r, dataEndIndex: n } = e;
      return null != t ? t.slice(r, n + 1) : [];
    });
    var iU = e7([iR], (e) => {
      var { chartData: t, dataStartIndex: r, dataEndIndex: n } = e;
      return null != t ? t.slice(r, n + 1) : [];
    });
    function iK(e) {
      if (Array.isArray(e) && 2 === e.length) {
        var [t, r] = e;
        if (nU(t) && nU(r)) return !0;
      }
      return !1;
    }
    function iW(e, t, r) {
      return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
    }
    function iq(e, t) {
      if (t && "function" != typeof e && Array.isArray(e) && 2 === e.length) {
        var r,
          n,
          [i, a] = e;
        if (nU(i)) r = i;
        else if ("function" == typeof i) return;
        if (nU(a)) n = a;
        else if ("function" == typeof a) return;
        var o = [r, n];
        if (iK(o)) return o;
      }
    }
    var iH = e.i(651655);
    function iV(e) {
      return 0 === e
        ? 1
        : Math.floor(new iH.default(e).abs().log(10).toNumber()) + 1;
    }
    function iY(e, t, r) {
      for (var n = new iH.default(e), i = 0, a = []; n.lt(t) && i < 1e5; )
        (a.push(n.toNumber()), (n = n.add(r)), i++);
      return a;
    }
    var iG = (e) => {
        var [t, r] = e,
          [n, i] = [t, r];
        return (t > r && ([n, i] = [r, t]), [n, i]);
      },
      iX = (e, t, r) => {
        if (e.lte(0)) return new iH.default(0);
        var n = iV(e.toNumber()),
          i = new iH.default(10).pow(n),
          a = e.div(i),
          o = 1 !== n ? 0.05 : 0.1,
          l = new iH.default(Math.ceil(a.div(o).toNumber()))
            .add(r)
            .mul(o)
            .mul(i);
        return new iH.default(t ? l.toNumber() : Math.ceil(l.toNumber()));
      },
      iZ = (e, t, r) => {
        if (e.lte(0)) return new iH.default(0);
        var n,
          i = [1, 2, 2.5, 5],
          a = e.toNumber(),
          o = Math.floor(new iH.default(a).abs().log(10).toNumber()),
          l = new iH.default(10).pow(o),
          u = e.div(l).toNumber(),
          c = i.findIndex((e) => e >= u - 1e-10);
        if ((-1 === c && ((l = l.mul(10)), (c = 0)), (c += r) >= i.length)) {
          var s = Math.floor(c / i.length);
          ((c %= i.length), (l = l.mul(new iH.default(10).pow(s))));
        }
        var f = null != (n = i[c]) ? n : 1,
          d = new iH.default(f).mul(l);
        return t ? d : new iH.default(Math.ceil(d.toNumber()));
      },
      iQ = function (e, t, r, n) {
        var i,
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : iX;
        if (!Number.isFinite((t - e) / (r - 1)))
          return {
            step: new iH.default(0),
            tickMin: new iH.default(0),
            tickMax: new iH.default(0),
          };
        var l = o(new iH.default(t).sub(e).div(r - 1), n, a),
          u = Math.ceil(
            (i =
              e <= 0 && t >= 0
                ? new iH.default(0)
                : (i = new iH.default(e).add(t).div(2)).sub(
                    new iH.default(i).mod(l),
                  ))
              .sub(e)
              .div(l)
              .toNumber(),
          ),
          c = Math.ceil(new iH.default(t).sub(i).div(l).toNumber()),
          s = u + c + 1;
        return s > r
          ? iQ(e, t, r, n, a + 1, o)
          : (s < r &&
              ((c = t > 0 ? c + (r - s) : c), (u = t > 0 ? u : u + (r - s))),
            {
              step: l,
              tickMin: i.sub(new iH.default(u).mul(l)),
              tickMax: i.add(new iH.default(c).mul(l)),
            });
      },
      iJ = function (e) {
        var [t, r] = e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "auto",
          o = Math.max(n, 2),
          [l, u] = iG([t, r]);
        if (l === -1 / 0 || u === 1 / 0) {
          var c =
            u === 1 / 0
              ? [l, ...Array(n - 1).fill(1 / 0)]
              : [...Array(n - 1).fill(-1 / 0), u];
          return t > r ? c.reverse() : c;
        }
        if (l === u)
          return ((e, t, r) => {
            var n = new iH.default(1),
              i = new iH.default(e);
            if (!i.isint() && r) {
              var a = Math.abs(e);
              a < 1
                ? ((n = new iH.default(10).pow(iV(e) - 1)),
                  (i = new iH.default(Math.floor(i.div(n).toNumber())).mul(n)))
                : a > 1 && (i = new iH.default(Math.floor(e)));
            } else
              0 === e
                ? (i = new iH.default(Math.floor((t - 1) / 2)))
                : r || (i = new iH.default(Math.floor(e)));
            for (var o = Math.floor((t - 1) / 2), l = [], u = 0; u < t; u++)
              l.push(i.add(new iH.default(u - o).mul(n)).toNumber());
            return l;
          })(l, n, i);
        var {
            step: s,
            tickMin: f,
            tickMax: d,
          } = iQ(l, u, o, i, 0, "snap125" === a ? iZ : iX),
          p = iY(f, d.add(new iH.default(0.1).mul(s)), s);
        return t > r ? p.reverse() : p;
      },
      i0 = function (e, t) {
        var [r, n] = e,
          i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "auto",
          [o, l] = iG([r, n]);
        if (o === -1 / 0 || l === 1 / 0) return [r, n];
        if (o === l) return [o];
        var u = Math.max(t, 2),
          c = ("snap125" === a ? iZ : iX)(
            new iH.default(l).sub(o).div(u - 1),
            i,
            0,
          ),
          s = [...iY(new iH.default(o), new iH.default(l), c), l];
        return (
          !1 === i && (s = s.map((e) => Math.round(e))),
          r > n ? s.reverse() : s
        );
      },
      i1 = (e) => e.rootProps.stackOffset,
      i2 = (e) => e.rootProps.reverseStackOrder,
      i5 = (e) => e.options.chartName,
      i3 = (e) => e.rootProps.syncId,
      i6 = (e) => e.rootProps.syncMethod,
      i4 = (e) => e.options.eventEmitter;
    function i8(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function i7(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? i8(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i8(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var i9 = Math.PI / 180,
      ae = (e, t, r, n) => ({
        x: e + Math.cos(-i9 * n) * r,
        y: t + Math.sin(-i9 * n) * r,
      }),
      at = {
        grid: -100,
        barBackground: -50,
        area: 100,
        cursorRectangle: 200,
        bar: 300,
        line: 400,
        axis: 500,
        scatter: 600,
        activeBar: 1e3,
        cursorLine: 1100,
        activeDot: 1200,
        label: 2e3,
      },
      ar = {
        allowDecimals: !1,
        allowDuplicatedCategory: !0,
        allowDataOverflow: !1,
        angle: 0,
        angleAxisId: 0,
        axisLine: !0,
        axisLineType: "polygon",
        cx: 0,
        cy: 0,
        hide: !1,
        includeHidden: !1,
        label: !1,
        niceTicks: "auto",
        orientation: "outer",
        reversed: !1,
        scale: "auto",
        tick: !0,
        tickLine: !0,
        tickSize: 8,
        type: "auto",
        zIndex: at.axis,
      },
      an = {
        allowDataOverflow: !1,
        allowDecimals: !1,
        allowDuplicatedCategory: !0,
        angle: 0,
        axisLine: !0,
        includeHidden: !1,
        hide: !1,
        niceTicks: "auto",
        label: !1,
        orientation: "right",
        radiusAxisId: 0,
        reversed: !1,
        scale: "auto",
        stroke: "#ccc",
        tick: !0,
        tickCount: 5,
        tickLine: !0,
        type: "auto",
        zIndex: at.axis,
      },
      ai = (e, t) => {
        if (e && t) return null != e && e.reversed ? [t[1], t[0]] : t;
      };
    function aa(e, t, r) {
      return "auto" !== r
        ? r
        : null != e
          ? nV(e, t)
            ? "category"
            : "number"
          : void 0;
    }
    function ao(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function al(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ao(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ao(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var au = {
        allowDataOverflow: ar.allowDataOverflow,
        allowDecimals: ar.allowDecimals,
        allowDuplicatedCategory: !1,
        dataKey: void 0,
        domain: void 0,
        id: ar.angleAxisId,
        includeHidden: !1,
        name: void 0,
        reversed: ar.reversed,
        scale: ar.scale,
        tick: ar.tick,
        tickCount: void 0,
        ticks: void 0,
        type: ar.type,
        unit: void 0,
        niceTicks: "auto",
      },
      ac = {
        allowDataOverflow: an.allowDataOverflow,
        allowDecimals: an.allowDecimals,
        allowDuplicatedCategory: an.allowDuplicatedCategory,
        dataKey: void 0,
        domain: void 0,
        id: an.radiusAxisId,
        includeHidden: an.includeHidden,
        name: void 0,
        reversed: an.reversed,
        scale: an.scale,
        tick: an.tick,
        tickCount: an.tickCount,
        ticks: void 0,
        type: an.type,
        unit: void 0,
        niceTicks: "auto",
      },
      as = e7(
        [
          (e, t) => {
            if (null != t) return e.polarAxis.angleAxis[t];
          },
          iN,
        ],
        (e, t) => {
          if (null != e) return e;
          var r,
            n = null != (r = aa(t, "angleAxis", au.type)) ? r : "category";
          return al(al({}, au), {}, { type: n });
        },
      ),
      af = e7([(e, t) => e.polarAxis.radiusAxis[t], iN], (e, t) => {
        if (null != e) return e;
        var r,
          n = null != (r = aa(t, "radiusAxis", ac.type)) ? r : "category";
        return al(al({}, ac), {}, { type: n });
      }),
      ad = (e) => e.polarOptions,
      ap = e7([n5, n3, it], function (e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0,
                brushBottom: 0,
              };
        return (
          Math.min(
            Math.abs(e - (r.left || 0) - (r.right || 0)),
            Math.abs(t - (r.top || 0) - (r.bottom || 0)),
          ) / 2
        );
      }),
      ah = e7([ad, ap], (e, t) => {
        if (null != e) return rt(e.innerRadius, t, 0);
      }),
      ay = e7([ad, ap], (e, t) => {
        if (null != e) return rt(e.outerRadius, t, 0.8 * t);
      }),
      av = e7([ad], (e) => {
        if (null == e) return [0, 0];
        var { startAngle: t, endAngle: r } = e;
        return [t, r];
      });
    e7([as, av], ai);
    var ag = e7([ap, ah, ay], (e, t, r) => {
      if (null != e && null != t && null != r) return [t, r];
    });
    e7([af, ag], ai);
    var am = e7([iD, ad, ah, ay, n5, n3], (e, t, r, n, i, a) => {
        if (
          ("centric" === e || "radial" === e) &&
          null != t &&
          null != r &&
          null != n
        ) {
          var { cx: o, cy: l, startAngle: u, endAngle: c } = t;
          return {
            cx: rt(o, i, i / 2),
            cy: rt(l, a, a / 2),
            innerRadius: r,
            outerRadius: n,
            startAngle: u,
            endAngle: c,
            clockWise: !1,
          };
        }
      }),
      ab = (e, t) => t,
      ax = (e, t, r) => r;
    function aw(e) {
      return null == e ? void 0 : e.id;
    }
    function aO(e, t, r) {
      var { chartData: n = [] } = t,
        { allowDuplicatedCategory: i, dataKey: a } = r,
        o = new Map();
      return (
        e.forEach((e) => {
          var t,
            r = null != (t = e.data) ? t : n;
          if (null != r && 0 !== r.length) {
            var l = aw(e);
            r.forEach((t, r) => {
              var n,
                u = null == a || i ? r : String(nH(t, a, null)),
                c = nH(t, e.dataKey, 0);
              (Object.assign((n = o.has(u) ? o.get(u) : {}), { [l]: c }),
                o.set(u, n));
            });
          }
        }),
        Array.from(o.values())
      );
    }
    function aj(e) {
      return "stackId" in e && null != e.stackId && null != e.dataKey;
    }
    var aP = (e, t) =>
      e === t || (null != e && null != t && e[0] === t[0] && e[1] === t[1]);
    function a_(e, t) {
      return (
        (!!(Array.isArray(e) && Array.isArray(t)) &&
          0 === e.length &&
          0 === t.length) ||
        e === t
      );
    }
    var aE = (e) => {
        var t = iD(e);
        return "horizontal" === t
          ? "xAxis"
          : "vertical" === t
            ? "yAxis"
            : "centric" === t
              ? "angleAxis"
              : "radiusAxis";
      },
      aS = (e) => e.tooltip.settings.axisId;
    function ak(e) {
      if (null != e) {
        var t = e.ticks,
          r = e.bandwidth,
          n = e.range(),
          i = [Math.min(...n), Math.max(...n)];
        return {
          domain: () => e.domain(),
          range: (function (e) {
            function t() {
              return e.apply(this, arguments);
            }
            return (
              (t.toString = function () {
                return e.toString();
              }),
              t
            );
          })(() => i),
          rangeMin: () => i[0],
          rangeMax: () => i[1],
          isInRange(e) {
            var t = i[0],
              r = i[1];
            return t <= r ? e >= t && e <= r : e >= r && e <= t;
          },
          bandwidth: r ? () => r.call(e) : void 0,
          ticks: t ? (r) => t.call(e, r) : void 0,
          map: (t, r) => {
            var n = e(t);
            if (null != n) {
              if (e.bandwidth && null != r && r.position) {
                var i = e.bandwidth();
                switch (r.position) {
                  case "middle":
                    n += i / 2;
                    break;
                  case "end":
                    n += i;
                }
              }
              return n;
            }
          },
        };
      }
    }
    function aA(e, t) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(e);
          break;
        default:
          this.range(t).domain(e);
      }
      return this;
    }
    function aM(e, t) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" == typeof e ? this.interpolator(e) : this.range(e);
          break;
        default:
          (this.domain(e),
            "function" == typeof t ? this.interpolator(t) : this.range(t));
      }
      return this;
    }
    (e.s([], 925212), e.i(925212), e.s([], 267155), e.i(267155));
    class aC extends Map {
      constructor(e, t = aD) {
        if (
          (super(),
          Object.defineProperties(this, {
            _intern: { value: new Map() },
            _key: { value: t },
          }),
          null != e)
        )
          for (const [t, r] of e) this.set(t, r);
      }
      get(e) {
        return super.get(aT(this, e));
      }
      has(e) {
        return super.has(aT(this, e));
      }
      set(e, t) {
        return super.set(
          (function ({ _intern: e, _key: t }, r) {
            let n = t(r);
            return e.has(n) ? e.get(n) : (e.set(n, r), r);
          })(this, e),
          t,
        );
      }
      delete(e) {
        return super.delete(
          (function ({ _intern: e, _key: t }, r) {
            let n = t(r);
            return (e.has(n) && ((r = e.get(n)), e.delete(n)), r);
          })(this, e),
        );
      }
    }
    function aT({ _intern: e, _key: t }, r) {
      let n = t(r);
      return e.has(n) ? e.get(n) : r;
    }
    function aD(e) {
      return null !== e && "object" == typeof e ? e.valueOf() : e;
    }
    let aI = Symbol("implicit");
    function aN() {
      var e = new aC(),
        t = [],
        r = [],
        n = aI;
      function i(i) {
        let a = e.get(i);
        if (void 0 === a) {
          if (n !== aI) return n;
          e.set(i, (a = t.push(i) - 1));
        }
        return r[a % r.length];
      }
      return (
        (i.domain = function (r) {
          if (!arguments.length) return t.slice();
          for (let n of ((t = []), (e = new aC()), r))
            e.has(n) || e.set(n, t.push(n) - 1);
          return i;
        }),
        (i.range = function (e) {
          return arguments.length ? ((r = Array.from(e)), i) : r.slice();
        }),
        (i.unknown = function (e) {
          return arguments.length ? ((n = e), i) : n;
        }),
        (i.copy = function () {
          return aN(t, r).unknown(n);
        }),
        aA.apply(i, arguments),
        i
      );
    }
    function az() {
      var e,
        t,
        r = aN().unknown(void 0),
        n = r.domain,
        i = r.range,
        a = 0,
        o = 1,
        l = !1,
        u = 0,
        c = 0,
        s = 0.5;
      function f() {
        var r = n().length,
          f = o < a,
          d = f ? o : a,
          p = f ? a : o;
        ((e = (p - d) / Math.max(1, r - u + 2 * c)),
          l && (e = Math.floor(e)),
          (d += (p - d - e * (r - u)) * s),
          (t = e * (1 - u)),
          l && ((d = Math.round(d)), (t = Math.round(t))));
        var h = (function (e, t, r) {
          ((e *= 1),
            (t *= 1),
            (r =
              (i = arguments.length) < 2
                ? ((t = e), (e = 0), 1)
                : i < 3
                  ? 1
                  : +r));
          for (
            var n = -1,
              i = 0 | Math.max(0, Math.ceil((t - e) / r)),
              a = Array(i);
            ++n < i;
          )
            a[n] = e + n * r;
          return a;
        })(r).map(function (t) {
          return d + e * t;
        });
        return i(f ? h.reverse() : h);
      }
      return (
        delete r.unknown,
        (r.domain = function (e) {
          return arguments.length ? (n(e), f()) : n();
        }),
        (r.range = function (e) {
          return arguments.length
            ? (([a, o] = e), (a *= 1), (o *= 1), f())
            : [a, o];
        }),
        (r.rangeRound = function (e) {
          return (([a, o] = e), (a *= 1), (o *= 1), (l = !0), f());
        }),
        (r.bandwidth = function () {
          return t;
        }),
        (r.step = function () {
          return e;
        }),
        (r.round = function (e) {
          return arguments.length ? ((l = !!e), f()) : l;
        }),
        (r.padding = function (e) {
          return arguments.length ? ((u = Math.min(1, (c = +e))), f()) : u;
        }),
        (r.paddingInner = function (e) {
          return arguments.length ? ((u = Math.min(1, e)), f()) : u;
        }),
        (r.paddingOuter = function (e) {
          return arguments.length ? ((c = +e), f()) : c;
        }),
        (r.align = function (e) {
          return arguments.length
            ? ((s = Math.max(0, Math.min(1, e))), f())
            : s;
        }),
        (r.copy = function () {
          return az(n(), [a, o])
            .round(l)
            .paddingInner(u)
            .paddingOuter(c)
            .align(s);
        }),
        aA.apply(f(), arguments)
      );
    }
    function aL() {
      return (function e(t) {
        var r = t.copy;
        return (
          (t.padding = t.paddingOuter),
          delete t.paddingInner,
          delete t.paddingOuter,
          (t.copy = function () {
            return e(r());
          }),
          t
        );
      })(az.apply(null, arguments).paddingInner(1));
    }
    let aR = Math.sqrt(50),
      aF = Math.sqrt(10),
      aB = Math.sqrt(2);
    function a$(e, t, r) {
      let n,
        i,
        a,
        o = (t - e) / Math.max(0, r),
        l = Math.floor(Math.log10(o)),
        u = o / Math.pow(10, l),
        c = u >= aR ? 10 : u >= aF ? 5 : u >= aB ? 2 : 1;
      return (l < 0
        ? ((n = Math.round(e * (a = Math.pow(10, -l) / c))),
          (i = Math.round(t * a)),
          n / a < e && ++n,
          i / a > t && --i,
          (a = -a))
        : ((n = Math.round(e / (a = Math.pow(10, l) * c))),
          (i = Math.round(t / a)),
          n * a < e && ++n,
          i * a > t && --i),
      i < n && 0.5 <= r && r < 2)
        ? a$(e, t, 2 * r)
        : [n, i, a];
    }
    function aU(e, t, r) {
      if (((t *= 1), (e *= 1), !((r *= 1) > 0))) return [];
      if (e === t) return [e];
      let n = t < e,
        [i, a, o] = n ? a$(t, e, r) : a$(e, t, r);
      if (!(a >= i)) return [];
      let l = a - i + 1,
        u = Array(l);
      if (n)
        if (o < 0) for (let e = 0; e < l; ++e) u[e] = -((a - e) / o);
        else for (let e = 0; e < l; ++e) u[e] = (a - e) * o;
      else if (o < 0) for (let e = 0; e < l; ++e) u[e] = -((i + e) / o);
      else for (let e = 0; e < l; ++e) u[e] = (i + e) * o;
      return u;
    }
    function aK(e, t, r) {
      return a$((e *= 1), (t *= 1), (r *= 1))[2];
    }
    function aW(e, t, r) {
      ((t *= 1), (e *= 1), (r *= 1));
      let n = t < e,
        i = n ? aK(t, e, r) : aK(e, t, r);
      return (n ? -1 : 1) * (i < 0 ? -(1 / i) : i);
    }
    function aq(e, t) {
      return null == e || null == t
        ? NaN
        : e < t
          ? -1
          : e > t
            ? 1
            : e >= t
              ? 0
              : NaN;
    }
    function aH(e, t) {
      return null == e || null == t
        ? NaN
        : t < e
          ? -1
          : t > e
            ? 1
            : t >= e
              ? 0
              : NaN;
    }
    function aV(e) {
      let t, r, n;
      function i(e, n, a = 0, o = e.length) {
        if (a < o) {
          if (0 !== t(n, n)) return o;
          do {
            let t = (a + o) >>> 1;
            0 > r(e[t], n) ? (a = t + 1) : (o = t);
          } while (a < o);
        }
        return a;
      }
      return (
        2 !== e.length
          ? ((t = aq), (r = (t, r) => aq(e(t), r)), (n = (t, r) => e(t) - r))
          : ((t = e === aq || e === aH ? e : aY), (r = e), (n = e)),
        {
          left: i,
          center: function (e, t, r = 0, a = e.length) {
            let o = i(e, t, r, a - 1);
            return o > r && n(e[o - 1], t) > -n(e[o], t) ? o - 1 : o;
          },
          right: function (e, n, i = 0, a = e.length) {
            if (i < a) {
              if (0 !== t(n, n)) return a;
              do {
                let t = (i + a) >>> 1;
                0 >= r(e[t], n) ? (i = t + 1) : (a = t);
              } while (i < a);
            }
            return i;
          },
        }
      );
    }
    function aY() {
      return 0;
    }
    function aG(e) {
      return null === e ? NaN : +e;
    }
    let aX = aV(aq),
      aZ = aX.right;
    function aQ(e, t, r) {
      ((e.prototype = t.prototype = r), (r.constructor = e));
    }
    function aJ(e, t) {
      var r = Object.create(e.prototype);
      for (var n in t) r[n] = t[n];
      return r;
    }
    function a0() {}
    (aX.left, aV(aG).center);
    var a1 = "\\s*([+-]?\\d+)\\s*",
      a2 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      a5 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      a3 = /^#([0-9a-f]{3,8})$/,
      a6 = RegExp(`^rgb\\(${a1},${a1},${a1}\\)$`),
      a4 = RegExp(`^rgb\\(${a5},${a5},${a5}\\)$`),
      a8 = RegExp(`^rgba\\(${a1},${a1},${a1},${a2}\\)$`),
      a7 = RegExp(`^rgba\\(${a5},${a5},${a5},${a2}\\)$`),
      a9 = RegExp(`^hsl\\(${a2},${a5},${a5}\\)$`),
      oe = RegExp(`^hsla\\(${a2},${a5},${a5},${a2}\\)$`),
      ot = {
        aliceblue: 0xf0f8ff,
        antiquewhite: 0xfaebd7,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 0xf0ffff,
        beige: 0xf5f5dc,
        bisque: 0xffe4c4,
        black: 0,
        blanchedalmond: 0xffebcd,
        blue: 255,
        blueviolet: 9055202,
        brown: 0xa52a2a,
        burlywood: 0xdeb887,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 0xd2691e,
        coral: 0xff7f50,
        cornflowerblue: 6591981,
        cornsilk: 0xfff8dc,
        crimson: 0xdc143c,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 0xb8860b,
        darkgray: 0xa9a9a9,
        darkgreen: 25600,
        darkgrey: 0xa9a9a9,
        darkkhaki: 0xbdb76b,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 0xff8c00,
        darkorchid: 0x9932cc,
        darkred: 9109504,
        darksalmon: 0xe9967a,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 0xff1493,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 0xb22222,
        floralwhite: 0xfffaf0,
        forestgreen: 2263842,
        fuchsia: 0xff00ff,
        gainsboro: 0xdcdcdc,
        ghostwhite: 0xf8f8ff,
        gold: 0xffd700,
        goldenrod: 0xdaa520,
        gray: 8421504,
        green: 32768,
        greenyellow: 0xadff2f,
        grey: 8421504,
        honeydew: 0xf0fff0,
        hotpink: 0xff69b4,
        indianred: 0xcd5c5c,
        indigo: 4915330,
        ivory: 0xfffff0,
        khaki: 0xf0e68c,
        lavender: 0xe6e6fa,
        lavenderblush: 0xfff0f5,
        lawngreen: 8190976,
        lemonchiffon: 0xfffacd,
        lightblue: 0xadd8e6,
        lightcoral: 0xf08080,
        lightcyan: 0xe0ffff,
        lightgoldenrodyellow: 0xfafad2,
        lightgray: 0xd3d3d3,
        lightgreen: 9498256,
        lightgrey: 0xd3d3d3,
        lightpink: 0xffb6c1,
        lightsalmon: 0xffa07a,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 0xb0c4de,
        lightyellow: 0xffffe0,
        lime: 65280,
        limegreen: 3329330,
        linen: 0xfaf0e6,
        magenta: 0xff00ff,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 0xba55d3,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 0xc71585,
        midnightblue: 1644912,
        mintcream: 0xf5fffa,
        mistyrose: 0xffe4e1,
        moccasin: 0xffe4b5,
        navajowhite: 0xffdead,
        navy: 128,
        oldlace: 0xfdf5e6,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 0xffa500,
        orangered: 0xff4500,
        orchid: 0xda70d6,
        palegoldenrod: 0xeee8aa,
        palegreen: 0x98fb98,
        paleturquoise: 0xafeeee,
        palevioletred: 0xdb7093,
        papayawhip: 0xffefd5,
        peachpuff: 0xffdab9,
        peru: 0xcd853f,
        pink: 0xffc0cb,
        plum: 0xdda0dd,
        powderblue: 0xb0e0e6,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 0xff0000,
        rosybrown: 0xbc8f8f,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 0xfa8072,
        sandybrown: 0xf4a460,
        seagreen: 3050327,
        seashell: 0xfff5ee,
        sienna: 0xa0522d,
        silver: 0xc0c0c0,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 0xfffafa,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 0xd2b48c,
        teal: 32896,
        thistle: 0xd8bfd8,
        tomato: 0xff6347,
        turquoise: 4251856,
        violet: 0xee82ee,
        wheat: 0xf5deb3,
        white: 0xffffff,
        whitesmoke: 0xf5f5f5,
        yellow: 0xffff00,
        yellowgreen: 0x9acd32,
      };
    function or() {
      return this.rgb().formatHex();
    }
    function on() {
      return this.rgb().formatRgb();
    }
    function oi(e) {
      var t, r;
      return (
        (e = (e + "").trim().toLowerCase()),
        (t = a3.exec(e))
          ? ((r = t[1].length),
            (t = parseInt(t[1], 16)),
            6 === r
              ? oa(t)
              : 3 === r
                ? new ou(
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (240 & t),
                    ((15 & t) << 4) | (15 & t),
                    1,
                  )
                : 8 === r
                  ? oo(
                      (t >> 24) & 255,
                      (t >> 16) & 255,
                      (t >> 8) & 255,
                      (255 & t) / 255,
                    )
                  : 4 === r
                    ? oo(
                        ((t >> 12) & 15) | ((t >> 8) & 240),
                        ((t >> 8) & 15) | ((t >> 4) & 240),
                        ((t >> 4) & 15) | (240 & t),
                        (((15 & t) << 4) | (15 & t)) / 255,
                      )
                    : null)
          : (t = a6.exec(e))
            ? new ou(t[1], t[2], t[3], 1)
            : (t = a4.exec(e))
              ? new ou(
                  (255 * t[1]) / 100,
                  (255 * t[2]) / 100,
                  (255 * t[3]) / 100,
                  1,
                )
              : (t = a8.exec(e))
                ? oo(t[1], t[2], t[3], t[4])
                : (t = a7.exec(e))
                  ? oo(
                      (255 * t[1]) / 100,
                      (255 * t[2]) / 100,
                      (255 * t[3]) / 100,
                      t[4],
                    )
                  : (t = a9.exec(e))
                    ? oh(t[1], t[2] / 100, t[3] / 100, 1)
                    : (t = oe.exec(e))
                      ? oh(t[1], t[2] / 100, t[3] / 100, t[4])
                      : ot.hasOwnProperty(e)
                        ? oa(ot[e])
                        : "transparent" === e
                          ? new ou(NaN, NaN, NaN, 0)
                          : null
      );
    }
    function oa(e) {
      return new ou((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
    }
    function oo(e, t, r, n) {
      return (n <= 0 && (e = t = r = NaN), new ou(e, t, r, n));
    }
    function ol(e, t, r, n) {
      var i;
      return 1 == arguments.length
        ? ((i = e) instanceof a0 || (i = oi(i)), i)
          ? new ou((i = i.rgb()).r, i.g, i.b, i.opacity)
          : new ou()
        : new ou(e, t, r, null == n ? 1 : n);
    }
    function ou(e, t, r, n) {
      ((this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n));
    }
    function oc() {
      return `#${op(this.r)}${op(this.g)}${op(this.b)}`;
    }
    function os() {
      let e = of(this.opacity);
      return `${1 === e ? "rgb(" : "rgba("}${od(this.r)}, ${od(this.g)}, ${od(this.b)}${1 === e ? ")" : `, ${e})`}`;
    }
    function of(e) {
      return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
    }
    function od(e) {
      return Math.max(0, Math.min(255, Math.round(e) || 0));
    }
    function op(e) {
      return ((e = od(e)) < 16 ? "0" : "") + e.toString(16);
    }
    function oh(e, t, r, n) {
      return (
        n <= 0
          ? (e = t = r = NaN)
          : r <= 0 || r >= 1
            ? (e = t = NaN)
            : t <= 0 && (e = NaN),
        new ov(e, t, r, n)
      );
    }
    function oy(e) {
      if (e instanceof ov) return new ov(e.h, e.s, e.l, e.opacity);
      if ((e instanceof a0 || (e = oi(e)), !e)) return new ov();
      if (e instanceof ov) return e;
      var t = (e = e.rgb()).r / 255,
        r = e.g / 255,
        n = e.b / 255,
        i = Math.min(t, r, n),
        a = Math.max(t, r, n),
        o = NaN,
        l = a - i,
        u = (a + i) / 2;
      return (
        l
          ? ((o =
              t === a
                ? (r - n) / l + (r < n) * 6
                : r === a
                  ? (n - t) / l + 2
                  : (t - r) / l + 4),
            (l /= u < 0.5 ? a + i : 2 - a - i),
            (o *= 60))
          : (l = u > 0 && u < 1 ? 0 : o),
        new ov(o, l, u, e.opacity)
      );
    }
    function ov(e, t, r, n) {
      ((this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n));
    }
    function og(e) {
      return (e = (e || 0) % 360) < 0 ? e + 360 : e;
    }
    function om(e) {
      return Math.max(0, Math.min(1, e || 0));
    }
    function ob(e, t, r) {
      return (
        (e < 60
          ? t + ((r - t) * e) / 60
          : e < 180
            ? r
            : e < 240
              ? t + ((r - t) * (240 - e)) / 60
              : t) * 255
      );
    }
    function ox(e, t, r, n, i) {
      var a = e * e,
        o = a * e;
      return (
        ((1 - 3 * e + 3 * a - o) * t +
          (4 - 6 * a + 3 * o) * r +
          (1 + 3 * e + 3 * a - 3 * o) * n +
          o * i) /
        6
      );
    }
    (aQ(a0, oi, {
      copy(e) {
        return Object.assign(new this.constructor(), this, e);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: or,
      formatHex: or,
      formatHex8: function () {
        return this.rgb().formatHex8();
      },
      formatHsl: function () {
        return oy(this).formatHsl();
      },
      formatRgb: on,
      toString: on,
    }),
      aQ(
        ou,
        ol,
        aJ(a0, {
          brighter(e) {
            return (
              (e =
                null == e
                  ? 1.4285714285714286
                  : Math.pow(1.4285714285714286, e)),
              new ou(this.r * e, this.g * e, this.b * e, this.opacity)
            );
          },
          darker(e) {
            return (
              (e = null == e ? 0.7 : Math.pow(0.7, e)),
              new ou(this.r * e, this.g * e, this.b * e, this.opacity)
            );
          },
          rgb() {
            return this;
          },
          clamp() {
            return new ou(od(this.r), od(this.g), od(this.b), of(this.opacity));
          },
          displayable() {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: oc,
          formatHex: oc,
          formatHex8: function () {
            return `#${op(this.r)}${op(this.g)}${op(this.b)}${op((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
          },
          formatRgb: os,
          toString: os,
        }),
      ),
      aQ(
        ov,
        function (e, t, r, n) {
          return 1 == arguments.length
            ? oy(e)
            : new ov(e, t, r, null == n ? 1 : n);
        },
        aJ(a0, {
          brighter(e) {
            return (
              (e =
                null == e
                  ? 1.4285714285714286
                  : Math.pow(1.4285714285714286, e)),
              new ov(this.h, this.s, this.l * e, this.opacity)
            );
          },
          darker(e) {
            return (
              (e = null == e ? 0.7 : Math.pow(0.7, e)),
              new ov(this.h, this.s, this.l * e, this.opacity)
            );
          },
          rgb() {
            var e = (this.h % 360) + (this.h < 0) * 360,
              t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
              r = this.l,
              n = r + (r < 0.5 ? r : 1 - r) * t,
              i = 2 * r - n;
            return new ou(
              ob(e >= 240 ? e - 240 : e + 120, i, n),
              ob(e, i, n),
              ob(e < 120 ? e + 240 : e - 120, i, n),
              this.opacity,
            );
          },
          clamp() {
            return new ov(og(this.h), om(this.s), om(this.l), of(this.opacity));
          },
          displayable() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          formatHsl() {
            let e = of(this.opacity);
            return `${1 === e ? "hsl(" : "hsla("}${og(this.h)}, ${100 * om(this.s)}%, ${100 * om(this.l)}%${1 === e ? ")" : `, ${e})`}`;
          },
        }),
      ));
    let ow = (e) => () => e;
    function oO(e, t) {
      var r = t - e;
      return r
        ? function (t) {
            return e + t * r;
          }
        : ow(isNaN(e) ? t : e);
    }
    let oj = (function e(t) {
      var r,
        n =
          1 == (r = +t)
            ? oO
            : function (e, t) {
                var n, i, a;
                return t - e
                  ? ((n = e),
                    (i = t),
                    (n = Math.pow(n, (a = r))),
                    (i = Math.pow(i, a) - n),
                    (a = 1 / a),
                    function (e) {
                      return Math.pow(n + e * i, a);
                    })
                  : ow(isNaN(e) ? t : e);
              };
      function i(e, t) {
        var r = n((e = ol(e)).r, (t = ol(t)).r),
          i = n(e.g, t.g),
          a = n(e.b, t.b),
          o = oO(e.opacity, t.opacity);
        return function (t) {
          return (
            (e.r = r(t)),
            (e.g = i(t)),
            (e.b = a(t)),
            (e.opacity = o(t)),
            e + ""
          );
        };
      }
      return ((i.gamma = e), i);
    })(1);
    function oP(e) {
      return function (t) {
        var r,
          n,
          i = t.length,
          a = Array(i),
          o = Array(i),
          l = Array(i);
        for (r = 0; r < i; ++r)
          ((n = ol(t[r])),
            (a[r] = n.r || 0),
            (o[r] = n.g || 0),
            (l[r] = n.b || 0));
        return (
          (a = e(a)),
          (o = e(o)),
          (l = e(l)),
          (n.opacity = 1),
          function (e) {
            return ((n.r = a(e)), (n.g = o(e)), (n.b = l(e)), n + "");
          }
        );
      };
    }
    function o_(e, t) {
      return (
        (e *= 1),
        (t *= 1),
        function (r) {
          return e * (1 - r) + t * r;
        }
      );
    }
    (oP(function (e) {
      var t = e.length - 1;
      return function (r) {
        var n =
            r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), t - 1) : Math.floor(r * t),
          i = e[n],
          a = e[n + 1],
          o = n > 0 ? e[n - 1] : 2 * i - a,
          l = n < t - 1 ? e[n + 2] : 2 * a - i;
        return ox((r - n / t) * t, o, i, a, l);
      };
    }),
      oP(function (e) {
        var t = e.length;
        return function (r) {
          var n = Math.floor(((r %= 1) < 0 ? ++r : r) * t),
            i = e[(n + t - 1) % t],
            a = e[n % t],
            o = e[(n + 1) % t],
            l = e[(n + 2) % t];
          return ox((r - n / t) * t, i, a, o, l);
        };
      }));
    var oE = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      oS = RegExp(oE.source, "g");
    function ok(e, t) {
      var r,
        n,
        i = typeof t;
      return null == t || "boolean" === i
        ? ow(t)
        : ("number" === i
            ? o_
            : "string" === i
              ? (n = oi(t))
                ? ((t = n), oj)
                : function (e, t) {
                    var r,
                      n,
                      i,
                      a,
                      o,
                      l = (oE.lastIndex = oS.lastIndex = 0),
                      u = -1,
                      c = [],
                      s = [];
                    for (
                      e += "", t += "";
                      (i = oE.exec(e)) && (a = oS.exec(t));
                    )
                      ((o = a.index) > l &&
                        ((o = t.slice(l, o)),
                        c[u] ? (c[u] += o) : (c[++u] = o)),
                        (i = i[0]) === (a = a[0])
                          ? c[u]
                            ? (c[u] += a)
                            : (c[++u] = a)
                          : ((c[++u] = null), s.push({ i: u, x: o_(i, a) })),
                        (l = oS.lastIndex));
                    return (
                      l < t.length &&
                        ((o = t.slice(l)), c[u] ? (c[u] += o) : (c[++u] = o)),
                      c.length < 2
                        ? s[0]
                          ? ((r = s[0].x),
                            function (e) {
                              return r(e) + "";
                            })
                          : ((n = t),
                            function () {
                              return n;
                            })
                        : ((t = s.length),
                          function (e) {
                            for (var r, n = 0; n < t; ++n)
                              c[(r = s[n]).i] = r.x(e);
                            return c.join("");
                          })
                    );
                  }
              : t instanceof oi
                ? oj
                : t instanceof Date
                  ? function (e, t) {
                      var r = new Date();
                      return (
                        (e *= 1),
                        (t *= 1),
                        function (n) {
                          return (r.setTime(e * (1 - n) + t * n), r);
                        }
                      );
                    }
                  : !ArrayBuffer.isView((r = t)) || r instanceof DataView
                    ? Array.isArray(t)
                      ? function (e, t) {
                          var r,
                            n = t ? t.length : 0,
                            i = e ? Math.min(n, e.length) : 0,
                            a = Array(i),
                            o = Array(n);
                          for (r = 0; r < i; ++r) a[r] = ok(e[r], t[r]);
                          for (; r < n; ++r) o[r] = t[r];
                          return function (e) {
                            for (r = 0; r < i; ++r) o[r] = a[r](e);
                            return o;
                          };
                        }
                      : ("function" != typeof t.valueOf &&
                            "function" != typeof t.toString) ||
                          isNaN(t)
                        ? function (e, t) {
                            var r,
                              n = {},
                              i = {};
                            for (r in ((null === e || "object" != typeof e) &&
                              (e = {}),
                            (null === t || "object" != typeof t) && (t = {}),
                            t))
                              r in e ? (n[r] = ok(e[r], t[r])) : (i[r] = t[r]);
                            return function (e) {
                              for (r in n) i[r] = n[r](e);
                              return i;
                            };
                          }
                        : o_
                    : function (e, t) {
                        t || (t = []);
                        var r,
                          n = e ? Math.min(t.length, e.length) : 0,
                          i = t.slice();
                        return function (a) {
                          for (r = 0; r < n; ++r)
                            i[r] = e[r] * (1 - a) + t[r] * a;
                          return i;
                        };
                      })(e, t);
    }
    function oA(e, t) {
      return (
        (e *= 1),
        (t *= 1),
        function (r) {
          return Math.round(e * (1 - r) + t * r);
        }
      );
    }
    function oM(e) {
      return +e;
    }
    var oC = [0, 1];
    function oT(e) {
      return e;
    }
    function oD(e, t) {
      var r;
      return (t -= e *= 1)
        ? function (r) {
            return (r - e) / t;
          }
        : ((r = isNaN(t) ? NaN : 0.5),
          function () {
            return r;
          });
    }
    function oI(e, t, r) {
      var n = e[0],
        i = e[1],
        a = t[0],
        o = t[1];
      return (
        i < n
          ? ((n = oD(i, n)), (a = r(o, a)))
          : ((n = oD(n, i)), (a = r(a, o))),
        function (e) {
          return a(n(e));
        }
      );
    }
    function oN(e, t, r) {
      var n = Math.min(e.length, t.length) - 1,
        i = Array(n),
        a = Array(n),
        o = -1;
      for (
        e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
        ++o < n;
      )
        ((i[o] = oD(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1])));
      return function (t) {
        var r = aZ(e, t, 1, n) - 1;
        return a[r](i[r](t));
      };
    }
    function oz(e, t) {
      return t
        .domain(e.domain())
        .range(e.range())
        .interpolate(e.interpolate())
        .clamp(e.clamp())
        .unknown(e.unknown());
    }
    function oL() {
      var e,
        t,
        r,
        n,
        i,
        a,
        o = oC,
        l = oC,
        u = ok,
        c = oT;
      function s() {
        var e,
          t,
          r,
          u = Math.min(o.length, l.length);
        return (
          c !== oT &&
            ((e = o[0]),
            (t = o[u - 1]),
            e > t && ((r = e), (e = t), (t = r)),
            (c = function (r) {
              return Math.max(e, Math.min(t, r));
            })),
          (n = u > 2 ? oN : oI),
          (i = a = null),
          f
        );
      }
      function f(t) {
        return null == t || isNaN((t *= 1))
          ? r
          : (i || (i = n(o.map(e), l, u)))(e(c(t)));
      }
      return (
        (f.invert = function (r) {
          return c(t((a || (a = n(l, o.map(e), o_)))(r)));
        }),
        (f.domain = function (e) {
          return arguments.length ? ((o = Array.from(e, oM)), s()) : o.slice();
        }),
        (f.range = function (e) {
          return arguments.length ? ((l = Array.from(e)), s()) : l.slice();
        }),
        (f.rangeRound = function (e) {
          return ((l = Array.from(e)), (u = oA), s());
        }),
        (f.clamp = function (e) {
          return arguments.length ? ((c = !!e || oT), s()) : c !== oT;
        }),
        (f.interpolate = function (e) {
          return arguments.length ? ((u = e), s()) : u;
        }),
        (f.unknown = function (e) {
          return arguments.length ? ((r = e), f) : r;
        }),
        function (r, n) {
          return ((e = r), (t = n), s());
        }
      );
    }
    function oR() {
      return oL()(oT, oT);
    }
    function oF(e, t) {
      if (!isFinite(e) || 0 === e) return null;
      var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"),
        n = e.slice(0, r);
      return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
    }
    function oB(e) {
      return (e = oF(Math.abs(e))) ? e[1] : NaN;
    }
    var o$ =
      /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function oU(e) {
      var t;
      if (!(t = o$.exec(e))) throw Error("invalid format: " + e);
      return new oK({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10],
      });
    }
    function oK(e) {
      ((this.fill = void 0 === e.fill ? " " : e.fill + ""),
        (this.align = void 0 === e.align ? ">" : e.align + ""),
        (this.sign = void 0 === e.sign ? "-" : e.sign + ""),
        (this.symbol = void 0 === e.symbol ? "" : e.symbol + ""),
        (this.zero = !!e.zero),
        (this.width = void 0 === e.width ? void 0 : +e.width),
        (this.comma = !!e.comma),
        (this.precision = void 0 === e.precision ? void 0 : +e.precision),
        (this.trim = !!e.trim),
        (this.type = void 0 === e.type ? "" : e.type + ""));
    }
    function oW(e, t) {
      var r = oF(e, t);
      if (!r) return e + "";
      var n = r[0],
        i = r[1];
      return i < 0
        ? "0." + Array(-i).join("0") + n
        : n.length > i + 1
          ? n.slice(0, i + 1) + "." + n.slice(i + 1)
          : n + Array(i - n.length + 2).join("0");
    }
    ((oU.prototype = oK.prototype),
      (oK.prototype.toString = function () {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? "0" : "") +
          (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
          (this.comma ? "," : "") +
          (void 0 === this.precision
            ? ""
            : "." + Math.max(0, 0 | this.precision)) +
          (this.trim ? "~" : "") +
          this.type
        );
      }));
    let oq = {
      "%": (e, t) => (100 * e).toFixed(t),
      b: (e) => Math.round(e).toString(2),
      c: (e) => e + "",
      d: function (e) {
        return Math.abs((e = Math.round(e))) >= 1e21
          ? e.toLocaleString("en").replace(/,/g, "")
          : e.toString(10);
      },
      e: (e, t) => e.toExponential(t),
      f: (e, t) => e.toFixed(t),
      g: (e, t) => e.toPrecision(t),
      o: (e) => Math.round(e).toString(8),
      p: (e, t) => oW(100 * e, t),
      r: oW,
      s: function (e, t) {
        var r = oF(e, t);
        if (!r) return ((l = void 0), e.toPrecision(t));
        var n = r[0],
          i = r[1],
          a = i - (l = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          o = n.length;
        return a === o
          ? n
          : a > o
            ? n + Array(a - o + 1).join("0")
            : a > 0
              ? n.slice(0, a) + "." + n.slice(a)
              : "0." +
                Array(1 - a).join("0") +
                oF(e, Math.max(0, t + a - 1))[0];
      },
      X: (e) => Math.round(e).toString(16).toUpperCase(),
      x: (e) => Math.round(e).toString(16),
    };
    function oH(e) {
      return e;
    }
    var oV = Array.prototype.map,
      oY = [
        "y",
        "z",
        "a",
        "f",
        "p",
        "n",
        "µ",
        "m",
        "",
        "k",
        "M",
        "G",
        "T",
        "P",
        "E",
        "Z",
        "Y",
      ];
    function oG(e, t, r, n) {
      var i,
        a,
        o = aW(e, t, r);
      switch ((n = oU(null == n ? ",f" : n)).type) {
        case "s":
          var l = Math.max(Math.abs(e), Math.abs(t));
          return (
            null != n.precision ||
              isNaN(
                (a = Math.max(
                  0,
                  3 * Math.max(-8, Math.min(8, Math.floor(oB(l) / 3))) -
                    oB(Math.abs(o)),
                )),
              ) ||
              (n.precision = a),
            s(n, l)
          );
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != n.precision ||
            isNaN(
              (a =
                Math.max(
                  0,
                  oB(
                    Math.abs(Math.max(Math.abs(e), Math.abs(t))) -
                      (i = Math.abs((i = o))),
                  ) - oB(i),
                ) + 1),
            ) ||
            (n.precision = a - ("e" === n.type));
          break;
        case "f":
        case "%":
          null != n.precision ||
            isNaN((a = Math.max(0, -oB(Math.abs(o))))) ||
            (n.precision = a - ("%" === n.type) * 2);
      }
      return c(n);
    }
    function oX(e) {
      var t = e.domain;
      return (
        (e.ticks = function (e) {
          var r = t();
          return aU(r[0], r[r.length - 1], null == e ? 10 : e);
        }),
        (e.tickFormat = function (e, r) {
          var n = t();
          return oG(n[0], n[n.length - 1], null == e ? 10 : e, r);
        }),
        (e.nice = function (r) {
          null == r && (r = 10);
          var n,
            i,
            a = t(),
            o = 0,
            l = a.length - 1,
            u = a[o],
            c = a[l],
            s = 10;
          for (
            c < u && ((i = u), (u = c), (c = i), (i = o), (o = l), (l = i));
            s-- > 0;
          ) {
            if ((i = aK(u, c, r)) === n) return ((a[o] = u), (a[l] = c), t(a));
            if (i > 0)
              ((u = Math.floor(u / i) * i), (c = Math.ceil(c / i) * i));
            else if (i < 0)
              ((u = Math.ceil(u * i) / i), (c = Math.floor(c * i) / i));
            else break;
            n = i;
          }
          return e;
        }),
        e
      );
    }
    function oZ() {
      var e = oR();
      return (
        (e.copy = function () {
          return oz(e, oZ());
        }),
        aA.apply(e, arguments),
        oX(e)
      );
    }
    function oQ(e) {
      var t;
      function r(e) {
        return null == e || isNaN((e *= 1)) ? t : e;
      }
      return (
        (r.invert = r),
        (r.domain = r.range =
          function (t) {
            return arguments.length ? ((e = Array.from(t, oM)), r) : e.slice();
          }),
        (r.unknown = function (e) {
          return arguments.length ? ((t = e), r) : t;
        }),
        (r.copy = function () {
          return oQ(e).unknown(t);
        }),
        (e = arguments.length ? Array.from(e, oM) : [0, 1]),
        oX(r)
      );
    }
    function oJ(e, t) {
      e = e.slice();
      var r,
        n = 0,
        i = e.length - 1,
        a = e[n],
        o = e[i];
      return (
        o < a && ((r = n), (n = i), (i = r), (r = a), (a = o), (o = r)),
        (e[n] = t.floor(a)),
        (e[i] = t.ceil(o)),
        e
      );
    }
    function o0(e) {
      return Math.log(e);
    }
    function o1(e) {
      return Math.exp(e);
    }
    function o2(e) {
      return -Math.log(-e);
    }
    function o5(e) {
      return -Math.exp(-e);
    }
    function o3(e) {
      return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
    }
    function o6(e) {
      return (t, r) => -e(-t, r);
    }
    function o4(e) {
      let t,
        r,
        n = e(o0, o1),
        i = n.domain,
        a = 10;
      function o() {
        var o, l;
        return (
          (t =
            (o = a) === Math.E
              ? Math.log
              : (10 === o && Math.log10) ||
                (2 === o && Math.log2) ||
                ((o = Math.log(o)), (e) => Math.log(e) / o)),
          (r =
            10 === (l = a)
              ? o3
              : l === Math.E
                ? Math.exp
                : (e) => Math.pow(l, e)),
          i()[0] < 0 ? ((t = o6(t)), (r = o6(r)), e(o2, o5)) : e(o0, o1),
          n
        );
      }
      return (
        (n.base = function (e) {
          return arguments.length ? ((a = +e), o()) : a;
        }),
        (n.domain = function (e) {
          return arguments.length ? (i(e), o()) : i();
        }),
        (n.ticks = (e) => {
          let n,
            o,
            l = i(),
            u = l[0],
            c = l[l.length - 1],
            s = c < u;
          s && ([u, c] = [c, u]);
          let f = t(u),
            d = t(c),
            p = null == e ? 10 : +e,
            h = [];
          if (!(a % 1) && d - f < p) {
            if (((f = Math.floor(f)), (d = Math.ceil(d)), u > 0)) {
              for (; f <= d; ++f)
                for (n = 1; n < a; ++n)
                  if (!((o = f < 0 ? n / r(-f) : n * r(f)) < u)) {
                    if (o > c) break;
                    h.push(o);
                  }
            } else
              for (; f <= d; ++f)
                for (n = a - 1; n >= 1; --n)
                  if (!((o = f > 0 ? n / r(-f) : n * r(f)) < u)) {
                    if (o > c) break;
                    h.push(o);
                  }
            2 * h.length < p && (h = aU(u, c, p));
          } else h = aU(f, d, Math.min(d - f, p)).map(r);
          return s ? h.reverse() : h;
        }),
        (n.tickFormat = (e, i) => {
          if (
            (null == e && (e = 10),
            null == i && (i = 10 === a ? "s" : ","),
            "function" != typeof i &&
              (a % 1 || null != (i = oU(i)).precision || (i.trim = !0),
              (i = c(i))),
            e === 1 / 0)
          )
            return i;
          let o = Math.max(1, (a * e) / n.ticks().length);
          return (e) => {
            let n = e / r(Math.round(t(e)));
            return (n * a < a - 0.5 && (n *= a), n <= o ? i(e) : "");
          };
        }),
        (n.nice = () =>
          i(
            oJ(i(), {
              floor: (e) => r(Math.floor(t(e))),
              ceil: (e) => r(Math.ceil(t(e))),
            }),
          )),
        n
      );
    }
    function o8() {
      let e = o4(oL()).domain([1, 10]);
      return (
        (e.copy = () => oz(e, o8()).base(e.base())),
        aA.apply(e, arguments),
        e
      );
    }
    function o7(e) {
      return function (t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / e));
      };
    }
    function o9(e) {
      return function (t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
      };
    }
    function le(e) {
      var t = 1,
        r = e(o7(1), o9(t));
      return (
        (r.constant = function (r) {
          return arguments.length ? e(o7((t = +r)), o9(t)) : t;
        }),
        oX(r)
      );
    }
    function lt() {
      var e = le(oL());
      return (
        (e.copy = function () {
          return oz(e, lt()).constant(e.constant());
        }),
        aA.apply(e, arguments)
      );
    }
    function lr(e) {
      return function (t) {
        return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
      };
    }
    function ln(e) {
      return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
    }
    function li(e) {
      return e < 0 ? -e * e : e * e;
    }
    function la(e) {
      var t = e(oT, oT),
        r = 1;
      return (
        (t.exponent = function (t) {
          return arguments.length
            ? 1 == (r = +t)
              ? e(oT, oT)
              : 0.5 === r
                ? e(ln, li)
                : e(lr(r), lr(1 / r))
            : r;
        }),
        oX(t)
      );
    }
    function lo() {
      var e = la(oL());
      return (
        (e.copy = function () {
          return oz(e, lo()).exponent(e.exponent());
        }),
        aA.apply(e, arguments),
        e
      );
    }
    function ll() {
      return lo.apply(null, arguments).exponent(0.5);
    }
    function lu(e) {
      return Math.sign(e) * e * e;
    }
    function lc() {
      var e,
        t = oR(),
        r = [0, 1],
        n = !1;
      function i(r) {
        var i,
          a = Math.sign((i = t(r))) * Math.sqrt(Math.abs(i));
        return isNaN(a) ? e : n ? Math.round(a) : a;
      }
      return (
        (i.invert = function (e) {
          return t.invert(lu(e));
        }),
        (i.domain = function (e) {
          return arguments.length ? (t.domain(e), i) : t.domain();
        }),
        (i.range = function (e) {
          return arguments.length
            ? (t.range((r = Array.from(e, oM)).map(lu)), i)
            : r.slice();
        }),
        (i.rangeRound = function (e) {
          return i.range(e).round(!0);
        }),
        (i.round = function (e) {
          return arguments.length ? ((n = !!e), i) : n;
        }),
        (i.clamp = function (e) {
          return arguments.length ? (t.clamp(e), i) : t.clamp();
        }),
        (i.unknown = function (t) {
          return arguments.length ? ((e = t), i) : e;
        }),
        (i.copy = function () {
          return lc(t.domain(), r).round(n).clamp(t.clamp()).unknown(e);
        }),
        aA.apply(i, arguments),
        oX(i)
      );
    }
    function ls(e, t) {
      let r;
      if (void 0 === t)
        for (let t of e)
          null != t && (r < t || (void 0 === r && t >= t)) && (r = t);
      else {
        let n = -1;
        for (let i of e)
          null != (i = t(i, ++n, e)) &&
            (r < i || (void 0 === r && i >= i)) &&
            (r = i);
      }
      return r;
    }
    function lf(e, t) {
      let r;
      if (void 0 === t)
        for (let t of e)
          null != t && (r > t || (void 0 === r && t >= t)) && (r = t);
      else {
        let n = -1;
        for (let i of e)
          null != (i = t(i, ++n, e)) &&
            (r > i || (void 0 === r && i >= i)) &&
            (r = i);
      }
      return r;
    }
    function ld(e, t) {
      return (
        (null == e || !(e >= e)) - (null == t || !(t >= t)) ||
        (e < t ? -1 : +(e > t))
      );
    }
    function lp(e, t, r) {
      let n = e[t];
      ((e[t] = e[r]), (e[r] = n));
    }
    function lh() {
      var e,
        t = [],
        r = [],
        n = [];
      function i() {
        var e = 0,
          i = Math.max(1, r.length);
        for (n = Array(i - 1); ++e < i; )
          n[e - 1] = (function (e, t, r = aG) {
            if (!(!(n = e.length) || isNaN((t *= 1)))) {
              if (t <= 0 || n < 2) return +r(e[0], 0, e);
              if (t >= 1) return +r(e[n - 1], n - 1, e);
              var n,
                i = (n - 1) * t,
                a = Math.floor(i),
                o = +r(e[a], a, e);
              return o + (r(e[a + 1], a + 1, e) - o) * (i - a);
            }
          })(t, e / i);
        return a;
      }
      function a(t) {
        return null == t || isNaN((t *= 1)) ? e : r[aZ(n, t)];
      }
      return (
        (a.invertExtent = function (e) {
          var i = r.indexOf(e);
          return i < 0
            ? [NaN, NaN]
            : [i > 0 ? n[i - 1] : t[0], i < n.length ? n[i] : t[t.length - 1]];
        }),
        (a.domain = function (e) {
          if (!arguments.length) return t.slice();
          for (let r of ((t = []), e))
            null == r || isNaN((r *= 1)) || t.push(r);
          return (t.sort(aq), i());
        }),
        (a.range = function (e) {
          return arguments.length ? ((r = Array.from(e)), i()) : r.slice();
        }),
        (a.unknown = function (t) {
          return arguments.length ? ((e = t), a) : e;
        }),
        (a.quantiles = function () {
          return n.slice();
        }),
        (a.copy = function () {
          return lh().domain(t).range(r).unknown(e);
        }),
        aA.apply(a, arguments)
      );
    }
    function ly() {
      var e,
        t = 0,
        r = 1,
        n = 1,
        i = [0.5],
        a = [0, 1];
      function o(t) {
        return null != t && t <= t ? a[aZ(i, t, 0, n)] : e;
      }
      function l() {
        var e = -1;
        for (i = Array(n); ++e < n; )
          i[e] = ((e + 1) * r - (e - n) * t) / (n + 1);
        return o;
      }
      return (
        (o.domain = function (e) {
          return arguments.length
            ? (([t, r] = e), (t *= 1), (r *= 1), l())
            : [t, r];
        }),
        (o.range = function (e) {
          return arguments.length
            ? ((n = (a = Array.from(e)).length - 1), l())
            : a.slice();
        }),
        (o.invertExtent = function (e) {
          var o = a.indexOf(e);
          return o < 0
            ? [NaN, NaN]
            : o < 1
              ? [t, i[0]]
              : o >= n
                ? [i[n - 1], r]
                : [i[o - 1], i[o]];
        }),
        (o.unknown = function (t) {
          return (arguments.length && (e = t), o);
        }),
        (o.thresholds = function () {
          return i.slice();
        }),
        (o.copy = function () {
          return ly().domain([t, r]).range(a).unknown(e);
        }),
        aA.apply(oX(o), arguments)
      );
    }
    function lv() {
      var e,
        t = [0.5],
        r = [0, 1],
        n = 1;
      function i(i) {
        return null != i && i <= i ? r[aZ(t, i, 0, n)] : e;
      }
      return (
        (i.domain = function (e) {
          return arguments.length
            ? ((n = Math.min((t = Array.from(e)).length, r.length - 1)), i)
            : t.slice();
        }),
        (i.range = function (e) {
          return arguments.length
            ? ((r = Array.from(e)), (n = Math.min(t.length, r.length - 1)), i)
            : r.slice();
        }),
        (i.invertExtent = function (e) {
          var n = r.indexOf(e);
          return [t[n - 1], t[n]];
        }),
        (i.unknown = function (t) {
          return arguments.length ? ((e = t), i) : e;
        }),
        (i.copy = function () {
          return lv().domain(t).range(r).unknown(e);
        }),
        aA.apply(i, arguments)
      );
    }
    ((c = (u = (function (e) {
      var t,
        r,
        n,
        i =
          void 0 === e.grouping || void 0 === e.thousands
            ? oH
            : ((t = oV.call(e.grouping, Number)),
              (r = e.thousands + ""),
              function (e, n) {
                for (
                  var i = e.length, a = [], o = 0, l = t[0], u = 0;
                  i > 0 &&
                  l > 0 &&
                  (u + l + 1 > n && (l = Math.max(1, n - u)),
                  a.push(e.substring((i -= l), i + l)),
                  !((u += l + 1) > n));
                )
                  l = t[(o = (o + 1) % t.length)];
                return a.reverse().join(r);
              }),
        a = void 0 === e.currency ? "" : e.currency[0] + "",
        o = void 0 === e.currency ? "" : e.currency[1] + "",
        u = void 0 === e.decimal ? "." : e.decimal + "",
        c =
          void 0 === e.numerals
            ? oH
            : ((n = oV.call(e.numerals, String)),
              function (e) {
                return e.replace(/[0-9]/g, function (e) {
                  return n[+e];
                });
              }),
        s = void 0 === e.percent ? "%" : e.percent + "",
        f = void 0 === e.minus ? "−" : e.minus + "",
        d = void 0 === e.nan ? "NaN" : e.nan + "";
      function p(e, t) {
        var r = (e = oU(e)).fill,
          n = e.align,
          p = e.sign,
          h = e.symbol,
          y = e.zero,
          v = e.width,
          g = e.comma,
          m = e.precision,
          b = e.trim,
          x = e.type;
        ("n" === x
          ? ((g = !0), (x = "g"))
          : oq[x] || (void 0 === m && (m = 12), (b = !0), (x = "g")),
          (y || ("0" === r && "=" === n)) && ((y = !0), (r = "0"), (n = "=")));
        var w =
            (t && void 0 !== t.prefix ? t.prefix : "") +
            ("$" === h
              ? a
              : "#" === h && /[boxX]/.test(x)
                ? "0" + x.toLowerCase()
                : ""),
          O =
            ("$" === h ? o : /[%p]/.test(x) ? s : "") +
            (t && void 0 !== t.suffix ? t.suffix : ""),
          j = oq[x],
          P = /[defgprs%]/.test(x);
        function _(e) {
          var t,
            a,
            o,
            s = w,
            h = O;
          if ("c" === x) ((h = j(e) + h), (e = ""));
          else {
            var _ = (e *= 1) < 0 || 1 / e < 0;
            if (
              ((e = isNaN(e) ? d : j(Math.abs(e), m)),
              b &&
                (e = (function (e) {
                  e: for (var t, r = e.length, n = 1, i = -1; n < r; ++n)
                    switch (e[n]) {
                      case ".":
                        i = t = n;
                        break;
                      case "0":
                        (0 === i && (i = n), (t = n));
                        break;
                      default:
                        if (!+e[n]) break e;
                        i > 0 && (i = 0);
                    }
                  return i > 0 ? e.slice(0, i) + e.slice(t + 1) : e;
                })(e)),
              _ && 0 == +e && "+" !== p && (_ = !1),
              (s =
                (_ ? ("(" === p ? p : f) : "-" === p || "(" === p ? "" : p) +
                s),
              (h =
                ("s" !== x || isNaN(e) || void 0 === l ? "" : oY[8 + l / 3]) +
                h +
                (_ && "(" === p ? ")" : "")),
              P)
            ) {
              for (t = -1, a = e.length; ++t < a; )
                if (48 > (o = e.charCodeAt(t)) || o > 57) {
                  ((h = (46 === o ? u + e.slice(t + 1) : e.slice(t)) + h),
                    (e = e.slice(0, t)));
                  break;
                }
            }
          }
          g && !y && (e = i(e, 1 / 0));
          var E = s.length + e.length + h.length,
            S = E < v ? Array(v - E + 1).join(r) : "";
          switch (
            (g &&
              y &&
              ((e = i(S + e, S.length ? v - h.length : 1 / 0)), (S = "")),
            n)
          ) {
            case "<":
              e = s + e + h + S;
              break;
            case "=":
              e = s + S + e + h;
              break;
            case "^":
              e = S.slice(0, (E = S.length >> 1)) + s + e + h + S.slice(E);
              break;
            default:
              e = S + s + e + h;
          }
          return c(e);
        }
        return (
          (m =
            void 0 === m
              ? 6
              : /[gprs]/.test(x)
                ? Math.max(1, Math.min(21, m))
                : Math.max(0, Math.min(20, m))),
          (_.toString = function () {
            return e + "";
          }),
          _
        );
      }
      return {
        format: p,
        formatPrefix: function (e, t) {
          var r = 3 * Math.max(-8, Math.min(8, Math.floor(oB(t) / 3))),
            n = Math.pow(10, -r),
            i = p((((e = oU(e)).type = "f"), e), { suffix: oY[8 + r / 3] });
          return function (e) {
            return i(n * e);
          };
        },
      };
    })({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
      (s = u.formatPrefix));
    let lg = new Date(),
      lm = new Date();
    function lb(e, t, r, n) {
      function i(t) {
        return (e((t = 0 == arguments.length ? new Date() : new Date(+t))), t);
      }
      return (
        (i.floor = (t) => (e((t = new Date(+t))), t)),
        (i.ceil = (r) => (e((r = new Date(r - 1))), t(r, 1), e(r), r)),
        (i.round = (e) => {
          let t = i(e),
            r = i.ceil(e);
          return e - t < r - e ? t : r;
        }),
        (i.offset = (e, r) => (
          t((e = new Date(+e)), null == r ? 1 : Math.floor(r)),
          e
        )),
        (i.range = (r, n, a) => {
          let o,
            l = [];
          if (
            ((r = i.ceil(r)),
            (a = null == a ? 1 : Math.floor(a)),
            !(r < n) || !(a > 0))
          )
            return l;
          do (l.push((o = new Date(+r))), t(r, a), e(r));
          while (o < r && r < n);
          return l;
        }),
        (i.filter = (r) =>
          lb(
            (t) => {
              if (t >= t) for (; e(t), !r(t); ) t.setTime(t - 1);
            },
            (e, n) => {
              if (e >= e)
                if (n < 0) for (; ++n <= 0; ) for (; t(e, -1), !r(e); );
                else for (; --n >= 0; ) for (; t(e, 1), !r(e); );
            },
          )),
        r &&
          ((i.count = (t, n) => (
            lg.setTime(+t),
            lm.setTime(+n),
            e(lg),
            e(lm),
            Math.floor(r(lg, lm))
          )),
          (i.every = (e) =>
            isFinite((e = Math.floor(e))) && e > 0
              ? e > 1
                ? i.filter(
                    n ? (t) => n(t) % e == 0 : (t) => i.count(0, t) % e == 0,
                  )
                : i
              : null)),
        i
      );
    }
    let lx = lb(
      (e) => {
        (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
      },
      (e, t) => {
        e.setFullYear(e.getFullYear() + t);
      },
      (e, t) => t.getFullYear() - e.getFullYear(),
      (e) => e.getFullYear(),
    );
    ((lx.every = (e) =>
      isFinite((e = Math.floor(e))) && e > 0
        ? lb(
            (t) => {
              (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                t.setMonth(0, 1),
                t.setHours(0, 0, 0, 0));
            },
            (t, r) => {
              t.setFullYear(t.getFullYear() + r * e);
            },
          )
        : null),
      lx.range);
    let lw = lb(
      (e) => {
        (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
      },
      (e, t) => {
        e.setUTCFullYear(e.getUTCFullYear() + t);
      },
      (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
      (e) => e.getUTCFullYear(),
    );
    ((lw.every = (e) =>
      isFinite((e = Math.floor(e))) && e > 0
        ? lb(
            (t) => {
              (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                t.setUTCMonth(0, 1),
                t.setUTCHours(0, 0, 0, 0));
            },
            (t, r) => {
              t.setUTCFullYear(t.getUTCFullYear() + r * e);
            },
          )
        : null),
      lw.range);
    let lO = lb(
      (e) => {
        (e.setDate(1), e.setHours(0, 0, 0, 0));
      },
      (e, t) => {
        e.setMonth(e.getMonth() + t);
      },
      (e, t) =>
        t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
      (e) => e.getMonth(),
    );
    lO.range;
    let lj = lb(
      (e) => {
        (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
      },
      (e, t) => {
        e.setUTCMonth(e.getUTCMonth() + t);
      },
      (e, t) =>
        t.getUTCMonth() -
        e.getUTCMonth() +
        (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
      (e) => e.getUTCMonth(),
    );
    lj.range;
    function lP(e) {
      return lb(
        (t) => {
          (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
            t.setHours(0, 0, 0, 0));
        },
        (e, t) => {
          e.setDate(e.getDate() + 7 * t);
        },
        (e, t) =>
          (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) /
          6048e5,
      );
    }
    let l_ = lP(0),
      lE = lP(1),
      lS = lP(2),
      lk = lP(3),
      lA = lP(4),
      lM = lP(5),
      lC = lP(6);
    function lT(e) {
      return lb(
        (t) => {
          (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
            t.setUTCHours(0, 0, 0, 0));
        },
        (e, t) => {
          e.setUTCDate(e.getUTCDate() + 7 * t);
        },
        (e, t) => (t - e) / 6048e5,
      );
    }
    (l_.range, lE.range, lS.range, lk.range, lA.range, lM.range, lC.range);
    let lD = lT(0),
      lI = lT(1),
      lN = lT(2),
      lz = lT(3),
      lL = lT(4),
      lR = lT(5),
      lF = lT(6);
    (lD.range, lI.range, lN.range, lz.range, lL.range, lR.range, lF.range);
    let lB = lb(
      (e) => e.setHours(0, 0, 0, 0),
      (e, t) => e.setDate(e.getDate() + t),
      (e, t) =>
        (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 864e5,
      (e) => e.getDate() - 1,
    );
    lB.range;
    let l$ = lb(
      (e) => {
        e.setUTCHours(0, 0, 0, 0);
      },
      (e, t) => {
        e.setUTCDate(e.getUTCDate() + t);
      },
      (e, t) => (t - e) / 864e5,
      (e) => e.getUTCDate() - 1,
    );
    l$.range;
    let lU = lb(
      (e) => {
        e.setUTCHours(0, 0, 0, 0);
      },
      (e, t) => {
        e.setUTCDate(e.getUTCDate() + t);
      },
      (e, t) => (t - e) / 864e5,
      (e) => Math.floor(e / 864e5),
    );
    lU.range;
    let lK = lb(
      (e) => {
        e.setTime(
          e - e.getMilliseconds() - 1e3 * e.getSeconds() - 6e4 * e.getMinutes(),
        );
      },
      (e, t) => {
        e.setTime(+e + 36e5 * t);
      },
      (e, t) => (t - e) / 36e5,
      (e) => e.getHours(),
    );
    lK.range;
    let lW = lb(
      (e) => {
        e.setUTCMinutes(0, 0, 0);
      },
      (e, t) => {
        e.setTime(+e + 36e5 * t);
      },
      (e, t) => (t - e) / 36e5,
      (e) => e.getUTCHours(),
    );
    lW.range;
    let lq = lb(
      (e) => {
        e.setTime(e - e.getMilliseconds() - 1e3 * e.getSeconds());
      },
      (e, t) => {
        e.setTime(+e + 6e4 * t);
      },
      (e, t) => (t - e) / 6e4,
      (e) => e.getMinutes(),
    );
    lq.range;
    let lH = lb(
      (e) => {
        e.setUTCSeconds(0, 0);
      },
      (e, t) => {
        e.setTime(+e + 6e4 * t);
      },
      (e, t) => (t - e) / 6e4,
      (e) => e.getUTCMinutes(),
    );
    lH.range;
    let lV = lb(
      (e) => {
        e.setTime(e - e.getMilliseconds());
      },
      (e, t) => {
        e.setTime(+e + 1e3 * t);
      },
      (e, t) => (t - e) / 1e3,
      (e) => e.getUTCSeconds(),
    );
    lV.range;
    let lY = lb(
      () => {},
      (e, t) => {
        e.setTime(+e + t);
      },
      (e, t) => t - e,
    );
    function lG(e, t, r, n, i, a) {
      let o = [
        [lV, 1, 1e3],
        [lV, 5, 5e3],
        [lV, 15, 15e3],
        [lV, 30, 3e4],
        [a, 1, 6e4],
        [a, 5, 3e5],
        [a, 15, 9e5],
        [a, 30, 18e5],
        [i, 1, 36e5],
        [i, 3, 108e5],
        [i, 6, 216e5],
        [i, 12, 432e5],
        [n, 1, 864e5],
        [n, 2, 1728e5],
        [r, 1, 6048e5],
        [t, 1, 2592e6],
        [t, 3, 7776e6],
        [e, 1, 31536e6],
      ];
      function l(t, r, n) {
        let i = Math.abs(r - t) / n,
          a = aV(([, , e]) => e).right(o, i);
        if (a === o.length) return e.every(aW(t / 31536e6, r / 31536e6, n));
        if (0 === a) return lY.every(Math.max(aW(t, r, n), 1));
        let [l, u] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
        return l.every(u);
      }
      return [
        function (e, t, r) {
          let n = t < e;
          n && ([e, t] = [t, e]);
          let i = r && "function" == typeof r.range ? r : l(e, t, r),
            a = i ? i.range(e, +t + 1) : [];
          return n ? a.reverse() : a;
        },
        l,
      ];
    }
    ((lY.every = (e) =>
      isFinite((e = Math.floor(e))) && e > 0
        ? e > 1
          ? lb(
              (t) => {
                t.setTime(Math.floor(t / e) * e);
              },
              (t, r) => {
                t.setTime(+t + r * e);
              },
              (t, r) => (r - t) / e,
            )
          : lY
        : null),
      lY.range);
    let [lX, lZ] = lG(lw, lj, lD, lU, lW, lH),
      [lQ, lJ] = lG(lx, lO, l_, lB, lK, lq);
    function l0(e) {
      if (0 <= e.y && e.y < 100) {
        var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
        return (t.setFullYear(e.y), t);
      }
      return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
    }
    function l1(e) {
      if (0 <= e.y && e.y < 100) {
        var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
        return (t.setUTCFullYear(e.y), t);
      }
      return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
    }
    function l2(e, t, r) {
      return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
    }
    var l5 = { "-": "", _: " ", 0: "0" },
      l3 = /^\s*\d+/,
      l6 = /^%/,
      l4 = /[\\^$*+?|[\]().{}]/g;
    function l8(e, t, r) {
      var n = e < 0 ? "-" : "",
        i = (n ? -e : e) + "",
        a = i.length;
      return n + (a < r ? Array(r - a + 1).join(t) + i : i);
    }
    function l7(e) {
      return e.replace(l4, "\\$&");
    }
    function l9(e) {
      return RegExp("^(?:" + e.map(l7).join("|") + ")", "i");
    }
    function ue(e) {
      return new Map(e.map((e, t) => [e.toLowerCase(), t]));
    }
    function ut(e, t, r) {
      var n = l3.exec(t.slice(r, r + 1));
      return n ? ((e.w = +n[0]), r + n[0].length) : -1;
    }
    function ur(e, t, r) {
      var n = l3.exec(t.slice(r, r + 1));
      return n ? ((e.u = +n[0]), r + n[0].length) : -1;
    }
    function un(e, t, r) {
      var n = l3.exec(t.slice(r, r + 2));
      return n ? ((e.U = +n[0]), r + n[0].length) : -1;
    }
    function ui(e, t, r) {
      var n = l3.exec(t.slice(r, r + 2));
      return n ? ((e.V = +n[0]), r + n[0].length) : -1;
    }
    function ua(e, t, r) {
      var n = l3.exec(t.slice(r, r + 2));
      return n ? ((e.W = +n[0]), r + n[0].length) : -1;
    }
    function uo(e, t, r) {
      var n = l3.exec(t.slice(r, r + 4));
      return n ? ((e.y = +n[0]), r + n[0].length) : -1;
    }
    function ul(e, t, r) {
      var n = l3.exec(t.slice(r, r + 2));
      return n
        ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length)
        : -1;
    }
    function uu(e, t, r) {
      var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
      return n
        ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
        : -1;
    }
    function uc(e, t, r) {
      var n = l3.exec(t.slice(r, r + 1));
      return n ? ((e.q = 3 * n[0] - 3), r + n[0].length) : -1;
    }
    function us(e, t, r) {
      var n = l3.exec(t.slice(r, r + 2));
      return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
    }
    function uf(e, t, r) {
      var n = l3.exec(t.slice(r, r + 2));
      return n ? ((e.d = +n[0]), r + n[0].length) : -1;
    }
    function ud(e, t, r) {
      var n = l3.exec(t.slice(r, r + 3));
      return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
    }
    function up(e, t, r) {
      var n = l3.exec(t.slice(r, r + 2));
      return n ? ((e.H = +n[0]), r + n[0].length) : -1;
    }
    function uh(e, t, r) {
      var n = l3.exec(t.slice(r, r + 2));
      return n ? ((e.M = +n[0]), r + n[0].length) : -1;
    }
    function uy(e, t, r) {
      var n = l3.exec(t.slice(r, r + 2));
      return n ? ((e.S = +n[0]), r + n[0].length) : -1;
    }
    function uv(e, t, r) {
      var n = l3.exec(t.slice(r, r + 3));
      return n ? ((e.L = +n[0]), r + n[0].length) : -1;
    }
    function ug(e, t, r) {
      var n = l3.exec(t.slice(r, r + 6));
      return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
    }
    function um(e, t, r) {
      var n = l6.exec(t.slice(r, r + 1));
      return n ? r + n[0].length : -1;
    }
    function ub(e, t, r) {
      var n = l3.exec(t.slice(r));
      return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
    }
    function ux(e, t, r) {
      var n = l3.exec(t.slice(r));
      return n ? ((e.s = +n[0]), r + n[0].length) : -1;
    }
    function uw(e, t) {
      return l8(e.getDate(), t, 2);
    }
    function uO(e, t) {
      return l8(e.getHours(), t, 2);
    }
    function uj(e, t) {
      return l8(e.getHours() % 12 || 12, t, 2);
    }
    function uP(e, t) {
      return l8(1 + lB.count(lx(e), e), t, 3);
    }
    function u_(e, t) {
      return l8(e.getMilliseconds(), t, 3);
    }
    function uE(e, t) {
      return u_(e, t) + "000";
    }
    function uS(e, t) {
      return l8(e.getMonth() + 1, t, 2);
    }
    function uk(e, t) {
      return l8(e.getMinutes(), t, 2);
    }
    function uA(e, t) {
      return l8(e.getSeconds(), t, 2);
    }
    function uM(e) {
      var t = e.getDay();
      return 0 === t ? 7 : t;
    }
    function uC(e, t) {
      return l8(l_.count(lx(e) - 1, e), t, 2);
    }
    function uT(e) {
      var t = e.getDay();
      return t >= 4 || 0 === t ? lA(e) : lA.ceil(e);
    }
    function uD(e, t) {
      return (
        (e = uT(e)),
        l8(lA.count(lx(e), e) + (4 === lx(e).getDay()), t, 2)
      );
    }
    function uI(e) {
      return e.getDay();
    }
    function uN(e, t) {
      return l8(lE.count(lx(e) - 1, e), t, 2);
    }
    function uz(e, t) {
      return l8(e.getFullYear() % 100, t, 2);
    }
    function uL(e, t) {
      return l8((e = uT(e)).getFullYear() % 100, t, 2);
    }
    function uR(e, t) {
      return l8(e.getFullYear() % 1e4, t, 4);
    }
    function uF(e, t) {
      var r = e.getDay();
      return l8(
        (e = r >= 4 || 0 === r ? lA(e) : lA.ceil(e)).getFullYear() % 1e4,
        t,
        4,
      );
    }
    function uB(e) {
      var t = e.getTimezoneOffset();
      return (
        (t > 0 ? "-" : ((t *= -1), "+")) +
        l8((t / 60) | 0, "0", 2) +
        l8(t % 60, "0", 2)
      );
    }
    function u$(e, t) {
      return l8(e.getUTCDate(), t, 2);
    }
    function uU(e, t) {
      return l8(e.getUTCHours(), t, 2);
    }
    function uK(e, t) {
      return l8(e.getUTCHours() % 12 || 12, t, 2);
    }
    function uW(e, t) {
      return l8(1 + l$.count(lw(e), e), t, 3);
    }
    function uq(e, t) {
      return l8(e.getUTCMilliseconds(), t, 3);
    }
    function uH(e, t) {
      return uq(e, t) + "000";
    }
    function uV(e, t) {
      return l8(e.getUTCMonth() + 1, t, 2);
    }
    function uY(e, t) {
      return l8(e.getUTCMinutes(), t, 2);
    }
    function uG(e, t) {
      return l8(e.getUTCSeconds(), t, 2);
    }
    function uX(e) {
      var t = e.getUTCDay();
      return 0 === t ? 7 : t;
    }
    function uZ(e, t) {
      return l8(lD.count(lw(e) - 1, e), t, 2);
    }
    function uQ(e) {
      var t = e.getUTCDay();
      return t >= 4 || 0 === t ? lL(e) : lL.ceil(e);
    }
    function uJ(e, t) {
      return (
        (e = uQ(e)),
        l8(lL.count(lw(e), e) + (4 === lw(e).getUTCDay()), t, 2)
      );
    }
    function u0(e) {
      return e.getUTCDay();
    }
    function u1(e, t) {
      return l8(lI.count(lw(e) - 1, e), t, 2);
    }
    function u2(e, t) {
      return l8(e.getUTCFullYear() % 100, t, 2);
    }
    function u5(e, t) {
      return l8((e = uQ(e)).getUTCFullYear() % 100, t, 2);
    }
    function u3(e, t) {
      return l8(e.getUTCFullYear() % 1e4, t, 4);
    }
    function u6(e, t) {
      var r = e.getUTCDay();
      return l8(
        (e = r >= 4 || 0 === r ? lL(e) : lL.ceil(e)).getUTCFullYear() % 1e4,
        t,
        4,
      );
    }
    function u4() {
      return "+0000";
    }
    function u8() {
      return "%";
    }
    function u7(e) {
      return +e;
    }
    function u9(e) {
      return Math.floor(e / 1e3);
    }
    function ce(e) {
      return new Date(e);
    }
    function ct(e) {
      return e instanceof Date ? +e : +new Date(+e);
    }
    function cr(e, t, r, n, i, a, o, l, u, c) {
      var s = oR(),
        f = s.invert,
        d = s.domain,
        p = c(".%L"),
        h = c(":%S"),
        y = c("%I:%M"),
        v = c("%I %p"),
        g = c("%a %d"),
        m = c("%b %d"),
        b = c("%B"),
        x = c("%Y");
      function w(e) {
        return (
          u(e) < e
            ? p
            : l(e) < e
              ? h
              : o(e) < e
                ? y
                : a(e) < e
                  ? v
                  : n(e) < e
                    ? i(e) < e
                      ? g
                      : m
                    : r(e) < e
                      ? b
                      : x
        )(e);
      }
      return (
        (s.invert = function (e) {
          return new Date(f(e));
        }),
        (s.domain = function (e) {
          return arguments.length ? d(Array.from(e, ct)) : d().map(ce);
        }),
        (s.ticks = function (t) {
          var r = d();
          return e(r[0], r[r.length - 1], null == t ? 10 : t);
        }),
        (s.tickFormat = function (e, t) {
          return null == t ? w : c(t);
        }),
        (s.nice = function (e) {
          var r = d();
          return (
            (e && "function" == typeof e.range) ||
              (e = t(r[0], r[r.length - 1], null == e ? 10 : e)),
            e ? d(oJ(r, e)) : s
          );
        }),
        (s.copy = function () {
          return oz(s, cr(e, t, r, n, i, a, o, l, u, c));
        }),
        s
      );
    }
    function cn() {
      return aA.apply(
        cr(lQ, lJ, lx, lO, l_, lB, lK, lq, lV, d).domain([
          new Date(2e3, 0, 1),
          new Date(2e3, 0, 2),
        ]),
        arguments,
      );
    }
    function ci() {
      return aA.apply(
        cr(lX, lZ, lw, lj, lD, l$, lW, lH, lV, p).domain([
          Date.UTC(2e3, 0, 1),
          Date.UTC(2e3, 0, 2),
        ]),
        arguments,
      );
    }
    function ca() {
      var e,
        t,
        r,
        n,
        i,
        a = 0,
        o = 1,
        l = oT,
        u = !1;
      function c(t) {
        return null == t || isNaN((t *= 1))
          ? i
          : l(
              0 === r
                ? 0.5
                : ((t = (n(t) - e) * r), u ? Math.max(0, Math.min(1, t)) : t),
            );
      }
      function s(e) {
        return function (t) {
          var r, n;
          return arguments.length
            ? (([r, n] = t), (l = e(r, n)), c)
            : [l(0), l(1)];
        };
      }
      return (
        (c.domain = function (i) {
          return arguments.length
            ? (([a, o] = i),
              (e = n((a *= 1))),
              (t = n((o *= 1))),
              (r = e === t ? 0 : 1 / (t - e)),
              c)
            : [a, o];
        }),
        (c.clamp = function (e) {
          return arguments.length ? ((u = !!e), c) : u;
        }),
        (c.interpolator = function (e) {
          return arguments.length ? ((l = e), c) : l;
        }),
        (c.range = s(ok)),
        (c.rangeRound = s(oA)),
        (c.unknown = function (e) {
          return arguments.length ? ((i = e), c) : i;
        }),
        function (i) {
          return (
            (n = i),
            (e = i(a)),
            (t = i(o)),
            (r = e === t ? 0 : 1 / (t - e)),
            c
          );
        }
      );
    }
    function co(e, t) {
      return t
        .domain(e.domain())
        .interpolator(e.interpolator())
        .clamp(e.clamp())
        .unknown(e.unknown());
    }
    function cl() {
      var e = oX(ca()(oT));
      return (
        (e.copy = function () {
          return co(e, cl());
        }),
        aM.apply(e, arguments)
      );
    }
    function cu() {
      var e = o4(ca()).domain([1, 10]);
      return (
        (e.copy = function () {
          return co(e, cu()).base(e.base());
        }),
        aM.apply(e, arguments)
      );
    }
    function cc() {
      var e = le(ca());
      return (
        (e.copy = function () {
          return co(e, cc()).constant(e.constant());
        }),
        aM.apply(e, arguments)
      );
    }
    function cs() {
      var e = la(ca());
      return (
        (e.copy = function () {
          return co(e, cs()).exponent(e.exponent());
        }),
        aM.apply(e, arguments)
      );
    }
    function cf() {
      return cs.apply(null, arguments).exponent(0.5);
    }
    function cd() {
      var e = [],
        t = oT;
      function r(r) {
        if (null != r && !isNaN((r *= 1)))
          return t((aZ(e, r, 1) - 1) / (e.length - 1));
      }
      return (
        (r.domain = function (t) {
          if (!arguments.length) return e.slice();
          for (let r of ((e = []), t))
            null == r || isNaN((r *= 1)) || e.push(r);
          return (e.sort(aq), r);
        }),
        (r.interpolator = function (e) {
          return arguments.length ? ((t = e), r) : t;
        }),
        (r.range = function () {
          return e.map((r, n) => t(n / (e.length - 1)));
        }),
        (r.quantiles = function (t) {
          return Array.from({ length: t + 1 }, (r, n) =>
            (function (e, t) {
              if (
                !(
                  !(r = (e = Float64Array.from(
                    (function* (e, t) {
                      if (void 0 === t)
                        for (let t of e)
                          null != t && (t *= 1) >= t && (yield t);
                      else {
                        let r = -1;
                        for (let n of e)
                          null != (n = t(n, ++r, e)) &&
                            (n *= 1) >= n &&
                            (yield n);
                      }
                    })(e, void 0),
                  )).length) || isNaN((t *= 1))
                )
              ) {
                if (t <= 0 || r < 2) return lf(e);
                if (t >= 1) return ls(e);
                var r,
                  n = (r - 1) * t,
                  i = Math.floor(n),
                  a = ls(
                    (function e(t, r, n = 0, i = 1 / 0, a) {
                      if (
                        ((r = Math.floor(r)),
                        (n = Math.floor(Math.max(0, n))),
                        (i = Math.floor(Math.min(t.length - 1, i))),
                        !(n <= r && r <= i))
                      )
                        return t;
                      for (
                        a =
                          void 0 === a
                            ? ld
                            : (function (e = aq) {
                                if (e === aq) return ld;
                                if ("function" != typeof e)
                                  throw TypeError("compare is not a function");
                                return (t, r) => {
                                  let n = e(t, r);
                                  return n || 0 === n
                                    ? n
                                    : (0 === e(r, r)) - (0 === e(t, t));
                                };
                              })(a);
                        i > n;
                      ) {
                        if (i - n > 600) {
                          let o = i - n + 1,
                            l = r - n + 1,
                            u = Math.log(o),
                            c = 0.5 * Math.exp((2 * u) / 3),
                            s =
                              0.5 *
                              Math.sqrt((u * c * (o - c)) / o) *
                              (l - o / 2 < 0 ? -1 : 1),
                            f = Math.max(n, Math.floor(r - (l * c) / o + s)),
                            d = Math.min(
                              i,
                              Math.floor(r + ((o - l) * c) / o + s),
                            );
                          e(t, r, f, d, a);
                        }
                        let o = t[r],
                          l = n,
                          u = i;
                        for (
                          lp(t, n, r), a(t[i], o) > 0 && lp(t, n, i);
                          l < u;
                        ) {
                          for (lp(t, l, u), ++l, --u; 0 > a(t[l], o); ) ++l;
                          for (; a(t[u], o) > 0; ) --u;
                        }
                        (0 === a(t[n], o) ? lp(t, n, u) : lp(t, ++u, i),
                          u <= r && (n = u + 1),
                          r <= u && (i = u - 1));
                      }
                      return t;
                    })(e, i).subarray(0, i + 1),
                  );
                return a + (lf(e.subarray(i + 1)) - a) * (n - i);
              }
            })(e, n / t),
          );
        }),
        (r.copy = function () {
          return cd(t).domain(e);
        }),
        aM.apply(r, arguments)
      );
    }
    function cp() {
      var e,
        t,
        r,
        n,
        i,
        a,
        o,
        l = 0,
        u = 0.5,
        c = 1,
        s = 1,
        f = oT,
        d = !1;
      function p(e) {
        return isNaN((e *= 1))
          ? o
          : ((e = 0.5 + ((e = +a(e)) - t) * (s * e < s * t ? n : i)),
            f(d ? Math.max(0, Math.min(1, e)) : e));
      }
      function h(e) {
        return function (t) {
          var r, n, i;
          return arguments.length
            ? (([r, n, i] = t),
              (f = (function (e, t) {
                void 0 === t && ((t = e), (e = ok));
                for (
                  var r = 0,
                    n = t.length - 1,
                    i = t[0],
                    a = Array(n < 0 ? 0 : n);
                  r < n;
                )
                  a[r] = e(i, (i = t[++r]));
                return function (e) {
                  var t = Math.max(0, Math.min(n - 1, Math.floor((e *= n))));
                  return a[t](e - t);
                };
              })(e, [r, n, i])),
              p)
            : [f(0), f(0.5), f(1)];
        };
      }
      return (
        (p.domain = function (o) {
          return arguments.length
            ? (([l, u, c] = o),
              (e = a((l *= 1))),
              (t = a((u *= 1))),
              (r = a((c *= 1))),
              (n = e === t ? 0 : 0.5 / (t - e)),
              (i = t === r ? 0 : 0.5 / (r - t)),
              (s = t < e ? -1 : 1),
              p)
            : [l, u, c];
        }),
        (p.clamp = function (e) {
          return arguments.length ? ((d = !!e), p) : d;
        }),
        (p.interpolator = function (e) {
          return arguments.length ? ((f = e), p) : f;
        }),
        (p.range = h(ok)),
        (p.rangeRound = h(oA)),
        (p.unknown = function (e) {
          return arguments.length ? ((o = e), p) : o;
        }),
        function (o) {
          return (
            (a = o),
            (e = o(l)),
            (t = o(u)),
            (r = o(c)),
            (n = e === t ? 0 : 0.5 / (t - e)),
            (i = t === r ? 0 : 0.5 / (r - t)),
            (s = t < e ? -1 : 1),
            p
          );
        }
      );
    }
    function ch() {
      var e = oX(cp()(oT));
      return (
        (e.copy = function () {
          return co(e, ch());
        }),
        aM.apply(e, arguments)
      );
    }
    function cy() {
      var e = o4(cp()).domain([0.1, 1, 10]);
      return (
        (e.copy = function () {
          return co(e, cy()).base(e.base());
        }),
        aM.apply(e, arguments)
      );
    }
    function cv() {
      var e = le(cp());
      return (
        (e.copy = function () {
          return co(e, cv()).constant(e.constant());
        }),
        aM.apply(e, arguments)
      );
    }
    function cg() {
      var e = la(cp());
      return (
        (e.copy = function () {
          return co(e, cg()).exponent(e.exponent());
        }),
        aM.apply(e, arguments)
      );
    }
    function cm() {
      return cg.apply(null, arguments).exponent(0.5);
    }
    ((d = (f = (function (e) {
      var t = e.dateTime,
        r = e.date,
        n = e.time,
        i = e.periods,
        a = e.days,
        o = e.shortDays,
        l = e.months,
        u = e.shortMonths,
        c = l9(i),
        s = ue(i),
        f = l9(a),
        d = ue(a),
        p = l9(o),
        h = ue(o),
        y = l9(l),
        v = ue(l),
        g = l9(u),
        m = ue(u),
        b = {
          a: function (e) {
            return o[e.getDay()];
          },
          A: function (e) {
            return a[e.getDay()];
          },
          b: function (e) {
            return u[e.getMonth()];
          },
          B: function (e) {
            return l[e.getMonth()];
          },
          c: null,
          d: uw,
          e: uw,
          f: uE,
          g: uL,
          G: uF,
          H: uO,
          I: uj,
          j: uP,
          L: u_,
          m: uS,
          M: uk,
          p: function (e) {
            return i[+(e.getHours() >= 12)];
          },
          q: function (e) {
            return 1 + ~~(e.getMonth() / 3);
          },
          Q: u7,
          s: u9,
          S: uA,
          u: uM,
          U: uC,
          V: uD,
          w: uI,
          W: uN,
          x: null,
          X: null,
          y: uz,
          Y: uR,
          Z: uB,
          "%": u8,
        },
        x = {
          a: function (e) {
            return o[e.getUTCDay()];
          },
          A: function (e) {
            return a[e.getUTCDay()];
          },
          b: function (e) {
            return u[e.getUTCMonth()];
          },
          B: function (e) {
            return l[e.getUTCMonth()];
          },
          c: null,
          d: u$,
          e: u$,
          f: uH,
          g: u5,
          G: u6,
          H: uU,
          I: uK,
          j: uW,
          L: uq,
          m: uV,
          M: uY,
          p: function (e) {
            return i[+(e.getUTCHours() >= 12)];
          },
          q: function (e) {
            return 1 + ~~(e.getUTCMonth() / 3);
          },
          Q: u7,
          s: u9,
          S: uG,
          u: uX,
          U: uZ,
          V: uJ,
          w: u0,
          W: u1,
          x: null,
          X: null,
          y: u2,
          Y: u3,
          Z: u4,
          "%": u8,
        },
        w = {
          a: function (e, t, r) {
            var n = p.exec(t.slice(r));
            return n
              ? ((e.w = h.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          A: function (e, t, r) {
            var n = f.exec(t.slice(r));
            return n
              ? ((e.w = d.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          b: function (e, t, r) {
            var n = g.exec(t.slice(r));
            return n
              ? ((e.m = m.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          B: function (e, t, r) {
            var n = y.exec(t.slice(r));
            return n
              ? ((e.m = v.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          c: function (e, r, n) {
            return P(e, t, r, n);
          },
          d: uf,
          e: uf,
          f: ug,
          g: ul,
          G: uo,
          H: up,
          I: up,
          j: ud,
          L: uv,
          m: us,
          M: uh,
          p: function (e, t, r) {
            var n = c.exec(t.slice(r));
            return n
              ? ((e.p = s.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          q: uc,
          Q: ub,
          s: ux,
          S: uy,
          u: ur,
          U: un,
          V: ui,
          w: ut,
          W: ua,
          x: function (e, t, n) {
            return P(e, r, t, n);
          },
          X: function (e, t, r) {
            return P(e, n, t, r);
          },
          y: ul,
          Y: uo,
          Z: uu,
          "%": um,
        };
      function O(e, t) {
        return function (r) {
          var n,
            i,
            a,
            o = [],
            l = -1,
            u = 0,
            c = e.length;
          for (r instanceof Date || (r = new Date(+r)); ++l < c; )
            37 === e.charCodeAt(l) &&
              (o.push(e.slice(u, l)),
              null != (i = l5[(n = e.charAt(++l))])
                ? (n = e.charAt(++l))
                : (i = "e" === n ? " " : "0"),
              (a = t[n]) && (n = a(r, i)),
              o.push(n),
              (u = l + 1));
          return (o.push(e.slice(u, l)), o.join(""));
        };
      }
      function j(e, t) {
        return function (r) {
          var n,
            i,
            a = l2(1900, void 0, 1);
          if (P(a, e, (r += ""), 0) != r.length) return null;
          if ("Q" in a) return new Date(a.Q);
          if ("s" in a) return new Date(1e3 * a.s + ("L" in a ? a.L : 0));
          if (
            (!t || "Z" in a || (a.Z = 0),
            "p" in a && (a.H = (a.H % 12) + 12 * a.p),
            void 0 === a.m && (a.m = "q" in a ? a.q : 0),
            "V" in a)
          ) {
            if (a.V < 1 || a.V > 53) return null;
            ("w" in a || (a.w = 1),
              "Z" in a
                ? ((n =
                    (i = (n = l1(l2(a.y, 0, 1))).getUTCDay()) > 4 || 0 === i
                      ? lI.ceil(n)
                      : lI(n)),
                  (n = l$.offset(n, (a.V - 1) * 7)),
                  (a.y = n.getUTCFullYear()),
                  (a.m = n.getUTCMonth()),
                  (a.d = n.getUTCDate() + ((a.w + 6) % 7)))
                : ((n =
                    (i = (n = l0(l2(a.y, 0, 1))).getDay()) > 4 || 0 === i
                      ? lE.ceil(n)
                      : lE(n)),
                  (n = lB.offset(n, (a.V - 1) * 7)),
                  (a.y = n.getFullYear()),
                  (a.m = n.getMonth()),
                  (a.d = n.getDate() + ((a.w + 6) % 7))));
          } else
            ("W" in a || "U" in a) &&
              ("w" in a || (a.w = "u" in a ? a.u % 7 : +("W" in a)),
              (i =
                "Z" in a
                  ? l1(l2(a.y, 0, 1)).getUTCDay()
                  : l0(l2(a.y, 0, 1)).getDay()),
              (a.m = 0),
              (a.d =
                "W" in a
                  ? ((a.w + 6) % 7) + 7 * a.W - ((i + 5) % 7)
                  : a.w + 7 * a.U - ((i + 6) % 7)));
          return "Z" in a
            ? ((a.H += (a.Z / 100) | 0), (a.M += a.Z % 100), l1(a))
            : l0(a);
        };
      }
      function P(e, t, r, n) {
        for (var i, a, o = 0, l = t.length, u = r.length; o < l; ) {
          if (n >= u) return -1;
          if (37 === (i = t.charCodeAt(o++))) {
            if (
              !(a = w[(i = t.charAt(o++)) in l5 ? t.charAt(o++) : i]) ||
              (n = a(e, r, n)) < 0
            )
              return -1;
          } else if (i != r.charCodeAt(n++)) return -1;
        }
        return n;
      }
      return (
        (b.x = O(r, b)),
        (b.X = O(n, b)),
        (b.c = O(t, b)),
        (x.x = O(r, x)),
        (x.X = O(n, x)),
        (x.c = O(t, x)),
        {
          format: function (e) {
            var t = O((e += ""), b);
            return (
              (t.toString = function () {
                return e;
              }),
              t
            );
          },
          parse: function (e) {
            var t = j((e += ""), !1);
            return (
              (t.toString = function () {
                return e;
              }),
              t
            );
          },
          utcFormat: function (e) {
            var t = O((e += ""), x);
            return (
              (t.toString = function () {
                return e;
              }),
              t
            );
          },
          utcParse: function (e) {
            var t = j((e += ""), !0);
            return (
              (t.toString = function () {
                return e;
              }),
              t
            );
          },
        }
      );
    })({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    })).format),
      f.parse,
      (p = f.utcFormat),
      f.utcParse,
      e.s(
        [
          "scaleBand",
          0,
          az,
          "scaleDiverging",
          0,
          ch,
          "scaleDivergingLog",
          0,
          cy,
          "scaleDivergingPow",
          0,
          cg,
          "scaleDivergingSqrt",
          0,
          cm,
          "scaleDivergingSymlog",
          0,
          cv,
          "scaleIdentity",
          0,
          oQ,
          "scaleImplicit",
          0,
          aI,
          "scaleLinear",
          0,
          oZ,
          "scaleLog",
          0,
          o8,
          "scaleOrdinal",
          0,
          aN,
          "scalePoint",
          0,
          aL,
          "scalePow",
          0,
          lo,
          "scaleQuantile",
          0,
          lh,
          "scaleQuantize",
          0,
          ly,
          "scaleRadial",
          0,
          lc,
          "scaleSequential",
          0,
          cl,
          "scaleSequentialLog",
          0,
          cu,
          "scaleSequentialPow",
          0,
          cs,
          "scaleSequentialQuantile",
          0,
          cd,
          "scaleSequentialSqrt",
          0,
          cf,
          "scaleSequentialSymlog",
          0,
          cc,
          "scaleSqrt",
          0,
          ll,
          "scaleSymlog",
          0,
          lt,
          "scaleThreshold",
          0,
          lv,
          "scaleTime",
          0,
          cn,
          "scaleUtc",
          0,
          ci,
          "tickFormat",
          0,
          oG,
        ],
        429061,
      ),
      e.i(429061),
      e.s(
        [
          "scaleBand",
          0,
          az,
          "scaleDiverging",
          0,
          ch,
          "scaleDivergingLog",
          0,
          cy,
          "scaleDivergingPow",
          0,
          cg,
          "scaleDivergingSqrt",
          0,
          cm,
          "scaleDivergingSymlog",
          0,
          cv,
          "scaleIdentity",
          0,
          oQ,
          "scaleImplicit",
          0,
          aI,
          "scaleLinear",
          0,
          oZ,
          "scaleLog",
          0,
          o8,
          "scaleOrdinal",
          0,
          aN,
          "scalePoint",
          0,
          aL,
          "scalePow",
          0,
          lo,
          "scaleQuantile",
          0,
          lh,
          "scaleQuantize",
          0,
          ly,
          "scaleRadial",
          0,
          lc,
          "scaleSequential",
          0,
          cl,
          "scaleSequentialLog",
          0,
          cu,
          "scaleSequentialPow",
          0,
          cs,
          "scaleSequentialQuantile",
          0,
          cd,
          "scaleSequentialSqrt",
          0,
          cf,
          "scaleSequentialSymlog",
          0,
          cc,
          "scaleSqrt",
          0,
          ll,
          "scaleSymlog",
          0,
          lt,
          "scaleThreshold",
          0,
          lv,
          "scaleTime",
          0,
          cn,
          "scaleUtc",
          0,
          ci,
          "tickFormat",
          0,
          oG,
        ],
        979357,
      ));
    var cb = e.i(979357);
    function cx(e, t, r) {
      if ("function" == typeof e) return e.copy().domain(t).range(r);
      if (null != e) {
        var n = (function (e) {
          if (e in cb && "function" == typeof cb[e]) return cb[e]();
          var t = "scale".concat(ra(e));
          if (t in cb && "function" == typeof cb[t]) return cb[t]();
        })(e);
        if (null != n) return (n.domain(t).range(r), n);
      }
    }
    function cw(e, t, r, n) {
      if (null != r && null != n)
        return "function" == typeof e.scale ? cx(e.scale, r, n) : cx(t, r, n);
    }
    var cO = (e, t, r) => {
      if (null != e) {
        var { scale: n, type: i } = e;
        if ("auto" === n)
          return "category" === i &&
            r &&
            (r.indexOf("LineChart") >= 0 ||
              r.indexOf("AreaChart") >= 0 ||
              (r.indexOf("ComposedChart") >= 0 && !t))
            ? "point"
            : "category" === i
              ? "band"
              : "linear";
        if ("string" == typeof n)
          return "scale".concat(ra(n)) in cb ? n : "point";
      }
    };
    function cj(e, t) {
      if (e) {
        var r = null != t ? t : e.domain(),
          n = r.map((t) => {
            var r;
            return null != (r = e(t)) ? r : 0;
          }),
          i = e.range();
        if (0 !== r.length && !(i.length < 2))
          return (e) => {
            var t,
              i,
              a = (function (e, t) {
                for (
                  var r = 0, n = e.length, i = e[0] < e[e.length - 1];
                  r < n;
                ) {
                  var a = Math.floor((r + n) / 2);
                  (i ? e[a] < t : e[a] > t) ? (r = a + 1) : (n = a);
                }
                return r;
              })(n, e);
            return a <= 0
              ? r[0]
              : a >= r.length
                ? r[r.length - 1]
                : Math.abs(e - (null != (t = n[a - 1]) ? t : 0)) <=
                    Math.abs(e - (null != (i = n[a]) ? i : 0))
                  ? r[a - 1]
                  : r[a];
          };
      }
    }
    function cP(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function c_(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? cP(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : cP(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var cE = [0, "auto"],
      cS = {
        allowDataOverflow: !1,
        allowDecimals: !0,
        allowDuplicatedCategory: !0,
        angle: 0,
        dataKey: void 0,
        domain: void 0,
        height: 30,
        hide: !0,
        id: 0,
        includeHidden: !1,
        interval: "preserveEnd",
        minTickGap: 5,
        mirror: !1,
        name: void 0,
        orientation: "bottom",
        padding: { left: 0, right: 0 },
        reversed: !1,
        scale: "auto",
        tick: !0,
        tickCount: 5,
        tickFormatter: void 0,
        ticks: void 0,
        type: "category",
        unit: void 0,
        niceTicks: "auto",
      },
      ck = (e, t) => e.cartesianAxis.xAxis[t],
      cA = (e, t) => {
        var r = ck(e, t);
        return null == r ? cS : r;
      },
      cM = {
        allowDataOverflow: !1,
        allowDecimals: !0,
        allowDuplicatedCategory: !0,
        angle: 0,
        dataKey: void 0,
        domain: cE,
        hide: !0,
        id: 0,
        includeHidden: !1,
        interval: "preserveEnd",
        minTickGap: 5,
        mirror: !1,
        name: void 0,
        orientation: "left",
        padding: { top: 0, bottom: 0 },
        reversed: !1,
        scale: "auto",
        tick: !0,
        tickCount: 5,
        tickFormatter: void 0,
        ticks: void 0,
        type: "number",
        unit: void 0,
        niceTicks: "auto",
        width: 60,
      },
      cC = (e, t) => e.cartesianAxis.yAxis[t],
      cT = (e, t) => {
        var r = cC(e, t);
        return null == r ? cM : r;
      },
      cD = {
        domain: [0, "auto"],
        includeHidden: !1,
        reversed: !1,
        allowDataOverflow: !1,
        allowDuplicatedCategory: !1,
        dataKey: void 0,
        id: 0,
        name: "",
        range: [64, 64],
        scale: "auto",
        type: "number",
        unit: "",
      },
      cI = (e, t) => {
        var r = e.cartesianAxis.zAxis[t];
        return null == r ? cD : r;
      },
      cN = (e, t, r) => {
        switch (t) {
          case "xAxis":
            return cA(e, r);
          case "yAxis":
            return cT(e, r);
          case "zAxis":
            return cI(e, r);
          case "angleAxis":
            return as(e, r);
          case "radiusAxis":
            return af(e, r);
          default:
            throw Error("Unexpected axis type: ".concat(t));
        }
      },
      cz = (e, t, r) => {
        switch (t) {
          case "xAxis":
            return cA(e, r);
          case "yAxis":
            return cT(e, r);
          case "angleAxis":
            return as(e, r);
          case "radiusAxis":
            return af(e, r);
          default:
            throw Error("Unexpected axis type: ".concat(t));
        }
      },
      cL = (e) =>
        e.graphicalItems.cartesianItems.some((e) => "bar" === e.type) ||
        e.graphicalItems.polarItems.some((e) => "radialBar" === e.type);
    function cR(e, t) {
      return (r) => {
        switch (e) {
          case "xAxis":
            return "xAxisId" in r && r.xAxisId === t;
          case "yAxis":
            return "yAxisId" in r && r.yAxisId === t;
          case "zAxis":
            return "zAxisId" in r && r.zAxisId === t;
          case "angleAxis":
            return "angleAxisId" in r && r.angleAxisId === t;
          case "radiusAxis":
            return "radiusAxisId" in r && r.radiusAxisId === t;
          default:
            return !1;
        }
      };
    }
    var cF = (e) => e.graphicalItems.cartesianItems,
      cB = e7([ab, ax], cR),
      c$ = (e, t, r) =>
        e
          .filter(r)
          .filter(
            (e) => (null == t ? void 0 : t.includeHidden) === !0 || !e.hide,
          ),
      cU = e7([cF, cN, cB], c$, {
        memoizeOptions: { resultEqualityCheck: a_ },
      }),
      cK = e7([cU], (e) =>
        e.filter((e) => "area" === e.type || "bar" === e.type).filter(aj),
      ),
      cW = (e) => e.filter((e) => !("stackId" in e) || void 0 === e.stackId),
      cq = e7([cU], cW),
      cH = (e) =>
        e
          .map((e) => e.data)
          .filter(Boolean)
          .flat(1),
      cV = e7([cU], (e) => e.some((e) => !e.data)),
      cY = e7([cU], cH, { memoizeOptions: { resultEqualityCheck: a_ } }),
      cG = (e, t) => {
        var { chartData: r = [], dataStartIndex: n, dataEndIndex: i } = t;
        return e.length > 0 ? e : r.slice(n, i + 1);
      },
      cX = e7([cY, iB], cG),
      cZ = (e, t, r, n, i, a) => {
        var { chartData: o = [], dataStartIndex: l, dataEndIndex: u } = n,
          c =
            (null == t ? void 0 : t.dataKey) != null
              ? e.map((e) => ({ value: nH(e, t.dataKey) }))
              : r.length > 0
                ? r
                    .map((e) => e.dataKey)
                    .flatMap((t) => e.map((e) => ({ value: nH(e, t) })))
                : e.map((e) => ({ value: e }));
        return i && (null == t ? void 0 : t.dataKey) != null && a.length > 0
          ? [
              ...o
                .slice(l, u + 1)
                .map((e) => ({ value: nH(e, t.dataKey) }))
                .filter((e) => null != e.value),
              ...c,
            ]
          : c;
      },
      cQ = e7([cX, cN, cU, iB, cV, cY], cZ);
    function cJ(e) {
      if (t7(e) || e instanceof Date) {
        var t = Number(e);
        if (nU(t)) return t;
      }
    }
    function c0(e) {
      if (Array.isArray(e)) {
        var t = [cJ(e[0]), cJ(e[1])];
        return iK(t) ? t : void 0;
      }
      var r = cJ(e);
      if (null != r) return [r, r];
    }
    function c1(e) {
      return e.map(cJ).filter(ro);
    }
    function c2(e, t) {
      var r = cJ(e),
        n = cJ(t);
      return null == r && null == n
        ? 0
        : null == r
          ? -1
          : null == n
            ? 1
            : r - n;
    }
    var c5 = e7([cQ], (e) =>
      null == e ? void 0 : e.map((e) => e.value).sort(c2),
    );
    function c3(e, t) {
      switch (e) {
        case "xAxis":
          return "x" === t.direction;
        case "yAxis":
          return "y" === t.direction;
        default:
          return !1;
      }
    }
    var c6 = (e) => {
        var t = aE(e),
          r = aS(e);
        return cz(e, t, r);
      },
      c4 = e7([c6], (e) => (null == e ? void 0 : e.dataKey)),
      c8 = e7([cK, iB, c6], aO),
      c7 = (e, t, r, n) =>
        Object.fromEntries(
          Object.entries(
            t.reduce((e, t) => {
              if (null == t.stackId) return e;
              var r = e[t.stackId];
              return (null == r && (r = []), r.push(t), (e[t.stackId] = r), e);
            }, {}),
          ).map((t) => {
            var i,
              a,
              o,
              [l, u] = t,
              c = n ? [...u].reverse() : u,
              s = c.map(aw);
            return [
              l,
              {
                stackedData:
                  ((a = null != (i = nX[r]) ? i : nL),
                  (o = (function () {
                    var e = nz([]),
                      t = nR,
                      r = nL,
                      n = nF;
                    function i(i) {
                      var a,
                        o,
                        l = Array.from(e.apply(this, arguments), nB),
                        u = l.length,
                        c = -1;
                      for (let e of i)
                        for (a = 0, ++c; a < u; ++a)
                          (l[a][c] = [0, +n(e, l[a].key, c, i)]).data = e;
                      for (a = 0, o = nN(t(l)); a < u; ++a) l[o[a]].index = a;
                      return (r(l, o), l);
                    }
                    return (
                      (i.keys = function (t) {
                        return arguments.length
                          ? ((e =
                              "function" == typeof t ? t : nz(Array.from(t))),
                            i)
                          : e;
                      }),
                      (i.value = function (e) {
                        return arguments.length
                          ? ((n = "function" == typeof e ? e : nz(+e)), i)
                          : n;
                      }),
                      (i.order = function (e) {
                        return arguments.length
                          ? ((t =
                              null == e
                                ? nR
                                : "function" == typeof e
                                  ? e
                                  : nz(Array.from(e))),
                            i)
                          : t;
                      }),
                      (i.offset = function (e) {
                        return arguments.length
                          ? ((r = null == e ? nL : e), i)
                          : r;
                      }),
                      i
                    );
                  })()
                    .keys(s)
                    .value((e, t) => Number(nH(e, t, 0)))
                    .order(nR)
                    .offset(a)(e)).forEach((t, r) => {
                    t.forEach((t, n) => {
                      var i = nH(e[n], s[r], 0);
                      Array.isArray(i) &&
                        2 === i.length &&
                        t8(i[0]) &&
                        t8(i[1]) &&
                        ((t[0] = i[0]), (t[1] = i[1]));
                    });
                  }),
                  o),
                graphicalItems: c,
              },
            ];
          }),
        ),
      c9 = e7([c8, cK, i1, i2], c7),
      se = (e, t, r, n) => {
        var { dataStartIndex: i, dataEndIndex: a } = t;
        if (null == n && "zAxis" !== r) {
          var o = ((e, t, r) => {
            if (null != e) {
              let n;
              return [
                (n = Object.keys(e).reduce(
                  (n, i) => {
                    var a = e[i];
                    if (!a) return n;
                    var { stackedData: o } = a,
                      l = o.reduce(
                        (e, n) => {
                          var i,
                            a = [
                              Math.min(...(i = n$(n, t, r).flat(2).filter(t8))),
                              Math.max(...i),
                            ];
                          return nU(a[0]) && nU(a[1])
                            ? [Math.min(e[0], a[0]), Math.max(e[1], a[1])]
                            : e;
                        },
                        [1 / 0, -1 / 0],
                      );
                    return [Math.min(l[0], n[0]), Math.max(l[1], n[1])];
                  },
                  [1 / 0, -1 / 0],
                ))[0] ===
                1 / 0
                  ? 0
                  : n[0],
                n[1] === -1 / 0 ? 0 : n[1],
              ];
            }
          })(e, i, a);
          if (null == o || 0 !== o[0] || 0 !== o[1]) return o;
        }
      },
      st = e7([cN], (e) => e.allowDataOverflow),
      sr = (e) => {
        var t;
        if (null == e || !("domain" in e)) return cE;
        if (null != e.domain) return e.domain;
        if ("ticks" in e && null != e.ticks) {
          if ("number" === e.type) {
            var r = c1(e.ticks);
            return [Math.min(...r), Math.max(...r)];
          }
          if ("category" === e.type) return e.ticks.map(String);
        }
        return null != (t = null == e ? void 0 : e.domain) ? t : cE;
      },
      sn = e7([cN], sr),
      si = e7([sn, st], iq),
      sa = e7([c9, iR, ab, si], se, {
        memoizeOptions: { resultEqualityCheck: aP },
      }),
      so = (e) => e.errorBars,
      sl = function () {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var n = t.filter(Boolean);
        if (0 !== n.length) {
          var i = n.flat();
          return [Math.min(...i), Math.max(...i)];
        }
      },
      su = function (e, t, r, n, i) {
        var a,
          o,
          l =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [];
        if (
          (r.length > 0 &&
            r.forEach((e) => {
              var r,
                u = null != e.data ? [...e.data] : l,
                c = null == (r = n[e.id]) ? void 0 : r.filter((e) => c3(i, e));
              u.forEach((r) => {
                var n,
                  i = nH(r, null != (n = t.dataKey) ? n : e.dataKey),
                  l = (function (e, t, r) {
                    if (!r || !r.length) return [];
                    if ("number" != typeof t || t6(t)) {
                      if (Array.isArray(t)) {
                        var n,
                          i = c1(t);
                        i.length > 0 && (n = Math.max(...i));
                      }
                    } else n = t;
                    return null == n
                      ? []
                      : c1(
                          r.flatMap((t) => {
                            var r,
                              i,
                              a = nH(e, t.dataKey);
                            if (
                              (Array.isArray(a) ? ([r, i] = a) : (r = i = a),
                              nU(r) && nU(i))
                            )
                              return [n - r, n + i];
                          }),
                        );
                  })(r, i, c);
                if (l.length >= 2) {
                  var u = Math.min(...l),
                    s = Math.max(...l);
                  ((null == a || u < a) && (a = u),
                    (null == o || s > o) && (o = s));
                }
                var f = c0(i);
                null != f &&
                  ((a = null == a ? f[0] : Math.min(a, f[0])),
                  (o = null == o ? f[1] : Math.max(o, f[1])));
              });
            }),
          (null == t ? void 0 : t.dataKey) != null &&
            0 === r.length &&
            e.forEach((e) => {
              var r = c0(nH(e, t.dataKey));
              null != r &&
                ((a = null == a ? r[0] : Math.min(a, r[0])),
                (o = null == o ? r[1] : Math.max(o, r[1])));
            }),
          nU(a) && nU(o))
        )
          return [a, o];
      },
      sc = e7([cX, cN, cq, so, ab, i$], su, {
        memoizeOptions: { resultEqualityCheck: aP },
      });
    function ss(e) {
      var { value: t } = e;
      if (t7(t) || t instanceof Date) return t;
    }
    var sf = (e) => e.referenceElements.dots,
      sd = (e, t, r) =>
        e
          .filter((e) => "extendDomain" === e.ifOverflow)
          .filter((e) => ("xAxis" === t ? e.xAxisId === r : e.yAxisId === r)),
      sp = e7([sf, ab, ax], sd),
      sh = (e) => e.referenceElements.areas,
      sy = e7([sh, ab, ax], sd),
      sv = (e) => e.referenceElements.lines,
      sg = e7([sv, ab, ax], sd),
      sm = (e, t) => {
        if (null != e) {
          var r = c1(e.map((e) => ("xAxis" === t ? e.x : e.y)));
          if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
        }
      },
      sb = e7(sp, ab, sm),
      sx = (e, t) => {
        if (null != e) {
          var r = c1(
            e.flatMap((e) => [
              "xAxis" === t ? e.x1 : e.y1,
              "xAxis" === t ? e.x2 : e.y2,
            ]),
          );
          if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
        }
      },
      sw = e7([sy, ab], sx),
      sO = (e, t) => {
        if (null != e) {
          var r = e.flatMap((e) =>
            "xAxis" === t
              ? (function (e) {
                  if (null != e.x) return c1([e.x]);
                  var t,
                    r = null == (t = e.segment) ? void 0 : t.map((e) => e.x);
                  return null == r || 0 === r.length ? [] : c1(r);
                })(e)
              : (function (e) {
                  if (null != e.y) return c1([e.y]);
                  var t,
                    r = null == (t = e.segment) ? void 0 : t.map((e) => e.y);
                  return null == r || 0 === r.length ? [] : c1(r);
                })(e),
          );
          if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
        }
      },
      sj = e7([sg, ab], sO),
      sP = e7(sb, sj, sw, (e, t, r) => sl(e, r, t)),
      s_ = (e, t, r, n, i, a, o, l) =>
        null != r
          ? r
          : (function (e, t, r) {
              if (r || null != t) {
                if ("function" == typeof e && null != t)
                  try {
                    var n = e(t, r);
                    if (iK(n)) return iW(n, t, r);
                  } catch (e) {}
                if (Array.isArray(e) && 2 === e.length) {
                  var i,
                    a,
                    [o, l] = e;
                  if ("auto" === o) null != t && (i = Math.min(...t));
                  else if (t8(o)) i = o;
                  else if ("function" == typeof o)
                    try {
                      null != t && (i = o(null == t ? void 0 : t[0]));
                    } catch (e) {}
                  else if ("string" == typeof o && nQ.test(o)) {
                    var u = nQ.exec(o);
                    if (null == u || null == u[1] || null == t) i = void 0;
                    else {
                      var c = +u[1];
                      i = t[0] - c;
                    }
                  } else i = null == t ? void 0 : t[0];
                  if ("auto" === l) null != t && (a = Math.max(...t));
                  else if (t8(l)) a = l;
                  else if ("function" == typeof l)
                    try {
                      null != t && (a = l(null == t ? void 0 : t[1]));
                    } catch (e) {}
                  else if ("string" == typeof l && nJ.test(l)) {
                    var s = nJ.exec(l);
                    if (null == s || null == s[1] || null == t) a = void 0;
                    else {
                      var f = +s[1];
                      a = t[1] + f;
                    }
                  } else a = null == t ? void 0 : t[1];
                  var d = [i, a];
                  if (iK(d)) return null == t ? d : iW(d, t, r);
                }
              }
            })(
              t,
              ("vertical" === o && "xAxis" === l) ||
                ("horizontal" === o && "yAxis" === l)
                ? sl(n, a, i)
                : sl(a, i),
              e.allowDataOverflow,
            ),
      sE = e7([cN, sn, si, sa, sc, sP, iD, ab], s_, {
        memoizeOptions: { resultEqualityCheck: aP },
      }),
      sS = [0, 1],
      sk = (e, t, r, n, i, a, o) => {
        if ((null != e && null != r && 0 !== r.length) || void 0 !== o) {
          var l,
            u,
            { dataKey: c, type: s } = e,
            f = nV(t, a);
          return f && null == c
            ? (0, iL.default)(
                0,
                null != (u = null == r ? void 0 : r.length) ? u : 0,
              )
            : "category" === s
              ? ((l = n.map(ss).filter((e) => null != e)),
                f && (null == e.dataKey || (e.allowDuplicatedCategory && rr(l)))
                  ? (0, iL.default)(0, n.length)
                  : e.allowDuplicatedCategory
                    ? l
                    : Array.from(new Set(l)))
              : "expand" !== i || f
                ? o
                : sS;
        }
      },
      sA = e7([cN, iD, cX, cQ, i1, ab, sE], sk),
      sM = e7([cN, cL, i5], cO),
      sC = (e, t, r) => {
        var { niceTicks: n } = t;
        if ("none" !== n) {
          var i = sr(t),
            a = Array.isArray(i) && ("auto" === i[0] || "auto" === i[1]);
          if (
            ("snap125" === n || "adaptive" === n) &&
            null != t &&
            t.tickCount &&
            iK(e)
          ) {
            if (a) return iJ(e, t.tickCount, t.allowDecimals, n);
            if ("number" === t.type)
              return i0(e, t.tickCount, t.allowDecimals, n);
          }
          if ("auto" === n && "linear" === r && null != t && t.tickCount) {
            if (a && iK(e))
              return iJ(e, t.tickCount, t.allowDecimals, "adaptive");
            if ("number" === t.type && iK(e))
              return i0(e, t.tickCount, t.allowDecimals, "adaptive");
          }
        }
      },
      sT = e7([sA, cz, sM], sC),
      sD = (e, t, r, n) => {
        if (
          "angleAxis" !== n &&
          (null == e ? void 0 : e.type) === "number" &&
          iK(t) &&
          Array.isArray(r) &&
          r.length > 0
        ) {
          var i, a;
          return [
            Math.min(t[0], null != (i = r[0]) ? i : 0),
            Math.max(t[1], null != (a = r[r.length - 1]) ? a : 0),
          ];
        }
        return t;
      },
      sI = e7([cN, sA, sT, ab], sD),
      sN = e7(cQ, cN, (e, t) => {
        if (t && "number" === t.type) {
          var r = 1 / 0,
            n = Array.from(c1(e.map((e) => e.value))).sort((e, t) => e - t),
            i = n[0],
            a = n[n.length - 1];
          if (null == i || null == a) return 1 / 0;
          var o = a - i;
          if (0 === o) return 1 / 0;
          for (var l = 0; l < n.length - 1; l++) {
            var u = n[l],
              c = n[l + 1];
            null != u && null != c && (r = Math.min(r, c - u));
          }
          return r / o;
        }
      }),
      sz = e7(
        sN,
        iD,
        (e) => e.rootProps.barCategoryGap,
        it,
        (e, t, r, n, i) => i,
        (e, t, r, n, i) => {
          if (!nU(e)) return 0;
          var a = "vertical" === t ? n.height : n.width;
          if ("gap" === i) return (e * a) / 2;
          if ("no-gap" === i) {
            var o = rt(r, e * a),
              l = (e * a) / 2;
            return l - o - ((l - o) / a) * o;
          }
          return 0;
        },
      ),
      sL = e7(
        cA,
        (e, t, r) => {
          var n = cA(e, t);
          return null == n || "string" != typeof n.padding
            ? 0
            : sz(e, "xAxis", t, r, n.padding);
        },
        (e, t) => {
          if (null == e) return { left: 0, right: 0 };
          var r,
            n,
            { padding: i } = e;
          return "string" == typeof i
            ? { left: t, right: t }
            : {
                left: (null != (r = i.left) ? r : 0) + t,
                right: (null != (n = i.right) ? n : 0) + t,
              };
        },
      ),
      sR = e7(
        cT,
        (e, t, r) => {
          var n = cT(e, t);
          return null == n || "string" != typeof n.padding
            ? 0
            : sz(e, "yAxis", t, r, n.padding);
        },
        (e, t) => {
          if (null == e) return { top: 0, bottom: 0 };
          var r,
            n,
            { padding: i } = e;
          return "string" == typeof i
            ? { top: t, bottom: t }
            : {
                top: (null != (r = i.top) ? r : 0) + t,
                bottom: (null != (n = i.bottom) ? n : 0) + t,
              };
        },
      ),
      sF = e7([it, sL, iu, il, (e, t, r) => r], (e, t, r, n, i) => {
        var { padding: a } = n;
        return i
          ? [a.left, r.width - a.right]
          : [e.left + t.left, e.left + e.width - t.right];
      }),
      sB = e7([it, iD, sR, iu, il, (e, t, r) => r], (e, t, r, n, i, a) => {
        var { padding: o } = i;
        return a
          ? [n.height - o.bottom, o.top]
          : "horizontal" === t
            ? [e.top + e.height - r.bottom, e.top + r.top]
            : [e.top + r.top, e.top + e.height - r.bottom];
      }),
      s$ = (e, t, r, n) => {
        var i;
        switch (t) {
          case "xAxis":
            return sF(e, r, n);
          case "yAxis":
            return sB(e, r, n);
          case "zAxis":
            return null == (i = cI(e, r)) ? void 0 : i.range;
          case "angleAxis":
            return av(e);
          case "radiusAxis":
            return ag(e, r);
          default:
            return;
        }
      },
      sU = e7([cN, s$], ai),
      sK = e7([sM, sI], (e, t) => {
        if (null != t)
          if ("linear" !== e) return t;
          else {
            if (!iK(t)) {
              for (var r, n, i = 0; i < t.length; i++) {
                var a = t[i];
                nU(a) &&
                  ((void 0 === r || a < r) && (r = a),
                  (void 0 === n || a > n) && (n = a));
              }
              return void 0 !== r && void 0 !== n ? [r, n] : void 0;
            }
            return t;
          }
      }),
      sW = e7([cN, sM, sK, sU], cw),
      sq = (e, t, r, n) => {
        if (null != r && null != r.dataKey) {
          var { type: i, scale: a } = r;
          if (nV(e, n) && ("number" === i || "auto" !== a))
            return t.map((e) => e.value);
        }
      },
      sH = e7([iD, cQ, cz, ab], sq),
      sV = e7([sW], ak);
    function sY(e, t) {
      return e.id < t.id ? -1 : +(e.id > t.id);
    }
    (e7([sW], function (e) {
      if (null != e)
        return "invert" in e && "function" == typeof e.invert
          ? e.invert.bind(e)
          : cj(e, void 0);
    }),
      e7([sW, c5], cj),
      e7([cU, so, ab], (e, t, r) =>
        e
          .flatMap((e) => t[e.id])
          .filter(Boolean)
          .filter((e) => c3(r, e)),
      ));
    var sG = (e, t) => t,
      sX = (e, t, r) => r,
      sZ = e7(n8, sG, sX, (e, t, r) =>
        e
          .filter((e) => e.orientation === t)
          .filter((e) => e.mirror === r)
          .sort(sY),
      ),
      sQ = e7(n7, sG, sX, (e, t, r) =>
        e
          .filter((e) => e.orientation === t)
          .filter((e) => e.mirror === r)
          .sort(sY),
      ),
      sJ = (e, t) => ({ width: e.width, height: t.height }),
      s0 = e7(it, cA, sJ),
      s1 = e7(n3, it, sZ, sG, sX, (e, t, r, n, i) => {
        var a,
          o = {};
        return (
          r.forEach((r) => {
            var l = sJ(t, r);
            null == a &&
              (a = ((e, t, r) => {
                switch (t) {
                  case "top":
                    return e.top;
                  case "bottom":
                    return r - e.bottom;
                  default:
                    return 0;
                }
              })(t, n, e));
            var u = ("top" === n && !i) || ("bottom" === n && i);
            ((o[r.id] = a - Number(u) * l.height),
              (a += (u ? -1 : 1) * l.height));
          }),
          o
        );
      }),
      s2 = e7(n5, it, sQ, sG, sX, (e, t, r, n, i) => {
        var a,
          o = {};
        return (
          r.forEach((r) => {
            var l = {
              width: "number" == typeof r.width ? r.width : 60,
              height: t.height,
            };
            null == a &&
              (a = ((e, t, r) => {
                switch (t) {
                  case "left":
                    return e.left;
                  case "right":
                    return r - e.right;
                  default:
                    return 0;
                }
              })(t, n, e));
            var u = ("left" === n && !i) || ("right" === n && i);
            ((o[r.id] = a - Number(u) * l.width),
              (a += (u ? -1 : 1) * l.width));
          }),
          o
        );
      }),
      s5 = e7(
        [
          it,
          cA,
          (e, t) => {
            var r = cA(e, t);
            if (null != r) return s1(e, r.orientation, r.mirror);
          },
          (e, t) => t,
        ],
        (e, t, r, n) => {
          if (null != t) {
            var i = null == r ? void 0 : r[n];
            return null == i ? { x: e.left, y: 0 } : { x: e.left, y: i };
          }
        },
      ),
      s3 = e7(
        [
          it,
          cT,
          (e, t) => {
            var r = cT(e, t);
            if (null != r) return s2(e, r.orientation, r.mirror);
          },
          (e, t) => t,
        ],
        (e, t, r, n) => {
          if (null != t) {
            var i = null == r ? void 0 : r[n];
            return null == i ? { x: 0, y: e.top } : { x: i, y: e.top };
          }
        },
      ),
      s6 = e7(it, cT, (e, t) => ({
        width: "number" == typeof t.width ? t.width : 60,
        height: e.height,
      })),
      s4 = (e, t, r, n) => {
        if (null != r) {
          var { allowDuplicatedCategory: i, type: a, dataKey: o } = r,
            l = nV(e, n),
            u = t.map((e) => e.value),
            c = u.filter((e) => null != e);
          if (o && l && "category" === a && i && rr(c)) return u;
        }
      },
      s8 = e7([iD, cQ, cN, ab], s4),
      s7 = e7(
        [
          iD,
          (e, t, r) => {
            switch (t) {
              case "xAxis":
                return cA(e, r);
              case "yAxis":
                return cT(e, r);
              default:
                throw Error("Unexpected axis type: ".concat(t));
            }
          },
          sM,
          sV,
          s8,
          sH,
          s$,
          sT,
          ab,
        ],
        (e, t, r, n, i, a, o, l, u) => {
          if (null != t) {
            var c = nV(e, u);
            return {
              angle: t.angle,
              interval: t.interval,
              minTickGap: t.minTickGap,
              orientation: t.orientation,
              tick: t.tick,
              tickCount: t.tickCount,
              tickFormatter: t.tickFormatter,
              ticks: t.ticks,
              type: t.type,
              unit: t.unit,
              axisType: u,
              categoricalDomain: a,
              duplicateDomain: i,
              isCategorical: c,
              niceTicks: l,
              range: o,
              realScaleType: r,
              scale: n,
            };
          }
        },
      ),
      s9 = e7(
        [iD, cz, sM, sV, sT, s$, s8, sH, ab],
        (e, t, r, n, i, a, o, l, u) => {
          if (null != t && null != n) {
            var c = nV(e, u),
              { type: s, ticks: f, tickCount: d } = t,
              p =
                "scaleBand" === r && "function" == typeof n.bandwidth
                  ? n.bandwidth() / 2
                  : 2,
              h = "category" === s && n.bandwidth ? n.bandwidth() / p : 0;
            h =
              "angleAxis" === u && null != a && a.length >= 2
                ? 2 * t3(a[0] - a[1]) * h
                : h;
            var y = f || i;
            return y
              ? y
                  .map((e, t) => {
                    var r = o ? o.indexOf(e) : e,
                      i = n.map(r);
                    return nU(i)
                      ? { index: t, coordinate: i + h, value: e, offset: h }
                      : null;
                  })
                  .filter(ro)
              : c && l
                ? l
                    .map((e, t) => {
                      var r = n.map(e);
                      return nU(r)
                        ? { coordinate: r + h, value: e, index: t, offset: h }
                        : null;
                    })
                    .filter(ro)
                : n.ticks
                  ? n
                      .ticks(d)
                      .map((e, t) => {
                        var r = n.map(e);
                        return nU(r)
                          ? { coordinate: r + h, value: e, index: t, offset: h }
                          : null;
                      })
                      .filter(ro)
                  : n
                      .domain()
                      .map((e, t) => {
                        var r = n.map(e);
                        return nU(r)
                          ? {
                              coordinate: r + h,
                              value: o ? o[e] : e,
                              index: t,
                              offset: h,
                            }
                          : null;
                      })
                      .filter(ro);
          }
        },
      ),
      fe = e7([iD, cz, sV, s$, s8, sH, ab], (e, t, r, n, i, a, o) => {
        if (null != t && null != r && null != n && n[0] !== n[1]) {
          var l = nV(e, o),
            { tickCount: u } = t,
            c = 0;
          return ((c =
            "angleAxis" === o && (null == n ? void 0 : n.length) >= 2
              ? 2 * t3(n[0] - n[1]) * c
              : c),
          l && a)
            ? a
                .map((e, t) => {
                  var n = r.map(e);
                  return nU(n)
                    ? { coordinate: n + c, value: e, index: t, offset: c }
                    : null;
                })
                .filter(ro)
            : r.ticks
              ? r
                  .ticks(u)
                  .map((e, t) => {
                    var n = r.map(e);
                    return nU(n)
                      ? { coordinate: n + c, value: e, index: t, offset: c }
                      : null;
                  })
                  .filter(ro)
              : r
                  .domain()
                  .map((e, t) => {
                    var n = r.map(e);
                    return nU(n)
                      ? {
                          coordinate: n + c,
                          value: i ? i[e] : e,
                          index: t,
                          offset: c,
                        }
                      : null;
                  })
                  .filter(ro);
        }
      }),
      ft = e7(cN, sV, (e, t) => {
        if (null != e && null != t) return c_(c_({}, e), {}, { scale: t });
      }),
      fr = e7([cN, sM, sA, sU], cw),
      fn = e7([fr], ak);
    e7(
      (e, t, r) => cI(e, r),
      fn,
      (e, t) => {
        if (null != e && null != t) return c_(c_({}, e), {}, { scale: t });
      },
    );
    var fi = e7([iD, n8, n7], (e, t, r) => {
      switch (e) {
        case "horizontal":
          return t.some((e) => e.reversed) ? "right-to-left" : "left-to-right";
        case "vertical":
          return r.some((e) => e.reversed) ? "bottom-to-top" : "top-to-bottom";
        case "centric":
        case "radial":
          return "left-to-right";
        default:
          return;
      }
    });
    e7(
      [
        (e, t, r) => {
          var n;
          return null == (n = e.renderedTicks[t]) ? void 0 : n[r];
        },
      ],
      (e) => {
        if (e && 0 !== e.length)
          return (t) => {
            var r,
              n = 1 / 0,
              i = e[0];
            for (var a of e) {
              var o = Math.abs(a.coordinate - t);
              o < n && ((n = o), (i = a));
            }
            return null == (r = i) ? void 0 : r.value;
          };
      },
    );
    var fa = (e) => e.options.defaultTooltipEventType,
      fo = (e) => e.options.validateTooltipEventTypes;
    function fl(e, t, r) {
      if (null == e) return t;
      var n = e ? "axis" : "item";
      return null == r ? t : r.includes(n) ? n : t;
    }
    function fu(e, t) {
      return fl(t, fa(e), fo(e));
    }
    var fc = (e, t) => {
      var r,
        n = Number(t);
      if (!t6(n) && null != t)
        return n >= 0
          ? null == e || null == (r = e[n])
            ? void 0
            : r.value
          : void 0;
    };
    function fs(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function ff(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? fs(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : fs(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var fd = (e, t, r, n) => {
        if (null == t) return r9;
        var i,
          a,
          o,
          l =
            ((i = e),
            (a = t),
            (o = r),
            "axis" === a
              ? "click" === o
                ? i.axisInteraction.click
                : i.axisInteraction.hover
              : "click" === o
                ? i.itemInteraction.click
                : i.itemInteraction.hover);
        if (null == l) return r9;
        if (l.active) return l;
        if (e.keyboardInteraction.active) return e.keyboardInteraction;
        if (e.syncInteraction.active && null != e.syncInteraction.index)
          return e.syncInteraction;
        var u = !0 === e.settings.active;
        if (null != l.index) {
          if (u) return ff(ff({}, l), {}, { active: !0 });
        } else if (null != n)
          return {
            active: !0,
            coordinate: void 0,
            dataKey: void 0,
            index: n,
            graphicalItemId: void 0,
          };
        return ff(ff({}, r9), {}, { coordinate: l.coordinate });
      },
      fp = (e, t, r, n) => {
        var i = null == e ? void 0 : e.index;
        if (null == i) return null;
        var a = Number(i);
        if (!nU(a)) return i;
        var o = Infinity;
        t.length > 0 && (o = t.length - 1);
        var l = Math.max(0, Math.min(a, o)),
          u = t[l];
        return null == u
          ? String(l)
          : !(function (e, t, r) {
                if (null == r || null == t) return !0;
                var n = nH(e, t);
                return (
                  !(null != n && iK(r)) ||
                  (function (e, t) {
                    var r = (function (e) {
                        if ("number" == typeof e)
                          return Number.isFinite(e) ? e : void 0;
                        if (e instanceof Date) {
                          var t = e.valueOf();
                          return Number.isFinite(t) ? t : void 0;
                        }
                        var r = Number(e);
                        return Number.isFinite(r) ? r : void 0;
                      })(e),
                      n = t[0],
                      i = t[1];
                    if (void 0 === r) return !1;
                    var a = Math.min(n, i),
                      o = Math.max(n, i);
                    return r >= a && r <= o;
                  })(n, r)
                );
              })(u, r, n)
            ? null
            : String(l);
      },
      fh = (e, t, r, n, i, a, o) => {
        if (null != a) {
          var l = o[0],
            u = null == l ? void 0 : l.getPosition(a);
          if (null != u) return u;
          var c = null == i ? void 0 : i[Number(a)];
          if (c)
            if ("horizontal" === r)
              return { x: c.coordinate, y: (n.top + t) / 2 };
            else return { x: (n.left + e) / 2, y: c.coordinate };
        }
      },
      fy = (e, t, r, n) => {
        if ("axis" === t) return e.tooltipItemPayloads;
        if (0 === e.tooltipItemPayloads.length) return [];
        if (
          ((i =
            "hover" === r
              ? e.itemInteraction.hover.graphicalItemId
              : e.itemInteraction.click.graphicalItemId),
          e.syncInteraction.active && null == i)
        )
          return e.tooltipItemPayloads;
        if (null == i && (null != n || e.keyboardInteraction.active)) {
          var i,
            a = e.tooltipItemPayloads[0];
          return null != a ? [a] : [];
        }
        return e.tooltipItemPayloads.filter((e) => {
          var t;
          return (null == (t = e.settings) ? void 0 : t.graphicalItemId) === i;
        });
      },
      fv = (e) => e.options.tooltipPayloadSearcher,
      fg = (e) => e.tooltip;
    function fm(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function fb(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? fm(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : fm(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function fx(e) {
      if ("string" == typeof e) return e;
    }
    var fw = (e, t, r, n, i, a, o) => {
        if (null != t && null != a) {
          var {
            chartData: l,
            computedData: u,
            dataStartIndex: c,
            dataEndIndex: s,
          } = r;
          return e.reduce((e, r) => {
            var f,
              d,
              p,
              { dataDefinedOnItem: h, settings: y } = r,
              v = null != h ? h : l,
              g = Array.isArray(v) ? n$(v, c, s) : v,
              m = null != (f = null == y ? void 0 : y.dataKey) ? f : n,
              b = null == y ? void 0 : y.nameKey;
            return (
              Array.isArray(
                (d =
                  n && Array.isArray(g) && !Array.isArray(g[0]) && "axis" === o
                    ? ri(g, n, i)
                    : a(g, t, u, b)),
              )
                ? d.forEach((t) => {
                    var r,
                      n,
                      i = (function (e) {
                        if (null != e && "object" == typeof e) {
                          var t,
                            r =
                              "name" in e
                                ? (function (e) {
                                    if (
                                      "string" == typeof e ||
                                      "number" == typeof e
                                    )
                                      return e;
                                  })(e.name)
                                : void 0,
                            n =
                              "unit" in e
                                ? (function (e) {
                                    if (
                                      "string" == typeof e ||
                                      "number" == typeof e ||
                                      "boolean" == typeof e
                                    )
                                      return e;
                                  })(e.unit)
                                : void 0,
                            i =
                              "dataKey" in e
                                ? "string" == typeof (t = e.dataKey) ||
                                  "number" == typeof t
                                  ? t
                                  : "function" == typeof t
                                    ? (e) => t(e)
                                    : void 0
                                : void 0,
                            a = "payload" in e ? e.payload : void 0;
                          return {
                            name: r,
                            unit: n,
                            dataKey: i,
                            payload: a,
                            color: "color" in e ? fx(e.color) : void 0,
                            fill: "fill" in e ? fx(e.fill) : void 0,
                          };
                        }
                      })(t),
                      a = null == i ? void 0 : i.name,
                      o = null == i ? void 0 : i.dataKey,
                      l = null == i ? void 0 : i.payload,
                      u = fb(
                        fb({}, y),
                        {},
                        {
                          name: a,
                          unit: null == i ? void 0 : i.unit,
                          color:
                            null != (r = null == i ? void 0 : i.color)
                              ? r
                              : null == y
                                ? void 0
                                : y.color,
                          fill:
                            null != (n = null == i ? void 0 : i.fill)
                              ? n
                              : null == y
                                ? void 0
                                : y.fill,
                        },
                      );
                    e.push(
                      n1({
                        tooltipEntrySettings: u,
                        dataKey: o,
                        payload: l,
                        value: nH(l, o),
                        name: null == a ? void 0 : String(a),
                      }),
                    );
                  })
                : e.push(
                    n1({
                      tooltipEntrySettings: y,
                      dataKey: m,
                      payload: d,
                      value: nH(d, m),
                      name:
                        null != (p = nH(d, b))
                          ? p
                          : null == y
                            ? void 0
                            : y.name,
                    }),
                  ),
              e
            );
          }, []);
        }
      },
      fO = e7([c6, cL, i5], cO),
      fj = e7(
        [
          (e) => e.graphicalItems.cartesianItems,
          (e) => e.graphicalItems.polarItems,
        ],
        (e, t) => [...e, ...t],
      ),
      fP = e7([aE, aS], cR),
      f_ = e7([fj, c6, fP], c$, {
        memoizeOptions: { resultEqualityCheck: a_ },
      }),
      fE = e7([f_], (e) => e.filter(aj)),
      fS = e7([f_], cH, { memoizeOptions: { resultEqualityCheck: a_ } }),
      fk = e7([f_], (e) => e.some((e) => !e.data)),
      fA = e7([fS, iR], cG),
      fM = e7([fE, iR, c6], aO),
      fC = e7([fA, c6, f_, iR, fk, fS], cZ),
      fT = e7([c6], sr),
      fD = e7([c6], (e) => e.allowDataOverflow),
      fI = e7([fT, fD], iq),
      fN = e7([f_], (e) => e.filter(aj)),
      fz = e7([fM, fN, i1, i2], c7),
      fL = e7([fz, iR, aE, fI], se),
      fR = e7([f_], cW),
      fF = e7([fA, c6, fR, so, aE, iU], su, {
        memoizeOptions: { resultEqualityCheck: aP },
      }),
      fB = e7([sf, aE, aS], sd),
      f$ = e7([fB, aE], sm),
      fU = e7([sh, aE, aS], sd),
      fK = e7([fU, aE], sx),
      fW = e7([sv, aE, aS], sd),
      fq = e7([fW, aE], sO),
      fH = e7([f$, fq, fK], sl),
      fV = e7([c6, fT, fI, fL, fF, fH, iD, aE], s_),
      fY = e7([c6, iD, fA, fC, i1, aE, fV], sk),
      fG = e7([fY, c6, fO], sC),
      fX = e7([c6, fY, fG, aE], sD),
      fZ = (e) => {
        var t = aE(e),
          r = aS(e);
        return s$(e, t, r, !1);
      },
      fQ = e7([c6, fZ], ai),
      fJ = e7([c6, fO, fX, fQ], cw),
      f0 = e7([fJ], ak),
      f1 = e7([iD, fC, c6, aE], s4),
      f2 = e7([iD, fC, c6, aE], sq),
      f5 = e7([iD, c6, fO, f0, fZ, f1, f2, aE], (e, t, r, n, i, a, o, l) => {
        if (t) {
          var { type: u } = t,
            c = nV(e, l);
          if (n) {
            var s = "scaleBand" === r && n.bandwidth ? n.bandwidth() / 2 : 2,
              f = "category" === u && n.bandwidth ? n.bandwidth() / s : 0;
            return ((f =
              "angleAxis" === l &&
              null != i &&
              (null == i ? void 0 : i.length) >= 2
                ? 2 * t3(i[0] - i[1]) * f
                : f),
            c && o)
              ? o
                  .map((e, t) => {
                    var r = n.map(e);
                    return nU(r)
                      ? { coordinate: r + f, value: e, index: t, offset: f }
                      : null;
                  })
                  .filter(ro)
              : n
                  .domain()
                  .map((e, t) => {
                    var r = n.map(e);
                    return nU(r)
                      ? {
                          coordinate: r + f,
                          value: a ? a[e] : e,
                          index: t,
                          offset: f,
                        }
                      : null;
                  })
                  .filter(ro);
          }
        }
      }),
      f3 = e7([fa, fo, (e) => e.tooltip.settings], (e, t, r) =>
        fl(r.shared, e, t),
      ),
      f6 = (e) => e.tooltip.settings.trigger,
      f4 = (e) => e.tooltip.settings.defaultIndex,
      f8 = e7([fg, f3, f6, f4], fd),
      f7 = e7([f8, fA, c4, fY], fp),
      f9 = e7([f5, f7], fc),
      de = e7([f8], (e) => {
        if (e) return e.dataKey;
      }),
      dt = e7([f8], (e) => {
        if (e) return e.graphicalItemId;
      }),
      dr = e7([fg, f3, f6, f4], fy),
      dn = e7([n5, n3, iD, it, f5, f4, dr], fh),
      di = e7([f8, dn], (e, t) =>
        null != e && e.coordinate ? e.coordinate : t,
      ),
      da = e7([f8], (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.active) && t;
      }),
      dl = e7([dr, f7, iR, c4, f9, fv, f3], fw),
      du = e7([dl], (e) => {
        if (null != e)
          return Array.from(
            new Set(e.map((e) => e.payload).filter((e) => null != e)),
          );
      });
    function dc(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function ds(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? dc(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : dc(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var df = (e, t, r, n, i) => {
        var a = null != (f = null == t ? void 0 : t.length) ? f : 0;
        if (a <= 1 || null == e) return 0;
        if (
          "angleAxis" === n &&
          null != i &&
          1e-6 >= Math.abs(Math.abs(i[1] - i[0]) - 360)
        )
          for (var o = 0; o < a; o++) {
            var l =
                o > 0
                  ? null == (d = r[o - 1])
                    ? void 0
                    : d.coordinate
                  : null == (p = r[a - 1])
                    ? void 0
                    : p.coordinate,
              u = null == (h = r[o]) ? void 0 : h.coordinate,
              c =
                o >= a - 1
                  ? null == (y = r[0])
                    ? void 0
                    : y.coordinate
                  : null == (v = r[o + 1])
                    ? void 0
                    : v.coordinate,
              s = void 0;
            if (null != l && null != u && null != c)
              if (t3(u - l) !== t3(c - u)) {
                var f,
                  d,
                  p,
                  h,
                  y,
                  v,
                  g,
                  m = [];
                if (t3(c - u) === t3(i[1] - i[0])) {
                  s = c;
                  var b = u + i[1] - i[0];
                  ((m[0] = Math.min(b, (b + l) / 2)),
                    (m[1] = Math.max(b, (b + l) / 2)));
                } else {
                  s = l;
                  var x = c + i[1] - i[0];
                  ((m[0] = Math.min(u, (x + u) / 2)),
                    (m[1] = Math.max(u, (x + u) / 2)));
                }
                var w = [Math.min(u, (s + u) / 2), Math.max(u, (s + u) / 2)];
                if ((e > w[0] && e <= w[1]) || (e >= m[0] && e <= m[1]))
                  return null == (g = r[o]) ? void 0 : g.index;
              } else {
                var O,
                  j = Math.min(l, c),
                  P = Math.max(l, c);
                if (e > (j + u) / 2 && e <= (P + u) / 2)
                  return null == (O = r[o]) ? void 0 : O.index;
              }
          }
        else if (t)
          for (var _ = 0; _ < a; _++) {
            var E = t[_];
            if (null != E) {
              var S = t[_ + 1],
                k = t[_ - 1];
              if (
                (0 === _ &&
                  null != S &&
                  e <= (E.coordinate + S.coordinate) / 2) ||
                (_ === a - 1 &&
                  null != k &&
                  e > (E.coordinate + k.coordinate) / 2) ||
                (_ > 0 &&
                  _ < a - 1 &&
                  null != k &&
                  null != S &&
                  e > (E.coordinate + k.coordinate) / 2 &&
                  e <= (E.coordinate + S.coordinate) / 2)
              )
                return E.index;
            }
          }
        return -1;
      },
      dd = (e, t) => t,
      dp = (e, t, r) => r,
      dh = (e, t, r, n) => n,
      dy = e7(f5, (e) => (0, nD.default)(e, (e) => e.coordinate)),
      dv = e7([fg, dd, dp, dh], fd),
      dg = e7([dv, fA, c4, fY], fp),
      dm = e7([fg, dd, dp, dh], fy),
      db = e7([n5, n3, iD, it, f5, dh, dm], fh),
      dx = e7([dv, db], (e, t) => {
        var r;
        return null != (r = e.coordinate) ? r : t;
      }),
      dw = e7([f5, dg], fc),
      dO = e7([dm, dg, iR, c4, dw, fv, dd], fw),
      dj = e7([dv, dg], (e, t) => ({
        isActive: e.active && null != t,
        activeIndex: t,
      })),
      dP = e7(
        [(e, t) => t, iD, am, aE, fQ, f5, dy, it],
        (e, t, r, n, i, a, o, l) => {
          if (e && t && n && i && a) {
            if ("horizontal" === t || "vertical" === t) {
              if (!e || !n || !i || !a) return;
              if (
                (function (e, t) {
                  var { relativeX: r, relativeY: n } = e;
                  return (
                    r >= t.left &&
                    r <= t.left + t.width &&
                    n >= t.top &&
                    n <= t.top + t.height
                  );
                })(e, l)
              ) {
                var u = df(
                    "horizontal" === t
                      ? e.relativeX
                      : "vertical" === t
                        ? e.relativeY
                        : void 0,
                    o,
                    a,
                    n,
                    i,
                  ),
                  c = ((e, t, r, n) => {
                    var i = t.find((e) => e && e.index === r);
                    if (i) {
                      if ("horizontal" === e)
                        return { x: i.coordinate, y: n.relativeY };
                      if ("vertical" === e)
                        return { x: n.relativeX, y: i.coordinate };
                    }
                    return { x: 0, y: 0 };
                  })(t, a, u, e);
                return { activeIndex: String(u), activeCoordinate: c };
              }
              return;
            }
            if (e && n && i && a && r) {
              var s = ((e, t) => {
                var r,
                  { relativeX: n, relativeY: i } = e,
                  { radius: a, angle: o } = ((e, t) => {
                    var { x: r, y: n } = e,
                      { cx: i, cy: a } = t,
                      o = ((e, t) => {
                        var { x: r, y: n } = e,
                          { x: i, y: a } = t;
                        return Math.sqrt((r - i) ** 2 + (n - a) ** 2);
                      })({ x: r, y: n }, { x: i, y: a });
                    if (o <= 0) return { radius: o, angle: 0 };
                    var l = Math.acos((r - i) / o);
                    return (
                      n > a && (l = 2 * Math.PI - l),
                      {
                        radius: o,
                        angle: (180 * l) / Math.PI,
                        angleInRadian: l,
                      }
                    );
                  })({ x: n, y: i }, t),
                  { innerRadius: l, outerRadius: u } = t;
                if (a < l || a > u || 0 === a) return null;
                var { startAngle: c, endAngle: s } = ((e) => {
                    var { startAngle: t, endAngle: r } = e,
                      n = Math.min(Math.floor(t / 360), Math.floor(r / 360));
                    return { startAngle: t - 360 * n, endAngle: r - 360 * n };
                  })(t),
                  f = o;
                if (c <= s) {
                  for (; f > s; ) f -= 360;
                  for (; f < c; ) f += 360;
                  r = f >= c && f <= s;
                } else {
                  for (; f > c; ) f -= 360;
                  for (; f < s; ) f += 360;
                  r = f >= s && f <= c;
                }
                return r
                  ? i7(
                      i7({}, t),
                      {},
                      {
                        radius: a,
                        angle: ((e, t) => {
                          var { startAngle: r, endAngle: n } = t;
                          return (
                            e +
                            360 *
                              Math.min(Math.floor(r / 360), Math.floor(n / 360))
                          );
                        })(f, t),
                      },
                    )
                  : null;
              })(e, r);
              if (s) {
                var f = df("centric" === t ? s.angle : s.radius, o, a, n, i),
                  d = ((e, t, r, n) => {
                    var i = t.find((e) => e && e.index === r);
                    if (i) {
                      if ("centric" === e) {
                        var a = i.coordinate,
                          { radius: o } = n;
                        return ds(
                          ds(ds({}, n), ae(n.cx, n.cy, o, a)),
                          {},
                          { angle: a, radius: o },
                        );
                      }
                      var l = i.coordinate,
                        { angle: u } = n;
                      return ds(
                        ds(ds({}, n), ae(n.cx, n.cy, l, u)),
                        {},
                        { angle: u, radius: l },
                      );
                    }
                    return {
                      angle: 0,
                      clockWise: !1,
                      cx: 0,
                      cy: 0,
                      endAngle: 0,
                      innerRadius: 0,
                      outerRadius: 0,
                      radius: 0,
                      startAngle: 0,
                      x: 0,
                      y: 0,
                    };
                  })(t, a, f, s);
                return { activeIndex: String(f), activeCoordinate: d };
              }
              return;
            }
          }
        },
      );
    function d_(e) {
      var t,
        r,
        n = e.currentTarget.getBoundingClientRect();
      if (
        "getBBox" in e.currentTarget &&
        "function" == typeof e.currentTarget.getBBox
      ) {
        var i = e.currentTarget.getBBox();
        ((t = i.width > 0 ? n.width / i.width : 1),
          (r = i.height > 0 ? n.height / i.height : 1));
      } else {
        var a = e.currentTarget;
        ((t = a.offsetWidth > 0 ? n.width / a.offsetWidth : 1),
          (r = a.offsetHeight > 0 ? n.height / a.offsetHeight : 1));
      }
      var o = (e, i) => ({
        relativeX: Math.round((e - n.left) / t),
        relativeY: Math.round((i - n.top) / r),
      });
      return "touches" in e
        ? Array.from(e.touches).map((e) => o(e.clientX, e.clientY))
        : o(e.clientX, e.clientY);
    }
    var dE = tf("mouseClick"),
      dS = tJ();
    dS.startListening({
      actionCreator: dE,
      effect: (e, t) => {
        var r = e.payload,
          n = dP(t.getState(), d_(r));
        (null == n ? void 0 : n.activeIndex) != null &&
          t.dispatch(
            ns({
              activeIndex: n.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: n.activeCoordinate,
            }),
          );
      },
    });
    var dk = tf("mouseMove"),
      dA = tJ(),
      dM = null,
      dC = null,
      dT = null;
    function dD(e, t) {
      return t instanceof HTMLElement
        ? "HTMLElement <"
            .concat(t.tagName, ' class="')
            .concat(t.className, '">')
        : t === window
          ? "global.window"
          : "children" === e && "object" == typeof t && null !== t
            ? "<<CHILDREN>>"
            : t;
    }
    function dI(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function dN(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? dI(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : dI(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    dA.startListening({
      actionCreator: dk,
      effect: (e, t) => {
        var r = e.payload,
          { throttleDelay: n, throttledEvents: i } = t.getState().eventSettings,
          a = "all" === i || (null == i ? void 0 : i.includes("mousemove"));
        (null !== dM && (cancelAnimationFrame(dM), (dM = null)),
          null === dC ||
            ("number" == typeof n && a) ||
            (clearTimeout(dC), (dC = null)),
          (dT = d_(r)));
        var o = () => {
          var e = t.getState(),
            r = fu(e, e.tooltip.settings.shared);
          if (!dT) {
            ((dM = null), (dC = null));
            return;
          }
          if ("axis" === r) {
            var n = dP(e, dT);
            (null == n ? void 0 : n.activeIndex) != null
              ? t.dispatch(
                  nc({
                    activeIndex: n.activeIndex,
                    activeDataKey: void 0,
                    activeCoordinate: n.activeCoordinate,
                  }),
                )
              : t.dispatch(nl());
          }
          ((dM = null), (dC = null));
        };
        a
          ? "raf" === n
            ? (dM = requestAnimationFrame(o))
            : "number" == typeof n && null === dC && (dC = setTimeout(o, n))
          : o();
      },
    });
    var dz = tO({
        name: "cartesianAxis",
        initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
        reducers: {
          addXAxis: {
            reducer(e, t) {
              e.xAxis[t.payload.id] = t.payload;
            },
            prepare: tv(),
          },
          replaceXAxis: {
            reducer(e, t) {
              var { prev: r, next: n } = t.payload;
              void 0 !== e.xAxis[r.id] &&
                (r.id !== n.id && delete e.xAxis[r.id], (e.xAxis[n.id] = n));
            },
            prepare: tv(),
          },
          removeXAxis: {
            reducer(e, t) {
              delete e.xAxis[t.payload.id];
            },
            prepare: tv(),
          },
          addYAxis: {
            reducer(e, t) {
              e.yAxis[t.payload.id] = t.payload;
            },
            prepare: tv(),
          },
          replaceYAxis: {
            reducer(e, t) {
              var { prev: r, next: n } = t.payload;
              void 0 !== e.yAxis[r.id] &&
                (r.id !== n.id && delete e.yAxis[r.id], (e.yAxis[n.id] = n));
            },
            prepare: tv(),
          },
          removeYAxis: {
            reducer(e, t) {
              delete e.yAxis[t.payload.id];
            },
            prepare: tv(),
          },
          addZAxis: {
            reducer(e, t) {
              e.zAxis[t.payload.id] = t.payload;
            },
            prepare: tv(),
          },
          replaceZAxis: {
            reducer(e, t) {
              var { prev: r, next: n } = t.payload;
              void 0 !== e.zAxis[r.id] &&
                (r.id !== n.id && delete e.zAxis[r.id], (e.zAxis[n.id] = n));
            },
            prepare: tv(),
          },
          removeZAxis: {
            reducer(e, t) {
              delete e.zAxis[t.payload.id];
            },
            prepare: tv(),
          },
          updateYAxisWidth(e, t) {
            var { id: r, width: n } = t.payload,
              i = e.yAxis[r];
            if (i) {
              var a,
                o = i.widthHistory || [];
              if (
                3 === o.length &&
                o[0] === o[2] &&
                n === o[1] &&
                n !== i.width &&
                1 >= Math.abs(n - (null != (a = o[0]) ? a : 0))
              )
                return;
              var l = [...o, n].slice(-3);
              e.yAxis[r] = dN(dN({}, i), {}, { width: n, widthHistory: l });
            }
          },
        },
      }),
      {
        addXAxis: dL,
        replaceXAxis: dR,
        removeXAxis: dF,
        addYAxis: dB,
        replaceYAxis: d$,
        removeYAxis: dU,
        addZAxis: dK,
        replaceZAxis: dW,
        removeZAxis: dq,
        updateYAxisWidth: dH,
      } = dz.actions,
      dV = dz.reducer,
      dY = tO({
        name: "graphicalItems",
        initialState: { cartesianItems: [], polarItems: [] },
        reducers: {
          addCartesianGraphicalItem: {
            reducer(e, t) {
              e.cartesianItems.push(t.payload);
            },
            prepare: tv(),
          },
          replaceCartesianGraphicalItem: {
            reducer(e, t) {
              var { prev: r, next: n } = t.payload,
                i = eK(e).cartesianItems.indexOf(r);
              i > -1 && (e.cartesianItems[i] = n);
            },
            prepare: tv(),
          },
          removeCartesianGraphicalItem: {
            reducer(e, t) {
              var r = eK(e).cartesianItems.indexOf(t.payload);
              r > -1 && e.cartesianItems.splice(r, 1);
            },
            prepare: tv(),
          },
          addPolarGraphicalItem: {
            reducer(e, t) {
              e.polarItems.push(t.payload);
            },
            prepare: tv(),
          },
          removePolarGraphicalItem: {
            reducer(e, t) {
              var r = eK(e).polarItems.indexOf(t.payload);
              r > -1 && e.polarItems.splice(r, 1);
            },
            prepare: tv(),
          },
          replacePolarGraphicalItem: {
            reducer(e, t) {
              var { prev: r, next: n } = t.payload,
                i = eK(e).polarItems.indexOf(r);
              i > -1 && (e.polarItems[i] = n);
            },
            prepare: tv(),
          },
        },
      }),
      {
        addCartesianGraphicalItem: dG,
        replaceCartesianGraphicalItem: dX,
        removeCartesianGraphicalItem: dZ,
        addPolarGraphicalItem: dQ,
        removePolarGraphicalItem: dJ,
        replacePolarGraphicalItem: d0,
      } = dY.actions,
      d1 = dY.reducer,
      d2 = tO({
        name: "referenceElements",
        initialState: { dots: [], areas: [], lines: [] },
        reducers: {
          addDot: (e, t) => {
            e.dots.push(t.payload);
          },
          removeDot: (e, t) => {
            var r = eK(e).dots.findIndex((e) => e === t.payload);
            -1 !== r && e.dots.splice(r, 1);
          },
          addArea: (e, t) => {
            e.areas.push(t.payload);
          },
          removeArea: (e, t) => {
            var r = eK(e).areas.findIndex((e) => e === t.payload);
            -1 !== r && e.areas.splice(r, 1);
          },
          addLine: (e, t) => {
            e.lines.push(t.payload);
          },
          removeLine: (e, t) => {
            var r = eK(e).lines.findIndex((e) => e === t.payload);
            -1 !== r && e.lines.splice(r, 1);
          },
        },
      }),
      {
        addDot: d5,
        removeDot: d3,
        addArea: d6,
        removeArea: d4,
        addLine: d8,
        removeLine: d7,
      } = d2.actions,
      d9 = d2.reducer,
      pe = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
      },
      pt = tO({
        name: "brush",
        initialState: pe,
        reducers: {
          setBrushSettings: (e, t) => (null == t.payload ? pe : t.payload),
        },
      }),
      { setBrushSettings: pr } = pt.actions,
      pn = pt.reducer,
      pi = tO({
        name: "legend",
        initialState: {
          settings: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "middle",
            itemSorter: "value",
          },
          size: { width: 0, height: 0 },
          payload: [],
        },
        reducers: {
          setLegendSize(e, t) {
            ((e.size.width = t.payload.width),
              (e.size.height = t.payload.height));
          },
          setLegendSettings(e, t) {
            ((e.settings.align = t.payload.align),
              (e.settings.layout = t.payload.layout),
              (e.settings.verticalAlign = t.payload.verticalAlign),
              (e.settings.itemSorter = t.payload.itemSorter));
          },
          addLegendPayload: {
            reducer(e, t) {
              e.payload.push(t.payload);
            },
            prepare: tv(),
          },
          replaceLegendPayload: {
            reducer(e, t) {
              var { prev: r, next: n } = t.payload,
                i = eK(e).payload.indexOf(r);
              i > -1 && (e.payload[i] = n);
            },
            prepare: tv(),
          },
          removeLegendPayload: {
            reducer(e, t) {
              var r = eK(e).payload.indexOf(t.payload);
              r > -1 && e.payload.splice(r, 1);
            },
            prepare: tv(),
          },
        },
      }),
      {
        setLegendSize: pa,
        setLegendSettings: po,
        addLegendPayload: pl,
        replaceLegendPayload: pu,
        removeLegendPayload: pc,
      } = pi.actions,
      ps = pi.reducer,
      pf = {
        accessibilityLayer: !0,
        barCategoryGap: "10%",
        barGap: 4,
        barSize: void 0,
        className: void 0,
        maxBarSize: void 0,
        stackOffset: "none",
        syncId: void 0,
        syncMethod: "index",
        baseValue: void 0,
        reverseStackOrder: !1,
      },
      pd = tO({
        name: "rootProps",
        initialState: pf,
        reducers: {
          updateOptions: (e, t) => {
            var r;
            ((e.accessibilityLayer = t.payload.accessibilityLayer),
              (e.barCategoryGap = t.payload.barCategoryGap),
              (e.barGap = null != (r = t.payload.barGap) ? r : pf.barGap),
              (e.barSize = t.payload.barSize),
              (e.maxBarSize = t.payload.maxBarSize),
              (e.stackOffset = t.payload.stackOffset),
              (e.syncId = t.payload.syncId),
              (e.syncMethod = t.payload.syncMethod),
              (e.className = t.payload.className),
              (e.baseValue = t.payload.baseValue),
              (e.reverseStackOrder = t.payload.reverseStackOrder));
          },
        },
      }),
      pp = pd.reducer,
      { updateOptions: ph } = pd.actions,
      py = tO({
        name: "polarAxis",
        initialState: { radiusAxis: {}, angleAxis: {} },
        reducers: {
          addRadiusAxis(e, t) {
            e.radiusAxis[t.payload.id] = t.payload;
          },
          removeRadiusAxis(e, t) {
            delete e.radiusAxis[t.payload.id];
          },
          addAngleAxis(e, t) {
            e.angleAxis[t.payload.id] = t.payload;
          },
          removeAngleAxis(e, t) {
            delete e.angleAxis[t.payload.id];
          },
        },
      }),
      {
        addRadiusAxis: pv,
        removeRadiusAxis: pg,
        addAngleAxis: pm,
        removeAngleAxis: pb,
      } = py.actions,
      px = py.reducer,
      pw = tO({
        name: "polarOptions",
        initialState: null,
        reducers: {
          updatePolarOptions: (e, t) =>
            null === e
              ? t.payload
              : ((e.startAngle = t.payload.startAngle),
                (e.endAngle = t.payload.endAngle),
                (e.cx = t.payload.cx),
                (e.cy = t.payload.cy),
                (e.innerRadius = t.payload.innerRadius),
                (e.outerRadius = t.payload.outerRadius),
                e),
        },
      }),
      { updatePolarOptions: pO } = pw.actions,
      pj = pw.reducer,
      pP = tf("keyDown"),
      p_ = tf("focus"),
      pE = tf("blur"),
      pS = tJ(),
      pk = null,
      pA = null,
      pM = null;
    function pC(e) {
      e.persist();
      var { currentTarget: t } = e;
      return new Proxy(e, {
        get: (e, r) => {
          if ("currentTarget" === r) return t;
          var n = Reflect.get(e, r);
          return "function" == typeof n ? n.bind(e) : n;
        },
      });
    }
    (pS.startListening({
      actionCreator: pP,
      effect: (e, t) => {
        ((pM = e.payload),
          null !== pk && (cancelAnimationFrame(pk), (pk = null)));
        var { throttleDelay: r, throttledEvents: n } =
            t.getState().eventSettings,
          i = "all" === n || n.includes("keydown");
        null === pA ||
          ("number" == typeof r && i) ||
          (clearTimeout(pA), (pA = null));
        var a = () => {
          try {
            var e,
              r = t.getState();
            if (!1 === r.rootProps.accessibilityLayer) return;
            var { keyboardInteraction: n } = r.tooltip,
              i = pM;
            if ("ArrowRight" !== i && "ArrowLeft" !== i && "Enter" !== i)
              return;
            var a = fp(n, fA(r), c4(r), fY(r)),
              o = null == a ? -1 : Number(a),
              l = !Number.isFinite(o) || o < 0,
              u = f5(r),
              c = fA(r),
              s = fu(r, r.tooltip.settings.shared);
            if ("Enter" === i) {
              if (l) return;
              var f = db(r, s, "hover", String(n.index));
              t.dispatch(
                nd({
                  active: !n.active,
                  activeIndex: n.index,
                  activeCoordinate: f,
                }),
              );
              return;
            }
            var d = fi(r),
              p = "left-to-right" === d ? 1 : -1,
              h = "ArrowRight" === i ? 1 : -1;
            if (l) {
              var y = c4(r),
                v = fY(r),
                g = (e) => ({
                  active: !1,
                  index: String(e),
                  dataKey: void 0,
                  graphicalItemId: void 0,
                  coordinate: void 0,
                });
              if (((e = -1), h * p > 0)) {
                for (var m = 0; m < c.length; m++)
                  if (null != fp(g(m), c, y, v)) {
                    e = m;
                    break;
                  }
              } else
                for (var b = c.length - 1; b >= 0; b--)
                  if (null != fp(g(b), c, y, v)) {
                    e = b;
                    break;
                  }
              if (e < 0) return;
            } else {
              e = o + h * p;
              var x = (null == u ? void 0 : u.length) || c.length;
              if (0 === x || e >= x || e < 0) return;
            }
            var w = db(r, s, "hover", String(e));
            t.dispatch(
              nd({
                active: !0,
                activeIndex: e.toString(),
                activeCoordinate: w,
              }),
            );
          } finally {
            ((pk = null), (pA = null));
          }
        };
        i
          ? "raf" === r
            ? (pk = requestAnimationFrame(a))
            : "number" == typeof r &&
              null === pA &&
              (a(),
              (pM = null),
              (pA = setTimeout(() => {
                pM ? a() : ((pA = null), (pk = null));
              }, r)))
          : a();
      },
    }),
      pS.startListening({
        actionCreator: p_,
        effect: (e, t) => {
          var r = t.getState();
          if (!1 !== r.rootProps.accessibilityLayer) {
            var { keyboardInteraction: n } = r.tooltip;
            if (!n.active && null == n.index) {
              var i = fu(r, r.tooltip.settings.shared),
                a = db(r, i, "hover", String("0"));
              t.dispatch(
                nd({ active: !0, activeIndex: "0", activeCoordinate: a }),
              );
            }
          }
        },
      }),
      pS.startListening({
        actionCreator: pE,
        effect: (e, t) => {
          var r = t.getState();
          if (!1 !== r.rootProps.accessibilityLayer) {
            var { keyboardInteraction: n } = r.tooltip;
            n.active &&
              t.dispatch(
                nd({
                  active: !1,
                  activeIndex: n.index,
                  activeCoordinate: n.coordinate,
                }),
              );
          }
        },
      }));
    var pT = tf("externalEvent"),
      pD = tJ(),
      pI = new Map(),
      pN = new Map(),
      pz = new Map();
    pD.startListening({
      actionCreator: pT,
      effect: (e, t) => {
        var { handler: r, reactEvent: n } = e.payload;
        if (null != r) {
          var i = n.type,
            a = pC(n);
          pz.set(i, { handler: r, reactEvent: a });
          var o = pI.get(i);
          void 0 !== o && (cancelAnimationFrame(o), pI.delete(i));
          var { throttleDelay: l, throttledEvents: u } =
              t.getState().eventSettings,
            c = "all" === u || (null == u ? void 0 : u.includes(i)),
            s = pN.get(i);
          void 0 === s ||
            ("number" == typeof l && c) ||
            (clearTimeout(s), pN.delete(i));
          var f = () => {
            var e = pz.get(i);
            try {
              if (!e) return;
              var { handler: r, reactEvent: n } = e,
                a = t.getState(),
                o = {
                  activeCoordinate: di(a),
                  activeDataKey: de(a),
                  activeIndex: f7(a),
                  activeLabel: f9(a),
                  activeTooltipIndex: f7(a),
                  isTooltipActive: da(a),
                };
              r && r(o, n);
            } finally {
              (pI.delete(i), pN.delete(i), pz.delete(i));
            }
          };
          if (!c) return void f();
          if ("raf" === l) {
            var d = requestAnimationFrame(f);
            pI.set(i, d);
          } else if ("number" == typeof l) {
            if (!pN.has(i)) {
              f();
              var p = setTimeout(f, l);
              pN.set(i, p);
            }
          } else f();
        }
      },
    });
    var pL = e7([fg], (e) => e.tooltipItemPayloads),
      pR = e7([pL, (e, t) => t, (e, t, r) => r], (e, t, r) => {
        if (null != t) {
          var n = e.find((e) => e.settings.graphicalItemId === r);
          if (null != n) {
            var { getPosition: i } = n;
            if (null != i) return i(t);
          }
        }
      }),
      pF = tf("touchMove"),
      pB = tJ(),
      p$ = null,
      pU = null,
      pK = null,
      pW = null;
    pB.startListening({
      actionCreator: pF,
      effect: (e, t) => {
        var r = e.payload;
        if (null != r.touches && 0 !== r.touches.length) {
          pW = pC(r);
          var { throttleDelay: n, throttledEvents: i } =
              t.getState().eventSettings,
            a = "all" === i || i.includes("touchmove");
          (null !== p$ && (cancelAnimationFrame(p$), (p$ = null)),
            null === pU ||
              ("number" == typeof n && a) ||
              (clearTimeout(pU), (pU = null)),
            (pK = Array.from(r.touches).map((e) =>
              d_({
                clientX: e.clientX,
                clientY: e.clientY,
                currentTarget: r.currentTarget,
              }),
            )));
          var o = () => {
            if (null != pW) {
              var e = t.getState(),
                r = fu(e, e.tooltip.settings.shared);
              if ("axis" === r) {
                var n,
                  i = null == (n = pK) ? void 0 : n[0];
                if (null == i) {
                  ((p$ = null), (pU = null));
                  return;
                }
                var a = dP(e, i);
                (null == a ? void 0 : a.activeIndex) != null &&
                  t.dispatch(
                    nc({
                      activeIndex: a.activeIndex,
                      activeDataKey: void 0,
                      activeCoordinate: a.activeCoordinate,
                    }),
                  );
              } else if ("item" === r) {
                var o,
                  l = pW.touches[0];
                if (null == document.elementFromPoint || null == l) return;
                var u = document.elementFromPoint(l.clientX, l.clientY);
                if (!u || !u.getAttribute) return;
                var c = u.getAttribute("data-recharts-item-index"),
                  s =
                    null != (o = u.getAttribute("data-recharts-item-id"))
                      ? o
                      : void 0,
                  f = f_(e).find((e) => e.id === s);
                if (null == c || null == f || null == s) return;
                var { dataKey: d } = f,
                  p = pR(e, c, s);
                t.dispatch(
                  na({
                    activeDataKey: d,
                    activeIndex: c,
                    activeCoordinate: p,
                    activeGraphicalItemId: s,
                  }),
                );
              }
              ((p$ = null), (pU = null));
            }
          };
          if (!a) return void o();
          "raf" === n
            ? (p$ = requestAnimationFrame(o))
            : "number" == typeof n &&
              null === pU &&
              (o(),
              (pW = null),
              (pU = setTimeout(() => {
                pW ? o() : ((pU = null), (p$ = null));
              }, n)));
        }
      },
    });
    var pq = tO({
        name: "errorBars",
        initialState: {},
        reducers: {
          addErrorBar: (e, t) => {
            var { itemId: r, errorBar: n } = t.payload;
            (e[r] || (e[r] = []), e[r].push(n));
          },
          replaceErrorBar: (e, t) => {
            var { itemId: r, prev: n, next: i } = t.payload;
            e[r] &&
              (e[r] = e[r].map((e) =>
                e.dataKey === n.dataKey && e.direction === n.direction ? i : e,
              ));
          },
          removeErrorBar: (e, t) => {
            var { itemId: r, errorBar: n } = t.payload;
            e[r] &&
              (e[r] = e[r].filter(
                (e) => e.dataKey !== n.dataKey || e.direction !== n.direction,
              ));
          },
        },
      }),
      { addErrorBar: pH, replaceErrorBar: pV, removeErrorBar: pY } = pq.actions,
      pG = pq.reducer,
      pX = {
        devToolsEnabled: !0,
        isSsr: !(
          "u" > typeof window &&
          window.document &&
          window.document.createElement &&
          window.setTimeout
        ),
      };
    function pZ(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function pQ(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? pZ(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : pZ(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var pJ = {
        zIndexMap: Object.values(at).reduce(
          (e, t) =>
            pQ(
              pQ({}, e),
              {},
              {
                [t]: { element: void 0, panoramaElement: void 0, consumers: 0 },
              },
            ),
          {},
        ),
      },
      p0 = new Set(Object.values(at)),
      p1 = tO({
        name: "zIndex",
        initialState: pJ,
        reducers: {
          registerZIndexPortal: {
            reducer: (e, t) => {
              var { zIndex: r } = t.payload;
              e.zIndexMap[r]
                ? (e.zIndexMap[r].consumers += 1)
                : (e.zIndexMap[r] = {
                    consumers: 1,
                    element: void 0,
                    panoramaElement: void 0,
                  });
            },
            prepare: tv(),
          },
          unregisterZIndexPortal: {
            reducer: (e, t) => {
              var { zIndex: r } = t.payload;
              e.zIndexMap[r] &&
                ((e.zIndexMap[r].consumers -= 1),
                e.zIndexMap[r].consumers <= 0 &&
                  !p0.has(r) &&
                  delete e.zIndexMap[r]);
            },
            prepare: tv(),
          },
          registerZIndexPortalElement: {
            reducer: (e, t) => {
              var { zIndex: r, element: n, isPanorama: i } = t.payload;
              e.zIndexMap[r]
                ? i
                  ? (e.zIndexMap[r].panoramaElement = n)
                  : (e.zIndexMap[r].element = n)
                : (e.zIndexMap[r] = {
                    consumers: 0,
                    element: i ? void 0 : n,
                    panoramaElement: i ? n : void 0,
                  });
            },
            prepare: tv(),
          },
          unregisterZIndexPortalElement: {
            reducer: (e, t) => {
              var { zIndex: r } = t.payload;
              e.zIndexMap[r] &&
                (t.payload.isPanorama
                  ? (e.zIndexMap[r].panoramaElement = void 0)
                  : (e.zIndexMap[r].element = void 0));
            },
            prepare: tv(),
          },
        },
      }),
      {
        registerZIndexPortal: p2,
        unregisterZIndexPortal: p5,
        registerZIndexPortalElement: p3,
        unregisterZIndexPortalElement: p6,
      } = p1.actions,
      p4 = p1.reducer,
      p8 = {
        throttleDelay: "raf",
        throttledEvents: [
          "mousemove",
          "touchmove",
          "pointermove",
          "scroll",
          "wheel",
        ],
      },
      p7 = tO({
        name: "eventSettings",
        initialState: p8,
        reducers: {
          setEventSettings: (e, t) => {
            (null != t.payload.throttleDelay &&
              (e.throttleDelay = t.payload.throttleDelay),
              null != t.payload.throttledEvents &&
                (e.throttledEvents = t.payload.throttledEvents));
          },
        },
      }),
      { setEventSettings: p9 } = p7.actions,
      he = p7.reducer,
      ht = tO({
        name: "renderedTicks",
        initialState: { xAxis: {}, yAxis: {} },
        reducers: {
          setRenderedTicks: (e, t) => {
            var { axisType: r, axisId: n, ticks: i } = t.payload;
            e[r][n] = i;
          },
          removeRenderedTicks: (e, t) => {
            var { axisType: r, axisId: n } = t.payload;
            delete e[r][n];
          },
        },
      }),
      { setRenderedTicks: hr, removeRenderedTicks: hn } = ht.actions,
      hi = ta({
        brush: pn,
        cartesianAxis: dV,
        chartData: nm,
        errorBars: pG,
        eventSettings: he,
        graphicalItems: d1,
        layout: nP,
        legend: ps,
        options: rs,
        polarAxis: px,
        polarOptions: pj,
        referenceElements: d9,
        renderedTicks: ht.reducer,
        rootProps: pp,
        tooltip: np,
        zIndex: p4,
      }),
      ha = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "Chart";
        return (function (e) {
          let t,
            r,
            n,
            i = function (e) {
              let {
                  thunk: t = !0,
                  immutableCheck: r = !0,
                  serializableCheck: n = !0,
                  actionCreatorCheck: i = !0,
                } = e ?? {},
                a = new td();
              return (
                t &&
                  ("boolean" == typeof t
                    ? a.push(tc)
                    : a.push(tu(t.extraArgument))),
                a
              );
            },
            {
              reducer: a,
              middleware: o,
              devTools: l = !0,
              duplicateMiddlewareCheck: u = !0,
              preloadedState: c,
              enhancers: s,
            } = e || {};
          if ("function" == typeof a) t = a;
          else if (ti(a)) t = ta(a);
          else throw Error(t0(1));
          r = "function" == typeof o ? o(i) : i();
          let f = to;
          l && (f = ts({ trace: !1, ...("object" == typeof l && l) }));
          let d =
            ((n = (function (...e) {
              return (t) => (r, n) => {
                let i = t(r, n),
                  a = () => {
                    throw Error(te(15));
                  },
                  o = {
                    getState: i.getState,
                    dispatch: (e, ...t) => a(e, ...t),
                  };
                return (
                  (a = to(...e.map((e) => e(o)))(i.dispatch)),
                  { ...i, dispatch: a }
                );
              };
            })(...r)),
            function (e) {
              let { autoBatch: t = !0 } = e ?? {},
                r = new td(n);
              return (t && r.push(tm("object" == typeof t ? t : void 0)), r);
            });
          return (function e(t, r, n) {
            if ("function" != typeof t) throw Error(te(2));
            if (
              ("function" == typeof r && "function" == typeof n) ||
              ("function" == typeof n && "function" == typeof arguments[3])
            )
              throw Error(te(0));
            if (
              ("function" == typeof r &&
                void 0 === n &&
                ((n = r), (r = void 0)),
              void 0 !== n)
            ) {
              if ("function" != typeof n) throw Error(te(1));
              return n(e)(t, r);
            }
            let i = t,
              a = r,
              o = new Map(),
              l = o,
              u = 0,
              c = !1;
            function s() {
              l === o &&
                ((l = new Map()),
                o.forEach((e, t) => {
                  l.set(t, e);
                }));
            }
            function f() {
              if (c) throw Error(te(3));
              return a;
            }
            function d(e) {
              if ("function" != typeof e) throw Error(te(4));
              if (c) throw Error(te(5));
              let t = !0;
              s();
              let r = u++;
              return (
                l.set(r, e),
                function () {
                  if (t) {
                    if (c) throw Error(te(6));
                    ((t = !1), s(), l.delete(r), (o = null));
                  }
                }
              );
            }
            function p(e) {
              if (!ti(e)) throw Error(te(7));
              if (void 0 === e.type) throw Error(te(8));
              if ("string" != typeof e.type) throw Error(te(17));
              if (c) throw Error(te(9));
              try {
                ((c = !0), (a = i(a, e)));
              } finally {
                c = !1;
              }
              return (
                (o = l).forEach((e) => {
                  e();
                }),
                e
              );
            }
            return (
              p({ type: tn.INIT }),
              {
                dispatch: p,
                subscribe: d,
                getState: f,
                replaceReducer: function (e) {
                  if ("function" != typeof e) throw Error(te(10));
                  ((i = e), p({ type: tn.REPLACE }));
                },
                [tt]: function () {
                  return {
                    subscribe(e) {
                      if ("object" != typeof e || null === e)
                        throw Error(te(11));
                      function t() {
                        e.next && e.next(f());
                      }
                      return (t(), { unsubscribe: d(t) });
                    },
                    [tt]() {
                      return this;
                    },
                  };
                },
              }
            );
          })(t, c, f(...("function" == typeof s ? s(d) : d())));
        })({
          reducer: hi,
          preloadedState: e,
          middleware: (e) =>
            e({
              serializableCheck: !1,
              immutableCheck: !["commonjs", "es6", "production"].includes(
                "es6",
              ),
            }).concat([
              dS.middleware,
              dA.middleware,
              pS.middleware,
              pD.middleware,
              pB.middleware,
            ]),
          enhancers: (e) => {
            var t = e;
            return (
              "function" == typeof e && (t = e()),
              t.concat(tm({ type: "raf" }))
            );
          },
          devTools: pX.devToolsEnabled && {
            serialize: { replacer: dD },
            name: "recharts-".concat(t),
          },
        });
      };
    function ho(e) {
      var { preloadedState: t, children: r, reduxStoreName: n } = e,
        i = io(),
        a = (0, R.useRef)(null);
      return i
        ? r
        : (null == a.current && (a.current = ha(t, n)),
          R.createElement(rx, { context: nE, store: a.current }, r));
    }
    var hl = (e) => {
        var { chartData: t } = e,
          r = nk(),
          n = io();
        return (
          (0, R.useEffect)(
            () =>
              n
                ? () => {}
                : (r(ny(t)),
                  () => {
                    r(ny(void 0));
                  }),
            [t, r, n],
          ),
          null
        );
      },
      hu = new Set([
        "axisLine",
        "tickLine",
        "activeBar",
        "activeDot",
        "activeLabel",
        "activeShape",
        "allowEscapeViewBox",
        "background",
        "cursor",
        "dot",
        "label",
        "line",
        "margin",
        "padding",
        "position",
        "shape",
        "style",
        "tick",
        "wrapperStyle",
        "radius",
        "throttledEvents",
      ]);
    function hc(e, t) {
      for (var r of new Set([...Object.keys(e), ...Object.keys(t)]))
        if (hu.has(r)) {
          if (null == e[r] && null == t[r]) continue;
          if (
            !(function (e, t) {
              if (rv(e, t)) return !0;
              if (
                "object" != typeof e ||
                null === e ||
                "object" != typeof t ||
                null === t
              )
                return !1;
              let r = Object.keys(e),
                n = Object.keys(t);
              if (r.length !== n.length) return !1;
              for (let n = 0; n < r.length; n++)
                if (
                  !Object.prototype.hasOwnProperty.call(t, r[n]) ||
                  !rv(e[r[n]], t[r[n]])
                )
                  return !1;
              return !0;
            })(e[r], t[r])
          )
            return !1;
        } else {
          var n, i;
          if (
            ((n = e[r]),
            (i = t[r]),
            (null != n || null != i) &&
              ("number" == typeof n && "number" == typeof i
                ? n !== i && (n == n || i == i)
                : n !== i))
          )
            return !1;
        }
      return !0;
    }
    var hs = (0, R.memo)(function (e) {
      var { layout: t, margin: r } = e,
        n = nk(),
        i = io();
      return (
        (0, R.useEffect)(() => {
          i || (n(nw(t)), n(nx(r)));
        }, [n, i, t, r]),
        null
      );
    }, hc);
    function hf(e) {
      var t = nk();
      return (
        (0, R.useEffect)(() => {
          t(ph(e));
        }, [t, e]),
        null
      );
    }
    var hd = (0, R.memo)((e) => {
        var t = nk();
        return (
          (0, R.useEffect)(() => {
            t(p9(e));
          }, [t, e]),
          null
        );
      }, hc),
      hp = () => {
        var e;
        return null == (e = nT((e) => e.rootProps.accessibilityLayer)) || e;
      },
      hh = [
        "dangerouslySetInnerHTML",
        "onCopy",
        "onCopyCapture",
        "onCut",
        "onCutCapture",
        "onPaste",
        "onPasteCapture",
        "onCompositionEnd",
        "onCompositionEndCapture",
        "onCompositionStart",
        "onCompositionStartCapture",
        "onCompositionUpdate",
        "onCompositionUpdateCapture",
        "onFocus",
        "onFocusCapture",
        "onBlur",
        "onBlurCapture",
        "onChange",
        "onChangeCapture",
        "onBeforeInput",
        "onBeforeInputCapture",
        "onInput",
        "onInputCapture",
        "onReset",
        "onResetCapture",
        "onSubmit",
        "onSubmitCapture",
        "onInvalid",
        "onInvalidCapture",
        "onLoad",
        "onLoadCapture",
        "onError",
        "onErrorCapture",
        "onKeyDown",
        "onKeyDownCapture",
        "onKeyPress",
        "onKeyPressCapture",
        "onKeyUp",
        "onKeyUpCapture",
        "onAbort",
        "onAbortCapture",
        "onCanPlay",
        "onCanPlayCapture",
        "onCanPlayThrough",
        "onCanPlayThroughCapture",
        "onDurationChange",
        "onDurationChangeCapture",
        "onEmptied",
        "onEmptiedCapture",
        "onEncrypted",
        "onEncryptedCapture",
        "onEnded",
        "onEndedCapture",
        "onLoadedData",
        "onLoadedDataCapture",
        "onLoadedMetadata",
        "onLoadedMetadataCapture",
        "onLoadStart",
        "onLoadStartCapture",
        "onPause",
        "onPauseCapture",
        "onPlay",
        "onPlayCapture",
        "onPlaying",
        "onPlayingCapture",
        "onProgress",
        "onProgressCapture",
        "onRateChange",
        "onRateChangeCapture",
        "onSeeked",
        "onSeekedCapture",
        "onSeeking",
        "onSeekingCapture",
        "onStalled",
        "onStalledCapture",
        "onSuspend",
        "onSuspendCapture",
        "onTimeUpdate",
        "onTimeUpdateCapture",
        "onVolumeChange",
        "onVolumeChangeCapture",
        "onWaiting",
        "onWaitingCapture",
        "onAuxClick",
        "onAuxClickCapture",
        "onClick",
        "onClickCapture",
        "onContextMenu",
        "onContextMenuCapture",
        "onDoubleClick",
        "onDoubleClickCapture",
        "onDrag",
        "onDragCapture",
        "onDragEnd",
        "onDragEndCapture",
        "onDragEnter",
        "onDragEnterCapture",
        "onDragExit",
        "onDragExitCapture",
        "onDragLeave",
        "onDragLeaveCapture",
        "onDragOver",
        "onDragOverCapture",
        "onDragStart",
        "onDragStartCapture",
        "onDrop",
        "onDropCapture",
        "onMouseDown",
        "onMouseDownCapture",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseMove",
        "onMouseMoveCapture",
        "onMouseOut",
        "onMouseOutCapture",
        "onMouseOver",
        "onMouseOverCapture",
        "onMouseUp",
        "onMouseUpCapture",
        "onSelect",
        "onSelectCapture",
        "onTouchCancel",
        "onTouchCancelCapture",
        "onTouchEnd",
        "onTouchEndCapture",
        "onTouchMove",
        "onTouchMoveCapture",
        "onTouchStart",
        "onTouchStartCapture",
        "onPointerDown",
        "onPointerDownCapture",
        "onPointerMove",
        "onPointerMoveCapture",
        "onPointerUp",
        "onPointerUpCapture",
        "onPointerCancel",
        "onPointerCancelCapture",
        "onPointerEnter",
        "onPointerEnterCapture",
        "onPointerLeave",
        "onPointerLeaveCapture",
        "onPointerOver",
        "onPointerOverCapture",
        "onPointerOut",
        "onPointerOutCapture",
        "onGotPointerCapture",
        "onGotPointerCaptureCapture",
        "onLostPointerCapture",
        "onLostPointerCaptureCapture",
        "onScroll",
        "onScrollCapture",
        "onWheel",
        "onWheelCapture",
        "onAnimationStart",
        "onAnimationStartCapture",
        "onAnimationEnd",
        "onAnimationEndCapture",
        "onAnimationIteration",
        "onAnimationIterationCapture",
        "onTransitionEnd",
        "onTransitionEndCapture",
      ];
    function hy(e) {
      return "string" == typeof e && hh.includes(e);
    }
    var hv = new Set([
      "aria-activedescendant",
      "aria-atomic",
      "aria-autocomplete",
      "aria-busy",
      "aria-checked",
      "aria-colcount",
      "aria-colindex",
      "aria-colspan",
      "aria-controls",
      "aria-current",
      "aria-describedby",
      "aria-details",
      "aria-disabled",
      "aria-errormessage",
      "aria-expanded",
      "aria-flowto",
      "aria-haspopup",
      "aria-hidden",
      "aria-invalid",
      "aria-keyshortcuts",
      "aria-label",
      "aria-labelledby",
      "aria-level",
      "aria-live",
      "aria-modal",
      "aria-multiline",
      "aria-multiselectable",
      "aria-orientation",
      "aria-owns",
      "aria-placeholder",
      "aria-posinset",
      "aria-pressed",
      "aria-readonly",
      "aria-relevant",
      "aria-required",
      "aria-roledescription",
      "aria-rowcount",
      "aria-rowindex",
      "aria-rowspan",
      "aria-selected",
      "aria-setsize",
      "aria-sort",
      "aria-valuemax",
      "aria-valuemin",
      "aria-valuenow",
      "aria-valuetext",
      "className",
      "color",
      "height",
      "id",
      "lang",
      "max",
      "media",
      "method",
      "min",
      "name",
      "style",
      "target",
      "width",
      "role",
      "tabIndex",
      "accentHeight",
      "accumulate",
      "additive",
      "alignmentBaseline",
      "allowReorder",
      "alphabetic",
      "amplitude",
      "arabicForm",
      "ascent",
      "attributeName",
      "attributeType",
      "autoReverse",
      "azimuth",
      "baseFrequency",
      "baselineShift",
      "baseProfile",
      "bbox",
      "begin",
      "bias",
      "by",
      "calcMode",
      "capHeight",
      "clip",
      "clipPath",
      "clipPathUnits",
      "clipRule",
      "colorInterpolation",
      "colorInterpolationFilters",
      "colorProfile",
      "colorRendering",
      "contentScriptType",
      "contentStyleType",
      "cursor",
      "cx",
      "cy",
      "d",
      "decelerate",
      "descent",
      "diffuseConstant",
      "direction",
      "display",
      "divisor",
      "dominantBaseline",
      "dur",
      "dx",
      "dy",
      "edgeMode",
      "elevation",
      "enableBackground",
      "end",
      "exponent",
      "externalResourcesRequired",
      "fill",
      "fillOpacity",
      "fillRule",
      "filter",
      "filterRes",
      "filterUnits",
      "floodColor",
      "floodOpacity",
      "focusable",
      "fontFamily",
      "fontSize",
      "fontSizeAdjust",
      "fontStretch",
      "fontStyle",
      "fontVariant",
      "fontWeight",
      "format",
      "from",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyphName",
      "glyphOrientationHorizontal",
      "glyphOrientationVertical",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "hanging",
      "horizAdvX",
      "horizOriginX",
      "href",
      "ideographic",
      "imageRendering",
      "in2",
      "in",
      "intercept",
      "k1",
      "k2",
      "k3",
      "k4",
      "k",
      "kernelMatrix",
      "kernelUnitLength",
      "kerning",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "letterSpacing",
      "lightingColor",
      "limitingConeAngle",
      "local",
      "markerEnd",
      "markerHeight",
      "markerMid",
      "markerStart",
      "markerUnits",
      "markerWidth",
      "mask",
      "maskContentUnits",
      "maskUnits",
      "mathematical",
      "mode",
      "numOctaves",
      "offset",
      "opacity",
      "operator",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "overlinePosition",
      "overlineThickness",
      "paintOrder",
      "panose1",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointerEvents",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "r",
      "radius",
      "refX",
      "refY",
      "renderingIntent",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "restart",
      "result",
      "rotate",
      "rx",
      "ry",
      "seed",
      "shapeRendering",
      "slope",
      "spacing",
      "specularConstant",
      "specularExponent",
      "speed",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stemh",
      "stemv",
      "stitchTiles",
      "stopColor",
      "stopOpacity",
      "strikethroughPosition",
      "strikethroughThickness",
      "string",
      "stroke",
      "strokeDasharray",
      "strokeDashoffset",
      "strokeLinecap",
      "strokeLinejoin",
      "strokeMiterlimit",
      "strokeOpacity",
      "strokeWidth",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textAnchor",
      "textDecoration",
      "textLength",
      "textRendering",
      "to",
      "transform",
      "u1",
      "u2",
      "underlinePosition",
      "underlineThickness",
      "unicode",
      "unicodeBidi",
      "unicodeRange",
      "unitsPerEm",
      "vAlphabetic",
      "values",
      "vectorEffect",
      "version",
      "vertAdvY",
      "vertOriginX",
      "vertOriginY",
      "vHanging",
      "vIdeographic",
      "viewTarget",
      "visibility",
      "vMathematical",
      "widths",
      "wordSpacing",
      "writingMode",
      "x1",
      "x2",
      "x",
      "xChannelSelector",
      "xHeight",
      "xlinkActuate",
      "xlinkArcrole",
      "xlinkHref",
      "xlinkRole",
      "xlinkShow",
      "xlinkTitle",
      "xlinkType",
      "xmlBase",
      "xmlLang",
      "xmlns",
      "xmlnsXlink",
      "xmlSpace",
      "y1",
      "y2",
      "y",
      "yChannelSelector",
      "z",
      "zoomAndPan",
      "ref",
      "key",
      "angle",
    ]);
    function hg(e) {
      return "string" == typeof e && hv.has(e);
    }
    function hm(e) {
      return "string" == typeof e && e.startsWith("data-");
    }
    function hb(e) {
      if ("object" != typeof e || null === e) return {};
      var t = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          (hg(r) || hm(r)) &&
          (t[r] = e[r]);
      return t;
    }
    function hx(e) {
      return null == e
        ? null
        : (0, R.isValidElement)(e) &&
            "object" == typeof e.props &&
            null !== e.props
          ? hb(e.props)
          : "object" != typeof e || Array.isArray(e)
            ? null
            : hb(e);
    }
    function hw(e) {
      var t = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          (hg(r) || hm(r) || hy(r)) &&
          (t[r] = e[r]);
      return t;
    }
    var hO = [
      "children",
      "width",
      "height",
      "viewBox",
      "className",
      "style",
      "title",
      "desc",
    ];
    function hj() {
      return (hj = Object.assign.bind()).apply(null, arguments);
    }
    var hP = (0, R.forwardRef)((e, t) => {
        var {
            children: r,
            width: n,
            height: i,
            viewBox: a,
            className: o,
            style: l,
            title: u,
            desc: c,
          } = e,
          s = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                ((r = a[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]));
            }
            return i;
          })(e, hO),
          f = a || { width: n, height: i, x: 0, y: 0 },
          d = ic("recharts-surface", o);
        return R.createElement(
          "svg",
          hj({}, hw(s), {
            className: d,
            width: n,
            height: i,
            style: l,
            viewBox: ""
              .concat(f.x, " ")
              .concat(f.y, " ")
              .concat(f.width, " ")
              .concat(f.height),
            ref: t,
          }),
          R.createElement("title", null, u),
          R.createElement("desc", null, c),
          r,
        );
      }),
      h_ = e7(
        (e) => e.zIndex.zIndexMap,
        (e, t) => t,
        (e, t, r) => r,
        (e, t, r) => {
          if (null != t) {
            var n = e[t];
            if (null != n) return r ? n.panoramaElement : n.element;
          }
        },
      ),
      hE = e7(
        (e) => e.zIndex.zIndexMap,
        (e) =>
          Array.from(
            new Set(
              Object.keys(e)
                .map((e) => parseInt(e, 10))
                .concat(Object.values(at)),
            ),
          ).sort((e, t) => e - t),
        {
          memoizeOptions: {
            resultEqualityCheck: function (e, t) {
              if (e.length === t.length) {
                for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
                return !0;
              }
              return !1;
            },
          },
        },
      );
    function hS(e) {
      var { zIndex: t, isPanorama: r } = e,
        n = (0, R.useRef)(null),
        i = nk();
      return (
        (0, R.useLayoutEffect)(
          () => (
            n.current &&
              i(p3({ zIndex: t, element: n.current, isPanorama: r })),
            () => {
              i(p6({ zIndex: t, isPanorama: r }));
            }
          ),
          [i, t, r],
        ),
        R.createElement("g", {
          tabIndex: -1,
          ref: n,
          className: "recharts-zIndex-layer_".concat(t),
        })
      );
    }
    function hk(e) {
      var { children: t, isPanorama: r } = e,
        n = nT(hE);
      if (!n || 0 === n.length) return t;
      var i = n.filter((e) => e < 0),
        a = n.filter((e) => e > 0);
      return R.createElement(
        R.Fragment,
        null,
        i.map((e) => R.createElement(hS, { key: e, zIndex: e, isPanorama: r })),
        t,
        a.map((e) => R.createElement(hS, { key: e, zIndex: e, isPanorama: r })),
      );
    }
    var hA = ["children"];
    function hM() {
      return (hM = Object.assign.bind()).apply(null, arguments);
    }
    var hC = { width: "100%", height: "100%", display: "block" },
      hT = (0, R.forwardRef)((e, t) => {
        var r,
          n,
          i = nT(n5),
          a = nT(n3),
          o = hp();
        if (!nK(i) || !nK(a)) return null;
        var { children: l, otherAttributes: u, title: c, desc: s } = e;
        return (
          null != u &&
            ((r = "number" == typeof u.tabIndex ? u.tabIndex : o ? 0 : void 0),
            (n =
              "string" == typeof u.role ? u.role : o ? "application" : void 0)),
          R.createElement(
            hP,
            hM({}, u, {
              title: c,
              desc: s,
              role: n,
              tabIndex: r,
              width: i,
              height: a,
              style: hC,
              ref: t,
            }),
            l,
          )
        );
      }),
      hD = (e) => {
        var { children: t } = e,
          r = nT(iu);
        if (!r) return null;
        var { width: n, height: i, y: a, x: o } = r;
        return R.createElement(hP, { width: n, height: i, x: o, y: a }, t);
      },
      hI = (0, R.forwardRef)((e, t) => {
        var { children: r } = e,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                ((r = a[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]));
            }
            return i;
          })(e, hA);
        return io()
          ? R.createElement(
              hD,
              null,
              R.createElement(hk, { isPanorama: !0 }, r),
            )
          : R.createElement(
              hT,
              hM({ ref: t }, n),
              R.createElement(hk, { isPanorama: !1 }, r),
            );
      }),
      hN = new (e.i(478492).default)(),
      hz = "recharts.syncEvent.tooltip",
      hL = "recharts.syncEvent.brush";
    function hR(e) {
      return e.tooltip.syncInteraction;
    }
    var hF = ["x", "y"];
    function hB(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function h$(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? hB(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : hB(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var hU = (0, R.createContext)(null),
      hK = (0, R.createContext)(null);
    function hW(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function hq() {
      return (hq = Object.assign.bind()).apply(null, arguments);
    }
    var hH = () => {
      var e, t, r, n, i, a, o, l, u, c, s, f;
      return (
        (e = nk()),
        (0, R.useEffect)(() => {
          e(rf());
        }, [e]),
        (t = nT(i3)),
        (r = nT(i4)),
        (n = nk()),
        (i = nT(i6)),
        (a = nT(f5)),
        (o = nT(iD)),
        (l = iM()),
        (u = nT((e) => e.rootProps.className)),
        (0, R.useEffect)(() => {
          if (null == t) return rl;
          var e = (e, u, c) => {
            if (r !== c && t === e) {
              if (!1 === u.payload.active)
                return void n(
                  nf({
                    active: !1,
                    coordinate: void 0,
                    dataKey: void 0,
                    index: null,
                    label: void 0,
                    sourceViewBox: void 0,
                    graphicalItemId: void 0,
                  }),
                );
              if ("index" === i) {
                if (
                  l &&
                  null != u &&
                  null != (s = u.payload) &&
                  s.coordinate &&
                  u.payload.sourceViewBox
                ) {
                  var s,
                    f,
                    d = u.payload.coordinate,
                    { x: p, y: h } = d,
                    y = (function (e, t) {
                      if (null == e) return {};
                      var r,
                        n,
                        i = (function (e, t) {
                          if (null == e) return {};
                          var r = {};
                          for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                              if (-1 !== t.indexOf(n)) continue;
                              r[n] = e[n];
                            }
                          return r;
                        })(e, t);
                      if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < a.length; n++)
                          ((r = a[n]),
                            -1 === t.indexOf(r) &&
                              {}.propertyIsEnumerable.call(e, r) &&
                              (i[r] = e[r]));
                      }
                      return i;
                    })(d, hF),
                    {
                      x: v,
                      y: g,
                      width: m,
                      height: b,
                    } = u.payload.sourceViewBox,
                    x = h$(
                      h$({}, y),
                      {},
                      {
                        x: l.x + (m ? (p - v) / m : 0) * l.width,
                        y: l.y + (b ? (h - g) / b : 0) * l.height,
                      },
                    );
                  n(
                    h$(
                      h$({}, u),
                      {},
                      { payload: h$(h$({}, u.payload), {}, { coordinate: x }) },
                    ),
                  );
                } else n(u);
                return;
              }
              if (null != a) {
                if ("function" == typeof i) {
                  var w = i(a, {
                    activeTooltipIndex:
                      null == u.payload.index
                        ? void 0
                        : Number(u.payload.index),
                    isTooltipActive: u.payload.active,
                    activeIndex:
                      null == u.payload.index
                        ? void 0
                        : Number(u.payload.index),
                    activeLabel: u.payload.label,
                    activeDataKey: u.payload.dataKey,
                    activeCoordinate: u.payload.coordinate,
                  });
                  f = a[w];
                } else
                  "value" === i &&
                    (f = a.find((e) => String(e.value) === u.payload.label));
                var { coordinate: O } = u.payload;
                if (null == O || null == l)
                  return void n(
                    nf({
                      active: !1,
                      coordinate: void 0,
                      dataKey: void 0,
                      index: null,
                      label: void 0,
                      sourceViewBox: void 0,
                      graphicalItemId: void 0,
                    }),
                  );
                if (null == f)
                  return void n(
                    nf({
                      active: !1,
                      coordinate: void 0,
                      dataKey: void 0,
                      index: null,
                      label: void 0,
                      sourceViewBox: u.payload.sourceViewBox,
                      graphicalItemId: void 0,
                    }),
                  );
                var { x: j, y: P } = O,
                  _ = Math.min(j, l.x + l.width),
                  E = Math.min(P, l.y + l.height),
                  S = {
                    x: "horizontal" === o ? f.coordinate : _,
                    y: "horizontal" === o ? E : f.coordinate,
                  };
                n(
                  nf({
                    active: u.payload.active,
                    coordinate: S,
                    dataKey: u.payload.dataKey,
                    index: String(f.index),
                    label: u.payload.label,
                    sourceViewBox: u.payload.sourceViewBox,
                    graphicalItemId: u.payload.graphicalItemId,
                  }),
                );
              }
            }
          };
          return (
            hN.on(hz, e),
            () => {
              hN.off(hz, e);
            }
          );
        }, [u, n, r, t, i, a, o, l]),
        (c = nT(i3)),
        (s = nT(i4)),
        (f = nk()),
        (0, R.useEffect)(() => {
          if (null == c) return rl;
          var e = (e, t, r) => {
            s !== r && c === e && f(nv(t));
          };
          return (
            hN.on(hL, e),
            () => {
              hN.off(hL, e);
            }
          );
        }, [f, s, c]),
        null
      );
    };
    function hV(e) {
      if ("number" == typeof e) return e;
      if ("string" == typeof e) {
        var t = parseFloat(e);
        if (!Number.isNaN(t)) return t;
      }
      return 0;
    }
    var hY = (0, R.forwardRef)((e, t) => {
        var r,
          n,
          i = (0, R.useRef)(null),
          [a, o] = (0, R.useState)({
            containerWidth: hV(null == (r = e.style) ? void 0 : r.width),
            containerHeight: hV(null == (n = e.style) ? void 0 : n.height),
          }),
          l = (0, R.useCallback)((e, t) => {
            o((r) => {
              var n = Math.round(e),
                i = Math.round(t);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []),
          u = (0, R.useCallback)(
            (e) => {
              if (
                ("function" == typeof t && t(e),
                null != i.current &&
                  (i.current.disconnect(), (i.current = null)),
                null != e && "u" > typeof ResizeObserver)
              ) {
                var { width: r, height: n } = e.getBoundingClientRect();
                l(r, n);
                var a = new ResizeObserver((e) => {
                  var t = e[0];
                  if (null != t) {
                    var { width: r, height: n } = t.contentRect;
                    l(r, n);
                  }
                });
                (a.observe(e), (i.current = a));
              }
            },
            [t, l],
          );
        return (
          (0, R.useEffect)(
            () => () => {
              var e = i.current;
              null != e && e.disconnect();
            },
            [l],
          ),
          R.createElement(
            R.Fragment,
            null,
            R.createElement(iz, {
              width: a.containerWidth,
              height: a.containerHeight,
            }),
            R.createElement("div", hq({ ref: u }, e)),
          )
        );
      }),
      hG = (0, R.forwardRef)((e, t) => {
        var { width: r, height: n } = e,
          [i, a] = (0, R.useState)({
            containerWidth: hV(r),
            containerHeight: hV(n),
          }),
          o = (0, R.useCallback)((e, t) => {
            a((r) => {
              var n = Math.round(e),
                i = Math.round(t);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []),
          l = (0, R.useCallback)(
            (e) => {
              if (("function" == typeof t && t(e), null != e)) {
                var { width: r, height: n } = e.getBoundingClientRect();
                o(r, n);
              }
            },
            [t, o],
          );
        return R.createElement(
          R.Fragment,
          null,
          R.createElement(iz, {
            width: i.containerWidth,
            height: i.containerHeight,
          }),
          R.createElement("div", hq({ ref: l }, e)),
        );
      }),
      hX = (0, R.forwardRef)((e, t) => {
        var { width: r, height: n } = e;
        return R.createElement(
          R.Fragment,
          null,
          R.createElement(iz, { width: r, height: n }),
          R.createElement("div", hq({ ref: t }, e)),
        );
      }),
      hZ = (0, R.forwardRef)((e, t) => {
        var { width: r, height: n } = e;
        return "string" == typeof r || "string" == typeof n
          ? R.createElement(hG, hq({}, e, { ref: t }))
          : "number" == typeof r && "number" == typeof n
            ? R.createElement(hX, hq({}, e, { width: r, height: n, ref: t }))
            : R.createElement(
                R.Fragment,
                null,
                R.createElement(iz, { width: r, height: n }),
                R.createElement("div", hq({ ref: t }, e)),
              );
      }),
      hQ = (0, R.forwardRef)((e, t) => {
        var {
            children: r,
            className: n,
            height: i,
            onClick: a,
            onContextMenu: o,
            onDoubleClick: l,
            onMouseDown: u,
            onMouseEnter: c,
            onMouseLeave: s,
            onMouseMove: f,
            onMouseUp: d,
            onTouchEnd: p,
            onTouchMove: h,
            onTouchStart: y,
            style: v,
            width: g,
            responsive: m,
            dispatchTouchEvents: b = !0,
          } = e,
          x = (0, R.useRef)(null),
          w = nk(),
          [O, j] = (0, R.useState)(null),
          [P, _] = (0, R.useState)(null),
          E = (function () {
            var e = nk(),
              [t, r] = (0, R.useState)(null),
              n = nT(n6);
            return (
              (0, R.useEffect)(() => {
                if (null != t) {
                  var r = t.getBoundingClientRect().width / t.offsetWidth;
                  nU(r) && r !== n && e(nj(r));
                }
              }, [t, e, n]),
              r
            );
          })(),
          S = iE(),
          k = (null == S ? void 0 : S.width) > 0 ? S.width : g,
          A = (null == S ? void 0 : S.height) > 0 ? S.height : i,
          M = (0, R.useCallback)(
            (e) => {
              (E(e),
                "function" == typeof t && t(e),
                j(e),
                _(e),
                null != e && (x.current = e));
            },
            [E, t, j, _],
          ),
          C = (0, R.useCallback)(
            (e) => {
              (w(dE(e)), w(pT({ handler: a, reactEvent: e })));
            },
            [w, a],
          ),
          T = (0, R.useCallback)(
            (e) => {
              (w(dk(e)), w(pT({ handler: c, reactEvent: e })));
            },
            [w, c],
          ),
          D = (0, R.useCallback)(
            (e) => {
              (w(nl()), w(pT({ handler: s, reactEvent: e })));
            },
            [w, s],
          ),
          I = (0, R.useCallback)(
            (e) => {
              (w(dk(e)), w(pT({ handler: f, reactEvent: e })));
            },
            [w, f],
          ),
          N = (0, R.useCallback)(() => {
            w(p_());
          }, [w]),
          z = (0, R.useCallback)(() => {
            w(pE());
          }, [w]),
          L = (0, R.useCallback)(
            (e) => {
              w(pP(e.key));
            },
            [w],
          ),
          F = (0, R.useCallback)(
            (e) => {
              w(pT({ handler: o, reactEvent: e }));
            },
            [w, o],
          ),
          B = (0, R.useCallback)(
            (e) => {
              w(pT({ handler: l, reactEvent: e }));
            },
            [w, l],
          ),
          $ = (0, R.useCallback)(
            (e) => {
              w(pT({ handler: u, reactEvent: e }));
            },
            [w, u],
          ),
          U = (0, R.useCallback)(
            (e) => {
              w(pT({ handler: d, reactEvent: e }));
            },
            [w, d],
          ),
          K = (0, R.useCallback)(
            (e) => {
              w(pT({ handler: y, reactEvent: e }));
            },
            [w, y],
          ),
          W = (0, R.useCallback)(
            (e) => {
              (b && w(pF(e)), w(pT({ handler: h, reactEvent: e })));
            },
            [w, b, h],
          ),
          q = (0, R.useCallback)(
            (e) => {
              w(pT({ handler: p, reactEvent: e }));
            },
            [w, p],
          );
        return R.createElement(
          hU.Provider,
          { value: O },
          R.createElement(
            hK.Provider,
            { value: P },
            R.createElement(
              m ? hY : hZ,
              {
                width: null != k ? k : null == v ? void 0 : v.width,
                height: null != A ? A : null == v ? void 0 : v.height,
                className: ic("recharts-wrapper", n),
                style: (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? hW(Object(r), !0).forEach(function (t) {
                          var n, i, a;
                          ((n = e),
                            (i = t),
                            (a = r[t]),
                            (i = (function (e) {
                              var t = (function (e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                  var n = r.call(e, t || "default");
                                  if ("object" != typeof n) return n;
                                  throw TypeError(
                                    "@@toPrimitive must return a primitive value.",
                                  );
                                }
                                return ("string" === t ? String : Number)(e);
                              })(e, "string");
                              return "symbol" == typeof t ? t : t + "";
                            })(i)) in n
                              ? Object.defineProperty(n, i, {
                                  value: a,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (n[i] = a));
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r),
                          )
                        : hW(Object(r)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                            );
                          });
                  }
                  return e;
                })(
                  {
                    position: "relative",
                    cursor: "default",
                    width: k,
                    height: A,
                  },
                  v,
                ),
                onClick: C,
                onContextMenu: F,
                onDoubleClick: B,
                onFocus: N,
                onBlur: z,
                onKeyDown: L,
                onMouseDown: $,
                onMouseEnter: T,
                onMouseLeave: D,
                onMouseMove: I,
                onMouseUp: U,
                onTouchEnd: q,
                onTouchMove: W,
                onTouchStart: K,
                ref: M,
              },
              R.createElement(hH, null),
              r,
            ),
          ),
        );
      }),
      hJ = e7([it], (e) => ({
        top: e.top,
        bottom: e.bottom,
        left: e.left,
        right: e.right,
      })),
      h0 = e7([hJ, n5, n3], (e, t, r) => {
        if (e && null != t && null != r)
          return {
            x: e.left,
            y: e.top,
            width: Math.max(0, t - e.left - e.right),
            height: Math.max(0, r - e.top - e.bottom),
          };
      }),
      h1 = (0, R.createContext)(void 0),
      h2 = (e) => {
        var { children: t } = e,
          [r] = (0, R.useState)("".concat(re("recharts"), "-clip")),
          n = nT(h0);
        if (null == n) return null;
        var { x: i, y: a, width: o, height: l } = n;
        return R.createElement(
          h1.Provider,
          { value: r },
          R.createElement(
            "defs",
            null,
            R.createElement(
              "clipPath",
              { id: r },
              R.createElement("rect", { x: i, y: a, height: l, width: o }),
            ),
          ),
          t,
        );
      },
      h5 = [
        "width",
        "height",
        "responsive",
        "children",
        "className",
        "style",
        "compact",
        "title",
        "desc",
      ],
      h3 = (0, R.forwardRef)((e, t) => {
        var {
            width: r,
            height: n,
            responsive: i,
            children: a,
            className: o,
            style: l,
            compact: u,
            title: c,
            desc: s,
          } = e,
          f = hb(
            (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                      if (-1 !== t.indexOf(n)) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                  ((r = a[n]),
                    -1 === t.indexOf(r) &&
                      {}.propertyIsEnumerable.call(e, r) &&
                      (i[r] = e[r]));
              }
              return i;
            })(e, h5),
          );
        return u
          ? R.createElement(
              R.Fragment,
              null,
              R.createElement(iz, { width: r, height: n }),
              R.createElement(hI, { otherAttributes: f, title: c, desc: s }, a),
            )
          : R.createElement(
              hQ,
              {
                className: o,
                style: l,
                width: r,
                height: n,
                responsive: null != i && i,
                onClick: e.onClick,
                onMouseLeave: e.onMouseLeave,
                onMouseEnter: e.onMouseEnter,
                onMouseMove: e.onMouseMove,
                onMouseDown: e.onMouseDown,
                onMouseUp: e.onMouseUp,
                onContextMenu: e.onContextMenu,
                onDoubleClick: e.onDoubleClick,
                onTouchStart: e.onTouchStart,
                onTouchMove: e.onTouchMove,
                onTouchEnd: e.onTouchEnd,
              },
              R.createElement(
                hI,
                { otherAttributes: f, title: c, desc: s, ref: t },
                R.createElement(h2, null, a),
              ),
            );
      });
    function h6(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function h4(e, t) {
      var r = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h6(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : h6(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      })({}, e);
      return Object.keys(t).reduce(
        (e, r) => (void 0 === e[r] && void 0 !== t[r] && (e[r] = t[r]), e),
        r,
      );
    }
    function h8() {
      return (h8 = Object.assign.bind()).apply(null, arguments);
    }
    function h7(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    var h9 = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h7(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : h7(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      })(
        {
          accessibilityLayer: !0,
          barCategoryGap: "10%",
          barGap: 4,
          layout: "horizontal",
          margin: { top: 5, right: 5, bottom: 5, left: 5 },
          responsive: !1,
          reverseStackOrder: !1,
          stackOffset: "none",
          syncMethod: "index",
        },
        p8,
      ),
      ye = (0, R.forwardRef)(function (e, t) {
        var r,
          n = h4(e.categoricalChartProps, h9),
          {
            chartName: i,
            defaultTooltipEventType: a,
            validateTooltipEventTypes: o,
            tooltipPayloadSearcher: l,
            categoricalChartProps: u,
          } = e;
        return R.createElement(
          ho,
          {
            preloadedState: {
              options: {
                chartName: i,
                defaultTooltipEventType: a,
                validateTooltipEventTypes: o,
                tooltipPayloadSearcher: l,
                eventEmitter: void 0,
              },
            },
            reduxStoreName: null != (r = u.id) ? r : i,
          },
          R.createElement(hl, { chartData: u.data }),
          R.createElement(hs, { layout: n.layout, margin: n.margin }),
          R.createElement(hd, {
            throttleDelay: n.throttleDelay,
            throttledEvents: n.throttledEvents,
          }),
          R.createElement(hf, {
            baseValue: n.baseValue,
            accessibilityLayer: n.accessibilityLayer,
            barCategoryGap: n.barCategoryGap,
            maxBarSize: n.maxBarSize,
            stackOffset: n.stackOffset,
            barGap: n.barGap,
            barSize: n.barSize,
            syncId: n.syncId,
            syncMethod: n.syncMethod,
            className: n.className,
            reverseStackOrder: n.reverseStackOrder,
          }),
          R.createElement(h3, h8({}, n, { ref: t })),
        );
      }),
      yt = ["axis"],
      yr = (0, R.forwardRef)((e, t) =>
        R.createElement(ye, {
          chartName: "LineChart",
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: yt,
          tooltipPayloadSearcher: ru,
          categoricalChartProps: e,
          ref: t,
        }),
      ),
      yn = R,
      yi = ["children", "className"];
    function ya() {
      return (ya = Object.assign.bind()).apply(null, arguments);
    }
    var yo = R.forwardRef((e, t) => {
      var { children: r, className: n } = e,
        i = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
              ((r = a[n]),
                -1 === t.indexOf(r) &&
                  {}.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
          }
          return i;
        })(e, yi),
        a = ic("recharts-layer", n);
      return R.createElement("g", ya({ className: a }, hw(i), { ref: t }), r);
    });
    function yl(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    var yu = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? yl(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : yl(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      })({}, { cacheSize: 2e3, enableCache: !0 }),
      yc = new (class {
        constructor(e) {
          (!(function (e, t, r) {
            var n;
            (t =
              "symbol" ==
              typeof (n = (function (e, t) {
                if ("object" != typeof e || !e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(e, t || "default");
                  if ("object" != typeof n) return n;
                  throw TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(t, "string"))
                ? n
                : n + "") in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r);
          })(this, "cache", new Map()),
            (this.maxSize = e));
        }
        get(e) {
          var t = this.cache.get(e);
          return (
            void 0 !== t && (this.cache.delete(e), this.cache.set(e, t)),
            t
          );
        }
        set(e, t) {
          if (this.cache.has(e)) this.cache.delete(e);
          else if (this.cache.size >= this.maxSize) {
            var r = this.cache.keys().next().value;
            null != r && this.cache.delete(r);
          }
          this.cache.set(e, t);
        }
        clear() {
          this.cache.clear();
        }
        size() {
          return this.cache.size;
        }
      })(yu.cacheSize),
      ys = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre",
      },
      yf = "recharts_measurement_span",
      yd = (e, t) => {
        try {
          var r = document.getElementById(yf);
          (r ||
            ((r = document.createElement("span")).setAttribute("id", yf),
            r.setAttribute("aria-hidden", "true"),
            document.body.appendChild(r)),
            Object.assign(r.style, ys, t),
            (r.textContent = "".concat(e)));
          var n = r.getBoundingClientRect();
          return { width: n.width, height: n.height };
        } catch (e) {
          return { width: 0, height: 0 };
        }
      },
      yp = function (e) {
        var t,
          r,
          n,
          i,
          a,
          o,
          l =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e || pX.isSsr) return { width: 0, height: 0 };
        if (!yu.enableCache) return yd(e, l);
        var u =
            ((t = l.fontSize || ""),
            (r = l.fontFamily || ""),
            (n = l.fontWeight || ""),
            (i = l.fontStyle || ""),
            (a = l.letterSpacing || ""),
            (o = l.textTransform || ""),
            ""
              .concat(e, "|")
              .concat(t, "|")
              .concat(r, "|")
              .concat(n, "|")
              .concat(i, "|")
              .concat(a, "|")
              .concat(o)),
          c = yc.get(u);
        if (c) return c;
        var s = yd(e, l);
        return (yc.set(u, s), s);
      },
      yh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      yy = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      yv = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,
      yg = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      ym = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1,
      },
      yb = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
    class yx {
      static parse(e) {
        var t,
          [, r, n] = null != (t = yg.exec(e)) ? t : [];
        return null == r ? yx.NaN : new yx(parseFloat(r), null != n ? n : "");
      }
      constructor(e, t) {
        ((this.num = e),
          (this.unit = t),
          (this.num = e),
          (this.unit = t),
          t6(e) && (this.unit = ""),
          "" === t || yv.test(t) || ((this.num = NaN), (this.unit = "")),
          (function (e) {
            return yb.includes(e);
          })(t) &&
            ((this.num = (function (e, t) {
              return e * ym[t];
            })(e, t)),
            (this.unit = "px")));
      }
      add(e) {
        return this.unit !== e.unit
          ? new yx(NaN, "")
          : new yx(this.num + e.num, this.unit);
      }
      subtract(e) {
        return this.unit !== e.unit
          ? new yx(NaN, "")
          : new yx(this.num - e.num, this.unit);
      }
      multiply(e) {
        return "" !== this.unit && "" !== e.unit && this.unit !== e.unit
          ? new yx(NaN, "")
          : new yx(this.num * e.num, this.unit || e.unit);
      }
      divide(e) {
        return "" !== this.unit && "" !== e.unit && this.unit !== e.unit
          ? new yx(NaN, "")
          : new yx(this.num / e.num, this.unit || e.unit);
      }
      toString() {
        return "".concat(this.num).concat(this.unit);
      }
      isNaN() {
        return t6(this.num);
      }
    }
    function yw(e) {
      if (null == e || e.includes("NaN")) return "NaN";
      for (var t = e; t.includes("*") || t.includes("/"); ) {
        var r,
          [, n, i, a] = null != (r = yh.exec(t)) ? r : [],
          o = yx.parse(null != n ? n : ""),
          l = yx.parse(null != a ? a : ""),
          u = "*" === i ? o.multiply(l) : o.divide(l);
        if (u.isNaN()) return "NaN";
        t = t.replace(yh, u.toString());
      }
      for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
        var c,
          [, s, f, d] = null != (c = yy.exec(t)) ? c : [],
          p = yx.parse(null != s ? s : ""),
          h = yx.parse(null != d ? d : ""),
          y = "+" === f ? p.add(h) : p.subtract(h);
        if (y.isNaN()) return "NaN";
        t = t.replace(yy, y.toString());
      }
      return t;
    }
    ((n = "NaN"),
      (i = new yx(NaN, "")),
      (n =
        "symbol" ==
        typeof (t = (function (e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(n, "string"))
          ? t
          : t + "") in yx
        ? Object.defineProperty(yx, n, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (yx[n] = i));
    var yO = /\(([^()]*)\)/;
    function yj(e) {
      var t = (function (e) {
        try {
          var t;
          return (
            (t = e.replace(/\s+/g, "")),
            (t = (function (e) {
              for (var t, r = e; null != (t = yO.exec(r)); ) {
                var [, n] = t;
                r = r.replace(yO, yw(n));
              }
              return r;
            })(t)),
            (t = yw(t))
          );
        } catch (e) {
          return "NaN";
        }
      })(e.slice(5, -1));
      return "NaN" === t ? "" : t;
    }
    var yP = [
        "x",
        "y",
        "lineHeight",
        "capHeight",
        "fill",
        "scaleToFit",
        "textAnchor",
        "verticalAnchor",
      ],
      y_ = ["dx", "dy", "angle", "className", "breakAll"];
    function yE() {
      return (yE = Object.assign.bind()).apply(null, arguments);
    }
    function yS(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          ((r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]));
      }
      return i;
    }
    var yk = /[ \f\n\r\t\v\u2028\u2029]+/,
      yA = (e) => {
        var { children: t, breakAll: r, style: n } = e;
        try {
          var i = [];
          null != t &&
            (i = r ? t.toString().split("") : t.toString().split(yk));
          var a = i.map((e) => ({ word: e, width: yp(e, n).width })),
            o = r ? 0 : yp(" ", n).width;
          return { wordsWithComputedWidth: a, spaceWidth: o };
        } catch (e) {
          return null;
        }
      };
    function yM(e) {
      return "start" === e || "middle" === e || "end" === e || "inherit" === e;
    }
    var yC = (e, t, r, n) =>
        e.reduce((e, i) => {
          var { word: a, width: o } = i,
            l = e[e.length - 1];
          return (
            l && null != o && (null == t || n || l.width + o + r < Number(t))
              ? (l.words.push(a), (l.width += o + r))
              : e.push({ words: [a], width: o }),
            e
          );
        }, []),
      yT = (e) => e.reduce((e, t) => (e.width > t.width ? e : t)),
      yD = (e, t, r, n, i, a, o, l) => {
        var u = yA({ breakAll: r, style: n, children: e.slice(0, t) + "…" });
        if (!u) return [!1, []];
        var c = yC(u.wordsWithComputedWidth, a, o, l);
        return [c.length > i || yT(c).width > Number(a), c];
      },
      yI = (e) => [
        { words: null == e ? [] : e.toString().split(yk), width: void 0 },
      ],
      yN = "#808080",
      yz = {
        angle: 0,
        breakAll: !1,
        capHeight: "0.71em",
        fill: yN,
        lineHeight: "1em",
        scaleToFit: !1,
        textAnchor: "start",
        verticalAnchor: "end",
        x: 0,
        y: 0,
      },
      yL = (0, R.forwardRef)((e, t) => {
        var r,
          n = h4(e, yz),
          {
            x: i,
            y: a,
            lineHeight: o,
            capHeight: l,
            fill: u,
            scaleToFit: c,
            textAnchor: s,
            verticalAnchor: f,
          } = n,
          d = yS(n, yP),
          p = (0, R.useMemo)(
            () =>
              ((e) => {
                var {
                  width: t,
                  scaleToFit: r,
                  children: n,
                  style: i,
                  breakAll: a,
                  maxLines: o,
                } = e;
                if ((t || r) && !pX.isSsr) {
                  var l = yA({ breakAll: a, children: n, style: i });
                  if (!l) return yI(n);
                  var { wordsWithComputedWidth: u, spaceWidth: c } = l;
                  return ((e, t, r, n, i) => {
                    var a,
                      { maxLines: o, children: l, style: u, breakAll: c } = e,
                      s = t8(o),
                      f = String(l),
                      d = yC(t, n, r, i);
                    if (!s || i || !(d.length > o || yT(d).width > Number(n)))
                      return d;
                    for (
                      var p = 0, h = f.length - 1, y = 0;
                      p <= h && y <= f.length - 1;
                    ) {
                      var v = Math.floor((p + h) / 2),
                        [g, m] = yD(f, v - 1, c, u, o, n, r, i),
                        [b] = yD(f, v, c, u, o, n, r, i);
                      if (
                        (g || b || (p = v + 1), g && b && (h = v - 1), !g && b)
                      ) {
                        a = m;
                        break;
                      }
                      y++;
                    }
                    return a || d;
                  })(
                    { breakAll: a, children: n, maxLines: o, style: i },
                    u,
                    c,
                    t,
                    !!r,
                  );
                }
                return yI(n);
              })({
                breakAll: d.breakAll,
                children: d.children,
                maxLines: d.maxLines,
                scaleToFit: c,
                style: d.style,
                width: d.width,
              }),
            [d.breakAll, d.children, d.maxLines, c, d.style, d.width],
          ),
          { dx: h, dy: y, angle: v, className: g, breakAll: m } = d,
          b = yS(d, y_);
        if (!t7(i) || !t7(a) || 0 === p.length) return null;
        var x = Number(i) + (t8(h) ? h : 0),
          w = Number(a) + (t8(y) ? y : 0);
        if (!nU(x) || !nU(w)) return null;
        switch (f) {
          case "start":
            r = yj("calc(".concat(l, ")"));
            break;
          case "middle":
            r = yj(
              "calc("
                .concat((p.length - 1) / 2, " * -")
                .concat(o, " + (")
                .concat(l, " / 2))"),
            );
            break;
          default:
            r = yj("calc(".concat(p.length - 1, " * -").concat(o, ")"));
        }
        var O = [],
          j = p[0];
        if (c && null != j) {
          var P = j.width,
            { width: _ } = d;
          O.push("scale(".concat(t8(_) && t8(P) ? _ / P : 1, ")"));
        }
        return (
          v && O.push("rotate(".concat(v, ", ").concat(x, ", ").concat(w, ")")),
          O.length && (b.transform = O.join(" ")),
          R.createElement(
            "text",
            yE({}, hw(b), {
              ref: t,
              x: x,
              y: w,
              className: ic("recharts-text", g),
              textAnchor: s,
              fill: u.includes("url") ? yN : u,
            }),
            p.map((e, t) => {
              var n = e.words.join(m ? "" : " ");
              return R.createElement(
                "tspan",
                { x: x, dy: 0 === t ? r : o, key: "".concat(n, "-").concat(t) },
                n,
              );
            }),
          )
        );
      });
    yL.displayName = "Text";
    var yR = e.i(174080);
    function yF(e) {
      var { zIndex: t, children: r } = e,
        n = void 0 !== nT(iD) && void 0 !== t && 0 !== t,
        i = io(),
        a = (0, R.useRef)(void 0),
        o = (0, R.useRef)(new Set()),
        l = nk(),
        u = nT((e) => h_(e, t, i));
      if (
        ((0, R.useLayoutEffect)(() => {
          if (!n) {
            var e = o.current;
            (e.forEach((e) => {
              l(p5({ zIndex: e }));
            }),
              e.clear(),
              (a.current = void 0));
            return;
          }
          if (
            (o.current.has(t) || (l(p2({ zIndex: t })), o.current.add(t)), u)
          ) {
            a.current = u;
            var r = o.current;
            r.forEach((e) => {
              e !== t && (l(p5({ zIndex: e })), r.delete(e));
            });
          }
        }, [l, t, n, u]),
        (0, R.useLayoutEffect)(() => {
          var e = o.current;
          return () => {
            (e.forEach((e) => {
              l(p5({ zIndex: e }));
            }),
              e.clear());
          };
        }, [l]),
        !n)
      )
        return r;
      var c = null != u ? u : a.current;
      return c ? (0, yR.createPortal)(r, c) : null;
    }
    function yB(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function y$(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? yB(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : yB(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var yU = ["labelRef"],
      yK = ["content"];
    function yW(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          ((r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]));
      }
      return i;
    }
    function yq(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function yH(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? yq(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : yq(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function yV() {
      return (yV = Object.assign.bind()).apply(null, arguments);
    }
    var yY = (0, R.createContext)(null),
      yG = (e) => {
        var {
            x: t,
            y: r,
            upperWidth: n,
            lowerWidth: i,
            width: a,
            height: o,
            children: l,
          } = e,
          u = (0, R.useMemo)(
            () => ({
              x: t,
              y: r,
              upperWidth: n,
              lowerWidth: i,
              width: a,
              height: o,
            }),
            [t, r, n, i, a, o],
          );
        return R.createElement(yY.Provider, { value: u }, l);
      },
      yX = () => {
        var e = (0, R.useContext)(yY),
          t = iM();
        return e || (t ? iA(t) : void 0);
      },
      yZ = (0, R.createContext)(null),
      yQ = (e) => null != e && "function" == typeof e,
      yJ = (e) => null != e && "cx" in e && t8(e.cx),
      y0 = {
        angle: 0,
        offset: 5,
        zIndex: at.label,
        position: "middle",
        textBreakAll: !1,
      };
    function y1(e) {
      var t,
        r,
        n,
        i,
        a,
        o = h4(e, y0),
        {
          viewBox: l,
          parentViewBox: u,
          position: c,
          value: s,
          children: f,
          content: d,
          className: p = "",
          textBreakAll: h,
          labelRef: y,
        } = o,
        v = ((t = (0, R.useContext)(yZ)), (r = nT(am)), t || r),
        g = yX(),
        m = (function (e) {
          if (!yJ(e)) return e;
          var { cx: t, cy: r, outerRadius: n } = e,
            i = 2 * n;
          return {
            x: t - n,
            y: r - n,
            width: i,
            upperWidth: i,
            lowerWidth: i,
            height: i,
          };
        })(
          (n =
            null == l
              ? "center" === c
                ? g
                : null != v
                  ? v
                  : g
              : yJ(l)
                ? l
                : iA(l)),
        );
      if (
        !n ||
        (null == s &&
          null == f &&
          !(0, R.isValidElement)(d) &&
          "function" != typeof d)
      )
        return null;
      var b = yH(yH({}, o), {}, { viewBox: n });
      if ((0, R.isValidElement)(d)) {
        var { labelRef: x } = b,
          w = yW(b, yU);
        return (0, R.cloneElement)(d, w);
      }
      if ("function" == typeof d) {
        var { content: O } = b,
          j = yW(b, yK);
        if (((i = (0, R.createElement)(d, j)), (0, R.isValidElement)(i)))
          return i;
      } else
        i = ((e) => {
          var { value: t, formatter: r } = e,
            n = null == e.children ? t : e.children;
          return "function" == typeof r ? r(n) : n;
        })(o);
      var P = hw(o);
      if (yJ(n)) {
        if ("insideStart" === c || "insideEnd" === c || "end" === c)
          return ((e, t, r, n, i) => {
            var a,
              o,
              { offset: l, className: u } = e,
              {
                cx: c,
                cy: s,
                innerRadius: f,
                outerRadius: d,
                startAngle: p,
                endAngle: h,
                clockWise: y,
              } = i,
              v = (f + d) / 2,
              g = t3(h - p) * Math.min(Math.abs(h - p), 360),
              m = g >= 0 ? 1 : -1;
            switch (t) {
              case "insideStart":
                ((a = p + m * l), (o = y));
                break;
              case "insideEnd":
                ((a = h - m * l), (o = !y));
                break;
              case "end":
                ((a = h + m * l), (o = y));
                break;
              default:
                throw Error("Unsupported position ".concat(t));
            }
            o = g <= 0 ? o : !o;
            var b = ae(c, s, v, a),
              x = ae(c, s, v, a + (o ? 1 : -1) * 359),
              w = "M"
                .concat(b.x, ",")
                .concat(b.y, "\n    A")
                .concat(v, ",")
                .concat(v, ",0,1,")
                .concat(+!o, ",\n    ")
                .concat(x.x, ",")
                .concat(x.y),
              O = null == e.id ? re("recharts-radial-line-") : e.id;
            return R.createElement(
              "text",
              yV({}, n, {
                dominantBaseline: "central",
                className: ic("recharts-radial-bar-label", u),
              }),
              R.createElement(
                "defs",
                null,
                R.createElement("path", { id: O, d: w }),
              ),
              R.createElement("textPath", { xlinkHref: "#".concat(O) }, r),
            );
          })(o, c, i, P, n);
        a = ((e, t, r) => {
          var {
              cx: n,
              cy: i,
              innerRadius: a,
              outerRadius: o,
              startAngle: l,
              endAngle: u,
            } = e,
            c = (l + u) / 2;
          if ("outside" === r) {
            var { x: s, y: f } = ae(n, i, o + t, c);
            return {
              x: s,
              y: f,
              textAnchor: s >= n ? "start" : "end",
              verticalAnchor: "middle",
            };
          }
          if ("center" === r)
            return {
              x: n,
              y: i,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          if ("centerTop" === r)
            return {
              x: n,
              y: i,
              textAnchor: "middle",
              verticalAnchor: "start",
            };
          if ("centerBottom" === r)
            return { x: n, y: i, textAnchor: "middle", verticalAnchor: "end" };
          var { x: d, y: p } = ae(n, i, (a + o) / 2, c);
          return { x: d, y: p, textAnchor: "middle", verticalAnchor: "middle" };
        })(n, o.offset, o.position);
      } else {
        if (!m) return null;
        var _ = ((e) => {
          var {
              viewBox: t,
              position: r,
              offset: n = 0,
              parentViewBox: i,
              clamp: a,
            } = e,
            { x: o, y: l, height: u, upperWidth: c, lowerWidth: s } = iA(t),
            f = o + (c - s) / 2,
            d = (o + f) / 2,
            p = (c + s) / 2,
            h = u >= 0 ? 1 : -1,
            y = h * n,
            v = h > 0 ? "end" : "start",
            g = h > 0 ? "start" : "end",
            m = c >= 0 ? 1 : -1,
            b = m * n,
            x = m > 0 ? "end" : "start",
            w = m > 0 ? "start" : "end";
          if ("top" === r) {
            var O = {
              x: o + c / 2,
              y: l - y,
              horizontalAnchor: "middle",
              verticalAnchor: v,
            };
            return (
              a && i && ((O.height = Math.max(l - i.y, 0)), (O.width = c)),
              O
            );
          }
          if ("bottom" === r) {
            var j = {
              x: f + s / 2,
              y: l + u + y,
              horizontalAnchor: "middle",
              verticalAnchor: g,
            };
            return (
              a &&
                i &&
                ((j.height = Math.max(i.y + i.height - (l + u), 0)),
                (j.width = s)),
              j
            );
          }
          if ("left" === r) {
            var P = {
              x: d - b,
              y: l + u / 2,
              horizontalAnchor: x,
              verticalAnchor: "middle",
            };
            return (
              a && i && ((P.width = Math.max(P.x - i.x, 0)), (P.height = u)),
              P
            );
          }
          if ("right" === r) {
            var _ = {
              x: d + p + b,
              y: l + u / 2,
              horizontalAnchor: w,
              verticalAnchor: "middle",
            };
            return (
              a &&
                i &&
                ((_.width = Math.max(i.x + i.width - _.x, 0)), (_.height = u)),
              _
            );
          }
          var E = a && i ? { width: p, height: u } : {};
          return "insideLeft" === r
            ? y$(
                {
                  x: d + b,
                  y: l + u / 2,
                  horizontalAnchor: w,
                  verticalAnchor: "middle",
                },
                E,
              )
            : "insideRight" === r
              ? y$(
                  {
                    x: d + p - b,
                    y: l + u / 2,
                    horizontalAnchor: x,
                    verticalAnchor: "middle",
                  },
                  E,
                )
              : "insideTop" === r
                ? y$(
                    {
                      x: o + c / 2,
                      y: l + y,
                      horizontalAnchor: "middle",
                      verticalAnchor: g,
                    },
                    E,
                  )
                : "insideBottom" === r
                  ? y$(
                      {
                        x: f + s / 2,
                        y: l + u - y,
                        horizontalAnchor: "middle",
                        verticalAnchor: v,
                      },
                      E,
                    )
                  : "insideTopLeft" === r
                    ? y$(
                        {
                          x: o + b,
                          y: l + y,
                          horizontalAnchor: w,
                          verticalAnchor: g,
                        },
                        E,
                      )
                    : "insideTopRight" === r
                      ? y$(
                          {
                            x: o + c - b,
                            y: l + y,
                            horizontalAnchor: x,
                            verticalAnchor: g,
                          },
                          E,
                        )
                      : "insideBottomLeft" === r
                        ? y$(
                            {
                              x: f + b,
                              y: l + u - y,
                              horizontalAnchor: w,
                              verticalAnchor: v,
                            },
                            E,
                          )
                        : "insideBottomRight" === r
                          ? y$(
                              {
                                x: f + s - b,
                                y: l + u - y,
                                horizontalAnchor: x,
                                verticalAnchor: v,
                              },
                              E,
                            )
                          : r &&
                              "object" == typeof r &&
                              (t8(r.x) || t4(r.x)) &&
                              (t8(r.y) || t4(r.y))
                            ? y$(
                                {
                                  x: o + rt(r.x, p),
                                  y: l + rt(r.y, u),
                                  horizontalAnchor: "end",
                                  verticalAnchor: "end",
                                },
                                E,
                              )
                            : y$(
                                {
                                  x: o + c / 2,
                                  y: l + u / 2,
                                  horizontalAnchor: "middle",
                                  verticalAnchor: "middle",
                                },
                                E,
                              );
        })({
          viewBox: m,
          position: c,
          offset: o.offset,
          parentViewBox: yJ(u) ? void 0 : u,
          clamp: !0,
        });
        a = yH(
          yH(
            {
              x: _.x,
              y: _.y,
              textAnchor: _.horizontalAnchor,
              verticalAnchor: _.verticalAnchor,
            },
            void 0 !== _.width ? { width: _.width } : {},
          ),
          void 0 !== _.height ? { height: _.height } : {},
        );
      }
      return R.createElement(
        yF,
        { zIndex: o.zIndex },
        R.createElement(
          yL,
          yV({ ref: y, className: ic("recharts-label", p) }, P, a, {
            textAnchor: yM(P.textAnchor) ? P.textAnchor : a.textAnchor,
            breakAll: h,
          }),
          i,
        ),
      );
    }
    function y2(e) {
      var { label: t, labelRef: r } = e;
      return (
        ((e, t, r) => {
          if (!e) return null;
          var n = { viewBox: t, labelRef: r };
          return !0 === e
            ? R.createElement(y1, yV({ key: "label-implicit" }, n))
            : t7(e)
              ? R.createElement(y1, yV({ key: "label-implicit", value: e }, n))
              : (0, R.isValidElement)(e)
                ? e.type === y1
                  ? (0, R.cloneElement)(e, yH({ key: "label-implicit" }, n))
                  : R.createElement(
                      y1,
                      yV({ key: "label-implicit", content: e }, n),
                    )
                : yQ(e)
                  ? R.createElement(
                      y1,
                      yV({ key: "label-implicit", content: e }, n),
                    )
                  : e && "object" == typeof e
                    ? R.createElement(
                        y1,
                        yV({}, e, { key: "label-implicit" }, n),
                      )
                    : null;
        })(t, yX(), r) || null
      );
    }
    y1.displayName = "Label";
    var y5 = ["valueAccessor"],
      y3 = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
    function y6() {
      return (y6 = Object.assign.bind()).apply(null, arguments);
    }
    function y4(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          ((r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]));
      }
      return i;
    }
    var y8 = (e) => {
        var t = Array.isArray(e.value) ? e.value[e.value.length - 1] : e.value;
        if (
          null == t ||
          "string" == typeof t ||
          "number" == typeof t ||
          "boolean" == typeof t
        )
          return t;
      },
      y7 = (0, R.createContext)(void 0),
      y9 = y7.Provider,
      ve = (0, R.createContext)(void 0);
    function vt(e) {
      var { valueAccessor: t = y8 } = e,
        r = y4(e, y5),
        { dataKey: n, clockWise: i, id: a, textBreakAll: o, zIndex: l } = r,
        u = y4(r, y3),
        c = (0, R.useContext)(y7),
        s = (0, R.useContext)(ve),
        f = c || s;
      return f && f.length
        ? R.createElement(
            yF,
            { zIndex: null != l ? l : at.label },
            R.createElement(
              yo,
              { className: "recharts-label-list" },
              f.map((e, i) => {
                var l,
                  c = null == n ? t(e, i) : nH(e.payload, n),
                  s = null == a ? {} : { id: "".concat(a, "-").concat(i) };
                return R.createElement(
                  y1,
                  y6({ key: "label-".concat(i) }, hw(e), u, s, {
                    fill: null != (l = r.fill) ? l : e.fill,
                    parentViewBox: e.parentViewBox,
                    value: c,
                    textBreakAll: o,
                    viewBox: e.viewBox,
                    index: i,
                    zIndex: 0,
                  }),
                );
              }),
            ),
          )
        : null;
    }
    function vr(e) {
      var { label: t } = e;
      return t
        ? !0 === t
          ? R.createElement(vt, { key: "labelList-implicit" })
          : R.isValidElement(t) || yQ(t)
            ? R.createElement(vt, { key: "labelList-implicit", content: t })
            : "object" == typeof t
              ? R.createElement(
                  vt,
                  y6({ key: "labelList-implicit" }, t, {
                    type: String(t.type),
                  }),
                )
              : null
        : null;
    }
    (ve.Provider, (vt.displayName = "LabelList"));
    var vn = (e) => "radius" in e && "startAngle" in e && "endAngle" in e,
      vi = (e, t) => {
        if (!e || "function" == typeof e || "boolean" == typeof e) return null;
        var r = e;
        if (
          ((0, R.isValidElement)(e) && (r = e.props),
          "object" != typeof r && "function" != typeof r)
        )
          return null;
        var n = {};
        return (
          Object.keys(r).forEach((e) => {
            hy(e) &&
              "function" == typeof r[e] &&
              (n[e] = t || ((t) => r[e](r, t)));
          }),
          n
        );
      };
    function va() {
      return (va = Object.assign.bind()).apply(null, arguments);
    }
    var vo = (e) => {
        var { cx: t, cy: r, r: n, className: i } = e,
          a = ic("recharts-dot", i);
        return t8(t) && t8(r) && t8(n)
          ? R.createElement(
              "circle",
              va({}, hb(e), vi(e), { className: a, cx: t, cy: r, r: n }),
            )
          : null;
      },
      vl =
        (e.i(179684),
        (e) => !e || "object" != typeof e || !("clipDot" in e) || !!e.clipDot),
      vu = ["points"];
    function vc(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function vs(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? vc(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : vc(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function vf() {
      return (vf = Object.assign.bind()).apply(null, arguments);
    }
    function vd(e) {
      var { option: t, dotProps: r, className: n } = e;
      if ((0, R.isValidElement)(t)) return (0, R.cloneElement)(t, r);
      if ("function" == typeof t) return t(r);
      var i = ic(n, "boolean" != typeof t ? t.className : ""),
        a = null != r ? r : {},
        { points: o } = a,
        l = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
              ((r = a[n]),
                -1 === t.indexOf(r) &&
                  {}.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
          }
          return i;
        })(a, vu);
      return R.createElement(vo, vf({}, l, { className: i }));
    }
    function vp(e) {
      var {
        points: t,
        dot: r,
        className: n,
        dotClassName: i,
        dataKey: a,
        baseProps: o,
        needClip: l,
        clipPathId: u,
        zIndex: c = at.scatter,
      } = e;
      if (null == t || (!r && 1 !== t.length)) return null;
      var s = vl(r),
        f =
          null == r
            ? null
            : (0, R.isValidElement)(r)
              ? hw(r.props)
              : "object" != typeof r || Array.isArray(r)
                ? null
                : hw(r),
        d = t.map((e, n) => {
          var l,
            u,
            c = vs(
              vs(vs({ r: 3 }, o), f),
              {},
              {
                index: n,
                cx: null != (l = e.x) ? l : void 0,
                cy: null != (u = e.y) ? u : void 0,
                dataKey: a,
                value: e.value,
                payload: e.payload,
                points: t,
              },
            );
          return R.createElement(vd, {
            key: "dot-".concat(n),
            option: r,
            dotProps: c,
            className: i,
          });
        }),
        p = {};
      return (
        l &&
          null != u &&
          (p.clipPath = "url(#clipPath-"
            .concat(s ? "" : "dots-")
            .concat(u, ")")),
        R.createElement(
          yF,
          { zIndex: c },
          R.createElement(yo, vf({ className: n }, p), d),
        )
      );
    }
    function vh(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function vy(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? vh(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : vh(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var vv = (e) => {
      var t,
        {
          point: r,
          childIndex: n,
          mainColor: i,
          activeDot: a,
          dataKey: o,
          clipPath: l,
        } = e;
      if (!1 === a || null == r.x || null == r.y) return null;
      var u = vy(
        vy(
          vy(
            {},
            {
              index: n,
              dataKey: o,
              cx: r.x,
              cy: r.y,
              r: 4,
              fill: null != i ? i : "none",
              strokeWidth: 2,
              stroke: "#fff",
              payload: r.payload,
              value: r.value,
            },
          ),
          hx(a),
        ),
        vi(a),
      );
      return (
        (t = (0, R.isValidElement)(a)
          ? (0, R.cloneElement)(a, u)
          : "function" == typeof a
            ? a(u)
            : R.createElement(vo, u)),
        R.createElement(
          yo,
          { className: "recharts-active-dot", clipPath: l },
          t,
        )
      );
    };
    function vg(e) {
      var {
          points: t,
          mainColor: r,
          activeDot: n,
          itemDataKey: i,
          clipPath: a,
          zIndex: o = at.activeDot,
        } = e,
        l = nT(f7),
        u = nT(du);
      if (null == t || null == u) return null;
      var c = t.find((e) => u.includes(e.payload));
      return null == c
        ? null
        : R.createElement(
            yF,
            { zIndex: o },
            R.createElement(vv, {
              point: c,
              childIndex: Number(l),
              mainColor: r,
              dataKey: i,
              activeDot: n,
              clipPath: a,
            }),
          );
    }
    function vm(e) {
      var { tooltipEntrySettings: t } = e,
        r = nk(),
        n = io(),
        i = (0, R.useRef)(null);
      return (
        (0, R.useLayoutEffect)(() => {
          n ||
            (null === i.current
              ? r(nt(t))
              : i.current !== t && r(nr({ prev: i.current, next: t })),
            (i.current = t));
        }, [t, r, n]),
        (0, R.useLayoutEffect)(
          () => () => {
            i.current && (r(nn(i.current)), (i.current = null));
          },
          [r],
        ),
        null
      );
    }
    var vb = ["children"],
      vx = (0, R.createContext)({
        data: [],
        xAxisId: "xAxis-0",
        yAxisId: "yAxis-0",
        dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
        errorBarOffset: 0,
      });
    function vw(e) {
      var { children: t } = e,
        r = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
              ((r = a[n]),
                -1 === t.indexOf(r) &&
                  {}.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
          }
          return i;
        })(e, vb);
      return R.createElement(vx.Provider, { value: r }, t);
    }
    function vO(e, t) {
      var r,
        n,
        i = nT((t) => cA(t, e)),
        a = nT((e) => cT(e, t)),
        o =
          null != (r = null == i ? void 0 : i.allowDataOverflow)
            ? r
            : cS.allowDataOverflow,
        l =
          null != (n = null == a ? void 0 : a.allowDataOverflow)
            ? n
            : cM.allowDataOverflow;
      return { needClip: o || l, needClipX: o, needClipY: l };
    }
    function vj(e) {
      var { xAxisId: t, yAxisId: r, clipPathId: n } = e,
        i = nT(h0),
        { needClipX: a, needClipY: o, needClip: l } = vO(t, r);
      if (!l || !i) return null;
      var { x: u, y: c, width: s, height: f } = i;
      return R.createElement(
        "clipPath",
        { id: "clipPath-".concat(n) },
        R.createElement("rect", {
          x: a ? u : u - s / 2,
          y: o ? c : c - f / 2,
          width: a ? s : 2 * s,
          height: o ? f : 2 * f,
        }),
      );
    }
    var vP = (e, t, r, n) => ft(e, "xAxis", t, n),
      v_ = (e, t, r, n) => fe(e, "xAxis", t, n),
      vE = (e, t, r, n) => ft(e, "yAxis", r, n),
      vS = (e, t, r, n) => fe(e, "yAxis", r, n),
      vk = e7([iD, vP, vE, v_, vS], (e, t, r, n, i) =>
        nV(e, "xAxis") ? n0(t, n, !1) : n0(r, i, !1),
      );
    function vA(e) {
      return "line" === e.type;
    }
    var vM = e7([cF, (e, t, r, n, i) => i], (e, t) =>
        e.filter(vA).find((e) => e.id === t),
      ),
      vC = e7([iD, vP, vE, v_, vS, vM, vk, iB], (e, t, r, n, i, a, o, l) => {
        var u,
          { chartData: c, dataStartIndex: s, dataEndIndex: f } = l;
        if (
          null != a &&
          null != t &&
          null != r &&
          null != n &&
          null != i &&
          0 !== n.length &&
          0 !== i.length &&
          null != o &&
          ("horizontal" === e || "vertical" === e)
        ) {
          var { dataKey: d, data: p } = a;
          if (
            null !=
            (u =
              null != p && p.length > 0
                ? p
                : null == c
                  ? void 0
                  : c.slice(s, f + 1))
          )
            return (function (e) {
              var {
                layout: t,
                xAxis: r,
                yAxis: n,
                xAxisTicks: i,
                yAxisTicks: a,
                dataKey: o,
                bandSize: l,
                displayedData: u,
              } = e;
              return u
                .map((e, u) => {
                  var c = nH(e, o);
                  if ("horizontal" === t) {
                    var s = nZ({
                        axis: r,
                        ticks: i,
                        bandSize: l,
                        entry: e,
                        index: u,
                      }),
                      f = null == c ? null : n.scale.map(c);
                    return {
                      x: s,
                      y: null != f ? f : null,
                      value: c,
                      payload: e,
                    };
                  }
                  var d = null == c ? null : r.scale.map(c),
                    p = nZ({
                      axis: n,
                      ticks: a,
                      bandSize: l,
                      entry: e,
                      index: u,
                    });
                  return null == d || null == p
                    ? null
                    : { x: d, y: p, value: c, payload: e };
                })
                .filter(Boolean);
            })({
              layout: e,
              xAxis: t,
              yAxis: r,
              xAxisTicks: n,
              yAxisTicks: i,
              dataKey: d,
              bandSize: o,
              displayedData: u,
            });
        }
      });
    function vT(e) {
      var { legendPayload: t } = e,
        r = nk(),
        n = io(),
        i = (0, R.useRef)(null);
      return (
        (0, R.useLayoutEffect)(() => {
          n ||
            (null === i.current
              ? r(pl(t))
              : i.current !== t && r(pu({ prev: i.current, next: t })),
            (i.current = t));
        }, [r, n, t]),
        (0, R.useLayoutEffect)(
          () => () => {
            i.current && (r(pc(i.current)), (i.current = null));
          },
          [r],
        ),
        null
      );
    }
    function vD(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "animation-",
        r = (0, R.useRef)(re(t)),
        n = (0, R.useRef)(e);
      return (
        n.current !== e && ((r.current = re(t)), (n.current = e)),
        r.current
      );
    }
    var vI =
        null != (h = R["useId".toString()])
          ? h
          : () => {
              var [e] = R.useState(() => re("uid-"));
              return e;
            },
      vN = (0, R.createContext)(void 0),
      vz = (e) => {
        var t,
          r,
          { id: n, type: i, children: a } = e,
          o =
            ((t = "recharts-".concat(i)),
            (r = vI()),
            n || (t ? "".concat(t, "-").concat(r) : r));
        return R.createElement(vN.Provider, { value: o }, a(o));
      },
      vL = (0, R.memo)((e) => {
        var t = nk(),
          r = (0, R.useRef)(null);
        return (
          (0, R.useLayoutEffect)(() => {
            (null === r.current
              ? t(dG(e))
              : r.current !== e && t(dX({ prev: r.current, next: e })),
              (r.current = e));
          }, [t, e]),
          (0, R.useLayoutEffect)(
            () => () => {
              r.current && (t(dZ(r.current)), (r.current = null));
            },
            [t],
          ),
          null
        );
      });
    function vR(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function vF(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? vR(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : vR(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var vB = (e, t, r) =>
        e
          .map((e) =>
            ""
              .concat(
                e.replace(/([A-Z])/g, (e) => "-".concat(e.toLowerCase())),
                " ",
              )
              .concat(t, "ms ")
              .concat(r),
          )
          .join(","),
      v$ = (e, t) =>
        Object.keys(t).reduce(
          (r, n) => vF(vF({}, r), {}, { [n]: e(n, t[n]) }),
          {},
        );
    function vU(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function vK(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? vU(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : vU(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var vW = (e, t, r) => e + (t - e) * r,
      vq = (e) => {
        var { from: t, to: r } = e;
        return t !== r;
      },
      vH = (e, t, r) => {
        var n = v$((t, r) => {
          if (vq(r)) {
            var [n, i] = e(r.from, r.to, r.velocity);
            return vK(vK({}, r), {}, { from: n, velocity: i });
          }
          return r;
        }, t);
        return r < 1
          ? v$(
              (e, t) =>
                vq(t) && null != n[e]
                  ? vK(
                      vK({}, t),
                      {},
                      {
                        velocity: vW(t.velocity, n[e].velocity, r),
                        from: vW(t.from, n[e].from, r),
                      },
                    )
                  : t,
              t,
            )
          : vH(e, n, r - 1);
      },
      vV = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
      vY = (e, t) => e.map((e, r) => e * t ** r).reduce((e, t) => e + t),
      vG = (e, t) => (r) => vY(vV(e, t), r),
      vX = function () {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        if (1 === t.length)
          switch (t[0]) {
            case "linear":
              return [0, 0, 1, 1];
            case "ease":
              return [0.25, 0.1, 0.25, 1];
            case "ease-in":
              return [0.42, 0, 1, 1];
            case "ease-out":
              return [0.42, 0, 0.58, 1];
            case "ease-in-out":
              return [0, 0, 0.58, 1];
            default:
              var n = ((e) => {
                var t,
                  r = e.split("(");
                if (2 !== r.length || "cubic-bezier" !== r[0]) return null;
                var n =
                  null == (t = r[1]) || null == (t = t.split(")")[0])
                    ? void 0
                    : t.split(",");
                if (null == n || 4 !== n.length) return null;
                var i = n.map((e) => parseFloat(e));
                return [i[0], i[1], i[2], i[3]];
              })(t[0]);
              if (n) return n;
          }
        return 4 === t.length ? t : [0, 0, 1, 1];
      },
      vZ = function () {
        return ((e, t, r, n) => {
          var i = vG(e, r),
            a = vG(t, n),
            o = (t) =>
              vY(
                [
                  ...vV(e, r)
                    .map((e, t) => e * t)
                    .slice(1),
                  0,
                ],
                t,
              ),
            l = (e) => (e > 1 ? 1 : e < 0 ? 0 : e),
            u = (e) => {
              for (var t = e > 1 ? 1 : e, r = t, n = 0; n < 8; ++n) {
                var u = i(r) - t,
                  c = o(r);
                if (1e-4 > Math.abs(u - t) || c < 1e-4) break;
                r = l(r - u / c);
              }
              return a(r);
            };
          return ((u.isStepper = !1), u);
        })(...vX(...arguments));
      },
      vQ = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { stiff: t = 100, damping: r = 8, dt: n = 17 } = e,
          i = (e, i, a) => {
            var o = a + ((-(e - i) * t - a * r) * n) / 1e3,
              l = (a * n) / 1e3 + e;
            return 1e-4 > Math.abs(l - i) && 1e-4 > Math.abs(o)
              ? [i, 0]
              : [l, o];
          };
        return ((i.isStepper = !0), (i.dt = n), i);
      };
    class vJ {
      setTimeout(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = performance.now(),
          n = null,
          i = (a) => {
            a - r >= t
              ? e(a)
              : "function" == typeof requestAnimationFrame &&
                (n = requestAnimationFrame(i));
          };
        return (
          (n = requestAnimationFrame(i)),
          () => {
            null != n && cancelAnimationFrame(n);
          }
        );
      }
    }
    var v0 = (0, R.createContext)(function () {
      var e, t, r, n, i;
      return (
        (e = new vJ()),
        (t = () => null),
        (r = !1),
        (n = null),
        (i = (a) => {
          if (!r) {
            if (Array.isArray(a)) {
              if (!a.length) return;
              var [o, ...l] = a;
              if ("number" == typeof o) {
                n = e.setTimeout(i.bind(null, l), o);
                return;
              }
              (i(o), (n = e.setTimeout(i.bind(null, l))));
              return;
            }
            ("string" == typeof a && t(a),
              "object" == typeof a && t(a),
              "function" == typeof a && a());
          }
        }),
        {
          stop: () => {
            r = !0;
          },
          start: (e) => {
            ((r = !1), n && (n(), (n = null)), i(e));
          },
          subscribe: (e) => (
            (t = e),
            () => {
              t = () => null;
            }
          ),
          getTimeoutController: () => e,
        }
      );
    });
    function v1() {
      var [e, t] = (0, R.useState)(
        () =>
          !pX.isSsr &&
          !!window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      );
      return (
        (0, R.useEffect)(() => {
          if (window.matchMedia) {
            var e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              r = () => {
                t(e.matches);
              };
            return (
              e.addEventListener("change", r),
              () => {
                e.removeEventListener("change", r);
              }
            );
          }
        }, []),
        e
      );
    }
    var v2 = {
        begin: 0,
        duration: 1e3,
        easing: "ease",
        isActive: !0,
        canBegin: !0,
        onAnimationEnd: () => {},
        onAnimationStart: () => {},
      },
      v5 = { t: 0 },
      v3 = { t: 1 };
    function v6(e) {
      var t,
        r,
        n,
        i = h4(e, v2),
        {
          isActive: a,
          canBegin: o,
          duration: l,
          easing: u,
          begin: c,
          onAnimationEnd: s,
          onAnimationStart: f,
          children: d,
        } = i,
        p = v1(),
        h = "auto" === a ? !pX.isSsr && !p : a,
        y =
          ((t = i.animationId),
          (r = i.animationManager),
          (n = (0, R.useContext)(v0)),
          (0, R.useMemo)(() => (null != r ? r : n(t)), [t, r, n])),
        [v, g] = (0, R.useState)(h ? v5 : v3),
        m = (0, R.useRef)(null);
      return (
        (0, R.useEffect)(() => {
          h || g(v3);
        }, [h]),
        (0, R.useEffect)(() => {
          if (!h || !o) return rl;
          var e = ((e, t, r, n, i, a) => {
            var o,
              l,
              u,
              c,
              s,
              f,
              d,
              p,
              h = [Object.keys(e), Object.keys(t)].reduce((e, t) =>
                e.filter((e) => t.includes(e)),
              );
            return null == r
              ? () => (i(vK(vK({}, e), t)), () => {})
              : !0 === r.isStepper
                ? ((l = h.reduce(
                    (r, n) =>
                      vK(
                        vK({}, r),
                        {},
                        { [n]: { from: e[n], velocity: 0, to: t[n] } },
                      ),
                    {},
                  )),
                  (u = null),
                  (c = (n) => {
                    o || (o = n);
                    var s = (n - o) / r.dt;
                    ((l = vH(r, l, s)),
                      i(
                        vK(
                          vK(vK({}, e), t),
                          v$((e, t) => t.from, l),
                        ),
                      ),
                      (o = n),
                      Object.values(l).filter(vq).length &&
                        (u = a.setTimeout(c)));
                  }),
                  () => (
                    (u = a.setTimeout(c)),
                    () => {
                      var e;
                      null == (e = u) || e();
                    }
                  ))
                : ((f = null),
                  (d = h.reduce((r, n) => {
                    var i = e[n],
                      a = t[n];
                    return null == i || null == a
                      ? r
                      : vK(vK({}, r), {}, { [n]: [i, a] });
                  }, {})),
                  (p = (o) => {
                    s || (s = o);
                    var l = (o - s) / n,
                      u = v$((e, t) => vW(...t, r(l)), d);
                    if ((i(vK(vK(vK({}, e), t), u)), l < 1))
                      f = a.setTimeout(p);
                    else {
                      var c = v$((e, t) => vW(...t, r(1)), d);
                      i(vK(vK(vK({}, e), t), c));
                    }
                  }),
                  () => (
                    (f = a.setTimeout(p)),
                    () => {
                      var e;
                      null == (e = f) || e();
                    }
                  ));
          })(
            v5,
            v3,
            ((e) => {
              if ("string" == typeof e)
                switch (e) {
                  case "ease":
                  case "ease-in-out":
                  case "ease-out":
                  case "ease-in":
                  case "linear":
                    return vZ(e);
                  case "spring":
                    return vQ();
                  default:
                    if ("cubic-bezier" === e.split("(")[0]) return vZ(e);
                }
              return "function" == typeof e ? e : null;
            })(u),
            l,
            g,
            y.getTimeoutController(),
          );
          return (
            y.start([
              f,
              c,
              () => {
                m.current = e();
              },
              l,
              s,
            ]),
            () => {
              (y.stop(), m.current && m.current(), s());
            }
          );
        }, [h, o, l, u, c, f, s, y]),
        d(v.t)
      );
    }
    var v4 = e.i(707328),
      v8 = ["radius"],
      v7 = ["radius"];
    function v9(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function ge(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? v9(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v9(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function gt() {
      return (gt = Object.assign.bind()).apply(null, arguments);
    }
    function gr(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          ((r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]));
      }
      return i;
    }
    function gn(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
        )
      );
    }
    var gi = (e, t, r, n, i) => {
        var a = t2(r),
          o = t2(n),
          l = Math.min(Math.abs(a) / 2, Math.abs(o) / 2),
          u = o >= 0 ? 1 : -1,
          c = a >= 0 ? 1 : -1,
          s = +((o >= 0 && a >= 0) || (o < 0 && a < 0));
        if (l > 0 && Array.isArray(i)) {
          for (var f = [0, 0, 0, 0], d = 0; d < 4; d++) {
            var p,
              h,
              _ = null != (h = i[d]) ? h : 0;
            f[d] = _ > l ? l : _;
          }
          ((p = t5(y || (y = gn(["M", ",", ""])), e, t + u * f[0])),
            f[0] > 0 &&
              (p += t5(
                v || (v = gn(["A ", ",", ",0,0,", ",", ",", ""])),
                f[0],
                f[0],
                s,
                e + c * f[0],
                t,
              )),
            (p += t5(g || (g = gn(["L ", ",", ""])), e + r - c * f[1], t)),
            f[1] > 0 &&
              (p += t5(
                m || (m = gn(["A ", ",", ",0,0,", ",\n        ", ",", ""])),
                f[1],
                f[1],
                s,
                e + r,
                t + u * f[1],
              )),
            (p += t5(b || (b = gn(["L ", ",", ""])), e + r, t + n - u * f[2])),
            f[2] > 0 &&
              (p += t5(
                x || (x = gn(["A ", ",", ",0,0,", ",\n        ", ",", ""])),
                f[2],
                f[2],
                s,
                e + r - c * f[2],
                t + n,
              )),
            (p += t5(w || (w = gn(["L ", ",", ""])), e + c * f[3], t + n)),
            f[3] > 0 &&
              (p += t5(
                O || (O = gn(["A ", ",", ",0,0,", ",\n        ", ",", ""])),
                f[3],
                f[3],
                s,
                e,
                t + n - u * f[3],
              )),
            (p += "Z"));
        } else if (l > 0 && i === +i && i > 0) {
          var E = Math.min(l, i);
          p = t5(
            j ||
              (j = gn([
                "M ",
                ",",
                "\n            A ",
                ",",
                ",0,0,",
                ",",
                ",",
                "\n            L ",
                ",",
                "\n            A ",
                ",",
                ",0,0,",
                ",",
                ",",
                "\n            L ",
                ",",
                "\n            A ",
                ",",
                ",0,0,",
                ",",
                ",",
                "\n            L ",
                ",",
                "\n            A ",
                ",",
                ",0,0,",
                ",",
                ",",
                " Z",
              ])),
            e,
            t + u * E,
            E,
            E,
            s,
            e + c * E,
            t,
            e + r - c * E,
            t,
            E,
            E,
            s,
            e + r,
            t + u * E,
            e + r,
            t + n - u * E,
            E,
            E,
            s,
            e + r - c * E,
            t + n,
            e + c * E,
            t + n,
            E,
            E,
            s,
            e,
            t + n - u * E,
          );
        } else
          p = t5(
            P || (P = gn(["M ", ",", " h ", " v ", " h ", " Z"])),
            e,
            t,
            r,
            n,
            -r,
          );
        return p;
      },
      ga = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease",
      },
      go = (e) => {
        var t = h4(e, ga),
          r = (0, R.useRef)(null),
          [n, i] = (0, R.useState)(-1);
        (0, R.useEffect)(() => {
          if (r.current && r.current.getTotalLength)
            try {
              var e = r.current.getTotalLength();
              e && i(e);
            } catch (e) {}
        }, []);
        var { x: a, y: o, width: l, height: u, radius: c, className: s } = t,
          {
            animationEasing: f,
            animationDuration: d,
            animationBegin: p,
            isAnimationActive: h,
            isUpdateAnimationActive: y,
          } = t,
          v = (0, R.useRef)(l),
          g = (0, R.useRef)(u),
          m = (0, R.useRef)(a),
          b = (0, R.useRef)(o),
          x = vD(
            (0, R.useMemo)(
              () => ({ x: a, y: o, width: l, height: u, radius: c }),
              [a, o, l, u, c],
            ),
            "rectangle-",
          );
        if (a !== +a || o !== +o || l !== +l || u !== +u || 0 === l || 0 === u)
          return null;
        var w = ic("recharts-rectangle", s);
        if (!y) {
          var O = hw(t),
            { radius: j } = O,
            P = gr(O, v8);
          return R.createElement(
            "path",
            gt({}, P, {
              x: t2(a),
              y: t2(o),
              width: t2(l),
              height: t2(u),
              radius: "number" == typeof c ? c : void 0,
              className: w,
              d: gi(a, o, l, u, c),
            }),
          );
        }
        var _ = v.current,
          E = g.current,
          S = m.current,
          k = b.current,
          A = "0px ".concat(-1 === n ? 1 : n, "px"),
          M = "".concat(n, "px ").concat(n, "px"),
          C = vB(
            ["strokeDasharray"],
            d,
            "string" == typeof f ? f : ga.animationEasing,
          );
        return R.createElement(
          v6,
          {
            animationId: x,
            key: x,
            canBegin: n > 0,
            duration: d,
            easing: f,
            isActive: y,
            begin: p,
          },
          (e) => {
            var n,
              i = rn(_, l, e),
              s = rn(E, u, e),
              f = rn(S, a, e),
              d = rn(k, o, e);
            (r.current &&
              ((v.current = i),
              (g.current = s),
              (m.current = f),
              (b.current = d)),
              (n = h
                ? e > 0
                  ? { transition: C, strokeDasharray: M }
                  : { strokeDasharray: A }
                : { strokeDasharray: M }));
            var p = hw(t),
              { radius: y } = p,
              x = gr(p, v7);
            return R.createElement(
              "path",
              gt({}, x, {
                radius: "number" == typeof c ? c : void 0,
                className: w,
                d: gi(f, d, i, s, c),
                ref: r,
                style: ge(ge({}, n), t.style),
              }),
            );
          },
        );
      };
    function gl(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function gu(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? gl(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : gl(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function gc() {
      return (gc = Object.assign.bind()).apply(null, arguments);
    }
    function gs(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
        )
      );
    }
    var gf = (e, t, r, n, i) => {
        var a = r - n;
        return (
          t5(_ || (_ = gs(["M ", ",", ""])), e, t) +
          t5(E || (E = gs(["L ", ",", ""])), e + r, t) +
          t5(S || (S = gs(["L ", ",", ""])), e + r - a / 2, t + i) +
          t5(k || (k = gs(["L ", ",", ""])), e + r - a / 2 - n, t + i) +
          t5(A || (A = gs(["L ", ",", " Z"])), e, t)
        );
      },
      gd = {
        x: 0,
        y: 0,
        upperWidth: 0,
        lowerWidth: 0,
        height: 0,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease",
      },
      gp = (e) => {
        var t = h4(e, gd),
          {
            x: r,
            y: n,
            upperWidth: i,
            lowerWidth: a,
            height: o,
            className: l,
          } = t,
          {
            animationEasing: u,
            animationDuration: c,
            animationBegin: s,
            isUpdateAnimationActive: f,
          } = t,
          d = (0, R.useRef)(null),
          [p, h] = (0, R.useState)(-1),
          y = (0, R.useRef)(i),
          v = (0, R.useRef)(a),
          g = (0, R.useRef)(o),
          m = (0, R.useRef)(r),
          b = (0, R.useRef)(n),
          x = vD(e, "trapezoid-");
        if (
          ((0, R.useEffect)(() => {
            if (d.current && d.current.getTotalLength)
              try {
                var e = d.current.getTotalLength();
                e && h(e);
              } catch (e) {}
          }, []),
          r !== +r ||
            n !== +n ||
            i !== +i ||
            a !== +a ||
            o !== +o ||
            (0 === i && 0 === a) ||
            0 === o)
        )
          return null;
        var w = ic("recharts-trapezoid", l);
        if (!f)
          return R.createElement(
            "g",
            null,
            R.createElement(
              "path",
              gc({}, hw(t), { className: w, d: gf(r, n, i, a, o) }),
            ),
          );
        var O = y.current,
          j = v.current,
          P = g.current,
          _ = m.current,
          E = b.current,
          S = "0px ".concat(-1 === p ? 1 : p, "px"),
          k = "".concat(p, "px ").concat(p, "px"),
          A = vB(["strokeDasharray"], c, u);
        return R.createElement(
          v6,
          {
            animationId: x,
            key: x,
            canBegin: p > 0,
            duration: c,
            easing: u,
            isActive: f,
            begin: s,
          },
          (e) => {
            var l = rn(O, i, e),
              u = rn(j, a, e),
              c = rn(P, o, e),
              s = rn(_, r, e),
              f = rn(E, n, e);
            d.current &&
              ((y.current = l),
              (v.current = u),
              (g.current = c),
              (m.current = s),
              (b.current = f));
            var p =
              e > 0
                ? { transition: A, strokeDasharray: k }
                : { strokeDasharray: S };
            return R.createElement(
              "path",
              gc({}, hw(t), {
                className: w,
                d: gf(s, f, l, u, c),
                ref: d,
                style: gu(gu({}, p), t.style),
              }),
            );
          },
        );
      };
    function gh() {
      return (gh = Object.assign.bind()).apply(null, arguments);
    }
    function gy(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
        )
      );
    }
    var gv = (e) => {
        var {
            cx: t,
            cy: r,
            radius: n,
            angle: i,
            sign: a,
            isExternal: o,
            cornerRadius: l,
            cornerIsExternal: u,
          } = e,
          c = l * (o ? 1 : -1) + n,
          s = Math.asin(l / c) / i9,
          f = u ? i : i + a * s,
          d = ae(t, r, c, f);
        return {
          center: d,
          circleTangency: ae(t, r, n, f),
          lineTangency: ae(t, r, c * Math.cos(s * i9), u ? i - a * s : i),
          theta: s,
        };
      },
      gg = (e) => {
        var {
            cx: t,
            cy: r,
            innerRadius: n,
            outerRadius: i,
            startAngle: a,
            endAngle: o,
          } = e,
          l = t3(o - a) * Math.min(Math.abs(o - a), 359.999),
          u = a + l,
          c = ae(t, r, i, a),
          s = ae(t, r, i, u),
          f = t5(
            M ||
              (M = gy([
                "M ",
                ",",
                "\n    A ",
                ",",
                ",0,\n    ",
                ",",
                ",\n    ",
                ",",
                "\n  ",
              ])),
            c.x,
            c.y,
            i,
            i,
            +(Math.abs(l) > 180),
            +(a > u),
            s.x,
            s.y,
          );
        if (n > 0) {
          var d = ae(t, r, n, a),
            p = ae(t, r, n, u);
          f += t5(
            C ||
              (C = gy([
                "L ",
                ",",
                "\n            A ",
                ",",
                ",0,\n            ",
                ",",
                ",\n            ",
                ",",
                " Z",
              ])),
            p.x,
            p.y,
            n,
            n,
            +(Math.abs(l) > 180),
            +(a <= u),
            d.x,
            d.y,
          );
        } else f += t5(T || (T = gy(["L ", ",", " Z"])), t, r);
        return f;
      },
      gm = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1,
      },
      gb = (e) => {
        var t,
          r = h4(e, gm),
          {
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            cornerRadius: l,
            forceCornerRadius: u,
            cornerIsExternal: c,
            startAngle: s,
            endAngle: f,
            className: d,
          } = r;
        if (o < a || s === f) return null;
        var p = ic("recharts-sector", d),
          h = o - a,
          y = rt(l, h, 0, !0);
        return (
          (t =
            y > 0 && 360 > Math.abs(s - f)
              ? ((e) => {
                  var {
                      cx: t,
                      cy: r,
                      innerRadius: n,
                      outerRadius: i,
                      cornerRadius: a,
                      forceCornerRadius: o,
                      cornerIsExternal: l,
                      startAngle: u,
                      endAngle: c,
                    } = e,
                    s = t3(c - u),
                    {
                      circleTangency: f,
                      lineTangency: d,
                      theta: p,
                    } = gv({
                      cx: t,
                      cy: r,
                      radius: i,
                      angle: u,
                      sign: s,
                      cornerRadius: a,
                      cornerIsExternal: l,
                    }),
                    {
                      circleTangency: h,
                      lineTangency: y,
                      theta: v,
                    } = gv({
                      cx: t,
                      cy: r,
                      radius: i,
                      angle: c,
                      sign: -s,
                      cornerRadius: a,
                      cornerIsExternal: l,
                    }),
                    g = l ? Math.abs(u - c) : Math.abs(u - c) - p - v;
                  if (g < 0)
                    return o
                      ? t5(
                          D ||
                            (D = gy([
                              "M ",
                              ",",
                              "\n        a",
                              ",",
                              ",0,0,1,",
                              ",0\n        a",
                              ",",
                              ",0,0,1,",
                              ",0\n      ",
                            ])),
                          d.x,
                          d.y,
                          a,
                          a,
                          2 * a,
                          a,
                          a,
                          -(2 * a),
                        )
                      : gg({
                          cx: t,
                          cy: r,
                          innerRadius: n,
                          outerRadius: i,
                          startAngle: u,
                          endAngle: c,
                        });
                  var m = t5(
                    I ||
                      (I = gy([
                        "M ",
                        ",",
                        "\n    A",
                        ",",
                        ",0,0,",
                        ",",
                        ",",
                        "\n    A",
                        ",",
                        ",0,",
                        ",",
                        ",",
                        ",",
                        "\n    A",
                        ",",
                        ",0,0,",
                        ",",
                        ",",
                        "\n  ",
                      ])),
                    d.x,
                    d.y,
                    a,
                    a,
                    +(s < 0),
                    f.x,
                    f.y,
                    i,
                    i,
                    +(g > 180),
                    +(s < 0),
                    h.x,
                    h.y,
                    a,
                    a,
                    +(s < 0),
                    y.x,
                    y.y,
                  );
                  if (n > 0) {
                    var {
                        circleTangency: b,
                        lineTangency: x,
                        theta: w,
                      } = gv({
                        cx: t,
                        cy: r,
                        radius: n,
                        angle: u,
                        sign: s,
                        isExternal: !0,
                        cornerRadius: a,
                        cornerIsExternal: l,
                      }),
                      {
                        circleTangency: O,
                        lineTangency: j,
                        theta: P,
                      } = gv({
                        cx: t,
                        cy: r,
                        radius: n,
                        angle: c,
                        sign: -s,
                        isExternal: !0,
                        cornerRadius: a,
                        cornerIsExternal: l,
                      }),
                      _ = l ? Math.abs(u - c) : Math.abs(u - c) - w - P;
                    if (_ < 0 && 0 === a)
                      return "".concat(m, "L").concat(t, ",").concat(r, "Z");
                    m += t5(
                      N ||
                        (N = gy([
                          "L",
                          ",",
                          "\n      A",
                          ",",
                          ",0,0,",
                          ",",
                          ",",
                          "\n      A",
                          ",",
                          ",0,",
                          ",",
                          ",",
                          ",",
                          "\n      A",
                          ",",
                          ",0,0,",
                          ",",
                          ",",
                          "Z",
                        ])),
                      j.x,
                      j.y,
                      a,
                      a,
                      +(s < 0),
                      O.x,
                      O.y,
                      n,
                      n,
                      +(_ > 180),
                      +(s > 0),
                      b.x,
                      b.y,
                      a,
                      a,
                      +(s < 0),
                      x.x,
                      x.y,
                    );
                  } else m += t5(z || (z = gy(["L", ",", "Z"])), t, r);
                  return m;
                })({
                  cx: n,
                  cy: i,
                  innerRadius: a,
                  outerRadius: o,
                  cornerRadius: Math.min(y, h / 2),
                  forceCornerRadius: u,
                  cornerIsExternal: c,
                  startAngle: s,
                  endAngle: f,
                })
              : gg({
                  cx: n,
                  cy: i,
                  innerRadius: a,
                  outerRadius: o,
                  startAngle: s,
                  endAngle: f,
                })),
          R.createElement("path", gh({}, hw(r), { className: p, d: t }))
        );
      };
    let gx = Math.PI,
      gw = 2 * gx,
      gO = gw - 1e-6;
    function gj(e) {
      this._ += e[0];
      for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
    }
    class gP {
      constructor(e) {
        ((this._x0 = this._y0 = this._x1 = this._y1 = null),
          (this._ = ""),
          (this._append =
            null == e
              ? gj
              : (function (e) {
                  let t = Math.floor(e);
                  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
                  if (t > 15) return gj;
                  let r = 10 ** t;
                  return function (e) {
                    this._ += e[0];
                    for (let t = 1, n = e.length; t < n; ++t)
                      this._ += Math.round(arguments[t] * r) / r + e[t];
                  };
                })(e)));
      }
      moveTo(e, t) {
        this
          ._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}`;
      }
      closePath() {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
      }
      lineTo(e, t) {
        this._append`L${(this._x1 = +e)},${(this._y1 = +t)}`;
      }
      quadraticCurveTo(e, t, r, n) {
        this._append`Q${+e},${+t},${(this._x1 = +r)},${(this._y1 = +n)}`;
      }
      bezierCurveTo(e, t, r, n, i, a) {
        this
          ._append`C${+e},${+t},${+r},${+n},${(this._x1 = +i)},${(this._y1 = +a)}`;
      }
      arcTo(e, t, r, n, i) {
        if (((e *= 1), (t *= 1), (r *= 1), (n *= 1), (i *= 1) < 0))
          throw Error(`negative radius: ${i}`);
        let a = this._x1,
          o = this._y1,
          l = r - e,
          u = n - t,
          c = a - e,
          s = o - t,
          f = c * c + s * s;
        if (null === this._x1)
          this._append`M${(this._x1 = e)},${(this._y1 = t)}`;
        else if (f > 1e-6)
          if (Math.abs(s * l - u * c) > 1e-6 && i) {
            let d = r - a,
              p = n - o,
              h = l * l + u * u,
              y = Math.sqrt(h),
              v = Math.sqrt(f),
              g =
                i *
                Math.tan(
                  (gx - Math.acos((h + f - (d * d + p * p)) / (2 * y * v))) / 2,
                ),
              m = g / v,
              b = g / y;
            (Math.abs(m - 1) > 1e-6 && this._append`L${e + m * c},${t + m * s}`,
              this
                ._append`A${i},${i},0,0,${+(s * d > c * p)},${(this._x1 = e + b * l)},${(this._y1 = t + b * u)}`);
          } else this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      }
      arc(e, t, r, n, i, a) {
        if (((e *= 1), (t *= 1), (r *= 1), (a = !!a), r < 0))
          throw Error(`negative radius: ${r}`);
        let o = r * Math.cos(n),
          l = r * Math.sin(n),
          u = e + o,
          c = t + l,
          s = 1 ^ a,
          f = a ? n - i : i - n;
        (null === this._x1
          ? this._append`M${u},${c}`
          : (Math.abs(this._x1 - u) > 1e-6 || Math.abs(this._y1 - c) > 1e-6) &&
            this._append`L${u},${c}`,
          r &&
            (f < 0 && (f = (f % gw) + gw),
            f > gO
              ? this
                  ._append`A${r},${r},0,1,${s},${e - o},${t - l}A${r},${r},0,1,${s},${(this._x1 = u)},${(this._y1 = c)}`
              : f > 1e-6 &&
                this
                  ._append`A${r},${r},0,${+(f >= gx)},${s},${(this._x1 = e + r * Math.cos(i))},${(this._y1 = t + r * Math.sin(i))}`));
      }
      rect(e, t, r, n) {
        this
          ._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(r *= 1)}v${+n}h${-r}Z`;
      }
      toString() {
        return this._;
      }
    }
    function g_(e) {
      let t = 3;
      return (
        (e.digits = function (r) {
          if (!arguments.length) return t;
          if (null == r) t = null;
          else {
            let e = Math.floor(r);
            if (!(e >= 0)) throw RangeError(`invalid digits: ${r}`);
            t = e;
          }
          return e;
        }),
        () => new gP(t)
      );
    }
    gP.prototype;
    let gE = Math.cos,
      gS = Math.sin,
      gk = Math.sqrt,
      gA = Math.PI,
      gM = 2 * gA;
    gk(3);
    let gC = {
        draw(e, t) {
          let r = gk(t / gA);
          (e.moveTo(r, 0), e.arc(0, 0, r, 0, gM));
        },
      },
      gT = gk(1 / 3),
      gD = 2 * gT,
      gI = gS(gA / 10) / gS((7 * gA) / 10),
      gN = gS(gM / 10) * gI,
      gz = -gE(gM / 10) * gI,
      gL = gk(3);
    gk(3);
    let gR = gk(3) / 2,
      gF = 1 / gk(12),
      gB = (gF / 2 + 1) * 3;
    var g$ = ["type", "size", "sizeType"];
    function gU() {
      return (gU = Object.assign.bind()).apply(null, arguments);
    }
    function gK(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function gW(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? gK(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : gK(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var gq = {
        symbolCircle: gC,
        symbolCross: {
          draw(e, t) {
            let r = gk(t / 5) / 2;
            (e.moveTo(-3 * r, -r),
              e.lineTo(-r, -r),
              e.lineTo(-r, -3 * r),
              e.lineTo(r, -3 * r),
              e.lineTo(r, -r),
              e.lineTo(3 * r, -r),
              e.lineTo(3 * r, r),
              e.lineTo(r, r),
              e.lineTo(r, 3 * r),
              e.lineTo(-r, 3 * r),
              e.lineTo(-r, r),
              e.lineTo(-3 * r, r),
              e.closePath());
          },
        },
        symbolDiamond: {
          draw(e, t) {
            let r = gk(t / gD),
              n = r * gT;
            (e.moveTo(0, -r),
              e.lineTo(n, 0),
              e.lineTo(0, r),
              e.lineTo(-n, 0),
              e.closePath());
          },
        },
        symbolSquare: {
          draw(e, t) {
            let r = gk(t),
              n = -r / 2;
            e.rect(n, n, r, r);
          },
        },
        symbolStar: {
          draw(e, t) {
            let r = gk(0.8908130915292852 * t),
              n = gN * r,
              i = gz * r;
            (e.moveTo(0, -r), e.lineTo(n, i));
            for (let t = 1; t < 5; ++t) {
              let a = (gM * t) / 5,
                o = gE(a),
                l = gS(a);
              (e.lineTo(l * r, -o * r), e.lineTo(o * n - l * i, l * n + o * i));
            }
            e.closePath();
          },
        },
        symbolTriangle: {
          draw(e, t) {
            let r = -gk(t / (3 * gL));
            (e.moveTo(0, 2 * r),
              e.lineTo(-gL * r, -r),
              e.lineTo(gL * r, -r),
              e.closePath());
          },
        },
        symbolWye: {
          draw(e, t) {
            let r = gk(t / gB),
              n = r / 2,
              i = r * gF,
              a = r * gF + r,
              o = -n;
            (e.moveTo(n, i),
              e.lineTo(n, a),
              e.lineTo(o, a),
              e.lineTo(-0.5 * n - gR * i, gR * n + -0.5 * i),
              e.lineTo(-0.5 * n - gR * a, gR * n + -0.5 * a),
              e.lineTo(-0.5 * o - gR * a, gR * o + -0.5 * a),
              e.lineTo(-0.5 * n + gR * i, -0.5 * i - gR * n),
              e.lineTo(-0.5 * n + gR * a, -0.5 * a - gR * n),
              e.lineTo(-0.5 * o + gR * a, -0.5 * a - gR * o),
              e.closePath());
          },
        },
      },
      gH = Math.PI / 180,
      gV = (e) => {
        var { type: t = "circle", size: r = 64, sizeType: n = "area" } = e,
          i = gW(
            gW(
              {},
              (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  i = (function (e, t) {
                    if (null == e) return {};
                    var r = {};
                    for (var n in e)
                      if ({}.hasOwnProperty.call(e, n)) {
                        if (-1 !== t.indexOf(n)) continue;
                        r[n] = e[n];
                      }
                    return r;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < a.length; n++)
                    ((r = a[n]),
                      -1 === t.indexOf(r) &&
                        {}.propertyIsEnumerable.call(e, r) &&
                        (i[r] = e[r]));
                }
                return i;
              })(e, g$),
            ),
            {},
            { type: t, size: r, sizeType: n },
          ),
          a = "circle";
        "string" == typeof t && (a = t);
        var { className: o, cx: l, cy: u } = i,
          c = hw(i);
        return t8(l) && t8(u) && t8(r)
          ? R.createElement(
              "path",
              gU({}, c, {
                className: ic("recharts-symbols", o),
                transform: "translate(".concat(l, ", ").concat(u, ")"),
                d: (() => {
                  var e,
                    t = ((e = a), gq["symbol".concat(ra(e))] || gC),
                    i = (function (e, t) {
                      let r = null,
                        n = g_(i);
                      function i() {
                        let i;
                        if (
                          (r || (r = i = n()),
                          e
                            .apply(this, arguments)
                            .draw(r, +t.apply(this, arguments)),
                          i)
                        )
                          return ((r = null), i + "" || null);
                      }
                      return (
                        (e = "function" == typeof e ? e : nz(e || gC)),
                        (t =
                          "function" == typeof t
                            ? t
                            : nz(void 0 === t ? 64 : +t)),
                        (i.type = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : nz(t)), i)
                            : e;
                        }),
                        (i.size = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : nz(+e)), i)
                            : t;
                        }),
                        (i.context = function (e) {
                          return arguments.length
                            ? ((r = null == e ? null : e), i)
                            : r;
                        }),
                        i
                      );
                    })()
                      .type(t)
                      .size(
                        ((e, t, r) => {
                          if ("area" === t) return e;
                          switch (r) {
                            case "cross":
                              return (5 * e * e) / 9;
                            case "diamond":
                              return (0.5 * e * e) / Math.sqrt(3);
                            case "square":
                              return e * e;
                            case "star":
                              var n = 18 * gH;
                              return (
                                1.25 *
                                e *
                                e *
                                (Math.tan(n) -
                                  Math.tan(2 * n) * Math.tan(n) ** 2)
                              );
                            case "triangle":
                              return (Math.sqrt(3) * e * e) / 4;
                            case "wye":
                              return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
                            default:
                              return (Math.PI * e * e) / 4;
                          }
                        })(r, n, a),
                      )();
                  if (null !== i) return i;
                })(),
              }),
            )
          : null;
      };
    function gY(e) {
      this._context = e;
    }
    function gG(e) {
      return new gY(e);
    }
    function gX(e) {
      return e[0];
    }
    function gZ(e) {
      return e[1];
    }
    function gQ(e, t) {
      var r = nz(!0),
        n = null,
        i = gG,
        a = null,
        o = g_(l);
      function l(l) {
        var u,
          c,
          s,
          f = (l = nN(l)).length,
          d = !1;
        for (null == n && (a = i((s = o()))), u = 0; u <= f; ++u)
          (!(u < f && r((c = l[u]), u, l)) === d &&
            ((d = !d) ? a.lineStart() : a.lineEnd()),
            d && a.point(+e(c, u, l), +t(c, u, l)));
        if (s) return ((a = null), s + "" || null);
      }
      return (
        (e = "function" == typeof e ? e : void 0 === e ? gX : nz(e)),
        (t = "function" == typeof t ? t : void 0 === t ? gZ : nz(t)),
        (l.x = function (t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : nz(+t)), l)
            : e;
        }),
        (l.y = function (e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : nz(+e)), l)
            : t;
        }),
        (l.defined = function (e) {
          return arguments.length
            ? ((r = "function" == typeof e ? e : nz(!!e)), l)
            : r;
        }),
        (l.curve = function (e) {
          return arguments.length ? ((i = e), null != n && (a = i(n)), l) : i;
        }),
        (l.context = function (e) {
          return arguments.length
            ? (null == e ? (n = a = null) : (a = i((n = e))), l)
            : n;
        }),
        l
      );
    }
    function gJ(e, t, r) {
      var n = null,
        i = nz(!0),
        a = null,
        o = gG,
        l = null,
        u = g_(c);
      function c(c) {
        var s,
          f,
          d,
          p,
          h,
          y = (c = nN(c)).length,
          v = !1,
          g = Array(y),
          m = Array(y);
        for (null == a && (l = o((h = u()))), s = 0; s <= y; ++s) {
          if (!(s < y && i((p = c[s]), s, c)) === v)
            if ((v = !v)) ((f = s), l.areaStart(), l.lineStart());
            else {
              for (l.lineEnd(), l.lineStart(), d = s - 1; d >= f; --d)
                l.point(g[d], m[d]);
              (l.lineEnd(), l.areaEnd());
            }
          v &&
            ((g[s] = +e(p, s, c)),
            (m[s] = +t(p, s, c)),
            l.point(n ? +n(p, s, c) : g[s], r ? +r(p, s, c) : m[s]));
        }
        if (h) return ((l = null), h + "" || null);
      }
      function s() {
        return gQ().defined(i).curve(o).context(a);
      }
      return (
        (e = "function" == typeof e ? e : void 0 === e ? gX : nz(+e)),
        (t = "function" == typeof t ? t : void 0 === t ? nz(0) : nz(+t)),
        (r = "function" == typeof r ? r : void 0 === r ? gZ : nz(+r)),
        (c.x = function (t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : nz(+t)), (n = null), c)
            : e;
        }),
        (c.x0 = function (t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : nz(+t)), c)
            : e;
        }),
        (c.x1 = function (e) {
          return arguments.length
            ? ((n = null == e ? null : "function" == typeof e ? e : nz(+e)), c)
            : n;
        }),
        (c.y = function (e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : nz(+e)), (r = null), c)
            : t;
        }),
        (c.y0 = function (e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : nz(+e)), c)
            : t;
        }),
        (c.y1 = function (e) {
          return arguments.length
            ? ((r = null == e ? null : "function" == typeof e ? e : nz(+e)), c)
            : r;
        }),
        (c.lineX0 = c.lineY0 =
          function () {
            return s().x(e).y(t);
          }),
        (c.lineY1 = function () {
          return s().x(e).y(r);
        }),
        (c.lineX1 = function () {
          return s().x(n).y(t);
        }),
        (c.defined = function (e) {
          return arguments.length
            ? ((i = "function" == typeof e ? e : nz(!!e)), c)
            : i;
        }),
        (c.curve = function (e) {
          return arguments.length ? ((o = e), null != a && (l = o(a)), c) : o;
        }),
        (c.context = function (e) {
          return arguments.length
            ? (null == e ? (a = l = null) : (l = o((a = e))), c)
            : a;
        }),
        c
      );
    }
    function g0(e, t, r) {
      e._context.bezierCurveTo(
        (2 * e._x0 + e._x1) / 3,
        (2 * e._y0 + e._y1) / 3,
        (e._x0 + 2 * e._x1) / 3,
        (e._y0 + 2 * e._y1) / 3,
        (e._x0 + 4 * e._x1 + t) / 6,
        (e._y0 + 4 * e._y1 + r) / 6,
      );
    }
    function g1(e) {
      this._context = e;
    }
    function g2() {}
    function g5(e) {
      this._context = e;
    }
    function g3(e) {
      this._context = e;
    }
    ((gV.registerSymbol = (e, t) => {
      gq["symbol".concat(ra(e))] = t;
    }),
      (gY.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          ((this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              ((this._point = 1),
                this._line
                  ? this._context.lineTo(e, t)
                  : this._context.moveTo(e, t));
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(e, t);
          }
        },
      }),
      (g1.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x0 = this._x1 = this._y0 = this._y1 = NaN),
            (this._point = 0));
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              g0(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          ((this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              ((this._point = 1),
                this._line
                  ? this._context.lineTo(e, t)
                  : this._context.moveTo(e, t));
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              ((this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6,
                ));
            default:
              g0(this, e, t);
          }
          ((this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t));
        },
      }),
      (g5.prototype = {
        areaStart: g2,
        areaEnd: g2,
        lineStart: function () {
          ((this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
              NaN),
            (this._point = 0));
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              (this._context.moveTo(this._x2, this._y2),
                this._context.closePath());
              break;
            case 2:
              (this._context.moveTo(
                (this._x2 + 2 * this._x3) / 3,
                (this._y2 + 2 * this._y3) / 3,
              ),
                this._context.lineTo(
                  (this._x3 + 2 * this._x2) / 3,
                  (this._y3 + 2 * this._y2) / 3,
                ),
                this._context.closePath());
              break;
            case 3:
              (this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4));
          }
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              ((this._point = 1), (this._x2 = e), (this._y2 = t));
              break;
            case 1:
              ((this._point = 2), (this._x3 = e), (this._y3 = t));
              break;
            case 2:
              ((this._point = 3),
                (this._x4 = e),
                (this._y4 = t),
                this._context.moveTo(
                  (this._x0 + 4 * this._x1 + e) / 6,
                  (this._y0 + 4 * this._y1 + t) / 6,
                ));
              break;
            default:
              g0(this, e, t);
          }
          ((this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t));
        },
      }),
      (g3.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x0 = this._x1 = this._y0 = this._y1 = NaN),
            (this._point = 0));
        },
        lineEnd: function () {
          ((this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var r = (this._x0 + 4 * this._x1 + e) / 6,
                n = (this._y0 + 4 * this._y1 + t) / 6;
              this._line
                ? this._context.lineTo(r, n)
                : this._context.moveTo(r, n);
              break;
            case 3:
              this._point = 4;
            default:
              g0(this, e, t);
          }
          ((this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t));
        },
      }));
    class g6 {
      constructor(e, t) {
        ((this._context = e), (this._x = t));
      }
      areaStart() {
        this._line = 0;
      }
      areaEnd() {
        this._line = NaN;
      }
      lineStart() {
        this._point = 0;
      }
      lineEnd() {
        ((this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line));
      }
      point(e, t) {
        switch (((e *= 1), (t *= 1), this._point)) {
          case 0:
            ((this._point = 1),
              this._line
                ? this._context.lineTo(e, t)
                : this._context.moveTo(e, t));
            break;
          case 1:
            this._point = 2;
          default:
            this._x
              ? this._context.bezierCurveTo(
                  (this._x0 = (this._x0 + e) / 2),
                  this._y0,
                  this._x0,
                  t,
                  e,
                  t,
                )
              : this._context.bezierCurveTo(
                  this._x0,
                  (this._y0 = (this._y0 + t) / 2),
                  e,
                  this._y0,
                  e,
                  t,
                );
        }
        ((this._x0 = e), (this._y0 = t));
      }
    }
    function g4(e) {
      this._context = e;
    }
    g4.prototype = {
      areaStart: g2,
      areaEnd: g2,
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        this._point && this._context.closePath();
      },
      point: function (e, t) {
        ((e *= 1),
          (t *= 1),
          this._point
            ? this._context.lineTo(e, t)
            : ((this._point = 1), this._context.moveTo(e, t)));
      },
    };
    function g8(e, t, r) {
      var n = e._x1 - e._x0,
        i = t - e._x1,
        a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
        o = (r - e._y1) / (i || (n < 0 && -0));
      return (
        ((a < 0 ? -1 : 1) + (o < 0 ? -1 : 1)) *
          Math.min(
            Math.abs(a),
            Math.abs(o),
            0.5 * Math.abs((a * i + o * n) / (n + i)),
          ) || 0
      );
    }
    function g7(e, t) {
      var r = e._x1 - e._x0;
      return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
    }
    function g9(e, t, r) {
      var n = e._x0,
        i = e._y0,
        a = e._x1,
        o = e._y1,
        l = (a - n) / 3;
      e._context.bezierCurveTo(n + l, i + l * t, a - l, o - l * r, a, o);
    }
    function me(e) {
      this._context = e;
    }
    function mt(e) {
      this._context = new mr(e);
    }
    function mr(e) {
      this._context = e;
    }
    function mn(e) {
      this._context = e;
    }
    function mi(e) {
      var t,
        r,
        n = e.length - 1,
        i = Array(n),
        a = Array(n),
        o = Array(n);
      for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
        ((i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]));
      for (
        i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1;
        t < n;
        ++t
      )
        ((r = i[t] / a[t - 1]), (a[t] -= r), (o[t] -= r * o[t - 1]));
      for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t)
        i[t] = (o[t] - i[t + 1]) / a[t];
      for (t = 0, a[n - 1] = (e[n] + i[n - 1]) / 2; t < n - 1; ++t)
        a[t] = 2 * e[t + 1] - i[t + 1];
      return [i, a];
    }
    function ma(e, t) {
      ((this._context = e), (this._t = t));
    }
    function mo() {
      return (mo = Object.assign.bind()).apply(null, arguments);
    }
    function ml(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function mu(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ml(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ml(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    ((me.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
          (this._point = 0));
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            g9(this, this._t0, g7(this, this._t0));
        }
        ((this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line));
      },
      point: function (e, t) {
        var r = NaN;
        if (((t *= 1), (e *= 1) !== this._x1 || t !== this._y1)) {
          switch (this._point) {
            case 0:
              ((this._point = 1),
                this._line
                  ? this._context.lineTo(e, t)
                  : this._context.moveTo(e, t));
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              ((this._point = 3), g9(this, g7(this, (r = g8(this, e, t))), r));
              break;
            default:
              g9(this, this._t0, (r = g8(this, e, t)));
          }
          ((this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t),
            (this._t0 = r));
        }
      },
    }),
      ((mt.prototype = Object.create(me.prototype)).point = function (e, t) {
        me.prototype.point.call(this, t, e);
      }),
      (mr.prototype = {
        moveTo: function (e, t) {
          this._context.moveTo(t, e);
        },
        closePath: function () {
          this._context.closePath();
        },
        lineTo: function (e, t) {
          this._context.lineTo(t, e);
        },
        bezierCurveTo: function (e, t, r, n, i, a) {
          this._context.bezierCurveTo(t, e, n, r, a, i);
        },
      }),
      (mn.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x = []), (this._y = []));
        },
        lineEnd: function () {
          var e = this._x,
            t = this._y,
            r = e.length;
          if (r)
            if (
              (this._line
                ? this._context.lineTo(e[0], t[0])
                : this._context.moveTo(e[0], t[0]),
              2 === r)
            )
              this._context.lineTo(e[1], t[1]);
            else
              for (var n = mi(e), i = mi(t), a = 0, o = 1; o < r; ++a, ++o)
                this._context.bezierCurveTo(
                  n[0][a],
                  i[0][a],
                  n[1][a],
                  i[1][a],
                  e[o],
                  t[o],
                );
          ((this._line || (0 !== this._line && 1 === r)) &&
            this._context.closePath(),
            (this._line = 1 - this._line),
            (this._x = this._y = null));
        },
        point: function (e, t) {
          (this._x.push(+e), this._y.push(+t));
        },
      }),
      (ma.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x = this._y = NaN), (this._point = 0));
        },
        lineEnd: function () {
          (0 < this._t &&
            this._t < 1 &&
            2 === this._point &&
            this._context.lineTo(this._x, this._y),
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
            this._line >= 0 &&
              ((this._t = 1 - this._t), (this._line = 1 - this._line)));
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              ((this._point = 1),
                this._line
                  ? this._context.lineTo(e, t)
                  : this._context.moveTo(e, t));
              break;
            case 1:
              this._point = 2;
            default:
              if (this._t <= 0)
                (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
              else {
                var r = this._x * (1 - this._t) + e * this._t;
                (this._context.lineTo(r, this._y), this._context.lineTo(r, t));
              }
          }
          ((this._x = e), (this._y = t));
        },
      }));
    var mc = {
        curveBasisClosed: function (e) {
          return new g5(e);
        },
        curveBasisOpen: function (e) {
          return new g3(e);
        },
        curveBasis: function (e) {
          return new g1(e);
        },
        curveBumpX: function (e) {
          return new g6(e, !0);
        },
        curveBumpY: function (e) {
          return new g6(e, !1);
        },
        curveLinearClosed: function (e) {
          return new g4(e);
        },
        curveLinear: gG,
        curveMonotoneX: function (e) {
          return new me(e);
        },
        curveMonotoneY: function (e) {
          return new mt(e);
        },
        curveNatural: function (e) {
          return new mn(e);
        },
        curveStep: function (e) {
          return new ma(e, 0.5);
        },
        curveStepAfter: function (e) {
          return new ma(e, 1);
        },
        curveStepBefore: function (e) {
          return new ma(e, 0);
        },
      },
      ms = (e) => nU(e.x) && nU(e.y),
      mf = (e) => null != e.base && ms(e.base) && ms(e),
      md = (e) => e.x,
      mp = (e) => e.y,
      mh = (e) => {
        var { className: t, points: r, path: n, pathRef: i } = e,
          a = nT(iD);
        if ((!r || !r.length) && !n) return null;
        var o = {
            type: e.type,
            points: e.points,
            baseLine: e.baseLine,
            layout: e.layout || a,
            connectNulls: e.connectNulls,
          },
          l =
            r && r.length
              ? ((e) => {
                  var {
                      type: t = "linear",
                      points: r = [],
                      baseLine: n,
                      layout: i,
                      connectNulls: a = !1,
                    } = e,
                    o = ((e, t) => {
                      if ("function" == typeof e) return e;
                      var r = "curve".concat(ra(e));
                      if (("curveMonotone" === r || "curveBump" === r) && t) {
                        var n =
                          mc["".concat(r).concat("vertical" === t ? "Y" : "X")];
                        if (n) return n;
                      }
                      return mc[r] || gG;
                    })(t, i),
                    l = a ? r.filter(ms) : r;
                  if (Array.isArray(n)) {
                    var u = r.map((e, t) => mu(mu({}, e), {}, { base: n[t] }));
                    return (
                      "vertical" === i
                        ? gJ()
                            .y(mp)
                            .x1(md)
                            .x0((e) => e.base.x)
                        : gJ()
                            .x(md)
                            .y1(mp)
                            .y0((e) => e.base.y)
                    )
                      .defined(mf)
                      .curve(o)(a ? u.filter(mf) : u);
                  }
                  return (
                    "vertical" === i && t8(n)
                      ? gJ().y(mp).x1(md).x0(n)
                      : t8(n)
                        ? gJ().x(md).y1(mp).y0(n)
                        : gQ().x(md).y(mp)
                  )
                    .defined(ms)
                    .curve(o)(l);
                })(o)
              : n;
        return R.createElement(
          "path",
          mo({}, hb(e), vi(e), {
            className: ic("recharts-curve", t),
            d: null === l ? void 0 : l,
            ref: i,
          }),
        );
      },
      my = ["option", "shapeType", "activeClassName", "inActiveClassName"];
    function mv(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function mg(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? mv(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : mv(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function mm(e) {
      var { shapeType: t, elementProps: r } = e;
      switch (t) {
        case "rectangle":
          return R.createElement(go, r);
        case "trapezoid":
          return R.createElement(gp, r);
        case "sector":
          return R.createElement(gb, r);
        case "symbols":
          if ("symbols" === t) return R.createElement(gV, r);
          break;
        case "curve":
          return R.createElement(mh, r);
        default:
          return null;
      }
    }
    function mb(e) {
      var t,
        {
          option: r,
          shapeType: n,
          activeClassName: i = "recharts-active-shape",
          inActiveClassName: a = "recharts-shape",
        } = e,
        o = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
              ((r = a[n]),
                -1 === t.indexOf(r) &&
                  {}.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
          }
          return i;
        })(e, my);
      if ((0, R.isValidElement)(r))
        t = (0, R.cloneElement)(
          r,
          mg(mg({}, o), (0, R.isValidElement)(r) ? r.props : r),
        );
      else if ("function" == typeof r) t = r(o, o.index);
      else if ((0, v4.default)(r) && "boolean" != typeof r) {
        var l = mg(mg({}, o), r);
        t = R.createElement(mm, { shapeType: n, elementProps: l });
      } else t = R.createElement(mm, { shapeType: n, elementProps: o });
      return o.isActive
        ? R.createElement(yo, { className: i }, t)
        : R.createElement(yo, { className: a }, t);
    }
    var mx = ["id"],
      mw = ["type", "layout", "connectNulls", "needClip", "shape"],
      mO = [
        "activeDot",
        "animateNewValues",
        "animationBegin",
        "animationDuration",
        "animationEasing",
        "connectNulls",
        "dot",
        "hide",
        "isAnimationActive",
        "label",
        "legendType",
        "xAxisId",
        "yAxisId",
        "id",
      ];
    function mj() {
      return (mj = Object.assign.bind()).apply(null, arguments);
    }
    function mP(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function m_(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? mP(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : mP(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function mE(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          ((r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]));
      }
      return i;
    }
    var mS = yn.memo((e) => {
        var {
            dataKey: t,
            data: r,
            stroke: n,
            strokeWidth: i,
            fill: a,
            name: o,
            hide: l,
            unit: u,
            tooltipType: c,
            id: s,
          } = e,
          f = {
            dataDefinedOnItem: r,
            getPosition: rl,
            settings: {
              stroke: n,
              strokeWidth: i,
              fill: a,
              dataKey: t,
              nameKey: void 0,
              name: n2(o, t),
              hide: l,
              type: c,
              color: n,
              unit: u,
              graphicalItemId: s,
            },
          };
        return yn.createElement(vm, { tooltipEntrySettings: f });
      }),
      mk = (e, t) => "".concat(t, "px ").concat(e, "px");
    function mA(e) {
      var { clipPathId: t, points: r, props: n } = e,
        { dot: i, dataKey: a, needClip: o } = n,
        { id: l } = n,
        u = hb(mE(n, mx));
      return yn.createElement(vp, {
        points: r,
        dot: i,
        className: "recharts-line-dots",
        dotClassName: "recharts-line-dot",
        dataKey: a,
        baseProps: u,
        needClip: o,
        clipPathId: t,
      });
    }
    function mM(e) {
      var { showLabels: t, children: r, points: n } = e,
        i = (0, yn.useMemo)(
          () =>
            null == n
              ? void 0
              : n.map((e) => {
                  var t,
                    r,
                    n = {
                      x: null != (t = e.x) ? t : 0,
                      y: null != (r = e.y) ? r : 0,
                      width: 0,
                      lowerWidth: 0,
                      upperWidth: 0,
                      height: 0,
                    };
                  return m_(
                    m_({}, n),
                    {},
                    {
                      value: e.value,
                      payload: e.payload,
                      viewBox: n,
                      parentViewBox: void 0,
                      fill: void 0,
                    },
                  );
                }),
          [n],
        );
      return yn.createElement(y9, { value: t ? i : void 0 }, r);
    }
    function mC(e) {
      var {
          clipPathId: t,
          pathRef: r,
          points: n,
          strokeDasharray: i,
          props: a,
        } = e,
        { type: o, layout: l, connectNulls: u, needClip: c, shape: s } = a,
        f = m_(
          m_({}, hw(mE(a, mw))),
          {},
          {
            fill: "none",
            className: "recharts-line-curve",
            clipPath: c ? "url(#clipPath-".concat(t, ")") : void 0,
            points: n,
            type: o,
            layout: l,
            connectNulls: u,
            strokeDasharray: null != i ? i : a.strokeDasharray,
          },
        );
      return yn.createElement(
        yn.Fragment,
        null,
        (null == n ? void 0 : n.length) > 1 &&
          yn.createElement(
            mb,
            mj({ shapeType: "curve", option: s }, f, { pathRef: r }),
          ),
        yn.createElement(mA, { points: n, clipPathId: t, props: a }),
      );
    }
    function mT(e) {
      var {
          clipPathId: t,
          props: r,
          pathRef: n,
          previousPointsRef: i,
          longestAnimatedLengthRef: a,
        } = e,
        {
          points: o,
          strokeDasharray: l,
          isAnimationActive: u,
          animationBegin: c,
          animationDuration: s,
          animationEasing: f,
          animateNewValues: d,
          width: p,
          height: h,
          onAnimationEnd: y,
          onAnimationStart: v,
        } = r,
        g = i.current,
        m = vD(o, "recharts-line-"),
        b = (0, yn.useRef)(m),
        [x, w] = (0, yn.useState)(!1),
        O = (0, yn.useCallback)(() => {
          ("function" == typeof y && y(), w(!1));
        }, [y]),
        j = (0, yn.useCallback)(() => {
          ("function" == typeof v && v(), w(!0));
        }, [v]),
        P = (function (e) {
          try {
            return (e && e.getTotalLength && e.getTotalLength()) || 0;
          } catch (e) {
            return 0;
          }
        })(n.current),
        _ = (0, yn.useRef)(0);
      b.current !== m && ((_.current = a.current), (b.current = m));
      var E = _.current;
      return yn.createElement(
        mM,
        { points: o, showLabels: !x },
        r.children,
        yn.createElement(
          v6,
          {
            animationId: m,
            begin: c,
            duration: s,
            isActive: u,
            easing: f,
            onAnimationEnd: O,
            onAnimationStart: j,
            key: m,
          },
          (e) => {
            var c,
              s = Math.min(rn(E, P + E, e), P);
            if (
              ((c = u
                ? l
                  ? ((e, t, r) => {
                      var n = r.reduce((e, t) => e + t, 0);
                      if (!n) return mk(t, e);
                      for (
                        var i = Math.floor(e / n),
                          a = e % n,
                          o = [],
                          l = 0,
                          u = 0;
                        l < r.length;
                        u += null != (c = r[l]) ? c : 0, ++l
                      ) {
                        var c,
                          s = r[l];
                        if (null != s && u + s > a) {
                          o = [...r.slice(0, l), a - u];
                          break;
                        }
                      }
                      var f = o.length % 2 == 0 ? [0, t] : [t];
                      return [
                        ...(function (e, t) {
                          for (
                            var r = e.length % 2 != 0 ? [...e, 0] : e,
                              n = [],
                              i = 0;
                            i < t;
                            ++i
                          )
                            n.push(...r);
                          return n;
                        })(r, i),
                        ...o,
                        ...f,
                      ]
                        .map((e) => "".concat(e, "px"))
                        .join(", ");
                    })(
                      s,
                      P,
                      ""
                        .concat(l)
                        .split(/[,\s]+/gim)
                        .map((e) => parseFloat(e)),
                    )
                  : mk(P, s)
                : null == l
                  ? void 0
                  : String(l)),
              e > 0 &&
                P > 0 &&
                ((i.current = o), (a.current = Math.max(a.current, s))),
              g)
            ) {
              var f = g.length / o.length,
                y =
                  1 === e
                    ? o
                    : o.map((t, r) => {
                        var n = Math.floor(r * f);
                        if (g[n]) {
                          var i = g[n];
                          return m_(
                            m_({}, t),
                            {},
                            { x: rn(i.x, t.x, e), y: rn(i.y, t.y, e) },
                          );
                        }
                        return d
                          ? m_(
                              m_({}, t),
                              {},
                              { x: rn(2 * p, t.x, e), y: rn(h / 2, t.y, e) },
                            )
                          : m_(m_({}, t), {}, { x: t.x, y: t.y });
                      });
              return (
                (i.current = y),
                yn.createElement(mC, {
                  props: r,
                  points: y,
                  clipPathId: t,
                  pathRef: n,
                  strokeDasharray: c,
                })
              );
            }
            return yn.createElement(mC, {
              props: r,
              points: o,
              clipPathId: t,
              pathRef: n,
              strokeDasharray: c,
            });
          },
        ),
        yn.createElement(vr, { label: r.label }),
      );
    }
    function mD(e) {
      var { clipPathId: t, props: r } = e,
        n = (0, yn.useRef)(null),
        i = (0, yn.useRef)(0),
        a = (0, yn.useRef)(null);
      return yn.createElement(mT, {
        props: r,
        clipPathId: t,
        previousPointsRef: n,
        longestAnimatedLengthRef: i,
        pathRef: a,
      });
    }
    var mI = (e, t) => {
      var r, n;
      return {
        x: null != (r = e.x) ? r : void 0,
        y: null != (n = e.y) ? n : void 0,
        value: e.value,
        errorVal: nH(e.payload, t),
      };
    };
    class mN extends yn.Component {
      render() {
        var {
          hide: e,
          dot: t,
          points: r,
          className: n,
          xAxisId: i,
          yAxisId: a,
          top: o,
          left: l,
          width: u,
          height: c,
          id: s,
          needClip: f,
          zIndex: d,
        } = this.props;
        if (e) return null;
        var p = ic("recharts-line", n),
          { r: h, strokeWidth: y } = (function (e) {
            var t = hx(e);
            if (null != t) {
              var { r, strokeWidth: n } = t,
                i = Number(r),
                a = Number(n);
              return (
                (Number.isNaN(i) || i < 0) && (i = 3),
                (Number.isNaN(a) || a < 0) && (a = 2),
                { r: i, strokeWidth: a }
              );
            }
            return { r: 3, strokeWidth: 2 };
          })(t),
          v = vl(t),
          g = 2 * h + y,
          m = f
            ? "url(#clipPath-".concat(v ? "" : "dots-").concat(s, ")")
            : void 0;
        return yn.createElement(
          yF,
          { zIndex: d },
          yn.createElement(
            yo,
            { className: p },
            f &&
              yn.createElement(
                "defs",
                null,
                yn.createElement(vj, { clipPathId: s, xAxisId: i, yAxisId: a }),
                !v &&
                  yn.createElement(
                    "clipPath",
                    { id: "clipPath-dots-".concat(s) },
                    yn.createElement("rect", {
                      x: l - g / 2,
                      y: o - g / 2,
                      width: u + g,
                      height: c + g,
                    }),
                  ),
              ),
            yn.createElement(
              vw,
              {
                xAxisId: i,
                yAxisId: a,
                data: r,
                dataPointFormatter: mI,
                errorBarOffset: 0,
              },
              yn.createElement(mD, { props: this.props, clipPathId: s }),
            ),
          ),
          yn.createElement(vg, {
            activeDot: this.props.activeDot,
            points: r,
            mainColor: this.props.stroke,
            itemDataKey: this.props.dataKey,
            clipPath: m,
          }),
        );
      }
    }
    var mz = {
      activeDot: !0,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      connectNulls: !1,
      dot: !0,
      fill: "#fff",
      hide: !1,
      isAnimationActive: "auto",
      label: !1,
      legendType: "line",
      stroke: "#3182bd",
      strokeWidth: 1,
      xAxisId: 0,
      yAxisId: 0,
      zIndex: at.line,
      type: "linear",
    };
    function mL(e) {
      var t = h4(e, mz),
        {
          activeDot: r,
          animateNewValues: n,
          animationBegin: i,
          animationDuration: a,
          animationEasing: o,
          connectNulls: l,
          dot: u,
          hide: c,
          isAnimationActive: s,
          label: f,
          legendType: d,
          xAxisId: p,
          yAxisId: h,
          id: y,
        } = t,
        v = mE(t, mO),
        { needClip: g } = vO(p, h),
        m = nT(h0),
        b = nT(iD),
        x = io(),
        w = nT((e) => vC(e, p, h, x, y));
      if (("horizontal" !== b && "vertical" !== b) || null == w || null == m)
        return null;
      var { height: O, width: j, x: P, y: _ } = m;
      return yn.createElement(
        mN,
        mj({}, v, {
          id: y,
          connectNulls: l,
          dot: u,
          activeDot: r,
          animateNewValues: n,
          animationBegin: i,
          animationDuration: a,
          animationEasing: o,
          isAnimationActive: s,
          hide: c,
          label: f,
          legendType: d,
          xAxisId: p,
          yAxisId: h,
          points: w,
          layout: b,
          height: O,
          width: j,
          left: P,
          top: _,
          needClip: g,
        }),
      );
    }
    var mR = yn.memo(function (e) {
      var t = h4(e, mz),
        r = io();
      return yn.createElement(vz, { id: t.id, type: "line" }, (e) =>
        yn.createElement(
          yn.Fragment,
          null,
          yn.createElement(vT, {
            legendPayload: ((e) => {
              var {
                dataKey: t,
                name: r,
                stroke: n,
                legendType: i,
                hide: a,
              } = e;
              return [
                {
                  inactive: a,
                  dataKey: t,
                  type: i,
                  color: n,
                  value: n2(r, t),
                  payload: e,
                },
              ];
            })(t),
          }),
          yn.createElement(mS, {
            dataKey: t.dataKey,
            data: t.data,
            stroke: t.stroke,
            strokeWidth: t.strokeWidth,
            fill: t.fill,
            name: t.name,
            hide: t.hide,
            unit: t.unit,
            tooltipType: t.tooltipType,
            id: e,
          }),
          yn.createElement(vL, {
            type: "line",
            id: e,
            data: t.data,
            xAxisId: t.xAxisId,
            yAxisId: t.yAxisId,
            zAxisId: 0,
            dataKey: t.dataKey,
            hide: t.hide,
            isPanorama: r,
          }),
          yn.createElement(mL, mj({}, t, { id: e })),
        ),
      );
    }, hc);
    mR.displayName = "Line";
    var mF = function (e) {
      var { width: t, height: r } = e,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        i = ((((n % 180) + 180) % 180) * Math.PI) / 180,
        a = Math.atan(r / t);
      return Math.abs(
        i > a && i < Math.PI - a ? r / Math.sin(i) : t / Math.cos(i),
      );
    };
    function mB(e, t) {
      if (t < 1) return [];
      if (1 === t) return e;
      for (var r = [], n = 0; n < e.length; n += t) {
        var i = e[n];
        void 0 !== i && r.push(i);
      }
      return r;
    }
    function m$(e, t, r, n, i) {
      if (e * t < e * n || e * t > e * i) return !1;
      var a = r();
      return e * (t - (e * a) / 2 - n) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
    }
    function mU(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function mK(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? mU(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : mU(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function mW(e, t, r) {
      var n,
        {
          tick: i,
          ticks: a,
          viewBox: o,
          minTickGap: l,
          orientation: u,
          interval: c,
          tickFormatter: s,
          unit: f,
          angle: d,
        } = e;
      if (!a || !a.length || !i) return [];
      if (t8(c) || pX.isSsr)
        return null != (n = mB(a, (t8(c) ? c : 0) + 1)) ? n : [];
      var p = "top" === u || "bottom" === u ? "width" : "height",
        h =
          f && "width" === p
            ? yp(f, { fontSize: t, letterSpacing: r })
            : { width: 0, height: 0 },
        y = (e, n) => {
          var i,
            a = "function" == typeof s ? s(e.value, n) : e.value;
          return "width" === p
            ? ((i = yp(a, { fontSize: t, letterSpacing: r })),
              mF({ width: i.width + h.width, height: i.height + h.height }, d))
            : yp(a, { fontSize: t, letterSpacing: r })[p];
        },
        v = a[0],
        g = a[1],
        m =
          a.length >= 2 && null != v && null != g
            ? t3(g.coordinate - v.coordinate)
            : 1,
        b = (function (e, t, r) {
          var n = "width" === r,
            { x: i, y: a, width: o, height: l } = e;
          return 1 === t
            ? { start: n ? i : a, end: n ? i + o : a + l }
            : { start: n ? i + o : a + l, end: n ? i : a };
        })(o, m, p);
      return "equidistantPreserveStart" === c
        ? (function (e, t, r, n, i) {
            for (
              var a,
                o = (n || []).slice(),
                { start: l, end: u } = t,
                c = 0,
                s = 1,
                f = l;
              s <= o.length;
            )
              if (
                (a = (function () {
                  var t,
                    a = null == n ? void 0 : n[c];
                  if (void 0 === a) return { v: mB(n, s) };
                  var o = c,
                    d = () => (void 0 === t && (t = r(a, o)), t),
                    p = a.coordinate,
                    h = 0 === c || m$(e, p, d, f, u);
                  (h || ((c = 0), (f = l), (s += 1)),
                    h && ((f = p + e * (d() / 2 + i)), (c += s)));
                })())
              )
                return a.v;
            return [];
          })(m, b, y, a, l)
        : "equidistantPreserveEnd" === c
          ? (function (e, t, r, n, i) {
              var a = (n || []).slice().length;
              if (0 === a) return [];
              for (var { start: o, end: l } = t, u = 1; u <= a; u++) {
                for (
                  var c, s = (a - 1) % u, f = o, d = !0, p = s;
                  p < a &&
                  (0 ===
                    (c = (function () {
                      var t,
                        a = n[p];
                      if (null == a) return 0;
                      var o = p,
                        u = () => (void 0 === t && (t = r(a, o)), t),
                        c = a.coordinate,
                        h = p === s || m$(e, c, u, f, l);
                      if (!h) return ((d = !1), 1);
                      h && (f = c + e * (u() / 2 + i));
                    })()) ||
                    1 !== c);
                  p += u
                );
                if (d) {
                  for (var h = [], y = s; y < a; y += u) {
                    var v = n[y];
                    null != v && h.push(v);
                  }
                  return h;
                }
              }
              return [];
            })(m, b, y, a, l)
          : ("preserveStart" === c || "preserveStartEnd" === c
              ? (function (e, t, r, n, i, a) {
                  var o = (n || []).slice(),
                    l = o.length,
                    { start: u, end: c } = t;
                  if (a) {
                    var s = n[l - 1];
                    if (null != s) {
                      var f = r(s, l - 1),
                        d = e * (s.coordinate + (e * f) / 2 - c);
                      ((o[l - 1] = s =
                        mK(
                          mK({}, s),
                          {},
                          {
                            tickCoord:
                              d > 0 ? s.coordinate - d * e : s.coordinate,
                          },
                        )),
                        null != s.tickCoord &&
                          m$(e, s.tickCoord, () => f, u, c) &&
                          ((c = s.tickCoord - e * (f / 2 + i)),
                          (o[l - 1] = mK(mK({}, s), {}, { isShow: !0 }))));
                    }
                  }
                  for (
                    var p = a ? l - 1 : l,
                      h = function (t) {
                        var n,
                          a = o[t];
                        if (null == a) return 1;
                        var l = a,
                          s = () => (void 0 === n && (n = r(a, t)), n);
                        if (0 === t) {
                          var f = e * (l.coordinate - (e * s()) / 2 - u);
                          o[t] = l = mK(
                            mK({}, l),
                            {},
                            {
                              tickCoord:
                                f < 0 ? l.coordinate - f * e : l.coordinate,
                            },
                          );
                        } else
                          o[t] = l = mK(
                            mK({}, l),
                            {},
                            { tickCoord: l.coordinate },
                          );
                        null != l.tickCoord &&
                          m$(e, l.tickCoord, s, u, c) &&
                          ((u = l.tickCoord + e * (s() / 2 + i)),
                          (o[t] = mK(mK({}, l), {}, { isShow: !0 })));
                      },
                      y = 0;
                    y < p;
                    y++
                  )
                    if (h(y)) continue;
                  return o;
                })(m, b, y, a, l, "preserveStartEnd" === c)
              : (function (e, t, r, n, i) {
                  for (
                    var a = (n || []).slice(),
                      o = a.length,
                      { start: l } = t,
                      { end: u } = t,
                      c = function (t) {
                        var n,
                          c = a[t];
                        if (null == c) return 1;
                        var s = c,
                          f = () => (void 0 === n && (n = r(c, t)), n);
                        if (t === o - 1) {
                          var d = e * (s.coordinate + (e * f()) / 2 - u);
                          a[t] = s = mK(
                            mK({}, s),
                            {},
                            {
                              tickCoord:
                                d > 0 ? s.coordinate - d * e : s.coordinate,
                            },
                          );
                        } else
                          a[t] = s = mK(
                            mK({}, s),
                            {},
                            { tickCoord: s.coordinate },
                          );
                        null != s.tickCoord &&
                          m$(e, s.tickCoord, f, l, u) &&
                          ((u = s.tickCoord - e * (f() / 2 + i)),
                          (a[t] = mK(mK({}, s), {}, { isShow: !0 })));
                      },
                      s = o - 1;
                    s >= 0;
                    s--
                  )
                    if (c(s)) continue;
                  return a;
                })(m, b, y, a, l)
            ).filter((e) => e.isShow);
    }
    var mq = [
      "axisLine",
      "width",
      "height",
      "className",
      "hide",
      "ticks",
      "axisType",
      "axisId",
    ];
    function mH() {
      return (mH = Object.assign.bind()).apply(null, arguments);
    }
    function mV(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function mY(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? mV(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : mV(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var mG = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      viewBox: { x: 0, y: 0, width: 0, height: 0 },
      orientation: "bottom",
      ticks: [],
      stroke: "#666",
      tickLine: !0,
      axisLine: !0,
      tick: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd",
      zIndex: at.axis,
    };
    function mX(e) {
      var {
        x: t,
        y: r,
        width: n,
        height: i,
        orientation: a,
        mirror: o,
        axisLine: l,
        otherSvgProps: u,
      } = e;
      if (!l) return null;
      var c = mY(mY(mY({}, u), hb(l)), {}, { fill: "none" });
      if ("top" === a || "bottom" === a) {
        var s = +(("top" === a && !o) || ("bottom" === a && o));
        c = mY(
          mY({}, c),
          {},
          { x1: t, y1: r + s * i, x2: t + n, y2: r + s * i },
        );
      } else {
        var f = +(("left" === a && !o) || ("right" === a && o));
        c = mY(
          mY({}, c),
          {},
          { x1: t + f * n, y1: r, x2: t + f * n, y2: r + i },
        );
      }
      return R.createElement(
        "line",
        mH({}, c, {
          className: ic(
            "recharts-cartesian-axis-line",
            (0, t1.default)(l, "className"),
          ),
        }),
      );
    }
    function mZ(e) {
      var t,
        { option: r, tickProps: n, value: i } = e,
        a = ic(n.className, "recharts-cartesian-axis-tick-value");
      if (R.isValidElement(r))
        t = R.cloneElement(r, mY(mY({}, n), {}, { className: a }));
      else if ("function" == typeof r)
        t = r(mY(mY({}, n), {}, { className: a }));
      else {
        var o = "recharts-cartesian-axis-tick-value";
        ("boolean" != typeof r &&
          (o = ic(
            o,
            r &&
              "object" == typeof r &&
              "className" in r &&
              "string" == typeof r.className
              ? r.className
              : "",
          )),
          (t = R.createElement(yL, mH({}, n, { className: o }), i)));
      }
      return t;
    }
    function mQ(e) {
      var { ticks: t, axisType: r, axisId: n } = e,
        i = nk();
      return (
        (0, R.useEffect)(
          () =>
            null == n || null == r
              ? rl
              : (i(
                  hr({
                    ticks: t.map((e) => ({
                      value: e.value,
                      coordinate: e.coordinate,
                      offset: e.offset,
                      index: e.index,
                    })),
                    axisId: n,
                    axisType: r,
                  }),
                ),
                () => {
                  i(hn({ axisId: n, axisType: r }));
                }),
          [i, t, n, r],
        ),
        null
      );
    }
    var mJ = (0, R.forwardRef)((e, t) => {
        var {
            ticks: r = [],
            tick: n,
            tickLine: i,
            stroke: a,
            tickFormatter: o,
            unit: l,
            padding: u,
            tickTextProps: c,
            orientation: s,
            mirror: f,
            x: d,
            y: p,
            width: h,
            height: y,
            tickSize: v,
            tickMargin: g,
            fontSize: m,
            letterSpacing: b,
            getTicksConfig: x,
            events: w,
            axisType: O,
            axisId: j,
          } = e,
          P = mW(mY(mY({}, x), {}, { ticks: r }), m, b),
          _ = hb(x),
          E = hx(n),
          S = yM(_.textAnchor)
            ? _.textAnchor
            : (function (e, t) {
                switch (e) {
                  case "left":
                    return t ? "start" : "end";
                  case "right":
                    return t ? "end" : "start";
                  default:
                    return "middle";
                }
              })(s, f),
          k = (function (e, t) {
            switch (e) {
              case "left":
              case "right":
                return "middle";
              case "top":
                return t ? "start" : "end";
              default:
                return t ? "end" : "start";
            }
          })(s, f),
          A = {};
        "object" == typeof i && (A = i);
        var M = mY(mY({}, _), {}, { fill: "none" }, A),
          C = P.map((e) =>
            mY(
              { entry: e },
              (function (e, t, r, n, i, a, o, l, u) {
                var c,
                  s,
                  f,
                  d,
                  p,
                  h,
                  y = l ? -1 : 1,
                  v = e.tickSize || o,
                  g = t8(e.tickCoord) ? e.tickCoord : e.coordinate;
                switch (a) {
                  case "top":
                    ((c = s = e.coordinate),
                      (h = (f = (d = r + !l * i) - y * v) - y * u),
                      (p = g));
                    break;
                  case "left":
                    ((f = d = e.coordinate),
                      (p = (c = (s = t + !l * n) - y * v) - y * u),
                      (h = g));
                    break;
                  case "right":
                    ((f = d = e.coordinate),
                      (p = (c = (s = t + l * n) + y * v) + y * u),
                      (h = g));
                    break;
                  default:
                    ((c = s = e.coordinate),
                      (h = (f = (d = r + l * i) + y * v) + y * u),
                      (p = g));
                }
                return {
                  line: { x1: c, y1: f, x2: s, y2: d },
                  tick: { x: p, y: h },
                };
              })(e, d, p, h, y, s, v, f, g),
            ),
          ),
          T = C.map((e) => {
            var { entry: t, line: r } = e;
            return R.createElement(
              yo,
              {
                className: "recharts-cartesian-axis-tick",
                key: "tick-"
                  .concat(t.value, "-")
                  .concat(t.coordinate, "-")
                  .concat(t.tickCoord),
              },
              i &&
                R.createElement(
                  "line",
                  mH({}, M, r, {
                    className: ic(
                      "recharts-cartesian-axis-tick-line",
                      (0, t1.default)(i, "className"),
                    ),
                  }),
                ),
            );
          }),
          D = C.map((e, t) => {
            var r,
              i,
              { entry: s, tick: f } = e,
              d = mY(
                mY(
                  mY(
                    mY({ verticalAnchor: k }, _),
                    {},
                    { textAnchor: S, stroke: "none", fill: a },
                    f,
                  ),
                  {},
                  {
                    index: t,
                    payload: s,
                    visibleTicksCount: P.length,
                    tickFormatter: o,
                    padding: u,
                  },
                  c,
                ),
                {},
                {
                  angle:
                    null !=
                    (r =
                      null != (i = null == c ? void 0 : c.angle) ? i : _.angle)
                      ? r
                      : 0,
                },
              ),
              p = mY(mY({}, d), E);
            return R.createElement(
              yo,
              mH(
                {
                  className: "recharts-cartesian-axis-tick-label",
                  key: "tick-label-"
                    .concat(s.value, "-")
                    .concat(s.coordinate, "-")
                    .concat(s.tickCoord),
                },
                ((e, t, r) => {
                  if (
                    null === e ||
                    ("object" != typeof e && "function" != typeof e)
                  )
                    return null;
                  var n = null;
                  return (
                    Object.keys(e).forEach((i) => {
                      var a = e[i];
                      hy(i) &&
                        "function" == typeof a &&
                        (n || (n = {}), (n[i] = (e) => (a(t, r, e), null)));
                    }),
                    n
                  );
                })(w, s, t),
              ),
              n &&
                R.createElement(mZ, {
                  option: n,
                  tickProps: p,
                  value: ""
                    .concat("function" == typeof o ? o(s.value, t) : s.value)
                    .concat(l || ""),
                }),
            );
          });
        return R.createElement(
          "g",
          {
            className: "recharts-cartesian-axis-ticks recharts-".concat(
              O,
              "-ticks",
            ),
          },
          R.createElement(mQ, { ticks: P, axisId: j, axisType: O }),
          D.length > 0 &&
            R.createElement(
              yF,
              { zIndex: at.label },
              R.createElement(
                "g",
                {
                  className:
                    "recharts-cartesian-axis-tick-labels recharts-".concat(
                      O,
                      "-tick-labels",
                    ),
                  ref: t,
                },
                D,
              ),
            ),
          T.length > 0 &&
            R.createElement(
              "g",
              {
                className:
                  "recharts-cartesian-axis-tick-lines recharts-".concat(
                    O,
                    "-tick-lines",
                  ),
              },
              T,
            ),
        );
      }),
      m0 = (0, R.forwardRef)((e, t) => {
        var {
            axisLine: r,
            width: n,
            height: i,
            className: a,
            hide: o,
            ticks: l,
            axisType: u,
            axisId: c,
          } = e,
          s = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                ((r = a[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]));
            }
            return i;
          })(e, mq),
          [f, d] = (0, R.useState)(""),
          [p, h] = (0, R.useState)(""),
          y = (0, R.useRef)(null);
        (0, R.useImperativeHandle)(t, () => ({
          getCalculatedWidth: () => {
            var t;
            return ((e) => {
              var {
                  ticks: t,
                  label: r,
                  labelGapWithTick: n = 5,
                  tickSize: i = 0,
                  tickMargin: a = 0,
                } = e,
                o = 0;
              if (t) {
                Array.from(t).forEach((e) => {
                  if (e) {
                    var t = e.getBoundingClientRect();
                    t.width > o && (o = t.width);
                  }
                });
                var l = r ? r.getBoundingClientRect().width : 0;
                return Math.round(o + (i + a) + l + (r ? n : 0));
              }
              return 0;
            })({
              ticks: y.current,
              label: null == (t = e.labelRef) ? void 0 : t.current,
              labelGapWithTick: 5,
              tickSize: e.tickSize,
              tickMargin: e.tickMargin,
            });
          },
        }));
        var v = (0, R.useCallback)(
          (e) => {
            if (e) {
              var t = e.getElementsByClassName(
                "recharts-cartesian-axis-tick-value",
              );
              y.current = t;
              var r = t[0];
              if (r) {
                var n = window.getComputedStyle(r),
                  i = n.fontSize,
                  a = n.letterSpacing;
                (i !== f || a !== p) && (d(i), h(a));
              }
            }
          },
          [f, p],
        );
        return o || (null != n && n <= 0) || (null != i && i <= 0)
          ? null
          : R.createElement(
              yF,
              { zIndex: e.zIndex },
              R.createElement(
                yo,
                { className: ic("recharts-cartesian-axis", a) },
                R.createElement(mX, {
                  x: e.x,
                  y: e.y,
                  width: n,
                  height: i,
                  orientation: e.orientation,
                  mirror: e.mirror,
                  axisLine: r,
                  otherSvgProps: hb(e),
                }),
                R.createElement(mJ, {
                  ref: v,
                  axisType: u,
                  events: s,
                  fontSize: f,
                  getTicksConfig: e,
                  height: e.height,
                  letterSpacing: p,
                  mirror: e.mirror,
                  orientation: e.orientation,
                  padding: e.padding,
                  stroke: e.stroke,
                  tick: e.tick,
                  tickFormatter: e.tickFormatter,
                  tickLine: e.tickLine,
                  tickMargin: e.tickMargin,
                  tickSize: e.tickSize,
                  tickTextProps: e.tickTextProps,
                  ticks: l,
                  unit: e.unit,
                  width: e.width,
                  x: e.x,
                  y: e.y,
                  axisId: c,
                }),
                R.createElement(
                  yG,
                  {
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height,
                    lowerWidth: e.width,
                    upperWidth: e.width,
                  },
                  R.createElement(y2, { label: e.label, labelRef: e.labelRef }),
                  e.children,
                ),
              ),
            );
      }),
      m1 = R.forwardRef((e, t) => {
        var r = h4(e, mG);
        return R.createElement(m0, mH({}, r, { ref: t }));
      });
    m1.displayName = "CartesianAxis";
    var m2 = ["domain", "range"],
      m5 = ["domain", "range"];
    function m3(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          ((r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]));
      }
      return i;
    }
    function m6(e, t) {
      return (
        e === t ||
        (!!(Array.isArray(e) && 2 === e.length && Array.isArray(t)) &&
          2 === t.length &&
          e[0] === t[0] &&
          e[1] === t[1])
      );
    }
    function m4(e, t) {
      if (e === t) return !0;
      var { domain: r, range: n } = e,
        i = m3(e, m2),
        { domain: a, range: o } = t,
        l = m3(t, m5);
      return !!m6(r, a) && !!m6(n, o) && hc(i, l);
    }
    var m8 = ["type"],
      m7 = ["dangerouslySetInnerHTML", "ticks", "scale"],
      m9 = ["id", "scale"];
    function be() {
      return (be = Object.assign.bind()).apply(null, arguments);
    }
    function bt(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function br(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bt(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : bt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function bn(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          ((r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]));
      }
      return i;
    }
    function bi(e) {
      var t = nk(),
        r = (0, R.useRef)(null),
        n = iI(),
        { type: i } = e,
        a = bn(e, m8),
        o = aa(n, "xAxis", i),
        l = (0, R.useMemo)(() => {
          if (null != o) return br(br({}, a), {}, { type: o });
        }, [a, o]);
      return (
        (0, R.useLayoutEffect)(() => {
          null != l &&
            (null === r.current
              ? t(dL(l))
              : r.current !== l && t(dR({ prev: r.current, next: l })),
            (r.current = l));
        }, [l, t]),
        (0, R.useLayoutEffect)(
          () => () => {
            r.current && (t(dF(r.current)), (r.current = null));
          },
          [t],
        ),
        null
      );
    }
    var ba = (e) => {
        var { xAxisId: t, className: r } = e,
          n = nT(ii),
          i = io(),
          a = "xAxis",
          o = nT((e) => s9(e, a, t, i)),
          l = nT((e) => s0(e, t)),
          u = nT((e) => s5(e, t)),
          c = nT((e) => ck(e, t));
        if (null == l || null == u || null == c) return null;
        var { dangerouslySetInnerHTML: s, ticks: f, scale: d } = e,
          p = bn(e, m7),
          { id: h, scale: y } = c,
          v = bn(c, m9);
        return R.createElement(
          m1,
          be({}, p, v, {
            x: u.x,
            y: u.y,
            width: l.width,
            height: l.height,
            className: ic("recharts-".concat(a, " ").concat(a), r),
            viewBox: n,
            ticks: o,
            axisType: a,
            axisId: t,
          }),
        );
      },
      bo = {
        allowDataOverflow: cS.allowDataOverflow,
        allowDecimals: cS.allowDecimals,
        allowDuplicatedCategory: cS.allowDuplicatedCategory,
        angle: cS.angle,
        axisLine: mG.axisLine,
        height: cS.height,
        hide: !1,
        includeHidden: cS.includeHidden,
        interval: cS.interval,
        label: !1,
        minTickGap: cS.minTickGap,
        mirror: cS.mirror,
        orientation: cS.orientation,
        padding: cS.padding,
        reversed: cS.reversed,
        scale: cS.scale,
        tick: cS.tick,
        tickCount: cS.tickCount,
        tickLine: mG.tickLine,
        tickSize: mG.tickSize,
        type: cS.type,
        niceTicks: cS.niceTicks,
        xAxisId: 0,
      },
      bl = R.memo((e) => {
        var t = h4(e, bo);
        return R.createElement(
          R.Fragment,
          null,
          R.createElement(bi, {
            allowDataOverflow: t.allowDataOverflow,
            allowDecimals: t.allowDecimals,
            allowDuplicatedCategory: t.allowDuplicatedCategory,
            angle: t.angle,
            dataKey: t.dataKey,
            domain: t.domain,
            height: t.height,
            hide: t.hide,
            id: t.xAxisId,
            includeHidden: t.includeHidden,
            interval: t.interval,
            minTickGap: t.minTickGap,
            mirror: t.mirror,
            name: t.name,
            orientation: t.orientation,
            padding: t.padding,
            reversed: t.reversed,
            scale: t.scale,
            tick: t.tick,
            tickCount: t.tickCount,
            tickFormatter: t.tickFormatter,
            ticks: t.ticks,
            type: t.type,
            unit: t.unit,
            niceTicks: t.niceTicks,
          }),
          R.createElement(ba, t),
        );
      }, m4);
    bl.displayName = "XAxis";
    var bu = ["type"],
      bc = ["dangerouslySetInnerHTML", "ticks", "scale"],
      bs = ["id", "scale"];
    function bf() {
      return (bf = Object.assign.bind()).apply(null, arguments);
    }
    function bd(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function bp(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bd(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : bd(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function bh(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          ((r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]));
      }
      return i;
    }
    function by(e) {
      var t = nk(),
        r = (0, R.useRef)(null),
        n = iI(),
        { type: i } = e,
        a = bh(e, bu),
        o = aa(n, "yAxis", i),
        l = (0, R.useMemo)(() => {
          if (null != o) return bp(bp({}, a), {}, { type: o });
        }, [o, a]);
      return (
        (0, R.useLayoutEffect)(() => {
          null != l &&
            (null === r.current
              ? t(dB(l))
              : r.current !== l && t(d$({ prev: r.current, next: l })),
            (r.current = l));
        }, [l, t]),
        (0, R.useLayoutEffect)(
          () => () => {
            r.current && (t(dU(r.current)), (r.current = null));
          },
          [t],
        ),
        null
      );
    }
    function bv(e) {
      var { yAxisId: t, className: r, width: n, label: i } = e,
        a = (0, R.useRef)(null),
        o = (0, R.useRef)(null),
        l = nT(ii),
        u = io(),
        c = nk(),
        s = "yAxis",
        f = nT((e) => s6(e, t)),
        d = nT((e) => s3(e, t)),
        p = nT((e) => s9(e, s, t, u)),
        h = nT((e) => cC(e, t));
      if (
        ((0, R.useLayoutEffect)(() => {
          if (
            !("auto" !== n || !f || yQ(i) || (0, R.isValidElement)(i)) &&
            null != h
          ) {
            var e = a.current;
            if (e) {
              var r = e.getCalculatedWidth();
              Math.round(f.width) !== Math.round(r) &&
                c(dH({ id: t, width: r }));
            }
          }
        }, [p, f, c, i, t, n, h]),
        null == f || null == d || null == h)
      )
        return null;
      var { dangerouslySetInnerHTML: y, ticks: v, scale: g } = e,
        m = bh(e, bc),
        { id: b, scale: x } = h,
        w = bh(h, bs);
      return R.createElement(
        m1,
        bf({}, m, w, {
          ref: a,
          labelRef: o,
          x: d.x,
          y: d.y,
          tickTextProps: "auto" === n ? { width: void 0 } : { width: n },
          width: f.width,
          height: f.height,
          className: ic("recharts-".concat(s, " ").concat(s), r),
          viewBox: l,
          ticks: p,
          axisType: s,
          axisId: t,
        }),
      );
    }
    var bg = {
        allowDataOverflow: cM.allowDataOverflow,
        allowDecimals: cM.allowDecimals,
        allowDuplicatedCategory: cM.allowDuplicatedCategory,
        angle: cM.angle,
        axisLine: mG.axisLine,
        hide: !1,
        includeHidden: cM.includeHidden,
        interval: cM.interval,
        label: !1,
        minTickGap: cM.minTickGap,
        mirror: cM.mirror,
        orientation: cM.orientation,
        padding: cM.padding,
        reversed: cM.reversed,
        scale: cM.scale,
        tick: cM.tick,
        tickCount: cM.tickCount,
        tickLine: mG.tickLine,
        tickSize: mG.tickSize,
        type: cM.type,
        niceTicks: cM.niceTicks,
        width: cM.width,
        yAxisId: 0,
      },
      bm = R.memo((e) => {
        var t = h4(e, bg);
        return R.createElement(
          R.Fragment,
          null,
          R.createElement(by, {
            interval: t.interval,
            id: t.yAxisId,
            scale: t.scale,
            type: t.type,
            domain: t.domain,
            allowDataOverflow: t.allowDataOverflow,
            dataKey: t.dataKey,
            allowDuplicatedCategory: t.allowDuplicatedCategory,
            allowDecimals: t.allowDecimals,
            tickCount: t.tickCount,
            padding: t.padding,
            includeHidden: t.includeHidden,
            reversed: t.reversed,
            ticks: t.ticks,
            width: t.width,
            orientation: t.orientation,
            mirror: t.mirror,
            hide: t.hide,
            unit: t.unit,
            name: t.name,
            angle: t.angle,
            minTickGap: t.minTickGap,
            tick: t.tick,
            tickFormatter: t.tickFormatter,
            niceTicks: t.niceTicks,
          }),
          R.createElement(bv, t),
        );
      }, m4);
    bm.displayName = "YAxis";
    var bb = ["x1", "y1", "x2", "y2", "key"],
      bx = ["offset"],
      bw = ["xAxisId", "yAxisId"],
      bO = ["xAxisId", "yAxisId"];
    function bj(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function bP(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bj(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : bj(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function b_() {
      return (b_ = Object.assign.bind()).apply(null, arguments);
    }
    function bE(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          ((r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]));
      }
      return i;
    }
    var bS = (e) => {
      var { fill: t } = e;
      if (!t || "none" === t) return null;
      var { fillOpacity: r, x: n, y: i, width: a, height: o, ry: l } = e;
      return R.createElement("rect", {
        x: n,
        y: i,
        ry: l,
        width: a,
        height: o,
        stroke: "none",
        fill: t,
        fillOpacity: r,
        className: "recharts-cartesian-grid-bg",
      });
    };
    function bk(e) {
      var { option: t, lineItemProps: r } = e;
      if (R.isValidElement(t)) n = R.cloneElement(t, r);
      else if ("function" == typeof t) n = t(r);
      else {
        var n,
          i,
          { x1: a, y1: o, x2: l, y2: u, key: c } = r,
          s = null != (i = hb(bE(r, bb))) ? i : {},
          { offset: f } = s,
          d = bE(s, bx);
        n = R.createElement(
          "line",
          b_({}, d, { x1: a, y1: o, x2: l, y2: u, fill: "none", key: c }),
        );
      }
      return n;
    }
    function bA(e) {
      var { x: t, width: r, horizontal: n = !0, horizontalPoints: i } = e;
      if (!n || !i || !i.length) return null;
      var { xAxisId: a, yAxisId: o } = e,
        l = bE(e, bw),
        u = i.map((e, i) => {
          var a = bP(
            bP({}, l),
            {},
            {
              x1: t,
              y1: e,
              x2: t + r,
              y2: e,
              key: "line-".concat(i),
              index: i,
            },
          );
          return R.createElement(bk, {
            key: "line-".concat(i),
            option: n,
            lineItemProps: a,
          });
        });
      return R.createElement(
        "g",
        { className: "recharts-cartesian-grid-horizontal" },
        u,
      );
    }
    function bM(e) {
      var { y: t, height: r, vertical: n = !0, verticalPoints: i } = e;
      if (!n || !i || !i.length) return null;
      var { xAxisId: a, yAxisId: o } = e,
        l = bE(e, bO),
        u = i.map((e, i) => {
          var a = bP(
            bP({}, l),
            {},
            {
              x1: e,
              y1: t,
              x2: e,
              y2: t + r,
              key: "line-".concat(i),
              index: i,
            },
          );
          return R.createElement(bk, {
            option: n,
            lineItemProps: a,
            key: "line-".concat(i),
          });
        });
      return R.createElement(
        "g",
        { className: "recharts-cartesian-grid-vertical" },
        u,
      );
    }
    function bC(e) {
      var {
        horizontalFill: t,
        fillOpacity: r,
        x: n,
        y: i,
        width: a,
        height: o,
        horizontalPoints: l,
        horizontal: u = !0,
      } = e;
      if (!u || !t || !t.length || null == l) return null;
      var c = l.map((e) => Math.round(e + i - i)).sort((e, t) => e - t);
      i !== c[0] && c.unshift(0);
      var s = c.map((e, l) => {
        var u = c[l + 1],
          s = null == u ? i + o - e : u - e;
        if (s <= 0) return null;
        var f = l % t.length;
        return R.createElement("rect", {
          key: "react-".concat(l),
          y: e,
          x: n,
          height: s,
          width: a,
          stroke: "none",
          fill: t[f],
          fillOpacity: r,
          className: "recharts-cartesian-grid-bg",
        });
      });
      return R.createElement(
        "g",
        { className: "recharts-cartesian-gridstripes-horizontal" },
        s,
      );
    }
    function bT(e) {
      var {
        vertical: t = !0,
        verticalFill: r,
        fillOpacity: n,
        x: i,
        y: a,
        width: o,
        height: l,
        verticalPoints: u,
      } = e;
      if (!t || !r || !r.length) return null;
      var c = u.map((e) => Math.round(e + i - i)).sort((e, t) => e - t);
      i !== c[0] && c.unshift(0);
      var s = c.map((e, t) => {
        var u = c[t + 1],
          s = null == u ? i + o - e : u - e;
        if (s <= 0) return null;
        var f = t % r.length;
        return R.createElement("rect", {
          key: "react-".concat(t),
          x: e,
          y: a,
          width: s,
          height: l,
          stroke: "none",
          fill: r[f],
          fillOpacity: n,
          className: "recharts-cartesian-grid-bg",
        });
      });
      return R.createElement(
        "g",
        { className: "recharts-cartesian-gridstripes-vertical" },
        s,
      );
    }
    var bD = (e, t) => {
        var { xAxis: r, width: n, height: i, offset: a } = e;
        return nY(
          mW(
            bP(
              bP(bP({}, mG), r),
              {},
              {
                ticks: nG(r, !0),
                viewBox: { x: 0, y: 0, width: n, height: i },
              },
            ),
          ),
          a.left,
          a.left + a.width,
          t,
        );
      },
      bI = (e, t) => {
        var { yAxis: r, width: n, height: i, offset: a } = e;
        return nY(
          mW(
            bP(
              bP(bP({}, mG), r),
              {},
              {
                ticks: nG(r, !0),
                viewBox: { x: 0, y: 0, width: n, height: i },
              },
            ),
          ),
          a.top,
          a.top + a.height,
          t,
        );
      },
      bN = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: [],
        xAxisId: 0,
        yAxisId: 0,
        syncWithTicks: !1,
        zIndex: at.grid,
      };
    function bz(e) {
      var t = nT(n5),
        r = nT(n3),
        n = iT(),
        i = bP(
          bP({}, h4(e, bN)),
          {},
          {
            x: t8(e.x) ? e.x : n.left,
            y: t8(e.y) ? e.y : n.top,
            width: t8(e.width) ? e.width : n.width,
            height: t8(e.height) ? e.height : n.height,
          },
        ),
        {
          xAxisId: a,
          yAxisId: o,
          x: l,
          y: u,
          width: c,
          height: s,
          syncWithTicks: f,
          horizontalValues: d,
          verticalValues: p,
        } = i,
        h = io(),
        y = nT((e) => s7(e, "xAxis", a, h)),
        v = nT((e) => s7(e, "yAxis", o, h));
      if (!nK(c) || !nK(s) || !t8(l) || !t8(u)) return null;
      var g = i.verticalCoordinatesGenerator || bD,
        m = i.horizontalCoordinatesGenerator || bI,
        { horizontalPoints: b, verticalPoints: x } = i;
      if ((!b || !b.length) && "function" == typeof m) {
        var w = d && d.length,
          O = m(
            {
              yAxis: v ? bP(bP({}, v), {}, { ticks: w ? d : v.ticks }) : void 0,
              width: null != t ? t : c,
              height: null != r ? r : s,
              offset: n,
            },
            !!w || f,
          );
        (id(
          Array.isArray(O),
          "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
            typeof O,
            "]",
          ),
        ),
          Array.isArray(O) && (b = O));
      }
      if ((!x || !x.length) && "function" == typeof g) {
        var j = p && p.length,
          P = g(
            {
              xAxis: y ? bP(bP({}, y), {}, { ticks: j ? p : y.ticks }) : void 0,
              width: null != t ? t : c,
              height: null != r ? r : s,
              offset: n,
            },
            !!j || f,
          );
        (id(
          Array.isArray(P),
          "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
            typeof P,
            "]",
          ),
        ),
          Array.isArray(P) && (x = P));
      }
      return R.createElement(
        yF,
        { zIndex: i.zIndex },
        R.createElement(
          "g",
          { className: "recharts-cartesian-grid" },
          R.createElement(bS, {
            fill: i.fill,
            fillOpacity: i.fillOpacity,
            x: i.x,
            y: i.y,
            width: i.width,
            height: i.height,
            ry: i.ry,
          }),
          R.createElement(bC, b_({}, i, { horizontalPoints: b })),
          R.createElement(bT, b_({}, i, { verticalPoints: x })),
          R.createElement(
            bA,
            b_({}, i, { offset: n, horizontalPoints: b, xAxis: y, yAxis: v }),
          ),
          R.createElement(
            bM,
            b_({}, i, { offset: n, verticalPoints: x, xAxis: y, yAxis: v }),
          ),
        ),
      );
    }
    function bL() {
      return (bL = Object.assign.bind()).apply(null, arguments);
    }
    function bR(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function bF(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bR(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : bR(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function bB(e) {
      return Array.isArray(e) && t7(e[0]) && t7(e[1]) ? e.join(" ~ ") : e;
    }
    bz.displayName = "CartesianGrid";
    var b$ = {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      bU = { display: "block", paddingTop: 4, paddingBottom: 4, color: "#000" },
      bK = {},
      bW = (e) => {
        var {
            separator: t = " : ",
            contentStyle: r,
            itemStyle: n,
            labelStyle: i = bK,
            payload: a,
            formatter: o,
            itemSorter: l,
            wrapperClassName: u,
            labelClassName: c,
            label: s,
            labelFormatter: f,
            accessibilityLayer: d = !1,
          } = e,
          p = bF(bF({}, b$), r),
          h = bF({ margin: 0 }, i),
          y = null != s,
          v = y ? s : "",
          g = ic("recharts-default-tooltip", u),
          m = ic("recharts-tooltip-label", c);
        return (
          y && f && null != a && (v = f(s, a)),
          R.createElement(
            "div",
            bL(
              { className: g, style: p },
              d ? { role: "status", "aria-live": "assertive" } : {},
            ),
            R.createElement(
              "p",
              { className: m, style: h },
              R.isValidElement(v) ? v : "".concat(v),
            ),
            (() => {
              if (a && a.length) {
                var e = (null == l ? a : (0, nD.default)(a, l)).map((e, r) => {
                  if (!e || "none" === e.type) return null;
                  var i = e.formatter || o || bB,
                    { value: l, name: u } = e,
                    c = l,
                    s = u,
                    f = i(l, u, e, r, a);
                  if (Array.isArray(f)) [c, s] = f;
                  else {
                    if (null == f) return null;
                    c = f;
                  }
                  var d = bF(bF({}, bU), {}, { color: e.color || bU.color }, n);
                  return R.createElement(
                    "li",
                    {
                      className: "recharts-tooltip-item",
                      key: "tooltip-item-".concat(r),
                      style: d,
                    },
                    t7(s)
                      ? R.createElement(
                          "span",
                          { className: "recharts-tooltip-item-name" },
                          s,
                        )
                      : null,
                    t7(s)
                      ? R.createElement(
                          "span",
                          { className: "recharts-tooltip-item-separator" },
                          t,
                        )
                      : null,
                    R.createElement(
                      "span",
                      { className: "recharts-tooltip-item-value" },
                      c,
                    ),
                    R.createElement(
                      "span",
                      { className: "recharts-tooltip-item-unit" },
                      e.unit || "",
                    ),
                  );
                });
                return R.createElement(
                  "ul",
                  {
                    className: "recharts-tooltip-item-list",
                    style: { padding: 0, margin: 0 },
                  },
                  e,
                );
              }
              return null;
            })(),
          )
        );
      },
      bq = "recharts-tooltip-wrapper",
      bH = { visibility: "hidden" };
    function bV(e) {
      var {
        allowEscapeViewBox: t,
        coordinate: r,
        key: n,
        offset: i,
        position: a,
        reverseDirection: o,
        tooltipDimension: l,
        viewBox: u,
        viewBoxDimension: c,
      } = e;
      if (a && t8(a[n])) return a[n];
      var s = r[n] - l - (i > 0 ? i : 0),
        f = r[n] + i;
      if (t[n]) return o[n] ? s : f;
      var d = u[n];
      return null == d
        ? 0
        : o[n]
          ? s < d
            ? Math.max(f, d)
            : Math.max(s, d)
          : null == c
            ? 0
            : f + l > d + c
              ? Math.max(s, d)
              : Math.max(f, d);
    }
    function bY(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function bG(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bY(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : bY(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    var bX = R.memo(function (e) {
        var t,
          r,
          n,
          i,
          a,
          o,
          l = v1(),
          [u, c] = R.useState(() => ({
            dismissed: !1,
            dismissedAtCoordinate: { x: 0, y: 0 },
          }));
        (R.useEffect(() => {
          var t = (t) => {
            if ("Escape" === t.key) {
              var r, n, i, a;
              c({
                dismissed: !0,
                dismissedAtCoordinate: {
                  x:
                    null != (r = null == (n = e.coordinate) ? void 0 : n.x)
                      ? r
                      : 0,
                  y:
                    null != (i = null == (a = e.coordinate) ? void 0 : a.y)
                      ? i
                      : 0,
                },
              });
            }
          };
          return (
            document.addEventListener("keydown", t),
            () => {
              document.removeEventListener("keydown", t);
            }
          );
        }, [
          null == (t = e.coordinate) ? void 0 : t.x,
          null == (r = e.coordinate) ? void 0 : r.y,
        ]),
          u.dismissed &&
            ((null != (n = null == (i = e.coordinate) ? void 0 : i.x)
              ? n
              : 0) !== u.dismissedAtCoordinate.x ||
              (null != (a = null == (o = e.coordinate) ? void 0 : o.y)
                ? a
                : 0) !== u.dismissedAtCoordinate.y) &&
            c(bG(bG({}, u), {}, { dismissed: !1 })));
        var { cssClasses: s, cssProperties: f } = (function (e) {
            var t,
              r,
              n,
              {
                allowEscapeViewBox: i,
                coordinate: a,
                offsetTop: o,
                offsetLeft: l,
                position: u,
                reverseDirection: c,
                tooltipBox: s,
                useTranslate3d: f,
                viewBox: d,
              } = e;
            return {
              cssProperties: (t =
                s.height > 0 && s.width > 0 && a
                  ? (function (e) {
                      var {
                        translateX: t,
                        translateY: r,
                        useTranslate3d: n,
                      } = e;
                      return {
                        transform: n
                          ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
                          : "translate(".concat(t, "px, ").concat(r, "px)"),
                      };
                    })({
                      translateX: (r = bV({
                        allowEscapeViewBox: i,
                        coordinate: a,
                        key: "x",
                        offset: l,
                        position: u,
                        reverseDirection: c,
                        tooltipDimension: s.width,
                        viewBox: d,
                        viewBoxDimension: d.width,
                      })),
                      translateY: (n = bV({
                        allowEscapeViewBox: i,
                        coordinate: a,
                        key: "y",
                        offset: o,
                        position: u,
                        reverseDirection: c,
                        tooltipDimension: s.height,
                        viewBox: d,
                        viewBoxDimension: d.height,
                      })),
                      useTranslate3d: f,
                    })
                  : bH),
              cssClasses: (function (e) {
                var { coordinate: t, translateX: r, translateY: n } = e;
                return ic(bq, {
                  ["".concat(bq, "-right")]: t8(r) && t && t8(t.x) && r >= t.x,
                  ["".concat(bq, "-left")]: t8(r) && t && t8(t.x) && r < t.x,
                  ["".concat(bq, "-bottom")]: t8(n) && t && t8(t.y) && n >= t.y,
                  ["".concat(bq, "-top")]: t8(n) && t && t8(t.y) && n < t.y,
                });
              })({ translateX: r, translateY: n, coordinate: a }),
            };
          })({
            allowEscapeViewBox: e.allowEscapeViewBox,
            coordinate: e.coordinate,
            offsetLeft: "number" == typeof e.offset ? e.offset : e.offset.x,
            offsetTop: "number" == typeof e.offset ? e.offset : e.offset.y,
            position: e.position,
            reverseDirection: e.reverseDirection,
            tooltipBox: {
              height: e.lastBoundingBox.height,
              width: e.lastBoundingBox.width,
            },
            useTranslate3d: e.useTranslate3d,
            viewBox: e.viewBox,
          }),
          d = e.hasPortalFromProps
            ? {}
            : bG(
                bG(
                  {
                    transition: (function (e) {
                      if (
                        (!e.prefersReducedMotion ||
                          "auto" !== e.isAnimationActive) &&
                        e.isAnimationActive &&
                        e.active
                      )
                        return "transform "
                          .concat(e.animationDuration, "ms ")
                          .concat(e.animationEasing);
                    })({
                      prefersReducedMotion: l,
                      isAnimationActive: e.isAnimationActive,
                      active: e.active,
                      animationDuration: e.animationDuration,
                      animationEasing: e.animationEasing,
                    }),
                  },
                  f,
                ),
                {},
                {
                  pointerEvents: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
              ),
          p = bG(
            bG({}, d),
            {},
            {
              visibility:
                !u.dismissed && e.active && e.hasPayload ? "visible" : "hidden",
            },
            e.wrapperStyle,
          );
        return R.createElement(
          "div",
          {
            xmlns: "http://www.w3.org/1999/xhtml",
            tabIndex: -1,
            className: s,
            style: p,
            ref: e.innerRef,
          },
          e.children,
        );
      }),
      bZ = e.i(892809),
      bQ = ["x", "y", "top", "left", "width", "height", "className"];
    function bJ() {
      return (bJ = Object.assign.bind()).apply(null, arguments);
    }
    function b0(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    var b1 = (e) => {
      var {
          x: t = 0,
          y: r = 0,
          top: n = 0,
          left: i = 0,
          width: a = 0,
          height: o = 0,
          className: l,
        } = e,
        u = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? b0(Object(r), !0).forEach(function (t) {
                  var n, i, a;
                  ((n = e),
                    (i = t),
                    (a = r[t]),
                    (i = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                          var n = r.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value.",
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : t + "";
                    })(i)) in n
                      ? Object.defineProperty(n, i, {
                          value: a,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (n[i] = a));
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : b0(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t),
                    );
                  });
          }
          return e;
        })(
          { x: t, y: r, top: n, left: i, width: a, height: o },
          (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                ((r = a[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]));
            }
            return i;
          })(e, bQ),
        );
      return t8(t) && t8(r) && t8(a) && t8(o) && t8(n) && t8(i)
        ? R.createElement(
            "path",
            bJ({}, hw(u), {
              className: ic("recharts-cross", l),
              d: "M"
                .concat(t, ",")
                .concat(n, "v")
                .concat(o, "M")
                .concat(i, ",")
                .concat(r, "h")
                .concat(a),
            }),
          )
        : null;
    };
    function b2(e) {
      var { cx: t, cy: r, radius: n, startAngle: i, endAngle: a } = e;
      return {
        points: [ae(t, r, n, i), ae(t, r, n, a)],
        cx: t,
        cy: r,
        radius: n,
        startAngle: i,
        endAngle: a,
      };
    }
    function b5(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function b3(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? b5(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : b5(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function b6() {
      return (b6 = Object.assign.bind()).apply(null, arguments);
    }
    function b4(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function b8(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? b4(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : b4(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function b7(e) {
      var { cursor: t, cursorComp: r, cursorProps: n } = e;
      return (0, R.isValidElement)(t)
        ? (0, R.cloneElement)(t, n)
        : (0, R.createElement)(r, n);
    }
    function b9(e) {
      var t,
        r,
        n,
        i,
        a,
        {
          coordinate: o,
          payload: l,
          index: u,
          offset: c,
          tooltipAxisBandSize: s,
          layout: f,
          cursor: d,
          tooltipEventType: p,
          chartName: h,
        } = e;
      if (!d || !o || ("ScatterChart" !== h && "axis" !== p)) return null;
      if ("ScatterChart" === h) ((n = o), (i = b1), (a = at.cursorLine));
      else if ("BarChart" === h)
        ((t = s / 2),
          (n = {
            stroke: "none",
            fill: "#ccc",
            x: "horizontal" === f ? o.x - t : c.left + 0.5,
            y: "horizontal" === f ? c.top + 0.5 : o.y - t,
            width: "horizontal" === f ? s : c.width - 1,
            height: "horizontal" === f ? c.height - 1 : s,
          }),
          (i = go),
          (a = at.cursorRectangle));
      else if ("radial" === f && vn(o)) {
        var { cx: y, cy: v, radius: g, startAngle: m, endAngle: b } = b2(o);
        ((n = {
          cx: y,
          cy: v,
          startAngle: m,
          endAngle: b,
          innerRadius: g,
          outerRadius: g,
        }),
          (i = gb),
          (a = at.cursorLine));
      } else
        ((n = {
          points: (function (e, t, r) {
            if ("horizontal" === e)
              return [
                { x: t.x, y: r.top },
                { x: t.x, y: r.top + r.height },
              ];
            if ("vertical" === e)
              return [
                { x: r.left, y: t.y },
                { x: r.left + r.width, y: t.y },
              ];
            if (vn(t)) {
              if ("centric" === e) {
                var {
                    cx: n,
                    cy: i,
                    innerRadius: a,
                    outerRadius: o,
                    angle: l,
                  } = t,
                  u = ae(n, i, a, l),
                  c = ae(n, i, o, l);
                return [
                  { x: u.x, y: u.y },
                  { x: c.x, y: c.y },
                ];
              }
              return b2(t);
            }
          })(f, o, c),
        }),
          (i = mh),
          (a = at.cursorLine));
      var x = "object" == typeof d && "className" in d ? d.className : void 0,
        w = b8(
          b8(b8(b8({ stroke: "#ccc", pointerEvents: "none" }, c), n), hx(d)),
          {},
          {
            payload: l,
            payloadIndex: u,
            className: ic("recharts-tooltip-cursor", x),
          },
        );
      return R.createElement(
        yF,
        { zIndex: null != (r = e.zIndex) ? r : a },
        R.createElement(b7, { cursor: d, cursorComp: i, cursorProps: w }),
      );
    }
    function xe(e) {
      var t,
        r,
        n,
        i =
          ((t = nT(c6)),
          (r = nT(f5)),
          (n = nT(f0)),
          t && n ? n0(b3(b3({}, t), {}, { scale: n }), r) : n0(void 0, r)),
        a = iT(),
        o = nT(iD),
        l = nT(i5);
      return null == i || null == a || null == o || null == l
        ? null
        : R.createElement(
            b9,
            b6({}, e, {
              offset: a,
              layout: o,
              tooltipAxisBandSize: i,
              chartName: l,
            }),
          );
    }
    function xt(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function xr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? xt(Object(r), !0).forEach(function (t) {
              var n, i, a;
              ((n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : xt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function xn(e) {
      return e.dataKey;
    }
    var xi = [],
      xa = {
        allowEscapeViewBox: { x: !1, y: !1 },
        animationDuration: 400,
        animationEasing: "ease",
        axisId: 0,
        contentStyle: {},
        cursor: !0,
        filterNull: !0,
        includeHidden: !1,
        isAnimationActive: "auto",
        itemSorter: "name",
        itemStyle: {},
        labelStyle: {},
        offset: 10,
        reverseDirection: { x: !1, y: !1 },
        separator: " : ",
        trigger: "hover",
        useTranslate3d: !1,
        wrapperStyle: {},
      };
    function xo(e) {
      var t,
        r,
        n,
        i,
        a,
        o,
        l,
        u,
        c,
        s,
        f,
        d = h4(e, xa),
        {
          active: p,
          allowEscapeViewBox: h,
          animationDuration: y,
          animationEasing: v,
          content: g,
          filterNull: m,
          isAnimationActive: b,
          offset: x,
          payloadUniqBy: w,
          position: O,
          reverseDirection: j,
          useTranslate3d: P,
          wrapperStyle: _,
          cursor: E,
          shared: S,
          trigger: k,
          defaultIndex: A,
          portal: M,
          axisId: C,
        } = d,
        T = nk(),
        D = "number" == typeof A ? String(A) : A;
      (0, R.useEffect)(() => {
        T(ni({ shared: S, trigger: k, axisId: C, active: p, defaultIndex: D }));
      }, [T, S, k, C, p, D]);
      var I = iM(),
        N = hp(),
        z = nT((e) => fu(e, S)),
        { activeIndex: L, isActive: F } =
          null != (s = nT((e) => dj(e, z, k, D))) ? s : {},
        B = nT((e) => dO(e, z, k, D)),
        $ = nT((e) => dw(e, z, k, D)),
        U = nT((e) => dx(e, z, k, D)),
        K = (0, R.useContext)(hU),
        W = null != (f = null != p ? p : F) && f,
        [q, H] = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            [t, r] = (0, R.useState)({ height: 0, left: 0, top: 0, width: 0 }),
            n = (0, R.useCallback)(
              (e) => {
                if (null != e) {
                  var n = e.getBoundingClientRect(),
                    i = {
                      height: n.height,
                      left: n.left,
                      top: n.top,
                      width: n.width,
                    };
                  (Math.abs(i.height - t.height) > 1 ||
                    Math.abs(i.left - t.left) > 1 ||
                    Math.abs(i.top - t.top) > 1 ||
                    Math.abs(i.width - t.width) > 1) &&
                    r({
                      height: i.height,
                      left: i.left,
                      top: i.top,
                      width: i.width,
                    });
                }
              },
              [t.width, t.height, t.top, t.left, ...e],
            );
          return [t, n];
        })([B, W]),
        V = "axis" === z ? $ : void 0;
      ((t = nT((e) =>
        ((e, t, r) => {
          if (null != t) {
            var n = fg(e);
            return "axis" === t
              ? "hover" === r
                ? n.axisInteraction.hover.dataKey
                : n.axisInteraction.click.dataKey
              : "hover" === r
                ? n.itemInteraction.hover.dataKey
                : n.itemInteraction.click.dataKey;
          }
        })(e, z, k),
      )),
        (r = nT(dt)),
        (n = nT(i4)),
        (i = nT(i3)),
        (a = nT(i6)),
        (l = (null == (o = nT(hR)) ? void 0 : o.sourceViewBox) != null),
        (u = iM()),
        (0, R.useEffect)(() => {
          if (!l && null != i && null != n) {
            var e = nf({
              active: W,
              coordinate: U,
              dataKey: t,
              index: L,
              label: "number" == typeof V ? String(V) : V,
              sourceViewBox: u,
              graphicalItemId: r,
            });
            hN.emit(hz, i, e, n);
          }
        }, [l, U, t, r, L, V, n, i, a, W, u]));
      var Y = null != M ? M : K;
      if (null == Y || null == I || null == z) return null;
      var G = null != B ? B : xi;
      (W || (G = xi),
        m &&
          G.length &&
          ((c = G.filter(
            (e) => null != e.value && (!0 !== e.hide || d.includeHidden),
          )),
          (G =
            !0 === w
              ? (0, bZ.default)(c, xn)
              : "function" == typeof w
                ? (0, bZ.default)(c, w)
                : c)));
      var X = G.length > 0,
        Z = xr(
          xr({}, d),
          {},
          {
            payload: G,
            label: V,
            active: W,
            activeIndex: L,
            coordinate: U,
            accessibilityLayer: N,
          },
        ),
        Q = R.createElement(
          bX,
          {
            allowEscapeViewBox: h,
            animationDuration: y,
            animationEasing: v,
            isAnimationActive: b,
            active: W,
            coordinate: U,
            hasPayload: X,
            offset: x,
            position: O,
            reverseDirection: j,
            useTranslate3d: P,
            viewBox: I,
            wrapperStyle: _,
            lastBoundingBox: q,
            innerRef: H,
            hasPortalFromProps: !!M,
          },
          R.isValidElement(g)
            ? R.cloneElement(g, Z)
            : "function" == typeof g
              ? R.createElement(g, Z)
              : R.createElement(bW, Z),
        );
      return R.createElement(
        R.Fragment,
        null,
        (0, yR.createPortal)(Q, Y),
        W &&
          R.createElement(xe, {
            cursor: E,
            tooltipEventType: z,
            coordinate: U,
            payload: G,
            index: L,
          }),
      );
    }
    e.s(
      [
        "default",
        0,
        function ({ data: e }) {
          return (0, L.jsx)(ik, {
            width: "100%",
            height: "100%",
            children: (0, L.jsxs)(yr, {
              data: e,
              margin: { top: 5, right: 20, bottom: 5, left: 0 },
              children: [
                (0, L.jsx)(bz, {
                  strokeDasharray: "3 3",
                  vertical: !1,
                  stroke: "#eedfcc",
                }),
                (0, L.jsx)(bl, {
                  dataKey: "date",
                  tickFormatter: (e) =>
                    new Date(e).toLocaleDateString("de-DE", {
                      weekday: "short",
                    }),
                  axisLine: !1,
                  tickLine: !1,
                  tick: {
                    fill: "#9a7060",
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "var(--font-nunito)",
                  },
                  dy: 10,
                }),
                (0, L.jsx)(bm, {
                  axisLine: !1,
                  tickLine: !1,
                  tick: {
                    fill: "#9a7060",
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "var(--font-nunito)",
                  },
                  tickFormatter: (e) => `€${e}`,
                  dx: -10,
                }),
                (0, L.jsx)(xo, {
                  cursor: {
                    stroke: "#CC624C",
                    strokeWidth: 2,
                    strokeDasharray: "4 4",
                  },
                  contentStyle: {
                    backgroundColor: "#fef8f5",
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 20px rgba(204,98,76,0.15)",
                    fontWeight: 700,
                  },
                  itemStyle: { color: "#CC624C", fontWeight: 800 },
                }),
                (0, L.jsx)(mR, {
                  type: "monotone",
                  dataKey: "revenue",
                  stroke: "#CC624C",
                  strokeWidth: 4,
                  dot: {
                    r: 6,
                    fill: "#f5efe8",
                    stroke: "#CC624C",
                    strokeWidth: 3,
                  },
                  activeDot: {
                    r: 8,
                    fill: "#CC624C",
                    stroke: "#f5efe8",
                    strokeWidth: 3,
                  },
                  animationDuration: 1500,
                }),
              ],
            }),
          });
        },
      ],
      634359,
    );
  },
  589117,
  (e) => {
    e.n(e.i(634359));
  },
]);
