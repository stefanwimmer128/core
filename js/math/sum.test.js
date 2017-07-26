(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./sum", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./sum"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.sum, global.registerShould);
        global.sumTest = mod.exports;
    }
})(this, function (_sum) {
    "use strict";

    var _sum2 = _interopRequireDefault(_sum);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe("#sum", function () {
        var numbers = [Math.floor(Math.random() * 16), Math.floor(Math.random() * 16), Math.floor(Math.random() * 16)];

        it("sum 1 random", function () {
            return (0, _sum2.default)(numbers[0]).should.be.equal(numbers[0]);
        });

        it("sum 2 random", function () {
            return (0, _sum2.default)(numbers[0], numbers[1]).should.be.equal(numbers[0] + numbers[1]);
        });

        it("sum 3 random", function () {
            return (0, _sum2.default)(numbers[0], numbers[1], numbers[2]).should.be.equal(numbers[0] + numbers[1] + numbers[2]);
        });
    });
});
//# sourceMappingURL=sum.test.js.map
