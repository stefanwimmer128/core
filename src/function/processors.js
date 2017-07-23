/* @flow */

export default function processors(
    preProcessor : ((args : any[]) => any[]) | null = null,
    postProcessor : ((value : any) => any) | null = null,
) : (fn : (...args : any[]) => any) => any
{
    if (preProcessor === null)
        preProcessor = args => args;
    
    if (postProcessor === null)
        postProcessor = value => value;
    
    return (fn : (...args : any[]) => any) : any =>
        (...args) =>
            postProcessor(fn(...preProcessor(args)));
}
