const data = require("../infra/data.json");

const Fleet = require("../domain/fleet");

const register_vehicle = (fleetID, vehiclePlateNumber) => {
  const myFleetData = data.fleets.filter((fleet) => fleet.id === fleetID);

  const myFleetCopy = new Fleet(
    myFleetData[0].id,
    myFleetData[0].userID,
    myFleetData[0].registeredVehiclesPlateNumber
  );

  return myFleetCopy.register(vehiclePlateNumber);
};

console.log(register_vehicle(2, "PA34ZE")); // todo remove
