/* SETTING UP MODEL-DATABASE CONNECTION */

const mongoose = require("mongoose");

// Connect to database
mongoose.connect(process.env.DB_CONNECTION, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("I am connected to MongoDB!!!");
});

// Set up the models we want to use in our app
const models = {};
models.Movie = require("./movie");

// Export
module.exports = {
	mongoose,
	...models,
}
