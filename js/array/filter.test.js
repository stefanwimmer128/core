(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./filter", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./filter"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.filter, global.registerShould);
        global.filterTest = mod.exports;
    }
})(this, function (_filter) {
    "use strict";

    var _filter2 = _interopRequireDefault(_filter);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe("#filter", function () {
        var test = [0, 1, 2, 3];

        it("filter by element", function () {
            return (0, _filter2.default)(function (t) {
                return t < 2;
            })(test).should.deep.equal([0, 1]);
        });

        it("filter by id", function () {
            return (0, _filter2.default)(function (t, i) {
                return i > 1;
            })(test).should.deep.equal([2, 3]);
        });
    });
});
//# sourceMappingURL=filter.test.js.map
