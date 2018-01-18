/* @flow */

import {
    concat,
    find,
    map,
    reduce,
    tail,
} from "lodash";

export default function createEnum(values: (string | [string])[], constructor: () => any = function () {}) {
    return reduce(values, (values, value) => {
        const name = concat([], value)[0];
        values[name] = {
            getDeclaringEnum() {
                return values;
            },
            name() {
                return name;
            },
        };
        constructor.apply(values[name], tail(concat([], value)));
        return values;
    }, {
        valueOf(name) {
            const key = find(values, value =>
                concat([], value)[0] === name,
            );
            return key ? this[concat([], key)[0]] : null;
        },
        values() {
            return map(values, value =>
                this[concat([], value)[0]],
            );
        },
    });
}
