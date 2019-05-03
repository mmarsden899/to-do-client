const getFormFields = require('./../../../lib/get-form-fields.js')
const ui = require('./ui')
const api = require('./api')
const moment = require('moment')
const store = require('../store')

const onGetStarted = function () {
  ui.getStarted()
}

const onSendToDo = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)
  api.sendToDo(data)
    .then(ui.sendToDoSuccess)
    .catch(ui.sendToDoFailure)
}

const onGetToDos = function (event) {
  event.preventDefault()
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
  console.log(id)
  console.log('are we getting here?')
  api.destroyToDo(id)
    .then(ui.destroyToDoSuccess(id))
    .catch(ui.destroyToDoSuccess)
}

const idArray = []
const iterateOver = function (id) {
  for (let i = 0; i < store.items.length; i++) {
    if (store.items[i].id !== id) {
      console.log('%%%%%%%%%%%%%%%%')
      console.log(store.items[i])
      idArray.push(store.items[i])
      console.log(idArray)
    }
  }
  return idArray
}

const onShowUpdateForm = function (event) {
  clearInterval(window.loopInterval)
  event.preventDefault()
  let id = $(event.target).data().id
  let task = store.items.find(function (num) {
    console.log(num.id)
    return num.id === id
  })
  let otherTasks = iterateOver(id)
  console.log(idArray)
  ui.showUpdateForm(task, otherTasks)
}

const onMoreToDos = function (event) {
  event.preventDefault()
  ui.moreToDos()
}

const startUpToDos = function () {
  setTimeout(onGetToDoStart, 1000)
}

const loopToDos = function () {
  window.loopInterval = setInterval(startUpToDos, 2000)
}


const addHandlers = function () {
  $('#to-do').hide()
  $('#add-another').hide()
  $('#create-to-do').hide()
  $('#card-update').hide()
  $('#update-task').hide()

  $('#lets-do-it').on('click', onMoreToDos)
  $('#get-started').on('click', onGetStarted)
  $('#get-started').on('click', startUpToDos)
  $('#get-started').on('click', loopToDos)
  $('#to-do-form').on('submit', onSendToDo)
  $('#get-todos').on('click', onGetToDos)
//  $('.content').on('click')
  $('.content').on('click', '.delete', onDestroyToDo)
  $('.content').on('click', '.update', onShowUpdateForm)
}

module.exports = {
  addHandlers,
  onGetToDos,
  loopToDos
}
