"use strict";

require("chai/register-should");

var _reduce = require("./reduce");

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("#reduce", function () {
    it("reduce sum = 10", function () {
        return (0, _reduce2.default)(function (r, t) {
            return r + t;
        }, 0)([1, 2, 3, 4]).should.equal(10);
    });

    it("reduce sum = 11", function () {
        return (0, _reduce2.default)(function (r, t) {
            return r + t;
        }, 0)([1, 2, 3, 4], 1).should.equal(11);
    });
});
//# sourceMappingURL=reduce.test.js.map
