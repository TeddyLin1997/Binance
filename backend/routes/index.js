const createError = require('http-errors')
const path = require('path')
const userRouter = require('./user')
const quoteRouter = require('./quote')

const setRouters = (app) => {
  app.use('/user', userRouter)
  app.use('/quote', quoteRouter)

  setupHandler(app)
}

const setupHandler = (app) => {
  // view engine setup
  app.set('views', path.join(__dirname, '../views'))
  app.set('view engine', 'pug')

  // error status
  app.use(function(req, res, next) {
    next(createError(404))
  })

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
  })
}

module.exports = setRouters