const showItemsTemplate = require('../templates/todo-listing.handlebars')
const showUpdateTemplate = require('../templates/update-items.handlebars')
// const events = require('./events')
const store = require('../store')
const events = require('./events')

const createToDoFadeIn = function () {
  $('#create-to-do').fadeIn('slow')
}

const showToDoFadeIn = function () {
  $('.content').fadeIn('slow')
}

const addAnotherFadeIn = function () {
  $('#add-another').fadeIn('slow')
}

const getStarted = function () {
  $('#no-to-do').fadeOut('slow')
  setTimeout(createToDoFadeIn, 1000)
  setTimeout(showToDoFadeIn, 1500)
}

const sendToDoFailure = function () {
  $('form').trigger('reset')
}

const sendToDoSuccess = function () {
  $('form').trigger('reset')
  $('#create-to-do').fadeOut('slow')
  setTimeout(addAnotherFadeIn, 1000)
}

const getToDoFailure = function () {
  $('form').trigger('reset')
}

const getToDoSuccess = function (data) {
  store.items = data.items
  const showItemsHtml = showItemsTemplate({ items: data.items })
  $('.content').html(showItemsHtml)
}

const showUpdateForm = function () {
  const showUpdateHtml = showUpdateTemplate({ items: store.items })
  $('.content').html(showUpdateHtml)
}

const destroyToDoSuccess = function (id) {
  $(id).hide()
}

const destroyToDoFailure = function (id) {
}

const backToDo = function () {
  $('#create-to-do').fadeIn('slow')
}

const moreToDos = function () {
  $('#add-another').fadeOut('slow')
  setTimeout(backToDo, 1000)
}

const sendUpdateFailure = function (data) {
}

const sendUpdateSuccess = function (data) {
}

module.exports = {
  createToDoFadeIn,
  getStarted,
  sendToDoFailure,
  sendToDoSuccess,
  getToDoFailure,
  getToDoSuccess,
  destroyToDoSuccess,
  destroyToDoFailure,
  moreToDos,
  showUpdateForm,
  sendUpdateFailure,
  sendUpdateSuccess
}
