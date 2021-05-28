const express = require('express')
const router = express.Router()
const user = require('../model/user')
const { auth }  = require('../common/middleware')

router.get('/', function(req, res, next) {
  res.send('user service is runing')
})

router.post('/sign-up', async function(req, res, next) {
  user.signUpModel(req, res)
})

router.post('/sign-in', async function(req, res, next) {
  user.signInModel(req, res)
})

module.exports = router
