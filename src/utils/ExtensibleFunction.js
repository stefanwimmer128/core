/* @flow */

import {
    every,
} from "lodash";

export default class ExtensibleFunction extends Function {
    constructor(...args: any[]) {
        super();
        
        return Object.setPrototypeOf((typeof args[0] === "function" ? args[0] : new Function(...args)).bind(this), this);
    }
}
