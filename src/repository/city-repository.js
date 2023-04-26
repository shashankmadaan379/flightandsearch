const e = require("express");
const { City } = require("../models/index");

class CityRepository {
  //create a city
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log(error);
    }
  }

  //delete a city using cityID
  async deleteCity({ cityID }) {
    try {
      await City.destroy({
        where: {
          id: cityID,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CityRepository;
