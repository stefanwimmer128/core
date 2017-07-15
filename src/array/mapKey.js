/* @flow */

import map from "./map";

export default function mapKey(
    key : string,
) : (array : Array<Object>) => Array<any>
{
    return map(
        (t : Object, i : number, array : Array<Object>) : any =>
            t[key],
    );
}
