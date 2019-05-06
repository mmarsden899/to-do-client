
// const events = require('./events')

const turnCSS = function () {
  if (window.toggle === true) {
    $('.toggle-button').css({ marginLeft: '50px' })
    $('body').css('background-color', 'white')
    $('.get-started').css('color', 'black')
    $('.get-started').css('border', 'solid 1px black')
    $('.get-started').mouseover(function () {
      $(this).css('background-color', 'black')
    })
    $('.get-started').mouseover(function () {
      $(this).css('color', 'white')
    })
    $('.get-started').mouseleave(function () {
      $(this).css('background-color', 'lightgray')
    })
    $('.get-started').mouseleave(function () {
      $(this).css('color', 'black')
    })
    $('.to-do-display').css('background-color', 'lightgray')
    $('h5').css('color', 'black')
    $('h4').css('color', 'black')
    $('h2').css('color', 'black')
    $('h1').css('color', 'black')
    $('b').css('color', 'black')
    $('i').css('color', 'black')
    $('.dropdown-menu').css('background-color', 'rgb(161, 156, 156)')
    $('.dropdowns').css('background-color', 'rgb(161, 156, 156)')
    $('.dropdowns').css('color', 'black')
    $('.dropdowns').mouseover(function () {
      $(this).css('background-color', 'rgb(136, 132, 132)')
    })
    $('.dropdowns').mouseover(function () {
      $(this).css('color', 'black')
    })
    $('.dropdowns').mouseleave(function () {
      $(this).css('background-color', 'rgb(161, 156, 156)')
    })
    $('.dropdowns').mouseleave(function () {
      $(this).css('color', 'black')
    })
    $('.card').css('background-color', 'white')
    $('.card').css('color', 'black')
    $('nav').css('background-color', 'lightgray')
    $('.sun').css('display', 'block')
    $('.moon').css('display', 'none')
    $('.toggle-button-wrapper').css('background-color', 'rgb(179, 179, 179)')
    $('.light').hide()
    $('.dark').show()
    window.toggle = false
  } else {
    $('.sun').css('display', 'none')
    $('.moon').css('display', 'block')
    $('.toggle-button').css({ marginLeft: '0' })
    $('.get-started').css('color', 'white')
    $('.get-started').css('border', '')
    $('.get-started').mouseover(function () {
      $(this).css('background-color', '')
    })
    $('.get-started').mouseover(function () {
      $(this).css('color', '')
    })
    $('.get-started').mouseleave(function () {
      $(this).css('background-color', '')
    })
    $('.get-started').mouseleave(function () {
      $(this).css('color', '')
    })
    $('body').css('background-color', '')
    $('.dropdowns').css('background-color', '')
    $('.dropdowns').css('color', 'white')
    $('.to-do-display').css('background-color', '')
    $('.dropdown-menu').css('background-color', '')
    $('.dropdowns').css('background-color', '')
    $('.dropdowns').mouseover(function () {
      $(this).css('background-color', '')
    })
    $('.dropdowns').mouseleave(function () {
      $(this).css('background-color', '')
    })
    $('.dropdowns').mouseover(function () {
      $(this).css('color', '')
    })
    $('.dropdowns').mouseleave(function () {
      $(this).css('color', '')
    })
    $('h5').css('color', '')
    $('h4').css('color', '')
    $('h2').css('color', '')
    $('h1').css('color', '')
    $('b').css('color', '')
    $('i').css('color', '')
    $('#taskscompleted').css('color', '')
    $('.card').css('background-color', '')
    $('.card').css('color', '')
    $('nav').css('background-color', '')
    $('.toggle-button-wrapper').css('background-color', '')
    window.toggle = true
  }
}

