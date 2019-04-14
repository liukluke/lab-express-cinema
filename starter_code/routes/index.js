const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res) => res.render('index'));

router.get('/movies', (req, res, next) => {
  Movie.find({})
  .then((movies) => res.render('movies', {movies}))
  .catch(() => next())
});

router.post("/movies", (req, res, next) => {
  Movie.find({})
  .then((movies) => res.render('movies', {movies}))
  .catch(() => next())
});

router.get("/movies/:id", (req, res, next) => {
  let moviesId = req.params.id;
  Movie.findById(moviesId)
  .then((movies) => res.render('info', movies))
  .catch(() => next())
});

module.exports = router;
