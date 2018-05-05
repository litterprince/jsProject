var schema = require('../schemas/user.js')
var mongoose = require('mongoose')
var User = mongoose.model('User', schema);

module.exports = User