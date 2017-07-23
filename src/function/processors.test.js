import "chai/register-should";

import processors from "./processors";

describe("#processors", () =>
{
    const main = (a, b) => a + b;
    const pre = args => args.map(t => t + 1);
    const post = value => value + 1;
    
    it("preprocessor only", () =>
        processors(pre)(main)(0, 1).should.equal(3),
    );
    
    it("postprocessor only", () =>
        processors(undefined, post)(main)(0, 1).should.equal(2),
    );
    
    it("pre- and postprocessors", () =>
        processors(pre, post)(main)(0, 1).should.equal(4),
    );
});
