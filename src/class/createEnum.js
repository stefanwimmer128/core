/* @flow */

import Symbol from "core-js/library/es6/symbol";
import {
    concat,
    extend,
    find,
    isFunction,
    map,
    tail,
} from "lodash";

export default function createEnum(values: (string | [string])[], constructor: () => any = function () {}, prototype: any, _static: any) {
    const _enum = extend({}, _static);
    
    for (const value of values) {
        const args = concat([], value);
        _enum[args[0]] = extend({
            getDeclaringEnum() {
                return _enum;
            },
            name() {
                return args[0];
            },
        }, prototype);
        _enum[args[0]]::constructor(...tail(args));
    }
    
    _enum.valueOf = function () {
        const key = find(values, value =>
            concat([], value)[0] === name,
        );
        return key ? _enum[concat([], key)[0]] : null;
    };
    
    _enum.values = function () {
        return map(values, value =>
            _enum[concat([], value)[0]],
        );
    };
    
    _enum[Symbol.hasInstance] = function (instance) {
        return isFunction(instance?.getDeclaringEnum) && isFunction(instance?.name) ? instance.getDeclaringEnum() === _enum && _enum[instance.name()] === instance : false;
    };
    
    _enum[Symbol.iterator] = function () {
        let i = 0;
        return {
            next() {
                const cur = i++;
                return {
                    done: cur === _enum.values().length,
                    value: _enum.values()[cur],
                };
            },
        };
    };
    
    return _enum;
}
