const db = require('../db')

const resJson = async (rules, sql, value, callback) => {
  const res = { error: false, msg: '', result: null }

  // validate
  const isValid = rules.every(item => {
    if ( typeof item.value !== item.type) {
      res.error = true
      res.msg = `${item.name} type is ${item.type}`
      return false
    }
    if (item.valid && !item.valid.test(item.value)) {
      res.error = true
      res.msg = `${item.name} validate error`
      return false
    }
    return true
  })

  if (!isValid) return res

  // sql
  return new Promise((resolve, reject) => {
    db.query(sql, value, async (err, rows, fields) => {
      if (!err) res.result = await callback(rows, fields)
      else {
        res.error = true
        res.msg = 'sql error'
        console.log('SQL Message: ', err.sqlMessage)
      }
      resolve(res)
    })
  })
}

module.exports = { db, resJson }