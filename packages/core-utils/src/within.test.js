/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import within from "./within";

describe("utils/within", () => {
    it("within", () => {
        const value = Symbol("within");
        const context = {
            value,
        };
        const ret = within(context, function (value) {
            assert.strictEqual(this, context);
            assert.strictEqual(this.value, value);
            return this.value;
        }, value);
        assert.strictEqual(ret, value);
    });
});
