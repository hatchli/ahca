module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "1MVt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const theme = {
  breakpoints: ["40em", "50em", "60em", "76em", "88em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    body: 1.5,
    heading: 1.25,
    bold: 1.5
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em"
  },
  fonts: {
    body: "rtraleway",
    heading: "rtraleway",
    bold: "rtraleway"
  },
  ul: {
    listStyleType: "none"
  },
  text: {
    heading: {
      caps: {
        textTransform: "uppercase"
      }
    }
  },
  borders: [0, "1px solid", "2px solid", "4px solid", "8px solid", "16px solid", "32px solid"],
  radii: [0, 2, 4, 16, 9999, "100%"],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    black: "#000",
    "near-black": "#111",
    "dark-gray": "#333",
    "mid-gray": "#555",
    gray: " #777",
    silver: "#999",
    "light-silver": "#aaa",
    "moon-gray": "#ccc",
    "light-gray": "#eee",
    "near-white": "#f4f4f4",
    black: "#393939",
    grey: "#3A3A3A",
    lightgrey: "#E1E1E1",
    offWhite: "#EDEDED",
    soothingPink: "rgb(252, 240, 227)",
    headingRed: "#F36B7F",
    white: "#fff",
    transparent: "transparent",
    blacks: ["rgba(0,0,0,.0125)", "rgba(0,0,0,.025)", "rgba(0,0,0,.05)", "rgba(0,0,0,.1)", "rgba(0,0,0,.2)", "rgba(0,0,0,.3)", "rgba(0,0,0,.4)", "rgba(0,0,0,.5)", "rgba(0,0,0,.6)", "rgba(0,0,0,.7)", "rgba(0,0,0,.8)", "rgba(0,0,0,.9)"],
    whites: ["rgba(255,255,255,.0125)", "rgba(255,255,255,.025)", "rgba(255,255,255,.05)", "rgba(255,255,255,.1)", "rgba(255,255,255,.2)", "rgba(255,255,255,.3)", "rgba(255,255,255,.4)", "rgba(255,255,255,.5)", "rgba(255,255,255,.6)", "rgba(255,255,255,.7)", "rgba(255,255,255,.8)", "rgba(255,255,255,.9)"],
    "dark-red": "#e7040f",
    red: "#ff4136",
    "light-red": "#ff725c",
    orange: "#ff6300",
    gold: "#ffb700",
    yellow: "#ffd700",
    "light-yellow": "#fbf1a9",
    purple: "#5e2ca5",
    "light-purple": "#a463f2",
    "dark-pink": "#d5008f",
    "hot-pink": " #ff41b4",
    pink: "#ff80cc",
    "light-pink": "#ffa3d7",
    "dark-green": "#137752",
    green: "#19a974",
    "light-green": "#9eebcf",
    navy: "#001b44",
    "dark-blue": "#00449e",
    blue: "#357edd",
    "light-blue": "#96ccff",
    "lightest-blue": "#cdecff",
    "washed-blue": "#f6fffe",
    "washed-green": "#e8fdf5",
    "washed-yellow": "#fffceb",
    "washed-red": "#ffdfdf"
  },
  variants: {
    addToCart: {
      borderRadius: 2,
      bg: "blue",
      color: "white",
      height: [4, 6],
      width: [6, 8]
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "waait"
var external_waait_ = __webpack_require__("OHJZ");

// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__("VliS");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./components/styles/CartStyles.js

const CartStyles = external_styled_components_default.a.div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1xx5xeu-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;@media (max-width:700px){width:80%;}@media (min-width:700px){width:52%;}bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid ", ";margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double ", ";margin-top:2rem;padding-top:2rem;display:grid;grid-template-columns:auto auto;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:auto;}"], props => props.open && `transform: translateX(0);`, props => props.theme.black, props => props.theme.black);
/* harmony default export */ var styles_CartStyles = (CartStyles);
// CONCATENATED MODULE: ./components/styles/Supreme.js

const Supreme = external_styled_components_default.a.h3.withConfig({
  displayName: "Supreme",
  componentId: "sc-171o8mv-0"
})(["background:", ";color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"], props => props.theme.headingRed);
/* harmony default export */ var styles_Supreme = (Supreme);
// CONCATENATED MODULE: ./components/styles/CloseButton.js

const CloseButton = external_styled_components_default.a.button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1jwd60z-0"
})(["background:black;color:white;font-size:4rem;border:0;position:absolute;z-index:2;@media (max-width:700px){right:40px;}right:10px;"]);
/* harmony default export */ var styles_CloseButton = (CloseButton);
// EXTERNAL MODULE: ./components/styles/SickButton.js
var SickButton = __webpack_require__("2FTe");

// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__("2y/O");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// CONCATENATED MODULE: ./components/RemoveFromCart.js

var __jsx = external_react_default.a.createElement;





const REMOVE_FROM_CART_MUTATION = external_graphql_tag_default.a`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;
const BigButton = external_styled_components_default.a.button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "jg76qm-0"
})(["max-width:30px;font-size:3rem;background:none;border:0;margin:0 auto;&:hover{color:", ";cursor:pointer;}"], props => props.theme.headingRed);

class RemoveFromCart_RemoveFromCart extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "update", (cache, payload) => {
      // read the cache
      const data = cache.readQuery({
        query: User["a" /* CURRENT_USER_QUERY */]
      }); //remove item from the cart

      const cartItemId = payload.data.removeFromCart.id;
      data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId); // write back to the cache

      cache.writeQuery({
        query: User["a" /* CURRENT_USER_QUERY */],
        data
      });
    });
  }

  render() {
    return __jsx(external_react_apollo_["Mutation"], {
      mutation: REMOVE_FROM_CART_MUTATION,
      variables: {
        id: this.props.id
      },
      update: this.update,
      optimisticResponse: {
        __typename: "Mutation",
        removeFromCart: {
          __typename: "CartItem",
          id: this.props.id
        }
      }
    }, (removeFromCart, {
      loading,
      error
    }) => __jsx(BigButton, {
      disabled: loading,
      onClick: () => {
        removeFromCart().catch(err => alert(err.message));
      },
      title: "Delete Item"
    }, "\xD7"));
  }

}

/* harmony default export */ var components_RemoveFromCart = (RemoveFromCart_RemoveFromCart);

// EXTERNAL MODULE: external "@rebass/forms"
var forms_ = __webpack_require__("q8hb");

// EXTERNAL MODULE: external "rebass"
var external_rebass_ = __webpack_require__("9Bhh");

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__("VUBQ");

// CONCATENATED MODULE: ./components/PromoCode.js
var PromoCode_jsx = external_react_default.a.createElement;







const VALIDATE_APPLY_PROMO_CODE = external_graphql_tag_default.a`
  mutation updatePriceAfterPromoCode($id: ID!, $promotion: String!) {
    updatePriceAfterPromoCode(id: $id, promotion: $promotion) {
      id
      promotionPrice
    }
  }
