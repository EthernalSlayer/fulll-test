const register_vehicle = require("./app/register_vehicle");
const park_vehicle = require("./app/park_vehicle");
const create_fleet = require("./app/create_fleet");

const args = process.argv.slice(2);
const action = args[0];

const commandResult = async (action) => {
  switch (action) {
    case "create":
      const result = await create_fleet(parseInt(args[1]));
      console.log(result);
      break;
    case "register-vehicle":
      const register_vehicle_result = await register_vehicle(
        parseInt(args[1]),
        args[2]
      );
      console.log(register_vehicle_result);
      break;
    case "localize-vehicle":
      console.log(
        park_vehicle(
          parseInt(args[1]),
          args[2],
          parseFloat(args[3]),
          parseFloat(args[4])
        )
      );
      break;
    default:
      console.log("Sorry the command not found");
  }
};
commandResult(action);

// ./fleet create <userId> # returns fleetId on the standard output
// ./fleet register-vehicle <fleetId> <vehiclePlateNumber>
// ./fleet localize-vehicle <fleetId> <vehiclePlateNumber> lat lng [alt]
