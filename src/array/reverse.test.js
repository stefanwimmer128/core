/* @flow */

import "chai/register-should";

import reverse from "./reverse";

describe("#reverse", () =>
{
    it("reverse array", () =>
        reverse([ 0, 1, 2, 3, ]).should.deep.equal([ 3, 2, 1, 0, ]),
    );
});
