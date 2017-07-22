(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "./reduce", "flow-runtime"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("./reduce"), require("flow-runtime"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.reduce, global.flowRuntime);
        global.map = mod.exports;
    }
})(this, function (exports, _reduce, _flowRuntime) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = map;

    var _reduce2 = _interopRequireDefault(_reduce);

    var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function map(mapper) {
        var _mapperType = _flowRuntime2.default.function(_flowRuntime2.default.param("t", _flowRuntime2.default.any()), _flowRuntime2.default.param("i", _flowRuntime2.default.number()), _flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()));

        var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any()))));

        _flowRuntime2.default.param("mapper", _mapperType).assert(mapper);

        return _returnType.assert((0, _reduce2.default)(_flowRuntime2.default.annotate(function (r, t, i, array) {
            var _rType = _flowRuntime2.default.array(_flowRuntime2.default.any());

            var _tType = _flowRuntime2.default.any();

            var _iType = _flowRuntime2.default.number();

            var _arrayType = _flowRuntime2.default.array(_flowRuntime2.default.any());

            var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any()));

            _flowRuntime2.default.param("r", _rType).assert(r);

            _flowRuntime2.default.param("t", _tType).assert(t);

            _flowRuntime2.default.param("i", _iType).assert(i);

            _flowRuntime2.default.param("array", _arrayType).assert(array);

            return _returnType2.assert(r.concat(mapper(t, i, array)));
        }, _flowRuntime2.default.function(_flowRuntime2.default.param("r", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.param("t", _flowRuntime2.default.any()), _flowRuntime2.default.param("i", _flowRuntime2.default.number()), _flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any())))), []));
    }

    _flowRuntime2.default.annotate(map, _flowRuntime2.default.function(_flowRuntime2.default.param("mapper", _flowRuntime2.default.function(_flowRuntime2.default.param("t", _flowRuntime2.default.any()), _flowRuntime2.default.param("i", _flowRuntime2.default.number()), _flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()))), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("array", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any()))))));
});
//# sourceMappingURL=map.js.map
