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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "/wfr":
/***/ (function(module, exports) {

module.exports = require("@turf/bbox");

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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5MUz":
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":8,\"name\":\"Basic\",\"metadata\":{\"mapbox:autocomposite\":true},\"sources\":{\"mapbox\":{\"url\":\"mapbox://mapbox.mapbox-streets-v7\",\"type\":\"vector\"}},\"sprite\":\"mapbox://sprites/mapbox/basic-v8\",\"glyphs\":\"mapbox://fonts/mapbox/{fontstack}/{range}.pbf\",\"layers\":[{\"id\":\"background\",\"type\":\"background\",\"paint\":{\"background-color\":\"#dedede\"},\"interactive\":true},{\"id\":\"landuse_overlay_national_park\",\"type\":\"fill\",\"source\":\"mapbox\",\"source-layer\":\"landuse_overlay\",\"filter\":[\"==\",\"class\",\"national_park\"],\"paint\":{\"fill-color\":\"#d2edae\",\"fill-opacity\":0.75},\"interactive\":true},{\"id\":\"landuse_park\",\"type\":\"fill\",\"source\":\"mapbox\",\"source-layer\":\"landuse\",\"filter\":[\"==\",\"class\",\"park\"],\"paint\":{\"fill-color\":\"#d2edae\"},\"interactive\":true},{\"id\":\"waterway\",\"type\":\"line\",\"source\":\"mapbox\",\"source-layer\":\"waterway\",\"filter\":[\"all\",[\"==\",\"$type\",\"LineString\"],[\"in\",\"class\",\"river\",\"canal\"]],\"paint\":{\"line-color\":\"#a0cfdf\",\"line-width\":{\"base\":1.4,\"stops\":[[8,0.5],[20,15]]}},\"interactive\":true},{\"id\":\"water\",\"type\":\"fill\",\"source\":\"mapbox\",\"source-layer\":\"water\",\"paint\":{\"fill-color\":\"#a0cfdf\"},\"interactive\":true},{\"id\":\"building\",\"type\":\"fill\",\"source\":\"mapbox\",\"source-layer\":\"building\",\"paint\":{\"fill-color\":\"#d6d6d6\"},\"interactive\":true},{\"interactive\":true,\"layout\":{\"line-cap\":\"butt\",\"line-join\":\"miter\"},\"filter\":[\"all\",[\"==\",\"$type\",\"LineString\"],[\"all\",[\"in\",\"class\",\"motorway_link\",\"street\",\"street_limited\",\"service\",\"track\",\"pedestrian\",\"path\",\"link\"],[\"==\",\"structure\",\"tunnel\"]]],\"type\":\"line\",\"source\":\"mapbox\",\"id\":\"tunnel_minor\",\"paint\":{\"line-color\":\"#efefef\",\"line-width\":{\"base\":1.55,\"stops\":[[4,0.25],[20,30]]},\"line-dasharray\":[0.36,0.18]},\"source-layer\":\"road\"},{\"interactive\":true,\"layout\":{\"line-cap\":\"butt\",\"line-join\":\"miter\"},\"filter\":[\"all\",[\"==\",\"$type\",\"LineString\"],[\"all\",[\"in\",\"class\",\"motorway\",\"primary\",\"secondary\",\"tertiary\",\"trunk\"],[\"==\",\"structure\",\"tunnel\"]]],\"type\":\"line\",\"source\":\"mapbox\",\"id\":\"tunnel_major\",\"paint\":{\"line-color\":\"#fff\",\"line-width\":{\"base\":1.4,\"stops\":[[6,0.5],[20,30]]},\"line-dasharray\":[0.28,0.14]},\"source-layer\":\"road\"},{\"interactive\":true,\"layout\":{\"line-cap\":\"round\",\"line-join\":\"round\"},\"filter\":[\"all\",[\"==\",\"$type\",\"LineString\"],[\"all\",[\"in\",\"class\",\"motorway_link\",\"street\",\"street_limited\",\"service\",\"track\",\"pedestrian\",\"path\",\"link\"],[\"in\",\"structure\",\"none\",\"ford\"]]],\"type\":\"line\",\"source\":\"mapbox\",\"id\":\"road_minor\",\"paint\":{\"line-color\":\"#efefef\",\"line-width\":{\"base\":1.55,\"stops\":[[4,0.25],[20,30]]}},\"source-layer\":\"road\"},{\"interactive\":true,\"layout\":{\"line-cap\":\"round\",\"line-join\":\"round\"},\"filter\":[\"all\",[\"==\",\"$type\",\"LineString\"],[\"all\",[\"in\",\"class\",\"motorway\",\"primary\",\"secondary\",\"tertiary\",\"trunk\"],[\"in\",\"structure\",\"none\",\"ford\"]]],\"type\":\"line\",\"source\":\"mapbox\",\"id\":\"road_major\",\"paint\":{\"line-color\":\"#fff\",\"line-width\":{\"base\":1.4,\"stops\":[[6,0.5],[20,30]]}},\"source-layer\":\"road\"},{\"interactive\":true,\"layout\":{\"line-cap\":\"butt\",\"line-join\":\"miter\"},\"filter\":[\"all\",[\"==\",\"$type\",\"LineString\"],[\"all\",[\"in\",\"class\",\"motorway_link\",\"street\",\"street_limited\",\"service\",\"track\",\"pedestrian\",\"path\",\"link\"],[\"==\",\"structure\",\"bridge\"]]],\"type\":\"line\",\"source\":\"mapbox\",\"id\":\"bridge_minor case\",\"paint\":{\"line-color\":\"#dedede\",\"line-width\":{\"base\":1.6,\"stops\":[[12,0.5],[20,10]]},\"line-gap-width\":{\"base\":1.55,\"stops\":[[4,0.25],[20,30]]}},\"source-layer\":\"road\"},{\"interactive\":true,\"layout\":{\"line-cap\":\"butt\",\"line-join\":\"miter\"},\"filter\":[\"all\",[\"==\",\"$type\",\"LineString\"],[\"all\",[\"in\",\"class\",\"motorway\",\"primary\",\"secondary\",\"tertiary\",\"trunk\"],[\"==\",\"structure\",\"bridge\"]]],\"type\":\"line\",\"source\":\"mapbox\",\"id\":\"bridge_major case\",\"paint\":{\"line-color\":\"#dedede\",\"line-width\":{\"base\":1.6,\"stops\":[[12,0.5],[20,10]]},\"line-gap-width\":{\"base\":1.55,\"stops\":[[4,0.25],[20,30]]}},\"source-layer\":\"road\"},{\"interactive\":true,\"layout\":{\"line-cap\":\"round\",\"line-join\":\"round\"},\"filter\":[\"all\",[\"==\",\"$type\",\"LineString\"],[\"all\",[\"in\",\"class\",\"motorway_link\",\"street\",\"street_limited\",\"service\",\"track\",\"pedestrian\",\"path\",\"link\"],[\"==\",\"structure\",\"bridge\"]]],\"type\":\"line\",\"source\":\"mapbox\",\"id\":\"bridge_minor\",\"paint\":{\"line-color\":\"#efefef\",\"line-width\":{\"base\":1.55,\"stops\":[[4,0.25],[20,30]]}},\"source-layer\":\"road\"},{\"interactive\":true,\"layout\":{\"line-cap\":\"round\",\"line-join\":\"round\"},\"filter\":[\"all\",[\"==\",\"$type\",\"LineString\"],[\"all\",[\"in\",\"class\",\"motorway\",\"primary\",\"secondary\",\"tertiary\",\"trunk\"],[\"==\",\"structure\",\"bridge\"]]],\"type\":\"line\",\"source\":\"mapbox\",\"id\":\"bridge_major\",\"paint\":{\"line-color\":\"#fff\",\"line-width\":{\"base\":1.4,\"stops\":[[6,0.5],[20,30]]}},\"source-layer\":\"road\"},{\"interactive\":true,\"layout\":{\"line-cap\":\"round\",\"line-join\":\"round\"},\"filter\":[\"all\",[\"==\",\"$type\",\"LineString\"],[\"all\",[\"<=\",\"admin_level\",2],[\"==\",\"maritime\",0]]],\"type\":\"line\",\"source\":\"mapbox\",\"id\":\"admin_country\",\"paint\":{\"line-color\":\"#8b8a8a\",\"line-width\":{\"base\":1.3,\"stops\":[[3,0.5],[22,15]]}},\"source-layer\":\"admin\"},{\"interactive\":true,\"minzoom\":5,\"layout\":{\"icon-image\":\"{maki}-11\",\"text-offset\":[0,0.5],\"text-field\":\"{name_en}\",\"text-font\":[\"Open Sans Semibold\",\"Arial Unicode MS Bold\"],\"text-max-width\":8,\"text-anchor\":\"top\",\"text-size\":11,\"icon-size\":1},\"filter\":[\"all\",[\"==\",\"$type\",\"Point\"],[\"all\",[\"==\",\"scalerank\",1],[\"==\",\"localrank\",1]]],\"type\":\"symbol\",\"source\":\"mapbox\",\"id\":\"poi_label\",\"paint\":{\"text-color\":\"#666\",\"text-halo-width\":1,\"text-halo-color\":\"rgba(255,255,255,0.75)\",\"text-halo-blur\":1},\"source-layer\":\"poi_label\"},{\"interactive\":true,\"layout\":{\"symbol-placement\":\"line\",\"text-field\":\"{name_en}\",\"text-font\":[\"Open Sans Semibold\",\"Arial Unicode MS Bold\"],\"text-transform\":\"uppercase\",\"text-letter-spacing\":0.1,\"text-size\":{\"base\":1.4,\"stops\":[[10,8],[20,14]]}},\"filter\":[\"all\",[\"==\",\"$type\",\"LineString\"],[\"in\",\"class\",\"motorway\",\"primary\",\"secondary\",\"tertiary\",\"trunk\"]],\"type\":\"symbol\",\"source\":\"mapbox\",\"id\":\"road_major_label\",\"paint\":{\"text-color\":\"#666\",\"text-halo-color\":\"rgba(255,255,255,0.75)\",\"text-halo-width\":2},\"source-layer\":\"road_label\"},{\"interactive\":true,\"minzoom\":8,\"layout\":{\"text-field\":\"{name_en}\",\"text-font\":[\"Open Sans Semibold\",\"Arial Unicode MS Bold\"],\"text-max-width\":6,\"text-size\":{\"stops\":[[6,12],[12,16]]}},\"filter\":[\"all\",[\"==\",\"$type\",\"Point\"],[\"in\",\"type\",\"town\",\"village\",\"hamlet\",\"suburb\",\"neighbourhood\",\"island\"]],\"type\":\"symbol\",\"source\":\"mapbox\",\"id\":\"place_label_other\",\"paint\":{\"text-color\":\"#666\",\"text-halo-color\":\"rgba(255,255,255,0.75)\",\"text-halo-width\":1,\"text-halo-blur\":1},\"source-layer\":\"place_label\"},{\"interactive\":true,\"layout\":{\"text-field\":\"{name_en}\",\"text-font\":[\"Open Sans Bold\",\"Arial Unicode MS Bold\"],\"text-max-width\":10,\"text-size\":{\"stops\":[[3,12],[8,16]]}},\"maxzoom\":16,\"filter\":[\"all\",[\"==\",\"$type\",\"Point\"],[\"==\",\"type\",\"city\"]],\"type\":\"symbol\",\"source\":\"mapbox\",\"id\":\"place_label_city\",\"paint\":{\"text-color\":\"#666\",\"text-halo-color\":\"rgba(255,255,255,0.75)\",\"text-halo-width\":1,\"text-halo-blur\":1},\"source-layer\":\"place_label\"},{\"interactive\":true,\"layout\":{\"text-field\":\"{name_en}\",\"text-font\":[\"Open Sans Regular\",\"Arial Unicode MS Regular\"],\"text-max-width\":10,\"text-size\":{\"stops\":[[3,14],[8,22]]}},\"maxzoom\":12,\"filter\":[\"==\",\"$type\",\"Point\"],\"type\":\"symbol\",\"source\":\"mapbox\",\"id\":\"country_label\",\"paint\":{\"text-color\":\"#666\",\"text-halo-color\":\"rgba(255,255,255,0.75)\",\"text-halo-width\":1,\"text-halo-blur\":1},\"source-layer\":\"country_label\"}]}");

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

/***/ "9Bhh":
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "B7+D":
/***/ (function(module, exports) {



/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

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

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "emotion-theming"
var external_emotion_theming_ = __webpack_require__("rpFx");

// EXTERNAL MODULE: ./components/theme.js
var theme = __webpack_require__("1MVt");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "react-map-gl"
var external_react_map_gl_ = __webpack_require__("fdHT");
var external_react_map_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_map_gl_);

// EXTERNAL MODULE: external "viewport-mercator-project"
var external_viewport_mercator_project_ = __webpack_require__("x3Z2");
var external_viewport_mercator_project_default = /*#__PURE__*/__webpack_require__.n(external_viewport_mercator_project_);

// EXTERNAL MODULE: external "@turf/bbox"
var bbox_ = __webpack_require__("/wfr");
var bbox_default = /*#__PURE__*/__webpack_require__.n(bbox_);

// CONCATENATED MODULE: ./components/ControlPanel.js
var __jsx = external_react_default.a.createElement;


const defaultContainer = ({
  children
}) => __jsx("div", {
  className: "control-panel"
}, children);

class ControlPanel_ControlPanel extends external_react_["PureComponent"] {
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    return __jsx(Container, null);
  }

}
// EXTERNAL MODULE: ./components/styles/map-style-basic-v8.json
var map_style_basic_v8 = __webpack_require__("5MUz");

// EXTERNAL MODULE: ./components/data/sf.json
var sf = __webpack_require__("nT0A");

// CONCATENATED MODULE: ./components/styles/MapStyles.js








function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }


 // Make a copy of the map style

