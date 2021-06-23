const mysqlPlugin = require('mysql')

const DB_CONFIGS = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'binance',
}

let mysql = null

const handleConnect = () => {
  mysql = mysqlPlugin.createConnection(mysql_CONFIGS)

  mysql.connect(err => {
    console.log(`Database connecting ${err ? 'error' : 'success' }`)

    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  mysql.on('error', (err) => {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') handleDisconnect()
    else throw err;                                  
  });
}

module.exports = {
  mysql,
  handleConnect,
}