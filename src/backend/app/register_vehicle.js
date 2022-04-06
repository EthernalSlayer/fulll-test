const data = require("../infra/data.json");
const { get_fleet_by_id } = require("../infra/getters/get_fleet_by_id");

const Fleet = require("../domain/fleet");

const register_vehicle = async (fleetID, vehiclePlateNumber) => {
  const myFleetData = data.fleets.filter((fleet) => fleet.id === fleetID);
  const fleetData = await get_fleet_by_id(fleetID);
  console.log(fleetData);

  const myFleetCopy = new Fleet(
    fleetData[0].id,
    fleetData[0].userID,
    fleetData[0].registeredVehiclesPlateNumber
  );

  const result = myFleetCopy.register(vehiclePlateNumber);
  console.log(myFleetCopy);
  return result;
};

// console.log(register_vehicle(2, "PA34ZE")); // todo remove
module.exports = register_vehicle;
