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

export default function chain(initialValue : any) : Object
{
    return (function chain(actions : Array<Action>) : Object
    {
        const ret : Object = {
            tap: (action : Action) : Object =>
                chain([
                    ...actions,
                    action,
                ]),
            
            value: () : any =>
            {
                let value = initialValue;
                
                for (const action of actions)
                    value = action(value);
                
                return value;
            },
        };
        
        for (let i = 0; i < CHAINABLE.length; i += 2)
            ret[CHAINABLE[i]] = (...args : Array<any>) : Object =>
                ret.tap((CHAINABLE[i + 1] : ActionCreater)(...args));
        
        return ret;
    })([]);
}
