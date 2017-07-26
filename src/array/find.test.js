/* @flow */

import "chai/register-should";

import find from "./find";

describe("#find", () =>
{
    const test = [
        { a: 0, b: 0, },
        { a: 1, b: 1, },
        { a: 1, b: 2, },
        { a: 2, b: 3, },
    ];
    
    it("find first element", () =>
        find(t => t.a === 1)(test).should.deep.equal(test[1]),
    );
});
