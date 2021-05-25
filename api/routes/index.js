const bodyParser = require('body-parser')
const categoriesRoutes = require('./categoriesRoutes')

module.exports = app => {
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(categoriesRoutes)

    app.get('/checkapi', (req, res) => {
        return res.status(200).json({ success: true })
    })
}