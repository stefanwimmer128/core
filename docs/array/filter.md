# core#filter API documentation

## Syntax

``` javascript
core.filter(function (t, i, tArray) {})(tArray);
```

| Parameter | Type | Description |
|--|--|--|
| function (t, i, tArray) {} | boolean | Function to filter elements of array |
| t | any | Element in array |
| i | number | Index of element |
| tArray | any[] | Original array |

## Usage

See `Array.prototype.filter`. Filter elements in array.

``` javascript
core.filter(function (t, i, tArray)
{
    return t > 1;
})([ 0, 1, 2, 3 ]); /* [ 2, 3 ] */
```
