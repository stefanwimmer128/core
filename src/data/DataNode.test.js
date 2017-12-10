/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import DataNode from "./DataNode";
import DataType from "./DataType";

describe("data/DataNode.js", () => {
    it("string -> string", () => {
        assert.strictEqual(new DataNode(DataType.STRING).value(""), "");
    });
    
    it("not string -> string", () => {
        assert.throws(() => {
            new DataNode(DataType.STRING).value(0);
        });
    });
    
    it("string -> not string", () => {
        assert.throws(() => {
            new DataNode(new DataType(DataType.NOT, DataType.STRING)).value("");
        });
    });
    
    it("not string -> not string", () => {
        assert.strictEqual(new DataNode(new DataType(DataType.NOT, DataType.STRING)).value(0), 0);
    });
    
    const node = new DataNode();
    const childNode = new DataNode();
    
    it("hasNode -> false", () => {
        assert.notOk(node.hasNode("node"));
    });
    
    it("setNode -> node", () => {
        assert.strictEqual(node.setNode("node", childNode), node);
    });
    
    it("hasNode -> true", () => {
        assert.ok(node.hasNode("node"));
    });
    
    it("getNode -> childNode", () => {
        assert.strictEqual(node.getNode("node"), childNode);
    })
    
    it("deleteNode -> true", () => {
        assert.ok(node.deleteNode("node"));
    });
    
    it("size -> 0", () => {
        assert.strictEqual(node.size(), 0);
    });
    
    it("deleteNode -> false", () => {
        assert.notOk(node.deleteNode("node"));
    })
});
