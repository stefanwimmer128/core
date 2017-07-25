/* @flow */

import chain from "../utils/chain";
import shift from "../array/shift";

export default function withProperty(
    keys : string | (number | string)[],
    value : any,
) : (obj : Object) => Object
{
    return (obj : Object) : Object =>
    {
        keys = chain([]).concat(keys).reduce(
            (r, t) =>
                chain(r).concat(typeof t === "string" ? t.split(".") : t).value(),
            [],
        ).value();
        
        if (keys.length > 1)
            return withProperty(keys[0], withProperty(shift()(keys), value)(obj[keys[0]]))(obj);
        
        return Object.assign(obj, {
            [keys[0]]: value,
        });
    };
}
