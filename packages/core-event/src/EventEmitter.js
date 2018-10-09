/* @flow */

import createPrivate from "@stefanwimmer128/core-class/src/createPrivate";
import val from "@stefanwimmer128/core-utils/src/val";

import type {
    EventListener,
} from "@stefanwimmer128/core-types/src";

import Event from "./Event";

const $events = createPrivate("events");

export default class EventEmitter {
    constructor() {
        $events(this, new Map());
    }
    
    emit(event: string, ...args: any[]): boolean {
        return val($events(this), events =>
            events.has(event) && events.get(event).emit(...args),
        );
    }
    
    on(event: string, listener: EventListener<any, any>): EventListener<any, any> {
        return val($events(this), events => {
            if (! events.has(event))
                events.set(event, new Event());
            
            return events.get(event).on(listener);
        })
    }
    
    once(event: string, listener: EventListener<any, any>): EventListener<any, any> {
        return val($events(this), events => {
            if (! events.has(event))
                events.set(event, new Event());
            
            return events.get(event).once(listener);
        });
    }
    
    remove(event: string, listener: EventListener<any, any>): boolean {
        return val($events(this), events =>
            events.has(event) && events.get(event).remove(listener),
        );
    }
}
