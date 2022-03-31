class Fleet {
  constructor() {
    this.vehicles = [];
  }

  register(vehicle) {
    this.vehicles.push(vehicle);
  }

  registeredVehicles() {
    return this.vehicles;
  }
}

module.exports = Fleet;
