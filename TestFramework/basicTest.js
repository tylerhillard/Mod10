const chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe("BasicTest",function () {

    describe("MathEquation",function() {
        it("Should Equal 10 when 5+5",function () {
            var result = 5+5;
            assert.equal(result, 10)
        });
    });

    describe("Check Length of String",function() {
        it("Expecting the length to be 29",function () {
            var twitterMessage = "Steelers have six super bowls";
            var lengthOfMessage = twitterMessage.length;
            assert.equal(lengthOfMessage,twitterMessage.length)
        });
    });

    describe("Strings",function() {
        let name = "Tyler"
        it("Should be of type string",function () {
            name.should.be.a('string')
            expect(name).to.be.a('string')
            assert.typeOf(name,'string')
        })
    it("Should contain Tyler", function () {
        name.should.not.equal("Jeff")
        name.should.equal("Tyler")
        expect(name).to.equal("Tyler")
        assert.equal(name,"Tyler")
        })

    });

});
