/* @flow */

import Map from "core-js/library/es6/map";
import {
    isObject,
} from "lodash";

import createPrivate from "../class/createPrivate";

import DataType from "./DataType";
import OptionParser from "./OptionParser";

const $options = createPrivate("options");

export default class OptionsParser extends OptionParser {
    constructor() {
        super(DataType.OBJECT, {});
        
        $options(this, new Map());
    }
    
    addOption(opt: string, parser: OptionParser) {
        $options(this).set(opt, parser);
        
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

$options.ref(OptionsParser);
