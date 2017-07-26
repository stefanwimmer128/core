(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./mapKey", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./mapKey"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.mapKey, global.registerShould);
        global.mapKeyTest = mod.exports;
    }
})(this, function (_mapKey) {
    "use strict";

    var _mapKey2 = _interopRequireDefault(_mapKey);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe("#mapKey", function () {
        it("map to property \"id\"", function () {
            return (0, _mapKey2.default)("id")([{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]).should.deep.equal([0, 1, 2, 3]);
        });
    });
});
//# sourceMappingURL=mapKey.test.js.map
