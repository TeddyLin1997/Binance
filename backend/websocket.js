const Binance = require('node-binance-api')
const binance = new Binance().options({
  APIKEY: 'dO3hG4pc9Sb3E0qS1KhzZqA66nSlB6sRwkT3lQshTvvbYfsnmy4cMa9VW0gJ2DFL',
  APISECRET: 'TJLBAc7YHBrlZoZVEMwCGcX8f0SLmsqEUL6ibeQTnXOdB37waZVB3jytshp7ewl5',
})

let cryptoMarkets = {}
binance.websockets.miniTicker(markets => {
  cryptoMarkets = markets
})

const webSocket = require('ws').Server

const createWebSocketServer = (server) => {
  const webSocketServer = new webSocket({ server })
  
  webSocketServer.on('connection', ws => {    
    let timerId = null
    if (timerId) return
    timerId = setInterval(() => {
      webSocketServer.clients.forEach(client => {
        client.send(JSON.stringify({ ...cryptoMarkets }))
      })
    }, 1500)
  })
}

module.exports = createWebSocketServer
