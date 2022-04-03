const { Given, When, Then } = require("@cucumber/cucumber");
const { assertThat, is } = require("hamjest");

const Fleet = require("../../src/backend/domain/fleet");
const Vehicle = require("../../src/backend/domain/vehicle");

Given("my fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  this.fleet = new Fleet("Joe's fleet", 1);
});

Given("a vehicle", function () {
  // Write code here that turns the phrase above into concrete actions
  this.vehicle = new Vehicle("toyota", "PA34ZE", 1);
});

Given("I have registered this vehicle into my fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  this.vehicle.registered = true;
});

Given("the fleet of another user", function () {
  // Write code here that turns the phrase above into concrete actions
  this.otherUserFleet = new Fleet("Sam's fleet", 2);
});

Given(
  "this vehicle has been registered into the other user's fleet",
  function () {
    // Write code here that turns the phrase above into concrete actions
    this.otherUserFleet.register(this.vehicle);
  }
);

Given("a location", function () {
  // Write code here that turns the phrase above into concrete actions
  this.location = { lat: 48.86, long: 2.28 };
});

When("I register this vehicle into my fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  this.fleet.register(this.vehicle);
});

When("I try to register this vehicle into my fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  this.fleet.register(this.vehicle);
});

When("I park my vehicle at this location", function () {
  // Write code here that turns the phrase above into concrete actions
  this.vehicle.park(this.location);
});

Then("this vehicle should be part of my vehicle fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  assertThat(
    this.fleet.registeredVehiclesPlateNumber.includes(
      this.vehicle.vehiclePlateNumber
    ),
    is(true)
  );
});

Then(
  "I should be informed this this vehicle has already been registered into my fleet",
  function () {
    // Write code here that turns the phrase above into concrete actions
    assertThat(
      this.fleet.register(this.vehicle),
      is("this vehicle has already been registered")
    );
  }
);

Then(
  "the known location of my vehicle should verify this location",
  function () {
    // Write code here that turns the phrase above into concrete actions
    assertThat(this.vehicle.located, is(this.location));
  }
);
