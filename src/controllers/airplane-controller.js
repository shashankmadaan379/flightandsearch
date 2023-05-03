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

module.exports = {
  create,
};
