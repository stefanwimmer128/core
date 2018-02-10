/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import EventEmitter from "./EventEmitter";

describe("event/EventEmitter", () => {
    const eventEmitter = new EventEmitter();
    
    it("add listener", () => {
        eventEmitter.once("event", e => e.stop());
        assert.notOk(eventEmitter.emit("event"));
    });
});
