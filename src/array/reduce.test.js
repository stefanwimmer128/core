import "chai/register-should";

import reduce from "./reduce";

describe("#reduce", () =>
{
    it("reduce sum = 10", () =>
        reduce((r, t) => r + t, 0)([ 1, 2, 3, 4, ]).should.equal(10),
    );
    
    it("reduce sum = 11", () =>
        reduce((r, t) => r + t, 0)([ 1, 2, 3, 4, ], 1).should.equal(11),
    );
});
