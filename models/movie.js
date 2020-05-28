/* MOVIE MODEL */

const mongoose = require('mongoose');


// Declare model schema
const MovieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	runtime: Number,
	releaseDate: {
		type: Date,
		default: Date.now(),
	},
	certification: String,
});

// Declare model
const Movie = mongoose.model("Movie", MovieSchema);
// collection: "movies" - Den gissar på pluralformen av modelnamnet. Om man vill ge den ett eget namn kan man skicka med det som tredje parameter.


// Export
module.exports = Movie;
