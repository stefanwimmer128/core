/* @flow */

/* array */
import filter from "../array/filter";
import find from "../array/find";
import flatten from "../array/flatten";
import map from "../array/map";
import mapKey from "../array/mapKey";
import reduce from "../array/reduce";
import reverse from "../array/reverse";

/* boolean */
import invert from "../boolean/invert";

/* function */
import processors from "../function/processors";

const CHAINABLE = {
    /* array */
    "filter": filter,
    "find": find,
    "flatten": () => flatten,
    "map": map,
    "mapKey": mapKey,
    "reduce": reduce,
    "reverse": () => reverse,
    
    /* boolean */
    "invert": () => invert,
    
    /* function */
    "processors": processors,
};

class Chain
{
    constructor(initialValue : any)
    {
        this.actions = [];
        this.initialValue = initialValue;
    }
    
    tap(action : (value : any) => any) : Chain
    {
        this.actions.push(action);
        
        return this;
    }
    
    value() : any
    {
        let value = this.initialValue;
        
        for (const action of this.actions)
                value = action(value);
        
        return value;
    }
}

for (const chainable in CHAINABLE)
    Chain.prototype[chainable] = function (...args : any[]) : Chain
    {
        return this.tap(CHAINABLE[chainable](...args));
    };

export default function chain(initialValue : any) : Chain
{
    return new Chain(initialValue);
}
