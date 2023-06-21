require("dotenv").config();
const express = require("express");
const router = require("./src/routes/router");
const errorHandler = require("./src/service/errorHandler");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

app.use("/", router);

app.use(errorHandler.manage);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on ${process.env.HOST}:${process.env.PORT}`);
});
