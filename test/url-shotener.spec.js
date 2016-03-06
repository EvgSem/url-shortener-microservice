var urlShotener = require("../src/url-shortener.js")
var expect= require("chai").expect;

describe("urlshotener", function () {
    it("should convert id to Base62 Hash", function () {
        var inputUrl = "https://weather.com/";
        var actual = urlShotener.shotener(inputUrl);
        expect(actual.shortUrl).to.contain('/a');
    })
});

describe("urlExist", function () {
    it("should return id for existed account", function () {
        var result = {originalURL:"https://weather.com/", id:0, shortUrl:"http://shortUrl/"};
        urlShotener.dataBase.push(result);
        var actual = urlShotener.urlExist("https://weather.com/");
        expect(actual).to.equal(0);
    })
});

describe("urlExist", function () {
    it("should return -1 for existed account", function () {
        var actual = urlShotener.urlExist("https://weather.com/test");
        expect(actual).to.equal(-1);
    })
});