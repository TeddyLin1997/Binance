const jwt = require('jsonwebtoken')
const { secret } = require('../../common/config')
const { resJson } = require('../../common/middleware')

const run = async (req, res) => {
  const token = req.headers['authorization'].split(' ')[1]
  let userId = jwt.verify(token, secret).id

  const sql = 'select * from user_wallet where user_id=?'
  const value = [userId]
  const json = await resJson(sql, value, (res, rows) => {
    res.result = rows
  })

  res.status(200).json(json)
}

module.exports = run