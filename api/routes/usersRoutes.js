import { Router } from 'express';
import UsersController from '../controllers/usersController';

const router = Router();

router
.get('/users', UsersController.list)
.post('/users', UsersController.insert);

export default router;
