# @stefanwimmer128/core

Complex features made easy

``` bash
$ yarn add [-D] @stefanwimmer128/core
$ npm install [-S|-D] @stefanwimmer128/core
```

``` js
/* ES6 import */
import * as core from "@stefanwimmer128/core";
import DataType from "@stefanwimmer128/core/es6/data/DataType";

/* CommonJS require */
var core = require("@stefanwimmer128/core");
var DataType = require("@stefanwimmer128/core/cjs/data/DataType").default;

/* AMD require */
require([
    "node_modules/@stefanwimmer128/core/dist/core",
], function (core) {
    /* use core here */
});
```

``` html
<!-- UMD bundle -->
<script src="node_modules/@stefanwimmer128/core/dist/core.js"></script>
```

``` js
/* default polyfills */
core.polyfill.Map = require("core-js/library/es6/map");
core.polyfill.Symbol = require("core-js/library/es6/symbol");
```

[Full documentation can be found here](https://stefanwimmer128.github.io/core)
