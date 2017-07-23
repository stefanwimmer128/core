/* @flow */

export default function processors(
    preProcessor : (args : any[]) => any[] = null,
    postProcessor : (value : any) => any = null,
) : (fn : (...args : any[]) => any) => (...args : any) => any
{
    if (preProcessor === null)
        preProcessor = args => args;
    
    if (postProcessor === null)
        postProcessor = value => value;
    
    return (fn : (...args : any[]) => any) : (...args : any) => any =>
        (...args : any[]) : any =>
            postProcessor(fn(...preProcessor(args)));
}
