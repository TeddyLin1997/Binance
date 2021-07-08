const db = require('../../common/db')
const jwt = require('jsonwebtoken')
const { secret, defaultRes } = require('../../common/config')

const run = async (req, res) => {
  const response = defaultRes

  const token = req.headers['authorization'].split(' ')[1]
  const userId = jwt.verify(token, secret).id
  const name = req.body.name
  const cost = req.body.cost
  const amount = req.body.amount

  db.getConnection((err, connection) => {

    const searchSql = 'select balance from user_balance where user_id=?'
    const searchVal = [userId]

    connection.query(searchSql, searchVal, (err, rows) => {

      const balance = rows[0].balance - cost

      if (balance < 0) {
        response.result = false
        connection.release()
      } else {

        // 更新餘額
        const balanceSql = 'update user_balance set balance=? where user_id=? '
        const balanceVal = [balance, userId]
        connection.query(balanceSql, balanceVal)

        // 搜尋錢包
        const searchWalletSql = 'select * from user_wallet where user_id=?, name=?'
        const searchWalletVal = [userId, name]
        connection.query(searchWalletSql, searchWalletVal, (err, rows) => {
          if (rows.length) {
            // 更新錢包資料
            const updateAmount = rows[0].amount + amount
            const updateCost = rows[0].cost + cost
            const createWalletSql = 'update user_wallet set name=?, amount=?, cost=? where user_id=?'
            const createWalletVal = [name, updateAmount, updateCost, userId]
            connection.query(createWalletSql, createWalletVal)
          } else {
            // 新增錢包資料
            const createWalletSql = 'insert into user_wallet set user_id=?, name=?, amount=?, cost=?'
            const createWalletVal = [userId, name, amount, cost]
            connection.query(createWalletSql, createWalletVal)
          }
        })

        response.result = true
        connection.release()
      }
    })
  })

  res.status(200).json(response)
}

module.exports = run