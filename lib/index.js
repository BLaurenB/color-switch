import './stylesheets/styles.scss'
import COLORS from './data/colors'



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
  event.preventDefault()
  let possibleMatches = Array.from($('textarea').val()).join('').split(' ')
  console.log(possibleMatches)
  let matched
  possibleMatches.reduce(function (matched, elem) {
    console.log(COLORS[elem])
    if (COLORS[elem]) {
      matched[elem] = COLORS[elem]
    }
  }, matched)
// get matches, then append the matches as swatches
return matched

})


getTopColor()
