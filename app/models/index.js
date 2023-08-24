const dbConfig = require("../config/db.config".js);

const Sequelize = require ("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbconfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbconfig.dialect,
    operatorsAliases:false,

    pool:{
    max:dbConfig.pool.max,
    min:dbConfig.pool.min,
    acquire:dbConfig.pool.acquire,
    idle:dbConfig.pool.idle
    }
    });

     const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

  module.exports = db;