"use strict";

require("chai/register-should");

var _flatten = require("./flatten");

var _flatten2 = _interopRequireDefault(_flatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("#flatten", function () {
    it("flatten array", function () {
        return (0, _flatten2.default)([0, 1, [2, 3], [[4, 5], [6, 7]]]).should.deep.equal([0, 1, 2, 3, [4, 5], [6, 7]]);
    });
});
//# sourceMappingURL=flatten.test.js.map
