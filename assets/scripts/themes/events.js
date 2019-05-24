'use strict'
const ui = require('./ui')
const store = require('../store')
const completeEvents = require('../completes/events')
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

const canAfford = function (event) {
  console.log(event.target)
  if ($(event.target).text() === 'blue') {
    if (store.complete.blue) {
      $(event.target).text('owned')
    } else if (store.complete.task >= 7) {
      $(event.target).text('buy?')
    } else {
      $(event.target).text('cant afford')
    }
  } else if ($(event.target).text() === 'pink') {
    if (store.complete.pink) {
      $(event.target).text('owned')
    } else if (store.complete.task >= 7) {
      $(event.target).text('buy?')
    } else {
      $(event.target).text('cant afford')
    }
  } else if ($(event.target).text() === 'purple') {
    if (store.complete.purple) {
      $(event.target).text('owned')
    } else if (store.complete.task >= 7) {
      $(event.target).text('buy?')
    } else {
      $(event.target).text('cant afford')
    }
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

const onBuyTheme = function (event) {
  if ($(event.target).hasClass('blue-drop')) {
    if (store.complete.blue) {
      onRunBlue()
    } else if (store.complete.task >= 7) {
      store.complete.blue = true
      completeEvents.onBuyTheme(7)
    }
  } else if ($(event.target).hasClass('pink-drop')) {
    if (store.complete.pink) {
      onRunPink()
    } else if (store.complete.task >= 7) {
      store.complete.pink = true
      completeEvents.onBuyTheme(7)
    }
  } else {
    if (store.complete.purple) {
      onRunPurple()
    } else if (store.complete.task >= 7) {
      store.complete.purple = true
      completeEvents.onBuyTheme(7)
    }
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
  $('.blue-drop').on('click', onBuyTheme)
  $('.pink-drop').hover(canAfford, canAffordReturn)
  $('.purple-drop').hover(canAfford, canAffordReturn)
}

module.exports = {
  addHandlers
}
