var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [
    {id:1, name:'Alice'},
    {id:2, name: 'Bingo'},
    {id:3, name: 'Gerald'}

  ]
  res.send(users);
});

module.exports = router;
