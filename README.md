# @stefanwimmer128/core

Complex features made easy

``` bash
$ yarn add [-D] @stefanwimmer128/core
$ npm install [-S|-D] @stefanwimmer128/core
```

## ES6 import

``` js
import * as core from "@stefanwimmer128/core";

/* import single feature */
import OptionsParser from "@stefanwimmer128/core/es6/data/OptionsParser.js";
```

## Using [Webpack](https://webpack.js.org/)

``` js
import * as core from "@stefanwimmer128/core";

/* import single feature: */
import OptionsParser from "@stefanwimmer128/core/data/OptionsParser";
```

For this you have to add the following configuration to `webpack.config.js`:

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
    "https://unpkg.com/@stefanwimmer128/core@2.2.1/dist/core.js",
], function (core) {
    /* ... */
});
```

``` html
<!-- Using html <script>-tag -->
<script src="https://unpkg.com/@stefanwimmer128/core@2.2.1/dist/core.js"></script>
```

## Build custom bundle

``` bash
$ yarn custom -h
$ npm run custom -- -h
```
