const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { secret } = require('../../common/config')
const { validator, resJson }  = require('../../common/middleware')
const { validAccount, validPassword } = require('../../common/validator')

const run = async (req, res) => {
  const isError = validateRules(req, res)
  if (isError) return
  
  const value = [ req.body.account ]
  const sql = 'select * from user where account=?'
  const json = await resJson(sql, value, (rows, fields) => {
    let result = false
    if (rows.length && vertifyPassword(req.body.password, rows[0].password)) {
      const payload = { id: rows[0].id, account: rows[0].account }
      result = { ...payload, token: createToken(payload) }
    }
    return result
  })
  
  res.status(200).json(json)
}

const validateRules = (req, res) => {
  const rules = [
    { name: 'account', type: 'string', value: req.body.account, valid: validAccount },
    { name: 'password', type: 'string', value: req.body.password, valid: validPassword },
  ]

  const [ isValid, result ] = validator(rules)
  if (!isValid) res.status(400).json(result)

  return isValid === false
}

const vertifyPassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, isSame) => resolve(isSame))
  })
}

const createToken = (payload) => jwt.sign(payload, secret)

module.exports = run