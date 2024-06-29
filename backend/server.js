const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const multer = require('multer');
const path = require('path');

const PORT = process.env.PORT || 8070;
const URL = process.env.MONGODB_URL;

// Middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());

// Serve static files from the public/images directory
app.use('/public/images', express.static(path.join(__dirname, 'public', 'images')));


// Database Connection
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection success");
});


// Routes
const servicesRouter = require("./routes/services.js");
app.use("/service", servicesRouter);

const appoinmentsRouter = require("./routes/appoinments.js");
app.use("/appoinment", appoinmentsRouter);

const employeesRouter = require("./routes/employees.js");
app.use("/employee", employeesRouter);

const userRouter = require("./routes/userLogins.js");
app.use("/user", userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is up and running on port number ${PORT}`);
});
