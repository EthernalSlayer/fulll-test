const db = require("../config/db");

module.exports.get_fleet_by_plate_number = async (plateNumber) => {
  const query =
    'SELECT id, "vehiclePlateNumber", located FROM "vehicle" WHERE "vehiclePlateNumber" = $1';
  const data = await db.pool.query(query, [plateNumber]);

  return data.rows;
};
