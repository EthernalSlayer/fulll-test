class Fleet {
  constructor(id, userID, registeredVehiclesPlateNumber) {
    this.id = id;
    this.userID = userID;
    this.registeredVehiclesPlateNumber = registeredVehiclesPlateNumber
      ? registeredVehiclesPlateNumber
      : [];
  }

  register(vehiclePlateNumber) {
    if (this.registeredVehiclesPlateNumber.includes(vehiclePlateNumber)) {
      return "this vehicle has already been registered";
    }
    this.registeredVehiclesPlateNumber.push(vehiclePlateNumber);
    return "this vehicle has been registered with success";
  }

  registeredVehicles() {
    return this.registeredVehiclesPlateNumber;
  }
}

module.exports = Fleet;
