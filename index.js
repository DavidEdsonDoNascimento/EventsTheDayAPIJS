const customExpress = require('./config/customExpress')
const Tables = require('./infra/tables')
const connect = require('./infra/connection')
const config = require('config')

connect.connect(error => {
    if(error) console.error(error)
    else{
        
        Tables.init(connect)
        const app = customExpress()
        app.listen(config.get('api.port'))
    }
})