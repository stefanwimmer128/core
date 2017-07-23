# core#flatten API documentation

## Syntax

``` javascript
core.flatten(array);
```

| Parameter | Type | Description |
|--|--|--|
| array | any[] | Array to flatten |

## Usage

Flatten array.

``` javascript
core.flatten([ 0, 1, [ 2, 3 ], [ [ 4, 5 ], [ 6, 7 ] ] ]); /* [ 0, 1, 2, 3, [ 4, 5 ], [ 6, 7] ] */
```
