/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import DataType from "./DataType";

describe("data/DataType.js", () => {
    it("static lazy getters", () => {
        assert.strictEqual(DataType.STRING, DataType.STRING);
    });
    
    it("string -> string", () => {
        assert.ok(DataType.STRING.validate(""));
    });
    
    it("string -> not string", () => {
        assert.notOk(DataType.NOT.validate("", DataType.STRING));
    });
    
    it("number -> string", () => {
        assert.notOk(DataType.STRING.validate(0));
    });
    
    it("number -> not string", () => {
        assert.ok(DataType.NOT.validate(0, DataType.STRING));
    });
    
    it("number -> number or string", () => {
        assert.ok(DataType.OR.validate(0, DataType.NUMBER, DataType.STRING));
    });
    
    it("string -> number or string", () => {
        assert.ok(DataType.OR.validate("", DataType.NUMBER, DataType.STRING));
    });
    
    it("boolean -> number or string", () => {
        assert.notOk(DataType.OR.validate(true, DataType.NUMBER, DataType.STRING));
    });
    
    it("non-empty string -> non-empty string", () => {
        assert.ok(DataType.AND.validate("string", DataType.STRING, new DataType(DataType.NOT, DataType.EMPTY)));
    });
    
    it("empty string -> non-empty string", () => {
        assert.notOk(DataType.AND.validate("", DataType.STRING, new DataType(DataType.NOT, DataType.EMPTY)));
    });
});
