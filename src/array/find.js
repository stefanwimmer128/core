/* @flow */
import filter from "./filter";

export default function find(
    finder : (t : any, i : number, array : Array<any>) => boolean,
) : (array : Array<any>) => any
{
    return (array : Array<any>) : any =>
        filter(finder)(array)[0];
}
