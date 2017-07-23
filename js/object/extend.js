"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

exports.default = extend;

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extend(source) {
    var _sourceType = _flowRuntime2.default.object();

    var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("target", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.object())));

    _flowRuntime2.default.param("source", _sourceType).assert(source);

    return _returnType.assert(_flowRuntime2.default.annotate(function (target) {
        var _targetType = _flowRuntime2.default.object();

        var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.object());

        _flowRuntime2.default.param("target", _targetType).assert(target);

        return _returnType2.assert((0, _assign2.default)(target, source));
    }, _flowRuntime2.default.function(_flowRuntime2.default.param("target", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.object()))));
}

_flowRuntime2.default.annotate(extend, _flowRuntime2.default.function(_flowRuntime2.default.param("source", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("target", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.object())))));
//# sourceMappingURL=extend.js.map
