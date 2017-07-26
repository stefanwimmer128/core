/* @flow */

import "chai/register-should";

import concat from "./concat";

describe("#concat", () =>
{
    it("concat array", () =>
        concat([
            2, 3,
        ])([
            0, 1,
        ]).should.be.deep.equal([
            0, 1, 2, 3,
        ]),
    );
    
    it("concat single", () =>
        concat(3)([
            0, 1, 2,
        ]).should.be.deep.equal([
            0, 1, 2, 3,
        ]),
    );
});
