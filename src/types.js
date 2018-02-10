/* @flow */

export type EventArgument<A, D> = {
    args: A[],
    data: D,
    stop: () => void,
};

export type EventListener<A, D> = (e: EventArgument<A, D>) => void;