const mapStyle = _objectSpread({}, map_style_basic_v8, {
  sources: _objectSpread({}, map_style_basic_v8.sources),
  layers: map_style_basic_v8.layers.slice()
});

mapStyle.sources["sf-neighborhoods"] = {
  type: "geojson",
  data: sf
};
mapStyle.layers.push({
  id: "sf-neighborhoods-fill",
  source: "sf-neighborhoods",
  type: "fill",
  paint: {
    "fill-outline-color": "#0040c8",
    "fill-color": "#fff",
    "fill-opacity": 0
  }
}, {
  id: "sf-neighborhoods-outline",
  source: "sf-neighborhoods",
  type: "line",
  paint: {
    "line-width": 2,
    "line-color": "#0080ef"
  }
});
/* harmony default export */ var MapStyles = (mapStyle);
// EXTERNAL MODULE: external "rebass"
var external_rebass_ = __webpack_require__("9Bhh");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js
var parse_float = __webpack_require__("Wa2I");
var parse_float_default = /*#__PURE__*/__webpack_require__.n(parse_float);

// EXTERNAL MODULE: external "waait"
var external_waait_ = __webpack_require__("OHJZ");
var external_waait_default = /*#__PURE__*/__webpack_require__.n(external_waait_);

// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__("VliS");

