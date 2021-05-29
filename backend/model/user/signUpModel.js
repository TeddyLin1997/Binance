const bcrypt = require('bcrypt')
const { validator, resJson } = require('../../common/middleware')
const { validAccount, validPassword, validEmail } = require('../../common/validator')

const run = async (req, res) => {
  const isError = validateRules(req, res)
  if (isError) return
  
  const value = [ req.body.account, req.body.email, await hashPassword(req.body.password) ]
  const sql = 'insert into user set account=?, email=?, password=?'
  const json = await resJson(sql, value, res => res.result = true )
  // 特例處理 未來需修正
  if (json.error) json.result = '已有相同使用者名稱'

  res.status(200).json(json)
}

const validateRules = (req, res) => {
  const rules = [
    { name: 'account', type: 'string', value: req.body.account, valid: validAccount },
    { name: 'email', type: 'string', value: req.body.email, valid: validEmail },
    { name: 'password', type: 'string', value: req.body.password, valid: validPassword },
  ]

  const [ isValid, result ] = validator(rules)
  if (!isValid) res.status(400).json(result)

  return isValid === false
}

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 5, (err, hash) => resolve(hash))
  })
}

module.exports = run