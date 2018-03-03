/* @flow */

import Symbol from "core-js/library/es6/symbol";

import createPrivate from "../class/createPrivate";

import val from "../utils/val";

const $index = createPrivate("index");
const $values = createPrivate("values");

export default class Iterator {
    static $values = $values;
    
    constructor(values: any[]) {
        $index(this, 0);
        $values(this, values);
    }
    
    next() {
        return val($index(this), index => {
            $index(this, index + 1);
            
            return val($values(this), values => ({
                done: index === values.length,
                value: values[index],
            }));
        });
    }
    
    [Symbol.iterator](): this {
        return this;
    }
}
