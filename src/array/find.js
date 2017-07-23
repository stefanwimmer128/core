/* @flow */

import filter from "./filter";
import processors from "../function/processors";

export default function find(
    finder : (t : any, i : number, array : any[]) => boolean,
) : (array : any[]) => any
{
    return (processors(
        null,
        (value : any[]) : any =>
            value.length > 0 ? value[0] : undefined,
    )(filter(finder)) : (array : any[]) => any);
}
