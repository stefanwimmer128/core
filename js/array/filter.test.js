"use strict";

require("chai/register-should");

var _filter = require("./filter");

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("#filter", function () {
    var test = [0, 1, 2, 3];

    it("filter by element", function () {
        return (0, _filter2.default)(function (t) {
            return t < 2;
        })(test).should.deep.equal([0, 1]);
    });

    it("filter by id", function () {
        return (0, _filter2.default)(function (t, i) {
            return i > 1;
        })(test).should.deep.equal([2, 3]);
    });
});
//# sourceMappingURL=filter.test.js.map
