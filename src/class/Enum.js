/* @flow */

import RuntimeError from "../utils/RuntimeError";
import val from "../utils/val";

import createPrivate from "./createPrivate";

var $name = createPrivate("name"),
    $values = createPrivate("values");

export default class Enum {
    constructor(name: string) {
        if (this.constructor === Enum)
            throw new RuntimeError("Enum can't be initialized directly");
        
        if (name in this.constructor)
            throw new RuntimeError("`name` already exists on enum");
        
        $name(this, name);
        
        this.constructor[name] = this;
        $values(this.constructor, $values(this.constructor) || []).push(this);
    }
    
    static values(): Enum[] {
        return [].concat($values(this) || []);
    }
    
    static valueOf(name: string): ?Enum {
        return val(this.values(), values => {
            for (let i = 0; i < values.length; i++)
                if (values[i].name() === name)
                    return values[i];
            return null;
        });
    }
    
    getDeclaringEnum() {
        return this.constructor;
    }
    
    name(): string {
        return $name(this);
    }
}
