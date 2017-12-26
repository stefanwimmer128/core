/* @flow */

import {
    forEach,
    isObject,
} from "lodash";

import createPrivate from "../class/createPrivate";

import DataType from "./DataType";
import OptionParser from "./OptionParser";

const $options = createPrivate("options");

export default class OptionsParser extends OptionParser {
    constructor() {
        super(DataType.OBJECT, {});
        
        $options(this, {});
    }
    
    addOption(opt: string, parser: OptionParser) {
        $options(this)[opt] = parser;
        
        return this;
    }
    
    parse(options: any): any {
        const opts = super.parse(options),
            ret = {};
        
        forEach($options(this), (opt, key) => {
            const value = opt.parse(opts[key]);
            if (opt.check(value))
                ret[key] = value;
            else
                throw new TypeError(`Option ${key} does not conform with type`);
        });
        
        return ret;
    }
}

$options.ref(OptionsParser);
