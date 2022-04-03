class Vehicle {
  constructor(name, plateNumber, id) {
    this.id = id;
    this.name = name;
    this.vehiclePlateNumber = plateNumber;
    this.located = {};
  }

  park(location) {
    this.located = location;
  }
}

module.exports = Vehicle;
