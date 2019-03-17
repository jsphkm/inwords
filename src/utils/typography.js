import Typography from "typography"
//import Wordpress2016 from "typography-theme-wordpress-2016"
import bootstrapTheme from 'typography-theme-bootstrap'

bootstrapTheme.overrideThemeStyles = () => {
  return {
    body: {
      backgroundColor: '#1a1a1a',
    },
    'h1, h2, h3, h4, h5, h6, li, code': {
      color: 'white',
    },
    // h1: {
    //   color: '#d62',
    // },
    'p': {
      color: '#bbb',
      fontSize: '1.1rem',
    },
    small: {
      color: '#37f',
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },

  }
}

//delete Wordpress2016.googleFonts

const typography = new Typography(bootstrapTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
