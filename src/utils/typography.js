import Typography from "typography"
//import Wordpress2016 from "typography-theme-wordpress-2016"
import bootstrapTheme from 'typography-theme-bootstrap'

bootstrapTheme.overrideThemeStyles = () => {
  return {
    body: {
      backgroundColor: '#1a1a1a',
    },
    'h1, h2, h3, h4, h5, h6, a, li, code, footer': {
      color: '#e5e5e5',
    },
    // h1: {
    //   color: '#d62',
    // },
    p: {
      color: '#bbb',
    },
    small: {
      color: '#37f',
    },
    a: {
      textDecoration: 'none',
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },

  }
}

//delete Wordpress2016.googleFonts
delete bootstrapTheme.googleFonts

const typography = new Typography(bootstrapTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
