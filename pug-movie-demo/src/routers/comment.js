var app = require('express')()
var router = app.Router()
var Comment = require('../models/comment.js')

router.poset('/save', function(req, res){
	var _comment = req.body.comment;
	var movieId = _comment.movie;
	Comment.create(_comment, function(err, comment){

	})
})