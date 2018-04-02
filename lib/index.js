import './stylesheets/styles.scss'
import COLORS from './data/colors'




const getTopColor = () => {
  fetch('https://color-swatch-api.herokuapp.com/api/v1/top_color')
  .then(response => response.json())
  .then(color => {
    $('.top-color').append(`${color.value}, count: ${color.color_count}`)
  })

}

getTopColor()
