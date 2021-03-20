const nodemailer = require('nodemailer');
const { activateTemplate } = require('./mailTemplate/activate');
module.exports = async function mail(full_name, email, activation_url, template_type) {

  let transporter = nodemailer.createTransport(
    {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'rainwalkeraliasalex@gmail.com',
        pass: 'Andysayz@100691'
      },
      logger: false,
      debug: true
    },
    {
      from: 'Hackzone <noreply@hackzone.herokuapp.com>',
      headers: {
        'X-Laziness-level': 1000
      }
    }
  );
  let htmlTemplate = ''
  if (template_type === "accountActivation") {
    htmlTemplate = activateTemplate(full_name, activation_url)
  }
  else {

  }

  let message = {
    to: `${full_name} <${email}>`,
    subject: 'Nodemailer is unicode friendly ✔',
    html: htmlTemplate
  };

  let info = await transporter.sendMail(message);

  console.log('Message sent successfully!');
  console.log(nodemailer.getTestMessageUrl(info));
  transporter.close();
  return nodemailer.getTestMessageUrl(info)
}