const { Given, When, Then } = require("@cucumber/cucumber");
const { assertThat, is } = require("hamjest");

const Fleet = require("../../src/backend/domain/fleet");
const Vehicle = require("../../src/backend/domain/vehicle");

Given("my fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  this.fleet = new Fleet(1, 1);
});

Given("a vehicle", function () {
  // Write code here that turns the phrase above into concrete actions
  this.vehicle = new Vehicle("PA34ZE", 1);
});

Given("I have registered this vehicle into my fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  this.vehicle.registered = true;
});

Given("the fleet of another user", function () {
  // Write code here that turns the phrase above into concrete actions
  this.otherUserFleet = new Fleet(2, 2);
});

Given(
  "this vehicle has been registered into the other user's fleet",
  function () {
    // Write code here that turns the phrase above into concrete actions
    this.otherUserFleet.register(this.vehicle.vehiclePlateNumber);
  }
);

Given("a location", function () {
  // Write code here that turns the phrase above into concrete actions
  this.location = { lat: 48.86, long: 2.28 };
});

Given("my vehicle has been parked into this location", function () {
  // Write code here that turns the phrase above into concrete actions
  this.located = this.location;
});

When("I register this vehicle into my fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  this.fleet.register(this.vehicle.vehiclePlateNumber);
});

When("I try to register this vehicle into my fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  this.fleet.register(this.vehicle.vehiclePlateNumber);
});

When("I park my vehicle at this location", function () {
  // Write code here that turns the phrase above into concrete actions
  this.vehicle.park(this.location);
});

When("I try to park my vehicle at this location", function () {
  // Write code here that turns the phrase above into concrete actions
  this.vehicle.park(this.location);
});

Then("this vehicle should be part of my vehicle fleet", function () {
  // Write code here that turns the phrase above into concrete actions
  assertThat(
    this.fleet.checkRegisteredVehicle(this.vehicle.vehiclePlateNumber),
    is(true)
  );
});

Then(
  "I should be informed this this vehicle has already been registered into my fleet",
  function () {
    // Write code here that turns the phrase above into concrete actions
    assertThat(
      this.fleet.register(this.vehicle.vehiclePlateNumber),
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

Then(
  "I should be informed that my vehicle is already parked at this location",
  function () {
    // Write code here that turns the phrase above into concrete actions
    assertThat(
      this.vehicle.park(this.location),
      is("vehicle is already parked at this location")
    );
  }
);
