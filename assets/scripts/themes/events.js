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

const canAfford = function (event) {
  console.log(event.target)
  if (store.complete.task >= 7) {
    $(event.target).text('buy?')
  } else {
    $(event.target).text('cant afford')
  }
}

const canAffordReturn = function (event) {
  if ($(event.target).hasClass('blue-drop')) {
    $(event.target).text('blue')
  } else if ($(event.target).hasClass('pink-drop')) {
    $(event.target).text('pink')
  } else {
    $(event.target).text('purple')
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
  // $('.blue-drop').on('click', blueDrop)
  $('.blue-drop').hover(canAfford, canAffordReturn)
  $('.pink-drop').hover(canAfford, canAffordReturn)
  $('.purple-drop').hover(canAfford, canAffordReturn)
}

module.exports = {
  addHandlers
}
