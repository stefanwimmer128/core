/* @flow */

export default function reduce(
    reducer : (r : any, t : any, i : number, array : any[]) => any,
    _start? : any,
) : (array : any[], start? : any) => any
{
    return (array : any[], start? : any = _start) : any =>
    {
        let ret : any = start;
        
        for (let i = 0; i < array.length; i++)
            ret = reducer(ret, array[i], i, array);
        
        return ret;
    };
}
