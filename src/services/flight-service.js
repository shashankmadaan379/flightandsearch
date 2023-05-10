const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.FlightRepository = new FlightRepository();
    this.AirplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime > data.departureTime)) {
        throw { error: "Arrival time cannot be less than departure time" };
      }
      const airplane = await this.AirplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.FlightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }
}

module.exports = FlightService;
