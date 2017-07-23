# @stefanwimmer128/core

## stefanwimmer128 core

### Installation

``` bash
yarn add @stefanwimmer128/core
# or:
npm install @stefanwimmer128/core
```

### Usage

stefanwimmer128 core can be used with CommonJS, AMD and in the Browser.

``` javascript
# CommonJS
var core = require("core");
```

``` javascript
# AMD
require([ "path/to/core.js" ], function (core)
{
    # use core here
});
```

``` html
<script src="path/to/core.js"></script>
```

The builds in the `dist/` folder are bundled with all major dependencies like `babel-runtime` and `flow-runtime`.

### Import single function

It is possible to import single function by importing the respected file from the `js/` folder.

Required dependency functions will be loaded using respected module loader. These dependecies include `babel-runtime` and `flow-runtime`.

``` javascript
# CommonJS
var chain = require("core/js/utils/chain");
```
