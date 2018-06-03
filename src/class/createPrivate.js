/* @flow */

import val from "../utils/val";

export default function createPrivate(name: string) {
    const symbol = Symbol(name);
    
    return val(function (object: any, value?: any): any {
        if (1 in arguments)
            object[symbol] = value;
        return object[symbol];
    }, $private =>
        Object.defineProperty($private, "symbol", {
            configurable: true,
            enumerable: true,
            get: function () {
                return symbol;
            },
        }),
    );
}
