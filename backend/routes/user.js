const express = require('express')
const router = express.Router()
const { resJson } = require('../util/index')
const { account, password, email } = require('../util/validator')

router.get('/', function(req, res, next) {
  res.send('user service is runing')
})

router.post('/sign-up', async function(req, res, next) {
  const body = req.body
  const rules = [ account.test(body.account), email.test(body.email), password.test(body.password) ]
  const value = [req.body.account, req.body.email, req.body.password]
  const sql = 'insert into user set account=?, email=?, password=?'
  const result = await resJson(rules, sql, value, () => true )
  res.send(result)
})

module.exports = router
