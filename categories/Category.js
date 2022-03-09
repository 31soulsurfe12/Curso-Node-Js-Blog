const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = connection.define("categories", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
//sincronização de models
//Category.sync({ force: true })* APÓS CRIAÇÃO DE TABELA REMOVER PARA EVITAR A RECRIAÇÃO DE TABELAS.
module.exports = Category;
