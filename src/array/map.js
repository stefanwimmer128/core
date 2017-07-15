/* @flow */

import reduce from "./reduce";

export default function map(
    mapper : (t : any, i : number, array : Array<any>) => any,
) : (array : Array<any>) => Array<any>
{
    return reduce(
        (r : Array<any>, t : any, i : number, array : Array<any>) : Array<any> =>
            r.concat(mapper(t, i, array)),
        [],
    );
}
