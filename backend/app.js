const express = require('express')
const path = require('path')
const cors = require('cors')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const setRouters = require('./routes/index')

const app = express()
const NODE_ENV = app.get('env')

// develop allow cors
if (NODE_ENV === 'development') {
  app.use(cors())
}

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// frontend
app.use(express.static(path.join(__dirname, 'public')))
// backend
setRouters(app)

module.exports = app
