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
        global.invert = mod.exports;
    }
})(this, function (exports, _flowRuntime) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = invert;

    var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

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

            return _returnType2.assert(!boolean.apply(undefined, _toConsumableArray(args)));
        }, _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.boolean()))));else return _returnType.assert(!boolean);
    }

    _flowRuntime2.default.annotate(invert, _flowRuntime2.default.function(_flowRuntime2.default.param("boolean", _flowRuntime2.default.union(_flowRuntime2.default.boolean(), _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.boolean())))), _flowRuntime2.default.return(_flowRuntime2.default.union(_flowRuntime2.default.boolean(), _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.boolean()))))));
});
//# sourceMappingURL=invert.js.map
