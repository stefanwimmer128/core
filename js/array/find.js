"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = find;

var _filter = require("./filter");

var _filter2 = _interopRequireDefault(_filter);

var _processors = require("../function/processors");

var _processors2 = _interopRequireDefault(_processors);

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function find(finder) {
    var _finderType = _flowRuntime2.default.function(_flowRuntime2.default.param("t", _flowRuntime2.default.any()), _flowRuntime2.default.param("i", _flowRuntime2.default.number()), _flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.boolean()));

    var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any())));

    _flowRuntime2.default.param("finder", _finderType).assert(finder);

    return _returnType.assert(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any())).assert((0, _processors2.default)(null, _flowRuntime2.default.annotate(function (value) {
        var _valueType = _flowRuntime2.default.array(_flowRuntime2.default.any());

        var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.any());

        _flowRuntime2.default.param("value", _valueType).assert(value);

        return _returnType2.assert(value[0]);
    }, _flowRuntime2.default.function(_flowRuntime2.default.param("value", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()))))((0, _filter2.default)(finder))));
}

_flowRuntime2.default.annotate(find, _flowRuntime2.default.function(_flowRuntime2.default.param("finder", _flowRuntime2.default.function(_flowRuntime2.default.param("t", _flowRuntime2.default.any()), _flowRuntime2.default.param("i", _flowRuntime2.default.number()), _flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.boolean()))), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any())))));
//# sourceMappingURL=find.js.map
