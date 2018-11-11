/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import apply from "./apply";

describe("utils/apply", () => {
    it("apply", () => {
        const value = Symbol("apply");
        const context = {
            value,
        };
        const ret = apply(context, function (value) {
            assert.strictEqual(this, context);
            assert.strictEqual(this.value, value);
        }, value);
        assert.strictEqual(ret, context);
        assert.strictEqual(ret.value, value);
    });
});
