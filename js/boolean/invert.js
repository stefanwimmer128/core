"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = invert;

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function invert(boolean) {
    var _booleanType = _flowRuntime2.default.union(_flowRuntime2.default.boolean(), _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.boolean())));

    var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.union(_flowRuntime2.default.boolean(), _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.boolean()))));

    _flowRuntime2.default.param("boolean", _booleanType).assert(boolean);

    if (typeof boolean === "function") return _returnType.assert(_flowRuntime2.default.annotate(function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _argsType = _flowRuntime2.default.array(_flowRuntime2.default.any());

        var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.boolean());

        _flowRuntime2.default.rest("args", _argsType).assert(args);

        return _returnType2.assert(!boolean.apply(undefined, (0, _toConsumableArray3.default)(args)));
    }, _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.boolean()))));else return _returnType.assert(!boolean);
}

_flowRuntime2.default.annotate(invert, _flowRuntime2.default.function(_flowRuntime2.default.param("boolean", _flowRuntime2.default.union(_flowRuntime2.default.boolean(), _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.boolean())))), _flowRuntime2.default.return(_flowRuntime2.default.union(_flowRuntime2.default.boolean(), _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.boolean()))))));
//# sourceMappingURL=invert.js.map
