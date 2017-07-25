"use strict";

require("chai/register-should");

var _withProperty = require("./withProperty");

var _withProperty2 = _interopRequireDefault(_withProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=withProperty.test.js.map
