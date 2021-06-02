const { Router } = require('express')
const OccurrencesController = require('./../controllers/occurrencesController')
const router = Router()

router
.get('/occurrences', OccurrencesController.list)
.get('/occurrences/:id', OccurrencesController.findById)
.get('/occurrences/:id/times', OccurrencesController.findTimesOfOccurrence)
.post('/occurrences', OccurrencesController.insert)
.patch('/occurrences/:id', OccurrencesController.update)
.delete('/occurrences/:occurrenceId/times/:timeId', OccurrencesController.deleteTimeOfOccurence)

module.exports = router