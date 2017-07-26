(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./flatten", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./flatten"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.flatten, global.registerShould);
        global.flattenTest = mod.exports;
    }
})(this, function (_flatten) {
    "use strict";

    var _flatten2 = _interopRequireDefault(_flatten);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe("#flatten", function () {
        it("flatten array", function () {
            return (0, _flatten2.default)([0, 1, [2, 3], [[4, 5], [6, 7]]]).should.deep.equal([0, 1, 2, 3, [4, 5], [6, 7]]);
        });
    });
});
//# sourceMappingURL=flatten.test.js.map
