/* @flow */

export default function processors(
    preProcessor : (args : Array<any>) => Array<any> = args => args,
    postProcessor : (value : any) => any = value => value,
) : (fn : (...args : Array<any>) => any) => (...args : any) => any
{
    return (fn : (...args : Array<any>) => any) : (...args : any) => any =>
        (...args : Array<any>) : any =>
            postProcessor(fn(...preProcessor(args)));
}
