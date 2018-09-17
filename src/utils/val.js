/* @flow */

export default function val(...args: any[]): any {
    return args[args.length - 1](...args.slice(0, -1));
}
