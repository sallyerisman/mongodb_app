/* MOVIES ROUTER */

const express = require('express');
const router = express.Router();

const { index, show, store, update, destroy } = require("../controllers/movie_controller")

// GET /movies
router.get('/', index);

// GET /movies/movies:id
router.get('/movies:id', show);

// POST /movies
router.post('/', store);

// PUT /movies/movies:id
router.put('/movies:id', update);

// DELETE /movies/movies:id
router.delete('/movies:id', destroy);


module.exports = router;
