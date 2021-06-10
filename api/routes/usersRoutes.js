const { Router } = require('express')
const UsersController = require('../controllers/usersController')

const router = Router()

router
.get('/users', UsersController.list)
.post('/users', UsersController.insert)

module.exports = router
