/* @flow */

import Symbol from "core-js/library/es6/symbol";
import {
    isFunction,
} from "lodash";

import createPrivate from "../class/createPrivate";

import val from "../utils/val";

const $index = createPrivate("index");
const $resolver = createPrivate("resolver");

export default class Iterator {
    static $resolver = $resolver;
    
    static fromArray(array: any[]): Iterator {
        return new Iterator({
            get(i) {
                return array[i];
            },
            size() {
                return array.length;
            }
        });
    }
    
    constructor(resolver: {
        get(i: number): any,
        size: number | () => number,
    }) {
        $resolver(this, resolver);
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
    
    [Symbol.iterator](): this {
        return this;
    }
}
