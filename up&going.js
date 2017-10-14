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

    it("array is '==' for string, but not '==' array", function () {
        let a = [1, 2, 3];
        let b = [1, 2, 3];
        let c = "1,2,3";

        (a == c).should.equal(true);
        (b == c).should.equal(true);

        (a == b).should.not.equal(true);
    });

    it("NaN always is false with Number", function () {
        let a = 42;
        let b = "foo";

        (a < b).should.equal(false);
        (a > b).should.equal(false);
        (a == b).should.equal(false);
        isNaN(b).should.equal(true);
    });
    
    
});