// EXTERNAL MODULE: external "@rebass/forms"
var forms_ = __webpack_require__("q8hb");

// CONCATENATED MODULE: ./components/LocationCard.js








var LocationCard_jsx = external_react_default.a.createElement;

function LocationCard_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function LocationCard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LocationCard_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { LocationCard_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }








const UPDATE_PHONE_LOCATION = external_graphql_tag_default.a`
  mutation UPDATE_PHONE_LOCATION(
    $name: String
    $location: String
    $phone: String
    $email: String
  ) {
    updatePhoneLocation(
      name: $name
      location: $location
      phone: $phone
      email: $email
    ) {
      id
    }
  }
`;

class LocationCard_LocationCard extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      name: "",
      location: "",
      phone: ""
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
    });

    Object(defineProperty["a" /* default */])(this, "handleUpdateLocation", () => {
      var event = new Event("input", {
        bubbles: true
      });
      this.myinput.dispatchEvent(event);
    });

    Object(defineProperty["a" /* default */])(this, "handleChangeLocation", async () => {
      await external_waait_default()(300);
      this.props.client.mutate({
        mutation: UPDATE_PHONE_LOCATION,
        variables: this.state
      });
      console.log(this.state.location);
      console.log("handleChangeLocation called");
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.county !== prevProps.county && this.props.county !== "Select Your Location on the Map!") {
      this.setState(prevState => LocationCard_objectSpread({}, prevState, {
        location: this.props.county
      }));
      console.log(this.state.location);
      this.handleChangeLocation();
      console.log(this.state.location);
    }
  }

  render() {
    const maround = [1, 3];
    const pleft = [0, 1, 2, 3];
    const wconst = [1, 1 / 4]; // const [county] = this.props;

    return LocationCard_jsx(external_react_default.a.Fragment, null, LocationCard_jsx(external_react_apollo_["Query"], {
      query: User["a" /* CURRENT_USER_QUERY */]
    }, ({
      data,
      loading
    }) => {
      return LocationCard_jsx(external_react_apollo_["Mutation"], {
        mutation: UPDATE_PHONE_LOCATION,
        variables: this.state
      }, (updatePhoneLocation, {
        loading,
        error
      }) => {
        return LocationCard_jsx("div", null, LocationCard_jsx(external_rebass_["Box"], {
          as: "form",
          onSubmit: async e => {
            e.preventDefault();
            const res = await updatePhoneLocation();
          },
          pl: pleft,
          py: 3,
          width: 1
        }, LocationCard_jsx(external_rebass_["Heading"], {
          pcolor: "near-black",
          fontSize: [4, 5, 6]
        }, "Are we in your neighboorhood?"), LocationCard_jsx(external_rebass_["Flex"], {
          flexWrap: "wrap"
        }, LocationCard_jsx(external_rebass_["Box"], {
          width: wconst,
          mx: maround,
          pl: pleft
        }, LocationCard_jsx(forms_["Label"], {
          htmlFor: "name"
        }, "Name"), LocationCard_jsx(forms_["Input"], {
          id: "name",
          name: "name",
          type: "text",
          placeholder: "Name",
          value: this.state.name,
          onChange: async e => {
            this.handleChange(e);
            await external_waait_default()(3000);
            const res = await updatePhoneLocation();
            {
              error && alert(error);
            }
          }
        })), LocationCard_jsx(external_rebass_["Box"], {
          width: wconst,
          mx: maround
        }, LocationCard_jsx(forms_["Label"], {
          htmlFor: "name"
        }, "Phone"), LocationCard_jsx(forms_["Input"], {
          id: "phone",
          name: "phone",
          type: "text",
          placeholder: "Phone",
          value: this.state.phone,
          onChange: async e => {
            this.handleChange(e);
            await external_waait_default()(3000);
            const res = await updatePhoneLocation();
          }
        })), LocationCard_jsx(external_rebass_["Box"], {
          width: wconst,
          mx: maround
        }, LocationCard_jsx(forms_["Label"], {
          htmlFor: "location"
        }, "Location"), this.state.location !== "" ? LocationCard_jsx(external_rebass_["Heading"], {
          fontSize: [3, 4, 5],
          color: "near-black"
        }, this.props.county) : LocationCard_jsx(external_rebass_["Heading"], {
          fontSize: [3, 4, 3],
          color: "near-black"
        }, this.props.county))), LocationCard_jsx(external_rebass_["Flex"], {
          mx: -2,
          flexWrap: "wrap"
        }, LocationCard_jsx(external_rebass_["Box"], {
          p: 2,
          ml: "[3, 4, 5, 6]"
        }, LocationCard_jsx(external_rebass_["Button"], {
          type: "submit",
          bg: "dark-green"
        }, "Submit")))));
      });
    }));
  }

}

