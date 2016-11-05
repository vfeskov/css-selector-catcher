const open = require('open')
const {url} = require('../config.js')

module.exports = _ => open(url)
