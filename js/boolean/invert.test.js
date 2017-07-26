(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./invert", "chai/register-should"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("./invert"), require("chai/register-should"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.invert, global.registerShould);
        global.invertTest = mod.exports;
    }
})(this, function (_invert) {
    "use strict";

    var _invert2 = _interopRequireDefault(_invert);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe("#invert", function () {
        it("true -> false", function () {
            return (0, _invert2.default)(true).should.be.false;
        });

        it("false -> true", function () {
            return (0, _invert2.default)(false).should.be.true;
        });

        it("() => true -> false", function () {
            return (0, _invert2.default)(function () {
                return true;
            })().should.be.false;
        });

        it("() => false -> true", function () {
            return (0, _invert2.default)(function () {
                return false;
            })().should.be.true;
        });
    });
});
//# sourceMappingURL=invert.test.js.map
