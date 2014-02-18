// Requirements
var file_system = require('fs');

/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var app = express();
// **************

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
// **************



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
// **************



// Database config
file_system.readFile("database.json", "utf-8", function(err, data){
  if(err){
    console.log("Error reading database configuration; " + err.toString() );
    throw new Error("Error could not read database.json");
  } else{
    data = JSON.parse(data);
    var db_config = data[app.settings.env];
    console.log(db_config,toString());
    var mongo = require( db_config["db_name"] );
    var monk = require( db_config["adapter"] );
    var db_url = db_config["host"] + ':' + db_config["port"] + '/' + db_config['db_name']
    var db = adapter(db_url);
  }
});

// **************



// Routing
app.get('/', routes.index);
app.get('/users', user.list);
// **************



// Start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
