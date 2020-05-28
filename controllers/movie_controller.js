/* MOVIE CONTROLLER */

/* Get all movies */
const index = (req, res) => {
	res.status(405).send({
		status: "fail",
		data: "Method not implemented."
	})
}

/* Get a specific movie */
const show = (req, res) => {
	res.status(405).send({
		status: "fail",
		data: "Method not implemented."
	})
}

/* Create new movie */
const store = (req, res) => {
	res.status(405).send({
		status: "fail",
		data: "Method not implemented."
	})
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

