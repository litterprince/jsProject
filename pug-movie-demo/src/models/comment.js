var mongoose = require('mongoose')
var schema = require('../schemas/comment.js')
var Comment = mongoose.model('Comment', schema)

module.exports = Comment