`;

const PromoCode = props => {
  const {
    0: promoState,
    1: setPromoState
  } = Object(external_react_["useState"])("");
  const maround = [1, 3];
  const pleft = [0, 1, 2, 3];
  const wconst = [1, 3 / 4];
  console.log(props);
  return PromoCode_jsx(external_react_default.a.Fragment, null, PromoCode_jsx(external_react_apollo_["Query"], {
    query: User["a" /* CURRENT_USER_QUERY */]
  }, ({
    data,
    loading
  }) => {
    return PromoCode_jsx(external_react_apollo_["Mutation"], {
      mutation: VALIDATE_APPLY_PROMO_CODE,
      variables: {
        id: props.id,
        promotion: promoState
      },
      refetchQueries: [{
        query: User["a" /* CURRENT_USER_QUERY */]
      }]
    }, (updatePriceAfterPromoCode, {
      loading,
      error
    }) => {
      return PromoCode_jsx(external_rebass_["Box"], {
        as: "form",
        onSubmit: async e => {
          e.preventDefault();
          const res = await updatePriceAfterPromoCode();
        } // pl={pleft}
        // py={3}
        ,
        ml: -2,
        width: 1
      }, PromoCode_jsx(external_rebass_["Flex"], {
        flexDirection: "row",
        alignItems: true
      }, PromoCode_jsx(external_rebass_["Box"], {
        width: 1 / 2,
        mx: maround,
        pl: 0
      }, PromoCode_jsx(forms_["Input"], {
        id: "promo",
        name: "promo",
        type: "text",
        placeholder: "Promo Code",
        value: promoState,
        onChange: async e => {
          setPromoState(e.target.value);
        }
      })), PromoCode_jsx(external_rebass_["Box"], {
        width: 1 / 8
      }, PromoCode_jsx(external_rebass_["Button"], {
        type: "submit",
        bg: "dark-green"
      }, "Submit"))), PromoCode_jsx(ErrorMessage["a" /* default */], {
        error: error
      }));
    });
  }));
};

/* harmony default export */ var components_PromoCode = (PromoCode);
// CONCATENATED MODULE: ./components/CartItem.js
var CartItem_jsx = external_react_default.a.createElement;








const CartItemStyles = external_styled_components_default.a.li.withConfig({
  displayName: "CartItem__CartItemStyles",
  componentId: "sc-1rvaqt5-0"
})(["padding:1rem 0;border-bottom:1px solid ", ";display:grid;align-items:center;grid-template-columns:auto 1fr 1fr auto;"], props => props.theme.lightgrey);

const CartItem = ({
  cartItem
}) => {
  if (!cartItem.item) return CartItem_jsx(CartItemStyles, null, "This item has been removed!", CartItem_jsx(components_RemoveFromCart, {
    id: cartItem.id
  }));
  console.log("cartItem", cartItem);
  return CartItem_jsx(external_rebass_["Flex"], {
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }, CartItem_jsx(external_rebass_["Box"], {
    mt: 3,
    width: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }, CartItem_jsx(external_rebass_["Box"], {
    width: [2 / 8, 3 / 16]
  }, CartItem_jsx(external_rebass_["Image"], {
    src: cartItem.item.image,
    alt: cartItem.item.title
  })), CartItem_jsx(external_rebass_["Box"], {
    width: [5 / 8, 7 / 16],
    display: "flex",
    justifyContent: "center"
  }, CartItem_jsx("div", {
    className: "cart-item-details"
  }, CartItem_jsx(external_rebass_["Heading"], {
    fontSize: [1, 4]
  }, cartItem.item.title), !cartItem.promotionPrice ? CartItem_jsx(external_rebass_["Text"], {
    fontSize: [0, 2]
  }, Object(formatMoney["a" /* default */])(cartItem.item.price * cartItem.quantity), " - ", CartItem_jsx("em", null, cartItem.quantity, " \xD7 ", Object(formatMoney["a" /* default */])(cartItem.item.price), " ", "each"), " ") : CartItem_jsx(external_rebass_["Text"], {
    fontSize: [0, 2]
  }, Object(formatMoney["a" /* default */])(cartItem.promotionPrice * cartItem.quantity), " - ", CartItem_jsx("em", null, cartItem.quantity, " \xD7", " ", Object(formatMoney["a" /* default */])(cartItem.promotionPrice), " each")))), CartItem_jsx(external_rebass_["Box"], {
    width: [1, 5 / 16],
    order: [3, 0],
    display: "flex",
    justifyContent: "center"
  }, CartItem_jsx(components_PromoCode, {
    id: cartItem.item.id
  })), CartItem_jsx(external_rebass_["Box"], {
    width: [1 / 8, 1 / 16],
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, CartItem_jsx(components_RemoveFromCart, {
    id: cartItem.id
  }))));
};

/* harmony default export */ var components_CartItem = (CartItem);
// CONCATENATED MODULE: ./lib/calcTotalPrice.js
function calcTotalPrice(cart) {
  console.log(cart);
  const promoItems = cart.filter(cartItem => cartItem.promotionPrice !== null);
  const regularItems = cart.filter(cartItem => cartItem.promotionPrice === null);
  const promoAmount = promoItems.reduce((tally, cartItem) => tally + cartItem.promotionPrice * cartItem.quantity, 0);
  const regularAmount = regularItems.reduce((tally, cartItem) => tally + cartItem.item.price * cartItem.quantity, 0);
  console.log(promoAmount);
  console.log(regularAmount);
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.item) return tally;
    return regularAmount + promoAmount;
  }, 0);
}
// EXTERNAL MODULE: external "react-adopt"
var external_react_adopt_ = __webpack_require__("UaIe");

// EXTERNAL MODULE: external "react-stripe-checkout"
var external_react_stripe_checkout_ = __webpack_require__("r0Hv");
var external_react_stripe_checkout_default = /*#__PURE__*/__webpack_require__.n(external_react_stripe_checkout_);

// CONCATENATED MODULE: ./components/TakeMyMoney.js

var TakeMyMoney_jsx = external_react_default.a.createElement;









const CREATE_ORDER_MUTATION = external_graphql_tag_default.a`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

