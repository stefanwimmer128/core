/* @flow */

import reduce from "./reduce";

export default function flatten(array : any[]) : any[]
{
    return reduce(
        (r : any, t : any, i : number, array : any[]) =>
            r.concat(t),
        [],
    )(array);
}
