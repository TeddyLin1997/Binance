const jwt = require('jsonwebtoken')
const { secret } = require('./config')

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  const errorResult = {
    error: true,
    status: 401,
    result: 'Unauthorized',
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err || !decoded) res.status(401).json(errorResult)
    else next()
  })
}

module.exports = {
  auth,
}