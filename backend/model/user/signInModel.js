const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config')
const { resJson } = require('../../util')
const { validAccount, validPassword } = require('../../util/validator')


const run = async (req) => {
  const account = req.body.account
  const password = req.body.password
  const rules = [
    { 
      name: 'account',
      type: 'string',
      value: account,
      valid: validAccount
    },
    {
      name: 'password',
      type: 'string',
      value: password,
      valid: validPassword,
    },
  ]
  
  const value = [ account ]
  const sql = 'select * from user where account=?'
  return resJson(rules, sql, value, async (rows, fields) => {
    let result = false

    if (rows.length && vertifyPassword(password, rows[0].password)) {
      const payload = { id: rows[0].id, account: rows[0].account }
      result = { ...payload, token: createToken(payload) }
    }

    return result
  })
}

const vertifyPassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, isSame) => resolve(isSame))
  })
}

const createToken = (payload) => jwt.sign(payload, secret)

module.exports = run