# `#shift` API documentation

## Syntax

``` js
core.shift(shift)(araay);
```

| Parameter | Type | Description |
|--|--|--|
| shift = 1 | number? | Number of elements to be removed from head of array |
| array | any[] | Array to remove elements from |

## Usage

See `Array.prototype.shift`. Remove elements from head of array.

``` js
core.shift()([ 0, 1, 2, 3 ]); /* [ 1, 2, 3, ] */

core.shift(2)([ 0, 1, 2, 3, ]); /* [ 2, 3, ] */
```
