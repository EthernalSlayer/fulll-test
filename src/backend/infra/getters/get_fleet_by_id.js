const db = require("../config/db");

module.exports.get_fleet_by_id = async (fleetID) => {
  const query =
    'SELECT id, "userID", "registeredVehiclesPlateNumber" FROM "fleet" WHERE id = $1';
  const data = await db.pool.query(query, [fleetID]);

  return data.rows;
};
