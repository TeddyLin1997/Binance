const mysql = require('mysql')

const DB_CONFIGS = {
  connectionLimit: 20,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'binance',
}

const pool = mysql.createPool(DB_CONFIGS)

module.exports = pool