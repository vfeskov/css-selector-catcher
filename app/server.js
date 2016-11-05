const {sendemail} = require('./server-outlets');

module.exports = match$ =>
  match$.subscribe(sendemail)
