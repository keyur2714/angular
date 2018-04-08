const express = require('express');
const router = express.Router();

const axios = require('axios');
const API = 'http://localhost:3000';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demodb')
.then(() =>  console.log('connection successful'))
.catch((err) => console.error(err));
const persondetail = require("../model/persondetail");
const user = require("../model/user");
console.log("=="+persondetail+" ==");
console.log("=="+user+" ==");

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Hello Radhe Krishna…');
});

// Get all posts
router.get('/deptList', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/departments`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/persons', function(req, res, next) {
  persondetail.find(function (err, persons) {
    console.log(persons);  
    if (err) return next(err);
    res.json(persons);
  });
});

router.get('/users', function(req, res, next) {
  user.find(function (err, persons) {
    console.log(persons);  
    if (err) return next(err);
    res.json(persons);
  });
});



router.post('/save', function(req, res, next) {
   var db = new persondetail();
    db.id = req.body.id;
    db.name = req.body.name; 
  db.save(req.body, function (err, post) {    
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;
