webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion-theming */ "./node_modules/emotion-theming/dist/emotion-theming.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme */ "./components/theme.js");

var _jsxFileName = "C:\\Users\\Wade\\Documents\\AHCA Web\\Frontend AHCA\\components\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-flow: row wrap;\n  padding: 30px 30px 20px 30px;\n  .footer__nav {\n    display: flex;\n    flex-flow: row wrap;\n  }\n\n  .footer__nav > * {\n    flex: 1 50%;\n    margin-right: 1.25em;\n  }\n\n  .nav__ul a {\n    color: #999;\n  }\n\n  .nav__ul--extra {\n    column-count: 2;\n    column-gap: 1.25em;\n  }\n  .legal {\n    display: flex;\n    flex-wrap: wrap;\n    color: #999;\n  }\n  .legal__links {\n    display: flex;\n    align-items: center;\n  }\n  ul {\n    list-style: none;\n    padding-left: 0;\n  }\n  li {\n    line-height: 2em;\n  }\n  .nav__item--extra {\n    flex-grow: 2;\n  }\n\n  .footer__addr {\n    flex: 1 0px;\n    /* display: flex; */\n  }\n\n  .footer__nav {\n    flex: 2 0px;\n  }\n  .footer > * {\n    flex: 1 100%;\n  }\n\n  @media screen and (max-width: 40.375em) {\n    .footer__addr {\n      display: flex;\n    }\n\n    .footer__addr a {\n      width: 100%;\n    }\n  }\n  @media screen and (min-width: 24.375em) {\n    .legal .legal__links {\n      margin-left: auto;\n    }\n  }\n\n  @media screen and (min-width: 40.375em) {\n    .footer__nav > * {\n      flex: 1;\n    }\n\n    .nav__item--extra {\n      flex-grow: 2;\n    }\n\n    .footer__addr {\n      flex: 1 0px;\n    }\n\n    .footer__nav {\n      flex: 2 0px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var FooterStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].footer(_templateObject());

var Footer = function Footer(props) {
  console.log(props.context);
  return __jsx(emotion_theming__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    alignItems: "start" // minHeight="100vh"
    ,
    m: "0",
    sx: {
      display: "grid",
      gridTemplateRows: "auto 1fr auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(FooterStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDirection: "row",
    flexWrap: "wrap",
    p: "30px 30px 20px 30px",
    fontSize: [1, 2],
    backgroundColor: "whites.5",
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "footer__addr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    width: [10 / 10, 3 / 10],
    src: "https://res.cloudinary.com/americansavings/image/upload/v1579907623/bczrzvecqks3sueydzcw.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "address",
    fontSize: [0, 1, 2],
    color: "#999",
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "2133 - 5455 Wilshire Blvd, Los Angeles CA 90036"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    variant: "nav",
    width: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("a", {
    href: "tel:18883161722",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    color: "#999",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "1 (888) 316 - 1722")))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })), __jsx("ul", {
    className: "footer__nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("li", {
    className: "nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Media"), __jsx("ul", {
    className: "nav__ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Online"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Print"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Alternative Ads"))))), __jsx("li", {
    className: "nav__item nav__item--extra",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Technology"), __jsx("ul", {
    className: "nav__ul nav__ul--extra",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Hardware Design"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Hardware Design"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Hardware Design"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "Hardware Design"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Hardware Design"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Hardware Design"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Hardware Design"))))), __jsx("li", {
    className: "nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Legal"), __jsx("ul", {
    className: "nav__ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Privacy Policy"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "Terms of Use"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "Site Map")))))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "legal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "\xA9 2020 American Home Construction Authority. All rights reserved."), __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: "legal__links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "There is something here")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=_app.js.580a8a02d845f2174ff0.hot-update.js.map