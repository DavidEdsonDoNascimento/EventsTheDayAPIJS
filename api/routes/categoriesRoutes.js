import { Router } from 'express';

import CategoriesController from './../controllers/categoriesController';

const router = Router();

router
.get('/categories', CategoriesController.list)
.get('/categories/:id', CategoriesController.findById)
.post('/categories', CategoriesController.insert)
.patch('/categories/:id', CategoriesController.update)
.delete('/categories/:id', CategoriesController.delete);

export default router;