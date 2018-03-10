const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// admin:root@ds139585.mlab.com:39585/db_todos

// mongoose.connect('mongodb://localhost:27017/db_leets');
try {
	async function hio() {
		await mongoose.connect('mongodb://admin:root@ds211309.mlab.com:11309/db_leets');
	}
} catch(e) {
	console.log(e);
}


module.exports = {mongoose};
