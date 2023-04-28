const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.CityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }
  async deleteCity(cityID) {
    try {
      const response = await this.CityRepository.deleteCity(cityID);
      return response;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }
  async updateCity(cityID, data) {
    try {
      const city = await this.CityRepository.updateCity(cityID, data);
      return city;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }
  async getCity(cityID) {
    try {
      const city = await this.CityRepository.getCity(cityID);
      return city;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.CityRepository.getAllCities({
        name: filter.name,
      });
      return cities;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }
}
module.exports = CityService;
