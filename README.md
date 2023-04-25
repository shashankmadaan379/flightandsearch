#Project Setup

- Clone the project on your local system.
- Execute "npm install" on the same path as of ur root directory of the downloaded project
- Create a ".env" file in the root directory and add the following environment variables.
  - "PORT=3000"
- Inside the "src/config" folder create a new file "config.json" and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "flightandsearch",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```

- Once you've added ur Db config as listed above, go to the src folder from your terminal and execute
  "npx sequelize db:create"

#DB Design

- Airplane Table
- Flight Table
- Airport Table
- City Table

# Airplane Table

- id
- model_number
- capacity

# Flights Table

- id
- departure_city_id
- destination_city_id
- airplane
- departure
- arrival
- flight_number
- airport_id

# City Table

- id
- name

# Airport Table

- id
- name
- city_id
- address
<<<<<<< HEAD
=======

<img width="448" alt="image" src="https://user-images.githubusercontent.com/99281921/234235911-fdb367f8-ea8b-479d-89fb-41b9506f03bb.png">
