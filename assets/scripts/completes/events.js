'use strict'

const ui = require('./ui')
const api = require('./api')
const todoApi = require('../todo/api')
const store = require('../store')

const onCreateCompleted = function () {
  api.createCompleted()
    .then(ui.createCompletedSuccess)
    .catch(ui.createCompletedFailure)
}

const onUpdateCompleted = function () {
  api.updateCompleted()
    .then(ui.updateCompletedSuccess)
    .catch(ui.updateCompletedFailure)
}

const iterateOverCompletes = function () {
  for (let i = 0; i < store.allCompletes.length; i++) {
    if (store.allCompletes[i].user_id === store.user.id) {
      store.complete = store.allCompletes[i]
      store.hascomplete = true
    }
  }
  if (store.hascomplete) {
    console.log('wtf')
    $('#taskscompleted').html(`points earned: ${store.complete.task}`)
  } else {
    console.log('wtf2')
    onCreateCompleted()
    todoApi.newUser()
  }
}

const onGetCompletes = function () {
  api.getCompletes()
    .then(ui.getCompletesSuccess)
    .then(iterateOverCompletes)
    .catch(ui.getCompletesFailure)
}

const addHandlers = function (event) {
}

module.exports = {
  addHandlers,
  onCreateCompleted,
  onUpdateCompleted,
  onGetCompletes
}