function totalItems(cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

class TakeMyMoney_TakeMyMoney extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "onToken", async (res, createOrder) => {
      external_nprogress_default.a.start();
      console.log("On Token Called!");
      console.log(res.id); // manually call the mutation once we have the stripe token

      const order = await createOrder({
        variables: {
          token: res.id
        }
      }).catch(err => {
        alert(err.message);
      });
      router_default.a.push({
        pathname: "/order",
        query: {
          id: order.data.createOrder.id
        }
      });
    });
  }

  render() {
    return TakeMyMoney_jsx(User["b" /* default */], null, ({
      data: {
        me
      }
    }) => TakeMyMoney_jsx(external_react_apollo_["Mutation"], {
      mutation: CREATE_ORDER_MUTATION,
      refetchQueries: [{
        query: User["a" /* CURRENT_USER_QUERY */]
      }]
    }, createOrder => TakeMyMoney_jsx(external_react_stripe_checkout_default.a, {
      amount: calcTotalPrice(me.cart),
      name: "AHCA",
      description: `Order of ${totalItems(me.cart)} items`,
      image: me.cart.length && me.cart[0].item && me.cart[0].item.image,
      stripeKey: "pk_test_vIi6KZR3mbQVD0ompiAeSHcP00BvHXKNRI",
      currency: "USD",
      email: me.email,
      token: res => this.onToken(res, createOrder)
    }, this.props.children)));
  }

}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js
var parse_float = __webpack_require__("Wa2I");
var parse_float_default = /*#__PURE__*/__webpack_require__.n(parse_float);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/UpdatePhoneAddress.js


var UpdatePhoneAddress_jsx = external_react_default.a.createElement;








const UPDATE_PHONE_ADDRESS = external_graphql_tag_default.a`
  mutation UPDATE_PHONE_ADDRESS(
    $name: String!
    $address: String!
    $postal: String!
    $phone: String!
    $email: String!
  ) {
    updatePhoneAddress(
      name: $name
      address: $address
      postal: $postal
      phone: $phone
      email: $email
    ) {
      id
    }
  }
`;

class UpdatePhoneAddress_updatePhoneAddress extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      name: "",
      address: "",
      postal: "",
      email: "",
      phone: "",
      checkout: false
    });

    Object(defineProperty["a" /* default */])(this, "handleChange", e => {
      const {
        name,
        type,
        value
      } = e.target;
      const val = type === "number" ? parse_float_default()(value) : value;
      this.setState({
        [name]: val
      });

      if (this.state.name !== "" && this.state.address !== "" && this.state.postal !== "" && this.state.email !== "" && this.state.phone !== "") {
        this.setState({
          checkout: true
        });
      }

      if (this.state.name == "" || this.state.address == "" || this.state.postal == "" || this.state.email == "" || this.state.phone == "") {
        this.setState({
          checkout: false
        });
      }
    });
  }

  render() {
    const maround = 0;
    const pleft = 0;
    const wconst = [1, 3 / 4];
    const fconst = [1, 2];
    const myconst = [2]; // const hconst = [7, 2];
    // const [county] = this.props;

    return UpdatePhoneAddress_jsx(external_react_default.a.Fragment, null, UpdatePhoneAddress_jsx(external_react_apollo_["Query"], {
      query: User["a" /* CURRENT_USER_QUERY */]
    }, ({
      data,
      loading
    }) => {
      return UpdatePhoneAddress_jsx(external_react_apollo_["Mutation"], {
        mutation: UPDATE_PHONE_ADDRESS,
        variables: this.state
      }, (updatePhoneAddress, {
        loading,
        error
      }) => {
        return UpdatePhoneAddress_jsx(external_rebass_["Box"], {
          as: "form",
          onSubmit: async e => {
            e.preventDefault();
            const res = await updatePhoneAddress();
            console.log(res);
          },
          pl: pleft,
          py: 3,
          fontSize: fconst
        }, UpdatePhoneAddress_jsx(external_rebass_["Flex"], {
          alignItems: "center",
          justifyContent: "center"
        }, UpdatePhoneAddress_jsx(external_rebass_["Box"], {
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: "100%"
        }, UpdatePhoneAddress_jsx(external_rebass_["Heading"], {
          fontSize: [3, 5]
        }), UpdatePhoneAddress_jsx(external_rebass_["Box"], {
          width: wconst,
          mx: maround,
          pl: pleft,
          my: myconst
        }, UpdatePhoneAddress_jsx(forms_["Input"], {
          required: true,
          id: "name",
          name: "name",
          type: "text",
          placeholder: "Name",
          value: this.state.name,
          onChange: async e => {
            this.handleChange(e);
          }
        })), UpdatePhoneAddress_jsx(external_rebass_["Box"], {
          width: wconst,
          mx: maround,
          my: myconst
        }, UpdatePhoneAddress_jsx(forms_["Input"], {
          required: true,
          id: "phone",
          name: "phone",
          type: "text",
          placeholder: "Phone",
          value: this.state.phone,
          onChange: async e => {
            this.handleChange(e);
          }
        })), UpdatePhoneAddress_jsx(external_rebass_["Box"], {
          width: wconst,
          mx: maround,
          my: myconst
        }, UpdatePhoneAddress_jsx(forms_["Input"], {
          required: true,
          id: "email",
          name: "email",
          type: "text",
          placeholder: "Email",
          value: this.state.email,
          onChange: async e => {
            this.handleChange(e);
          }
        })), UpdatePhoneAddress_jsx(external_rebass_["Box"], {
          width: wconst,
          mx: maround,
          my: myconst
        }, UpdatePhoneAddress_jsx(forms_["Input"], {
          required: true,
          id: "address",
          name: "address",
          type: "text",
          placeholder: "Address",
          value: this.state.address,
          onChange: async e => {
            this.handleChange(e);
          }
        })), UpdatePhoneAddress_jsx(external_rebass_["Box"], {
          width: wconst,
          mx: maround,
          my: myconst
        }, UpdatePhoneAddress_jsx(forms_["Input"], {
          required: true,
          id: "postal",
          name: "postal",
          type: "text",
          placeholder: "Zip Code",
          value: this.state.postal,
          onChange: async e => {
            this.handleChange(e);
          }
        })), this.state.checkout ? UpdatePhoneAddress_jsx(external_rebass_["Button"], {
          type: "submit",
          bg: "dark-green",
          width: wconst,
          mx: maround,
          my: myconst
        }, UpdatePhoneAddress_jsx(TakeMyMoney_TakeMyMoney, null, "Proceed to Checkout")) : UpdatePhoneAddress_jsx(external_rebass_["Button"], {
          disabled: true,
          type: "submit",
          bg: "dark-gray",
          width: wconst,
          mx: maround,
          my: myconst
        }, "Proceed to Checkout"))));
      });
    }));
  }

}

/* harmony default export */ var UpdatePhoneAddress = (UpdatePhoneAddress_updatePhoneAddress);
// CONCATENATED MODULE: ./components/Cart.js
var Cart_jsx = external_react_default.a.createElement;















