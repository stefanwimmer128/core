import "chai/register-should";

import chain from "./chain";

describe("#chain", () =>
{
    it("sample chain", () =>
        chain([
            { id: 0, },
            { id: 1, },
            { id: 2, },
            { id: 3, },
        ]).mapKey("id").map(t => t + 1).reduce((r, t) => r + t, 0).value().should.equal(10),
    );
});
