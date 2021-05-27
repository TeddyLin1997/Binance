const bcrypt = require('bcrypt')
const { resJson } = require('../../util')
const { validAccount, validPassword } = require('../../util/validator')

const vertifyPassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, isSame) => resolve(isSame))
  })
}

const run = async (req) => {
  const account = req.body.password || null
  const password = req.body.password || null
  
  const rules = [ validAccount.test(account), validPassword.test(password) ]
  const value = [ account ]
  const sql = 'select * from user where account=?'
  return resJson(rules, sql, value, async (rows, fields) => {
    if (rows.length === 0) return false
    return vertifyPassword(password, rows[0].password)
  })
}

module.exports = run