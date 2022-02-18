const express = require("express");
const watches = express.Router();

const {
	getAllWatches,
	getWatch,
	createWatch,
	deletedWatch,
} = require("../queries/watches.js");

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
	const { id } = req.params;
	try {
		const oneWatch = await getWatch(id);
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

watches.post("/", async (req, res) => {
	const { body } = req;
	try {
		const createdWatch = await createWatch(body);
		if (createdWatch.id) {
			res.status(200).json(createdWatch);
		} else {
			res.status(404).json({ error: "/not found/" });
		}
	} catch (err) {
		console.log(err);
	}
});

watches.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const deleteWatch = await deletedWatch(id);
		if (deleteWatch.id) {
			res.status(200).json(deleteWatch);
		} else {
			res.status(404).json({ error: "/not found/" });
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = watches;
