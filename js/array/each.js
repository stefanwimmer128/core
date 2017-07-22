(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "flow-runtime"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("flow-runtime"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.flowRuntime);
        global.each = mod.exports;
    }
})(this, function (exports, _flowRuntime) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = each;

    var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function each(each) {
        var _eachType = _flowRuntime2.default.function(_flowRuntime2.default.param("t", _flowRuntime2.default.any()), _flowRuntime2.default.param("i", _flowRuntime2.default.number()), _flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()));

        var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.void())));

        _flowRuntime2.default.param("each", _eachType).assert(each);

        return _returnType.assert(_flowRuntime2.default.annotate(function (array) {
            var _arrayType = _flowRuntime2.default.array(_flowRuntime2.default.any());

            var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.void());

            _flowRuntime2.default.param("array", _arrayType).assert(array);

            for (var _i = 0; _i < array.length; _i++) {
                each(array[_i], _i, array);
            }
        }, _flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.void()))));
    }

    _flowRuntime2.default.annotate(each, _flowRuntime2.default.function(_flowRuntime2.default.param("each", _flowRuntime2.default.function(_flowRuntime2.default.param("t", _flowRuntime2.default.any()), _flowRuntime2.default.param("i", _flowRuntime2.default.number()), _flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()))), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.void())))));
});
//# sourceMappingURL=each.js.map
