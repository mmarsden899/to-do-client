'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const ui = require('./ui')
const api = require('./api')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassButton = function () {
  ui.changePass()
}

const onPassToAccount = function (event) {
  event.preventDefault()
  ui.passToAccount()
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

const onToSignUp = function (event) {
  event.preventDefault()
  ui.toSignUp()
}

const onBackToLogin = function (event) {
  event.preventDefault()
  ui.backToLogin()
}

const onUpdateCompleted = function () {
  api.updateCompleted()
    .then(ui.updateCompletedSuccess)
    .catch(ui.updateCompletedFailure)
}

const addHandlers = function (event) {
  $('#change-password').hide()
  $('#signUpForm').hide()
  $('.modal').show()

  $('#backtoLogin').on('click', onBackToLogin)
  $('#sign-up-button').on('click', onToSignUp)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#changepass').on('click', onChangePassButton)
  $('#passtoAccount').on('click', onPassToAccount)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers,
  onUpdateCompleted
}
