(window.webpackJsonp = window.webpackJsonp || []).push([[94], { 10: function (e, t, r) { r("GcxT"), e.exports = r("nOHt") }, "1Nqh": function (e, t, r) { "use strict"; t.__esModule = !0, t.default = function (e) { var t = (0, o.default)(e); return { getItem: function (e) { return new Promise((function (r, n) { r(t.getItem(e)) })) }, setItem: function (e, r) { return new Promise((function (n, o) { n(t.setItem(e, r)) })) }, removeItem: function (e) { return new Promise((function (r, n) { r(t.removeItem(e)) })) } } }; var n, o = (n = r("ycJa")) && n.__esModule ? n : { default: n } }, "1TCz": function (e, t, r) { "use strict"; r.r(t); var n = r("hfKm"), o = r.n(n), a = r("2Eek"), i = r.n(a), u = r("XoMD"), c = r.n(u), s = r("Jo+v"), f = r.n(s), l = r("4mXO"), p = r.n(l), d = r("pLtp"), y = r.n(d), h = r("ln6h"), b = r.n(h), v = r("0iUn"), O = r("sLSF"), g = r("MI3g"), m = r("a7VT"), E = r("AT/M"), _ = r("Tit0"), S = r("vYYK"), j = r("q1tI"), T = r.n(j), w = r("8Bbg"), P = r.n(w), I = r("/MKj"), k = "persist:", x = "persist/FLUSH", D = "persist/REHYDRATE", A = "persist/PAUSE", R = "persist/PERSIST", N = "persist/PURGE", C = "persist/REGISTER", M = -1; function U(e) { return (U = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } function H(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r } function G(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } function X(e, t, r, n) { n.debug; var o = function (e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? H(r, !0).forEach((function (t) { G(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(r).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e }({}, r); return e && "object" === U(e) && Object.keys(e).forEach((function (n) { "_persist" !== n && t[n] === r[n] && (o[n] = e[n]) })), o } function L(e) { var t, r = e.blacklist || null, n = e.whitelist || null, o = e.transforms || [], a = e.throttle || 0, i = "".concat(void 0 !== e.keyPrefix ? e.keyPrefix : k).concat(e.key), u = e.storage; t = !1 === e.serialize ? function (e) { return e } : "function" === typeof e.serialize ? e.serialize : B; var c = e.writeFailHandler || null, s = {}, f = {}, l = [], p = null, d = null; function y() { if (0 === l.length) return p && clearInterval(p), void (p = null); var e = l.shift(), r = o.reduce((function (t, r) { return r.in(t, e, s) }), s[e]); if (void 0 !== r) try { f[e] = t(r) } catch (n) { console.error("redux-persist/createPersistoid: error serializing state", n) } else delete f[e]; 0 === l.length && (Object.keys(f).forEach((function (e) { void 0 === s[e] && delete f[e] })), d = u.setItem(i, t(f)).catch(b)) } function h(e) { return (!n || -1 !== n.indexOf(e) || "_persist" === e) && (!r || -1 === r.indexOf(e)) } function b(e) { c && c(e) } return { update: function (e) { Object.keys(e).forEach((function (t) { h(t) && s[t] !== e[t] && -1 === l.indexOf(t) && l.push(t) })), Object.keys(s).forEach((function (t) { void 0 === e[t] && h(t) && -1 === l.indexOf(t) && void 0 !== s[t] && l.push(t) })), null === p && (p = setInterval(y, a)), s = e }, flush: function () { for (; 0 !== l.length;)y(); return d || Promise.resolve() } } } function B(e) { return JSON.stringify(e) } function V(e) { var t, r = e.transforms || [], n = "".concat(void 0 !== e.keyPrefix ? e.keyPrefix : k).concat(e.key), o = e.storage; e.debug; return t = !1 === e.deserialize ? function (e) { return e } : "function" === typeof e.deserialize ? e.deserialize : W, o.getItem(n).then((function (e) { if (e) try { var n = {}, o = t(e); return Object.keys(o).forEach((function (e) { n[e] = r.reduceRight((function (t, r) { return r.out(t, e, o) }), t(o[e])) })), n } catch (a) { throw a } })) } function W(e) { return JSON.parse(e) } function F(e) { 0 } function q(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r } function z(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? q(r, !0).forEach((function (t) { J(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q(r).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e } function J(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } function Y(e, t) { if (null == e) return {}; var r, n, o = function (e, t) { if (null == e) return {}; var r, n, o = {}, a = Object.keys(e); for (n = 0; n < a.length; n++)r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]); return o }(e, t); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (n = 0; n < a.length; n++)r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]) } return o } var K = 5e3; function Q(e, t) { var r = void 0 !== e.version ? e.version : M, n = (e.debug, void 0 === e.stateReconciler ? X : e.stateReconciler), o = e.getStoredState || V, a = void 0 !== e.timeout ? e.timeout : K, i = null, u = !1, c = !0, s = function (e) { return e._persist.rehydrated && i && !c && i.update(e), e }; return function (f, l) { var p = f || {}, d = p._persist, y = Y(p, ["_persist"]); if (l.type === R) { var h = !1, b = function (t, r) { h || (l.rehydrate(e.key, t, r), h = !0) }; if (a && setTimeout((function () { !h && b(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(e.key, '"'))) }), a), c = !1, i || (i = L(e)), d) return z({}, t(y, l), { _persist: d }); if ("function" !== typeof l.rehydrate || "function" !== typeof l.register) throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution."); return l.register(e.key), o(e).then((function (t) { (e.migrate || function (e, t) { return Promise.resolve(e) })(t, r).then((function (e) { b(e) }), (function (e) { b(void 0, e) })) }), (function (e) { b(void 0, e) })), z({}, t(y, l), { _persist: { version: r, rehydrated: !1 } }) } if (l.type === N) return u = !0, l.result(function (e) { var t = e.storage, r = "".concat(void 0 !== e.keyPrefix ? e.keyPrefix : k).concat(e.key); return t.removeItem(r, F) }(e)), z({}, t(y, l), { _persist: d }); if (l.type === x) return l.result(i && i.flush()), z({}, t(y, l), { _persist: d }); if (l.type === A) c = !0; else if (l.type === D) { if (u) return z({}, y, { _persist: z({}, d, { rehydrated: !0 }) }); if (l.key === e.key) { var v = t(y, l), O = l.payload, g = z({}, !1 !== n && void 0 !== O ? n(O, f, v, e) : v, { _persist: z({}, d, { rehydrated: !0 }) }); return s(g) } } if (!d) return t(f, l); var m = t(y, l); return m === y ? f : s(z({}, m, { _persist: d })) } } var Z = r("ANjH"); function $(e) { return function (e) { if (Array.isArray(e)) { for (var t = 0, r = new Array(e.length); t < e.length; t++)r[t] = e[t]; return r } }(e) || function (e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance") }() } function ee(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r } function te(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? ee(r, !0).forEach((function (t) { re(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ee(r).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e } function re(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } var ne = { registry: [], bootstrapped: !1 }, oe = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case C: return te({}, e, { registry: [].concat($(e.registry), [t.key]) }); case D: var r = e.registry.indexOf(t.key), n = $(e.registry); return n.splice(r, 1), te({}, e, { registry: n, bootstrapped: 0 === n.length }); default: return e } }; function ae(e) { return (ae = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } function ie(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } function ue(e) { return (ue = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) } function ce(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e } function se(e, t) { return (se = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e })(e, t) } function fe(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } var le = function (e) { function t() { var e, r; !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)o[a] = arguments[a]; return r = function (e, t) { return !t || "object" !== ae(t) && "function" !== typeof t ? ce(e) : t }(this, (e = ue(t)).call.apply(e, [this].concat(o))), fe(ce(r), "state", { bootstrapped: !1 }), fe(ce(r), "_unsubscribe", void 0), fe(ce(r), "handlePersistorState", (function () { r.props.persistor.getState().bootstrapped && (r.props.onBeforeLift ? Promise.resolve(r.props.onBeforeLift()).finally((function () { return r.setState({ bootstrapped: !0 }) })) : r.setState({ bootstrapped: !0 }), r._unsubscribe && r._unsubscribe()) })), r } var r, n, o; return function (e, t) { if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && se(e, t) }(t, e), r = t, (n = [{ key: "componentDidMount", value: function () { this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState), this.handlePersistorState() } }, { key: "componentWillUnmount", value: function () { this._unsubscribe && this._unsubscribe() } }, { key: "render", value: function () { return "function" === typeof this.props.children ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading } }]) && ie(r.prototype, n), o && ie(r, o), t }(j.PureComponent); fe(le, "defaultProps", { children: null, loading: null }); var pe = r("erEE"), de = r.n(pe), ye = r("kOwS"), he = r("5HXA"); function be(e) { return function (t) { var r = t.dispatch, n = t.getState; return function (t) { return function (o) { return "function" === typeof o ? o(r, n, e) : t(o) } } } } var ve = be(); ve.withExtraArgument = be; var Oe = ve, ge = r("C+HQ"), me = r.n(ge), Ee = r("ecqW"); function _e(e, t) { var r = y()(e); if (p.a) { var n = p()(e); t && (n = n.filter((function (t) { return f()(e, t).enumerable }))), r.push.apply(r, n) } return r } function Se(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? _e(Object(r), !0).forEach((function (t) { Object(S.a)(e, t, r[t]) })) : c.a ? i()(e, c()(r)) : _e(Object(r)).forEach((function (t) { o()(e, t, f()(r, t)) })) } return e } function je(e, t) { var r = y()(e); if (p.a) { var n = p()(e); t && (n = n.filter((function (t) { return f()(e, t).enumerable }))), r.push.apply(r, n) } return r } function Te(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? je(Object(r), !0).forEach((function (t) { Object(S.a)(e, t, r[t]) })) : c.a ? i()(e, c()(r)) : je(Object(r)).forEach((function (t) { o()(e, t, f()(r, t)) })) } return e } var we = { assocId: {}, joinStatus: null }; function Pe(e, t) { var r = y()(e); if (p.a) { var n = p()(e); t && (n = n.filter((function (t) { return f()(e, t).enumerable }))), r.push.apply(r, n) } return r } function Ie(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? Pe(Object(r), !0).forEach((function (t) { Object(S.a)(e, t, r[t]) })) : c.a ? i()(e, c()(r)) : Pe(Object(r)).forEach((function (t) { o()(e, t, f()(r, t)) })) } return e } var ke = { fullScreenView: !1 }; function xe(e, t) { var r = y()(e); if (p.a) { var n = p()(e); t && (n = n.filter((function (t) { return f()(e, t).enumerable }))), r.push.apply(r, n) } return r } function De(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? xe(Object(r), !0).forEach((function (t) { Object(S.a)(e, t, r[t]) })) : c.a ? i()(e, c()(r)) : xe(Object(r)).forEach((function (t) { o()(e, t, f()(r, t)) })) } return e } var Ae = { messages: [], unreadMessages: !1 }, Re = r("BAR9"); function Ne(e, t) { var r = y()(e); if (p.a) { var n = p()(e); t && (n = n.filter((function (t) { return f()(e, t).enumerable }))), r.push.apply(r, n) } return r } function Ce(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? Ne(Object(r), !0).forEach((function (t) { Object(S.a)(e, t, r[t]) })) : c.a ? i()(e, c()(r)) : Ne(Object(r)).forEach((function (t) { o()(e, t, f()(r, t)) })) } return e } var Me = { server: { connected: !1 }, prevChats: [], onlineUsers: [], filteredChats: [], unreadMessages: 0 }, Ue = r("+OoL"); function He(e, t) { var r = y()(e); if (p.a) { var n = p()(e); t && (n = n.filter((function (t) { return f()(e, t).enumerable }))), r.push.apply(r, n) } return r } function Ge(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? He(Object(r), !0).forEach((function (t) { Object(S.a)(e, t, r[t]) })) : c.a ? i()(e, c()(r)) : He(Object(r)).forEach((function (t) { o()(e, t, f()(r, t)) })) } return e } var Xe = { partner: {}, channelID: null, messages: [], chatType: "", members: [], lastSeen: "", isMember: void 0, playerID: null, isBlocked: null, blockedByYou: !1, isTyping: !1, personTyping: "" }, Le = r("kGw/"); function Be(e, t) { var r = y()(e); if (p.a) { var n = p()(e); t && (n = n.filter((function (t) { return f()(e, t).enumerable }))), r.push.apply(r, n) } return r } function Ve(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? Be(Object(r), !0).forEach((function (t) { Object(S.a)(e, t, r[t]) })) : c.a ? i()(e, c()(r)) : Be(Object(r)).forEach((function (t) { o()(e, t, f()(r, t)) })) } return e } var We = { viewMode: r("tFIx").a.CHATS, viewModeOptions: {}, unreadCountPerView: 0, modal: { visible: !1, title: "", message: "", actions: [] }, toast: { visible: !1, message: "" }, isLoading: !1, chatID: "" }, Fe = Object(Z.combineReducers)({ authenticated: function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case Ee.f.AUTHENTICATE: return !0; case Ee.f.DEAUTHENTICATE: return !1; default: return e } }, user: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case Ee.f.AUTHENTICATE: return Se({}, e && e, {}, t.payload, {}, t.payload.id && { playerID: t.payload.id }); case Ee.f.DEAUTHENTICATE: return null; default: return e } }, currentPage: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case Ee.g.CHANGE_CURRENT_PAGE: return t.payload; default: return e } }, isDrawerOpen: function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case Ee.g.SHOW_DRAWER: return t.payload; default: return e } }, isNotificationDrawerOpen: function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case Ee.g.SHOW_NOTIFICATION_DRAWER: return t.payload; default: return e } }, isChatWindowOpen: function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case Ee.g.SHOW_CHAT_WINDOW: return t.payload; default: return e } }, tournament: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : we, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case Ee.d.GET_INFO: return t.payload; case Ee.d.SET_JOIN_STATUS: return Te({}, e, { joinStatus: t.payload }); default: return e } }, fixtures: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) { case Ee.a: return Ie({}, e, { fullScreenView: !e.fullScreenView }); default: return e } }, notifications: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae, t = arguments.length > 1 ? arguments[1] : void 0, r = t.type, n = t.payload; switch (r) { case Ee.c.GET_LIST: return De({}, e, { messages: n }); case Ee.c.SET_UNREAD_VALUE: return De({}, e, { unreadMessages: n }); case Ee.c.LATEST_MESSAGE: return De({}, e, { latestMessage: n }); default: return e } }, chat: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me, t = arguments.length > 1 ? arguments[1] : void 0, r = Re.a.SET_SERVER_STATUS, n = Re.a.SET_ONLINE_USER_LIST, o = Re.a.SET_PREV_CHAT_LIST, a = Re.a.RESET_CHAT, i = Re.a.SET_FILTERED_CHAT_LIST, u = Re.a.SET_UNREAD_MESSAGES; switch (t.type) { case r: return Ce({}, e, { server: { url: t.payload.url, connected: t.payload.connected } }); case n: return Ce({}, e, { onlineUsers: t.payload }); case o: return Ce({}, e, { prevChats: t.payload }); case i: return Ce({}, e, { filteredChats: t.payload }); case u: return Ce({}, e, { unreadMessages: t.payload }); case a: return Me; default: return e } }, chatBox: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xe, t = arguments.length > 1 ? arguments[1] : void 0, r = Ue.a.SETUP_CHAT_CHANNEL, n = Ue.a.GET_GROUP_INFO, o = Ue.a.EDIT_GROUP_INFO, a = Ue.a.SETUP_MESSAGES, i = Ue.a.SET_GROUP_MEMBERS, u = Ue.a.SET_PARTNER_INFO, c = Ue.a.RESET_CHATBOX, s = (Ue.a.SET_MESSAGES_OFFSET, Ue.a.SET_IS_MEMBER), f = Ue.a.SET_IS_BLOCKED, l = Ue.a.SETUP_CHATBOX, p = Ue.a.SET_TYPING_INDICATOR; switch (t.type) { case r: return Ge({}, e, { partner: t.payload.partner, channelID: t.payload.channelID, chatType: t.payload.chatType, members: [], isBlocked: !!t.payload.channelID && null }); case l: return Ge({}, e, {}, t.payload); case n: return Ge({}, e, { members: t.payload.members, partner: Ge({}, e.partner, { description: t.payload.description || e.partner.description }) }); case o: return Ge({}, e, { partner: Ge({}, e.partner, {}, t.payload) }); case a: return Ge({}, e, { messages: t.payload, messagesOffset: t.payload.length ? e.messagesOffset : 0 }); case i: return Ge({}, e, { members: t.payload }); case u: return Ge({}, e, { partner: t.payload }); case c: return Xe; case s: return Ge({}, e, { isMember: t.payload, isBlocked: null }); case f: return Ge({}, e, { isBlocked: t.payload.isBlocked, blockedByYou: t.payload.blockedByYou, isMember: null }); case p: return Ge({}, e, { isTyping: t.payload.isTyping, personTyping: t.payload.personTyping }); default: return e } }, chatCommon: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : We, t = arguments.length > 1 ? arguments[1] : void 0, r = Le.a.SET_VIEW_MODE, n = Le.a.SET_UNREAD_COUNT, o = Le.a.SET_MODAL_OPTIONS, a = Le.a.SET_LOADER_STATUS, i = Le.a.SET_TOAST_OPTIONS, u = Le.a.SET_CHAT_ID, c = Le.a.RESET_COMMON; switch (t.type) { case r: return Ve({}, e, { viewModeOptions: t.payload.viewModeOptions, viewMode: t.payload.viewMode }); case n: return Ve({}, e, { unreadCountPerView: t.payload }); case u: return Ve({}, e, { chatID: t.payload }); case o: return Ve({}, e, { modal: Ve({}, t.payload) }); case i: return Ve({}, e, { toast: Ve({}, t.payload) }); case a: return Ve({}, e, { isLoading: t.payload }); case c: return We; default: return e } } }), qe = Q({ key: "root", storage: me.a, whitelist: ["isChatWindowOpen", "chat", "chatBox", "chatCommon"] }, Fe); function ze() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return Object(Z.createStore)(qe, e, Object(he.composeWithDevTools)(Object(Z.applyMiddleware)(Oe))) } var Je = T.a.createElement; function Ye(e, t) { var r = y()(e); if (p.a) { var n = p()(e); t && (n = n.filter((function (t) { return f()(e, t).enumerable }))), r.push.apply(r, n) } return r } function Ke(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? Ye(Object(r), !0).forEach((function (t) { Object(S.a)(e, t, r[t]) })) : c.a ? i()(e, c()(r)) : Ye(Object(r)).forEach((function (t) { o()(e, t, f()(r, t)) })) } return e } var Qe = function (e) { return window.__NEXT_REDUX_STORE__ || (window.__NEXT_REDUX_STORE__ = ze(e)), window.__NEXT_REDUX_STORE__ }; var Ze = { title: "GamingMonk : India's largest gaming community", description: "GamingMonk is one of the leading gaming companies in India which organizes esports tournaments for the gamers.", openGraph: { type: "website", locale: "en_IN", site_name: "GamingMonk" }, twitter: { handle: "@gamingmonkindia", site: "@gamingmonkindia", cardType: "summary" } }, $e = r("Qi1R"), et = r("prmp"), tt = r("Gtlg"), rt = r("meyd"), nt = (r("oye4"), T.a.createElement); function ot(e, t) { var r = y()(e); if (p.a) { var n = p()(e); t && (n = n.filter((function (t) { return f()(e, t).enumerable }))), r.push.apply(r, n) } return r } function at(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? ot(Object(r), !0).forEach((function (t) { Object(S.a)(e, t, r[t]) })) : c.a ? i()(e, c()(r)) : ot(Object(r)).forEach((function (t) { o()(e, t, f()(r, t)) })) } return e } var it = function (e) { function t(e) { var r; return Object(v.a)(this, t), r = Object(g.a)(this, Object(m.a)(t).call(this, e)), Object(S.a)(Object(E.a)(r), "componentDidMount", (function () { Object($e.s)(), Object(tt.h)(), Object(tt.g)(), Object(tt.f)(), Object(rt.d)(), Object(rt.e)(r.props.reduxStore.getState().user), Object($e.q)(), Object($e.t)() })), r.persistor = function (e, t, r) { var n = r || !1, o = Object(Z.createStore)(oe, ne, t && t.enhancer ? t.enhancer : void 0), a = function (e) { o.dispatch({ type: C, key: e }) }, i = function (t, r, a) { var i = { type: D, payload: r, err: a, key: t }; e.dispatch(i), o.dispatch(i), n && u.getState().bootstrapped && (n(), n = !1) }, u = te({}, o, { purge: function () { var t = []; return e.dispatch({ type: N, result: function (e) { t.push(e) } }), Promise.all(t) }, flush: function () { var t = []; return e.dispatch({ type: x, result: function (e) { t.push(e) } }), Promise.all(t) }, pause: function () { e.dispatch({ type: A }) }, persist: function () { e.dispatch({ type: R, register: a, rehydrate: i }) } }); return t && t.manualPersist || u.persist(), u }(e.reduxStore), r } return Object(_.a)(t, e), Object(O.a)(t, [{ key: "render", value: function () { var e = this.props, t = e.Component, r = e.pageProps, n = e.reduxStore; return nt(I.a, { store: n }, nt(T.a.Fragment, null, nt(de.a, { config: Ze }), nt(t, r))) } }]), t }(P.a); Object(S.a)(it, "getInitialProps", (function (e) { var t; return b.a.async((function (r) { for (; ;)switch (r.prev = r.next) { case 0: if (Object($e.j)()) { r.next = 3; break } return r.next = 3, b.a.awrap(Object(et.a)(e.ctx)); case 3: return r.next = 5, b.a.awrap(P.a.getInitialProps(e)); case 5: return t = r.sent, r.abrupt("return", at({}, t)); case 7: case "end": return r.stop() } })) })); t.default = function (e) { var t, r; return r = t = function (t) { function r(e) { var t; return Object(v.a)(this, r), (t = Object(g.a)(this, Object(m.a)(r).call(this, e))).reduxStore = Qe(e.initialReduxState), t } return Object(_.a)(r, t), Object(O.a)(r, [{ key: "render", value: function () { return Je(e, Object(ye.a)({}, this.props, { reduxStore: this.reduxStore })) } }]), r }(T.a.Component), Object(S.a)(t, "getInitialProps", (function (t) { var r, n; return b.a.async((function (o) { for (; ;)switch (o.prev = o.next) { case 0: if (r = Qe(), t.ctx.reduxStore = r, n = {}, "function" !== typeof e.getInitialProps) { o.next = 7; break } return o.next = 6, b.a.awrap(e.getInitialProps(t)); case 6: n = o.sent; case 7: return o.abrupt("return", Ke({}, n, { initialReduxState: r.getState() })); case 8: case "end": return o.stop() } })) })), r }(it) }, "5HXA": function (e, t, r) { "use strict"; var n = r("ANjH").compose; t.__esModule = !0, t.composeWithDevTools = "undefined" !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () { if (0 !== arguments.length) return "object" === typeof arguments[0] ? n : n.apply(null, arguments) }, t.devToolsEnhancer = "undefined" !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () { return function (e) { return e } } }, "8Bbg": function (e, t, r) { e.exports = r("B5Ud") }, B5Ud: function (e, t, r) { "use strict"; var n = r("Qetd"), o = r("/HRN"), a = r("WaGi"), i = r("ZDA2"), u = r("/+P4"), c = r("N9n2"), s = r("ln6h"), f = r("KI45"); t.__esModule = !0, t.Container = function (e) { 0; return e.children }, t.createUrl = h, t.default = void 0; var l = f(r("q1tI")), p = r("g/15"); function d(e) { var t, r, n; return s.async((function (o) { for (; ;)switch (o.prev = o.next) { case 0: return t = e.Component, r = e.ctx, o.next = 3, s.awrap((0, p.loadGetInitialProps)(t, r)); case 3: return n = o.sent, o.abrupt("return", { pageProps: n }); case 5: case "end": return o.stop() } })) } t.AppInitialProps = p.AppInitialProps; var y = function (e) { function t() { return o(this, t), i(this, u(t).apply(this, arguments)) } return c(t, e), a(t, [{ key: "componentDidCatch", value: function (e, t) { throw e } }, { key: "render", value: function () { var e = this.props, t = e.router, r = e.Component, o = e.pageProps, a = h(t); return l.default.createElement(r, n({}, o, { url: a })) } }]), t }(l.default.Component); function h(e) { var t = e.pathname, r = e.asPath, n = e.query; return { get query() { return n }, get pathname() { return t }, get asPath() { return r }, back: function () { e.back() }, push: function (t, r) { return e.push(t, r) }, pushTo: function (t, r) { var n = r ? t : "", o = r || t; return e.push(n, o) }, replace: function (t, r) { return e.replace(t, r) }, replaceTo: function (t, r) { var n = r ? t : "", o = r || t; return e.replace(n, o) } } } t.default = y, y.origGetInitialProps = d, y.getInitialProps = d }, "C+HQ": function (e, t, r) { "use strict"; var n; t.__esModule = !0, t.default = void 0; var o = (0, ((n = r("1Nqh")) && n.__esModule ? n : { default: n }).default)("local"); t.default = o }, GcxT: function (e, t, r) { (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () { return r("1TCz") }]) }, UXZV: function (e, t, r) { e.exports = r("ge64") }, ge64: function (e, t, r) { r("mlGW"), e.exports = r("p9MR").Object.assign }, kOwS: function (e, t, r) { "use strict"; r.d(t, "a", (function () { return a })); var n = r("UXZV"), o = r.n(n); function a() { return (a = o.a || function (e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }).apply(this, arguments) } }, mlGW: function (e, t, r) { var n = r("0T/a"); n(n.S + n.F, "Object", { assign: r("nkTw") }) }, prmp: function (e, t, r) { "use strict"; r.d(t, "a", (function () { return w })); var n = r("hfKm"), o = r.n(n), a = r("2Eek"), i = r.n(a), u = r("XoMD"), c = r.n(u), s = r("Jo+v"), f = r.n(s), l = r("4mXO"), p = r.n(l), d = r("pLtp"), y = r.n(d), h = r("ln6h"), b = r.n(h), v = r("vYYK"), O = r("32ec"), g = r("Qi1R"), m = r("VFXk"), E = r("V4Hs"); function _(e, t) { var r = y()(e); if (p.a) { var n = p()(e); t && (n = n.filter((function (t) { return f()(e, t).enumerable }))), r.push.apply(r, n) } return r } function S(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? _(Object(r), !0).forEach((function (t) { Object(v.a)(e, t, r[t]) })) : c.a ? i()(e, c()(r)) : _(Object(r)).forEach((function (t) { o()(e, t, f()(r, t)) })) } return e } var j = function (e) { if (Object(g.j)()) { var t = Object(g.f)().getState().user; return t && t.token } return e.req.headers.cookie && Object(O.a)("x-auth", e.req) }, T = function (e) { var t = Object(O.a)("x-refresh-token", e.req), r = Object(O.a)("gm-user", e.req), n = ""; return Object(m.b)(t, r).then((function (t) { return e.res.setHeader("Set-Cookie", ["x-auth=".concat(t.token), "x-refresh-token=".concat(t.refreshToken)]), n = t.token, Object(m.a)(t.token) })).then((function (t) { e.reduxStore.dispatch(Object(E.c)(S({}, t, { token: n }))) })).catch((function (e) { return console.warn(e), null })) }; function w(e) { var t; return b.a.async((function (r) { for (; ;)switch (r.prev = r.next) { case 0: if (t = j(e)) { r.next = 3; break } return r.abrupt("return"); case 3: return r.next = 5, b.a.awrap(Object(m.a)(t).then((function (r) { e.reduxStore.dispatch(Object(E.c)(S({}, r, { token: t }))) })).catch((function (t) { return "TOKEN_EXPIRED" === t.code ? T(e) : null }))); case 5: return r.abrupt("return", r.sent); case 6: case "end": return r.stop() } })) } }, ycJa: function (e, t, r) { "use strict"; function n(e) { return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } function o() { } t.__esModule = !0, t.default = function (e) { var t = "".concat(e, "Storage"); return function (e) { if ("object" !== ("undefined" === typeof self ? "undefined" : n(self)) || !(e in self)) return !1; try { var t = self[e], r = "redux-persist ".concat(e, " test"); t.setItem(r, "test"), t.getItem(r), t.removeItem(r) } catch (o) { return !1 } return !0 }(t) ? self[t] : a }; var a = { getItem: o, setItem: o, removeItem: o } } }, [[10, 0, 66, 93, 1, 68, 67, 69, 71, 70, 72, 74, 76, 2]]]);