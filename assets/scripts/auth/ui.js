const store = require('../store')
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
  if (moment(store.user.created_at).add(1, 'minutes').format() >= moment().format()) {
    $('.to-do-h4').html('welcome back!')
  } else {
    $('.to-do-h4').html('it appears you dont have any to-dos yet!')
  }
}

const signInFailure = function (data) {
  $('form').trigger('reset')
}

const changePass = function () {
  $('#to-do').hide()
  $('#change-password').show()
}

const passToAccount = function () {
  $('#change-password').hide()
  $('#to-do').show()
}

const signOutSuccess = function () {
  $('#to-do').hide()
  $('#loginForms').show()
  store.user = null
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
