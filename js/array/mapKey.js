"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapKey;

var _map = require("./map");

var _map2 = _interopRequireDefault(_map);

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapKey(key) {
    var _keyType = _flowRuntime2.default.string();

    var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.object())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any()))));

    _flowRuntime2.default.param("key", _keyType).assert(key);

    return _returnType.assert((0, _map2.default)(_flowRuntime2.default.annotate(function (t, i, array) {
        var _tType = _flowRuntime2.default.object();

        var _iType = _flowRuntime2.default.number();

        var _arrayType = _flowRuntime2.default.array(_flowRuntime2.default.object());

        var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.any());

        _flowRuntime2.default.param("t", _tType).assert(t);

        _flowRuntime2.default.param("i", _iType).assert(i);

        _flowRuntime2.default.param("array", _arrayType).assert(array);

        return _returnType2.assert(t[key]);
    }, _flowRuntime2.default.function(_flowRuntime2.default.param("t", _flowRuntime2.default.object()), _flowRuntime2.default.param("i", _flowRuntime2.default.number()), _flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.object())), _flowRuntime2.default.return(_flowRuntime2.default.any())))));
}

_flowRuntime2.default.annotate(mapKey, _flowRuntime2.default.function(_flowRuntime2.default.param("key", _flowRuntime2.default.string()), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.object())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any()))))));
//# sourceMappingURL=mapKey.js.map
