var mongoose = require('mongoose')
var schema = require('../schemas/category.js')
var CategoryModel = mongoose.model('Category', schema)

module.exports = CategoryModel