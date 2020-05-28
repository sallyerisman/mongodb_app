/* MOVIE CONTROLLER */

const models = require("../models");

/* Get all movies */
const index = async (req, res) => {
	try {
		const movies = await models.Movie.find();

		res.send({
			status: 'success',
			data: {
				movies,
			}
		});

	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exception thrown when trying to get all movies.',
		});
		throw error;
	}
}

/* Get a specific movie */
const show = (req, res) => {
	res.status(405).send({
		status: "fail",
		data: "Method not implemented."
	})
}

/* Create new movie */
const store = async (req, res) => {
	try {
		const movie = await new models.Movie(req.body).save();

		res.status(201).send({
			status: 'success',
			data: {
				movie,
			}
		});

	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exception thrown when trying to create new movie.',
		});
		throw error;
	}
}

/* Update a specific movie */
const update = (req, res) => {
	res.status(405).send({
		status: "fail",
		data: "Method not implemented."
	})
}

/* Delete a movie */
const destroy = (req, res) => {
	res.status(405).send({
		status: "fail",
		data: "Method not implemented."
	})
}


module.exports = {
	index,
	show,
	store,
	update,
	destroy,
}

