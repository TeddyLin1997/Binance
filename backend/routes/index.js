const express = require('express');
const usersRouter = require('./users');

const setControllers = (app) => {
  //index
  app.use('/', indexPage());

  // service
  app.use('/users', usersRouter);

  // error
  errorHandler(app)
}

const indexPage = () => {
  const router = express.Router();

  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  return router
}

const errorHandler = (app) => {
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
  });
}

module.exports = setControllers
