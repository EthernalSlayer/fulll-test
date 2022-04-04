class Vehicle {
  constructor(plateNumber, id, located) {
    this.id = id;
    this.vehiclePlateNumber = plateNumber;
    this.located = located ? located : {};
  }

  park(location) {
    if (
      this.located.lat === location.lat &&
      this.located.long === location.long
    ) {
      return "vehicle is already parked at this location";
    }
    this.located = location;
    return "this vehicle is parked with success";
  }
}

module.exports = Vehicle;
