/* @flow */

import createPrivate from "@stefanwimmer128/core-class/src/createPrivate";

const $parent = createPrivate("parent"),
    $transformer = createPrivate("transformer");

export default class Stream {
    constructor(parent?: Stream) {
        $parent(this, parent);
        
        $transformer(this, value => value);
    }
    
    pipe(transformer: (value: any) => any): Stream {
        const stream = new Stream(this);
        
        $transformer(stream, transformer);
        
        return stream;
    }
    
    value(value: any): any {
        let val = value;
        if ($parent(this) instanceof Stream)
            val = $parent(this).value(val);
        return $transformer(this)(val);
    }
}
