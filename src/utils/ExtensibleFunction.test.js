/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import ExtensibleFunction from "./ExtensibleFunction";

describe("utils/ExtensibleFunction", () => {
    it("direct function", () => {
        class Test extends ExtensibleFunction {
            constructor() {
                return super(function () {
                    return "Hello World!";
                });
            }
            
            test() {
                return this();
            }
        }
        
        assert.strictEqual(new Test()(), "Hello World!");
        assert.strictEqual(new Test().test(), "Hello World!");
    });
    
    it("function constructor", () => {
        class Test extends ExtensibleFunction {
            constructor() {
                return super("test", "return this.test(test);");
            }
            
            test() {
                return "Hello World!";
            }
        }
        
        assert.strictEqual(new Test()(), "Hello World!");
        assert.strictEqual(new Test().test(), "Hello World!");
    });
});
