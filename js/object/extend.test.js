(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./extend", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./extend"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.extend, global.registerShould);
        global.extendTest = mod.exports;
    }
})(this, function (_extend) {
    "use strict";

    var _extend2 = _interopRequireDefault(_extend);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe("#extend", function () {
        var target = {
            a: 0,
            b: null,
            c: 2
        };
        var source = {
            b: 1,
            d: 3
        };

        it("sample extend", function () {
            return (0, _extend2.default)(source)(target).should.deep.equal({
                a: 0,
                b: 1,
                c: 2,
                d: 3
            });
        });
    });
});
//# sourceMappingURL=extend.test.js.map
