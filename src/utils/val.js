/* @flow */

export default function val(val: any, fn: (val: any) => any): any {
    return fn(val);
}
