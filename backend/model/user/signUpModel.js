const bcrypt = require('bcrypt')
const { resJson } = require('../../util')
const { validAccount, validPassword, validEmail } = require('../../util/validator')

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 5, (err, hash) => resolve(hash))
  })
}

const run = async (req) => {
  const account = req.body.account
  const email = req.body.email
  const password = req.body.password
  const rules = [
    {
      name: 'account',
      type: 'string',
      value: account,
      valid: validAccount,
    },
    {
      name: 'email',
      type: 'string',
      value: email,
      valid: validEmail,
    },
    {
      name: 'password',
      type: 'string',
      value: password,
      valid: validPassword,
    },
  ]

  const value = [ account, email, await hashPassword(password) ]
  const sql = 'insert into user set account=?, email=?, password=?'
  return resJson(rules, sql, value, () => true )
}

module.exports = run