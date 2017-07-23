# `#mapKey` API documentation

## Syntax

``` javascript
core.mapKey(key)(objArray);
```

| Parameter | Type | Description |
|--|--|--|
| key | string | Key elements should be mapped to |
| objArray | Object[] | Array of objects to be mapped |

## Usage

See [`#map`](map.md). Map elements to key.

``` javascript
core.mapKey("id")([
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 }
]); /* [ 0, 1, 2, 3 ] */
```
