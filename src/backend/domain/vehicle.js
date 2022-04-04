class Vehicle {
  constructor(plateNumber, id) {
    this.id = id;
    this.vehiclePlateNumber = plateNumber;
    this.located = {};
  }

  park(location) {
    if (this.located === location) {
      return "vehicle is already parked at this location";
    }
    this.located = location;
  }
}

module.exports = Vehicle;
