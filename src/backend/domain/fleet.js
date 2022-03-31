class Fleet {
  constructor() {
    this.vehicles = [];
  }

  register(vehicle) {
    if (vehicle.registered === true) {
      return "this vehicle has already been registered";
    }
    this.vehicles.push(vehicle);
  }

  registeredVehicles() {
    return this.vehicles;
  }
}

module.exports = Fleet;
