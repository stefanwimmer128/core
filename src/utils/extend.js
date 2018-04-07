/* @flow */

import {
    isObject,
    reduce,
} from "lodash";

export default function (target: any, ...sources: any[]): any {
    return reduce(sources, (target, source) => {
        if (isObject(source))
            for(var key in source)
                target[key] = source[key];
    }, target);
}
