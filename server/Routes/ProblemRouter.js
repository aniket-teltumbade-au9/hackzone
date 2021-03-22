const { add, list, single, run } = require('../Controllers/ProblemController')
const authverify = require('../functions/authverify')

const ProblemRouter = require('express').Router()

ProblemRouter.get('/all', list)
ProblemRouter.post('/create', authverify, add)
ProblemRouter.post('/run', run)
ProblemRouter.post('/submit', run)
ProblemRouter.get('/single/:name', single)

module.exports = ProblemRouter