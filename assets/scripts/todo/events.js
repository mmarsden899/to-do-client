const getFormFields = require('./../../../lib/get-form-fields.js')
const ui = require('./ui')
const api = require('./api')
const store = require('../store')
const completeApi = require('../completes/api')

const onGetStarted = function () {
  ui.getStarted()
}

const onSendToDo = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.sendToDo(data)
    .then(ui.sendToDoSuccess)
    .catch(ui.sendToDoFailure)
  setTimeout(onGetToDos, 500)
}

const onGetToDos = function () {
  api.getToDos()
    .then(ui.getToDoSuccess)
    .catch(ui.getToDoFailure)
}

const onGetToDoStart = function () {
  api.getToDos()
    .then(ui.getToDoSuccess)
    .catch(ui.getToDoFailure)
}

const onDestroyToDo = function (event) {
  event.preventDefault()
  let id = $(event.target).data().id
  api.destroyToDo(id)
    .then(ui.destroyToDoSuccess(id))
    .then(loopToDos)
    .catch(ui.destroyToDoFailure)
  completeApi.updateCompleted()
}

const onShowUpdateForm = function (event) {
  clearInterval(window.loopInterval)
  event.preventDefault()
  const id = $(event.target).data().id
  store.id = $(event.target).data().id
  ui.showUpdateForm(store.items)
}

const onMoreToDos = function (event) {
  event.preventDefault()
  ui.moreToDos()
}

const startUpToDos = function () {
  setTimeout(onGetToDoStart, 500)
}

const loopToDos = function () {
  window.loopInterval = setTimeout(startUpToDos, 500)
}

const onCancelUpdate = function (event) {
  event.preventDefault()
  startUpToDos()
}

const onSendUpdate = function (event) {
  event.preventDefault()
  const id = $(event.target).data().id
  const data = getFormFields(event.target)

  api.sendUpdate(data, id)
    .then(ui.sendUpdateSuccess)
    .then(loopToDos)
    .catch(ui.sendUpdateFailure)
}


const addHandlers = function () {
  // $('.content').on('click', onGetToDos)
  $('#to-do').hide()
  $('#add-another').hide()
  $('#create-to-do').hide()
  $('#card-update').hide()
  $('#update-task').hide()
  $('.content').hide()
// events
  $('#lets-do-it').on('click', onMoreToDos)
  $('#get-started').on('click', onGetStarted)
  $('#get-started').on('click', startUpToDos)
  $('#get-started').on('click', loopToDos)
  $('#to-do-form').on('submit', onSendToDo)
  $('#get-todos').on('click', onGetToDos)
//  $('.content').on('click')
  $('.content').on('click', '.delete', onDestroyToDo)
  $('.content').on('click', '.update', onShowUpdateForm)
  $('.content').on('click', '.cancel', onCancelUpdate)
  $('.content').on('submit', '.update-form', onSendUpdate)
}

module.exports = {
  addHandlers,
  onGetToDos,
  loopToDos,
  startUpToDos
}
