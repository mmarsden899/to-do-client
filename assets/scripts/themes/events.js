'use strict'
const ui = require('./ui')
const store = require('../store')
window.toggle = true

const onTurnCSS = function () {
  ui.turnCSS()
}

const onRunBlue = function () {
  ui.turnBlue()
}

const onRunPurple = function () {
  ui.turnPurple()
}

const onRunPink = function () {
  ui.turnPink()
}

const openBuyModal = function () {
}

const blueDrop = function () {
  if (store.complete.blue === true) {
    onRunBlue()
  } else if (store.complete.task > 7) {
    openBuyModal()
  } else {
    $('.cant-afford').show()
    console.log('can\'t afford')
  }
}

const addHandlers = function () {
  $('.dark').hide()
  $('.blue').hide()
  $('.cant-afford').hide()
  $('#pink').on('click', onRunPink)
  $('#blue').on('click', onRunBlue)
  $('#purple').on('click', onRunPurple)
  $('#toggle-button').on('click', onTurnCSS)
  $('.blue-drop').on('click', blueDrop)
}

module.exports = {
  addHandlers
}
