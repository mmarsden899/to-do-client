const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  console.log('sign up success with data ' + data)
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  console.log('sign up failure with data ' + data)
}

const signInSuccess = function (data) {
  store.user = data.user
  $('form').trigger('reset')
  $('#loginForms').hide()
  $('#to-do').fadeIn('slow')
  console.log('sign in success with data ' + data)
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
  changePwFailure
}
