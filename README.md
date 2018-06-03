# @stefanwimmer128/core

Complex features made easy

``` bash
$ yarn add [-D] @stefanwimmer128/core@next
# or
$ npm i -D @stefanwimmer128/core@next
```

## ES6 import

``` js
import * as core from "@stefanwimmer128/core";

/* import single feature */
import OptionsParser from "@stefanwimmer128/core/esm/data/OptionsParser.js";
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
    "https://unpkg.com/@stefanwimmer128/core/dist/core.js",
], function (core) {
    /* ... */
});
```

``` html
<!-- Using html <script>-tag -->
<script src="https://unpkg.com/@stefanwimmer128/core/dist/core.js"></script>
```
