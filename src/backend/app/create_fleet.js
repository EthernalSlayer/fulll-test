const data = require("../infra/data.json");

const Fleet = require("../domain/fleet");

const create_fleet = (userID) => {
  const usersData = data.users.map((user) => user.id);

  if (!usersData.includes(userID)) {
    return "this user ID doesn't exist";
  }

  const myNewFleetID = data.fleets.length + 1;

  const myNewFleet = new Fleet(myNewFleetID, userID);

  return myNewFleet.id;
};

// console.log(create_fleet(1)); todo remove
module.exports = create_fleet;
