/* @flow */

import {
    type LastIsFunction,
} from "@stefanwimmer128/core-types";

export default function val(...args: LastIsFunction): any {
    return args[args.length - 1](...args.slice(0, -1));
}
