/* @flow */

import {
    keys,
    transform,
} from "lodash";

export default function (target: any, ...sources: any[]): any {
    return transform(sources, (target, source) =>
        transform(keys(source), (target, key) =>
            target[key] = source[key],
        target),
    target);
}
