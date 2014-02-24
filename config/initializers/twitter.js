var util = require('util'),
twitter = require('twitter'),
fs = require('fs');
    

var twitter = function(callback){
  if(!this.client){
    fs.readFile(__dirname + "/../twitter.json", "utf-8", function(err, data){
      if (err){
        throw err
      } else{
        var config = JSON.parse(data)[(process.env.NODE_ENV || 'development')]
      
        this.client = new twitter({
          consumer_key: config["api_key"],
          consumer_secret: config["api_secret"],
          access_token_key: config["access_token"],
          access_token_secret: config["access_token_secret"]
        })
        callback(this.client)
      }
    })
  } else{
    callback(this.client)
  }
}

module.exports = twitter