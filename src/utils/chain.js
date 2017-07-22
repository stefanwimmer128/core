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

type Action = (value : any) => any;
type ActionCreater = (...args : Array<any>) => Action;

const CHAINABLE : Array<string | ActionCreater> = [
    /* array */
    "filter", filter,
    "find", find,
    "map", map,
    "mapKey", mapKey,
    "reduce", reduce,
    "reverse", () => reverse,
    
    /* boolean */
    "invert", () => invert,
];

class Chain
{
    constructor(initialValue : any)
    {
        this.actions = [];
        this.initialValue = initialValue;
        
        for (let i : number = 0; i < CHAINABLE.length; i += 2)
            this[CHAINABLE[i]] = (...args : Array<any>) : Chain =>
                this.tap((CHAINABLE[i + 1] : ActionCreater)(...args));
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

export default function chain(initialValue : any) : Chain
{
    return new Chain(initialValue);
}
