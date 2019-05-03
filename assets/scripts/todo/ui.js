const showItemsTemplate = require('../templates/todo-listing.handlebars')
const showUpdateTemplate = require('../templates/update-listing.handlebars')
// const events = require('./events')
const store = require('../store')
const events = require('./events')

const createToDoFadeIn = function () {
  $('#create-to-do').fadeIn('slow')
}

const addAnotherFadeIn = function () {
  $('#add-another').fadeIn('slow')
}

const getStarted = function () {
  $('#no-to-do').fadeOut('slow')
  setTimeout(createToDoFadeIn, 1000)
}

const sendToDoFailure = function () {
  $('form').trigger('reset')
  console.log('send to do failure! with')
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
  console.log(data)
  store.items = data.items
  console.log('these are your items! ' + JSON.stringify(store.items))
  const showItemsHtml = showItemsTemplate({ items: data.items })
  $('.content').html(showItemsHtml)
}

const showUpdateForm = function (task, otherTasks) {
  // console.log(store.items.indexOf(id))

  $('.content').empty()
  const showUpdateHtml = showUpdateTemplate({ item: task, otherItems: otherTasks })
  $('.content').html(showUpdateHtml)
}

const destroyToDoSuccess = function (id) {
  $(id).hide()
  console.log('destroy todo success')
  events.loopToDos()
}

const destroyToDoFailure = function (id) {
  console.log('destroy todo failure')
}

const backToDo = function () {
  $('#create-to-do').fadeIn('slow')
}

const moreToDos = function () {
  $('#add-another').fadeOut('slow')
  setTimeout(backToDo, 1000)
}

const sendUpdateFailure = function (data) {
  console.log('update failed with data ' + JSON.stringify(data))
}

const sendUpdateSuccess = function (data) {
  console.log('update succesful with data ' + data)
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
