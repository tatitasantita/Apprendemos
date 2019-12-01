const express = require('express')

// use process.env variables to keep private variables,
require('dotenv').config()

// Express Middleware
const helmet = require('helmet') // creates headers that protect from attacks (security)
const bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests

// db Connection w/ Heroku
// const db = require('knex')({
//   client: 'pg',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
//   }
// });

// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host : 'ec2-107-21-98-89.compute-1.amazonaws.com',
    user : 'zxwxprwvxmzhoc',
    password : 'fba5dba010453fede44fe1dae0c9ccc406f9eff012e5c783fdd9d683d9c4254f',
    database : 'd5lp3qb7nvj853',
    ssl: true,
  }
});

const whitelist = ['http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// App
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet())
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(morgan('combined')) // use 'tiny' or 'combined'

const queries = require('../src/components/_helpers/queries');

app.get('/', function (req, res) {
    res.sendStatus(200);
  });

app.get('/getUsers', (req, res) => queries.getUsers(req, res, db));
app.post('/createUser', (req, res) => queries.createUser(req, res, db));

app.get('/deleteUser', (req, res) => queries.deleteUser(req, res, db));
app.get('/updateUser', (req, res) => queries.updateUser(req, res, db));
app.get('/getAllOfType', (req, res) => queries.getAllOfType(req, res, db));


app.get('/getUserByStudentId', (req, res) => queries.getUserById(req, res, db));
app.post('/getUserByCredentials', (req, res) => queries.getUserByCredentials(req, res, db));


app.listen(3000, () => console.log("App listening on port 3000"));