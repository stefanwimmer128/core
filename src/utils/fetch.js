/* @flow */

import Promise from "core-js/library/es6/promise";
import _fetch from "node-fetch";

import val from "./val";

export default function (input: string, init?: {
    jsonp?: string,
} = {}) {
    return val((fetch || _fetch)(input, init), promise =>
        ! init.jsonp ? promise : promise
            .then(body =>
                body.text(),
            )
            .then(jsonp =>
                new Promise(resolve =>
                    new Function(init.jsonp, jsonp)(resolve),
                ),
            ),
    );
}
