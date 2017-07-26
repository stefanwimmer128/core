(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "../utils/chain", "../array/shift", "flow-runtime"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("../utils/chain"), require("../array/shift"), require("flow-runtime"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.chain, global.shift, global.flowRuntime);
        global.withProperty = mod.exports;
    }
})(this, function (exports, _chain, _shift, _flowRuntime) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = withProperty;

    var _chain2 = _interopRequireDefault(_chain);

    var _shift2 = _interopRequireDefault(_shift);

    var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
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

    function withProperty(keys, value) {
        var _keysType = _flowRuntime2.default.union(_flowRuntime2.default.string(), _flowRuntime2.default.array(_flowRuntime2.default.union(_flowRuntime2.default.number(), _flowRuntime2.default.string())));

        var _valueType = _flowRuntime2.default.any();

        var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("obj", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.object())));

        _flowRuntime2.default.param("keys", _keysType).assert(keys);

        _flowRuntime2.default.param("value", _valueType).assert(value);

        return _returnType.assert(_flowRuntime2.default.annotate(function (obj) {
            var _objType = _flowRuntime2.default.object();

            var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.object());

            _flowRuntime2.default.param("obj", _objType).assert(obj);

            keys = _keysType.assert((0, _chain2.default)([]).concat(keys).reduce(function (r, t) {
                return (0, _chain2.default)(r).concat(typeof t === "string" ? t.split(".") : t).value();
            }, []).value());

            if (keys.length > 1) return _returnType2.assert(withProperty(keys[0], withProperty((0, _shift2.default)()(keys), value)(obj[keys[0]]))(obj));

            return _returnType2.assert(_extends(obj, _defineProperty({}, keys[0], value)));
        }, _flowRuntime2.default.function(_flowRuntime2.default.param("obj", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.object()))));
    }

    _flowRuntime2.default.annotate(withProperty, _flowRuntime2.default.function(_flowRuntime2.default.param("keys", _flowRuntime2.default.union(_flowRuntime2.default.string(), _flowRuntime2.default.array(_flowRuntime2.default.union(_flowRuntime2.default.number(), _flowRuntime2.default.string())))), _flowRuntime2.default.param("value", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("obj", _flowRuntime2.default.object()), _flowRuntime2.default.return(_flowRuntime2.default.object())))));
});
//# sourceMappingURL=withProperty.js.map
