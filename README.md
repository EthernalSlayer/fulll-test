# fulll-test

## Dependencies
to install dependencies:
npm i

## Database
create a new postgresql database
And create this tables:
```
CREATE TABLE IF NOT EXISTS public."user"
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    name varchar(20) NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public."user"
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.fleet
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "userID" bigint NOT NULL,
    "registeredVehiclesPlateNumber" varchar(6)[] NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public.fleet
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.vehicle
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "vehiclePlateNumber" varchar(6) NOT NULL,
    located json NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public.vehicle
    OWNER to postgres;
```

## Database config
copy .env.default into .env
enter your environment variables

## Commands

to compile the code during the development:
npm run dev

to compile once:
npm run compile

to run the first algo test:
npm run algo1

to run the second algo test:
npm run algo2

to run cucumber tests for backend:
npm test

to run feature create a fleet:
node src/backend/ create {userID}

to run feature register a vehicle:
node src/backend/ register-vehicle <fleetID> <vehiclePlateNumber>

to run feature park a vehicle:
node src/backend/ localize-vehicle <fleetID> <vehiclePlateNumber> <lat> <lng>