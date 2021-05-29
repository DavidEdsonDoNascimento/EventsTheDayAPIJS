const { Router } = require('express')
const OccurrencesController = require('./../controllers/occurrencesController')
const router = Router()

router
.get('/occurrences', OccurrencesController.list)
.get('/occurrences/:id', OccurrencesController.findById)
.post('/occurrences', OccurrencesController.insert)
.patch('/occurrences', OccurrencesController.update)

module.exports = router