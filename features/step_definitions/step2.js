const { Given, When, Then } = require("@cucumber/cucumber");
const { assertThat, is } = require("hamjest");

const Fleet = require("../../src/backend/domain/fleet");

Given("a user id {int}", function (userID) {
  // Write code here that turns the phrase above into concrete actions
  this.userID = userID;
});

When("I create a fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  this.fleet = new Fleet(3, this.userID);
});

Then("return the new fleet id", function () {
  // Write code here that turns the phrase above into concrete actions
  assertThat(this.fleet.id, is(3));
  return this.fleet.id;
});
