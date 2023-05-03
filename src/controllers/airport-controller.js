const { param } = require("../routes");
const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const { name, cityId } = await req.body;
    const airport = await airportService.createAirport(name, cityId);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Succesfully created airport !",
      err: {},
    });
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

const destory = async (req, res) => {
  try {
    const response = await airportService.deleteAirport(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Succesfully deleted airport !",
      arr: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete an airport",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const airport = await airportService.updateAirport(req.params.id, req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Succesfully updated airport !",
      arr: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the airport",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Succesfully fetched an airport !",
      arr: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the airport",
      err: error,
    });
  }
};

module.exports = {
  create,
  destory,
  update,
  get,
};
