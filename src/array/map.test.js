import "chai/register-should";

import map from "./map";

describe("#map", () =>
{
    it("add 1", () =>
        map(t => t + 1)([ 0, 1, 2, 3, ]).should.deep.equal([ 1, 2, 3, 4, ]),
    );
    
    it("map to string", () =>
        map(t => t.toString())([ 0, 1, 2, 3, ]).join("").should.equal("0123"),
    );
});
