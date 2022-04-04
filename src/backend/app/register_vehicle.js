const data = require("../infra/data.json");

const Fleet = require("../domain/fleet");

const register_vehicle = (fleetID, vehiclePlateNumber) => {
  fleetID = 1; // todo remove
  vehiclePlateNumber = "PA34ZE"; // todo remove

  const myFleetData = data.fleets.filter((fleet) => fleet.id === fleetID);

  const myFleetCopy = new Fleet(
    myFleetData[0].id,
    myFleetData[0].userID,
    myFleetData[0].registeredVehiclesPlateNumber
  );

  return myFleetCopy.register(vehiclePlateNumber);
};

console.log(register_vehicle()); // todo remove
