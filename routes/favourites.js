const express = require('express');
var router = express.Router();

// const jsdom = require('jsdom');
const fetch = require('node-fetch');
// const DOMParser = require('xmldom').DOMParser;
// const DOMParser = require('htmlparser2');
const DOMParser = require('dom-parser');

var parser = new DOMParser();
var jsdom = require('jsdom/lib/old-api.js');
var jquery = 'http://code.jquery.com/jquery.js';

// var {mongoose} = require('../db/mongoose');
// var {favourites} = require('../models/favourites');

router.get('/:sport', function (req, res) {
	res.json("fav");
	// var jquery = "http://code.jquery.com/jquery.js";
	// var game = req.params.sport;
	// var url = undefined;
	// crawlNews("https://www.espn.in/football/").then(function(data){
	// 	console.log(data);
	// 	res.json(data);
	// });
});


// if(game) {
// 	url = `http://espn.in/${game}/`;
// }
// if(url){
// 	jsdom.env(
// 		url,
// 		[jquery],
// 		function (err, window) {
// 			if(err) return res.json(err);
// 				// if(window.length == 0) return res.status(404).send("No news feed against this game!");
// 				var $ = window.$;
// 				var array = [];
// 				// console.log(window.$("body").text());
// 				array.push($("section.col-three section.headlineStack__listContainer ul.headlineStack__list"));
// 				res.json(JSON.stringify(array, undefined, 2));
// 			}
// 			);
// } else {
// 	res.send("NO sport selected!!");
// }
function crawlNews(url){
	var allNews = [];
	return fetch(url)
	.then(function(response){
		return response.html();
	})
	.then(function(data){
		try {
			// var x = parser.parseFromString(data, "text/html");
			var uls = x.querySelector("section.col-three section.headlineStack__listContainer ul.headlineStack__list li");
			// console.log(uls[0]);
			return [].slice.call(uls);
		} catch(e) {
			console.log(e);
		}
	})
	.then(function(data){
		console.log(data);
		data.forEach(function(data){
			var url = (data.querySelector("a")).getAttribute("href").replace("http", "https");
			if(url.search("http://") === -1){
				url = "https://www.espn.in" + url;
			}
			console.log("Hello!");
			crawlStories(url).then(function(data){
				allNews.push(data);
			});
		});
		return allNews;
	});

}


function crawlStories(url){ 
	return fetch(url)
	.then(function(response){
		return response;
	})
	.then(function(data){
		// var x = parser.parseFromString(data, "text/html");
		// return x;
		return data;
	})
	.then(function(data){
		var img = "";
		var title = data.querySelector(".article-header h1").innerText;
		var meta = [].slice.call(data.querySelector("meta"));
		var img = meta.reduce((acc, next) => {if(next.getAttribute("property") === "og:image"){acc =  next.getAttribute("content");} return acc;}, "");
		var text = data.querySelector(".article-body > p");
		var textData = convertArrayToText([].slice.call(text));
		var newArticle = new Article(title, img, textData);
		return newArticle;           
	})
	.then(function(data){
		return data;
	});

}

function Article(title, image, textContent){
	this.title = title;
	this.image = image;
	this.textContent = textContent;
}

function convertArrayToText(arr){
	return arr.reduce((acc, next) => {acc = acc + next.innerText + ""; return acc;}, "");
}


module.exports = router;

