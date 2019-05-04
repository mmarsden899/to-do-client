// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const compare = (num) => {
  if (num === window.id) {
    return true
  } else {
    return false
  }
}

module.exports = compare
