"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = concat;

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function concat(concat) {
    var _concatType = _flowRuntime2.default.any();

    var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any()))));

    _flowRuntime2.default.param("concat", _concatType).assert(concat);

    return _returnType.assert(_flowRuntime2.default.annotate(function (array) {
        var _arrayType = _flowRuntime2.default.array(_flowRuntime2.default.any());

        var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any()));

        _flowRuntime2.default.param("array", _arrayType).assert(array);

        return _returnType2.assert(array.concat(concat));
    }, _flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any())))));
}
_flowRuntime2.default.annotate(concat, _flowRuntime2.default.function(_flowRuntime2.default.param("concat", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any()))))));

;
//# sourceMappingURL=concat.js.map
