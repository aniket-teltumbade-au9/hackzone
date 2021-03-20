const Company = require('../Models/CompanyModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authpasskey = process.env.AUTH_PASS_KEY

exports.adminRegister = (req, res) => {
  const { email, password, full_name, phone_number, company, company_size, country, role } = req.body
  let hashpass = bcrypt.hashSync(password, 'Hellmancandy')
  Company.create({ email, password: hashpass, full_name, phone_number, company, company_size, country, role }, (err, result) => {
    if (err) res.status(501).send(`RegistrationErr: ${err}`)
    else if (result) {
      res.status(200).send(`Registration Successful!`)
    }
    else res.status(502).send('Something went wrong!')
  })
}

exports.adminLogin = (req, res) => {
  const { email, password } = req.body
  Company.find({ email }, (docerr, doc) => {
    if (doc) {
      if (bcrypt.compareSync(password, doc.password)) {
        jwt.sign({
          data: email
        }, authpasskey, { expiresIn: '1h' }, (autherr, authtoken) => {
          if (authtoken) {
            res.status(200).json({ authtoken })
          }
        })
      }
      else {
        res.status(501).send('Password doesn\'t match')
      }
    }
    else {
      res.status(404).send('Something went wrong!')
    }
  })
}