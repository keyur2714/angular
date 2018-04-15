const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/meandemo')
.then(() =>  console.log('connection successful'))
.catch((err) => console.error(err));

const students = require("../model/student");
console.log(students);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Hello Radhe Krishna');
});

router.get('/studentList', function(req, res, next) {
  students.find(function (err, students) {
    console.log(students);  
    if (err) return next(err);
    res.json(students);
  });
});


router.post('/saveStudent', function(req, res, next) {
   var stud = new students();
    stud.id = req.body.id;
    stud.name = req.body.name; 
    stud.city = req.body.city;
  stud.save(req.body, function (err, post) {    
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
