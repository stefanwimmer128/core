/* @flow */

import {
    isFunction,
} from "lodash";

import createPrivate from "../class/createPrivate";

import val from "../utils/val";

const $index = createPrivate("index"),
    $resolver = createPrivate("resolver");

export default class Iterator {
    constructor(resolver: {
        get(i: number): any,
        size: number | () => number,
    }) {
        $resolver(this, resolver);
    }
    
    static fromArray(array: any[]): Iterator {
        return new Iterator({
            get(i) {
                return array[i];
            },
            size() {
                return array.length;
            },
        });
    }
    
    next(): {
        done: boolean,
        value: any,
    } {
        $index(this, ($index(this) || 0) + 1);
        
        return {
            done: $index(this) > val($resolver(this).size, size => isFunction(size) ? size() : size),
            value: $resolver(this).get($index(this) - 1),
        };
    }
    
    // $FlowFixMe
    [Symbol.iterator](): this {
        return this;
    }
}
