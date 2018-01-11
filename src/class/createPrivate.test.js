/* @flow */

import {
    assert,
} from "chai";
import {
    has,
    isFunction,
    isSymbol,
} from "lodash";
import {
    describe,
    it,
} from "mocha";

import createPrivate from "./createPrivate";

describe("class/createPrivate.js", () => {
    const $private = createPrivate("private"),
        object = {};
    
    it("$private is function", () => {
        assert.ok(isFunction($private));
    });
    
    it("$private.ref is function", () => {
        assert.ok(isFunction($private.ref));
    });
    
    it("$private.symbol is symbol", () => {
        assert.ok(isSymbol($private.symbol));
    });
    
    it("object.$private is equal to $private", () => {
        $private.ref(object);
        
        assert.strictEqual(object.$private, $private);
    });
    
    it("object.custom is equal to $private", () => {
        $private.ref(object, "custom");
        
        assert.strictEqual(object.custom, $private);
    });
    
    it("object.custom[0] is equal to $private", () => {
        object.custom = [];
        
        $private.ref(object, [
            "custom",
            0,
        ]);
        
        assert.strictEqual(object.custom[0], $private);
    });
    
    it("object has $private", () => {
        $private(object, "_");
        
        assert.ok(has(object, $private.symbol));
        assert.strictEqual($private(object), "_");
    });
    
    it("$private in object is deleted", () => {
        $private(object, null, true);
        
        assert.notOk(has(object, $private.symbol));
        assert.strictEqual($private(object), void 0);
    });
    
    it("$private uses default", () => {
        assert.ok(createPrivate("test", true)(null));
    });
});
