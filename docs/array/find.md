# `#find` API documentation

## Syntax

``` js
core.find(function (t, i, tArray) {})(tArray);
```

| Parameter | Type | Description |
|--|--|--|
| function (t, i, tArray) {} | boolean | Function to find element of array |
| t | any | Element in array |
| i | number | Index of element |
| tArray | any[] | Original array |

## Usage

See `Array.prototype.find`. Find element in array.

``` js
core.find(function (t, i, tArray)
{
    return t > 1;
})([ 0, 1, 2, 3 ]); /* 2 */
```
