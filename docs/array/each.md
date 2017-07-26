# `#each` API documentation

## Syntax

``` js
core.each(function (t, i, array) {})(array);
```

| Parameter | Type | Description |
|--|--|--|
| function (t, i, array) {} | - | Function to execute for each element in array |
| t | any | Element in array |
| i | number | Index of element |
| array | any[] | Original array |

## Usage

See `Array.prototype.each`. Cycle through each element in an array.

``` js
core.each(function (t, i, array)
{
    console.log("[" + i + "] " + t);
})([ 0, 1, 2, 3 ]);
```
