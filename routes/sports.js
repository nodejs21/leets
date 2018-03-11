// const express = require('express');
// var router = express.Router();

// var jsdom = require("jsdom/lib/old-api.js");

// router.get('/:sport', function (req, res) {

// 	var jquery = "http://code.jquery.com/jquery.js";
// 	var game = req.params.sport;
// 	var url = undefined; 
// 	if(game) {
// 		url = `http://espn.in/${game}/`;
// 	}
// 	// console.log("This: "+url);
// 	// switch(game.toUpperCase()) {
// 	// 	case "CRICKET":
// 	// 	url = "http://espn.in/cricket/";
// 	// 	break;
// 	// 	case "FOOTBALL":
// 	// 	url = "http://espn.in/football/";
// 	// 	break;
// 	// 	case "TENNIS":
// 	// 	url = "http://espn.in/football/";
// 	// 	break;
// 	// 	case "NBA":
// 	// 	url = "http://espn.in/nba/"
// 	// }
// 	if(url){
// 		jsdom.env(
// 			"http://www.espn.in/cricket/series/8038/report/1133013/afghanistan-vs-nepal-16th-match-group-b-world-cup-qualifier",
// 			[jquery],
// 			function (err, window) {
// 				if(err) return res.json(err);
// 				// if(window.length == 0) return res.status(404).send("No news feed against this game!");
// 				var $ = window.$;
// 				// console.log(window.$("body").text());
// 				res.send($("body").html());
// 			}
// 			);
// 	} else {
// 		res.send("NO sport selected!!");
// 	}
// });

// module.exports = router;

