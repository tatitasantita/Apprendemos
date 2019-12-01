var express = require('express');
var router = express.Router();
var pool = require('./db');

router.get('/api/getUsers', (req, res, next) => {
    pool.query("SELECT * FROM users", (q_err, q_res) => {
        res.json(q_res.rows);
    })
});