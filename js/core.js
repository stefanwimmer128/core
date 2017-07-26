(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./array/concat", "./array/filter", "./array/find", "./array/flatten", "./array/map", "./array/mapKey", "./array/reduce", "./array/reverse", "./array/shift", "./boolean/invert", "./function/processors", "./object/extend", "./object/withProperty", "./utils/chain"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./array/concat"), require("./array/filter"), require("./array/find"), require("./array/flatten"), require("./array/map"), require("./array/mapKey"), require("./array/reduce"), require("./array/reverse"), require("./array/shift"), require("./boolean/invert"), require("./function/processors"), require("./object/extend"), require("./object/withProperty"), require("./utils/chain"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.concat, global.filter, global.find, global.flatten, global.map, global.mapKey, global.reduce, global.reverse, global.shift, global.invert, global.processors, global.extend, global.withProperty, global.chain);
    global.core = mod.exports;
  }
})(this, function (exports, _concat2, _filter2, _find2, _flatten2, _map2, _mapKey2, _reduce2, _reverse2, _shift2, _invert2, _processors2, _extend2, _withProperty2, _chain2) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.chain = exports.withProperty = exports.extend = exports.processors = exports.invert = exports.shift = exports.reverse = exports.reduce = exports.mapKey = exports.map = exports.flatten = exports.find = exports.filter = exports.concat = exports.VERSION = undefined;

  var _concat3 = _interopRequireDefault(_concat2);

  var _filter3 = _interopRequireDefault(_filter2);

  var _find3 = _interopRequireDefault(_find2);

  var _flatten3 = _interopRequireDefault(_flatten2);

  var _map3 = _interopRequireDefault(_map2);

  var _mapKey3 = _interopRequireDefault(_mapKey2);

  var _reduce3 = _interopRequireDefault(_reduce2);

  var _reverse3 = _interopRequireDefault(_reverse2);

  var _shift3 = _interopRequireDefault(_shift2);

  var _invert3 = _interopRequireDefault(_invert2);

  var _processors3 = _interopRequireDefault(_processors2);

  var _extend3 = _interopRequireDefault(_extend2);

  var _withProperty3 = _interopRequireDefault(_withProperty2);

  var _chain3 = _interopRequireDefault(_chain2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var VERSION = exports.VERSION = "1.0.0-rc.14";

  /* array */
  exports.concat = _concat3.default;
  exports.filter = _filter3.default;
  exports.find = _find3.default;
  exports.flatten = _flatten3.default;
  exports.map = _map3.default;
  exports.mapKey = _mapKey3.default;
  exports.reduce = _reduce3.default;
  exports.reverse = _reverse3.default;
  exports.shift = _shift3.default;
  exports.invert = _invert3.default;
  exports.processors = _processors3.default;
  exports.extend = _extend3.default;
  exports.withProperty = _withProperty3.default;
  exports.chain = _chain3.default;
});
//# sourceMappingURL=core.js.map
