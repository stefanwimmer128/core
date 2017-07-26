(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./shift", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./shift"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.shift, global.registerShould);
        global.shiftTest = mod.exports;
    }
})(this, function (_shift) {
    "use strict";

    var _shift2 = _interopRequireDefault(_shift);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe("#shift", function () {
        it("shift 1", function () {
            return (0, _shift2.default)()([0, 1, 2, 3]).should.be.deep.equal([1, 2, 3]);
        });

        it("shift 2", function () {
            return (0, _shift2.default)(2)([0, 1, 2, 3]).should.be.deep.equal([2, 3]);
        });
    });
});
//# sourceMappingURL=shift.test.js.map
