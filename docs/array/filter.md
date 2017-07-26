# `#filter` API documentation

## Syntax

``` js
core.filter(function (t, i, array) {})(array);
```

| Parameter | Type | Description |
|--|--|--|
| function (t, i, array) {} | boolean | Function to filter elements of array |
| t | any | Element in array |
| i | number | Index of element |
| array | any[] | Original array |

## Usage

See `Array.prototype.filter`. Filter elements in array.

``` js
core.filter(function (t, i, array)
{
    return t > 1;
})([ 0, 1, 2, 3 ]); /* [ 2, 3 ] */
```
