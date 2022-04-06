const { get_fleet_by_id } = require("../infra/getters/get_fleet_by_id");
const {
  update_vehicles_registered,
} = require("../infra/setters/register_vehicle.setter");

const Fleet = require("../domain/fleet");

const register_vehicle = async (fleetID, vehiclePlateNumber) => {
  const fleetData = await get_fleet_by_id(fleetID);
  console.log(fleetData);

  const myFleetCopy = new Fleet(
    fleetData[0].id,
    fleetData[0].userID,
    fleetData[0].registeredVehiclesPlateNumber
  );

  const result = myFleetCopy.register(vehiclePlateNumber);

  const database_update = await update_vehicles_registered(myFleetCopy);

  if (database_update.rowCount !== 1) {
    return "Error database update failed";
  }

  return result;
};

// console.log(register_vehicle(2, "PA34ZE")); // todo remove
module.exports = register_vehicle;
