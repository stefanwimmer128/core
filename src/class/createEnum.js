/* @flow */

import Symbol from "core-js/library/es6/symbol";
import {
    concat,
    find,
    isUndefined,
    map,
    tail,
} from "lodash";

import Iterator from "../data/Iterator";

import extend from "../utils/extend";
import val from "../utils/val";

export default function createEnum(values: (string | [string])[], constructor: () => any = function () {}, prototype: any, _static: any) {
    return val(extend({}, _static), _enum => 
        val(map(values, value =>
            val(concat([], value), args =>
                val(_enum[args[0]] = extend({
                    getDeclaringEnum() {
                        return _enum;
                    },
                    name() {
                        return args[0];
                    },
                }, prototype), value =>
                    void value::constructor(...tail(args)) || value,
                ),
            ),
        ), values =>
            extend(_enum, {
                valueOf(name: string) {
                    return find(values, value =>
                        value.name() === name,
                    );
                },
                
                values() {
                    return concat([], values);
                },
                
                [Symbol.hasInstance](instance: any): boolean {
                    return ! isUndefined(find(values, value =>
                        value === instance,
                    ));
                },
                
                [Symbol.iterator](): Iterator {
                    return new Iterator(values);
                },
            }),
        ),
    );
}
