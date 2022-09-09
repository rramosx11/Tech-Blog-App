// import the Sequelize constructor from the library
const Sequelize = require("sequelize");
require("dotenv").config();

// create connection to our database, pass in your MySQL information for username and passworddsdksjflsdjflksdj

const sequelize = process.env.JAWSDB_URL
  ? (Sequelize = process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );

module.exports = sequelize;
