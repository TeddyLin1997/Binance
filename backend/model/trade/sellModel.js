const db = require('../../common/db')
const jwt = require('jsonwebtoken')
const { secret, defaultRes } = require('../../common/config')

const run = async (req, res) => {
  const response = defaultRes

  const token = req.headers['authorization'].split(' ')[1]
  const userId = jwt.verify(token, secret).id
  const name = req.body.name
  const amount = req.body.amount
  const total = req.body.total

  db.getConnection((err, connection) => {

    const searchSql = 'select amount from user_wallet where user_id=?, name=?'
    const searchVal = [userId, name]

    connection.query(searchSql, searchVal, (err, rows) => {

      const resAmount = rows[0].amount - amount

      if (resAmount < 0) {
        response.result = false
        connection.release()
      } else if (resAmount === 0) {
        // 刪除某幣
        const deleteWalletSql = 'delete from user_wallet where user_id=?, name=?'
        const deleteWalletVal = [userId, name]
        connection.query(deleteWalletSql, deleteWalletVal)
        // 增加餘額
        const updateBalanceSql = 'update user_balance set balance=? where user_id=?'
        const updateBalanceVal = [total, userId]
        connection.query(updateBalanceSql, updateBalanceVal)
      } else {
        // 扣除某幣
        const updateWalletSql = 'update user_wallet set amount=? where user_id=?, name=?'
        const updateWalletVal = [resAmount, userId, name]
        connection.query(updateWalletSql, updateWalletVal)
        // 增加餘額
        const updateBalanceSql = 'update user_balance set balance=? where user_id=?'
        const updateBalanceVal = [total, userId]
        connection.query(updateBalanceSql, updateBalanceVal)

        response.result = true
        connection.release()
      }
    })
  })

  res.status(200).json(response)
}

module.exports = run