const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.AirportRepository = new AirportRepository();
  }

  async createAirport(name, cityId) {
    try {
      const airport = await this.AirportRepository.createAirport(name, cityId);
      return airport;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async deleteAirport(airportId) {
    try {
      const response = await this.AirportRepository.deleteAirport(airportId);
      return response;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airport = await this.AirportRepository.updateAirport(
        airportId,
        data
      );
      return airport;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await this.AirportRepository.getAirport(airportId);
      return airport;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }
}
module.exports = AirportService;
