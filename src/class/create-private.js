/* @flow */

import {
    extend,
    has,
    isUndefined,
    set,
} from "lodash";

import $ from "../polyfill";

export default function createPrivate(name: any) {
    const symbol = $.Symbol(name);
    
    function _private(object: Object, value?: any, _delete?: boolean = false) {
        if (_delete)
            delete object[symbol];
        else if (! isUndefined(value))
            object[symbol] = value;
        return object[symbol];
    }
    
    return extend(_private, {
        ref(object: any, path?: string = `$${name}`) {
            return set(object, path, _private);
        },
        get symbol() {
            return symbol;
        },
    });
}