/* harmony default export */ var components_LocationCard = (Object(external_react_apollo_["withApollo"])(LocationCard_LocationCard));
// CONCATENATED MODULE: ./components/Map.js








var Map_jsx = external_react_default.a.createElement;

function Map_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Map_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Map_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { Map_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }









 // import MAP_STYLE from 'https://api.mapbox.com/styles/v1/mapbox/light-v9.html?title=false&access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg#7.75/33.997/-116.72'


const TOKEN = process.env.MAP_PASS; // Set your mapbox token here

const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  margin: 10
};
const Map_UPDATE_PHONE_LOCATION = external_graphql_tag_default.a`
  mutation UPDATE_PHONE_LOCATION(
    $name: String
    $location: String
    $phone: String
    $email: String
  ) {
    updatePhoneLocation(
      name: $name
      location: $location
      phone: $phone
      email: $email
    ) {
      id
    }
  }
`;
class Map_Map extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Object(defineProperty["a" /* default */])(this, "_updateViewport", viewport => {
      this.setState({
        viewport
      });
    });

    Object(defineProperty["a" /* default */])(this, "_onClick", event => {
      let countyName = "";
      let clickInfo = null;
      let county = event.features[0];
      let feature = event.features[0];

      if (county) {
        clickInfo = {
          lngLat: event.lngLat,
          county: county.properties
        };
        countyName = clickInfo.county.name;
      }

      if (feature) {
        // calculate the bounding box of the feature
        const [minLng, minLat, maxLng, maxLat] = bbox_default()(feature); // construct a viewport instance from the current state

        const viewport = new external_viewport_mercator_project_default.a(this.state.viewport);
        const {
          longitude,
          latitude,
          zoom
        } = viewport.fitBounds([[minLng, minLat], [maxLng, maxLat]], {
          padding: 40
        });
        console.log(zoom);
        this.setState({
          county: countyName,
          clickInfo,
          viewport: Map_objectSpread({}, this.state.viewport, {
            longitude,
            latitude,
            zoom,
            transitionInterpolator: new external_react_map_gl_["LinearInterpolator"]({
              around: [event.offsetCenter.x, event.offsetCenter.y]
            }),
            transitionDuration: 1000
          })
        });
      }
    });

    this.state = {
      county: "Select Your Location on the Map!",
      viewport: {
        latitude: 34.0537,
        longitude: -118.243,
        zoom: 7,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null,
      clickInfo: null
    };
    this._map = external_react_default.a.createRef();
  }

  render() {
    const {
      viewport
    } = this.state;
    const {
      clickInfo
    } = this.state;
    const {
      county
    } = this.state;
    let minZoom = 6;
    return Map_jsx(external_react_apollo_["Mutation"], {
      mutation: Map_UPDATE_PHONE_LOCATION,
      variables: this.state
    }, (updatePhoneLocation, {
      loading,
      error
    }) => {
      return Map_jsx(external_rebass_["Flex"], {
        flexWrap: "wrap"
      }, Map_jsx(external_rebass_["Box"], {
        width: [1, 1, 1 / 2],
        minHeight: "300px",
        minWidth: "300px"
      }, Map_jsx(external_react_map_gl_default.a, Object(esm_extends["a" /* default */])({
        ref: this._map,
        mapStyle: MapStyles,
        interactiveLayerIds: ["sf-neighborhoods-fill"]
      }, viewport, {
        width: "100%",
        height: "100%",
        minZoom: minZoom,
        minHeight: "1vh",
        minWidth: "1vh",
        onClick: this._onClick,
        county: county // countyInfo={}
        ,
        onViewportChange: this._updateViewport,
        mapboxApiAccessToken: TOKEN,
        onTransitionEnd: async () => {
          console.log("onchange called");
          const res = await updatePhoneLocation();
          console.log(res);
        }
      }), Map_jsx(ControlPanel_ControlPanel, {
        containerComponent: this.props.containerComponent
      }), Map_jsx(external_react_map_gl_["GeolocateControl"], {
        style: geolocateStyle,
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }))), Map_jsx(external_rebass_["Box"], {
        px: 3,
        width: [1, 1, 1 / 2]
      }, Map_jsx(components_LocationCard, {
        county: county
      })));
    });
  }

}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/FancyButtonStyles.js

