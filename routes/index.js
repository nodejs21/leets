const express = require('express');
const fs = require('fs');
const path = require('path');
var router = express.Router();

var x = path.join(__dirname+"./../client/dist/");
console.log(x);

router.get('/', function (req, res, next) {
	
});

module.exports = router;