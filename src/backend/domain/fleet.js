class Fleet {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    this.vehicles = [];
    this.registeredVehiclesPlateNumber = [];
  }

  register(vehicle) {
    if (
      this.registeredVehiclesPlateNumber.includes(vehicle.vehiclePlateNumber)
    ) {
      return "this vehicle has already been registered";
    }
    this.vehicles.push({ ...vehicle });
    this.registeredVehiclesPlateNumber.push(vehicle.vehiclePlateNumber);
  }

  registeredVehicles() {
    return this.vehicles;
  }
}

module.exports = Fleet;
