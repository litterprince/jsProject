var express = require('express')
var router = express.Router()
var User = require('../models/user.js')

router.get('/loginPage', function(req, res){
	res.render('login', {
		title: '用户登陆'
	})
})

router.get('/logupPage', function(req, res){
	res.render('logup', {
		title: '用户注册'
	})
})

//登陆方法
router.post('/login', function(req, res){
	var _user = req.body.user;
	User.findOne({userName: _user.userName}, function(err, user){
		if(!err){
			var result = user.comparePW(_user.password, user.password);
			if(result){
				req.session.user = user;
				console.log(user.userName + ' login success!')
			}
			res.redirect('/');
		}else{
			console.log(err);
		}
	});
})

//注册方法
router.post('/logup', function(req, res){
	var _user = req.body.user;
	User.create(_user, function(err){
		err ? console.log(err) : res.redirect('/');
	});
})

//登出方法
router.get('/logout', function(req, res){
	if(req.session.user) {
		console.log(req.session.user.userName + ' logout success!')
		req.session.destroy();
	}
	res.redirect('/');
})

module.exports = router