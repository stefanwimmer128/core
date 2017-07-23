import "chai/register-should";

import extend from "./extend";

describe("#extend", () =>
{
    const target = {
        a: 0,
        b: null,
        c: 2,
    };
    const source = {
        b: 1,
        d: 3,
    };
    
    it("sample extend", () =>
        extend(source)(target).should.deep.equal({
            a: 0,
            b: 1,
            c: 2,
            d: 3,
        }),
    );
});
