const Category = require('./../models/category')

module.exports = app => {
    app.get('/category', (req, res) => {
        Category.list(res)
    })
    
    app.post('/category', (req, res) => {
        Category.insert(req.body, res)
    })
}