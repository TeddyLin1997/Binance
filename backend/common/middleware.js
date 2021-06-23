const db = require('./db')
const jwt = require('jsonwebtoken')
const { secret, authErrorRes, defaultRes } = require('./config')

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]

  jwt.verify(token, secret, (err, decoded) => {
    if (err || !decoded) res.status(401).json(authErrorRes)
    else next()
  })
}

const validator = (rules) => {
  const res = { ...defaultRes }

  const isValid = rules.every(item => {
    if (typeof item.value !== item.type) {
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
  const res = { ...defaultRes }

  // sql
  return new Promise((resolve, reject) => {
    db.mysql.query(sql, value, async (err, rows, fields) => {
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