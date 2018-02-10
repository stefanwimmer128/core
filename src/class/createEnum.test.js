/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import createEnum from "./createEnum";

describe("class/createEnum", () => {
    const Color = createEnum([
        "BLACK",
        [ "RED", 1, 0, 0 ],
        [ "GREEN", 0, 1, 0 ],
        [ "BLUE", 0, 0, 1 ],
    ], function (r = 0, g = 0, b = 0) {
        this._r = r;
        this._g = g;
        this._b = b;
    }, {
        getR() {
            return this._r;
        },
        getG() {
            return this._g;
        },
        getB() {
            return this._b;
        },
    });
    
    it("test for default enum usages", () => {
        assert.strictEqual(Color.BLACK, Color.BLACK);
        assert.notStrictEqual(Color.BLACK, Color.RED);
    });
    
    it("properties available", () => {
        assert.isFunction(Color.BLACK.getR);
        assert.isFunction(Color.BLACK.getG);
        assert.isFunction(Color.BLACK.getB);
        
        assert.strictEqual(Color.RED.getR(), 1);
        assert.strictEqual(Color.RED.getG(), 0);
        assert.strictEqual(Color.RED.getB(), 0);
    });
    
    it(".values", () => {
        assert.isFunction(Color.values);
        assert.deepEqual(Color.values(), [
            Color.BLACK,
            Color.RED,
            Color.GREEN,
            Color.BLUE,
        ]);
    });
    
    it(".valueOf", () => {
        assert.isFunction(Color.valueOf);
        assert.strictEqual(Color.valueOf("BLUE"), Color.BLUE);
    });
});
