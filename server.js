const express = require("express");

const { getAnswer } = require("./controller");

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.post("/submit_data", (req, res) => {
  const buttonData = req.body.buttonData;
  console.log("Received Button data:", buttonData);
  res.send({ message: "Button data received successfully" });
});
app.get("/api/answer", getAnswer);

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
