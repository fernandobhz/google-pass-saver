var express = require('express');
var router = express.Router();

const title = 'Googler Pass Saver';
const user = "";
const pass = "";

router.get('/', function(req, res, next) {
  res.redirect('/TheAppName');
});

router.get('/:app', function(req, res, next) {
  res.render('index', { title, user, pass });
});

router.post('/:app', function(req, res, next) {
  const { user, pass } = req.body;
  res.render('index', { title, user, pass: `${pass.length} length` });
})

module.exports = router;
