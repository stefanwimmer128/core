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
import OptionsParser from "./OptionsParser";

describe("data/OptionsParser.js", () => {
    it("string -> string", () => {
        assert.strictEqual(new OptionsParser().createOption("test", DataType.STRING).parse({
            test: "",
        }).test, "");
    });
    
    it("number -> string", () => {
        assert.throws(() => {
            new OptionsParser().createOption("test", DataType.STRING).parse({
                test: 0,
            });
        });
    });
    
    it("null -> string -> string", () => {
        assert.strictEqual(new OptionsParser().createOption("test", DataType.STRING, "").parse({
            test: null,
        }).test, "");
    });
    
    it("null -> number -> string", () => {
        assert.throws(() => {
            new OptionsParser().createOption("test", DataType.STRING, 0).parse({
                test: null,
            });
        });
    });
    
    it("subparser: string -> string", () => {
        const opts = new OptionsParser();
        opts.addSubparser("subparser").createOption("test", DataType.STRING);
        assert.strictEqual(opts.parse({
            subparser: {
                test: "",
            },
        }).subparser.test, "");
    });
    
    it("subparser: number -> string", () => {
        const opts = new OptionsParser();
        opts.addSubparser("subparser").createOption("test", DataType.STRING);
        assert.throws(() => {
            opts.parse({
                subparser: {
                    test: 0,
                },
            });
        });
    });
    
    it("subparser: null -> string -> string", () => {
        const opts = new OptionsParser();
        opts.addSubparser("subparser").createOption("test", DataType.STRING, "");
        assert.strictEqual(opts.parse().subparser.test, "");
    });
    
    it("subparser: null -> number -> string", () => {
        const opts = new OptionsParser();
        opts.addSubparser("subparser").createOption("test", DataType.STRING, 0);
        assert.throws(() => {
            opts.parse();
        });
    });
});
