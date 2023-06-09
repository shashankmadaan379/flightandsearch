const { City } = require("../models/index");
const { Op } = require("sequelize");

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

  async getAllCities(filter) {
    //filter can be empty also
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }

  async createMultipleCities(cities) {
    try {
      const response = cities.map((city) => ({
        name: city.name,
      }));
      await City.bulkCreate(response);
      return "Succesfully created cities";
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }
}

module.exports = CityRepository;
