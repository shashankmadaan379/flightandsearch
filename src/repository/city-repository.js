const e = require("express");
const { City } = require("../models/index");
const city = require("../models/city");

class CityRepository {
  //create a city
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }

  //delete a city using cityID
  async deleteCity(cityID) {
    try {
      await City.destroy({
        where: {
          id: cityID,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }

  async updateCity(cityID, data) {
    // data --- name:"haryana"
    try {
      // const city = await City.update(data, {
      //   where: {
      //     id: cityID,
      //   },
      // });

      const city = await City.findByPk(cityID);
      city.name = data.name;
      city.save();
      return city;
      return city;
    } catch (error) {
      console.log(error);
    }
  }

  async getCity(cityID) {
    try {
      const city = await City.findByPk(cityID);
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }
}

module.exports = CityRepository;
