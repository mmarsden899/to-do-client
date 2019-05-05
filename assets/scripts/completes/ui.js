const store = require('../store')

const createCompletedSuccess = function (data) {
  console.log('==========================')
  console.log(data)
  store.complete = data.complete
  console.log(store.complete)
  $('#taskscompleted').html(`tasks completed: ` + store.complete.task)
}

const createCompletedFailure = function (data) {
  console.log('whoops with data ' + JSON.stringify(data))
}

const updateCompletedSuccess = function (data) {
  store.complete = data.complete
}

const updateCompletedFailure = function (data) {
  console.log('update completed failed with ' + data)
}

const getCompletesSuccess = function (data) {
  store.allCompletes = data.completes
  console.log(JSON.stringify(data))
  console.log('got completes with this data + ' + JSON.stringify(data))
  console.log('****************************')
  console.log('this is a complete object + ' + store.allCompletes.length)
}

const getCompletesFailure = function (data) {
  console.log('got completes failed with this data + ' + JSON.stringify(data))
}

module.exports = {
  createCompletedSuccess,
  createCompletedFailure,
  updateCompletedSuccess,
  updateCompletedFailure,
  getCompletesFailure,
  getCompletesSuccess
}
