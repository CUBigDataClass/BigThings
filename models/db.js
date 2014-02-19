var mongoose = require("mongoose");
require("../app.js");
var file_system = require("fs");
mongoose.connect('mongodb://localhost/mydb');

// Database config
file_system.readFile(__dirname + "/../config/database.json", "utf-8", function(err, data){
  if(err){
    console.log("Error reading database configuration; " + err.toString() );
    throw new Error("Error could not read database.json");
  } else{
    var db_config = JSON.parse(data)[app.settings.env];
    console.log(db_config,toString());
    mongoose.connect( db_config["host"], db_config );
  }
});

// 
// while( true ){
//   try{
//     if( mongoose.connection.readyState == 1){
//       break;
//     } else{
//       console.log("Connection not established");
//     }
//   } catch(e){
//     console.log("DB connection not ready: " + e.toString());
//   }
// }