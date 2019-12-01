const { Pool } = require('pg')

const pool = new Pool({
  user: 'zxwxprwvxmzhoc',
  host: 'ec2-107-21-98-89.compute-1.amazonaws.com',
  database: 'd5lp3qb7nvj853',
  password: 'fba5dba010453fede44fe1dae0c9ccc406f9eff012e5c783fdd9d683d9c4254f',
  post: 5432
})

module.exports = pool