const jwt = require('jsonwebtoken')
const { secret, defaultRes } = require('../../common/config')

const run = async (req, res) => {
  const token = req.headers['authorization'].split(' ')[1]

  jwt.verify(token, secret, (err, decoded) => {
    const json = { ...defaultRes }
    json.result = { id: decoded.id, account: decoded.account }
    res.status(200).json(json)
  })
}

module.exports = run
