var express = require('express')
var router = express.Router()
var Promise = require("bluebird");
var Category = require('../models/category.js')
var Movie = require('../models/movie.js')

router.use(function(req, res, next){
	if(!req.session.user){
		res.redirect('/user/loginPage')
	}else{
		next();
	}
})

router.get('/index', function(req, res){
	Category.fetch(function(err, categories){
		res.render('category/index', { title: '标签列表', categories: categories })
	})
})

router.get('/new', function(req, res){
	res.render('category/edit', {
		title: '分类录入',
		action:'/category/save',
		category: {}
	});
})

router.get('/modify/:id', function(req, res){
	var _id = req.params.id;
	Category.findById(_id, function(err, doc){
		err ? console.log(err) : res.render('category/edit', {title: '修改分类', action:'/category/update', category: doc});
	})
})

router.post('/save', function(req, res){
	var _category = req.body.category;
	delete _category._id;

	var category = new Category(_category);
	category.save(function(err, doc){
		err ? console.log(err) : res.redirect('/category/index');
	})
})

router.post('/update', function(req, res){
	var _category = req.body.category;
	if(_category._id){
		Category.findById(_category._id, function(err, category){
			category.set({
				name: _category.name
			});
			category.save(function(err){
				err ? console.log(err) : res.redirect('/category/index')
			});
		})
	}
})

router.post('/del', function(req, res){
	var _id = req.body.id;
	Category.findByIdAndRemove(_id).exec().then(function(doc){
		var promiseArr = [];

		Movie.find({},'category').where('category').exists().exec().then(function(docs){
			docs.forEach(function(item){
				var index = item.category.indexOf(_id);
				if(index != -1){
					item.category.splice(index, 1);
					promiseArr.push(item.save());
				}
			})
		})
		return Promise.all(promiseArr);
	}).spread(function(){
		res.json({ msg:'success', status : 1});
	}).catch(function(err){
		console.log(err)
	})
})

module.exports = router

