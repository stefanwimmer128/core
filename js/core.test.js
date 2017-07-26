(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./core", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./core"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.core, global.registerShould);
        global.coreTest = mod.exports;
    }
})(this, function (_core) {
    "use strict";

    var core = _interopRequireWildcard(_core);

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};

            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }

            newObj.default = obj;
            return newObj;
        }
    }

    describe("core", function () {
        it("core initialized", function () {
            return core.should.be.a("object");
        });
    });
});
//# sourceMappingURL=core.test.js.map
