const mongoose = require('mongoose');

var favourites = mongoose.model('favourites', {
  "id": {
    type: String,
    required: true,
    trim: true
  },
  "sports": [{
    "name": String,
    "teams": [{
      "name": String
    }]
  }] 
});

module.exports = {favourites};