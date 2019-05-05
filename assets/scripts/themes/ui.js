
// const events = require('./events')

const turnCSS = function () {
  if (window.toggle === true) {
    $('.toggle-button').css({ marginLeft: '105px' })
    $('body').css('background-color', 'white')
    $('.to-do-display').css('background-color', 'lightgray')
    $('h4').css('color', 'black')
    $('h2').css('color', 'black')
    $('h1').css('color', 'black')
    $('.card').css('background-color', 'white')
    $('.card').css('color', 'black')
    $('nav').css('background-color', 'lightgray')
    $('.sun').css('display', 'block')
    $('.moon').css('display', 'none')
    window.toggle = false
  } else {
    $('.toggle-button').css({ marginLeft: '0' })
    $('body').css('background-color', '')
    $('.to-do-display').css('background-color', '')
    $('.to-do-display').css('background-color', '')
    $('h4').css('color', '')
    $('h2').css('color', '')
    $('h1').css('color', '')
    $('.card').css('background-color', '')
    $('.card').css('color', '')
    $('nav').css('background-color', '')
    $('.sun').css('display', 'none')
    $('.moon').css('display', 'block')
    window.toggle = true
  }
}

module.exports = {
  turnCSS
}
