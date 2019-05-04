const store = require('../store')
const moment = require('moment')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#signUpForm').hide()
  $('#loginForms').fadeIn('slow')
  console.log('sign up success with data ' + data)
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  console.log('sign up failure with data ' + data)
}

const signInSuccess = function (data) {
  store.user = data.user
  console.log(store.user)
  $('form').trigger('reset')
  $('#loginForms').hide()
  $('#to-do').fadeIn('slow')
  console.log('sign in success with data ' + data)
  console.log(store.user.created_at)
  console.log(moment(store.user.created_at).add(1, 'minutes').format())
  console.log(moment().format())
  if (moment(store.user.created_at).add(1, 'minutes').format() >= moment().format()) {
    $('.to-do-h4').html('welcome back!')
  } else {
    $('.to-do-h4').html('it appears you dont have any to-dos yet!')
  }
}

const signInFailure = function (data) {
  $('form').trigger('reset')
  console.log('sign in failure with data ' + JSON.stringify(data))
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
  console.log('Sign Out Failed!')
}

const changePwSuccess = function () {
  $('#change-password').hide()
  $('#to-do').show()
  $('form').trigger('reset')
}

const changePwFailure = function () {
  console.log('change pw failed')
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
