const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

const UserRouter = require("./src/routes/auth.routes");
app.use("/user",UserRouter);

module.exports = {app};