const turnBlue = function () {
  $('.get-started').css('color', '#08415C')
  $('.get-started').css('border', 'solid 1px #08415C')
  $('.get-started').mouseover(function () {
    $(this).css('background-color', '#08415C')
  })
  $('.get-started').mouseover(function () {
    $(this).css('color', 'white')
  })
  $('.get-started').mouseleave(function () {
    $(this).css('background-color', '')
  })
  $('.get-started').mouseleave(function () {
    $(this).css('color', '#08415C')
  })
  $('body').css('background-color', '#5B7B7A')
  $('.to-do-display').css('background-color', '#9AB0B7')
  $('.dropdowns').css('background-color', '#063247')
  $('.dropdown-menu').css('background-color', '#063247')
  $('.dropdowns').css('color', 'white')
  $('.dropdowns').mouseover(function () {
    $(this).css('background-color', '#08415C')
  })
  $('.dropdowns').mouseover(function () {
    $(this).css('color', 'white')
  })
  $('.dropdowns').mouseleave(function () {
    $(this).css('background-color', '#063247')
  })
  $('.dropdowns').mouseover(function () {
    $(this).css('color', 'white')
  })
  $('h5').css('color', '#C5C5C5')
  $('h4').css('color', '#08415C')
  $('h2').css('color', '#08415C')
  $('h1').css('color', '#08415C')
  $('b').css('color', '#C5C5C5')
  $('i').css('color', '#C5C5C5')
  $('#taskscompleted').css('color', '#C5C5C5')
  $('.card').css('background-color', '#08415C')
  $('.card').css('color', 'white')
  $('nav').css('background-color', '#08415C')
  $('.sun').css('display', 'block')
  $('.moon').css('display', 'none')
  $('.toggle-button-wrapper').css('background-color', '#5B7B7A')
}

const turnPurple = function () {
  $('.get-started').css('color', '#401F3E')
  $('.get-started').css('border', 'solid 1px #401F3E')
  $('.get-started').mouseover(function () {
    $(this).css('background-color', '#401F3E')
  })
  $('.get-started').mouseover(function () {
    $(this).css('color', 'white')
  })
  $('.get-started').mouseleave(function () {
    $(this).css('background-color', '')
  })
  $('.get-started').mouseleave(function () {
    $(this).css('color', '#401F3E')
  })
  $('body').css('background-color', '#453F78')
  $('.to-do-display').css('background-color', '#759AAB')
  $('.dropdown-menu').css('background-color', '#331831')
  $('.dropdowns').css('background-color', '#331831')
  $('.dropdowns').css('color', 'white')
  $('.dropdowns').mouseover(function () {
    $(this).css('background-color', '#401F3E')
  })
  $('.dropdowns').mouseleave(function () {
    $(this).css('background-color', '#331831')
  })
  $('h5').css('color', '#FAF2A1')
  $('h4').css('color', '#401F3E')
  $('h2').css('color', '#401F3E')
  $('h1').css('color', '#401F3E')
  $('b').css('color', '#FAF2A1')
  $('i').css('color', '#FAF2A1')
  $('#taskscompleted').css('color', '#FAF2A1')
  $('.card').css('background-color', '#401F3E')
  $('.card').css('color', 'white')
  $('nav').css('background-color', '#401F3E')
  $('.sun').css('display', 'block')
  $('.moon').css('display', 'none')
  $('.toggle-button-wrapper').css('background-color', '#453F78')
}

const turnPink = function () {
  $('.get-started').css('color', '#FF69BE')
  $('.get-started').css('border', 'solid 1px #FF69BE')
  $('.get-started').mouseover(function () {
    $(this).css('background-color', '#FF69BE')
  })
  $('.get-started').mouseover(function () {
    $(this).css('color', 'white')
  })
  $('.get-started').mouseleave(function () {
    $(this).css('background-color', '')
  })
  $('.get-started').mouseleave(function () {
    $(this).css('color', '#FF69BE')
  })
  $('body').css('background-color', '#FF69BE')
  $('.dropdowns').css('background-color', '#d6579f')
  $('.dropdowns').css('color', 'white')
  $('.to-do-display').css('background-color', '#75A0C1')
  $('.dropdown-menu').css('background-color', '#d6579f')
  $('.dropdowns').css('background-color', '#d6579f')
  $('.dropdowns').mouseover(function () {
    $(this).css('background-color', '#FF69BE')
  })
  $('.dropdowns').mouseleave(function () {
    $(this).css('background-color', '#d6579f')
  })
  $('h5').css('color', '#FAF2A1')
  $('h4').css('color', '#FF69BE')
  $('h2').css('color', '#FF69BE')
  $('h1').css('color', '#FF69BE')
  $('b').css('color', '#FAF2A1')
  $('i').css('color', '#FAF2A1')
  $('#taskscompleted').css('color', '#FAF2A1')
  $('.card').css('background-color', '#FF69BE')
  $('.card').css('color', 'white')
  $('nav').css('background-color', '#FF69BE')
  $('.toggle-button-wrapper').css('background-color', '#F7ABD1')
}

module.exports = {
  turnCSS,
  turnBlue,
  turnPurple,
  turnPink
}
