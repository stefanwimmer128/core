# core#processors API documentation

## Syntax

``` javascript
core.processors(function (args)
{
    return args;
}, function (value)
{
    return value;
})(someFunction);
```

| Parameter | Type | Description |
|--|--|--|
| function (args) { return args; } | - | Pre processor - Handeling arguments (No processing on undefined/null) |
| args | any[] | Arguments to pass to `someFunction` |
| function (value) { return value; } | - | Post processor - Handeling return value (No processing on undefined/null) |
| value | any | Return value from `someFunction` |
| someFunction | function | Function to wrap processors around |

## Usage

Wrap function to preprocess arguments and postprocess return value.

``` javascript
core.processors(core.map(function (t)
{
    return t + 1; /* Adds 1 to every argument */
}), function (value) /* 3 */
{
    return value + 1; /* 4 */
})(function (a, b)
{
    return a + b;
})(0, 1); /* 4 */
```
