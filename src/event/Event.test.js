/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import Event from "./Event";

describe("event/Event", () => {
    const event = new Event();
    
    event.on(e =>
        e.data.test = true,
    );
    
    event.once(e =>
        e.data.test = false,
    );
    
    it("test -> false", () => {
        let test = true;
        event.once(e =>
            test = e.data.test,
        );
        event.emit();
        assert.notOk(test);
    });
    
    it("test -> true", () => {
        let test = false;
        event.once(e =>
            test = e.data.test,
        );
        event.emit();
        assert.ok(test);
    });
    
    it("stop -> false", () => {
        event.once(e =>
            e.stop(),
        );
        assert.notOk(event.emit());
    });
    
    it("stop -> true", () => {
        assert.ok(event.emit());
    });
});
