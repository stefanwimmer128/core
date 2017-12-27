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
    
    addSubparser(opt: string) {
        const subparser = new OptionsParser();
        this.addOption(opt, subparser);
        return subparser;
    }
    
    createOption(opt: string, type?: DataType = DataType.ANY, _default?: any) {
        return this.addOption(opt, new OptionParser(type, _default));
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
