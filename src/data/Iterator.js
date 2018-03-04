/* @flow */

import Symbol from "core-js/library/es6/symbol";

import createPrivate from "../class/createPrivate";

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
        get(i: number): number,
        size(): number,
    }) {
        $resolver(this, resolver);
    }
    
    next(): {
        done: boolean,
        value: any,
    } {
        $index(this, ($index(this) || 0) + 1);
        
        return {
            done: $resolver(this).size() < $index(this),
            value: $resolver(this).get($index(this) - 1),
        };
    }
    
    [Symbol.iterator](): this {
        return this;
    }
}
