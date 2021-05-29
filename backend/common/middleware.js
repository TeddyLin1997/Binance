const db = require('./db')
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

const validator = (rules) => {
  const res = { error: false, status: 200, result: null }

  const isValid = rules.every(item => {
    if ( typeof item.value !== item.type) {
      res.error = true
      res.status = 400
      res.result = `${item.name} type is ${item.type}`
      return false
    }
    if (item.valid && !item.valid.test(item.value)) {
      res.error = true
      res.status = 400
      res.result = `${item.name} validate error`
      return false
    }

    return true
  })

  return [ isValid, res ]
}

const resJson = (sql, value, callback) => {
  const res = { error: false, status: 200, result: '' }

  // sql
  return new Promise((resolve, reject) => {
    db.query(sql, value, async (err, rows, fields) => {
      if (!err) await callback(res, rows, fields)
      else {
        res.error = true
        res.status = 500
        res.result = '遠端伺服器發生錯誤'
      }
      resolve(res)
    })
  })
}

module.exports = {
  auth,
  validator,
  resJson,
}