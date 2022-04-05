const db = require("../config/db");

module.exports.get_users_id = async () => {
  const query = 'SELECT ARRAY_AGG(id) FROM "user"';
  const data = await db.pool.query(query);
  db.pool.end();
  return data.rows[0].array_agg.map((id) => parseInt(id));
};
