const express = require('express')
const router = express.Router()
const user = require('../model/user')
const { auth }  = require('../common/middleware')

router.post('/sign-up', (req, res) => {
  user.signUp(req, res)
})

router.post('/sign-in', (req, res) => {
  user.signIn(req, res)
})

router.post('/info', auth, (req, res) => {
  user.userInfo(req, res)
})

module.exports = router
