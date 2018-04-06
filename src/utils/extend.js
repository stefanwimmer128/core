/* @flow */

import {
    forEach,
    isFunction,
    isObject,
} from "lodash";

export default function (target: any, ...sources: any[]): any {
    forEach(sources, source => {
        if (isObject(source))
            for (var key in source)
                target[key] = source[key];
    });
    return target;
}
