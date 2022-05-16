const dbConfig = require('../config/database.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  });
  
  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.merchant =  require('./merchant.js')(sequelize, Sequelize);
  db.product = require('./product.js')(sequelize, Sequelize);

  module.exports = db;