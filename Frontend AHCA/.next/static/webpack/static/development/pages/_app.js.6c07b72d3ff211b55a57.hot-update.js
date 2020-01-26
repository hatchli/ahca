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

var _jsxFileName = "C:\\Users\\Wade\\Documents\\AHCA Web\\Frontend AHCA\\components\\Cart.js";
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
var Composed = Object(react_adopt__WEBPACK_IMPORTED_MODULE_13__["adopt"])({
  user: function user(_ref) {
    var render = _ref.render;
    return __jsx(_User__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
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
        lineNumber: 33
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
        lineNumber: 35
      },
      __self: this
    }, render);
  }
});

var Cart = function Cart(props, _ref4) {
  var item = _ref4.item;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      nameState = _useState[0],
      setNameState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      addressState = _useState2[0],
      setAddressState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      postalState = _useState3[0],
      setPostalState = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      phoneState = _useState4[0],
      setPhoneState = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      emailState = _useState5[0],
      setEmailState = _useState5[1];

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
    setNameState(me === null || me === void 0 ? void 0 : me.name);
    setAddressState(me === null || me === void 0 ? void 0 : me.address);
    setPostalState(me === null || me === void 0 ? void 0 : me.postal);
    setPhoneState(me === null || me === void 0 ? void 0 : me.phone);
    setEmailState(me === null || me === void 0 ? void 0 : me.email);
    return __jsx(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
      open: localState.data.cartOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: toggleCart,
      title: "close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "\xD7"), me.permissions.includes("GUEST") ? __jsx(_styles_Supreme__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Guest Cart") : __jsx(_styles_Supreme__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, me.name, "'s Cart"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "You have ", me.cart.length, " item", me.cart.length === 1 ? "" : "s", " in your cart")), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, me.cart.map(function (cartItem) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_CartItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: cartItem.id,
        cartItem: cartItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }));
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
    }, "Checkout")) : me.permissions.includes("GUEST") ? __jsx(_UpdatePhoneAddress__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }) : __jsx(_TakeMyMoney__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      disabled: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Checkout"))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);


/***/ }),

/***/ "./components/UpdatePhoneAddress.js":
/*!******************************************!*\
  !*** ./components/UpdatePhoneAddress.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @rebass/forms */ "./node_modules/@rebass/forms/dist/index.esm.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");










var _jsxFileName = "C:\\Users\\Wade\\Documents\\AHCA Web\\Frontend AHCA\\components\\UpdatePhoneAddress.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  mutation UPDATE_PHONE_ADDRESS(\n    $name: String\n    $address: String\n    $postal: String\n    $phone: String\n    $email: String\n  ) {\n    updatePhoneAddress(\n      name: $name\n      address: $address\n      postal: $postal\n      phone: $phone\n      email: $email\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var UPDATE_PHONE_ADDRESS = graphql_tag__WEBPACK_IMPORTED_MODULE_13___default()(_templateObject());

var updatePhoneAddress =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(updatePhoneAddress, _Component);

  function updatePhoneAddress() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, updatePhoneAddress);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(updatePhoneAddress)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      name: "",
      address: "",
      postal: "",
      email: "",
      phone: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === "number" ? _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(value) : value;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, name, val));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleUpdateLocation", function () {
      var event = new Event("input", {
        bubbles: true
      });

      _this.myinput.dispatchEvent(event);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(updatePhoneAddress, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var maround = [1, 3];
      var pleft = [0, 1, 2, 3];
      var wconst = [1, 1 / 4]; // const [county] = this.props;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_11__["Query"], {
        query: _User__WEBPACK_IMPORTED_MODULE_12__["CURRENT_USER_QUERY"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading;
        return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_11__["Mutation"], {
          mutation: UPDATE_PHONE_ADDRESS,
          variables: _this2.state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, function (updatePhoneLocation, _ref2) {
          var loading = _ref2.loading,
              error = _ref2.error;
          return __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_15__["Box"], {
            as: "form",
            onSubmit: function _callee(e) {
              var res;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      _context.next = 3;
                      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(updatePhoneLocation());

                    case 3:
                      res = _context.sent;

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            },
            pl: pleft,
            py: 3,
            width: 1,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_15__["Flex"], {
            flexWrap: "wrap",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_15__["Box"], {
            width: wconst,
            mx: maround,
            pl: pleft,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_14__["Label"], {
            htmlFor: "name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }, "Name"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_14__["Input"], {
            required: true,
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Name",
            value: _this2.state.name,
            onChange: function _callee2(e) {
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _this2.handleChange(e);

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_15__["Box"], {
            width: wconst,
            mx: maround,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_14__["Label"], {
            htmlFor: "name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, "Phone"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_14__["Input"], {
            required: true,
            id: "phone",
            name: "phone",
            type: "text",
            placeholder: "Phone",
            value: _this2.state.phone,
            onChange: function _callee3(e) {
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _this2.handleChange(e);

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_15__["Box"], {
            width: wconst,
            mx: maround,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_14__["Label"], {
            htmlFor: "name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          }, "Email"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_14__["Input"], {
            required: true,
            id: "email",
            name: "email",
            type: "text",
            placeholder: "Email",
            value: _this2.state.email,
            onChange: function _callee4(e) {
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _this2.handleChange(e);

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_15__["Box"], {
            width: wconst,
            mx: maround,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_14__["Label"], {
            htmlFor: "name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          }, "Address"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_14__["Input"], {
            required: true,
            id: "address",
            name: "address",
            type: "text",
            placeholder: "Address",
            value: _this2.state.address,
            onChange: function _callee5(e) {
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _this2.handleChange(e);

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            },
            __self: this
          })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_15__["Box"], {
            width: wconst,
            mx: maround,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_14__["Label"], {
            htmlFor: "name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            },
            __self: this
          }, "Zip Code"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_14__["Input"], {
            required: true,
            id: "zip",
            name: "zip",
            type: "text",
            placeholder: "Zip Code",
            value: _this2.state.postal,
            onChange: function _callee6(e) {
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _this2.handleChange(e);

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_15__["Flex"], {
            mx: -2,
            flexWrap: "wrap",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_15__["Box"], {
            p: 2,
            ml: "[3, 4, 5, 6]",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_15__["Button"], {
            type: "submit",
            bg: "dark-green",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          }, "Submit")))));
        });
      }));
    }
  }]);

  return updatePhoneAddress;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (updatePhoneAddress);

/***/ })

})
//# sourceMappingURL=_app.js.6c07b72d3ff211b55a57.hot-update.js.map