/* @flow */

import "chai/register-should";

import * as core from "./core";

describe("core", () =>
{
    it("core initialized", () =>
        core.should.be.a("object"),
    );
});
