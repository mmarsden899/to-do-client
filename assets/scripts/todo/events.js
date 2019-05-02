const getFormFields = require('./../../../lib/get-form-fields.js')
const ui = require('./ui')
const api = require('./api')

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

const addHandlers = function () {
  $('#create-to-do').hide()
  $('#get-started').on('click', onGetStarted)
  $('#to-do-form').on('submit', onSendToDo)
  $('#get-todos').on('click', onGetToDos)
}

module.exports = {
  addHandlers
}
