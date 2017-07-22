/* @flow */

/* array */
import filter from "../array/filter";
import find from "../array/find";
import map from "../array/map";
import mapKey from "../array/mapKey";
import reduce from "../array/reduce";
import reverse from "../array/reverse";

/* boolean */
import invert from "../boolean/invert";

/* function */
import processors from "../function/processors";

type Action = (value : any) => any;
type ActionCreater = (...args : any[]) => Action;

const CHAINABLE : (string | ActionCreater)[] = [
    /* array */
    "filter", filter,
    "find", find,
    "map", map,
    "mapKey", mapKey,
    "reduce", reduce,
    "reverse", () => reverse,
    
    /* boolean */
    "invert", () => invert,
    
    /* function */
    "processors", processors,
];

class Chain
{
    constructor(initialValue : any)
    {
        this.actions = [];
        this.initialValue = initialValue;
    }
    
    tap(action : Action) : Chain
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

for (let i = 0; i < CHAINABLE.length; i += 2)
    Chain.prototype[CHAINABLE[i]] = function (...args : any[]) : Chain
    {
        return this.tap((CHAINABLE[i + 1] : ActionCreater)(...args));
    };

export default function chain(initialValue : any) : Chain
{
    return new Chain(initialValue);
}
