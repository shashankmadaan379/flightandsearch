const { AirplaneRepository } = require("../repository/index");
class AirplaneService {
  constructor() {
    this.AirplaneRepository = new AirplaneRepository();
  }

  async createAirplane(modelNumber, capacity) {
    try {
      const airplane = await this.AirplaneRepository.createAirplane(
        modelNumber,
        capacity
      );
      return airplane;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async deleteAirplane(airplaneId) {
    try {
      const response = await this.AirplaneRepository.deleteAirplane(airplaneId);
      return response;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }
}

module.exports = AirplaneService;
