const mysql = require('mysql')
const config = require('config')

const connect = mysql.createConnection({
    host: config.get('mysql.host'),
    port: config.get('mysql.port'),
    database: config.get('mysql.database'),
    user: config.get('mysql.user'),
    password: config.get('mysql.password')
})

module.exports = connect