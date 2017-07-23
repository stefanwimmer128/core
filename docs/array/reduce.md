# core#reduce API documentation

## Syntax

``` javascript
core.reduce(function (r, t, i, tArray) {}, start)(tArray, start);
```

| Parameter | Type | Description |
|--|--|--|
| function (r, t, i, tArray) {} | boolean | Function to process array with |
| r | any | Processing value |
| t | any | Element in array |
| i | number | Index of element |
| tArray | any[] | Original array |
| start | any? | Starting value |

## Usage

See `Array.prototype.reduce`.

``` javascript
core.reduce(function (r, t, i, tArray)
{
    return r + t;
}, 0)([ 1, 2, 3, 4 ]); /* 10 */
```
