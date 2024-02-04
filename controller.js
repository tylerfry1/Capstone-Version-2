require("dotenv").config();
const Sequelize = require("sequelize");
const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getAnswer: (req, res) => {
    sequelize
      .query(
        `
        SELECT * FROM answer
        `
      )
      .then((dbRes) => {
        console.log("getAnswer");
        res.status(200).send(dbRes[0]);
      });
  },
};
