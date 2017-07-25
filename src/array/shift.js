/* @flow */

export default function shift(
    shift? : number = 1,
) : (array : any[]) => any[]
{
    return (array : any[]) : any[] =>
    {
        const ret = [];
        
        for (let i = shift; i < array.length; i++)
            ret.push(array[i]);
        
        return ret;
    };
}
