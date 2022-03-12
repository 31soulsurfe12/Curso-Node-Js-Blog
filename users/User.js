const Sequelize = require("sequelize");
const connection = require("../database/database");

const User = connection.define("users", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
//sincronização de models
//User.sync({ force: true }); //* APÓS CRIAÇÃO DE TABELA REMOVER PARA EVITAR A RECRIAÇÃO DE TABELAS.
module.exports = User;
