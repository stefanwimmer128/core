/* @flow */

import {
    extend,
    has,
    isUndefined,
} from "lodash";

import $ from "../polyfill";

export default function createPrivate(name?: string = "") {
    const symbol = $.Symbol(name);
    
    function _private(object: Object, value?: any, _delete?: boolean = false) {
        if (_delete)
            delete object[symbol];
        else if (! isUndefined(value))
            object[symbol] = value;
        return object[symbol];
    }
    
    return extend(_private, {
        ref(object: any, _name?: string) {
            const __name = `$${_name || name}`;
            
            if (__name.length <= 1)
                throw new TypeError("name must be non-empty string");
            if (has(object, __name))
                throw new TypeError(`object already has "${__name}"`);
            
            object[__name] = _private;
        },
        
        get symbol() {
            return symbol;
        },
    });
}
