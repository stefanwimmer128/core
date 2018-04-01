/* @flow */

import Promise from "core-js/library/es6/promise";
import _fetch from "node-fetch";

import val from "./val";

export default function (...args: any[]) {
    return (fetch || _fetch)(...args).then(response =>
        Object.assign(response, {
            jsonp(callback) {
                return this.text().then(body =>
                    new Promise((resolve, reject) => {
                        try {
                            new Function(callback, body)(resolve);
                        } catch (e) {
                            reject(e);
                        }
                    }),
                );
            },
        }),
    );
}
