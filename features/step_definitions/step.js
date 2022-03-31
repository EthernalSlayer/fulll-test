const { Given, When, Then } = require("@cucumber/cucumber");
const { assertThat, is } = require("hamjest");

const Fleet = require("../../src/backend/domain/fleet");
const Vehicle = require("../../src/backend/domain/vehicle");

Given("my fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  this.fleet = new Fleet();
});

Given("a vehicle", function () {
  // Write code here that turns the phrase above into concrete actions
  this.vehicle = new Vehicle("toyota");
});

When("I register this vehicle into my fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  this.fleet.register(this.vehicle);
});

Then("this vehicle should be part of my vehicle fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  assertThat(this.fleet.registeredVehicles(), is([this.vehicle]));
});
