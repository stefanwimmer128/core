/* @flow */

import map from "./map";

export default function mapKey(
    key : string,
) : (array : Object[]) => any[]
{
    return map(
        (t : Object, i : number, array : Object[]) : any =>
            t[key],
    );
}
