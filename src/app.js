require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/ToDoRoute");

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

MONGODB_URL = "mongodb://localhost:27017/TODO-LYXUX";

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log(`Connected to MONGO`);
  })
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
