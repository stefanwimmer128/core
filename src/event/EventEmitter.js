/* @flow */

import Map from "core-js/library/es6/map";

import createPrivate from "../class/createPrivate";

import val from "../utils/val";

import Event from "./Event";

import type {
    EventListener,
} from "../types";

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
