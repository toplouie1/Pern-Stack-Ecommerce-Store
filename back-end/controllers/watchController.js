const express = require("express");
const watches = express.Router();

const { getAllWatches, getWatch } = require("../queries/watches.js");

// watches === /
watches.get("/", async (req, res) => {
	try {
		const AllWatches = await getAllWatches();
		if (AllWatches[0]) {
			res.status(200).json(AllWatches);
		} else {
			res.status(500).json({
				error: "server error",
			});
		}
	} catch (err) {
		console.log(err);
	}
});

watches.get("/:id", async (req, res) => {
	try {
		const oneWatch = await getWatch();
		if (oneWatch.id) {
			res.status(200).json(oneWatch);
		} else {
			res.status(500).json({
				error: "Not-Found",
			});
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = watches;
