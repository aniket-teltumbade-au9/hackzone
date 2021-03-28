const { adminRegister, adminLogin, adminProfile } = require('../Controllers/CompanyController')

const CompanyRouter = require('express').Router()

CompanyRouter.post('/register', adminRegister)
CompanyRouter.post('/login', adminLogin)
CompanyRouter.get('/profile', authverify, adminProfile)

//dummy test password generate
/* CompanyRouter.post('/testpass', passgeneration) */

module.exports = CompanyRouter

