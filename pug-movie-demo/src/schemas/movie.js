var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
	title: String,
	director: String,
	country: String,
	language: String,
	poster: String,
	flash: String,
	year: Number,
	summary: String,
	category: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category'
	}],
	meta: {
		createAt:{
			type: Date,
			default: Date.now()
		},
		updateAt:{
			type: Date,
			defalut: Date.now()
		}
	}
});

movieSchema.pre('save', function(next){
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	}else{
		this.meta.updateAt = Date.now();
	}
	next();
});

movieSchema.statics = {
	fetch: function(cb){
		return this
			.find({})
			.sort('meta.updateAt').
			exec(cb);
	}
};

module.exports = movieSchema;