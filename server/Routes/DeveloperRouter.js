const { userRegister } = require('../Controllers/DeveloperController')


const DeveloperRouter = require('express').Router()

DeveloperRouter.post('/register', userRegister)

module.exports = DeveloperRouter