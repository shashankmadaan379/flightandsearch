const { FlightService } = require("../services");
const flightService = new FlightService();
const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Succesfully created flight !",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.id);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Succesfully fetched a flight !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
};
