'use strict'
const ui = require('./ui')
window.toggle = true

const onTurnCSS = function () {
  ui.turnCSS()
}

const addHandlers = function () {
  $('#toggle-button').on('click', onTurnCSS)
}

module.exports = {
  addHandlers
}
