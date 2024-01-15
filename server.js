const express = require("express");

const { postAnswer, getAnswer } = require("./controller");

const app = express();
app.use(express.json());

app.post("/api/display", postAnswer);
app.get("/api/answer", getAnswer);

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
