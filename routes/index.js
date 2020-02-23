var express = require('express');
var router = express.Router();

const message = ((text, user, added) => {
  return{text, user, added}
});

const messages = [
  message("Hi there", "Amando", new Date()),
  message("Hello World!", "Charles", new Date())
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Mini Messageboard', messages: messages});
});

router.get('/new', (req, res, next) => {
  res.render('form', {title: 'Post New Message'});
});

router.post('/new', (req, res, next) => {
  messages.push(message(req.body.message, req.body.name, new Date()));
  res.redirect('/');
});

module.exports = router;
