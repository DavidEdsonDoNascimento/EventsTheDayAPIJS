const mysql = require('mysql')

const connect = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'events_of_the_day_db',
    user: 'root',
    password: 'root'
})

module.exports = connect