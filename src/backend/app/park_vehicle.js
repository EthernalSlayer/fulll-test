const data = require("../infra/data.json");

const Fleet = require("../domain/fleet");
const Vehicle = require("../domain/vehicle");

const park_vehicle = (fleetID, vehiclePlateNumber, lat, long) => {
  const location = { lat: lat, long: long };

  const myFleetData = data.fleets.filter((fleet) => fleet.id === fleetID);
  const myFleetCopy = new Fleet(
    myFleetData[0].id,
    myFleetData[0].userID,
    myFleetData[0].registeredVehiclesPlateNumber
  );

  if (myFleetCopy.checkRegisteredVehicle(vehiclePlateNumber) !== true) {
    return "the vehicle is not register in this fleet";
  }

  const myVehicleData = data.vehicles.filter(
    (vehicle) => vehicle.vehiclePlateNumber === vehiclePlateNumber
  );

  const myVehicleCopy = new Vehicle(
    myVehicleData[0].vehiclePlateNumber,
    myVehicleData[0].id,
    myVehicleData[0].located
  );

  //   myVehicleCopy.park(location); // just for test the alredy registered case
  return myVehicleCopy.park(location);
};

console.log(park_vehicle(1, "PA34ZE", 48.86, 2.28));
