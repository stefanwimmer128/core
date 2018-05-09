/* @flow */

export default class RuntimeError extends Error {
    constructor(...args: any[]) {
        super(...args);
        
        this.name = "RuntimeError";
    }
}
