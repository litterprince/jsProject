var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

var userSchema = new mongoose.Schema({
	userName: {
		unique: true,
		type: String
	},
	password: String,
	/*
		0: normal user
		1：verified user
		2: professional user
		>10: admin
		>50: super admin
	*/
	role: {
		type: Number,
		default: 0
	},
	meta: {
		createAt:{
			type: Date,
			default: Date.now
		},
		updateAt:{
			type: Date,
			default: Date.now
		}
	}
})

userSchema.pre('save', function(next){
	if(this.isNew){
		this.meta.updateAt = this.meta.createAt = new Date;
	}else{
		this.meta.updateAt = new Date;
	}

	this.password = bcrypt.hashSync(this.password);
	next();
})

userSchema.statics = {
	findByName: function(name){
		return this.find({userName: name});
	}
}

userSchema.methods = {
	comparePW: function(password, hash){
		return bcrypt.compareSync(password, hash);
	}
}

module.exports = userSchema