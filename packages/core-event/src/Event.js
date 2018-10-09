/* @flow */

import createPrivate from "@stefanwimmer128/core-class/src/createPrivate";
import val from "@stefanwimmer128/core-utils/src/val";

import type {
    EventListener,
} from "@stefanwimmer128/core-types";

const $listeners = createPrivate("listeners");

export default class Event {
    constructor() {
        $listeners(this, new Set());
    }
    
    emit(...args: any[]): boolean {
        let data = {},
            stop = false;
        for (const listener of $listeners(this)) {
            val({
                args,
                data,
                stop() {
                    stop = true;
                }
            }, e => {
                listener(e);
                data = e.data;
            });
            if (stop)
                break;
        }
        return ! stop;
    }
    
    on(listener: EventListener<any, any>): EventListener<any, any> {
        $listeners(this).add(listener);
        
        return listener;
    }
    
    once(listener: EventListener<any, any>): EventListener<any, any> {
        return val(this, _this => this.on(function _listener(e) {
            listener(e);
            _this.remove(_listener);
        }));
    }
    
    remove(listener: EventListener<any, any>): boolean {
        return $listeners(this).delete(listener);
    }
}
