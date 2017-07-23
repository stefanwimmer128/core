"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

exports.default = chain;

var _filter = require("../array/filter");

var _filter2 = _interopRequireDefault(_filter);

var _find = require("../array/find");

var _find2 = _interopRequireDefault(_find);

var _flatten2 = require("../array/flatten");

var _flatten3 = _interopRequireDefault(_flatten2);

var _map = require("../array/map");

var _map2 = _interopRequireDefault(_map);

var _mapKey = require("../array/mapKey");

var _mapKey2 = _interopRequireDefault(_mapKey);

var _reduce = require("../array/reduce");

var _reduce2 = _interopRequireDefault(_reduce);

var _reverse2 = require("../array/reverse");

var _reverse3 = _interopRequireDefault(_reverse2);

var _invert2 = require("../boolean/invert");

var _invert3 = _interopRequireDefault(_invert2);

var _processors = require("../function/processors");

var _processors2 = _interopRequireDefault(_processors);

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* function */


/* array */
var CHAINABLE = {
    /* array */
    "filter": _filter2.default,
    "find": _find2.default,
    "flatten": function flatten() {
        return _flatten3.default;
    },
    "map": _map2.default,
    "mapKey": _mapKey2.default,
    "reduce": _reduce2.default,
    "reverse": function reverse() {
        return _reverse3.default;
    },

    /* boolean */
    "invert": function invert() {
        return _invert3.default;
    },

    /* function */
    "processors": _processors2.default
};

/* boolean */

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

var _loop = function _loop(chainable) {
    Chain.prototype[chainable] = _flowRuntime2.default.annotate(function () {
        var _argsType = _flowRuntime2.default.array(_flowRuntime2.default.any());

        var _returnType3 = _flowRuntime2.default.return(_flowRuntime2.default.ref(Chain));

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _flowRuntime2.default.rest("args", _argsType).assert(args);

        return _returnType3.assert(this.tap(CHAINABLE[chainable].apply(CHAINABLE, (0, _toConsumableArray3.default)(args))));
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
//# sourceMappingURL=chain.js.map
