/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import fetch from "./fetch";

describe("utils/fecth", () => {
    it("non jsonp", () => {
        global.fetch = url =>
            new Promise(resolve =>
                ({
                    json() {
                        return new Promise(resolve =>
                            resolve(url),
                        );
                    },
                }),
            );
        
        fetch("http://example.com/")
            .then(body =>
                body.json(),
            )
            .then(url =>
                assert(url, "http://example.com/"),
            );
        
        delete global.fetch;
    })
    
    it("jsonp", () => {
        global.fetch = (url, init) =>
            new Promise(resolve =>
                ({
                    text() {
                        return new Promise(resove =>
                            resolve(`${init.jsonp}(${url})`),
                        );
                    },
                }),
            );
        
        fetch("http://example.com/", {
            jsonp: "ExampleData",
        })
            .then(url =>
                assert(url, "http://example.com/"),
            );
        
        delete global.fetch;
    });
});
