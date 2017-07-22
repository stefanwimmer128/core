/* @flow */

import reduce from "./reduce";

export default function map(
    mapper : (t : any, i : number, array : any[]) => any,
) : (array : any[]) => any[]
{
    return reduce(
        (r : any[], t : any, i : number, array : any[]) : any[] =>
            r.concat(mapper(t, i, array)),
        [],
    );
}
