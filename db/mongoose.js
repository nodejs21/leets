const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// admin:root@ds139585.mlab.com:39585/db_todos

mongoose.connect('mongodb://localhost:27017/db_leets');

module.exports = {mongoose};
