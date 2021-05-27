const express = require('express')
const router = express.Router()
const user = require('../model/user')

router.get('/', function(req, res, next) {
  res.send('user service is runing')
})

router.post('/sign-up', async function(req, res, next) {
  const result = await user.signUpModel(req)
  res.send(result)
})

router.post('/sign-in', async function(req, res, next) {
  const result = await user.signInModel(req)
  res.send(result)
})

module.exports = router
