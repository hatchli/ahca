webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/SignUpButton.js":
/*!************************************!*\
  !*** ./components/SignUpButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/reactjs-popup.es.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignUp */ "./components/SignUp.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignIn */ "./components/SignIn.js");
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rebass/forms */ "./node_modules/@rebass/forms/dist/index.esm.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\Wade\\Documents\\AHCA Web\\Frontend AHCA\\components\\SignUpButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var StyledPopup = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(function (_ref) {
  var className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className"]);

  return __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    contentStyle: className
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}).withConfig({
  displayName: "SignUpButton__StyledPopup",
  componentId: "sc-7z357x-0"
})(["left:0;"]);
var PopUpStyle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "SignUpButton__PopUpStyle",
  componentId: "sc-7z357x-1"
})([".popup-content{position:fixed;background:rgb(255,255,255);width:100%;@media (max-width:1000px){width:80%;}@media (min-width:1000px){width:50%;}margin:auto;border:1px solid rgb(187,187,187);padding:5px;}.modal{width:100%;}.close{cursor:pointer;position:absolute;display:block;padding:5px;line-height:20px;text-align:center;right:-5px;top:-10px;background:black;color:white;font-size:3rem;border:0;padding:5px;z-index:2;width:20px;&:before{content:\"\";width:0px;}&:after{content:\"\";width:0px;}&:hover,&:focus{outline:none;&:after{width:auto;}@media (max-width:700px){width:auto;}}}.button a{&:before{content:\"\";width:0px;}&:after{content:\"\";width:0px;}}a{&:before{content:\"\";width:0px;}&:after{content:\"\";width:0px;}}"]);

var SignUpButton = function SignUpButton(props, state) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isToggled = _useState[0],
      setToggled = _useState[1];

  return __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    repositionOnResize: true,
    contentStyle: {
      width: "auto",
      position: "center center"
    },
    trigger: __jsx("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, " ", props.children, " "),
    modal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, function (close) {
    return __jsx(PopUpStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("div", {
      className: "modal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("button", {
      className: "close",
      onClick: close,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "\xD7"), __jsx("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, !isToggled && __jsx(_SignUp__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }), isToggled && __jsx(_SignIn__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), !isToggled && __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("a", {
      onClick: function onClick() {
        return setToggled(!isToggled);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Already have an account?")), isToggled && __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("a", {
      onClick: function onClick() {
        return setToggled(!isToggled);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "Signup for an account?")))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SignUpButton);

/***/ })

})
//# sourceMappingURL=_app.js.92ce4314c333ef1cfd45.hot-update.js.map