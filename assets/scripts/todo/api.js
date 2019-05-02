const config = require('../config')
const store = require('../store')

const sendToDo = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'item': {
        'title': data.title,
        'description': data.description,
        'user_id': store.user.id
      }
    }
  })
}

const getToDos = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  sendToDo,
  getToDos
}
