const Binance = require('node-binance-api')

const binance = new Binance().options({
  APIKEY: 'dO3hG4pc9Sb3E0qS1KhzZqA66nSlB6sRwkT3lQshTvvbYfsnmy4cMa9VW0gJ2DFL',
  APISECRET: 'TJLBAc7YHBrlZoZVEMwCGcX8f0SLmsqEUL6ibeQTnXOdB37waZVB3jytshp7ewl5',
})

let cryptoMarkets = {}
binance.websockets.miniTicker(markets => {
  cryptoMarkets = markets
})


// const getCrypto = async (limit = 30) => {
//   const ticker = await binance.prices()
//   const re = /^.*USDT$/
//   return Object.keys(ticker)
//     .filter(item => re.test(item))
//     .slice(0, limit)
//     .map(item => ({ label: item, value: Number(ticker[item]).toFixed(4) }))
// }

// router.post('/crypto', async (req, res, next) => {
//   // const limit = req.body.limit
//   // const result = await getCrypto(limit)
//   res.json({ a })
// })

// module.exports = io
