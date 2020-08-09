const nodemailer = require('nodemailer');

exports.sendEmail = (req, res, next) => {
        const output = `
          <p>Please verify that this account belongs to you</p>
          <a href="www.facebook.com" target="_blank" ><button>Verify<button></a>
          `;
      
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
          auth: {
              user: 'osamarizwan444@gmail.com', // generated ethereal user
              pass: '3153182l'  // generated ethereal password
          },
        });
      
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"MOR Group of companies" <osamarizwan444@gmail.com>', // sender address
            to: 'sidrarizwan2@gmail.com', // list of receivers
            subject: 'Verify your account', // Subject line
            text: 'Hello world?', // plain text body
            html: output // html body
        };
      
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log('send', error);
            }
            console.log('Message sent: %s', info.messageId);   
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
            res.send('msg : Email has been sent');
        });
    }