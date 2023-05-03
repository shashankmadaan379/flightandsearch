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

  async updateAirplane(airplaneId, data) {
    try {
      const airplane = await this.AirplaneRepository.updateAirplane(
        airplaneId,
        data
      );
      return airplane;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async getAirplane(airplaneId) {
    try {
      const airplane = await this.AirplaneRepository.getAirplane(airplaneId);
      return airplane;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }
}

module.exports = AirplaneService;
