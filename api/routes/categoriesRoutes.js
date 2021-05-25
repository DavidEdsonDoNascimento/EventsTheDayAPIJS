const { Router } = require('express')

const CategoriesController = require('./../controllers/categoriesController')

const router = Router()

router.get('/categories', CategoriesController.list)
router.get('/categories/:id', CategoriesController.findById)
router.post('/categories', CategoriesController.insert)
router.patch('/categories/:id', CategoriesController.update)
router.delete('/categories/:id', CategoriesController.delete)

module.exports = router