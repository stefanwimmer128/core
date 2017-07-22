/* @flow */
import filter from "./filter";

export default function find(
    finder : (t : any, i : number, array : any[]) => boolean,
) : (array : any[]) => any
{
    return (array : any[]) : any =>
        filter(finder)(array)[0];
}
