const db = require("../db/dbConfig.js");

const getAllWatches = async () => {
	try {
		const getAllWatches = await db.any("SELECT * FROM watches");
		return getAllWatches;
	} catch (err) {
		return err;
	}
};

const getWatch = async (id) => {
	try {
		const getWatch = await db.one("SELECT * FROM watches WHERE id=$1", id);
		return getWatch;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllWatches,
	getWatch,
};
