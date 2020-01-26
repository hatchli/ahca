webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var _Outer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Outer */ "./components/Outer.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");








var _colors,
    _theme,
    _jsxFileName = "C:\\Users\\Wade\\Documents\\AHCA Web\\Frontend AHCA\\components\\Page.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  @font-face {\n    font-family: 'rtraleway';\n    src: url('/static/rtraleway-bold-webfont.woff2') format('woff2');\n    font-weight: bold;\n    font-style: bold;\n  }\n  @font-face {\n    font-family: 'rtraleway';\n    src: url('/static/rtraleway-regular-webfont.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n  }\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 1.5rem;\n    line-height: 2;\n    font-family: 'rtraleway';\n    background-color: ", ";\n  }\n  a {\n    text-decoration: none;\n    color: ", ";\n    font-family: 'rtraleway';\n  }\n  button {\n    font-family: 'rtraleway';\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var theme = (_theme = {
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  soothingPink: "rgb(252, 240, 227)",
  headingRed: "#F36B7F",
  maxWidth: [1, "768px", null, "1024px", "1536px"],
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  breakpoints: ["40em", "48em", "56em", "60em", "70em"],
  // breakpoints: ["40em", "52em", "64em", "70em", "76em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    body: 1.5,
    heading: 1.25,
    bold: 1.5
  }
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_theme, "fontWeights", {
  body: 400,
  heading: 700,
  bold: 700
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_theme, "letterSpacings", {
  normal: "normal",
  tracked: "0.1em",
  tight: "-0.05em",
  mega: "0.25em"
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_theme, "fonts", {
  body: "rtraleway",
  heading: "rtraleway",
  bold: "rtraleway"
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_theme, "ul", {
  listStyleType: "none"
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_theme, "text", {
  heading: {
    caps: {
      textTransform: "uppercase"
    }
  }
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_theme, "borders", [0, "1px solid", "2px solid", "4px solid", "8px solid", "16px solid", "32px solid"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_theme, "radii", [0, 2, 4, 16, 9999, "100%"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_theme, "width", [16, 32, 63, 128, 256]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_theme, "heights", [16, 32, 64, 128, 256]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_theme, "maxWidths", [16, 32, 63, 128, 256, 512, 768, 1024, 1536]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_theme, "colors", (_colors = {
  black: "#393939",
  "near-black": "#111",
  "dark-gray": "#333",
  "mid-gray": "#555",
  gray: " #777",
  silver: "#999",
  "light-silver": "#aaa",
  "moon-gray": "#ccc",
  "light-gray": "#eee",
  "near-white": "#f4f4f4"
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "black", "#393939"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "grey", "#3A3A3A"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "lightgrey", "#E1E1E1"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "offWhite", "#EDEDED"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "soothingPink", "rgb(252, 240, 227)"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "headingRed", "#F36B7F"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "white", "#fff"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "transparent", "transparent"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "blacks", ["rgba(0,0,0,.0125)", "rgba(0,0,0,.025)", "rgba(0,0,0,.05)", "rgba(0,0,0,.1)", "rgba(0,0,0,.2)", "rgba(0,0,0,.3)", "rgba(0,0,0,.4)", "rgba(0,0,0,.5)", "rgba(0,0,0,.6)", "rgba(0,0,0,.7)", "rgba(0,0,0,.8)", "rgba(0,0,0,.9)"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "whites", ["rgba(255,255,255,.0125)", "rgba(255,255,255,.025)", "rgba(255,255,255,.05)", "rgba(255,255,255,.1)", "rgba(255,255,255,.2)", "rgba(255,255,255,.3)", "rgba(255,255,255,.4)", "rgba(255,255,255,.5)", "rgba(255,255,255,.6)", "rgba(255,255,255,.7)", "rgba(255,255,255,.8)", "rgba(255,255,255,.9)"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "dark-red", "#e7040f"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "red", "#ff4136"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "light-red", "#ff725c"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "orange", "#ff6300"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "gold", "#ffb700"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "yellow", "#ffd700"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "light-yellow", "#fbf1a9"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "purple", "#5e2ca5"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "light-purple", "#a463f2"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "dark-pink", "#d5008f"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "hot-pink", " #ff41b4"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "pink", "#ff80cc"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "light-pink", "#ffa3d7"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "dark-green", "#137752"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "green", "#19a974"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "light-green", "#9eebcf"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "navy", "#001b44"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "dark-blue", "#00449e"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "blue", "#357edd"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "light-blue", "#96ccff"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "lightest-blue", "#cdecff"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "washed-blue", "#f6fffe"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "washed-green", "#e8fdf5"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "washed-yellow", "#fffceb"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_colors, "washed-red", "#ffdfdf"), _colors)), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_theme, "variants", {
  addToCart: {
    borderRadius: 2,
    bg: "blue",
    color: "white",
    height: [4, 6],
    width: [6, 8]
  }
}), _theme);
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-4u7a64-0"
})(["color:", ";"], function (props) {
  return props.theme.black;
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-4u7a64-1"
})(["margin:0 auto;padding:2rem 0rem 0rem 0rem;"]);
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.offWhite;
}, theme.black);

var Page =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _Component);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, __jsx(StyledPage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), __jsx(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, this.props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }), __jsx(_Outer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      })), __jsx(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=_app.js.5f8e361a7c1001fea936.hot-update.js.map