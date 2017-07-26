(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./reduce", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./reduce"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.reduce, global.registerShould);
        global.reduceTest = mod.exports;
    }
})(this, function (_reduce) {
    "use strict";

    var _reduce2 = _interopRequireDefault(_reduce);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe("#reduce", function () {
        it("reduce sum = 10", function () {
            return (0, _reduce2.default)(function (r, t) {
                return r + t;
            }, 0)([1, 2, 3, 4]).should.equal(10);
        });

        it("reduce sum = 11", function () {
            return (0, _reduce2.default)(function (r, t) {
                return r + t;
            }, 0)([1, 2, 3, 4], 1).should.equal(11);
        });
    });
});
//# sourceMappingURL=reduce.test.js.map
