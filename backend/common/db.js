const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'shit80299',
  database: 'binance',
})

module.exports = db