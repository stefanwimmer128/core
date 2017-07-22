(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "babel-runtime/helpers/toConsumableArray", "babel-runtime/core-js/get-iterator", "babel-runtime/helpers/classCallCheck", "babel-runtime/helpers/createClass", "../array/filter", "../array/find", "../array/map", "../array/mapKey", "../array/reduce", "../array/reverse", "../boolean/invert", "../function/processors", "flow-runtime"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("babel-runtime/helpers/toConsumableArray"), require("babel-runtime/core-js/get-iterator"), require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"), require("../array/filter"), require("../array/find"), require("../array/map"), require("../array/mapKey"), require("../array/reduce"), require("../array/reverse"), require("../boolean/invert"), require("../function/processors"), require("flow-runtime"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.toConsumableArray, global.getIterator, global.classCallCheck, global.createClass, global.filter, global.find, global.map, global.mapKey, global.reduce, global.reverse, global.invert, global.processors, global.flowRuntime);
        global.chain = mod.exports;
    }
})(this, function (exports, _toConsumableArray2, _getIterator2, _classCallCheck2, _createClass2, _filter, _find, _map, _mapKey, _reduce, _reverse, _invert, _processors, _flowRuntime) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = chain;

    var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

    var _getIterator3 = _interopRequireDefault(_getIterator2);

    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

    var _createClass3 = _interopRequireDefault(_createClass2);

    var _filter2 = _interopRequireDefault(_filter);

    var _find2 = _interopRequireDefault(_find);

    var _map2 = _interopRequireDefault(_map);

    var _mapKey2 = _interopRequireDefault(_mapKey);

    var _reduce2 = _interopRequireDefault(_reduce);

    var _reverse2 = _interopRequireDefault(_reverse);

    var _invert2 = _interopRequireDefault(_invert);

    var _processors2 = _interopRequireDefault(_processors);

    var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /* function */
    var Action = _flowRuntime2.default.type("Action", _flowRuntime2.default.function(_flowRuntime2.default.param("value", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any())));

    /* boolean */


    /* array */


    var ActionCreater = _flowRuntime2.default.type("ActionCreater", _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(Action)));

    var CHAINABLE = _flowRuntime2.default.array(_flowRuntime2.default.union(_flowRuntime2.default.string(), ActionCreater)).assert([
    /* array */
    "filter", _filter2.default, "find", _find2.default, "map", _map2.default, "mapKey", _mapKey2.default, "reduce", _reduce2.default, "reverse", function () {
        return _reverse2.default;
    },

    /* boolean */
    "invert", function () {
        return _invert2.default;
    },

    /* function */
    "processors", _processors2.default]);

    var Chain = function () {
        function Chain(initialValue) {
            (0, _classCallCheck3.default)(this, Chain);

            var _initialValueType = _flowRuntime2.default.any();

            _flowRuntime2.default.param("initialValue", _initialValueType).assert(initialValue);

            this.actions = [];
            this.initialValue = initialValue;
        }

        (0, _createClass3.default)(Chain, [{
            key: "tap",
            value: function tap(action) {
                var _actionType = Action;

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
                    for (var _iterator = (0, _getIterator3.default)(this.actions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

    var _loop = function _loop(i) {
        Chain.prototype[CHAINABLE[i]] = _flowRuntime2.default.annotate(function () {
            var _argsType = _flowRuntime2.default.array(_flowRuntime2.default.any());

            var _returnType3 = _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain));

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            _flowRuntime2.default.rest("args", _argsType).assert(args);

            return _returnType3.assert(this.tap(ActionCreater.assert(CHAINABLE[i + 1]).apply(undefined, (0, _toConsumableArray3.default)(args))));
        }, _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain))));
    };

    for (var i = 0; i < CHAINABLE.length; i += 2) {
        _loop(i);
    }function chain(initialValue) {
        var _initialValueType2 = _flowRuntime2.default.any();

        var _returnType4 = _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain));

        _flowRuntime2.default.param("initialValue", _initialValueType2).assert(initialValue);

        return _returnType4.assert(new Chain(initialValue));
    }

    _flowRuntime2.default.annotate(chain, _flowRuntime2.default.function(_flowRuntime2.default.param("initialValue", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain))));
});
//# sourceMappingURL=chain.js.map
