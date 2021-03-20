const Company = require('../Models/CompanyModel')
const bcrypt = require('bcrypt')

exports.adminRegister = (req, res) => {
  const { email, password, full_name, phone_number, company, company_size, country, role } = req.body
  let hashpass = bcrypt.hashSync(password,'Hellmancandy')
  Company.create({ email, password: hashpass, full_name, phone_number, company, company_size, country, role, isActive:false }, (err, result) => {
    if (err) res.send(`RegistrationErr: ${err}`)
    else if (result) res.send('Success')
    else res.send(400)
  })
}