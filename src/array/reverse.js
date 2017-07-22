/* @flow */

export default function reverse(
    array : any[]
) : any[]
{
    const ret = [];
    
    for (let i = array.length - 1; i >= 0; i--)
        ret.push(array[i]);
    
    return ret;
}
