/* @flow */

import {
    assert,
} from "chai";
import {
    isFunction,
    isSymbol,
} from "lodash";
import {
    describe,
    it,
} from "mocha";

import createPrivate from "./createPrivate";

describe("class/createPrivate", () => {
    const $private = createPrivate("private"),
        object = {};
    
    it("$private is function", () => {
        assert.ok(isFunction($private));
    });
    
    it("$private.symbol is symbol", () => {
        assert.ok(isSymbol($private.symbol));
    });
    
    it("object has $private", () => {
        $private(object, "_");
        
        assert.ok($private.symbol in object);
        assert.strictEqual($private(object), "_");
    });
    
    it("$private in object is deleted", () => {
        delete object[$private.symbol];
        
        assert.notOk($private.symbol in object);
    });
});
