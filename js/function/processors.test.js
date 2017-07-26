(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./processors", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./processors"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.processors, global.registerShould);
        global.processorsTest = mod.exports;
    }
})(this, function (_processors) {
    "use strict";

    var _processors2 = _interopRequireDefault(_processors);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe("#processors", function () {
        var main = function main(a, b) {
            return a + b;
        };
        var pre = function pre(args) {
            return args.map(function (t) {
                return t + 1;
            });
        };
        var post = function post(value) {
            return value + 1;
        };

        it("preprocessor only", function () {
            return (0, _processors2.default)(pre)(main)(0, 1).should.equal(3);
        });

        it("postprocessor only", function () {
            return (0, _processors2.default)(undefined, post)(main)(0, 1).should.equal(2);
        });

        it("pre- and postprocessors", function () {
            return (0, _processors2.default)(pre, post)(main)(0, 1).should.equal(4);
        });
    });
});
//# sourceMappingURL=processors.test.js.map
