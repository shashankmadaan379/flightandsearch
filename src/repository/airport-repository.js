const { Airport } = require("../models/index");
class AirportRepository {
  async createAirport(name, cityId) {
    try {
      const airport = await Airport.create({
        name,
        cityId,
      });
      return airport;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }

  async deleteAirport(airportId) {
    try {
      await Airport.destroy({
        where: {
          id: airportId,
        },
      });
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }
}

module.exports = AirportRepository;
