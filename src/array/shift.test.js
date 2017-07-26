/* @flow */

import "chai/register-should";

import shift from "./shift";

describe("#shift", () =>
{
    it("shift 1", () =>
        shift()([ 0, 1, 2, 3, ]).should.be.deep.equal([ 1, 2, 3, ]),
    );
    
    it("shift 2", () =>
        shift(2)([ 0, 1, 2, 3, ]).should.be.deep.equal([ 2, 3, ]),
    );
});
