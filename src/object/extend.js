/* @flow */

export default function extend(
    source : Object,
) : (target : Object) => Object
{
    return (target : Object) : Object =>
        Object.assign(target, source);
}
