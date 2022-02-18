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

const createWatch = async (watch) => {
	try {
		const newWatch = await db.one(
			"INSERT INTO watches (name , description , rating , image , featured , price) VALUES ($1 , $2 , $3 , $4 , $5 , $6) RETURNING *",
			[
				watch.name,
				watch.description,
				watch.rating,
				watch.image,
				watch.featured,
				watch.price,
			]
		);
		return newWatch;
	} catch (err) {
		return err;
	}
};

const deletedWatch = async (id) => {
	try {
		const deleteWatch = await db.one(
			"DELETE FROM watches WHERE id = $1 RETURNING * ",
			id
		);
		return deleteWatch;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllWatches,
	getWatch,
	createWatch,
	deletedWatch,
};
