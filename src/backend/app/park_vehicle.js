const { get_fleet_by_id } = require("../infra/getters/get_fleet_by_id");
const {
  get_fleet_by_plate_number,
} = require("../infra/getters/get_vehicle_by_plate_number");

const Fleet = require("../domain/fleet");
const Vehicle = require("../domain/vehicle");

const park_vehicle = async (fleetID, vehiclePlateNumber, lat, long) => {
  const location = { lat: lat, long: long };

  const fleetData = await get_fleet_by_id(fleetID);

  const myFleetCopy = new Fleet(
    fleetData[0].id,
    fleetData[0].userID,
    fleetData[0].registeredVehiclesPlateNumber
  );

  if (myFleetCopy.checkRegisteredVehicle(vehiclePlateNumber) !== true) {
    return "the vehicle is not register in this fleet";
  }

  const vehicleData = await get_fleet_by_plate_number(vehiclePlateNumber);
  console.log(vehicleData);

  const myVehicleCopy = new Vehicle(
    vehicleData[0].vehiclePlateNumber,
    vehicleData[0].id,
    vehicleData[0].located
  );

  const result = myVehicleCopy.park(location);

  return result;
};

module.exports = park_vehicle;
