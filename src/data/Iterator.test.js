/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import Iterator from "./Iterator";

describe("data/Iterator", () => {
    describe("array", () => {
        const itr = Iterator.fromArray([
            0,
            1,
        ]);
        
        it("array: next -> 0", () => {
            assert.deepEqual(itr.next(), {
                done: false,
                value: 0,
            });
        });
        
        it("array: next -> 1", () => {
            assert.deepEqual(itr.next(), {
                done: false,
                value: 1,
            });
        });
        
        it("array: next -> done", () => {
            assert.deepEqual(itr.next(), {
                done: true,
                value: undefined,
            });
        });
    });
    
    describe("map", () => {
        const map = new Map();
        map.set(0, 0);
        map.set(1, 1);
        const itr = new Iterator(map);
        
        it("map: next -> 0", () => {
            assert.deepEqual(itr.next(), {
                done: false,
                value: 0,
            });
        });
        
        it("map: next -> 1", () => {
            assert.deepEqual(itr.next(), {
                done: false,
                value: 1,
            });
        });
        
        it("map: next -> done", () => {
            assert.deepEqual(itr.next(), {
                done: true,
                value: undefined,
            });
        });
    });
});
