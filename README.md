# random-ipv4

> Generate a random ipv4 address.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-ipv4/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-ipv4/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-ipv4)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-ipv4/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-ipv4)


## Install

```
$ npm install --save random-ipv4 
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-ipv4/blob/master/test/spec/index.js)


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

- [random-integral](https://github.com/mock-end/random-integral) - Generate a random integer.
- [random-natural](https://github.com/mock-end/random-natural) - Generate a random natural number.
- [random-decimal](https://github.com/mock-end/random-decimal) - Generate a random decimal.
- [random-index](https://github.com/mock-end/random-index) - Generate a random array-like index.
- [random-hexadecimal](https://github.com/mock-end/random-hexadecimal) - Generate a random hexadecimal number.
- [random-octal](https://github.com/mock-end/random-octal) - Generate a random octal.
- [random-unicode](https://github.com/mock-end/random-unicode) - Generate a random unicode.
- [random-bool](https://github.com/mock-end/random-bool) - Generate a random boolean (true/false).
- [random-char](https://github.com/mock-end/random-char) - Generate a random char.
- [random-lorem](https://github.com/mock-end/random-lorem) - Generate a random world.
- [random-title](https://github.com/mock-end/random-title) - Generate a random title.
- [random-sentence](https://github.com/mock-end/random-sentence) - Generate a random sentence.
- [random-paragraph](https://github.com/mock-end/random-paragraph) - Generate a random paragraph.
- [random-tld](https://github.com/mock-end/random-tld) - Return a random tld.
- [random-domains](https://github.com/mock-end/random-domains) - Generate a random domain name.
- [random-uri](https://github.com/mock-end/random-uri.git) - Generate a random url.
- [random-email](https://github.com/mock-end/random-email) - Generate a random email.
- [random-lang](https://github.com/mock-end/random-lang) - Return a random language name.
- [random-mobile](https://github.com/mock-end/random-mobile) - Generate a random chinese mobile phone number.
- [random-zipcode](https://github.com/mock-end/random-zipcode) - Generate a random chinese zipcode.
- [random-ipv6](https://github.com/mock-end/random-ipv6) - Generate a random ipv6 address.
- [random-color](https://github.com/mock-end/random-color) - Generate a random color.



## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-ipv4/issues/new).
