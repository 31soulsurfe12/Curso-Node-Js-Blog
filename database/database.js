const Sequelize = require("sequelize");

const connection = new Sequelize("guiapress", "root", "souldo3112", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;
