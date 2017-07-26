/* @flow */

import "chai/register-should";

import each from "./each";

describe("#each", () =>
{
    const test = [
        0, 1, 2, 3,
    ];
    let tested = [];
    
    each(t =>
        tested.push(t),
    )(test);
    
    it("each element executed", () =>
        tested.should.deep.equal(test),
    );
    
    tested = [];
    each((t, i) =>
        tested.push(i),
    )(test);
    
    it("right execution order", () =>
        tested.should.deep.equal(test),
    );
});
