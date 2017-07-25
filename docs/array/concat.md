# `#concat` API documentation

## Syntax

``` javascript
core.concat(concat)(array);
```

| Parameter | Type | Description |
|--|--|--|
| concat | any / any[] | Value or array of values to concat to array |
| array | any[] | Array to concat to |

## Usage

See `Array.prototype.concat`. Add value(s) to array.

``` javascript
core.concat([ 2, 3, ])([ 0, 1, ]); /* [ 0, 1, 2, 3, ] */
```
