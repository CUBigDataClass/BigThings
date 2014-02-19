var mongoose = require("mongoose");
var db = require('./db.js')

var userSchema = new mongoose.Schema({
	name: {
		first: String,
		last: { type: String, trim: true }
	},
	age: { type: Number, min: 0}
});

