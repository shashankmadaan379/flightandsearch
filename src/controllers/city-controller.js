const { CityService } = require("../services/index");

const cityService = new CityService();
const create = (req, res) => {
  try {
    const city = cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Succesfully created city !",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};
const destroy = (req, res) => {};
const update = (req, res) => {};
const get = (req, res) => {};

module.exports = {
  create,
  destroy,
  update,
  get,
};
