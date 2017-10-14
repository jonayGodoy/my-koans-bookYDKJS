'use strict';

let should = require('chai').should();
let assert = require('chai').assert;
let expect = require('chai').expect;


describe("Up & Going", () => {
    it('green test', function () {
        true.should.equal(true);
    });

    it('[] is equals to .', function () {
        let obj = {
            a: "Hello word",
            b: "42",
            c: true,
            "Hello world": "separated"
        };
        obj["a"].should.equal(obj.a);
        obj["Hello world"].should.equal("separated");
    });
});