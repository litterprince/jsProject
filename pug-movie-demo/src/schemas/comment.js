var mongoose = require('mongoose')
var objectId = mongoose.Schema.Types.ObjectId

var CommentSchema = new mongoose.Schema({
	movie: { type: ObjectId, ref: 'Movie'},
	from: { type: ObjectId, ref: 'User'},
	content: String,
	reply: {
		from: { type: ObjectId, ref: 'User'},
		to: {type: ObjectId, ref: 'User'},
		content: String
	}
	meta:{
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

module.exports = CommentSchema