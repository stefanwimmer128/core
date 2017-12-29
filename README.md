# @stefanwimmer128/core

Complex features made easy

``` bash
$ yarn add [-D] @stefanwimmer128/core
$ npm install [-S|-D] @stefanwimmer128/core
```

## ES6 import

``` js
import * as core from "@stefanwimmer128/core/es6";

/* import single feature: */
import OptionsParser from "@stefanwimmer128/core/es6/data/OptionsParser.js";
```

## Using [Webpack](https://webpack.js.org/)

``` js
import * as core from "@stefanwimmer128/core";

/* import single feature: */
import OptionsParser from "@stefanwimmer128/core/data/OptionsParser";
```

For this you have to add the following configuration:

``` js
module.export = {
    /* ... */
    resolve: {
        alias: {
            "@stefanwimmer128/core": "@stefanwimmer128/core/es6",
        },
    },
}
```

## CommonJS require

``` js
var core = require("@stefanwimmer128/core");

/* import single feature: */
var OptionsParser = require("@stefanwimmer128/core/cjs/data/OptionsParser").default;
```

## UMD bundle

`dist/core.js` and `dist/core.min.js` are UMD bundles.

``` js
/* Using AMD require */
require([
    "path/to/core.js",
], function (core) {
    /* ... */
});
```

``` html
<!-- Using html <script>-tag -->
<script src="path/to/core.js"></script>
```

## Change used polyfills

This module uses [`core-js`](https://github.com/zloirock/core-js) polyfills for ES6 features.

``` js
core.polyfill.Map = require("your/map/polyfill");
core.polyfill.Symbol = require("your/symbol/polyfill");
```

[Full documentation can be found here](https://stefanwimmer128.github.io/core)
