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

Invert boolean value or wrap function to return inverted boolea value.

``` javascript
core.invert(true); /* false */

core.invert(function ()
{
    return false;
})(); /* true */
```
