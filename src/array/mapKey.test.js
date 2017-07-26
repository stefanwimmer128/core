/* @flow */

import "chai/register-should";

import mapKey from "./mapKey";

describe("#mapKey", () =>
{
    it("map to property \"id\"", () =>
        mapKey("id")([
            { id: 0, },
            { id: 1, },
            { id: 2, },
            { id: 3, },
        ]).should.deep.equal([ 0, 1, 2, 3, ]),
    );
});
