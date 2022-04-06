const db = require("../config/db");

module.exports.update_vehicles_registered = async (fleet) => {
  const fleetID = fleet.id;
  const registeredVehiclesPlateNumber = fleet.registeredVehiclesPlateNumber;

  const query =
    'UPDATE fleet SET "registeredVehiclesPlateNumber" = $1 WHERE id = $2';

  const data = await db.pool.query(query, [
    registeredVehiclesPlateNumber,
    fleetID,
  ]);

  db.pool.end();

  return data;
};
