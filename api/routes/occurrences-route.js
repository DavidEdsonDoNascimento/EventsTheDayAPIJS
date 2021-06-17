import { Router } from 'express';
import OccurrencesController from '../controllers/occurrences-controller';
import AuthenticationMiddleware from '../middlewares/authentication-middleware';

const router = Router()

router
.get('/occurrences', AuthenticationMiddleware.authentication, OccurrencesController.list)
.get('/occurrences/:id', AuthenticationMiddleware.authentication, OccurrencesController.findById)
.get('/occurrences/:id/times', AuthenticationMiddleware.authentication, OccurrencesController.findTimesOfOccurrence)
.post('/occurrences', AuthenticationMiddleware.authentication, OccurrencesController.insert)
.patch('/occurrences/:id', AuthenticationMiddleware.authentication, OccurrencesController.update)
.delete('/occurrences/:occurrenceId/times/:timeId', AuthenticationMiddleware.authentication, OccurrencesController.deleteTimeOfOccurence);

export default router;