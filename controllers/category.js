const Category = require('./../models/category')

module.exports = app => {
    app.get('/category', function(req, res){
        Category.list(res)
    })
    app.post('/category', function(req, res){
        let input = req.body
        res.json(JSON.stringify(input))
    })
}