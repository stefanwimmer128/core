/* @flow */

import "chai/register-should";

import flatten from "./flatten";

describe("#flatten", () =>
{
    it("flatten array", () =>
        flatten([
            0, 1, [ 2, 3, ], [ [ 4, 5, ], [ 6, 7, ], ],
        ]).should.deep.equal([
            0, 1, 2, 3, [ 4, 5, ], [ 6, 7, ],
        ]),
    );
});
