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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("mfwm");


/***/ }),

/***/ "3UzX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_TO_CART_MUTATION */
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VliS");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9Bhh");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const ADD_TO_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;
const pleft = [3, 4, 5, 6];
const CREATE_GUEST_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  mutation CREATE_GUEST_MUTATION(
    $email: String
    $name: String
    $password: String
  ) {
    createGuest(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

const AddToCart = (props, {
  id
}) => __jsx(_User__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], null, ({
  data
}) => {
  const {
    id
  } = props;
  let me = data ? data.me : null;
  let guest = me === null ? true : false;
  return !guest ? __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
    mutation: ADD_TO_CART_MUTATION,
    variables: {
      id
    },
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_4__[/* CURRENT_USER_QUERY */ "a"]
    }]
  }, (addToCart, {
    loading,
    error
  }) => {
    console.log("id of item", id);
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      width: [256, 512],
      sx: {
        bg: "dark-green",
        color: "white",
        borderRadius: [2, 3],
        cursor: "pointer" // m: [3, 4]

      } // ml={pleft}
      ,
      onClick: addToCart
    }), "Add", loading && `ing`, " to Cart \uD83D\uDED2", " ");
  }) : __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
    mutation: CREATE_GUEST_MUTATION,
    variables: {
      id
    },
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_4__[/* CURRENT_USER_QUERY */ "a"]
    }]
  }, (createGuest, {
    loading,
    error
  }) => {
    return __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Button"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      sx: {
        bg: "dark-green",
        color: "white",
        borderRadius: "1"
      },
      ml: pleft,
      onClick: createGuest
    }), "Add", loading && `ing`, " to Cart \uD83D\uDED2", " ");
  });
});

/* harmony default export */ __webpack_exports__["a"] = (AddToCart);


/***/ }),

/***/ "9Bhh":
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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

/***/ "mfwm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/AddToCart.js
var AddToCart = __webpack_require__("3UzX");

// EXTERNAL MODULE: ./components/styles/PriceTag.js
var PriceTag = __webpack_require__("xtnH");

// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__("2y/O");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__("VUBQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "rebass"
var external_rebass_ = __webpack_require__("9Bhh");

// CONCATENATED MODULE: ./components/SingleItem.js

var __jsx = external_react_default.a.createElement;










const SingleItemStyles = external_styled_components_default.a.div.withConfig({
  displayName: "SingleItem__SingleItemStyles",
  componentId: "rqg3bd-0"
})(["box-shadow:", ";min-height:800px;display:flex;"], props => props.theme.bs);
const SINGLE_ITEM_QUERY = external_graphql_tag_default.a`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      description
      sale
      features
      highlights
      largeImage
      largeImage1
      largeImage2
    }
  }
`;
const pad = [3, 4];

const Divider = props => __jsx(external_rebass_["Box"], Object(esm_extends["a" /* default */])({}, props, {
  as: "hr",
  sx: {
    bg: "dark-gray",
    border: 0,
    height: 2,
    width: ["100%", "80%"],
    marginBottom: ["2", "3"]
  }
}));

