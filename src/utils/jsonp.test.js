/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import jsonp from "./jsonp";

describe("utils/jsonp", () => {
    it("jsonp", () => {
        Promise.resolve({
            text() {
                return new Promise(resolve => `jsonp({
                    test: true,
                })`);
            }
        }).then(jsonp("jsonp")).then(body =>
            assert.deepEqual(body, {
                test: true,
            }),
        );
    });
});
