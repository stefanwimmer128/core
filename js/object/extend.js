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
        global.extend = mod.exports;
    }
})(this, function (exports, _flowRuntime) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = extend;

    var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function extend(source) {
        var _sourceType = _flowRuntime2.default.object();

        var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("target", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.object())));

        _flowRuntime2.default.param("source", _sourceType).assert(source);

        return _returnType.assert(_flowRuntime2.default.annotate(function (target) {
            var _targetType = _flowRuntime2.default.object();

            var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.object());

            _flowRuntime2.default.param("target", _targetType).assert(target);

            return _returnType2.assert(_extends(target, source));
        }, _flowRuntime2.default.function(_flowRuntime2.default.param("target", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.object()))));
    }

    _flowRuntime2.default.annotate(extend, _flowRuntime2.default.function(_flowRuntime2.default.param("source", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("target", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.object())))));
});
//# sourceMappingURL=extend.js.map
