const express = require("express");
const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const AirplaneController = require("../../controllers/airplane-controller");
const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);

router.post("/cities", CityController.createMutlipleCities);

router.post("/airport", AirportController.create);
router.delete("/airport/:id", AirportController.destory);
router.patch("/airport/:id", AirportController.update);
router.get("/airport/:id", AirportController.get);

router.post("/airplane", AirplaneController.create);
module.exports = router;
