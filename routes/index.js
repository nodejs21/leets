const express = require('express');
const fs = require('fs');
const path = require('path');
var router = express.Router();

router.get('/', function (req, res, next) {
	fs.readFile(path.join(__dirname+"./../client/dist/index.html"), function (err, data) {
		if(err) return res.json(err);
		return res.status(200);
	});
});

module.exports = router;