# core#chain API Documentation

## Syntax

``` javascript
core.chain(initialValue);
```

| Parameter | Type | Description |
|--|--|--|
| initialValue | any | Initial value for chain to process |

## Usage

Allows to use above functions in a chained structure. Chain functions together to process `initialValue` in order. Execution only on `.value()` call.

``` javascript
core.chain([ 0, 1, 2, 3, ]).map(function (t)
{
    return t + 1;
}).reduce(function (t, t)
{
    return r + t;
}).value(); /* 10 */
```

To manually tap into the chain use the `.tap()` function.

``` javascript
core.chain(0).tap(function (value)
{
    return value + 1;
}).value(); /* 1 */
```

Compatible functions: [#filter](../array/filter.md) [#find](../array/find.md) [#flatten](../array/flatten.md) [#map](../array/map.md) [#mapKey](../array/mapKey.md) [#reduce](../array/reduce.md) [#reverse](../array/reverse.md) [#invert](../boolean/invert.md) [#extend](../object/extend.md) [#processors](../function/processors.md)
