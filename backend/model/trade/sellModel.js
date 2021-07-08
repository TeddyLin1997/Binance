const db = require('../../common/db')
const jwt = require('jsonwebtoken')
const { secret, defaultRes } = require('../../common/config')

const run = async (req, res) => {
  const response = { ...defaultRes }

  const token = req.headers['authorization'].split(' ')[1]
  const userId = jwt.verify(token, secret).id
  const name = req.body.name
  const amount = Number(req.body.amount)
  const total = Number(req.body.total)

  await db.getConnection(async (err, connection) => {

    const searchSql = 'select amount from user_wallet where user_id=? and name=?'
    const searchVal = [userId, name]

    connection.query(searchSql, searchVal, (err, rows) => {
      if (rows.length === 0 || err) {
        response.result = '剩餘貨幣不足'
        connection.release()
        return res.status(200).json(response)
      }

      const resAmount = Number(rows[0].amount) - amount

      if (resAmount < 0) {
        response.result = '剩餘貨幣不足'
        connection.release()
        return res.status(200).json(response)
      } else if (resAmount === 0) {
        // 刪除某幣
        const deleteWalletSql = 'delete from user_wallet where user_id=? and name=?'
        const deleteWalletVal = [userId, name]
        connection.query(deleteWalletSql, deleteWalletVal, (err) => {
          if (err) {
            response.result = false
            connection.release()
            return res.status(200).json(response)
          }
        })
        // 增加餘額
        const searchBalanceSql = 'select balance from user_balance where user_id=?'
        const searchBalanceVal = [userId]
        connection.query(searchBalanceSql, searchBalanceVal, (err, rows) => {
          if (err) {
            response.result = false
            connection.release()
            return res.status(200).json(response)
          }
          const updateBalanceSql = 'update user_balance set balance=? where user_id=?'
          const updateBalanceVal = [rows[0].balance + total, userId]
          connection.query(updateBalanceSql, updateBalanceVal, (err) => {
            if (err) {
              response.result = false
              connection.release()
              return res.status(200).json(response)
            }
          })
        })

        response.result = '交易完成'
        connection.release()
        return res.status(200).json(response)
      } else {
        // 扣除某幣
        const updateWalletSql = 'update user_wallet set amount=? where user_id=? and name=?'
        const updateWalletVal = [resAmount, userId, name]
        connection.query(updateWalletSql, updateWalletVal, (err) => {
          if (err) {
            response.result = false
            connection.release()
          return res.status(200).json(response)
          }
        })
        // 增加餘額
        const searchBalanceSql = 'select balance from user_balance where user_id=?'
        const searchBalanceVal = [userId]
        connection.query(searchBalanceSql, searchBalanceVal, (err, rows) => {
          if (err) {
            response.result = false
            connection.release()
            return res.status(200).json(response)
          }
          const updateBalanceSql = 'update user_balance set balance=? where user_id=?'
          const updateBalanceVal = [rows[0].balance + total, userId]
          connection.query(updateBalanceSql, updateBalanceVal, (err) => {
            if (err) {
              response.result = false
              connection.release()
              return res.status(200).json(response)
            }
          })
        })

        response.result = '交易完成'
        connection.release()
        return res.status(200).json(response)
      }
    })
  })
}

module.exports = run