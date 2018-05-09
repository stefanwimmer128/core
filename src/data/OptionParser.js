/* @flow */

import {
    isNil,
} from "lodash";

import createPrivate from "../class/createPrivate";

import DataType from "./DataType";

const $default = createPrivate("default");
const $type = createPrivate("type");

export default class OptionParser {
    constructor(type?: DataType = DataType.ANY, _default?: any) {
        $default(this, _default);
        $type(this, type);
    }
    
    check(value: any): boolean {
        return $type(this).validate(value);
    }
    
    parse(opt: any): any {
        return isNil(opt) ? $default(this) : opt;
    }
}
