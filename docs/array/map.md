# `#map` API documentation

## Syntax

``` js
core.map(function (t, i, tArray) {})(tArray);
```

| Parameter | Type | Description |
|--|--|--|
| function (t, i, tArray) {} | boolean | Function to map elements of array |
| t | any | Element in array |
| i | number | Index of element |
| tArray | any[] | Original array |

## Usage

See `Array.prototype.map`. Map through elements in array.

``` js
core.each(function (t, i, tArray)
{
    return t + 1;
})([ 0, 1, 2, 3 ]); /* [ 1, 2, 3, 4 ] */
```
