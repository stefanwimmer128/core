/* @flow */

import createPrivate from "@stefanwimmer128/core-class/src/createPrivate";
import {
    isObject,
} from "lodash";

import DataType from "./DataType";
import OptionParser from "./OptionParser";

const $options = createPrivate("options");

export default class OptionsParser extends OptionParser {
    constructor() {
        super(DataType.OBJECT, {});
        
        $options(this, new Map());
    }
    
    addOption(opt: string, parser: OptionParser): this {
        $options(this).set(opt, parser);
        
        return this;
    }
    
    addSubparser(opt: string): OptionsParser {
        const subparser = new OptionsParser();
        this.addOption(opt, subparser);
        return subparser;
    }
    
    createOption(opt: string, type?: DataType, _default?: any): this {
        return this.addOption(opt, new OptionParser(type, _default));
    }
    
    parse(options: any): any {
        const opts = super.parse(options),
            ret = {};
        
        for (const [key, parser] of $options(this)) {
            const value = parser.parse(opts[key]);
            if (parser.check(value))
                ret[key] = value;
            else
                throw new TypeError(`Option ${key} does not conform with type`);
        }
        
        return ret;
    }
}
