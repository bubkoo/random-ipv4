# random-ipv4

> Generate a random ipv4 address.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/random-ipv4/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/random-ipv4/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/random-ipv4)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/random-ipv4/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/random-ipv4)


## Install

```
$ npm install --save random-ipv4 
```

## Usage

```js
var randomIpv4 = require('random-ipv4');

randomIpv4();
// => 193.31.235.41

randomIpv4('127.0.{ token }.1', {
    token: {
        min: 127,
        max: 255
    }
});
// => 127.0.216.1

randomIpv4('{ token1 }.{ token2 }.{ token3 }.{ token4 }', {
    token1:{
        min: 127,
        max: 127
    },
    token2:{
        min: 127,
        max: 192
    },
    token3:{
        min: 0,
        max: 200
    }
});
// => 127.188.153.3

```

## API

### randomIpv4(schema, [options])

`schema` - the ipv4 schema, default `'{ token1 }.{ token2 }.{ token3 }.{ token4 }'`.

`options` - options for every **token**, each token has `min` and `max` option, which both are from `0` to `255`.

## Related
