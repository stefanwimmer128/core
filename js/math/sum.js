"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sum;

var _reduce = require("../array/reduce");

var _reduce2 = _interopRequireDefault(_reduce);

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sum() {
    var _numbersType = _flowRuntime2.default.array(_flowRuntime2.default.number());

    var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.number());

    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    _flowRuntime2.default.rest("numbers", _numbersType).assert(numbers);

    return _returnType.assert((0, _reduce2.default)(function (r, t) {
        return r + t;
    }, 0)(numbers));
}

_flowRuntime2.default.annotate(sum, _flowRuntime2.default.function(_flowRuntime2.default.rest("numbers", _flowRuntime2.default.array(_flowRuntime2.default.number())), _flowRuntime2.default.return(_flowRuntime2.default.number())));
//# sourceMappingURL=sum.js.map
