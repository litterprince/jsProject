var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

mongoose.connect('mongodb://127.0.0.1:27017/movies').then(
	function(){
		console.log('mongodb has connected')
	},
	function(err){
		console.log(err);
	}
)

module.exports = {}