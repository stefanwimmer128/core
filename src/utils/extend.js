/* @flow */

import {
    extend as _extend,
    isFunction,
    isObject,
} from "lodash";

export default function extend(target: any, ...sources: any[]): any {
    _extend(target, ...sources);
    if (isFunction(Object.getOwnPropertySymbols))
        for (const source of sources)
            if (isObject(source))
                for (const symbol of Object.getOwnPropertySymbols(source))
                    target[symbol] = source[symbol];
    return target;
}
