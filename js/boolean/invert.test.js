"use strict";

require("chai/register-should");

var _invert = require("./invert");

var _invert2 = _interopRequireDefault(_invert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=invert.test.js.map
