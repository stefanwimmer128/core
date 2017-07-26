/* @flow */

import "chai/register-should";

import withProperty from "./withProperty";

describe("#withProperty", () =>
{
    it("array as keys", () =>
        withProperty([
            "test", 0,
        ], true)({
            test: [
                false,
            ],
        }).should.be.deep.equal({
            test: [
                true,
            ],
        }),
    ),
    
    it("string as key", () =>
        withProperty("test.0", true)({
            test: [
                false,
            ],
        }).should.be.deep.equal({
            test: [
                true,
            ],
        }),
    );
});
