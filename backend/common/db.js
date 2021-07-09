const mysql = require('mysql')
const env = require('../../.env')

const pool = mysql.createPool(env.DB_CONFIGS)

module.exports = pool