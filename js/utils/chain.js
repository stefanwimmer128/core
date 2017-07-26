(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "../array/concat", "../array/filter", "../array/find", "../array/flatten", "../array/map", "../array/mapKey", "../array/reduce", "../array/reverse", "../array/shift", "../boolean/invert", "../function/processors", "../math/sum", "../object/extend", "../object/withProperty", "flow-runtime"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("../array/concat"), require("../array/filter"), require("../array/find"), require("../array/flatten"), require("../array/map"), require("../array/mapKey"), require("../array/reduce"), require("../array/reverse"), require("../array/shift"), require("../boolean/invert"), require("../function/processors"), require("../math/sum"), require("../object/extend"), require("../object/withProperty"), require("flow-runtime"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.concat, global.filter, global.find, global.flatten, global.map, global.mapKey, global.reduce, global.reverse, global.shift, global.invert, global.processors, global.sum, global.extend, global.withProperty, global.flowRuntime);
        global.chain = mod.exports;
    }
})(this, function (exports, _concat, _filter, _find, _flatten2, _map, _mapKey, _reduce, _reverse2, _shift, _invert2, _processors, _sum, _extend, _withProperty, _flowRuntime) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = chain;

    var _concat2 = _interopRequireDefault(_concat);

    var _filter2 = _interopRequireDefault(_filter);

    var _find2 = _interopRequireDefault(_find);

    var _flatten3 = _interopRequireDefault(_flatten2);

    var _map2 = _interopRequireDefault(_map);

    var _mapKey2 = _interopRequireDefault(_mapKey);

    var _reduce2 = _interopRequireDefault(_reduce);

    var _reverse3 = _interopRequireDefault(_reverse2);

    var _shift2 = _interopRequireDefault(_shift);

    var _invert3 = _interopRequireDefault(_invert2);

    var _processors2 = _interopRequireDefault(_processors);

    var _sum2 = _interopRequireDefault(_sum);

    var _extend2 = _interopRequireDefault(_extend);

    var _withProperty2 = _interopRequireDefault(_withProperty);

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

    var CHAINABLE = {
        /* array */
        concat: _concat2.default,
        filter: _filter2.default,
        find: _find2.default,
        flatten: function flatten() {
            return _flatten3.default;
        },
        map: _map2.default,
        mapKey: _mapKey2.default,
        reduce: _reduce2.default,
        reverse: function reverse() {
            return _reverse3.default;
        },
        shift: _shift2.default,

        /* boolean */
        invert: function invert() {
            return _invert3.default;
        },

        /* function */
        processors: _processors2.default,

        /* math */
        add: _flowRuntime2.default.annotate(function () {
            for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
                numbers[_key] = arguments[_key];
            }

            var _numbersType = _flowRuntime2.default.array(_flowRuntime2.default.number());

            _flowRuntime2.default.rest("numbers", _numbersType).assert(numbers);

            return _sum2.default.bind.apply(_sum2.default, [null].concat(_toConsumableArray(numbers)));
        }, _flowRuntime2.default.function(_flowRuntime2.default.rest("numbers", _flowRuntime2.default.array(_flowRuntime2.default.number())))),

        /* object */
        extend: _extend2.default,
        withProperty: _withProperty2.default
    };

    var Chain = function () {
        function Chain(initialValue) {
            _classCallCheck(this, Chain);

            var _initialValueType = _flowRuntime2.default.any();

            _flowRuntime2.default.param("initialValue", _initialValueType).assert(initialValue);

            this.actions = [];
            this.initialValue = initialValue;
        }

        _createClass(Chain, [{
            key: "tap",
            value: function tap(action) {
                var _actionType = _flowRuntime2.default.function(_flowRuntime2.default.param("value", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any()));

                var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain));

                _flowRuntime2.default.param("action", _actionType).assert(action);

                this.actions.push(action);

                return _returnType.assert(this);
            }
        }, {
            key: "value",
            value: function value() {
                var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.any());

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

                return _returnType2.assert(value);
            }
        }]);

        return Chain;
    }();

    var _loop = function _loop(chainable) {
        Chain.prototype[chainable] = _flowRuntime2.default.annotate(function () {
            var _argsType = _flowRuntime2.default.array(_flowRuntime2.default.any());

            var _returnType3 = _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain));

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            _flowRuntime2.default.rest("args", _argsType).assert(args);

            return _returnType3.assert(this.tap(CHAINABLE[chainable].apply(CHAINABLE, _toConsumableArray(args))));
        }, _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain))));
    };

    for (var chainable in CHAINABLE) {
        _loop(chainable);
    }function chain(initialValue) {
        var _initialValueType2 = _flowRuntime2.default.any();

        var _returnType4 = _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain));

        _flowRuntime2.default.param("initialValue", _initialValueType2).assert(initialValue);

        return _returnType4.assert(new Chain(initialValue));
    }

    _flowRuntime2.default.annotate(chain, _flowRuntime2.default.function(_flowRuntime2.default.param("initialValue", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain))));
});
//# sourceMappingURL=chain.js.map
