const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post("/movies", (req, res) => {
  Movie.find({})
  .then((movies) => {
    res.render('movies', {movies});
  })
  .catch((err) => {
    console.log(err);
  })

});

module.exports = router;
