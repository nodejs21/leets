const express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	
	// var XHR = new XMLHttpRequest();
	// XHR.open("GET", "https://www.espn.in/cricket/series/8038/report/1133013/afghanistan-vs-nepal-16th-match-group-b-world-cup-qualifier", true);
	// XHR.onreadystatechange = function(){
	// 	if(XHR.readyState == 4){
	// 		console.log(XHR.responseText);
	// 	}
	// }
	// XHR.send();

	// res.end("Done");
});

module.exports = router;