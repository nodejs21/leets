const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var index = require('./routes/index');
// var signup = require('./routes/signup');
// var login = require('./routes/login');
var sports = require('./routes/sports');
var favourites = require('./routes/favourites');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
// app.use('/signup', signup);
// app.use('/login', login);
app.use('/sports', sports);
app.use('/favourites', favourites);

app.listen(port, function(err) {
	if(err) return res.send("Error: "+err);
	console.log(`Server started on port: ${port}`);
})