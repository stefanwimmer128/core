/* @flow */

export default function apply(context: any, fn: () => any, ...args: any[]): any {
    fn.apply(context, args);
    return context;
}
