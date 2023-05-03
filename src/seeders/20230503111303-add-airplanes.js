"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
     */

    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "Boeing737",
          capacity: 220,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "BombardierQ400",
          capacity: 210,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Hindustan228",
          capacity: 250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
