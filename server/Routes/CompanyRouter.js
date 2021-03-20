const { adminRegister } = require('../Controllers/CompanyController')

const CompanyRouter = require('express').Router()

CompanyRouter.post('/register', adminRegister)

module.exports = CompanyRouter

