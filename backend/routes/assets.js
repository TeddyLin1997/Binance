const express = require('express')
const router = express.Router()
const user = require('../model/assets')
const { auth }  = require('../common/middleware')

router.post('/balance', (req, res) => {
  user.balance(req, res)
})

router.post('/wallet', (req, res) => {
  user.wallet(req, res)
})

router.post('/cash-flow', auth, (req, res) => {
  user.cashFlow(req, res)
})

module.exports = router
