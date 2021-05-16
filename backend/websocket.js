const webSocket = require('ws').Server

const createWebSocketServer = (server) => {
  const webSocketServer = new webSocket({
    server: server
  })
  
  webSocketServer.on("connection", ws => {
    console.log('connect to socket')

    ws.on('message', (data) => {
      ws.send(JSON.stringify({ data: [1,2,3,4] }))
    })
  })
}

module.exports = createWebSocketServer
