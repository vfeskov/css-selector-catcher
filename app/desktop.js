const {openbrowser, playsound} = require('./desktop-outlets');

module.exports = match$ =>
  match$.subscribe(_ => {
    openbrowser()
    playsound()
  })
