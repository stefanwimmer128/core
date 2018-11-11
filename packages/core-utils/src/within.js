/* @flow */

export default function within(context: any, fn: () => any, ...args: any[]): any {
    return fn.apply(context, args);
}
