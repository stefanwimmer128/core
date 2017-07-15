"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chain = exports.invert = exports.reverse = exports.reduce = exports.mapKey = exports.map = exports.find = exports.filter = exports.VERSION = undefined;

var _filter2 = require("./array/filter");

var _filter3 = _interopRequireDefault(_filter2);

var _find2 = require("./array/find");

var _find3 = _interopRequireDefault(_find2);

var _map2 = require("./array/map");

var _map3 = _interopRequireDefault(_map2);

var _mapKey2 = require("./array/mapKey");

var _mapKey3 = _interopRequireDefault(_mapKey2);

var _reduce2 = require("./array/reduce");

var _reduce3 = _interopRequireDefault(_reduce2);

var _reverse2 = require("./array/reverse");

var _reverse3 = _interopRequireDefault(_reverse2);

var _invert2 = require("./boolean/invert");

var _invert3 = _interopRequireDefault(_invert2);

var _chain2 = require("./utils/chain");

var _chain3 = _interopRequireDefault(_chain2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VERSION = exports.VERSION = "1.0.0-alpha.0";

/* array */
exports.filter = _filter3.default;
exports.find = _find3.default;
exports.map = _map3.default;
exports.mapKey = _mapKey3.default;
exports.reduce = _reduce3.default;
exports.reverse = _reverse3.default;

/* boolean */

exports.invert = _invert3.default;

/* utils */

exports.chain = _chain3.default;
//# sourceMappingURL=core.js.map
