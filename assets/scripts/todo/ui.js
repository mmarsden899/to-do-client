const showItemsTemplate = require('../templates/todo-listing.handlebars')

const createToDoFadeIn = function () {
  $('#create-to-do').fadeIn('slow')
}

const getStarted = function () {
  $('#no-to-do').fadeOut('slow')
  setTimeout(createToDoFadeIn, 1000)
}

const sendToDoFailure = function () {
  console.log('send to do failure! with')
}

const sendToDoSuccess = function () {
  $('#create-to-do').fadeOut('slow')
}

const getToDoFailure = function () {

}

const getToDoSuccess = function (data) {
  console.log(data)
  const showItemsHtml = showItemsTemplate({ items: data.items })
  $('.content').html(showItemsHtml)
}

module.exports = {
  createToDoFadeIn,
  getStarted,
  sendToDoFailure,
  sendToDoSuccess,
  getToDoFailure,
  getToDoSuccess
}
