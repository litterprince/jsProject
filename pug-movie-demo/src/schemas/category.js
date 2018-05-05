var mongoose = require('mongoose')

var Category = new mongoose.Schema({
	name: String,
	movie: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Movie'
	}],
	meta: {
		createAt:{
			type: Date,
			default: Date.now()
		},
		updateAt:{
			type: Date,
			default: Date.now()
		}
	}
})

Category.pre('save', function(next){
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	}else{
		this.meta.updateAt = Date.now();
	}
	next();
})

Category.statics = {
	fetch: function(cb){
		return this.find({}).sort('meta.updateAt').exec(cb);
	},
	getMovieByCategory: function(id, cb){
		return this
			.find({_id, id})
			.populate('category')
			.sort('meta.updateAt')
			.exec(cb);
	}
}

module.exports = Category