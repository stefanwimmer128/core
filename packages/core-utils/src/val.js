/* @flow */

import t, {
    reify,
    type Type,
} from "flow-runtime";

type LastIsFunction = any[];
(reify: Type<LastIsFunction>).addConstraint((input: any[]) => {
    if (! t.function().accepts(input[input.length - 1]))
        return "has to have function at last index";
});

export default function val(...args: LastIsFunction): any {
    return args[args.length - 1](...args.slice(0, -1));
}
