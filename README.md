# @stefanwimmer128/core

## Installation

``` bash
yarn add @stefanwimmer128/core
# or:
npm install @stefanwimmer128/core
```

## Usage

@stefanwimmer128/core can be used with CommonJS, AMD and in the Browser.

``` javascript
/* CommonJS */
var core = require("@stefanwimmer128/core");
```

``` javascript
/* AMD */
require([ "path/to/core.js" ], function (core)
{
    # use core here
});
```

``` html
<script src="path/to/core.js"></script>
```

The builds in the `dist/` folder are bundled with all major dependencies like `babel-runtime` and `flow-runtime`.

It is possible to import single function by importing the respected file from the `js/` folder. Required dependency functions will be loaded using respected module loader.

``` javascript
/* CommonJS */
var chain = require("core/js/utils/chain");
```

## API Documentation

[Try @stefanwimmer128/core](https://npm.runkit.com/@stefanwimmer128/core)

@stefanwimmer128/core exports the following functions:

- Array operations
  - [#each](docs/array/each.md) - Cycle through each element in an arra
  - [#filter](docs/array/filter.md) - Filter elements in array
  - [#find](docs/array/find.md) - Find element in array
  - [#map](docs/array/map.md) - Map through elements in array
  - [#mapKey](docs/array/mapKey.md) - Map elements to key
  - [#reduce](docs/array/reduce.md) - Process array
  - [#reverse](docs/array/reverse.md) - Reverse array
- Boolean operations
  - [#invert](docs/boolean/invert.md) - Invert boolean value or wrap function to return inverted boolea value
- Function operations
  - [#processors](docs/function/processors.md) - Wrap function to preprocess arguments and postprocess return value
- Utils
  - [#chain](docs/utils/chain.md) - Allows to use above functions in a chained structure

These functions are curried, so usage looks like this:

``` javascript
const map = core.map(t => t + 1);
map([ 0, 1, 2, 3 ]); /* [ 1, 2, 3, 4 ] */
```

More examples on each functions can be found in their respected API documentation.
