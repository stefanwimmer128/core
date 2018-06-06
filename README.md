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
    "https://unpkg.com/@stefanwimmer128/core@next/dist/core.js",
], function (core) {
    /* ... */
});
```

``` html
<!-- Using html <script>-tag -->
<script src="https://unpkg.com/@stefanwimmer128/core@next/dist/core.js"></script>
```

## Custom bundles

``` bash
$ yarn run custom [-h|--help] [-v|--version] [-e|--env]
```

`-e` or `--env` will set the build environment (default: `process.env.NODE_ENV` or `development`, `production` will minify build).

``` bash
$ yarn run custom ./utils/jsonp.js
```

Bundle `./esm/event/index.js` to `./dist/jsonp.js`, Exposed globaly as `jsonp`

``` bash
$ yarn run custom ./class/createPrivate:private
```

Bundle `./esm/class/createPrivate.js` to `./dist/private.js`, Exposed globaly as `private`

``` bash
$ yarn run ./class/index.js:./class.js:\$class
```

Bundle `./esm/class/index.js` to `./dist/class.js`, Exposed globaly `$class`
