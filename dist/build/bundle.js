!(function(e) {
function t(r) {
if (n[ r ]) {
return n[ r ].exports;
} var i = n[ r ] = { i: r, l: !1, exports: {} }; return e[ r ].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
} var n = {}; return t.m = e, t.c = n, t.i = function(e) {
return e;
}, t.d = function(e, n, r) {
t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
}, t.n = function(e) {
var n = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
}; return t.d(n, "a", n), n;
}, t.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, t.p = "/", t(t.s = 2);
})([ function(module, exports, __webpack_require__) {
"use strict"; var $ = __webpack_require__(1); $(document).ready(function() {
function updateDisplay1() {
0 === enteredEq.length ? $("#display1").html(0) : $("#display1").html(enteredEq);
} function maxEnter() {
enteredEq.length > 14 && $("#display1").css("font-size", "0.5em");
} function solveRepeatedOps() {
var e = enteredEq[ enteredEq.length - 1 ], t = /\+|\-|\*|\//; if (isNaN(e) && t.test(e)) {
return enteredEq.pop(), solveRepeatedOps();
}
} function solveInitialOpsError() {
"*" !== enteredEq[ 0 ] && "/" !== enteredEq[ 0 ] || enteredEq.shift();
} function solveRepeatedZero() {
0 === enteredEq[ 0 ] && "." !== enteredEq[ 1 ] && enteredEq.pop();
} function getAnswer() {
solveRepeatedOps(), result = eval(enteredEq.join("")), result = +result.toFixed(9), result > 999999999999 && (result = result.toExponential(2)), $("#display1").html(result).css("font-size", "1em"), $("#display2").html(enteredEq), enteredEq = [];
}$("input").focus(), $("body").on("click", function() {
$("input").focus();
}); var enteredEq = [], result, memoryTotal = 0; $("#allClearBtn").on("click", function() {
enteredEq = [], $("#display1").html(0).css("font-size", "1em"), $("#display2").html("Ans"), memoryTotal = 0, result = 0;
}), $("#clearBtn").on("click", function() {
enteredEq.pop(), updateDisplay1(), 0 === memoryTotal ? $("#display2").html("Ans") : $("#display2").html("memory: " + memoryTotal);
}), $(".number").on("click", function() {
var e = $(this).data("num"); enteredEq.push(e), 0 === e && solveRepeatedZero(), maxEnter(), updateDisplay1();
}), $(".operator").on("click", function() {
var e = $(this).data("op"); solveRepeatedOps(), enteredEq.push(e), solveInitialOpsError(), maxEnter(), updateDisplay1();
}), $("#decimalBtn").on("click", function() {
enteredEq.indexOf(".") === -1 && (0 === enteredEq.length ? enteredEq.push("0", ".") : enteredEq.push(".")), updateDisplay1();
}), $("#percentBtn").on("click", function() {
0 !== enteredEq.length ? (enteredEq.push("/", 100), updateDisplay1()) : (enteredEq.push(result, "/", 100), getAnswer());
}), $("#posnegBtn").on("click", function() {
"+" === enteredEq[ 0 ] || 0 === enteredEq.length ? (enteredEq.shift(), enteredEq.unshift("-")) : "-" === enteredEq[ 0 ] || 0 === enteredEq.length ? (enteredEq.shift(), enteredEq.unshift("+")) : "-" === enteredEq[ enteredEq.length - 1 ] ? (enteredEq.pop(), enteredEq.push("+")) : "+" === enteredEq[ enteredEq.length - 1 ] ? (enteredEq.pop(), enteredEq.push("-")) : enteredEq.push("-"), updateDisplay1();
}), $("#equalsBtn").on("click", function() {
getAnswer();
}), $("#mPlusBtn").on("click", function() {
memoryTotal += result, $("#display2").html("memory: " + memoryTotal);
}), $("#mMinusBtn").on("click", function() {
memoryTotal -= result, $("#display2").html("memory: " + memoryTotal);
}), $("#mrBtn").on("click", function() {
enteredEq[ enteredEq.length - 1 ] !== memoryTotal && (enteredEq.push(memoryTotal), updateDisplay1());
}), $("#shortcuts").on("click", function() {
$("#popup").toggle(400);
}), $("input").keydown(function(e) {
var t = e.which; switch (t) {
case 96:$("button[data-num=\"0\"]").click(); break; case 97:$("button[data-num=\"1\"]").click(); break; case 98:$("button[data-num=\"2\"]").click(); break; case 99:$("button[data-num=\"3\"]").click(); break; case 100:$("button[data-num=\"4\"]").click(); break; case 101:$("button[data-num=\"5\"]").click(); break; case 102:$("button[data-num=\"6\"]").click(); break; case 103:$("button[data-num=\"7\"]").click(); break; case 104:$("button[data-num=\"8\"]").click(); break; case 105:$("button[data-num=\"9\"]").click(); break; case 13:$("button[id = \"equalsBtn\"]").click(); break; case 32:$("button[id = \"allClearBtn\"]").click(); break; case 110:$("button[id = \"decimalBtn\"]").click(); break; case 107:$("button[data-op=\"+\"]").click(); break; case 109:$("button[data-op=\"-\"]").click(); break; case 106:$("button[data-op=\"*\"]").click(); break; case 111:$("button[data-op=\"/\"]").click();
}
});
});
}, function(e, t, n) {
var r, i;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
!(function(t, n) {
"use strict"; "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
if (!e.document) {
throw new Error("jQuery requires a window with a document");
} return n(e);
} : n(t);
})("undefined" != typeof window ? window : this, function(n, o) {
"use strict"; function a(e, t) {
t = t || ae; var n = t.createElement("script"); n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
} function s(e) {
var t = !!e && "length" in e && e.length, n = xe.type(e); return "function" !== n && !xe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
} function u(e, t) {
return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
} function l(e, t, n) {
return xe.isFunction(t) ? xe.grep(e, function(e, r) {
return !!t.call(e, r, e) !== n;
}) : t.nodeType ? xe.grep(e, function(e) {
return e === t !== n;
}) : "string" != typeof t ? xe.grep(e, function(e) {
return fe.call(t, e) > -1 !== n;
}) : Ne.test(t) ? xe.filter(t, e, n) : (t = xe.filter(t, e), xe.grep(e, function(e) {
return fe.call(t, e) > -1 !== n && 1 === e.nodeType;
}));
} function c(e, t) {
for (;(e = e[ t ]) && 1 !== e.nodeType;) {

} return e;
} function f(e) {
var t = {}; return xe.each(e.match(Oe) || [], function(e, n) {
t[ n ] = !0;
}), t;
} function p(e) {
return e;
} function d(e) {
throw e;
} function h(e, t, n, r) {
var i; try {
e && xe.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && xe.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
} catch (e) {
n.apply(void 0, [ e ]);
}
} function g() {
ae.removeEventListener("DOMContentLoaded", g), n.removeEventListener("load", g), xe.ready();
} function m() {
this.expando = xe.expando + m.uid++;
} function y(e) {
return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : We.test(e) ? JSON.parse(e) : e);
} function v(e, t, n) {
var r; if (void 0 === n && 1 === e.nodeType) {
if (r = "data-" + t.replace(_e, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
try {
n = y(n);
} catch (e) {}Be.set(e, t, n);
} else {
n = void 0;
}
} return n;
} function x(e, t, n, r) {
var i, o = 1, a = 20, s = r ? function() {
return r.cur();
} : function() {
return xe.css(e, t, "");
}, u = s(), l = n && n[ 3 ] || (xe.cssNumber[ t ] ? "" : "px"), c = (xe.cssNumber[ t ] || "px" !== l && +u) && Xe.exec(xe.css(e, t)); if (c && c[ 3 ] !== l) {
l = l || c[ 3 ], n = n || [], c = +u || 1; do {
o = o || ".5", c /= o, xe.style(e, t, c + l);
} while (o !== (o = s() / u) && 1 !== o && --a);
} return n && (c = +c || +u || 0, i = n[ 1 ] ? c + (n[ 1 ] + 1) * n[ 2 ] : +n[ 2 ], r && (r.unit = l, r.start = c, r.end = i)), i;
} function b(e) {
var t, n = e.ownerDocument, r = e.nodeName, i = Ye[ r ]; return i ? i : (t = n.body.appendChild(n.createElement(r)), i = xe.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ye[ r ] = i, i);
} function w(e, t) {
for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
r = e[ o ], r.style && (n = r.style.display, t ? ("none" === n && (i[ o ] = Ie.get(r, "display") || null, i[ o ] || (r.style.display = "")), "" === r.style.display && Ve(r) && (i[ o ] = b(r))) : "none" !== n && (i[ o ] = "none", Ie.set(r, "display", n)));
} for (o = 0; o < a; o++) {
null != i[ o ] && (e[ o ].style.display = i[ o ]);
} return e;
} function T(e, t) {
var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && u(e, t) ? xe.merge([ e ], n) : n;
} function E(e, t) {
for (var n = 0, r = e.length; n < r; n++) {
Ie.set(e[ n ], "globalEval", !t || Ie.get(t[ n ], "globalEval"));
}
} function C(e, t, n, r, i) {
for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
if (o = e[ d ], o || 0 === o) {
if ("object" === xe.type(o)) {
xe.merge(p, o.nodeType ? [ o ] : o);
} else if (et.test(o)) {
for (a = a || f.appendChild(t.createElement("div")), s = (Je.exec(o) || [ "", "" ])[ 1 ].toLowerCase(), u = Ze[ s ] || Ze._default, a.innerHTML = u[ 1 ] + xe.htmlPrefilter(o) + u[ 2 ], c = u[ 0 ]; c--;) {
a = a.lastChild;
} xe.merge(p, a.childNodes), a = f.firstChild, a.textContent = "";
} else {
p.push(t.createTextNode(o));
}
}
} for (f.textContent = "", d = 0; o = p[ d++ ];) {
if (r && xe.inArray(o, r) > -1) {
i && i.push(o);
} else if (l = xe.contains(o.ownerDocument, o), a = T(f.appendChild(o), "script"), l && E(a), n) {
for (c = 0; o = a[ c++ ];) {
Ke.test(o.type || "") && n.push(o);
}
}
} return f;
} function k() {
return !0;
} function q() {
return !1;
} function S() {
try {
return ae.activeElement;
} catch (e) {}
} function D(e, t, n, r, i, o) {
var a, s; if ("object" == typeof t) {
"string" != typeof n && (r = r || n, n = void 0); for (s in t) {
D(e, s, n, r, t[ s ], o);
} return e;
} if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) {
i = q;
} else if (!i) {
return e;
} return 1 === o && (a = i, i = function(e) {
return xe().off(e), a.apply(this, arguments);
}, i.guid = a.guid || (a.guid = xe.guid++)), e.each(function() {
xe.event.add(this, t, i, r, n);
});
} function N(e, t) {
return u(e, "table") && u(11 !== t.nodeType ? t : t.firstChild, "tr") ? xe(">tbody", e)[ 0 ] || e : e;
} function A(e) {
return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
} function j(e) {
var t = ut.exec(e.type); return t ? e.type = t[ 1 ] : e.removeAttribute("type"), e;
} function L(e, t) {
var n, r, i, o, a, s, u, l; if (1 === t.nodeType) {
if (Ie.hasData(e) && (o = Ie.access(e), a = Ie.set(t, o), l = o.events)) {
delete a.handle, a.events = {}; for (i in l) {
for (n = 0, r = l[ i ].length; n < r; n++) {
xe.event.add(t, i, l[ i ][ n ]);
}
}
}Be.hasData(e) && (s = Be.access(e), u = xe.extend({}, s), Be.set(t, u));
}
} function $(e, t) {
var n = t.nodeName.toLowerCase(); "input" === n && Qe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
} function H(e, t, n, r) {
t = le.apply([], t); var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, h = t[ 0 ], g = xe.isFunction(h); if (g || p > 1 && "string" == typeof h && !ye.checkClone && st.test(h)) {
return e.each(function(i) {
var o = e.eq(i); g && (t[ 0 ] = h.call(this, i, o.html())), H(o, t, n, r);
});
} if (p && (i = C(t, e[ 0 ].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
for (s = xe.map(T(i, "script"), A), u = s.length; f < p; f++) {
l = i, f !== d && (l = xe.clone(l, !0, !0), u && xe.merge(s, T(l, "script"))), n.call(e[ f ], l, f);
} if (u) {
for (c = s[ s.length - 1 ].ownerDocument, xe.map(s, j), f = 0; f < u; f++) {
l = s[ f ], Ke.test(l.type || "") && !Ie.access(l, "globalEval") && xe.contains(c, l) && (l.src ? xe._evalUrl && xe._evalUrl(l.src) : a(l.textContent.replace(lt, ""), c));
}
}
} return e;
} function O(e, t, n) {
for (var r, i = t ? xe.filter(t, e) : e, o = 0; null != (r = i[ o ]); o++) {
n || 1 !== r.nodeType || xe.cleanData(T(r)), r.parentNode && (n && xe.contains(r.ownerDocument, r) && E(T(r, "script")), r.parentNode.removeChild(r));
} return e;
} function F(e, t, n) {
var r, i, o, a, s = e.style; return n = n || pt(e), n && (a = n.getPropertyValue(t) || n[ t ], "" !== a || xe.contains(e.ownerDocument, e) || (a = xe.style(e, t)), !ye.pixelMarginRight() && ft.test(a) && ct.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
} function P(e, t) {
return { get: function() {
return e() ? void delete this.get : (this.get = t).apply(this, arguments);
} };
} function R(e) {
if (e in vt) {
return e;
} for (var t = e[ 0 ].toUpperCase() + e.slice(1), n = yt.length; n--;) {
if (e = yt[ n ] + t, e in vt) {
return e;
}
}
} function M(e) {
var t = xe.cssProps[ e ]; return t || (t = xe.cssProps[ e ] = R(e) || e), t;
} function I(e, t, n) {
var r = Xe.exec(t); return r ? Math.max(0, r[ 2 ] - (n || 0)) + (r[ 3 ] || "px") : t;
} function B(e, t, n, r, i) {
var o, a = 0; for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) {
"margin" === n && (a += xe.css(e, n + Ue[ o ], !0, i)), r ? ("content" === n && (a -= xe.css(e, "padding" + Ue[ o ], !0, i)), "margin" !== n && (a -= xe.css(e, "border" + Ue[ o ] + "Width", !0, i))) : (a += xe.css(e, "padding" + Ue[ o ], !0, i), "padding" !== n && (a += xe.css(e, "border" + Ue[ o ] + "Width", !0, i)));
} return a;
} function W(e, t, n) {
var r, i = pt(e), o = F(e, t, i), a = "border-box" === xe.css(e, "boxSizing", !1, i); return ft.test(o) ? o : (r = a && (ye.boxSizingReliable() || o === e.style[ t ]), "auto" === o && (o = e[ "offset" + t[ 0 ].toUpperCase() + t.slice(1) ]), o = parseFloat(o) || 0, o + B(e, t, n || (a ? "border" : "content"), r, i) + "px");
} function _(e, t, n, r, i) {
return new _.prototype.init(e, t, n, r, i);
} function z() {
bt && (ae.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(z) : n.setTimeout(z, xe.fx.interval), xe.fx.tick());
} function X() {
return n.setTimeout(function() {
xt = void 0;
}), xt = xe.now();
} function U(e, t) {
var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t) {
n = Ue[ r ], i[ "margin" + n ] = i[ "padding" + n ] = e;
} return t && (i.opacity = i.width = e), i;
} function V(e, t, n) {
for (var r, i = (Q.tweeners[ t ] || []).concat(Q.tweeners[ "*" ]), o = 0, a = i.length; o < a; o++) {
if (r = i[ o ].call(n, t, e)) {
return r;
}
}
} function G(e, t, n) {
var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && Ve(e), m = Ie.get(e, "fxshow"); n.queue || (a = xe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
a.unqueued || s();
}), a.unqueued++, p.always(function() {
p.always(function() {
a.unqueued--, xe.queue(e, "fx").length || a.empty.fire();
});
})); for (r in t) {
if (i = t[ r ], wt.test(i)) {
if (delete t[ r ], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
if ("show" !== i || !m || void 0 === m[ r ]) {
continue;
} g = !0;
}d[ r ] = m && m[ r ] || xe.style(e, r);
}
} if (u = !xe.isEmptyObject(t), u || !xe.isEmptyObject(d)) {
f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], l = m && m.display, null == l && (l = Ie.get(e, "display")), c = xe.css(e, "display"), "none" === c && (l ? c = l : (w([ e ], !0), l = e.style.display || l, c = xe.css(e, "display"), w([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === xe.css(e, "float") && (u || (p.done(function() {
h.display = l;
}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
h.overflow = n.overflow[ 0 ], h.overflowX = n.overflow[ 1 ], h.overflowY = n.overflow[ 2 ];
})), u = !1; for (r in d) {
u || (m ? "hidden" in m && (g = m.hidden) : m = Ie.access(e, "fxshow", { display: l }), o && (m.hidden = !g), g && w([ e ], !0), p.done(function() {
g || w([ e ]), Ie.remove(e, "fxshow"); for (r in d) {
xe.style(e, r, d[ r ]);
}
})), u = V(g ? m[ r ] : 0, r, p), r in m || (m[ r ] = u.start, g && (u.end = u.start, u.start = 0));
}
}
} function Y(e, t) {
var n, r, i, o, a; for (n in e) {
if (r = xe.camelCase(n), i = t[ r ], o = e[ n ], Array.isArray(o) && (i = o[ 1 ], o = e[ n ] = o[ 0 ]), n !== r && (e[ r ] = o, delete e[ n ]), a = xe.cssHooks[ r ], a && "expand" in a) {
o = a.expand(o), delete e[ r ]; for (n in o) {
n in e || (e[ n ] = o[ n ], t[ n ] = i);
}
} else {
t[ r ] = i;
}
}
} function Q(e, t, n) {
var r, i, o = 0, a = Q.prefilters.length, s = xe.Deferred().always(function() {
delete u.elem;
}), u = function() {
if (i) {
return !1;
} for (var t = xt || X(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) {
l.tweens[ a ].run(o);
} return s.notifyWith(e, [ l, o, n ]), o < 1 && u ? n : (u || s.notifyWith(e, [ l, 1, 0 ]), s.resolveWith(e, [ l ]), !1);
}, l = s.promise({ elem: e, props: xe.extend({}, t), opts: xe.extend(!0, { specialEasing: {}, easing: xe.easing._default }, n), originalProperties: t, originalOptions: n, startTime: xt || X(), duration: n.duration, tweens: [], createTween: function(t, n) {
var r = xe.Tween(e, l.opts, t, n, l.opts.specialEasing[ t ] || l.opts.easing); return l.tweens.push(r), r;
}, stop: function(t) {
var n = 0, r = t ? l.tweens.length : 0; if (i) {
return this;
} for (i = !0; n < r; n++) {
l.tweens[ n ].run(1);
} return t ? (s.notifyWith(e, [ l, 1, 0 ]), s.resolveWith(e, [ l, t ])) : s.rejectWith(e, [ l, t ]), this;
} }), c = l.props; for (Y(c, l.opts.specialEasing); o < a; o++) {
if (r = Q.prefilters[ o ].call(l, e, c, l.opts)) {
return xe.isFunction(r.stop) && (xe._queueHooks(l.elem, l.opts.queue).stop = xe.proxy(r.stop, r)), r;
}
} return xe.map(c, V, l), xe.isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), xe.fx.timer(xe.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
} function J(e) {
var t = e.match(Oe) || []; return t.join(" ");
} function K(e) {
return e.getAttribute && e.getAttribute("class") || "";
} function Z(e, t, n, r) {
var i; if (Array.isArray(t)) {
xe.each(t, function(t, i) {
n || Lt.test(e) ? r(e, i) : Z(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
});
} else if (n || "object" !== xe.type(t)) {
r(e, t);
} else {
for (i in t) {
Z(e + "[" + i + "]", t[ i ], n, r);
}
}
} function ee(e) {
return function(t, n) {
"string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(Oe) || []; if (xe.isFunction(n)) {
for (;r = o[ i++ ];) {
"+" === r[ 0 ] ? (r = r.slice(1) || "*", (e[ r ] = e[ r ] || []).unshift(n)) : (e[ r ] = e[ r ] || []).push(n);
}
}
};
} function te(e, t, n, r) {
function i(s) {
var u; return o[ s ] = !0, xe.each(e[ s ] || [], function(e, s) {
var l = s(t, n, r); return "string" != typeof l || a || o[ l ] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1);
}), u;
} var o = {}, a = e === zt; return i(t.dataTypes[ 0 ]) || !o[ "*" ] && i("*");
} function ne(e, t) {
var n, r, i = xe.ajaxSettings.flatOptions || {}; for (n in t) {
void 0 !== t[ n ] && ((i[ n ] ? e : r || (r = {}))[ n ] = t[ n ]);
} return r && xe.extend(!0, e, r), e;
} function re(e, t, n) {
for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[ 0 ];) {
u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
} if (r) {
for (i in s) {
if (s[ i ] && s[ i ].test(r)) {
u.unshift(i); break;
}
}
} if (u[ 0 ] in n) {
o = u[ 0 ];
} else {
for (i in n) {
if (!u[ 0 ] || e.converters[ i + " " + u[ 0 ] ]) {
o = i; break;
}a || (a = i);
}o = o || a;
} if (o) {
return o !== u[ 0 ] && u.unshift(o), n[ o ];
}
} function ie(e, t, n, r) {
var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[ 1 ]) {
for (a in e.converters) {
l[ a.toLowerCase() ] = e.converters[ a ];
}
} for (o = c.shift(); o;) {
if (e.responseFields[ o ] && (n[ e.responseFields[ o ] ] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) {
if ("*" === o) {
o = u;
} else if ("*" !== u && u !== o) {
if (a = l[ u + " " + o ] || l[ "* " + o ], !a) {
for (i in l) {
if (s = i.split(" "), s[ 1 ] === o && (a = l[ u + " " + s[ 0 ] ] || l[ "* " + s[ 0 ] ])) {
a === !0 ? a = l[ i ] : l[ i ] !== !0 && (o = s[ 0 ], c.unshift(s[ 1 ])); break;
}
}
} if (a !== !0) {
if (a && e.throws) {
t = a(t);
} else {
try {
t = a(t);
} catch (e) {
return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
}
}
}
}
}
} return { state: "success", data: t };
} var oe = [], ae = n.document, se = Object.getPrototypeOf, ue = oe.slice, le = oe.concat, ce = oe.push, fe = oe.indexOf, pe = {}, de = pe.toString, he = pe.hasOwnProperty, ge = he.toString, me = ge.call(Object), ye = {}, ve = "3.2.1", xe = function(e, t) {
return new xe.fn.init(e, t);
}, be = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, we = /^-ms-/, Te = /-([a-z])/g, Ee = function(e, t) {
return t.toUpperCase();
}; xe.fn = xe.prototype = { jquery: ve, constructor: xe, length: 0, toArray: function() {
return ue.call(this);
}, get: function(e) {
return null == e ? ue.call(this) : e < 0 ? this[ e + this.length ] : this[ e ];
}, pushStack: function(e) {
var t = xe.merge(this.constructor(), e); return t.prevObject = this, t;
}, each: function(e) {
return xe.each(this, e);
}, map: function(e) {
return this.pushStack(xe.map(this, function(t, n) {
return e.call(t, n, t);
}));
}, slice: function() {
return this.pushStack(ue.apply(this, arguments));
}, first: function() {
return this.eq(0);
}, last: function() {
return this.eq(-1);
}, eq: function(e) {
var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [ this[ n ] ] : []);
}, end: function() {
return this.prevObject || this.constructor();
}, push: ce, sort: oe.sort, splice: oe.splice }, xe.extend = xe.fn.extend = function() {
var e, t, n, r, i, o, a = arguments[ 0 ] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[ s ] || {}, s++), "object" == typeof a || xe.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
if (null != (e = arguments[ s ])) {
for (t in e) {
n = a[ t ], r = e[ t ], a !== r && (l && r && (xe.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && xe.isPlainObject(n) ? n : {}, a[ t ] = xe.extend(l, o, r)) : void 0 !== r && (a[ t ] = r));
}
}
} return a;
}, xe.extend({ expando: "jQuery" + (ve + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) {
throw new Error(e);
}, noop: function() {}, isFunction: function(e) {
return "function" === xe.type(e);
}, isWindow: function(e) {
return null != e && e === e.window;
}, isNumeric: function(e) {
var t = xe.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
}, isPlainObject: function(e) {
var t, n; return !(!e || "[object Object]" !== de.call(e)) && (!(t = se(e)) || (n = he.call(t, "constructor") && t.constructor, "function" == typeof n && ge.call(n) === me));
}, isEmptyObject: function(e) {
var t; for (t in e) {
return !1;
} return !0;
}, type: function(e) {
return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[ de.call(e) ] || "object" : typeof e;
}, globalEval: function(e) {
a(e);
}, camelCase: function(e) {
return e.replace(we, "ms-").replace(Te, Ee);
}, each: function(e, t) {
var n, r = 0; if (s(e)) {
for (n = e.length; r < n && t.call(e[ r ], r, e[ r ]) !== !1; r++) {

}
} else {
for (r in e) {
if (t.call(e[ r ], r, e[ r ]) === !1) {
break;
}
}
} return e;
}, trim: function(e) {
return null == e ? "" : (e + "").replace(be, "");
}, makeArray: function(e, t) {
var n = t || []; return null != e && (s(Object(e)) ? xe.merge(n, "string" == typeof e ? [ e ] : e) : ce.call(n, e)), n;
}, inArray: function(e, t, n) {
return null == t ? -1 : fe.call(t, e, n);
}, merge: function(e, t) {
for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
e[ i++ ] = t[ r ];
} return e.length = i, e;
}, grep: function(e, t, n) {
for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
r = !t(e[ o ], o), r !== s && i.push(e[ o ]);
} return i;
}, map: function(e, t, n) {
var r, i, o = 0, a = []; if (s(e)) {
for (r = e.length; o < r; o++) {
i = t(e[ o ], o, n), null != i && a.push(i);
}
} else {
for (o in e) {
i = t(e[ o ], o, n), null != i && a.push(i);
}
} return le.apply([], a);
}, guid: 1, proxy: function(e, t) {
var n, r, i; if ("string" == typeof t && (n = e[ t ], t = e, e = n), xe.isFunction(e)) {
return r = ue.call(arguments, 2), i = function() {
return e.apply(t || this, r.concat(ue.call(arguments)));
}, i.guid = e.guid = e.guid || xe.guid++, i;
}
}, now: Date.now, support: ye }), "function" == typeof Symbol && (xe.fn[ Symbol.iterator ] = oe[ Symbol.iterator ]), xe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
pe[ "[object " + t + "]" ] = t.toLowerCase();
}); var Ce =/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function(e) {
function t(e, t, n, r) {
var i, o, a, s, u, l, c, p = t && t.ownerDocument, h = t ? t.nodeType : 9; if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) {
return n;
} if (!r && ((t ? t.ownerDocument || t : B) !== $ && L(t), t = t || $, O)) {
if (11 !== h && (u = ye.exec(e))) {
if (i = u[ 1 ]) {
if (9 === h) {
if (!(a = t.getElementById(i))) {
return n;
} if (a.id === i) {
return n.push(a), n;
}
} else if (p && (a = p.getElementById(i)) && M(t, a) && a.id === i) {
return n.push(a), n;
}
} else {
if (u[ 2 ]) {
return K.apply(n, t.getElementsByTagName(e)), n;
} if ((i = u[ 3 ]) && T.getElementsByClassName && t.getElementsByClassName) {
return K.apply(n, t.getElementsByClassName(i)), n;
}
}
} if (T.qsa && !U[ e + " " ] && (!F || !F.test(e))) {
if (1 !== h) {
p = t, c = e;
} else if ("object" !== t.nodeName.toLowerCase()) {
for ((s = t.getAttribute("id")) ? s = s.replace(we, Te) : t.setAttribute("id", s = I), l = q(e), o = l.length; o--;) {
l[ o ] = "#" + s + " " + d(l[ o ]);
} c = l.join(","), p = ve.test(e) && f(t.parentNode) || t;
} if (c) {
try {
return K.apply(n, p.querySelectorAll(c)), n;
} catch (e) {} finally {
s === I && t.removeAttribute("id");
}
}
}
} return D(e.replace(se, "$1"), t, n, r);
} function n() {
function e(n, r) {
return t.push(n + " ") > E.cacheLength && delete e[ t.shift() ], e[ n + " " ] = r;
} var t = []; return e;
} function r(e) {
return e[ I ] = !0, e;
} function i(e) {
var t = $.createElement("fieldset"); try {
return !!e(t);
} catch (e) {
return !1;
} finally {
t.parentNode && t.parentNode.removeChild(t), t = null;
}
} function o(e, t) {
for (var n = e.split("|"), r = n.length; r--;) {
E.attrHandle[ n[ r ] ] = t;
}
} function a(e, t) {
var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) {
return r;
} if (n) {
for (;n = n.nextSibling;) {
if (n === t) {
return -1;
}
}
} return e ? 1 : -1;
} function s(e) {
return function(t) {
var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e;
};
} function u(e) {
return function(t) {
var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e;
};
} function l(e) {
return function(t) {
return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e;
};
} function c(e) {
return r(function(t) {
return t = +t, r(function(n, r) {
for (var i, o = e([], n.length, t), a = o.length; a--;) {
n[ i = o[ a ] ] && (n[ i ] = !(r[ i ] = n[ i ]));
}
});
});
} function f(e) {
return e && "undefined" != typeof e.getElementsByTagName && e;
} function p() {} function d(e) {
for (var t = 0, n = e.length, r = ""; t < n; t++) {
r += e[ t ].value;
} return r;
} function h(e, t, n) {
var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = _++; return t.first ? function(t, n, i) {
for (;t = t[ r ];) {
if (1 === t.nodeType || a) {
return e(t, n, i);
}
} return !1;
} : function(t, n, u) {
var l, c, f, p = [ W, s ]; if (u) {
for (;t = t[ r ];) {
if ((1 === t.nodeType || a) && e(t, n, u)) {
return !0;
}
}
} else {
for (;t = t[ r ];) {
if (1 === t.nodeType || a) {
if (f = t[ I ] || (t[ I ] = {}), c = f[ t.uniqueID ] || (f[ t.uniqueID ] = {}), i && i === t.nodeName.toLowerCase()) {
t = t[ r ] || t;
} else {
if ((l = c[ o ]) && l[ 0 ] === W && l[ 1 ] === s) {
return p[ 2 ] = l[ 2 ];
} if (c[ o ] = p, p[ 2 ] = e(t, n, u)) {
return !0;
}
}
}
}
} return !1;
};
} function g(e) {
return e.length > 1 ? function(t, n, r) {
for (var i = e.length; i--;) {
if (!e[ i ](t, n, r)) {
return !1;
}
} return !0;
} : e[ 0 ];
} function m(e, n, r) {
for (var i = 0, o = n.length; i < o; i++) {
t(e, n[ i ], r);
} return r;
} function y(e, t, n, r, i) {
for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
(o = e[ s ]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
} return a;
} function v(e, t, n, i, o, a) {
return i && !i[ I ] && (i = v(i)), o && !o[ I ] && (o = v(o, a)), r(function(r, a, s, u) {
var l, c, f, p = [], d = [], h = a.length, g = r || m(t || "*", s.nodeType ? [ s ] : s, []), v = !e || !r && t ? g : y(g, p, e, s, u), x = n ? o || (r ? e : h || i) ? [] : a : v; if (n && n(v, x, s, u), i) {
for (l = y(x, d), i(l, [], s, u), c = l.length; c--;) {
(f = l[ c ]) && (x[ d[ c ] ] = !(v[ d[ c ] ] = f));
}
} if (r) {
if (o || e) {
if (o) {
for (l = [], c = x.length; c--;) {
(f = x[ c ]) && l.push(v[ c ] = f);
} o(null, x = [], l, u);
} for (c = x.length; c--;) {
(f = x[ c ]) && (l = o ? ee(r, f) : p[ c ]) > -1 && (r[ l ] = !(a[ l ] = f));
}
}
} else {
x = y(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : K.apply(a, x);
}
});
} function x(e) {
for (var t, n, r, i = e.length, o = E.relative[ e[ 0 ].type ], a = o || E.relative[ " " ], s = o ? 1 : 0, u = h(function(e) {
return e === t;
}, a, !0), l = h(function(e) {
return ee(t, e) > -1;
}, a, !0), c = [ function(e, n, r) {
var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r)); return t = null, i;
} ]; s < i; s++) {
if (n = E.relative[ e[ s ].type ]) {
c = [ h(g(c), n) ];
} else {
if (n = E.filter[ e[ s ].type ].apply(null, e[ s ].matches), n[ I ]) {
for (r = ++s; r < i && !E.relative[ e[ r ].type ]; r++) {

} return v(s > 1 && g(c), s > 1 && d(e.slice(0, s - 1).concat({ value: " " === e[ s - 2 ].type ? "*" : "" })).replace(se, "$1"), n, s < r && x(e.slice(s, r)), r < i && x(e = e.slice(r)), r < i && d(e));
}c.push(n);
}
} return g(c);
} function b(e, n) {
var i = n.length > 0, o = e.length > 0, a = function(r, a, s, u, l) {
var c, f, p, d = 0, h = "0", g = r && [], m = [], v = N, x = r || o && E.find.TAG("*", l), b = W += null == v ? 1 : Math.random() || .1, w = x.length; for (l && (N = a === $ || a || l); h !== w && null != (c = x[ h ]); h++) {
if (o && c) {
for (f = 0, a || c.ownerDocument === $ || (L(c), s = !O); p = e[ f++ ];) {
if (p(c, a || $, s)) {
u.push(c); break;
}
}l && (W = b);
}i && ((c = !p && c) && d--, r && g.push(c));
} if (d += h, i && h !== d) {
for (f = 0; p = n[ f++ ];) {
p(g, m, a, s);
} if (r) {
if (d > 0) {
for (;h--;) {
g[ h ] || m[ h ] || (m[ h ] = Q.call(u));
}
} m = y(m);
}K.apply(u, m), l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u);
} return l && (W = b, N = v), g;
}; return i ? r(a) : a;
} var w, T, E, C, k, q, S, D, N, A, j, L, $, H, O, F, P, R, M, I = "sizzle" + 1 * new Date, B = e.document, W = 0, _ = 0, z = n(), X = n(), U = n(), V = function(e, t) {
return e === t && (j = !0), 0;
}, G = {}.hasOwnProperty, Y = [], Q = Y.pop, J = Y.push, K = Y.push, Z = Y.slice, ee = function(e, t) {
for (var n = 0, r = e.length; n < r; n++) {
if (e[ n ] === t) {
return n;
}
} return -1;
}, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), fe = new RegExp(oe), pe = new RegExp("^" + re + "$"), de = { ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re + "|[*])"), ATTR: new RegExp("^" + ie), PSEUDO: new RegExp("^" + oe), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), be = function(e, t, n) {
var r = "0x" + t - 65536; return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
}, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Te = function(e, t) {
return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
}, Ee = function() {
L();
}, Ce = h(function(e) {
return e.disabled === !0 && ("form" in e || "label" in e);
}, { dir: "parentNode", next: "legend" }); try {
K.apply(Y = Z.call(B.childNodes), B.childNodes), Y[ B.childNodes.length ].nodeType;
} catch (e) {
K = { apply: Y.length ? function(e, t) {
J.apply(e, Z.call(t));
} : function(e, t) {
for (var n = e.length, r = 0; e[ n++ ] = t[ r++ ];) {

}e.length = n - 1;
} };
}T = t.support = {}, k = t.isXML = function(e) {
var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName;
}, L = t.setDocument = function(e) {
var t, n, r = e ? e.ownerDocument || e : B; return r !== $ && 9 === r.nodeType && r.documentElement ? ($ = r, H = $.documentElement, O = !k($), B !== $ && (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)), T.attributes = i(function(e) {
return e.className = "i", !e.getAttribute("className");
}), T.getElementsByTagName = i(function(e) {
return e.appendChild($.createComment("")), !e.getElementsByTagName("*").length;
}), T.getElementsByClassName = me.test($.getElementsByClassName), T.getById = i(function(e) {
return H.appendChild(e).id = I, !$.getElementsByName || !$.getElementsByName(I).length;
}), T.getById ? (E.filter.ID = function(e) {
var t = e.replace(xe, be); return function(e) {
return e.getAttribute("id") === t;
};
}, E.find.ID = function(e, t) {
if ("undefined" != typeof t.getElementById && O) {
var n = t.getElementById(e); return n ? [ n ] : [];
}
}) : (E.filter.ID = function(e) {
var t = e.replace(xe, be); return function(e) {
var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t;
};
}, E.find.ID = function(e, t) {
if ("undefined" != typeof t.getElementById && O) {
var n, r, i, o = t.getElementById(e); if (o) {
if (n = o.getAttributeNode("id"), n && n.value === e) {
return [ o ];
} for (i = t.getElementsByName(e), r = 0; o = i[ r++ ];) {
if (n = o.getAttributeNode("id"), n && n.value === e) {
return [ o ];
}
}
} return [];
}
}), E.find.TAG = T.getElementsByTagName ? function(e, t) {
return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0;
} : function(e, t) {
var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) {
for (;n = o[ i++ ];) {
1 === n.nodeType && r.push(n);
} return r;
} return o;
}, E.find.CLASS = T.getElementsByClassName && function(e, t) {
if ("undefined" != typeof t.getElementsByClassName && O) {
return t.getElementsByClassName(e);
}
}, P = [], F = [], (T.qsa = me.test($.querySelectorAll)) && (i(function(e) {
H.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + I + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || F.push(".#.+[+~]");
}), i(function(e) {
e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = $.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), H.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:");
})), (T.matchesSelector = me.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
T.disconnectedMatch = R.call(e, "*"), R.call(e, "[s!='']:x"), P.push("!=", oe);
}), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = me.test(H.compareDocumentPosition), M = t || me.test(H.contains) ? function(e, t) {
var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
} : function(e, t) {
if (t) {
for (;t = t.parentNode;) {
if (t === e) {
return !0;
}
}
} return !1;
}, V = t ? function(e, t) {
if (e === t) {
return j = !0, 0;
} var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === $ || e.ownerDocument === B && M(B, e) ? -1 : t === $ || t.ownerDocument === B && M(B, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1);
} : function(e, t) {
if (e === t) {
return j = !0, 0;
} var n, r = 0, i = e.parentNode, o = t.parentNode, s = [ e ], u = [ t ]; if (!i || !o) {
return e === $ ? -1 : t === $ ? 1 : i ? -1 : o ? 1 : A ? ee(A, e) - ee(A, t) : 0;
} if (i === o) {
return a(e, t);
} for (n = e; n = n.parentNode;) {
s.unshift(n);
} for (n = t; n = n.parentNode;) {
u.unshift(n);
} for (;s[ r ] === u[ r ];) {
r++;
} return r ? a(s[ r ], u[ r ]) : s[ r ] === B ? -1 : u[ r ] === B ? 1 : 0;
}, $) : $;
}, t.matches = function(e, n) {
return t(e, null, null, n);
}, t.matchesSelector = function(e, n) {
if ((e.ownerDocument || e) !== $ && L(e), n = n.replace(ce, "='$1']"), T.matchesSelector && O && !U[ n + " " ] && (!P || !P.test(n)) && (!F || !F.test(n))) {
try {
var r = R.call(e, n); if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
return r;
}
} catch (e) {}
} return t(n, $, null, [ e ]).length > 0;
}, t.contains = function(e, t) {
return (e.ownerDocument || e) !== $ && L(e), M(e, t);
}, t.attr = function(e, t) {
(e.ownerDocument || e) !== $ && L(e); var n = E.attrHandle[ t.toLowerCase() ], r = n && G.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0; return void 0 !== r ? r : T.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
}, t.escape = function(e) {
return (e + "").replace(we, Te);
}, t.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
}, t.uniqueSort = function(e) {
var t, n = [], r = 0, i = 0; if (j = !T.detectDuplicates, A = !T.sortStable && e.slice(0), e.sort(V), j) {
for (;t = e[ i++ ];) {
t === e[ i ] && (r = n.push(i));
} for (;r--;) {
e.splice(n[ r ], 1);
}
} return A = null, e;
}, C = t.getText = function(e) {
var t, n = "", r = 0, i = e.nodeType; if (i) {
if (1 === i || 9 === i || 11 === i) {
if ("string" == typeof e.textContent) {
return e.textContent;
} for (e = e.firstChild; e; e = e.nextSibling) {
n += C(e);
}
} else if (3 === i || 4 === i) {
return e.nodeValue;
}
} else {
for (;t = e[ r++ ];) {
n += C(t);
}
} return n;
}, E = t.selectors = { cacheLength: 50, createPseudo: r, match: de, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) {
return e[ 1 ] = e[ 1 ].replace(xe, be), e[ 3 ] = (e[ 3 ] || e[ 4 ] || e[ 5 ] || "").replace(xe, be), "~=" === e[ 2 ] && (e[ 3 ] = " " + e[ 3 ] + " "), e.slice(0, 4);
}, CHILD: function(e) {
return e[ 1 ] = e[ 1 ].toLowerCase(), "nth" === e[ 1 ].slice(0, 3) ? (e[ 3 ] || t.error(e[ 0 ]), e[ 4 ] = +(e[ 4 ] ? e[ 5 ] + (e[ 6 ] || 1) : 2 * ("even" === e[ 3 ] || "odd" === e[ 3 ])), e[ 5 ] = +(e[ 7 ] + e[ 8 ] || "odd" === e[ 3 ])) : e[ 3 ] && t.error(e[ 0 ]), e;
}, PSEUDO: function(e) {
var t, n = !e[ 6 ] && e[ 2 ]; return de.CHILD.test(e[ 0 ]) ? null : (e[ 3 ] ? e[ 2 ] = e[ 4 ] || e[ 5 ] || "" : n && fe.test(n) && (t = q(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[ 0 ] = e[ 0 ].slice(0, t), e[ 2 ] = n.slice(0, t)), e.slice(0, 3));
} }, filter: { TAG: function(e) {
var t = e.replace(xe, be).toLowerCase(); return "*" === e ? function() {
return !0;
} : function(e) {
return e.nodeName && e.nodeName.toLowerCase() === t;
};
}, CLASS: function(e) {
var t = z[ e + " " ]; return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
});
}, ATTR: function(e, n, r) {
return function(i) {
var o = t.attr(i, e); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
};
}, CHILD: function(e, t, n, r, i) {
var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function(e) {
return !!e.parentNode;
} : function(t, n, u) {
var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s, x = !1; if (m) {
if (o) {
for (;g;) {
for (p = t; p = p[ g ];) {
if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) {
return !1;
}
} h = g = "only" === e && !h && "nextSibling";
} return !0;
} if (h = [ a ? m.firstChild : m.lastChild ], a && v) {
for (p = m, f = p[ I ] || (p[ I ] = {}), c = f[ p.uniqueID ] || (f[ p.uniqueID ] = {}), l = c[ e ] || [], d = l[ 0 ] === W && l[ 1 ], x = d && l[ 2 ], p = d && m.childNodes[ d ]; p = ++d && p && p[ g ] || (x = d = 0) || h.pop();) {
if (1 === p.nodeType && ++x && p === t) {
c[ e ] = [ W, d, x ]; break;
}
}
} else if (v && (p = t, f = p[ I ] || (p[ I ] = {}), c = f[ p.uniqueID ] || (f[ p.uniqueID ] = {}), l = c[ e ] || [], d = l[ 0 ] === W && l[ 1 ], x = d), x === !1) {
for (;(p = ++d && p && p[ g ] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (v && (f = p[ I ] || (p[ I ] = {}), c = f[ p.uniqueID ] || (f[ p.uniqueID ] = {}), c[ e ] = [ W, x ]), p !== t));) {

}
} return x -= i, x === r || x % r === 0 && x / r >= 0;
}
};
}, PSEUDO: function(e, n) {
var i, o = E.pseudos[ e ] || E.setFilters[ e.toLowerCase() ] || t.error("unsupported pseudo: " + e); return o[ I ] ? o(n) : o.length > 1 ? (i = [ e, e, "", n ], E.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
for (var r, i = o(e, n), a = i.length; a--;) {
r = ee(e, i[ a ]), e[ r ] = !(t[ r ] = i[ a ]);
}
}) : function(e) {
return o(e, 0, i);
}) : o;
} }, pseudos: { not: r(function(e) {
var t = [], n = [], i = S(e.replace(se, "$1")); return i[ I ] ? r(function(e, t, n, r) {
for (var o, a = i(e, null, r, []), s = e.length; s--;) {
(o = a[ s ]) && (e[ s ] = !(t[ s ] = o));
}
}) : function(e, r, o) {
return t[ 0 ] = e, i(t, null, o, n), t[ 0 ] = null, !n.pop();
};
}), has: r(function(e) {
return function(n) {
return t(e, n).length > 0;
};
}), contains: r(function(e) {
return e = e.replace(xe, be), function(t) {
return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
};
}), lang: r(function(e) {
return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, be).toLowerCase(), function(t) {
var n; do {
if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
}
} while ((t = t.parentNode) && 1 === t.nodeType);return !1;
};
}), target: function(t) {
var n = e.location && e.location.hash; return n && n.slice(1) === t.id;
}, root: function(e) {
return e === H;
}, focus: function(e) {
return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
}, enabled: l(!1), disabled: l(!0), checked: function(e) {
var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected;
}, selected: function(e) {
return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
}, empty: function(e) {
for (e = e.firstChild; e; e = e.nextSibling) {
if (e.nodeType < 6) {
return !1;
}
} return !0;
}, parent: function(e) {
return !E.pseudos.empty(e);
}, header: function(e) {
return ge.test(e.nodeName);
}, input: function(e) {
return he.test(e.nodeName);
}, button: function(e) {
var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t;
}, text: function(e) {
var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
}, first: c(function() {
return [ 0 ];
}), last: c(function(e, t) {
return [ t - 1 ];
}), eq: c(function(e, t, n) {
return [ n < 0 ? n + t : n ];
}), even: c(function(e, t) {
for (var n = 0; n < t; n += 2) {
e.push(n);
} return e;
}), odd: c(function(e, t) {
for (var n = 1; n < t; n += 2) {
e.push(n);
} return e;
}), lt: c(function(e, t, n) {
for (var r = n < 0 ? n + t : n; --r >= 0;) {
e.push(r);
} return e;
}), gt: c(function(e, t, n) {
for (var r = n < 0 ? n + t : n; ++r < t;) {
e.push(r);
} return e;
}) } }, E.pseudos.nth = E.pseudos.eq; for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
E.pseudos[ w ] = s(w);
} for (w in { submit: !0, reset: !0 }) {
E.pseudos[ w ] = u(w);
} return p.prototype = E.filters = E.pseudos, E.setFilters = new p, q = t.tokenize = function(e, n) {
var r, i, o, a, s, u, l, c = X[ e + " " ]; if (c) {
return n ? 0 : c.slice(0);
} for (s = e, u = [], l = E.preFilter; s;) {
r && !(i = ue.exec(s)) || (i && (s = s.slice(i[ 0 ].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[ 0 ].replace(se, " ") }), s = s.slice(r.length)); for (a in E.filter) {
!(i = de[ a ].exec(s)) || l[ a ] && !(i = l[ a ](i)) || (r = i.shift(), o.push({ value: r, type: a, matches: i }), s = s.slice(r.length));
} if (!r) {
break;
}
} return n ? s.length : s ? t.error(e) : X(e, u).slice(0);
}, S = t.compile = function(e, t) {
var n, r = [], i = [], o = U[ e + " " ]; if (!o) {
for (t || (t = q(e)), n = t.length; n--;) {
o = x(t[ n ]), o[ I ] ? r.push(o) : i.push(o);
} o = U(e, b(i, r)), o.selector = e;
} return o;
}, D = t.select = function(e, t, n, r) {
var i, o, a, s, u, l = "function" == typeof e && e, c = !r && q(e = l.selector || e); if (n = n || [], 1 === c.length) {
if (o = c[ 0 ] = c[ 0 ].slice(0), o.length > 2 && "ID" === (a = o[ 0 ]).type && 9 === t.nodeType && O && E.relative[ o[ 1 ].type ]) {
if (t = (E.find.ID(a.matches[ 0 ].replace(xe, be), t) || [])[ 0 ], !t) {
return n;
} l && (t = t.parentNode), e = e.slice(o.shift().value.length);
} for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (a = o[ i ], !E.relative[ s = a.type ]);) {
if ((u = E.find[ s ]) && (r = u(a.matches[ 0 ].replace(xe, be), ve.test(o[ 0 ].type) && f(t.parentNode) || t))) {
if (o.splice(i, 1), e = r.length && d(o), !e) {
return K.apply(n, r), n;
} break;
}
}
} return (l || S(e, c))(r, t, !O, n, !t || ve.test(e) && f(t.parentNode) || t), n;
}, T.sortStable = I.split("").sort(V).join("") === I, T.detectDuplicates = !!j, L(), T.sortDetached = i(function(e) {
return 1 & e.compareDocumentPosition($.createElement("fieldset"));
}), i(function(e) {
return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
}) || o("type|href|height|width", function(e, t, n) {
if (!n) {
return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
}
}), T.attributes && i(function(e) {
return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
}) || o("value", function(e, t, n) {
if (!n && "input" === e.nodeName.toLowerCase()) {
return e.defaultValue;
}
}), i(function(e) {
return null == e.getAttribute("disabled");
}) || o(te, function(e, t, n) {
var r; if (!n) {
return e[ t ] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
}
}), t;
})(n); xe.find = Ce, xe.expr = Ce.selectors, xe.expr[ ":" ] = xe.expr.pseudos, xe.uniqueSort = xe.unique = Ce.uniqueSort, xe.text = Ce.getText, xe.isXMLDoc = Ce.isXML, xe.contains = Ce.contains, xe.escapeSelector = Ce.escape; var ke = function(e, t, n) {
for (var r = [], i = void 0 !== n; (e = e[ t ]) && 9 !== e.nodeType;) {
if (1 === e.nodeType) {
if (i && xe(e).is(n)) {
break;
} r.push(e);
}
} return r;
}, qe = function(e, t) {
for (var n = []; e; e = e.nextSibling) {
1 === e.nodeType && e !== t && n.push(e);
} return n;
}, Se = xe.expr.match.needsContext, De = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, Ne = /^.[^:#\[\.,]*$/; xe.filter = function(e, t, n) {
var r = t[ 0 ]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? xe.find.matchesSelector(r, e) ? [ r ] : [] : xe.find.matches(e, xe.grep(t, function(e) {
return 1 === e.nodeType;
}));
}, xe.fn.extend({ find: function(e) {
var t, n, r = this.length, i = this; if ("string" != typeof e) {
return this.pushStack(xe(e).filter(function() {
for (t = 0; t < r; t++) {
if (xe.contains(i[ t ], this)) {
return !0;
}
}
}));
} for (n = this.pushStack([]), t = 0; t < r; t++) {
xe.find(e, i[ t ], n);
} return r > 1 ? xe.uniqueSort(n) : n;
}, filter: function(e) {
return this.pushStack(l(this, e || [], !1));
}, not: function(e) {
return this.pushStack(l(this, e || [], !0));
}, is: function(e) {
return !!l(this, "string" == typeof e && Se.test(e) ? xe(e) : e || [], !1).length;
} }); var Ae, je = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Le = xe.fn.init = function(e, t, n) {
var r, i; if (!e) {
return this;
} if (n = n || Ae, "string" == typeof e) {
if (r = "<" === e[ 0 ] && ">" === e[ e.length - 1 ] && e.length >= 3 ? [ null, e, null ] : je.exec(e), !r || !r[ 1 ] && t) {
return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
} if (r[ 1 ]) {
if (t = t instanceof xe ? t[ 0 ] : t, xe.merge(this, xe.parseHTML(r[ 1 ], t && t.nodeType ? t.ownerDocument || t : ae, !0)), De.test(r[ 1 ]) && xe.isPlainObject(t)) {
for (r in t) {
xe.isFunction(this[ r ]) ? this[ r ](t[ r ]) : this.attr(r, t[ r ]);
}
} return this;
} return i = ae.getElementById(r[ 2 ]), i && (this[ 0 ] = i, this.length = 1), this;
} return e.nodeType ? (this[ 0 ] = e, this.length = 1, this) : xe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(xe) : xe.makeArray(e, this);
}; Le.prototype = xe.fn, Ae = xe(ae); var $e = /^(?:parents|prev(?:Until|All))/, He = { children: !0, contents: !0, next: !0, prev: !0 }; xe.fn.extend({ has: function(e) {
var t = xe(e, this), n = t.length; return this.filter(function() {
for (var e = 0; e < n; e++) {
if (xe.contains(this, t[ e ])) {
return !0;
}
}
});
}, closest: function(e, t) {
var n, r = 0, i = this.length, o = [], a = "string" != typeof e && xe(e); if (!Se.test(e)) {
for (;r < i; r++) {
for (n = this[ r ]; n && n !== t; n = n.parentNode) {
if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && xe.find.matchesSelector(n, e))) {
o.push(n); break;
}
}
}
} return this.pushStack(o.length > 1 ? xe.uniqueSort(o) : o);
}, index: function(e) {
return e ? "string" == typeof e ? fe.call(xe(e), this[ 0 ]) : fe.call(this, e.jquery ? e[ 0 ] : e) : this[ 0 ] && this[ 0 ].parentNode ? this.first().prevAll().length : -1;
}, add: function(e, t) {
return this.pushStack(xe.uniqueSort(xe.merge(this.get(), xe(e, t))));
}, addBack: function(e) {
return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
} }), xe.each({ parent: function(e) {
var t = e.parentNode; return t && 11 !== t.nodeType ? t : null;
}, parents: function(e) {
return ke(e, "parentNode");
}, parentsUntil: function(e, t, n) {
return ke(e, "parentNode", n);
}, next: function(e) {
return c(e, "nextSibling");
}, prev: function(e) {
return c(e, "previousSibling");
}, nextAll: function(e) {
return ke(e, "nextSibling");
}, prevAll: function(e) {
return ke(e, "previousSibling");
}, nextUntil: function(e, t, n) {
return ke(e, "nextSibling", n);
}, prevUntil: function(e, t, n) {
return ke(e, "previousSibling", n);
}, siblings: function(e) {
return qe((e.parentNode || {}).firstChild, e);
}, children: function(e) {
return qe(e.firstChild);
}, contents: function(e) {
return u(e, "iframe") ? e.contentDocument : (u(e, "template") && (e = e.content || e), xe.merge([], e.childNodes));
} }, function(e, t) {
xe.fn[ e ] = function(n, r) {
var i = xe.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = xe.filter(r, i)), this.length > 1 && (He[ e ] || xe.uniqueSort(i), $e.test(e) && i.reverse()), this.pushStack(i);
};
}); var Oe = /[^\x20\t\r\n\f]+/g; xe.Callbacks = function(e) {
e = "string" == typeof e ? f(e) : xe.extend({}, e); var t, n, r, i, o = [], a = [], s = -1, u = function() {
for (i = i || e.once, r = t = !0; a.length; s = -1) {
for (n = a.shift(); ++s < o.length;) {
o[ s ].apply(n[ 0 ], n[ 1 ]) === !1 && e.stopOnFalse && (s = o.length, n = !1);
}
} e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
}, l = { add: function() {
return o && (n && !t && (s = o.length - 1, a.push(n)), (function t(n) {
xe.each(n, function(n, r) {
xe.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== xe.type(r) && t(r);
});
})(arguments), n && !t && u()), this;
}, remove: function() {
return xe.each(arguments, function(e, t) {
for (var n; (n = xe.inArray(t, o, n)) > -1;) {
o.splice(n, 1), n <= s && s--;
}
}), this;
}, has: function(e) {
return e ? xe.inArray(e, o) > -1 : o.length > 0;
}, empty: function() {
return o && (o = []), this;
}, disable: function() {
return i = a = [], o = n = "", this;
}, disabled: function() {
return !o;
}, lock: function() {
return i = a = [], n || t || (o = n = ""), this;
}, locked: function() {
return !!i;
}, fireWith: function(e, n) {
return i || (n = n || [], n = [ e, n.slice ? n.slice() : n ], a.push(n), t || u()), this;
}, fire: function() {
return l.fireWith(this, arguments), this;
}, fired: function() {
return !!r;
} }; return l;
}, xe.extend({ Deferred: function(e) {
var t = [ [ "notify", "progress", xe.Callbacks("memory"), xe.Callbacks("memory"), 2 ], [ "resolve", "done", xe.Callbacks("once memory"), xe.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", xe.Callbacks("once memory"), xe.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", i = { state: function() {
return r;
}, always: function() {
return o.done(arguments).fail(arguments), this;
}, catch: function(e) {
return i.then(null, e);
}, pipe: function() {
var e = arguments; return xe.Deferred(function(n) {
xe.each(t, function(t, r) {
var i = xe.isFunction(e[ r[ 4 ] ]) && e[ r[ 4 ] ]; o[ r[ 1 ] ](function() {
var e = i && i.apply(this, arguments); e && xe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[ r[ 0 ] + "With" ](this, i ? [ e ] : arguments);
});
}), e = null;
}).promise();
}, then: function(e, r, i) {
function o(e, t, r, i) {
return function() {
var s = this, u = arguments, l = function() {
var n, l; if (!(e < a)) {
if (n = r.apply(s, u), n === t.promise()) {
throw new TypeError("Thenable self-resolution");
} l = n && ("object" == typeof n || "function" == typeof n) && n.then, xe.isFunction(l) ? i ? l.call(n, o(a, t, p, i), o(a, t, d, i)) : (a++, l.call(n, o(a, t, p, i), o(a, t, d, i), o(a, t, p, t.notifyWith))) : (r !== p && (s = void 0, u = [ n ]), (i || t.resolveWith)(s, u));
}
}, c = i ? l : function() {
try {
l();
} catch (n) {
xe.Deferred.exceptionHook && xe.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= a && (r !== d && (s = void 0, u = [ n ]), t.rejectWith(s, u));
}
}; e ? c() : (xe.Deferred.getStackHook && (c.stackTrace = xe.Deferred.getStackHook()), n.setTimeout(c));
};
} var a = 0; return xe.Deferred(function(n) {
t[ 0 ][ 3 ].add(o(0, n, xe.isFunction(i) ? i : p, n.notifyWith)), t[ 1 ][ 3 ].add(o(0, n, xe.isFunction(e) ? e : p)), t[ 2 ][ 3 ].add(o(0, n, xe.isFunction(r) ? r : d));
}).promise();
}, promise: function(e) {
return null != e ? xe.extend(e, i) : i;
} }, o = {}; return xe.each(t, function(e, n) {
var a = n[ 2 ], s = n[ 5 ]; i[ n[ 1 ] ] = a.add, s && a.add(function() {
r = s;
}, t[ 3 - e ][ 2 ].disable, t[ 0 ][ 2 ].lock), a.add(n[ 3 ].fire), o[ n[ 0 ] ] = function() {
return o[ n[ 0 ] + "With" ](this === o ? void 0 : this, arguments), this;
}, o[ n[ 0 ] + "With" ] = a.fireWith;
}), i.promise(o), e && e.call(o, o), o;
}, when: function(e) {
var t = arguments.length, n = t, r = Array(n), i = ue.call(arguments), o = xe.Deferred(), a = function(e) {
return function(n) {
r[ e ] = this, i[ e ] = arguments.length > 1 ? ue.call(arguments) : n, --t || o.resolveWith(r, i);
};
}; if (t <= 1 && (h(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || xe.isFunction(i[ n ] && i[ n ].then))) {
return o.then();
} for (;n--;) {
h(i[ n ], a(n), o.reject);
} return o.promise();
} }); var Fe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; xe.Deferred.exceptionHook = function(e, t) {
n.console && n.console.warn && e && Fe.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
}, xe.readyException = function(e) {
n.setTimeout(function() {
throw e;
});
}; var Pe = xe.Deferred(); xe.fn.ready = function(e) {
return Pe.then(e).catch(function(e) {
xe.readyException(e);
}), this;
}, xe.extend({ isReady: !1, readyWait: 1, ready: function(e) {
(e === !0 ? --xe.readyWait : xe.isReady) || (xe.isReady = !0, e !== !0 && --xe.readyWait > 0 || Pe.resolveWith(ae, [ xe ]));
} }), xe.ready.then = Pe.then, "complete" === ae.readyState || "loading" !== ae.readyState && !ae.documentElement.doScroll ? n.setTimeout(xe.ready) : (ae.addEventListener("DOMContentLoaded", g), n.addEventListener("load", g)); var Re = function(e, t, n, r, i, o, a) {
var s = 0, u = e.length, l = null == n; if ("object" === xe.type(n)) {
i = !0; for (s in n) {
Re(e, t, s, n[ s ], !0, o, a);
}
} else if (void 0 !== r && (i = !0, xe.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
return l.call(xe(e), n);
})), t)) {
for (;s < u; s++) {
t(e[ s ], n, a ? r : r.call(e[ s ], s, t(e[ s ], n)));
}
} return i ? e : l ? t.call(e) : u ? t(e[ 0 ], n) : o;
}, Me = function(e) {
return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
}; m.uid = 1, m.prototype = { cache: function(e) {
var t = e[ this.expando ]; return t || (t = {}, Me(e) && (e.nodeType ? e[ this.expando ] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
}, set: function(e, t, n) {
var r, i = this.cache(e); if ("string" == typeof t) {
i[ xe.camelCase(t) ] = n;
} else {
for (r in t) {
i[ xe.camelCase(r) ] = t[ r ];
}
} return i;
}, get: function(e, t) {
return void 0 === t ? this.cache(e) : e[ this.expando ] && e[ this.expando ][ xe.camelCase(t) ];
}, access: function(e, t, n) {
return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
}, remove: function(e, t) {
var n, r = e[ this.expando ]; if (void 0 !== r) {
if (void 0 !== t) {
Array.isArray(t) ? t = t.map(xe.camelCase) : (t = xe.camelCase(t), t = t in r ? [ t ] : t.match(Oe) || []), n = t.length; for (;n--;) {
delete r[ t[ n ] ];
}
}(void 0 === t || xe.isEmptyObject(r)) && (e.nodeType ? e[ this.expando ] = void 0 : delete e[ this.expando ]);
}
}, hasData: function(e) {
var t = e[ this.expando ]; return void 0 !== t && !xe.isEmptyObject(t);
} }; var Ie = new m, Be = new m, We = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, _e = /[A-Z]/g; xe.extend({ hasData: function(e) {
return Be.hasData(e) || Ie.hasData(e);
}, data: function(e, t, n) {
return Be.access(e, t, n);
}, removeData: function(e, t) {
Be.remove(e, t);
}, _data: function(e, t, n) {
return Ie.access(e, t, n);
}, _removeData: function(e, t) {
Ie.remove(e, t);
} }), xe.fn.extend({ data: function(e, t) {
var n, r, i, o = this[ 0 ], a = o && o.attributes; if (void 0 === e) {
if (this.length && (i = Be.get(o), 1 === o.nodeType && !Ie.get(o, "hasDataAttrs"))) {
for (n = a.length; n--;) {
a[ n ] && (r = a[ n ].name, 0 === r.indexOf("data-") && (r = xe.camelCase(r.slice(5)), v(o, r, i[ r ])));
} Ie.set(o, "hasDataAttrs", !0);
} return i;
} return "object" == typeof e ? this.each(function() {
Be.set(this, e);
}) : Re(this, function(t) {
var n; if (o && void 0 === t) {
if (n = Be.get(o, e), void 0 !== n) {
return n;
} if (n = v(o, e), void 0 !== n) {
return n;
}
} else {
this.each(function() {
Be.set(this, e, t);
});
}
}, null, t, arguments.length > 1, null, !0);
}, removeData: function(e) {
return this.each(function() {
Be.remove(this, e);
});
} }), xe.extend({ queue: function(e, t, n) {
var r; if (e) {
return t = (t || "fx") + "queue", r = Ie.get(e, t), n && (!r || Array.isArray(n) ? r = Ie.access(e, t, xe.makeArray(n)) : r.push(n)), r || [];
}
}, dequeue: function(e, t) {
t = t || "fx"; var n = xe.queue(e, t), r = n.length, i = n.shift(), o = xe._queueHooks(e, t), a = function() {
xe.dequeue(e, t);
}; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
}, _queueHooks: function(e, t) {
var n = t + "queueHooks"; return Ie.get(e, n) || Ie.access(e, n, { empty: xe.Callbacks("once memory").add(function() {
Ie.remove(e, [ t + "queue", n ]);
}) });
} }), xe.fn.extend({ queue: function(e, t) {
var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? xe.queue(this[ 0 ], e) : void 0 === t ? this : this.each(function() {
var n = xe.queue(this, e, t); xe._queueHooks(this, e), "fx" === e && "inprogress" !== n[ 0 ] && xe.dequeue(this, e);
});
}, dequeue: function(e) {
return this.each(function() {
xe.dequeue(this, e);
});
}, clearQueue: function(e) {
return this.queue(e || "fx", []);
}, promise: function(e, t) {
var n, r = 1, i = xe.Deferred(), o = this, a = this.length, s = function() {
--r || i.resolveWith(o, [ o ]);
}; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
n = Ie.get(o[ a ], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
} return s(), i.promise(t);
} }); var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Xe = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$", "i"), Ue = [ "Top", "Right", "Bottom", "Left" ], Ve = function(e, t) {
return e = t || e, "none" === e.style.display || "" === e.style.display && xe.contains(e.ownerDocument, e) && "none" === xe.css(e, "display");
}, Ge = function(e, t, n, r) {
var i, o, a = {}; for (o in t) {
a[ o ] = e.style[ o ], e.style[ o ] = t[ o ];
} i = n.apply(e, r || []); for (o in t) {
e.style[ o ] = a[ o ];
} return i;
}, Ye = {}; xe.fn.extend({ show: function() {
return w(this, !0);
}, hide: function() {
return w(this);
}, toggle: function(e) {
return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
Ve(this) ? xe(this).show() : xe(this).hide();
});
} }); var Qe = /^(?:checkbox|radio)$/i, Je = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Ke = /^$|\/(?:java|ecma)script/i, Ze = { option: [ 1, "<select multiple='multiple'>", "</select>" ], thead: [ 1, "<table>", "</table>" ], col: [ 2, "<table><colgroup>", "</colgroup></table>" ], tr: [ 2, "<table><tbody>", "</tbody></table>" ], td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ], _default: [ 0, "", "" ] }; Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead,
Ze.th = Ze.td; var et = /<|&#?\w+;/; !(function() {
var e = ae.createDocumentFragment(), t = e.appendChild(ae.createElement("div")), n = ae.createElement("input"); n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ye.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ye.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
})(); var tt = ae.documentElement, nt = /^key/, rt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, it = /^([^.]*)(?:\.(.+)|)/; xe.event = { global: {}, add: function(e, t, n, r, i) {
var o, a, s, u, l, c, f, p, d, h, g, m = Ie.get(e); if (m) {
for (n.handler && (o = n, n = o.handler, i = o.selector), i && xe.find.matchesSelector(tt, i), n.guid || (n.guid = xe.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
return "undefined" != typeof xe && xe.event.triggered !== t.type ? xe.event.dispatch.apply(e, arguments) : void 0;
}), t = (t || "").match(Oe) || [ "" ], l = t.length; l--;) {
s = it.exec(t[ l ]) || [], d = g = s[ 1 ], h = (s[ 2 ] || "").split(".").sort(), d && (f = xe.event.special[ d ] || {}, d = (i ? f.delegateType : f.bindType) || d, f = xe.event.special[ d ] || {}, c = xe.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && xe.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[ d ]) || (p = u[ d ] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), xe.event.global[ d ] = !0);
}
}
}, remove: function(e, t, n, r, i) {
var o, a, s, u, l, c, f, p, d, h, g, m = Ie.hasData(e) && Ie.get(e); if (m && (u = m.events)) {
for (t = (t || "").match(Oe) || [ "" ], l = t.length; l--;) {
if (s = it.exec(t[ l ]) || [], d = g = s[ 1 ], h = (s[ 2 ] || "").split(".").sort(), d) {
for (f = xe.event.special[ d ] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[ d ] || [], s = s[ 2 ] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) {
c = p[ o ], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
} a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || xe.removeEvent(e, d, m.handle), delete u[ d ]);
} else {
for (d in u) {
xe.event.remove(e, d + t[ l ], n, r, !0);
}
}
} xe.isEmptyObject(u) && Ie.remove(e, "handle events");
}
}, dispatch: function(e) {
var t, n, r, i, o, a, s = xe.event.fix(e), u = new Array(arguments.length), l = (Ie.get(this, "events") || {})[ s.type ] || [], c = xe.event.special[ s.type ] || {}; for (u[ 0 ] = s, t = 1; t < arguments.length; t++) {
u[ t ] = arguments[ t ];
} if (s.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, s) !== !1) {
for (a = xe.event.handlers.call(this, s, l), t = 0; (i = a[ t++ ]) && !s.isPropagationStopped();) {
for (s.currentTarget = i.elem, n = 0; (o = i.handlers[ n++ ]) && !s.isImmediatePropagationStopped();) {
s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, r = ((xe.event.special[ o.origType ] || {}).handle || o.handler).apply(i.elem, u), void 0 !== r && (s.result = r) === !1 && (s.preventDefault(), s.stopPropagation()));
}
} return c.postDispatch && c.postDispatch.call(this, s), s.result;
}
}, handlers: function(e, t) {
var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && e.button >= 1)) {
for (;l !== this; l = l.parentNode || this) {
if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
for (o = [], a = {}, n = 0; n < u; n++) {
r = t[ n ], i = r.selector + " ", void 0 === a[ i ] && (a[ i ] = r.needsContext ? xe(i, this).index(l) > -1 : xe.find(i, this, null, [ l ]).length), a[ i ] && o.push(r);
} o.length && s.push({ elem: l, handlers: o });
}
}
} return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
}, addProp: function(e, t) {
Object.defineProperty(xe.Event.prototype, e, { enumerable: !0, configurable: !0, get: xe.isFunction(t) ? function() {
if (this.originalEvent) {
return t(this.originalEvent);
}
} : function() {
if (this.originalEvent) {
return this.originalEvent[ e ];
}
}, set: function(t) {
Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
} });
}, fix: function(e) {
return e[ xe.expando ] ? e : new xe.Event(e);
}, special: { load: { noBubble: !0 }, focus: { trigger: function() {
if (this !== S() && this.focus) {
return this.focus(), !1;
}
}, delegateType: "focusin" }, blur: { trigger: function() {
if (this === S() && this.blur) {
return this.blur(), !1;
}
}, delegateType: "focusout" }, click: { trigger: function() {
if ("checkbox" === this.type && this.click && u(this, "input")) {
return this.click(), !1;
}
}, _default: function(e) {
return u(e.target, "a");
} }, beforeunload: { postDispatch: function(e) {
void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
} } } }, xe.removeEvent = function(e, t, n) {
e.removeEventListener && e.removeEventListener(t, n);
}, xe.Event = function(e, t) {
return this instanceof xe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? k : q, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && xe.extend(this, t), this.timeStamp = e && e.timeStamp || xe.now(), void(this[ xe.expando ] = !0)) : new xe.Event(e, t);
}, xe.Event.prototype = { constructor: xe.Event, isDefaultPrevented: q, isPropagationStopped: q, isImmediatePropagationStopped: q, isSimulated: !1, preventDefault: function() {
var e = this.originalEvent; this.isDefaultPrevented = k, e && !this.isSimulated && e.preventDefault();
}, stopPropagation: function() {
var e = this.originalEvent; this.isPropagationStopped = k, e && !this.isSimulated && e.stopPropagation();
}, stopImmediatePropagation: function() {
var e = this.originalEvent; this.isImmediatePropagationStopped = k, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
} }, xe.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) {
var t = e.button; return null == e.which && nt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && rt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
} }, xe.event.addProp), xe.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
xe.event.special[ e ] = { delegateType: t, bindType: t, handle: function(e) {
var n, r = this, i = e.relatedTarget, o = e.handleObj; return i && (i === r || xe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
} };
}), xe.fn.extend({ on: function(e, t, n, r) {
return D(this, e, t, n, r);
}, one: function(e, t, n, r) {
return D(this, e, t, n, r, 1);
}, off: function(e, t, n) {
var r, i; if (e && e.preventDefault && e.handleObj) {
return r = e.handleObj, xe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
} if ("object" == typeof e) {
for (i in e) {
this.off(i, t, e[ i ]);
} return this;
} return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = q), this.each(function() {
xe.event.remove(this, e, n, t);
});
} }); var ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, at = /<script|<style|<link/i, st = /checked\s*(?:[^=]|=\s*.checked.)/i, ut = /^true\/(.*)/, lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; xe.extend({ htmlPrefilter: function(e) {
return e.replace(ot, "<$1></$2>");
}, clone: function(e, t, n) {
var r, i, o, a, s = e.cloneNode(!0), u = xe.contains(e.ownerDocument, e); if (!(ye.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || xe.isXMLDoc(e))) {
for (a = T(s), o = T(e), r = 0, i = o.length; r < i; r++) {
$(o[ r ], a[ r ]);
}
} if (t) {
if (n) {
for (o = o || T(e), a = a || T(s), r = 0, i = o.length; r < i; r++) {
L(o[ r ], a[ r ]);
}
} else {
L(e, s);
}
} return a = T(s, "script"), a.length > 0 && E(a, !u && T(e, "script")), s;
}, cleanData: function(e) {
for (var t, n, r, i = xe.event.special, o = 0; void 0 !== (n = e[ o ]); o++) {
if (Me(n)) {
if (t = n[ Ie.expando ]) {
if (t.events) {
for (r in t.events) {
i[ r ] ? xe.event.remove(n, r) : xe.removeEvent(n, r, t.handle);
}
} n[ Ie.expando ] = void 0;
}n[ Be.expando ] && (n[ Be.expando ] = void 0);
}
}
} }), xe.fn.extend({ detach: function(e) {
return O(this, e, !0);
}, remove: function(e) {
return O(this, e);
}, text: function(e) {
return Re(this, function(e) {
return void 0 === e ? xe.text(this) : this.empty().each(function() {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
});
}, null, e, arguments.length);
}, append: function() {
return H(this, arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = N(this, e); t.appendChild(e);
}
});
}, prepend: function() {
return H(this, arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = N(this, e); t.insertBefore(e, t.firstChild);
}
});
}, before: function() {
return H(this, arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this);
});
}, after: function() {
return H(this, arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
});
}, empty: function() {
for (var e, t = 0; null != (e = this[ t ]); t++) {
1 === e.nodeType && (xe.cleanData(T(e, !1)), e.textContent = "");
} return this;
}, clone: function(e, t) {
return e = null != e && e, t = null == t ? e : t, this.map(function() {
return xe.clone(this, e, t);
});
}, html: function(e) {
return Re(this, function(e) {
var t = this[ 0 ] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) {
return t.innerHTML;
} if ("string" == typeof e && !at.test(e) && !Ze[ (Je.exec(e) || [ "", "" ])[ 1 ].toLowerCase() ]) {
e = xe.htmlPrefilter(e); try {
for (;n < r; n++) {
t = this[ n ] || {}, 1 === t.nodeType && (xe.cleanData(T(t, !1)), t.innerHTML = e);
} t = 0;
} catch (e) {}
}t && this.empty().append(e);
}, null, e, arguments.length);
}, replaceWith: function() {
var e = []; return H(this, arguments, function(t) {
var n = this.parentNode; xe.inArray(this, e) < 0 && (xe.cleanData(T(this)), n && n.replaceChild(t, this));
}, e);
} }), xe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) {
xe.fn[ e ] = function(e) {
for (var n, r = [], i = xe(e), o = i.length - 1, a = 0; a <= o; a++) {
n = a === o ? this : this.clone(!0), xe(i[ a ])[ t ](n), ce.apply(r, n.get());
} return this.pushStack(r);
};
}); var ct = /^margin/, ft = new RegExp("^(" + ze + ")(?!px)[a-z%]+$", "i"), pt = function(e) {
var t = e.ownerDocument.defaultView; return t && t.opener || (t = n), t.getComputedStyle(e);
}; !(function() {
function e() {
if (s) {
s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", tt.appendChild(a); var e = n.getComputedStyle(s); t = "1%" !== e.top, o = "2px" === e.marginLeft, r = "4px" === e.width, s.style.marginRight = "50%", i = "4px" === e.marginRight, tt.removeChild(a), s = null;
}
} var t, r, i, o, a = ae.createElement("div"), s = ae.createElement("div"); s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ye.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), xe.extend(ye, { pixelPosition: function() {
return e(), t;
}, boxSizingReliable: function() {
return e(), r;
}, pixelMarginRight: function() {
return e(), i;
}, reliableMarginLeft: function() {
return e(), o;
} }));
})(); var dt = /^(none|table(?!-c[ea]).+)/, ht = /^--/, gt = { position: "absolute", visibility: "hidden", display: "block" }, mt = { letterSpacing: "0", fontWeight: "400" }, yt = [ "Webkit", "Moz", "ms" ], vt = ae.createElement("div").style; xe.extend({ cssHooks: { opacity: { get: function(e, t) {
if (t) {
var n = F(e, "opacity"); return "" === n ? "1" : n;
}
} } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function(e, t, n, r) {
if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
var i, o, a, s = xe.camelCase(t), u = ht.test(t), l = e.style; return u || (t = M(s)), a = xe.cssHooks[ t ] || xe.cssHooks[ s ], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[ t ] : (o = typeof n, "string" === o && (i = Xe.exec(n)) && i[ 1 ] && (n = x(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[ 3 ] || (xe.cssNumber[ s ] ? "" : "px")), ye.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[ t ] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[ t ] = n)), void 0);
}
}, css: function(e, t, n, r) {
var i, o, a, s = xe.camelCase(t), u = ht.test(t); return u || (t = M(s)), a = xe.cssHooks[ t ] || xe.cssHooks[ s ], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = F(e, t, r)), "normal" === i && t in mt && (i = mt[ t ]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i;
} }), xe.each([ "height", "width" ], function(e, t) {
xe.cssHooks[ t ] = { get: function(e, n, r) {
if (n) {
return !dt.test(xe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? W(e, t, r) : Ge(e, gt, function() {
return W(e, t, r);
});
}
}, set: function(e, n, r) {
var i, o = r && pt(e), a = r && B(e, t, r, "border-box" === xe.css(e, "boxSizing", !1, o), o); return a && (i = Xe.exec(n)) && "px" !== (i[ 3 ] || "px") && (e.style[ t ] = n, n = xe.css(e, t)), I(e, n, a);
} };
}), xe.cssHooks.marginLeft = P(ye.reliableMarginLeft, function(e, t) {
if (t) {
return (parseFloat(F(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, { marginLeft: 0 }, function() {
return e.getBoundingClientRect().left;
})) + "px";
}
}), xe.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
xe.cssHooks[ e + t ] = { expand: function(n) {
for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) {
i[ e + Ue[ r ] + t ] = o[ r ] || o[ r - 2 ] || o[ 0 ];
} return i;
} }, ct.test(e) || (xe.cssHooks[ e + t ].set = I);
}), xe.fn.extend({ css: function(e, t) {
return Re(this, function(e, t, n) {
var r, i, o = {}, a = 0; if (Array.isArray(t)) {
for (r = pt(e), i = t.length; a < i; a++) {
o[ t[ a ] ] = xe.css(e, t[ a ], !1, r);
} return o;
} return void 0 !== n ? xe.style(e, t, n) : xe.css(e, t);
}, e, t, arguments.length > 1);
} }), xe.Tween = _, _.prototype = { constructor: _, init: function(e, t, n, r, i, o) {
this.elem = e, this.prop = n, this.easing = i || xe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (xe.cssNumber[ n ] ? "" : "px");
}, cur: function() {
var e = _.propHooks[ this.prop ]; return e && e.get ? e.get(this) : _.propHooks._default.get(this);
}, run: function(e) {
var t, n = _.propHooks[ this.prop ]; return this.options.duration ? this.pos = t = xe.easing[ this.easing ](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this;
} }, _.prototype.init.prototype = _.prototype, _.propHooks = { _default: { get: function(e) {
var t; return 1 !== e.elem.nodeType || null != e.elem[ e.prop ] && null == e.elem.style[ e.prop ] ? e.elem[ e.prop ] : (t = xe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0);
}, set: function(e) {
xe.fx.step[ e.prop ] ? xe.fx.step[ e.prop ](e) : 1 !== e.elem.nodeType || null == e.elem.style[ xe.cssProps[ e.prop ] ] && !xe.cssHooks[ e.prop ] ? e.elem[ e.prop ] = e.now : xe.style(e.elem, e.prop, e.now + e.unit);
} } }, _.propHooks.scrollTop = _.propHooks.scrollLeft = { set: function(e) {
e.elem.nodeType && e.elem.parentNode && (e.elem[ e.prop ] = e.now);
} }, xe.easing = { linear: function(e) {
return e;
}, swing: function(e) {
return.5 - Math.cos(e * Math.PI) / 2;
}, _default: "swing" }, xe.fx = _.prototype.init, xe.fx.step = {}; var xt, bt, wt = /^(?:toggle|show|hide)$/, Tt = /queueHooks$/; xe.Animation = xe.extend(Q, { tweeners: { "*": [ function(e, t) {
var n = this.createTween(e, t); return x(n.elem, e, Xe.exec(t), n), n;
} ] }, tweener: function(e, t) {
xe.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(Oe); for (var n, r = 0, i = e.length; r < i; r++) {
n = e[ r ], Q.tweeners[ n ] = Q.tweeners[ n ] || [], Q.tweeners[ n ].unshift(t);
}
}, prefilters: [ G ], prefilter: function(e, t) {
t ? Q.prefilters.unshift(e) : Q.prefilters.push(e);
} }), xe.speed = function(e, t, n) {
var r = e && "object" == typeof e ? xe.extend({}, e) : { complete: n || !n && t || xe.isFunction(e) && e, duration: e, easing: n && t || t && !xe.isFunction(t) && t }; return xe.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in xe.fx.speeds ? r.duration = xe.fx.speeds[ r.duration ] : r.duration = xe.fx.speeds._default), null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
xe.isFunction(r.old) && r.old.call(this), r.queue && xe.dequeue(this, r.queue);
}, r;
}, xe.fn.extend({ fadeTo: function(e, t, n, r) {
return this.filter(Ve).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
}, animate: function(e, t, n, r) {
var i = xe.isEmptyObject(e), o = xe.speed(t, n, r), a = function() {
var t = Q(this, xe.extend({}, e), o); (i || Ie.get(this, "finish")) && t.stop(!0);
}; return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
}, stop: function(e, t, n) {
var r = function(e) {
var t = e.stop; delete e.stop, t(n);
}; return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
var t = !0, i = null != e && e + "queueHooks", o = xe.timers, a = Ie.get(this); if (i) {
a[ i ] && a[ i ].stop && r(a[ i ]);
} else {
for (i in a) {
a[ i ] && a[ i ].stop && Tt.test(i) && r(a[ i ]);
}
} for (i = o.length; i--;) {
o[ i ].elem !== this || null != e && o[ i ].queue !== e || (o[ i ].anim.stop(n), t = !1, o.splice(i, 1));
} !t && n || xe.dequeue(this, e);
});
}, finish: function(e) {
return e !== !1 && (e = e || "fx"), this.each(function() {
var t, n = Ie.get(this), r = n[ e + "queue" ], i = n[ e + "queueHooks" ], o = xe.timers, a = r ? r.length : 0; for (n.finish = !0, xe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
o[ t ].elem === this && o[ t ].queue === e && (o[ t ].anim.stop(!0), o.splice(t, 1));
} for (t = 0; t < a; t++) {
r[ t ] && r[ t ].finish && r[ t ].finish.call(this);
} delete n.finish;
});
} }), xe.each([ "toggle", "show", "hide" ], function(e, t) {
var n = xe.fn[ t ]; xe.fn[ t ] = function(e, r, i) {
return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, r, i);
};
}), xe.each({ slideDown: U("show"), slideUp: U("hide"), slideToggle: U("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) {
xe.fn[ e ] = function(e, n, r) {
return this.animate(t, e, n, r);
};
}), xe.timers = [], xe.fx.tick = function() {
var e, t = 0, n = xe.timers; for (xt = xe.now(); t < n.length; t++) {
e = n[ t ], e() || n[ t ] !== e || n.splice(t--, 1);
} n.length || xe.fx.stop(), xt = void 0;
}, xe.fx.timer = function(e) {
xe.timers.push(e), xe.fx.start();
}, xe.fx.interval = 13, xe.fx.start = function() {
bt || (bt = !0, z());
}, xe.fx.stop = function() {
bt = null;
}, xe.fx.speeds = { slow: 600, fast: 200, _default: 400 }, xe.fn.delay = function(e, t) {
return e = xe.fx ? xe.fx.speeds[ e ] || e : e, t = t || "fx", this.queue(t, function(t, r) {
var i = n.setTimeout(t, e); r.stop = function() {
n.clearTimeout(i);
};
});
}, (function() {
var e = ae.createElement("input"), t = ae.createElement("select"), n = t.appendChild(ae.createElement("option")); e.type = "checkbox", ye.checkOn = "" !== e.value, ye.optSelected = n.selected, e = ae.createElement("input"), e.value = "t", e.type = "radio", ye.radioValue = "t" === e.value;
})(); var Et, Ct = xe.expr.attrHandle; xe.fn.extend({ attr: function(e, t) {
return Re(this, xe.attr, e, t, arguments.length > 1);
}, removeAttr: function(e) {
return this.each(function() {
xe.removeAttr(this, e);
});
} }), xe.extend({ attr: function(e, t, n) {
var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) {
return "undefined" == typeof e.getAttribute ? xe.prop(e, t, n) : (1 === o && xe.isXMLDoc(e) || (i = xe.attrHooks[ t.toLowerCase() ] || (xe.expr.match.bool.test(t) ? Et : void 0)), void 0 !== n ? null === n ? void xe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = xe.find.attr(e, t), null == r ? void 0 : r));
}
}, attrHooks: { type: { set: function(e, t) {
if (!ye.radioValue && "radio" === t && u(e, "input")) {
var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t;
}
} } }, removeAttr: function(e, t) {
var n, r = 0, i = t && t.match(Oe); if (i && 1 === e.nodeType) {
for (;n = i[ r++ ];) {
e.removeAttribute(n);
}
}
} }), Et = { set: function(e, t, n) {
return t === !1 ? xe.removeAttr(e, n) : e.setAttribute(n, n), n;
} }, xe.each(xe.expr.match.bool.source.match(/\w+/g), function(e, t) {
var n = Ct[ t ] || xe.find.attr; Ct[ t ] = function(e, t, r) {
var i, o, a = t.toLowerCase(); return r || (o = Ct[ a ], Ct[ a ] = i, i = null != n(e, t, r) ? a : null, Ct[ a ] = o), i;
};
}); var kt = /^(?:input|select|textarea|button)$/i, qt = /^(?:a|area)$/i; xe.fn.extend({ prop: function(e, t) {
return Re(this, xe.prop, e, t, arguments.length > 1);
}, removeProp: function(e) {
return this.each(function() {
delete this[ xe.propFix[ e ] || e ];
});
} }), xe.extend({ prop: function(e, t, n) {
var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) {
return 1 === o && xe.isXMLDoc(e) || (t = xe.propFix[ t ] || t, i = xe.propHooks[ t ]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[ t ] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[ t ];
}
}, propHooks: { tabIndex: { get: function(e) {
var t = xe.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : kt.test(e.nodeName) || qt.test(e.nodeName) && e.href ? 0 : -1;
} } }, propFix: { for: "htmlFor", class: "className" } }), ye.optSelected || (xe.propHooks.selected = { get: function(e) {
var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null;
}, set: function(e) {
var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
} }), xe.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
xe.propFix[ this.toLowerCase() ] = this;
}), xe.fn.extend({ addClass: function(e) {
var t, n, r, i, o, a, s, u = 0; if (xe.isFunction(e)) {
return this.each(function(t) {
xe(this).addClass(e.call(this, t, K(this)));
});
} if ("string" == typeof e && e) {
for (t = e.match(Oe) || []; n = this[ u++ ];) {
if (i = K(n), r = 1 === n.nodeType && " " + J(i) + " ") {
for (a = 0; o = t[ a++ ];) {
r.indexOf(" " + o + " ") < 0 && (r += o + " ");
} s = J(r), i !== s && n.setAttribute("class", s);
}
}
} return this;
}, removeClass: function(e) {
var t, n, r, i, o, a, s, u = 0; if (xe.isFunction(e)) {
return this.each(function(t) {
xe(this).removeClass(e.call(this, t, K(this)));
});
} if (!arguments.length) {
return this.attr("class", "");
} if ("string" == typeof e && e) {
for (t = e.match(Oe) || []; n = this[ u++ ];) {
if (i = K(n), r = 1 === n.nodeType && " " + J(i) + " ") {
for (a = 0; o = t[ a++ ];) {
for (;r.indexOf(" " + o + " ") > -1;) {
r = r.replace(" " + o + " ", " ");
}
} s = J(r), i !== s && n.setAttribute("class", s);
}
}
} return this;
}, toggleClass: function(e, t) {
var n = typeof e; return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : xe.isFunction(e) ? this.each(function(n) {
xe(this).toggleClass(e.call(this, n, K(this), t), t);
}) : this.each(function() {
var t, r, i, o; if ("string" === n) {
for (r = 0, i = xe(this), o = e.match(Oe) || []; t = o[ r++ ];) {
i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
}
} else {
void 0 !== e && "boolean" !== n || (t = K(this), t && Ie.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ie.get(this, "__className__") || ""));
}
});
}, hasClass: function(e) {
var t, n, r = 0; for (t = " " + e + " "; n = this[ r++ ];) {
if (1 === n.nodeType && (" " + J(K(n)) + " ").indexOf(t) > -1) {
return !0;
}
} return !1;
} }); var St = /\r/g; xe.fn.extend({ val: function(e) {
var t, n, r, i = this[ 0 ]; {if (arguments.length) {
return r = xe.isFunction(e), this.each(function(n) {
var i; 1 === this.nodeType && (i = r ? e.call(this, n, xe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = xe.map(i, function(e) {
return null == e ? "" : e + "";
})), t = xe.valHooks[ this.type ] || xe.valHooks[ this.nodeName.toLowerCase() ], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
});
} if (i) {
return t = xe.valHooks[ i.type ] || xe.valHooks[ i.nodeName.toLowerCase() ], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(St, "") : null == n ? "" : n);
}}
} }), xe.extend({ valHooks: { option: { get: function(e) {
var t = xe.find.attr(e, "value"); return null != t ? t : J(xe.text(e));
} }, select: { get: function(e) {
var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], l = a ? o + 1 : i.length; for (r = o < 0 ? l : a ? o : 0; r < l; r++) {
if (n = i[ r ], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !u(n.parentNode, "optgroup"))) {
if (t = xe(n).val(), a) {
return t;
} s.push(t);
}
} return s;
}, set: function(e, t) {
for (var n, r, i = e.options, o = xe.makeArray(t), a = i.length; a--;) {
r = i[ a ], (r.selected = xe.inArray(xe.valHooks.option.get(r), o) > -1) && (n = !0);
} return n || (e.selectedIndex = -1), o;
} } } }), xe.each([ "radio", "checkbox" ], function() {
xe.valHooks[ this ] = { set: function(e, t) {
if (Array.isArray(t)) {
return e.checked = xe.inArray(xe(e).val(), t) > -1;
}
} }, ye.checkOn || (xe.valHooks[ this ].get = function(e) {
return null === e.getAttribute("value") ? "on" : e.value;
});
}); var Dt = /^(?:focusinfocus|focusoutblur)$/; xe.extend(xe.event, { trigger: function(e, t, r, i) {
var o, a, s, u, l, c, f, p = [ r || ae ], d = he.call(e, "type") ? e.type : e, h = he.call(e, "namespace") ? e.namespace.split(".") : []; if (a = s = r = r || ae, 3 !== r.nodeType && 8 !== r.nodeType && !Dt.test(d + xe.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, e = e[ xe.expando ] ? e : new xe.Event(d, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [ e ] : xe.makeArray(t, [ e ]), f = xe.event.special[ d ] || {}, i || !f.trigger || f.trigger.apply(r, t) !== !1)) {
if (!i && !f.noBubble && !xe.isWindow(r)) {
for (u = f.delegateType || d, Dt.test(u + d) || (a = a.parentNode); a; a = a.parentNode) {
p.push(a), s = a;
} s === (r.ownerDocument || ae) && p.push(s.defaultView || s.parentWindow || n);
} for (o = 0; (a = p[ o++ ]) && !e.isPropagationStopped();) {
e.type = o > 1 ? u : f.bindType || d, c = (Ie.get(a, "events") || {})[ e.type ] && Ie.get(a, "handle"), c && c.apply(a, t), c = l && a[ l ], c && c.apply && Me(a) && (e.result = c.apply(a, t), e.result === !1 && e.preventDefault());
} return e.type = d, i || e.isDefaultPrevented() || f._default && f._default.apply(p.pop(), t) !== !1 || !Me(r) || l && xe.isFunction(r[ d ]) && !xe.isWindow(r) && (s = r[ l ], s && (r[ l ] = null), xe.event.triggered = d, r[ d ](), xe.event.triggered = void 0, s && (r[ l ] = s)), e.result;
}
}, simulate: function(e, t, n) {
var r = xe.extend(new xe.Event, n, { type: e, isSimulated: !0 }); xe.event.trigger(r, null, t);
} }), xe.fn.extend({ trigger: function(e, t) {
return this.each(function() {
xe.event.trigger(e, t, this);
});
}, triggerHandler: function(e, t) {
var n = this[ 0 ]; if (n) {
return xe.event.trigger(e, t, n, !0);
}
} }), xe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
xe.fn[ t ] = function(e, n) {
return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
};
}), xe.fn.extend({ hover: function(e, t) {
return this.mouseenter(e).mouseleave(t || e);
} }), ye.focusin = "onfocusin" in n, ye.focusin || xe.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
var n = function(e) {
xe.event.simulate(t, e.target, xe.event.fix(e));
}; xe.event.special[ t ] = { setup: function() {
var r = this.ownerDocument || this, i = Ie.access(r, t); i || r.addEventListener(e, n, !0), Ie.access(r, t, (i || 0) + 1);
}, teardown: function() {
var r = this.ownerDocument || this, i = Ie.access(r, t) - 1; i ? Ie.access(r, t, i) : (r.removeEventListener(e, n, !0), Ie.remove(r, t));
} };
}); var Nt = n.location, At = xe.now(), jt = /\?/; xe.parseXML = function(e) {
var t; if (!e || "string" != typeof e) {
return null;
} try {
t = (new n.DOMParser).parseFromString(e, "text/xml");
} catch (e) {
t = void 0;
} return t && !t.getElementsByTagName("parsererror").length || xe.error("Invalid XML: " + e), t;
}; var Lt = /\[\]$/, $t = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, Ot = /^(?:input|select|textarea|keygen)/i; xe.param = function(e, t) {
var n, r = [], i = function(e, t) {
var n = xe.isFunction(t) ? t() : t; r[ r.length ] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
}; if (Array.isArray(e) || e.jquery && !xe.isPlainObject(e)) {
xe.each(e, function() {
i(this.name, this.value);
});
} else {
for (n in e) {
Z(n, e[ n ], t, i);
}
} return r.join("&");
}, xe.fn.extend({ serialize: function() {
return xe.param(this.serializeArray());
}, serializeArray: function() {
return this.map(function() {
var e = xe.prop(this, "elements"); return e ? xe.makeArray(e) : this;
}).filter(function() {
var e = this.type; return this.name && !xe(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !Qe.test(e));
}).map(function(e, t) {
var n = xe(this).val(); return null == n ? null : Array.isArray(n) ? xe.map(n, function(e) {
return { name: t.name, value: e.replace($t, "\r\n") };
}) : { name: t.name, value: n.replace($t, "\r\n") };
}).get();
} }); var Ft = /%20/g, Pt = /#.*$/, Rt = /([?&])_=[^&]*/, Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm, It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bt = /^(?:GET|HEAD)$/, Wt = /^\/\//, _t = {}, zt = {}, Xt = "*/".concat("*"), Ut = ae.createElement("a"); Ut.href = Nt.href, xe.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Nt.href, type: "GET", isLocal: It.test(Nt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Xt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": xe.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) {
return t ? ne(ne(e, xe.ajaxSettings), t) : ne(xe.ajaxSettings, e);
}, ajaxPrefilter: ee(_t), ajaxTransport: ee(zt), ajax: function(e, t) {
function r(e, t, r, s) {
var l, p, d, b, w, T = t; c || (c = !0, u && n.clearTimeout(u), i = void 0, a = s || "", E.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, r && (b = re(h, E, r)), b = ie(h, b, E, l), l ? (h.ifModified && (w = E.getResponseHeader("Last-Modified"), w && (xe.lastModified[ o ] = w), w = E.getResponseHeader("etag"), w && (xe.etag[ o ] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, d = b.error, l = !d)) : (d = T, !e && T || (T = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || T) + "", l ? y.resolveWith(g, [ p, T, E ]) : y.rejectWith(g, [ E, T, d ]), E.statusCode(x), x = void 0, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [ E, h, l ? p : d ]), v.fireWith(g, [ E, T ]), f && (m.trigger("ajaxComplete", [ E, h ]), --xe.active || xe.event.trigger("ajaxStop")));
}"object" == typeof e && (t = e, e = void 0), t = t || {}; var i, o, a, s, u, l, c, f, p, d, h = xe.ajaxSetup({}, t), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? xe(g) : xe.event, y = xe.Deferred(), v = xe.Callbacks("once memory"), x = h.statusCode || {}, b = {}, w = {}, T = "canceled", E = { readyState: 0, getResponseHeader: function(e) {
var t; if (c) {
if (!s) {
for (s = {}; t = Mt.exec(a);) {
s[ t[ 1 ].toLowerCase() ] = t[ 2 ];
}
} t = s[ e.toLowerCase() ];
} return null == t ? null : t;
}, getAllResponseHeaders: function() {
return c ? a : null;
}, setRequestHeader: function(e, t) {
return null == c && (e = w[ e.toLowerCase() ] = w[ e.toLowerCase() ] || e, b[ e ] = t), this;
}, overrideMimeType: function(e) {
return null == c && (h.mimeType = e), this;
}, statusCode: function(e) {
var t; if (e) {
if (c) {
E.always(e[ E.status ]);
} else {
for (t in e) {
x[ t ] = [ x[ t ], e[ t ] ];
}
}
} return this;
}, abort: function(e) {
var t = e || T; return i && i.abort(t), r(0, t), this;
} }; if (y.promise(E), h.url = ((e || h.url || Nt.href) + "").replace(Wt, Nt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Oe) || [ "" ], null == h.crossDomain) {
l = ae.createElement("a"); try {
l.href = h.url, l.href = l.href, h.crossDomain = Ut.protocol + "//" + Ut.host != l.protocol + "//" + l.host;
} catch (e) {
h.crossDomain = !0;
}
} if (h.data && h.processData && "string" != typeof h.data && (h.data = xe.param(h.data, h.traditional)), te(_t, h, t, E), c) {
return E;
} f = xe.event && h.global, f && 0 === xe.active++ && xe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Bt.test(h.type), o = h.url.replace(Pt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ft, "+")) : (d = h.url.slice(o.length), h.data && (o += (jt.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Rt, "$1"), d = (jt.test(o) ? "&" : "?") + "_=" + At++ + d), h.url = o + d), h.ifModified && (xe.lastModified[ o ] && E.setRequestHeader("If-Modified-Since", xe.lastModified[ o ]), xe.etag[ o ] && E.setRequestHeader("If-None-Match", xe.etag[ o ])), (h.data && h.hasContent && h.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[ 0 ] && h.accepts[ h.dataTypes[ 0 ] ] ? h.accepts[ h.dataTypes[ 0 ] ] + ("*" !== h.dataTypes[ 0 ] ? ", " + Xt + "; q=0.01" : "") : h.accepts[ "*" ]); for (p in h.headers) {
E.setRequestHeader(p, h.headers[ p ]);
} if (h.beforeSend && (h.beforeSend.call(g, E, h) === !1 || c)) {
return E.abort();
} if (T = "abort", v.add(h.complete), E.done(h.success), E.fail(h.error), i = te(zt, h, t, E)) {
if (E.readyState = 1, f && m.trigger("ajaxSend", [ E, h ]), c) {
return E;
} h.async && h.timeout > 0 && (u = n.setTimeout(function() {
E.abort("timeout");
}, h.timeout)); try {
c = !1, i.send(b, r);
} catch (e) {
if (c) {
throw e;
} r(-1, e);
}
} else {
r(-1, "No Transport");
} return E;
}, getJSON: function(e, t, n) {
return xe.get(e, t, n, "json");
}, getScript: function(e, t) {
return xe.get(e, void 0, t, "script");
} }), xe.each([ "get", "post" ], function(e, t) {
xe[ t ] = function(e, n, r, i) {
return xe.isFunction(n) && (i = i || r, r = n, n = void 0), xe.ajax(xe.extend({ url: e, type: t, dataType: i, data: n, success: r }, xe.isPlainObject(e) && e));
};
}), xe._evalUrl = function(e) {
return xe.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
}, xe.fn.extend({ wrapAll: function(e) {
var t; return this[ 0 ] && (xe.isFunction(e) && (e = e.call(this[ 0 ])), t = xe(e, this[ 0 ].ownerDocument).eq(0).clone(!0), this[ 0 ].parentNode && t.insertBefore(this[ 0 ]), t.map(function() {
for (var e = this; e.firstElementChild;) {
e = e.firstElementChild;
} return e;
}).append(this)), this;
}, wrapInner: function(e) {
return xe.isFunction(e) ? this.each(function(t) {
xe(this).wrapInner(e.call(this, t));
}) : this.each(function() {
var t = xe(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e);
});
}, wrap: function(e) {
var t = xe.isFunction(e); return this.each(function(n) {
xe(this).wrapAll(t ? e.call(this, n) : e);
});
}, unwrap: function(e) {
return this.parent(e).not("body").each(function() {
xe(this).replaceWith(this.childNodes);
}), this;
} }), xe.expr.pseudos.hidden = function(e) {
return !xe.expr.pseudos.visible(e);
}, xe.expr.pseudos.visible = function(e) {
return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
}, xe.ajaxSettings.xhr = function() {
try {
return new n.XMLHttpRequest;
} catch (e) {}
}; var Vt = { 0: 200, 1223: 204 }, Gt = xe.ajaxSettings.xhr(); ye.cors = !!Gt && "withCredentials" in Gt, ye.ajax = Gt = !!Gt, xe.ajaxTransport(function(e) {
var t, r; if (ye.cors || Gt && !e.crossDomain) {
return { send: function(i, o) {
var a, s = e.xhr(); if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) {
for (a in e.xhrFields) {
s[ a ] = e.xhrFields[ a ];
}
} e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i[ "X-Requested-With" ] || (i[ "X-Requested-With" ] = "XMLHttpRequest"); for (a in i) {
s.setRequestHeader(a, i[ a ]);
} t = function(e) {
return function() {
t && (t = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[ s.status ] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
};
}, s.onload = t(), r = s.onerror = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
4 === s.readyState && n.setTimeout(function() {
t && r();
});
}, t = t("abort"); try {
s.send(e.hasContent && e.data || null);
} catch (e) {
if (t) {
throw e;
}
}
}, abort: function() {
t && t();
} };
}
}), xe.ajaxPrefilter(function(e) {
e.crossDomain && (e.contents.script = !1);
}), xe.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) {
return xe.globalEval(e), e;
} } }), xe.ajaxPrefilter("script", function(e) {
void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
}), xe.ajaxTransport("script", function(e) {
if (e.crossDomain) {
var t, n; return { send: function(r, i) {
t = xe("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) {
t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
}), ae.head.appendChild(t[ 0 ]);
}, abort: function() {
n && n();
} };
}
}); var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/; xe.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
var e = Yt.pop() || xe.expando + "_" + At++; return this[ e ] = !0, e;
} }), xe.ajaxPrefilter("json jsonp", function(e, t, r) {
var i, o, a, s = e.jsonp !== !1 && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data"); if (s || "jsonp" === e.dataTypes[ 0 ]) {
return i = e.jsonpCallback = xe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[ s ] = e[ s ].replace(Qt, "$1" + i) : e.jsonp !== !1 && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters[ "script json" ] = function() {
return a || xe.error(i + " was not called"), a[ 0 ];
}, e.dataTypes[ 0 ] = "json", o = n[ i ], n[ i ] = function() {
a = arguments;
}, r.always(function() {
void 0 === o ? xe(n).removeProp(i) : n[ i ] = o, e[ i ] && (e.jsonpCallback = t.jsonpCallback, Yt.push(i)), a && xe.isFunction(o) && o(a[ 0 ]), a = o = void 0;
}), "script";
}
}), ye.createHTMLDocument = (function() {
var e = ae.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
})(), xe.parseHTML = function(e, t, n) {
if ("string" != typeof e) {
return [];
} "boolean" == typeof t && (n = t, t = !1); var r, i, o; return t || (ye.createHTMLDocument ? (t = ae.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = ae.location.href, t.head.appendChild(r)) : t = ae), i = De.exec(e), o = !n && [], i ? [ t.createElement(i[ 1 ]) ] : (i = C([ e ], t, o), o && o.length && xe(o).remove(), xe.merge([], i.childNodes));
}, xe.fn.load = function(e, t, n) {
var r, i, o, a = this, s = e.indexOf(" "); return s > -1 && (r = J(e.slice(s)), e = e.slice(0, s)), xe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && xe.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) {
o = arguments, a.html(r ? xe("<div>").append(xe.parseHTML(e)).find(r) : e);
}).always(n && function(e, t) {
a.each(function() {
n.apply(this, o || [ e.responseText, t, e ]);
});
}), this;
}, xe.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
xe.fn[ t ] = function(e) {
return this.on(t, e);
};
}), xe.expr.pseudos.animated = function(e) {
return xe.grep(xe.timers, function(t) {
return e === t.elem;
}).length;
}, xe.offset = { setOffset: function(e, t, n) {
var r, i, o, a, s, u, l, c = xe.css(e, "position"), f = xe(e), p = {}; "static" === c && (e.style.position = "relative"), s = f.offset(), o = xe.css(e, "top"), u = xe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), xe.isFunction(t) && (t = t.call(e, n, xe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
} }, xe.fn.extend({ offset: function(e) {
if (arguments.length) {
return void 0 === e ? this : this.each(function(t) {
xe.offset.setOffset(this, e, t);
});
} var t, n, r, i, o = this[ 0 ]; if (o) {
return o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, { top: r.top + i.pageYOffset - n.clientTop, left: r.left + i.pageXOffset - n.clientLeft }) : { top: 0, left: 0 };
}
}, position: function() {
if (this[ 0 ]) {
var e, t, n = this[ 0 ], r = { top: 0, left: 0 }; return "fixed" === xe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), u(e[ 0 ], "html") || (r = e.offset()), r = { top: r.top + xe.css(e[ 0 ], "borderTopWidth", !0), left: r.left + xe.css(e[ 0 ], "borderLeftWidth", !0) }), { top: t.top - r.top - xe.css(n, "marginTop", !0), left: t.left - r.left - xe.css(n, "marginLeft", !0) };
}
}, offsetParent: function() {
return this.map(function() {
for (var e = this.offsetParent; e && "static" === xe.css(e, "position");) {
e = e.offsetParent;
} return e || tt;
});
} }), xe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
var n = "pageYOffset" === t; xe.fn[ e ] = function(r) {
return Re(this, function(e, r, i) {
var o; return xe.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[ t ] : e[ r ] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[ r ] = i);
}, e, r, arguments.length);
};
}), xe.each([ "top", "left" ], function(e, t) {
xe.cssHooks[ t ] = P(ye.pixelPosition, function(e, n) {
if (n) {
return n = F(e, t), ft.test(n) ? xe(e).position()[ t ] + "px" : n;
}
});
}), xe.each({ Height: "height", Width: "width" }, function(e, t) {
xe.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) {
xe.fn[ r ] = function(i, o) {
var a = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || o === !0 ? "margin" : "border"); return Re(this, function(t, n, i) {
var o; return xe.isWindow(t) ? 0 === r.indexOf("outer") ? t[ "inner" + e ] : t.document.documentElement[ "client" + e ] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body[ "scroll" + e ], o[ "scroll" + e ], t.body[ "offset" + e ], o[ "offset" + e ], o[ "client" + e ])) : void 0 === i ? xe.css(t, n, s) : xe.style(t, n, i, s);
}, t, a ? i : void 0, a);
};
});
}), xe.fn.extend({ bind: function(e, t, n) {
return this.on(e, null, t, n);
}, unbind: function(e, t) {
return this.off(e, null, t);
}, delegate: function(e, t, n, r) {
return this.on(t, e, n, r);
}, undelegate: function(e, t, n) {
return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
} }), xe.holdReady = function(e) {
e ? xe.readyWait++ : xe.ready(!0);
}, xe.isArray = Array.isArray, xe.parseJSON = JSON.parse, xe.nodeName = u, r = [], i = function() {
return xe;
}.apply(t, r), !(void 0 !== i && (e.exports = i)); var Jt = n.jQuery, Kt = n.$; return xe.noConflict = function(e) {
return n.$ === xe && (n.$ = Kt), e && n.jQuery === xe && (n.jQuery = Jt), xe;
}, o || (n.jQuery = n.$ = xe), xe;
});
}, function(e, t, n) {
e.exports = n(0);
} ]);
