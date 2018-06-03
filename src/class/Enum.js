/* @flow */

import val from "../utils/val";

import createPrivate from "./createPrivate";

const $name = createPrivate("name"),
    $values = createPrivate("values");

export default class Enum {
    constructor(name: string) {
        if (this.constructor === Enum)
            throw new TypeError("Invalid constructor Enum");
        
        if (this.constructor.valueOf(name))
            throw new TypeError(`Enum "${name}" already exists`);
        
        $name(this, name);
        
        this.constructor[name] = this;
        
        $values(this.constructor, $values(this.constructor) || []).push(this);
    }
    
    static valueOf(name: string): ?Enum {
        return val(this.values(), values => {
            for (var i = 0; i < values.length; i++)
            if (values[i].name() === name)
                return values[i];
            return null;
        });
    }
    
    static values(): Enum[] {
        return [].concat($values(this) || []);
    }
    
    getDeclaringEnum() {
        return this.constructor;
    }
    
    name(): string {
        return $name(this);
    }
}
