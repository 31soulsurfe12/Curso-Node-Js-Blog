const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define("articles", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Category.hasMany(Article); // (hasMany)uma categoria tem muitos artigos
Article.belongsTo(Category); // (belongsTo)um artigo pertence a uma categoria

//sincronização de models
//Article.sync({ force: true })* APÓS CRIAÇÃO DE TABELA REMOVER PARA EVITAR A RECRIAÇÃO DE TABELAS.

module.exports = Article;
