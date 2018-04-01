/* @flow */

import {
    assert,
} from "chai";
import {
    describe,
    it,
} from "mocha";

import fetch from "./fetch";

describe("utils/fetch", () => {
    const url = "https://stefanwimmer128.eu/";
    
    it("json", () => {
        global.fetch = url =>
            new Promise(resolve =>
                ({
                    json() {
                        return new Promise(resolve =>
                            resolve(`{ "url": "${url}" }`),
                        );
                    },
                }),
            );
        
        fetch(url)
            .then(body =>
                body.json(),
            )
            .then(data =>
                assert(data.url, url),
            );
        
        delete global.fetch;
    })
    
    it("jsonp", () => {
        global.fetch = (url, init) =>
            new Promise(resolve =>
                ({
                    text() {
                        return new Promise(resove =>
                            resolve(`ExampleData({ url: "${url}" })`),
                        );
                    },
                }),
            );
        
        fetch(url)
            .then(body =>
                body.jsonp("ExampleData"),
            )
            .then(data =>
                assert(data.url, url),
            );
        
        delete global.fetch;
    });
});
