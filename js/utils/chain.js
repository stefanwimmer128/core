"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = chain;

var _filter = require("../array/filter");

var _filter2 = _interopRequireDefault(_filter);

var _find = require("../array/find");

var _find2 = _interopRequireDefault(_find);

var _map = require("../array/map");

var _map2 = _interopRequireDefault(_map);

var _mapKey = require("../array/mapKey");

var _mapKey2 = _interopRequireDefault(_mapKey);

var _reduce = require("../array/reduce");

var _reduce2 = _interopRequireDefault(_reduce);

var _reverse = require("../array/reverse");

var _reverse2 = _interopRequireDefault(_reverse);

var _invert = require("../boolean/invert");

var _invert2 = _interopRequireDefault(_invert);

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* array */


/* boolean */


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

function chain(initialValue) {
    var _initialValueType = _flowRuntime2.default.any();

    var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.object());

    _flowRuntime2.default.param("initialValue", _initialValueType).assert(initialValue);

    return _returnType.assert(_flowRuntime2.default.annotate(function chain(actions) {
        var _actionsType = _flowRuntime2.default.array(Action);

        var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.object());

        _flowRuntime2.default.param("actions", _actionsType).assert(actions);

        var ret = _flowRuntime2.default.object().assert({
            tap: _flowRuntime2.default.annotate(function (action) {
                var _actionType = Action;

                var _returnType3 = _flowRuntime2.default.return(_flowRuntime2.default.object());

                _flowRuntime2.default.param("action", _actionType).assert(action);

                return _returnType3.assert(chain([].concat(_toConsumableArray(actions), [action])));
            }, _flowRuntime2.default.function(_flowRuntime2.default.param("action", Action), _flowRuntime2.default.return(_flowRuntime2.default.object()))),

            value: _flowRuntime2.default.annotate(function () {
                var _returnType4 = _flowRuntime2.default.return(_flowRuntime2.default.any());

                var value = initialValue;

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = actions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

                return _returnType4.assert(value);
            }, _flowRuntime2.default.function(_flowRuntime2.default.return(_flowRuntime2.default.any())))
        });

        var _loop = function _loop(i) {
            ret[CHAINABLE[i]] = _flowRuntime2.default.annotate(function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var _argsType = _flowRuntime2.default.array(_flowRuntime2.default.any());

                var _returnType5 = _flowRuntime2.default.return(_flowRuntime2.default.object());

                _flowRuntime2.default.rest("args", _argsType).assert(args);

                return _returnType5.assert(ret.tap(ActionCreater.assert(CHAINABLE[i + 1]).apply(undefined, args)));
            }, _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.object())));
        };

        for (var i = 0; i < CHAINABLE.length; i += 2) {
            _loop(i);
        }return _returnType2.assert(ret);
    }, _flowRuntime2.default.function(_flowRuntime2.default.param("actions", _flowRuntime2.default.array(Action)), _flowRuntime2.default.return(_flowRuntime2.default.object())))([]));
}

_flowRuntime2.default.annotate(chain, _flowRuntime2.default.function(_flowRuntime2.default.param("initialValue", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.object())));
//# sourceMappingURL=chain.js.map
