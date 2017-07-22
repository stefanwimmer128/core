(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./array/filter", "./array/find", "./array/map", "./array/mapKey", "./array/reduce", "./array/reverse", "./boolean/invert", "./function/processors", "./utils/chain"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./array/filter"), require("./array/find"), require("./array/map"), require("./array/mapKey"), require("./array/reduce"), require("./array/reverse"), require("./boolean/invert"), require("./function/processors"), require("./utils/chain"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.filter, global.find, global.map, global.mapKey, global.reduce, global.reverse, global.invert, global.processors, global.chain);
    global.core = mod.exports;
  }
})(this, function (exports, _filter2, _find2, _map2, _mapKey2, _reduce2, _reverse2, _invert2, _processors2, _chain2) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.chain = exports.processors = exports.invert = exports.reverse = exports.reduce = exports.mapKey = exports.map = exports.find = exports.filter = exports.VERSION = undefined;

  var _filter3 = _interopRequireDefault(_filter2);

  var _find3 = _interopRequireDefault(_find2);

  var _map3 = _interopRequireDefault(_map2);

  var _mapKey3 = _interopRequireDefault(_mapKey2);

  var _reduce3 = _interopRequireDefault(_reduce2);

  var _reverse3 = _interopRequireDefault(_reverse2);

  var _invert3 = _interopRequireDefault(_invert2);

  var _processors3 = _interopRequireDefault(_processors2);

  var _chain3 = _interopRequireDefault(_chain2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var VERSION = exports.VERSION = "1.0.0-rc.4";

  /* array */
  exports.filter = _filter3.default;
  exports.find = _find3.default;
  exports.map = _map3.default;
  exports.mapKey = _mapKey3.default;
  exports.reduce = _reduce3.default;
  exports.reverse = _reverse3.default;
  exports.invert = _invert3.default;
  exports.processors = _processors3.default;
  exports.chain = _chain3.default;
});
//# sourceMappingURL=core.js.map
