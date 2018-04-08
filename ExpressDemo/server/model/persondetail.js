var mongoose = require("mongoose");

var persondetail = new mongoose.Schema({
  "id" : {type : Number},
  "name" : {type : String}
});

module.exports = mongoose.model('persondetail', persondetail);