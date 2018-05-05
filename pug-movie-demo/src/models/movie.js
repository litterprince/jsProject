var mongoose = require('mongoose');
var schema = require('../schemas/movie.js');
var Movie = mongoose.model('Movie', schema);

module.exports = Movie;