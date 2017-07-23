/* @flow */

export default function invert(
    boolean : boolean | (...args : any[]) => boolean,
) : boolean | (...args : any[]) => boolean
{
    if (typeof boolean === "function")
        return (...args : any[]) : boolean =>
            ! boolean(...args);
    else
        return ! boolean;
}
