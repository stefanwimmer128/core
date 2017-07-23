# core#extend API documentation

## Syntax

``` javascript
core.extend(source)(target);
```

| Parameter | Type | Description |
|--|--|--|
| source | Object | Source object |
| target | Object | Target object |

## Usage

See `Object.assign`. `source` &rarr; `target`

``` javascript
core.extend({
    a: 0,
    b: null,
    c: 2,
})({
    b: 1,
    d: 3,
}); /* {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
} */
```
