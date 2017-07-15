/* @flow */

export default function invert(
    boolean : boolean | (...args : Array<any>) => boolean
) : boolean | (...args : Array<any>) => boolean
{
    if (typeof boolean === "function")
        return (...args : Array<any>) : boolean =>
            ! boolean(...args);
    else
        return ! boolean;
}
