(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./reverse", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./reverse"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.reverse, global.registerShould);
        global.reverseTest = mod.exports;
    }
})(this, function (_reverse) {
    "use strict";

    var _reverse2 = _interopRequireDefault(_reverse);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe("#reverse", function () {
        it("reverse array", function () {
            return (0, _reverse2.default)([0, 1, 2, 3]).should.deep.equal([3, 2, 1, 0]);
        });
    });
});
//# sourceMappingURL=reverse.test.js.map
