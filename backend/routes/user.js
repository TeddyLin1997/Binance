const express = require('express')
const router = express.Router()
const user = require('../model/user')
const { auth }  = require('../common/middleware')

router.get('/', auth, (req, res) => {
  res.send('user service is runing')
})

router.post('/sign-up', (req, res) => {
  user.signUpModel(req, res)
})

router.post('/sign-in', (req, res) => {
  user.signInModel(req, res)
})

router.post('/info', auth, (req, res) => {
  user.userInfoModel(req, res)
})

module.exports = router
