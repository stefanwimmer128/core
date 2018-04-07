/* @flow */

import {
    isFunction,
} from "lodash";

export default class ExtensibleFunction extends Function {
    constructor(...args: any[]) {
        super();
        
        return Object.setPrototypeOf((isFunction(args[0]) ? args[0] : new Function(...args)).bind(this), this);
    }
}
