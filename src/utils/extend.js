/* @flow */

import {
    extend,
    isFunction,
    isObject,
} from "lodash";

export default function (target: any, ...sources: any[]): any {
    extend(target, ...sources);
    if (isFunction(Object.getOwnPropertySymbols))
        for (const source of sources)
            if (isObject(source))
                for (const symbol of Object.getOwnPropertySymbols(source))
                    target[symbol] = source[symbol];
    return target;
}
