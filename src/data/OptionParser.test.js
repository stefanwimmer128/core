/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import DataType from "./DataType";
import OptionParser from "./OptionParser";

describe("data/OptionParser.js", () => {
    it("sting -> string", () => {
        const opt = new OptionParser(DataType.STRING);
        assert.ok(opt.check(opt.parse("")));
    });
    
    it("number -> string", () => {
        const opt = new OptionParser(DataType.STRING);
        assert.notOk(opt.check(opt.parse(0)));
    });
    
    it("null -> string", () => {
        const opt = new OptionParser(DataType.STRING);
        assert.notOk(opt.check(opt.parse(null)));
    });
    
    it("null -> string -> string", () => {
        const opt = new OptionParser(DataType.STRING, "");
        assert.ok(opt.check(opt.parse(null)));
    });
    
    it("null -> number -> string", () => {
        const opt = new OptionParser(DataType.STRING, 0);
        assert.notOk(opt.check(opt.parse(null)));
    });
});
