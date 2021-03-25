const { add, list, single, run, adminChallenges } = require('../Controllers/ProblemController')
const authverify = require('../functions/authverify')

const ProblemRouter = require('express').Router()

ProblemRouter.get('/all', authverify, list)
ProblemRouter.post('/create', authverify, add)
ProblemRouter.get('/mychallenges', authverify, adminChallenges)
ProblemRouter.post('/run', run)
ProblemRouter.get('/single/:name', single)

module.exports = ProblemRouter