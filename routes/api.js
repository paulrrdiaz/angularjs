var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');

Todo.methods(['get', 'put', 'post', 'delete']);
Todo.register(router, '/todos');

module.exports = router;