const LOCAL_STATE_QUERY = external_graphql_tag_default.a`
  query {
    cartOpen @client
  }
`;
const TOGGLE_CART_MUTATION = external_graphql_tag_default.a`
  mutation {
    toggleCart @client
  }
`;
const Composed = Object(external_react_adopt_["adopt"])({
  user: ({
    render
  }) => Cart_jsx(User["b" /* default */], null, render),
  // cartItem: ({ render }) => <CartItem>{render}</CartItem>,
  toggleCart: ({
    render
  }) => Cart_jsx(external_react_apollo_["Mutation"], {
    mutation: TOGGLE_CART_MUTATION
  }, render),
  localState: ({
    render
  }) => Cart_jsx(external_react_apollo_["Query"], {
    query: LOCAL_STATE_QUERY
  }, render)
});

const Cart = (props, {
  item
}) => {
  const {
    0: cartState,
    1: setCartState
  } = Object(external_react_["useState"])(true);

  const flipCart = () => {
    return setCartState(!cartState);
  };

  return Cart_jsx(Composed, null, ({
    user,
    toggleCart,
    localState
  }) => {
    console.log("user.data", user.data);
    const me = user.data ? user.data.me : null;
    if (!me) return null;
    console.log(me);
    return Cart_jsx(styles_CartStyles, {
      open: localState.data.cartOpen
    }, Cart_jsx("header", null, Cart_jsx(styles_CloseButton, {
      onClick: toggleCart,
      title: "close"
    }, "\xD7"), me.permissions.includes("GUEST") ? Cart_jsx(styles_Supreme, null, "Guest Cart") : Cart_jsx(styles_Supreme, null, me.name, "'s Cart"), Cart_jsx("p", null, "You have ", me.cart.length, " item", me.cart.length === 1 ? "" : "s", " in your cart")), Cart_jsx("ul", null, cartState && me.cart.map(cartItem => Cart_jsx(external_react_default.a.Fragment, null, Cart_jsx(components_CartItem, {
      key: cartItem.id,
      cartItem: cartItem
    }))), !cartState && me.permissions.includes("GUEST") && Cart_jsx(UpdatePhoneAddress, null)), Cart_jsx("footer", null, Cart_jsx("p", null, Object(formatMoney["a" /* default */])(calcTotalPrice(me.cart))), me.cart.length && !cartState ? Cart_jsx(TakeMyMoney_TakeMyMoney, null, Cart_jsx(SickButton["a" /* default */], {
      disabled: false
    }, "Checkout")) : me.permissions.includes("GUEST") ? Cart_jsx(SickButton["a" /* default */], {
      onClick: () => flipCart(),
      disabled: false
    }, "Checkout") : Cart_jsx(TakeMyMoney_TakeMyMoney, null, Cart_jsx(SickButton["a" /* default */], {
      disabled: true
    }, "Checkout"))));
  });
};

/* harmony default export */ var components_Cart = (Cart);

// CONCATENATED MODULE: ./components/styles/NavStyles.js

const NavStyles = external_styled_components_default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-117p9rq-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:800;font-size:1em;background:none;border:0;color:", ";cursor:pointer;@media (max-width:700px){font-size:1.5rem;}&:before{content:\"\";width:2px;background:", ";height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:\"\";width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1000px){border-top:1px solid ", ";max-width:100%;justify-content:center;font-size:2rem;}"], props => props.theme.black, props => props.theme.lightgrey, props => props.theme.lightgrey);
/* harmony default export */ var styles_NavStyles = (NavStyles);
// CONCATENATED MODULE: ./components/Signout.js
var Signout_jsx = external_react_default.a.createElement;




