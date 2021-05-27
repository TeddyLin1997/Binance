const db = require('../db')

const resJson = async (rules, sql, value, callback) => {
  const res = { error: false, msg: '', result: null }

  // validate
  if (!rules.every(item => item)) {
    res.error = true
    res.msg = 'type error'
    return res
  }

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