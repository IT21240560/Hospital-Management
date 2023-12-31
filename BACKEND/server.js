const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors  = require("cors");
const dotenv   = require("dotenv");
const app = express();
require("dotenv").config();  
//create variable for available port
const PORT = process.env.PORT || 8083;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
 
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
})

const patientRouter = require("./routes/patients.js");



app.use("/patient",patientRouter);

app.listen(PORT,() => {
  console.log('Server is up and running on port number:${PORT}')
})