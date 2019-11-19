var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.json([{
    id: 1,
    username: "some man",
    link: "vk.com/id=1",
    status: "blocked",
    first_date: "011019",
    last_time: "021119"
  }, {
    id: 2,
    username: "another man",
    link: "vk.com/id=2",
    status: "active",
    first_date: "111019",
    last_time: "151119"
  }])
});

module.exports = router;