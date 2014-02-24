
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
var passportOptions = {
  failureFlash: 'Invalid email or password.',
  failureRedirect: '/login'
}

// controllers
var home = require('../app/controllers/home')
var twitter = require('../app/controllers/twitter')

/**
 * Expose
 */

module.exports = function (app, passport) {

  app.get('/', home.index)
  
  
  app.get('/twitter/sample', twitter.sample)

}
