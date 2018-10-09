/* @flow */

import createPrivate from "@stefanwimmer128/core-class/src/createPrivate";
import {
    isNil,
} from "lodash";

import DataType from "./DataType";

const $default = createPrivate("default"),
    $type = createPrivate("type");

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