const FancyButtonStyles = external_styled_components_default.a.div.withConfig({
  displayName: "FancyButtonStyles",
  componentId: "sc-2ttjf4-0"
})(["height:auto;padding:0 0 10vh 0;overflow:hidden;color:black;font-size:22px;font-weight:bold;text-align:center;-webkit-font-smoothing:antialiased;display:flex;align-items:center;justify-content:center;.fancy-button{position:center;display:block;cursor:pointer;perspective:1800px;}.fancy-flipper{position:absolute;top:0;right:0;bottom:0;left:0;transform-style:preserve-3d;transform:rotateX(-90deg);transition:transform 0.3s ease;}.fancy-front,.fancy-back{position:absolute;top:0;right:0;bottom:0;left:0;backface-visibility:hidden;svg{display:block;}}&:hover{.fancy-flipper{transform:rotateX(0deg);}}&:active{.fancy-flipper{transform:rotateX(0deg) scale(0.95);transition:transform 0.05s ease;}}.button-text{letter-spacing:0.01em;font-family:Futura,\"Helvetica Neue\",Helvetica,sans-serif;}"]);
/* harmony default export */ var styles_FancyButtonStyles = (FancyButtonStyles);
// CONCATENATED MODULE: ./components/FancyButton.js
var FancyButton_jsx = external_react_default.a.createElement;



class FancyButton_FancyButton extends external_react_default.a.Component {
  render() {
    // Mask id and styling
    // need unique id's for multiple buttons
    const maskId = "mask_1";
    const maskStyle = "#fancy-masked-element_" + maskId + " { mask: url(#" + maskId + "); -webkit-mask: url(#" + maskId + ")}";
    const buttonStyle = {
      width: this.props.width,
      height: this.props.height
    };
    const fancyFrontStyle = {
      transform: "rotateX(0deg) translateZ(" + this.props.height / 2 + "px )"
    };
    const fancyBackStyle = {
      transform: "rotateX(90deg) translateZ( " + this.props.height / 2 + "px )"
    }; // SVG attributes

    const textTransform = "matrix(1 0 0 1 " + this.props.width / 2 + " " + this.props.height / 1.6 + ")";
    const viewBox = "0 0 " + this.props.width + " " + this.props.height;
    return FancyButton_jsx(styles_FancyButtonStyles, null, FancyButton_jsx("div", {
      className: "fancy-button",
      style: buttonStyle,
      ref: "fancyButton"
    }, FancyButton_jsx("div", {
      className: "fancy-flipper"
    }, FancyButton_jsx("div", {
      className: "fancy-front",
      style: fancyFrontStyle
    }, FancyButton_jsx("svg", {
      height: this.props.height,
      width: this.props.width,
      viewBox: viewBox
    }, FancyButton_jsx("defs", null, FancyButton_jsx("mask", {
      id: maskId
    }, FancyButton_jsx("rect", {
      width: "100%",
      height: "100%",
      fill: "#FFFFFF"
    }), FancyButton_jsx("text", {
      className: "mask-text button-text",
      fill: "#000000",
      transform: textTransform,
      fontFamily: "'intro_regular'",
      fontSize: this.props.fontSize,
      width: "100%",
      textAnchor: "middle",
      letterSpacing: "1"
    }, this.props.backButtonText))), FancyButton_jsx("style", null, maskStyle), FancyButton_jsx("rect", {
      id: "fancy-masked-element_" + maskId,
      fill: this.props.color,
      width: "100%",
      height: "100%"
    }))), FancyButton_jsx("div", {
      className: "fancy-back",
      style: fancyBackStyle
    }, FancyButton_jsx("svg", {
      height: this.props.height,
      width: this.props.width,
      viewBox: viewBox
    }, FancyButton_jsx("rect", {
      stroke: this.props.color,
      strokeWidth: this.props.borderWidth,
      fill: "transparent",
      width: "100%",
      height: "100%"
    }), FancyButton_jsx("text", {
      className: "button-text",
      transform: textTransform,
      fill: this.props.color,
      fontFamily: "'intro_regular'",
      fontSize: this.props.fontSize,
      textAnchor: "middle",
      letterSpacing: "1"
    }, this.props.frontButtonText))))));
  }

}

