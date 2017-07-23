# core#each API documentation

## Syntax

``` javascript
core.each(function (t, i, tArray) {})(tArray);
```

| Parameter | Type | Description |
|--|--|--|
| function (t, i, tArray) {} | - | Function to execute for each element in array |
| t | any | Element in array |
| i | number | Index of element |
| tArray | any[] | Original array |

## Usage

See `Array.prototype.each`. Cycle through each element in an array.

``` javascript
core.each(function (t, i, tArray)
{
    console.log("[" + i + "] " + t);
})([ 0, 1, 2, 3 ]);
```
