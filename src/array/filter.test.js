/* @flow */

import "chai/register-should";

import filter from "./filter";

describe("#filter", () =>
{
    const test = [
        0, 1, 2, 3,
    ];
    
    it("filter by element", () =>
        filter(t => t < 2)(test).should.deep.equal([ 0, 1, ]),
    );
    
    it("filter by id", () =>
        filter((t, i) => i > 1)(test).should.deep.equal([ 2, 3, ]),
    );
});
