/* @flow */

import t, {
    reify,
    type Type,
} from "flow-runtime";

export type EventArgument<A, D> = {
    args: A[],
    data: D,
    stop: () => void,
};

export type EventListener<A, D> = (e: EventArgument<A, D>) => any;

export type LastIsFunction = any[];
(reify: Type<LastIsFunction>).addConstraint((input: any[]) => {
    if (! t.function().accepts(input[input.length - 1]))
        return "has to have function at last index";
});
