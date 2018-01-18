/* @flow */

import Map from "core-js/library/es6/map";
import {
    isString,
    isUndefined,
} from "lodash";

import createPrivate from "../class/createPrivate";

import DataType from "./DataType";

const $nodes = createPrivate("nodes");
const $type = createPrivate("type");
const $value = createPrivate("value");

export default class DataNode {
    static $nodes = $nodes;
    static $type = $type;
    static $value = $value;
    
    constructor(type?: DataType = DataType.ANY, value?: any) {
        $nodes(this, new Map());
        $type(this, type);
        
        if (! isUndefined(value))
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
    
    value(value?: any, _delete?: boolean) {
        if (! _delete && ! isUndefined(value) && ! $type(this).validate(value))
            throw new TypeError("value does not conform with DataType");
        
        return $value(this, value, _delete);
    }
}
