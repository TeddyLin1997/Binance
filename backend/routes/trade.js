const express = require('express')
const router = express.Router()
const trade = require('../model/trade')
const { auth }  = require('../common/middleware')

router.post('/buy', auth, (req, res) => {
  trade.buy(req, res)
})

router.post('/sell', auth, (req, res) => {
  trade.buy(req, res)
})

module.exports = router
