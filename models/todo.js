var restful = require('node-restful');
var mongoose = restful.mongoose;

var todoSchema = new mongoose.Schema({
	activity: String,
	state: Boolean,
	description: String
});

module.exports = restful.model('Todo', todoSchema);