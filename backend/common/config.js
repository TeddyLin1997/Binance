const env = require('../.env')

const secret = env.secret

const authErrorRes = {
  error: true,
  status: 401,
  result: 'Unauthorized',
}

const defaultRes = {
  error: false,
  status: 200,
  result: null
}

module.exports = {
  secret,
  authErrorRes,
  defaultRes,
}