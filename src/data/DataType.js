/* @flow */

import _ from "lodash";

import createPrivate from "../class/createPrivate";

const $validator = createPrivate("validator");

function callWhenArgs(fn: (...args: any[]) => any, args: any[]) {
    return args.length > 0 ? fn(...args) : fn;
}

let $ANY,
    $NONE,
    $AND,
    $NOT,
    $OR,
    $ARRAY,
    $BOOLEAN,
    $ELEMENT,
    $EMPTY,
    $ERROR,
    $FINITE,
    $FUNCTION,
    $INTEGER,
    $MAP,
    $NAN,
    $NIL,
    $NULL,
    $NUMBER,
    $OBJECT,
    $REGEXP,
    $SET,
    $STRING,
    $SYMBOL,
    $UNDEFINED,
    $WEAK_MAP,
    $WEAK_SET;

export default class DataType {
    static get ANY(): DataType {
        return $ANY = $ANY || new DataType(_.stubTrue);
    }
    static get NONE(): DataType {
        return $NONE = $NONE || new DataType(_.stubFalse);
    }
    
    static get AND(): DataType {
        return $AND = $AND || new DataType((...types: DataType[]) =>
            (value: any): boolean =>
                types.every((type: DataType): boolean =>
                    type.validate(value),
                ),
        );
    }
    static get NOT(): DataType {
        return $NOT = $NOT || new DataType((type: DataType) =>
            (value: any): boolean =>
                ! type.validate(value)
        );
    }
    static get OR(): DataType {
        return $OR = $OR || new DataType((...types: DataType[]) =>
            (value: any): boolean =>
                types.some((type: DataType): boolean =>
                    type.validate(value),
                ),
        );
    }
    
    static get ARRAY(): DataType {
        return $ARRAY = $ARRAY || new DataType(_.isArray);
    }
    static get BOOLEAN(): DataType {
        return $BOOLEAN = $BOOLEAN || new DataType(_.isBoolean);
    }
    static get ELEMENT(): DataType {
        return $ELEMENT = $ELEMENT || new DataType(_.isElement);
    }
    static get EMPTY(): DataType {
        return $EMPTY = $EMPTY || new DataType(_.isEmpty);
    }
    static get ERROR(): DataType {
        return $ERROR = $ERROR || new DataType(_.isError);
    }
    static get FINITE(): DataType {
        return $ERROR = $ERROR || new DataType(_.isFinite);
    }
    static get FUNCTION(): DataType {
        return $FUNCTION = $FUNCTION || new DataType(_.isFunction);
    }
    static get INTEGER(): DataType {
        return $INTEGER = $INTEGER || new DataType(_.isInteger);
    }
    static get MAP(): DataType {
        return $MAP = $MAP || new DataType(_.isMap);
    }
    static get NAN(): DataType {
        return $NAN = $NAN || new DataType(_.isNaN);
    }
    static get NIL(): DataType {
        return $NIL = $NIL || new DataType(_.isNil);
    }
    static get NULL(): DataType {
        return $NULL = $NULL || new DataType(_.isNull);
    }
    static get NUMBER(): DataType {
        return $NUMBER = $NUMBER || new DataType(_.isNumber);
    }
    static get OBJECT(): DataType {
        return $OBJECT = $OBJECT || new DataType(_.isObject);
    }
    static get REGEXP(): DataType {
        return $REGEXP = $REGEXP || new DataType(_.isRegExp);
    }
    static get SET(): DataType {
        return $SET = $SET || new DataType(_.isSet);
    }
    static get STRING(): DataType {
        return $STRING = $STRING || new DataType(_.isString);
    }
    static get SYMBOL(): DataType {
        return $SYMBOL = $SYMBOL || new DataType(_.isSymbol);
    }
    static get UNDEFINED(): DataType {
        return $UNDEFINED = $UNDEFINED || new DataType(_.isUndefined);
    }
    static get WEAK_MAP(): DataType {
        return $WEAK_MAP = $WEAK_MAP || new DataType(_.isWeakMap);
    }
    static get WEAK_SET(): DataType {
        return $WEAK_SET = $WEAK_SET || new DataType(_.isWeakSet);
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
