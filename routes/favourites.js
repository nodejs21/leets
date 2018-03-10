const express = require('express');
var router = express.Router();

var {mongoose} = require('../db/mongoose');
var {favourites} = require('../models/favourites');

router.get('/', function (req, res) {
	var id = req.body.id;
	favourites.find({id}, (err, fav) => {
		if(err) return res.json(`Error from find: ${err}`);
		res.json(fav);
	})
});

router.post('/', function (req, res) {
	var id = req.body.id;
	var id = req.params.id;
	var sname = req.body.sports.name;
	var tname = req.body.sports.teams.name;
	/*Sample
	{
		"id": id,
		"sports": [{
			"name": "Cricket",
			"teams": [{
				"name": "Pakistan"
			}]
		}]
	}
	{
		sports: {
			"name": "Cricket",
			"teams": {
				"name": "Pakistan"
			}
		}
	}*/
	favourites.find({
		id: id
	}, (err, fav) => {
		if(err) return res.json(`Error from find: ${err}`);
		if(fav && (fav.sports[0].name == sname)) {
			// duplicate favourite
			return res.status(404).send("Already available!");
		} else if(fav.sports[0].teams[0].name == tname) {
			// duplicate favourite
			return res.status(404).send("Already available!");
		}
		favourites.update({
			id: id
		},
		{
			sports: sname,
			teams: [{
				name: tname
			}]
		});
	});
});

router.delete('/', (req, res) => {
	var id = req.body.id;
	favourite.deleteOne({id});
	res.status(900).send("Deleted Successfully");
})

module.exports = router;

