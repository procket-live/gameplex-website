(window.webpackJsonp = window.webpackJsonp || []).push([[83], { EFRR: function (e, t, a) { "use strict"; var n, s = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }, r = function () { function e(e, t) { for (var a = 0; a < t.length; a++) { var n = t[a]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function (t, a, n) { return a && e(t.prototype, a), n && e(t, n), t } }(), o = a("q1tI"), i = (n = o) && n.__esModule ? n : { default: n }; var c = function (e) { function t(e) { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var a = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== typeof t && "function" !== typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return a.state = { activeIndex: e.activeIndex || 0, active: !0, hiding: !1 }, a.children = i.default.Children.toArray(a.props.children), a } return function (e, t) { if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, e), r(t, [{ key: "componentWillReceiveProps", value: function () { this.children = i.default.Children.toArray(this.props.children) } }, { key: "hide", value: function (e) { var t = this; this.setState({ hiding: !0, active: !1 }, (function () { setTimeout((function () { e() }), t.props.transitionSpeed) })) } }, { key: "show", value: function () { var e = this; setTimeout((function () { e.setState({ active: !0 }) }), this.props.transitionSpeed) } }, { key: "shouldStep", value: function (e) { return e !== this.state.activeIndex } }, { key: "next", value: function () { var e = this, t = this.state.activeIndex, a = this.clamp(++t); this.shouldStep(a) && this.hide((function () { e.setState((function (e) { return { activeIndex: a, hiding: !1 } }), (function () { setTimeout((function () { e.show() }), 0) })) })) } }, { key: "prev", value: function () { var e = this, t = this.state.activeIndex, a = this.clamp(--t); this.shouldStep(a) && this.hide((function () { e.setState((function (e) { return { activeIndex: a, hiding: !1 } }), (function () { e.show() })) })) } }, { key: "goTo", value: function (e) { var t = this; this.hide((function () { t.setState((function (a) { return { activeIndex: t.clamp(e), hiding: !1 } }), (function () { t.show() })) })) } }, { key: "clamp", value: function (e) { return Math.min(Math.max(e, 0), this.children.length - 1) } }, { key: "render", value: function () { var e = this.children[this.state.activeIndex]; return i.default.cloneElement(e, s({}, e.props, this.state, { next: this.next.bind(this), prev: this.prev.bind(this), goTo: this.goTo.bind(this) })) } }]), t }(i.default.Component); e.exports = { Strider: c, Step: function (e) { return (0, e.children)(function (e, t) { var a = {}; for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]); return a }(e, ["children"])) } } }, QnAQ: function (e, t, a) { "use strict"; var n = a("hfKm"), s = a.n(n), r = a("2Eek"), o = a.n(r), i = a("XoMD"), c = a.n(i), l = a("Jo+v"), u = a.n(l), d = a("4mXO"), m = a.n(d), h = a("pLtp"), p = a.n(h), f = a("ln6h"), b = a.n(f), x = a("0iUn"), j = a("sLSF"), v = a("MI3g"), g = a("a7VT"), w = a("AT/M"), O = a("Tit0"), y = a("vYYK"), N = a("MX0m"), S = a.n(N), k = a("q1tI"), P = a.n(k), T = a("/MKj"), I = a("EFRR"), C = a("TSYQ"), A = a.n(C), _ = a("V4Hs"), M = a("VFXk"), F = a("Gtlg"), E = P.a.createElement; function K(e, t) { var a = p()(e); if (m.a) { var n = m()(e); t && (n = n.filter((function (t) { return u()(e, t).enumerable }))), a.push.apply(a, n) } return a } function L(e) { for (var t = 1; t < arguments.length; t++) { var a = null != arguments[t] ? arguments[t] : {}; t % 2 ? K(Object(a), !0).forEach((function (t) { Object(y.a)(e, t, a[t]) })) : c.a ? o()(e, c()(a)) : K(Object(a)).forEach((function (t) { s()(e, t, u()(a, t)) })) } return e } var D = function (e) { function t() { var e, a; Object(x.a)(this, t); for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)s[r] = arguments[r]; return a = Object(v.a)(this, (e = Object(g.a)(t)).call.apply(e, [this].concat(s))), Object(y.a)(Object(w.a)(a), "state", { _otp: {} }), Object(y.a)(Object(w.a)(a), "handleArrowKeys", (function (e) { var t = e.keyCode, a = e.target.value; switch (t) { case 37: $(e.target).prev().focus(); break; case 39: $(e.target).next().focus(); break; case 8: !a && $(e.target).prev().focus() } })), Object(y.a)(Object(w.a)(a), "handleOTPinput", (function (e) { e.target.value && $(e.target).next().focus(); var t = a.state._otp; t[e.target.name] = e.target.value, a.setState((function () { return { _otp: t } }), (function () { return a.props.resolveOTP(a.state._otp) })) })), a } return Object(O.a)(t, e), Object(j.a)(t, [{ key: "render", value: function () { var e = this.props, t = e.sent, a = e.matched; return E(P.a.Fragment, null, E("div", { className: "jsx-13750111 " + "otp-input d-flex justify-content-between m-auto ".concat(t ? a ? "input-success" : "input-err" : "") }, E("input", { type: "text", maxLength: "1", name: "d1", onKeyDown: this.handleArrowKeys, onChange: this.handleOTPinput, className: "jsx-13750111 otp-segment rounded text-center" }), E("input", { type: "text", maxLength: "1", name: "d2", onKeyDown: this.handleArrowKeys, onChange: this.handleOTPinput, className: "jsx-13750111 otp-segment rounded text-center" }), E("input", { type: "text", maxLength: "1", name: "d3", onKeyDown: this.handleArrowKeys, onChange: this.handleOTPinput, className: "jsx-13750111 otp-segment rounded text-center" }), E("input", { type: "text", maxLength: "1", name: "d4", onKeyDown: this.handleArrowKeys, onChange: this.handleOTPinput, className: "jsx-13750111 otp-segment rounded text-center" })), E(S.a, { id: "13750111" }, [".otp-input.jsx-13750111{max-width:250px;}", ".otp-segment.jsx-13750111{width:20%;font-size:1.3rem;font-weight:bold;background:#3e3e3e;color:#ffffff;border-color:#7b7c7c;border:none;}", ".input-success.jsx-13750111 input.jsx-13750111{border:solid 1px green;}", ".input-err.jsx-13750111 input.jsx-13750111{border:solid 1px red;}"])) } }]), t }(P.a.Component), G = function (e) { function t() { var e, a; Object(x.a)(this, t); for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)s[r] = arguments[r]; return a = Object(v.a)(this, (e = Object(g.a)(t)).call.apply(e, [this].concat(s))), Object(y.a)(Object(w.a)(a), "state", { matched: !1, error: !1 }), Object(y.a)(Object(w.a)(a), "resolveOTP", (function (e) { a.setState({ OTP: "".concat(e.d1).concat(e.d2).concat(e.d3).concat(e.d4) }) })), Object(y.a)(Object(w.a)(a), "verifyOTP", (function () { Object(M.j)(a.props.mobile, a.state.OTP).then((function (e) { var t; return b.a.async((function (n) { for (; ;)switch (n.prev = n.next) { case 0: if (e && !e.error) { n.next = 2; break } throw new Error(e && e.message || "Something went wrong!"); case 2: return n.next = 4, b.a.awrap(a.props.handleSignup()); case 4: if ((t = n.sent) && !t.error && !t.errors) { n.next = 7; break } throw new Error("Something went wrong!"); case 7: $("#signupModal").modal("hide"), a.props.onBtnClick(); case 9: case "end": return n.stop() } })) })).catch((function (e) { console.warn(e), a.props.setMessage({ error: !0, showAlert: !0, message: e.message }) })) })), a } return Object(O.a)(t, e), Object(j.a)(t, [{ key: "render", value: function () { return E(P.a.Fragment, null, E("div", { className: "jsx-3885638977 text-center" }, E("p", { className: "jsx-3885638977 text-center" }, 'We have sent a four digit "One Time Password" on ', E("b", { className: "jsx-3885638977" }, this.props.mobile)), E("span", { onClick: this.props.prev, className: "jsx-3885638977 dismiss-no my-3" }, E("b", { className: "jsx-3885638977" }, "Wrong Number?"))), E("div", { className: "jsx-3885638977 d-block text-center my-5" }, E("p", { className: "jsx-3885638977" }, "Enter the OTP received on your mobile"), E(D, { resolveOTP: this.resolveOTP, sent: this.state.sent, matched: this.state.matched })), E("button", { type: "button", onClick: this.verifyOTP, disabled: !this.state.OTP || 4 != this.state.OTP.length, className: "jsx-3885638977 btn btn-primary d-block mx-auto my-3" }, "VERIFY OTP"), E("div", { className: "jsx-3885638977 text-center my-3" }, E("small", { onClick: this.props.resendOTP, className: "jsx-3885638977 resend" }, "Resend OTP")), E(S.a, { id: "3885638977" }, [".dismiss-no.jsx-3885638977,.resend.jsx-3885638977{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;}"])) } }]), t }(P.a.Component), R = function (e) { function t() { var e, a; Object(x.a)(this, t); for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)s[r] = arguments[r]; return a = Object(v.a)(this, (e = Object(g.a)(t)).call.apply(e, [this].concat(s))), Object(y.a)(Object(w.a)(a), "state", { errors: {}, btnText: "SIGN UP" }), Object(y.a)(Object(w.a)(a), "handleChange", (function (e) { a.props.setFormFields(Object(y.a)({}, e.target.name, e.target.value)) })), Object(y.a)(Object(w.a)(a), "handleSubmit", (function (e) { var t, n, s, r, o, i; return b.a.async((function (c) { for (; ;)switch (c.prev = c.next) { case 0: e.preventDefault(), t = a.validateSignupFormData(a.props.fields), n = t.errors, t.formIsValid ? (a.setState({ errors: {} }), s = a.props.fields, r = s.email, o = s.username, i = s.mobile, Object(M.k)({ email: r, username: o, mobile: i }).then((function (e) { if (!e || e.error) throw new Error(e && e.message || "Something went wrong!"); a.props.next(), a.props.setActiveIndex(1), a.props.setMessage({ showAlert: !1 }) })).catch((function (e) { console.warn(e), a.props.setMessage({ error: !0, showAlert: !0, message: e }) }))) : a.setState({ errors: n }); case 3: case "end": return c.stop() } })) })), Object(y.a)(Object(w.a)(a), "validateSignupFormData", (function (e) { var t = {}, a = !0; (e.username || (a = !1, t.username = "*Please enter your username"), e.username && !e.username.match(/^[a-zA-Z0-9]*$/) && (a = !1, t.username = "*username should contain only letters and numbers"), e.email || (a = !1, t.email = "*Please enter your email-ID"), "undefined" !== typeof e.email) && (new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email) || (a = !1, t.email = "*Please enter valid email-ID")); return e.mobile || (a = !1, t.mobile = "*Please enter your mobile no."), "undefined" !== typeof e.mobile && (e.mobile.match(/^[0-9]{10}$/) || (a = !1, t.mobile = "*Please enter valid mobile no.")), e.password || (a = !1, t.password = "*Please enter your password"), { errors: t, formIsValid: a } })), Object(y.a)(Object(w.a)(a), "handleLoginLink", (function () { $("#signupModal").modal("hide"), $("#loginModal").modal("show") })), a } return Object(O.a)(t, e), Object(j.a)(t, [{ key: "render", value: function () { var e = this.props.fields, t = this.state.errors; return E(P.a.Fragment, null, E("form", { onSubmit: this.handleSubmit, className: "jsx-2213395820" }, E("div", { className: "jsx-2213395820 form-group" }, E("input", { type: "text", placeholder: "Username", name: "username", value: e.username, onChange: this.handleChange, required: !0, className: "jsx-2213395820 form-control" }), E("small", { className: "jsx-2213395820 err-msg form-text" }, t.username)), E("div", { className: "jsx-2213395820 form-group" }, E("input", { type: "email", placeholder: "Email", name: "email", value: e.email, onChange: this.handleChange, required: !0, className: "jsx-2213395820 form-control" }), E("small", { className: "jsx-2213395820 err-msg form-text" }, t.email)), E("div", { className: "jsx-2213395820 form-group" }, E("input", { type: "text", id: "mobileInput", placeholder: "Mobile No.", name: "mobile", value: e.mobile, onChange: this.handleChange, required: !0, className: "jsx-2213395820 form-control" }), E("small", { className: "jsx-2213395820 err-msg form-text" }, t.mobile)), E("div", { className: "jsx-2213395820 form-group" }, E("input", { type: "password", placeholder: "password", name: "password", value: e.password, onChange: this.handleChange, required: !0, className: "jsx-2213395820 form-control" }), E("small", { className: "jsx-2213395820 err-msg form-text" }, t.password)), E("div", { className: "jsx-2213395820 form-group form-check" }, E("input", { type: "checkbox", id: "consent", required: !0, className: "jsx-2213395820 form-check-input" }), E("label", { htmlFor: "consent", className: "jsx-2213395820 form-check-label" }, "I agree to ", E("a", { href: "/terms", className: "jsx-2213395820" }, "terms"), " of use.")), E("button", { type: "submit", className: "jsx-2213395820 btn btn-primary btn-block" }, this.state.btnText), E("div", { className: "jsx-2213395820 text-center mt-3" }, "Already a member? ", E("a", { href: "#", onClick: this.handleLoginLink, className: "jsx-2213395820 forgot-password" }, "Login"))), E(S.a, { id: "2213395820" }, [".form-control.jsx-2213395820,.form-control.jsx-2213395820:focus{background:#3e3e3e;color:#ffffff;border-color:#7b7c7c;}", ".err-msg.jsx-2213395820{color:#dc3545;}"])) } }]), t }(P.a.Component), U = function (e) { function t() { var e, a; Object(x.a)(this, t); for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++)s[r] = arguments[r]; return a = Object(v.a)(this, (e = Object(g.a)(t)).call.apply(e, [this].concat(s))), Object(y.a)(Object(w.a)(a), "state", { activeIndex: 0, fields: { username: "", email: "", mobile: "", password: "" }, errors: {} }), Object(y.a)(Object(w.a)(a), "setActiveIndex", (function (e) { a.setState({ activeIndex: e }) })), Object(y.a)(Object(w.a)(a), "setMessage", (function (e) { var t = e.showAlert, n = e.error, s = e.message; a.setState({ showAlert: t, error: n, message: s }) })), Object(y.a)(Object(w.a)(a), "setFormFields", (function (e) { a.setState({ fields: L({}, a.state.fields, {}, e) }) })), Object(y.a)(Object(w.a)(a), "sendOTP", (function () { var e = a.state.fields, t = e.email, n = e.username, s = e.mobile; Object(M.k)({ email: t, username: n, mobile: s }).then((function (e) { if (!e || e.error) throw new Error(e && e.message || "Something went wrong!"); a.setMessage({ error: !1, showAlert: !0, message: "OTP sent successfully!" }) })).catch((function (e) { console.warn(e), a.setMessage({ error: !0, showAlert: !0, message: e }) })) })), Object(y.a)(Object(w.a)(a), "handleSignup", (function () { var e, t, n, s, r; return b.a.async((function (o) { for (; ;)switch (o.prev = o.next) { case 0: return e = a.state.fields, t = e.username, n = e.email, s = e.mobile, r = e.password, o.next = 3, b.a.awrap(Object(M.i)({ username: t, email: n, mobile: s, password: r, source: "web_tournament" }).then((function (e) { if (e && e.success) { var t = e.data; a.props.dispatch(Object(_.a)(t)); try { Object(F.d)([{ channel: "GA", payload: F.c.SIGN_UP }, { channel: "Firebase", name: F.b.GM_SIGN_UP, payload: { method: "Email", data: { user_id: t.id } } }, { channel: "Firebase", name: F.b.GM_SIGN_UP, payload: { event_user_id: t.id, username: t.username } }, { channel: "FB_Pixel", name: F.a.SIGN_UP }]) } catch (n) { console.warn(n) } return e } throw e && e.message || "Something went wrong!" })).catch((function (e) { a.setMessage({ error: !0, showAlert: !0, message: e.message }) }))); case 3: return o.abrupt("return", o.sent); case 4: case "end": return o.stop() } })) })), a } return Object(O.a)(t, e), Object(j.a)(t, [{ key: "render", value: function () { var e = this; return E(P.a.Fragment, null, E("div", { id: "signupModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "exampleModalCenterTitle", "aria-hidden": "true", className: "jsx-1774604673 modal fade" }, E("div", { role: "document", className: "jsx-1774604673 modal-dialog modal-dialog-centered" }, E("div", { className: "jsx-1774604673 modal-content" }, E("div", { className: "jsx-1774604673 modal-header" }, E("h5", { id: "createTeamModal", className: "jsx-1774604673 modal-title" }, 0 === this.state.activeIndex ? "Sign Up" : "Verify OTP"), E("button", { type: "button", "data-dismiss": "modal", "aria-label": "Close", className: "jsx-1774604673 close" }, E("span", { "aria-hidden": "true", className: "jsx-1774604673" }, "\xd7"))), E("div", { className: "jsx-1774604673 modal-body" }, E(I.Strider, { activeIndex: 0, transitionSpeed: 400 }, E(I.Step, null, (function (t) { var a = t.next, n = (t.goTo, t.active), s = t.hiding; t.activeIndex; return E("div", { className: "jsx-1774604673 " + (A()("step__wrapper", { "is-active": n, "is-hiding": s }) || "") }, E(R, { next: a, setActiveIndex: e.setActiveIndex, setMessage: e.setMessage, fields: e.state.fields, setFormFields: e.setFormFields, sendOTP: e.sendOTP })) })), E(I.Step, null, (function (t) { t.next; var a = t.prev, n = (t.goTo, t.active), s = t.hiding; t.activeIndex; return E("div", { className: "jsx-1774604673 " + (A()("step__wrapper", { "is-active": n, "is-hiding": s }) || "") }, E(G, { prev: a, setActiveIndex: e.setActiveIndex, setMessage: e.setMessage, mobile: e.state.fields.mobile, resendOTP: e.sendOTP, handleSignup: e.handleSignup, onBtnClick: e.props.onBtnClick })) })))), E("div", { className: "jsx-1774604673 d-block p-0" }, this.state.showAlert && E("div", { className: "jsx-1774604673 " + "alert alert-".concat(this.state.error ? "danger" : "success", " alert-dismissible fade show p-2 pr-4 mx-3") }, E("small", { className: "jsx-1774604673" }, this.state.message), E("button", { type: "button", "aria-label": "Close", onClick: function () { return e.setState({ showAlert: !1 }) }, className: "jsx-1774604673 close p-2" }, E("span", { "aria-hidden": "true", className: "jsx-1774604673" }, "\xd7"))))))), E(S.a, { id: "1774604673" }, [".modal-dialog.jsx-1774604673{max-width:350px;margin:auto;}", ".modal-header.jsx-1774604673,.modal-footer.jsx-1774604673{border-color:#7b7c7c;}", ".modal-title.jsx-1774604673{font-weight:800;}"])) } }]), t }(P.a.Component); t.a = Object(T.b)()(U) } }]);