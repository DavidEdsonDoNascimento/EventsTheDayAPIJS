const bodyParser = require('body-parser')
const categoriesRoutes = require('./categoriesRoutes')
const occurrencesRoutes = require('./occurrencesRoutes')
const usersRoutes = require('./usersRoutes')

const cors = require('cors')

module.exports = app => {
    app.use(cors({ origin: true, credentials: true  }))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(usersRoutes, categoriesRoutes, occurrencesRoutes)

    app.get('/checkapi', (req, res) => {
        return res.status(200).json({ success: true })
    })
}