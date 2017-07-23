# `#sum` API documentation

## Syntax

``` javascript
core.sum(...numbers);
```

| Parameter | Type | Description |
|--|--|--|
| numbers | number[] | Numbers to sum up |

## Usage

Sum up numbers.

``` javascript
core.sum(1, 2, 3, 4); /* 10 */
```

### Using `#chain`

In `#chain` this function is called `#add`.

``` javascript
core.chain(1).add(2, 3).add(4).value(); /* 10 */
```