FancyButton_FancyButton.defaultProps = {
  color: "#FFFFFF",
  width: 500,
  height: 100,
  fontSize: 40,
  borderWidth: 15,
  frontButtonText: "FRONT",
  backButtonText: "1-(800)-555-3333"
};
/* harmony default export */ var components_FancyButton = (FancyButton_FancyButton);
// CONCATENATED MODULE: ./components/QuadFeature.js

var QuadFeature_jsx = external_react_default.a.createElement;




const QuadFeatureStyle = external_styled_components_default.a.div.withConfig({
  displayName: "QuadFeature__QuadFeatureStyle",
  componentId: "gf9ejz-0"
})(["min-height:300px;width:100%;display:flex;justify-content:center;"]);
const responsiveWidth = [1, 1 / 2];
const featureFontSize = [3, 4, 5];
const textFontSize = [1, 2, 3];
const bcolor = "lightGray";
function QuadFeature(props) {
  return QuadFeature_jsx(QuadFeatureStyle, null, QuadFeature_jsx(external_rebass_["Flex"], {
    py: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "auto",
    width: [1, 3 / 4]
  }, QuadFeature_jsx(external_rebass_["Heading"], {
    width: 1,
    fontSize: [4, 5, 7],
    py: 2,
    textAlign: "center",
    sx: {
      textTransform: "uppercase"
    }
  }, "Experience + Value"), QuadFeature_jsx(external_rebass_["Flex"], {
    mx: 2,
    pt: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    sx: {
      // borderWidth: "1px",
      // borderStyle: "solid",
      // // borderColor: "tomato",
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: "moonGray"
    }
  }, QuadFeature_jsx(external_rebass_["Box"], Object(esm_extends["a" /* default */])({}, props, {
    width: responsiveWidth,
    px: 2,
    mx: 2,
    sx: {
      borderRightWidth: "1px",
      borderRightStyle: "solid",
      borderRightColor: "moonGray"
    }
  }), QuadFeature_jsx(external_rebass_["Flex"], {
    justifyContent: "center",
    alignItems: "baseline"
  }, QuadFeature_jsx(external_rebass_["Image"], {
    alignSelf: "flex-start",
    mr: 3,
    src: "https://res.cloudinary.com/americansavings/image/upload/v1577393743/o0cswr3rrjkwxkzeuzpj.svg"
  }), QuadFeature_jsx(external_rebass_["Flex"], {
    flexDirection: "column",
    width: 3 / 4
  }, QuadFeature_jsx(external_rebass_["Heading"], {
    fontSize: featureFontSize,
    textAlign: "left",
    sx: {
      textTransform: "uppercase"
    }
  }, "Cost Efficient"), QuadFeature_jsx(external_rebass_["Text"], {
    p: 1,
    textAlign: "left",
    fontSize: textFontSize
  }, "Up to 31% more cost efficient than convectional electric heaters.")))), QuadFeature_jsx(external_rebass_["Box"], Object(esm_extends["a" /* default */])({}, props, {
    width: responsiveWidth,
    px: 2,
    mx: 2
  }), QuadFeature_jsx(external_rebass_["Flex"], {
    justifyContent: "center",
    alignItems: "baseline"
  }, QuadFeature_jsx(external_rebass_["Image"], {
    alignSelf: "flex-start",
    mr: 3,
    src: "https://res.cloudinary.com/americansavings/image/upload/v1577393743/tulgknjewchulh9sksvq.svg"
  }), QuadFeature_jsx(external_rebass_["Flex"], {
    flexDirection: "column",
    width: 3 / 4
  }, QuadFeature_jsx(external_rebass_["Heading"], {
    fontSize: featureFontSize,
    textAlign: "left",
    sx: {
      textTransform: "uppercase"
    }
  }, "Feature 2"), QuadFeature_jsx(external_rebass_["Text"], {
    p: 1,
    textAlign: "left",
    fontSize: textFontSize
  }, "Up to 31% more cost efficient than convectional electric heaters."))))), QuadFeature_jsx(external_rebass_["Flex"], {
    mx: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch"
  }, QuadFeature_jsx(external_rebass_["Box"], Object(esm_extends["a" /* default */])({}, props, {
    width: responsiveWidth,
    px: 2,
    mx: 2,
    sx: {
      borderRightWidth: "1px",
      borderRightStyle: "solid",
      borderRightColor: "moonGray"
    }
  }), QuadFeature_jsx(external_rebass_["Flex"], {
    pt: 3,
    justifyContent: "center",
    alignItems: "baseline"
  }, QuadFeature_jsx(external_rebass_["Image"], {
    alignSelf: "flex-start",
    mr: 3,
    src: "https://res.cloudinary.com/americansavings/image/upload/v1577393743/y3utmf5gklbc9lhl29mf.svg"
  }), QuadFeature_jsx(external_rebass_["Flex"], {
    flexDirection: "column",
    width: 3 / 4
  }, QuadFeature_jsx(external_rebass_["Heading"], {
    fontSize: featureFontSize,
    textAlign: "left",
    sx: {
      textTransform: "uppercase"
    }
  }, "Feature 3"), QuadFeature_jsx(external_rebass_["Text"], {
    p: 1,
    textAlign: "left",
    fontSize: textFontSize
  }, "Up to 31% more cost efficient than convectional electric heaters.")))), QuadFeature_jsx(external_rebass_["Box"], Object(esm_extends["a" /* default */])({}, props, {
    width: responsiveWidth,
    px: 2,
    mx: 2
  }), QuadFeature_jsx(external_rebass_["Flex"], {
    pt: 3,
    justifyContent: "center",
    alignItems: "baseline"
  }, QuadFeature_jsx(external_rebass_["Image"], {
    alignSelf: "flex-start",
    mr: 3,
    src: "https://res.cloudinary.com/americansavings/image/upload/v1577393743/snryqnflef7iyac5osoo.svg"
  }), QuadFeature_jsx(external_rebass_["Flex"], {
    flexDirection: "column",
    width: 3 / 4
  }, QuadFeature_jsx(external_rebass_["Heading"], {
    fontSize: featureFontSize,
    textAlign: "left",
    sx: {
      textTransform: "uppercase"
    }
  }, "Feature 4"), QuadFeature_jsx(external_rebass_["Text"], {
    p: 1,
    textAlign: "left",
    fontSize: textFontSize
  }, "Up to 31% more cost efficient than convectional electric heaters.")))))));
}
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// CONCATENATED MODULE: ./components/Raise.js
var Raise_jsx = external_react_default.a.createElement;



