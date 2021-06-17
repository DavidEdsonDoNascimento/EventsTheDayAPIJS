import { Router } from 'express';
import UsersController from '../controllers/users-controller';

const router = Router();

router
.post('/sign', UsersController.sign)
.get('/login', UsersController.login);

export default router;
