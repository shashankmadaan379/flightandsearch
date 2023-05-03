const { FlightRepository } = require("../repository/index");

class FlightService {
  constructor() {
    this.FlightRepository = new FlightRepository();
  }

  async createFlight() {}
}

module.exports = FlightService;
