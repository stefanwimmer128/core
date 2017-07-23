"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = processors;

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function processors() {
    var preProcessor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var postProcessor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var _preProcessorType = _flowRuntime2.default.function(_flowRuntime2.default.param("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any())));

    var _postProcessorType = _flowRuntime2.default.function(_flowRuntime2.default.param("value", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any()));

    var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("fn", _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()))), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any())))));

    _flowRuntime2.default.param("preProcessor", _preProcessorType).assert(preProcessor);

    _flowRuntime2.default.param("postProcessor", _postProcessorType).assert(postProcessor);

    if (preProcessor === null) preProcessor = _preProcessorType.assert(function (args) {
        return args;
    });

    if (postProcessor === null) postProcessor = _postProcessorType.assert(function (value) {
        return value;
    });

    return _returnType.assert(_flowRuntime2.default.annotate(function (fn) {
        var _fnType = _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()));

        var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any())));

        _flowRuntime2.default.param("fn", _fnType).assert(fn);

        return _returnType2.assert(_flowRuntime2.default.annotate(function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _argsType = _flowRuntime2.default.array(_flowRuntime2.default.any());

            var _returnType3 = _flowRuntime2.default.return(_flowRuntime2.default.any());

            _flowRuntime2.default.rest("args", _argsType).assert(args);

            return _returnType3.assert(postProcessor(fn.apply(undefined, (0, _toConsumableArray3.default)(preProcessor(args)))));
        }, _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()))));
    }, _flowRuntime2.default.function(_flowRuntime2.default.param("fn", _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()))), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any()))))));
}

_flowRuntime2.default.annotate(processors, _flowRuntime2.default.function(_flowRuntime2.default.param("preProcessor", _flowRuntime2.default.function(_flowRuntime2.default.param("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any())))), _flowRuntime2.default.param("postProcessor", _flowRuntime2.default.function(_flowRuntime2.default.param("value", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any()))), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("fn", _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()))), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any())))))));
//# sourceMappingURL=processors.js.map
