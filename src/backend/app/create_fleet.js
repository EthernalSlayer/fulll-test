const { get_users_id } = require("../infra/getters/get_users_id");

const Fleet = require("../domain/fleet");

const create_fleet = async (userID) => {
  const usersID = await get_users_id();

  if (usersID && !usersID.includes(userID)) {
    return "this user ID doesn't exist";
  }

  const myNewFleetID = usersID.length + 1;

  const myNewFleet = new Fleet(myNewFleetID, userID);
  console.log(myNewFleet);
  return myNewFleet.id;
};

// console.log(create_fleet(1)); todo remove
module.exports = create_fleet;
