/* @flow */

import reduce from "./reduce";

export default function filter(
    filter : (t : any, i : number, array : Array<any>) => boolean,
) : (array : Array<any>) => Array<any>
{
    return reduce(
        (r : Array<any>, t : any, i : number, array : Array<any>) : Array<any> =>
            filter(t, i, array) ? r.concat([
                t,
            ]) : r,
        [],
    );
}
