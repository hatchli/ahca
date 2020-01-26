webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default, LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_CART_MUTATION", function() { return TOGGLE_CART_MUTATION; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var waait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! waait */ "./node_modules/waait/index.js");
/* harmony import */ var waait__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(waait__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CartItem */ "./components/CartItem.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-adopt */ "./node_modules/react-adopt/dist/index.m.js");
/* harmony import */ var _TakeMyMoney__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TakeMyMoney */ "./components/TakeMyMoney.js");
/* harmony import */ var _UpdatePhoneAddress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./UpdatePhoneAddress */ "./components/UpdatePhoneAddress.js");


var _jsxFileName = "C:\\Users\\Wade\\Documents\\AHCA Web\\Frontend AHCA\\components\\Cart.js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation {\n    toggleCart @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    cartOpen @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
















var LOCAL_STATE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var TOGGLE_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2());

flipCart = function flipCart() {
  return setCartState(!cartState);
};

var Composed = Object(react_adopt__WEBPACK_IMPORTED_MODULE_13__["adopt"])({
  user: function user(_ref) {
    var render = _ref.render;
    return __jsx(_User__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, render);
  },
  // cartItem: ({ render }) => <CartItem>{render}</CartItem>,
  toggleCart: function toggleCart(_ref2) {
    var render = _ref2.render;
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Mutation"], {
      mutation: TOGGLE_CART_MUTATION,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, render);
  },
  localState: function localState(_ref3) {
    var render = _ref3.render;
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
      query: LOCAL_STATE_QUERY,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, render);
  }
});

var Cart = function Cart(props, _ref4) {
  var item = _ref4.item;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      cartState = _useState[0],
      setCartState = _useState[1];

  return __jsx(Composed, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, function (_ref5) {
    var user = _ref5.user,
        toggleCart = _ref5.toggleCart,
        localState = _ref5.localState;
    console.log("user.data", user.data);
    var me = user.data ? user.data.me : null;
    if (!me) return null;
    return __jsx(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
      open: localState.data.cartOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: toggleCart,
      title: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "\xD7"), me.permissions.includes("GUEST") ? __jsx(_styles_Supreme__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Guest Cart") : __jsx(_styles_Supreme__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, me.name, "'s Cart"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "You have ", me.cart.length, " item", me.cart.length === 1 ? "" : "s", " in your cart")), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, cartState && me.cart.map(function (cartItem) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_CartItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: cartItem.id,
        cartItem: cartItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }));
    }), !cartState && me.permissions.includes("GUEST") && __jsx(_UpdatePhoneAddress__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })), __jsx("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_11__["default"])(me.cart))), me.cart.length ? __jsx(_TakeMyMoney__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      disabled: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Checkout")) : me.permissions.includes("GUEST") ? __jsx(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: function onClick() {
        return _this.flipCart();
      },
      disabled: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Checkout") : __jsx(_TakeMyMoney__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      disabled: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Checkout"))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);


/***/ })

})
//# sourceMappingURL=_app.js.c6c2d35d9d7fbbf2aae0.hot-update.js.map