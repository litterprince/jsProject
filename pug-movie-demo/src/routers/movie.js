var express = require('express')
var app = express()
var router = express.Router()
var Promise = require("bluebird");
var Movie = require('../models/movie.js')
var Category = require('../models/category.js')
var List = require('../../public/js/utils/array.js')

router.use(function(req, res, next){
	if(req.session.user){
		next();
	}else{
		res.redirect('/user/loginPage');
	}
})

router.get('/index', function(req, res){
	Movie.fetch(function(err, movies){
		err ? console.log(err) : res.render('movie/index', { title:'电影列表', movies: movies })
	})
})

router.get('/new', function(req, res){
	Category.fetch(function(err, doc){
		err ? console.log(err) : res.render('movie/edit', {
			title: '电影录入',
			action:'/movie/save',
			movie: {},
			categories: doc
		})
	})
})

router.get('/modify/:id', function(req, res){
	var movie = {};

	Movie.findById(req.params.id).exec()
	.then(function(doc){
		movie = doc;
		return Category.fetch();
	})
	.then(function(docs){
		var categories = [];
		docs.forEach(function(doc, index){
			var category = doc.toObject();
			movie.category.forEach(function(item, index){
				if(doc._id.toString() === item.toString()){
					category.checked = true;
				}
			})
			categories.push(category);
		})
		res.render('movie/edit', {
			title: '电影更新',
			action:'/movie/update',
			movie: movie,
			categories: categories
		})
	})
	.catch(function(err){
		console.log(err)
	})
})

router.post('/save', function(req, res){
	var _movie = req.body.movie;
	var _name = req.body.category || "";
	delete _movie._id;

	Movie.create(_movie).then(function(movie){
		var promiseArr = [];
		var _category = movie.category;
		var _movieId = movie._id;

		//标签下添加电影
		_category.forEach(function(_categoryId){
			Category.findById(_categoryId).exec().then(function(category){
				category.movie = category.movie || [];
				category.movie.push(_movieId);
				promiseArr.push(category.save());
			})
		})

		//自定义标签
		if(_name){
			_name.split(',').forEach(function(item){
				var category = new Category({name: item, movie: [_movieId]});
				category.save().then(function(category){
					movie.category = movie.category || [];
					movie.category.push(category._id);
					promiseArr.push(movie.save());
				})
			})
		}

		return Promise.all(promiseArr)
	}).spread(function(){
		res.redirect('/movie/index');
	}).catch(function(err){
		console.log(err)
	})
})

router.post('/update', function(req, res){
	var _movie = req.body.movie;
	var _name = req.body.category || "";

	Movie.findById(_movie._id).exec().then(function(movie){
		var promiseArr = [];
		var _category = movie.toObject().category;
		var _list = new List(_category, _movie.category);
		_list.setDiff();

		//movie修改
		movie.set({
			title : _movie.title,
			director : _movie.director,
			country : _movie.country,
			language : _movie.language,
			poster : _movie.poster,
			flash : _movie.flash,
			year : _movie.year,
			category: _movie.category,
			summary : _movie.summary
		});
		promiseArr.push(movie.save());

		//标签下添加电影
		Category.find({_id: { $in : _list.diff }}).exec().then(function(docs){
			for(var i=0;i<docs.length;i++){
				var doc = docs[i];
				var docMovie = doc.movie;
				if(_list.isNew(doc._id)){
					if(docMovie.length == 0){
						console.log(movie)
						docMovie.push(movie);
					}else{
						docMovie.indexOf(movie._id) == -1 ? docMovie.push(movie) : null;
					}
				}else{
					var index = docMovie.indexOf(movie._id);
					index != -1 ? docMovie.splice(index, 1) : null;
				}
				promiseArr.push(doc.save());
			}
		})

		//自定义标签
		if(_name){
			_name.split(',').forEach(function(item){
				var category = new Category({name: item, movie: [_movie._id]});
				category.save().then(function(doc){
					movie.category = movie.category || [];
					movie.category.push(doc._id);
					promiseArr.push(movie.save());
				})
			})
		}

		return Promise.all(promiseArr);
	}).spread(function(){
		res.redirect('/movie/index');
	}).catch(function(err){
		console.log(err);
	})
})

router.post('/del', function(req, res){
	var id = req.body.id;

	Movie.findById(id).exec().then(function(doc){
		var promiseArr = [];
		var movieId = doc._id;

		promiseArr.push(Movie.remove({_id: movieId}).exec());

		Category.find({}, 'movie').where('movie').exists().exec().then(function(docs){
			docs.map(function(doc){
				var index = doc.movie.indexOf(movieId.toString());
				if(index !== -1){
					doc.movie.splice(index, 1);
					promiseArr.push(doc.save());
				}
			})
			return Promise.all(promiseArr);
		}).spread(function(){
			res.json({ msg:'success', status:1});
		}).catch(function(err){
			console.log(err)
		});
	})
})

module.exports = router
