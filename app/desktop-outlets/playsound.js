const playSound = require('play-sound')

module.exports = _ => {
  const player = playSound({})
  player.play('sms-alert-5-daniel_simon.mp3', err => err && console.log(err))
}
