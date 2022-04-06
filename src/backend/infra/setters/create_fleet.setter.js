const db = require("../config/db");

module.exports.fleet_create = async (fleet) => {
  const userID = fleet.userID;
  const registeredVehiclesPlateNumber = fleet.registeredVehiclesPlateNumber;
  const query =
    'INSERT INTO "fleet" ("userID", "registeredVehiclesPlateNumber") VALUES ($1, $2) RETURNING id';
  const data = await db.pool.query(query, [
    userID,
    registeredVehiclesPlateNumber,
  ]);
  db.pool.end();
  return data;
};
