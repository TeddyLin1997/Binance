const mysql = require('mysql')

const DB_CONFIGS = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'binance',
}

const handleDisconnect = () => {
  db = mysql.createConnection(DB_CONFIGS)

  db.connect(err => {
    console.log(`Database connecting ${err ? 'error' : 'success' }`)

    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  db.on('error', (err) => {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') handleDisconnect()
    else throw err;                                  
  });
}

module.exports = handleDisconnect