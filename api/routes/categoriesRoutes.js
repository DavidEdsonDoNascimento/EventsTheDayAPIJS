const { Router } = require('express')

const CategoriesController = require('./../controllers/categoriesController')

const router = Router()

router
.get('/categories', CategoriesController.list)
.get('/categories/:id', CategoriesController.findById)
.post('/categories', CategoriesController.insert)
.patch('/categories/:id', CategoriesController.update)
.delete('/categories/:id', CategoriesController.delete)

module.exports = router