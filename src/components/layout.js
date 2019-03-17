import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(0.6),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            display: 'flex',
            marginLeft: '50px',
            alignItems: 'center',
            height: '100%',
            fontWeight: '200',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h1
          style={{
            ...scale(0.6),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            display: 'flex',
            marginLeft: '50px',
            alignItems: 'center',
            height: '100%',
            fontWeight: '200',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '60px',
            backgroundColor: 'rgba(28,28,28,0.7)',
            zIndex: '1',
            webkitBackdropFilter: 'blur(50px)',
            borderBottom: '1px solid rgba(50,50,50,0.7)',
          }}
        >{header}</header>
        <main
          style={{
            marginTop: '60px',
          }}
        >{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
