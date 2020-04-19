//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//Require the dev-dependencies
const chai = require("chai");
const { helloWorld } = require("../helloWorld");
var assert = require("assert");

//Our parent block
describe("Server", () => {
  describe("helloWorld()", () => {
    it("Should print hello world", () => {
      assert.equal(helloWorld(), "Hello World");
    });
  });
});
