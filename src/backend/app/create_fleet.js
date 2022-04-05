const data = require("../infra/data.json");

const Fleet = require("../domain/fleet");

const create_fleet = (userID) => {
  const usersData = data.users.map((user) => user.id);

  if (!usersData.includes(userID)) {
    return "this user ID doesn't exist";
  }

  const myNewFleet = new Fleet(3, userID);

  return myNewFleet.id;
};

console.log(create_fleet(1));