const Raise = props => Raise_jsx(Fade_default.a, {
  bottom: true
}, props.children);

/* harmony default export */ var components_Raise = (Raise);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/Lead.js
var Lead_jsx = external_react_default.a.createElement;






const Lead_pleft = [3, 4, 5, 6];
const Lead = props => {
  return Lead_jsx(external_rebass_["Flex"], {
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  }, Lead_jsx(external_rebass_["Box"], {
    width: [1, 1 / 2],
    py: 3
  }, Lead_jsx(external_rebass_["Heading"], {
    color: "near-black",
    fontSize: [4, 4, 5, 5, 7],
    pl: Lead_pleft
  }, "Get"), Lead_jsx(components_Raise, {
    distance: "50%"
  }, Lead_jsx(external_rebass_["Heading"], {
    pl: Lead_pleft,
    fontSize: [5, 5, 6, 6, 8] //   fontFamily="rtRaleway"
    ,
    color: "near-black"
  }, "A Better Home")), Lead_jsx(external_rebass_["Text"], {
    fontSize: [1, 2, 2, 3, 3, 4],
    pl: Lead_pleft,
    fontWeight: "bold"
  }, "Professionally installed equipment to make every day better."), Lead_jsx(external_rebass_["Text"], {
    fontSize: [1, 2, 2, 3, 3, 4],
    pl: Lead_pleft
  }, Lead_jsx("ul", null, Lead_jsx("li", null, "Purchase online"), Lead_jsx("li", null, "Finance"))), Lead_jsx(external_rebass_["Button"], {
    ml: Lead_pleft,
    bg: "dark-green",
    color: "white"
  }, Lead_jsx(link_default.a, {
    href: "/shop"
  }, Lead_jsx("a", null, Lead_jsx(external_rebass_["Text"], {
    fontWeight: "bold",
    color: "white"
  }, "Shop Now"))))), Lead_jsx(external_rebass_["Box"] //   display="flex"
  , {
    width: [1, 1 / 2],
    my: [4, 5],
    alignItems: "center",
    justifyContent: "center",
    py: 3
  }, Lead_jsx(external_rebass_["Image"], {
    src: "https://res.cloudinary.com/americansavings/image/upload/v1579906765/dn0hzuf8nmcdill75bzx.svg"
  })));
};
// CONCATENATED MODULE: ./components/Hero.js
var Hero_jsx = external_react_default.a.createElement;








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

const Hero = (props, {
  id
}) => Hero_jsx(User["b" /* default */], null, ({
  data,
  loading
}) => {
  let me = data ? data.me : null;
  let guest = me === null ? true : false;
  const {
    0: guestState,
    1: setGuestState
  } = Object(external_react_["useState"])(guest);
  return !guest ? Hero_jsx(external_react_default.a.Fragment, null, Hero_jsx(Lead, null), Hero_jsx(Map_Map, null), Hero_jsx(QuadFeature, null)) : loading ? Hero_jsx(external_react_default.a.Fragment, null, Hero_jsx(Lead, null), Hero_jsx(Map_Map, null), Hero_jsx(QuadFeature, null)) : Hero_jsx(external_react_apollo_["Mutation"], {
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
    return Hero_jsx(external_react_default.a.Fragment, null, Hero_jsx(external_react_default.a.Fragment, null, Hero_jsx(Lead, null), Hero_jsx(Map_Map, null), Hero_jsx(QuadFeature, null)));
  });
});

/* harmony default export */ var components_Hero = (Hero);
// EXTERNAL MODULE: ./components/ProductCard.js
var ProductCard = __webpack_require__("B7+D");

// CONCATENATED MODULE: ./components/ItemsFrontPage.js

var ItemsFrontPage_jsx = external_react_default.a.createElement;





const ItemsFrontPage_pleft = [3, 4, 5];
const ptop = [3, 4, 5];

const Divider = props => ItemsFrontPage_jsx(external_rebass_["Box"], Object(esm_extends["a" /* default */])({}, props, {
  as: "hr",
  sx: {
    bg: "dark-gray",
    border: 0,
    height: 2
  }
}));

