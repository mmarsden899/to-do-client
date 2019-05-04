// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'
const moment = require('moment')

const overdue = (num) => {
  const momentNow = moment().format()
  const dueIn = moment(num).add(7, 'd').format()
  if (dueIn > momentNow) {
    return true
  } else {
    return false
  }
}

module.exports = overdue
