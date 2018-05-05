var express = require('express')
var router = express.Router()
var Promise = require('bluebird')
var Movie = require('../models/movie.js')
var Categroy = require('../models/category.js')

router.get('/', function(req, res){
	var limit = 2;
	var params = req.query.params || {};
	params.page = params.page == undefined ?  1 : params.page;
	params.limit = limit;
	var index = (params.page-1) * limit;

	var promiseArr = [];
	var dataList = {
		getMovie: function(){
			var promise = [];
			if(params.catId){
				promise = promise.concat(this.getMovieByCatId());
			}else if(params.movieName){
				promise = promise.concat(this.getMovieByName());
			}else{
				promise = promise.concat(this.getAllMovie());
			}
			return promise
		},
		getMovieByCatId: function(){
			var arr = [];
			var match = params.movieName ? {title: eval("/"+params.movieName+"/")} : null;
			var promise = Categroy
				.find({_id: params.catId},'movie')
				.populate('movie', 'title poster', match)
				.limit(limit)
				.skip(index)
				.sort('_id')
				.exec();
			var count = Categroy
				.find({_id: params.catId},'movie')
				.populate('movie', 'title poster', match)
				.count()
				.exec();
			arr.push(promise);
			arr.push(count);
			return arr;
		},
		getMovieByName: function(){
			var arr = [];
			var promise = Movie
				.find({}, 'title poster')
				.where('title', eval("/"+params.movieName+"/"))
				.limit(limit)
				.skip(index)
				.sort('_id')
				.exec();
			var count = Movie
				.find({}, 'title poster')
				.where('title', eval("/"+params.movieName+"/"))
				.count()
				.exec();
			arr.push(promise);
			arr.push(count);
			return arr;
		},
		getAllMovie: function(){
			var arr = [];
			var promise = Movie
				.find({},'title poster')
				.limit(limit)
				.skip(index)
				.sort('_id')
				.exec();
			var count = Movie
				.find({},'title poster')
				.count()
				.exec();
			arr.push(promise);
			arr.push(count);
			return arr;
		},
		getCategory: function(){
			return Categroy.fetch();
		}
	}
	promiseArr = promiseArr.concat(dataList.getMovie());
	promiseArr.push(dataList.getCategory());
	Promise.all(promiseArr)
	.spread(function(movies, count, categories){
		var _movies;
		if(params.catId){
			_movies = movies[0] ? movies[0].movie : [];
			count = movies[0] ? movies[0].movie.length : 0;
		}else{
			_movies = movies;
		}
		params.count = count;
		res.render('index', {
			title:'首页',
			movies: _movies,
			categories: categories,
			params:params
		});
	}).catch(function(err){
		console.log(err);
	})
})

router.get('/movie/show/:id', function(req, res){
	Movie.findById(req.params.id, function(err, movie){
		err ? console.log(err) : res.render('detail', { title: '电影详情', movie: movie })
	})
})

module.exports = router