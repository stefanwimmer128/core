"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reverse;

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reverse(array) {
    var _arrayType = _flowRuntime2.default.array(_flowRuntime2.default.any());

    var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any()));

    _flowRuntime2.default.param("array", _arrayType).assert(array);

    var ret = [];

    for (var i = array.length - 1; i >= 0; i--) {
        ret.push(array[i]);
    }return _returnType.assert(ret);
}

_flowRuntime2.default.annotate(reverse, _flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any()))));
//# sourceMappingURL=reverse.js.map
