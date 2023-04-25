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
- Model_Number
- Capacity
- created_at -> when u created an entity
- updated_at

# Flights Table

- id
- source_airport_id
- destination_airport_id
- departure_date
- arrival_date
- departure_time
- arrival time

# City Table

- id
- name

# Airport Table

- id
- name
- city_id
- address
