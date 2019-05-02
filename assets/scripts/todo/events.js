// const getFormFields = require('./../../../lib/get-form-fields.js')
const ui = require('./ui')
// const api = require('./api')

const onGetStarted = function () {
  ui.getStarted()
}

const addHandlers = function () {
  $('#get-started').on('click', onGetStarted)
}

module.exports = {
  addHandlers
}
