/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import Enum from "./Enum";

describe("class/Enum", () => {
    class Color extends Enum {
        static BLACK: Color;
        static RED: Color;
        static GREEN: Color;
        static BLUE: Color;
        
        __r__: number;
        __g__: number;
        __b__: number;
        
        constructor(name: string, r: number = 0, g: number = 0, b: number = 0) {
            super(name);
            
            this.__r__ = r;
            this.__g__ = g;
            this.__b__ = b;
        }
        
        getR(): number {
            return this.__r__;
        }
        
        getG(): number {
            return this.__g__;
        }
        
        getB(): number {
            return this.__b__;
        }
    }
    
    new Color("BLACK");
    new Color("RED", 1, 0, 0);
    new Color("GREEN", 0, 1, 0);
    new Color("BLUE", 0, 0, 1);
    
    it("test for duplicate definition", () => {
        assert.throws(() => {
            new Color("BLACK");
        }, Error, "´BLACK´ already defined on ´Color´");
    });
    
    it("test for seal", () => {
        Color.seal();
        assert.throws(() => {
            new Color("");
        }, Error, "´Color´ is sealed");
    });
    
    it("test for default enum usages", () => {
        assert.strictEqual(Color.BLACK, Color.BLACK);
        assert.notStrictEqual(Color.BLACK, Color.RED);
        
        assert.instanceOf(Color.BLACK, Color);
        assert.instanceOf(Color.BLACK, Enum);
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
