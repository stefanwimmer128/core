/* @flow */

export default function concat(
    concat : any,
) : (array : any[]) => any[]
{
    return (array : any[]) : any[] =>
        array.concat(concat);
};