const SIGN_OUT_MUTATION = external_graphql_tag_default.a`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = props => {
  return Signout_jsx(external_react_apollo_["Mutation"], {
    mutation: SIGN_OUT_MUTATION,
    refetchQueries: [{
      query: User["a" /* CURRENT_USER_QUERY */]
    }]
  }, signout => Signout_jsx("button", {
    onClick: signout
  }, "Sign Out"));
};

/* harmony default export */ var components_Signout = (Signout);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__("CSOn");

// CONCATENATED MODULE: ./components/CartCount.js
var CartCount_jsx = external_react_default.a.createElement;



const Dot = external_styled_components_default.a.div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "sc-1vz344p-0"
})(["background:", ";color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-weight:100;font-feature-settings:\"tnum\";font-variant-numeric:tabular-nums;"], props => props.theme.colors.headingRed);
const AnimationStyles = external_styled_components_default.a.span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "sc-1vz344p-1"
})(["position:relative;.count{display:block;position:relative;transition:all 0.4s;backface-visibility:hidden;}.count-enter{transform:rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:rotateX(0.5turn);}"]);

const CartCount = ({
  count
}) => CartCount_jsx(AnimationStyles, null, CartCount_jsx(external_react_transition_group_["TransitionGroup"], null, CartCount_jsx(external_react_transition_group_["CSSTransition"], {
  unmountOnExit: true,
  className: "count",
  classNames: "count",
  key: count,
  timeout: {
    enter: 400,
    exit: 400
  }
}, CartCount_jsx(Dot, null, count))));

/* harmony default export */ var components_CartCount = (CartCount);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external "reactjs-popup"
var external_reactjs_popup_ = __webpack_require__("qwZ6");
var external_reactjs_popup_default = /*#__PURE__*/__webpack_require__.n(external_reactjs_popup_);

// EXTERNAL MODULE: ./components/SignUp.js
var SignUp = __webpack_require__("6P3e");

// EXTERNAL MODULE: ./components/SignIn.js
var SignIn = __webpack_require__("SDjk");

// CONCATENATED MODULE: ./components/SignUpButton.js


var SignUpButton_jsx = external_react_default.a.createElement;








const StyledPopup = external_styled_components_default()((_ref) => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className"]);

  return SignUpButton_jsx(external_reactjs_popup_default.a, Object(esm_extends["a" /* default */])({
    contentStyle: className
  }, props));
}).withConfig({
  displayName: "SignUpButton__StyledPopup",
  componentId: "sc-1jr01fo-0"
})(["left:0;"]);
const PopUpStyle = external_styled_components_default.a.div.withConfig({
  displayName: "SignUpButton__PopUpStyle",
  componentId: "sc-1jr01fo-1"
})([".popup-content{position:relative;background:rgb(255,255,255);width:100%;@media (max-width:1000px){width:80%;}@media (min-width:1000px){width:50%;}margin:auto;border:1px solid rgb(187,187,187);padding:5px;}.modal{width:100%;}.close{cursor:pointer;position:absolute;display:block;padding:5px;line-height:20px;text-align:center;right:-5px;top:-10px;background:black;color:white;font-size:3rem;border:0;padding:5px;z-index:2;width:20px;&:before{content:\"\";width:0px;}&:after{content:\"\";width:0px;}&:hover,&:focus{outline:none;&:after{width:auto;}@media (max-width:700px){width:auto;}}}.button a{&:before{content:\"\";width:0px;}&:after{content:\"\";width:0px;}}a{&:before{content:\"\";width:0px;}&:after{content:\"\";width:0px;}}"]);

const SignUpButton = (props, state) => {
  const {
    0: isToggled,
    1: setToggled
  } = Object(external_react_["useState"])(false);
  return SignUpButton_jsx(external_reactjs_popup_default.a, {
    repositionOnResize: true,
    contentStyle: {
      width: "auto"
    },
    trigger: SignUpButton_jsx("button", null, " ", props.children, " "),
    modal: true
  }, close => SignUpButton_jsx(PopUpStyle, null, SignUpButton_jsx("div", {
    className: "modal"
  }, SignUpButton_jsx("button", {
    className: "close",
    onClick: close
  }, "\xD7"), SignUpButton_jsx("div", {
    className: "content"
  }, !isToggled && SignUpButton_jsx(SignUp["a" /* default */], null), isToggled && SignUpButton_jsx(SignIn["a" /* default */], null), !isToggled && SignUpButton_jsx("h4", null, SignUpButton_jsx("a", {
    onClick: () => setToggled(!isToggled)
  }, "Already have an account?")), isToggled && SignUpButton_jsx("h4", null, SignUpButton_jsx("a", {
    onClick: () => setToggled(!isToggled)
  }, "Signup for an account?"))))));
};

/* harmony default export */ var components_SignUpButton = (SignUpButton);
// CONCATENATED MODULE: ./components/Nav.js

var Nav_jsx = external_react_default.a.createElement;









const Nav = () => Nav_jsx(User["b" /* default */], null, ({
  data
}) => {
  const me = data ? data.me : null;
  console.log(data);
  return Nav_jsx(styles_NavStyles, {
    "data-test": "nav"
  }, Nav_jsx(link_default.a, {
    href: "/shop"
  }, Nav_jsx("a", null, "Shop")), Nav_jsx(external_react_default.a.Fragment, null, me && me.permissions.includes("ADMIN") && Nav_jsx(link_default.a, {
    href: "/sell"
  }, Nav_jsx("a", null, "Sell")), me && me.permissions.includes("USER") && Nav_jsx(link_default.a, {
    href: "/orders"
  }, Nav_jsx("a", null, "Orders")), me && !me.permissions.includes("GUEST") && Nav_jsx(components_Signout, null), me && me.permissions.includes("GUEST") && Nav_jsx(components_SignUpButton, null, "Register"), me && Nav_jsx(external_react_apollo_["Mutation"], {
    mutation: TOGGLE_CART_MUTATION
  }, toggleCart => Nav_jsx("button", {
    onClick: toggleCart
  }, "My Cart", Nav_jsx(components_CartCount, {
    count: me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)
  })))));
});

/* harmony default export */ var components_Nav = (Nav);
// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__("impR");
var external_downshift_default = /*#__PURE__*/__webpack_require__.n(external_downshift_);

// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__("Q4dm");
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);

// CONCATENATED MODULE: ./components/styles/DropDown.js

const DropDown = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown",
  componentId: "sc-1fs9hjr-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid ", ";"], props => props.theme.lightgrey);
const DropDownItem = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-1fs9hjr-1"
})(["border-bottom:1px solid ", ";background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], props => props.theme.lightgrey, props => props.highlighted ? "#f7f7f7" : "white", props => props.highlighted ? "padding-left: 2rem;" : null, props => props.highlighted ? props.theme.lightgrey : "white");
const glow = Object(external_styled_components_["keyframes"])(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
const SearchStyles = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-1fs9hjr-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);

// CONCATENATED MODULE: ./components/Search.js


var Search_jsx = external_react_default.a.createElement;







const SEARCH_ITEMS_QUERY = external_graphql_tag_default.a`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
      image
      title
    }
  }
