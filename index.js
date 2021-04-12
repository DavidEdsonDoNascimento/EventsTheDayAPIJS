const customExpress = require('./config/customExpress')
const Tables = require('./infra/tables')
const connect = require('./infra/connection')


connect.connect(error => {
    if(error) console.error(error)
    else{
        
        Tables.init(connect)
        const app = customExpress()
        app.listen(3100)
    }
})