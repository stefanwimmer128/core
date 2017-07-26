# `#reduce` API documentation

## Syntax

``` js
core.reduce(function (r, t, i, array) {}, start)(array, start);
```

| Parameter | Type | Description |
|--|--|--|
| function (r, t, i, array) {} | boolean | Function to process array with |
| r | any | Processing value |
| t | any | Element in array |
| i | number | Index of element |
| array | any[] | Original array |
| start | any? | Starting value |

## Usage

See `Array.prototype.reduce`. Process array.

``` js
core.reduce(function (r, t, i, array)
{
    return r + t;
}, 0)([ 1, 2, 3, 4 ]); /* 10 */
```
