/* @flow */

import "chai/register-should";

import sum from "./sum";

describe("#sum", () =>
{
    const numbers = [
        Math.floor(Math.random() * 16),
        Math.floor(Math.random() * 16),
        Math.floor(Math.random() * 16),
    ];
    
    it("sum 1 random", () =>
        sum(numbers[0]).should.be.equal(numbers[0]),
    );
    
    it("sum 2 random", () =>
        sum(numbers[0], numbers[1]).should.be.equal(numbers[0] + numbers[1]),
    );
    
    it("sum 3 random", () =>
        sum(numbers[0], numbers[1], numbers[2]).should.be.equal(numbers[0] + numbers[1] + numbers[2]),
    );
});
