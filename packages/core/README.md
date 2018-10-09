# @stefanwimmer128/core

Complex features made easy - Meta Package

``` bash
$ yarn add [-D] @stefanwimmer128/core
# or
$ npm i -D @stefanwimmer128/core
```

## ES6 import

``` js
import * as core from "@stefanwimmer128/core";
```

## CommonJS require

``` js
var core = require("@stefanwimmer128/core");
```

## UMD bundle

`dist/core.js` and `dist/core.min.js` are UMD bundles.

``` js
/* Using AMD require */
require([
    "https://unpkg.com/@stefanwimmer128/core",
], function (core) {
    /* ... */
});
```

``` html
<!-- Using html <script>-tag -->
<script src="https://unpkg.com/@stefanwimmer128/core"></script>
```
