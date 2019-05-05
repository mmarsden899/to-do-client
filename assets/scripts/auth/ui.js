const store = require('../store')
const completesEvents = require('../completes/events')
const moment = require('moment')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#signUpForm').hide()
  $('#loginForms').fadeIn('slow')
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('form').trigger('reset')
  $('#loginForms').hide()
  $('#to-do').fadeIn('slow')
  console.log(store.user)
  if (moment(store.user.created_at).add(1, 'm').format() >= moment().format()) {
    $('.to-do-h4').html('welcome to due in seven days!')
  } else {
    $('.to-do-h4').html('welcome back!')
  }
  completesEvents.onGetCompletes()
  console.log(store.user)
}

const signInFailure = function (data) {
  $('form').trigger('reset')
}

const changePasswordFadeIn = function () {
  $('#change-password').fadeIn('slow')
}

const changePass = function () {
  $('#to-do').fadeOut('slow')
  setTimeout(changePasswordFadeIn, 500)
}

const passToAccount = function () {
  $('#change-password').hide()
  $('#to-do').fadeIn('slow')
}

const signOutSuccess = function () {
  $('#to-do').hide()
  $('#add-another').hide()
  $('#create-to-do').fadeOut(700)
  $('#card-update').fadeOut(700)
  $('#update-task').fadeOut(700)
  $('.content').fadeOut(700)
  $('#no-to-do').show()
  $('#loginForms').fadeIn(1500)
  store.user = null
  store.items = null
  store.complete = null
  store.hascomplete = null
  store.allCompletes = null
  store.id = null
}

const signOutFailure = function () {
}

const changePwSuccess = function () {
  $('#change-password').hide()
  $('#to-do').show()
  $('form').trigger('reset')
}

const changePwFailure = function () {
  $('form').trigger('reset')
}

const toSignUp = function () {
  $('#loginForms').hide()
  $('#signUpForm').fadeIn('slow')
}

const backToLogin = function () {
  $('#signUpForm').hide()
  $('#loginForms').fadeIn('slow')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePass,
  passToAccount,
  signOutSuccess,
  signOutFailure,
  changePwSuccess,
  changePwFailure,
  toSignUp,
  backToLogin
}
