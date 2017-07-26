"use strict";

require("chai/register-should");

var _concat = require("./concat");

var _concat2 = _interopRequireDefault(_concat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("#concat", function () {
    it("concat array", function () {
        return (0, _concat2.default)([2, 3])([0, 1]).should.be.deep.equal([0, 1, 2, 3]);
    });

    it("concat single", function () {
        return (0, _concat2.default)(3)([0, 1, 2]).should.be.deep.equal([0, 1, 2, 3]);
    });
});
//# sourceMappingURL=concat.test.js.map