const SingleItem = (props, {
  item,
  index
}) => {
  return __jsx(external_react_apollo_["Query"], {
    query: SINGLE_ITEM_QUERY,
    variables: {
      id: props.id
    }
  }, ({
    error,
    loading,
    data
  }) => {
    if (error) return __jsx(ErrorMessage["a" /* default */], {
      error: error
    });
    if (loading) return __jsx("p", null, "Loading...");
    if (!data.item) return __jsx("p", null, "No Item found for ", props.id);
    const item = data.item;
    console.log("item within return", item);
    return __jsx(SingleItemStyles, null, __jsx(external_rebass_["Flex"], {
      flexWrap: "wrap",
      justifyContent: "center"
    }, __jsx(external_rebass_["Box"], {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: ["90%", "70%"],
      justifyContent: "center"
    }, __jsx(head_default.a, null, __jsx("title", null, "AHCA | ", item.title)), __jsx(external_rebass_["Heading"], {
      fontSize: [6, 7, 8]
    }, item.title), __jsx(Divider, null), __jsx(external_rebass_["Box"], {
      width: [1, 1 / 2]
    }, __jsx(external_rebass_["Image"], {
      src: item.largeImage
    })), __jsx(external_rebass_["Box"], {
      pl: pad,
      width: [1, 1 / 2]
    }, __jsx(external_rebass_["Text"], {
      pl: [0, 3],
      fontSize: [2, 3],
      lineHeight: 1.5
    }, item.description), __jsx(external_rebass_["Box"], {
      display: "flex",
      mt: [2, 3]
    }, __jsx(external_rebass_["Box"], {
      display: "flex",
      flexDirection: "column",
      width: 1 / 2,
      alignItems: "flex-end"
    }, __jsx(external_rebass_["Text"], {
      fontSize: [3, 4],
      fontWeight: "bold"
    }, Object(formatMoney["a" /* default */])(item.price)), __jsx(external_rebass_["Text"], {
      fontSize: [1, 2],
      fontWeight: "body"
    }, "Installation included")), __jsx(external_rebass_["Box"], {
      pl: [2, 4],
      width: 1 / 2,
      display: "flex"
    }, __jsx(AddToCart["a" /* default */], {
      id: item.id
    })))), __jsx(external_rebass_["Flex"], {
      flexWrap: "wrap-reverse"
    }, __jsx(external_rebass_["Box"], {
      width: [1, 1 / 2],
      py: [3, 5]
    }, __jsx(external_rebass_["Heading"], {
      fontSize: [4, 5, 6]
    }, "Features"), __jsx("ul", null, item.features.filter((feature, i) => i <= 2).map((feature, i) => __jsx(external_rebass_["Text"], {
      pl: [0, 3],
      fontSize: [2, 3],
      lineHeight: 1.25,
      pr: [0, 3],
      mb: [2, 3]
    }, __jsx("li", null, feature))))), __jsx(external_rebass_["Box"], {
      width: [1, 1 / 2],
      py: [3, 5]
    }, __jsx(external_rebass_["Image"], {
      src: item.largeImage1
    }))), __jsx(external_rebass_["Box"], {
      width: [1, 1 / 2]
    }, __jsx(external_rebass_["Image"], {
      src: item.largeImage2
    })), __jsx(external_rebass_["Box"], {
      pl: pad,
      width: [1, 1 / 2]
    }, __jsx(external_rebass_["Heading"], {
      fontSize: [4, 5, 6]
    }, "Specifications"), __jsx("ul", null, item.highlights.filter((highlight, i) => i <= 2).map((highlight, i) => __jsx(external_rebass_["Text"], {
      pl: [0, 3],
      fontSize: [2, 3],
      lineHeight: 1.25,
      pr: [0, 3],
      mb: [2, 3]
    }, __jsx("li", null, highlight))))))));
  });
};

/* harmony default export */ var components_SingleItem = (SingleItem);

// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__("VliS");

// EXTERNAL MODULE: external "emotion-theming"
var external_emotion_theming_ = __webpack_require__("rpFx");

// EXTERNAL MODULE: ./components/theme.js
var theme = __webpack_require__("1MVt");

// CONCATENATED MODULE: ./pages/item.js
var item_jsx = external_react_default.a.createElement;








const CREATE_GUEST_MUTATION = external_graphql_tag_default.a`
  mutation CREATE_GUEST_MUTATION(
    $email: String
    $name: String
    $password: String
  ) {
    createGuest(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

const Item = (props, {
  id
}) => item_jsx(external_emotion_theming_["ThemeProvider"], {
  theme: theme["a" /* default */]
}, item_jsx(User["b" /* default */], null, ({
  data,
  loading
}) => {
  let me = data ? data.me : null;
  let guest = me === null ? true : false;
  const {
    0: guestState,
    1: setGuestState
  } = Object(external_react_["useState"])(guest);
  return !guest ? item_jsx("div", null, item_jsx(components_SingleItem, {
    id: props.query.id
  })) : loading ? item_jsx("div", null, item_jsx("h2", null, "Loading")) : item_jsx(external_react_apollo_["Mutation"], {
    mutation: CREATE_GUEST_MUTATION,
    variables: {
      id
    },
    refetchQueries: [{
      query: User["a" /* CURRENT_USER_QUERY */]
    }]
  }, (createGuest, {
    loading,
    error
  }) => {
    Object(external_react_["useEffect"])(() => {
      async function fetchData() {
        await createGuest();
      }

      !loading && guest && fetchData();
    }, []);
    setGuestState(false);
    return item_jsx(external_react_default.a.Fragment, null, item_jsx(components_SingleItem, {
      id: props.query.id
    }));
  });
}));

/* harmony default export */ var pages_item = __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "rpFx":
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xtnH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "PriceTag",
  componentId: "sc-1yk7sjf-0"
})(["background:", ";transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"], props => props.theme.colors.headingRed);
/* harmony default export */ __webpack_exports__["a"] = (PriceTag);

/***/ })

/******/ });