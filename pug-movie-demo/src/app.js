var express = require('express')
var app = express()
var path = require('path')
var port = process.env.PORT || 3000
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose')
var logger = require('morgan')
require('./db/connect.js')
var index = require('./routers/index.js')
var movie = require('./routers/movie.js')
var user = require('./routers/user.js')
var category = require('./routers/category.js')

//middleware
app.use(cookieParser());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
var settings = {
    cookieSecret: 'mytest',
    db: 'movies',
    host: 'localhost',
    port: 27017
}
app.use(session({
    secret: settings.cookieSecret,
    key: settings.db,//cookie name
    cookie: {maxAge: 1000 * 60 * 60 * 3},//3 hour
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ url: 'mongodb://'+settings.host+':'+settings.port+'/'+settings.db })
}));

app.set('views', replacePath('views/pages/'))
app.set('view engine', 'pug');
app.use(express.static(replacePath('./../public')))
app.locals.moment = require('moment')

//router
app.use(function(req, res, next){
	if(req.session.user){
		app.locals.user = req.session.user;
	}else{
		delete app.locals.user;
	}
	next();
})
app.use(function(req, res, next){
	if(app.locals.user){
		res.locals.user = app.locals.user;
	}
	next();
})
app.use('/', index)
app.use('/movie', movie)
app.use('/user', user)
app.use('/category', category)

if('development' === app.get('env')){
	console.log('in development mode!')
	app.set('showStackError', true)
	app.use(logger('dev'))
	app.locals.pretty = true
	mongoose.set('debug', true)
}

var server = app.listen(port, function(){
	console.log('app listening at http://localhost:%s' ,port)
})

function replacePath(path1){
	return path.join(__dirname, path1);
}