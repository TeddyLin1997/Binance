const jwt = require('jsonwebtoken')
const { secret, authErrorRes, defaultRes } = require('../../common/config')
const { validator }  = require('../../common/middleware')

const validateRules = (req, res) => {
  const rules = [
    { name: 'token', type: 'string', value: req.body.token },
  ]
  
  const [ isValid, result ] = validator(rules)
  if (!isValid) res.status(400).json(result)

  return isValid === false
}

const run = async (req, res) => {
  const isError = validateRules(req, res)
  if (isError) return

  jwt.verify(req.body.token, secret, (err, decoded) => {
    if (err || !decoded) res.status(401).json(authErrorRes)
    else {
      const resJson = { ...defaultRes }
      resJson.result = { id: decoded.id, account: decoded.account }
      res.status(200).json(resJson)
    }
  })
}

module.exports = run
