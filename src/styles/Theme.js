import React from 'react'
import {ThemeProvider} from 'styled-components'


const darkTheme = {
  colors: {
    complete: "#0f0",
    error: "#fa2e46a4",
    correct: "#0f0",
    default: "#ABF0F9",
    highlight: "#ABF0F9",
    half_life: "#fe7a15",
    orange: "#fe7a15",
    yellow_ultra: "#ffcc00",
    pink_ultra: "#f92aad",
    sand: "#e7d391",
    color_rare: "#00aeff",
    cyan_ultra: "#58c7e0",
    infra_purple: "#BA87FF",
    purple_ultra: "#b141f1",
    green_ultra: "#54e484",
    color_grey: "rgba(255,255,255,0.8)",
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
}



const Theme = ({children}) => (
  <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
) 

export default Theme;