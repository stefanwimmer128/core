/* @flow */

import Symbol from "core-js/library/es6/symbol";
import {
    concat,
    extend,
    find,
    isUndefined,
    map,
    tail,
} from "lodash";

export default function createEnum(_values: (string | [string])[], constructor: () => any = function () {}, prototype: any, _static: any) {
    const _enum = extend({}, _static),
        values = map(_values, value => {
            const args = concat([], value),
                val = _enum[args[0]] = extend({
                    getDeclaringEnum() {
                        return _enum;
                    },
                    name() {
                        return args[0];
                    },
                }, prototype);
            val::constructor(...tail(args));
            return val;
        });
    
    _enum.valueOf = function (name: string) {
        return find(values, value =>
            value.name() === name,
        );
    };
    
    _enum.values = function () {
        return concat([], values);
    };
    
    _enum[Symbol.hasInstance] = function (instance: any) {
        return ! isUndefined(find(values, value =>
            value === instance,
        ));
    };
    
    _enum[Symbol.iterator] = function () {
        let i = 0;
        return {
            next() {
                const cur = i++;
                return {
                    done: cur === values.length,
                    value: values[cur],
                };
            },
        };
    };
    
    return _enum;
}
