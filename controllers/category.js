const Category = require('./../models/category')

module.exports = app => {
    app.get('/category', (req, res) => {
        Category.list(res)
    })

    app.get('/category/:name', (req, res) => {
        const { name } = req.params
        Category.search(name, res)
    })
    
    app.post('/category', (req, res) => {
        Category.insert(req.body, res)
    })

    app.delete('/category/:id', (req, res) => {
        const { id } = req.params
        Category.delete(id, res)
    })
}