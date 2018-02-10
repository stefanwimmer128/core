/* @flow */

import Symbol from "core-js/library/es6/symbol";
import {
    get,
    isUndefined,
    set,
} from "lodash";

import extend from "../utils/extend";
import val from "../utils/val";

export default function createPrivate(name: string, _default: any) {
    const symbol = Symbol(name);
    
    return val(function (object: any, value?: any, _delete?: boolean = false): any {
        if (_delete)
            delete object[symbol];
        else if (! isUndefined(value))
            set(object, symbol, value);
        return get(object, symbol, _default);
    }, _private => {
        return extend(_private, {
            ref(object: any, path?: number | string | (number | string)[] = `$${name}`): any {
                return set(object, path, _private);
            },
            symbol,
        });
    });
}
