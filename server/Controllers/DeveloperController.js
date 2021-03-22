const Developer = require('../Models/DeveloperModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authpasskey = process.env.AUTH_PASS_KEY

exports.userRegister = (req, res) => {
  const { full_name, email, password } = req.body
  var hashpass = bcrypt.hashSync(password, 8)
  Developer.create({ full_name, email, password: hashpass }, (err, result) => {
    if (err) res.status(501).send({ msg: `RegistrationErr: ${err}` })
    else if (result) {
      res.status(200).send({ msg: `Registration Successful!` })
    }
    else res.status(502).send({ msg: 'Something went wrong!' })
  })
}
exports.userLogin = (req, res) => {
  const { email, password } = req.body
  Developer.find({ email }, (docerr, doc) => {
    if (docerr) {
      res.status(402).json({ err: docerr })
    }
    else if (doc) {
      if (bcrypt.compareSync(password, doc[0].password)) {
        jwt.sign({
          data: email
        }, authpasskey, { expiresIn: '1h' }, (autherr, authtoken) => {
          if (authtoken) {
            res.status(200).json({ authtoken })
          }
        })
      }
      else {
        res.status(501).send({ msg: 'Password doesn\'t match' })
      }
    }
    else {
      res.status(404).send({ msg: 'Something went wrong!' })
    }
  })
}
exports.userProfile = (req, res) => {
  const email = req.email
  Developer.findOne({ email }, { _id: 0, full_name: 1, email: 1 }, (docerr, doc) => {
    if (docerr) {
      res.status(304).send({ err: 'Something went wrong!' })
    }
    else {
      res.status(200).send({ msg: doc })
    }
  })
}
