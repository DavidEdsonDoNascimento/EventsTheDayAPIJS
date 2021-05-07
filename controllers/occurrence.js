const Occurrence = require('./../models/occurrence')

module.exports = app => {
    app.get('/occurrence', (req, res) => {
        Occurrence.list(res)
    })

    app.post('/occurrence', (req, res) => {
        Occurrence.insert(req.body, res)
    })

}