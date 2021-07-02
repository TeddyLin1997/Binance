const jwt = require('jsonwebtoken')
const { secret, authErrorRes, defaultRes } = require('../../common/config')

const run = async (req, res) => {
  const token = req.headers['authorization'].split(' ')[1]

  jwt.verify(token, secret, (err, decoded) => {
    if (err || !decoded) res.status(401).json(authErrorRes)
    else {
      const resJson = { ...defaultRes }
      resJson.result = { id: decoded.id, account: decoded.account }
      res.status(200).json(resJson)
    }
  })
}

module.exports = run
