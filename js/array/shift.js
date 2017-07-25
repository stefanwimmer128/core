"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = shift;

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shift() {
    var shift = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var _shiftType = _flowRuntime2.default.number();

    var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any()))));

    _flowRuntime2.default.param("shift", _shiftType, true).assert(shift);

    return _returnType.assert(_flowRuntime2.default.annotate(function (array) {
        var _arrayType = _flowRuntime2.default.array(_flowRuntime2.default.any());

        var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any()));

        _flowRuntime2.default.param("array", _arrayType).assert(array);

        var ret = [];

        for (var i = shift; i < array.length; i++) {
            ret.push(array[i]);
        }return _returnType2.assert(ret);
    }, _flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any())))));
}

_flowRuntime2.default.annotate(shift, _flowRuntime2.default.function(_flowRuntime2.default.param("shift", _flowRuntime2.default.number()), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any()))))));
//# sourceMappingURL=shift.js.map
