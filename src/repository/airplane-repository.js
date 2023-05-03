const { Airplane } = require("../models/index");

class AirplaneRepository {
  async createAirplane(modelNumber, capacity) {
    try {
      const airplane = await Airplane.create({
        modelNumber,
        capacity,
      });
      return airplane;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }
}
module.exports = AirplaneRepository;
