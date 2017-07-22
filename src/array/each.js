/* @flow */

export default function each(
    each : (t : any, i : number, array : any[]) => any
) : (array : any[]) => void
{
    return (array : any[]) : void =>
    {
        for (let i = 0; i < array.length; i++)
            each(array[i], i, array);
    };
}

