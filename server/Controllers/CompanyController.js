const Company = require('../Models/CompanyModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authpasskey = process.env.AUTH_PASS_KEY

exports.adminRegister = (req, res) => {
  const { email, password, full_name, phone_number, company, company_size, country, role } = req.body
  let hashpass = bcrypt.hashSync(password, 8)
  Company.create({ email, password: hashpass, full_name, phone_number, company, company_size, country, role }, (err, result) => {
    if (err) {
      res.status(501).send({ msg: `RegistrationErr: ${err}` })
    }
    else if (result) {
      res.status(200).send({ msg: `Registration Successful!` })
    }
    else res.status(502).send({ msg: 'Something went wrong!' })
  })
}

exports.adminLogin = (req, res) => {
  const { email, password } = req.body
  Company.find({ email }, (docerr, doc) => {
    console.log(doc)
    if (docerr) {
      console.log(doc)
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
exports.adminProfile = (req, res) => {
  const email = req.email
  Company.findOne({ email }, {
    _id: 0,
    full_name: 1,
    email: 1,
    phone_number: 1,
    company: 1,
    company_size: 1,
    country: 1,
    role: 1
  }, (docerr, doc) => {
    if (docerr) {
      res.status(304).send({ err: 'Something went wrong!' })
    }
    else {
      res.status(200).send({ msg: doc })
    }
  })
}