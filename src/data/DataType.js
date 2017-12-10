/* @flow */

import _ from "lodash";

import createPrivate from "../class/create-private";

const $validator = createPrivate("validator");

function callWhenArgs(fn: (...args: any[]) => any, args: any[]) {
    return args.length > 0 ? fn(...args) : fn;
}

export default class DataType {
    static ANY = new DataType(_.stubTrue);
    static NONE = new DataType(_.stubFalse);
    
    static AND = new DataType((...types: DataType[]) =>
        (value: any): boolean =>
            types.every((type: DataType): boolean =>
                type.validate(value),
            ),
    );
    static NOT = new DataType((type: DataType) =>
        (value: any): boolean =>
            ! type.validate(value)
    );
    static OR = new DataType((...types: DataType[]) =>
        (value: any): boolean =>
            types.some((type: DataType): boolean =>
                type.validate(value),
            ),
    );
    
    static ARRAY = new DataType(_.isArray);
    static BOOLEAN = new DataType(_.isBoolean);
    static ELEMENT = new DataType(_.isElement);
    static EMPTY = new DataType(_.isEmpty);
    static ERROR = new DataType(_.isError);
    static FINITE = new DataType(_.isFinite);
    static FUNCTION = new DataType(_.isFunction);
    static INTEGER = new DataType(_.isInteger);
    static MAP = new DataType(_.isMap);
    static NAN = new DataType(_.isNaN);
    static NIL = new DataType(_.isNil);
    static NULL = new DataType(_.isNull);
    static NUMBER = new DataType(_.isNumber);
    static OBJECT = new DataType(_.isObject);
    static REGEXP = new DataType(_.isRegExp);
    static SET = new DataType(_.isSet);
    static STRING = new DataType(_.isString);
    static SYMBOL = new DataType(_.isSymbol);
    static UNDEFINED = new DataType(_.isUndefined);
    static WEAK_MAP = new DataType(_.isWeakMap);
    static WEAK_SET = new DataType(_.isWeakSet);
    
    constructor(validator: ((...args: any[]) => any) | DataType, ...args: any[]) {
        if (validator instanceof DataType)
            $validator(this, callWhenArgs($validator(validator), args));
            
        if (_.isFunction(validator))
            $validator(this, callWhenArgs((validator: any), args));
    }
    
    validate(value?: any, ...args: any[]): boolean {
        return callWhenArgs($validator(this), args)(value);
    }
}

$validator.ref(DataType);
