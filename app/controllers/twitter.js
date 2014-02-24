/*
Test controller to display tweets
*/


var sample = function(req, res){
  require('../../config/initializers/twitter.js')(function(client){
    client.search('nodejs OR #node', function(data) {
      console.log(util.inspect(data));
      
      res.render('sample', {
        tweets: data
      })
    })
  })
}

exports.sample = sample