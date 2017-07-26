# `#withProperty` API documentation

## Syntax

``` js
core.withProperty(keys, value)(obj);
```

| Parameter | Type | Description |
|--|--|--|
| keys | string / (number | string)[] | Key (Keys of subsequent objects) of value to change |
| value | any | Value to set key to |
| obj | Object | Object to change key in |

## Usage

Returns object with given key changed to given value.

``` js
core.withProperty([ "somthing", 0, ], true)({
    something: [ false, ],
}); /* {
    something: [ true, ],
} */

core.withProperty("something.0", true)({
    something: [ false, ],
}); /* {
    something: [ true, ],
} */
```
