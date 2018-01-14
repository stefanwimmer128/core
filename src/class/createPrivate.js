/* @flow */

import {
    extend,
    get,
    isUndefined,
    set,
} from "lodash";

import $ from "../polyfill";

export default function createPrivate(name: string, _default: any) {
    const symbol = $.Symbol(name);
    
    function _private(object: any, value?: any, _delete?: boolean = false) {
        if (_delete)
            delete object[symbol];
        else if (! isUndefined(value))
            set(object, symbol, value);
        return get(object, symbol, _default);
    }
    
    return extend(_private, {
        ref(object: any, path?: number | string | (number | string)[] = `$${name}`) {
            return set(object, path, _private);
        },
        symbol,
    });
}
