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
