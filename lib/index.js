import './stylesheets/styles.scss'
import COLORS from './data/colors'
let matched
let colorToPost


// Iteration 1
const getTopColor = () => {
  fetch('https://color-swatch-api.herokuapp.com/api/v1/top_color')
  .then(response => response.json())
  .then(color => {
    $('.top-color').append(`${color.value}, count: ${color.color_count}`)
  })

}

//Iteration2
//assume a user posts words separated by spaces. Check the words to see if there is a color that matches the COLORS library. Then post a swatch of that color.
// so, on button click, take the info from the textarea
//Each color swatch should have a background color of its text's correlating hex code,
// e.g., "red" => `<div class="swatch" style="background-color:#FF0000;"></div>`

$('button').on("click", function(event) {
  formIntake()
})

$(document).keypress(function(event) {
  if (event.which === 13) {
  formIntake()
  }
})

const formIntake = () => {
  event.preventDefault()
  let possibleMatches = Array.from($('textarea').val()).join('').split(' ')
  let matched = possibleMatches.reduce(function (newObj, elem) {
    if (COLORS[elem]) {
      newObj[elem] = COLORS[elem]
      postColors(elem)
    } else if (COLORS[elem.toLowerCase()]) {
      postColors(elem)
    }

    return newObj
  }, {})
  Object.keys(matched).forEach(function(key) {
    $('.colorized-text').append(`
      <div class="swatch" style="background-color:${matched[key]};"></div>
      `)

  })
}


// story 3 post the colors to the heroku database:

//make an object like color: {value: array[i]}

const colorsToPost = (key) => {
  return colorToPost = {
    color: {
      value: key
    }
  }
}


const postColors = (key) => {
  fetch('https://color-swatch-api.herokuapp.com/api/v1/colors', {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(colorsToPost(key))
  })
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse))
}

const postData =


getTopColor()
