/* @flow */

import "chai/register-should";

import invert from "./invert";

describe("#invert", () =>
{
    it("true -> false", () =>
        invert(true).should.be.false,
    );
    
    it("false -> true", () =>
        invert(false).should.be.true,
    );
    
    it("() => true -> false", () =>
        invert(() => true)().should.be.false,
    );
    
    it("() => false -> true", () =>
        invert(() => false)().should.be.true,
    );
});
