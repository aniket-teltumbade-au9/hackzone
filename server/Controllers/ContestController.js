const Contest = require('../Models/ContestModel')

exports.addContest = (req, res) => {
  const {
    name,
    overview,
    start_date,
    end_date,
    tagline,
    description,
    challenges
  } = req.body
  const creator = req.email
  Contest.create({
    name,
    overview,
    start_date,
    end_date,
    tagline,
    description,
    challenges,
    creator
  }, (err, result) => {
    console.log(err, result)
    if (err) res.status(501).send({ err: `SavingContestErr: ${err}` })
    else if (result) {
      res.status(200).send({ msg: `Contest Saving Successful!` })
    }
    else res.status(502).send({ msg: 'Something went wrong!' })
  })
}

exports.liveContest = (req, res) => {
  console.log("hey")
  Contest.aggregate([{
    $match: {
      start_date: {
        $lt: new Date()
      },
      end_date: {
        $gte: new Date()
      }
    }
  }
  ], (docerr, doc) => {
    if (docerr) {
      res.status(304).send({ msg: `QueryProcessingErr:${docerr}` })
    }
    else {
      res.status(200).send(doc)
    }
  })
}

exports.upcomingContest = (req, res) => {
  Contest.aggregate([{
    $match: {
      start_date: {
        $gt: new Date()
      }
    }
  }], (docerr, doc) => {
    if (docerr) {
      res.status(304).send({ msg: `QueryProcessingErr:${docerr}` })
    }
    else {
      res.status(200).send(doc)
    }
  })
}

exports.endedContest = (req, res) => {
  Contest.aggregate([{
    $match: {
      end_date: {
        $lt: new Date()
      }
    }
  }], (docerr, doc) => {
    if (docerr) {
      res.status(304).send({ msg: `QueryProcessingErr:${docerr}` })
    }
    else {
      res.status(200).send(doc)
    }
  })
}