"use strict";

require("chai/register-should");

var _reverse = require("./reverse");

var _reverse2 = _interopRequireDefault(_reverse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("#reverse", function () {
    it("reverse array", function () {
        return (0, _reverse2.default)([0, 1, 2, 3]).should.deep.equal([3, 2, 1, 0]);
    });
});
//# sourceMappingURL=reverse.test.js.map
