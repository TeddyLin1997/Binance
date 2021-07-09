const db = require('../../common/db')
const jwt = require('jsonwebtoken')
const { secret, defaultRes } = require('../../common/config')

const run = async (req, res) => {
  const response = { ...defaultRes }

  const token = req.headers['authorization'].split(' ')[1]
  const userId = jwt.verify(token, secret).id
  const name = req.body.name
  const amount = Number(req.body.amount)
  const cost = Number(req.body.cost)

  db.getConnection((err, connection) => {

    const searchSql = 'select balance from user_balance where user_id=?'
    const searchVal = [userId]

    connection.query(searchSql, searchVal, (err, rows) => {

      const balance = Number(rows[0].balance) - cost

      if (balance < 0) {
        response.result = '餘額不足'
        connection.release()
        return res.status(200).json(response)
      } else {

        // 更新餘額
        const balanceSql = 'update user_balance set balance=? where user_id=? '
        const balanceVal = [balance, userId]
        connection.query(balanceSql, balanceVal)

        // 搜尋錢包
        const searchWalletSql = 'select * from user_wallet where user_id=? and name=?'
        const searchWalletVal = [userId, name]
        connection.query(searchWalletSql, searchWalletVal, (err, rows) => {
          if (rows.length) {
            // 更新錢包資料
            const updateAmount = Number(rows[0].amount) + amount
            const createWalletSql = 'update user_wallet set amount=? where user_id=? and name=?'
            const createWalletVal = [updateAmount, userId, name]
            connection.query(createWalletSql, createWalletVal)
          } else {
            // 新增錢包資料
            const createWalletSql = 'insert into user_wallet set user_id=?, name=?, amount=?'
            const createWalletVal = [userId, name, amount]
            connection.query(createWalletSql, createWalletVal)
          }
        })

        // 紀錄明細
        const cashFlowSql = 'insert into user_cash_flow set user_id=?, type=?, name=?, amount=?, cost=?, time=?'
        const cashFlowVal = [userId, 1, name, amount, cost, Math.floor(Date.now()/1000)]
        connection.query(cashFlowSql, cashFlowVal)

        response.result = '交易完成'
        connection.release()
        return res.status(200).json(response)
      }
    })
  })

}

module.exports = run