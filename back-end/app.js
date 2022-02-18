// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const watchController = require("./controllers/watchController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
require("dotenv").config();

// ROUTES
app.use("/watches", watchController);

// Home route
app.get("/", (req, res) => {
	res.send("Watch Store ");
});

app.get("*", (req, res) => {
	res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
