/* @flow */

export default function reduce(
    reducer : (r : any, t : any, i : number, array : Array<any>) => any,
    _start? : any,
) : (array : Array<any>, start? : any) => any
{
    return (array : Array<any>, start? : any = _start) : any =>
    {
        let ret : any = start;
        
        for (let i : number = 0; i < array.length; i++)
            ret = reducer(ret, array[i], i, array);
        
        return ret;
    };
}
