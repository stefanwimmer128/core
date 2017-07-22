(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "../array/filter", "../array/find", "../array/map", "../array/mapKey", "../array/reduce", "../array/reverse", "../boolean/invert", "flow-runtime"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("../array/filter"), require("../array/find"), require("../array/map"), require("../array/mapKey"), require("../array/reduce"), require("../array/reverse"), require("../boolean/invert"), require("flow-runtime"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.filter, global.find, global.map, global.mapKey, global.reduce, global.reverse, global.invert, global.flowRuntime);
        global.chain = mod.exports;
    }
})(this, function (exports, _filter, _find, _map, _mapKey, _reduce, _reverse, _invert, _flowRuntime) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = chain;

    var _filter2 = _interopRequireDefault(_filter);

    var _find2 = _interopRequireDefault(_find);

    var _map2 = _interopRequireDefault(_map);

    var _mapKey2 = _interopRequireDefault(_mapKey);

    var _reduce2 = _interopRequireDefault(_reduce);

    var _reverse2 = _interopRequireDefault(_reverse);

    var _invert2 = _interopRequireDefault(_invert);

    var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Action = _flowRuntime2.default.type("Action", _flowRuntime2.default.function(_flowRuntime2.default.param("value", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any())));

    var ActionCreater = _flowRuntime2.default.type("ActionCreater", _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(Action)));

    var CHAINABLE = _flowRuntime2.default.array(_flowRuntime2.default.union(_flowRuntime2.default.string(), ActionCreater)).assert([
    /* array */
    "filter", _filter2.default, "find", _find2.default, "map", _map2.default, "mapKey", _mapKey2.default, "reduce", _reduce2.default, "reverse", function () {
        return _reverse2.default;
    },

    /* boolean */
    "invert", function () {
        return _invert2.default;
    }]);

    var Chain = function () {
        function Chain(initialValue) {
            var _this = this;

            _classCallCheck(this, Chain);

            var _initialValueType = _flowRuntime2.default.any();

            _flowRuntime2.default.param("initialValue", _initialValueType).assert(initialValue);

            this.actions = [];
            this.initialValue = initialValue;

            var _loop = function _loop(i, _iType2) {
                _this[CHAINABLE[i]] = _flowRuntime2.default.annotate(function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    var _argsType = _flowRuntime2.default.array(_flowRuntime2.default.any());

                    var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain));

                    _flowRuntime2.default.rest("args", _argsType).assert(args);

                    return _returnType.assert(_this.tap(ActionCreater.assert(CHAINABLE[i + 1]).apply(undefined, args)));
                }, _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain))));
            };

            for (var _iType2 = _flowRuntime2.default.number(), i = _iType2.assert(0); i < CHAINABLE.length; i += _iType2.assert(2)) {
                _loop(i, _iType2);
            }
        }

        _createClass(Chain, [{
            key: "tap",
            value: function tap(action) {
                var _actionType = Action;

                var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain));

                _flowRuntime2.default.param("action", _actionType).assert(action);

                this.actions.push(action);

                return _returnType2.assert(this);
            }
        }, {
            key: "value",
            value: function value() {
                var _returnType3 = _flowRuntime2.default.return(_flowRuntime2.default.any());

                var value = this.initialValue;

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.actions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var action = _step.value;

                        value = action(value);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return _returnType3.assert(value);
            }
        }]);

        return Chain;
    }();

    function chain(initialValue) {
        var _initialValueType2 = _flowRuntime2.default.any();

        var _returnType4 = _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain));

        _flowRuntime2.default.param("initialValue", _initialValueType2).assert(initialValue);

        return _returnType4.assert(new Chain(initialValue));
    }

    _flowRuntime2.default.annotate(chain, _flowRuntime2.default.function(_flowRuntime2.default.param("initialValue", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain))));
});
//# sourceMappingURL=chain.js.map
