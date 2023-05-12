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

const destroy = async (req, res) => {
  try {
    const flight = await flightService.deleteFlight(req.params.id);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Succesfully deleted flight !",
      arr: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the flight",
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

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights(req.query);
    return res.status(201).json({
      data: flights,
      success: true,
      message: "Succesfully fetched all flights !",
      arr: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flights",
      err: error,
    });
  }
};
module.exports = {
  create,
  get,
  getAll,
  destroy,
};
