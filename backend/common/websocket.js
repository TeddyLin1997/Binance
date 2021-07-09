const Binance = require('node-binance-api')
const env = require('../../.env')

const binance = new Binance().options(env.BINANCE_CONFIGS)

let cryptoMarkets = {}
binance.websockets.miniTicker(markets => {
  cryptoMarkets = markets
})

const webSocket = require('ws').Server

const createWebSocketServer = (server) => {
  const webSocketServer = new webSocket({ server })

  let timerId = null
  
  webSocketServer.on('connection', () => {
    if (timerId) return
    timerId = setInterval(() => {
      webSocketServer.clients.forEach(client => {
        client.send(JSON.stringify({ ...cryptoMarkets }))
      })
    }, 1500)
  })
}

module.exports = createWebSocketServer
