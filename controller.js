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

  postAnswer: (req, res) => {
    const { numberButtons, operationButtons, equalsButtons } = req.body;
    sequelize
      .query(
        `INSERT INTO display
      (numberButtons, operationButtons, equalsButton)
      VALUES
      ('${numberButtons}',${operationButtons},${equalsButtons})
      Returning *`
      )
      .then((dbRes) => {
        console.log("postAnswer created");
        res.status(200).send(dbRes[0]);
      });
  },
};
