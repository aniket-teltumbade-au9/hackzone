const Developer = require('../Models/DeveloperModel')
const Token = require('../Models/TokenModel')
const queryString = require('querystring')
const bcrypt = require('bcrypt')
const mail = require('../functions/mail')

exports.userRegister = (req, res) => {
  const { full_name, email, password } = req.body
  var hashpass = bcrypt.hashSync(password, 8)
  Developer.create({ full_name, email, password: hashpass, isActive: false }, (err, result) => {
    console.log(err, result)
    if (err) res.send(`RegistrationErr: ${err}`)
    else if (result) {
      var token = Math.random().toString(36).substr(2);
      Token.create({ token, email, role: 'Developer' }, async (err1, result1) => {
        var sentMail = mail(full_name, email, `${req.get('origin')}/Developer/${token}` , 'accountActivation')
        console.log(sentMail)
        res.send('Activation link sent to your email account. Check mail!')
      })
    }
    else res.send(400)
  })
}