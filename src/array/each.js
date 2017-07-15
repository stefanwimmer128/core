/* @flow */

export default function each(
    each : (t : any, i : number, array : Array<any>) => any
) : (array : Array<any>) => void
{
    return (array : Array<any>) : void =>
    {
        for (let i = 0; i < array.length; i++)
            each(array[i], i, array);
    };
}

