import Typography from "typography"
//import Wordpress2016 from "typography-theme-wordpress-2016"
import bootstrapTheme from 'typography-theme-bootstrap'
import './global.css';

bootstrapTheme.overrideThemeStyles = () => {
  return {
    // 'h1, h2, h3, h4, h5, h6, a, li, code, footer': {
    //   color: '#e5e5e5',
    // },
    'h1, h2, h3, h4, h5, h6': {
      color: 'white',
    },

    p: {
      // color: 'white',
      lineHeight: '1.9rem',
      fontSize: '1.1rem',
    },
    
    body: {
      color: 'var(--offWhite)',
    },
    // small: {
    //   color: '#37f',
    // },

    hr: {
      background: 'var(--hr)',
    },

    a: {
      color: 'var(--textLink)',
      textDecoration: 'none',
    },
    'a:hover': {
      textDecoration: 'underline',
    },

    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },

    blockquote: {
      margin: '1.3125rem -1.3125rem',
      padding: '1.3125rem',
      borderLeft: '0.25rem solid #dfbb04',
      backgroundColor: 'rgba(255,200,80, 0.1)',
      color: 'rgba(255,255,255,1)',
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
