var express = require('express');
var cors = require('cors');
var path = require('path');

var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose= require('mongoose');
var morgan = require('morgan');
var appRoutes = require('./app/app.routes');
var organizationRoutes = require('./app/organizations/organization.routes');
var organizationHandler = require('./app/organizations/organization.handler');
var userRoutes = require('./app/user/user.routes');
var teamRoutes = require('./app/teams/team.routes');
var app = express();
var config = require('config');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));



var port = process.env.PORT || 4500; // set our port

console.log(config.DBHost);
mongoose.connect(config.DBHost);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

if(config.util.getEnv('NODE_ENV') != 'test') {
    app.use(morgan('combined'));
}

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/api/team', teamRoutes);
app.use('/api/organization', organizationRoutes);
app.use('/api/user', userRoutes);
app.use('/api', appRoutes);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app; // for testing

