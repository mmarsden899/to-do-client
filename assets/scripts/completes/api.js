'use strict'
const config = require('../config')
const store = require('../store')

const createCompleted = function () {
  return $.ajax({
    url: config.apiUrl + '/completes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'complete': {
        'task': 0,
        'blue': false,
        'pink': false,
        'purple': false
      }
    }
  })
}

const getCompletes = function () {
  return $.ajax({
    url: config.apiUrl + '/completes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateCompleted = function () {
  return $.ajax({
    url: config.apiUrl + '/completes/' + store.complete.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'complete': {
        'task': (store.complete.task + 1)
      }
    }
  })
}

const buyTheme = function (cost) {
  return $.ajax({
    url: config.apiUrl + '/completes/' + store.complete.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'complete': {
        'task': (store.complete.task - cost),
        'blue': store.complete.blue,
        'pink': store.complete.pink,
        'purple': store.complete.purple
      }
    }
  })
}

module.exports = {
  updateCompleted,
  createCompleted,
  getCompletes,
  buyTheme
}
