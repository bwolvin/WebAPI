var application_root = __dirname,
	express = require('express'),
	path = require('path'),
	mongoose = require('mongoose');

var app = express();

mongoose.connect( 'mongodb://localhost/equip-data' );

var userSchema = new mongoose.Schema({
	firstName: String,
	LastName: String,
	skill: String
});

var userModel = mongoose.model('User', userSchema)

app.configure(function() {
	app.use(express.bodyParser());

	app.use(express.methodOverride());

	app.use('/api', require('./router').registerRoutes)

	app.use(express.errorHandler({ dumbExceptions: true, showStack: true}));
});

var port = 4711;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});