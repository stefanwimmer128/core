"use strict";

require("chai/register-should");

var _map = require("./map");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("#map", function () {
    it("add 1", function () {
        return (0, _map2.default)(function (t) {
            return t + 1;
        })([0, 1, 2, 3]).should.deep.equal([1, 2, 3, 4]);
    });

    it("map to string", function () {
        return (0, _map2.default)(function (t) {
            return t.toString();
        })([0, 1, 2, 3]).join("").should.equal("0123");
    });
});
//# sourceMappingURL=map.test.js.map
