const db = require("../config/db");

module.exports.update_vehicle_location = async (vehicle) => {
  const vehicleID = vehicle.id;
  const location = vehicle.located;

  const query = "UPDATE vehicle SET located = $1 WHERE id = $2";

  const data = await db.pool.query(query, [location, vehicleID]);

  db.pool.end();

  return data;
};