`;

function routeToItem(item) {
  router_default.a.push({
    pathname: "/item",
    query: {
      id: item.id
    }
  });
}

class Search_AutoComplete extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      items: [],
      loading: false
    });

    Object(defineProperty["a" /* default */])(this, "onChange", external_lodash_debounce_default()(async (e, client) => {
      // turn loading on
      this.setState({
        loading: true
      }); //manually query Apollo client

      const res = await client.query({
        query: SEARCH_ITEMS_QUERY,
        variables: {
          searchTerm: e.target.value
        }
      });
      this.setState({
        items: res.data.items,
        loading: false
      });
    }, 350));
  }

  render() {
    Object(external_downshift_["resetIdCounter"])();
    return Search_jsx(SearchStyles, null, Search_jsx(external_downshift_default.a, {
      onChange: routeToItem,
      itemToString: item => item === null ? "" : item.title
    }, ({
      getInputProps,
      getItemProps,
      isOpen,
      inputValue,
      highlightedIndex
    }) => Search_jsx("div", null, Search_jsx(external_react_apollo_["ApolloConsumer"], null, client => Search_jsx("input", getInputProps({
      type: "search",
      placeholder: "Search For An Item",
      id: "search",
      className: this.state.loading ? "loading" : "",
      onChange: e => {
        e.persist();
        this.onChange(e, client);
      }
    }))), isOpen && Search_jsx(DropDown, null, this.state.items.map((item, index) => Search_jsx(DropDownItem, Object(esm_extends["a" /* default */])({}, getItemProps({
      item
    }), {
      key: item.id,
      highlighted: index === highlightedIndex
    }), Search_jsx("img", {
      width: "50",
      src: item.image,
      alt: item.title
    }), item.title)), !this.state.items.length && !this.state.loading && Search_jsx(DropDownItem, null, "Nothing Found For ", inputValue)))));
  }

}
// EXTERNAL MODULE: external "emotion-theming"
var external_emotion_theming_ = __webpack_require__("rpFx");

// EXTERNAL MODULE: ./components/theme.js
var theme = __webpack_require__("1MVt");

// CONCATENATED MODULE: ./components/Header.js

var Header_jsx = external_react_default.a.createElement;











router_default.a.onRouteChangeStart = () => {
  external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = () => {
  external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = () => {
  external_nprogress_default.a.done();
};

const Logo = external_styled_components_default.a.h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-16jbw1h-0"
})(["position:relative;margin-left:2rem;z-index:2;transform:skew(-7deg);a{padding:0.5rem 1rem;background:", ";color:white;text-transform:uppercase;text-decoration:none;}@media only screen and (max-width:40em){font-size:2rem;margin:0 auto;}@media only screen and (min-width:52em){font-size:3rem;padding-right:5px;margin:0;text-align:center;}@media only screen and (min-width:64em){font-size:4rem;margin:0;padding-right:5px;padding-left:10px;text-align:center;}@media only screen and (min-width:76em){font-size:4.8rem;padding-right:10px;padding-left:20px;margin:0;text-align:left;}"], props => props.theme.headingRed);
const CartControl = external_styled_components_default.a.button.withConfig({
  displayName: "Header__CartControl",
  componentId: "sc-16jbw1h-1"
})(["@media (max-width:64em){display:none;}"]);
const StyledHeader = external_styled_components_default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-16jbw1h-2"
})([".bar{border-bottom:10px solid ", ";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;@media (max-width:30em){grid-template-columns:1fr;justify-content:center;align-items:center;}}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid ", ";}"], props => props.theme.black, props => props.theme.lightgrey);

const Header = props => Header_jsx(external_emotion_theming_["ThemeProvider"], {
  theme: theme["a" /* default */]
}, Header_jsx(StyledHeader, null, Header_jsx("div", {
  className: "bar"
}, Header_jsx(external_rebass_["Flex"], null, Header_jsx(link_default.a, {
  href: "/"
}, Header_jsx("a", null, Header_jsx(external_rebass_["Box"], {
  display: "flex",
  justifyContent: ["center", "flex-start", null, null, "flex-start"]
}, Header_jsx(external_rebass_["Image"], {
  width: [2 / 8],
  src: "https://res.cloudinary.com/americansavings/image/upload/v1579907623/bczrzvecqks3sueydzcw.png"
}))))), Header_jsx(components_Nav, null)), Header_jsx("div", {
  className: "sub-bar"
}, Header_jsx(Search_AutoComplete, null)), Header_jsx(components_Cart, null)));

/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./components/Meta.js

var Meta_jsx = external_react_default.a.createElement;


const Meta = () => Meta_jsx(head_default.a, null, Meta_jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), Meta_jsx("meta", {
  charSet: "utf-8"
}), Meta_jsx("link", {
  rel: "shortcut icon",
  href: "/static/favicon.png"
}), Meta_jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/static/nprogress.css"
}), Meta_jsx("title", null, "AHCA"));

/* harmony default export */ var components_Meta = (Meta);
// CONCATENATED MODULE: ./components/Outer.js
var Outer_jsx = external_react_default.a.createElement;


const OuterStyle = external_styled_components_default.a.div.withConfig({
  displayName: "Outer__OuterStyle",
  componentId: "sc-127463r-0"
})(["max-width:100%;margin:0 auto;padding:0;"]);

const Outer = props => Outer_jsx(OuterStyle, null, props.children);

/* harmony default export */ var components_Outer = (Outer);
// CONCATENATED MODULE: ./components/Footer.js
var Footer_jsx = external_react_default.a.createElement;





const FooterStyle = external_styled_components_default.a.footer.withConfig({
  displayName: "Footer__FooterStyle",
  componentId: "sy3cka-0"
})(["display:flex;flex-flow:row wrap;padding:30px 0px 0px 0px;.footer__nav{display:flex;flex-flow:row wrap;}.footer__nav > *{flex:1 50%;margin-right:1.25em;}.nav__ul a{color:#999;}.nav__ul--extra{column-count:2;column-gap:1.25em;}.legal{display:flex;flex-wrap:wrap;color:#999;}.legal__links{display:flex;align-items:center;}ul{list-style:none;padding-left:0;}li{line-height:2em;}.nav__item--extra{flex-grow:2;}.footer__addr{flex:1 0px;}.footer__nav{flex:2 0px;}.footer > *{flex:1 100%;}@media screen and (max-width:40.375em){.footer__addr{display:flex;}.footer__addr a{width:100%;}}@media screen and (min-width:24.375em){.legal .legal__links{margin-left:auto;}}@media screen and (min-width:40.375em){.footer__nav > *{flex:1;}.nav__item--extra{flex-grow:2;}.footer__addr{flex:1 0px;}.footer__nav{flex:2 0px;}}"]);

const Footer = props => {
  console.log(props.context);
  return Footer_jsx(external_emotion_theming_["ThemeProvider"], {
    theme: theme["a" /* default */]
  }, Footer_jsx(external_rebass_["Flex"], {
    alignItems: "start" // minHeight="100vh"
    ,
    m: "0",
    sx: {
      display: "grid",
      gridTemplateRows: "auto 1fr auto"
    }
  }, Footer_jsx(FooterStyle, null, Footer_jsx(external_rebass_["Flex"], {
    flexDirection: "row",
    flexWrap: "wrap",
    p: "30px 30px 20px 30px",
    fontSize: [1, 2],
    backgroundColor: "whites.5",
    className: "footer"
  }, Footer_jsx(external_rebass_["Box"], {
    className: "footer__addr"
  }, Footer_jsx(external_rebass_["Link"], {
    href: "/"
  }, Footer_jsx("a", null, Footer_jsx(external_rebass_["Image"], {
    width: [10 / 10, 3 / 10],
    src: "https://res.cloudinary.com/americansavings/image/upload/v1579907623/bczrzvecqks3sueydzcw.png"
  }))), Footer_jsx(external_rebass_["Box"], {
    display: "flex",
    flexWrap: "wrap"
  }, Footer_jsx(external_rebass_["Text"], {
    className: "address",
    fontSize: [0, 1, 2],
    color: "#999",
    width: 1
  }, "2133 - 5455 Wilshire Blvd, Los Angeles CA 90036"), Footer_jsx(external_rebass_["Link"], {
    variant: "nav",
    width: 1
  }, Footer_jsx("a", {
    href: "tel:18883161722"
  }, Footer_jsx(external_rebass_["Text"], {
    color: "#999"
  }, "1 (888) 316 - 1722")))), Footer_jsx("br", null)), Footer_jsx("ul", {
    className: "footer__nav"
  }, Footer_jsx("li", {
    className: "nav__item"
  }, Footer_jsx(external_rebass_["Heading"], null, "Media"), Footer_jsx("ul", {
    className: "nav__ul"
  }, Footer_jsx("li", null, Footer_jsx(external_rebass_["Link"], {
    href: "#"
  }, Footer_jsx("a", null, "Online"))), Footer_jsx("li", null, Footer_jsx(external_rebass_["Link"], {
    href: "#"
  }, Footer_jsx("a", null, "Print"))), Footer_jsx("li", null, Footer_jsx(external_rebass_["Link"], {
    href: "#"
  }, Footer_jsx("a", null, "Alternative Ads"))))), Footer_jsx("li", {
    className: "nav__item nav__item--extra"
  }, Footer_jsx(external_rebass_["Heading"], null, "Technology"), Footer_jsx("ul", {
    className: "nav__ul nav__ul--extra"
  }, Footer_jsx("li", null, Footer_jsx(external_rebass_["Link"], {
    href: "#"
  }, Footer_jsx("a", null, "Hardware Design"))), Footer_jsx("li", null, Footer_jsx(external_rebass_["Link"], {
    href: "#"
  }, Footer_jsx("a", null, "Hardware Design"))), Footer_jsx("li", null, Footer_jsx(external_rebass_["Link"], {
    href: "#"
  }, Footer_jsx("a", null, "Hardware Design"))), Footer_jsx("li", null, Footer_jsx(external_rebass_["Link"], {
    href: "#"
  }, Footer_jsx("a", null, "Hardware Design"))), Footer_jsx("li", null, Footer_jsx(external_rebass_["Link"], {
    href: "#"
  }, Footer_jsx("a", null, "Hardware Design"))), Footer_jsx("li", null, Footer_jsx(external_rebass_["Link"], {
    href: "#"
  }, Footer_jsx("a", null, "Hardware Design"))), Footer_jsx("li", null, Footer_jsx(external_rebass_["Link"], {
    href: "#"
  }, Footer_jsx("a", null, "Hardware Design"))))), Footer_jsx("li", {
    className: "nav__item"
  }, Footer_jsx(external_rebass_["Heading"], null, "Legal"), Footer_jsx("ul", {
    className: "nav__ul"
  }, Footer_jsx("li", null, Footer_jsx(external_rebass_["Link"], {
    href: "#"
  }, Footer_jsx("a", null, "Privacy Policy"))), Footer_jsx("li", null, Footer_jsx(external_rebass_["Link"], {
    href: "#"
  }, Footer_jsx("a", null, "Terms of Use"))), Footer_jsx("li", null, Footer_jsx(external_rebass_["Link"], {
    href: "#"
  }, Footer_jsx("a", null, "Site Map")))))), Footer_jsx(external_rebass_["Box"], {
    className: "legal"
  }, Footer_jsx(external_rebass_["Text"], null, "\xA9 2020 American Home Construction Authority. All rights reserved."), Footer_jsx(external_rebass_["Box"], {
    className: "legal__links"
  }, Footer_jsx(external_rebass_["Text"], null, "There is something here")))))));
};

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./components/Page.js
var Page_jsx = external_react_default.a.createElement;






const Page_theme = {
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
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em"
  },
  fonts: {
    body: "rtraleway",
    heading: "rtraleway",
    bold: "rtraleway"
  },
  ul: {
    listStyleType: "none"
  },
  text: {
    heading: {
      caps: {
        textTransform: "uppercase"
      }
    }
  },
  borders: [0, "1px solid", "2px solid", "4px solid", "8px solid", "16px solid", "32px solid"],
  radii: [0, 2, 4, 16, 9999, "100%"],
  width: [16, 32, 63, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 63, 128, 256, 512, 768, 1024, 1536],
  colors: {
    black: "#393939",
    "near-black": "#111",
    "dark-gray": "#333",
    "mid-gray": "#555",
    gray: " #777",
    silver: "#999",
    "light-silver": "#aaa",
    "moon-gray": "#ccc",
    "light-gray": "#eee",
    "near-white": "#f4f4f4",
    black: "#393939",
    grey: "#3A3A3A",
    lightgrey: "#E1E1E1",
    offWhite: "#EDEDED",
    soothingPink: "rgb(252, 240, 227)",
    headingRed: "#F36B7F",
    white: "#fff",
    transparent: "transparent",
    blacks: ["rgba(0,0,0,.0125)", "rgba(0,0,0,.025)", "rgba(0,0,0,.05)", "rgba(0,0,0,.1)", "rgba(0,0,0,.2)", "rgba(0,0,0,.3)", "rgba(0,0,0,.4)", "rgba(0,0,0,.5)", "rgba(0,0,0,.6)", "rgba(0,0,0,.7)", "rgba(0,0,0,.8)", "rgba(0,0,0,.9)"],
    whites: ["rgba(255,255,255,.0125)", "rgba(255,255,255,.025)", "rgba(255,255,255,.05)", "rgba(255,255,255,.1)", "rgba(255,255,255,.2)", "rgba(255,255,255,.3)", "rgba(255,255,255,.4)", "rgba(255,255,255,.5)", "rgba(255,255,255,.6)", "rgba(255,255,255,.7)", "rgba(255,255,255,.8)", "rgba(255,255,255,.9)"],
    "dark-red": "#e7040f",
    red: "#ff4136",
    "light-red": "#ff725c",
    orange: "#ff6300",
    gold: "#ffb700",
    yellow: "#ffd700",
    "light-yellow": "#fbf1a9",
    purple: "#5e2ca5",
    "light-purple": "#a463f2",
    "dark-pink": "#d5008f",
    "hot-pink": " #ff41b4",
    pink: "#ff80cc",
    "light-pink": "#ffa3d7",
    "dark-green": "#137752",
    green: "#19a974",
    "light-green": "#9eebcf",
    navy: "#001b44",
    "dark-blue": "#00449e",
    blue: "#357edd",
    "light-blue": "#96ccff",
    "lightest-blue": "#cdecff",
    "washed-blue": "#f6fffe",
    "washed-green": "#e8fdf5",
    "washed-yellow": "#fffceb",
    "washed-red": "#ffdfdf"
  },
  variants: {
    addToCart: {
      borderRadius: 2,
      bg: "blue",
      color: "white",
      height: [4, 6],
      width: [6, 8]
    }
  }
};
const StyledPage = external_styled_components_default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "xaaju7-0"
})(["color:", ";"], props => props.theme.black);
const Inner = external_styled_components_default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "xaaju7-1"
})(["margin:0 auto;padding:2rem 0rem 0rem 0rem;"]);
const GlobalStyle = external_styled_components_["createGlobalStyle"]`
  @font-face {
    font-family: 'rtraleway';
    src: url('/static/rtraleway-bold-webfont.woff2') format('woff2');
    font-weight: bold;
    font-style: bold;
  }
  @font-face {
    font-family: 'rtraleway';
    src: url('/static/rtraleway-regular-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'rtraleway';
    background-color: ${props => props.theme.offWhite};
  }
  a {
    text-decoration: none;
    color: ${Page_theme.black};
    font-family: 'rtraleway';
  }
  button {
    font-family: 'rtraleway';
  }
`;

class Page_Page extends external_react_["Component"] {
  render() {
    return Page_jsx(external_styled_components_["ThemeProvider"], {
      theme: Page_theme
    }, Page_jsx(StyledPage, null, Page_jsx(components_Meta, null), Page_jsx(components_Header, null), Page_jsx(Inner, null, this.props.children), Page_jsx(components_Footer, null), Page_jsx(components_Outer, null)), Page_jsx(GlobalStyle, null));
  }

}

/* harmony default export */ var components_Page = (Page_Page);
// EXTERNAL MODULE: external "next-with-apollo"
var external_next_with_apollo_ = __webpack_require__("ePNP");
var external_next_with_apollo_default = /*#__PURE__*/__webpack_require__.n(external_next_with_apollo_);

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");
var external_apollo_boost_default = /*#__PURE__*/__webpack_require__.n(external_apollo_boost_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// CONCATENATED MODULE: ./lib/withData.js





function createClient({
  headers
}) {
  return new external_apollo_boost_default.a({
    uri: false ? undefined : process.env.prodEndPoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart(_, variables, {
            cache
          }) {
            // read the cartOpen value from the cache
            const {
              cartOpen
            } = cache.readQuery({
              query: LOCAL_STATE_QUERY
            }); // Write the cart State to the opposite

            const data = {
              data: {
                cartOpen: !cartOpen
              }
            };
            cache.writeData(data);
            return data;
          }

        }
      },
      defaults: {
        cartOpen: false
      }
    }
  });
}

/* harmony default export */ var withData = (external_next_with_apollo_default()(createClient));
// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = external_react_default.a.createElement;





class _app_MyApp extends app_default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    } // this exposes the query to the user


    pageProps.query = ctx.query;
    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      apollo,
      pageProps
    } = this.props;
    return (// <Container>
      _app_jsx(external_react_apollo_["ApolloProvider"], {
        client: apollo
      }, _app_jsx(components_Page, null, _app_jsx(Component, pageProps))) // </Container>

    );
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (withData(_app_MyApp));

/***/ }),

/***/ "2FTe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "SickButton",
  componentId: "sc-8ekf3l-0"
})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;cursor:pointer;&[disabled]{opacity:0.5;cursor:not-allowed;}"]);
/* harmony default export */ __webpack_exports__["a"] = (SickButton);

/***/ }),

/***/ "2y/O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (amount) {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat("en-US", options);
  return formatter.format(amount / 100);
});

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "6P3e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* unused harmony export SIGNUP_MUTATION */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mzXK");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VUBQ");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("VliS");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;
class Signup extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "state", {
      name: "",
      password: "",
      email: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "saveToState", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
  }

  render() {
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: SIGNUP_MUTATION,
      variables: this.state,
      refetchQueries: [{
        query: _User__WEBPACK_IMPORTED_MODULE_6__[/* CURRENT_USER_QUERY */ "a"]
      }]
    }, (signup, {
      error,
      loading
    }) => {
      return __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        method: "post",
        onSubmit: async e => {
          e.preventDefault();
          const res = await signup();
          this.setState({
            name: "",
            password: "",
            email: ""
          });
        }
      }, __jsx("fieldset", {
        disabled: loading,
        "aria-busy": loading
      }, __jsx("h2", null, " Signup for an account"), __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        error: error
      }), __jsx("label", {
        htmlFor: "email"
      }, "Email", __jsx("input", {
        type: "email",
        name: "email",
        placeholder: "email",
        value: this.state.email,
        onChange: this.saveToState
      })), __jsx("label", {
        htmlFor: "name"
      }, "Name", __jsx("input", {
        type: "text",
        name: "name",
        placeholder: "name",
        value: this.state.name,
        onChange: this.saveToState
      })), __jsx("label", {
        htmlFor: "password"
      }, "Password", __jsx("input", {
        type: "password",
        name: "password",
        placeholder: "password",
        value: this.state.password,
        onChange: this.saveToState
      })), __jsx("button", {
        type: "submit"
      }, "Sign Up")));
    });
  }

}


/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9Bhh":
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;

__webpack_require__("nOHt");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "OHJZ":
/***/ (function(module, exports) {

module.exports = require("waait");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "Q4dm":
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "SDjk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signin; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mzXK");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VUBQ");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("VliS");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;
class Signin extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "state", {
      name: "",
      password: "",
      email: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "saveToState", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });
  }

  render() {
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: SIGNIN_MUTATION,
      variables: this.state,
      refetchQueries: [{
        query: _User__WEBPACK_IMPORTED_MODULE_6__[/* CURRENT_USER_QUERY */ "a"]
      }]
    }, (signin, {
      error,
      loading
    }) => {
      return __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        method: "post",
        onSubmit: async e => {
          e.preventDefault();
          const res = await signin();
          this.setState({
            name: "",
            password: "",
            email: ""
          });
        }
      }, __jsx("fieldset", {
        disabled: loading,
        "aria-busy": loading
      }, __jsx("h2", null, " Sign In"), __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        error: error
      }), __jsx("label", {
        htmlFor: "email"
      }, "Email", __jsx("input", {
        type: "email",
        name: "email",
        placeholder: "email",
        value: this.state.email,
        onChange: this.saveToState
      })), __jsx("label", {
        htmlFor: "password"
      }, "Password", __jsx("input", {
        type: "password",
        name: "password",
        placeholder: "password",
        value: this.state.password,
        onChange: this.saveToState
      })), __jsx("button", {
        type: "submit"
      }, "Sign In")));
    });
  }

}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UaIe":
/***/ (function(module, exports) {

module.exports = require("react-adopt");

/***/ }),

/***/ "VUBQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-193y08x-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => __jsx(ErrorStyles, {
      key: i
    }, __jsx("p", {
      "data-test": "graphql-error"
    }, __jsx("strong", null, "Shoot!"), error.message.replace("GraphQL error: ", ""))));
  }

  return __jsx(ErrorStyles, null, __jsx("p", {
    "data-test": "graphql-error"
  }, __jsx("strong", null, "Shoot!"), error.message.replace("GraphQL error: ", "")));
};

DisplayError.defaultProps = {
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),

/***/ "VliS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  query {
    me {
      id
      email
      name
      address
      postal
      permissions
      cart {
        id
        quantity
        promotionPrice
        item {
          id
          price
          image
          title
          description
        }
      }
    }
  }
`;

const User = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
  query: CURRENT_USER_QUERY
}), payload => props.children(payload));

/* harmony default export */ __webpack_exports__["b"] = (User);


/***/ }),

/***/ "Wa2I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = _router.default.router.pageLoader.prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    _router.default.prefetch(this.getHref());
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) { var exact, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "ePNP":
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__("UXZV");

var _Promise = __webpack_require__("eVuF");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      return  true && (_cachedData = this.sdc[pathname]) ? _Promise.resolve(_cachedData) : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as));
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (false) {} else {
            console.error(error);
          }

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return this._getData(() => Component.__NEXT_SPR ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

      if (false) {}

      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "impR":
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "mzXK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "ceoy27-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}button,input[type=\"submit\"]{margin:0 auto;width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;&::before{width:0px;}}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:\"\";display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy=\"true\"]::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], props => props.theme.red, loading);
/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "obyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export endpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:4444`;
const perPage = 4;

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "q8hb":
/***/ (function(module, exports) {

module.exports = require("@rebass/forms");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "qwZ6":
/***/ (function(module, exports) {

module.exports = require("reactjs-popup");

/***/ }),

/***/ "r0Hv":
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rpFx":
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });