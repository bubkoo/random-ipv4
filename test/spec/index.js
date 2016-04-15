'use strict';

var expect = require('chai').expect;


describe('random-ipv4: ', function () {

  var randomIpv4 = require('../../');

  it('randomIpv4()', function () {

    var ret = randomIpv4();

    expect(ret).to.be.match(/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/);
  });

  it('randomIpv4(options)', function () {

    var ret = randomIpv4({
      token1: { min: 0, max: 0 }
    });

    expect(ret).to.be.match(/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/);
    expect(ret).to.be.match(/^0.((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){2}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/);

    expect(randomIpv4({
      min: 'a',
      max: 'b'
    })).to.be.match(/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/);
  });

  it('randomIpv4("", options)', function () {

    var ret = randomIpv4('', {
      token1: { min: 0, max: 0 }
    });

    expect(ret).to.be.match(/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/);
    expect(ret).to.be.match(/^0.((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){2}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/);
  });

  it('randomIpv4("127.0.0.{ token }")', function () {

    var ret = randomIpv4('127.0.0.{ token }');

    expect(ret).to.have.string('127.0.0.');
  });

  it('randomIpv4("127.0.0.{ token }", options)', function () {

    var ret = randomIpv4('127.0.0.{ token }', {
      token: { min: 0, max: -1 }
    });

    expect(ret).to.be.equal('127.0.0.0');
  });

  it('randomIpv4("127.0.0.token", options) => throw TypeError', function () {

    var fn = randomIpv4.bind(null, '127.0.0.token', {});

    expect(fn).to.throw(Error);
    expect(fn).to.throw(TypeError);
  });
});
