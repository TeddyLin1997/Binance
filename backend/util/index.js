const db = require('../db')

const resJson = async (rules, sql, value, callback) => {
  const res = { error: false, msg: 'SUCCESS', result: null }

  // validate
  if (!rules.every(item => item)) {
    res.error = true
    res.msg = 'TYPE ERROR'
    return res
  }

  // sql
  return await new Promise((resolve, reject) => {
    db.query(sql, value, (err, rows, fields) => {
      if (!err) res.result = callback(rows, fields)
      else {
        res.error = true
        res.msg = 'SQL ERROR'
        console.log('SQL Message: ', err.sqlMessage)
      }
      resolve(res)
    })
  })
}

module.exports = { resJson }