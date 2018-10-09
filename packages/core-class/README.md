# @stefanwimmer128/core

Complex features made easy - Class Package

``` bash
$ yarn add [-D] @stefanwimmer128/core-class
# or
$ npm i -D @stefanwimmer128/core-class
```

## ES6 import

``` js
import * as core$class from "@stefanwimmer128/core-class";
```

## CommonJS require

``` js
var core$class = require("@stefanwimmer128/core$class");
```

## UMD bundle

`dist/core-class.js` and `dist/core-class.min.js` are UMD bundles.

``` js
/* Using AMD require */
require([
    "https://unpkg.com/@stefanwimmer128/core-class.js",
], function (core$class) {
    /* ... */
});
```

``` html
<!-- Using html <script>-tag -->
<script src="https://unpkg.com/@stefanwimmer128/core-class.js"></script>
```
