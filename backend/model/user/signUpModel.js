const bcrypt = require('bcrypt')
const { resJson } = require('../../util')
const { validAccount, validPassword, validEmail } = require('../../util/validator')

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 5, (err, hash) => resolve(hash))
  })
}

const run = async (req) => {
  const account = req.body.account || null
  const email = req.body.email || null
  const password = req.body.password || null

  const rules = [
    validAccount.test(account),
    validEmail.test(email),
    validPassword.test(password)
  ]
  const value = [ account, email, await hashPassword(password) ]
  const sql = 'insert into user set account=?, email=?, password=?'
  return resJson(rules, sql, value, () => true )
}

module.exports = run