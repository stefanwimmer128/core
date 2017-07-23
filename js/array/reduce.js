"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reduce;

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reduce(reducer, _start) {
    var _reducerType = _flowRuntime2.default.function(_flowRuntime2.default.param("r", _flowRuntime2.default.any()), _flowRuntime2.default.param("t", _flowRuntime2.default.any()), _flowRuntime2.default.param("i", _flowRuntime2.default.number()), _flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()));

    var _startType = _flowRuntime2.default.any();

    var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.param("start", _flowRuntime2.default.any(), true), _flowRuntime2.default.return(_flowRuntime2.default.any())));

    _flowRuntime2.default.param("reducer", _reducerType).assert(reducer);

    _flowRuntime2.default.param("_start", _startType, true).assert(_start);

    return _returnType.assert(_flowRuntime2.default.annotate(function (array) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _start;

        var _arrayType = _flowRuntime2.default.array(_flowRuntime2.default.any());

        var _startType2 = _flowRuntime2.default.any();

        var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.any());

        _flowRuntime2.default.param("array", _arrayType).assert(array);

        _flowRuntime2.default.param("start", _startType2, true).assert(start);

        var _retType = _flowRuntime2.default.any(),
            ret = _retType.assert(start);

        for (var _i = 0; _i < array.length; _i++) {
            ret = _retType.assert(reducer(ret, array[_i], _i, array));
        }return _returnType2.assert(ret);
    }, _flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.param("start", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any()))));
}

_flowRuntime2.default.annotate(reduce, _flowRuntime2.default.function(_flowRuntime2.default.param("reducer", _flowRuntime2.default.function(_flowRuntime2.default.param("r", _flowRuntime2.default.any()), _flowRuntime2.default.param("t", _flowRuntime2.default.any()), _flowRuntime2.default.param("i", _flowRuntime2.default.number()), _flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()))), _flowRuntime2.default.param("_start", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.param("start", _flowRuntime2.default.any(), true), _flowRuntime2.default.return(_flowRuntime2.default.any())))));
//# sourceMappingURL=reduce.js.map
