(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./withProperty", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./withProperty"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.withProperty, global.registerShould);
        global.withPropertyTest = mod.exports;
    }
})(this, function (_withProperty) {
    "use strict";

    var _withProperty2 = _interopRequireDefault(_withProperty);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe("#withProperty", function () {
        it("array as keys", function () {
            return (0, _withProperty2.default)(["test", 0], true)({
                test: [false]
            }).should.be.deep.equal({
                test: [true]
            });
        }), it("string as key", function () {
            return (0, _withProperty2.default)("test.0", true)({
                test: [false]
            }).should.be.deep.equal({
                test: [true]
            });
        });
    });
});
//# sourceMappingURL=withProperty.test.js.map
