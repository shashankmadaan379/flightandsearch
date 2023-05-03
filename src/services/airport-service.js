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
}
module.exports = AirportService;
