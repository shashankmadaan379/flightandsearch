const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
// const { City } = require("./models/index");
// const CityRepository = require("./repository/city-repository");

const ApiRoutes = require("./routes/index");
const setUpAndStartServer = async () => {
  const app = express();

  //middlewares
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);

    // const repo = new CityRepository();
    // await repo.createCity({
    //   name: "Mumbai",
    // });

    // await repo.deleteCity({ cityID: 1 });
    // await City.create({
    //   name: "New Delhi",
    // });
  });
};
setUpAndStartServer();
