/* @flow */

import {
    assert,
} from "chai";
import Symbol from "core-js/library/es6/symbol";
import {
    describe,
    it,
} from "mocha";

import extend from "./extend";

describe("utils/extend", () => {
    it("extend", () => {
        const a = Symbol("a"),
            b = Symbol("b"),
            sources = [
                {
                    test0: true,
                    test1: true,
                    [a]: true,
                    [b]: true,
                },
                {
                    test0: false,
                    [a]: false,
                }
            ];
        
        assert.deepEqual(extend(...sources), {
            test0: false,
            test1: true,
            [a]: false,
            [b]: true,
        });
    });
});
