/* APP ROUTER */

const express = require('express');
const router = express.Router();


/* GET / */
router.get('/', (req, res) => {
	res.send({ status: 'success' });
});


router.use("/movies", require("./movies_router"))

module.exports = router;
