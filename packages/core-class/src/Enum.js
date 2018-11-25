/* @flow */

import val from "@stefanwimmer128/core-utils/src/val";
import {
    find,
} from "lodash";

import createPrivate from "./createPrivate";

const $name = createPrivate("name"),
    $values = createPrivate("values"),
    $sealed = createPrivate("sealed");

export default class Enum {
    constructor(name: string) {
        if (this.constructor === Enum)
            throw new Error("Invalid constructor Enum");
        
        if (find($sealed(Enum), value => value === this.constructor))
            throw new Error(`´${this.constructor.name}´ is sealed`);
        
        if (this.constructor.valueOf(name))
            throw new Error(`´${name}´ already defined on ´${this.constructor.name}´`);
        
        $name(this, name);
        
        this.constructor[name] = this;
        
        $values(this.constructor, $values(this.constructor) || []).push(this);
    }
    
    static values(): Enum[] {
        return [].concat($values(this) || []);
    }
    
    static valueOf(name: string): ?Enum {
        return val(this.values(), values => {
            for (var i = 0; i < values.length; i++)
            if (values[i].name() === name)
                return values[i];
            return null;
        });
    }
    
    static seal() {
        $sealed(Enum).push(this);
    }
    
    name(): string {
        return $name(this);
    }
    
    getDeclaringEnum() {
        return this.constructor;
    }
}

$sealed(Enum, []);
