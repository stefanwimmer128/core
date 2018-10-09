/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import Stream from "./Stream";

describe("data/Stream", () => {
    const stream = new Stream().pipe(x =>
        x + 1,
    );
    
    it("stream -> 1", () => {
        assert.strictEqual(stream.value(0), 1);
    });
    
    it("stream -> 2", () => {
        assert.strictEqual(stream.pipe(x =>
            x * 2,
        ).value(0), 2);
    });
});
