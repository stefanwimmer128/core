/* @flow */

import {
    isString,
    isUndefined,
} from "lodash";

import $ from "../polyfill";

import createPrivate from "../class/create-private";

import DataType from "./DataType";

const $nodes = createPrivate("nodes");
const $type = createPrivate("type");
const $value = createPrivate("value");

export default class DataNode {
    constructor(type?: DataType = DataType.ANY, value?: any) {
        $nodes(this, new $.Map());
        
        if (! type instanceof DataType)
            throw new Error("type must be DataType");
        $type(this, type);
        
        this.value(value);
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
    
    setNode(key: string, node: DataNode): DataNode {
        if (! (isString(key) && node instanceof DataNode))
            throw new TypeError("key msut be string and node must be DataNode");
        
        $nodes(this).set(key, node);
        
        return this;
    }
    
    size(): number {
        return $nodes(this).size;
    }
    
    value(value?: any, _delete?: boolean = false) {
        if (! _delete && ! isUndefined(value)  && ! $type(this).validate(value))
            throw new TypeError("value has does not conform with DataType");
        
        return $value(this, value, _delete);
    }
}

$nodes.ref(DataNode);
