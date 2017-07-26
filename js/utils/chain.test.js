(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./chain", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./chain"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.chain, global.registerShould);
        global.chainTest = mod.exports;
    }
})(this, function (_chain) {
    "use strict";

    var _chain2 = _interopRequireDefault(_chain);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe("#chain", function () {
        it("sample chain", function () {
            return (0, _chain2.default)([{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]).mapKey("id").map(function (t) {
                return t + 1;
            }).reduce(function (r, t) {
                return r + t;
            }, 0).value().should.equal(10);
        });
    });
});
//# sourceMappingURL=chain.test.js.map
