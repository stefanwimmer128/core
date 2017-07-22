/* @flow */

export default function processors(
    preProcessor : (args : any[]) => any[] = args => args,
    postProcessor : (value : any) => any = value => value,
) : (fn : (...args : any[]) => any) => (...args : any) => any
{
    return (fn : (...args : any[]) => any) : (...args : any) => any =>
        (...args : any[]) : any =>
            postProcessor(fn(...preProcessor(args)));
}
