const Event = require('./../models/event')

module.exports = app => {
    app.get('/event', (req, res) => {
        Event.list(res)
    })

    app.post('/event', (req, res) => {
        Event.insert(req.body, res)
    })

}