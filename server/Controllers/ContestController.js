const Contest = require('../Models/ContestModel')
const Problem = require('../Models/ProblemModel')

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
    if (err) res.status(501).send({ err: `SavingContestErr: ${err}` })
    else if (result) {
      res.status(200).send({ msg: `Contest Saving Successful!` })
    }
    else res.status(502).send({ msg: 'Something went wrong!' })
  })
}

exports.liveContest = (req, res) => {
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
      res.status(422).send({ msg: `QueryProcessingErr:${docerr}` })
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
      res.status(422).send({ msg: `QueryProcessingErr:${docerr}` })
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
      res.status(422).send({ msg: `QueryProcessingErr:${docerr}` })
    }
    else {
      res.status(200).send(doc)
    }
  })
}

exports.contestChallenges = (req, res) => {
  //res.send(req.body)
  Contest.find(req.body, (cdocerr, cdoc) => {
    if (cdocerr) {
      res.status(422).send({ msg: `QueryProcessingErr:${cdocerr}` })
    }
    else {
      console.log(typeof cdoc[0].challenges)
      Problem.aggregate([
        {
          '$match': {
            '_id': {
              '$in': cdoc[0].challenges
            }
          }
        }
      ], (pdocerr, pdoc) => {
        if (pdocerr) {
          res.status(422).send({ msg: `QueryProcessingErr:${pdocerr}` })
        }
        else {
          var status = cdoc[0].start_date < new Date() < cdoc[0].end_date ?
            "Live" :
            cdoc[0].start_date > new Date() ?
              "Upcoming" :
              "Ended"
              /* let m=pdoc.map((el)=> {...el,cdoc[0].name,status])
              console.log(m) */
          res.status(200).send({ challenges: pdoc, name: cdoc[0].name, status })
        }
      })
    }
  })
}