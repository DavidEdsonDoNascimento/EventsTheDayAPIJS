import { Router } from 'express';

import CategoriesController from '../controllers/categories-controller';
import AuthenticationMiddleware from '../middlewares/authentication-middleware';


const router = Router();

router
.get('/categories', AuthenticationMiddleware.authentication, CategoriesController.list)
.get('/categories/:id', AuthenticationMiddleware.authentication, CategoriesController.findById)
.post('/categories', AuthenticationMiddleware.authentication, CategoriesController.insert)
.patch('/categories/:id', AuthenticationMiddleware.authentication, CategoriesController.update)
.delete('/categories/:id', AuthenticationMiddleware.authentication, CategoriesController.delete);

export default router;