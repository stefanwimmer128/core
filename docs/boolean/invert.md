# core#invert API documentation

## Syntax

``` javascript
core.invert(boolean);
```

| Parameter | Type | Description |
|--|--|--|
| boolean | boolean | Boolean to invert |
| boolean | function | Function to wrap to invert return value |

## Usage

``` javascript
core.invert(true); /* false */

core.invert(function ()
{
    return false;
})(); /* true */
```