const ItemsFrontPage = props => {
  const {
    item
  } = props; // const limitedFeatures =

  const {
    index
  } = props;
  console.log("categories", item.categories);
  return (index + 3) % 2 === 0 ? ItemsFrontPage_jsx(external_rebass_["Flex"], {
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  }, ItemsFrontPage_jsx(external_rebass_["Box"], {
    width: [1, 1 / 2],
    pt: ptop,
    pr: ItemsFrontPage_pleft
  }, ItemsFrontPage_jsx(external_rebass_["Heading"], {
    color: "near-black",
    fontSize: [4, 6],
    pl: ItemsFrontPage_pleft
  }, item.categories), ItemsFrontPage_jsx(components_Raise, {
    distance: "50%"
  }, ItemsFrontPage_jsx(external_rebass_["Heading"], {
    pl: ItemsFrontPage_pleft,
    fontSize: [5, 7],
    color: "near-black"
  }, item.title)), ItemsFrontPage_jsx(external_rebass_["Text"], {
    fontSize: [1, 2],
    pl: ItemsFrontPage_pleft,
    fontWeight: "bold"
  }, item.description), ItemsFrontPage_jsx(external_rebass_["Text"], {
    fontSize: [1, 2],
    pl: ItemsFrontPage_pleft
  }, ItemsFrontPage_jsx("ul", null, item.features.filter((feature, i) => i <= 1).map((feature, i) => ItemsFrontPage_jsx("li", null, feature)))), ItemsFrontPage_jsx(external_rebass_["Button"], {
    ml: ItemsFrontPage_pleft,
    bg: "dark-green",
    color: "white"
  }, ItemsFrontPage_jsx(link_default.a, {
    href: {
      pathname: "/item",
      query: {
        id: item.id
      }
    }
  }, ItemsFrontPage_jsx("a", null, ItemsFrontPage_jsx(external_rebass_["Text"], {
    fontWeight: "bold",
    color: "white"
  }, "Shop Now"))))), ItemsFrontPage_jsx(external_rebass_["Box"], {
    width: [1, 1 / 2] // my={[4, 5]}
    ,
    alignItems: "center",
    justifyContent: "center",
    pt: ptop,
    pl: [0, 4, 5]
  }, ItemsFrontPage_jsx(external_rebass_["Image"], {
    src: item.image
  }))) : ItemsFrontPage_jsx(external_rebass_["Flex"], {
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap-reverse"
  }, ItemsFrontPage_jsx(external_rebass_["Box"], {
    pl: [0, 4, 5],
    width: [1, 1 / 2] // my={[4, 5]}
    ,
    alignItems: "center",
    justifyContent: "center",
    pt: ptop
  }, ItemsFrontPage_jsx(external_rebass_["Image"], {
    src: item.image
  })), ItemsFrontPage_jsx(external_rebass_["Box"], {
    width: [1, 1 / 2],
    maxWidth: "900px",
    pt: ptop,
    alignItems: "flex-start",
    pr: ItemsFrontPage_pleft,
    pl: ItemsFrontPage_pleft
  }, ItemsFrontPage_jsx(external_rebass_["Heading"], {
    color: "near-black",
    fontSize: [4, 6]
  }, item.categories), ItemsFrontPage_jsx(components_Raise, {
    distance: "50%"
  }, ItemsFrontPage_jsx(external_rebass_["Heading"], {
    fontSize: [5, 7],
    color: "near-black"
  }, item.title)), ItemsFrontPage_jsx(external_rebass_["Text"], {
    fontSize: [1, 2],
    fontWeight: "bold"
  }, item.description), ItemsFrontPage_jsx(external_rebass_["Text"], {
    fontSize: [1, 2]
  }, ItemsFrontPage_jsx("ul", null, item.features.filter((feature, i) => i <= 1).map((feature, i) => ItemsFrontPage_jsx("li", null, feature)))), ItemsFrontPage_jsx(external_rebass_["Button"], {
    bg: "dark-green",
    color: "white"
  }, ItemsFrontPage_jsx(link_default.a, {
    href: {
      pathname: "/item",
      query: {
        id: item.id
      }
    }
  }, ItemsFrontPage_jsx("a", null, ItemsFrontPage_jsx(external_rebass_["Text"], {
    fontWeight: "bold",
    color: "white"
  }, "Shop Now"))))));
};

/* harmony default export */ var components_ItemsFrontPage = (ItemsFrontPage);
// CONCATENATED MODULE: ./components/ProductsFeature.js
var ProductsFeature_jsx = external_react_default.a.createElement;



 // import FrontPageItem from "./FrontPageItem";




const ALL_ITEMS_QUERY = external_graphql_tag_default.a`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = 3) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      categories
      features
      highlights
      sale
      price
      description
      image
      largeImage
    }
  }
`;
const Center = external_styled_components_default.a.div.withConfig({
  displayName: "ProductsFeature__Center",
  componentId: "q55n4p-0"
})(["max-width:", ";margin:0 auto;"], props => props.theme.maxWidth);
class ProductsFeature_ProductsFeature extends external_react_["Component"] {
  render() {
    return ProductsFeature_jsx(external_react_apollo_["Query"], {
      query: ALL_ITEMS_QUERY,
      variables: {// skip: this.props.page * perPage - perPage
        // first: perPage
      }
    }, ({
      data,
      error,
      loading
    }) => {
      if (loading) return ProductsFeature_jsx("p", null, "Loading...");
      if (error) return ProductsFeature_jsx("p", null, "Error: ", error.message);
      return ProductsFeature_jsx(external_rebass_["Flex"], {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }, data.items.map((item, index) => ProductsFeature_jsx(components_ItemsFrontPage, {
        key: item.id,
        item: item,
        index: index
      })));
    });
  }

}

// CONCATENATED MODULE: ./components/Home.js
var Home_jsx = external_react_default.a.createElement;






const Home = props => Home_jsx(external_emotion_theming_["ThemeProvider"], {
  theme: theme["a" /* default */]
}, Home_jsx(components_Hero, null), Home_jsx(ProductsFeature_ProductsFeature, null));

/* harmony default export */ var components_Home = (Home);
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;
// import Banner from "../components/Banner";



const pages_index = props => {
  return pages_jsx(components_Home, null, props.children);
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_index);

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

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

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

/***/ "fdHT":
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

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

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

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

/***/ "nT0A":
/***/ (function(module) {


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "x3Z2":
/***/ (function(module, exports) {

module.exports = require("viewport-mercator-project");

/***/ })

/******/ });