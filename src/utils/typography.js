import Typography from "typography"
//import Wordpress2016 from "typography-theme-wordpress-2016"
import bootstrapTheme from 'typography-theme-bootstrap'
import './global.css';

bootstrapTheme.overrideThemeStyles = () => {
  return {

    'h1, h2, h3, h4, h5, h6': {
      marginBottom: '1rem',
    },
    
    p: {
      lineHeight: '1.5rem',
    },
    
    body: {
      color: 'var(--textColor)',
    },

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
      margin: '1.3125rem -1.3125rem 2.3125rem -1.3125rem',
      padding: '1rem 1.1rem',
      borderLeft: '0.25rem solid #fbc420',
      opacity: '0.9',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.4)',
      fontSize: '1rem',
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
