"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

exports.default = withProperty;

var _chain = require("../utils/chain");

var _chain2 = _interopRequireDefault(_chain);

var _shift = require("../array/shift");

var _shift2 = _interopRequireDefault(_shift);

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withProperty(keys, value) {
    var _keysType = _flowRuntime2.default.union(_flowRuntime2.default.string(), _flowRuntime2.default.array(_flowRuntime2.default.union(_flowRuntime2.default.number(), _flowRuntime2.default.string())));

    var _valueType = _flowRuntime2.default.any();

    var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("obj", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.object())));

    _flowRuntime2.default.param("keys", _keysType).assert(keys);

    _flowRuntime2.default.param("value", _valueType).assert(value);

    return _returnType.assert(_flowRuntime2.default.annotate(function (obj) {
        var _objType = _flowRuntime2.default.object();

        var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.object());

        _flowRuntime2.default.param("obj", _objType).assert(obj);

        keys = _keysType.assert((0, _chain2.default)([]).concat(keys).reduce(function (r, t) {
            return (0, _chain2.default)(r).concat(typeof t === "string" ? t.split(".") : t).value();
        }, []).value());

        if (keys.length > 1) return _returnType2.assert(withProperty(keys[0], withProperty((0, _shift2.default)()(keys), value)(obj[keys[0]]))(obj));

        return _returnType2.assert((0, _assign2.default)(obj, (0, _defineProperty3.default)({}, keys[0], value)));
    }, _flowRuntime2.default.function(_flowRuntime2.default.param("obj", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.object()))));
}

_flowRuntime2.default.annotate(withProperty, _flowRuntime2.default.function(_flowRuntime2.default.param("keys", _flowRuntime2.default.union(_flowRuntime2.default.string(), _flowRuntime2.default.array(_flowRuntime2.default.union(_flowRuntime2.default.number(), _flowRuntime2.default.string())))), _flowRuntime2.default.param("value", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("obj", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.object())))));
//# sourceMappingURL=withProperty.js.map
