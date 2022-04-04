const register_vehicle = require("./app/register_vehicle");

const args = process.argv.slice(2);
const action = args[0];

switch (action) {
  case "create":
    console.log("create");
    break;
  case "register-vehicle":
    console.log(register_vehicle(parseInt(args[1]), args[2]));
    break;
  case "localize-vehicle":
    console.log("localize-vehicle");
    break;
  default:
    console.log("Sorry the command not found");
}

// ./fleet create <userId> # returns fleetId on the standard output
// ./fleet register-vehicle <fleetId> <vehiclePlateNumber>
// ./fleet localize-vehicle <fleetId> <vehiclePlateNumber> lat lng [alt]
