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
        const opts = new OptionsParser();
        opts.addOption("test", new OptionParser(DataType.STRING));
        assert.strictEqual(opts.parse({
            test: "",
        }).test, "");
    });
    
    it("number -> string", () => {
        const opts = new OptionsParser();
        opts.addOption("test", new OptionParser(DataType.STRING));
        assert.throws(() => {
            opts.parse({
                test: 0,
            });
        });
    });
    
    it("null -> string -> string", () => {
        const opts = new OptionsParser();
        opts.addOption("test", new OptionParser(DataType.STRING, ""));
        assert.strictEqual(opts.parse({
            test: null,
        }).test, "");
    });
    
    it("null -> number -> string", () => {
        const opts = new OptionsParser();
        opts.addOption("test", new OptionParser(DataType.STRING, 0));
        assert.throws(() => {
            opts.parse({
                test: null,
            });
        });
    });
    
    it("subparser: {}", () => {
        const opts = new OptionsParser();
        opts.addOption("subparser", new OptionsParser());
        assert.deepEqual(opts.parse(), {
            subparser: {},
        });
    });
    
    it("subparser: string -> string", () => {
        const opts = new OptionsParser();
        opts.addOption("subparser", new OptionsParser().addOption("test", new OptionParser(DataType.STRING)));
        assert.strictEqual(opts.parse({
            subparser: {
                test: "",
            },
        }).subparser.test, "");
    });
    
    it("subparser: number -> string", () => {
        const opts = new OptionsParser();
        opts.addOption("subparser", new OptionsParser().addOption("test", new OptionParser(DataType.STRING)));
        assert.throws(() => {
            opts.parse({
                subparser: {
                    test: 0,
                },
            });
        });
    });
    
    it("subparser: string -> string", () => {
        const opts = new OptionsParser();
        opts.addOption("subparser", new OptionsParser().addOption("test", new OptionParser(DataType.STRING, "")));
        assert.strictEqual(opts.parse().subparser.test, "");
    });
    
    it("subparser: number -> string", () => {
        const opts = new OptionsParser();
        opts.addOption("subparser", new OptionsParser().addOption("test", new OptionParser(DataType.STRING, 0)));
        assert.throws(() => {
            opts.parse();
        });
    });
});
