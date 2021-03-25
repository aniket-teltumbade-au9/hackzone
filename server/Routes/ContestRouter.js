const { addContest, liveContest, upcomingContest, endedContest } = require('../Controllers/ContestController')
const authverify = require('../functions/authverify')

const ContestRouter = require('express').Router()

ContestRouter.post('/add', authverify, addContest)
ContestRouter.get('/live' , authverify, liveContest)
ContestRouter.get('/upcoming' , authverify, upcomingContest)
ContestRouter.get('/ended' , authverify, endedContest)

module.exports = ContestRouter