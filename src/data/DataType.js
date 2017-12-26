/* @flow */

import _ from "lodash";

import createPrivate from "../class/createPrivate";

const $validator = createPrivate("validator");

function callWhenArgs(fn: (...args: any[]) => any, args: any[]) {
    return args.length > 0 ? fn(...args) : fn;
}

export default class DataType {
    static get ANY(): DataType {
        return new DataType(_.stubTrue);
    }
    static get NONE(): DataType {
        return new DataType(_.stubFalse);
    }
    
    static get AND(): DataType {
        return new DataType((...types: DataType[]) =>
            (value: any): boolean =>
                types.every((type: DataType): boolean =>
                    type.validate(value),
                ),
        );
    }
    static get NOT(): DataType {
        return new DataType((type: DataType) =>
            (value: any): boolean =>
                ! type.validate(value)
        );
    }
    static get OR(): DataType {
        return new DataType((...types: DataType[]) =>
            (value: any): boolean =>
                types.some((type: DataType): boolean =>
                    type.validate(value),
                ),
        );
    }
    
    static get ARRAY(): DataType {
        return new DataType(_.isArray);
    }
    static get BOOLEAN(): DataType {
        return new DataType(_.isBoolean);
    }
    static get ELEMENT(): DataType {
        return new DataType(_.isElement);
    }
    static get EMPTY(): DataType {
        return new DataType(_.isEmpty);
    }
    static get ERROR(): DataType {
        return new DataType(_.isError);
    }
    static get FINITE(): DataType {
        return new DataType(_.isFinite);
    }
    static get FUNCTION(): DataType {
        return new DataType(_.isFunction);
    }
    static get INTEGER(): DataType {
        return new DataType(_.isInteger);
    }
    static get MAP(): DataType {
        return new DataType(_.isMap);
    }
    static get NAN(): DataType {
        return new DataType(_.isNaN);
    }
    static get NIL(): DataType {
        return new DataType(_.isNil);
    }
    static get NULL(): DataType {
        return new DataType(_.isNull);
    }
    static get NUMBER(): DataType {
        return new DataType(_.isNumber);
    }
    static get OBJECT(): DataType {
        return new DataType(_.isObject);
    }
    static get REGEXP(): DataType {
        return new DataType(_.isRegExp);
    }
    static get SET(): DataType {
        return new DataType(_.isSet);
    }
    static get STRING(): DataType {
        return new DataType(_.isString);
    }
    static get SYMBOL(): DataType {
        return new DataType(_.isSymbol);
    }
    static get UNDEFINED(): DataType {
        return new DataType(_.isUndefined);
    }
    static get WEAK_MAP(): DataType {
        return new DataType(_.isWeakMap);
    }
    static get WEAK_SET(): DataType {
        return new DataType(_.isWeakSet);
    }
    
    constructor(validator: ((...args: any[]) => any) | DataType, ...args: any[]) {
        if (typeof validator === "function")
            $validator(this, callWhenArgs(validator, args));
        else
            $validator(this, callWhenArgs($validator(validator), args));
    }
    
    validate(value?: any, ...args: any[]): boolean {
        return callWhenArgs($validator(this), args)(value);
    }
}

$validator.ref(DataType);
