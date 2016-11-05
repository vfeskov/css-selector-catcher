const nodemailer = require('nodemailer');
const sesTransport = require('nodemailer-ses-transport');

const {emailToNotify, url, awsAccessKeyId, awsSecretAccessKey} = require('../config.js')

module.exports = _ => {
  var transport = nodemailer.createTransport(sesTransport({
    accessKeyId: awsAccessKeyId,
    secretAccessKey: awsSecretAccessKey
  }));
  const mailOptions = {
    from: '"CSS Selector Catcher" <dreammer6@gmail.com>',
    to: emailToNotify,
    subject: 'Required CSS selector has been found on the monitored page',
    html: `<a href="${url}">${url}</a>`
  }
  transport.sendMail(mailOptions, err => err && console.log(err))
}
