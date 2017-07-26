(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./each", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./each"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.each, global.registerShould);
        global.eachTest = mod.exports;
    }
})(this, function (_each) {
    "use strict";

    var _each2 = _interopRequireDefault(_each);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe("#each", function () {
        var test = [0, 1, 2, 3];
        var tested = [];

        (0, _each2.default)(function (t) {
            return tested.push(t);
        })(test);

        it("each element executed", function () {
            return tested.should.deep.equal(test);
        });

        tested = [];
        (0, _each2.default)(function (t, i) {
            return tested.push(i);
        })(test);

        it("right execution order", function () {
            return tested.should.deep.equal(test);
        });
    });
});
//# sourceMappingURL=each.test.js.map
