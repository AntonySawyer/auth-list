const express = require('express');
const router = express.Router();

const mysql = require('mysql');
const dbConnect = require('../config/db.json')
const connection = mysql.createConnection(dbConnect);

router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM auth_info', (err, data) => {
    err ? console.log(err) : res.json(data);
  })
});

router.post('/block', function (req, res, next) {
  connection.query(`UPDATE auth_info SET status = "blocked" WHERE id IN (${req.body.ids.join(', ')})`, (err, data) => {
    err ? console.error(err) : res.redirect('/users');
  })
});
router.post('/unblock', function (req, res, next) {
  connection.query(`UPDATE auth_info SET status = "active" WHERE id IN (${req.body.ids.join(', ')})`, (err, data) => {
    err ? console.error(err) : res.redirect('/users');
  })
});
router.post('/delete', function (req, res, next) {
  connection.query(`DELETE FROM auth_info WHERE id IN (${req.body.ids.join(', ')})`, (err, data) => {
    err ? console.error(err) : res.redirect('/users');
  })
});

module.exports = router;