var urlShotener = require("../src/url-shortener")
var expect= require("chai").expect;

describe("urlshotener", function () {
    it("should convert id to Base62 Hash", function () {
        var inputUrl = "https://weather.com/";
        var actual = urlShotener.shotener(inputUrl);
        expect(actual).to.exist;
    })
});