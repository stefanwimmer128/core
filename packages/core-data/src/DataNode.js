/* @flow */

import createPrivate from "@stefanwimmer128/core-class/src/createPrivate";

import DataType from "./DataType";

const $nodes = createPrivate("nodes"),
    $type = createPrivate("type"),
    $value = createPrivate("value");

export default class DataNode {
    constructor(type?: DataType = DataType.ANY, value?: any) {
        $nodes(this, new Map());
        $type(this, type);
        
        if (1 in arguments)
            this.value(value);
    }
    
    addNode(key: string, type?: DataType = DataType.ANY, value?: any): DataNode {
        return this.setNode(key, new DataNode(type, value));
    }
    
    deleteNode(key: string): boolean {
        return $nodes(this).delete(key);
    }
    
    getNode(key: string): DataNode {
        return $nodes(this).get(key);
    }
    
    hasNode(key: string): boolean {
        return $nodes(this).has(key);
    }
    
    setNode(key: string, node: DataNode): this {
        $nodes(this).set(key, node);
        
        return this;
    }
    
    size(): number {
        return $nodes(this).size;
    }
    
    value(value?: any) {
        if (0 in arguments)
            if (! $type(this).validate(value))
                throw new TypeError("value does not conform with DataType");
            else
                $value(this, value)
        
        return $value(this);
    }
}
