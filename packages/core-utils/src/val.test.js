/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import val from "./val";

describe("utils/val", () => {
    it("val", () => {
        assert.strictEqual(val(0, x => x + 1), 1);
    });
    
    it("multi-args", () => {
        assert.strictEqual(val("a", "b", (a, b) => a + b), "ab")
    });
});
