const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const { name, cityId } = req.body;
    const airport = await airportService.createAirport(name, cityId);
    return airport;
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create an airport",
      err: error,
    });
  }
};

module.exports = {
  create,
};
