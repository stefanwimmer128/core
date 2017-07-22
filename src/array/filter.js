/* @flow */

import reduce from "./reduce";

export default function filter(
    filter : (t : any, i : number, array : any[]) => boolean,
) : (array : any[]) => any[]
{
    return reduce(
        (r : any[], t : any, i : number, array : any[]) : any[] =>
            filter(t, i, array) ? r.concat([
                t,
            ]) : r,
        [],
    );
}
