"use strict";

require("chai/register-should");

var _find = require("./find");

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("#find", function () {
    var test = [{ a: 0, b: 0 }, { a: 1, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 3 }];

    it("find first element", function () {
        return (0, _find2.default)(function (t) {
            return t.a === 1;
        })(test).should.deep.equal(test[1]);
    });
});
//# sourceMappingURL=find.test.js.map
