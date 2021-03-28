const { challengeRank, contestRank } = require('../Controllers/RankController')

const RankRouter = require('express').Router()

RankRouter.post('/challenge_rank', challengeRank)
RankRouter.post('/contest_rank', contestRank)

module.exports = RankRouter