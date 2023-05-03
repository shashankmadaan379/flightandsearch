const { AirplaneService } = require("../services/index");
const airplaneService = new AirplaneService();
const create = async (req, res) => {
  try {
    const { modelNumber, capacity } = req.body;
    const airplane = await airplaneService.createAirplane(
      modelNumber,
      capacity
    );
    return res.status(201).json({
      data: airplane,
      success: true,
      message: "Succesfully created an airplane !",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create an airplane",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await airplaneService.deleteAirplane(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Succesfully deleted airplane !",
      arr: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete an airplane",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const airplane = await airplaneService.updateAirplane(
      req.params.id,
      req.body
    );
    return res.status(201).json({
      data: airplane,
      success: true,
      message: "Succesfully updated airplane !",
      arr: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the airplane",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
};
