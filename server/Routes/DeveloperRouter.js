const { userRegister, userLogin, userProfile } = require('../Controllers/DeveloperController')
const authverify = require('../functions/authverify')


const DeveloperRouter = require('express').Router()

DeveloperRouter.post('/register', userRegister)
DeveloperRouter.post('/login', userLogin)
DeveloperRouter.get('/profile', authverify, userProfile)

module.exports = DeveloperRouter